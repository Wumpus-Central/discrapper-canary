t.d(l, { A: () => N });
var s,
    a = t(627968),
    i = t(64700),
    n = t(503698),
    r = t.n(n),
    c = (((s = {})[(s.NONE = 0)] = "NONE"), (s[(s.LOW = 1)] = "LOW"), (s[(s.HIGH = 2)] = "HIGH"), s),
    o = t(990078),
    d = t(834730),
    m = t(825860),
    u = t(661531),
    x = t(573435),
    h = t(409626),
    v = t(692969);
let j = (0, t(945810).mj)({
    name: "2026-07-server-tag-game-profiles-desktop",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var g = t(822017);
function f(e) {
    let { game: l, activityLevel: t, hideTooltip: s, clickable: i } = e,
        n = (0, v.A)({
            gameId: l.id,
            source: h.GameProfileSources.GuildProfileGames,
            trackEntryPointImpression: !0 === i,
        }),
        j = !0 === i && null != n,
        f = l.getIconURL(24);
    if (null == f) return null;
    let b = t?.level === c.HIGH,
        p = (0, a.jsx)(d.E, { variant: "text-sm/medium", color: "interactive-text-active", children: l.name }),
        N = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("img", { className: g.T_, src: f, alt: l.name }),
                b &&
                    (0, a.jsx)(x.Ay, {
                        mask: x.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: 14,
                        height: 14,
                        className: g.Sy,
                        children: (0, a.jsx)("div", {
                            className: g._8,
                            children: (0, a.jsx)(m.Y, {
                                color: u.A.unsafe_rawColors.ORANGE_330.css,
                                width: 10,
                                height: 10,
                                size: "custom",
                            }),
                        }),
                    }),
            ],
        });
    return (0, a.jsx)(o.m, {
        __unsupportedReactNodeAsText: p,
        position: "bottom",
        "aria-label": l.name,
        shouldShow: !s,
        children: j
            ? (0, a.jsx)("button", { type: "button", className: r()(g.Gt, g.U_), onClick: n, children: N })
            : (0, a.jsx)("div", { className: g.Gt, children: N }),
    });
}
function b(e) {
    let { games: l, activity: t, clickable: s } = e;
    return (0, a.jsx)("div", {
        className: g.Fz,
        children: l.map((e) =>
            (0, a.jsxs)(
                "div",
                {
                    className: g.ZS,
                    children: [
                        (0, a.jsx)(f, { game: e, activityLevel: t[e.id], clickable: s }),
                        (0, a.jsx)(d.E, {
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
    let { game: l, activityLevel: t, clickable: s } = e;
    return (0, a.jsxs)("div", {
        className: g.E,
        children: [
            (0, a.jsx)(f, { game: l, activityLevel: t, clickable: s, hideTooltip: !0 }),
            (0, a.jsx)(d.E, { variant: "text-sm/medium", color: "text-default", children: l.name }),
        ],
    });
}
function N(e) {
    return null == e.gamesToDisplay || 0 === e.gamesToDisplay.length ? null : (0, a.jsx)(A, { ...e });
}
function A(e) {
    let { gamesToDisplay: l, lastGameToDisplay: t, remainingGames: s, activity: n } = e,
        { enabled: c } = (function (e) {
            let { location: l } = e;
            return j.useConfig({ location: l });
        })({ location: "guild_profile_games" }),
        m = t?.getIconURL(24),
        u = i.useMemo(
            () =>
                null == t || null == m
                    ? null
                    : 0 === s.length
                      ? (0, a.jsx)(f, { game: t, activityLevel: n[t.id], clickable: c })
                      : (0, a.jsx)(o.m, {
                            "aria-label": "",
                            position: "bottom",
                            __unsupportedReactNodeAsText: (0, a.jsx)(b, { games: s, activity: n, clickable: c }),
                            children: (0, a.jsxs)("div", {
                                className: r()(g.Gt, g.oL),
                                children: [
                                    (0, a.jsx)("img", { className: r()(g.T_, g.tJ), src: m, alt: t.name }),
                                    (0, a.jsx)("div", { className: g.Fg }),
                                    (0, a.jsx)("div", {
                                        className: g.AZ,
                                        children: (0, a.jsx)(d.E, {
                                            variant: "text-xs/normal",
                                            color: "always-white",
                                            children: `+${s.length}`,
                                        }),
                                    }),
                                ],
                            }),
                        }),
            [t, m, s, n, c],
        );
    return 1 === l.length
        ? (0, a.jsx)("div", {
              className: g.kL,
              children: (0, a.jsx)(p, { game: l[0], activityLevel: n[l[0].id], clickable: c }),
          })
        : (0, a.jsxs)("div", {
              className: g.kL,
              children: [l.map((e) => (0, a.jsx)(f, { game: e, activityLevel: n[e.id], clickable: c }, e.id)), u],
          });
}
