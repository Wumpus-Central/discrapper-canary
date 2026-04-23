t.d(n, { A: () => p });
var l = t(627968);
t(64700);
var i = t(311907),
    r = t(696451),
    a = t(317525),
    s = t(71393),
    o = t(576705),
    d = t(183555),
    u = t(1659),
    c = t(166005),
    g = t(900179),
    A = t(518477),
    m = t(652215),
    f = t(985018);
function p(e) {
    let { userId: n, guildId: t, ...p } = e,
        { trackUserProfileAction: x } = (0, d.NJ)(),
        h = (0, i.bG)([s.A], () => s.A.getGuild(t)),
        v = (0, i.bG)([r.Ay], () => r.Ay.getMember(t, n)),
        j = v?.roles,
        I = (0, i.yK)([a.A], () => a.A.getManyRoles(t, j ?? []).sort(u.m), [j, t]),
        [b] = (0, i.yK)([o.A], () => [o.A.can(m.xBc.MANAGE_ROLES, h), o.A.getGuildVersion(t)]);
    if (null == h) return null;
    let C = b && null != v;
    return 0 !== I.length || C
        ? (0, l.jsx)(g.A, {
              heading: f.intl.string(f.t["LPJmL/"]),
              scrollTargetId: A.bk.ROLES,
              ...p,
              children: (0, l.jsx)(c.YR, {
                  userId: n,
                  guild: h,
                  roles: I,
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
