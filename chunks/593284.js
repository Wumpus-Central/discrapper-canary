"use strict";
n.d(t, { A: () => F });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(317097),
    l = n(17928),
    u = n(473193),
    c = n(364522),
    d = n(545442),
    _ = n(922016),
    f = n(442433),
    h = n(589158),
    p = n(964486),
    E = n(775602),
    m = n(793574),
    g = n(688810),
    A = n(946228),
    I = n(485947),
    T = n(386784),
    S = n(545868),
    N = n(332173),
    y = n(176201),
    C = n(676608),
    v = n(342296),
    O = n(260509),
    R = n(734057),
    b = n(696451),
    D = n(317525),
    L = n(71393),
    w = n(287809),
    M = n(427262),
    P = n(375708),
    x = n(992595),
    U = n(204865);
function k(e) {
    let { member: t, guildId: s, channelId: a, role: o } = e,
        u = r.useRef(null),
        c = (0, l.bG)([L.A], () => L.A.getGuild(s)?.ownerId, [s]),
        d = (0, l.bG)([w.default], () => w.default.getUser(t.userId), [t.userId]),
        _ = (0, l.bG)([R.A], () => R.A.getChannel(a), [a]);
    return null == d || null == _
        ? null
        : (0, i.jsx)(
              v.A,
              {
                  targetElementRef: u,
                  userId: t.userId,
                  guildId: s,
                  channelId: a,
                  roleId: o.id,
                  spacing: 14,
                  children: (e, r) => {
                      let { isShown: a } = r;
                      return (0, i.jsx)(
                          h.A,
                          {
                              ref: u,
                              selected: a,
                              colorString: t.colorString,
                              colorStrings: t.colorStrings,
                              colorRoleName: o.name,
                              user: d,
                              isOwner: t.userId === c,
                              nick: t.nick,
                              premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                              channel: _,
                              guildId: s,
                              onContextMenu: (e) => {
                                  (0, f.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("74389"),
                                          n.e("80203"),
                                          n.e("54266"),
                                          n.e("685"),
                                          n.e("12697"),
                                          n.e("26692"),
                                          n.e("26132"),
                                          n.e("46652"),
                                          n.e("93190"),
                                          n.e("34552"),
                                          n.e("93103"),
                                          n.e("8757"),
                                          n.e("89673"),
                                          n.e("85968"),
                                          n.e("60195"),
                                          n.e("21921"),
                                          n.e("68403"),
                                          n.e("76418"),
                                          n.e("29787"),
                                          n.e("71210"),
                                          n.e("97558"),
                                          n.e("94000"),
                                          n.e("82263"),
                                          n.e("66495"),
                                          n.e("88342"),
                                          n.e("91994"),
                                          n.e("42451"),
                                          n.e("76665"),
                                          n.e("98965"),
                                          n.e("35027"),
                                          n.e("35313"),
                                          n.e("54975"),
                                          n.e("24198"),
                                          n.e("71133"),
                                          n.e("54625"),
                                          n.e("39171"),
                                          n.e("36564"),
                                          n.e("45996"),
                                          n.e("52229"),
                                          n.e("792"),
                                          n.e("92822"),
                                          n.e("56753"),
                                          n.e("23427"),
                                          n.e("49145"),
                                          n.e("29422"),
                                          n.e("61268"),
                                          n.e("25486"),
                                          n.e("9291"),
                                          n.e("14461"),
                                          n.e("7059"),
                                          n.e("49644"),
                                          n.e("28152"),
                                          n.e("42204"),
                                          n.e("43116"),
                                          n.e("65826"),
                                          n.e("49520"),
                                          n.e("78195"),
                                          n.e("11617"),
                                          n.e("70314"),
                                          n.e("22261"),
                                          n.e("70515"),
                                          n.e("27435"),
                                          n.e("74021"),
                                          n.e("13708"),
                                          n.e("66939"),
                                          n.e("30221"),
                                          n.e("24240"),
                                          n.e("21879"),
                                          n.e("17334"),
                                          n.e("84841"),
                                      ]).then(n.bind(n, 107632));
                                      return (t) =>
                                          (0, i.jsx)(e, { ...t, user: d, guildId: s, channel: _, showMediaItems: !0 });
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
function G(e) {
    let { popoutProps: t, roleId: n, guildId: s, channelId: o } = e,
        d = r.useRef(null);
    (0, p.Ay)(() => {
        t.setPopoutRef?.(d.current);
    }),
        (0, p.l0)(() => {
            t.setPopoutRef?.(null);
        });
    let _ = (0, T.A)(s),
        f = (0, l.bG)([L.A], () => {
            let e = L.A.getGuild(s);
            return null == e ? null : (0, O.af)(e);
        }, [s]),
        h = (0, l.yK)([b.Ay, w.default], () => {
            let e = b.Ay.getMembers(s),
                t = null == n || n === f ? e : e.filter((e) => e.roles.includes(n));
            return a()(t)
                .filter((e) => null != w.default.getUser(e.userId))
                .sortBy((e) => e.nick ?? M.Ay.getName(w.default.getUser(e.userId)))
                .value();
        }, [s, n, f]),
        E = (0, l.bG)([D.A], () => {
            let e = n ?? f;
            return null == e ? null : D.A.getRole(s, e);
        }, [s, n, f]),
        m = null == n ? null : _?.[n],
        g = r.useMemo(
            () =>
                null != E
                    ? h.map((e) => (0, i.jsx)(k, { member: e, guildId: s, channelId: o, role: E }, e.userId))
                    : [],
            [o, s, E, h],
        );
    return null == E
        ? null
        : (0, i.jsx)(u.C.Provider, {
              value: void 0,
              children: (0, i.jsx)("div", {
                  className: x.qm,
                  ref: d,
                  ...t,
                  children: (0, i.jsxs)(c.Ip, {
                      className: x.bY,
                      children: [
                          (0, i.jsx)(A.Y, { id: n, guildId: s, title: E.name, count: m, className: x.sd }),
                          g,
                          null == m || m <= g.length
                              ? null
                              : (0, i.jsx)(I.A, {
                                    className: x.sd,
                                    children: P.intl.formatToPlainString(P.t["9oMmZC"], { count: m - g.length }),
                                }),
                      ],
                  }),
              }),
          });
}
function F(e) {
    let { roleId: t, channelId: n, roleName: s, guildId: a, children: u, inlinePreview: c = !1 } = e,
        { analyticsLocations: f } = (0, g.Ay)(m.A.ROLE_MENTION),
        h = (0, l.bG)([E.A], () => E.A.roleStyle),
        p = (0, l.bG)([D.A], () => (null == a || null == t ? null : D.A.getRole(a, t))),
        A = (0, C.jV)(a, p),
        I = !c && null != p && !(0, y.Qv)(p),
        T = I && "dot" === h,
        v = I && "username" === h,
        O = A && null != p ? p.colorStrings : null,
        R = r.useRef(null),
        b = (e) =>
            (0, i.jsxs)(N.A, {
                ref: R,
                className: x.Dz,
                color: v ? p.color : null,
                roleColors: v ? O : null,
                ...e,
                children: [
                    T &&
                        null != p.color &&
                        (0, i.jsx)(d.W, {
                            color: (0, o.Hl)(p.color),
                            colors: O,
                            className: U.m,
                            background: !1,
                            tooltip: !1,
                        }),
                    u,
                ],
            });
    return c || null == n || null == a || (null == t && "@everyone" !== s)
        ? (0, i.jsx)(g.f5, { value: f, children: b() })
        : (0, i.jsx)(g.f5, {
              value: f,
              children: (0, i.jsx)(_.Y, {
                  targetElementRef: R,
                  preload: async () => {
                      null != t && (await (0, S.a)(a, t));
                  },
                  renderPopout: (e) => (0, i.jsx)(G, { guildId: a, channelId: n, roleId: t, popoutProps: e }),
                  position: "right",
                  children: b,
              }),
          });
}
