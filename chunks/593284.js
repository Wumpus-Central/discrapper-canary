"use strict";
n.d(t, { A: () => V });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(317097),
    l = n(311907),
    u = n(473193),
    c = n(397927),
    d = n(442433),
    _ = n(110574),
    f = n(964486),
    h = n(775602),
    p = n(793574),
    g = n(688810),
    E = n(991275),
    A = n(485947),
    I = n(600975),
    T = n(386784),
    y = n(545868),
    S = n(332173),
    v = n(176201),
    C = n(676608),
    b = n(342296),
    N = n(260509),
    R = n(734057),
    O = n(696451),
    D = n(317525),
    L = n(71393),
    w = n(287809),
    x = n(427262),
    P = n(985018),
    M = n(206314),
    k = n(377086);
let U = (0, I.C)({
    kind: "user",
    id: "2021-07_role_popout",
    label: "Role Popout",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Popout", config: { enabled: !0 } }],
});
function G(e) {
    let { member: t, guildId: a, channelId: s, role: o } = e,
        u = i.useRef(null),
        c = (0, l.bG)([L.A], () => L.A.getGuild(a)?.ownerId, [a]),
        f = (0, l.bG)([w.default], () => w.default.getUser(t.userId), [t.userId]),
        h = (0, l.bG)([R.A], () => R.A.getChannel(s), [s]);
    return null == f || null == h
        ? null
        : (0, r.jsx)(
              b.A,
              {
                  targetElementRef: u,
                  userId: t.userId,
                  guildId: a,
                  channelId: s,
                  roleId: o.id,
                  spacing: 14,
                  children: (e, i) => {
                      let { isShown: s } = i;
                      return (0, r.jsx)(
                          _.A,
                          {
                              ref: u,
                              selected: s,
                              colorString: t.colorString,
                              colorStrings: t.colorStrings,
                              colorRoleName: o.name,
                              user: f,
                              isOwner: t.userId === c,
                              nick: t.nick,
                              premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                              channel: h,
                              guildId: a,
                              onContextMenu: (e) => {
                                  (0, d.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("41927"),
                                          n.e("97262"),
                                          n.e("3795"),
                                          n.e("42128"),
                                          n.e("97283"),
                                          n.e("84841"),
                                          n.e("29347"),
                                      ]).then(n.bind(n, 107632));
                                      return (t) =>
                                          (0, r.jsx)(e, { ...t, user: f, guildId: a, channel: h, showMediaItems: !0 });
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
function F(e) {
    let { popoutProps: t, roleId: n, guildId: a, channelId: o } = e,
        d = i.useRef(null);
    (0, f.Ay)(() => {
        t.setPopoutRef?.(d.current);
    }),
        (0, f.l0)(() => {
            t.setPopoutRef?.(null);
        });
    let _ = (0, T.A)(a),
        h = (0, l.bG)([L.A], () => {
            let e = L.A.getGuild(a);
            return null == e ? null : (0, N.af)(e);
        }, [a]),
        p = (0, l.yK)([O.Ay, w.default], () => {
            let e = O.Ay.getMembers(a),
                t = null == n || n === h ? e : e.filter((e) => e.roles.includes(n));
            return s()(t)
                .filter((e) => null != w.default.getUser(e.userId))
                .sortBy((e) => e.nick ?? x.Ay.getName(w.default.getUser(e.userId)))
                .value();
        }, [a, n, h]),
        g = (0, l.bG)([D.A], () => {
            let e = n ?? h;
            return null == e ? null : D.A.getRole(a, e);
        }, [a, n, h]),
        I = null == n ? null : _?.[n],
        y = i.useMemo(
            () =>
                null != g
                    ? p.map((e) => (0, r.jsx)(G, { member: e, guildId: a, channelId: o, role: g }, e.userId))
                    : [],
            [o, a, g, p],
        );
    return null == g
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
                          (0, r.jsx)(E.Y, { id: n, guildId: a, title: g.name, count: I, className: M.sd }),
                          y,
                          null == I || I <= y.length
                              ? null
                              : (0, r.jsx)(A.A, {
                                    className: M.sd,
                                    children: P.intl.formatToPlainString(P.t["9oMmZC"], { count: I - y.length }),
                                }),
                      ],
                  }),
              }),
          });
}
function V(e) {
    let { roleId: t, channelId: n, roleName: a, guildId: s, children: u, inlinePreview: d = !1 } = e,
        { analyticsLocations: _ } = (0, g.Ay)(p.A.ROLE_MENTION),
        f = (0, l.bG)([h.A], () => h.A.roleStyle),
        E = (0, l.bG)([D.A], () => (null == s || null == t ? null : D.A.getRole(s, t))),
        A = (0, C.jV)(s, E),
        I = !d && null != E && !(0, v.Qv)(E),
        T = I && "dot" === f,
        b = I && "username" === f,
        N = A && null != E ? E.colorStrings : null,
        R = i.useRef(null),
        O = (e) =>
            (0, r.jsxs)(S.A, {
                ref: R,
                className: M.Dz,
                color: b ? E.color : null,
                roleColors: b ? N : null,
                ...e,
                children: [
                    T &&
                        null != E.color &&
                        (0, r.jsx)(c.WYI, {
                            color: (0, o.Hl)(E.color),
                            colors: N,
                            className: k.m,
                            background: !1,
                            tooltip: !1,
                        }),
                    u,
                ],
            }),
        { enabled: L } = U.getCurrentConfig({ location: "2ec235_1" }, { autoTrackExposure: !1 });
    return !L || d || null == n || null == s || (null == t && "@everyone" !== a)
        ? (0, r.jsx)(g.f5, { value: _, children: O() })
        : (0, r.jsx)(g.f5, {
              value: _,
              children: (0, r.jsx)(c.YNO, {
                  targetElementRef: R,
                  preload: async () => {
                      null != t && (await (0, y.a)(s, t));
                  },
                  renderPopout: (e) => (0, r.jsx)(F, { guildId: s, channelId: n, roleId: t, popoutProps: e }),
                  position: "right",
                  children: O,
              }),
          });
}
