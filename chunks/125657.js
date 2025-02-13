n.d(t, { Z: () => C }), n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(149765),
    r = n(442837),
    s = n(481060),
    o = n(749210),
    d = n(412899),
    c = n(995648),
    u = n(385499),
    m = n(600164),
    h = n(422559),
    x = n(598077),
    g = n(271383),
    p = n(430824),
    b = n(823379),
    _ = n(700785),
    f = n(388032),
    v = n(767981);
function C(e) {
    var t;
    let { guild: n, applicationIntegration: C } = e,
        j = (0, r.e7)([p.Z], () => p.Z.getRoles(n.id)),
        { application: N } = C,
        I = null != N.bot ? new x.Z(N.bot) : null,
        Z = (0, r.e7)([g.ZP], () => (null != I ? g.ZP.getMember(n.id, I.id) : null), [I, n]),
        T = null == I ? void 0 : I.id;
    l.useEffect(() => {
        null != T && o.Z.requestMembersById(n.id, T);
    }, [n.id, T]);
    let E = l.useMemo(() => {
        var e, t, i;
        let l = j[n.getEveryoneRoleId()],
            r = null !== (t = null == Z ? void 0 : null === (e = Z.roles) || void 0 === e ? void 0 : e.map((e) => j[e]).filter(b.lm)) && void 0 !== t ? t : [],
            s = null !== (i = null == l ? void 0 : l.permissions) && void 0 !== i ? i : _.Hn;
        for (let e of r) s = a.IH(s, e.permissions);
        return s;
    }, [n, j, Z]);
    return null == I
        ? null
        : (0, i.jsx)(s.Zbd, {
              editable: !0,
              className: v.card,
              children: (0, i.jsxs)(m.Z, {
                  direction: m.Z.Direction.VERTICAL,
                  children: [
                      (0, i.jsxs)(m.Z, {
                          align: m.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: I.getAvatarURL(n.id, 32),
                                  className: v.iconWrapper
                              }),
                              (0, i.jsx)(s.Text, {
                                  color: 'header-primary',
                                  variant: 'text-sm/normal',
                                  children: f.intl.format(f.t.GyhzGx, { user: I.toString() })
                              }),
                              (0, i.jsx)(u.Z, {
                                  className: v.tag,
                                  verified: I.isVerifiedBot()
                              })
                          ]
                      }),
                      (function (e, t, n, l) {
                          let r = [],
                              o = [];
                          for (let e of h.VY) a.e$(l, e) ? r.push(e) : o.push(e);
                          return (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(s.$i$, { className: v.divider }),
                                  n.length > 0
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(s.vwX, {
                                                    className: v.permissionHeader,
                                                    children: f.intl.format(f.t.PCs0oq, { numRoles: n.length })
                                                }),
                                                (0, i.jsx)(d.ZP, {
                                                    className: v.rolePills,
                                                    user: e,
                                                    guild: t,
                                                    userRoles: n,
                                                    wrap: !1,
                                                    readOnly: !0
                                                })
                                            ]
                                        })
                                      : null,
                                  r.length > 0 || o.length > 0
                                      ? (0, i.jsx)(c.Z, {
                                            grantedPermissions: r,
                                            grantedPermissionsHeader: f.intl.string(f.t['hA4+sr']),
                                            disabledPermissions: o,
                                            disabledPermissionsHeader: f.intl.string(f.t['/rEZ2t'])
                                        })
                                      : null
                              ]
                          });
                      })(I, n, null !== (t = null == Z ? void 0 : Z.roles) && void 0 !== t ? t : [], E)
                  ]
              })
          });
}
