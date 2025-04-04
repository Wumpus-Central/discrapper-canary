n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(388032),
    l = n(330479),
    c = n(247844);
function u(e) {
    let { className: t, icon: n, children: i } = e;
    return (0, r.jsxs)('li', {
        className: o()(l.card, t),
        children: [
            (0, r.jsx)(n, { className: l.icon }),
            (0, r.jsx)(a.Text, {
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
                    (0, r.jsx)(a.X6q, {
                        className: l.heading,
                        color: 'always-white',
                        variant: 'heading-xxl/bold',
                        children: s.NW.string(s.t.IzKs3t)
                    }),
                    (0, r.jsxs)('ul', {
                        className: l.cards,
                        children: [
                            (0, r.jsx)(u, {
                                className: t,
                                icon: a.$zw,
                                children: s.NW.string(s.t.TZigSE)
                            }),
                            (0, r.jsx)(u, {
                                className: t,
                                icon: (e) =>
                                    (0, r.jsx)('img', {
                                        className: o()(e.className, l.iconImage),
                                        src: c,
                                        alt: ''
                                    }),
                                children: s.NW.string(s.t.hjQuV1)
                            }),
                            (0, r.jsx)(u, {
                                className: t,
                                icon: a.lZ8,
                                children: s.NW.string(s.t['2RUcaG'])
                            }),
                            (0, r.jsx)(u, {
                                className: t,
                                icon: a.h_8,
                                children: s.NW.string(s.t.bJoZKS)
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', { className: l.backgroundImages })
        ]
    });
};
