n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(97028),
    l = n(28664),
    c = n(481060),
    u = n(686546),
    d = n(810568),
    f = n(168524),
    _ = n(214288),
    p = n(638912);
let h = 10,
    m = 2;
function g(e) {
    let { game: t, activityLevel: n, hideTooltip: i } = e,
        a = t.getIconURL(24),
        o = (0, _.B)(),
        g = (0, f.Z)({
            location: "GuildProfile",
            source: d.m1.GuildProfile,
            trackEntryPointImpression: !0,
            applicationId: t.id,
        });
    if (null == a) return null;
    let E = !i,
        b = (null == n ? void 0 : n.level) === s.m.HIGH,
        y = (0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "interactive-active",
            children: t.name,
        }),
        O = (0, r.jsx)(l.u, {
            __unsupportedReactNodeAsText: y,
            position: "bottom",
            "aria-label": t.name,
            shouldShow: E,
            children: (0, r.jsxs)("div", {
                className: p.gameIcon,
                children: [
                    (0, r.jsx)("img", {
                        className: p.gameIconImage,
                        src: a,
                        alt: t.name,
                    }),
                    b &&
                        (0, r.jsx)(u.ZP, {
                            mask: u.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
                            width: h + 2 * m,
                            height: h + 2 * m,
                            className: p.gameActivityLevel,
                            children: (0, r.jsx)("div", {
                                className: p.gameActivityLevelInner,
                                children: (0, r.jsx)(c.YqE, {
                                    color: c.TVs.unsafe_rawColors.ORANGE_330.css,
                                    width: h,
                                    height: h,
                                    size: "custom",
                                }),
                            }),
                        }),
                ],
            }),
        });
    return o
        ? (0, r.jsx)(c.P3F, {
              onClick: g,
              className: p.gameIconWrapper,
              children: O,
          })
        : O;
}
function E(e) {
    let { games: t, activity: n } = e;
    return (0, r.jsx)("div", {
        className: p.extraGamesContainer,
        children: t.map((e) =>
            (0, r.jsxs)(
                "div",
                {
                    className: p.extraGameRow,
                    children: [
                        (0, r.jsx)(g, {
                            game: e,
                            activityLevel: n[e.id],
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-active",
                            children: e.name,
                        }),
                    ],
                },
                e.id,
            ),
        ),
    });
}
function b(e) {
    let { game: t, activityLevel: n } = e;
    return (0, r.jsxs)("div", {
        className: p.favoriteGameContainer,
        children: [
            (0, r.jsx)(g, {
                game: t,
                activityLevel: n,
                hideTooltip: !0,
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: t.name,
            }),
        ],
    });
}
function y(e) {
    let { gamesToDisplay: t, lastGameToDisplay: n, remainingGames: a, activity: s } = e,
        u = i.useMemo(() => {
            if (null == n) return null;
            let e = n.getIconURL(24);
            if (null == e) return null;
            if (0 === a.length)
                return (0, r.jsx)(g, {
                    game: n,
                    activityLevel: s[n.id],
                });
            let t = a;
            return (0, r.jsx)(l.u, {
                "aria-label": "",
                position: "bottom",
                __unsupportedReactNodeAsText: (0, r.jsx)(E, {
                    games: t,
                    activity: s,
                }),
                children: (0, r.jsxs)("div", {
                    className: o()(p.gameIcon, p.extraGameItem),
                    children: [
                        (0, r.jsx)("img", {
                            className: o()(p.gameIconImage, p.extraGameIconImage),
                            src: e,
                            alt: n.name,
                        }),
                        (0, r.jsx)("div", { className: p.extraGameOverlay }),
                        (0, r.jsx)("div", {
                            className: p.extraGameText,
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                children: "+".concat(t.length),
                            }),
                        }),
                    ],
                }),
            });
        }, [n, a, s]);
    return null == t || 0 === t.length
        ? null
        : 1 === t.length
          ? (0, r.jsx)("div", {
                className: p.container,
                children: (0, r.jsx)(b, {
                    game: t[0],
                    activityLevel: s[t[0].id],
                }),
            })
          : (0, r.jsxs)("div", {
                className: p.container,
                children: [
                    t.map((e) =>
                        (0, r.jsx)(
                            g,
                            {
                                game: e,
                                activityLevel: s[e.id],
                            },
                            e.id,
                        ),
                    ),
                    u,
                ],
            });
}
