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
        c = (0, i.bG)([s.Ay], () => s.Ay.getMember(n.id, t)),
        d = c?.roles,
        _ = (0, i.yK)([a.A], () => a.A.getManyRoles(n.id, d ?? []).sort(l.m), [d, n.id]),
        { trackUserProfileAction: f } = (0, o.NJ)();
    return (0, r.jsx)(u.Ql, {
        userId: t,
        guild: n,
        roles: _,
        onAddRole: () => f({ action: "ADD_ROLE" }),
        onRemoveRole: () => f({ action: "REMOVE_ROLE" }),
        onExpand: () => f({ action: "EXPAND_ROLES" }),
        onCollapse: () => f({ action: "COLLAPSE_ROLES" }),
        allowEditing: !0,
    });
}
