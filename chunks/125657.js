n.d(t, { Z: () => j }), n(539854), n(388685);
var i = n(951288),
    r = n(647438),
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
    h = n(388032),
    x = n(144645);
function j(e) {
    var t;
    let { guild: n, applicationIntegration: j } = e,
        { application: v } = j,
        y = null != v.bot ? new b.Z(v.bot) : null,
        O = (0, a.e7)([g.ZP], () => (null != y ? g.ZP.getMember(n.id, y.id) : null), [y, n]),
        _ = (0, a.e7)([f.Z], () => f.Z.getEveryoneRole(n)),
        C = (0, a.Wu)([f.Z], () => {
            var e;
            return f.Z.getManyRoles(n.id, null != (e = null == O ? void 0 : O.roles) ? e : []);
        }),
        N = null == y ? void 0 : y.id;
    r.useEffect(() => {
        null != N && s.Z.requestMembersById(n.id, N);
    }, [n.id, N]);
    let Z = r.useMemo(() => l.$e(_.permissions, ...C.map((e) => e.permissions)), [C, _]);
    return null == y
        ? null
        : (0, i.jsx)(o.Zbd, {
              editable: !0,
              className: x.card,
              children: (0, i.jsxs)(p.Z, {
                  direction: p.Z.Direction.VERTICAL,
                  children: [
                      (0, i.jsxs)(p.Z, {
                          align: p.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)("img", {
                                  alt: "",
                                  src: y.getAvatarURL(n.id, 32),
                                  className: x.iconWrapper,
                              }),
                              (0, i.jsx)(o.Text, {
                                  color: "header-primary",
                                  variant: "text-sm/normal",
                                  children: h.intl.format(h.t.GyhzGx, { user: y.toString() }),
                              }),
                              (0, i.jsx)(u.Z, {
                                  className: x.tag,
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
                                  (0, i.jsx)(o.$i$, { className: x.divider }),
                                  n.length > 0
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(o.vwX, {
                                                    className: x.permissionHeader,
                                                    children: h.intl.format(h.t.PCs0oq, { numRoles: n.length }),
                                                }),
                                                (0, i.jsx)(c.ZP, {
                                                    className: x.rolePills,
                                                    user: e,
                                                    guild: t,
                                                    userRoleIds: n,
                                                    wrap: !1,
                                                    readOnly: !0,
                                                }),
                                            ],
                                        })
                                      : null,
                                  a.length > 0 || s.length > 0
                                      ? (0, i.jsx)(d.Z, {
                                            grantedPermissions: a,
                                            grantedPermissionsHeader: h.intl.string(h.t["hA4+sr"]),
                                            disabledPermissions: s,
                                            disabledPermissionsHeader: h.intl.string(h.t["/rEZ2t"]),
                                        })
                                      : null,
                              ],
                          });
                      })(y, n, null != (t = null == O ? void 0 : O.roles) ? t : [], Z),
                  ],
              }),
          });
}
