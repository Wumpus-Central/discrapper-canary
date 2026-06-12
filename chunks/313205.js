"use strict";
n.d(t, { J2: () => r, LH: () => i });
let i = (0, n(600975).C)({
    kind: "guild",
    id: "2026-03_file_upload_250_mb_powerup",
    label: "File Upload 250MB Powerup",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable File Upload 250MB Powerup", config: { enabled: !0 } }],
});
function r(e, t) {
    return i.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
}
