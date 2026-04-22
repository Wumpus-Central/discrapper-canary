"use strict";
n.d(t, { DX: () => c, MS: () => d });
var r = n(488428),
    i = n(562465),
    s = n(626584),
    a = n(734057),
    o = n(927813),
    l = n(652215);
class u {
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
                    if (((this.query.attempts = (this.query.attempts ?? 0) + 1), this.query.attempts > 5)) return;
                    let i = parseInt(r.headers["retry-after"]);
                    (this.retryDelay = isNaN(i) || 0 === i ? 5e3 : i * o.A.Millis.SECOND),
                        this.retryLater(e, t, n),
                        t(r);
                }
            } catch (e) {
                new s.A("SearchFetcher").error(e), n(e);
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
class d extends u {
    getEndpoint() {
        switch (this.searchType) {
            case l.I4_.GUILD:
                if (null == this.searchId || "" === this.searchId) return;
                return l.Rsh.SEARCH_GUILD(this.searchId);
            case l.I4_.GUILD_CHANNEL: {
                if (null == this.searchId || "" === this.searchId) return;
                let e = a.A.getChannel(this.searchId),
                    t = e?.getGuildId();
                if (null == t) return;
                return l.Rsh.SEARCH_GUILD(t);
            }
            case l.I4_.CHANNEL:
                if (null == this.searchId || "" === this.searchId) return;
                return l.Rsh.SEARCH_CHANNEL(this.searchId);
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
class c extends u {
    payload;
    constructor(e, t, n, r) {
        super(e, t, n), (this.payload = r);
    }
    getEndpoint() {
        switch (this.searchType) {
            case l.I4_.DMS:
                return l.Rsh.SEARCH_TABS_DMS;
            case l.I4_.GUILD_CHANNEL:
            case l.I4_.GUILD:
            case l.I4_.THREAD:
                if (null == this.searchId || "" === this.searchId) return;
                return l.Rsh.SEARCH_TABS_GUILD(this.searchId);
            case l.I4_.CHANNEL:
                if (null == this.searchId || "" === this.searchId) return;
                return l.Rsh.SEARCH_TABS_CHANNEL(this.searchId);
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
