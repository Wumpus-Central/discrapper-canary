n.d(t, { Z: () => m });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(481060),
    l = n(607070),
    o = n(667105),
    c = n(211712),
    d = n(388032),
    u = n(561234);
function m(e) {
    let { preset: t, onShuffle: n } = e,
        m = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        p = (0, o.g2)({ useReducedMotion: m }),
        { name: g, header: h } = r.useMemo(() => {
            let e = (0, c.Ib)(t);
            return {
                name: e.getName(),
                header: e.getHeaderSrc()
            };
        }, [t]);
    return (0, i.jsxs)('div', {
        className: u.container,
        children: [
            (0, i.jsx)(a.P3F, {
                onClick: () => {
                    (n(), p.startAnimation(!1));
                },
                className: u.button,
                'aria-label': d.intl.string(d.t['44yJxs']),
                children: p.render()
            }),
            (0, i.jsxs)(a.P3F, {
                onClick: () => {
                    (n(), p.startAnimation(!1));
                },
                'aria-label': ''.concat(g, ': ').concat(d.intl.string(d.t['44yJxs'])),
                className: u.select,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        src: h,
                        className: u.presetImage
                    }),
                    (0, i.jsx)(a.Text, {
                        className: u.presetLabel,
                        variant: 'text-sm/bold',
                        color: 'always-white',
                        children: g
                    })
                ]
            })
        ]
    });
}
