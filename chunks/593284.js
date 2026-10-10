n.d(t, { A: () => w, Y: () => U });
var l = n(477900),
    s = n(582128),
    i = n(435558),
    a = n.n(i),
    r = n(317097),
    o = n(17928),
    u = n(473193),
    c = n(364522),
    d = n(545442),
    m = n(922016),
    x = n(442433),
    h = n(589158),
    j = n(964486),
    p = n(775602),
    g = n(793574),
    f = n(688810),
    N = n(282006),
    I = n(485947),
    A = n(386784),
    v = n(545868),
    b = n(332173),
    S = n(176201),
    E = n(676608),
    C = n(342296),
    T = n(260509),
    y = n(734057),
    O = n(696451),
    k = n(317525),
    G = n(71393),
    _ = n(287809),
    R = n(427262),
    P = n(660183),
    M = n(165648),
    L = n(778724);
function D(e) {
    let { member: t, guildId: i, channelId: a, role: r } = e,
        u = s.useRef(null),
        c = (0, o.bG)([G.A], () => G.A.getGuild(i)?.ownerId, [i]),
        d = (0, o.bG)([_.default], () => _.default.getUser(t.userId), [t.userId]),
        m = (0, o.bG)([y.A], () => y.A.getChannel(a), [a]);
    return null == d || null == m
        ? null
        : (0, l.jsx)(
              C.A,
              {
                  targetElementRef: u,
                  userId: t.userId,
                  guildId: i,
                  channelId: a,
                  roleId: r.id,
                  spacing: 14,
                  children: (e, s) => {
                      let { isShown: a } = s;
                      return (0, l.jsx)(
                          h.A,
                          {
                              ref: u,
                              selected: a,
                              colorString: t.colorString,
                              colorStrings: t.colorStrings,
                              colorRoleName: r.name,
                              user: d,
                              isOwner: t.userId === c,
                              nick: t.nick,
                              premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                              channel: m,
                              guildId: i,
                              onContextMenu: (e) => {
                                  (0, x.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("339715"),
                                          n.e("147119"),
                                          n.e("403382"),
                                          n.e("819113"),
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
                                          n.e("189673"),
                                          n.e("21921"),
                                          n.e("695445"),
                                          n.e("28102"),
                                          n.e("890027"),
                                          n.e("536200"),
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
                                          n.e("428296"),
                                          n.e("936320"),
                                          n.e("166495"),
                                          n.e("576665"),
                                          n.e("88342"),
                                          n.e("147786"),
                                          n.e("482861"),
                                          n.e("311802"),
                                          n.e("698965"),
                                          n.e("682337"),
                                          n.e("538887"),
                                          n.e("454625"),
                                          n.e("235313"),
                                          n.e("843719"),
                                          n.e("332470"),
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
                                          n.e("983525"),
                                          n.e("307059"),
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
                                          n.e("404524"),
                                          n.e("713708"),
                                          n.e("654148"),
                                          n.e("736674"),
                                          n.e("774021"),
                                          n.e("666939"),
                                          n.e("931319"),
                                          n.e("830221"),
                                          n.e("324240"),
                                          n.e("717334"),
                                          n.e("304866"),
                                          n.e("184841"),
                                          n.e("105539"),
                                      ]).then(n.bind(n, 107632));
                                      return (t) =>
                                          (0, l.jsx)(e, { ...t, user: d, guildId: i, channel: m, showMediaItems: !0 });
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
    let { popoutProps: t, roleId: n, guildId: i, channelId: r } = e,
        d = s.useRef(null);
    ((0, j.Ay)(() => {
        t.setPopoutRef?.(d.current);
    }),
        (0, j.l0)(() => {
            t.setPopoutRef?.(null);
        }));
    let m = (0, A.A)(i),
        x = (0, o.bG)(
            [G.A],
            () => {
                let e = G.A.getGuild(i);
                return null == e ? null : (0, T.af)(e);
            },
            [i],
        ),
        h = (0, o.yK)(
            [O.Ay, _.default],
            () => {
                let e = O.Ay.getMembers(i),
                    t = null == n || n === x ? e : e.filter((e) => e.roles.includes(n));
                return a()(t)
                    .filter((e) => null != _.default.getUser(e.userId))
                    .sortBy((e) => e.nick ?? R.Ay.getName(_.default.getUser(e.userId)))
                    .value();
            },
            [i, n, x],
        ),
        p = (0, o.bG)(
            [k.A],
            () => {
                let e = n ?? x;
                return null == e ? null : k.A.getRole(i, e);
            },
            [i, n, x],
        ),
        g = null == n ? null : m?.[n],
        f = s.useMemo(
            () =>
                null != p
                    ? h.map((e) => (0, l.jsx)(D, { member: e, guildId: i, channelId: r, role: p }, e.userId))
                    : [],
            [r, i, p, h],
        );
    return null == p
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
                          (0, l.jsx)(N.Y, { id: n, guildId: i, title: p.name, count: g, className: M.sd }),
                          f,
                          null == g || g <= f.length
                              ? null
                              : (0, l.jsx)(I.A, {
                                    className: M.sd,
                                    children: P.intl.formatToPlainString(P.t["9oMmZC"], { count: g - f.length }),
                                }),
                      ],
                  }),
              }),
          });
}
function w(e) {
    let { roleId: t, channelId: n, roleName: i, guildId: a, children: u, inlinePreview: c = !1 } = e,
        { analyticsLocations: x } = (0, f.Ay)(g.A.ROLE_MENTION),
        h = (0, o.bG)([p.Ay], () => p.Ay.roleStyle),
        j = (0, o.bG)([k.A], () => (null == a || null == t ? null : k.A.getRole(a, t))),
        N = (0, E.jV)(a, j),
        I = !c && null != j && !(0, S.Qv)(j),
        A = I && "dot" === h,
        C = I && "username" === h,
        T = N && null != j ? j.colorStrings : null,
        y = s.useRef(null);
    function O(e) {
        return (0, l.jsxs)(b.A, {
            ref: y,
            className: M.Dz,
            color: C ? j.color : null,
            roleColors: C ? T : null,
            ...e,
            children: [
                A &&
                    null != j.color &&
                    (0, l.jsx)(d.W, {
                        color: (0, r.Hl)(j.color),
                        colors: T,
                        className: L.m,
                        background: !1,
                        tooltip: !1,
                    }),
                u,
            ],
        });
    }
    return c || null == n || null == a || (null == t && "@everyone" !== i)
        ? (0, l.jsx)(f.f5, { value: x, children: O() })
        : (0, l.jsx)(f.f5, {
              value: x,
              children: (0, l.jsx)(m.Y, {
                  targetElementRef: y,
                  preload: async () => {
                      null != t && (await (0, v.a)(a, t));
                  },
                  renderPopout: (e) => (0, l.jsx)(U, { guildId: a, channelId: n, roleId: t, popoutProps: e }),
                  position: "right",
                  children: O,
              }),
          });
}
