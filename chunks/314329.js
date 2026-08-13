"use strict";
n.d(t, { t: () => r });
var i = n(291749);
function r(e) {
    var t;
    return {
        id: e.id,
        advertiserName: e.advertiser_name,
        productName: e.product_name,
        productIcon: (0, i.Zf)(e.product_icon),
        videoPreview: (0, i.Zf)(e.video_preview),
        imagePreview: (0, i.Zf)(e.image_preview),
        videoHls: (0, i.dv)(e.video_hls),
        cta: {
            url: (t = e.cta).url,
            buttonLabel: t.button_label,
            android: null != t.android ? { androidAppId: t.android.android_app_id } : void 0,
            ios: null != t.ios ? { iosAppId: t.ios.ios_app_id } : void 0,
        },
        rewardTimerSeconds: e.reward_timer_seconds ?? 15,
    };
}
