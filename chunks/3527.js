"use strict";
n.d(t, { A: () => o });
var r = n(448461),
    i = n(723702),
    a = n(719439);
let s = "deep_noise_suppression";
function o(e, t, n) {
    let { location: o } = n;
    if ((0, i.isIOS)() || (0, i.isMac)()) {
        if ("" !== (t = t ?? "") && "standard" !== t) {
            let { disabledModes: e } = r.X.getConfig({ location: o });
            if (e.includes(t)) return !1;
        }
        return e;
    }
    if (!e || null == t || "" === t) return e;
    if ((0, i.isWindows)() && t === s) {
        let { preferSystemEffects: e } = (0, a.b)({ location: "setNoiseCancellation" });
        if (e) return !1;
    }
    return e;
}
