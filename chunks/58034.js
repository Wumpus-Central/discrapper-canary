n.d(t, {
    H: () => m,
    Z: () => h,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(873298),
    s = n(973654),
    o = n(964404),
    l = n(617617),
    c = n(954571),
    u = n(823459),
    d = n(47671),
    f = n(652215),
    p = n(788868),
    _ = n(185928);
let h = () => {
        let e = (0, i.bG)([d.A], () => d.A.gradientPreset),
            t = (0, i.bG)([o.Ay], () => o.Ay.useSystemTheme === _.Q_.ON),
            [n, a] = (0, r.useState)(t);
        return (
            (0, r.useEffect)(() => {
                null == e && a(t);
            }, [e, t]),
            (0, r.useCallback)(() => {
                null == e || ((0, u.S8)(), n && (0, s.k7)(_.Q_.ON));
            }, [e, n])
        );
    },
    m = () => {
        let { previewPaneVariant: e } = (0, i.cf)([d.A], () => ({
                previewPaneVariant: d.A.isPreview ? p.tz.FREE : p.tz.PREMIUM_STANDARD,
            })),
            t = (0, i.bG)([l.A], () => {
                var e;
                let t = null == (e = l.A.settings.appearance) ? void 0 : e.theme;
                return "default ".concat(t === a.Sx.LIGHT ? f.NJ8.LIGHT : f.NJ8.DARK);
            });
        return (0, r.useCallback)(
            (n) => {
                c.default.track(n, {
                    preview_pane_variant: e,
                    original_theme: t,
                });
            },
            [e, t],
        );
    };
