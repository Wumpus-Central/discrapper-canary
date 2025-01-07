r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(192379),
    a = r(442837),
    s = r(626135),
    o = r(327943),
    l = r(981631),
    u = r(474936);
function c() {
    let { previewPaneVariant: e, originalIcon: n } = (0, a.cj)([o.Z], () => ({
            previewPaneVariant: o.Z.isUpsellPreview ? u.h1.FREE : u.h1.PREMIUM_STANDARD,
            originalIcon: o.Z.getCurrentDesktopIcon()
        })),
        r = i.useRef(n);
    return (
        i.useEffect(() => {
            r.current = n;
        }),
        i.useCallback(() => {
            s.default.track(l.rMx.APP_ICON_PREVIEW_VIEWED, {
                preview_pane_variant: e,
                original_icon: r.current
            });
        }, [e])
    );
}
