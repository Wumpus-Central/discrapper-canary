n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(149765),
    a = n(442837),
    o = n(481060),
    s = n(749210),
    d = n(412899),
    c = n(995648),
    u = n(385499),
    m = n(600164),
    h = n(422559),
    p = n(598077),
    g = n(271383),
    x = n(430824),
    f = n(823379),
    b = n(700785),
    v = n(388032),
    C = n(449650);
function N(e) {
    var t;
    let { guild: n, applicationIntegration: N } = e,
        I = (0, a.e7)([x.Z], () => x.Z.getRoles(n.id)),
        { application: j } = N,
        T = null != j.bot ? new p.Z(j.bot) : null,
        _ = (0, a.e7)([g.ZP], () => (null != T ? g.ZP.getMember(n.id, T.id) : null), [T, n]),
        Z = null == T ? void 0 : T.id;
    l.useEffect(() => {
        if (null != Z) s.Z.requestMembersById(n.id, Z);
    }, [n.id, Z]);
    let E = l.useMemo(() => {
        var e, t, i;
        let l = I[n.getEveryoneRoleId()],
            a = null !== (t = null == _ ? void 0 : null === (e = _.roles) || void 0 === e ? void 0 : e.map((e) => I[e]).filter(f.lm)) && void 0 !== t ? t : [],
            o = null !== (i = null == l ? void 0 : l.permissions) && void 0 !== i ? i : b.Hn;
        for (let e of a) o = r.IH(o, e.permissions);
        return o;
    }, [n, I, _]);
    return null == T
        ? null
        : (0, i.jsx)(o.Card, {
              editable: !0,
              className: C.card,
              children: (0, i.jsxs)(m.Z, {
                  direction: m.Z.Direction.VERTICAL,
                  children: [
                      (0, i.jsxs)(m.Z, {
                          align: m.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: T.getAvatarURL(n.id, 32),
                                  className: C.iconWrapper
                              }),
                              (0, i.jsx)(o.Text, {
                                  color: 'header-primary',
                                  variant: 'text-sm/normal',
                                  children: v.intl.format(v.t.GyhzGx, { user: T.toString() })
                              }),
                              (0, i.jsx)(u.Z, {
                                  className: C.tag,
                                  verified: T.isVerifiedBot()
                              })
                          ]
                      }),
                      (function (e, t, n, l) {
                          let a = [],
                              s = [];
                          for (let e of h.VY) r.e$(l, e) ? a.push(e) : s.push(e);
                          return (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(o.FormDivider, { className: C.divider }),
                                  n.length > 0
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(o.FormTitle, {
                                                    className: C.permissionHeader,
                                                    children: v.intl.format(v.t.PCs0oq, { numRoles: n.length })
                                                }),
                                                (0, i.jsx)(d.ZP, {
                                                    className: C.rolePills,
                                                    user: e,
                                                    guild: t,
                                                    userRoles: n,
                                                    wrap: !1,
                                                    readOnly: !0
                                                })
                                            ]
                                        })
                                      : null,
                                  a.length > 0 || s.length > 0
                                      ? (0, i.jsx)(c.Z, {
                                            grantedPermissions: a,
                                            grantedPermissionsHeader: v.intl.string(v.t['hA4+sr']),
                                            disabledPermissions: s,
                                            disabledPermissionsHeader: v.intl.string(v.t['/rEZ2t'])
                                        })
                                      : null
                              ]
                          });
                      })(T, n, null !== (t = null == _ ? void 0 : _.roles) && void 0 !== t ? t : [], E)
                  ]
              })
          });
}
