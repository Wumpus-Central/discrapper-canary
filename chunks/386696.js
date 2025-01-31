n.d(t, {
    F: () => u,
    Z: () => c
}),
    n(47120);
var i = n(442837),
    r = n(430824),
    a = n(496675),
    s = n(594174),
    o = n(700785),
    l = n(981631);
function u(e, t) {
    let [n, i, u] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default, r.Z, a.Z],
        c = i.getGuild(e),
        d = n.getUser(t);
    return (
        !(
            null == c ||
            null == d ||
            d.isNonUserBot() ||
            c.isOwner(d) ||
            o.BT({
                permission: l.Plq.ADMINISTRATOR,
                user: d,
                context: c
            })
        ) && u.canManageUser(l.Plq.MODERATE_MEMBERS, d, c)
    );
}
function c(e, t) {
    return (0, i.e7)([s.default, r.Z, a.Z], () => u(e, t, [s.default, r.Z, a.Z]), [e, t]);
}
