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
    COLLECTIBLES_MARKETING_FETCH: () => {
        a = "FETCHING";
    },
    COLLECTIBLES_MARKETING_FETCH_SUCCESS: (e) => {
        (s = e.marketings.marketingsBySurfaces), (a = "FETCHED");
    },
    LOGOUT: () => {
        (s = {}), (a = "NOT_FETCHED");
    },
});
