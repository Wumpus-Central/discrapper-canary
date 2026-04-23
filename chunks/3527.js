"use strict";
n.d(t, { A: () => a });
var r = n(723702),
    i = n(719439);
let s = new Set(["voice_isolation", "wide_spectrum"]);
function a(e, t) {
    if ((0, r.isIOS)() || (0, r.isMac)()) return !s.has(t) && e;
    if (!e || null == t || "" === t) return e;
    if ((0, r.isWindows)() && "deep_noise_suppression" === t) {
        let { preferSystemEffects: e } = (0, i.b)({ location: "setNoiseCancellation" });
        if (e) return !1;
    }
    return e;
}
