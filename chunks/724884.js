n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(388032),
    l = n(330479),
    c = n(247844);
function u(e) {
    let { className: t, icon: n, children: i } = e;
    return (0, r.jsxs)('li', {
        className: a()(l.card, t),
        children: [
            (0, r.jsx)(n, { className: l.icon }),
            (0, r.jsx)(o.Text, {
                className: l.__invalid_description,
                variant: 'text-sm/medium',
                children: i
            })
        ]
    });
}
let d = function (e) {
    let { cardClassName: t } = e;
    return (0, r.jsxs)('div', {
        className: l.wrapper,
        children: [
            (0, r.jsxs)('div', {
                className: l.content,
                children: [
                    (0, r.jsx)(o.X6q, {
                        className: l.heading,
                        color: 'always-white',
                        variant: 'heading-xxl/bold',
                        children: s.intl.string(s.t.IzKs3t)
                    }),
                    (0, r.jsxs)('ul', {
                        className: l.cards,
                        children: [
                            (0, r.jsx)(u, {
                                className: t,
                                icon: o.$zw,
                                children: s.intl.string(s.t.TZigSE)
                            }),
                            (0, r.jsx)(u, {
                                className: t,
                                icon: (e) =>
                                    (0, r.jsx)('img', {
                                        className: a()(e.className, l.iconImage),
                                        src: c,
                                        alt: ''
                                    }),
                                children: s.intl.string(s.t.hjQuV1)
                            }),
                            (0, r.jsx)(u, {
                                className: t,
                                icon: o.lZ8,
                                children: s.intl.string(s.t['2RUcaG'])
                            }),
                            (0, r.jsx)(u, {
                                className: t,
                                icon: o.h_8,
                                children: s.intl.string(s.t.bJoZKS)
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', { className: l.backgroundImages })
        ]
    });
};
