function r(e) {
    return {
        android:
            null != e.android
                ? {
                      androidAppId: e.android.android_app_id,
                  }
                : void 0,
        ios:
            null != e.ios
                ? {
                      iosAppId: e.ios.ios_app_id,
                  }
                : void 0,
        link: e.link,
        buttonLabel: e.button_label,
        subtitle: e.subtitle,
    };
}
n.d(t, {
    W: () => r,
});
