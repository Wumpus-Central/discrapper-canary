n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(200651);
n(192379);
var a = n(120356),
    l = n.n(a),
    s = n(481060),
    c = n(925329),
    o = n(520202);
function r(e) {
    let { className: t, embeddedApps: n, muted: a } = e;
    if (n.length <= 0) return null;
    if (1 === n.length)
        return (0, i.jsx)('div', {
            className: l()(o.container, t, a && o.modeMuted),
            children: (0, i.jsx)(c.Z, {
                game: n[0].application,
                className: o.icon20px
            })
        });
    {
        let e = n.length - 1;
        return (0, i.jsxs)('div', {
            className: l()(o.container, t, a && o.modeMuted),
            children: [
                (0, i.jsx)(c.Z, {
                    game: n[0].application,
                    className: o.icon20px
                }),
                2 === n.length
                    ? (0, i.jsx)(c.Z, {
                          game: n[1].application,
                          className: o.icon20px
                      })
                    : (0, i.jsx)(s.Text, {
                          className: o.overflow,
                          variant: 'text-xs/bold',
                          color: 'interactive-active',
                          children: '+'.concat(e)
                      })
            ]
        });
    }
}
