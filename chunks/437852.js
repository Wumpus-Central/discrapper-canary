"use strict";
n.d(t, { Ay: () => o, Fq: () => s, qe: () => a });
var i = n(600975),
    r = n(945810),
    l = n(688151);
let s = (0, r.mj)({
        name: "2025-10-seasonal-gifting-2025",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    a = (0, i.C)({
        id: "2025-11_seasonal_gifting_2025_reminder",
        label: "Seasonal Gifting 2025 Reminder",
        kind: "user",
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: l.$G.CONNECTION_OPEN,
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
    }),
    o = s;
