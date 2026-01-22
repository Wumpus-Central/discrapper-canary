n.d(t, {
    A: () => O,
}),
    n(321073),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(136722),
    a = n(311907),
    s = n(397927),
    o = n(686956),
    c = n(417454),
    d = n(595738),
    u = n(709066),
    b = n(235986),
    f = n(376092),
    p = n(427157),
    m = n(696451),
    g = n(317525),
    h = n(486020),
    x = n(985018),
    j = n(906809);

function O(e) {
    var t;
    let { guild: n, applicationIntegration: O } = e,
        { application: y } = O,
        A = null != y.bot ? new p.A(y.bot) : null,
        v = (0, a.bG)([m.Ay], () => (null != A ? m.Ay.getMember(n.id, A.id) : null), [A, n]),
        N = (0, a.bG)([g.A], () => g.A.getEveryoneRole(n)),
        E = (0, a.yK)([g.A], () => {
            var e;
            return g.A.getManyRoles(n.id, null != (e = null == v ? void 0 : v.roles) ? e : []);
        }),
        T = null == A ? void 0 : A.id;
    r.useEffect(() => {
        null != T && o.A.requestMembersById(n.id, T);
    }, [n.id, T]);
    let w = r.useMemo(() => l.kg(N.permissions, ...E.map((e) => e.permissions)), [E, N]);
    if (null == A) return null;
    let C = h.Ay.getApplicationIconURL({
        id: y.id,
        guildMember: v,
        bot: y.bot,
        icon: y.icon,
        size: 32,
    });
    return (0, i.jsx)(s.ZpM, {
        editable: !0,
        className: j.Nr,
        children: (0, i.jsxs)(b.A, {
            direction: b.A.Direction.VERTICAL,
            children: [
                (0, i.jsxs)(b.A, {
                    align: b.A.Align.CENTER,
                    children: [
                        (0, i.jsx)("img", {
                            alt: "",
                            src: C,
                            className: j.P0,
                        }),
                        (0, i.jsx)(s.Text, {
                            color: "text-strong",
                            variant: "text-sm/normal",
                            children: x.intl.format(x.t.GyhzGw, {
                                user: A.toString(),
                            }),
                        }),
                        (0, i.jsx)(u.A, {
                            className: j.Tc,
                            verified: A.isVerifiedBot(),
                        }),
                    ],
                }),
                (function (e, t, n, r) {
                    let a = [],
                        o = [];
                    for (let e of f.Q) l.zy(r, e) ? a.push(e) : o.push(e);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(s.cGx, {
                                className: j.yF,
                            }),
                            n.length > 0
                                ? (0, i.jsx)(s.D0$, {
                                      label: x.intl.format(x.t.PCs0oo, {
                                          numRoles: n.length,
                                      }),
                                      children: (0, i.jsx)(c.Ay, {
                                          className: j.pf,
                                          user: e,
                                          guild: t,
                                          userRoleIds: n,
                                          wrap: !1,
                                          readOnly: !0,
                                      }),
                                  })
                                : null,
                            a.length > 0 || o.length > 0
                                ? (0, i.jsx)(d.A, {
                                      grantedPermissions: a,
                                      grantedPermissionsHeader: x.intl.string(x.t["hA4+su"]),
                                      disabledPermissions: o,
                                      disabledPermissionsHeader: x.intl.string(x.t["/rEZ2i"]),
                                  })
                                : null,
                        ],
                    });
                })(A, n, null != (t = null == v ? void 0 : v.roles) ? t : [], w),
            ],
        }),
    });
}
