n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
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
        g = (0, o.g2)({ useReducedMotion: m }),
        { name: p, header: h } = i.useMemo(() => {
            let e = (0, c.Ib)(t);
            return {
                name: e.getName(),
                header: e.getHeaderSrc()
            };
        }, [t]);
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            (0, r.jsx)(a.P3F, {
                onClick: () => {
                    n(), g.startAnimation(!1);
                },
                className: u.button,
                'aria-label': d.NW.string(d.t['44yJxs']),
                children: g.render()
            }),
            (0, r.jsxs)(a.P3F, {
                onClick: () => {
                    n(), g.startAnimation(!1);
                },
                'aria-label': ''.concat(p, ': ').concat(d.NW.string(d.t['44yJxs'])),
                className: u.select,
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        src: h,
                        className: u.presetImage
                    }),
                    (0, r.jsx)(a.Text, {
                        className: u.presetLabel,
                        variant: 'text-sm/bold',
                        color: 'always-white',
                        children: p
                    })
                ]
            })
        ]
    });
}
