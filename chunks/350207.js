n.d(t, { Z: () => T }), n(467055), n(388685), n(472816), n(794429);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(224706),
    u = n(835473),
    d = n(77498),
    f = n(768581),
    _ = n(823379),
    p = n(785717),
    h = n(931847),
    m = n(836197),
    g = n(502762),
    E = n(652853),
    b = n(671955),
    y = n(388032),
    O = n(350917);
let v = 4;
function I(e) {
    let t = (0, u.Z)(e.map((e) => e.applicationId));
    return (0, s.cj)([d.Z], () =>
        Object.fromEntries(
            t
                .filter(_.lm)
                .map((e) => [e.id, d.Z.getGameByApplication(e)])
                .filter((e) => {
                    let [t, n] = e;
                    return null != n;
                }),
        ),
    );
}
function T(e) {
    let { widgets: t = [], onClick: n, className: a } = e,
        { trackUserProfileAction: u } = (0, p.KZ)(),
        T = I(t.filter((e) => e instanceof h.q)),
        A = (0, i.useMemo)(
            () => [
                ...new Set(
                    t
                        .map((e) => {
                            if (e instanceof m.zy) return e.games.map((e) => e.applicationId);
                            if (e instanceof h.q) {
                                var t;
                                return null == (t = T[e.applicationId]) ? void 0 : t.id;
                            }
                        })
                        .filter(_.lm)
                        .flat(),
                ),
            ],
            [t, T],
        ),
        C = (0, s.e7)([d.Z], () => d.Z.canFetchDetectableGames()),
        [N, R] = (0, i.useState)([]),
        { themeType: P } = (0, E.z)(),
        D = P === b.l.SIDEBAR,
        w = (0, i.useRef)(!1);
    return (
        (0, i.useEffect)(() => {
            if (C) return void c.Z.getDetectableGames();
            R(
                A.map((e) => d.Z.getDetectableGame(e))
                    .filter((e) => null != e)
                    .map((e) => {
                        var t;
                        return {
                            image:
                                null !=
                                (t = f.ZP.getApplicationIconURL({
                                    id: e.id,
                                    icon: e.icon,
                                }))
                                    ? t
                                    : "",
                            name: e.name,
                        };
                    })
                    .filter((e) => "" !== e.image)
                    .slice(0, v),
            );
        }, [A, C]),
        (0, i.useEffect)(() => {
            0 !== N.length && (w.current || (u({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (w.current = !0)));
        }, [u, N.length]),
        (0, r.jsx)(l.P3F, {
            "aria-label": y.intl.string(y.t.JjiwFx),
            onClick: () => {
                u({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), n();
            },
            className: O.breadcrumb,
            children: (0, r.jsxs)(g.Z.Overlay, {
                className: o()(O.innerContainer, a),
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: D ? "text-sm/medium" : "text-xs/medium",
                        children: y.intl.string(y.t.JjiwFx),
                    }),
                    (0, r.jsx)("div", {
                        className: O.icons,
                        children: N.map((e, t) =>
                            (0, r.jsx)(
                                S,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: t === N.length - 1 && A.length > v,
                                    gameCount: A.length - N.length,
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
function S(e) {
    let { iconUrl: t, name: n, displayCount: i, gameCount: a } = e;
    return (0, r.jsxs)("div", {
        className: O.icon,
        children: [
            (0, r.jsx)("img", {
                className: o()({ [O.displayCount]: i }),
                src: t,
                alt: n,
            }),
            i &&
                (0, r.jsx)("div", {
                    className: O.displayCountText,
                    children: (0, r.jsxs)(l.Text, {
                        variant: "text-xs/medium",
                        className: O.displayCountTextColor,
                        children: ["+", a],
                    }),
                }),
        ],
    });
}
