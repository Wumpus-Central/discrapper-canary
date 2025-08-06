n.d(t, { Z: () => u }), n(953529);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(725436),
    l = n(974844),
    c = n(73433);
function u(e) {
    let { description: t, className: n, guildId: o, truncate: u = !0 } = e,
        d = i.useMemo(
            () =>
                (0, s.m)(t, !0, {
                    guildId: o,
                    allowLinks: !0,
                    allowHeading: !0,
                    allowList: !0,
                }),
            [t, o],
        );
    return (0, r.jsx)("div", {
        className: a()(l.descriptionText, n, c.markup, { [l.truncate]: u }),
        children: d,
    });
}
