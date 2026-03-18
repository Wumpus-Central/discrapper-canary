"use strict";
n.d(t, { A: () => s });
var r = n(600975),
    i = n(688151);
let s = (0, r.C)({
    kind: "guild",
    id: "2025-04_report_to_mod",
    label: "Report to moderator",
    commonTriggerPoint: i.$G.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "report to moderator triggering", config: { enabled: !0 } }],
});
