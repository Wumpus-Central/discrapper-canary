"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153);
let s = { fetched: !1, affinities: [] };
function a(e) {
    let {} = e;
    s.fetched = !0;
}
function o(e) {
    let { res: t } = e;
    s.affinities = t;
}
function l() {
    (s.fetched = !1), (s.affinities = []);
}
class u extends r.Ay.Store {
    get hasFetched() {
        return s.fetched;
    }
    get affinities() {
        return s.affinities;
    }
}
let c = new u(i.h, { BILLING_NITRO_AFFINITY_FETCHED: a, BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: o, LOGOUT: l });
