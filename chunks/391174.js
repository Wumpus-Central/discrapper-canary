n.d(t, { Z: () => u }), n(953529);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    c = n(725436),
    s = n(974844),
    o = n(73433);
function u(e) {
    let { description: t, className: n, guildId: i, truncate: u = !0 } = e,
        d = l.useMemo(
            () =>
                (0, c.m)(t, !0, {
                    guildId: i,
                    allowLinks: !0,
                    allowHeading: !0,
                    allowList: !0
                }),
            [t, i]
        );
    return (0, r.jsx)('div', {
        className: a()(s.descriptionText, n, o.markup, { [s.truncate]: u }),
        children: d
    });
}
