"use strict";
n.d(t, { b: () => o }), n(311907);
var r = n(945810);
n(217222);
var i = n(128319);
let a = { preferSystemEffects: !1 },
    s = (0, r.mj)({
        name: "2025-12-windows-audio-effects",
        kind: "user",
        defaultConfig: a,
        variations: { 1: { ...a, preferSystemEffects: !0 } },
    });
function o(e) {
    let { location: t } = e,
        { isInHoldout: n } = i.p.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? s.definition.defaultConfig : s.getConfig({ location: t });
}
