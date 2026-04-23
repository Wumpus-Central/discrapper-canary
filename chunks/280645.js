t.d(n, { A: () => x });
var l = t(627968);
t(64700);
var i = t(17928),
    r = t(696451),
    a = t(317525),
    s = t(71393),
    o = t(576705),
    d = t(183555),
    u = t(1659),
    c = t(166005),
    g = t(900179),
    m = t(518477),
    f = t(652215),
    p = t(985018);
function x(e) {
    let { userId: n, guildId: t, ...x } = e,
        { trackUserProfileAction: A } = (0, d.NJ)(),
        h = (0, i.bG)([s.A], () => s.A.getGuild(t)),
        v = (0, i.bG)([r.Ay], () => r.Ay.getMember(t, n)),
        j = v?.roles,
        I = (0, i.yK)([a.A], () => a.A.getManyRoles(t, j ?? []).sort(u.m), [j, t]),
        [b] = (0, i.yK)([o.A], () => [o.A.can(f.xBc.MANAGE_ROLES, h), o.A.getGuildVersion(t)]);
    if (null == h) return null;
    let C = b && null != v;
    return 0 !== I.length || C
        ? (0, l.jsx)(g.A, {
              heading: p.intl.string(p.t["LPJmL/"]),
              scrollTargetId: m.bk.ROLES,
              ...x,
              children: (0, l.jsx)(c.YR, {
                  userId: n,
                  guild: h,
                  roles: I,
                  onAddRole: () => {
                      A({ action: "ADD_ROLE" });
                  },
                  onRemoveRole: () => {
                      A({ action: "REMOVE_ROLE" });
                  },
                  allowEditing: !0,
              }),
          })
        : null;
}
