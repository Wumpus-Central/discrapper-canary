n.d(t, { A: () => S });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(545442),
    a = n(397927),
    o = n(775602),
    d = n(504049),
    s = n(997509),
    u = n(676608),
    c = n(34457),
    A = n(696451),
    E = n(317525),
    g = n(71393),
    _ = n(576705),
    M = n(403362),
    O = n(652215),
    I = n(985018),
    m = n(32271);
function f(e, t, n) {
    return {
        type: "roleDot",
        variant: "dot" === t ? "dot" : "circle",
        color: e.colorString ?? O.TpD,
        colors: n ? e.colorStrings : null,
    };
}
function y(e, t, n) {
    let i = e.colorString ?? O.TpD,
        a = n ? e.colorStrings : null;
    return (0, l.jsx)("div", {
        className: m.roleDotAccessory,
        children:
            "dot" === t
                ? (0, l.jsx)(r.W, { color: i, colors: a, background: !1, tooltip: !1 })
                : (0, l.jsx)(r.R, { color: i, colors: a ?? null }),
    });
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        m = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        S = (0, i.bG)([g.A], () => g.A.getGuild(t)),
        b = (0, i.bG)([E.A], () => E.A.getSortedRoles(t)),
        N = (0, i.bG)([o.A], () => o.A.roleStyle),
        h = (0, d.$9)(t, { location: r, targetUserId: e }),
        {
            userRoles: p,
            isGuildMember: T,
            canManageRoles: C,
        } = (0, i.cf)([A.Ay, _.A], () => {
            let n = A.Ay.getMember(t, e);
            return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != S && _.A.can(O.xBc.MANAGE_ROLES, S),
            };
        }, [e, t, S]),
        U = (0, u.Ay)(t, e);
    if (__OVERLAY__ || null == p || null == S || !T) return null;
    let D = _.A.getHighestRole(S),
        R =
            C && !m
                ? b.map((n) => {
                      if ((0, c.Oy)(n)) return null;
                      let i = n.managed || !_.A.isRoleHigher(S, D, n),
                          r = p.includes(n.id);
                      return i && !r
                          ? null
                          : (0, l.jsx)(
                                a.sLh,
                                {
                                    id: n.id,
                                    leadingAccessory: f(n, N, U),
                                    leftIcon: y(n, N, U),
                                    label: n.name,
                                    disabled: i,
                                    action: () => {
                                        p.includes(n.id)
                                            ? (s.A.updateMemberRoles(
                                                  t,
                                                  e,
                                                  p.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id],
                                              ),
                                              h(d.Nj.REMOVE_ROLE))
                                            : (s.A.updateMemberRoles(t, e, p.concat([n.id]), [n.id], []),
                                              h(d.Nj.ADD_ROLE));
                                    },
                                    checked: r,
                                },
                                n.id,
                            );
                  })
                : b.map((e) =>
                      (0, c.Oy)(e) || !p.includes(e.id)
                          ? null
                          : (0, l.jsx)(
                                a.Drp,
                                { id: e.id, leadingAccessory: f(e, N, U), iconLeft: y(e, N, U), label: e.name },
                                e.id,
                            ),
                  );
    return 0 === (R = R.filter(M.Vq)).length
        ? null
        : n
          ? R
          : (0, l.jsx)(a.Drp, {
                id: "roles",
                label: I.intl.formatToPlainString(I.t.PCs0oo, { numRoles: R.length }),
                children: R,
            });
}
