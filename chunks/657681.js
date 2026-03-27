n.d(t, { A: () => _ }), n(321073);
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
    f = n(475942);
function _(e) {
    let { guild: t, applicationIntegration: n } = e,
        { application: _ } = n,
        N = null != _.bot ? new x.A(_.bot) : null,
        j = (0, a.bG)([h.Ay], () => (null != N ? h.Ay.getMember(t.id, N.id) : null), [N, t]),
        T = (0, a.bG)([p.A], () => p.A.getEveryoneRole(t)),
        v = (0, a.yK)([p.A], () => p.A.getManyRoles(t.id, j?.roles ?? [])),
        C = N?.id;
    l.useEffect(() => {
        null != C && o.A.requestMembersById(t.id, C);
    }, [t.id, C]);
    let I = l.useMemo(() => s.kg(T.permissions, ...v.map((e) => e.permissions)), [v, T]);
    if (null == N) return null;
    let E = A.Ay.getApplicationIconURL({ id: _.id, guildMember: j, bot: _.bot, icon: _.icon, size: 32 });
    return (0, i.jsx)(r.ZpM, {
        editable: !0,
        className: f.Nr,
        children: (0, i.jsxs)(m.A, {
            direction: m.A.Direction.VERTICAL,
            children: [
                (0, i.jsxs)(m.A, {
                    align: m.A.Align.CENTER,
                    children: [
                        (0, i.jsx)("img", { alt: "", src: E, className: f.P0 }),
                        (0, i.jsx)(r.Text, {
                            color: "text-strong",
                            variant: "text-sm/normal",
                            children: b.intl.format(b.t.GyhzGw, { user: N.toString() }),
                        }),
                        (0, i.jsx)(u.A, { className: f.Tc, verified: N.isVerifiedBot() }),
                    ],
                }),
                (function (e, t, n, l) {
                    let a = [],
                        o = [];
                    for (let e of g.Q) s.zy(l, e) ? a.push(e) : o.push(e);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(r.cGx, { className: f.yF }),
                            n.length > 0
                                ? (0, i.jsx)(r.D0$, {
                                      label: b.intl.format(b.t.PCs0oo, { numRoles: n.length }),
                                      children: (0, i.jsx)(d.Ay, {
                                          className: f.pf,
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
                })(N, t, j?.roles ?? [], I),
            ],
        }),
    });
}
