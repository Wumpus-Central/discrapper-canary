n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(388032),
    l = n(12791),
    u = n(247844);
function c(e) {
    let { className: t, icon: n, children: r } = e;
    return (0, i.jsxs)('li', {
        className: a()(l.card, t),
        children: [
            (0, i.jsx)(n, { className: l.icon }),
            (0, i.jsx)(s.Text, {
                className: l.__invalid_description,
                variant: 'text-sm/medium',
                children: r
            })
        ]
    });
}
let d = function (e) {
    let { cardClassName: t } = e;
    return (0, i.jsxs)('div', {
        className: l.wrapper,
        children: [
            (0, i.jsxs)('div', {
                className: l.content,
                children: [
                    (0, i.jsx)(s.X6q, {
                        className: l.heading,
                        color: 'always-white',
                        variant: 'heading-xxl/bold',
                        children: o.intl.string(o.t.IzKs3t)
                    }),
                    (0, i.jsxs)('ul', {
                        className: l.cards,
                        children: [
                            (0, i.jsx)(c, {
                                className: t,
                                icon: s.$zw,
                                children: o.intl.string(o.t.TZigSE)
                            }),
                            (0, i.jsx)(c, {
                                className: t,
                                icon: (e) =>
                                    (0, i.jsx)('img', {
                                        className: a()(e.className, l.iconImage),
                                        src: u,
                                        alt: ''
                                    }),
                                children: o.intl.string(o.t.hjQuV1)
                            }),
                            (0, i.jsx)(c, {
                                className: t,
                                icon: s.lZ8,
                                children: o.intl.string(o.t['2RUcaG'])
                            }),
                            (0, i.jsx)(c, {
                                className: t,
                                icon: s.h_8,
                                children: o.intl.string(o.t.bJoZKS)
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', { className: l.backgroundImages })
        ]
    });
};
