n.d(t, { A: () => f }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(136722),
    a = n(311907),
    r = n(397927),
    o = n(686956),
    d = n(417454),
    c = n(595738),
    u = n(709066),
    m = n(235986),
    g = n(376092),
    x = n(427157),
    h = n(696451),
    p = n(317525),
    A = n(486020),
    b = n(985018),
    _ = n(906809);
function f(e) {
    let { guild: t, applicationIntegration: n } = e,
        { application: f } = n,
        N = null != f.bot ? new x.A(f.bot) : null,
        j = (0, a.bG)([h.Ay], () => (null != N ? h.Ay.getMember(t.id, N.id) : null), [N, t]),
        T = (0, a.bG)([p.A], () => p.A.getEveryoneRole(t)),
        C = (0, a.yK)([p.A], () => p.A.getManyRoles(t.id, j?.roles ?? [])),
        v = N?.id;
    l.useEffect(() => {
        null != v && o.A.requestMembersById(t.id, v);
    }, [t.id, v]);
    let E = l.useMemo(() => s.kg(T.permissions, ...C.map((e) => e.permissions)), [C, T]);
    if (null == N) return null;
    let I = A.Ay.getApplicationIconURL({ id: f.id, guildMember: j, bot: f.bot, icon: f.icon, size: 32 });
    return (0, i.jsx)(r.ZpM, {
        editable: !0,
        className: _.Nr,
        children: (0, i.jsxs)(m.A, {
            direction: m.A.Direction.VERTICAL,
            children: [
                (0, i.jsxs)(m.A, {
                    align: m.A.Align.CENTER,
                    children: [
                        (0, i.jsx)("img", { alt: "", src: I, className: _.P0 }),
                        (0, i.jsx)(r.Text, {
                            color: "text-strong",
                            variant: "text-sm/normal",
                            children: b.intl.format(b.t.GyhzGw, { user: N.toString() }),
                        }),
                        (0, i.jsx)(u.A, { className: _.Tc, verified: N.isVerifiedBot() }),
                    ],
                }),
                (function (e, t, n, l) {
                    let a = [],
                        o = [];
                    for (let e of g.Q) s.zy(l, e) ? a.push(e) : o.push(e);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(r.cGx, { className: _.yF }),
                            n.length > 0
                                ? (0, i.jsx)(r.D0$, {
                                      label: b.intl.format(b.t.PCs0oo, { numRoles: n.length }),
                                      children: (0, i.jsx)(d.Ay, {
                                          className: _.pf,
                                          user: e,
                                          guild: t,
                                          userRoleIds: n,
                                          wrap: !1,
                                          readOnly: !0,
                                      }),
                                  })
                                : null,
                            a.length > 0 || o.length > 0
                                ? (0, i.jsx)(c.A, {
                                      grantedPermissions: a,
                                      grantedPermissionsHeader: b.intl.string(b.t["hA4+su"]),
                                      disabledPermissions: o,
                                      disabledPermissionsHeader: b.intl.string(b.t["/rEZ2i"]),
                                  })
                                : null,
                        ],
                    });
                })(N, t, j?.roles ?? [], E),
            ],
        }),
    });
}
