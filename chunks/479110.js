n.d(t, { Z: () => c });
var r = n(255367),
    i = n(442837),
    a = n(739566),
    o = n(594174),
    s = n(66420),
    l = n(388032);
function c(e) {
    let { message: t, channel: n, compact: c } = e,
        u = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        d = (0, a.ZP)(t),
        f = (null == u ? void 0 : u.id) === t.author.id ? l.intl.string(l.t.huMLgY) : l.intl.format(l.t.PVAL4O, { username: null == d ? void 0 : d.nick });
    return (0, r.jsx)(s.Z, {
        channel: n,
        message: t,
        compact: c,
        content: f
    });
}
