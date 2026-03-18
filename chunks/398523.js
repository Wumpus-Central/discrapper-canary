"use strict";
n.d(t, { A: () => s });
var r = n(600975),
    i = n(688151);
let s = (0, r.C)({
    kind: "user",
    id: "2025-10_recurring_3p_promotion",
    label: "Recurring 3P Promotion Experiment",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$G.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: "Control group. Users do not get to see the recurring 3P promotion surfaces.",
            config: { enabled: !1 },
        },
        { id: 1, label: "Treatment Group 1. Users see the recurring 3P promotion surfaces.", config: { enabled: !0 } },
    ],
});
