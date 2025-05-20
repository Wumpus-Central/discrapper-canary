n.d(t, { Z: () => g });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(481060),
    a = n(607070),
    o = n(667105),
    c = n(211712),
    d = n(388032),
    u = n(561234);
function g(e) {
    let { preset: t, onShuffle: n } = e,
        g = (0, s.e7)([a.Z], () => a.Z.useReducedMotion),
        m = (0, o.g2)({ useReducedMotion: g }),
        { name: p, header: h } = r.useMemo(() => {
            let e = (0, c.Ib)(t);
            return {
                name: e.getName(),
                header: e.getHeaderSrc()
            };
        }, [t]);
    return (0, i.jsxs)('div', {
        className: u.container,
        children: [
            (0, i.jsx)(l.P3F, {
                onClick: () => {
                    n(), m.startAnimation(!1);
                },
                className: u.button,
                'aria-label': d.intl.string(d.t['44yJxs']),
                children: m.render()
            }),
            (0, i.jsxs)(l.P3F, {
                onClick: () => {
                    n(), m.startAnimation(!1);
                },
                'aria-label': ''.concat(p, ': ').concat(d.intl.string(d.t['44yJxs'])),
                className: u.select,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        src: h,
                        className: u.presetImage
                    }),
                    (0, i.jsx)(l.Text, {
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
