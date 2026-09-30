n.d(t, { A: () => V, Y: () => U });
var l = n(477900),
    i = n(582128),
    s = n(435558),
    r = n.n(s),
    a = n(317097),
    o = n(17928),
    u = n(473193),
    c = n(364522),
    d = n(545442),
    m = n(922016),
    h = n(442433),
    p = n(589158),
    f = n(964486),
    g = n(775602),
    x = n(793574),
    A = n(688810),
    C = n(722245),
    E = n(485947),
    I = n(386784),
    y = n(545868),
    S = n(332173),
    v = n(176201),
    N = n(676608),
    _ = n(342296),
    j = n(260509),
    b = n(734057),
    T = n(696451),
    R = n(317525),
    O = n(71393),
    L = n(287809),
    M = n(427262),
    k = n(375708),
    w = n(165648),
    P = n(778724);
function D(e) {
    let { member: t, guildId: s, channelId: r, role: a } = e,
        u = i.useRef(null),
        c = (0, o.bG)([O.A], () => O.A.getGuild(s)?.ownerId, [s]),
        d = (0, o.bG)([L.default], () => L.default.getUser(t.userId), [t.userId]),
        m = (0, o.bG)([b.A], () => b.A.getChannel(r), [r]);
    return null == d || null == m
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
                          p.A,
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
                              channel: m,
                              guildId: s,
                              onContextMenu: (e) => {
                                  (0, h.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("403382"),
                                          n.e("597981"),
                                          n.e("622936"),
                                          n.e("216947"),
                                          n.e("463317"),
                                          n.e("326692"),
                                          n.e("834552"),
                                          n.e("708757"),
                                          n.e("993103"),
                                          n.e("585968"),
                                          n.e("893190"),
                                          n.e("21921"),
                                          n.e("676418"),
                                          n.e("571210"),
                                          n.e("166495"),
                                          n.e("88342"),
                                          n.e("189673"),
                                          n.e("311802"),
                                          n.e("869853"),
                                          n.e("229787"),
                                          n.e("698965"),
                                          n.e("882073"),
                                          n.e("797558"),
                                          n.e("682337"),
                                          n.e("691994"),
                                          n.e("371133"),
                                          n.e("454625"),
                                          n.e("538887"),
                                          n.e("235313"),
                                          n.e("576665"),
                                          n.e("436564"),
                                          n.e("939171"),
                                          n.e("624198"),
                                          n.e("252229"),
                                          n.e("856753"),
                                          n.e("245996"),
                                          n.e("700792"),
                                          n.e("592822"),
                                          n.e("214461"),
                                          n.e("449145"),
                                          n.e("529422"),
                                          n.e("823427"),
                                          n.e("349644"),
                                          n.e("365826"),
                                          n.e("649520"),
                                          n.e("493014"),
                                          n.e("309291"),
                                          n.e("242204"),
                                          n.e("825486"),
                                          n.e("307059"),
                                          n.e("522261"),
                                          n.e("678195"),
                                          n.e("713708"),
                                          n.e("343116"),
                                          n.e("139103"),
                                          n.e("470314"),
                                          n.e("774021"),
                                          n.e("70515"),
                                          n.e("404524"),
                                          n.e("654148"),
                                          n.e("830221"),
                                          n.e("666939"),
                                          n.e("324240"),
                                          n.e("221879"),
                                          n.e("717334"),
                                          n.e("184841"),
                                      ]).then(n.bind(n, 107632));
                                      return (t) =>
                                          (0, l.jsx)(e, { ...t, user: d, guildId: s, channel: m, showMediaItems: !0 });
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
    ((0, f.Ay)(() => {
        t.setPopoutRef?.(d.current);
    }),
        (0, f.l0)(() => {
            t.setPopoutRef?.(null);
        }));
    let m = (0, I.A)(s),
        h = (0, o.bG)(
            [O.A],
            () => {
                let e = O.A.getGuild(s);
                return null == e ? null : (0, j.af)(e);
            },
            [s],
        ),
        p = (0, o.yK)(
            [T.Ay, L.default],
            () => {
                let e = T.Ay.getMembers(s),
                    t = null == n || n === h ? e : e.filter((e) => e.roles.includes(n));
                return r()(t)
                    .filter((e) => null != L.default.getUser(e.userId))
                    .sortBy((e) => e.nick ?? M.Ay.getName(L.default.getUser(e.userId)))
                    .value();
            },
            [s, n, h],
        ),
        g = (0, o.bG)(
            [R.A],
            () => {
                let e = n ?? h;
                return null == e ? null : R.A.getRole(s, e);
            },
            [s, n, h],
        ),
        x = null == n ? null : m?.[n],
        A = i.useMemo(
            () =>
                null != g
                    ? p.map((e) => (0, l.jsx)(D, { member: e, guildId: s, channelId: a, role: g }, e.userId))
                    : [],
            [a, s, g, p],
        );
    return null == g
        ? null
        : (0, l.jsx)(u.C.Provider, {
              value: void 0,
              children: (0, l.jsx)("div", {
                  className: w.qm,
                  ref: d,
                  ...t,
                  children: (0, l.jsxs)(c.Ip, {
                      className: w.bY,
                      children: [
                          (0, l.jsx)(C.Y, { id: n, guildId: s, title: g.name, count: x, className: w.sd }),
                          A,
                          null == x || x <= A.length
                              ? null
                              : (0, l.jsx)(E.A, {
                                    className: w.sd,
                                    children: k.intl.formatToPlainString(k.t["9oMmZC"], { count: x - A.length }),
                                }),
                      ],
                  }),
              }),
          });
}
function V(e) {
    let { roleId: t, channelId: n, roleName: s, guildId: r, children: u, inlinePreview: c = !1 } = e,
        { analyticsLocations: h } = (0, A.Ay)(x.A.ROLE_MENTION),
        p = (0, o.bG)([g.Ay], () => g.Ay.roleStyle),
        f = (0, o.bG)([R.A], () => (null == r || null == t ? null : R.A.getRole(r, t))),
        C = (0, N.jV)(r, f),
        E = !c && null != f && !(0, v.Qv)(f),
        I = E && "dot" === p,
        _ = E && "username" === p,
        j = C && null != f ? f.colorStrings : null,
        b = i.useRef(null);
    function T(e) {
        return (0, l.jsxs)(S.A, {
            ref: b,
            className: w.Dz,
            color: _ ? f.color : null,
            roleColors: _ ? j : null,
            ...e,
            children: [
                I &&
                    null != f.color &&
                    (0, l.jsx)(d.W, {
                        color: (0, a.Hl)(f.color),
                        colors: j,
                        className: P.m,
                        background: !1,
                        tooltip: !1,
                    }),
                u,
            ],
        });
    }
    return c || null == n || null == r || (null == t && "@everyone" !== s)
        ? (0, l.jsx)(A.f5, { value: h, children: T() })
        : (0, l.jsx)(A.f5, {
              value: h,
              children: (0, l.jsx)(m.Y, {
                  targetElementRef: b,
                  preload: async () => {
                      null != t && (await (0, y.a)(r, t));
                  },
                  renderPopout: (e) => (0, l.jsx)(U, { guildId: r, channelId: n, roleId: t, popoutProps: e }),
                  position: "right",
                  children: T,
              }),
          });
}
