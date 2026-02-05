"use strict";
n.d(t, { H: () => m, Z: () => h });
var r = n(64700),
    i = n(311907),
    a = n(873298),
    s = n(973654),
    o = n(964404),
    l = n(617617),
    u = n(954571),
    c = n(823459),
    d = n(47671),
    _ = n(652215),
    f = n(788868),
    p = n(185928);
let h = () => {
        let e = (0, i.bG)([d.A], () => d.A.gradientPreset),
            t = (0, i.bG)([o.Ay], () => o.Ay.useSystemTheme === p.Q_.ON),
            [n, a] = (0, r.useState)(t);
        return (
            (0, r.useEffect)(() => {
                null == e && a(t);
            }, [e, t]),
            (0, r.useCallback)(() => {
                null == e || ((0, c.S8)(), n && (0, s.k7)(p.Q_.ON));
            }, [e, n])
        );
    },
    m = () => {
        let { previewPaneVariant: e } = (0, i.cf)([d.A], () => ({
                previewPaneVariant: d.A.isPreview ? f.tz.FREE : f.tz.PREMIUM_STANDARD,
            })),
            t = (0, i.bG)([l.A], () => {
                let e = l.A.settings.appearance?.theme;
                return `default ${e === a.Sx.LIGHT ? _.NJ8.LIGHT : _.NJ8.DARK}`;
            });
        return (0, r.useCallback)(
            (n) => {
                u.default.track(n, { preview_pane_variant: e, original_theme: t });
            },
            [e, t],
        );
    };
