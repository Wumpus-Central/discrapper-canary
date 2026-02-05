n.d(t, { A: () => y });
var l = n(627968);
n(64700);
var i = n(311907),
    a = n(545442),
    r = n(397927),
    d = n(775602),
    o = n(504049),
    u = n(997509),
    s = n(676608),
    c = n(34457),
    A = n(696451),
    E = n(317525),
    _ = n(71393),
    g = n(576705),
    M = n(403362),
    O = n(652215),
    I = n(985018),
    S = n(658122);
function m(e, t, n) {
    return {
        type: "roleDot",
        variant: "dot" === t ? "dot" : "circle",
        color: e.colorString ?? O.TpD,
        colors: n ? e.colorStrings : null,
    };
}
function T(e, t, n) {
    let i = e.colorString ?? O.TpD,
        r = n ? e.colorStrings : null;
    return (0, l.jsx)("div", {
        className: S.roleDotAccessory,
        children:
            "dot" === t
                ? (0, l.jsx)(a.W, { color: i, colors: r, background: !1, tooltip: !1 })
                : (0, l.jsx)(a.R, { color: i, colors: r ?? null }),
    });
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        S = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        y = (0, i.bG)([_.A], () => _.A.getGuild(t)),
        N = (0, i.bG)([E.A], () => E.A.getSortedRoles(t)),
        C = (0, i.bG)([d.A], () => d.A.roleStyle),
        f = (0, o.$9)(t, { location: a, targetUserId: e }),
        {
            userRoles: p,
            isGuildMember: b,
            canManageRoles: D,
        } = (0, i.cf)([A.Ay, g.A], () => {
            let n = A.Ay.getMember(t, e);
            return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != y && g.A.can(O.xBc.MANAGE_ROLES, y),
            };
        }, [e, t, y]),
        R = (0, s.Ay)(t, e);
    if (__OVERLAY__ || null == p || null == y || !b) return null;
    let h = g.A.getHighestRole(y),
        U =
            D && !S
                ? N.map((n) => {
                      if ((0, c.Oy)(n)) return null;
                      let i = n.managed || !g.A.isRoleHigher(y, h, n),
                          a = p.includes(n.id);
                      return i && !a
                          ? null
                          : (0, l.jsx)(
                                r.sLh,
                                {
                                    id: n.id,
                                    leadingAccessory: m(n, C, R),
                                    leftIcon: T(n, C, R),
                                    label: n.name,
                                    disabled: i,
                                    action: () => {
                                        p.includes(n.id)
                                            ? (u.A.updateMemberRoles(
                                                  t,
                                                  e,
                                                  p.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id],
                                              ),
                                              f(o.Nj.REMOVE_ROLE))
                                            : (u.A.updateMemberRoles(t, e, p.concat([n.id]), [n.id], []),
                                              f(o.Nj.ADD_ROLE));
                                    },
                                    checked: a,
                                },
                                n.id,
                            );
                  })
                : N.map((e) =>
                      (0, c.Oy)(e) || !p.includes(e.id)
                          ? null
                          : (0, l.jsx)(
                                r.Drp,
                                { id: e.id, leadingAccessory: m(e, C, R), iconLeft: T(e, C, R), label: e.name },
                                e.id,
                            ),
                  );
    return 0 === (U = U.filter(M.Vq)).length
        ? null
        : n
          ? U
          : (0, l.jsx)(r.Drp, {
                id: "roles",
                label: I.intl.formatToPlainString(I.t.PCs0oo, { numRoles: U.length }),
                children: U,
            });
}
