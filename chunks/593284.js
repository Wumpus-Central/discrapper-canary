"use strict";
n.d(t, { A: () => F });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(317097),
    l = n(311907),
    u = n(473193),
    c = n(573613),
    d = n(545442),
    _ = n(265872),
    f = n(442433),
    p = n(110574),
    h = n(964486),
    E = n(775602),
    m = n(793574),
    g = n(688810),
    A = n(991275),
    I = n(485947),
    T = n(386784),
    S = n(545868),
    y = n(332173),
    N = n(176201),
    v = n(676608),
    C = n(342296),
    O = n(260509),
    R = n(734057),
    b = n(696451),
    D = n(317525),
    L = n(71393),
    w = n(287809),
    M = n(427262),
    P = n(985018),
    x = n(992595),
    k = n(204865);
function U(e) {
    let { member: t, guildId: s, channelId: a, role: o } = e,
        u = i.useRef(null),
        c = (0, l.bG)([L.A], () => L.A.getGuild(s)?.ownerId, [s]),
        d = (0, l.bG)([w.default], () => w.default.getUser(t.userId), [t.userId]),
        _ = (0, l.bG)([R.A], () => R.A.getChannel(a), [a]);
    return null == d || null == _
        ? null
        : (0, r.jsx)(
              C.A,
              {
                  targetElementRef: u,
                  userId: t.userId,
                  guildId: s,
                  channelId: a,
                  roleId: o.id,
                  spacing: 14,
                  children: (e, i) => {
                      let { isShown: a } = i;
                      return (0, r.jsx)(
                          p.A,
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
                                          n.e("41927"),
                                          n.e("97262"),
                                          n.e("93103"),
                                          n.e("92493"),
                                          n.e("42128"),
                                          n.e("97278"),
                                          n.e("35313"),
                                          n.e("74372"),
                                          n.e("84841"),
                                          n.e("15690"),
                                      ]).then(n.bind(n, 107632));
                                      return (t) =>
                                          (0, r.jsx)(e, { ...t, user: d, guildId: s, channel: _, showMediaItems: !0 });
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
        d = i.useRef(null);
    (0, h.Ay)(() => {
        t.setPopoutRef?.(d.current);
    }),
        (0, h.l0)(() => {
            t.setPopoutRef?.(null);
        });
    let _ = (0, T.A)(s),
        f = (0, l.bG)([L.A], () => {
            let e = L.A.getGuild(s);
            return null == e ? null : (0, O.af)(e);
        }, [s]),
        p = (0, l.yK)([b.Ay, w.default], () => {
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
        g = i.useMemo(
            () =>
                null != E
                    ? p.map((e) => (0, r.jsx)(U, { member: e, guildId: s, channelId: o, role: E }, e.userId))
                    : [],
            [o, s, E, p],
        );
    return null == E
        ? null
        : (0, r.jsx)(u.C.Provider, {
              value: void 0,
              children: (0, r.jsx)("div", {
                  className: x.qm,
                  ref: d,
                  ...t,
                  children: (0, r.jsxs)(c.Ip, {
                      className: x.bY,
                      children: [
                          (0, r.jsx)(A.Y, { id: n, guildId: s, title: E.name, count: m, className: x.sd }),
                          g,
                          null == m || m <= g.length
                              ? null
                              : (0, r.jsx)(I.A, {
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
        p = (0, l.bG)([E.A], () => E.A.roleStyle),
        h = (0, l.bG)([D.A], () => (null == a || null == t ? null : D.A.getRole(a, t))),
        A = (0, v.jV)(a, h),
        I = !c && null != h && !(0, N.Qv)(h),
        T = I && "dot" === p,
        C = I && "username" === p,
        O = A && null != h ? h.colorStrings : null,
        R = i.useRef(null),
        b = (e) =>
            (0, r.jsxs)(y.A, {
                ref: R,
                className: x.Dz,
                color: C ? h.color : null,
                roleColors: C ? O : null,
                ...e,
                children: [
                    T &&
                        null != h.color &&
                        (0, r.jsx)(d.W, {
                            color: (0, o.Hl)(h.color),
                            colors: O,
                            className: k.m,
                            background: !1,
                            tooltip: !1,
                        }),
                    u,
                ],
            });
    return c || null == n || null == a || (null == t && "@everyone" !== s)
        ? (0, r.jsx)(g.f5, { value: f, children: b() })
        : (0, r.jsx)(g.f5, {
              value: f,
              children: (0, r.jsx)(_.Y, {
                  targetElementRef: R,
                  preload: async () => {
                      null != t && (await (0, S.a)(a, t));
                  },
                  renderPopout: (e) => (0, r.jsx)(G, { guildId: a, channelId: n, roleId: t, popoutProps: e }),
                  position: "right",
                  children: b,
              }),
          });
}
