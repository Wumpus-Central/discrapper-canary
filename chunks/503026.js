t.d(n, { A: () => h });
var l = t(477900);
t(582128);
var i = t(17928),
    r = t(696451),
    s = t(317525),
    a = t(71393),
    o = t(576705),
    d = t(183555),
    u = t(1659),
    c = t(166005),
    g = t(900179),
    m = t(518477),
    f = t(652215),
    p = t(375708);
function h(e) {
    let { userId: n, guildId: t, ...h } = e,
        { trackUserProfileAction: x } = (0, d.NJ)(),
        A = (0, i.bG)([a.A], () => a.A.getGuild(t)),
        v = (0, i.bG)([r.Ay], () => r.Ay.getMember(t, n)),
        I = v?.roles,
        j = (0, i.yK)([s.A], () => s.A.getManyRoles(t, I ?? []).sort(u.m), [I, t]),
        [b] = (0, i.yK)([o.A], () => [o.A.can(f.xBc.MANAGE_ROLES, A), o.A.getGuildVersion(t)]);
    if (null == A) return null;
    let C = b && null != v;
    return 0 !== j.length || C
        ? (0, l.jsx)(g.A, {
              heading: p.intl.string(p.t["LPJmL/"]),
              scrollTargetId: m.bk.ROLES,
              ...h,
              children: (0, l.jsx)(c.YR, {
                  userId: n,
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
