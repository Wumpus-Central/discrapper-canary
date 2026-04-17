"use strict";
n.d(t, { A: () => d });
var r = n(311907),
    i = n(73153);
let s = { fetched: !1, fetching: !1, affinities: [] };
function a(e) {
    let {} = e;
    s.fetching = !0;
}
function o(e) {
    let {} = e;
    (s.fetched = !0), (s.fetching = !1);
}
function l(e) {
    let { res: t } = e;
    s.affinities = t;
}
function u() {
    (s.fetched = !1), (s.fetching = !1), (s.affinities = []);
}
class c extends r.Ay.Store {
    get hasFetched() {
        return s.fetched;
    }
    get isFetching() {
        return s.fetching;
    }
    get affinities() {
        return s.affinities;
    }
}
let d = new c(i.h, {
    BILLING_PREMIUM_AFFINITY_FETCH_START: a,
    BILLING_PREMIUM_AFFINITY_FETCHED: o,
    BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED: l,
    LOGOUT: u,
});
