n.d(t, { Z: () => V });
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(866442),
    l = n(442837),
    c = n(573385),
    u = n(481060),
    d = n(239091),
    f = n(276264),
    p = n(493773),
    _ = n(607070),
    m = n(100527),
    h = n(906732),
    g = n(335615),
    E = n(82295),
    b = n(818083),
    y = n(14263),
    O = n(480608),
    v = n(124072),
    S = n(606318),
    I = n(402235),
    T = n(670188),
    C = n(601964),
    A = n(592125),
    N = n(271383),
    P = n(485386),
    R = n(430824),
    w = n(594174),
    D = n(51144),
    x = n(388032),
    L = n(960324),
    j = n(325842);
function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                M(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Z = (0, b.B)({
    kind: "user",
    id: "2021-07_role_popout",
    label: "Role Popout",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable Popout",
            config: { enabled: !0 },
        },
    ],
});
function F(e) {
    let { member: t, guildId: a, channelId: o, role: s } = e,
        c = i.useRef(null),
        u = (0, l.e7)([R.Z], () => {
            var e;
            return null == (e = R.Z.getGuild(a)) ? void 0 : e.ownerId;
        }, [a]),
        p = (0, l.e7)([w.default], () => w.default.getUser(t.userId), [t.userId]),
        _ = (0, l.e7)([A.Z], () => A.Z.getChannel(o), [o]);
    return null == p || null == _
        ? null
        : (0, r.jsx)(
              T.Z,
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
                          k(
                              {
                                  ref: c,
                                  selected: o,
                                  colorString: t.colorString,
                                  colorStrings: t.colorStrings,
                                  colorRoleName: s.name,
                                  user: p,
                                  isOwner: t.userId === u,
                                  nick: t.nick,
                                  premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                                  channel: _,
                                  guildId: a,
                                  onContextMenu: (e) => {
                                      (0, d.jW)(e, async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("79695"),
                                              n.e("66165"),
                                              n.e("6915"),
                                              n.e("8982"),
                                              n.e("7717"),
                                              n.e("75548"),
                                          ]).then(n.bind(n, 757387));
                                          return (t) =>
                                              (0, r.jsx)(
                                                  e,
                                                  G(k({}, t), {
                                                      user: p,
                                                      guildId: a,
                                                      channel: _,
                                                      showMediaItems: !0,
                                                  }),
                                              );
                                      });
                                  },
                              },
                              e,
                          ),
                          t.userId,
                      );
                  },
              },
              t.userId,
          );
}
function B(e) {
    let { popoutProps: t, roleId: n, guildId: a, channelId: s } = e,
        d = i.useRef(null);
    (0, p.ZP)(() => {
        var e;
        null == (e = t.setPopoutRef) || e.call(t, d.current);
    }),
        (0, p.zq)(() => {
            var e;
            null == (e = t.setPopoutRef) || e.call(t, null);
        });
    let f = (0, y.Z)(a),
        _ = (0, l.e7)([R.Z], () => {
            let e = R.Z.getGuild(a);
            return null == e ? null : (0, C.lV)(e);
        }, [a]),
        m = (0, l.Wu)([N.ZP, w.default], () => {
            let e = N.ZP.getMembers(a),
                t = null == n || n === _ ? e : e.filter((e) => e.roles.includes(n));
            return o()(t)
                .filter((e) => null != w.default.getUser(e.userId))
                .sortBy((e) => {
                    var t;
                    return null != (t = e.nick) ? t : D.ZP.getName(w.default.getUser(e.userId));
                })
                .value();
        }, [a, n, _]),
        h = (0, l.e7)([P.Z], () => {
            let e = null != n ? n : _;
            return null == e ? null : P.Z.getRole(a, e);
        }, [a, n, _]),
        b = null == n ? null : null == f ? void 0 : f[n],
        O = i.useMemo(
            () =>
                null != h
                    ? m.map((e) =>
                          (0, r.jsx)(
                              F,
                              {
                                  member: e,
                                  guildId: a,
                                  channelId: s,
                                  role: h,
                              },
                              e.userId,
                          ),
                      )
                    : [],
            [s, a, h, m],
        );
    return null == h
        ? null
        : (0, r.jsx)(c.d.Provider, {
              value: void 0,
              children: (0, r.jsx)(
                  "div",
                  G(
                      k(
                          {
                              className: L.rolePopout,
                              ref: d,
                          },
                          t,
                      ),
                      {
                          children: (0, r.jsxs)(u.Ttm, {
                              className: L.roleScroller,
                              children: [
                                  (0, r.jsx)(g.Z, {
                                      id: n,
                                      guildId: a,
                                      title: h.name,
                                      count: b,
                                      className: L.roleHeader,
                                  }),
                                  O,
                                  null == b || b <= O.length
                                      ? null
                                      : (0, r.jsx)(E.Z, {
                                            className: L.roleHeader,
                                            children: x.intl.formatToPlainString(x.t["9oMmZC"], {
                                                count: b - O.length,
                                            }),
                                        }),
                              ],
                          }),
                      },
                  ),
              ),
          });
}
function V(e) {
    let { roleId: t, channelId: n, roleName: a, guildId: o, children: c, inlinePreview: d = !1 } = e,
        { analyticsLocations: f } = (0, h.ZP)(m.Z.ROLE_MENTION),
        p = (0, l.e7)([_.Z], () => _.Z.roleStyle),
        g = (0, l.e7)([P.Z], () => (null == o || null == t ? null : P.Z.getRole(o, t))),
        E = (0, I.yH)(o, g),
        b = !d && null != g && !(0, S.Gr)(g),
        y = b && "dot" === p,
        T = b && "username" === p,
        C = E && null != g ? g.colorStrings : null,
        A = i.useRef(null),
        N = (e) =>
            (0, r.jsxs)(
                v.Z,
                G(
                    k(
                        {
                            ref: A,
                            className: L.roleMention,
                            color: T ? g.color : null,
                            roleColors: T ? C : null,
                        },
                        e,
                    ),
                    {
                        children: [
                            y &&
                                null != g.color &&
                                (0, r.jsx)(u.FhE, {
                                    color: (0, s.Rf)(g.color),
                                    colors: C,
                                    className: j.roleDot,
                                    background: !1,
                                    tooltip: !1,
                                }),
                            c,
                        ],
                    },
                ),
            ),
        { enabled: R } = Z.getCurrentConfig({ location: "2ec235_1" }, { autoTrackExposure: !1 });
    return !R || d || null == n || null == o || (null == t && "@everyone" !== a)
        ? (0, r.jsx)(h.Gt, {
              value: f,
              children: N(),
          })
        : (0, r.jsx)(h.Gt, {
              value: f,
              children: (0, r.jsx)(u.yRy, {
                  targetElementRef: A,
                  preload: async () => {
                      null != t && (await (0, O.H)(o, t));
                  },
                  renderPopout: (e) =>
                      (0, r.jsx)(B, {
                          guildId: o,
                          channelId: n,
                          roleId: t,
                          popoutProps: e,
                      }),
                  position: "right",
                  children: N,
              }),
          });
}
