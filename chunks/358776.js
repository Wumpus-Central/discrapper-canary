"use strict";
n.d(t, { Ci: () => u, WJ: () => s, _A: () => d, bp: () => l, dk: () => a, pC: () => _ });
var r = n(945810);
let i = (0, r.mj)({
        name: "2025-12-user-settings-redesign-3",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    a = (e) => i.useConfig({ location: e }).enabled,
    s = (e) => i.getConfig({ location: e }).enabled,
    o = (0, r.mj)({
        name: "2026-02-user-settings-redesign-4a",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    l = (e) => o.useConfig({ location: e }).enabled,
    u = (e) => o.getConfig({ location: e }).enabled,
    c = (0, r.mj)({
        name: "2026-02-user-settings-redesign-4b",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    d = (e) => c.useConfig({ location: e }).enabled,
    _ = (e) => c.getConfig({ location: e }).enabled;
