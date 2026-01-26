n.d(t, {
    A: () => v,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(545442),
    a = n(397927),
    o = n(775602),
    u = n(504049),
    c = n(997509),
    s = n(676608),
    d = n(34457),
    A = n(696451),
    b = n(317525),
    f = n(71393),
    O = n(576705),
    g = n(403362),
    y = n(652215),
    p = n(985018),
    E = n(658122);

function j(e, t, n) {
    var r;
    return {
        type: "roleDot",
        variant: "dot" === t ? "dot" : "circle",
        color: null != (r = e.colorString) ? r : y.TpD,
        colors: n ? e.colorStrings : null,
    };
}

function m(e, t, n) {
    var l;
    let a = null != (l = e.colorString) ? l : y.TpD,
        o = n ? e.colorStrings : null;
    return (0, r.jsx)("div", {
        className: E.roleDotAccessory,
        children:
            "dot" === t
                ? (0, r.jsx)(i.W, {
                      color: a,
                      colors: o,
                      background: !1,
                      tooltip: !1,
                  })
                : (0, r.jsx)(i.R, {
                      color: a,
                      colors: null != o ? o : null,
                  }),
    });
}

function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        E = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        v = (0, l.bG)([f.A], () => f.A.getGuild(t)),
        _ = (0, l.bG)([b.A], () => b.A.getSortedRoles(t)),
        h = (0, l.bG)([o.A], () => o.A.roleStyle),
        S = (0, u.$9)(t, {
            location: i,
            targetUserId: e,
        }),
        {
            userRoles: M,
            isGuildMember: P,
            canManageRoles: C,
        } = (0, l.cf)([A.Ay, O.A], () => {
            let n = A.Ay.getMember(t, e);
            return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != v && O.A.can(y.xBc.MANAGE_ROLES, v),
            };
        }, [e, t, v]),
        I = (0, s.Ay)(t, e);
    if (__OVERLAY__ || null == M || null == v || !P) return null;
    let D = O.A.getHighestRole(v),
        T =
            C && !E
                ? _.map((n) => {
                      if ((0, d.Oy)(n)) return null;
                      let l = n.managed || !O.A.isRoleHigher(v, D, n),
                          i = M.includes(n.id);
                      return l && !i
                          ? null
                          : (0, r.jsx)(
                                a.sLh,
                                {
                                    id: n.id,
                                    leadingAccessory: j(n, h, I),
                                    leftIcon: m(n, h, I),
                                    label: n.name,
                                    disabled: l,
                                    action: () => {
                                        M.includes(n.id)
                                            ? (c.A.updateMemberRoles(
                                                  t,
                                                  e,
                                                  M.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id],
                                              ),
                                              S(u.Nj.REMOVE_ROLE))
                                            : (c.A.updateMemberRoles(t, e, M.concat([n.id]), [n.id], []),
                                              S(u.Nj.ADD_ROLE));
                                    },
                                    checked: i,
                                },
                                n.id,
                            );
                  })
                : _.map((e) =>
                      (0, d.Oy)(e) || !M.includes(e.id)
                          ? null
                          : (0, r.jsx)(
                                a.Drp,
                                {
                                    id: e.id,
                                    leadingAccessory: j(e, h, I),
                                    iconLeft: m(e, h, I),
                                    label: e.name,
                                },
                                e.id,
                            ),
                  );
    return 0 === (T = T.filter(g.Vq)).length
        ? null
        : n
          ? T
          : (0, r.jsx)(a.Drp, {
                id: "roles",
                label: p.intl.formatToPlainString(p.t.PCs0oo, {
                    numRoles: T.length,
                }),
                children: T,
            });
}
