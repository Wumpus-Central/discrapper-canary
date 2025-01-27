n.d(t, {
    L: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(568611),
    s = n(693789),
    a = n(842055);
let l = () => (0, i.jsx)('hr', { className: a.sectionDivider }),
    o = () =>
        (0, i.jsx)('div', {
            className: a.gifContainer,
            children: (0, i.jsx)('img', {
                src: n(37219),
                className: a.gif,
                alt: 'Orb GIF'
            })
        }),
    c = (e) => {
        let { ctaText: t, ctaOnClick: n, linkText: c, linkTo: d } = e;
        return (0, i.jsxs)('div', {
            className: a.container,
            children: [
                (0, i.jsx)(o, {}),
                (0, i.jsx)(s.zx, {
                    color: s.zx.Colors.BRAND,
                    look: s.zx.Looks.FILLED,
                    onClick: n,
                    fullWidth: !0,
                    children: t
                }),
                (0, i.jsx)(l, {}),
                (0, i.jsx)(r.rU, {
                    to: { pathname: d },
                    className: a.learnMoreLink,
                    children: c
                })
            ]
        });
    };
