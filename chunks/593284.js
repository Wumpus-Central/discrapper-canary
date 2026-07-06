"use strict";
n.d(t, { A: () => V, Y: () => G });
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
    h = n(442433),
    f = n(589158),
    E = n(964486),
    p = n(775602),
    m = n(793574),
    g = n(688810),
    A = n(946228),
    I = n(485947),
    T = n(386784),
    S = n(545868),
    N = n(332173),
    C = n(176201),
    y = n(676608),
    O = n(342296),
    R = n(260509),
    v = n(734057),
    b = n(696451),
    L = n(317525),
    D = n(71393),
    w = n(287809),
    P = n(427262),
    M = n(375708),
    x = n(992595),
    U = n(204865);
function k(e) {
    let { member: t, guildId: s, channelId: a, role: o } = e,
        u = r.useRef(null),
        c = (0, l.bG)([D.A], () => D.A.getGuild(s)?.ownerId, [s]),
        d = (0, l.bG)([w.default], () => w.default.getUser(t.userId), [t.userId]),
        _ = (0, l.bG)([v.A], () => v.A.getChannel(a), [a]);
    return null == d || null == _
        ? null
        : (0, i.jsx)(
              O.A,
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
                          f.A,
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
                                  (0, h.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("61312"),
                                          n.e("41831"),
                                          n.e("87761"),
                                          n.e("18078"),
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
                                          n.e("76665"),
                                          n.e("28662"),
                                          n.e("35313"),
                                          n.e("54625"),
                                          n.e("71133"),
                                          n.e("28152"),
                                          n.e("39171"),
                                          n.e("36564"),
                                          n.e("24198"),
                                          n.e("52229"),
                                          n.e("45996"),
                                          n.e("792"),
                                          n.e("92822"),
                                          n.e("23427"),
                                          n.e("49145"),
                                          n.e("29422"),
                                          n.e("61268"),
                                          n.e("9291"),
                                          n.e("65826"),
                                          n.e("49520"),
                                          n.e("7059"),
                                          n.e("56753"),
                                          n.e("14461"),
                                          n.e("25486"),
                                          n.e("22261"),
                                          n.e("49644"),
                                          n.e("43116"),
                                          n.e("39103"),
                                          n.e("78195"),
                                          n.e("70314"),
                                          n.e("70515"),
                                          n.e("4524"),
                                          n.e("42204"),
                                          n.e("54148"),
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
    (0, E.Ay)(() => {
        t.setPopoutRef?.(d.current);
    }),
        (0, E.l0)(() => {
            t.setPopoutRef?.(null);
        });
    let _ = (0, T.A)(s),
        h = (0, l.bG)([D.A], () => {
            let e = D.A.getGuild(s);
            return null == e ? null : (0, R.af)(e);
        }, [s]),
        f = (0, l.yK)([b.Ay, w.default], () => {
            let e = b.Ay.getMembers(s),
                t = null == n || n === h ? e : e.filter((e) => e.roles.includes(n));
            return a()(t)
                .filter((e) => null != w.default.getUser(e.userId))
                .sortBy((e) => e.nick ?? P.Ay.getName(w.default.getUser(e.userId)))
                .value();
        }, [s, n, h]),
        p = (0, l.bG)([L.A], () => {
            let e = n ?? h;
            return null == e ? null : L.A.getRole(s, e);
        }, [s, n, h]),
        m = null == n ? null : _?.[n],
        g = r.useMemo(
            () =>
                null != p
                    ? f.map((e) => (0, i.jsx)(k, { member: e, guildId: s, channelId: o, role: p }, e.userId))
                    : [],
            [o, s, p, f],
        );
    return null == p
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
                          (0, i.jsx)(A.Y, { id: n, guildId: s, title: p.name, count: m, className: x.sd }),
                          g,
                          null == m || m <= g.length
                              ? null
                              : (0, i.jsx)(I.A, {
                                    className: x.sd,
                                    children: M.intl.formatToPlainString(M.t["9oMmZC"], { count: m - g.length }),
                                }),
                      ],
                  }),
              }),
          });
}
function V(e) {
    let { roleId: t, channelId: n, roleName: s, guildId: a, children: u, inlinePreview: c = !1 } = e,
        { analyticsLocations: h } = (0, g.Ay)(m.A.ROLE_MENTION),
        f = (0, l.bG)([p.Ay], () => p.Ay.roleStyle),
        E = (0, l.bG)([L.A], () => (null == a || null == t ? null : L.A.getRole(a, t))),
        A = (0, y.jV)(a, E),
        I = !c && null != E && !(0, C.Qv)(E),
        T = I && "dot" === f,
        O = I && "username" === f,
        R = A && null != E ? E.colorStrings : null,
        v = r.useRef(null),
        b = (e) =>
            (0, i.jsxs)(N.A, {
                ref: v,
                className: x.Dz,
                color: O ? E.color : null,
                roleColors: O ? R : null,
                ...e,
                children: [
                    T &&
                        null != E.color &&
                        (0, i.jsx)(d.W, {
                            color: (0, o.Hl)(E.color),
                            colors: R,
                            className: U.m,
                            background: !1,
                            tooltip: !1,
                        }),
                    u,
                ],
            });
    return c || null == n || null == a || (null == t && "@everyone" !== s)
        ? (0, i.jsx)(g.f5, { value: h, children: b() })
        : (0, i.jsx)(g.f5, {
              value: h,
              children: (0, i.jsx)(_.Y, {
                  targetElementRef: v,
                  preload: async () => {
                      null != t && (await (0, S.a)(a, t));
                  },
                  renderPopout: (e) => (0, i.jsx)(G, { guildId: a, channelId: n, roleId: t, popoutProps: e }),
                  position: "right",
                  children: b,
              }),
          });
}
