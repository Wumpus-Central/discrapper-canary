"use strict";
n.d(t, { BW: () => h, J: () => m, L_: () => c, Pm: () => d, Vr: () => E, cx: () => p, sw: () => _ });
var r = n(311907),
    i = n(945810),
    s = n(430452),
    a = n(287809),
    o = n(927578),
    l = n(915618),
    u = n(788868);
let c = (0, i.mj)({
    kind: "user",
    name: "2026-03-clips-experiment",
    defaultConfig: {
        enableClips: !1,
        ignorePlatformRestriction: !1,
        showClipsHeaderEntrypoint: !1,
        enableScreenshotKeybind: !1,
        enableVoiceOnlyClips: !1,
        enableAdvancedSignals: !1,
    },
    variations: {
        1: {
            enableClips: !0,
            ignorePlatformRestriction: !1,
            showClipsHeaderEntrypoint: !0,
            enableScreenshotKeybind: !1,
            enableVoiceOnlyClips: !1,
            enableAdvancedSignals: !1,
        },
        2: {
            enableClips: !0,
            ignorePlatformRestriction: !0,
            showClipsHeaderEntrypoint: !0,
            enableScreenshotKeybind: !0,
            enableVoiceOnlyClips: !0,
            enableAdvancedSignals: !0,
        },
        3: {
            enableClips: !0,
            ignorePlatformRestriction: !0,
            showClipsHeaderEntrypoint: !1,
            enableScreenshotKeybind: !1,
            enableVoiceOnlyClips: !1,
            enableAdvancedSignals: !1,
        },
    },
});
function d() {
    if (!(0, l.A)(s.Ay)) return !1;
    let e = f(a.default.getCurrentUser()),
        { enableClips: t } = c.getConfig({ location: "areClipsEnabled" });
    return e || t;
}
function _() {
    let e = (0, l.A)(s.Ay),
        t = (0, r.bG)([a.default], () => f(a.default.getCurrentUser())),
        { enableClips: n } = c.getConfig({ location: "useEnableClips" });
    return (n || t) && e;
}
function f(e) {
    return o.Ay.isPremiumAtLeast(e?.premiumType, u.PremiumTypes.TIER_2);
}
function p() {
    let { enableScreenshotKeybind: e } = c.getConfig({ location: "isScreenshotKeybindEnabled" });
    return e;
}
function h() {
    let { enableScreenshotKeybind: e } = c.useConfig({ location: "useScreenshotKeybindEnabled" });
    return e;
}
function E() {
    let { enableVoiceOnlyClips: e } = c.getConfig({ location: "areVoiceOnlyClipsEnabled" });
    return e;
}
function m() {
    let { enableAdvancedSignals: e } = c.getConfig({ location: "areAdvancedSignalsEnabled" });
    return e;
}
