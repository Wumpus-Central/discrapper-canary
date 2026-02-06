"use strict";
n.d(t, { A: () => F });
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
    p = n(775602),
    h = n(793574),
    m = n(688810),
    g = n(991275),
    E = n(485947),
    A = n(600975),
    I = n(386784),
    T = n(545868),
    S = n(332173),
    y = n(176201),
    v = n(676608),
    C = n(342296),
    N = n(260509),
    b = n(734057),
    R = n(696451),
    O = n(317525),
    D = n(71393),
    L = n(287809),
    w = n(427262),
    x = n(985018),
    M = n(206314),
    P = n(377086);
let k = (0, A.C)({
    kind: "user",
    id: "2021-07_role_popout",
    label: "Role Popout",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Popout", config: { enabled: !0 } }],
});
function U(e) {
    let { member: t, guildId: a, channelId: s, role: o } = e,
        u = i.useRef(null),
        c = (0, l.bG)([D.A], () => D.A.getGuild(a)?.ownerId, [a]),
        f = (0, l.bG)([L.default], () => L.default.getUser(t.userId), [t.userId]),
        p = (0, l.bG)([b.A], () => b.A.getChannel(s), [s]);
    return null == f || null == p
        ? null
        : (0, r.jsx)(
              C.A,
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
                              channel: p,
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
                                          (0, r.jsx)(e, { ...t, user: f, guildId: a, channel: p, showMediaItems: !0 });
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
    let { popoutProps: t, roleId: n, guildId: a, channelId: o } = e,
        d = i.useRef(null);
    (0, f.Ay)(() => {
        t.setPopoutRef?.(d.current);
    }),
        (0, f.l0)(() => {
            t.setPopoutRef?.(null);
        });
    let _ = (0, I.A)(a),
        p = (0, l.bG)([D.A], () => {
            let e = D.A.getGuild(a);
            return null == e ? null : (0, N.af)(e);
        }, [a]),
        h = (0, l.yK)([R.Ay, L.default], () => {
            let e = R.Ay.getMembers(a),
                t = null == n || n === p ? e : e.filter((e) => e.roles.includes(n));
            return s()(t)
                .filter((e) => null != L.default.getUser(e.userId))
                .sortBy((e) => e.nick ?? w.Ay.getName(L.default.getUser(e.userId)))
                .value();
        }, [a, n, p]),
        m = (0, l.bG)([O.A], () => {
            let e = n ?? p;
            return null == e ? null : O.A.getRole(a, e);
        }, [a, n, p]),
        A = null == n ? null : _?.[n],
        T = i.useMemo(
            () =>
                null != m
                    ? h.map((e) => (0, r.jsx)(U, { member: e, guildId: a, channelId: o, role: m }, e.userId))
                    : [],
            [o, a, m, h],
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
                          (0, r.jsx)(g.Y, { id: n, guildId: a, title: m.name, count: A, className: M.sd }),
                          T,
                          null == A || A <= T.length
                              ? null
                              : (0, r.jsx)(E.A, {
                                    className: M.sd,
                                    children: x.intl.formatToPlainString(x.t["9oMmZC"], { count: A - T.length }),
                                }),
                      ],
                  }),
              }),
          });
}
function F(e) {
    let { roleId: t, channelId: n, roleName: a, guildId: s, children: u, inlinePreview: d = !1 } = e,
        { analyticsLocations: _ } = (0, m.Ay)(h.A.ROLE_MENTION),
        f = (0, l.bG)([p.A], () => p.A.roleStyle),
        g = (0, l.bG)([O.A], () => (null == s || null == t ? null : O.A.getRole(s, t))),
        E = (0, v.jV)(s, g),
        A = !d && null != g && !(0, y.Qv)(g),
        I = A && "dot" === f,
        C = A && "username" === f,
        N = E && null != g ? g.colorStrings : null,
        b = i.useRef(null),
        R = (e) =>
            (0, r.jsxs)(S.A, {
                ref: b,
                className: M.Dz,
                color: C ? g.color : null,
                roleColors: C ? N : null,
                ...e,
                children: [
                    I &&
                        null != g.color &&
                        (0, r.jsx)(c.WYI, {
                            color: (0, o.Hl)(g.color),
                            colors: N,
                            className: P.m,
                            background: !1,
                            tooltip: !1,
                        }),
                    u,
                ],
            }),
        { enabled: D } = k.getCurrentConfig({ location: "2ec235_1" }, { autoTrackExposure: !1 });
    return !D || d || null == n || null == s || (null == t && "@everyone" !== a)
        ? (0, r.jsx)(m.f5, { value: _, children: R() })
        : (0, r.jsx)(m.f5, {
              value: _,
              children: (0, r.jsx)(c.YNO, {
                  targetElementRef: b,
                  preload: async () => {
                      null != t && (await (0, T.a)(s, t));
                  },
                  renderPopout: (e) => (0, r.jsx)(G, { guildId: s, channelId: n, roleId: t, popoutProps: e }),
                  position: "right",
                  children: R,
              }),
          });
}
