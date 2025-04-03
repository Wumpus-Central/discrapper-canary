n.d(t, { Z: () => U });
var r = n(200651),
    i = n(192379),
    o = n(392711),
    a = n.n(o),
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
    v = n(184301),
    O = n(347475),
    I = n(592125),
    S = n(271383),
    T = n(430824),
    N = n(594174),
    A = n(51144),
    C = n(388032),
    R = n(73433),
    P = n(83902);
function w(e, t, n) {
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
function D(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = (0, g.B)({
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
function k(e) {
    let { member: t, guildId: i, channelId: o, role: a } = e,
        s = (0, l.e7)(
            [T.Z],
            () => {
                var e;
                return null == (e = T.Z.getGuild(i)) ? void 0 : e.ownerId;
            },
            [i]
        ),
        f = (0, l.e7)([N.default], () => N.default.getUser(t.userId), [t.userId]),
        _ = (0, l.e7)([I.Z], () => I.Z.getChannel(o), [o]);
    return null == f || null == _
        ? null
        : (0, r.jsx)(
              c.yRy,
              {
                  preload: () =>
                      (0, v.Z)(t.userId, f.getAvatarURL(i, 80), {
                          guildId: i,
                          channelId: o
                      }),
                  renderPopout: (e) =>
                      (0, r.jsx)(
                          O.Z,
                          x(D({}, e), {
                              userId: t.userId,
                              guildId: i,
                              channelId: o,
                              roleId: a.id
                          })
                      ),
                  spacing: 14,
                  clickTrap: !0,
                  children: (e, o) => {
                      let { isShown: l } = o;
                      return (0, r.jsx)(
                          d.Z,
                          D(
                              {
                                  selected: l,
                                  colorString: t.colorString,
                                  colorStrings: t.colorStrings,
                                  colorRoleName: a.name,
                                  user: f,
                                  isOwner: t.userId === s,
                                  nick: t.nick,
                                  premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                                  channel: _,
                                  guildId: i,
                                  onContextMenu: (e) => {
                                      (0, u.jW)(e, async () => {
                                          let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('13351'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('20204')]).then(n.bind(n, 757387));
                                          return (t) =>
                                              (0, r.jsx)(
                                                  e,
                                                  x(D({}, t), {
                                                      user: f,
                                                      guildId: i,
                                                      channel: _,
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
function j(e) {
    let { popoutProps: t, roleId: n, guildId: o, channelId: s } = e,
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
    let d = (0, E.Z)(o),
        _ = (0, l.e7)(
            [T.Z],
            () => {
                var e;
                return null == (e = T.Z.getGuild(o)) ? void 0 : e.getEveryoneRoleId();
            },
            [o]
        ),
        p = (0, l.Wu)(
            [S.ZP, N.default],
            () => {
                let e = S.ZP.getMembers(o),
                    t = null == n || n === _ ? e : e.filter((e) => e.roles.includes(n));
                return a()(t)
                    .filter((e) => null != N.default.getUser(e.userId))
                    .sortBy((e) => {
                        var t;
                        return null != (t = e.nick) ? t : A.ZP.getName(N.default.getUser(e.userId));
                    })
                    .value();
            },
            [o, n, _]
        ),
        h = (0, l.e7)(
            [T.Z],
            () => {
                let e = null != n ? n : _;
                return null == e ? null : T.Z.getRole(o, e);
            },
            [o, n, _]
        ),
        g = null == n ? null : null == d ? void 0 : d[n],
        b = i.useMemo(
            () =>
                null != h
                    ? p.map((e) =>
                          (0, r.jsx)(
                              k,
                              {
                                  member: e,
                                  guildId: o,
                                  channelId: s,
                                  role: h
                              },
                              e.userId
                          )
                      )
                    : [],
            [s, o, h, p]
        );
    if (null == h) return null;
    let y =
        null == g
            ? h.name
            : C.NW.formatToPlainString(C.t.CuAQkJ, {
                  title: h.name,
                  count: g
              });
    return (0, r.jsx)(
        'div',
        x(
            D(
                {
                    className: R.rolePopout,
                    ref: u
                },
                t
            ),
            {
                children: (0, r.jsxs)(c.Ttm, {
                    className: R.roleScroller,
                    children: [
                        (0, r.jsx)(m.Z, {
                            className: R.roleHeader,
                            'aria-label': C.NW.formatToPlainString(C.t.UaqbkZ, {
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
                                  className: R.roleHeader,
                                  children: C.NW.formatToPlainString(C.t['9oMmZG'], { count: g - b.length })
                              })
                    ]
                })
            }
        )
    );
}
function U(e) {
    let { roleColor: t, roleId: n, channelId: i, roleName: o, guildId: a, children: u, inlinePreview: d = !1 } = e,
        { analyticsLocations: f } = (0, h.ZP)(p.Z.ROLE_MENTION),
        m = (0, l.e7)([_.Z], () => _.Z.roleStyle),
        g = null != t && 0 !== t && !d,
        E = g && 'dot' === m,
        v = (e) =>
            (0, r.jsxs)(
                y.Z,
                x(
                    D(
                        {
                            className: R.roleMention,
                            color: 'username' === m && g ? t : null
                        },
                        e
                    ),
                    {
                        children: [
                            E &&
                                (0, r.jsx)(c.FhE, {
                                    color: (0, s.Rf)(t),
                                    className: P.roleDot,
                                    background: !1,
                                    tooltip: !1
                                }),
                            u
                        ]
                    }
                )
            ),
        { enabled: O } = M.getCurrentConfig({ location: '2ec235_1' }, { autoTrackExposure: !1 });
    return !O || d || null == i || null == a || (null == n && '@everyone' !== o)
        ? (0, r.jsx)(h.Gt, {
              value: f,
              children: v()
          })
        : (0, r.jsx)(h.Gt, {
              value: f,
              children: (0, r.jsx)(c.yRy, {
                  preload: async () => {
                      null != n && (await (0, b.H)(a, n));
                  },
                  renderPopout: (e) =>
                      (0, r.jsx)(j, {
                          guildId: a,
                          channelId: i,
                          roleId: n,
                          popoutProps: e
                      }),
                  position: 'right',
                  children: v
              })
          });
}
