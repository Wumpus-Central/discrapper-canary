"use strict";
n.d(t, { v: () => a });
var r = n(600975),
    i = n(688151);
let a = (0, r.C)({
    kind: "user",
    id: "2025-03_app_dm_no_push",
    label: "Activity DM No Push",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$G.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: "Disables push notifications for activities, enables opt-in switch",
            config: { enabled: !0, defaultOnMobile: !1 },
        },
        {
            id: 2,
            label: "Same as treatment 1, but defaults to on on mobile",
            config: { enabled: !0, defaultOnMobile: !0 },
        },
    ],
});
