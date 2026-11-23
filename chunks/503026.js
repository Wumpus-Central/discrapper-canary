var i = n(477900);
n(582128);
var l = n(855986),
    r = n(696451),
    s = n(317525),
    a = n(71393),
    o = n(576705),
    d = n(183555),
    u = n(1659),
    c = n(166005),
    g = n(900179),
    m = n(518477),
    f = n(652215),
    h = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { userId: t, guildId: n, ...p } = e,
                { trackUserProfileAction: x } = (0, d.NJ)(),
                A = (0, l.bG)([a.A], () => a.A.getGuild(n)),
                I = (0, l.bG)([r.Ay], () => r.Ay.getMember(n, t)),
                v = I?.roles,
                j = (0, l.yK)([s.A], () => s.A.getManyRoles(n, v ?? []).sort(u.m), [v, n]),
                [b] = (0, l.yK)([o.A], () => [o.A.can(f.xBc.MANAGE_ROLES, A), o.A.getGuildVersion(n)]);
            if (null == A) return null;
            let y = b && null != I;
            return 0 !== j.length || y
                ? (0, i.jsx)(g.A, {
                      heading: h.intl.string(h.t["LPJmL/"]),
                      scrollTargetId: m.bk.ROLES,
                      ...p,
                      children: (0, i.jsx)(c.YR, {
                          userId: t,
                          guild: A,
                          roles: j,
                          onAddRole: () => {
                              x({ action: "ADD_ROLE" });
                          },
                          onRemoveRole: () => {
                              x({ action: "REMOVE_ROLE" });
                          },
                          allowEditing: !0,
                      }),
                  })
                : null;
        },
    },
);
