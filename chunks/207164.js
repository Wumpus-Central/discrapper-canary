n.d(t, { Z: () => c });
var r = n(73800),
    i = n(442837),
    a = n(626135),
    o = n(327943),
    s = n(981631),
    l = n(474936);
function c() {
    let { previewPaneVariant: e, originalIcon: t } = (0, i.cj)([o.Z], () => ({
            previewPaneVariant: o.Z.isUpsellPreview ? l.h1.FREE : l.h1.PREMIUM_STANDARD,
            originalIcon: o.Z.getCurrentDesktopIcon()
        })),
        n = r.useRef(t);
    return (
        r.useEffect(() => {
            n.current = t;
        }),
        r.useCallback(() => {
            a.default.track(s.rMx.APP_ICON_PREVIEW_VIEWED, {
                preview_pane_variant: e,
                original_icon: n.current
            });
        }, [e])
    );
}
