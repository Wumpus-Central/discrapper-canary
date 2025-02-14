n.d(t, { L: () => m });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(568611),
    a = n(693789),
    o = n(116390),
    c = n(194733),
    d = n(232474);
let u = () =>
        (0, i.jsx)('div', {
            className: o.gifContainer,
            children: (0, i.jsx)('img', {
                src: d.Z,
                className: o.gif,
                alt: 'Orb GIF'
            })
        }),
    m = (e) => {
        let { ctaText: t, ctaOnClick: n, linkText: s, linkTo: d } = e;
        return (0, i.jsxs)('div', {
            className: r()(o.container, c.baseCardOutline),
            children: [
                (0, i.jsx)(u, {}),
                (0, i.jsx)(a.zx, {
                    className: o.ctaButton,
                    color: a.zx.Colors.BRAND,
                    look: a.zx.Looks.FILLED,
                    onClick: n,
                    fullWidth: !0,
                    children: t
                }),
                (0, i.jsx)(l.rU, {
                    to: { pathname: d },
                    className: o.learnMoreLink,
                    children: s
                })
            ]
        });
    };
