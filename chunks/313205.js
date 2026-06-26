"use strict";
n.d(t, { J2: () => r, LH: () => i, ZS: () => a, e8: () => s });
let i = (0, n(600975).C)({
    kind: "guild",
    id: "2026-03_file_upload_250_mb_powerup",
    label: "File Upload 250MB Powerup",
    defaultConfig: { enabled: !1, rollbackEnabled: !1 },
    treatments: [
        { id: 1, label: "Enable File Upload 250MB Powerup", config: { enabled: !0, rollbackEnabled: !1 } },
        { id: 2, label: "Rollback UI for File Upload 250MB Powerup", config: { enabled: !0, rollbackEnabled: !0 } },
    ],
});
function r(e, t) {
    return i.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
}
function s(e, t) {
    return i.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !1 }).rollbackEnabled;
}
function a(e, t) {
    return i.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }).rollbackEnabled;
}
