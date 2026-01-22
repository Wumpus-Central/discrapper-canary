n.d(t, {
    A: () => E,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(775602),
    o = n(504049),
    u = n(997509),
    c = n(676608),
    s = n(34457),
    d = n(696451),
    A = n(317525),
    b = n(71393),
    f = n(576705),
    O = n(403362),
    g = n(652215),
    y = n(985018);

function p(e, t, n) {
    var r;
    return {
        type: "roleDot",
        variant: "dot" === t ? "dot" : "circle",
        color: null != (r = e.colorString) ? r : g.TpD,
        colors: n ? e.colorStrings : null,
    };
}

function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        E = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        j = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        m = (0, l.bG)([b.A], () => b.A.getGuild(t)),
        v = (0, l.bG)([A.A], () => A.A.getSortedRoles(t)),
        _ = (0, l.bG)([a.A], () => a.A.roleStyle),
        h = (0, o.$9)(t, {
            location: E,
            targetUserId: e,
        }),
        {
            userRoles: S,
            isGuildMember: M,
            canManageRoles: P,
        } = (0, l.cf)([d.Ay, f.A], () => {
            let n = d.Ay.getMember(t, e);
            return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != m && f.A.can(g.xBc.MANAGE_ROLES, m),
            };
        }, [e, t, m]),
        C = (0, c.Ay)(t, e);
    if (__OVERLAY__ || null == S || null == m || !M) return null;
    let I = f.A.getHighestRole(m),
        D =
            P && !j
                ? v.map((n) => {
                      if ((0, s.Oy)(n)) return null;
                      let l = n.managed || !f.A.isRoleHigher(m, I, n),
                          a = S.includes(n.id);
                      return l && !a
                          ? null
                          : (0, r.jsx)(
                                i.sLh,
                                {
                                    id: n.id,
                                    leadingAccessory: p(n, _, C),
                                    label: n.name,
                                    disabled: l,
                                    action: () => {
                                        S.includes(n.id)
                                            ? (u.A.updateMemberRoles(
                                                  t,
                                                  e,
                                                  S.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id],
                                              ),
                                              h(o.Nj.REMOVE_ROLE))
                                            : (u.A.updateMemberRoles(t, e, S.concat([n.id]), [n.id], []),
                                              h(o.Nj.ADD_ROLE));
                                    },
                                    checked: a,
                                },
                                n.id,
                            );
                  })
                : v.map((e) =>
                      (0, s.Oy)(e) || !S.includes(e.id)
                          ? null
                          : (0, r.jsx)(
                                i.Drp,
                                {
                                    id: e.id,
                                    leadingAccessory: p(e, _, C),
                                    label: e.name,
                                },
                                e.id,
                            ),
                  );
    return 0 === (D = D.filter(O.Vq)).length
        ? null
        : n
          ? D
          : (0, r.jsx)(i.Drp, {
                id: "roles",
                label: y.intl.formatToPlainString(y.t.PCs0oo, {
                    numRoles: D.length,
                }),
                children: D,
            });
}
