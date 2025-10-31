n.d(t, { Z: () => F });
var r = n(951288),
    i = n(647438),
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
    v = n(606318),
    I = n(402235),
    T = n(670188),
    S = n(601964),
    A = n(592125),
    C = n(271383),
    N = n(485386),
    R = n(430824),
    P = n(594174),
    w = n(51144),
    D = n(388032),
    x = n(430864),
    L = n(329072);
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
function j(e) {
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
function U(e, t) {
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
let G = (0, E.B)({
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
function B(e) {
    let { member: t, guildId: a, channelId: o, role: s } = e,
        c = i.useRef(null),
        u = (0, l.e7)([R.Z], () => {
            var e;
            return null == (e = R.Z.getGuild(a)) ? void 0 : e.ownerId;
        }, [a]),
        _ = (0, l.e7)([P.default], () => P.default.getUser(t.userId), [t.userId]),
        p = (0, l.e7)([A.Z], () => A.Z.getChannel(o), [o]);
    return null == _ || null == p
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
                          j(
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
                                          let { default: e } = await Promise.all([
                                              n.e("79695"),
                                              n.e("98783"),
                                              n.e("6915"),
                                              n.e("8982"),
                                              n.e("7717"),
                                              n.e("20037"),
                                          ]).then(n.bind(n, 757387));
                                          return (t) =>
                                              (0, r.jsx)(
                                                  e,
                                                  U(j({}, t), {
                                                      user: _,
                                                      guildId: a,
                                                      channel: p,
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
function Z(e) {
    let { popoutProps: t, roleId: n, guildId: a, channelId: s } = e,
        d = i.useRef(null);
    (0, _.ZP)(() => {
        var e;
        null == (e = t.setPopoutRef) || e.call(t, d.current);
    }),
        (0, _.zq)(() => {
            var e;
            null == (e = t.setPopoutRef) || e.call(t, null);
        });
    let f = (0, b.Z)(a),
        p = (0, l.e7)([R.Z], () => {
            let e = R.Z.getGuild(a);
            return null == e ? null : (0, S.lV)(e);
        }, [a]),
        h = (0, l.Wu)([C.ZP, P.default], () => {
            let e = C.ZP.getMembers(a),
                t = null == n || n === p ? e : e.filter((e) => e.roles.includes(n));
            return o()(t)
                .filter((e) => null != P.default.getUser(e.userId))
                .sortBy((e) => {
                    var t;
                    return null != (t = e.nick) ? t : w.ZP.getName(P.default.getUser(e.userId));
                })
                .value();
        }, [a, n, p]),
        m = (0, l.e7)([N.Z], () => {
            let e = null != n ? n : p;
            return null == e ? null : N.Z.getRole(a, e);
        }, [a, n, p]),
        E = null == n ? null : null == f ? void 0 : f[n],
        y = i.useMemo(
            () =>
                null != m
                    ? h.map((e) =>
                          (0, r.jsx)(
                              B,
                              {
                                  member: e,
                                  guildId: a,
                                  channelId: s,
                                  role: m,
                              },
                              e.userId,
                          ),
                      )
                    : [],
            [s, a, m, h],
        );
    if (null == m) return null;
    let O =
        null == E
            ? m.name
            : D.intl.formatToPlainString(D.t.CuAQkJ, {
                  title: m.name,
                  count: E,
              });
    return (0, r.jsx)(c.d.Provider, {
        value: void 0,
        children: (0, r.jsx)(
            "div",
            U(
                j(
                    {
                        className: x.rolePopout,
                        ref: d,
                    },
                    t,
                ),
                {
                    children: (0, r.jsxs)(u.Ttm, {
                        className: x.roleScroller,
                        children: [
                            (0, r.jsx)(g.Z, {
                                className: x.roleHeader,
                                "aria-label": D.intl.formatToPlainString(D.t.Uaqbke, {
                                    title: m.name,
                                    count: y.length,
                                }),
                                children: (0, r.jsx)("span", {
                                    "aria-hidden": !0,
                                    children: O,
                                }),
                            }),
                            y,
                            null == E || E <= y.length
                                ? null
                                : (0, r.jsx)(g.Z, {
                                      className: x.roleHeader,
                                      children: D.intl.formatToPlainString(D.t["9oMmZC"], { count: E - y.length }),
                                  }),
                        ],
                    }),
                },
            ),
        ),
    });
}
function F(e) {
    let { roleId: t, channelId: n, roleName: a, guildId: o, children: c, inlinePreview: d = !1 } = e,
        { analyticsLocations: f } = (0, m.ZP)(h.Z.ROLE_MENTION),
        _ = (0, l.e7)([p.Z], () => p.Z.roleStyle),
        g = (0, l.e7)([N.Z], () => (null == o || null == t ? null : N.Z.getRole(o, t))),
        E = (0, I.yH)(o, g),
        b = !d && null != g && !(0, v.Gr)(g),
        T = b && "dot" === _,
        S = b && "username" === _,
        A = E && null != g ? g.colorStrings : null,
        C = i.useRef(null),
        R = (e) =>
            (0, r.jsxs)(
                O.Z,
                U(
                    j(
                        {
                            ref: C,
                            className: x.roleMention,
                            color: S ? g.color : null,
                            roleColors: S ? A : null,
                        },
                        e,
                    ),
                    {
                        children: [
                            T &&
                                null != g.color &&
                                (0, r.jsx)(u.FhE, {
                                    color: (0, s.Rf)(g.color),
                                    colors: A,
                                    className: L.roleDot,
                                    background: !1,
                                    tooltip: !1,
                                }),
                            c,
                        ],
                    },
                ),
            ),
        { enabled: P } = G.getCurrentConfig({ location: "2ec235_1" }, { autoTrackExposure: !1 });
    return !P || d || null == n || null == o || (null == t && "@everyone" !== a)
        ? (0, r.jsx)(m.Gt, {
              value: f,
              children: R(),
          })
        : (0, r.jsx)(m.Gt, {
              value: f,
              children: (0, r.jsx)(u.yRy, {
                  targetElementRef: C,
                  preload: async () => {
                      null != t && (await (0, y.H)(o, t));
                  },
                  renderPopout: (e) =>
                      (0, r.jsx)(Z, {
                          guildId: o,
                          channelId: n,
                          roleId: t,
                          popoutProps: e,
                      }),
                  position: "right",
                  children: R,
              }),
          });
}
