n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(925329),
    s = n(202380);
function c(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    if (1 === n.length)
        return (0, i.jsx)('div', {
            className: r()(s.container, t, l && s.modeMuted),
            children: (0, i.jsx)(o.Z, {
                game: n[0].application,
                className: s.icon20px
            })
        });
    {
        let e = n.length - 1;
        return (0, i.jsxs)('div', {
            className: r()(s.container, t, l && s.modeMuted),
            children: [
                (0, i.jsx)(o.Z, {
                    game: n[0].application,
                    className: s.icon20px
                }),
                2 === n.length
                    ? (0, i.jsx)(o.Z, {
                          game: n[1].application,
                          className: s.icon20px
                      })
                    : (0, i.jsx)(a.Text, {
                          className: s.overflow,
                          variant: 'text-xs/bold',
                          color: 'interactive-active',
                          children: '+'.concat(e)
                      })
            ]
        });
    }
}
