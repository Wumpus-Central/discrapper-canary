"use strict";
n.d(t, { A: () => l });
var i = n(723702);
n(17928);
var r = n(945810);
n(710195);
let s = { preferSystemEffects: !1 },
    a = (0, r.mj)({
        name: "2025-12-windows-audio-effects",
        kind: "user",
        defaultConfig: s,
        variations: { 1: { ...s, preferSystemEffects: !0 } },
    }),
    o = new Set(["voice_isolation", "wide_spectrum"]);
function l(e, t) {
    if ((0, i.isIOS)() || (0, i.isMac)()) return !o.has(t) && e;
    if (!e || null == t || "" === t) return e;
    if ((0, i.isWindows)() && "deep_noise_suppression" === t) {
        let { preferSystemEffects: e } = (function (e) {
            let { location: t } = e;
            return a.getConfig({ location: t });
        })({ location: "setNoiseCancellation" });
        if (e) return !1;
    }
    return e;
}
