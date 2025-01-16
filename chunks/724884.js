var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(388032),
    u = r(523184),
    c = r(247844);
function d(e) {
    let { className: n, icon: r, children: a } = e;
    return (0, i.jsxs)('li', {
        className: s()(u.card, n),
        children: [
            (0, i.jsx)(r, { className: u.icon }),
            (0, i.jsx)(o.Text, {
                className: u.__invalid_description,
                variant: 'text-sm/medium',
                children: a
            })
        ]
    });
}
function f(e) {
    let { cardClassName: n } = e;
    return (0, i.jsxs)('div', {
        className: u.wrapper,
        children: [
            (0, i.jsxs)('div', {
                className: u.content,
                children: [
                    (0, i.jsx)(o.Heading, {
                        className: u.heading,
                        color: 'always-white',
                        variant: 'heading-xxl/bold',
                        children: l.intl.string(l.t.IzKs3t)
                    }),
                    (0, i.jsxs)('ul', {
                        className: u.cards,
                        children: [
                            (0, i.jsx)(d, {
                                className: n,
                                icon: o.BoostTier2SimpleIcon,
                                children: l.intl.string(l.t.TZigSE)
                            }),
                            (0, i.jsx)(d, {
                                className: n,
                                icon: (e) =>
                                    (0, i.jsx)('img', {
                                        className: s()(e.className, u.iconImage),
                                        src: c,
                                        alt: ''
                                    }),
                                children: l.intl.string(l.t.hjQuV1)
                            }),
                            (0, i.jsx)(d, {
                                className: n,
                                icon: o.ShieldUserIcon,
                                children: l.intl.string(l.t['2RUcaG'])
                            }),
                            (0, i.jsx)(d, {
                                className: n,
                                icon: o.HeartIcon,
                                children: l.intl.string(l.t.bJoZKS)
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', { className: u.backgroundImages })
        ]
    });
}
n.Z = f;
