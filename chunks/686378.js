n.d(t, { A: () => R });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(417597),
    E = n(990078),
    _ = n(452027),
    u = n(939249),
    o = n(245604),
    c = n(834730),
    d = n(266047),
    A = n(189552),
    g = n(950072),
    T = n(317525),
    I = n(71393),
    N = n(576705),
    G = n(829887),
    m = n(652215),
    O = n(985018),
    S = n(645267);
function R(e) {
    let { member: t } = e,
        n = (0, s.bG)([I.A], () => I.A.getGuild(t.guildId)),
        r = (0, s.bG)([T.A], () => T.A.getSortedRoles(t.guildId)),
        R = a.useMemo(
            () => r.filter((e) => e.id !== t.highestRoleId && t.roles.includes(e.id)),
            [t.roles, t.highestRoleId, r],
        ),
        D = (0, s.bG)([d.A], () => d.A.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]),
        h = (0, A.YH)(D),
        L = (0, A.Cy)(t),
        C = (0, s.bG)([N.A], () => N.A.can(m.xBc.MANAGE_ROLES, n), [n]);
    return null == n
        ? null
        : (0, l.jsx)(_.D, {
              label: O.intl.string(O.t["LPJmL/"]),
              children: (0, l.jsx)(G.SQ, {
                  children: (0, l.jsx)(G.RU, {
                      description:
                          t.roles.length > 0 || C
                              ? (0, l.jsxs)("div", {
                                    className: S.yk,
                                    children: [
                                        (0, l.jsx)(E.m, {
                                            asContainer: !0,
                                            "aria-label": O.intl.string(O.t["0g8Xd/"]),
                                            text: O.intl.string(O.t["93S+lG"]),
                                            children: (0, l.jsx)(u.D, {
                                                children: (0, l.jsx)(g.A, {
                                                    className: i()(S.Zf, S.Lc),
                                                    role: h,
                                                    guildId: t.guildId,
                                                }),
                                            }),
                                        }),
                                        R.map((e) =>
                                            (0, l.jsx)(g.A, { className: S.Zf, role: e, guildId: t.guildId }, e.id),
                                        ),
                                        C &&
                                            (0, l.jsx)(E.m, {
                                                asContainer: !0,
                                                "aria-label": O.intl.string(O.t.ljnBlo),
                                                text: O.intl.string(O.t.ljnBlo),
                                                children: (0, l.jsx)(u.D, {
                                                    onClick: L,
                                                    className: S.$g,
                                                    children: (0, l.jsx)(o.U, {
                                                        size: "custom",
                                                        color: "currentColor",
                                                        className: S.fd,
                                                        width: 20,
                                                        height: 20,
                                                    }),
                                                }),
                                            }),
                                    ],
                                })
                              : (0, l.jsx)("div", {
                                    className: S.pl,
                                    children: (0, l.jsx)(c.E, {
                                        variant: "text-sm/normal",
                                        children: O.intl.string(O.t.nZfHsf),
                                    }),
                                }),
                  }),
              }),
          });
}
