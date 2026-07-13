"use strict";
n.d(t, { A: () => F, Y: () => k });
var i = n(627968),
    r = n(64700),
    a = n(735438),
    s = n.n(a),
    l = n(317097),
    o = n(17928),
    d = n(473193),
    c = n(364522),
    u = n(545442),
    _ = n(922016),
    E = n(442433),
    A = n(589158),
    h = n(964486),
    I = n(775602),
    f = n(793574),
    p = n(688810),
    T = n(946228),
    m = n(485947),
    g = n(386784),
    S = n(545868),
    N = n(332173),
    C = n(176201),
    O = n(676608),
    R = n(342296),
    L = n(260509),
    D = n(734057),
    y = n(696451),
    v = n(317525),
    b = n(71393),
    M = n(287809),
    P = n(427262),
    U = n(375708),
    w = n(992595),
    G = n(204865);
function x(e) {
    let { member: t, guildId: a, channelId: s, role: l } = e,
        d = r.useRef(null),
        c = (0, o.bG)([b.A], () => b.A.getGuild(a)?.ownerId, [a]),
        u = (0, o.bG)([M.default], () => M.default.getUser(t.userId), [t.userId]),
        _ = (0, o.bG)([D.A], () => D.A.getChannel(s), [s]);
    return null == u || null == _
        ? null
        : (0, i.jsx)(
              R.A,
              {
                  targetElementRef: d,
                  userId: t.userId,
                  guildId: a,
                  channelId: s,
                  roleId: l.id,
                  spacing: 14,
                  children: (e, r) => {
                      let { isShown: s } = r;
                      return (0, i.jsx)(
                          A.A,
                          {
                              ref: d,
                              selected: s,
                              colorString: t.colorString,
                              colorStrings: t.colorStrings,
                              colorRoleName: l.name,
                              user: u,
                              isOwner: t.userId === c,
                              nick: t.nick,
                              premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                              channel: _,
                              guildId: a,
                              onContextMenu: (e) => {
                                  (0, E.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("31463"),
                                          n.e("41831"),
                                          n.e("65264"),
                                          n.e("62323"),
                                          n.e("88429"),
                                          n.e("94881"),
                                          n.e("26692"),
                                          n.e("26132"),
                                          n.e("46652"),
                                          n.e("93103"),
                                          n.e("93190"),
                                          n.e("34552"),
                                          n.e("21921"),
                                          n.e("8757"),
                                          n.e("76418"),
                                          n.e("66495"),
                                          n.e("71210"),
                                          n.e("85968"),
                                          n.e("89673"),
                                          n.e("68403"),
                                          n.e("88342"),
                                          n.e("29787"),
                                          n.e("89421"),
                                          n.e("35027"),
                                          n.e("98965"),
                                          n.e("82073"),
                                          n.e("97558"),
                                          n.e("91994"),
                                          n.e("54625"),
                                          n.e("71133"),
                                          n.e("76665"),
                                          n.e("28662"),
                                          n.e("35313"),
                                          n.e("39171"),
                                          n.e("36564"),
                                          n.e("24198"),
                                          n.e("52229"),
                                          n.e("45996"),
                                          n.e("792"),
                                          n.e("92822"),
                                          n.e("61268"),
                                          n.e("23427"),
                                          n.e("49145"),
                                          n.e("29422"),
                                          n.e("9291"),
                                          n.e("56753"),
                                          n.e("65826"),
                                          n.e("49520"),
                                          n.e("14461"),
                                          n.e("93014"),
                                          n.e("7059"),
                                          n.e("25486"),
                                          n.e("22261"),
                                          n.e("49644"),
                                          n.e("78195"),
                                          n.e("43116"),
                                          n.e("39103"),
                                          n.e("70314"),
                                          n.e("42204"),
                                          n.e("74021"),
                                          n.e("70515"),
                                          n.e("4524"),
                                          n.e("13708"),
                                          n.e("54148"),
                                          n.e("66939"),
                                          n.e("30221"),
                                          n.e("24240"),
                                          n.e("21879"),
                                          n.e("17334"),
                                          n.e("84841"),
                                      ]).then(n.bind(n, 107632));
                                      return (t) =>
                                          (0, i.jsx)(e, { ...t, user: u, guildId: a, channel: _, showMediaItems: !0 });
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
function k(e) {
    let { popoutProps: t, roleId: n, guildId: a, channelId: l } = e,
        u = r.useRef(null);
    (0, h.Ay)(() => {
        t.setPopoutRef?.(u.current);
    }),
        (0, h.l0)(() => {
            t.setPopoutRef?.(null);
        });
    let _ = (0, g.A)(a),
        E = (0, o.bG)([b.A], () => {
            let e = b.A.getGuild(a);
            return null == e ? null : (0, L.af)(e);
        }, [a]),
        A = (0, o.yK)([y.Ay, M.default], () => {
            let e = y.Ay.getMembers(a),
                t = null == n || n === E ? e : e.filter((e) => e.roles.includes(n));
            return s()(t)
                .filter((e) => null != M.default.getUser(e.userId))
                .sortBy((e) => e.nick ?? P.Ay.getName(M.default.getUser(e.userId)))
                .value();
        }, [a, n, E]),
        I = (0, o.bG)([v.A], () => {
            let e = n ?? E;
            return null == e ? null : v.A.getRole(a, e);
        }, [a, n, E]),
        f = null == n ? null : _?.[n],
        p = r.useMemo(
            () =>
                null != I
                    ? A.map((e) => (0, i.jsx)(x, { member: e, guildId: a, channelId: l, role: I }, e.userId))
                    : [],
            [l, a, I, A],
        );
    return null == I
        ? null
        : (0, i.jsx)(d.C.Provider, {
              value: void 0,
              children: (0, i.jsx)("div", {
                  className: w.qm,
                  ref: u,
                  ...t,
                  children: (0, i.jsxs)(c.Ip, {
                      className: w.bY,
                      children: [
                          (0, i.jsx)(T.Y, { id: n, guildId: a, title: I.name, count: f, className: w.sd }),
                          p,
                          null == f || f <= p.length
                              ? null
                              : (0, i.jsx)(m.A, {
                                    className: w.sd,
                                    children: U.intl.formatToPlainString(U.t["9oMmZC"], { count: f - p.length }),
                                }),
                      ],
                  }),
              }),
          });
}
function F(e) {
    let { roleId: t, channelId: n, roleName: a, guildId: s, children: d, inlinePreview: c = !1 } = e,
        { analyticsLocations: E } = (0, p.Ay)(f.A.ROLE_MENTION),
        A = (0, o.bG)([I.Ay], () => I.Ay.roleStyle),
        h = (0, o.bG)([v.A], () => (null == s || null == t ? null : v.A.getRole(s, t))),
        T = (0, O.jV)(s, h),
        m = !c && null != h && !(0, C.Qv)(h),
        g = m && "dot" === A,
        R = m && "username" === A,
        L = T && null != h ? h.colorStrings : null,
        D = r.useRef(null),
        y = (e) =>
            (0, i.jsxs)(N.A, {
                ref: D,
                className: w.Dz,
                color: R ? h.color : null,
                roleColors: R ? L : null,
                ...e,
                children: [
                    g &&
                        null != h.color &&
                        (0, i.jsx)(u.W, {
                            color: (0, l.Hl)(h.color),
                            colors: L,
                            className: G.m,
                            background: !1,
                            tooltip: !1,
                        }),
                    d,
                ],
            });
    return c || null == n || null == s || (null == t && "@everyone" !== a)
        ? (0, i.jsx)(p.f5, { value: E, children: y() })
        : (0, i.jsx)(p.f5, {
              value: E,
              children: (0, i.jsx)(_.Y, {
                  targetElementRef: D,
                  preload: async () => {
                      null != t && (await (0, S.a)(s, t));
                  },
                  renderPopout: (e) => (0, i.jsx)(k, { guildId: s, channelId: n, roleId: t, popoutProps: e }),
                  position: "right",
                  children: y,
              }),
          });
}
