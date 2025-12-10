n.d(t, { Z: () => F });
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
    g = n(82295),
    E = n(818083),
    b = n(14263),
    y = n(480608),
    O = n(124072),
    v = n(606318),
    S = n(402235),
    I = n(670188),
    T = n(601964),
    C = n(592125),
    A = n(271383),
    N = n(485386),
    P = n(430824),
    R = n(594174),
    D = n(51144),
    w = n(388032),
    x = n(430864),
    L = n(329072);
function j(e, t, n) {
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
function M(e) {
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
                j(e, t, n[t]);
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
function Z(e) {
    let { member: t, guildId: a, channelId: o, role: s } = e,
        c = i.useRef(null),
        u = (0, l.e7)([P.Z], () => {
            var e;
            return null == (e = P.Z.getGuild(a)) ? void 0 : e.ownerId;
        }, [a]),
        p = (0, l.e7)([R.default], () => R.default.getUser(t.userId), [t.userId]),
        _ = (0, l.e7)([C.Z], () => C.Z.getChannel(o), [o]);
    return null == p || null == _
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
                                              n.e("20037"),
                                          ]).then(n.bind(n, 757387));
                                          return (t) =>
                                              (0, r.jsx)(
                                                  e,
                                                  U(M({}, t), {
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
    let f = (0, b.Z)(a),
        _ = (0, l.e7)([P.Z], () => {
            let e = P.Z.getGuild(a);
            return null == e ? null : (0, T.lV)(e);
        }, [a]),
        m = (0, l.Wu)([A.ZP, R.default], () => {
            let e = A.ZP.getMembers(a),
                t = null == n || n === _ ? e : e.filter((e) => e.roles.includes(n));
            return o()(t)
                .filter((e) => null != R.default.getUser(e.userId))
                .sortBy((e) => {
                    var t;
                    return null != (t = e.nick) ? t : D.ZP.getName(R.default.getUser(e.userId));
                })
                .value();
        }, [a, n, _]),
        h = (0, l.e7)([N.Z], () => {
            let e = null != n ? n : _;
            return null == e ? null : N.Z.getRole(a, e);
        }, [a, n, _]),
        E = null == n ? null : null == f ? void 0 : f[n],
        y = i.useMemo(
            () =>
                null != h
                    ? m.map((e) =>
                          (0, r.jsx)(
                              Z,
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
    if (null == h) return null;
    let O =
        null == E
            ? h.name
            : w.intl.formatToPlainString(w.t.CuAQkJ, {
                  title: h.name,
                  count: E,
              });
    return (0, r.jsx)(c.d.Provider, {
        value: void 0,
        children: (0, r.jsx)(
            "div",
            U(
                M(
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
                                "aria-label": w.intl.formatToPlainString(w.t.Uaqbke, {
                                    title: h.name,
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
                                      children: w.intl.formatToPlainString(w.t["9oMmZC"], { count: E - y.length }),
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
        { analyticsLocations: f } = (0, h.ZP)(m.Z.ROLE_MENTION),
        p = (0, l.e7)([_.Z], () => _.Z.roleStyle),
        g = (0, l.e7)([N.Z], () => (null == o || null == t ? null : N.Z.getRole(o, t))),
        E = (0, S.yH)(o, g),
        b = !d && null != g && !(0, v.Gr)(g),
        I = b && "dot" === p,
        T = b && "username" === p,
        C = E && null != g ? g.colorStrings : null,
        A = i.useRef(null),
        P = (e) =>
            (0, r.jsxs)(
                O.Z,
                U(
                    M(
                        {
                            ref: A,
                            className: x.roleMention,
                            color: T ? g.color : null,
                            roleColors: T ? C : null,
                        },
                        e,
                    ),
                    {
                        children: [
                            I &&
                                null != g.color &&
                                (0, r.jsx)(u.FhE, {
                                    color: (0, s.Rf)(g.color),
                                    colors: C,
                                    className: L.roleDot,
                                    background: !1,
                                    tooltip: !1,
                                }),
                            c,
                        ],
                    },
                ),
            ),
        { enabled: R } = G.getCurrentConfig({ location: "2ec235_1" }, { autoTrackExposure: !1 });
    return !R || d || null == n || null == o || (null == t && "@everyone" !== a)
        ? (0, r.jsx)(h.Gt, {
              value: f,
              children: P(),
          })
        : (0, r.jsx)(h.Gt, {
              value: f,
              children: (0, r.jsx)(u.yRy, {
                  targetElementRef: A,
                  preload: async () => {
                      null != t && (await (0, y.H)(o, t));
                  },
                  renderPopout: (e) =>
                      (0, r.jsx)(B, {
                          guildId: o,
                          channelId: n,
                          roleId: t,
                          popoutProps: e,
                      }),
                  position: "right",
                  children: P,
              }),
          });
}
