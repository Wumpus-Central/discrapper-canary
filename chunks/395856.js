n.d(t, { $: () => a, k: () => l });
var r = n(64700);
let i = (0, n(945810).mj)({
        name: "2026-06-improved-shop-loading",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    s = r.createContext(null),
    l = s.Provider;
function a(e) {
    let t = r.useContext(s),
        n = i.useConfig({ location: e }).enabled;
    return t ?? n;
}
