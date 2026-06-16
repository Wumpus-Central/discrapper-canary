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
    m = n(518477),
    f = n(652215),
    p = n(375708);
function x(e) {
    let { userId: l, guildId: n, ...x } = e,
        { trackUserProfileAction: v } = (0, d.NJ)(),
        h = (0, i.bG)([s.A], () => s.A.getGuild(n)),
        A = (0, i.bG)([r.Ay], () => r.Ay.getMember(n, l)),
        b = A?.roles,
        j = (0, i.yK)([a.A], () => a.A.getManyRoles(n, b ?? []).sort(u.m), [b, n]),
        [I] = (0, i.yK)([o.A], () => [o.A.can(f.xBc.MANAGE_ROLES, h), o.A.getGuildVersion(n)]);
    if (null == h) return null;
    let C = I && null != A;
    return 0 !== j.length || C
        ? (0, t.jsx)(g.A, {
              heading: p.intl.string(p.t["LPJmL/"]),
              scrollTargetId: m.bk.ROLES,
              ...x,
              children: (0, t.jsx)(c.YR, {
                  userId: l,
                  guild: h,
                  roles: j,
                  onAddRole: () => {
                      v({ action: "ADD_ROLE" });
                  },
                  onRemoveRole: () => {
                      v({ action: "REMOVE_ROLE" });
                  },
                  allowEditing: !0,
              }),
          })
        : null;
}
