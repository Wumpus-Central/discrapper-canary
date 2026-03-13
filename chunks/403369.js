"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(696451),
    a = n(317525),
    o = n(183555),
    l = n(1659),
    u = n(166005);
function c(e) {
    let { userId: t, guild: n } = e,
        c = (0, i.bG)([s.Ay], () => s.Ay.isMember(n.id, t)),
        d = (0, i.bG)([s.Ay], () => s.Ay.getMember(n.id, t)),
        _ = d?.roles,
        f = (0, i.yK)([a.A], () => a.A.getManyRoles(n.id, _ ?? []).sort(l.m), [_, n.id]),
        { trackUserProfileAction: p } = (0, o.NJ)();
    return c
        ? (0, r.jsx)(u.Ql, {
              userId: t,
              guild: n,
              roles: f,
              onAddRole: () => p({ action: "ADD_ROLE" }),
              onRemoveRole: () => p({ action: "REMOVE_ROLE" }),
              onExpand: () => p({ action: "EXPAND_ROLES" }),
              onCollapse: () => p({ action: "COLLAPSE_ROLES" }),
              allowEditing: !0,
          })
        : null;
}
