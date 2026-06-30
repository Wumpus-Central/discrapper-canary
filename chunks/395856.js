r.d(t, { $: () => o, k: () => s });
var n = r(64700);
let l = (0, r(945810).mj)({
        name: "2026-06-improved-shop-loading",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    i = n.createContext(null),
    s = i.Provider,
    o = (e) => {
        let t = n.useContext(i),
            r = l.useConfig({ location: e }).enabled;
        return t ?? r;
    };
