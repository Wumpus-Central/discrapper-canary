"use strict";
n.d(t, { A: () => r });
let r = (0, n(600975).C)({
    kind: "user",
    id: "2025-06_native_intents",
    label: "Native Intents",
    defaultConfig: { searchEnabled: !1, clearEnabled: !1, activityEnabled: !1 },
    treatments: [
        { id: 1, label: "All enabled", config: { searchEnabled: !0, clearEnabled: !0, activityEnabled: !0 } },
        { id: 2, label: "Clear Only", config: { searchEnabled: !1, clearEnabled: !0, activityEnabled: !1 } },
        { id: 3, label: "Activities Only", config: { searchEnabled: !1, clearEnabled: !1, activityEnabled: !0 } },
        { id: 4, label: "Activities and Clear", config: { searchEnabled: !1, clearEnabled: !0, activityEnabled: !0 } },
    ],
});
