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
    _ = n(793574),
    x = n(688810),
    C = n(458990),
    A = n(485947),
    E = n(386784),
    I = n(545868),
    v = n(332173),
    y = n(176201),
    b = n(676608),
    S = n(342296),
    N = n(260509),
    j = n(734057),
    T = n(696451),
    w = n(317525),
    R = n(71393),
    L = n(287809),
    k = n(427262),
    M = n(985018),
    O = n(992595),
    P = n(204865);
function D(e) {
    let { member: t, guildId: s, channelId: a, role: r } = e,
        c = i.useRef(null),
        u = (0, o.bG)([R.A], () => R.A.getGuild(s)?.ownerId, [s]),
        d = (0, o.bG)([L.default], () => L.default.getUser(t.userId), [t.userId]),
        h = (0, o.bG)([j.A], () => j.A.getChannel(a), [a]);
    return null == d || null == h
        ? null
        : (0, l.jsx)(
              S.A,
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
                                          n.e("62731"),
                                          n.e("97262"),
                                          n.e("93103"),
                                          n.e("88342"),
                                          n.e("35313"),
                                          n.e("24170"),
                                          n.e("84442"),
                                          n.e("24431"),
                                          n.e("78178"),
                                          n.e("92456"),
                                          n.e("78980"),
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
    let h = (0, E.A)(s),
        m = (0, o.bG)([R.A], () => {
            let e = R.A.getGuild(s);
            return null == e ? null : (0, N.af)(e);
        }, [s]),
        p = (0, o.yK)([T.Ay, L.default], () => {
            let e = T.Ay.getMembers(s),
                t = null == n || n === m ? e : e.filter((e) => e.roles.includes(n));
            return a()(t)
                .filter((e) => null != L.default.getUser(e.userId))
                .sortBy((e) => e.nick ?? k.Ay.getName(L.default.getUser(e.userId)))
                .value();
        }, [s, n, m]),
        g = (0, o.bG)([w.A], () => {
            let e = n ?? m;
            return null == e ? null : w.A.getRole(s, e);
        }, [s, n, m]),
        _ = null == n ? null : h?.[n],
        x = i.useMemo(
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
                  className: O.qm,
                  ref: d,
                  ...t,
                  children: (0, l.jsxs)(u.Ip, {
                      className: O.bY,
                      children: [
                          (0, l.jsx)(C.Y, { id: n, guildId: s, title: g.name, count: _, className: O.sd }),
                          x,
                          null == _ || _ <= x.length
                              ? null
                              : (0, l.jsx)(A.A, {
                                    className: O.sd,
                                    children: M.intl.formatToPlainString(M.t["9oMmZC"], { count: _ - x.length }),
                                }),
                      ],
                  }),
              }),
          });
}
function V(e) {
    let { roleId: t, channelId: n, roleName: s, guildId: a, children: c, inlinePreview: u = !1 } = e,
        { analyticsLocations: m } = (0, x.Ay)(_.A.ROLE_MENTION),
        p = (0, o.bG)([g.A], () => g.A.roleStyle),
        f = (0, o.bG)([w.A], () => (null == a || null == t ? null : w.A.getRole(a, t))),
        C = (0, b.jV)(a, f),
        A = !u && null != f && !(0, y.Qv)(f),
        E = A && "dot" === p,
        S = A && "username" === p,
        N = C && null != f ? f.colorStrings : null,
        j = i.useRef(null),
        T = (e) =>
            (0, l.jsxs)(v.A, {
                ref: j,
                className: O.Dz,
                color: S ? f.color : null,
                roleColors: S ? N : null,
                ...e,
                children: [
                    E &&
                        null != f.color &&
                        (0, l.jsx)(d.W, {
                            color: (0, r.Hl)(f.color),
                            colors: N,
                            className: P.m,
                            background: !1,
                            tooltip: !1,
                        }),
                    c,
                ],
            });
    return u || null == n || null == a || (null == t && "@everyone" !== s)
        ? (0, l.jsx)(x.f5, { value: m, children: T() })
        : (0, l.jsx)(x.f5, {
              value: m,
              children: (0, l.jsx)(h.Y, {
                  targetElementRef: j,
                  preload: async () => {
                      null != t && (await (0, I.a)(a, t));
                  },
                  renderPopout: (e) => (0, l.jsx)(U, { guildId: a, channelId: n, roleId: t, popoutProps: e }),
                  position: "right",
                  children: T,
              }),
          });
}
