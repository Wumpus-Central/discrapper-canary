n.d(e, {
    Z: function () {
        return o;
    }
});
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(725436),
    u = n(54670),
    c = n(665162);
function o(t) {
    let { description: e, className: n, guildId: i, truncate: o = !0 } = t,
        d = r.useMemo(
            () =>
                (0, s.m)(e, !0, {
                    guildId: i,
                    allowLinks: !0,
                    allowHeading: !0,
                    allowList: !0
                }),
            [e, i]
        );
    return (0, l.jsx)('div', {
        className: a()(u.descriptionText, n, c.markup, { [u.truncate]: o }),
        children: d
    });
}
