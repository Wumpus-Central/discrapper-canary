n.d(t, { Z: () => x });
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(607070),
    o = n(597688),
    c = n(667105),
    d = n(350327),
    u = n(626135),
    m = n(211712),
    g = n(981631),
    h = n(427175);
function x(e) {
    let { selectedIndex: t, setSelectedIndex: n } = e,
        x = s.useMemo(() => m.J2[t], [t]),
        _ = s.useCallback(() => {
            let e = (t + 1) % m.J2.length;
            u.default.track(g.rMx.TRY_IT_OUT_PRESET_SHUFFLED, { preset: m.J2[e].presetName }), n(e);
        }, [t, n]),
        p = (0, r.e7)([o.Z], () => o.Z.lastSuccessfulFetch);
    s.useEffect(() => {
        var e;
        (0, d.x3)({
            bannerImage: x.bannerImageUrl,
            themeColors: x.themeColors,
            avatarDecoration: null != x.avatarDecorationSkuId ? (null === (e = o.Z.getProduct(x.avatarDecorationSkuId)) || void 0 === e ? void 0 : e.items[0]) : void 0
        });
    }, [x, p]);
    let E = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
        C = (0, c.g2)({ useReducedMotion: E });
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsx)(l.P3F, {
                onClick: () => {
                    _(), C.startAnimation(!1);
                },
                className: h.button,
                'aria-label': 'Shuffle Preset',
                children: C.render()
            }),
            (0, i.jsxs)(l.P3F, {
                onClick: () => {
                    _(), C.startAnimation(!1);
                },
                'aria-label': ''.concat((0, m._h)(x.presetName), ' - Click to Shuffle Preset'),
                className: h.select,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        src: x.presetBackgroundUrl,
                        className: h.presetImage
                    }),
                    (0, i.jsx)(l.Text, {
                        className: h.presetLabel,
                        variant: 'text-sm/bold',
                        color: 'always-white',
                        children: (0, m._h)(x.presetName)
                    })
                ]
            })
        ]
    });
}
