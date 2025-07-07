n.d(t, { Z: () => B });
var r = n(255367),
    i = n(73800),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(573385),
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
    O = n(402235),
    v = n(670188),
    I = n(601964),
    T = n(592125),
    S = n(271383),
    A = n(485386),
    N = n(430824),
    C = n(594174),
    R = n(51144),
    P = n(388032),
    w = n(73433),
    D = n(83902);
function L(e, t, n) {
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
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            }));
    }
    return e;
}
function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = (0, g.B)({
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
function U(e) {
    let { member: t, guildId: a, channelId: o, role: l } = e,
        c = i.useRef(null),
        f = (0, s.e7)(
            [N.Z],
            () => {
                var e;
                return null == (e = N.Z.getGuild(a)) ? void 0 : e.ownerId;
            },
            [a]
        ),
        _ = (0, s.e7)([C.default], () => C.default.getUser(t.userId), [t.userId]),
        p = (0, s.e7)([T.Z], () => T.Z.getChannel(o), [o]);
    return null == _ || null == p
        ? null
        : (0, r.jsx)(
              v.Z,
              {
                  targetElementRef: c,
                  userId: t.userId,
                  guildId: a,
                  channelId: o,
                  roleId: l.id,
                  spacing: 14,
                  clickTrap: !0,
                  children: (e, i) => {
                      let { isShown: o } = i;
                      return (0, r.jsx)(
                          d.Z,
                          x(
                              {
                                  ref: c,
                                  selected: o,
                                  colorString: t.colorString,
                                  colorStrings: t.colorStrings,
                                  colorRoleName: l.name,
                                  user: _,
                                  isOwner: t.userId === f,
                                  nick: t.nick,
                                  premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                                  channel: p,
                                  guildId: a,
                                  onContextMenu: (e) => {
                                      (0, u.jW)(e, async () => {
                                          let { default: e } = await Promise.all([n.e('14006'), n.e('79695'), n.e('80417'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('72374')]).then(n.bind(n, 757387));
                                          return (t) =>
                                              (0, r.jsx)(
                                                  e,
                                                  M(x({}, t), {
                                                      user: _,
                                                      guildId: a,
                                                      channel: p,
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
function G(e) {
    let { popoutProps: t, roleId: n, guildId: a, channelId: u } = e,
        d = i.useRef(null);
    ((0, f.ZP)(() => {
        var e;
        null == (e = t.setPopoutRef) || e.call(t, d.current);
    }),
        (0, f.zq)(() => {
            var e;
            null == (e = t.setPopoutRef) || e.call(t, null);
        }));
    let _ = (0, E.Z)(a),
        p = (0, s.e7)(
            [N.Z],
            () => {
                let e = N.Z.getGuild(a);
                return null == e ? null : (0, I.lV)(e);
            },
            [a]
        ),
        h = (0, s.Wu)(
            [S.ZP, C.default],
            () => {
                let e = S.ZP.getMembers(a),
                    t = null == n || n === p ? e : e.filter((e) => e.roles.includes(n));
                return o()(t)
                    .filter((e) => null != C.default.getUser(e.userId))
                    .sortBy((e) => {
                        var t;
                        return null != (t = e.nick) ? t : R.ZP.getName(C.default.getUser(e.userId));
                    })
                    .value();
            },
            [a, n, p]
        ),
        g = (0, s.e7)(
            [A.Z],
            () => {
                let e = null != n ? n : p;
                return null == e ? null : A.Z.getRole(a, e);
            },
            [a, n, p]
        ),
        b = null == n ? null : null == _ ? void 0 : _[n],
        y = i.useMemo(
            () =>
                null != g
                    ? h.map((e) =>
                          (0, r.jsx)(
                              U,
                              {
                                  member: e,
                                  guildId: a,
                                  channelId: u,
                                  role: g
                              },
                              e.userId
                          )
                      )
                    : [],
            [u, a, g, h]
        );
    if (null == g) return null;
    let O =
        null == b
            ? g.name
            : P.intl.formatToPlainString(P.t.CuAQkJ, {
                  title: g.name,
                  count: b
              });
    return (0, r.jsx)(l.d.Provider, {
        value: void 0,
        children: (0, r.jsx)(
            'div',
            M(
                x(
                    {
                        className: w.rolePopout,
                        ref: d
                    },
                    t
                ),
                {
                    children: (0, r.jsxs)(c.Ttm, {
                        className: w.roleScroller,
                        children: [
                            (0, r.jsx)(m.Z, {
                                className: w.roleHeader,
                                'aria-label': P.intl.formatToPlainString(P.t.UaqbkZ, {
                                    title: g.name,
                                    count: y.length
                                }),
                                children: (0, r.jsx)('span', {
                                    'aria-hidden': !0,
                                    children: O
                                })
                            }),
                            y,
                            null == b || b <= y.length
                                ? null
                                : (0, r.jsx)(m.Z, {
                                      className: w.roleHeader,
                                      children: P.intl.formatToPlainString(P.t['9oMmZG'], { count: b - y.length })
                                  })
                        ]
                    })
                }
            )
        )
    });
}
function B(e) {
    let { roleId: t, channelId: n, roleName: a, guildId: o, children: l, inlinePreview: u = !1 } = e,
        { analyticsLocations: d } = (0, h.ZP)(p.Z.ROLE_MENTION),
        f = (0, s.e7)([_.Z], () => _.Z.roleStyle),
        m = (0, s.e7)([A.Z], () => (null == o || null == t ? null : A.Z.getRole(o, t))),
        g = (0, O.yH)(o, m),
        E = !u && null != m && (0 !== m.color || (null != m.colors && null != m.colors.primary_color)),
        v = E && 'dot' === f,
        I = E && 'username' === f,
        T = g && null != m ? m.colorStrings : null,
        S = i.useRef(null),
        N = (e) =>
            (0, r.jsxs)(
                y.Z,
                M(
                    x(
                        {
                            ref: S,
                            className: w.roleMention,
                            color: I ? m.color : null,
                            roleColors: I ? T : null
                        },
                        e
                    ),
                    {
                        children: [
                            v &&
                                (0, r.jsx)(c.FhE, {
                                    color: m.colorString,
                                    colors: T,
                                    className: D.roleDot,
                                    background: !1,
                                    tooltip: !1
                                }),
                            l
                        ]
                    }
                )
            ),
        { enabled: C } = j.getCurrentConfig({ location: '2ec235_1' }, { autoTrackExposure: !1 });
    return !C || u || null == n || null == o || (null == t && '@everyone' !== a)
        ? (0, r.jsx)(h.Gt, {
              value: d,
              children: N()
          })
        : (0, r.jsx)(h.Gt, {
              value: d,
              children: (0, r.jsx)(c.yRy, {
                  targetElementRef: S,
                  preload: async () => {
                      null != t && (await (0, b.H)(o, t));
                  },
                  renderPopout: (e) =>
                      (0, r.jsx)(G, {
                          guildId: o,
                          channelId: n,
                          roleId: t,
                          popoutProps: e
                      }),
                  position: 'right',
                  children: N
              })
          });
}
