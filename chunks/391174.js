(n.d(t, { Z: () => u }), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(725436),
    l = n(974844),
    c = n(73433);
function u(e) {
    let { description: t, className: n, guildId: a, truncate: u = !0 } = e,
        d = i.useMemo(
            () =>
                (0, s.m)(t, !0, {
                    guildId: a,
                    allowLinks: !0,
                    allowHeading: !0,
                    allowList: !0
                }),
            [t, a]
        );
    return (0, r.jsx)('div', {
        className: o()(l.descriptionText, n, c.markup, { [l.truncate]: u }),
        children: d
    });
}
