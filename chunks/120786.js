n.d(t, { L: () => m });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(568611),
    a = n(693789),
    o = n(965789),
    c = n(842055),
    d = n(588245);
let u = () =>
        (0, i.jsx)('div', {
            className: c.gifContainer,
            children: (0, i.jsx)('img', {
                src: o.r,
                className: c.gif,
                alt: 'Orb GIF'
            })
        }),
    m = (e) => {
        let { ctaText: t, ctaOnClick: n, linkText: s, linkTo: o } = e;
        return (0, i.jsxs)('div', {
            className: r()(c.container, d.baseCardOutline),
            children: [
                (0, i.jsx)(u, {}),
                (0, i.jsx)(a.zx, {
                    className: c.ctaButton,
                    color: a.zx.Colors.BRAND,
                    look: a.zx.Looks.FILLED,
                    onClick: n,
                    fullWidth: !0,
                    children: t
                }),
                (0, i.jsx)(l.rU, {
                    to: { pathname: o },
                    className: c.learnMoreLink,
                    children: s
                })
            ]
        });
    };
