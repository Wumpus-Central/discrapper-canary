n.d(e, { A: () => d });
var a = n(311907),
    i = n(73153);
let r = {};
class s extends a.Ay.Store {
    static displayName = "EULAStore";
    getEULA(t) {
        return r[t];
    }
}
let d = new s(i.h, {
    EULA_FETCH_SUCCESS: function (t) {
        let { eula: e } = t;
        r[e.id] = e;
    },
});
