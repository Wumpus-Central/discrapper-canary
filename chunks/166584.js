n.d(t, { Z: () => u }), n(642613);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(271383),
    o = n(485386),
    s = n(785717),
    l = n(635042),
    c = n(705007);
function u(e) {
    let { userId: t, guild: n } = e,
        u = (0, i.e7)([a.ZP], () => a.ZP.getMember(n.id, t)),
        d = null == u ? void 0 : u.roles,
        f = (0, i.Wu)([o.Z], () => o.Z.getManyRoles(n.id, null != d ? d : []).sort(l.Z), [d, n.id]),
        { trackUserProfileAction: p } = (0, s.KZ)();
    return (0, r.jsx)(c.F, {
        userId: t,
        guild: n,
        roles: f,
        onAddRole: () => p({ action: "ADD_ROLE" }),
        onRemoveRole: () => p({ action: "REMOVE_ROLE" }),
        onExpand: () => p({ action: "EXPAND_ROLES" }),
        onCollapse: () => p({ action: "COLLAPSE_ROLES" }),
        allowEditing: !0,
    });
}
