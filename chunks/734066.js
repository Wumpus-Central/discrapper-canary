"use strict";
n.d(t, { BW: () => _, J: () => h, L_: () => o, Pm: () => u, Vr: () => f, cx: () => d, sw: () => c });
var r = n(600975),
    i = n(670470),
    a = n(430452);
n(927578);
var s = n(915618);
n(788868);
let o = (0, r.C)({
        kind: "user",
        id: "2022-11_clips_experiment",
        label: "Clips Experiment",
        defaultConfig: {
            enableClips: !1,
            ignorePlatformRestriction: !1,
            showClipsHeaderEntrypoint: !1,
            enableScreenshotKeybind: !1,
            enableVoiceOnlyClips: !1,
            enableAdvancedSignals: !1,
        },
        treatments: [
            {
                id: 1,
                label: "Clips without upsells",
                config: {
                    enableClips: !0,
                    ignorePlatformRestriction: !1,
                    showClipsHeaderEntrypoint: !0,
                    enableScreenshotKeybind: !1,
                    enableVoiceOnlyClips: !1,
                    enableAdvancedSignals: !1,
                },
            },
            {
                id: 2,
                label: "Clips with upsells",
                config: {
                    enableClips: !0,
                    ignorePlatformRestriction: !1,
                    showClipsHeaderEntrypoint: !0,
                    enableScreenshotKeybind: !1,
                    enableVoiceOnlyClips: !1,
                    enableAdvancedSignals: !1,
                },
            },
            {
                id: 99,
                label: "Clips 4 da Developerz",
                config: {
                    enableClips: !0,
                    ignorePlatformRestriction: !0,
                    showClipsHeaderEntrypoint: !0,
                    enableScreenshotKeybind: !0,
                    enableVoiceOnlyClips: !0,
                    enableAdvancedSignals: !0,
                },
            },
        ],
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
    if (!(0, s.A)(a.Ay)) return !1;
    let { enableClips: e } = l.getCurrentConfig({ location: "areClipsEnabled" }, { autoTrackExposure: !1 }),
        { enableClips: t } = o.getCurrentConfig({ location: "areClipsEnabled" }, { autoTrackExposure: !1 }),
        { enableViewerClipping: n } = i.A.getCurrentConfig({ location: "areClipsEnabled" }, { autoTrackExposure: !1 });
    return e || t || n;
}
function c() {
    let e = (0, s.A)(a.Ay),
        { enableClips: t } = l.useExperiment({ location: "useEnableClips" }, { autoTrackExposure: !1 }),
        { enableClips: n } = o.useExperiment({ location: "useEnableClips" }, { autoTrackExposure: !1 }),
        { enableViewerClipping: r } = i.A.useExperiment({ location: "useEnableClips" }, { autoTrackExposure: !1 });
    return (n || t || r) && e;
}
function d() {
    let { enableScreenshotKeybind: e } = o.getCurrentConfig(
        { location: "isScreenshotKeybindEnabled" },
        { autoTrackExposure: !1 },
    );
    return e;
}
function _() {
    let { enableScreenshotKeybind: e } = o.useExperiment(
        { location: "useScreenshotKeybindEnabled" },
        { autoTrackExposure: !1 },
    );
    return e;
}
function f() {
    let { enableVoiceOnlyClips: e } = o.getCurrentConfig(
        { location: "areVoiceOnlyClipsEnabled" },
        { autoTrackExposure: !1 },
    );
    return e;
}
function h() {
    let { enableAdvancedSignals: e } = o.getCurrentConfig(
        { location: "areAdvancedSignalsEnabled" },
        { autoTrackExposure: !1 },
    );
    return e;
}
