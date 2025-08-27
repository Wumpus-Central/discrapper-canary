n.d(t, { Z: () => E }), n(472816), n(794429), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(224706),
    u = n(77498),
    d = n(768581),
    f = n(502762),
    _ = n(652853),
    p = n(671955),
    h = n(388032),
    m = n(350917);
let g = 4;
function E(e) {
    let { widgets: t, onClick: n } = e,
        o = (0, i.useMemo)(() => t.map((e) => e.games.map((e) => e.applicationId)).flat(), [t]),
        a = (0, s.e7)([u.Z], () => u.Z.canFetchDetectableGames()),
        [E, y] = (0, i.useState)([]),
        { themeType: O } = (0, _.z)(),
        v = O === p.l.SIDEBAR;
    return (
        (0, i.useEffect)(() => {
            if (a) return void c.Z.getDetectableGames();
            y(
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
                    .slice(0, g),
            );
        }, [o, a]),
        (0, r.jsx)(l.P3F, {
            "aria-label": h.intl.string(h.t.JjiwFx),
            onClick: n,
            className: m.breadcrumb,
            children: (0, r.jsxs)(f.Z.Overlay, {
                className: m.innerContainer,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: v ? "text-sm/medium" : "text-xs/medium",
                        children: h.intl.string(h.t.JjiwFx),
                    }),
                    (0, r.jsx)("div", {
                        className: m.icons,
                        children: E.map((e, t) =>
                            (0, r.jsx)(
                                b,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: t === E.length - 1 && o.length > g,
                                    gameCount: o.length - E.length,
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
function b(e) {
    let { iconUrl: t, name: n, displayCount: i, gameCount: o } = e;
    return (0, r.jsxs)("div", {
        className: m.icon,
        children: [
            (0, r.jsx)("img", {
                className: a()({ [m.displayCount]: i }),
                src: t,
                alt: n,
            }),
            i &&
                (0, r.jsx)("div", {
                    className: m.displayCountText,
                    children: (0, r.jsxs)(l.Text, {
                        variant: "text-xs/medium",
                        className: m.displayCountTextColor,
                        children: ["+", o],
                    }),
                }),
        ],
    });
}
