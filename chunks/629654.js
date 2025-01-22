n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(607070),
    o = n(597688),
    c = n(667105),
    d = n(350327),
    u = n(626135),
    m = n(211712),
    g = n(981631),
    h = n(427175);
function p(e) {
    let { selectedIndex: t, setSelectedIndex: n } = e,
        p = r.useMemo(() => m.J2[t], [t]),
        x = r.useCallback(() => {
            let e = (t + 1) % m.J2.length;
            u.default.track(g.rMx.TRY_IT_OUT_PRESET_SHUFFLED, { preset: m.J2[e].presetName }), n(e);
        }, [t, n]),
        f = (0, s.e7)([o.Z], () => o.Z.lastSuccessfulFetch);
    r.useEffect(() => {
        var e;
        (0, d.x3)({
            bannerImage: p.bannerImageUrl,
            themeColors: p.themeColors,
            avatarDecoration: null != p.avatarDecorationSkuId ? (null === (e = o.Z.getProduct(p.avatarDecorationSkuId)) || void 0 === e ? void 0 : e.items[0]) : void 0
        });
    }, [p, f]);
    let E = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        _ = (0, c.g2)({ useReducedMotion: E });
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsx)(a.Clickable, {
                onClick: () => {
                    x(), _.startAnimation(!1);
                },
                className: h.button,
                'aria-label': 'Shuffle Preset',
                children: _.render()
            }),
            (0, i.jsxs)(a.Clickable, {
                onClick: () => {
                    x(), _.startAnimation(!1);
                },
                'aria-label': ''.concat((0, m._h)(p.presetName), ' - Click to Shuffle Preset'),
                className: h.select,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        src: p.presetBackgroundUrl,
                        className: h.presetImage
                    }),
                    (0, i.jsx)(a.Text, {
                        className: h.presetLabel,
                        variant: 'text-sm/bold',
                        color: 'always-white',
                        children: (0, m._h)(p.presetName)
                    })
                ]
            })
        ]
    });
}
