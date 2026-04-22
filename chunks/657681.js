n.d(t, { A: () => v }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(136722),
    a = n(311907),
    r = n(404778),
    o = n(452027),
    d = n(359778),
    c = n(834730),
    u = n(686956),
    m = n(417454),
    g = n(595738),
    h = n(709066),
    x = n(235986),
    p = n(376092),
    A = n(427157),
    b = n(696451),
    f = n(317525),
    _ = n(486020),
    j = n(985018),
    N = n(592822);
function v(e) {
    let { guild: t, applicationIntegration: n } = e,
        { application: v } = n,
        E = null != v.bot ? new A.A(v.bot) : null,
        C = (0, a.bG)([b.Ay], () => (null != E ? b.Ay.getMember(t.id, E.id) : null), [E, t]),
        I = (0, a.bG)([f.A], () => f.A.getEveryoneRole(t)),
        T = (0, a.yK)([f.A], () => f.A.getManyRoles(t.id, C?.roles ?? [])),
        S = E?.id;
    l.useEffect(() => {
        null != S && u.A.requestMembersById(t.id, S);
    }, [t.id, S]);
    let y = l.useMemo(() => s.kg(I.permissions, ...T.map((e) => e.permissions)), [T, I]);
    if (null == E) return null;
    let w = _.Ay.getApplicationIconURL({ id: v.id, guildMember: C, bot: v.bot, icon: v.icon, size: 32 });
    return (0, i.jsx)(d.Z, {
        editable: !0,
        className: N.Nr,
        children: (0, i.jsxs)(x.A, {
            direction: x.A.Direction.VERTICAL,
            children: [
                (0, i.jsxs)(x.A, {
                    align: x.A.Align.CENTER,
                    children: [
                        (0, i.jsx)("img", { alt: "", src: w, className: N.P0 }),
                        (0, i.jsx)(c.E, {
                            color: "text-strong",
                            variant: "text-sm/normal",
                            children: j.intl.format(j.t.GyhzGw, { user: E.toString() }),
                        }),
                        (0, i.jsx)(h.A, { className: N.Tc, verified: E.isVerifiedBot() }),
                    ],
                }),
                (function (e, t, n, l) {
                    let a = [],
                        d = [];
                    for (let e of p.Q) s.zy(l, e) ? a.push(e) : d.push(e);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(r.c, { className: N.yF }),
                            n.length > 0
                                ? (0, i.jsx)(o.D, {
                                      label: j.intl.format(j.t.PCs0oo, { numRoles: n.length }),
                                      children: (0, i.jsx)(m.Ay, {
                                          className: N.pf,
                                          user: e,
                                          guild: t,
                                          userRoleIds: n,
                                          wrap: !1,
                                          readOnly: !0,
                                      }),
                                  })
                                : null,
                            a.length > 0 || d.length > 0
                                ? (0, i.jsx)(g.A, {
                                      grantedPermissions: a,
                                      grantedPermissionsHeader: j.intl.string(j.t["hA4+su"]),
                                      disabledPermissions: d,
                                      disabledPermissionsHeader: j.intl.string(j.t["/rEZ2i"]),
                                  })
                                : null,
                        ],
                    });
                })(E, t, C?.roles ?? [], y),
            ],
        }),
    });
}
