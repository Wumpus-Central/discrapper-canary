t.d(n, {
    Z: function () {
        return u;
    }
});
var a = t(200651),
    i = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(481060),
    s = t(388032),
    c = t(928261),
    d = t(902294);
function u(e) {
    let { heading: n = s.intl.string(s.t.NGw8v7), body: t = s.intl.string(s.t['1XZRY2']), className: r } = e;
    return (0, a.jsxs)('div', {
        className: l()(c.container, r),
        children: [
            (0, a.jsx)('div', {
                className: c.imageContainer,
                children: (0, a.jsx)('img', {
                    className: c.image,
                    src: d,
                    alt: s.intl.string(s.t['/UJaIy'])
                })
            }),
            (0, a.jsxs)(i.Fragment, {
                children: [
                    (0, a.jsx)(o.Heading, {
                        variant: 'heading-xl/semibold',
                        className: c.header,
                        children: n
                    }),
                    (0, a.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: t
                    })
                ]
            })
        ]
    });
}
