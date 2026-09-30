a.d(n, { $: () => r, k: () => o });
var t = a(582128);
let d = (0, a(945810).mj)({
        name: "2026-06-improved-shop-loading",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    i = t.createContext(null),
    o = i.Provider;
function r(e) {
    let n = t.useContext(i),
        a = d.useConfig({ location: e }).enabled;
    return n ?? a;
}
