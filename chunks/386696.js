n.d(t, {
    F: () => c,
    Z: () => u
}),
    n(47120);
var r = n(442837),
    i = n(430824),
    o = n(496675),
    a = n(594174),
    s = n(700785),
    l = n(981631);
function c(e, t) {
    let [n, r, c] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.default, i.Z, o.Z],
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
    return (0, r.e7)([a.default, i.Z, o.Z], () => c(e, t, [a.default, i.Z, o.Z]), [e, t]);
}
