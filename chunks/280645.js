i.d(t, { A: () => g });
var l = i(627968);
i(64700);
var n = i(311907),
    s = i(696451),
    a = i(317525),
    r = i(71393),
    o = i(576705),
    d = i(183555),
    c = i(1659),
    u = i(166005),
    A = i(900179),
    m = i(518477),
    x = i(652215),
    p = i(985018);
function g(e) {
    let { userId: t, guildId: i, ...g } = e,
        { trackUserProfileAction: h } = (0, d.NJ)(),
        I = (0, n.bG)([r.A], () => r.A.getGuild(i)),
        f = (0, n.bG)([s.Ay], () => s.Ay.getMember(i, t)),
        j = f?.roles,
        v = (0, n.yK)([a.A], () => a.A.getManyRoles(i, j ?? []).sort(c.m), [j, i]),
        [N] = (0, n.yK)([o.A], () => [o.A.can(x.xBc.MANAGE_ROLES, I), o.A.getGuildVersion(i)]);
    if (null == I) return null;
    let E = N && null != f;
    return 0 !== v.length || E
        ? (0, l.jsx)(A.A, {
              heading: p.intl.string(p.t["LPJmL/"]),
              scrollTargetId: m.bk.ROLES,
              ...g,
              children: (0, l.jsx)(u.YR, {
                  userId: t,
                  guild: I,
                  roles: v,
                  onAddRole: () => {
                      h({ action: "ADD_ROLE" });
                  },
                  onRemoveRole: () => {
                      h({ action: "REMOVE_ROLE" });
                  },
                  allowEditing: !0,
              }),
          })
        : null;
}
