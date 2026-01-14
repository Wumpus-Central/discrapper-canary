n.d(t, { Z: () => s });
var r = n(314080),
    i = n(358085),
    a = n(825940);
let o = "deep_noise_suppression";
function s(e, t, n) {
    let { location: s } = n;
    if ((0, i.isIOS)() || (0, i.isMac)()) {
        if ("" !== (t = null != t ? t : "") && "standard" !== t) {
            let { disabledModes: e } = r.Z.getConfig({ location: s });
            if (e.includes(t)) return !1;
        }
        return e;
    }
    if (!e || null == t || "" === t) return e;
    if ((0, i.isWindows)() && t === o) {
        let { preferSystemEffects: e } = (0, a.P)({ location: "setNoiseCancellation" });
        if (e) return !1;
    }
    return e;
}
