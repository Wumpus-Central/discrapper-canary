(n.d(t, { Z: () => j }), n(539854), n(388685));
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
    b = n(598077),
    g = n(271383),
    f = n(485386),
    h = n(388032),
    x = n(439478);
function j(e) {
    var t;
    let { guild: n, applicationIntegration: j } = e,
        { application: v } = j,
        O = null != v.bot ? new b.Z(v.bot) : null,
        y = (0, o.e7)([g.ZP], () => (null != O ? g.ZP.getMember(n.id, O.id) : null), [O, n]),
        _ = (0, o.e7)([f.Z], () => f.Z.getEveryoneRole(n)),
        C = (0, o.Wu)([f.Z], () => {
            var e;
            return f.Z.getManyRoles(n.id, null != (e = null == y ? void 0 : y.roles) ? e : []);
        }),
        N = null == O ? void 0 : O.id;
    i.useEffect(() => {
        null != N && s.Z.requestMembersById(n.id, N);
    }, [n.id, N]);
    let S = i.useMemo(() => l.$e(_.permissions, ...C.map((e) => e.permissions)), [C, _]);
    return null == O
        ? null
        : (0, r.jsx)(a.Zbd, {
              editable: !0,
              className: x.card,
              children: (0, r.jsxs)(p.Z, {
                  direction: p.Z.Direction.VERTICAL,
                  children: [
                      (0, r.jsxs)(p.Z, {
                          align: p.Z.Align.CENTER,
                          children: [
                              (0, r.jsx)('img', {
                                  alt: '',
                                  src: O.getAvatarURL(n.id, 32),
                                  className: x.iconWrapper
                              }),
                              (0, r.jsx)(a.Text, {
                                  color: 'header-primary',
                                  variant: 'text-sm/normal',
                                  children: h.intl.format(h.t.GyhzGx, { user: O.toString() })
                              }),
                              (0, r.jsx)(u.Z, {
                                  className: x.tag,
                                  verified: O.isVerifiedBot()
                              })
                          ]
                      }),
                      (function (e, t, n, i) {
                          let o = [],
                              s = [];
                          for (let e of m.VY) l.e$(i, e) ? o.push(e) : s.push(e);
                          return (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(a.$i$, { className: x.divider }),
                                  n.length > 0
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(a.vwX, {
                                                    className: x.permissionHeader,
                                                    children: h.intl.format(h.t.PCs0oq, { numRoles: n.length })
                                                }),
                                                (0, r.jsx)(c.ZP, {
                                                    className: x.rolePills,
                                                    user: e,
                                                    guild: t,
                                                    userRoleIds: n,
                                                    wrap: !1,
                                                    readOnly: !0
                                                })
                                            ]
                                        })
                                      : null,
                                  o.length > 0 || s.length > 0
                                      ? (0, r.jsx)(d.Z, {
                                            grantedPermissions: o,
                                            grantedPermissionsHeader: h.intl.string(h.t['hA4+sr']),
                                            disabledPermissions: s,
                                            disabledPermissionsHeader: h.intl.string(h.t['/rEZ2t'])
                                        })
                                      : null
                              ]
                          });
                      })(O, n, null != (t = null == y ? void 0 : y.roles) ? t : [], S)
                  ]
              })
          });
}
