n.d(t, { Z: () => O }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
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
    f = n(430824),
    h = n(823379),
    x = n(700785),
    j = n(388032),
    N = n(439478);
function O(e) {
    var t;
    let { guild: n, applicationIntegration: O } = e,
        v = (0, o.e7)([f.Z], () => f.Z.getRoles(n.id)),
        { application: y } = O,
        _ = null != y.bot ? new b.Z(y.bot) : null,
        C = (0, o.e7)([g.ZP], () => (null != _ ? g.ZP.getMember(n.id, _.id) : null), [_, n]),
        I = null == _ ? void 0 : _.id;
    i.useEffect(() => {
        null != I && s.Z.requestMembersById(n.id, I);
    }, [n.id, I]);
    let S = i.useMemo(() => {
        var e, t, r;
        let i = v[n.getEveryoneRoleId()],
            o = null != (t = null == C || null == (e = C.roles) ? void 0 : e.map((e) => v[e]).filter(h.lm)) ? t : [],
            a = null != (r = null == i ? void 0 : i.permissions) ? r : x.Hn;
        for (let e of o) a = l.IH(a, e.permissions);
        return a;
    }, [n, v, C]);
    return null == _
        ? null
        : (0, r.jsx)(a.Zbd, {
              editable: !0,
              className: N.card,
              children: (0, r.jsxs)(p.Z, {
                  direction: p.Z.Direction.VERTICAL,
                  children: [
                      (0, r.jsxs)(p.Z, {
                          align: p.Z.Align.CENTER,
                          children: [
                              (0, r.jsx)('img', {
                                  alt: '',
                                  src: _.getAvatarURL(n.id, 32),
                                  className: N.iconWrapper
                              }),
                              (0, r.jsx)(a.Text, {
                                  color: 'header-primary',
                                  variant: 'text-sm/normal',
                                  children: j.NW.format(j.t.GyhzGx, { user: _.toString() })
                              }),
                              (0, r.jsx)(u.Z, {
                                  className: N.tag,
                                  verified: _.isVerifiedBot()
                              })
                          ]
                      }),
                      (function (e, t, n, i) {
                          let o = [],
                              s = [];
                          for (let e of m.VY) l.e$(i, e) ? o.push(e) : s.push(e);
                          return (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(a.$i$, { className: N.divider }),
                                  n.length > 0
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(a.vwX, {
                                                    className: N.permissionHeader,
                                                    children: j.NW.format(j.t.PCs0oq, { numRoles: n.length })
                                                }),
                                                (0, r.jsx)(c.ZP, {
                                                    className: N.rolePills,
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
                                            grantedPermissionsHeader: j.NW.string(j.t['hA4+sr']),
                                            disabledPermissions: s,
                                            disabledPermissionsHeader: j.NW.string(j.t['/rEZ2t'])
                                        })
                                      : null
                              ]
                          });
                      })(_, n, null != (t = null == C ? void 0 : C.roles) ? t : [], S)
                  ]
              })
          });
}
