n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153);
let a = {
    fetched: !1,
    affinities: [],
};
function s(e) {
    let {} = e;
    a.fetched = !0;
}
function o(e) {
    let { res: t } = e;
    a.affinities = t;
}
function l() {
    (a.fetched = !1), (a.affinities = []);
}
class c extends r.Ay.Store {
    get hasFetched() {
        return a.fetched;
    }
    get affinities() {
        return a.affinities;
    }
}
let u = new c(i.h, {
    BILLING_NITRO_AFFINITY_FETCHED: s,
    BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: o,
    LOGOUT: l,
});
