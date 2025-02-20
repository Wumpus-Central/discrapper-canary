n.d(t, { L: () => m });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(568611),
    l = n(693789),
    o = n(564566),
    c = n(387987),
    d = n(232474);
let u = () =>
        (0, r.jsx)('div', {
            className: o.gifContainer,
            children: (0, r.jsx)('img', {
                src: d.Z,
                className: o.gif,
                alt: 'Orb GIF'
            })
        }),
    m = (e) => {
        let { ctaText: t, ctaOnClick: n, linkText: i, linkTo: d } = e;
        return (0, r.jsxs)('div', {
            className: s()(o.container, c.baseCardOutline),
            children: [
                (0, r.jsx)(u, {}),
                (0, r.jsx)(l.zx, {
                    className: o.ctaButton,
                    color: l.zx.Colors.BRAND,
                    look: l.zx.Looks.FILLED,
                    onClick: n,
                    fullWidth: !0,
                    children: t
                }),
                (0, r.jsx)(a.rU, {
                    to: { pathname: d },
                    className: o.learnMoreLink,
                    children: i
                })
            ]
        });
    };
