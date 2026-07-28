s.d(a, { A: () => c });
var l = s(477900);
s(582128);
var i = s(17928),
    o = s(696451),
    d = s(317525),
    n = s(183555),
    t = s(1659),
    r = s(166005);
function c(e) {
    let { userId: a, guild: s } = e,
        c = (0, i.bG)([o.Ay], () => o.Ay.isMember(s.id, a)),
        h = (0, i.bG)([o.Ay], () => o.Ay.getMember(s.id, a)),
        u = h?.roles,
        A = (0, i.yK)([d.A], () => d.A.getManyRoles(s.id, u ?? []).sort(t.m), [u, s.id]),
        { trackUserProfileAction: v } = (0, n.NJ)();
    return c
        ? (0, l.jsx)(r.Ql, {
              userId: a,
              guild: s,
              roles: A,
              onAddRole: () => v({ action: "ADD_ROLE" }),
              onRemoveRole: () => v({ action: "REMOVE_ROLE" }),
              onExpand: () => v({ action: "EXPAND_ROLES" }),
              onCollapse: () => v({ action: "COLLAPSE_ROLES" }),
              allowEditing: !0,
          })
        : null;
}
