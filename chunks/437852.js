"use strict";
n.d(t, { Ay: () => l, Fq: () => a, qe: () => o });
var r = n(600975),
    i = n(945810),
    s = n(688151);
let a = (0, i.mj)({
        name: "2025-10-seasonal-gifting-2025",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    o = (0, r.C)({
        id: "2025-11_seasonal_gifting_2025_reminder",
        label: "Seasonal Gifting 2025 Reminder",
        kind: "user",
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: s.$G.CONNECTION_OPEN,
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
    }),
    l = a;
