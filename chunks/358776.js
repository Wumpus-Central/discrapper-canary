"use strict";
n.d(t, { Bv: () => _, SB: () => u, SV: () => d, _A: () => s, pC: () => a, ri: () => l });
var i = n(945810);
let r = (0, i.mj)({
        name: "2026-02-user-settings-redesign-4b",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    s = (e) => r.useConfig({ location: e }).enabled,
    a = (e) => r.getConfig({ location: e }).enabled,
    o = (0, i.mj)({
        name: "2026-04-user-settings-redesign-4c",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    l = (e) => o.useConfig({ location: e }).enabled,
    u = (e) => o.getConfig({ location: e }).enabled,
    c = (0, i.mj)({
        name: "2026-05-user-settings-redesign-4d",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    d = (e) => c.useConfig({ location: e }).enabled,
    _ = (e) => c.getConfig({ location: e }).enabled;
