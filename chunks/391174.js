n.d(t, { Z: () => u }), n(266796);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    c = n(725436),
    s = n(974844),
    o = n(73433);
function u(e) {
    let { description: t, className: n, guildId: a, truncate: u = !0 } = e,
        d = l.useMemo(
            () =>
                (0, c.m)(t, !0, {
                    guildId: a,
                    allowLinks: !0,
                    allowHeading: !0,
                    allowList: !0
                }),
            [t, a]
        );
    return (0, r.jsx)('div', {
        className: i()(s.descriptionText, n, o.markup, { [s.truncate]: u }),
        children: d
    });
}
