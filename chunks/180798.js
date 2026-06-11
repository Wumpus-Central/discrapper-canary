n.d(e, { A: () => j });
var o = n(627968);
n(64700);
var r = n(17928),
    t = n(545442),
    i = n(477782),
    s = n(775602),
    c = n(504049),
    d = n(468689),
    u = n(676608),
    a = n(34457),
    A = n(696451),
    g = n(317525),
    h = n(71393),
    p = n(576705),
    b = n(403362),
    R = n(652215),
    m = n(375708),
    y = n(32271);
function f(l, e, n) {
    return {
        type: "roleDot",
        variant: "dot" === e ? "dot" : "circle",
        color: l.colorString ?? R.TpD,
        colors: n ? l.colorStrings : null,
    };
}
function _(l, e, n) {
    let r = l.colorString ?? R.TpD,
        i = n ? l.colorStrings : null;
    return (0, o.jsx)("div", {
        className: y.roleDotAccessory,
        children:
            "dot" === e
                ? (0, o.jsx)(t.W, { color: r, colors: i, background: !1, tooltip: !1 })
                : (0, o.jsx)(t.R, { color: r, colors: i ?? null }),
    });
}
function j(l, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        y = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        j = (0, r.bG)([h.A], () => h.A.getGuild(e)),
        D = (0, r.bG)([g.A], () => g.A.getSortedRoles(e)),
        S = (0, r.bG)([s.Ay], () => s.Ay.roleStyle),
        v = (0, c.$9)(e, { location: t, targetUserId: l }),
        {
            userRoles: x,
            isGuildMember: E,
            canManageRoles: M,
        } = (0, r.cf)([A.Ay, p.A], () => {
            let n = A.Ay.getMember(e, l);
            return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != j && p.A.can(R.xBc.MANAGE_ROLES, j),
            };
        }, [l, e, j]),
        O = (0, u.Ay)(e, l);
    if (__OVERLAY__ || null == x || null == j || !E) return null;
    let k = p.A.getHighestRole(j),
        G =
            M && !y
                ? D.map((n) => {
                      if ((0, a.Oy)(n)) return null;
                      let r = n.managed || !p.A.isRoleHigher(j, k, n),
                          t = x.includes(n.id);
                      return r && !t
                          ? null
                          : (0, o.jsx)(
                                i.sL,
                                {
                                    id: n.id,
                                    leadingAccessory: f(n, S, O),
                                    leftIcon: _(n, S, O),
                                    label: n.name,
                                    disabled: r,
                                    action: () => {
                                        x.includes(n.id)
                                            ? (d.A.updateMemberRoles(
                                                  e,
                                                  l,
                                                  x.filter((l) => l !== n.id),
                                                  [],
                                                  [n.id],
                                              ),
                                              v(c.Nj.REMOVE_ROLE))
                                            : (d.A.updateMemberRoles(e, l, x.concat([n.id]), [n.id], []),
                                              v(c.Nj.ADD_ROLE));
                                    },
                                    checked: t,
                                },
                                n.id,
                            );
                  })
                : D.map((l) =>
                      (0, a.Oy)(l) || !x.includes(l.id)
                          ? null
                          : (0, o.jsx)(
                                i.Dr,
                                { id: l.id, leadingAccessory: f(l, S, O), iconLeft: _(l, S, O), label: l.name },
                                l.id,
                            ),
                  );
    return 0 === (G = G.filter(b.Vq)).length
        ? null
        : n
          ? G
          : (0, o.jsx)(i.Dr, {
                id: "roles",
                label: m.intl.formatToPlainString(m.t.PCs0oo, { numRoles: G.length }),
                children: G,
            });
}
