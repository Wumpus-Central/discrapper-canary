n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(607070),
    o = n(597688),
    c = n(667105),
    d = n(350327),
    u = n(626135),
    m = n(211712),
    g = n(981631),
    p = n(625335);
function h(e) {
    let { selectedIndex: t, setSelectedIndex: n } = e,
        h = i.useMemo(() => m.J2[t], [t]),
        f = i.useCallback(() => {
            let e = (t + 1) % m.J2.length;
            u.default.track(g.rMx.TRY_IT_OUT_PRESET_SHUFFLED, { preset: m.J2[e].presetName }), n(e);
        }, [t, n]),
        b = (0, s.e7)([o.Z], () => o.Z.lastSuccessfulFetch);
    i.useEffect(() => {
        var e;
        (0, d.x3)({
            bannerImage: h.bannerImageUrl,
            themeColors: h.themeColors,
            avatarDecoration: null != h.avatarDecorationSkuId ? (null === (e = o.Z.getProduct(h.avatarDecorationSkuId)) || void 0 === e ? void 0 : e.items[0]) : void 0
        });
    }, [h, b]);
    let N = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        x = (0, c.g2)({ useReducedMotion: N });
    return (0, r.jsxs)('div', {
        className: p.container,
        children: [
            (0, r.jsx)(a.P3F, {
                onClick: () => {
                    f(), x.startAnimation(!1);
                },
                className: p.button,
                'aria-label': 'Shuffle Preset',
                children: x.render()
            }),
            (0, r.jsxs)(a.P3F, {
                onClick: () => {
                    f(), x.startAnimation(!1);
                },
                'aria-label': ''.concat((0, m._h)(h.presetName), ' - Click to Shuffle Preset'),
                className: p.select,
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        src: h.presetBackgroundUrl,
                        className: p.presetImage
                    }),
                    (0, r.jsx)(a.Text, {
                        className: p.presetLabel,
                        variant: 'text-sm/bold',
                        color: 'always-white',
                        children: (0, m._h)(h.presetName)
                    })
                ]
            })
        ]
    });
}
