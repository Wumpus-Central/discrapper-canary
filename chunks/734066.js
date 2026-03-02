"use strict";
n.d(t, { BW: () => _, J: () => p, L_: () => o, Pm: () => u, Vr: () => f, cx: () => d, sw: () => c });
var r = n(600975),
    i = n(945810),
    s = n(430452);
n(927578);
var a = n(915618);
n(788868);
let o = (0, i.mj)({
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
            99: {
                enableClips: !0,
                ignorePlatformRestriction: !0,
                showClipsHeaderEntrypoint: !0,
                enableScreenshotKeybind: !0,
                enableVoiceOnlyClips: !0,
                enableAdvancedSignals: !0,
            },
        },
    }),
    l = (0, r.C)({
        kind: "user",
        id: "2023-09_clips_nitro_early_access",
        label: "Clips (Nitro EA)",
        defaultConfig: {
            enableClips: !1,
            enablePremiumEarlyAccessAnnouncementCoachmark: !1,
            enablePremiumEarlyAccessGoLiveRoadblock: !1,
            enableScreenshotKeybind: !1,
            enableVoiceOnlyClips: !1,
            enableAdvancedSignals: !1,
        },
        treatments: [
            {
                id: 1,
                label: "Clips Nitro EA Upsells Visible",
                config: {
                    enableClips: !1,
                    enablePremiumEarlyAccessAnnouncementCoachmark: !0,
                    enablePremiumEarlyAccessGoLiveRoadblock: !0,
                    enableScreenshotKeybind: !1,
                    enableVoiceOnlyClips: !1,
                    enableAdvancedSignals: !1,
                },
            },
            {
                id: 2,
                label: "Clips Enabled (Nitro)",
                config: {
                    enableClips: !0,
                    enablePremiumEarlyAccessAnnouncementCoachmark: !0,
                    enablePremiumEarlyAccessGoLiveRoadblock: !1,
                    enableScreenshotKeybind: !1,
                    enableVoiceOnlyClips: !1,
                    enableAdvancedSignals: !1,
                },
            },
        ],
    });
function u() {
    if (!(0, a.A)(s.Ay)) return !1;
    let { enableClips: e } = l.getCurrentConfig({ location: "areClipsEnabled" }, { autoTrackExposure: !1 }),
        { enableClips: t } = o.getConfig({ location: "areClipsEnabled" });
    return e || t;
}
function c() {
    let e = (0, a.A)(s.Ay),
        { enableClips: t } = l.useExperiment({ location: "useEnableClips" }, { autoTrackExposure: !1 }),
        { enableClips: n } = o.getConfig({ location: "useEnableClips" });
    return (n || t) && e;
}
function d() {
    let { enableScreenshotKeybind: e } = o.getConfig({ location: "isScreenshotKeybindEnabled" });
    return e;
}
function _() {
    let { enableScreenshotKeybind: e } = o.useConfig({ location: "useScreenshotKeybindEnabled" });
    return e;
}
function f() {
    let { enableVoiceOnlyClips: e } = o.getConfig({ location: "areVoiceOnlyClipsEnabled" });
    return e;
}
function p() {
    let { enableAdvancedSignals: e } = o.getConfig({ location: "areAdvancedSignalsEnabled" });
    return e;
}
