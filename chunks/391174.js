n.d(t, { Z: () => o });
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(725436),
    u = n(903025),
    c = n(642367);
function o(e) {
    let { description: t, className: n, guildId: i, truncate: o = !0 } = e,
        d = r.useMemo(
            () =>
                (0, s.m)(t, !0, {
                    guildId: i,
                    allowLinks: !0,
                    allowHeading: !0,
                    allowList: !0
                }),
            [t, i]
        );
    return (0, l.jsx)('div', {
        className: a()(u.descriptionText, n, c.markup, { [u.truncate]: o }),
        children: d
    });
}
