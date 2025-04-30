n.d(t, { Z: () => u });
var r = n(442837),
    i = n(570140);
let o = {
    fetched: !1,
    affinities: []
};
function a(e) {
    let {} = e;
    o.fetched = !0;
}
function s(e) {
    let { res: t } = e;
    o.affinities = t;
}
function l() {
    (o.fetched = !1), (o.affinities = []);
}
class c extends r.ZP.Store {
    get hasFetched() {
        return o.fetched;
    }
    get affinities() {
        return o.affinities;
    }
}
let u = new c(i.Z, {
    BILLING_NITRO_AFFINITY_FETCHED: a,
    BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: s,
    LOGOUT: l
});
