n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let a = {},
    s = "NOT_FETCHED";
class l extends i.Ay.Store {
    static displayName = "CollectiblesMarketingsStore";
    getMarketingBySurface(e) {
        return a[e];
    }
    get fetchState() {
        return s;
    }
}
let o = new l(r.h, {
    COLLECTIBLES_MARKETING_FETCH: function () {
        s = "FETCHING";
    },
    COLLECTIBLES_MARKETING_FETCH_SUCCESS: function (e) {
        (a = e.marketings.marketingsBySurfaces), (s = "FETCHED");
    },
    LOGOUT: function () {
        (a = {}), (s = "NOT_FETCHED");
    },
});
