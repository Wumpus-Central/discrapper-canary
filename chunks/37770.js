"use strict";
n.d(t, { F: () => l, I: () => u });
var r = n(311907),
    i = n(250105),
    a = n(217222),
    s = n(128319);
let o = (0, i.Ay)({
    name: "2025-10-windows-mute-detection",
    kind: "user",
    defaultConfig: { windowsMuteAndZeroVolumeDetectionEnabled: !1 },
    variations: { 1: { windowsMuteAndZeroVolumeDetectionEnabled: !0 } },
});
function l(e) {
    let { location: t } = e,
        { isInHoldout: n } = s.p.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? o.definition.defaultConfig : o.getConfig({ location: t });
}
function u(e) {
    let { location: t } = e;
    return (0, r.bG)([a.A], () => l({ location: t }));
}
