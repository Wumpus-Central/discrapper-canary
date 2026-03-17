"use strict";
n.d(t, { Kp: () => l, RA: () => o, vu: () => s });
var r = n(600975),
    i = n(5180);
let s = (0, r.C)({
    kind: "guild",
    id: "2026-01_guild_tag_badge_packs_wave_2",
    label: "Guild Tag Badge Packs Wave 2",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Guild Tag Badge Packs Wave 2", config: { enabled: !0 } }],
});
function a(e) {
    return null != e && !(0, i.ai)(e);
}
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = a(e);
    return s.useExperiment({ guildId: e, location: t }, { disable: !r, autoTrackExposure: n }).enabled;
}
function l(e, t) {
    return !!a(e) && s.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
}
