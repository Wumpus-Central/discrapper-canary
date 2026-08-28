t.d(n, { $: () => u, k: () => o });
var i = t(582128);
let a = (0, t(945810).mj)({
        name: "2026-06-improved-shop-loading",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    r = i.createContext(null),
    o = r.Provider;
function u(e) {
    let n = i.useContext(r),
        t = a.useConfig({ location: e }).enabled;
    return n ?? t;
}
