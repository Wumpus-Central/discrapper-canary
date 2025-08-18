n.d(t, {
    Yn: () => u,
    tJ: () => d,
}),
    n(415506);
var r = n(664751),
    i = n(544891),
    l = n(710845),
    o = n(70956),
    a = n(981631);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class c {
    async fetch(e, t, n) {
        if (!this.isCanceled)
            try {
                let i = await this.makeRequest({ rejectWithError: !1 });
                if (null == i || this.isCanceled) return;
                if (200 === i.status) e(i);
                else if (202 === i.status) {
                    var r;
                    if (
                        ((this.query.attempts = (null != (r = this.query.attempts) ? r : 0) + 1),
                        this.query.attempts > 5)
                    )
                        return;
                    let l = parseInt(i.headers["retry-after"]);
                    (this.retryDelay = isNaN(l) || 0 === l ? 5000 : l * o.Z.Millis.SECOND),
                        this.retryLater(e, t, n),
                        t(i);
                }
            } catch (e) {
                new l.Z("SearchFetcher").error(e), n(e);
            }
    }
    cancel() {
        (this.isCanceled = !0), null != this.indexingPollId && clearTimeout(this.indexingPollId);
    }
    retryLater(e, t, n) {
        null != this.indexingPollId && clearTimeout(this.indexingPollId),
            (this.indexingPollId = setTimeout(this.fetch.bind(this, e, t, n), this.retryDelay));
    }
    constructor(e, t, n) {
        s(this, "indexingPollId", void 0),
            s(this, "searchId", void 0),
            s(this, "searchType", void 0),
            s(this, "query", void 0),
            s(this, "retryDelay", void 0),
            s(this, "isCanceled", !1),
            (this.searchId = e),
            (this.searchType = t),
            (this.query = n);
    }
}
class u extends c {
    getEndpoint() {
        switch (this.searchType) {
            case a.aib.FAVORITES:
                return a.ANM.SEARCH_FAVORITES;
            case a.aib.GUILD:
                if (null == this.searchId || "" === this.searchId) return;
                return a.ANM.SEARCH_GUILD(this.searchId);
            case a.aib.CHANNEL:
                if (null == this.searchId || "" === this.searchId) return;
                return a.ANM.SEARCH_CHANNEL(this.searchId);
            default:
                throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType));
        }
    }
    makeRequest(e) {
        let { rejectWithError: t } = e,
            n = this.getEndpoint();
        return null == n
            ? null
            : i.tn.get({
                  url: n,
                  query: r.stringify(this.query),
                  oldFormErrors: !0,
                  rejectWithError: t,
              });
    }
}
class d extends c {
    getEndpoint() {
        switch (this.searchType) {
            case a.aib.DMS:
                return a.ANM.SEARCH_TABS_DMS;
            case a.aib.GUILD_CHANNEL:
            case a.aib.GUILD:
            case a.aib.THREAD:
                if (null == this.searchId || "" === this.searchId) return;
                return a.ANM.SEARCH_TABS_GUILD(this.searchId);
            case a.aib.CHANNEL:
                if (null == this.searchId || "" === this.searchId) return;
                return a.ANM.SEARCH_TABS_CHANNEL(this.searchId);
            default:
                throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType));
        }
    }
    makeRequest(e) {
        let { rejectWithError: t } = e,
            n = this.getEndpoint();
        return null == n
            ? null
            : i.tn.post({
                  url: n,
                  body: this.payload,
                  oldFormErrors: !0,
                  rejectWithError: t,
              });
    }
    constructor(e, t, n, r) {
        super(e, t, n), s(this, "payload", void 0), (this.payload = r);
    }
}
