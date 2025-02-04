n.d(t, { L: () => u });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(568611),
    a = n(693789),
    o = (n(965789), n(842055)),
    c = n(588245);
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
        let { ctaText: t, ctaOnClick: n, linkText: s, linkTo: u } = e;
        return (0, i.jsxs)('div', {
            className: r()(o.container, c.baseCardOutline),
            children: [
                (0, i.jsx)(d, {}),
                (0, i.jsx)(a.zx, {
                    className: o.ctaButton,
                    color: a.zx.Colors.BRAND,
                    look: a.zx.Looks.FILLED,
                    onClick: n,
                    fullWidth: !0,
                    children: t
                }),
                (0, i.jsx)(l.rU, {
                    to: { pathname: u },
                    className: o.learnMoreLink,
                    children: s
                })
            ]
        });
    };
