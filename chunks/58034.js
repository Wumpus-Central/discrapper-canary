a.d(t, { H: () => S, Z: () => m });
var s = a(64700),
    r = a(311907),
    i = a(873298),
    n = a(973654),
    l = a(964404),
    c = a(617617),
    _ = a(954571),
    E = a(823459),
    o = a(47671),
    d = a(652215),
    T = a(788868),
    u = a(185928);
let m = () => {
        let e = (0, r.bG)([o.A], () => o.A.gradientPreset),
            t = (0, r.bG)([l.Ay], () => l.Ay.useSystemTheme === u.Q_.ON),
            [a, i] = (0, s.useState)(t);
        return (
            (0, s.useEffect)(() => {
                null == e && i(t);
            }, [e, t]),
            (0, s.useCallback)(() => {
                null == e || ((0, E.S8)(), a && (0, n.k7)(u.Q_.ON));
            }, [e, a])
        );
    },
    S = () => {
        let { previewPaneVariant: e } = (0, r.cf)([o.A], () => ({
                previewPaneVariant: o.A.isPreview ? T.tz.FREE : T.tz.PREMIUM_STANDARD,
            })),
            t = (0, r.bG)([c.A], () => {
                let e = c.A.settings.appearance?.theme;
                return `default ${e === i.Sx.LIGHT ? d.NJ8.LIGHT : d.NJ8.DARK}`;
            });
        return (0, s.useCallback)(
            (a) => {
                _.default.track(a, { preview_pane_variant: e, original_theme: t });
            },
            [e, t],
        );
    };
