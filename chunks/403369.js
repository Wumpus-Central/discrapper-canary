l.d(s, { A: () => u });
var i = l(627968);
l(64700);
var t = l(17928),
    n = l(696451),
    a = l(317525),
    r = l(183555),
    o = l(1659),
    d = l(166005);
function u(e) {
    let { userId: s, guild: l } = e,
        u = (0, t.bG)([n.Ay], () => n.Ay.isMember(l.id, s)),
        c = (0, t.bG)([n.Ay], () => n.Ay.getMember(l.id, s)),
        h = c?.roles,
        p = (0, t.yK)([a.A], () => a.A.getManyRoles(l.id, h ?? []).sort(o.m), [h, l.id]),
        { trackUserProfileAction: x } = (0, r.NJ)();
    return u
        ? (0, i.jsx)(d.Ql, {
              userId: s,
              guild: l,
              roles: p,
              onAddRole: () => x({ action: "ADD_ROLE" }),
              onRemoveRole: () => x({ action: "REMOVE_ROLE" }),
              onExpand: () => x({ action: "EXPAND_ROLES" }),
              onCollapse: () => x({ action: "COLLAPSE_ROLES" }),
              allowEditing: !0,
          })
        : null;
}
