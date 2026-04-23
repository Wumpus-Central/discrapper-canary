r.d(t, { A: () => d });
var a = r(311907),
    n = r(73153);
let l = {};
class s extends a.Ay.Store {
    static displayName = "EULAStore";
    getEULA(e) {
        return l[e];
    }
}
let d = new s(n.h, {
    EULA_FETCH_SUCCESS: function (e) {
        let { eula: t } = e;
        l[t.id] = t;
    },
});
