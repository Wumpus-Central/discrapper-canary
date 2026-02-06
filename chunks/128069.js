"use strict";
n.d(t, { Kp: () => u, RA: () => l, vu: () => s });
var r = n(600975),
    i = n(652215),
    a = n(349828);
let s = (0, r.C)({
    kind: "guild",
    id: "2026-01_guild_tag_badge_packs_wave_2",
    label: "Guild Tag Badge Packs Wave 2",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Guild Tag Badge Packs Wave 2", config: { enabled: !0 } }],
});
function o(e) {
    return null != e && e !== a.V && e !== i.YYv;
}
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = o(e);
    return s.useExperiment({ guildId: e, location: t }, { disable: !r, autoTrackExposure: n }).enabled;
}
function u(e, t) {
    return !!o(e) && s.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
}
