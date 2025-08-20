t.d(e, { Z: () => V }), t(953529), t(388685), t(539854);
var n = t(951288),
    r = t(647438),
    l = t(120356),
    i = t.n(l),
    s = t(954955),
    a = t.n(s),
    o = t(399606),
    g = t(481060),
    c = t(79712),
    f = t(285173),
    v = t(434404),
    h = t(422559),
    u = t(345162),
    d = t(271383),
    E = t(485386),
    C = t(430824),
    B = t(496675),
    w = t(594174),
    D = t(233608),
    M = t(370595),
    p = t(351127),
    I = t(981631),
    H = t(388032),
    b = t(87819),
    Q = t(625109);
function O(A) {
    var e, t, l, s;
    let { permission: a, roleIds: d, guild: C, specMap: w, categoryTitle: D, userId: M } = A,
        b = (0, o.Wu)([E.Z], () => E.Z.getManyRoles(C.id, d)),
        O = I.Plq[a],
        P = null != (l = null == (e = w[O.toString()]) ? void 0 : e.title) ? l : (0, h.wt)(O),
        V = null != (s = null == (t = w[O.toString()]) ? void 0 : t.description) ? s : "",
        j = p._o.has(O),
        m = p.Qn.includes(a),
        T = d.length,
        y = (0, o.e7)([B.Z], () => B.Z.can(I.Plq.MANAGE_ROLES, C), [C]),
        L = r.useCallback(
            async (A) => {
                y && (await v.Z.open(C.id, I.pNK.ROLES), await v.Z.selectRole(A));
            },
            [y, C.id],
        );
    return (0, n.jsxs)("div", {
        className: i()(Q.permissionItemContainer, { [Q.elevatedPermission]: j }),
        children: [
            (0, n.jsxs)("div", {
                className: Q.permissionItemHeader,
                children: [
                    (0, n.jsxs)("div", {
                        className: Q.permissionTitle,
                        children: [
                            (0, n.jsx)(g.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: P,
                            }),
                            null != D &&
                                (0, n.jsxs)("div", {
                                    className: Q.permissionItemSubheader,
                                    children: [
                                        (0, n.jsx)(g.Text, {
                                            variant: "text-xs/normal",
                                            color: "header-muted",
                                            children: D,
                                        }),
                                        j &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(c.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        "aria-hidden": "true",
                                                        color: g.TVs.colors.INTERACTIVE_MUTED.css,
                                                    }),
                                                    (0, n.jsx)(g.ua7, {
                                                        text: H.intl.string(H.t.GZvXuL),
                                                        children: (A) => {
                                                            var e, t;
                                                            return (0, n.jsxs)(
                                                                g.P3F,
                                                                ((e = (function (A) {
                                                                    for (var e = 1; e < arguments.length; e++) {
                                                                        var t =
                                                                                null != arguments[e]
                                                                                    ? arguments[e]
                                                                                    : {},
                                                                            n = Object.keys(t);
                                                                        "function" ==
                                                                            typeof Object.getOwnPropertySymbols &&
                                                                            (n = n.concat(
                                                                                Object.getOwnPropertySymbols(t).filter(
                                                                                    function (A) {
                                                                                        return Object.getOwnPropertyDescriptor(
                                                                                            t,
                                                                                            A,
                                                                                        ).enumerable;
                                                                                    },
                                                                                ),
                                                                            )),
                                                                            n.forEach(function (e) {
                                                                                var n;
                                                                                (n = t[e]),
                                                                                    e in A
                                                                                        ? Object.defineProperty(A, e, {
                                                                                              value: n,
                                                                                              enumerable: !0,
                                                                                              configurable: !0,
                                                                                              writable: !0,
                                                                                          })
                                                                                        : (A[e] = n);
                                                                            });
                                                                    }
                                                                    return A;
                                                                })({ className: Q.elevatedPermissionContainer }, A)),
                                                                (t = t =
                                                                    {
                                                                        children: [
                                                                            (0, n.jsx)(g.tQf, {
                                                                                size: "custom",
                                                                                width: 12,
                                                                                height: 12,
                                                                                color: g.TVs.colors.TEXT_BRAND,
                                                                            }),
                                                                            (0, n.jsx)(g.Text, {
                                                                                variant: "text-xs/normal",
                                                                                color: "text-brand",
                                                                                children: H.intl.string(H.t.k7Kqj4),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                Object.getOwnPropertyDescriptors
                                                                    ? Object.defineProperties(
                                                                          e,
                                                                          Object.getOwnPropertyDescriptors(t),
                                                                      )
                                                                    : (function (A, e) {
                                                                          var t = Object.keys(A);
                                                                          if (Object.getOwnPropertySymbols) {
                                                                              var n = Object.getOwnPropertySymbols(A);
                                                                              t.push.apply(t, n);
                                                                          }
                                                                          return t;
                                                                      })(Object(t)).forEach(function (A) {
                                                                          Object.defineProperty(
                                                                              e,
                                                                              A,
                                                                              Object.getOwnPropertyDescriptor(t, A),
                                                                          );
                                                                      }),
                                                                e),
                                                            );
                                                        },
                                                    }),
                                                ],
                                            }),
                                        !j &&
                                            m &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(c.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        "aria-hidden": "true",
                                                        color: g.TVs.colors.INTERACTIVE_MUTED.css,
                                                    }),
                                                    (0, n.jsx)("div", {
                                                        className: Q.elevatedPermissionContainer,
                                                        children: (0, n.jsx)(g.Text, {
                                                            variant: "text-xs/normal",
                                                            color: "header-muted",
                                                            children: H.intl.string(H.t.IfqUEB),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    (0, n.jsx)(g.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: H.intl.format(H.t.KmJI4O, { roleCount: T }),
                    }),
                ],
            }),
            null != V &&
                (0, n.jsx)("div", {
                    className: Q.permissionItemDescription,
                    children: (0, n.jsx)(g.Text, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        children: V,
                    }),
                }),
            (0, n.jsx)("div", {
                className: Q.permissionItemRoleContainer,
                children: b.map((A) =>
                    (0, p.Ov)(A.id, M)
                        ? (0, n.jsx)(
                              "div",
                              {
                                  className: Q.roleTooltipItem,
                                  children: (0, n.jsx)("div", {
                                      className: Q.roleChiplet,
                                      children: (0, n.jsx)(g.Text, {
                                          variant: "text-xs/medium",
                                          color: "text-default",
                                          children: H.intl.string(H.t.pclUFB),
                                      }),
                                  }),
                              },
                              A.id,
                          )
                        : (0, n.jsx)(
                              g.P3F,
                              {
                                  className: i()(Q.roleTooltipItem, { [Q.editable]: y && !(0, u.fI)(A) }),
                                  onClick: () => L(A.id),
                                  children: (0, n.jsx)(f.Z, {
                                      role: A,
                                      guildId: C.id,
                                      className: Q.roleChiplet,
                                  }),
                              },
                              A.id,
                          ),
                ),
            }),
        ],
    });
}
function P(A, e) {
    return e.toLowerCase().includes(A.toLowerCase());
}
function V(A) {
    let { userId: e, guildId: t, location: l, className: s, onNavigate: c } = A,
        f = (0, o.e7)([w.default], () => w.default.getUser(e), [e]),
        v = (0, o.e7)([C.Z], () => C.Z.getGuild(t), [t]),
        u = (0, o.e7)([d.ZP], () => d.ZP.getMember(t, e), [t, e]),
        E = (0, p.B2)(e, t, p.pd),
        B = Object.keys(E).length,
        V = r.useMemo(() => (null != v ? D.Z.getGuildPermissionSpecMap(v) : null), [v]),
        j = r.useMemo(() => (null != v ? D.Z.generateGuildPermissionSpec(v) : null), [v]),
        [m, T] = r.useState(""),
        [y, L] = r.useState(""),
        x = r.useMemo(() => a()(L, 300), []),
        N = r.useCallback(
            (A) => {
                T(A), x(A);
            },
            [x],
        ),
        Z = r.useCallback(() => {
            T(""), L("");
        }, []),
        S = r.useMemo(() => {
            if (null == v || null == V || null == u) return null;
            if (0 === B)
                return (0, n.jsx)(g.Text, {
                    variant: "text-sm/normal",
                    children: H.intl.string(H.t.DEBGqK),
                });
            let A = [];
            return (
                null == j ||
                    j.forEach((t) => {
                        t.permissions.forEach((r) => {
                            let l = r.flag,
                                i = p.pd.find((A) => I.Plq[A] === l);
                            if (null == i) return;
                            let s = E[i];
                            if (null != s) {
                                if (y.length > 0) {
                                    var a, o, g, c, f;
                                    let A =
                                            null != (c = null == (a = V[l.toString()]) ? void 0 : a.title)
                                                ? c
                                                : (0, h.wt)(l),
                                        e =
                                            null !=
                                            (f =
                                                null == (g = V[l.toString()]) || null == (o = g.description)
                                                    ? void 0
                                                    : o.toString())
                                                ? f
                                                : "",
                                        n = t.title,
                                        r = p._o.has(l),
                                        s = p.Qn.includes(i),
                                        v = r ? H.intl.string(H.t.k7Kqj4) : s ? H.intl.string(H.t.IfqUEB) : null,
                                        u = P(y, A),
                                        d = P(y, e),
                                        E = P(y, n),
                                        C = null != v && P(y, v);
                                    if (!u && !d && !E && !C) return;
                                }
                                A.push(
                                    (0, n.jsx)(
                                        O,
                                        {
                                            permission: i,
                                            roleIds: s,
                                            guild: v,
                                            specMap: V,
                                            categoryTitle: t.title,
                                            userId: e,
                                        },
                                        i,
                                    ),
                                );
                            }
                        });
                    }),
                A
            );
        }, [v, V, u, B, j, E, y, e]);
    return null == f || null == u
        ? null
        : (0, n.jsxs)("div", {
              className: i()(b.container, s),
              children: [
                  (0, n.jsx)(M.Z, {
                      guildId: t,
                      userId: e,
                      onNavigate: c,
                  }),
                  (0, n.jsx)(g.Ttm, {
                      className: Q.permissionsGroupContainer,
                      children: (0, n.jsx)(g.xJW, {
                          title: H.intl.string(H.t.BBWnpq),
                          children: (0, n.jsxs)("div", {
                              className: Q.permissionsItemContainer,
                              children: [
                                  (0, n.jsx)(g.E1j, {
                                      size: "sm",
                                      className: Q.searchBar,
                                      query: m,
                                      placeholder: H.intl.string(H.t["yD9+dH"]),
                                      onChange: N,
                                      onClear: Z,
                                      autoComplete: "off",
                                      inputProps: {
                                          autoCapitalize: "none",
                                          autoCorrect: "off",
                                          spellCheck: "false",
                                      },
                                  }),
                                  S,
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
