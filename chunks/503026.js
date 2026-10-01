n.d(t, { A: () => h });
var i = n(477900);
n(582128);
var l = n(17928),
    r = n(696451),
    s = n(317525),
    a = n(71393),
    o = n(576705),
    u = n(183555),
    d = n(1659),
    c = n(166005),
    g = n(900179),
    f = n(518477),
    m = n(652215),
    p = n(375708);
function h(e) {
    let { userId: t, guildId: n, ...h } = e,
        { trackUserProfileAction: x } = (0, u.NJ)(),
        A = (0, l.bG)([a.A], () => a.A.getGuild(n)),
        v = (0, l.bG)([r.Ay], () => r.Ay.getMember(n, t)),
        I = v?.roles,
        j = (0, l.yK)([s.A], () => s.A.getManyRoles(n, I ?? []).sort(d.m), [I, n]),
        [b] = (0, l.yK)([o.A], () => [o.A.can(m.xBc.MANAGE_ROLES, A), o.A.getGuildVersion(n)]);
    if (null == A) return null;
    let C = b && null != v;
    return 0 !== j.length || C
        ? (0, i.jsx)(g.A, {
              heading: p.intl.string(p.t["LPJmL/"]),
              scrollTargetId: f.bk.ROLES,
              ...h,
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
}
