n.d(t, { BW: () => T, J: () => S, L_: () => E, Pm: () => d, Vr: () => A, cx: () => I, sw: () => c });
var i = n(17928),
    a = n(945810),
    r = n(51760),
    _ = n(287809),
    s = n(927578),
    l = n(915618),
    o = n(788868);
let E = (0, a.mj)({
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
function d() {
    if (!(0, l.A)(r.Ay)) return !1;
    let e = u(_.default.getCurrentUser()),
        { enableClips: t } = E.getConfig({ location: "areClipsEnabled" });
    return e || t;
}
function c() {
    let e = (0, l.A)(r.Ay),
        t = (0, i.bG)([_.default], () => u(_.default.getCurrentUser())),
        { enableClips: n } = E.getConfig({ location: "useEnableClips" });
    return (n || t) && e;
}
function u(e) {
    return s.Ay.isPremiumAtLeast(e?.premiumType, o.PremiumTypes.TIER_2);
}
function I() {
    let { enableScreenshotKeybind: e } = E.getConfig({ location: "isScreenshotKeybindEnabled" });
    return e;
}
function T() {
    let { enableScreenshotKeybind: e } = E.useConfig({ location: "useScreenshotKeybindEnabled" });
    return e;
}
function A() {
    let { enableVoiceOnlyClips: e } = E.getConfig({ location: "areVoiceOnlyClipsEnabled" });
    return e;
}
function S() {
    let { enableAdvancedSignals: e } = E.getConfig({ location: "areAdvancedSignalsEnabled" });
    return e;
}
