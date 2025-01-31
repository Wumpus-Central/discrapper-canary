n.d(t, { Z: () => j }), n(653041), n(47120);
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
    p = n(271383),
    g = n(430824),
    f = n(823379),
    b = n(700785),
    v = n(388032),
    _ = n(449650);
function j(e) {
    var t;
    let { guild: n, applicationIntegration: j } = e,
        N = (0, r.e7)([g.Z], () => g.Z.getRoles(n.id)),
        { application: C } = j,
        I = null != C.bot ? new x.Z(C.bot) : null,
        Z = (0, r.e7)([p.ZP], () => (null != I ? p.ZP.getMember(n.id, I.id) : null), [I, n]),
        T = null == I ? void 0 : I.id;
    l.useEffect(() => {
        null != T && o.Z.requestMembersById(n.id, T);
    }, [n.id, T]);
    let E = l.useMemo(() => {
        var e, t, i;
        let l = N[n.getEveryoneRoleId()],
            r = null !== (t = null == Z ? void 0 : null === (e = Z.roles) || void 0 === e ? void 0 : e.map((e) => N[e]).filter(f.lm)) && void 0 !== t ? t : [],
            s = null !== (i = null == l ? void 0 : l.permissions) && void 0 !== i ? i : b.Hn;
        for (let e of r) s = a.IH(s, e.permissions);
        return s;
    }, [n, N, Z]);
    return null == I
        ? null
        : (0, i.jsx)(s.Zbd, {
              editable: !0,
              className: _.card,
              children: (0, i.jsxs)(m.Z, {
                  direction: m.Z.Direction.VERTICAL,
                  children: [
                      (0, i.jsxs)(m.Z, {
                          align: m.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: I.getAvatarURL(n.id, 32),
                                  className: _.iconWrapper
                              }),
                              (0, i.jsx)(s.Text, {
                                  color: 'header-primary',
                                  variant: 'text-sm/normal',
                                  children: v.intl.format(v.t.GyhzGx, { user: I.toString() })
                              }),
                              (0, i.jsx)(u.Z, {
                                  className: _.tag,
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
                                  (0, i.jsx)(s.$i$, { className: _.divider }),
                                  n.length > 0
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(s.vwX, {
                                                    className: _.permissionHeader,
                                                    children: v.intl.format(v.t.PCs0oq, { numRoles: n.length })
                                                }),
                                                (0, i.jsx)(d.ZP, {
                                                    className: _.rolePills,
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
                                            grantedPermissionsHeader: v.intl.string(v.t['hA4+sr']),
                                            disabledPermissions: o,
                                            disabledPermissionsHeader: v.intl.string(v.t['/rEZ2t'])
                                        })
                                      : null
                              ]
                          });
                      })(I, n, null !== (t = null == Z ? void 0 : Z.roles) && void 0 !== t ? t : [], E)
                  ]
              })
          });
}
