n.d(t, { L: () => m });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(568611),
    l = n(693789),
    o = n(116390),
    c = n(194733),
    d = n(660028);
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
        let { ctaText: t, ctaOnClick: n, linkText: r, linkTo: d } = e;
        return (0, i.jsxs)('div', {
            className: a()(o.container, c.baseCardOutline),
            children: [
                (0, i.jsx)(u, {}),
                (0, i.jsx)(l.zx, {
                    className: o.ctaButton,
                    color: l.zx.Colors.BRAND,
                    look: l.zx.Looks.FILLED,
                    onClick: n,
                    fullWidth: !0,
                    children: t
                }),
                (0, i.jsx)(s.rU, {
                    to: { pathname: d },
                    className: o.learnMoreLink,
                    children: r
                })
            ]
        });
    };
