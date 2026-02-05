"use strict";
n.d(t, { A: () => d });
var r = n(311907),
    i = n(73153);
let a = {},
    s = "NOT_FETCHED",
    o = () => {
        s = "FETCHING";
    },
    l = (e) => {
        (a = e.marketings.marketingsBySurfaces), (s = "FETCHED");
    },
    u = () => {
        (a = {}), (s = "NOT_FETCHED");
    };
class c extends r.Ay.Store {
    static displayName = "CollectiblesMarketingsStore";
    getMarketingBySurface(e) {
        return a[e];
    }
    get fetchState() {
        return s;
    }
}
let d = new c(i.h, { COLLECTIBLES_MARKETING_FETCH: o, COLLECTIBLES_MARKETING_FETCH_SUCCESS: l, LOGOUT: u });
