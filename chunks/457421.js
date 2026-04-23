"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153);
let s = {},
    a = "NOT_FETCHED";
class o extends r.Ay.Store {
    static displayName = "CollectiblesMarketingsStore";
    getMarketingBySurface(e) {
        return s[e];
    }
    get fetchState() {
        return a;
    }
}
let l = new o(i.h, {
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
