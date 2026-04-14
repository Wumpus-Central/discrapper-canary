"use strict";
n.d(t, { A: () => U });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(317097),
    l = n(311907),
    u = n(473193),
    c = n(397927),
    d = n(442433),
    _ = n(110574),
    f = n(964486),
    h = n(775602),
    p = n(793574),
    m = n(688810),
    E = n(991275),
    g = n(485947),
    A = n(386784),
    I = n(545868),
    T = n(332173),
    S = n(176201),
    y = n(676608),
    v = n(342296),
    C = n(260509),
    N = n(734057),
    R = n(696451),
    b = n(317525),
    O = n(71393),
    D = n(287809),
    L = n(427262),
    w = n(985018),
    M = n(782691),
    x = n(732497);
function P(e) {
    let { member: t, guildId: s, channelId: a, role: o } = e,
        u = i.useRef(null),
        c = (0, l.bG)([O.A], () => O.A.getGuild(s)?.ownerId, [s]),
        f = (0, l.bG)([D.default], () => D.default.getUser(t.userId), [t.userId]),
        h = (0, l.bG)([N.A], () => N.A.getChannel(a), [a]);
    return null == f || null == h
        ? null
        : (0, r.jsx)(
              v.default,
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
                          _.A,
                          {
                              ref: u,
                              selected: a,
                              colorString: t.colorString,
                              colorStrings: t.colorStrings,
                              colorRoleName: o.name,
                              user: f,
                              isOwner: t.userId === c,
                              nick: t.nick,
                              premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                              channel: h,
                              guildId: s,
                              onContextMenu: (e) => {
                                  (0, d.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("41927"),
                                          n.e("97262"),
                                          n.e("3795"),
                                          n.e("42128"),
                                          n.e("61474"),
                                          n.e("84841"),
                                          n.e("64764"),
                                      ]).then(n.bind(n, 107632));
                                      return (t) =>
                                          (0, r.jsx)(e, { ...t, user: f, guildId: s, channel: h, showMediaItems: !0 });
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
function k(e) {
    let { popoutProps: t, roleId: n, guildId: s, channelId: o } = e,
        d = i.useRef(null);
    (0, f.Ay)(() => {
        t.setPopoutRef?.(d.current);
    }),
        (0, f.l0)(() => {
            t.setPopoutRef?.(null);
        });
    let _ = (0, A.A)(s),
        h = (0, l.bG)([O.A], () => {
            let e = O.A.getGuild(s);
            return null == e ? null : (0, C.af)(e);
        }, [s]),
        p = (0, l.yK)([R.Ay, D.default], () => {
            let e = R.Ay.getMembers(s),
                t = null == n || n === h ? e : e.filter((e) => e.roles.includes(n));
            return a()(t)
                .filter((e) => null != D.default.getUser(e.userId))
                .sortBy((e) => e.nick ?? L.Ay.getName(D.default.getUser(e.userId)))
                .value();
        }, [s, n, h]),
        m = (0, l.bG)([b.A], () => {
            let e = n ?? h;
            return null == e ? null : b.A.getRole(s, e);
        }, [s, n, h]),
        I = null == n ? null : _?.[n],
        T = i.useMemo(
            () =>
                null != m
                    ? p.map((e) => (0, r.jsx)(P, { member: e, guildId: s, channelId: o, role: m }, e.userId))
                    : [],
            [o, s, m, p],
        );
    return null == m
        ? null
        : (0, r.jsx)(u.C.Provider, {
              value: void 0,
              children: (0, r.jsx)("div", {
                  className: M.qm,
                  ref: d,
                  ...t,
                  children: (0, r.jsxs)(c.HOs, {
                      className: M.bY,
                      children: [
                          (0, r.jsx)(E.Y, { id: n, guildId: s, title: m.name, count: I, className: M.sd }),
                          T,
                          null == I || I <= T.length
                              ? null
                              : (0, r.jsx)(g.A, {
                                    className: M.sd,
                                    children: w.intl.formatToPlainString(w.t["9oMmZC"], { count: I - T.length }),
                                }),
                      ],
                  }),
              }),
          });
}
function U(e) {
    let { roleId: t, channelId: n, roleName: s, guildId: a, children: u, inlinePreview: d = !1 } = e,
        { analyticsLocations: _ } = (0, m.Ay)(p.A.ROLE_MENTION),
        f = (0, l.bG)([h.A], () => h.A.roleStyle),
        E = (0, l.bG)([b.A], () => (null == a || null == t ? null : b.A.getRole(a, t))),
        g = (0, y.jV)(a, E),
        A = !d && null != E && !(0, S.Qv)(E),
        v = A && "dot" === f,
        C = A && "username" === f,
        N = g && null != E ? E.colorStrings : null,
        R = i.useRef(null),
        O = (e) =>
            (0, r.jsxs)(T.A, {
                ref: R,
                className: M.Dz,
                color: C ? E.color : null,
                roleColors: C ? N : null,
                ...e,
                children: [
                    v &&
                        null != E.color &&
                        (0, r.jsx)(c.WYI, {
                            color: (0, o.Hl)(E.color),
                            colors: N,
                            className: x.m,
                            background: !1,
                            tooltip: !1,
                        }),
                    u,
                ],
            });
    return d || null == n || null == a || (null == t && "@everyone" !== s)
        ? (0, r.jsx)(m.f5, { value: _, children: O() })
        : (0, r.jsx)(m.f5, {
              value: _,
              children: (0, r.jsx)(c.YNO, {
                  targetElementRef: R,
                  preload: async () => {
                      null != t && (await (0, I.a)(a, t));
                  },
                  renderPopout: (e) => (0, r.jsx)(k, { guildId: a, channelId: n, roleId: t, popoutProps: e }),
                  position: "right",
                  children: O,
              }),
          });
}
