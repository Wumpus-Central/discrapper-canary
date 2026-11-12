n.d(t, { Y: () => s });
var i = n(323889),
    r = n(314329),
    a = n(760914);
function s(e) {
    switch (e?.creative_type) {
        case i.p.BOUNTY:
            return { type: i.p.BOUNTY, bounty: (0, r.t)(e.creative_content) };
        case i.p.PLAYABLE:
            var t, n;
            return {
                type: i.p.PLAYABLE,
                playable: {
                    id: (t = e.creative_content).id,
                    applicationId: t.application_id,
                    advertiserName: t.advertiser_name,
                    productName: t.product_name,
                    productIcon: (0, a.dv)(t.product_icon),
                    videoPreview: (0, a.Zf)(t.video_preview),
                    imagePreview: (0, a.Zf)(t.image_preview),
                    cta: {
                        url: (n = t.cta).url,
                        buttonLabel: n.button_label,
                        android: null != n.android ? { androidAppId: n.android.android_app_id } : void 0,
                        ios: null != n.ios ? { iosAppId: n.ios.ios_app_id } : void 0,
                    },
                    rewardTimerSeconds: t.reward_timer_seconds,
                },
            };
        default:
            return null;
    }
}
