n.d(t, {
    J: () => h,
    q: () => m
}),
    n(388685);
var r = n(73800),
    i = n(442837),
    a = n(524437),
    o = n(781391),
    s = n(740492),
    l = n(581883),
    c = n(626135),
    u = n(238302),
    d = n(514361),
    f = n(981631),
    _ = n(474936),
    p = n(874893);
let h = () => {
        let e = (0, i.e7)([d.Z], () => d.Z.gradientPreset),
            t = (0, i.e7)([s.ZP], () => s.ZP.useSystemTheme === p.KW.ON),
            [n, a] = (0, r.useState)(t);
        return (
            (0, r.useEffect)(() => {
                null == e && a(t);
            }, [e, t]),
            (0, r.useCallback)(() => {
                null != e && ((0, u.kj)(), n && (0, o.hi)(p.KW.ON));
            }, [e, n])
        );
    },
    m = () => {
        let { previewPaneVariant: e } = (0, i.cj)([d.Z], () => ({ previewPaneVariant: d.Z.isPreview ? _.h1.FREE : _.h1.PREMIUM_STANDARD })),
            t = (0, i.e7)([l.Z], () => {
                var e;
                let t = null == (e = l.Z.settings.appearance) ? void 0 : e.theme;
                return 'default '.concat(t === a.Q2.LIGHT ? f.BRd.LIGHT : f.BRd.DARK);
            });
        return (0, r.useCallback)(
            (n) => {
                c.default.track(n, {
                    preview_pane_variant: e,
                    original_theme: t
                });
            },
            [e, t]
        );
    };
