n.d(t, { A: () => l });
var i = n(17928),
    r = n(73153);
let a = new Map();
class s extends i.Ay.Store {
    getPolicy(e) {
        return a.get(e) ?? null;
    }
}
let l = new s(r.h, {
    EMBEDDED_APP_CSP_FETCH_SUCCESS: function (e) {
        let { routerOrigin: t, policy: n } = e;
        a.set(t, n);
    },
});
