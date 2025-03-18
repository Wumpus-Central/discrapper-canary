n.d(t, { x: () => o }), n(47120);
var r = n(192379),
    i = n(493683);
function o(e) {
    let [t, n] = r.useState(!1);
    return {
        isUpdating: t,
        updateChatWallpaper: r.useCallback(
            async (t, r) => {
                n(!0), await i.Z.setWallpaper(t, r), n(!1), null == e || e();
            },
            [e]
        )
    };
}
