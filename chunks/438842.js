l.d(t, { A: () => N });
var s = l(627968),
    a = l(64700),
    i = l(503698),
    n = l.n(i),
    r = l(47762),
    c = l(990078),
    d = l(834730),
    m = l(825860),
    o = l(661531),
    u = l(573435),
    x = l(822017);
function h(e) {
    let { game: t, activityLevel: l, hideTooltip: a } = e,
        i = t.getIconURL(24);
    if (null == i) return null;
    let n = l?.level === r._.HIGH,
        h = (0, s.jsx)(d.E, { variant: "text-sm/medium", color: "interactive-text-active", children: t.name });
    return (0, s.jsx)(c.m, {
        __unsupportedReactNodeAsText: h,
        position: "bottom",
        "aria-label": t.name,
        shouldShow: !a,
        children: (0, s.jsxs)("div", {
            className: x.Gt,
            children: [
                (0, s.jsx)("img", { className: x.T_, src: i, alt: t.name }),
                n &&
                    (0, s.jsx)(u.Ay, {
                        mask: u.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: 14,
                        height: 14,
                        className: x.Sy,
                        children: (0, s.jsx)("div", {
                            className: x._8,
                            children: (0, s.jsx)(m.Y, {
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
function v(e) {
    let { games: t, activity: l } = e;
    return (0, s.jsx)("div", {
        className: x.Fz,
        children: t.map((e) =>
            (0, s.jsxs)(
                "div",
                {
                    className: x.ZS,
                    children: [
                        (0, s.jsx)(h, { game: e, activityLevel: l[e.id] }),
                        (0, s.jsx)(d.E, {
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
function j(e) {
    let { game: t, activityLevel: l } = e;
    return (0, s.jsxs)("div", {
        className: x.E,
        children: [
            (0, s.jsx)(h, { game: t, activityLevel: l, hideTooltip: !0 }),
            (0, s.jsx)(d.E, { variant: "text-sm/medium", color: "text-default", children: t.name }),
        ],
    });
}
function N(e) {
    let { gamesToDisplay: t, lastGameToDisplay: l, remainingGames: i, activity: r } = e,
        m = l?.getIconURL(24),
        o = a.useMemo(
            () =>
                null == l || null == m
                    ? null
                    : 0 === i.length
                      ? (0, s.jsx)(h, { game: l, activityLevel: r[l.id] })
                      : (0, s.jsx)(c.m, {
                            "aria-label": "",
                            position: "bottom",
                            __unsupportedReactNodeAsText: (0, s.jsx)(v, { games: i, activity: r }),
                            children: (0, s.jsxs)("div", {
                                className: n()(x.Gt, x.oL),
                                children: [
                                    (0, s.jsx)("img", { className: n()(x.T_, x.tJ), src: m, alt: l.name }),
                                    (0, s.jsx)("div", { className: x.Fg }),
                                    (0, s.jsx)("div", {
                                        className: x.AZ,
                                        children: (0, s.jsx)(d.E, {
                                            variant: "text-xs/normal",
                                            color: "always-white",
                                            children: `+${i.length}`,
                                        }),
                                    }),
                                ],
                            }),
                        }),
            [l, m, i, r],
        );
    return null == t || 0 === t.length
        ? null
        : 1 === t.length
          ? (0, s.jsx)("div", { className: x.kL, children: (0, s.jsx)(j, { game: t[0], activityLevel: r[t[0].id] }) })
          : (0, s.jsxs)("div", {
                className: x.kL,
                children: [t.map((e) => (0, s.jsx)(h, { game: e, activityLevel: r[e.id] }, e.id)), o],
            });
}
