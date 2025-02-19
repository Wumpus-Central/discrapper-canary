n.d(t, { Z: () => G });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(866442),
    u = n(442837),
    d = n(481060),
    f = n(239091),
    p = n(276264),
    _ = n(493773),
    h = n(607070),
    m = n(100527),
    g = n(906732),
    E = n(82295),
    v = n(818083),
    b = n(480608),
    y = n(124072),
    O = n(184301),
    S = n(347475),
    I = n(592125),
    T = n(271383),
    N = n(430824),
    A = n(594174),
    C = n(51144),
    R = n(388032),
    P = n(368365),
    w = n(700241);
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
                D(e, t, n[t]);
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
function M(e, t) {
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
let k = (0, v.B)({
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
    let { member: t, guildId: i, channelId: o, role: a } = e,
        s = (0, u.e7)(
            [N.Z],
            () => {
                var e;
                return null === (e = N.Z.getGuild(i)) || void 0 === e ? void 0 : e.ownerId;
            },
            [i]
        ),
        l = (0, u.e7)([A.default], () => A.default.getUser(t.userId), [t.userId]),
        c = (0, u.e7)([I.Z], () => I.Z.getChannel(o), [o]);
    return null == l || null == c
        ? null
        : (0, r.jsx)(
              d.yRy,
              {
                  preload: () =>
                      (0, O.Z)(t.userId, l.getAvatarURL(i, 80), {
                          guildId: i,
                          channelId: o
                      }),
                  renderPopout: (e) =>
                      (0, r.jsx)(
                          S.Z,
                          M(x({}, e), {
                              userId: t.userId,
                              guildId: i,
                              channelId: o,
                              roleId: a.id
                          })
                      ),
                  spacing: 14,
                  children: (e, o) => {
                      let { isShown: u } = o;
                      return (0, r.jsx)(
                          p.Z,
                          x(
                              {
                                  selected: u,
                                  colorString: t.colorString,
                                  colorRoleName: a.name,
                                  user: l,
                                  isOwner: t.userId === s,
                                  nick: t.nick,
                                  premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                                  channel: c,
                                  guildId: i,
                                  onContextMenu: (e) => {
                                      (0, f.jW)(e, async () => {
                                          let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('51269'), n.e('13351'), n.e('33862'), n.e('98783'), n.e('6915'), n.e('97589'), n.e('7717'), n.e('32692')]).then(n.bind(n, 757387));
                                          return (t) =>
                                              (0, r.jsx)(
                                                  e,
                                                  M(x({}, t), {
                                                      user: l,
                                                      guildId: i,
                                                      channel: c,
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
    let { popoutProps: t, roleId: n, guildId: o, channelId: a } = e,
        s = i.useRef(null);
    (0, _.ZP)(() => {
        var e;
        return (
            null === (e = t.setPopoutRef) || void 0 === e || e.call(t, s.current),
            () => {
                var e;
                return null === (e = t.setPopoutRef) || void 0 === e ? void 0 : e.call(t, null);
            }
        );
    });
    let c = (0, u.e7)(
            [N.Z],
            () => {
                var e;
                return null === (e = N.Z.getGuild(o)) || void 0 === e ? void 0 : e.getEveryoneRoleId();
            },
            [o]
        ),
        f = (0, u.Wu)(
            [T.ZP, A.default],
            () => {
                let e = T.ZP.getMembers(o),
                    t = null == n || n === c ? e : e.filter((e) => e.roles.includes(n));
                return l()(t)
                    .filter((e) => null != A.default.getUser(e.userId))
                    .sortBy((e) => {
                        var t;
                        return null !== (t = e.nick) && void 0 !== t ? t : C.ZP.getName(A.default.getUser(e.userId));
                    })
                    .slice(0, 100)
                    .value();
            },
            [o, n, c]
        ),
        p = (0, u.e7)(
            [N.Z],
            () => {
                let e = null != n ? n : c;
                return null == e ? null : N.Z.getRole(o, e);
            },
            [o, n, c]
        ),
        h = i.useMemo(
            () =>
                null != p
                    ? f.map((e) =>
                          (0, r.jsx)(
                              j,
                              {
                                  member: e,
                                  guildId: o,
                                  channelId: a,
                                  role: p
                              },
                              e.userId
                          )
                      )
                    : [],
            [a, o, p, f]
        );
    if (null == p) return null;
    let m =
        h.length > 99
            ? R.NW.formatToPlainString(R.t.F3bubW, { title: p.name })
            : R.NW.formatToPlainString(R.t.CuAQkJ, {
                  title: p.name,
                  count: h.length
              });
    return (0, r.jsx)(
        'div',
        M(
            x(
                {
                    className: P.rolePopout,
                    ref: s
                },
                t
            ),
            {
                children: (0, r.jsxs)(d.Ttm, {
                    className: P.roleScroller,
                    children: [
                        (0, r.jsx)(E.Z, {
                            className: P.roleHeader,
                            'aria-label': R.NW.formatToPlainString(R.t.UaqbkZ, {
                                title: p.name,
                                count: h.length
                            }),
                            children: (0, r.jsx)('span', {
                                'aria-hidden': !0,
                                children: m
                            })
                        }),
                        h
                    ]
                })
            }
        )
    );
}
function G(e) {
    let { roleColor: t, roleId: n, channelId: i, roleName: o, guildId: s, children: l, inlinePreview: f = !1 } = e,
        { analyticsLocations: p } = (0, g.ZP)(m.Z.ROLE_MENTION),
        _ = (0, u.e7)([h.Z], () => h.Z.roleStyle),
        E = null != t && 0 !== t && !f,
        v = E && 'dot' === _,
        O = (e) =>
            (0, r.jsxs)(
                y.Z,
                M(
                    x(
                        {
                            className: a()(P.roleMention),
                            color: 'username' === _ && E ? t : null
                        },
                        e
                    ),
                    {
                        children: [
                            v &&
                                (0, r.jsx)(d.FhE, {
                                    color: (0, c.Rf)(t),
                                    className: w.roleDot,
                                    background: !1,
                                    tooltip: !1
                                }),
                            l
                        ]
                    }
                )
            ),
        { enabled: S } = k.getCurrentConfig({ location: '2ec235_1' }, { autoTrackExposure: !1 });
    return !S || f || null == i || null == s || (null == n && '@everyone' !== o)
        ? (0, r.jsx)(g.Gt, {
              value: p,
              children: O()
          })
        : (0, r.jsx)(g.Gt, {
              value: p,
              children: (0, r.jsx)(d.yRy, {
                  preload: async () => {
                      null != n && (await (0, b.H)(s, n));
                  },
                  renderPopout: (e) =>
                      (0, r.jsx)(U, {
                          guildId: s,
                          channelId: i,
                          roleId: n,
                          popoutProps: e
                      }),
                  position: 'right',
                  children: O
              })
          });
}
