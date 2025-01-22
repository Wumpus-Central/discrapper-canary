var i = r(442837),
    a = r(570140);
let o = {
    fetched: !1,
    affinities: []
};
function s(e) {
    let {} = e;
    o.fetched = !0;
}
function l(e) {
    let { res: n } = e;
    o.affinities = n;
}
function u() {
    (o.fetched = !1), (o.affinities = []);
}
class c extends i.ZP.Store {
    get hasFetched() {
        return o.fetched;
    }
    get affinities() {
        return o.affinities;
    }
}
n.Z = new c(a.Z, {
    BILLING_NITRO_AFFINITY_FETCHED: s,
    BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: l,
    LOGOUT: u
});
