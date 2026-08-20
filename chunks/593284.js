"use strict";
n.d(t, { A: () => G, Y: () => U });
var l = n(477900),
    i = n(582128),
    s = n(435558),
    r = n.n(s),
    a = n(317097),
    o = n(17928),
    u = n(473193),
    c = n(364522),
    d = n(545442),
    h = n(922016),
    m = n(442433),
    f = n(589158),
    p = n(964486),
    g = n(775602),
    x = n(793574),
    A = n(688810),
    C = n(946228),
    E = n(485947),
    I = n(386784),
    y = n(545868),
    v = n(332173),
    S = n(176201),
    N = n(676608),
    _ = n(342296),
    T = n(260509),
    j = n(734057),
    b = n(696451),
    R = n(317525),
    O = n(71393),
    M = n(287809),
    L = n(427262),
    w = n(375708),
    k = n(165648),
    P = n(778724);
function D(e) {
    let { member: t, guildId: s, channelId: r, role: a } = e,
        u = i.useRef(null),
        c = (0, o.bG)([O.A], () => O.A.getGuild(s)?.ownerId, [s]),
        d = (0, o.bG)([M.default], () => M.default.getUser(t.userId), [t.userId]),
        h = (0, o.bG)([j.A], () => j.A.getChannel(r), [r]);
    return null == d || null == h
        ? null
        : (0, l.jsx)(
              _.A,
              {
                  targetElementRef: u,
                  userId: t.userId,
                  guildId: s,
                  channelId: r,
                  roleId: a.id,
                  spacing: 14,
                  children: (e, i) => {
                      let { isShown: r } = i;
                      return (0, l.jsx)(
                          f.A,
                          {
                              ref: u,
                              selected: r,
                              colorString: t.colorString,
                              colorStrings: t.colorStrings,
                              colorRoleName: a.name,
                              user: d,
                              isOwner: t.userId === c,
                              nick: t.nick,
                              premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                              channel: h,
                              guildId: s,
                              onContextMenu: (e) => {
                                  (0, m.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("59766"),
                                          n.e("207322"),
                                          n.e("622936"),
                                          n.e("216947"),
                                          n.e("866038"),
                                          n.e("326692"),
                                          n.e("926132"),
                                          n.e("146652"),
                                          n.e("993103"),
                                          n.e("834552"),
                                          n.e("893190"),
                                          n.e("21921"),
                                          n.e("708757"),
                                          n.e("571210"),
                                          n.e("468403"),
                                          n.e("676418"),
                                          n.e("585968"),
                                          n.e("189673"),
                                          n.e("166495"),
                                          n.e("88342"),
                                          n.e("229787"),
                                          n.e("311802"),
                                          n.e("698965"),
                                          n.e("882073"),
                                          n.e("797558"),
                                          n.e("934771"),
                                          n.e("454625"),
                                          n.e("691994"),
                                          n.e("371133"),
                                          n.e("576665"),
                                          n.e("235313"),
                                          n.e("538887"),
                                          n.e("939171"),
                                          n.e("436564"),
                                          n.e("624198"),
                                          n.e("252229"),
                                          n.e("856753"),
                                          n.e("245996"),
                                          n.e("700792"),
                                          n.e("592822"),
                                          n.e("823427"),
                                          n.e("449145"),
                                          n.e("214461"),
                                          n.e("529422"),
                                          n.e("309291"),
                                          n.e("365826"),
                                          n.e("649520"),
                                          n.e("493014"),
                                          n.e("825486"),
                                          n.e("307059"),
                                          n.e("242204"),
                                          n.e("349644"),
                                          n.e("678195"),
                                          n.e("522261"),
                                          n.e("343116"),
                                          n.e("713708"),
                                          n.e("139103"),
                                          n.e("470314"),
                                          n.e("774021"),
                                          n.e("70515"),
                                          n.e("404524"),
                                          n.e("654148"),
                                          n.e("666939"),
                                          n.e("830221"),
                                          n.e("324240"),
                                          n.e("221879"),
                                          n.e("717334"),
                                          n.e("184841"),
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
    let { popoutProps: t, roleId: n, guildId: s, channelId: a } = e,
        d = i.useRef(null);
    (0, p.Ay)(() => {
        t.setPopoutRef?.(d.current);
    }),
        (0, p.l0)(() => {
            t.setPopoutRef?.(null);
        });
    let h = (0, I.A)(s),
        m = (0, o.bG)([O.A], () => {
            let e = O.A.getGuild(s);
            return null == e ? null : (0, T.af)(e);
        }, [s]),
        f = (0, o.yK)([b.Ay, M.default], () => {
            let e = b.Ay.getMembers(s),
                t = null == n || n === m ? e : e.filter((e) => e.roles.includes(n));
            return r()(t)
                .filter((e) => null != M.default.getUser(e.userId))
                .sortBy((e) => e.nick ?? L.Ay.getName(M.default.getUser(e.userId)))
                .value();
        }, [s, n, m]),
        g = (0, o.bG)([R.A], () => {
            let e = n ?? m;
            return null == e ? null : R.A.getRole(s, e);
        }, [s, n, m]),
        x = null == n ? null : h?.[n],
        A = i.useMemo(
            () =>
                null != g
                    ? f.map((e) => (0, l.jsx)(D, { member: e, guildId: s, channelId: a, role: g }, e.userId))
                    : [],
            [a, s, g, f],
        );
    return null == g
        ? null
        : (0, l.jsx)(u.C.Provider, {
              value: void 0,
              children: (0, l.jsx)("div", {
                  className: k.qm,
                  ref: d,
                  ...t,
                  children: (0, l.jsxs)(c.Ip, {
                      className: k.bY,
                      children: [
                          (0, l.jsx)(C.Y, { id: n, guildId: s, title: g.name, count: x, className: k.sd }),
                          A,
                          null == x || x <= A.length
                              ? null
                              : (0, l.jsx)(E.A, {
                                    className: k.sd,
                                    children: w.intl.formatToPlainString(w.t["9oMmZC"], { count: x - A.length }),
                                }),
                      ],
                  }),
              }),
          });
}
function G(e) {
    let { roleId: t, channelId: n, roleName: s, guildId: r, children: u, inlinePreview: c = !1 } = e,
        { analyticsLocations: m } = (0, A.Ay)(x.A.ROLE_MENTION),
        f = (0, o.bG)([g.Ay], () => g.Ay.roleStyle),
        p = (0, o.bG)([R.A], () => (null == r || null == t ? null : R.A.getRole(r, t))),
        C = (0, N.jV)(r, p),
        E = !c && null != p && !(0, S.Qv)(p),
        I = E && "dot" === f,
        _ = E && "username" === f,
        T = C && null != p ? p.colorStrings : null,
        j = i.useRef(null);
    function b(e) {
        return (0, l.jsxs)(v.A, {
            ref: j,
            className: k.Dz,
            color: _ ? p.color : null,
            roleColors: _ ? T : null,
            ...e,
            children: [
                I &&
                    null != p.color &&
                    (0, l.jsx)(d.W, {
                        color: (0, a.Hl)(p.color),
                        colors: T,
                        className: P.m,
                        background: !1,
                        tooltip: !1,
                    }),
                u,
            ],
        });
    }
    return c || null == n || null == r || (null == t && "@everyone" !== s)
        ? (0, l.jsx)(A.f5, { value: m, children: b() })
        : (0, l.jsx)(A.f5, {
              value: m,
              children: (0, l.jsx)(h.Y, {
                  targetElementRef: j,
                  preload: async () => {
                      null != t && (await (0, y.a)(r, t));
                  },
                  renderPopout: (e) => (0, l.jsx)(U, { guildId: r, channelId: n, roleId: t, popoutProps: e }),
                  position: "right",
                  children: b,
              }),
          });
}
