n.d(t, { Z: () => M });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(866442),
    c = n(442837),
    d = n(481060),
    f = n(239091),
    _ = n(276264),
    p = n(493773),
    h = n(607070),
    m = n(100527),
    g = n(906732),
    E = n(82295),
    v = n(818083),
    y = n(480608),
    I = n(124072),
    T = n(184301),
    b = n(347475),
    S = n(592125),
    A = n(271383),
    N = n(430824),
    C = n(594174),
    R = n(51144),
    O = n(388032),
    D = n(663362),
    L = n(568189);
let x = (0, v.B)({
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
function P(e) {
    let { member: t, guildId: r, channelId: a, role: s } = e,
        o = (0, c.e7)(
            [N.Z],
            () => {
                var e;
                return null === (e = N.Z.getGuild(r)) || void 0 === e ? void 0 : e.ownerId;
            },
            [r]
        ),
        l = (0, c.e7)([C.default], () => C.default.getUser(t.userId), [t.userId]),
        u = (0, c.e7)([S.Z], () => S.Z.getChannel(a), [a]);
    return null == l || null == u
        ? null
        : (0, i.jsx)(
              d.yRy,
              {
                  preload: () =>
                      (0, T.Z)(t.userId, l.getAvatarURL(r, 80), {
                          guildId: r,
                          channelId: a
                      }),
                  renderPopout: (e) =>
                      (0, i.jsx)(b.Z, {
                          ...e,
                          userId: t.userId,
                          guildId: r,
                          channelId: a,
                          roleId: s.id
                      }),
                  spacing: 14,
                  children: (e, a) => {
                      let { isShown: c } = a;
                      return (0, i.jsx)(
                          _.Z,
                          {
                              selected: c,
                              colorString: t.colorString,
                              colorRoleName: s.name,
                              user: l,
                              isOwner: t.userId === o,
                              nick: t.nick,
                              premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                              channel: u,
                              guildId: r,
                              onContextMenu: (e) => {
                                  (0, f.jW)(e, async () => {
                                      let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('51269'), n.e('13351'), n.e('33862'), n.e('98783'), n.e('7717'), n.e('30039')]).then(n.bind(n, 757387));
                                      return (t) =>
                                          (0, i.jsx)(e, {
                                              ...t,
                                              user: l,
                                              guildId: r,
                                              channel: u,
                                              showMediaItems: !0
                                          });
                                  });
                              },
                              ...e
                          },
                          t.userId
                      );
                  }
              },
              t.userId
          );
}
function w(e) {
    let { popoutProps: t, roleId: n, guildId: a, channelId: s } = e,
        o = r.useRef(null);
    (0, p.ZP)(() => {
        var e;
        return (
            null === (e = t.setPopoutRef) || void 0 === e || e.call(t, o.current),
            () => {
                var e;
                return null === (e = t.setPopoutRef) || void 0 === e ? void 0 : e.call(t, null);
            }
        );
    });
    let u = (0, c.e7)(
            [N.Z],
            () => {
                var e;
                return null === (e = N.Z.getGuild(a)) || void 0 === e ? void 0 : e.getEveryoneRoleId();
            },
            [a]
        ),
        f = (0, c.Wu)(
            [A.ZP, C.default],
            () => {
                let e = A.ZP.getMembers(a),
                    t = null == n || n === u ? e : e.filter((e) => e.roles.includes(n));
                return l()(t)
                    .filter((e) => null != C.default.getUser(e.userId))
                    .sortBy((e) => {
                        var t;
                        return null !== (t = e.nick) && void 0 !== t ? t : R.ZP.getName(C.default.getUser(e.userId));
                    })
                    .slice(0, 100)
                    .value();
            },
            [a, n, u]
        ),
        _ = (0, c.e7)(
            [N.Z],
            () => {
                let e = null != n ? n : u;
                return null == e ? null : N.Z.getRole(a, e);
            },
            [a, n, u]
        ),
        h = r.useMemo(
            () =>
                null != _
                    ? f.map((e) =>
                          (0, i.jsx)(
                              P,
                              {
                                  member: e,
                                  guildId: a,
                                  channelId: s,
                                  role: _
                              },
                              e.userId
                          )
                      )
                    : [],
            [s, a, _, f]
        );
    if (null == _) return null;
    let m =
        h.length > 99
            ? O.intl.formatToPlainString(O.t.F3bubW, { title: _.name })
            : O.intl.formatToPlainString(O.t.CuAQkJ, {
                  title: _.name,
                  count: h.length
              });
    return (0, i.jsx)('div', {
        className: D.rolePopout,
        ref: o,
        ...t,
        children: (0, i.jsxs)(d.Ttm, {
            className: D.roleScroller,
            children: [
                (0, i.jsx)(E.Z, {
                    className: D.roleHeader,
                    'aria-label': O.intl.formatToPlainString(O.t.UaqbkZ, {
                        title: _.name,
                        count: h.length
                    }),
                    children: (0, i.jsx)('span', {
                        'aria-hidden': !0,
                        children: m
                    })
                }),
                h
            ]
        })
    });
}
function M(e) {
    let { roleColor: t, roleId: n, channelId: r, roleName: a, guildId: o, children: l, inlinePreview: f = !1 } = e,
        { analyticsLocations: _ } = (0, g.ZP)(m.Z.ROLE_MENTION),
        p = (0, c.e7)([h.Z], () => h.Z.roleStyle),
        E = null != t && 0 !== t && !f,
        v = E && 'dot' === p,
        T = (e) =>
            (0, i.jsxs)(I.Z, {
                className: s()(D.roleMention),
                color: 'username' === p && E ? t : null,
                ...e,
                children: [
                    v &&
                        (0, i.jsx)(d.FhE, {
                            color: (0, u.Rf)(t),
                            className: L.roleDot,
                            background: !1,
                            tooltip: !1
                        }),
                    l
                ]
            }),
        { enabled: b } = x.getCurrentConfig({ location: '2ec235_1' }, { autoTrackExposure: !1 });
    return !b || f || null == r || null == o || (null == n && '@everyone' !== a)
        ? (0, i.jsx)(g.Gt, {
              value: _,
              children: T()
          })
        : (0, i.jsx)(g.Gt, {
              value: _,
              children: (0, i.jsx)(d.yRy, {
                  preload: async () => {
                      null != n && (await (0, y.H)(o, n));
                  },
                  renderPopout: (e) =>
                      (0, i.jsx)(w, {
                          guildId: o,
                          channelId: r,
                          roleId: n,
                          popoutProps: e
                      }),
                  position: 'right',
                  children: T
              })
          });
}
