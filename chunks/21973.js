n.d(a, { lX: () => t, W1: () => o });
var i = n(945810);
let d = (0, i.mj)({
        name: "2026-03-private-profiles-strict",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 }, 3: { enabled: !0 } },
    }),
    l = (0, i.mj)({
        name: "2026-02-private-profiles",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    t = (e) => {
        let a = l.useConfig({ location: e }).enabled,
            n = d.useConfig({ location: e }).enabled;
        return a || n;
    },
    o = (e) => l.getConfig({ location: e }).enabled || d.getConfig({ location: e }).enabled;
