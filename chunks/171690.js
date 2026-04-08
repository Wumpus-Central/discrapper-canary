"use strict";
function r(e) {
    return {
        url: e.url,
        buttonLabel: e.button_label,
        android: null != e.android ? { androidAppId: e.android.android_app_id } : void 0,
        ios: null != e.ios ? { iosAppId: e.ios.ios_app_id } : void 0,
    };
}
n.d(t, { h: () => r });
