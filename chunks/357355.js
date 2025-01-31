n.d(t, { Z: () => c });
var i = n(442837),
    r = n(570140);
let a = {
    fetched: !1,
    affinities: []
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
class u extends i.ZP.Store {
    get hasFetched() {
        return a.fetched;
    }
    get affinities() {
        return a.affinities;
    }
}
let c = new u(r.Z, {
    BILLING_NITRO_AFFINITY_FETCHED: s,
    BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: o,
    LOGOUT: l
});
