i.d(s, { A: () => c });
var t = i(627968);
i(64700);
var n = i(17928),
    l = i(696451),
    a = i(317525),
    o = i(183555),
    r = i(1659),
    d = i(166005);
function c(e) {
    let { userId: s, guild: i } = e,
        c = (0, n.bG)([l.Ay], () => l.Ay.isMember(i.id, s)),
        u = (0, n.bG)([l.Ay], () => l.Ay.getMember(i.id, s)),
        p = u?.roles,
        h = (0, n.yK)([a.A], () => a.A.getManyRoles(i.id, p ?? []).sort(r.m), [p, i.id]),
        { trackUserProfileAction: A } = (0, o.NJ)();
    return c
        ? (0, t.jsx)(d.Ql, {
              userId: s,
              guild: i,
              roles: h,
              onAddRole: () => A({ action: "ADD_ROLE" }),
              onRemoveRole: () => A({ action: "REMOVE_ROLE" }),
              onExpand: () => A({ action: "EXPAND_ROLES" }),
              onCollapse: () => A({ action: "COLLAPSE_ROLES" }),
              allowEditing: !0,
          })
        : null;
}
