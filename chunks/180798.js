var n = t(477900);
t(582128);
var r = t(855986),
    i = t(545442),
    o = t(858899),
    c = t(477782),
    s = t(775602),
    d = t(504049),
    a = t(727419),
    u = t(266891),
    A = t(676608),
    g = t(34457),
    p = t(696451),
    h = t(317525),
    b = t(71393),
    y = t(576705),
    f = t(403362),
    R = t(652215),
    m = t(792996),
    _ = t(798819);
function j(l, e, t) {
    return {
        type: "roleDot",
        variant: "dot" === e ? "dot" : "circle",
        color: l.colorString ?? R.TpD,
        colors: t ? l.colorStrings : null,
    };
}
function v(l, e, t) {
    let r = l.colorString ?? R.TpD,
        o = t ? l.colorStrings : null;
    return (0, n.jsx)("div", {
        className: _.roleDotAccessory,
        children:
            "dot" === e
                ? (0, n.jsx)(i.W, { color: r, colors: o, background: !1, tooltip: !1 })
                : (0, n.jsx)(i.R, { color: r, colors: o ?? null }),
    });
}
t.d(
    e,
    {},
    {
        A: function (l, e) {
            let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                _ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                x = (0, r.bG)([b.A], () => b.A.getGuild(e)),
                D = (0, r.bG)([h.A], () => h.A.getSortedRoles(e)),
                E = (0, r.bG)([s.Ay], () => s.Ay.roleStyle),
                S = (0, d.$9)(e, { location: i, targetUserId: l }),
                {
                    userRoles: M,
                    isGuildMember: O,
                    canManageRoles: k,
                } = (0, r.cf)(
                    [p.Ay, y.A],
                    () => {
                        let t = p.Ay.getMember(e, l);
                        return {
                            userRoles: null != t ? t.roles : [],
                            isGuildMember: null != t,
                            canManageRoles: null != x && y.A.can(R.xBc.MANAGE_ROLES, x),
                        };
                    },
                    [l, e, x],
                ),
                G = (0, A.Ay)(e, l);
            if (__OVERLAY__ || null == M || null == x || !O) return null;
            let L = y.A.getHighestRole(x),
                w =
                    k && !_
                        ? D.map((t) => {
                              if ((0, g.Oy)(t)) return null;
                              let r = !(0, u.m)(x, L, t),
                                  i = M.includes(t.id);
                              return r && !i
                                  ? null
                                  : (0, n.jsx)(
                                        c.sL,
                                        {
                                            id: t.id,
                                            leadingAccessory: j(t, E, G),
                                            leftIcon: v(t, E, G),
                                            label: t.name,
                                            disabled: r,
                                            action: () =>
                                                (async function (t) {
                                                    let n = M.includes(t.id);
                                                    try {
                                                        (n
                                                            ? await a.A.updateMemberRoles(
                                                                  e,
                                                                  l,
                                                                  M.filter((l) => l !== t.id),
                                                                  [],
                                                                  [t.id],
                                                              )
                                                            : await a.A.updateMemberRoles(
                                                                  e,
                                                                  l,
                                                                  M.concat([t.id]),
                                                                  [t.id],
                                                                  [],
                                                              ),
                                                            S(n ? d.Nj.REMOVE_ROLE : d.Nj.ADD_ROLE));
                                                    } catch {
                                                        (0, o.P0)({
                                                            text: m.intl.string(m.t.fEptJP),
                                                            variant: "critical",
                                                        });
                                                    }
                                                })(t),
                                            checked: i,
                                        },
                                        t.id,
                                    );
                          })
                        : D.map((l) =>
                              (0, g.Oy)(l) || !M.includes(l.id)
                                  ? null
                                  : (0, n.jsx)(
                                        c.Dr,
                                        { id: l.id, leadingAccessory: j(l, E, G), iconLeft: v(l, E, G), label: l.name },
                                        l.id,
                                    ),
                          );
            return 0 === (w = w.filter(f.Vq)).length
                ? null
                : t
                  ? w
                  : (0, n.jsx)(c.Dr, {
                        id: "roles",
                        label: m.intl.formatToPlainString(m.t.PCs0oo, { numRoles: w.length }),
                        children: w,
                    });
        },
    },
);
