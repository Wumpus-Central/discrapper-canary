s.d(o, { A: () => u });
var d = s(477900);
s(582128);
var i = s(17928),
    n = s(696451),
    l = s(317525),
    t = s(183555),
    a = s(1659),
    r = s(166005);
function u(e) {
    let { userId: o, guild: s } = e,
        u = (0, i.bG)([n.Ay], () => n.Ay.isMember(s.id, o)),
        A = (0, i.bG)([n.Ay], () => n.Ay.getMember(s.id, o)),
        c = A?.roles,
        p = (0, i.yK)([l.A], () => l.A.getManyRoles(s.id, c ?? []).sort(a.m), [c, s.id]),
        { trackUserProfileAction: E } = (0, t.NJ)();
    return u
        ? (0, d.jsx)(r.Ql, {
              userId: o,
              guild: s,
              roles: p,
              onAddRole: () => E({ action: "ADD_ROLE" }),
              onRemoveRole: () => E({ action: "REMOVE_ROLE" }),
              onExpand: () => E({ action: "EXPAND_ROLES" }),
              onCollapse: () => E({ action: "COLLAPSE_ROLES" }),
              allowEditing: !0,
          })
        : null;
}
