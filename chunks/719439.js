"use strict";
n.d(t, { b: () => a }), n(311907);
var r = n(945810);
n(217222);
let i = { preferSystemEffects: !1 },
    s = (0, r.mj)({
        name: "2025-12-windows-audio-effects",
        kind: "user",
        defaultConfig: i,
        variations: { 1: { ...i, preferSystemEffects: !0 } },
    });
function a(e) {
    let { location: t } = e;
    return s.getConfig({ location: t });
}
