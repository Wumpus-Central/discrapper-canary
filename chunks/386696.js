n.d(t, {
    F: () => c,
    Z: () => u
}),
    n(388685);
var r = n(442837),
    i = n(430824),
    a = n(496675),
    o = n(594174),
    s = n(700785),
    l = n(981631);
function c(e, t) {
    let [n, r, c] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.default, i.Z, a.Z],
        u = r.getGuild(e),
        d = n.getUser(t);
    return (
        !(
            null == u ||
            null == d ||
            d.isNonUserBot() ||
            u.isOwner(d) ||
            s.BT({
                permission: l.Plq.ADMINISTRATOR,
                user: d,
                context: u
            })
        ) && c.canManageUser(l.Plq.MODERATE_MEMBERS, d, u)
    );
}
function u(e, t) {
    return (0, r.e7)([o.default, i.Z, a.Z], () => c(e, t, [o.default, i.Z, a.Z]), [e, t]);
}
