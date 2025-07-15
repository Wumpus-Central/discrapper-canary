n.d(t, { Z: () => V });
var r = n(255367),
    i = n(73800),
    a = n(392711),
    o = n.n(a),
    s = n(866442),
    l = n(442837),
    c = n(573385),
    u = n(481060),
    d = n(239091),
    f = n(276264),
    _ = n(493773),
    p = n(607070),
    h = n(100527),
    m = n(906732),
    g = n(82295),
    E = n(818083),
    b = n(14263),
    y = n(480608),
    O = n(124072),
    v = n(402235),
    I = n(670188),
    T = n(601964),
    S = n(592125),
    A = n(271383),
    N = n(485386),
    C = n(430824),
    R = n(594174),
    P = n(51144),
    w = n(388032),
    D = n(73433),
    L = n(83902);
function x(e, t, n) {
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
function M(e) {
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
                x(e, t, n[t]);
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
function j(e, t) {
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
let U = (0, E.B)({
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
function G(e) {
    let { member: t, guildId: a, channelId: o, role: s } = e,
        c = i.useRef(null),
        u = (0, l.e7)(
            [C.Z],
            () => {
                var e;
                return null == (e = C.Z.getGuild(a)) ? void 0 : e.ownerId;
            },
            [a]
        ),
        _ = (0, l.e7)([R.default], () => R.default.getUser(t.userId), [t.userId]),
        p = (0, l.e7)([S.Z], () => S.Z.getChannel(o), [o]);
    return null == _ || null == p
        ? null
        : (0, r.jsx)(
              I.Z,
              {
                  targetElementRef: c,
                  userId: t.userId,
                  guildId: a,
                  channelId: o,
                  roleId: s.id,
                  spacing: 14,
                  clickTrap: !0,
                  children: (e, i) => {
                      let { isShown: o } = i;
                      return (0, r.jsx)(
                          f.Z,
                          M(
                              {
                                  ref: c,
                                  selected: o,
                                  colorString: t.colorString,
                                  colorStrings: t.colorStrings,
                                  colorRoleName: s.name,
                                  user: _,
                                  isOwner: t.userId === u,
                                  nick: t.nick,
                                  premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                                  channel: p,
                                  guildId: a,
                                  onContextMenu: (e) => {
                                      (0, d.jW)(e, async () => {
                                          let { default: e } = await Promise.all([n.e('14006'), n.e('79695'), n.e('80417'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('72374')]).then(n.bind(n, 757387));
                                          return (t) =>
                                              (0, r.jsx)(
                                                  e,
                                                  j(M({}, t), {
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
function B(e) {
    let { popoutProps: t, roleId: n, guildId: a, channelId: s } = e,
        d = i.useRef(null);
    ((0, _.ZP)(() => {
        var e;
        null == (e = t.setPopoutRef) || e.call(t, d.current);
    }),
        (0, _.zq)(() => {
            var e;
            null == (e = t.setPopoutRef) || e.call(t, null);
        }));
    let f = (0, b.Z)(a),
        p = (0, l.e7)(
            [C.Z],
            () => {
                let e = C.Z.getGuild(a);
                return null == e ? null : (0, T.lV)(e);
            },
            [a]
        ),
        h = (0, l.Wu)(
            [A.ZP, R.default],
            () => {
                let e = A.ZP.getMembers(a),
                    t = null == n || n === p ? e : e.filter((e) => e.roles.includes(n));
                return o()(t)
                    .filter((e) => null != R.default.getUser(e.userId))
                    .sortBy((e) => {
                        var t;
                        return null != (t = e.nick) ? t : P.ZP.getName(R.default.getUser(e.userId));
                    })
                    .value();
            },
            [a, n, p]
        ),
        m = (0, l.e7)(
            [N.Z],
            () => {
                let e = null != n ? n : p;
                return null == e ? null : N.Z.getRole(a, e);
            },
            [a, n, p]
        ),
        E = null == n ? null : null == f ? void 0 : f[n],
        y = i.useMemo(
            () =>
                null != m
                    ? h.map((e) =>
                          (0, r.jsx)(
                              G,
                              {
                                  member: e,
                                  guildId: a,
                                  channelId: s,
                                  role: m
                              },
                              e.userId
                          )
                      )
                    : [],
            [s, a, m, h]
        );
    if (null == m) return null;
    let O =
        null == E
            ? m.name
            : w.intl.formatToPlainString(w.t.CuAQkJ, {
                  title: m.name,
                  count: E
              });
    return (0, r.jsx)(c.d.Provider, {
        value: void 0,
        children: (0, r.jsx)(
            'div',
            j(
                M(
                    {
                        className: D.rolePopout,
                        ref: d
                    },
                    t
                ),
                {
                    children: (0, r.jsxs)(u.Ttm, {
                        className: D.roleScroller,
                        children: [
                            (0, r.jsx)(g.Z, {
                                className: D.roleHeader,
                                'aria-label': w.intl.formatToPlainString(w.t.UaqbkZ, {
                                    title: m.name,
                                    count: y.length
                                }),
                                children: (0, r.jsx)('span', {
                                    'aria-hidden': !0,
                                    children: O
                                })
                            }),
                            y,
                            null == E || E <= y.length
                                ? null
                                : (0, r.jsx)(g.Z, {
                                      className: D.roleHeader,
                                      children: w.intl.formatToPlainString(w.t['9oMmZG'], { count: E - y.length })
                                  })
                        ]
                    })
                }
            )
        )
    });
}
function V(e) {
    let { roleColor: t, roleColors: n, roleId: a, channelId: o, roleName: c, guildId: d, children: f, inlinePreview: _ = !1 } = e,
        { analyticsLocations: g } = (0, m.ZP)(h.Z.ROLE_MENTION),
        E = (0, l.e7)([p.Z], () => p.Z.roleStyle),
        b = (0, l.e7)([N.Z], () => (null == d || null == a ? null : N.Z.getRole(d, a))),
        I = (0, v.yH)(d, b),
        T = !_ && ((null != t && 0 !== t) || (null != n && null != n.primaryColor)),
        S = T && 'dot' === E,
        A = T && 'username' === E,
        C = I && null != b ? b.colorStrings : null,
        R = i.useRef(null),
        P = (e) =>
            (0, r.jsxs)(
                O.Z,
                j(
                    M(
                        {
                            ref: R,
                            className: D.roleMention,
                            color: A ? t : null,
                            roleColors: A ? C : null
                        },
                        e
                    ),
                    {
                        children: [
                            S &&
                                null != t &&
                                (0, r.jsx)(u.FhE, {
                                    color: (0, s.Rf)(t),
                                    colors: C,
                                    className: L.roleDot,
                                    background: !1,
                                    tooltip: !1
                                }),
                            f
                        ]
                    }
                )
            ),
        { enabled: w } = U.getCurrentConfig({ location: '2ec235_1' }, { autoTrackExposure: !1 });
    return !w || _ || null == o || null == d || (null == a && '@everyone' !== c)
        ? (0, r.jsx)(m.Gt, {
              value: g,
              children: P()
          })
        : (0, r.jsx)(m.Gt, {
              value: g,
              children: (0, r.jsx)(u.yRy, {
                  targetElementRef: R,
                  preload: async () => {
                      null != a && (await (0, y.H)(d, a));
                  },
                  renderPopout: (e) =>
                      (0, r.jsx)(B, {
                          guildId: d,
                          channelId: o,
                          roleId: a,
                          popoutProps: e
                      }),
                  position: 'right',
                  children: P
              })
          });
}
