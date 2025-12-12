n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(97028),
    l = n(28664),
    c = n(481060),
    u = n(686546),
    d = n(810568),
    f = n(168524),
    p = n(214288),
    _ = n(638912);
let m = 10,
    h = 2;
function g(e) {
    let { game: t, activityLevel: n, hideTooltip: i } = e,
        o = t.getIconURL(24),
        a = (0, p.B)(),
        g = (0, f.Z)({
            location: "GuildProfile",
            source: d.m1.GuildProfile,
            trackEntryPointImpression: !0,
            applicationId: t.id,
        });
    if (null == o) return null;
    let E = !i,
        b = (null == n ? void 0 : n.level) === s.m.HIGH,
        y = (0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "interactive-text-active",
            children: t.name,
        }),
        O = (0, r.jsx)(l.u, {
            __unsupportedReactNodeAsText: y,
            position: "bottom",
            "aria-label": t.name,
            shouldShow: E,
            children: (0, r.jsxs)("div", {
                className: _.gameIcon,
                children: [
                    (0, r.jsx)("img", {
                        className: _.gameIconImage,
                        src: o,
                        alt: t.name,
                    }),
                    b &&
                        (0, r.jsx)(u.ZP, {
                            mask: u.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
                            width: m + 2 * h,
                            height: m + 2 * h,
                            className: _.gameActivityLevel,
                            children: (0, r.jsx)("div", {
                                className: _.gameActivityLevelInner,
                                children: (0, r.jsx)(c.YqE, {
                                    color: c.TVs.unsafe_rawColors.ORANGE_330.css,
                                    width: m,
                                    height: m,
                                    size: "custom",
                                }),
                            }),
                        }),
                ],
            }),
        });
    return a
        ? (0, r.jsx)(c.P3F, {
              onClick: g,
              className: _.gameIconWrapper,
              children: O,
          })
        : O;
}
function E(e) {
    let { games: t, activity: n } = e;
    return (0, r.jsx)("div", {
        className: _.extraGamesContainer,
        children: t.map((e) =>
            (0, r.jsxs)(
                "div",
                {
                    className: _.extraGameRow,
                    children: [
                        (0, r.jsx)(g, {
                            game: e,
                            activityLevel: n[e.id],
                        }),
                        (0, r.jsx)(c.Text, {
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
function b(e) {
    let { game: t, activityLevel: n } = e;
    return (0, r.jsxs)("div", {
        className: _.favoriteGameContainer,
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
    let { gamesToDisplay: t, lastGameToDisplay: n, remainingGames: o, activity: s } = e,
        u = i.useMemo(() => {
            if (null == n) return null;
            let e = n.getIconURL(24);
            if (null == e) return null;
            if (0 === o.length)
                return (0, r.jsx)(g, {
                    game: n,
                    activityLevel: s[n.id],
                });
            let t = o;
            return (0, r.jsx)(l.u, {
                "aria-label": "",
                position: "bottom",
                __unsupportedReactNodeAsText: (0, r.jsx)(E, {
                    games: t,
                    activity: s,
                }),
                children: (0, r.jsxs)("div", {
                    className: a()(_.gameIcon, _.extraGameItem),
                    children: [
                        (0, r.jsx)("img", {
                            className: a()(_.gameIconImage, _.extraGameIconImage),
                            src: e,
                            alt: n.name,
                        }),
                        (0, r.jsx)("div", { className: _.extraGameOverlay }),
                        (0, r.jsx)("div", {
                            className: _.extraGameText,
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                children: "+".concat(t.length),
                            }),
                        }),
                    ],
                }),
            });
        }, [n, o, s]);
    return null == t || 0 === t.length
        ? null
        : 1 === t.length
          ? (0, r.jsx)("div", {
                className: _.container,
                children: (0, r.jsx)(b, {
                    game: t[0],
                    activityLevel: s[t[0].id],
                }),
            })
          : (0, r.jsxs)("div", {
                className: _.container,
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
