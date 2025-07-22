(n.d(t, { Z: () => y }), n(539854), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(149765),
    o = n(442837),
    a = n(481060),
    s = n(749210),
    c = n(412899),
    d = n(995648),
    u = n(385499),
    p = n(600164),
    m = n(422559),
    b = n(601964),
    g = n(598077),
    f = n(271383),
    h = n(485386),
    x = n(823379),
    j = n(700785),
    O = n(388032),
    v = n(439478);
function y(e) {
    var t;
    let { guild: n, applicationIntegration: y } = e,
        _ = (0, o.e7)([h.Z], () => h.Z.getRoles(n.id)),
        { application: C } = y,
        N = null != C.bot ? new g.Z(C.bot) : null,
        S = (0, o.e7)([f.ZP], () => (null != N ? f.ZP.getMember(n.id, N.id) : null), [N, n]),
        I = null == N ? void 0 : N.id;
    i.useEffect(() => {
        null != I && s.Z.requestMembersById(n.id, I);
    }, [n.id, I]);
    let E = i.useMemo(() => {
        var e, t, r;
        let i = _[(0, b.lV)(n)],
            o = null != (t = null == S || null == (e = S.roles) ? void 0 : e.map((e) => _[e]).filter(x.lm)) ? t : [],
            a = null != (r = null == i ? void 0 : i.permissions) ? r : j.Hn;
        for (let e of o) a = l.IH(a, e.permissions);
        return a;
    }, [n, _, S]);
    return null == N
        ? null
        : (0, r.jsx)(a.Zbd, {
              editable: !0,
              className: v.card,
              children: (0, r.jsxs)(p.Z, {
                  direction: p.Z.Direction.VERTICAL,
                  children: [
                      (0, r.jsxs)(p.Z, {
                          align: p.Z.Align.CENTER,
                          children: [
                              (0, r.jsx)('img', {
                                  alt: '',
                                  src: N.getAvatarURL(n.id, 32),
                                  className: v.iconWrapper
                              }),
                              (0, r.jsx)(a.Text, {
                                  color: 'header-primary',
                                  variant: 'text-sm/normal',
                                  children: O.intl.format(O.t.GyhzGx, { user: N.toString() })
                              }),
                              (0, r.jsx)(u.Z, {
                                  className: v.tag,
                                  verified: N.isVerifiedBot()
                              })
                          ]
                      }),
                      (function (e, t, n, i) {
                          let o = [],
                              s = [];
                          for (let e of m.VY) l.e$(i, e) ? o.push(e) : s.push(e);
                          return (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(a.$i$, { className: v.divider }),
                                  n.length > 0
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(a.vwX, {
                                                    className: v.permissionHeader,
                                                    children: O.intl.format(O.t.PCs0oq, { numRoles: n.length })
                                                }),
                                                (0, r.jsx)(c.ZP, {
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
                                  o.length > 0 || s.length > 0
                                      ? (0, r.jsx)(d.Z, {
                                            grantedPermissions: o,
                                            grantedPermissionsHeader: O.intl.string(O.t['hA4+sr']),
                                            disabledPermissions: s,
                                            disabledPermissionsHeader: O.intl.string(O.t['/rEZ2t'])
                                        })
                                      : null
                              ]
                          });
                      })(N, n, null != (t = null == S ? void 0 : S.roles) ? t : [], E)
                  ]
              })
          });
}
