t.d(l, { A: () => N });
var a,
    i = t(477900),
    s = t(582128),
    n = t(503698),
    r = t.n(n),
    c = (((a = {})[(a.NONE = 0)] = "NONE"), (a[(a.LOW = 1)] = "LOW"), (a[(a.HIGH = 2)] = "HIGH"), a),
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
    let { game: l, activityLevel: t, hideTooltip: a, clickable: s } = e,
        n = (0, g.A)({
            gameId: l.id,
            source: v.GameProfileSources.GuildProfileGames,
            trackEntryPointImpression: !0 === s,
        }),
        h = !0 === s && null != n,
        f = l.getIconURL(24);
    if (null == f) return null;
    let b = t?.level === c.HIGH,
        p = (0, i.jsx)(o.E, { variant: "text-sm/medium", color: "interactive-text-active", children: l.name }),
        N = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", { className: j.T_, src: f, alt: l.name }),
                b &&
                    (0, i.jsx)(x.Ay, {
                        mask: x.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: 14,
                        height: 14,
                        className: j.Sy,
                        children: (0, i.jsx)("div", {
                            className: j._8,
                            children: (0, i.jsx)(d.Y, {
                                color: m.A.unsafe_rawColors.ORANGE_330.css,
                                width: 10,
                                height: 10,
                                size: "custom",
                            }),
                        }),
                    }),
            ],
        });
    return (0, i.jsx)(u.m, {
        __unsupportedReactNodeAsText: p,
        position: "bottom",
        "aria-label": l.name,
        shouldShow: !a,
        children: h
            ? (0, i.jsx)("button", { type: "button", className: r()(j.Gt, j.U_), onClick: n, children: N })
            : (0, i.jsx)("div", { className: j.Gt, children: N }),
    });
}
function b(e) {
    let { games: l, activity: t, clickable: a } = e;
    return (0, i.jsx)("div", {
        className: j.Fz,
        children: l.map((e) =>
            (0, i.jsxs)(
                "div",
                {
                    className: j.ZS,
                    children: [
                        (0, i.jsx)(f, { game: e, activityLevel: t[e.id], clickable: a }),
                        (0, i.jsx)(o.E, {
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
    let { game: l, activityLevel: t, clickable: a } = e;
    return (0, i.jsxs)("div", {
        className: j.E,
        children: [
            (0, i.jsx)(f, { game: l, activityLevel: t, clickable: a, hideTooltip: !0 }),
            (0, i.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: l.name }),
        ],
    });
}
function N(e) {
    return null == e.gamesToDisplay || 0 === e.gamesToDisplay.length ? null : (0, i.jsx)(A, { ...e });
}
function A(e) {
    let { gamesToDisplay: l, lastGameToDisplay: t, remainingGames: a, activity: n } = e,
        { enabled: c } = (function (e) {
            let { location: l } = e;
            return h.useConfig({ location: l });
        })({ location: "guild_profile_games" }),
        d = t?.getIconURL(24),
        m = s.useMemo(
            () =>
                null == t || null == d
                    ? null
                    : 0 === a.length
                      ? (0, i.jsx)(f, { game: t, activityLevel: n[t.id], clickable: c })
                      : (0, i.jsx)(u.m, {
                            "aria-label": "",
                            position: "bottom",
                            __unsupportedReactNodeAsText: (0, i.jsx)(b, { games: a, activity: n, clickable: c }),
                            children: (0, i.jsxs)("div", {
                                className: r()(j.Gt, j.oL),
                                children: [
                                    (0, i.jsx)("img", { className: r()(j.T_, j.tJ), src: d, alt: t.name }),
                                    (0, i.jsx)("div", { className: j.Fg }),
                                    (0, i.jsx)("div", {
                                        className: j.AZ,
                                        children: (0, i.jsx)(o.E, {
                                            variant: "text-xs/normal",
                                            color: "text-overlay-light",
                                            children: `+${a.length}`,
                                        }),
                                    }),
                                ],
                            }),
                        }),
            [t, d, a, n, c],
        );
    return 1 === l.length
        ? (0, i.jsx)("div", {
              className: j.kL,
              children: (0, i.jsx)(p, { game: l[0], activityLevel: n[l[0].id], clickable: c }),
          })
        : (0, i.jsxs)("div", {
              className: j.kL,
              children: [l.map((e) => (0, i.jsx)(f, { game: e, activityLevel: n[e.id], clickable: c }, e.id)), m],
          });
}
