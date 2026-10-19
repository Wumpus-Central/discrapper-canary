n.d(l, { A: () => F, Y: () => O });
var t = n(477900),
    s = n(582128),
    i = n(435558),
    a = n.n(i),
    r = n(317097),
    u = n(17928),
    o = n(473193),
    c = n(364522),
    d = n(545442),
    m = n(265872),
    x = n(442433),
    h = n(589158),
    f = n(964486),
    p = n(775602),
    j = n(793574),
    A = n(688810),
    g = n(282006),
    N = n(485947),
    v = n(386784),
    I = n(545868),
    S = n(332173),
    T = n(176201),
    C = n(676608),
    b = n(342296),
    y = n(260509),
    E = n(734057),
    M = n(696451),
    R = n(317525),
    G = n(71393),
    _ = n(287809),
    U = n(427262),
    k = n(105292),
    w = n(165648),
    D = n(778724);
function P(e) {
    let { member: l, guildId: i, channelId: a, role: r } = e,
        o = s.useRef(null),
        c = (0, u.bG)([G.A], () => G.A.getGuild(i)?.ownerId, [i]),
        d = (0, u.bG)([_.default], () => _.default.getUser(l.userId), [l.userId]),
        m = (0, u.bG)([E.A], () => E.A.getChannel(a), [a]);
    return null == d || null == m
        ? null
        : (0, t.jsx)(
              b.A,
              {
                  targetElementRef: o,
                  userId: l.userId,
                  guildId: i,
                  channelId: a,
                  roleId: r.id,
                  spacing: 14,
                  children: (e, s) => {
                      let { isShown: a } = s;
                      return (0, t.jsx)(
                          h.A,
                          {
                              ref: o,
                              selected: a,
                              colorString: l.colorString,
                              colorStrings: l.colorStrings,
                              colorRoleName: r.name,
                              user: d,
                              isOwner: l.userId === c,
                              nick: l.nick,
                              premiumSince: null == l.premiumSince ? null : new Date(l.premiumSince),
                              channel: m,
                              guildId: i,
                              onContextMenu: (e) => {
                                  (0, x.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("339715"),
                                          n.e("147119"),
                                          n.e("403382"),
                                          n.e("606803"),
                                          n.e("896691"),
                                          n.e("779367"),
                                          n.e("992956"),
                                          n.e("7452"),
                                          n.e("60002"),
                                          n.e("189423"),
                                          n.e("622936"),
                                          n.e("216947"),
                                          n.e("463317"),
                                          n.e("326692"),
                                          n.e("834552"),
                                          n.e("993103"),
                                          n.e("708757"),
                                          n.e("893190"),
                                          n.e("585968"),
                                          n.e("695445"),
                                          n.e("828111"),
                                          n.e("890027"),
                                          n.e("28102"),
                                          n.e("189673"),
                                          n.e("21921"),
                                          n.e("882073"),
                                          n.e("797558"),
                                          n.e("638221"),
                                          n.e("571210"),
                                          n.e("676418"),
                                          n.e("691994"),
                                          n.e("592028"),
                                          n.e("229787"),
                                          n.e("425906"),
                                          n.e("123216"),
                                          n.e("936320"),
                                          n.e("166495"),
                                          n.e("576665"),
                                          n.e("88342"),
                                          n.e("147786"),
                                          n.e("482861"),
                                          n.e("311802"),
                                          n.e("698965"),
                                          n.e("538887"),
                                          n.e("682337"),
                                          n.e("96588"),
                                          n.e("454625"),
                                          n.e("332470"),
                                          n.e("235313"),
                                          n.e("843719"),
                                          n.e("371133"),
                                          n.e("41991"),
                                          n.e("624198"),
                                          n.e("959669"),
                                          n.e("715038"),
                                          n.e("436564"),
                                          n.e("245996"),
                                          n.e("252229"),
                                          n.e("680986"),
                                          n.e("939171"),
                                          n.e("700792"),
                                          n.e("592822"),
                                          n.e("529422"),
                                          n.e("823427"),
                                          n.e("190889"),
                                          n.e("242204"),
                                          n.e("856753"),
                                          n.e("61129"),
                                          n.e("307059"),
                                          n.e("205941"),
                                          n.e("309291"),
                                          n.e("331203"),
                                          n.e("449145"),
                                          n.e("255302"),
                                          n.e("649520"),
                                          n.e("493014"),
                                          n.e("349644"),
                                          n.e("825486"),
                                          n.e("522261"),
                                          n.e("873786"),
                                          n.e("343116"),
                                          n.e("678195"),
                                          n.e("951811"),
                                          n.e("711617"),
                                          n.e("470314"),
                                          n.e("70515"),
                                          n.e("287988"),
                                          n.e("404524"),
                                          n.e("654148"),
                                          n.e("774021"),
                                          n.e("666939"),
                                          n.e("869853"),
                                          n.e("830221"),
                                          n.e("324240"),
                                          n.e("717334"),
                                          n.e("304866"),
                                          n.e("184841"),
                                          n.e("105539"),
                                      ]).then(n.bind(n, 107632));
                                      return (l) =>
                                          (0, t.jsx)(e, { ...l, user: d, guildId: i, channel: m, showMediaItems: !0 });
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
function O(e) {
    let { popoutProps: l, roleId: n, guildId: i, channelId: r } = e,
        d = s.useRef(null);
    ((0, f.Ay)(() => {
        l.setPopoutRef?.(d.current);
    }),
        (0, f.l0)(() => {
            l.setPopoutRef?.(null);
        }));
    let m = (0, v.A)(i),
        x = (0, u.bG)(
            [G.A],
            () => {
                let e = G.A.getGuild(i);
                return null == e ? null : (0, y.af)(e);
            },
            [i],
        ),
        h = (0, u.yK)(
            [M.Ay, _.default],
            () => {
                let e = M.Ay.getMembers(i),
                    l = null == n || n === x ? e : e.filter((e) => e.roles.includes(n));
                return a()(l)
                    .filter((e) => null != _.default.getUser(e.userId))
                    .sortBy((e) => e.nick ?? U.Ay.getName(_.default.getUser(e.userId)))
                    .value();
            },
            [i, n, x],
        ),
        p = (0, u.bG)(
            [R.A],
            () => {
                let e = n ?? x;
                return null == e ? null : R.A.getRole(i, e);
            },
            [i, n, x],
        ),
        j = null == n ? null : m?.[n],
        A = s.useMemo(
            () =>
                null != p
                    ? h.map((e) => (0, t.jsx)(P, { member: e, guildId: i, channelId: r, role: p }, e.userId))
                    : [],
            [r, i, p, h],
        );
    return null == p
        ? null
        : (0, t.jsx)(o.C.Provider, {
              value: void 0,
              children: (0, t.jsx)("div", {
                  className: w.qm,
                  ref: d,
                  ...l,
                  children: (0, t.jsxs)(c.Ip, {
                      className: w.bY,
                      children: [
                          (0, t.jsx)(g.Y, { id: n, guildId: i, title: p.name, count: j, className: w.sd }),
                          A,
                          null == j || j <= A.length
                              ? null
                              : (0, t.jsx)(N.A, {
                                    className: w.sd,
                                    children: k.intl.formatToPlainString(k.t["9oMmZC"], { count: j - A.length }),
                                }),
                      ],
                  }),
              }),
          });
}
function F(e) {
    let { roleId: l, channelId: n, roleName: i, guildId: a, children: o, inlinePreview: c = !1 } = e,
        { analyticsLocations: x } = (0, A.Ay)(j.A.ROLE_MENTION),
        h = (0, u.bG)([p.Ay], () => p.Ay.roleStyle),
        f = (0, u.bG)([R.A], () => (null == a || null == l ? null : R.A.getRole(a, l))),
        g = (0, C.jV)(a, f),
        N = !c && null != f && !(0, T.Qv)(f),
        v = N && "dot" === h,
        b = N && "username" === h,
        y = g && null != f ? f.colorStrings : null,
        E = s.useRef(null);
    function M(e) {
        return (0, t.jsxs)(S.A, {
            ref: E,
            className: w.Dz,
            color: b ? f.color : null,
            roleColors: b ? y : null,
            ...e,
            children: [
                v &&
                    null != f.color &&
                    (0, t.jsx)(d.W, {
                        color: (0, r.Hl)(f.color),
                        colors: y,
                        className: D.m,
                        background: !1,
                        tooltip: !1,
                    }),
                o,
            ],
        });
    }
    return c || null == n || null == a || (null == l && "@everyone" !== i)
        ? (0, t.jsx)(A.f5, { value: x, children: M() })
        : (0, t.jsx)(A.f5, {
              value: x,
              children: (0, t.jsx)(m.Y, {
                  targetElementRef: E,
                  preload: async () => {
                      null != l && (await (0, I.a)(a, l));
                  },
                  renderPopout: (e) => (0, t.jsx)(O, { guildId: a, channelId: n, roleId: l, popoutProps: e }),
                  position: "right",
                  children: M,
              }),
          });
}
