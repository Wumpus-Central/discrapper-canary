"use strict";
n.d(t, { lX: () => l, W1: () => s });
var r = n(945810);
let i = (0, r.mj)({
        name: "2026-03-private-profiles-strict",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 }, 3: { enabled: !0 } },
    }),
    a = (0, r.mj)({
        name: "2026-02-private-profiles",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    l = (e) => {
        let t = a.useConfig({ location: e }).enabled,
            n = i.useConfig({ location: e }).enabled;
        return t || n;
    },
    s = (e) => a.getConfig({ location: e }).enabled || i.getConfig({ location: e }).enabled;
