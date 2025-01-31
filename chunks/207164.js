n.d(t, { Z: () => u });
var i = n(192379),
    r = n(442837),
    a = n(626135),
    s = n(327943),
    o = n(981631),
    l = n(474936);
function u() {
    let { previewPaneVariant: e, originalIcon: t } = (0, r.cj)([s.Z], () => ({
            previewPaneVariant: s.Z.isUpsellPreview ? l.h1.FREE : l.h1.PREMIUM_STANDARD,
            originalIcon: s.Z.getCurrentDesktopIcon()
        })),
        n = i.useRef(t);
    return (
        i.useEffect(() => {
            n.current = t;
        }),
        i.useCallback(() => {
            a.default.track(o.rMx.APP_ICON_PREVIEW_VIEWED, {
                preview_pane_variant: e,
                original_icon: n.current
            });
        }, [e])
    );
}
