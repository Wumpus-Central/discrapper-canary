n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(925329),
    s = n(239961);
function c(e) {
    let { className: t, embeddedApps: n, muted: i } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, r.jsx)('div', {
                className: l()(s.container, t, i && s.modeMuted),
                children: (0, r.jsx)(a.Z, {
                    game: n[0].application,
                    className: s.icon20px
                })
            });
        let e = n.length - 1;
        return (0, r.jsxs)('div', {
            className: l()(s.container, t, i && s.modeMuted),
            children: [
                (0, r.jsx)(a.Z, {
                    game: n[0].application,
                    className: s.icon20px
                }),
                2 === n.length
                    ? (0, r.jsx)(a.Z, {
                          game: n[1].application,
                          className: s.icon20px
                      })
                    : (0, r.jsx)(o.Text, {
                          className: s.overflow,
                          variant: 'text-xs/bold',
                          color: 'interactive-active',
                          children: '+'.concat(e)
                      })
            ]
        });
    }
}
