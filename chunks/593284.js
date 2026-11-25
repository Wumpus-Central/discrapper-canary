var l = n(477900),
    i = n(582128),
    a = n(435558),
    r = n.n(a),
    s = n(317097),
    o = n(855986),
    u = n(473193),
    c = n(95362),
    d = n(545442),
    m = n(265872),
    A = n(442433),
    p = n(110574),
    h = n(964486),
    f = n(775602),
    g = n(793574),
    x = n(688810),
    I = n(282006),
    v = n(485947),
    T = n(386784),
    S = n(545868),
    y = n(332173),
    N = n(650620),
    E = n(176201),
    C = n(676608),
    j = n(342296),
    _ = n(260509),
    b = n(734057),
    P = n(696451),
    R = n(317525),
    O = n(71393),
    D = n(287809),
    U = n(427262),
    L = n(792996),
    M = n(165648),
    G = n(778724);
function w(e) {
    let { member: t, guildId: a, channelId: r, role: s } = e,
        u = i.useRef(null),
        c = (0, o.bG)([O.A], () => O.A.getGuild(a)?.ownerId, [a]),
        d = (0, o.bG)([D.default], () => D.default.getUser(t.userId), [t.userId]),
        m = (0, o.bG)([b.A], () => b.A.getChannel(r), [r]);
    return null == d || null == m
        ? null
        : (0, l.jsx)(
              j.A,
              {
                  targetElementRef: u,
                  userId: t.userId,
                  guildId: a,
                  channelId: r,
                  roleId: s.id,
                  spacing: 14,
                  children: (e, i) => {
                      let { isShown: r } = i;
                      return (0, l.jsx)(
                          p.A,
                          {
                              ref: u,
                              selected: r,
                              colorString: t.colorString,
                              colorStrings: t.colorStrings,
                              colorRoleName: s.name,
                              user: d,
                              isOwner: t.userId === c,
                              nick: t.nick,
                              premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                              channel: m,
                              guildId: a,
                              onContextMenu: (e) => {
                                  (0, A.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e(339715),
                                          n.e(147119),
                                          n.e(876400),
                                          n.e(24312),
                                          n.e(896691),
                                          n.e(779367),
                                          n.e(992956),
                                          n.e(428643),
                                          n.e(630290),
                                          n.e(189423),
                                          n.e(622936),
                                          n.e(216947),
                                          n.e(463317),
                                          n.e(676081),
                                          n.e(834552),
                                          n.e(993103),
                                          n.e(708757),
                                          n.e(508702),
                                          n.e(585968),
                                          n.e(893190),
                                          n.e(713708),
                                          n.e(879315),
                                          n.e(37085),
                                          n.e(890027),
                                          n.e(21921),
                                          n.e(885533),
                                          n.e(676418),
                                          n.e(189673),
                                          n.e(592028),
                                          n.e(571210),
                                          n.e(166495),
                                          n.e(349460),
                                          n.e(425906),
                                          n.e(123216),
                                          n.e(830221),
                                          n.e(182408),
                                          n.e(576432),
                                          n.e(797558),
                                          n.e(88342),
                                          n.e(936320),
                                          n.e(451162),
                                          n.e(482861),
                                          n.e(229787),
                                          n.e(311802),
                                          n.e(576665),
                                          n.e(698965),
                                          n.e(538887),
                                          n.e(235313),
                                          n.e(454625),
                                          n.e(371133),
                                          n.e(41991),
                                          n.e(959669),
                                          n.e(624198),
                                          n.e(579245),
                                          n.e(715038),
                                          n.e(252229),
                                          n.e(939171),
                                          n.e(680986),
                                          n.e(245996),
                                          n.e(700792),
                                          n.e(144472),
                                          n.e(60086),
                                          n.e(552172),
                                          n.e(529422),
                                          n.e(823427),
                                          n.e(856753),
                                          n.e(309291),
                                          n.e(242204),
                                          n.e(307059),
                                          n.e(495861),
                                          n.e(649520),
                                          n.e(493014),
                                          n.e(349644),
                                          n.e(175938),
                                          n.e(825486),
                                          n.e(522261),
                                          n.e(678195),
                                          n.e(343116),
                                          n.e(470314),
                                          n.e(736674),
                                          n.e(70515),
                                          n.e(404524),
                                          n.e(654148),
                                          n.e(774021),
                                          n.e(666939),
                                          n.e(324240),
                                          n.e(304866),
                                          n.e(281165),
                                          n.e(184841),
                                      ]).then(n.bind(n, 107632));
                                      return (t) =>
                                          (0, l.jsx)(e, { ...t, user: d, guildId: a, channel: m, showMediaItems: !0 });
                                  });
                              },
                              ...e,
                          },
                          t.userId,
                      );
                  },
              },
              t.userId,
          );
}
function Y(e) {
    let { popoutProps: t, roleId: n, guildId: a, channelId: s } = e,
        d = i.useRef(null);
    ((0, h.Ay)(() => {
        t.setPopoutRef?.(d.current);
    }),
        (0, h.l0)(() => {
            t.setPopoutRef?.(null);
        }));
    let m = (0, T.A)(a),
        A = (0, o.bG)(
            [O.A],
            () => {
                let e = O.A.getGuild(a);
                return null == e ? null : (0, _.af)(e);
            },
            [a],
        ),
        p = (0, o.yK)(
            [P.Ay, D.default],
            () => {
                let e = P.Ay.getMembers(a),
                    t = null == n || n === A ? e : e.filter((e) => e.roles.includes(n));
                return r()(t)
                    .filter((e) => null != D.default.getUser(e.userId))
                    .sortBy((e) => e.nick ?? U.Ay.getName(D.default.getUser(e.userId)))
                    .value();
            },
            [a, n, A],
        ),
        f = (0, o.bG)(
            [R.A],
            () => {
                let e = n ?? A;
                return null == e ? null : R.A.getRole(a, e);
            },
            [a, n, A],
        ),
        g = null == n ? null : m?.[n],
        x = i.useMemo(
            () =>
                null != f
                    ? p.map((e) => (0, l.jsx)(w, { member: e, guildId: a, channelId: s, role: f }, e.userId))
                    : [],
            [s, a, f, p],
        );
    return null == f
        ? null
        : (0, l.jsx)(u.C.Provider, {
              value: void 0,
              children: (0, l.jsx)("div", {
                  className: M.qm,
                  ref: d,
                  ...t,
                  children: (0, l.jsxs)(c.Ip, {
                      className: M.bY,
                      children: [
                          (0, l.jsx)(I.Y, { id: n, guildId: a, title: f.name, count: g, className: M.sd }),
                          x,
                          null == g || g <= x.length
                              ? null
                              : (0, l.jsx)(v.A, {
                                    className: M.sd,
                                    children: L.intl.formatToPlainString(L.t["9oMmZC"], { count: g - x.length }),
                                }),
                      ],
                  }),
              }),
          });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { roleId: t, channelId: n, roleName: a, guildId: r, children: u, inlinePreview: c = !1 } = e,
                { analyticsLocations: A } = (0, x.Ay)(g.A.ROLE_MENTION),
                p = (0, N.A)(r, t),
                h = (0, o.bG)([f.Ay], () => f.Ay.roleStyle),
                I = (0, o.bG)([R.A], () => (null == r || null == t ? null : R.A.getRole(r, t))),
                v = (0, C.jV)(r, I),
                T = !c && null != I && !(0, E.Qv)(I),
                j = T && "dot" === h,
                _ = T && "username" === h,
                b = v && null != I ? I.colorStrings : null,
                P = i.useRef(null);
            function O(e) {
                return (0, l.jsxs)(y.A, {
                    ref: P,
                    className: M.Dz,
                    color: _ ? I.color : null,
                    roleColors: _ ? b : null,
                    ...e,
                    onContextMenu: c ? void 0 : p,
                    children: [
                        j &&
                            null != I.color &&
                            (0, l.jsx)(d.W, {
                                color: (0, s.Hl)(I.color),
                                colors: b,
                                className: G.m,
                                background: !1,
                                tooltip: !1,
                            }),
                        u,
                    ],
                });
            }
            return c || null == n || null == r || (null == t && "@everyone" !== a)
                ? (0, l.jsx)(x.f5, { value: A, children: O() })
                : (0, l.jsx)(x.f5, {
                      value: A,
                      children: (0, l.jsx)(m.Y, {
                          targetElementRef: P,
                          preload: async () => {
                              null != t && (await (0, S.a)(r, t));
                          },
                          renderPopout: (e) => (0, l.jsx)(Y, { guildId: r, channelId: n, roleId: t, popoutProps: e }),
                          position: "right",
                          children: O,
                      }),
                  });
        },
        Y: Y,
    },
);
