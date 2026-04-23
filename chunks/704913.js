"use strict";
n.d(t, { l: () => d });
var i = n(99066),
    r = n(600975),
    s = n(688151);
let a = (0, r.C)({
    kind: "guild",
    id: "2025-04_report_to_mod",
    label: "Report to moderator",
    commonTriggerPoint: s.$G.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "report to moderator triggering", config: { enabled: !0 } }],
});
var o = n(840251);
let l = [i.t4, a],
    d = new o.E(l, s.$G.CONNECTION_OPEN, { location: "app open" });
