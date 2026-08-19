n.d(t, { $: () => a, k: () => l });
var i = n(582128);
let r = (0, n(945810).mj)({
        name: "2026-06-improved-shop-loading",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    s = i.createContext(null),
    l = s.Provider;
function a(e) {
    let t = i.useContext(s),
        n = r.useConfig({ location: e }).enabled;
    return t ?? n;
}
