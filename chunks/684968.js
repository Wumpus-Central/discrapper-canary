n.d(t, { A: () => j }), n(321073);
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(111956),
    E = n.n(s),
    _ = n(417597),
    u = n(990078),
    o = n(834730),
    c = n(827734),
    d = n(939249),
    A = n(254138),
    g = n(573613),
    T = n(270003),
    I = n(892547),
    N = n(640708),
    G = n(950072),
    m = n(997509),
    O = n(376092),
    S = n(34457),
    R = n(696451),
    D = n(317525),
    h = n(71393),
    L = n(576705),
    C = n(287809),
    M = n(558393),
    f = n(62697),
    x = n(595849),
    U = n(652215),
    p = n(985018),
    b = n(833683),
    F = n(331987);
function k(e) {
    let { permission: t, roleIds: n, guild: r, specMap: s, categoryTitle: E, userId: g } = e,
        T = (0, _.yK)([D.A], () => D.A.getManyRoles(r.id, n)),
        I = U.xBc[t],
        R = s[I.toString()]?.title ?? (0, O.hx)(I),
        h = s[I.toString()]?.description ?? "",
        C = x.S2.has(I),
        M = x.yO.includes(t),
        f = n.length,
        b = (0, _.bG)([L.A], () => L.A.can(U.xBc.MANAGE_ROLES, r), [r]),
        k = a.useCallback(
            async (e) => {
                b && (await m.A.open(r.id, U.BEX.ROLES), await m.A.selectRole(e));
            },
            [b, r.id],
        );
    return (0, l.jsxs)("div", {
        className: i()(F.wT, { [F.aE]: C }),
        children: [
            (0, l.jsxs)("div", {
                className: F.iY,
                children: [
                    (0, l.jsxs)("div", {
                        className: F.gH,
                        children: [
                            (0, l.jsx)(o.E, { variant: "text-md/medium", color: "text-strong", children: R }),
                            null != E &&
                                (0, l.jsxs)("div", {
                                    className: F.OQ,
                                    children: [
                                        (0, l.jsx)(o.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: E,
                                        }),
                                        C &&
                                            (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(N.A, {
                                                        height: 4,
                                                        width: 4,
                                                        "aria-hidden": "true",
                                                        color: c.A.colors.ICON_MUTED.css,
                                                    }),
                                                    (0, l.jsx)(u.m, {
                                                        text: p.intl.string(p.t.GZvXuP),
                                                        children: (0, l.jsxs)(d.D, {
                                                            className: F.Dc,
                                                            children: [
                                                                (0, l.jsx)(A.m, {
                                                                    size: "custom",
                                                                    width: 12,
                                                                    height: 12,
                                                                    color: c.A.colors.TEXT_BRAND,
                                                                }),
                                                                (0, l.jsx)(o.E, {
                                                                    variant: "text-xs/normal",
                                                                    color: "text-brand",
                                                                    children: p.intl.string(p.t.k7Kqj7),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        !C &&
                                            M &&
                                            (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(N.A, {
                                                        height: 4,
                                                        width: 4,
                                                        "aria-hidden": "true",
                                                        color: c.A.colors.ICON_MUTED.css,
                                                    }),
                                                    (0, l.jsx)("div", {
                                                        className: F.Dc,
                                                        children: (0, l.jsx)(o.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-muted",
                                                            children: p.intl.string(p.t.IfqUEM),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    (0, l.jsx)(o.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: p.intl.format(p.t.KmJI4A, { roleCount: f }),
                    }),
                ],
            }),
            null != h &&
                (0, l.jsx)("div", {
                    className: F.Dp,
                    children: (0, l.jsx)(o.E, { variant: "text-sm/normal", color: "text-subtle", children: h }),
                }),
            (0, l.jsx)("div", {
                className: F.SY,
                children: T.map((e) =>
                    (0, x._G)(e.id, g)
                        ? (0, l.jsx)(
                              "div",
                              {
                                  className: F.Zf,
                                  children: (0, l.jsx)("div", {
                                      className: F.o9,
                                      children: (0, l.jsx)(o.E, {
                                          variant: "text-xs/medium",
                                          color: "text-default",
                                          children: p.intl.string(p.t.pclUFJ),
                                      }),
                                  }),
                              },
                              e.id,
                          )
                        : (0, l.jsx)(
                              d.D,
                              {
                                  className: i()(F.Zf, { [F.LL]: b && !(0, S.Oy)(e) }),
                                  onClick: () => k(e.id),
                                  children: (0, l.jsx)(G.A, { role: e, guildId: r.id, className: F.o9 }),
                              },
                              e.id,
                          ),
                ),
            }),
        ],
    });
}
function P(e, t) {
    return t.toLowerCase().includes(e.toLowerCase());
}
function j(e) {
    let { userId: t, guildId: n, location: r, className: s, onNavigate: u } = e,
        c = (0, _.bG)([C.default], () => C.default.getUser(t), [t]),
        d = (0, _.bG)([h.A], () => h.A.getGuild(n), [n]),
        A = (0, _.bG)([R.Ay], () => R.Ay.getMember(n, t), [n, t]),
        N = (0, x.RP)(t, n, x.lp),
        G = Object.keys(N).length,
        m = a.useMemo(() => (null != d ? M.A.getGuildPermissionSpecMap(d) : null), [d]),
        S = a.useMemo(() => (null != d ? M.A.generateGuildPermissionSpec(d) : null), [d]),
        [D, L] = a.useState(""),
        [j, v] = a.useState(""),
        X = a.useMemo(() => E()(v, 300), []),
        y = a.useCallback(
            (e) => {
                L(e), X(e);
            },
            [X],
        ),
        B = a.useCallback(() => {
            L(""), v("");
        }, []),
        V = a.useMemo(() => {
            if (null == d || null == m || null == A) return null;
            if (0 === G) return (0, l.jsx)(o.E, { variant: "text-sm/normal", children: p.intl.string(p.t.DEBGqA) });
            let e = [];
            return (
                S?.forEach((n) => {
                    n.permissions.forEach((a) => {
                        let r = a.flag,
                            i = x.lp.find((e) => U.xBc[e] === r);
                        if (null == i) return;
                        let s = N[i];
                        if (null != s) {
                            if (j.length > 0) {
                                let e = m[r.toString()]?.title ?? (0, O.hx)(r),
                                    t = m[r.toString()]?.description?.toString() ?? "",
                                    l = n.title,
                                    a = x.S2.has(r),
                                    s = x.yO.includes(i),
                                    E = a ? p.intl.string(p.t.k7Kqj7) : s ? p.intl.string(p.t.IfqUEM) : null,
                                    _ = P(j, e),
                                    u = P(j, t),
                                    o = P(j, l),
                                    c = null != E && P(j, E);
                                if (!_ && !u && !o && !c) return;
                            }
                            e.push(
                                (0, l.jsx)(
                                    k,
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
        }, [d, m, A, G, S, N, j, t]);
    return null == c || null == A
        ? null
        : (0, l.jsxs)("div", {
              className: i()(b.kL, s),
              children: [
                  (0, l.jsx)(f.A, { guildId: n, userId: t, onNavigate: u }),
                  (0, l.jsx)(g.Ip, {
                      className: F.b3,
                      children: (0, l.jsx)(T.n, {
                          label: p.intl.string(p.t.BBWnpr),
                          children: (0, l.jsxs)("div", {
                              className: F.xV,
                              children: [
                                  (0, l.jsx)(I.I, {
                                      size: "sm",
                                      query: D,
                                      placeholder: p.intl.string(p.t["yD9+dN"]),
                                      onChange: y,
                                      onClear: B,
                                      autoComplete: "off",
                                      inputProps: { autoCapitalize: "none", autoCorrect: "off", spellCheck: "false" },
                                  }),
                                  V,
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
