"use strict";
n.d(t, { A: () => o });
var r = n(723702),
    i = n(719439);
let s = "deep_noise_suppression",
    a = new Set(["voice_isolation", "wide_spectrum"]);
function o(e, t) {
    if ((0, r.isIOS)() || (0, r.isMac)()) return !a.has(t) && e;
    if (!e || null == t || "" === t) return e;
    if ((0, r.isWindows)() && t === s) {
        let { preferSystemEffects: e } = (0, i.b)({ location: "setNoiseCancellation" });
        if (e) return !1;
    }
    return e;
}
