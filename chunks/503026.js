l.d(n, { A: () => x });
var t = l(477900);
l(582128);
var i = l(17928),
    r = l(696451),
    a = l(317525),
    s = l(71393),
    o = l(576705),
    d = l(183555),
    u = l(1659),
    c = l(166005),
    g = l(900179),
    f = l(518477),
    m = l(652215),
    p = l(375708);
function x(e) {
    let { userId: n, guildId: l, ...x } = e,
        { trackUserProfileAction: h } = (0, d.NJ)(),
        v = (0, i.bG)([s.A], () => s.A.getGuild(l)),
        A = (0, i.bG)([r.Ay], () => r.Ay.getMember(l, n)),
        b = A?.roles,
        j = (0, i.yK)([a.A], () => a.A.getManyRoles(l, b ?? []).sort(u.m), [b, l]),
        [I] = (0, i.yK)([o.A], () => [o.A.can(m.xBc.MANAGE_ROLES, v), o.A.getGuildVersion(l)]);
    if (null == v) return null;
    let C = I && null != A;
    return 0 !== j.length || C
        ? (0, t.jsx)(g.A, {
              heading: p.intl.string(p.t["LPJmL/"]),
              scrollTargetId: f.bk.ROLES,
              ...x,
              children: (0, t.jsx)(c.YR, {
                  userId: n,
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
