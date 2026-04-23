"use strict";
n.d(t, { A: () => V });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    r = n.n(s),
    a = n(317097),
    o = n(311907),
    c = n(473193),
    u = n(573613),
    d = n(545442),
    h = n(265872),
    m = n(442433),
    p = n(110574),
    f = n(964486),
    g = n(775602),
    _ = n(793574),
    x = n(688810),
    A = n(991275),
    C = n(485947),
    E = n(386784),
    I = n(545868),
    v = n(332173),
    y = n(176201),
    S = n(676608),
    b = n(342296),
    N = n(260509),
    j = n(734057),
    T = n(696451),
    R = n(317525),
    w = n(71393),
    L = n(287809),
    M = n(427262),
    O = n(985018),
    k = n(992595),
    P = n(204865);
function D(e) {
    let { member: t, guildId: s, channelId: r, role: a } = e,
        c = l.useRef(null),
        u = (0, o.bG)([w.A], () => w.A.getGuild(s)?.ownerId, [s]),
        d = (0, o.bG)([L.default], () => L.default.getUser(t.userId), [t.userId]),
        h = (0, o.bG)([j.A], () => j.A.getChannel(r), [r]);
    return null == d || null == h
        ? null
        : (0, i.jsx)(
              b.A,
              {
                  targetElementRef: c,
                  userId: t.userId,
                  guildId: s,
                  channelId: r,
                  roleId: a.id,
                  spacing: 14,
                  children: (e, l) => {
                      let { isShown: r } = l;
                      return (0, i.jsx)(
                          p.A,
                          {
                              ref: c,
                              selected: r,
                              colorString: t.colorString,
                              colorStrings: t.colorStrings,
                              colorRoleName: a.name,
                              user: d,
                              isOwner: t.userId === u,
                              nick: t.nick,
                              premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                              channel: h,
                              guildId: s,
                              onContextMenu: (e) => {
                                  (0, m.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("41927"),
                                          n.e("97262"),
                                          n.e("92493"),
                                          n.e("93103"),
                                          n.e("42128"),
                                          n.e("97278"),
                                          n.e("35313"),
                                          n.e("81653"),
                                          n.e("84841"),
                                          n.e("63143"),
                                      ]).then(n.bind(n, 107632));
                                      return (t) =>
                                          (0, i.jsx)(e, { ...t, user: d, guildId: s, channel: h, showMediaItems: !0 });
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
        d = l.useRef(null);
    (0, f.Ay)(() => {
        t.setPopoutRef?.(d.current);
    }),
        (0, f.l0)(() => {
            t.setPopoutRef?.(null);
        });
    let h = (0, E.A)(s),
        m = (0, o.bG)([w.A], () => {
            let e = w.A.getGuild(s);
            return null == e ? null : (0, N.af)(e);
        }, [s]),
        p = (0, o.yK)([T.Ay, L.default], () => {
            let e = T.Ay.getMembers(s),
                t = null == n || n === m ? e : e.filter((e) => e.roles.includes(n));
            return r()(t)
                .filter((e) => null != L.default.getUser(e.userId))
                .sortBy((e) => e.nick ?? M.Ay.getName(L.default.getUser(e.userId)))
                .value();
        }, [s, n, m]),
        g = (0, o.bG)([R.A], () => {
            let e = n ?? m;
            return null == e ? null : R.A.getRole(s, e);
        }, [s, n, m]),
        _ = null == n ? null : h?.[n],
        x = l.useMemo(
            () =>
                null != g
                    ? p.map((e) => (0, i.jsx)(D, { member: e, guildId: s, channelId: a, role: g }, e.userId))
                    : [],
            [a, s, g, p],
        );
    return null == g
        ? null
        : (0, i.jsx)(c.C.Provider, {
              value: void 0,
              children: (0, i.jsx)("div", {
                  className: k.qm,
                  ref: d,
                  ...t,
                  children: (0, i.jsxs)(u.Ip, {
                      className: k.bY,
                      children: [
                          (0, i.jsx)(A.Y, { id: n, guildId: s, title: g.name, count: _, className: k.sd }),
                          x,
                          null == _ || _ <= x.length
                              ? null
                              : (0, i.jsx)(C.A, {
                                    className: k.sd,
                                    children: O.intl.formatToPlainString(O.t["9oMmZC"], { count: _ - x.length }),
                                }),
                      ],
                  }),
              }),
          });
}
function V(e) {
    let { roleId: t, channelId: n, roleName: s, guildId: r, children: c, inlinePreview: u = !1 } = e,
        { analyticsLocations: m } = (0, x.Ay)(_.A.ROLE_MENTION),
        p = (0, o.bG)([g.A], () => g.A.roleStyle),
        f = (0, o.bG)([R.A], () => (null == r || null == t ? null : R.A.getRole(r, t))),
        A = (0, S.jV)(r, f),
        C = !u && null != f && !(0, y.Qv)(f),
        E = C && "dot" === p,
        b = C && "username" === p,
        N = A && null != f ? f.colorStrings : null,
        j = l.useRef(null),
        T = (e) =>
            (0, i.jsxs)(v.A, {
                ref: j,
                className: k.Dz,
                color: b ? f.color : null,
                roleColors: b ? N : null,
                ...e,
                children: [
                    E &&
                        null != f.color &&
                        (0, i.jsx)(d.W, {
                            color: (0, a.Hl)(f.color),
                            colors: N,
                            className: P.m,
                            background: !1,
                            tooltip: !1,
                        }),
                    c,
                ],
            });
    return u || null == n || null == r || (null == t && "@everyone" !== s)
        ? (0, i.jsx)(x.f5, { value: m, children: T() })
        : (0, i.jsx)(x.f5, {
              value: m,
              children: (0, i.jsx)(h.Y, {
                  targetElementRef: j,
                  preload: async () => {
                      null != t && (await (0, I.a)(r, t));
                  },
                  renderPopout: (e) => (0, i.jsx)(U, { guildId: r, channelId: n, roleId: t, popoutProps: e }),
                  position: "right",
                  children: T,
              }),
          });
}
