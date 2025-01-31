n.d(t, {
    J: () => h,
    q: () => m
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    a = n(524437),
    s = n(781391),
    o = n(740492),
    l = n(581883),
    u = n(626135),
    c = n(238302),
    d = n(514361),
    f = n(981631),
    _ = n(474936),
    p = n(874893);
let h = () => {
        let e = (0, r.e7)([d.Z], () => d.Z.gradientPreset),
            t = (0, r.e7)([o.ZP], () => o.ZP.useSystemTheme === p.K.ON),
            [n, a] = (0, i.useState)(t);
        return (
            (0, i.useEffect)(() => {
                null == e && a(t);
            }, [e, t]),
            (0, i.useCallback)(() => {
                if (null != e) (0, c.kj)(), n && (0, s.hi)(p.K.ON);
            }, [e, n])
        );
    },
    m = () => {
        let { previewPaneVariant: e } = (0, r.cj)([d.Z], () => ({ previewPaneVariant: d.Z.isPreview ? _.h1.FREE : _.h1.PREMIUM_STANDARD })),
            t = (0, r.e7)([l.Z], () => {
                var e;
                let t = null === (e = l.Z.settings.appearance) || void 0 === e ? void 0 : e.theme;
                return 'default '.concat(t === a.Q2.LIGHT ? f.BRd.LIGHT : f.BRd.DARK);
            });
        return (0, i.useCallback)(
            (n) => {
                u.default.track(n, {
                    preview_pane_variant: e,
                    original_theme: t
                });
            },
            [e, t]
        );
    };
