n.d(t, { Z: () => u }), n(953529);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(725436),
    o = n(947469),
    c = n(430864);
function u(e) {
    let { description: t, className: n, guildId: i, truncate: u = !0 } = e,
        d = l.useMemo(
            () =>
                (0, a.m)(t, !0, {
                    guildId: i,
                    allowLinks: !0,
                    allowHeading: !0,
                    allowList: !0,
                }),
            [t, i],
        );
    return (0, r.jsx)("div", {
        className: s()(o.descriptionText, n, c.markup, { [o.truncate]: u }),
        children: d,
    });
}
