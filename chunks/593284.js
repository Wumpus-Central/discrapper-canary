"use strict";
n.d(t, { A: () => V });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(317097),
    l = n(17928),
    d = n(473193),
    _ = n(364522),
    u = n(545442),
    c = n(922016),
    E = n(442433),
    h = n(110574),
    m = n(964486),
    f = n(775602),
    g = n(793574),
    p = n(688810),
    A = n(726509),
    I = n(485947),
    T = n(386784),
    S = n(545868),
    N = n(332173),
    C = n(176201),
    R = n(676608),
    O = n(342296),
    y = n(260509),
    v = n(734057),
    D = n(696451),
    L = n(317525),
    b = n(71393),
    w = n(287809),
    P = n(427262),
    k = n(985018),
    M = n(992595),
    U = n(204865);
function x(e) {
    let { member: t, guildId: s, channelId: a, role: o } = e,
        d = r.useRef(null),
        _ = (0, l.bG)([b.A], () => b.A.getGuild(s)?.ownerId, [s]),
        u = (0, l.bG)([w.default], () => w.default.getUser(t.userId), [t.userId]),
        c = (0, l.bG)([v.A], () => v.A.getChannel(a), [a]);
    return null == u || null == c
        ? null
        : (0, i.jsx)(
              O.A,
              {
                  targetElementRef: d,
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
                              ref: d,
                              selected: a,
                              colorString: t.colorString,
                              colorStrings: t.colorStrings,
                              colorRoleName: o.name,
                              user: u,
                              isOwner: t.userId === _,
                              nick: t.nick,
                              premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                              channel: c,
                              guildId: s,
                              onContextMenu: (e) => {
                                  (0, E.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("62731"),
                                          n.e("97262"),
                                          n.e("93103"),
                                          n.e("24170"),
                                          n.e("97278"),
                                          n.e("84442"),
                                          n.e("35313"),
                                          n.e("52338"),
                                          n.e("84841"),
                                          n.e("6058"),
                                      ]).then(n.bind(n, 107632));
                                      return (t) =>
                                          (0, i.jsx)(e, { ...t, user: u, guildId: s, channel: c, showMediaItems: !0 });
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
        u = r.useRef(null);
    (0, m.Ay)(() => {
        t.setPopoutRef?.(u.current);
    }),
        (0, m.l0)(() => {
            t.setPopoutRef?.(null);
        });
    let c = (0, T.A)(s),
        E = (0, l.bG)([b.A], () => {
            let e = b.A.getGuild(s);
            return null == e ? null : (0, y.af)(e);
        }, [s]),
        h = (0, l.yK)([D.Ay, w.default], () => {
            let e = D.Ay.getMembers(s),
                t = null == n || n === E ? e : e.filter((e) => e.roles.includes(n));
            return a()(t)
                .filter((e) => null != w.default.getUser(e.userId))
                .sortBy((e) => e.nick ?? P.Ay.getName(w.default.getUser(e.userId)))
                .value();
        }, [s, n, E]),
        f = (0, l.bG)([L.A], () => {
            let e = n ?? E;
            return null == e ? null : L.A.getRole(s, e);
        }, [s, n, E]),
        g = null == n ? null : c?.[n],
        p = r.useMemo(
            () =>
                null != f
                    ? h.map((e) => (0, i.jsx)(x, { member: e, guildId: s, channelId: o, role: f }, e.userId))
                    : [],
            [o, s, f, h],
        );
    return null == f
        ? null
        : (0, i.jsx)(d.C.Provider, {
              value: void 0,
              children: (0, i.jsx)("div", {
                  className: M.qm,
                  ref: u,
                  ...t,
                  children: (0, i.jsxs)(_.Ip, {
                      className: M.bY,
                      children: [
                          (0, i.jsx)(A.Y, { id: n, guildId: s, title: f.name, count: g, className: M.sd }),
                          p,
                          null == g || g <= p.length
                              ? null
                              : (0, i.jsx)(I.A, {
                                    className: M.sd,
                                    children: k.intl.formatToPlainString(k.t["9oMmZC"], { count: g - p.length }),
                                }),
                      ],
                  }),
              }),
          });
}
function V(e) {
    let { roleId: t, channelId: n, roleName: s, guildId: a, children: d, inlinePreview: _ = !1 } = e,
        { analyticsLocations: E } = (0, p.Ay)(g.A.ROLE_MENTION),
        h = (0, l.bG)([f.A], () => f.A.roleStyle),
        m = (0, l.bG)([L.A], () => (null == a || null == t ? null : L.A.getRole(a, t))),
        A = (0, R.jV)(a, m),
        I = !_ && null != m && !(0, C.Qv)(m),
        T = I && "dot" === h,
        O = I && "username" === h,
        y = A && null != m ? m.colorStrings : null,
        v = r.useRef(null),
        D = (e) =>
            (0, i.jsxs)(N.A, {
                ref: v,
                className: M.Dz,
                color: O ? m.color : null,
                roleColors: O ? y : null,
                ...e,
                children: [
                    T &&
                        null != m.color &&
                        (0, i.jsx)(u.W, {
                            color: (0, o.Hl)(m.color),
                            colors: y,
                            className: U.m,
                            background: !1,
                            tooltip: !1,
                        }),
                    d,
                ],
            });
    return _ || null == n || null == a || (null == t && "@everyone" !== s)
        ? (0, i.jsx)(p.f5, { value: E, children: D() })
        : (0, i.jsx)(p.f5, {
              value: E,
              children: (0, i.jsx)(c.Y, {
                  targetElementRef: v,
                  preload: async () => {
                      null != t && (await (0, S.a)(a, t));
                  },
                  renderPopout: (e) => (0, i.jsx)(G, { guildId: a, channelId: n, roleId: t, popoutProps: e }),
                  position: "right",
                  children: D,
              }),
          });
}
