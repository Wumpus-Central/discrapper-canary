n.d(t, { Z: () => M }), n(953529), n(388685), n(539854);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(954955),
    o = n.n(a),
    u = n(399606),
    c = n(481060),
    E = n(79712),
    d = n(285173),
    _ = n(434404),
    A = n(422559),
    T = n(345162),
    I = n(271383),
    m = n(485386),
    g = n(430824),
    N = n(496675),
    O = n(594174),
    h = n(233608),
    f = n(370595),
    R = n(351127),
    S = n(981631),
    p = n(388032),
    C = n(87819),
    D = n(625109);
function L(e) {
    var t, n, i, a;
    let { permission: o, roleIds: I, guild: g, specMap: O, categoryTitle: h, userId: f } = e,
        C = (0, u.Wu)([m.Z], () => m.Z.getManyRoles(g.id, I)),
        L = S.Plq[o],
        U = null != (i = null == (t = O[L.toString()]) ? void 0 : t.title) ? i : (0, A.wt)(L),
        M = null != (a = null == (n = O[L.toString()]) ? void 0 : n.description) ? a : "",
        b = R._o.has(L),
        v = R.Qn.includes(o),
        x = I.length,
        P = (0, u.e7)([N.Z], () => N.Z.can(S.Plq.MANAGE_ROLES, g), [g]),
        j = l.useCallback(
            async (e) => {
                P && (await _.Z.open(g.id, S.pNK.ROLES), await _.Z.selectRole(e));
            },
            [P, g.id],
        );
    return (0, r.jsxs)("div", {
        className: s()(D.permissionItemContainer, { [D.elevatedPermission]: b }),
        children: [
            (0, r.jsxs)("div", {
                className: D.permissionItemHeader,
                children: [
                    (0, r.jsxs)("div", {
                        className: D.permissionTitle,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: U,
                            }),
                            null != h &&
                                (0, r.jsxs)("div", {
                                    className: D.permissionItemSubheader,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-xs/normal",
                                            color: "header-muted",
                                            children: h,
                                        }),
                                        b &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(E.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        "aria-hidden": "true",
                                                        color: c.TVs.colors.INTERACTIVE_MUTED.css,
                                                    }),
                                                    (0, r.jsx)(c.ua7, {
                                                        text: p.intl.string(p.t.GZvXuL),
                                                        children: (e) => {
                                                            var t, n;
                                                            return (0, r.jsxs)(
                                                                c.P3F,
                                                                ((t = (function (e) {
                                                                    for (var t = 1; t < arguments.length; t++) {
                                                                        var n =
                                                                                null != arguments[t]
                                                                                    ? arguments[t]
                                                                                    : {},
                                                                            r = Object.keys(n);
                                                                        "function" ==
                                                                            typeof Object.getOwnPropertySymbols &&
                                                                            (r = r.concat(
                                                                                Object.getOwnPropertySymbols(n).filter(
                                                                                    function (e) {
                                                                                        return Object.getOwnPropertyDescriptor(
                                                                                            n,
                                                                                            e,
                                                                                        ).enumerable;
                                                                                    },
                                                                                ),
                                                                            )),
                                                                            r.forEach(function (t) {
                                                                                var r;
                                                                                (r = n[t]),
                                                                                    t in e
                                                                                        ? Object.defineProperty(e, t, {
                                                                                              value: r,
                                                                                              enumerable: !0,
                                                                                              configurable: !0,
                                                                                              writable: !0,
                                                                                          })
                                                                                        : (e[t] = r);
                                                                            });
                                                                    }
                                                                    return e;
                                                                })({ className: D.elevatedPermissionContainer }, e)),
                                                                (n = n =
                                                                    {
                                                                        children: [
                                                                            (0, r.jsx)(c.tQf, {
                                                                                size: "custom",
                                                                                width: 12,
                                                                                height: 12,
                                                                                color: c.TVs.colors.TEXT_BRAND,
                                                                            }),
                                                                            (0, r.jsx)(c.Text, {
                                                                                variant: "text-xs/normal",
                                                                                color: "text-brand",
                                                                                children: p.intl.string(p.t.k7Kqj4),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                Object.getOwnPropertyDescriptors
                                                                    ? Object.defineProperties(
                                                                          t,
                                                                          Object.getOwnPropertyDescriptors(n),
                                                                      )
                                                                    : (function (e, t) {
                                                                          var n = Object.keys(e);
                                                                          if (Object.getOwnPropertySymbols) {
                                                                              var r = Object.getOwnPropertySymbols(e);
                                                                              n.push.apply(n, r);
                                                                          }
                                                                          return n;
                                                                      })(Object(n)).forEach(function (e) {
                                                                          Object.defineProperty(
                                                                              t,
                                                                              e,
                                                                              Object.getOwnPropertyDescriptor(n, e),
                                                                          );
                                                                      }),
                                                                t),
                                                            );
                                                        },
                                                    }),
                                                ],
                                            }),
                                        !b &&
                                            v &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(E.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        "aria-hidden": "true",
                                                        color: c.TVs.colors.INTERACTIVE_MUTED.css,
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: D.elevatedPermissionContainer,
                                                        children: (0, r.jsx)(c.Text, {
                                                            variant: "text-xs/normal",
                                                            color: "header-muted",
                                                            children: p.intl.string(p.t.IfqUEB),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: p.intl.format(p.t.KmJI4O, { roleCount: x }),
                    }),
                ],
            }),
            null != M &&
                (0, r.jsx)("div", {
                    className: D.permissionItemDescription,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        children: M,
                    }),
                }),
            (0, r.jsx)("div", {
                className: D.permissionItemRoleContainer,
                children: C.map((e) =>
                    (0, R.Ov)(e.id, f)
                        ? (0, r.jsx)(
                              "div",
                              {
                                  className: D.roleTooltipItem,
                                  children: (0, r.jsx)("div", {
                                      className: D.roleChiplet,
                                      children: (0, r.jsx)(c.Text, {
                                          variant: "text-xs/medium",
                                          color: "text-default",
                                          children: p.intl.string(p.t.pclUFB),
                                      }),
                                  }),
                              },
                              e.id,
                          )
                        : (0, r.jsx)(
                              c.P3F,
                              {
                                  className: s()(D.roleTooltipItem, { [D.editable]: P && !(0, T.fI)(e) }),
                                  onClick: () => j(e.id),
                                  children: (0, r.jsx)(d.Z, {
                                      role: e,
                                      guildId: g.id,
                                      className: D.roleChiplet,
                                  }),
                              },
                              e.id,
                          ),
                ),
            }),
        ],
    });
}
function U(e, t) {
    return t.toLowerCase().includes(e.toLowerCase());
}
function M(e) {
    let { userId: t, guildId: n, location: i, className: a, onNavigate: E } = e,
        d = (0, u.e7)([O.default], () => O.default.getUser(t), [t]),
        _ = (0, u.e7)([g.Z], () => g.Z.getGuild(n), [n]),
        T = (0, u.e7)([I.ZP], () => I.ZP.getMember(n, t), [n, t]),
        m = (0, R.B2)(t, n, R.pd),
        N = Object.keys(m).length,
        M = l.useMemo(() => (null != _ ? h.Z.getGuildPermissionSpecMap(_) : null), [_]),
        b = l.useMemo(() => (null != _ ? h.Z.generateGuildPermissionSpec(_) : null), [_]),
        [v, x] = l.useState(""),
        [P, j] = l.useState(""),
        y = l.useMemo(() => o()(j, 300), []),
        G = l.useCallback(
            (e) => {
                x(e), y(e);
            },
            [y],
        ),
        k = l.useCallback(() => {
            x(""), j("");
        }, []),
        F = l.useMemo(() => {
            if (null == _ || null == M || null == T) return null;
            if (0 === N)
                return (0, r.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: p.intl.string(p.t.DEBGqK),
                });
            let e = [];
            return (
                null == b ||
                    b.forEach((n) => {
                        n.permissions.forEach((l) => {
                            let i = l.flag,
                                s = R.pd.find((e) => S.Plq[e] === i);
                            if (null == s) return;
                            let a = m[s];
                            if (null != a) {
                                if (P.length > 0) {
                                    var o, u, c, E, d;
                                    let e =
                                            null != (E = null == (o = M[i.toString()]) ? void 0 : o.title)
                                                ? E
                                                : (0, A.wt)(i),
                                        t =
                                            null !=
                                            (d =
                                                null == (c = M[i.toString()]) || null == (u = c.description)
                                                    ? void 0
                                                    : u.toString())
                                                ? d
                                                : "",
                                        r = n.title,
                                        l = R._o.has(i),
                                        a = R.Qn.includes(s),
                                        _ = l ? p.intl.string(p.t.k7Kqj4) : a ? p.intl.string(p.t.IfqUEB) : null,
                                        T = U(P, e),
                                        I = U(P, t),
                                        m = U(P, r),
                                        g = null != _ && U(P, _);
                                    if (!T && !I && !m && !g) return;
                                }
                                e.push(
                                    (0, r.jsx)(
                                        L,
                                        {
                                            permission: s,
                                            roleIds: a,
                                            guild: _,
                                            specMap: M,
                                            categoryTitle: n.title,
                                            userId: t,
                                        },
                                        s,
                                    ),
                                );
                            }
                        });
                    }),
                e
            );
        }, [_, M, T, N, b, m, P, t]);
    return null == d || null == T
        ? null
        : (0, r.jsxs)("div", {
              className: s()(C.container, a),
              children: [
                  (0, r.jsx)(f.Z, {
                      guildId: n,
                      userId: t,
                      onNavigate: E,
                  }),
                  (0, r.jsx)(c.Ttm, {
                      className: D.permissionsGroupContainer,
                      children: (0, r.jsx)(c.xJW, {
                          title: p.intl.string(p.t.BBWnpq),
                          children: (0, r.jsxs)("div", {
                              className: D.permissionsItemContainer,
                              children: [
                                  (0, r.jsx)(c.E1j, {
                                      size: "sm",
                                      query: v,
                                      placeholder: p.intl.string(p.t["yD9+dH"]),
                                      onChange: G,
                                      onClear: k,
                                      autoComplete: "off",
                                      inputProps: {
                                          autoCapitalize: "none",
                                          autoCorrect: "off",
                                          spellCheck: "false",
                                      },
                                  }),
                                  F,
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
