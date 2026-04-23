a.d(t, { A: () => m });
var s = a(627968);
a(64700);
var r = a(110259),
    i = a(821609),
    n = a(834730),
    l = a(688810),
    c = a(139286),
    _ = a(793943),
    E = a(738419),
    o = a(693227),
    d = a(985018),
    T = a(863816),
    u = a(114149);
function m() {
    let { analyticsLocations: e } = (0, l.Ay)();
    return (
        (0, c.A)({
            name: r.ImpressionNames.CUSTOM_THEMES_PREVIEW_THEMES_BANNER,
            type: r.ImpressionTypes.VIEW,
            properties: { location_stack: e },
        }),
        (0, s.jsxs)("div", {
            className: T.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: T.r$,
                    children: [
                        (0, s.jsx)("img", { src: u.A, className: T._e, alt: "" }),
                        (0, s.jsxs)("div", {
                            className: T.P_,
                            children: [
                                (0, s.jsx)(n.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: d.intl.string(o.default.XP4jzJ),
                                }),
                                (0, s.jsx)(n.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: d.intl.string(o.default.MJYvmG),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsx)(i.$, {
                    variant: "secondary",
                    size: "sm",
                    text: d.intl.string(o.default.eGxkmm),
                    onClick: () => {
                        (0, E.b0)(E.G8.PREVIEW_THEMES),
                            (0, _.nf)(_.HP.CUSTOM_THEME, { from: _.xv.CLIENT_THEMES_EDITOR });
                    },
                    fullWidth: !0,
                }),
            ],
        })
    );
}
