"use strict";
n.d(t, { m: () => r, Z: () => s });
let i = (0, n(945810).mj)({
        kind: "user",
        name: "2025-01-virtual-currency-rollout",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    r = (e) => ({ enabled: i.getConfig(e).enabled }),
    s = (e) => ({ enabled: i.useConfig(e).enabled });
