n.d(t, { A: () => m });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(417597),
    o = n(990078),
    E = n(397927),
    u = n(266047),
    c = n(189552),
    _ = n(950072),
    d = n(317525),
    g = n(71393),
    A = n(576705),
    T = n(829887),
    I = n(652215),
    N = n(985018),
    h = n(438536);
function m(e) {
    let { member: t } = e,
        n = (0, s.bG)([g.A], () => g.A.getGuild(t.guildId)),
        a = (0, s.bG)([d.A], () => d.A.getSortedRoles(t.guildId)),
        m = r.useMemo(
            () => a.filter((e) => e.id !== t.highestRoleId && t.roles.includes(e.id)),
            [t.roles, t.highestRoleId, a],
        ),
        S = (0, s.bG)([u.A], () => u.A.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]),
        G = (0, c.YH)(S),
        O = (0, c.Cy)(t),
        C = (0, s.bG)([A.A], () => A.A.can(I.xBc.MANAGE_ROLES, n), [n]);
    return null == n
        ? null
        : (0, l.jsx)(E.D0$, {
              label: N.intl.string(N.t["LPJmL/"]),
              children: (0, l.jsx)(T.SQ, {
                  children: (0, l.jsx)(T.RU, {
                      description:
                          t.roles.length > 0 || C
                              ? (0, l.jsxs)("div", {
                                    className: h.yk,
                                    children: [
                                        (0, l.jsx)(o.m, {
                                            asContainer: !0,
                                            "aria-label": N.intl.string(N.t["0g8Xd/"]),
                                            text: N.intl.string(N.t["93S+lG"]),
                                            children: (0, l.jsx)(E.DUT, {
                                                children: (0, l.jsx)(_.A, {
                                                    className: i()(h.Zf, h.Lc),
                                                    role: G,
                                                    guildId: t.guildId,
                                                }),
                                            }),
                                        }),
                                        m.map((e) =>
                                            (0, l.jsx)(_.A, { className: h.Zf, role: e, guildId: t.guildId }, e.id),
                                        ),
                                        C &&
                                            (0, l.jsx)(o.m, {
                                                asContainer: !0,
                                                "aria-label": N.intl.string(N.t.ljnBlo),
                                                text: N.intl.string(N.t.ljnBlo),
                                                children: (0, l.jsx)(E.DUT, {
                                                    onClick: O,
                                                    className: h.$g,
                                                    children: (0, l.jsx)(E.U1e, {
                                                        size: "custom",
                                                        color: "currentColor",
                                                        className: h.fd,
                                                        width: 20,
                                                        height: 20,
                                                    }),
                                                }),
                                            }),
                                    ],
                                })
                              : (0, l.jsx)("div", {
                                    className: h.pl,
                                    children: (0, l.jsx)(E.Text, {
                                        variant: "text-sm/normal",
                                        children: N.intl.string(N.t.nZfHsf),
                                    }),
                                }),
                  }),
              }),
          });
}
