n.d(t, { Ay: () => O, jO: () => L, nO: () => b });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(230109),
    d = n(397927),
    c = n(442433),
    u = n(736653),
    A = n(573435),
    h = n(635350),
    _ = n(726187),
    m = n(542678),
    p = n(714991),
    g = n(776231),
    E = n(486020),
    f = n(351022),
    I = n(244229),
    C = n(652215),
    N = n(985018),
    T = n(156323),
    S = n(937495),
    x = n(517061),
    v = n(970890);
function b(e) {
    let { guild: t, onClick: a, onView: s } = e,
        [_, m] = r.useState(!1),
        [f, b] = r.useState(!1),
        [y, L] = r.useState(!1),
        O = r.useRef(null),
        R = r.useCallback(async () => {
            b(!0);
            try {
                await a(t.id);
            } finally {
                b(!1);
            }
        }, [t.id, a]),
        P = r.useCallback(
            (e) => {
                e && !_ && (m(!0), s?.(t.id));
            },
            [t.id, _, s],
        ),
        j = r.useCallback(
            (e) => {
                (0, c.L3)(e, async () => {
                    let { default: e } = await n.e("39572").then(n.bind(n, 235327));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        D = (0, u.Ay)(),
        w = t.features.has(C.GuildFeatures.HUB),
        M = r.useMemo(() => {
            let e = E.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discoverySplash, size: 300 * (0, g.mZ)() });
            if (null != e) return e;
            if (w) return v;
            switch (D) {
                case C.NJ8.DARK:
                    return S;
                case C.NJ8.LIGHT:
                    return x;
            }
        }, [t.discoverySplash, t.id, w, D]),
        U = r.useMemo(() => E.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }), [t.icon, t.id]);
    return (0, i.jsxs)("div", {
        className: T.kL,
        children: [
            f &&
                (0, i.jsx)("div", {
                    className: T.dc,
                    children: (0, i.jsx)(d.y$y, { type: d.y$y.Type.PULSING_ELLIPSIS, className: T.u1 }),
                }),
            (0, i.jsx)(o.L, {
                innerRef: O,
                onChange: P,
                active: !_,
                threshold: 0.55,
                children: (0, i.jsxs)(h.A, {
                    ref: O,
                    className: T.Nr,
                    onClick: R,
                    disabled: f,
                    onContextMenu: j,
                    "aria-label": N.intl.string(N.t["M9wQ+f"]),
                    children: [
                        (0, i.jsxs)("div", {
                            className: T.wx,
                            children: [
                                (0, i.jsx)("div", {
                                    className: l()(T.vK, { [T.Kc]: y }),
                                    children: (0, i.jsx)("img", {
                                        src: M,
                                        alt: "",
                                        className: T._e,
                                        onLoad: () => L(!0),
                                    }),
                                }),
                                (0, i.jsx)(I.A, { className: T.gw, guildId: t.id }),
                                (0, i.jsx)("div", {
                                    className: T.Kk,
                                    children: (0, i.jsx)(A.Ay, {
                                        mask: A.Ay.Masks.SQUIRCLE,
                                        width: 56,
                                        height: 56,
                                        children: (0, i.jsx)("div", {
                                            className: T.SA,
                                            children: (0, i.jsx)(A.Ay, {
                                                mask: A.Ay.Masks.SQUIRCLE,
                                                width: 48,
                                                height: 48,
                                                children: (0, i.jsx)("img", { src: U, alt: "", className: T.my }),
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: T.gI,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: T.DD,
                                    children: [
                                        (0, i.jsx)(p.A, {
                                            className: T.n2,
                                            guild: t,
                                            tooltipColor: d.STz.Colors.PRIMARY,
                                        }),
                                        (0, i.jsx)(d.Heading, {
                                            variant: "heading-md/semibold",
                                            className: T.J5,
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(d.Text, {
                                    className: T.h_,
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: t.description,
                                }),
                                (0, i.jsxs)("div", {
                                    className: T.bu,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, i.jsxs)("div", {
                                                className: T.CV,
                                                children: [
                                                    (0, i.jsx)("div", { className: T.SP }),
                                                    (0, i.jsx)(d.Text, {
                                                        className: T.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: N.intl.format(N.t["LC+S+m"], {
                                                            membersOnline: t.presenceCount,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        null != t.memberCount &&
                                            (0, i.jsxs)("div", {
                                                className: T.CV,
                                                children: [
                                                    (0, i.jsx)("div", { className: T.PB }),
                                                    (0, i.jsx)(d.Text, {
                                                        className: T.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: N.intl.format(N.t.zRl6XR, { count: t.memberCount }),
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
function y(e) {
    let { guildId: t, onClick: n, onView: r } = e,
        a = (0, s.bG)([f.A], () => f.A.getGuild(t));
    return null == a ? null : (0, i.jsx)(b, { guild: a, onClick: n, onView: r });
}
function L(e) {
    let { guildId: t, index: n, onClick: a, onView: l } = e,
        s = r.useRef(null == t),
        o = r.useCallback(
            (e, t, n, r) =>
                null == t.guildId
                    ? (0, i.jsx)(m.A, { state: n, cleanUp: r, children: (0, i.jsx)(_.A, { className: T.qf }) }, e)
                    : (0, i.jsx)(
                          m.A,
                          {
                              state: n,
                              cleanUp: r,
                              animate: s.current,
                              children: (0, i.jsx)(y, { guildId: t.guildId, onClick: a, onView: l }),
                          },
                          e,
                      ),
            [a, l],
        ),
        c = r.useCallback((e) => e.guildId ?? `${e.index}`, []),
        u = r.useMemo(() => [{ guildId: t, index: n }], [t, n]);
    return (0, i.jsx)("div", {
        className: T.NK,
        children: (0, i.jsx)(d.Fai, { items: u, renderItem: o, getItemKey: c }),
    });
}
let O = r.memo(y);
