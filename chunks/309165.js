"use strict";
n.d(t, { lq: () => s });
let i = (0, n(600975).C)({
        kind: "user",
        id: "2025-09_one_time_login_client",
        label: "One Time Login",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
    }),
    s = (e) => i.useExperiment({ location: e }, { autoTrackExposure: !0 });
