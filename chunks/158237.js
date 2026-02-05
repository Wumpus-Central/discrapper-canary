"use strict";
n.d(t, { Jp: () => s });
let i = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_dsa_webform",
    label: "Safety Experience Unauthenticated Report Form",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 1, label: "EU user", config: { enabled: !0 } },
        { id: 2, label: "DSA E2E testing user", config: { enabled: !0 } },
    ],
});
function s(e) {
    return i.useExperiment({ location: e }, { autoTrackExposure: !0 }).enabled;
}
