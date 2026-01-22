n.d(t, {
    A: () => u,
}),
    n(638769);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(696451),
    s = n(317525),
    o = n(183555),
    l = n(1659),
    c = n(166005);

function u(e) {
    let { userId: t, guild: n } = e,
        u = (0, i.bG)([a.Ay], () => a.Ay.getMember(n.id, t)),
        d = null == u ? void 0 : u.roles,
        f = (0, i.yK)([s.A], () => s.A.getManyRoles(n.id, null != d ? d : []).sort(l.m), [d, n.id]),
        { trackUserProfileAction: p } = (0, o.NJ)();
    return (0, r.jsx)(c.Q, {
        userId: t,
        guild: n,
        roles: f,
        onAddRole: () =>
            p({
                action: "ADD_ROLE",
            }),
        onRemoveRole: () =>
            p({
                action: "REMOVE_ROLE",
            }),
        onExpand: () =>
            p({
                action: "EXPAND_ROLES",
            }),
        onCollapse: () =>
            p({
                action: "COLLAPSE_ROLES",
            }),
        allowEditing: !0,
    });
}
