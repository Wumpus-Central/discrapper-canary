n.d(t, {
    Gi: () => s,
    Qs: () => o,
    YN: () => l
});
var i = n(818083),
    r = n(311476),
    a = n(474936);
let s = (0, i.B)({
    id: '2024-06_premium_emoji_desktop_upsell',
    label: 'Premium Emoji Desktop Upsell',
    kind: 'user',
    defaultConfig: {
        enabled: !1,
        addSocialProof: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enable new roadblock experience',
            config: {
                enabled: !0,
                addSocialProof: !1
            }
        },
        {
            id: 2,
            label: 'Enable new roadblock experience with social proof',
            config: {
                enabled: !0,
                addSocialProof: !0
            }
        }
    ]
});
(0, i.B)({
    id: '2024-05_file_upload_desktop_upsell',
    label: 'File Upload Desktop Upsell',
    kind: 'user',
    defaultConfig: {
        enabled: !1,
        addSocialProof: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enable new roadblock modal',
            config: {
                enabled: !0,
                addSocialProof: !1
            }
        },
        {
            id: 2,
            label: 'Enable new roadblock modal with social proof',
            config: {
                enabled: !0,
                addSocialProof: !0
            }
        }
    ]
});
let o = (0, i.B)({
    id: '2024-06_premium_soundboard_desktop_upsell',
    label: 'Premium Soundboard Desktop Upsell',
    kind: 'user',
    defaultConfig: {
        enableInlineUpsell: !1,
        enableRoadblock: !1,
        enableRoadblockWithSocialProof: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enable inline upsell only',
            config: {
                enableInlineUpsell: !0,
                enableRoadblock: !1,
                enableRoadblockWithSocialProof: !1
            }
        },
        {
            id: 2,
            label: 'Enable inline and roadblock upsells only',
            config: {
                enableInlineUpsell: !0,
                enableRoadblock: !0,
                enableRoadblockWithSocialProof: !1
            }
        },
        {
            id: 3,
            label: 'Enable inline and roadblock upsells with social proof',
            config: {
                enableInlineUpsell: !0,
                enableRoadblock: !0,
                enableRoadblockWithSocialProof: !0
            }
        }
    ]
});
function l(e) {
    switch (e) {
        case a.cd.CLIENT_THEMES_UPSELL:
        case a.cd.APP_ICON_UPSELL:
            return r.Z.getCurrentConfig({ location: 'shouldShowSocialProof' }, { autoTrackExposure: !1 }).addSocialProof;
        case a.cd.ANIMATED_AVATAR_MODAL_UPSELL:
        case a.cd.ANIMATED_BANNER_MODAL_UPSELL:
        case a.cd.PROFILE_EFFECT_MODAL_UPSELL:
        case a.cd.AVATAR_DECORATION_MODAL_UPSELL:
        case a.cd.FOR_LATER_MODAL_UPSELL:
        case a.cd.VOICE_FILTERS_UPSELL:
            return !0;
        default:
            return !1;
    }
}
