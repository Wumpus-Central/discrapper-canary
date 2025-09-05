n.d(t, { Z: () => y }), n(472816), n(794429), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(224706),
    u = n(77498),
    d = n(768581),
    f = n(785717),
    _ = n(836197),
    p = n(502762),
    h = n(652853),
    m = n(671955),
    g = n(388032),
    E = n(350917);
let b = 4;
function y(e) {
    let { widgets: t, onClick: n } = e,
        { trackUserProfileAction: a } = (0, f.KZ)(),
        o = (0, i.useMemo)(
            () => [...new Set(t.map((e) => ((0, _.W)(e) ? e.games.map((e) => e.applicationId) : [])).flat())],
            [t],
        ),
        y = (0, s.e7)([u.Z], () => u.Z.canFetchDetectableGames()),
        [v, I] = (0, i.useState)([]),
        { themeType: T } = (0, h.z)(),
        S = T === m.l.SIDEBAR;
    return (
        (0, i.useEffect)(() => {
            if (y) return void c.Z.getDetectableGames();
            I(
                o
                    .map((e) => u.Z.getDetectableGame(e))
                    .filter((e) => null != e)
                    .map((e) => {
                        var t;
                        return {
                            image:
                                null !=
                                (t = d.ZP.getApplicationIconURL({
                                    id: e.id,
                                    icon: e.icon,
                                }))
                                    ? t
                                    : "",
                            name: e.name,
                        };
                    })
                    .filter((e) => "" !== e.image)
                    .slice(0, b),
            );
        }, [o, y]),
        (0, r.jsx)(l.P3F, {
            "aria-label": g.intl.string(g.t.JjiwFx),
            onClick: () => {
                a({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), n();
            },
            className: E.breadcrumb,
            children: (0, r.jsxs)(p.Z.Overlay, {
                className: E.innerContainer,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: S ? "text-sm/medium" : "text-xs/medium",
                        children: g.intl.string(g.t.JjiwFx),
                    }),
                    (0, r.jsx)("div", {
                        className: E.icons,
                        children: v.map((e, t) =>
                            (0, r.jsx)(
                                O,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: t === v.length - 1 && o.length > b,
                                    gameCount: o.length - v.length,
                                },
                                t,
                            ),
                        ),
                    }),
                ],
            }),
        })
    );
}
function O(e) {
    let { iconUrl: t, name: n, displayCount: i, gameCount: a } = e;
    return (0, r.jsxs)("div", {
        className: E.icon,
        children: [
            (0, r.jsx)("img", {
                className: o()({ [E.displayCount]: i }),
                src: t,
                alt: n,
            }),
            i &&
                (0, r.jsx)("div", {
                    className: E.displayCountText,
                    children: (0, r.jsxs)(l.Text, {
                        variant: "text-xs/medium",
                        className: E.displayCountTextColor,
                        children: ["+", a],
                    }),
                }),
        ],
    });
}
