n.d(t, { A: () => c });
var i = n(17928),
    r = n(73153);
let a = { marketingsBySurfaces: null, fetchedAt: null },
    s = {},
    l = "NOT_FETCHED",
    o = a;
class d extends i.Ay.PersistedStore {
    static displayName = "CollectiblesMarketingsStore";
    static persistKey = "CollectiblesMarketingsStore";
    initialize(e) {
        o = { marketingsBySurfaces: e?.marketingsBySurfaces ?? null, fetchedAt: e?.fetchedAt ?? null };
    }
    getState() {
        return o;
    }
    getMarketingBySurface(e) {
        return s[e];
    }
    get fetchState() {
        return l;
    }
    getCachedMarketingsBySurfaces(e) {
        let { marketingsBySurfaces: t, fetchedAt: n } = o;
        if (null == t || null == n) return null;
        let i = Date.now() - n;
        return i < 0 || i >= e ? null : t;
    }
}
let c = new d(r.h, {
    COLLECTIBLES_MARKETING_FETCH: function () {
        l = "FETCHING";
    },
    COLLECTIBLES_MARKETING_FETCH_SUCCESS: function (e) {
        ((s = e.marketings.marketingsBySurfaces),
            (l = "FETCHED"),
            (o = { marketingsBySurfaces: e.marketings.marketingsBySurfaces, fetchedAt: Date.now() }));
    },
    COLLECTIBLES_MARKETING_CACHE_RESTORED: function (e) {
        ((s = e.marketings.marketingsBySurfaces), (l = "FETCHED"));
    },
    LOGOUT: function () {
        ((s = {}), (l = "NOT_FETCHED"), (o = a));
    },
});
