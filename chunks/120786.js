n.d(t, { L: () => u });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(568611),
    l = n(693789),
    o = (n(965789), n(714513)),
    c = n(61822);
let d = () =>
        (0, i.jsx)('div', {
            className: o.gifContainer,
            children: (0, i.jsx)('img', {
                src: n(37219),
                className: o.orbSVG,
                alt: 'Orb GIF'
            })
        }),
    u = (e) => {
        let { ctaText: t, ctaOnClick: n, linkText: r, linkTo: u } = e;
        return (0, i.jsxs)('div', {
            className: a()(o.container, c.baseCardOutline),
            children: [
                (0, i.jsx)(d, {}),
                (0, i.jsx)(l.zx, {
                    className: o.ctaButton,
                    color: l.zx.Colors.BRAND,
                    look: l.zx.Looks.FILLED,
                    onClick: n,
                    fullWidth: !0,
                    children: t
                }),
                (0, i.jsx)(s.rU, {
                    to: { pathname: u },
                    className: o.learnMoreLink,
                    children: r
                })
            ]
        });
    };
