n.d(t, { t: () => s });
var i,
    r = (((i = {}).PORTRAIT = "9:16"), (i.LANDSCAPE = "16:9"), i),
    a = n(291749);
function s(e) {
    var t;
    return {
        id: e.id,
        advertiserName: e.advertiser_name,
        productName: e.product_name,
        productIcon: (0, a.Zf)(e.product_icon),
        videoPreview: (0, a.Zf)(e.video_preview),
        imagePreview: (0, a.Zf)(e.image_preview),
        videoHls: (0, a.dv)(e.video_hls),
        videoRenditions: (function (e) {
            if (null == e) return;
            let t = {};
            for (let [n, i] of Object.entries(e)) Object.values(r).includes(n) && "" !== i && (t[n] = (0, a.dv)(i));
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
