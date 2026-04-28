"use strict";
n.d(t, { A: () => V });
var l = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(317097),
    o = n(17928),
    c = n(473193),
    u = n(364522),
    d = n(545442),
    h = n(922016),
    m = n(442433),
    p = n(110574),
    f = n(964486),
    g = n(775602),
    x = n(793574),
    C = n(688810),
    A = n(458990),
    E = n(485947),
    I = n(386784),
    y = n(545868),
    v = n(332173),
    S = n(176201),
    N = n(676608),
    j = n(342296),
    _ = n(260509),
    T = n(734057),
    b = n(696451),
    R = n(317525),
    O = n(71393),
    L = n(287809),
    w = n(427262),
    M = n(985018),
    k = n(992595),
    P = n(204865);
function D(e) {
    let { member: t, guildId: s, channelId: a, role: r } = e,
        c = i.useRef(null),
        u = (0, o.bG)([O.A], () => O.A.getGuild(s)?.ownerId, [s]),
        d = (0, o.bG)([L.default], () => L.default.getUser(t.userId), [t.userId]),
        h = (0, o.bG)([T.A], () => T.A.getChannel(a), [a]);
    return null == d || null == h
        ? null
        : (0, l.jsx)(
              j.A,
              {
                  targetElementRef: c,
                  userId: t.userId,
                  guildId: s,
                  channelId: a,
                  roleId: r.id,
                  spacing: 14,
                  children: (e, i) => {
                      let { isShown: a } = i;
                      return (0, l.jsx)(
                          p.A,
                          {
                              ref: c,
                              selected: a,
                              colorString: t.colorString,
                              colorStrings: t.colorStrings,
                              colorRoleName: r.name,
                              user: d,
                              isOwner: t.userId === u,
                              nick: t.nick,
                              premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                              channel: h,
                              guildId: s,
                              onContextMenu: (e) => {
                                  (0, m.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("92652"),
                                          n.e("63397"),
                                          n.e("32101"),
                                          n.e("6287"),
                                          n.e("39431"),
                                          n.e("62731"),
                                          n.e("22011"),
                                          n.e("26132"),
                                          n.e("46652"),
                                          n.e("93190"),
                                          n.e("34552"),
                                          n.e("55411"),
                                          n.e("93103"),
                                          n.e("13708"),
                                          n.e("8757"),
                                          n.e("89673"),
                                          n.e("91007"),
                                          n.e("68403"),
                                          n.e("85968"),
                                          n.e("76418"),
                                          n.e("60195"),
                                          n.e("21921"),
                                          n.e("88342"),
                                          n.e("66495"),
                                          n.e("29787"),
                                          n.e("97558"),
                                          n.e("94000"),
                                          n.e("82263"),
                                          n.e("42451"),
                                          n.e("30221"),
                                          n.e("54975"),
                                          n.e("91994"),
                                          n.e("98965"),
                                          n.e("35027"),
                                          n.e("76665"),
                                          n.e("49697"),
                                          n.e("77265"),
                                          n.e("71133"),
                                          n.e("35313"),
                                          n.e("24198"),
                                          n.e("39171"),
                                          n.e("36564"),
                                          n.e("792"),
                                          n.e("45996"),
                                          n.e("61268"),
                                          n.e("92822"),
                                          n.e("52229"),
                                          n.e("19871"),
                                          n.e("24170"),
                                          n.e("14461"),
                                          n.e("25486"),
                                          n.e("23427"),
                                          n.e("49145"),
                                          n.e("29422"),
                                          n.e("9291"),
                                          n.e("28152"),
                                          n.e("94503"),
                                          n.e("49644"),
                                          n.e("7059"),
                                          n.e("49520"),
                                          n.e("65826"),
                                          n.e("42204"),
                                          n.e("96553"),
                                          n.e("78195"),
                                          n.e("24240"),
                                          n.e("22261"),
                                          n.e("43116"),
                                          n.e("66783"),
                                          n.e("74021"),
                                          n.e("11617"),
                                          n.e("70314"),
                                          n.e("70515"),
                                          n.e("27435"),
                                          n.e("66939"),
                                          n.e("20134"),
                                          n.e("17334"),
                                          n.e("1864"),
                                          n.e("84841"),
                                      ]).then(n.bind(n, 107632));
                                      return (t) =>
                                          (0, l.jsx)(e, { ...t, user: d, guildId: s, channel: h, showMediaItems: !0 });
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
function U(e) {
    let { popoutProps: t, roleId: n, guildId: s, channelId: r } = e,
        d = i.useRef(null);
    (0, f.Ay)(() => {
        t.setPopoutRef?.(d.current);
    }),
        (0, f.l0)(() => {
            t.setPopoutRef?.(null);
        });
    let h = (0, I.A)(s),
        m = (0, o.bG)([O.A], () => {
            let e = O.A.getGuild(s);
            return null == e ? null : (0, _.af)(e);
        }, [s]),
        p = (0, o.yK)([b.Ay, L.default], () => {
            let e = b.Ay.getMembers(s),
                t = null == n || n === m ? e : e.filter((e) => e.roles.includes(n));
            return a()(t)
                .filter((e) => null != L.default.getUser(e.userId))
                .sortBy((e) => e.nick ?? w.Ay.getName(L.default.getUser(e.userId)))
                .value();
        }, [s, n, m]),
        g = (0, o.bG)([R.A], () => {
            let e = n ?? m;
            return null == e ? null : R.A.getRole(s, e);
        }, [s, n, m]),
        x = null == n ? null : h?.[n],
        C = i.useMemo(
            () =>
                null != g
                    ? p.map((e) => (0, l.jsx)(D, { member: e, guildId: s, channelId: r, role: g }, e.userId))
                    : [],
            [r, s, g, p],
        );
    return null == g
        ? null
        : (0, l.jsx)(c.C.Provider, {
              value: void 0,
              children: (0, l.jsx)("div", {
                  className: k.qm,
                  ref: d,
                  ...t,
                  children: (0, l.jsxs)(u.Ip, {
                      className: k.bY,
                      children: [
                          (0, l.jsx)(A.Y, { id: n, guildId: s, title: g.name, count: x, className: k.sd }),
                          C,
                          null == x || x <= C.length
                              ? null
                              : (0, l.jsx)(E.A, {
                                    className: k.sd,
                                    children: M.intl.formatToPlainString(M.t["9oMmZC"], { count: x - C.length }),
                                }),
                      ],
                  }),
              }),
          });
}
function V(e) {
    let { roleId: t, channelId: n, roleName: s, guildId: a, children: c, inlinePreview: u = !1 } = e,
        { analyticsLocations: m } = (0, C.Ay)(x.A.ROLE_MENTION),
        p = (0, o.bG)([g.A], () => g.A.roleStyle),
        f = (0, o.bG)([R.A], () => (null == a || null == t ? null : R.A.getRole(a, t))),
        A = (0, N.jV)(a, f),
        E = !u && null != f && !(0, S.Qv)(f),
        I = E && "dot" === p,
        j = E && "username" === p,
        _ = A && null != f ? f.colorStrings : null,
        T = i.useRef(null),
        b = (e) =>
            (0, l.jsxs)(v.A, {
                ref: T,
                className: k.Dz,
                color: j ? f.color : null,
                roleColors: j ? _ : null,
                ...e,
                children: [
                    I &&
                        null != f.color &&
                        (0, l.jsx)(d.W, {
                            color: (0, r.Hl)(f.color),
                            colors: _,
                            className: P.m,
                            background: !1,
                            tooltip: !1,
                        }),
                    c,
                ],
            });
    return u || null == n || null == a || (null == t && "@everyone" !== s)
        ? (0, l.jsx)(C.f5, { value: m, children: b() })
        : (0, l.jsx)(C.f5, {
              value: m,
              children: (0, l.jsx)(h.Y, {
                  targetElementRef: T,
                  preload: async () => {
                      null != t && (await (0, y.a)(a, t));
                  },
                  renderPopout: (e) => (0, l.jsx)(U, { guildId: a, channelId: n, roleId: t, popoutProps: e }),
                  position: "right",
                  children: b,
              }),
          });
}
