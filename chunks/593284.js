var t = n(477900),
    a = n(582128),
    s = n(435558),
    i = n.n(s),
    r = n(317097),
    u = n(855986),
    o = n(473193),
    d = n(95362),
    c = n(545442),
    m = n(265872),
    x = n(442433),
    h = n(110574),
    f = n(964486),
    A = n(775602),
    g = n(793574),
    p = n(688810),
    j = n(282006),
    N = n(485947),
    v = n(386784),
    I = n(545868),
    S = n(332173),
    b = n(650620),
    T = n(176201),
    C = n(676608),
    y = n(342296),
    E = n(260509),
    G = n(734057),
    M = n(696451),
    w = n(317525),
    R = n(71393),
    k = n(287809),
    U = n(427262),
    P = n(792996),
    _ = n(165648),
    D = n(778724);
function O(e) {
    let { member: l, guildId: s, channelId: i, role: r } = e,
        o = a.useRef(null),
        d = (0, u.bG)([R.A], () => R.A.getGuild(s)?.ownerId, [s]),
        c = (0, u.bG)([k.default], () => k.default.getUser(l.userId), [l.userId]),
        m = (0, u.bG)([G.A], () => G.A.getChannel(i), [i]);
    return null == c || null == m
        ? null
        : (0, t.jsx)(
              y.A,
              {
                  targetElementRef: o,
                  userId: l.userId,
                  guildId: s,
                  channelId: i,
                  roleId: r.id,
                  spacing: 14,
                  children: (e, a) => {
                      let { isShown: i } = a;
                      return (0, t.jsx)(
                          h.A,
                          {
                              ref: o,
                              selected: i,
                              colorString: l.colorString,
                              colorStrings: l.colorStrings,
                              colorRoleName: r.name,
                              user: c,
                              isOwner: l.userId === d,
                              nick: l.nick,
                              premiumSince: null == l.premiumSince ? null : new Date(l.premiumSince),
                              channel: m,
                              guildId: s,
                              onContextMenu: (e) => {
                                  (0, x.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e(476662),
                                          n.e(253044),
                                          n.e(311913),
                                          n.e(881717),
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
                                          n.e(363269),
                                          n.e(474172),
                                          n.e(676081),
                                          n.e(834552),
                                          n.e(993103),
                                          n.e(708757),
                                          n.e(508702),
                                          n.e(585968),
                                          n.e(893190),
                                          n.e(489218),
                                          n.e(912875),
                                          n.e(862782),
                                          n.e(55348),
                                          n.e(713708),
                                          n.e(879315),
                                          n.e(37085),
                                          n.e(890027),
                                          n.e(885533),
                                          n.e(21921),
                                          n.e(189673),
                                          n.e(592028),
                                          n.e(571210),
                                          n.e(349460),
                                          n.e(425906),
                                          n.e(123216),
                                          n.e(576432),
                                          n.e(797558),
                                          n.e(676418),
                                          n.e(182408),
                                          n.e(451162),
                                          n.e(229787),
                                          n.e(166495),
                                          n.e(88342),
                                          n.e(936320),
                                          n.e(482861),
                                          n.e(830221),
                                          n.e(576665),
                                          n.e(311802),
                                          n.e(698965),
                                          n.e(538887),
                                          n.e(235313),
                                          n.e(454625),
                                          n.e(332470),
                                          n.e(371133),
                                          n.e(41991),
                                          n.e(624198),
                                          n.e(959669),
                                          n.e(715038),
                                          n.e(579245),
                                          n.e(245996),
                                          n.e(939171),
                                          n.e(252229),
                                          n.e(680986),
                                          n.e(700792),
                                          n.e(552172),
                                          n.e(529422),
                                          n.e(823427),
                                          n.e(60086),
                                          n.e(190889),
                                          n.e(242204),
                                          n.e(856753),
                                          n.e(61129),
                                          n.e(307059),
                                          n.e(205941),
                                          n.e(309291),
                                          n.e(331203),
                                          n.e(495861),
                                          n.e(255302),
                                          n.e(349644),
                                          n.e(649520),
                                          n.e(493014),
                                          n.e(825486),
                                          n.e(522261),
                                          n.e(873786),
                                          n.e(343116),
                                          n.e(678195),
                                          n.e(557830),
                                          n.e(470314),
                                          n.e(70515),
                                          n.e(404524),
                                          n.e(736674),
                                          n.e(654148),
                                          n.e(774021),
                                          n.e(666939),
                                          n.e(108634),
                                          n.e(324240),
                                          n.e(281165),
                                          n.e(304866),
                                          n.e(184841),
                                          n.e(105539),
                                      ]).then(n.bind(n, 107632));
                                      return (l) =>
                                          (0, t.jsx)(e, { ...l, user: c, guildId: s, channel: m, showMediaItems: !0 });
                                  });
                              },
                              ...e,
                          },
                          l.userId,
                      );
                  },
              },
              l.userId,
          );
}
function F(e) {
    let { popoutProps: l, roleId: n, guildId: s, channelId: r } = e,
        c = a.useRef(null);
    ((0, f.Ay)(() => {
        l.setPopoutRef?.(c.current);
    }),
        (0, f.l0)(() => {
            l.setPopoutRef?.(null);
        }));
    let m = (0, v.A)(s),
        x = (0, u.bG)(
            [R.A],
            () => {
                let e = R.A.getGuild(s);
                return null == e ? null : (0, E.af)(e);
            },
            [s],
        ),
        h = (0, u.yK)(
            [M.Ay, k.default],
            () => {
                let e = M.Ay.getMembers(s),
                    l = null == n || n === x ? e : e.filter((e) => e.roles.includes(n));
                return i()(l)
                    .filter((e) => null != k.default.getUser(e.userId))
                    .sortBy((e) => e.nick ?? U.Ay.getName(k.default.getUser(e.userId)))
                    .value();
            },
            [s, n, x],
        ),
        A = (0, u.bG)(
            [w.A],
            () => {
                let e = n ?? x;
                return null == e ? null : w.A.getRole(s, e);
            },
            [s, n, x],
        ),
        g = null == n ? null : m?.[n],
        p = a.useMemo(
            () =>
                null != A
                    ? h.map((e) => (0, t.jsx)(O, { member: e, guildId: s, channelId: r, role: A }, e.userId))
                    : [],
            [r, s, A, h],
        );
    return null == A
        ? null
        : (0, t.jsx)(o.C.Provider, {
              value: void 0,
              children: (0, t.jsx)("div", {
                  className: _.qm,
                  ref: c,
                  ...l,
                  children: (0, t.jsxs)(d.Ip, {
                      className: _.bY,
                      children: [
                          (0, t.jsx)(j.Y, { id: n, guildId: s, title: A.name, count: g, className: _.sd }),
                          p,
                          null == g || g <= p.length
                              ? null
                              : (0, t.jsx)(N.A, {
                                    className: _.sd,
                                    children: P.intl.formatToPlainString(P.t["9oMmZC"], { count: g - p.length }),
                                }),
                      ],
                  }),
              }),
          });
}
n.d(
    l,
    {},
    {
        A: function (e) {
            let { roleId: l, channelId: n, roleName: s, guildId: i, children: o, inlinePreview: d = !1 } = e,
                { analyticsLocations: x } = (0, p.Ay)(g.A.ROLE_MENTION),
                h = (0, b.A)(i, l),
                f = (0, u.bG)([A.Ay], () => A.Ay.roleStyle),
                j = (0, u.bG)([w.A], () => (null == i || null == l ? null : w.A.getRole(i, l))),
                N = (0, C.jV)(i, j),
                v = !d && null != j && !(0, T.Qv)(j),
                y = v && "dot" === f,
                E = v && "username" === f,
                G = N && null != j ? j.colorStrings : null,
                M = a.useRef(null);
            function R(e) {
                return (0, t.jsxs)(S.A, {
                    ref: M,
                    className: _.Dz,
                    color: E ? j.color : null,
                    roleColors: E ? G : null,
                    ...e,
                    onContextMenu: d ? void 0 : h,
                    children: [
                        y &&
                            null != j.color &&
                            (0, t.jsx)(c.W, {
                                color: (0, r.Hl)(j.color),
                                colors: G,
                                className: D.m,
                                background: !1,
                                tooltip: !1,
                            }),
                        o,
                    ],
                });
            }
            return d || null == n || null == i || (null == l && "@everyone" !== s)
                ? (0, t.jsx)(p.f5, { value: x, children: R() })
                : (0, t.jsx)(p.f5, {
                      value: x,
                      children: (0, t.jsx)(m.Y, {
                          targetElementRef: M,
                          preload: async () => {
                              null != l && (await (0, I.a)(i, l));
                          },
                          renderPopout: (e) => (0, t.jsx)(F, { guildId: i, channelId: n, roleId: l, popoutProps: e }),
                          position: "right",
                          children: R,
                      }),
                  });
        },
        Y: F,
    },
);
