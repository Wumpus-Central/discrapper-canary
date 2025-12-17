n.d(t, { Z: () => v }), n(539854), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(149765),
    a = n(442837),
    o = n(481060),
    s = n(749210),
    c = n(412899),
    d = n(995648),
    u = n(385499),
    m = n(600164),
    b = n(422559),
    p = n(598077),
    g = n(271383),
    f = n(485386),
    h = n(768581),
    x = n(388032),
    j = n(939248);
function v(e) {
    var t;
    let { guild: n, applicationIntegration: v } = e,
        { application: O } = v,
        y = null != O.bot ? new p.Z(O.bot) : null,
        C = (0, a.e7)([g.ZP], () => (null != y ? g.ZP.getMember(n.id, y.id) : null), [y, n]),
        N = (0, a.e7)([f.Z], () => f.Z.getEveryoneRole(n)),
        S = (0, a.Wu)([f.Z], () => {
            var e;
            return f.Z.getManyRoles(n.id, null != (e = null == C ? void 0 : C.roles) ? e : []);
        }),
        I = null == y ? void 0 : y.id;
    r.useEffect(() => {
        null != I && s.Z.requestMembersById(n.id, I);
    }, [n.id, I]);
    let T = r.useMemo(() => l.$e(N.permissions, ...S.map((e) => e.permissions)), [S, N]);
    if (null == y) return null;
    let E = h.ZP.getApplicationIconURL({
        id: O.id,
        guildMember: C,
        bot: O.bot,
        icon: O.icon,
        size: 32,
    });
    return (0, i.jsx)(o.Zbd, {
        editable: !0,
        className: j.card,
        children: (0, i.jsxs)(m.Z, {
            direction: m.Z.Direction.VERTICAL,
            children: [
                (0, i.jsxs)(m.Z, {
                    align: m.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)("img", {
                            alt: "",
                            src: E,
                            className: j.iconWrapper,
                        }),
                        (0, i.jsx)(o.Text, {
                            color: "text-strong",
                            variant: "text-sm/normal",
                            children: x.intl.format(x.t.GyhzGw, { user: y.toString() }),
                        }),
                        (0, i.jsx)(u.Z, {
                            className: j.tag,
                            verified: y.isVerifiedBot(),
                        }),
                    ],
                }),
                (function (e, t, n, r) {
                    let a = [],
                        s = [];
                    for (let e of b.VY) l.e$(r, e) ? a.push(e) : s.push(e);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(o.izJ, { className: j.divider }),
                            n.length > 0
                                ? (0, i.jsx)(o.gNt, {
                                      label: x.intl.format(x.t.PCs0oo, { numRoles: n.length }),
                                      children: (0, i.jsx)(c.ZP, {
                                          className: j.rolePills,
                                          user: e,
                                          guild: t,
                                          userRoleIds: n,
                                          wrap: !1,
                                          readOnly: !0,
                                      }),
                                  })
                                : null,
                            a.length > 0 || s.length > 0
                                ? (0, i.jsx)(d.Z, {
                                      grantedPermissions: a,
                                      grantedPermissionsHeader: x.intl.string(x.t["hA4+su"]),
                                      disabledPermissions: s,
                                      disabledPermissionsHeader: x.intl.string(x.t["/rEZ2i"]),
                                  })
                                : null,
                        ],
                    });
                })(y, n, null != (t = null == C ? void 0 : C.roles) ? t : [], T),
            ],
        }),
    });
}
