n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(696451),
    a = n(317525),
    r = n(183555),
    o = n(1659),
    d = n(166005);
function c(e) {
    let { userId: t, guild: n } = e,
        c = (0, l.bG)([s.Ay], () => s.Ay.isMember(n.id, t)),
        u = (0, l.bG)([s.Ay], () => s.Ay.getMember(n.id, t)),
        h = u?.roles,
        A = (0, l.yK)([a.A], () => a.A.getManyRoles(n.id, h ?? []).sort(o.m), [h, n.id]),
        { trackUserProfileAction: x } = (0, r.NJ)();
    return c
        ? (0, i.jsx)(d.Ql, {
              userId: t,
              guild: n,
              roles: A,
              onAddRole: () => x({ action: "ADD_ROLE" }),
              onRemoveRole: () => x({ action: "REMOVE_ROLE" }),
              onExpand: () => x({ action: "EXPAND_ROLES" }),
              onCollapse: () => x({ action: "COLLAPSE_ROLES" }),
              allowEditing: !0,
          })
        : null;
}
