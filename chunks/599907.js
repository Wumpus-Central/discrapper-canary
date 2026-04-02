n.d(t, { Ay: () => L, jO: () => O, nO: () => b });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
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
    I = n(351022),
    f = n(244229),
    C = n(652215),
    T = n(985018),
    N = n(80172),
    S = n(937495),
    x = n(517061),
    v = n(970890);
function b(e) {
    let { guild: t, onClick: l, onView: s } = e,
        [_, m] = a.useState(!1),
        [I, b] = a.useState(!1),
        [y, O] = a.useState(!1),
        L = a.useRef(null),
        R = a.useCallback(async () => {
            b(!0);
            try {
                await l(t.id);
            } finally {
                b(!1);
            }
        }, [t.id, l]),
        P = a.useCallback(
            (e) => {
                e && !_ && (m(!0), s?.(t.id));
            },
            [t.id, _, s],
        ),
        D = a.useCallback(
            (e) => {
                (0, c.L3)(e, async () => {
                    let { default: e } = await n.e("39572").then(n.bind(n, 235327));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        M = (0, u.Ay)(),
        j = t.features.has(C.GuildFeatures.HUB),
        w = a.useMemo(() => {
            let e = E.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discoverySplash, size: 300 * (0, g.mZ)() });
            if (null != e) return e;
            if (j) return v;
            switch (M) {
                case C.NJ8.DARK:
                    return S;
                case C.NJ8.LIGHT:
                    return x;
            }
        }, [t.discoverySplash, t.id, j, M]),
        U = a.useMemo(() => E.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }), [t.icon, t.id]);
    return (0, i.jsxs)("div", {
        className: N.kL,
        children: [
            I &&
                (0, i.jsx)("div", {
                    className: N.dc,
                    children: (0, i.jsx)(d.y$y, { type: d.y$y.Type.PULSING_ELLIPSIS, className: N.u1 }),
                }),
            (0, i.jsx)(o.L, {
                innerRef: L,
                onChange: P,
                active: !_,
                threshold: 0.55,
                children: (0, i.jsxs)(h.A, {
                    ref: L,
                    className: N.Nr,
                    onClick: R,
                    disabled: I,
                    onContextMenu: D,
                    "aria-label": T.intl.string(T.t["M9wQ+f"]),
                    children: [
                        (0, i.jsxs)("div", {
                            className: N.wx,
                            children: [
                                (0, i.jsx)("div", {
                                    className: r()(N.vK, { [N.Kc]: y }),
                                    children: (0, i.jsx)("img", {
                                        src: w,
                                        alt: "",
                                        className: N._e,
                                        onLoad: () => O(!0),
                                    }),
                                }),
                                (0, i.jsx)(f.A, { className: N.gw, guildId: t.id }),
                                (0, i.jsx)("div", {
                                    className: N.Kk,
                                    children: (0, i.jsx)(A.Ay, {
                                        mask: A.Ay.Masks.SQUIRCLE,
                                        width: 56,
                                        height: 56,
                                        children: (0, i.jsx)("div", {
                                            className: N.SA,
                                            children: (0, i.jsx)(A.Ay, {
                                                mask: A.Ay.Masks.SQUIRCLE,
                                                width: 48,
                                                height: 48,
                                                children: (0, i.jsx)("img", { src: U, alt: "", className: N.my }),
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: N.gI,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: N.DD,
                                    children: [
                                        (0, i.jsx)(p.A, {
                                            className: N.n2,
                                            guild: t,
                                            tooltipColor: d.STz.Colors.PRIMARY,
                                        }),
                                        (0, i.jsx)(d.Heading, {
                                            variant: "heading-md/semibold",
                                            className: N.J5,
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(d.Text, {
                                    className: N.h_,
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: t.description,
                                }),
                                (0, i.jsxs)("div", {
                                    className: N.bu,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, i.jsxs)("div", {
                                                className: N.CV,
                                                children: [
                                                    (0, i.jsx)("div", { className: N.SP }),
                                                    (0, i.jsx)(d.Text, {
                                                        className: N.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: T.intl.format(T.t["LC+S+m"], {
                                                            membersOnline: t.presenceCount,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        null != t.memberCount &&
                                            (0, i.jsxs)("div", {
                                                className: N.CV,
                                                children: [
                                                    (0, i.jsx)("div", { className: N.PB }),
                                                    (0, i.jsx)(d.Text, {
                                                        className: N.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: T.intl.format(T.t.zRl6XR, { count: t.memberCount }),
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
    let { guildId: t, onClick: n, onView: a } = e,
        l = (0, s.bG)([I.A], () => I.A.getGuild(t));
    return null == l ? null : (0, i.jsx)(b, { guild: l, onClick: n, onView: a });
}
function O(e) {
    let { guildId: t, index: n, onClick: l, onView: r } = e,
        s = a.useRef(null == t),
        o = a.useCallback(
            (e, t, n, a) =>
                null == t.guildId
                    ? (0, i.jsx)(m.A, { state: n, cleanUp: a, children: (0, i.jsx)(_.A, { className: N.qf }) }, e)
                    : (0, i.jsx)(
                          m.A,
                          {
                              state: n,
                              cleanUp: a,
                              animate: s.current,
                              children: (0, i.jsx)(y, { guildId: t.guildId, onClick: l, onView: r }),
                          },
                          e,
                      ),
            [l, r],
        ),
        c = a.useCallback((e) => e.guildId ?? `${e.index}`, []),
        u = a.useMemo(() => [{ guildId: t, index: n }], [t, n]);
    return (0, i.jsx)("div", {
        className: N.NK,
        children: (0, i.jsx)(d.Fai, { items: u, renderItem: o, getItemKey: c }),
    });
}
let L = a.memo(y);
