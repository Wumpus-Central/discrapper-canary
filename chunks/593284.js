n.d(t, { A: () => H });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(317097),
    l = n(311907),
    c = n(473193),
    u = n(397927),
    d = n(442433),
    f = n(110574),
    p = n(964486),
    _ = n(775602),
    h = n(793574),
    m = n(688810),
    g = n(991275),
    E = n(485947),
    b = n(600975),
    y = n(386784),
    O = n(545868),
    A = n(332173),
    v = n(176201),
    S = n(676608),
    I = n(342296),
    T = n(260509),
    C = n(734057),
    N = n(696451),
    R = n(317525),
    w = n(71393),
    P = n(287809),
    D = n(427262),
    x = n(985018),
    L = n(206314),
    j = n(377086);
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
let V = (0, b.C)({
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
    let { member: t, guildId: a, channelId: s, role: o } = e,
        c = i.useRef(null),
        u = (0, l.bG)([w.A], () => {
            var e;
            return null == (e = w.A.getGuild(a)) ? void 0 : e.ownerId;
        }, [a]),
        p = (0, l.bG)([P.default], () => P.default.getUser(t.userId), [t.userId]),
        _ = (0, l.bG)([C.A], () => C.A.getChannel(s), [s]);
    return null == p || null == _
        ? null
        : (0, r.jsx)(
              I.A,
              {
                  targetElementRef: c,
                  userId: t.userId,
                  guildId: a,
                  channelId: s,
                  roleId: o.id,
                  spacing: 14,
                  children: (e, i) => {
                      let { isShown: s } = i;
                      return (0, r.jsx)(
                          f.A,
                          k(
                              {
                                  ref: c,
                                  selected: s,
                                  colorString: t.colorString,
                                  colorStrings: t.colorStrings,
                                  colorRoleName: o.name,
                                  user: p,
                                  isOwner: t.userId === u,
                                  nick: t.nick,
                                  premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                                  channel: _,
                                  guildId: a,
                                  onContextMenu: (e) => {
                                      (0, d.L3)(e, async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("97262"),
                                              n.e("29534"),
                                              n.e("33818"),
                                              n.e("55296"),
                                              n.e("84841"),
                                              n.e("86246"),
                                          ]).then(n.bind(n, 107632));
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
    let { popoutProps: t, roleId: n, guildId: a, channelId: o } = e,
        d = i.useRef(null);
    (0, p.Ay)(() => {
        var e;
        null == (e = t.setPopoutRef) || e.call(t, d.current);
    }),
        (0, p.l0)(() => {
            var e;
            null == (e = t.setPopoutRef) || e.call(t, null);
        });
    let f = (0, y.A)(a),
        _ = (0, l.bG)([w.A], () => {
            let e = w.A.getGuild(a);
            return null == e ? null : (0, T.af)(e);
        }, [a]),
        h = (0, l.yK)([N.Ay, P.default], () => {
            let e = N.Ay.getMembers(a),
                t = null == n || n === _ ? e : e.filter((e) => e.roles.includes(n));
            return s()(t)
                .filter((e) => null != P.default.getUser(e.userId))
                .sortBy((e) => {
                    var t;
                    return null != (t = e.nick) ? t : D.Ay.getName(P.default.getUser(e.userId));
                })
                .value();
        }, [a, n, _]),
        m = (0, l.bG)([R.A], () => {
            let e = null != n ? n : _;
            return null == e ? null : R.A.getRole(a, e);
        }, [a, n, _]),
        b = null == n ? null : null == f ? void 0 : f[n],
        O = i.useMemo(
            () =>
                null != m
                    ? h.map((e) =>
                          (0, r.jsx)(
                              F,
                              {
                                  member: e,
                                  guildId: a,
                                  channelId: o,
                                  role: m,
                              },
                              e.userId,
                          ),
                      )
                    : [],
            [o, a, m, h],
        );
    return null == m
        ? null
        : (0, r.jsx)(c.C.Provider, {
              value: void 0,
              children: (0, r.jsx)(
                  "div",
                  G(
                      k(
                          {
                              className: L.qm,
                              ref: d,
                          },
                          t,
                      ),
                      {
                          children: (0, r.jsxs)(u.HOs, {
                              className: L.bY,
                              children: [
                                  (0, r.jsx)(g.Y, {
                                      id: n,
                                      guildId: a,
                                      title: m.name,
                                      count: b,
                                      className: L.sd,
                                  }),
                                  O,
                                  null == b || b <= O.length
                                      ? null
                                      : (0, r.jsx)(E.A, {
                                            className: L.sd,
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
function H(e) {
    let { roleId: t, channelId: n, roleName: a, guildId: s, children: c, inlinePreview: d = !1 } = e,
        { analyticsLocations: f } = (0, m.Ay)(h.A.ROLE_MENTION),
        p = (0, l.bG)([_.A], () => _.A.roleStyle),
        g = (0, l.bG)([R.A], () => (null == s || null == t ? null : R.A.getRole(s, t))),
        E = (0, S.jV)(s, g),
        b = !d && null != g && !(0, v.Qv)(g),
        y = b && "dot" === p,
        I = b && "username" === p,
        T = E && null != g ? g.colorStrings : null,
        C = i.useRef(null),
        N = (e) =>
            (0, r.jsxs)(
                A.A,
                G(
                    k(
                        {
                            ref: C,
                            className: L.Dz,
                            color: I ? g.color : null,
                            roleColors: I ? T : null,
                        },
                        e,
                    ),
                    {
                        children: [
                            y &&
                                null != g.color &&
                                (0, r.jsx)(u.WYI, {
                                    color: (0, o.Hl)(g.color),
                                    colors: T,
                                    className: j.m,
                                    background: !1,
                                    tooltip: !1,
                                }),
                            c,
                        ],
                    },
                ),
            ),
        { enabled: w } = V.getCurrentConfig({ location: "2ec235_1" }, { autoTrackExposure: !1 });
    return !w || d || null == n || null == s || (null == t && "@everyone" !== a)
        ? (0, r.jsx)(m.f5, {
              value: f,
              children: N(),
          })
        : (0, r.jsx)(m.f5, {
              value: f,
              children: (0, r.jsx)(u.YNO, {
                  targetElementRef: C,
                  preload: async () => {
                      null != t && (await (0, O.a)(s, t));
                  },
                  renderPopout: (e) =>
                      (0, r.jsx)(B, {
                          guildId: s,
                          channelId: n,
                          roleId: t,
                          popoutProps: e,
                      }),
                  position: "right",
                  children: N,
              }),
          });
}
