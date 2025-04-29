n.d(t, {
    G: () => a,
    Y: () => s
});
var r = n(818083),
    i = n(311476),
    o = n(474936);
let a = (0, r.B)({
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
function s(e) {
    switch (e) {
        case o.cd.CLIENT_THEMES_UPSELL:
        case o.cd.APP_ICON_UPSELL:
            return i.Z.getCurrentConfig({ location: 'shouldShowSocialProof' }, { autoTrackExposure: !1 }).addSocialProof;
        case o.cd.ANIMATED_AVATAR_MODAL_UPSELL:
        case o.cd.ANIMATED_BANNER_MODAL_UPSELL:
        case o.cd.PROFILE_EFFECT_MODAL_UPSELL:
        case o.cd.AVATAR_DECORATION_MODAL_UPSELL:
        case o.cd.FOR_LATER_MODAL_UPSELL:
        case o.cd.VOICE_FILTERS_UPSELL:
        case o.cd.RECENT_AVATARS_ROADBLOCK_UPSELL:
            return !0;
        default:
            return !1;
    }
}
