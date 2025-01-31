n.d(t, { Z: () => r });
var a = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    c = n(925329),
    o = n(520202);
function r(e) {
    let { className: t, embeddedApps: n, muted: i } = e;
    if (n.length <= 0) return null;
    if (1 === n.length)
        return (0, a.jsx)('div', {
            className: l()(o.container, t, i && o.modeMuted),
            children: (0, a.jsx)(c.Z, {
                game: n[0].application,
                className: o.icon20px
            })
        });
    {
        let e = n.length - 1;
        return (0, a.jsxs)('div', {
            className: l()(o.container, t, i && o.modeMuted),
            children: [
                (0, a.jsx)(c.Z, {
                    game: n[0].application,
                    className: o.icon20px
                }),
                2 === n.length
                    ? (0, a.jsx)(c.Z, {
                          game: n[1].application,
                          className: o.icon20px
                      })
                    : (0, a.jsx)(s.Text, {
                          className: o.overflow,
                          variant: 'text-xs/bold',
                          color: 'interactive-active',
                          children: '+'.concat(e)
                      })
            ]
        });
    }
}
