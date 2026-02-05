"use strict";
n.d(t, { A: () => r });
let r = (0, n(600975).C)({
    kind: "user",
    id: "2025-10_client_meaningfully_online_timer_rollout",
    label: "Friend Online Timer Rollout",
    defaultConfig: { useOnlineTimer: !1, useTestTimerDuration: !1 },
    treatments: [
        { id: 1, label: "Use online timer", config: { useOnlineTimer: !0, useTestTimerDuration: !1 } },
        { id: 2, label: "Use test timer duration", config: { useOnlineTimer: !0, useTestTimerDuration: !0 } },
    ],
});
