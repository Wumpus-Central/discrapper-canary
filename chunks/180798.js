t.d(e, { A: () => S });
var n = t(477900);
t(582128);
var o = t(17928),
    r = t(545442),
    i = t(739187),
    c = t(857250),
    s = t(97483),
    d = t(477782),
    a = t(775602),
    u = t(504049),
    g = t(468689),
    A = t(676608),
    h = t(34457),
    p = t(696451),
    f = t(317525),
    R = t(71393),
    b = t(576705),
    y = t(403362),
    m = t(652215),
    E = t(660183),
    _ = t(798819);
function j(l, e, t) {
    return {
        type: "roleDot",
        variant: "dot" === e ? "dot" : "circle",
        color: l.colorString ?? m.TpD,
        colors: t ? l.colorStrings : null,
    };
}
function D(l, e, t) {
    let o = l.colorString ?? m.TpD,
        i = t ? l.colorStrings : null;
    return (0, n.jsx)("div", {
        className: _.roleDotAccessory,
        children:
            "dot" === e
                ? (0, n.jsx)(r.W, { color: o, colors: i, background: !1, tooltip: !1 })
                : (0, n.jsx)(r.R, { color: o, colors: i ?? null }),
    });
}
function S(l, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        _ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        S = (0, o.bG)([R.A], () => R.A.getGuild(e)),
        k = (0, o.bG)([f.A], () => f.A.getSortedRoles(e)),
        v = (0, o.bG)([a.Ay], () => a.Ay.roleStyle),
        x = (0, u.$9)(e, { location: r, targetUserId: l }),
        {
            userRoles: L,
            isGuildMember: M,
            canManageRoles: O,
        } = (0, o.cf)(
            [p.Ay, b.A],
            () => {
                let t = p.Ay.getMember(e, l);
                return {
                    userRoles: null != t ? t.roles : [],
                    isGuildMember: null != t,
                    canManageRoles: null != S && b.A.can(m.xBc.MANAGE_ROLES, S),
                };
            },
            [l, e, S],
        ),
        G = (0, A.Ay)(e, l);
    if (__OVERLAY__ || null == L || null == S || !M) return null;
    async function w(t) {
        let n = L.includes(t.id);
        try {
            (n
                ? await g.default.updateMemberRoles(
                      e,
                      l,
                      L.filter((l) => l !== t.id),
                      [],
                      [t.id],
                  )
                : await g.default.updateMemberRoles(e, l, L.concat([t.id]), [t.id], []),
                x(n ? u.Nj.REMOVE_ROLE : u.Nj.ADD_ROLE));
        } catch {
            (0, i.P)((0, c.o)(E.intl.string(E.t.fEptJP), s.Ck.FAILURE));
        }
    }
    let C = b.A.getHighestRole(S),
        N =
            O && !_
                ? k.map((l) => {
                      if ((0, h.Oy)(l)) return null;
                      let e = l.managed || !b.A.isRoleHigher(S, C, l),
                          t = L.includes(l.id);
                      return e && !t
                          ? null
                          : (0, n.jsx)(
                                d.sL,
                                {
                                    id: l.id,
                                    leadingAccessory: j(l, v, G),
                                    leftIcon: D(l, v, G),
                                    label: l.name,
                                    disabled: e,
                                    action: () => w(l),
                                    checked: t,
                                },
                                l.id,
                            );
                  })
                : k.map((l) =>
                      (0, h.Oy)(l) || !L.includes(l.id)
                          ? null
                          : (0, n.jsx)(
                                d.Dr,
                                { id: l.id, leadingAccessory: j(l, v, G), iconLeft: D(l, v, G), label: l.name },
                                l.id,
                            ),
                  );
    return 0 === (N = N.filter(y.Vq)).length
        ? null
        : t
          ? N
          : (0, n.jsx)(d.Dr, {
                id: "roles",
                label: E.intl.formatToPlainString(E.t.PCs0oo, { numRoles: N.length }),
                children: N,
            });
}
