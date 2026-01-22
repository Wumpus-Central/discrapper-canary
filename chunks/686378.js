n.d(t, { A: () => O });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(417597),
    o = n(990078),
    c = n(397927),
    u = n(266047),
    E = n(189552),
    d = n(950072),
    _ = n(317525),
    g = n(71393),
    A = n(576705),
    T = n(829887),
    f = n(652215),
    h = n(985018),
    I = n(438536);
function O(e) {
    let { member: t } = e,
        n = (0, s.bG)([g.A], () => g.A.getGuild(t.guildId)),
        a = (0, s.bG)([_.A], () => _.A.getSortedRoles(t.guildId)),
        O = r.useMemo(
            () => a.filter((e) => e.id !== t.highestRoleId && t.roles.includes(e.id)),
            [t.roles, t.highestRoleId, a],
        ),
        N = (0, s.bG)([u.A], () => u.A.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]),
        m = (0, E.YH)(N),
        S = (0, E.Cy)(t),
        p = (0, s.bG)([A.A], () => A.A.can(f.xBc.MANAGE_ROLES, n), [n]);
    return null == n
        ? null
        : (0, l.jsx)(c.D0$, {
              label: h.intl.string(h.t["LPJmL/"]),
              children: (0, l.jsx)(T.SQ, {
                  children: (0, l.jsx)(T.RU, {
                      description:
                          t.roles.length > 0 || p
                              ? (0, l.jsxs)("div", {
                                    className: I.yk,
                                    children: [
                                        (0, l.jsx)(o.m, {
                                            asContainer: !0,
                                            "aria-label": h.intl.string(h.t["0g8Xd/"]),
                                            text: h.intl.string(h.t["93S+lG"]),
                                            children: (0, l.jsx)(c.DUT, {
                                                children: (0, l.jsx)(d.A, {
                                                    className: i()(I.Zf, I.Lc),
                                                    role: m,
                                                    guildId: t.guildId,
                                                }),
                                            }),
                                        }),
                                        O.map((e) =>
                                            (0, l.jsx)(
                                                d.A,
                                                {
                                                    className: I.Zf,
                                                    role: e,
                                                    guildId: t.guildId,
                                                },
                                                e.id,
                                            ),
                                        ),
                                        p &&
                                            (0, l.jsx)(o.m, {
                                                asContainer: !0,
                                                "aria-label": h.intl.string(h.t.ljnBlo),
                                                text: h.intl.string(h.t.ljnBlo),
                                                children: (0, l.jsx)(c.DUT, {
                                                    onClick: S,
                                                    className: I.$g,
                                                    children: (0, l.jsx)(c.U1e, {
                                                        size: "custom",
                                                        color: "currentColor",
                                                        className: I.fd,
                                                        width: 20,
                                                        height: 20,
                                                    }),
                                                }),
                                            }),
                                    ],
                                })
                              : (0, l.jsx)("div", {
                                    className: I.pl,
                                    children: (0, l.jsx)(c.Text, {
                                        variant: "text-sm/normal",
                                        children: h.intl.string(h.t.nZfHsf),
                                    }),
                                }),
                  }),
              }),
          });
}
