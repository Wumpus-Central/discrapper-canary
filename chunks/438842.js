"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(47762),
    o = n(990078),
    c = n(834730),
    d = n(825860),
    u = n(827734),
    _ = n(573435),
    h = n(454908),
    m = n(486020),
    p = n(822017);
function g(e) {
    let { game: t, activityLevel: n, hideTooltip: s } = e,
        { data: r } = (0, h.I)(t.id),
        l = r?.iconHash,
        g = null != l ? m.Ay.getGameAssetURL({ id: t.id, hash: l, size: 24 }) : t.getIconURL(24);
    if (null == g) return null;
    let A = n?.level === a._.HIGH,
        f = (0, i.jsx)(c.E, { variant: "text-sm/medium", color: "interactive-text-active", children: t.name });
    return (0, i.jsx)(o.m, {
        __unsupportedReactNodeAsText: f,
        position: "bottom",
        "aria-label": t.name,
        shouldShow: !s,
        children: (0, i.jsxs)("div", {
            className: p.Gt,
            children: [
                (0, i.jsx)("img", { className: p.T_, src: g, alt: t.name }),
                A &&
                    (0, i.jsx)(_.Ay, {
                        mask: _.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: 14,
                        height: 14,
                        className: p.Sy,
                        children: (0, i.jsx)("div", {
                            className: p._8,
                            children: (0, i.jsx)(d.Y, {
                                color: u.A.unsafe_rawColors.ORANGE_330.css,
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
function A(e) {
    let { games: t, activity: n } = e;
    return (0, i.jsx)("div", {
        className: p.Fz,
        children: t.map((e) =>
            (0, i.jsxs)(
                "div",
                {
                    className: p.ZS,
                    children: [
                        (0, i.jsx)(g, { game: e, activityLevel: n[e.id] }),
                        (0, i.jsx)(c.E, {
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
function f(e) {
    let { game: t, activityLevel: n } = e;
    return (0, i.jsxs)("div", {
        className: p.E,
        children: [
            (0, i.jsx)(g, { game: t, activityLevel: n, hideTooltip: !0 }),
            (0, i.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", children: t.name }),
        ],
    });
}
function x(e) {
    let { gamesToDisplay: t, lastGameToDisplay: n, remainingGames: r, activity: a } = e,
        { data: d } = (0, h.I)(n?.id),
        u = d?.iconHash,
        _ = null != u && null != n ? m.Ay.getGameAssetURL({ id: n.id, hash: u, size: 24 }) : n?.getIconURL(24),
        x = s.useMemo(
            () =>
                null == n || null == _
                    ? null
                    : 0 === r.length
                      ? (0, i.jsx)(g, { game: n, activityLevel: a[n.id] })
                      : (0, i.jsx)(o.m, {
                            "aria-label": "",
                            position: "bottom",
                            __unsupportedReactNodeAsText: (0, i.jsx)(A, { games: r, activity: a }),
                            children: (0, i.jsxs)("div", {
                                className: l()(p.Gt, p.oL),
                                children: [
                                    (0, i.jsx)("img", { className: l()(p.T_, p.tJ), src: _, alt: n.name }),
                                    (0, i.jsx)("div", { className: p.Fg }),
                                    (0, i.jsx)("div", {
                                        className: p.AZ,
                                        children: (0, i.jsx)(c.E, {
                                            variant: "text-xs/normal",
                                            color: "always-white",
                                            children: `+${r.length}`,
                                        }),
                                    }),
                                ],
                            }),
                        }),
            [n, _, r, a],
        );
    return null == t || 0 === t.length
        ? null
        : 1 === t.length
          ? (0, i.jsx)("div", { className: p.kL, children: (0, i.jsx)(f, { game: t[0], activityLevel: a[t[0].id] }) })
          : (0, i.jsxs)("div", {
                className: p.kL,
                children: [t.map((e) => (0, i.jsx)(g, { game: e, activityLevel: a[e.id] }, e.id)), x],
            });
}
