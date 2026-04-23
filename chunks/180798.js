n.d(t, { A: () => N });
var l = n(627968);
n(64700);
var i = n(17928),
    r = n(545442),
    a = n(477782),
    o = n(775602),
    d = n(504049),
    u = n(997509),
    s = n(676608),
    c = n(34457),
    A = n(696451),
    E = n(317525),
    _ = n(71393),
    g = n(576705),
    I = n(403362),
    S = n(652215),
    f = n(985018),
    M = n(32271);
function y(e, t, n) {
    return {
        type: "roleDot",
        variant: "dot" === t ? "dot" : "circle",
        color: e.colorString ?? S.TpD,
        colors: n ? e.colorStrings : null,
    };
}
function O(e, t, n) {
    let i = e.colorString ?? S.TpD,
        a = n ? e.colorStrings : null;
    return (0, l.jsx)("div", {
        className: M.roleDotAccessory,
        children:
            "dot" === t
                ? (0, l.jsx)(r.W, { color: i, colors: a, background: !1, tooltip: !1 })
                : (0, l.jsx)(r.R, { color: i, colors: a ?? null }),
    });
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        M = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        N = (0, i.bG)([_.A], () => _.A.getGuild(t)),
        h = (0, i.bG)([E.A], () => E.A.getSortedRoles(t)),
        R = (0, i.bG)([o.A], () => o.A.roleStyle),
        p = (0, d.$9)(t, { location: r, targetUserId: e }),
        {
            userRoles: m,
            isGuildMember: T,
            canManageRoles: b,
        } = (0, i.cf)([A.Ay, g.A], () => {
            let n = A.Ay.getMember(t, e);
            return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != N && g.A.can(S.xBc.MANAGE_ROLES, N),
            };
        }, [e, t, N]),
        U = (0, s.Ay)(t, e);
    if (__OVERLAY__ || null == m || null == N || !T) return null;
    let L = g.A.getHighestRole(N),
        C =
            b && !M
                ? h.map((n) => {
                      if ((0, c.Oy)(n)) return null;
                      let i = n.managed || !g.A.isRoleHigher(N, L, n),
                          r = m.includes(n.id);
                      return i && !r
                          ? null
                          : (0, l.jsx)(
                                a.sL,
                                {
                                    id: n.id,
                                    leadingAccessory: y(n, R, U),
                                    leftIcon: O(n, R, U),
                                    label: n.name,
                                    disabled: i,
                                    action: () => {
                                        m.includes(n.id)
                                            ? (u.A.updateMemberRoles(
                                                  t,
                                                  e,
                                                  m.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id],
                                              ),
                                              p(d.Nj.REMOVE_ROLE))
                                            : (u.A.updateMemberRoles(t, e, m.concat([n.id]), [n.id], []),
                                              p(d.Nj.ADD_ROLE));
                                    },
                                    checked: r,
                                },
                                n.id,
                            );
                  })
                : h.map((e) =>
                      (0, c.Oy)(e) || !m.includes(e.id)
                          ? null
                          : (0, l.jsx)(
                                a.Dr,
                                { id: e.id, leadingAccessory: y(e, R, U), iconLeft: O(e, R, U), label: e.name },
                                e.id,
                            ),
                  );
    return 0 === (C = C.filter(I.Vq)).length
        ? null
        : n
          ? C
          : (0, l.jsx)(a.Dr, {
                id: "roles",
                label: f.intl.formatToPlainString(f.t.PCs0oo, { numRoles: C.length }),
                children: C,
            });
}
