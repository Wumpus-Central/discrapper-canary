n.d(t, { Z: () => B });
var r = n(255367),
    i = n(73800),
    o = n(392711),
    a = n.n(o),
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
    v = n(181918),
    I = n(956226),
    S = n(670188),
    T = n(592125),
    A = n(271383),
    N = n(430824),
    C = n(594174),
    P = n(51144),
    R = n(388032),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = (0, E.B)({
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
    let { member: t, guildId: i, channelId: o, role: a } = e,
        s = (0, l.e7)(
            [N.Z],
            () => {
                var e;
                return null == (e = N.Z.getGuild(i)) ? void 0 : e.ownerId;
            },
            [i]
        ),
        c = (0, l.e7)([C.default], () => C.default.getUser(t.userId), [t.userId]),
        u = (0, l.e7)([T.Z], () => T.Z.getChannel(o), [o]);
    return null == c || null == u
        ? null
        : (0, r.jsx)(
              S.Z,
              {
                  userId: t.userId,
                  guildId: i,
                  channelId: o,
                  roleId: a.id,
                  spacing: 14,
                  clickTrap: !0,
                  children: (e, o) => {
                      let { isShown: l } = o;
                      return (0, r.jsx)(
                          f.Z,
                          x(
                              {
                                  selected: l,
                                  colorString: t.colorString,
                                  colorStrings: t.colorStrings,
                                  colorRoleName: a.name,
                                  user: c,
                                  isOwner: t.userId === s,
                                  nick: t.nick,
                                  premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                                  channel: u,
                                  guildId: i,
                                  onContextMenu: (e) => {
                                      (0, d.jW)(e, async () => {
                                          let { default: e } = await Promise.all([n.e('94342'), n.e('79695'), n.e('13351'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('20204')]).then(n.bind(n, 757387));
                                          return (t) =>
                                              (0, r.jsx)(
                                                  e,
                                                  M(x({}, t), {
                                                      user: c,
                                                      guildId: i,
                                                      channel: u,
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
    let { popoutProps: t, roleId: n, guildId: o, channelId: s } = e,
        d = i.useRef(null);
    (0, _.ZP)(() => {
        var e;
        return (
            null == (e = t.setPopoutRef) || e.call(t, d.current),
            () => {
                var e;
                return null == (e = t.setPopoutRef) ? void 0 : e.call(t, null);
            }
        );
    });
    let f = (0, b.Z)(o),
        p = (0, l.e7)(
            [N.Z],
            () => {
                var e;
                return null == (e = N.Z.getGuild(o)) ? void 0 : e.getEveryoneRoleId();
            },
            [o]
        ),
        h = (0, l.Wu)(
            [A.ZP, C.default],
            () => {
                let e = A.ZP.getMembers(o),
                    t = null == n || n === p ? e : e.filter((e) => e.roles.includes(n));
                return a()(t)
                    .filter((e) => null != C.default.getUser(e.userId))
                    .sortBy((e) => {
                        var t;
                        return null != (t = e.nick) ? t : P.ZP.getName(C.default.getUser(e.userId));
                    })
                    .value();
            },
            [o, n, p]
        ),
        m = (0, l.e7)(
            [N.Z],
            () => {
                let e = null != n ? n : p;
                return null == e ? null : N.Z.getRole(o, e);
            },
            [o, n, p]
        ),
        E = null == n ? null : null == f ? void 0 : f[n],
        y = i.useMemo(
            () =>
                null != m
                    ? h.map((e) =>
                          (0, r.jsx)(
                              U,
                              {
                                  member: e,
                                  guildId: o,
                                  channelId: s,
                                  role: m
                              },
                              e.userId
                          )
                      )
                    : [],
            [s, o, m, h]
        );
    if (null == m) return null;
    let O =
        null == E
            ? m.name
            : R.intl.formatToPlainString(R.t.CuAQkJ, {
                  title: m.name,
                  count: E
              });
    return (0, r.jsx)(c.d.Provider, {
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
                    children: (0, r.jsxs)(u.Ttm, {
                        className: w.roleScroller,
                        children: [
                            (0, r.jsx)(g.Z, {
                                className: w.roleHeader,
                                'aria-label': R.intl.formatToPlainString(R.t.UaqbkZ, {
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
                                      className: w.roleHeader,
                                      children: R.intl.formatToPlainString(R.t['9oMmZG'], { count: E - y.length })
                                  })
                        ]
                    })
                }
            )
        )
    });
}
function B(e) {
    let { roleColor: t, roleColors: n, roleId: i, channelId: o, roleName: a, guildId: c, children: d, inlinePreview: f = !1 } = e,
        { analyticsLocations: _ } = (0, m.ZP)(h.Z.ROLE_MENTION),
        g = (0, l.e7)([p.Z], () => p.Z.roleStyle),
        E = (0, v.$V)(c, 'RoleMention'),
        b = ((null != t && 0 !== t) || (null != n && null != n.primaryColor)) && !f,
        S = b && 'dot' === g,
        T = b && 'username' === g,
        A = E && null != n && null != n.secondaryColor ? (0, I.f)(n) : null,
        N = (e) =>
            (0, r.jsxs)(
                O.Z,
                M(
                    x(
                        {
                            className: w.roleMention,
                            color: T ? t : null,
                            roleColors: T ? A : null
                        },
                        e
                    ),
                    {
                        children: [
                            S &&
                                null != t &&
                                (0, r.jsx)(u.FhE, {
                                    color: (0, s.Rf)(t),
                                    colors: A,
                                    className: D.roleDot,
                                    background: !1,
                                    tooltip: !1
                                }),
                            d
                        ]
                    }
                )
            ),
        { enabled: C } = j.getCurrentConfig({ location: '2ec235_1' }, { autoTrackExposure: !1 });
    return !C || f || null == o || null == c || (null == i && '@everyone' !== a)
        ? (0, r.jsx)(m.Gt, {
              value: _,
              children: N()
          })
        : (0, r.jsx)(m.Gt, {
              value: _,
              children: (0, r.jsx)(u.yRy, {
                  preload: async () => {
                      null != i && (await (0, y.H)(c, i));
                  },
                  renderPopout: (e) =>
                      (0, r.jsx)(G, {
                          guildId: c,
                          channelId: o,
                          roleId: i,
                          popoutProps: e
                      }),
                  position: 'right',
                  children: N
              })
          });
}
