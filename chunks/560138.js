n.d(t, { A: () => a });
var i = n(311907),
    l = n(73153);
let r = { fetched: !1, affinities: [] };
class s extends i.Ay.Store {
    get hasFetched() {
        return r.fetched;
    }
    get affinities() {
        return r.affinities;
    }
}
let a = new s(l.h, {
    BILLING_NITRO_AFFINITY_FETCHED: function (e) {
        let {} = e;
        r.fetched = !0;
    },
    BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function (e) {
        let { res: t } = e;
        r.affinities = t;
    },
    LOGOUT: function () {
        (r.fetched = !1), (r.affinities = []);
    },
});
