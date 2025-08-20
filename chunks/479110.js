n.d(t, { Z: () => c });
var r = n(951288),
    i = n(442837),
    l = n(739566),
    o = n(594174),
    a = n(66420),
    s = n(388032);
function c(e) {
    let { message: t, channel: n, compact: c } = e,
        u = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        d = (0, l.ZP)(t),
        p =
            (null == u ? void 0 : u.id) === t.author.id
                ? s.intl.string(s.t.huMLgY)
                : s.intl.format(s.t.PVAL4O, { username: null == d ? void 0 : d.nick });
    return (0, r.jsx)(a.Z, {
        channel: n,
        message: t,
        compact: c,
        content: p,
    });
}
