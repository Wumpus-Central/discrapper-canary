n.d(t, { Z: () => m }), n(472816), n(794429), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(224706),
    u = n(77498),
    d = n(768581),
    f = n(502762),
    _ = n(388032),
    p = n(350917);
let h = 4;
function m(e) {
    let { widgets: t, onClick: n } = e,
        a = (0, i.useMemo)(() => t.map((e) => e.games.map((e) => e.applicationId)).flat(), [t]),
        o = (0, s.e7)([u.Z], () => u.Z.canFetchDetectableGames()),
        [m, E] = (0, i.useState)([]);
    return (
        (0, i.useEffect)(() => {
            if (o) return void c.Z.getDetectableGames();
            E(
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
                    .slice(0, h),
            );
        }, [a, o]),
        (0, r.jsx)(f.Z.Overlay, {
            children: (0, r.jsxs)(l.P3F, {
                "aria-label": _.intl.string(_.t.JjiwFx),
                className: p.breadcrumb,
                onClick: n,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-xs/medium",
                        children: _.intl.string(_.t.JjiwFx),
                    }),
                    (0, r.jsx)("div", {
                        className: p.icons,
                        children: m.map((e, t) =>
                            (0, r.jsx)(
                                g,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: t === m.length - 1 && a.length > h,
                                    gameCount: a.length - m.length,
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
function g(e) {
    let { iconUrl: t, name: n, displayCount: i, gameCount: a } = e;
    return (0, r.jsxs)("div", {
        className: p.icon,
        children: [
            (0, r.jsx)("img", {
                className: o()({ [p.displayCount]: i }),
                src: t,
                alt: n,
            }),
            i &&
                (0, r.jsxs)(l.Text, {
                    className: p.displayCountText,
                    variant: "text-xs/medium",
                    children: ["+", a],
                }),
        ],
    });
}
