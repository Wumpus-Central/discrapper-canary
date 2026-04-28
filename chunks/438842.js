s.d(t, { A: () => f });
var l = s(627968),
    a = s(64700),
    i = s(503698),
    n = s.n(i),
    r = s(47762),
    c = s(990078),
    d = s(834730),
    m = s(825860),
    o = s(661531),
    u = s(573435),
    x = s(569926),
    h = s(486020),
    v = s(822017);
function j(e) {
    let { game: t, activityLevel: s, hideTooltip: a } = e,
        { data: i } = (0, x.I)(t.id),
        n = i?.iconHash,
        j = null != n ? h.Ay.getGameAssetURL({ id: t.id, hash: n, size: 24 }) : t.getIconURL(24);
    if (null == j) return null;
    let N = s?.level === r._.HIGH,
        g = (0, l.jsx)(d.E, { variant: "text-sm/medium", color: "interactive-text-active", children: t.name });
    return (0, l.jsx)(c.m, {
        __unsupportedReactNodeAsText: g,
        position: "bottom",
        "aria-label": t.name,
        shouldShow: !a,
        children: (0, l.jsxs)("div", {
            className: v.Gt,
            children: [
                (0, l.jsx)("img", { className: v.T_, src: j, alt: t.name }),
                N &&
                    (0, l.jsx)(u.Ay, {
                        mask: u.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: 14,
                        height: 14,
                        className: v.Sy,
                        children: (0, l.jsx)("div", {
                            className: v._8,
                            children: (0, l.jsx)(m.Y, {
                                color: o.A.unsafe_rawColors.ORANGE_330.css,
                                width: 10,
                                height: 10,
                                size: "custom",
                            }),
                        }),
                    }),
            ],
        }),
    });
}
function N(e) {
    let { games: t, activity: s } = e;
    return (0, l.jsx)("div", {
        className: v.Fz,
        children: t.map((e) =>
            (0, l.jsxs)(
                "div",
                {
                    className: v.ZS,
                    children: [
                        (0, l.jsx)(j, { game: e, activityLevel: s[e.id] }),
                        (0, l.jsx)(d.E, {
                            variant: "text-xs/medium",
                            color: "interactive-text-active",
                            children: e.name,
                        }),
                    ],
                },
                e.id,
            ),
        ),
    });
}
function g(e) {
    let { game: t, activityLevel: s } = e;
    return (0, l.jsxs)("div", {
        className: v.E,
        children: [
            (0, l.jsx)(j, { game: t, activityLevel: s, hideTooltip: !0 }),
            (0, l.jsx)(d.E, { variant: "text-sm/medium", color: "text-default", children: t.name }),
        ],
    });
}
function f(e) {
    let { gamesToDisplay: t, lastGameToDisplay: s, remainingGames: i, activity: r } = e,
        { data: m } = (0, x.I)(s?.id),
        o = m?.iconHash,
        u = null != o && null != s ? h.Ay.getGameAssetURL({ id: s.id, hash: o, size: 24 }) : s?.getIconURL(24),
        f = a.useMemo(
            () =>
                null == s || null == u
                    ? null
                    : 0 === i.length
                      ? (0, l.jsx)(j, { game: s, activityLevel: r[s.id] })
                      : (0, l.jsx)(c.m, {
                            "aria-label": "",
                            position: "bottom",
                            __unsupportedReactNodeAsText: (0, l.jsx)(N, { games: i, activity: r }),
                            children: (0, l.jsxs)("div", {
                                className: n()(v.Gt, v.oL),
                                children: [
                                    (0, l.jsx)("img", { className: n()(v.T_, v.tJ), src: u, alt: s.name }),
                                    (0, l.jsx)("div", { className: v.Fg }),
                                    (0, l.jsx)("div", {
                                        className: v.AZ,
                                        children: (0, l.jsx)(d.E, {
                                            variant: "text-xs/normal",
                                            color: "always-white",
                                            children: `+${i.length}`,
                                        }),
                                    }),
                                ],
                            }),
                        }),
            [s, u, i, r],
        );
    return null == t || 0 === t.length
        ? null
        : 1 === t.length
          ? (0, l.jsx)("div", { className: v.kL, children: (0, l.jsx)(g, { game: t[0], activityLevel: r[t[0].id] }) })
          : (0, l.jsxs)("div", {
                className: v.kL,
                children: [t.map((e) => (0, l.jsx)(j, { game: e, activityLevel: r[e.id] }, e.id)), f],
            });
}
