(n.d(t, {
    F: () => u,
    Z: () => d
}),
    n(388685));
var r = n(442837),
    i = n(601964),
    a = n(430824),
    o = n(496675),
    s = n(594174),
    l = n(700785),
    c = n(981631);
function u(e, t) {
    let [n, r, u] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default, a.Z, o.Z],
        d = r.getGuild(e),
        _ = n.getUser(t);
    return (
        !(
            null == d ||
            null == _ ||
            _.isNonUserBot() ||
            (0, i.eM)(d, _) ||
            l.BT({
                permission: c.Plq.ADMINISTRATOR,
                user: _,
                context: d
            })
        ) && u.canManageUser(c.Plq.MODERATE_MEMBERS, _, d)
    );
}
function d(e, t) {
    return (0, r.e7)([s.default, a.Z, o.Z], () => u(e, t, [s.default, a.Z, o.Z]), [e, t]);
}
