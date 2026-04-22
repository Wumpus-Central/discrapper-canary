"use strict";
n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var l = n(110259),
    r = n(821609),
    s = n(834730),
    a = n(688810),
    c = n(139286),
    o = n(793943),
    u = n(738419),
    d = n(693227),
    _ = n(985018),
    E = n(863816),
    m = n(114149);
function T() {
    let { analyticsLocations: e } = (0, a.Ay)();
    return (
        (0, c.A)({
            name: l.ImpressionNames.CUSTOM_THEMES_PREVIEW_THEMES_BANNER,
            type: l.ImpressionTypes.VIEW,
            properties: { location_stack: e },
        }),
        (0, i.jsxs)("div", {
            className: E.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: E.r$,
                    children: [
                        (0, i.jsx)("img", { src: m.A, className: E._e, alt: "" }),
                        (0, i.jsxs)("div", {
                            className: E.P_,
                            children: [
                                (0, i.jsx)(s.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: _.intl.string(d.default.XP4jzJ),
                                }),
                                (0, i.jsx)(s.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: _.intl.string(d.default.MJYvmG),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(r.$, {
                    variant: "secondary",
                    size: "sm",
                    text: _.intl.string(d.default.eGxkmm),
                    onClick: () => {
                        (0, u.b0)(u.G8.PREVIEW_THEMES),
                            (0, o.nf)(o.HP.CUSTOM_THEME, { from: o.xv.CLIENT_THEMES_EDITOR });
                    },
                    fullWidth: !0,
                }),
            ],
        })
    );
}
