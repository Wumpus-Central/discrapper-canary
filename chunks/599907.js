a.d(t, { Ay: () => U, jO: () => N, nO: () => G });
var s = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    n = a(311907),
    c = a(230109),
    o = a(289873),
    d = a(781696),
    u = a(534514),
    h = a(834730),
    g = a(518009),
    A = a(442433),
    _ = a(736653),
    m = a(573435),
    C = a(635350),
    f = a(726187),
    y = a(542678),
    I = a(714991),
    S = a(776231),
    E = a(486020),
    b = a(351022),
    p = a(244229),
    x = a(652215),
    R = a(985018),
    j = a(302524),
    D = a(937495),
    v = a(517061),
    T = a(970890);
function G(e) {
    let { guild: t, onClick: r, onView: n } = e,
        [g, f] = l.useState(!1),
        [y, b] = l.useState(!1),
        [G, L] = l.useState(!1),
        N = l.useRef(null),
        U = l.useCallback(async () => {
            b(!0);
            try {
                await r(t.id);
            } finally {
                b(!1);
            }
        }, [t.id, r]),
        k = l.useCallback(
            (e) => {
                e && !g && (f(!0), n?.(t.id));
            },
            [t.id, g, n],
        ),
        F = l.useCallback(
            (e) => {
                (0, A.L3)(e, async () => {
                    let { default: e } = await a.e("39572").then(a.bind(a, 235327));
                    return (a) => (0, s.jsx)(e, { ...a, guild: t });
                });
            },
            [t],
        ),
        O = (0, _.Ay)(),
        w = t.features.has(x.GuildFeatures.HUB),
        V = l.useMemo(() => {
            let e = E.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discoverySplash, size: 300 * (0, S.mZ)() });
            if (null != e) return e;
            if (w) return T;
            switch (O) {
                case x.NJ8.DARK:
                    return D;
                case x.NJ8.LIGHT:
                    return v;
            }
        }, [t.discoverySplash, t.id, w, O]),
        M = l.useMemo(() => E.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }), [t.icon, t.id]);
    return (0, s.jsxs)("div", {
        className: j.kL,
        children: [
            y &&
                (0, s.jsx)("div", {
                    className: j.dc,
                    children: (0, s.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, className: j.u1 }),
                }),
            (0, s.jsx)(c.L, {
                innerRef: N,
                onChange: k,
                active: !g,
                threshold: 0.55,
                children: (0, s.jsxs)(C.A, {
                    ref: N,
                    className: j.Nr,
                    onClick: U,
                    disabled: y,
                    onContextMenu: F,
                    "aria-label": R.intl.string(R.t["M9wQ+f"]),
                    children: [
                        (0, s.jsxs)("div", {
                            className: j.wx,
                            children: [
                                (0, s.jsx)("div", {
                                    className: i()(j.vK, { [j.Kc]: G }),
                                    children: (0, s.jsx)("img", {
                                        src: V,
                                        alt: "",
                                        className: j._e,
                                        onLoad: () => L(!0),
                                    }),
                                }),
                                (0, s.jsx)(p.A, { className: j.gw, guildId: t.id }),
                                (0, s.jsx)("div", {
                                    className: j.Kk,
                                    children: (0, s.jsx)(m.Ay, {
                                        mask: m.Ay.Masks.SQUIRCLE,
                                        width: 56,
                                        height: 56,
                                        children: (0, s.jsx)("div", {
                                            className: j.SA,
                                            children: (0, s.jsx)(m.Ay, {
                                                mask: m.Ay.Masks.SQUIRCLE,
                                                width: 48,
                                                height: 48,
                                                children: (0, s.jsx)("img", { src: M, alt: "", className: j.my }),
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: j.gI,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: j.DD,
                                    children: [
                                        (0, s.jsx)(I.A, {
                                            className: j.n2,
                                            guild: t,
                                            tooltipColor: d.ST.Colors.PRIMARY,
                                        }),
                                        (0, s.jsx)(u.D, {
                                            variant: "heading-md/semibold",
                                            className: j.J5,
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(h.E, {
                                    className: j.h_,
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: t.description,
                                }),
                                (0, s.jsxs)("div", {
                                    className: j.bu,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, s.jsxs)("div", {
                                                className: j.CV,
                                                children: [
                                                    (0, s.jsx)("div", { className: j.SP }),
                                                    (0, s.jsx)(h.E, {
                                                        className: j.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: R.intl.format(R.t["LC+S+m"], {
                                                            membersOnline: t.presenceCount,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        null != t.memberCount &&
                                            (0, s.jsxs)("div", {
                                                className: j.CV,
                                                children: [
                                                    (0, s.jsx)("div", { className: j.PB }),
                                                    (0, s.jsx)(h.E, {
                                                        className: j.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: R.intl.format(R.t.zRl6XR, { count: t.memberCount }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function L(e) {
    let { guildId: t, onClick: a, onView: l } = e,
        r = (0, n.bG)([b.A], () => b.A.getGuild(t));
    return null == r ? null : (0, s.jsx)(G, { guild: r, onClick: a, onView: l });
}
function N(e) {
    let { guildId: t, index: a, onClick: r, onView: i } = e,
        n = l.useRef(null == t),
        c = l.useCallback(
            (e, t, a, l) =>
                null == t.guildId
                    ? (0, s.jsx)(y.A, { state: a, cleanUp: l, children: (0, s.jsx)(f.A, { className: j.qf }) }, e)
                    : (0, s.jsx)(
                          y.A,
                          {
                              state: a,
                              cleanUp: l,
                              animate: n.current,
                              children: (0, s.jsx)(L, { guildId: t.guildId, onClick: r, onView: i }),
                          },
                          e,
                      ),
            [r, i],
        ),
        o = l.useCallback((e) => e.guildId ?? `${e.index}`, []),
        d = l.useMemo(() => [{ guildId: t, index: a }], [t, a]);
    return (0, s.jsx)("div", {
        className: j.NK,
        children: (0, s.jsx)(g.F, { items: d, renderItem: c, getItemKey: o }),
    });
}
let U = l.memo(L);
