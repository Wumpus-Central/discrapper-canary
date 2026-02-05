n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(696451),
    a = n(317525),
    r = n(71393),
    d = n(576705),
    o = n(183555),
    c = n(1659),
    u = n(166005),
    A = n(900179),
    x = n(518477),
    m = n(652215),
    p = n(985018);
function h(e) {
    let { userId: t, guildId: n, ...h } = e,
        { trackUserProfileAction: f } = (0, o.NJ)(),
        g = (0, s.bG)([r.A], () => r.A.getGuild(n)),
        I = (0, s.bG)([l.Ay], () => l.Ay.getMember(n, t)),
        j = I?.roles,
        _ = (0, s.yK)([a.A], () => a.A.getManyRoles(n, j ?? []).sort(c.m), [j, n]),
        [N] = (0, s.yK)([d.A], () => [d.A.can(m.xBc.MANAGE_ROLES, g), d.A.getGuildVersion(n)]);
    if (null == g) return null;
    let v = N && null != I;
    return 0 !== _.length || v
        ? (0, i.jsx)(A.A, {
              heading: p.intl.string(p.t["LPJmL/"]),
              scrollTargetId: x.bk.ROLES,
              ...h,
              children: (0, i.jsx)(u.Y, {
                  userId: t,
                  guild: g,
                  roles: _,
                  onAddRole: () => {
                      f({ action: "ADD_ROLE" });
                  },
                  onRemoveRole: () => {
                      f({ action: "REMOVE_ROLE" });
                  },
                  allowEditing: !0,
              }),
          })
        : null;
}
