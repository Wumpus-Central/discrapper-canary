s.d(t, { DX: () => u, MS: () => d });
var r = s(488428),
    h = s(636537),
    i = s(626584),
    a = s(734057),
    l = s(927813),
    n = s(652215);
class c {
    indexingPollId;
    searchId;
    searchType;
    query;
    retryDelay;
    isCanceled = !1;
    constructor(e, t, s) {
        ((this.searchId = e), (this.searchType = t), (this.query = s));
    }
    async fetch(e, t, s) {
        if (!this.isCanceled)
            try {
                let r = await this.makeRequest({ rejectWithError: !1 });
                if (null == r || this.isCanceled) return;
                if (200 === r.status) e(r);
                else if (202 === r.status) {
                    if (((this.query.attempts = (this.query.attempts ?? 0) + 1), this.query.attempts > 5)) return;
                    let h = parseInt(r.headers["retry-after"]);
                    ((this.retryDelay = isNaN(h) || 0 === h ? 5e3 : h * l.A.Millis.SECOND),
                        this.retryLater(e, t, s),
                        t(r));
                }
            } catch (e) {
                (new i.A("SearchFetcher").error(e), s(e));
            }
    }
    cancel() {
        ((this.isCanceled = !0), null != this.indexingPollId && clearTimeout(this.indexingPollId));
    }
    retryLater(e, t, s) {
        (null != this.indexingPollId && clearTimeout(this.indexingPollId),
            (this.indexingPollId = setTimeout(this.fetch.bind(this, e, t, s), this.retryDelay)));
    }
}
class d extends c {
    getEndpoint() {
        switch (this.searchType) {
            case n.I4_.GUILD:
                if (null == this.searchId || "" === this.searchId) return;
                return n.Rsh.SEARCH_GUILD(this.searchId);
            case n.I4_.GUILD_CHANNEL: {
                if (null == this.searchId || "" === this.searchId) return;
                let e = a.A.getChannel(this.searchId),
                    t = e?.getGuildId();
                if (null == t) return;
                return n.Rsh.SEARCH_GUILD(t);
            }
            case n.I4_.CHANNEL:
                if (null == this.searchId || "" === this.searchId) return;
                return n.Rsh.SEARCH_CHANNEL(this.searchId);
            default:
                throw Error(`[SearchFetcher] Unhandled search type: ${this.searchType}`);
        }
    }
    makeRequest(e) {
        let { rejectWithError: t } = e,
            s = this.getEndpoint();
        return null == s
            ? null
            : h.Bo.get({ url: s, query: r.stringify(this.query), oldFormErrors: !0, rejectWithError: t });
    }
}
class u extends c {
    payload;
    constructor(e, t, s, r) {
        (super(e, t, s), (this.payload = r));
    }
    getEndpoint() {
        switch (this.searchType) {
            case n.I4_.DMS:
                return n.Rsh.SEARCH_TABS_DMS;
            case n.I4_.GUILD_CHANNEL:
            case n.I4_.GUILD:
            case n.I4_.THREAD:
                if (null == this.searchId || "" === this.searchId) return;
                return n.Rsh.SEARCH_TABS_GUILD(this.searchId);
            case n.I4_.CHANNEL:
                if (null == this.searchId || "" === this.searchId) return;
                return n.Rsh.SEARCH_TABS_CHANNEL(this.searchId);
            default:
                throw Error(`[SearchFetcher] Unhandled search type: ${this.searchType}`);
        }
    }
    makeRequest(e) {
        let { rejectWithError: t } = e,
            s = this.getEndpoint();
        return null == s ? null : h.Bo.post({ url: s, body: this.payload, oldFormErrors: !0, rejectWithError: t });
    }
}
