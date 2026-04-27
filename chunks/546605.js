"use strict";
n.d(t, { vg: () => r, wy: () => s });
let i = (0, n(945810).mj)({
        name: "2026-03-store-country",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    r = (e) => i.useConfig({ location: e }).enabled,
    s = (e) => i.getConfig({ location: e }).enabled;
