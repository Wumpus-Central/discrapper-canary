t.d(n, { Bv: () => b, SB: () => r, _A: () => s, pC: () => l, ri: () => o });
var a = t(945810);
let i = (0, a.mj)({
        name: "2026-02-user-settings-redesign-4b",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    s = (e) => i.useConfig({ location: e }).enabled,
    l = (e) => i.getConfig({ location: e }).enabled,
    d = (0, a.mj)({
        name: "2026-04-user-settings-redesign-4c",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    o = (e) => d.useConfig({ location: e }).enabled,
    r = (e) => d.getConfig({ location: e }).enabled,
    g = (0, a.mj)({
        name: "2026-05-user-settings-redesign-4d",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    b = (e) => g.getConfig({ location: e }).enabled;
