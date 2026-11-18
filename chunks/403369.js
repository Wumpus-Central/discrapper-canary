var i = n(477900);
n(582128);
var l = n(855986),
    o = n(696451),
    s = n(317525),
    r = n(183555),
    a = n(1659),
    d = n(166005);
n.d(
    e,
    {},
    {
        A: function (t) {
            let { userId: e, guild: n } = t,
                u = (0, l.bG)([o.Ay], () => o.Ay.isMember(n.id, e)),
                c = (0, l.bG)([o.Ay], () => o.Ay.getMember(n.id, e)),
                A = c?.roles,
                p = (0, l.yK)([s.A], () => s.A.getManyRoles(n.id, A ?? []).sort(a.m), [A, n.id]),
                { trackUserProfileAction: E } = (0, r.NJ)();
            return u
                ? (0, i.jsx)(d.Ql, {
                      userId: e,
                      guild: n,
                      roles: p,
                      onAddRole: () => E({ action: "ADD_ROLE" }),
                      onRemoveRole: () => E({ action: "REMOVE_ROLE" }),
                      onExpand: () => E({ action: "EXPAND_ROLES" }),
                      onCollapse: () => E({ action: "COLLAPSE_ROLES" }),
                      allowEditing: !0,
                  })
                : null;
        },
    },
);
