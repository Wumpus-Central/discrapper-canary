"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let s = {},
    a = "NOT_FETCHED";
class o extends i.Ay.Store {
    static displayName = "CollectiblesMarketingsStore";
    getMarketingBySurface(e) {
        return s[e];
    }
    get fetchState() {
        return a;
    }
}
let l = new o(r.h, {
    COLLECTIBLES_MARKETING_FETCH: function () {
        a = "FETCHING";
    },
    COLLECTIBLES_MARKETING_FETCH_SUCCESS: function (e) {
        (s = e.marketings.marketingsBySurfaces), (a = "FETCHED");
    },
    LOGOUT: function () {
        (s = {}), (a = "NOT_FETCHED");
    },
});
