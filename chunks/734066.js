n.d(t, { BW: () => I, J: () => h, L_: () => c, Pm: () => _, Vr: () => T, cx: () => A, sw: () => E });
var i = n(17928),
    a = n(945810),
    r = n(51760),
    s = n(287809),
    l = n(927578),
    o = n(915618),
    d = n(788868);
let c = (0, a.mj)({
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
            enableScreenshotKeybind: !1,
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
function _() {
    if (!(0, o.A)(r.Ay)) return !1;
    let e = u(s.default.getCurrentUser()),
        { enableClips: t } = c.getConfig({ location: "areClipsEnabled" });
    return e || t;
}
function E() {
    let e = (0, o.A)(r.Ay),
        t = (0, i.bG)([s.default], () => u(s.default.getCurrentUser())),
        { enableClips: n } = c.getConfig({ location: "useEnableClips" });
    return (n || t) && e;
}
function u(e) {
    return l.Ay.isPremiumAtLeast(e?.premiumType, d.PremiumTypes.TIER_2);
}
function A() {
    let { enableScreenshotKeybind: e } = c.getConfig({ location: "isScreenshotKeybindEnabled" });
    return e;
}
function I() {
    let { enableScreenshotKeybind: e } = c.useConfig({ location: "useScreenshotKeybindEnabled" });
    return e;
}
function T() {
    let { enableVoiceOnlyClips: e } = c.getConfig({ location: "areVoiceOnlyClipsEnabled" });
    return e;
}
function h() {
    let { enableAdvancedSignals: e } = c.getConfig({ location: "areAdvancedSignalsEnabled" });
    return e;
}
