n.d(t, { Z: () => c });
var r = n(200651),
    i = n(442837),
    a = n(739566),
    o = n(594174),
    l = n(66420),
    s = n(388032);
function c(e) {
    let { message: t, channel: n, compact: c } = e,
        u = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        d = (0, a.ZP)(t),
        p = (null == u ? void 0 : u.id) === t.author.id ? s.NW.string(s.t.huMLgY) : s.NW.format(s.t.PVAL4O, { username: null == d ? void 0 : d.nick });
    return (0, r.jsx)(l.Z, {
        channel: n,
        compact: c,
        content: p
    });
}
