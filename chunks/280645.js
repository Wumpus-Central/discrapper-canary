n.d(l, { A: () => x });
var t = n(627968);
n(64700);
var i = n(17928),
    r = n(696451),
    a = n(317525),
    s = n(71393),
    o = n(576705),
    d = n(183555),
    u = n(1659),
    c = n(166005),
    g = n(900179),
    f = n(518477),
    m = n(652215),
    p = n(375708);
function x(e) {
    let { userId: l, guildId: n, ...x } = e,
        { trackUserProfileAction: h } = (0, d.NJ)(),
        v = (0, i.bG)([s.A], () => s.A.getGuild(n)),
        A = (0, i.bG)([r.Ay], () => r.Ay.getMember(n, l)),
        b = A?.roles,
        j = (0, i.yK)([a.A], () => a.A.getManyRoles(n, b ?? []).sort(u.m), [b, n]),
        [I] = (0, i.yK)([o.A], () => [o.A.can(m.xBc.MANAGE_ROLES, v), o.A.getGuildVersion(n)]);
    if (null == v) return null;
    let C = I && null != A;
    return 0 !== j.length || C
        ? (0, t.jsx)(g.A, {
              heading: p.intl.string(p.t["LPJmL/"]),
              scrollTargetId: f.bk.ROLES,
              ...x,
              children: (0, t.jsx)(c.YR, {
                  userId: l,
                  guild: v,
                  roles: j,
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
