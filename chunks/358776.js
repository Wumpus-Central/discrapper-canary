"use strict";
n.d(t, { Ci: () => a, _A: () => l, bp: () => s, pC: () => u });
var r = n(945810);
let i = (0, r.mj)({
        name: "2026-02-user-settings-redesign-4a",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    s = (e) => i.useConfig({ location: e }).enabled,
    a = (e) => i.getConfig({ location: e }).enabled,
    o = (0, r.mj)({
        name: "2026-02-user-settings-redesign-4b",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    l = (e) => o.useConfig({ location: e }).enabled,
    u = (e) => o.getConfig({ location: e }).enabled;
