n.d(t, { Z: () => b }), n(472816), n(794429), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(224706),
    u = n(77498),
    d = n(768581),
    f = n(836197),
    _ = n(502762),
    p = n(652853),
    h = n(671955),
    m = n(388032),
    g = n(987364);
let E = 4;
function b(e) {
    let { widgets: t, onClick: n } = e,
        a = (0, i.useMemo)(
            () => [...new Set(t.map((e) => ((0, f.W)(e) ? e.games.map((e) => e.applicationId) : [])).flat())],
            [t],
        ),
        o = (0, s.e7)([u.Z], () => u.Z.canFetchDetectableGames()),
        [b, O] = (0, i.useState)([]),
        { themeType: v } = (0, p.z)(),
        I = v === h.l.SIDEBAR;
    return (
        (0, i.useEffect)(() => {
            if (o) return void c.Z.getDetectableGames();
            O(
                a
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
                    .slice(0, E),
            );
        }, [a, o]),
        (0, r.jsx)(l.P3F, {
            "aria-label": m.intl.string(m.t.JjiwFx),
            onClick: n,
            className: g.breadcrumb,
            children: (0, r.jsxs)(_.Z.Overlay, {
                className: g.innerContainer,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: I ? "text-sm/medium" : "text-xs/medium",
                        children: m.intl.string(m.t.JjiwFx),
                    }),
                    (0, r.jsx)("div", {
                        className: g.icons,
                        children: b.map((e, t) =>
                            (0, r.jsx)(
                                y,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: t === b.length - 1 && a.length > E,
                                    gameCount: a.length - b.length,
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
function y(e) {
    let { iconUrl: t, name: n, displayCount: i, gameCount: a } = e;
    return (0, r.jsxs)("div", {
        className: g.icon,
        children: [
            (0, r.jsx)("img", {
                className: o()({ [g.displayCount]: i }),
                src: t,
                alt: n,
            }),
            i &&
                (0, r.jsx)("div", {
                    className: g.displayCountText,
                    children: (0, r.jsxs)(l.Text, {
                        variant: "text-xs/medium",
                        className: g.displayCountTextColor,
                        children: ["+", a],
                    }),
                }),
        ],
    });
}
