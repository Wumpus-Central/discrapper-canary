"use strict";
n.d(t, { Bv: () => u, SB: () => a, SV: () => l, ri: () => s });
var i = n(945810);
let r = (0, i.mj)({
        name: "2026-04-user-settings-redesign-4c",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    s = (e) => r.useConfig({ location: e }).enabled,
    a = (e) => r.getConfig({ location: e }).enabled,
    o = (0, i.mj)({
        name: "2026-05-user-settings-redesign-4d",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    l = (e) => o.useConfig({ location: e }).enabled,
    u = (e) => o.getConfig({ location: e }).enabled;
