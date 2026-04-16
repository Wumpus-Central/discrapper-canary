n.d(t, { A: () => p }), n(321073);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(111956),
    o = n.n(s),
    E = n(417597),
    u = n(990078),
    c = n(397927),
    _ = n(640708),
    d = n(950072),
    A = n(997509),
    g = n(376092),
    T = n(34457),
    I = n(696451),
    N = n(317525),
    h = n(71393),
    m = n(576705),
    S = n(287809),
    G = n(558393),
    O = n(62697),
    R = n(595849),
    C = n(652215),
    L = n(985018),
    D = n(645267),
    f = n(66835);
function x(e) {
    let { permission: t, roleIds: n, guild: a, specMap: s, categoryTitle: o, userId: I } = e,
        h = (0, E.yK)([N.A], () => N.A.getManyRoles(a.id, n)),
        S = C.xBc[t],
        G = s[S.toString()]?.title ?? (0, g.hx)(S),
        O = s[S.toString()]?.description ?? "",
        D = R.S2.has(S),
        x = R.yO.includes(t),
        M = n.length,
        p = (0, E.bG)([m.A], () => m.A.can(C.xBc.MANAGE_ROLES, a), [a]),
        U = r.useCallback(
            async (e) => {
                p && (await A.A.open(a.id, C.BEX.ROLES), await A.A.selectRole(e));
            },
            [p, a.id],
        );
    return (0, l.jsxs)("div", {
        className: i()(f.wT, { [f.aE]: D }),
        children: [
            (0, l.jsxs)("div", {
                className: f.iY,
                children: [
                    (0, l.jsxs)("div", {
                        className: f.gH,
                        children: [
                            (0, l.jsx)(c.Text, { variant: "text-md/medium", color: "text-strong", children: G }),
                            null != o &&
                                (0, l.jsxs)("div", {
                                    className: f.OQ,
                                    children: [
                                        (0, l.jsx)(c.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: o,
                                        }),
                                        D &&
                                            (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(_.A, {
                                                        height: 4,
                                                        width: 4,
                                                        "aria-hidden": "true",
                                                        color: c.LU0.colors.ICON_MUTED.css,
                                                    }),
                                                    (0, l.jsx)(u.m, {
                                                        text: L.intl.string(L.t.GZvXuP),
                                                        children: (0, l.jsxs)(c.DUT, {
                                                            className: f.Dc,
                                                            children: [
                                                                (0, l.jsx)(c.m5V, {
                                                                    size: "custom",
                                                                    width: 12,
                                                                    height: 12,
                                                                    color: c.LU0.colors.TEXT_BRAND,
                                                                }),
                                                                (0, l.jsx)(c.Text, {
                                                                    variant: "text-xs/normal",
                                                                    color: "text-brand",
                                                                    children: L.intl.string(L.t.k7Kqj7),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        !D &&
                                            x &&
                                            (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(_.A, {
                                                        height: 4,
                                                        width: 4,
                                                        "aria-hidden": "true",
                                                        color: c.LU0.colors.ICON_MUTED.css,
                                                    }),
                                                    (0, l.jsx)("div", {
                                                        className: f.Dc,
                                                        children: (0, l.jsx)(c.Text, {
                                                            variant: "text-xs/normal",
                                                            color: "text-muted",
                                                            children: L.intl.string(L.t.IfqUEM),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    (0, l.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: L.intl.format(L.t.KmJI4A, { roleCount: M }),
                    }),
                ],
            }),
            null != O &&
                (0, l.jsx)("div", {
                    className: f.Dp,
                    children: (0, l.jsx)(c.Text, { variant: "text-sm/normal", color: "text-subtle", children: O }),
                }),
            (0, l.jsx)("div", {
                className: f.SY,
                children: h.map((e) =>
                    (0, R._G)(e.id, I)
                        ? (0, l.jsx)(
                              "div",
                              {
                                  className: f.Zf,
                                  children: (0, l.jsx)("div", {
                                      className: f.o9,
                                      children: (0, l.jsx)(c.Text, {
                                          variant: "text-xs/medium",
                                          color: "text-default",
                                          children: L.intl.string(L.t.pclUFJ),
                                      }),
                                  }),
                              },
                              e.id,
                          )
                        : (0, l.jsx)(
                              c.DUT,
                              {
                                  className: i()(f.Zf, { [f.LL]: p && !(0, T.Oy)(e) }),
                                  onClick: () => U(e.id),
                                  children: (0, l.jsx)(d.A, { role: e, guildId: a.id, className: f.o9 }),
                              },
                              e.id,
                          ),
                ),
            }),
        ],
    });
}
function M(e, t) {
    return t.toLowerCase().includes(e.toLowerCase());
}
function p(e) {
    let { userId: t, guildId: n, location: a, className: s, onNavigate: u } = e,
        _ = (0, E.bG)([S.default], () => S.default.getUser(t), [t]),
        d = (0, E.bG)([h.A], () => h.A.getGuild(n), [n]),
        A = (0, E.bG)([I.Ay], () => I.Ay.getMember(n, t), [n, t]),
        T = (0, R.RP)(t, n, R.lp),
        N = Object.keys(T).length,
        m = r.useMemo(() => (null != d ? G.A.getGuildPermissionSpecMap(d) : null), [d]),
        p = r.useMemo(() => (null != d ? G.A.generateGuildPermissionSpec(d) : null), [d]),
        [U, k] = r.useState(""),
        [b, F] = r.useState(""),
        j = r.useMemo(() => o()(F, 300), []),
        v = r.useCallback(
            (e) => {
                k(e), j(e);
            },
            [j],
        ),
        P = r.useCallback(() => {
            k(""), F("");
        }, []),
        y = r.useMemo(() => {
            if (null == d || null == m || null == A) return null;
            if (0 === N) return (0, l.jsx)(c.Text, { variant: "text-sm/normal", children: L.intl.string(L.t.DEBGqA) });
            let e = [];
            return (
                p?.forEach((n) => {
                    n.permissions.forEach((r) => {
                        let a = r.flag,
                            i = R.lp.find((e) => C.xBc[e] === a);
                        if (null == i) return;
                        let s = T[i];
                        if (null != s) {
                            if (b.length > 0) {
                                let e = m[a.toString()]?.title ?? (0, g.hx)(a),
                                    t = m[a.toString()]?.description?.toString() ?? "",
                                    l = n.title,
                                    r = R.S2.has(a),
                                    s = R.yO.includes(i),
                                    o = r ? L.intl.string(L.t.k7Kqj7) : s ? L.intl.string(L.t.IfqUEM) : null,
                                    E = M(b, e),
                                    u = M(b, t),
                                    c = M(b, l),
                                    _ = null != o && M(b, o);
                                if (!E && !u && !c && !_) return;
                            }
                            e.push(
                                (0, l.jsx)(
                                    x,
                                    {
                                        permission: i,
                                        roleIds: s,
                                        guild: d,
                                        specMap: m,
                                        categoryTitle: n.title,
                                        userId: t,
                                    },
                                    i,
                                ),
                            );
                        }
                    });
                }),
                e
            );
        }, [d, m, A, N, p, T, b, t]);
    return null == _ || null == A
        ? null
        : (0, l.jsxs)("div", {
              className: i()(D.kL, s),
              children: [
                  (0, l.jsx)(O.A, { guildId: n, userId: t, onNavigate: u }),
                  (0, l.jsx)(c.HOs, {
                      className: f.b3,
                      children: (0, l.jsx)(c.nVY, {
                          label: L.intl.string(L.t.BBWnpr),
                          children: (0, l.jsxs)("div", {
                              className: f.xV,
                              children: [
                                  (0, l.jsx)(c.IWV, {
                                      size: "sm",
                                      query: U,
                                      placeholder: L.intl.string(L.t["yD9+dN"]),
                                      onChange: v,
                                      onClear: P,
                                      autoComplete: "off",
                                      inputProps: { autoCapitalize: "none", autoCorrect: "off", spellCheck: "false" },
                                  }),
                                  y,
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
