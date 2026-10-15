n.d(t, { t: () => a });
var i = n(984827),
    r = n(291749);
function a(e) {
    var t;
    return {
        id: e.id,
        advertiserName: e.advertiser_name,
        productName: e.product_name,
        productIcon: (0, r.Zf)(e.product_icon),
        videoPreview: (0, r.Zf)(e.video_preview),
        imagePreview: (0, r.Zf)(e.image_preview),
        videoHls: (0, r.dv)(e.video_hls),
        videoRenditions: (function (e) {
            if (null == e) return;
            let t = {};
            for (let [n, a] of Object.entries(e)) Object.values(i.x).includes(n) && "" !== a && (t[n] = (0, r.dv)(a));
            return Object.keys(t).length > 0 ? t : void 0;
        })(e.video_renditions),
        cta: {
            url: (t = e.cta).url,
            buttonLabel: t.button_label,
            android: null != t.android ? { androidAppId: t.android.android_app_id } : void 0,
            ios: null != t.ios ? { iosAppId: t.ios.ios_app_id } : void 0,
        },
        rewardTimerSeconds: e.reward_timer_seconds ?? 15,
        videoDurationSeconds: e.video_duration_seconds,
    };
}
