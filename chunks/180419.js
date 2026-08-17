t.d(l, { A: () => N });
var i,
    a = t(477900),
    s = t(582128),
    n = t(503698),
    r = t.n(n),
    c = (((i = {})[(i.NONE = 0)] = "NONE"), (i[(i.LOW = 1)] = "LOW"), (i[(i.HIGH = 2)] = "HIGH"), i),
    o = t(834730),
    d = t(825860),
    m = t(661531),
    u = t(866665),
    x = t(573435),
    v = t(409626),
    g = t(692969);
let h = (0, t(945810).mj)({
    name: "2026-07-server-tag-game-profiles-desktop",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var j = t(688057);
function f(e) {
    let { game: l, activityLevel: t, hideTooltip: i, clickable: s } = e,
        n = (0, g.A)({
            gameId: l.id,
            source: v.GameProfileSources.GuildProfileGames,
            trackEntryPointImpression: !0 === s,
        }),
        h = !0 === s && null != n,
        f = l.getIconURL(24);
    if (null == f) return null;
    let b = t?.level === c.HIGH,
        p = (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "interactive-text-active", children: l.name }),
        N = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("img", { className: j.T_, src: f, alt: l.name }),
                b &&
                    (0, a.jsx)(x.Ay, {
                        mask: x.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: 14,
                        height: 14,
                        className: j.Sy,
                        children: (0, a.jsx)("div", {
                            className: j._8,
                            children: (0, a.jsx)(d.FireIcon, {
                                color: m.A.unsafe_rawColors.ORANGE_330.css,
                                width: 10,
                                height: 10,
                                size: "custom",
                            }),
                        }),
                    }),
            ],
        });
    return (0, a.jsx)(u.m, {
        __unsupportedReactNodeAsText: p,
        position: "bottom",
        "aria-label": l.name,
        shouldShow: !i,
        children: h
            ? (0, a.jsx)("button", { type: "button", className: r()(j.Gt, j.U_), onClick: n, children: N })
            : (0, a.jsx)("div", { className: j.Gt, children: N }),
    });
}
function b(e) {
    let { games: l, activity: t, clickable: i } = e;
    return (0, a.jsx)("div", {
        className: j.Fz,
        children: l.map((e) =>
            (0, a.jsxs)(
                "div",
                {
                    className: j.ZS,
                    children: [
                        (0, a.jsx)(f, { game: e, activityLevel: t[e.id], clickable: i }),
                        (0, a.jsx)(o.E, {
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
function p(e) {
    let { game: l, activityLevel: t, clickable: i } = e;
    return (0, a.jsxs)("div", {
        className: j.E,
        children: [
            (0, a.jsx)(f, { game: l, activityLevel: t, clickable: i, hideTooltip: !0 }),
            (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: l.name }),
        ],
    });
}
function N(e) {
    return null == e.gamesToDisplay || 0 === e.gamesToDisplay.length ? null : (0, a.jsx)(A, { ...e });
}
function A(e) {
    let { gamesToDisplay: l, lastGameToDisplay: t, remainingGames: i, activity: n } = e,
        { enabled: c } = (function (e) {
            let { location: l } = e;
            return h.useConfig({ location: l });
        })({ location: "guild_profile_games" }),
        d = t?.getIconURL(24),
        m = s.useMemo(
            () =>
                null == t || null == d
                    ? null
                    : 0 === i.length
                      ? (0, a.jsx)(f, { game: t, activityLevel: n[t.id], clickable: c })
                      : (0, a.jsx)(u.m, {
                            "aria-label": "",
                            position: "bottom",
                            __unsupportedReactNodeAsText: (0, a.jsx)(b, { games: i, activity: n, clickable: c }),
                            children: (0, a.jsxs)("div", {
                                className: r()(j.Gt, j.oL),
                                children: [
                                    (0, a.jsx)("img", { className: r()(j.T_, j.tJ), src: d, alt: t.name }),
                                    (0, a.jsx)("div", { className: j.Fg }),
                                    (0, a.jsx)("div", {
                                        className: j.AZ,
                                        children: (0, a.jsx)(o.E, {
                                            variant: "text-xs/normal",
                                            color: "text-overlay-light",
                                            children: `+${i.length}`,
                                        }),
                                    }),
                                ],
                            }),
                        }),
            [t, d, i, n, c],
        );
    return 1 === l.length
        ? (0, a.jsx)("div", {
              className: j.kL,
              children: (0, a.jsx)(p, { game: l[0], activityLevel: n[l[0].id], clickable: c }),
          })
        : (0, a.jsxs)("div", {
              className: j.kL,
              children: [l.map((e) => (0, a.jsx)(f, { game: e, activityLevel: n[e.id], clickable: c }, e.id)), m],
          });
}
