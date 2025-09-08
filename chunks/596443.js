n.d(t, { Z: () => U }), n(953529), n(388685), n(539854);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(954955),
    o = n.n(s),
    u = n(399606),
    c = n(481060),
    d = n(79712),
    E = n(285173),
    _ = n(434404),
    A = n(422559),
    m = n(345162),
    T = n(271383),
    I = n(485386),
    g = n(430824),
    f = n(496675),
    h = n(594174),
    N = n(233608),
    O = n(370595),
    p = n(351127),
    R = n(981631),
    S = n(388032),
    C = n(87819),
    D = n(625109);
function L(e) {
    var t, n, i, s;
    let { permission: o, roleIds: T, guild: g, specMap: h, categoryTitle: N, userId: O } = e,
        C = (0, u.Wu)([I.Z], () => I.Z.getManyRoles(g.id, T)),
        L = R.Plq[o],
        b = null != (i = null == (t = h[L.toString()]) ? void 0 : t.title) ? i : (0, A.wt)(L),
        U = null != (s = null == (n = h[L.toString()]) ? void 0 : n.description) ? s : "",
        v = p._o.has(L),
        M = p.Qn.includes(o),
        x = T.length,
        P = (0, u.e7)([f.Z], () => f.Z.can(R.Plq.MANAGE_ROLES, g), [g]),
        j = l.useCallback(
            async (e) => {
                P && (await _.Z.open(g.id, R.pNK.ROLES), await _.Z.selectRole(e));
            },
            [P, g.id],
        );
    return (0, r.jsxs)("div", {
        className: a()(D.permissionItemContainer, { [D.elevatedPermission]: v }),
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
                                children: b,
                            }),
                            null != N &&
                                (0, r.jsxs)("div", {
                                    className: D.permissionItemSubheader,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-xs/normal",
                                            color: "header-muted",
                                            children: N,
                                        }),
                                        v &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(d.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        "aria-hidden": "true",
                                                        color: c.TVs.colors.INTERACTIVE_MUTED.css,
                                                    }),
                                                    (0, r.jsx)(c.ua7, {
                                                        text: S.intl.string(S.t.GZvXuL),
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
                                                                                children: S.intl.string(S.t.k7Kqj4),
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
                                        !v &&
                                            M &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(d.Z, {
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
                                                            children: S.intl.string(S.t.IfqUEB),
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
                        children: S.intl.format(S.t.KmJI4O, { roleCount: x }),
                    }),
                ],
            }),
            null != U &&
                (0, r.jsx)("div", {
                    className: D.permissionItemDescription,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        children: U,
                    }),
                }),
            (0, r.jsx)("div", {
                className: D.permissionItemRoleContainer,
                children: C.map((e) =>
                    (0, p.Ov)(e.id, O)
                        ? (0, r.jsx)(
                              "div",
                              {
                                  className: D.roleTooltipItem,
                                  children: (0, r.jsx)("div", {
                                      className: D.roleChiplet,
                                      children: (0, r.jsx)(c.Text, {
                                          variant: "text-xs/medium",
                                          color: "text-default",
                                          children: S.intl.string(S.t.pclUFB),
                                      }),
                                  }),
                              },
                              e.id,
                          )
                        : (0, r.jsx)(
                              c.P3F,
                              {
                                  className: a()(D.roleTooltipItem, { [D.editable]: P && !(0, m.fI)(e) }),
                                  onClick: () => j(e.id),
                                  children: (0, r.jsx)(E.Z, {
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
function b(e, t) {
    return t.toLowerCase().includes(e.toLowerCase());
}
function U(e) {
    let { userId: t, guildId: n, location: i, className: s, onNavigate: d } = e,
        E = (0, u.e7)([h.default], () => h.default.getUser(t), [t]),
        _ = (0, u.e7)([g.Z], () => g.Z.getGuild(n), [n]),
        m = (0, u.e7)([T.ZP], () => T.ZP.getMember(n, t), [n, t]),
        I = (0, p.B2)(t, n, p.pd),
        f = Object.keys(I).length,
        U = l.useMemo(() => (null != _ ? N.Z.getGuildPermissionSpecMap(_) : null), [_]),
        v = l.useMemo(() => (null != _ ? N.Z.generateGuildPermissionSpec(_) : null), [_]),
        [M, x] = l.useState(""),
        [P, j] = l.useState(""),
        y = l.useMemo(() => o()(j, 300), []),
        w = l.useCallback(
            (e) => {
                x(e), y(e);
            },
            [y],
        ),
        G = l.useCallback(() => {
            x(""), j("");
        }, []),
        k = l.useMemo(() => {
            if (null == _ || null == U || null == m) return null;
            if (0 === f)
                return (0, r.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: S.intl.string(S.t.DEBGqK),
                });
            let e = [];
            return (
                null == v ||
                    v.forEach((n) => {
                        n.permissions.forEach((l) => {
                            let i = l.flag,
                                a = p.pd.find((e) => R.Plq[e] === i);
                            if (null == a) return;
                            let s = I[a];
                            if (null != s) {
                                if (P.length > 0) {
                                    var o, u, c, d, E;
                                    let e =
                                            null != (d = null == (o = U[i.toString()]) ? void 0 : o.title)
                                                ? d
                                                : (0, A.wt)(i),
                                        t =
                                            null !=
                                            (E =
                                                null == (c = U[i.toString()]) || null == (u = c.description)
                                                    ? void 0
                                                    : u.toString())
                                                ? E
                                                : "",
                                        r = n.title,
                                        l = p._o.has(i),
                                        s = p.Qn.includes(a),
                                        _ = l ? S.intl.string(S.t.k7Kqj4) : s ? S.intl.string(S.t.IfqUEB) : null,
                                        m = b(P, e),
                                        T = b(P, t),
                                        I = b(P, r),
                                        g = null != _ && b(P, _);
                                    if (!m && !T && !I && !g) return;
                                }
                                e.push(
                                    (0, r.jsx)(
                                        L,
                                        {
                                            permission: a,
                                            roleIds: s,
                                            guild: _,
                                            specMap: U,
                                            categoryTitle: n.title,
                                            userId: t,
                                        },
                                        a,
                                    ),
                                );
                            }
                        });
                    }),
                e
            );
        }, [_, U, m, f, v, I, P, t]);
    return null == E || null == m
        ? null
        : (0, r.jsxs)("div", {
              className: a()(C.container, s),
              children: [
                  (0, r.jsx)(O.Z, {
                      guildId: n,
                      userId: t,
                      onNavigate: d,
                  }),
                  (0, r.jsx)(c.Ttm, {
                      className: D.permissionsGroupContainer,
                      children: (0, r.jsx)(c.xJW, {
                          title: S.intl.string(S.t.BBWnpq),
                          children: (0, r.jsxs)("div", {
                              className: D.permissionsItemContainer,
                              children: [
                                  (0, r.jsx)(c.E1j, {
                                      size: "sm",
                                      query: M,
                                      placeholder: S.intl.string(S.t["yD9+dH"]),
                                      onChange: w,
                                      onClear: G,
                                      autoComplete: "off",
                                      inputProps: {
                                          autoCapitalize: "none",
                                          autoCorrect: "off",
                                          spellCheck: "false",
                                      },
                                  }),
                                  k,
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
