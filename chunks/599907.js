n.d(t, { Ay: () => L, jO: () => O, nO: () => b });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(230109),
    d = n(397927),
    c = n(442433),
    u = n(736653),
    A = n(573435),
    h = n(635350),
    _ = n(726187),
    m = n(542678),
    g = n(714991),
    p = n(776231),
    E = n(486020),
    I = n(351022),
    f = n(244229),
    C = n(652215),
    T = n(985018),
    N = n(302524),
    S = n(937495),
    x = n(517061),
    v = n(970890);
function b(e) {
    let { guild: t, onClick: a, onView: s } = e,
        [_, m] = l.useState(!1),
        [I, b] = l.useState(!1),
        [y, O] = l.useState(!1),
        L = l.useRef(null),
        R = l.useCallback(async () => {
            b(!0);
            try {
                await a(t.id);
            } finally {
                b(!1);
            }
        }, [t.id, a]),
        P = l.useCallback(
            (e) => {
                e && !_ && (m(!0), s?.(t.id));
            },
            [t.id, _, s],
        ),
        D = l.useCallback(
            (e) => {
                (0, c.L3)(e, async () => {
                    let { default: e } = await n.e("39572").then(n.bind(n, 235327));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        j = (0, u.Ay)(),
        M = t.features.has(C.GuildFeatures.HUB),
        w = l.useMemo(() => {
            let e = E.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discoverySplash, size: 300 * (0, p.mZ)() });
            if (null != e) return e;
            if (M) return v;
            switch (j) {
                case C.NJ8.DARK:
                    return S;
                case C.NJ8.LIGHT:
                    return x;
            }
        }, [t.discoverySplash, t.id, M, j]),
        U = l.useMemo(() => E.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }), [t.icon, t.id]);
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
                                        (0, i.jsx)(g.A, {
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
    let { guildId: t, onClick: n, onView: l } = e,
        a = (0, s.bG)([I.A], () => I.A.getGuild(t));
    return null == a ? null : (0, i.jsx)(b, { guild: a, onClick: n, onView: l });
}
function O(e) {
    let { guildId: t, index: n, onClick: a, onView: r } = e,
        s = l.useRef(null == t),
        o = l.useCallback(
            (e, t, n, l) =>
                null == t.guildId
                    ? (0, i.jsx)(m.A, { state: n, cleanUp: l, children: (0, i.jsx)(_.A, { className: N.qf }) }, e)
                    : (0, i.jsx)(
                          m.A,
                          {
                              state: n,
                              cleanUp: l,
                              animate: s.current,
                              children: (0, i.jsx)(y, { guildId: t.guildId, onClick: a, onView: r }),
                          },
                          e,
                      ),
            [a, r],
        ),
        c = l.useCallback((e) => e.guildId ?? `${e.index}`, []),
        u = l.useMemo(() => [{ guildId: t, index: n }], [t, n]);
    return (0, i.jsx)("div", {
        className: N.NK,
        children: (0, i.jsx)(d.Fai, { items: u, renderItem: o, getItemKey: c }),
    });
}
let L = l.memo(y);
