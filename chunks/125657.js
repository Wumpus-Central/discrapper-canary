n.d(t, { Z: () => O }), n(539854), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(149765),
    a = n(442837),
    o = n(481060),
    s = n(749210),
    c = n(412899),
    d = n(995648),
    u = n(385499),
    p = n(600164),
    m = n(422559),
    b = n(598077),
    g = n(271383),
    f = n(485386),
    h = n(768581),
    x = n(388032),
    j = n(144645);
function O(e) {
    var t;
    let { guild: n, applicationIntegration: O } = e,
        { application: v } = O,
        y = null != v.bot ? new b.Z(v.bot) : null,
        _ = (0, a.e7)([g.ZP], () => (null != y ? g.ZP.getMember(n.id, y.id) : null), [y, n]),
        C = (0, a.e7)([f.Z], () => f.Z.getEveryoneRole(n)),
        N = (0, a.Wu)([f.Z], () => {
            var e;
            return f.Z.getManyRoles(n.id, null != (e = null == _ ? void 0 : _.roles) ? e : []);
        }),
        S = null == y ? void 0 : y.id;
    r.useEffect(() => {
        null != S && s.Z.requestMembersById(n.id, S);
    }, [n.id, S]);
    let P = r.useMemo(() => l.$e(C.permissions, ...N.map((e) => e.permissions)), [N, C]);
    if (null == y) return null;
    let w = h.ZP.getApplicationIconURL({
        id: v.id,
        guildMember: _,
        bot: v.bot,
        icon: v.icon,
        size: 32,
    });
    return (0, i.jsx)(o.Zbd, {
        editable: !0,
        className: j.card,
        children: (0, i.jsxs)(p.Z, {
            direction: p.Z.Direction.VERTICAL,
            children: [
                (0, i.jsxs)(p.Z, {
                    align: p.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)("img", {
                            alt: "",
                            src: w,
                            className: j.iconWrapper,
                        }),
                        (0, i.jsx)(o.Text, {
                            color: "header-primary",
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
                    for (let e of m.VY) l.e$(r, e) ? a.push(e) : s.push(e);
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
                })(y, n, null != (t = null == _ ? void 0 : _.roles) ? t : [], P),
            ],
        }),
    });
}
