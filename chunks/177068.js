"use strict";
n.d(t, { DX: () => d, MS: () => c });
var i = n(488428),
    r = n(636537),
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
                let i = await this.makeRequest({ rejectWithError: !1 });
                if (null == i || this.isCanceled) return;
                if (200 === i.status) e(i);
                else if (202 === i.status) {
                    if (((this.query.attempts = (this.query.attempts ?? 0) + 1), this.query.attempts > 5)) return;
                    let r = parseInt(i.headers["retry-after"]);
                    (this.retryDelay = isNaN(r) || 0 === r ? 5e3 : r * o.A.Millis.SECOND),
                        this.retryLater(e, t, n),
                        t(i);
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
class c extends u {
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
            : r.Bo.get({ url: n, query: i.stringify(this.query), oldFormErrors: !0, rejectWithError: t });
    }
}
class d extends u {
    payload;
    constructor(e, t, n, i) {
        super(e, t, n), (this.payload = i);
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
        return null == n ? null : r.Bo.post({ url: n, body: this.payload, oldFormErrors: !0, rejectWithError: t });
    }
}
