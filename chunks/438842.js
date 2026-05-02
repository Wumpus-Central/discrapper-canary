s.d(t, { A: () => N });
var l = s(627968),
    a = s(64700),
    i = s(503698),
    n = s.n(i),
    r = s(47762),
    c = s(990078),
    d = s(834730),
    m = s(825860),
    o = s(661531),
    x = s(573435),
    u = s(822017);
function h(e) {
    let { game: t, activityLevel: s, hideTooltip: a } = e,
        i = t.getIconURL(24);
    if (null == i) return null;
    let n = s?.level === r._.HIGH,
        h = (0, l.jsx)(d.E, { variant: "text-sm/medium", color: "interactive-text-active", children: t.name });
    return (0, l.jsx)(c.m, {
        __unsupportedReactNodeAsText: h,
        position: "bottom",
        "aria-label": t.name,
        shouldShow: !a,
        children: (0, l.jsxs)("div", {
            className: u.Gt,
            children: [
                (0, l.jsx)("img", { className: u.T_, src: i, alt: t.name }),
                n &&
                    (0, l.jsx)(x.Ay, {
                        mask: x.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: 14,
                        height: 14,
                        className: u.Sy,
                        children: (0, l.jsx)("div", {
                            className: u._8,
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
function v(e) {
    let { games: t, activity: s } = e;
    return (0, l.jsx)("div", {
        className: u.Fz,
        children: t.map((e) =>
            (0, l.jsxs)(
                "div",
                {
                    className: u.ZS,
                    children: [
                        (0, l.jsx)(h, { game: e, activityLevel: s[e.id] }),
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
function j(e) {
    let { game: t, activityLevel: s } = e;
    return (0, l.jsxs)("div", {
        className: u.E,
        children: [
            (0, l.jsx)(h, { game: t, activityLevel: s, hideTooltip: !0 }),
            (0, l.jsx)(d.E, { variant: "text-sm/medium", color: "text-default", children: t.name }),
        ],
    });
}
function N(e) {
    let { gamesToDisplay: t, lastGameToDisplay: s, remainingGames: i, activity: r } = e,
        m = s?.getIconURL(24),
        o = a.useMemo(
            () =>
                null == s || null == m
                    ? null
                    : 0 === i.length
                      ? (0, l.jsx)(h, { game: s, activityLevel: r[s.id] })
                      : (0, l.jsx)(c.m, {
                            "aria-label": "",
                            position: "bottom",
                            __unsupportedReactNodeAsText: (0, l.jsx)(v, { games: i, activity: r }),
                            children: (0, l.jsxs)("div", {
                                className: n()(u.Gt, u.oL),
                                children: [
                                    (0, l.jsx)("img", { className: n()(u.T_, u.tJ), src: m, alt: s.name }),
                                    (0, l.jsx)("div", { className: u.Fg }),
                                    (0, l.jsx)("div", {
                                        className: u.AZ,
                                        children: (0, l.jsx)(d.E, {
                                            variant: "text-xs/normal",
                                            color: "always-white",
                                            children: `+${i.length}`,
                                        }),
                                    }),
                                ],
                            }),
                        }),
            [s, m, i, r],
        );
    return null == t || 0 === t.length
        ? null
        : 1 === t.length
          ? (0, l.jsx)("div", { className: u.kL, children: (0, l.jsx)(j, { game: t[0], activityLevel: r[t[0].id] }) })
          : (0, l.jsxs)("div", {
                className: u.kL,
                children: [t.map((e) => (0, l.jsx)(h, { game: e, activityLevel: r[e.id] }, e.id)), o],
            });
}
