"use strict";
n.d(t, { DX: () => _, MS: () => d });
var r = n(488428),
    i = n(562465),
    a = n(626584),
    s = n(927813),
    o = n(652215);
let l = 5e3,
    u = 5;
class c {
    indexingPollId;
    searchId;
    searchType;
    query;
    retryDelay;
    isCanceled = !1;
    constructor(e, t, n) {
        (this.searchId = e), (this.searchType = t), (this.query = n);
    }
    async fetch(e, t, n) {
        if (!this.isCanceled)
            try {
                let r = await this.makeRequest({ rejectWithError: !1 });
                if (null == r || this.isCanceled) return;
                if (200 === r.status) e(r);
                else if (202 === r.status) {
                    if (((this.query.attempts = (this.query.attempts ?? 0) + 1), this.query.attempts > u)) return;
                    let i = parseInt(r.headers["retry-after"]);
                    (this.retryDelay = isNaN(i) || 0 === i ? l : i * s.A.Millis.SECOND), this.retryLater(e, t, n), t(r);
                }
            } catch (e) {
                new a.A("SearchFetcher").error(e), n(e);
            }
    }
    cancel() {
        (this.isCanceled = !0), null != this.indexingPollId && clearTimeout(this.indexingPollId);
    }
    retryLater(e, t, n) {
        null != this.indexingPollId && clearTimeout(this.indexingPollId),
            (this.indexingPollId = setTimeout(this.fetch.bind(this, e, t, n), this.retryDelay));
    }
}
class d extends c {
    getEndpoint() {
        switch (this.searchType) {
            case o.I4_.FAVORITES:
                return o.Rsh.SEARCH_FAVORITES;
            case o.I4_.GUILD:
                if (null == this.searchId || "" === this.searchId) return;
                return o.Rsh.SEARCH_GUILD(this.searchId);
            case o.I4_.CHANNEL:
                if (null == this.searchId || "" === this.searchId) return;
                return o.Rsh.SEARCH_CHANNEL(this.searchId);
            default:
                throw Error(`[SearchFetcher] Unhandled search type: ${this.searchType}`);
        }
    }
    makeRequest(e) {
        let { rejectWithError: t } = e,
            n = this.getEndpoint();
        return null == n
            ? null
            : i.Bo.get({ url: n, query: r.stringify(this.query), oldFormErrors: !0, rejectWithError: t });
    }
}
class _ extends c {
    payload;
    constructor(e, t, n, r) {
        super(e, t, n), (this.payload = r);
    }
    getEndpoint() {
        switch (this.searchType) {
            case o.I4_.DMS:
                return o.Rsh.SEARCH_TABS_DMS;
            case o.I4_.GUILD_CHANNEL:
            case o.I4_.GUILD:
            case o.I4_.THREAD:
                if (null == this.searchId || "" === this.searchId) return;
                return o.Rsh.SEARCH_TABS_GUILD(this.searchId);
            case o.I4_.CHANNEL:
                if (null == this.searchId || "" === this.searchId) return;
                return o.Rsh.SEARCH_TABS_CHANNEL(this.searchId);
            default:
                throw Error(`[SearchFetcher] Unhandled search type: ${this.searchType}`);
        }
    }
    makeRequest(e) {
        let { rejectWithError: t } = e,
            n = this.getEndpoint();
        return null == n ? null : i.Bo.post({ url: n, body: this.payload, oldFormErrors: !0, rejectWithError: t });
    }
}
