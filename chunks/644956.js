n.d(t, { Z: () => G });
var r = n(200651),
    i = n(192379),
    a = n(392711),
    o = n.n(a),
    s = n(866442),
    l = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(276264),
    f = n(493773),
    _ = n(607070),
    p = n(100527),
    h = n(906732),
    m = n(82295),
    g = n(818083),
    E = n(14263),
    b = n(480608),
    y = n(124072),
    v = n(181918),
    O = n(956226),
    I = n(670188),
    S = n(592125),
    T = n(271383),
    A = n(430824),
    N = n(594174),
    C = n(51144),
    R = n(388032),
    P = n(73433),
    w = n(83902);
function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = (0, g.B)({
    kind: 'user',
    id: '2021-07_role_popout',
    label: 'Role Popout',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Popout',
            config: { enabled: !0 }
        }
    ]
});
function j(e) {
    let { member: t, guildId: i, channelId: a, role: o } = e,
        s = (0, l.e7)(
            [A.Z],
            () => {
                var e;
                return null == (e = A.Z.getGuild(i)) ? void 0 : e.ownerId;
            },
            [i]
        ),
        c = (0, l.e7)([N.default], () => N.default.getUser(t.userId), [t.userId]),
        f = (0, l.e7)([S.Z], () => S.Z.getChannel(a), [a]);
    return null == c || null == f
        ? null
        : (0, r.jsx)(
              I.Z,
              {
                  userId: t.userId,
                  guildId: i,
                  channelId: a,
                  roleId: o.id,
                  spacing: 14,
                  clickTrap: !0,
                  children: (e, a) => {
                      let { isShown: l } = a;
                      return (0, r.jsx)(
                          d.Z,
                          L(
                              {
                                  selected: l,
                                  colorString: t.colorString,
                                  colorStrings: t.colorStrings,
                                  colorRoleName: o.name,
                                  user: c,
                                  isOwner: t.userId === s,
                                  nick: t.nick,
                                  premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                                  channel: f,
                                  guildId: i,
                                  onContextMenu: (e) => {
                                      (0, u.jW)(e, async () => {
                                          let { default: e } = await Promise.all([n.e('94342'), n.e('79695'), n.e('13351'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('20204')]).then(n.bind(n, 757387));
                                          return (t) =>
                                              (0, r.jsx)(
                                                  e,
                                                  M(L({}, t), {
                                                      user: c,
                                                      guildId: i,
                                                      channel: f,
                                                      showMediaItems: !0
                                                  })
                                              );
                                      });
                                  }
                              },
                              e
                          ),
                          t.userId
                      );
                  }
              },
              t.userId
          );
}
function U(e) {
    let { popoutProps: t, roleId: n, guildId: a, channelId: s } = e,
        u = i.useRef(null);
    (0, f.ZP)(() => {
        var e;
        return (
            null == (e = t.setPopoutRef) || e.call(t, u.current),
            () => {
                var e;
                return null == (e = t.setPopoutRef) ? void 0 : e.call(t, null);
            }
        );
    });
    let d = (0, E.Z)(a),
        _ = (0, l.e7)(
            [A.Z],
            () => {
                var e;
                return null == (e = A.Z.getGuild(a)) ? void 0 : e.getEveryoneRoleId();
            },
            [a]
        ),
        p = (0, l.Wu)(
            [T.ZP, N.default],
            () => {
                let e = T.ZP.getMembers(a),
                    t = null == n || n === _ ? e : e.filter((e) => e.roles.includes(n));
                return o()(t)
                    .filter((e) => null != N.default.getUser(e.userId))
                    .sortBy((e) => {
                        var t;
                        return null != (t = e.nick) ? t : C.ZP.getName(N.default.getUser(e.userId));
                    })
                    .value();
            },
            [a, n, _]
        ),
        h = (0, l.e7)(
            [A.Z],
            () => {
                let e = null != n ? n : _;
                return null == e ? null : A.Z.getRole(a, e);
            },
            [a, n, _]
        ),
        g = null == n ? null : null == d ? void 0 : d[n],
        b = i.useMemo(
            () =>
                null != h
                    ? p.map((e) =>
                          (0, r.jsx)(
                              j,
                              {
                                  member: e,
                                  guildId: a,
                                  channelId: s,
                                  role: h
                              },
                              e.userId
                          )
                      )
                    : [],
            [s, a, h, p]
        );
    if (null == h) return null;
    let y =
        null == g
            ? h.name
            : R.intl.formatToPlainString(R.t.CuAQkJ, {
                  title: h.name,
                  count: g
              });
    return (0, r.jsx)(
        'div',
        M(
            L(
                {
                    className: P.rolePopout,
                    ref: u
                },
                t
            ),
            {
                children: (0, r.jsxs)(c.Ttm, {
                    className: P.roleScroller,
                    children: [
                        (0, r.jsx)(m.Z, {
                            className: P.roleHeader,
                            'aria-label': R.intl.formatToPlainString(R.t.UaqbkZ, {
                                title: h.name,
                                count: b.length
                            }),
                            children: (0, r.jsx)('span', {
                                'aria-hidden': !0,
                                children: y
                            })
                        }),
                        b,
                        null == g || g <= b.length
                            ? null
                            : (0, r.jsx)(m.Z, {
                                  className: P.roleHeader,
                                  children: R.intl.formatToPlainString(R.t['9oMmZG'], { count: g - b.length })
                              })
                    ]
                })
            }
        )
    );
}
function G(e) {
    let { roleColor: t, roleColors: n, roleId: i, channelId: a, roleName: o, guildId: u, children: d, inlinePreview: f = !1 } = e,
        { analyticsLocations: m } = (0, h.ZP)(p.Z.ROLE_MENTION),
        g = (0, l.e7)([_.Z], () => _.Z.roleStyle),
        E = (0, v.$V)(u, 'RoleMention'),
        I = ((null != t && 0 !== t) || (null != n && null != n.primaryColor)) && !f,
        S = I && 'dot' === g,
        T = I && 'username' === g,
        A = E && null != n && null != n.secondaryColor ? (0, O.f)(n) : null,
        N = (e) =>
            (0, r.jsxs)(
                y.Z,
                M(
                    L(
                        {
                            className: P.roleMention,
                            color: T ? t : null,
                            roleColors: T ? A : null
                        },
                        e
                    ),
                    {
                        children: [
                            S &&
                                null != t &&
                                (0, r.jsx)(c.FhE, {
                                    color: (0, s.Rf)(t),
                                    colors: A,
                                    className: w.roleDot,
                                    background: !1,
                                    tooltip: !1
                                }),
                            d
                        ]
                    }
                )
            ),
        { enabled: C } = k.getCurrentConfig({ location: '2ec235_1' }, { autoTrackExposure: !1 });
    return !C || f || null == a || null == u || (null == i && '@everyone' !== o)
        ? (0, r.jsx)(h.Gt, {
              value: m,
              children: N()
          })
        : (0, r.jsx)(h.Gt, {
              value: m,
              children: (0, r.jsx)(c.yRy, {
                  preload: async () => {
                      null != i && (await (0, b.H)(u, i));
                  },
                  renderPopout: (e) =>
                      (0, r.jsx)(U, {
                          guildId: u,
                          channelId: a,
                          roleId: i,
                          popoutProps: e
                      }),
                  position: 'right',
                  children: N
              })
          });
}
