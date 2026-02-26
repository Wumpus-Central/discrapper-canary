"use strict";
n.d(t, { A: () => r });
let r = (0, n(250105).Ay)({
    kind: "user",
    name: "2025-12-proportional-vad-indicator",
    defaultConfig: { enabled: !1 },
    variations: {
        1: { enabled: !0 },
        2: { enabled: !0, disableUI: !0 },
        3: { enabled: !0, disableUI: !0, swallowVolumeOnlySpeakingEvents: !0 },
        4: { enabled: !0, disableUI: !0, dontEmitVolumeOnlySpeakingEvents: !0 },
    },
});
