"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(110259),
    s = n(732955),
    a = n(397927),
    o = n(688810),
    l = n(139286),
    u = n(793943),
    c = n(738419),
    d = n(674547),
    _ = n(985018),
    f = n(214783),
    p = n(114149);
function h() {
    let { analyticsLocations: e } = (0, o.Ay)();
    (0, l.A)({
        name: i.ImpressionNames.CUSTOM_THEMES_PREVIEW_THEMES_BANNER,
        type: i.ImpressionTypes.VIEW,
        properties: { location_stack: e },
    });
    let t = () => {
        (0, c.b0)(c.G8.PREVIEW_THEMES), (0, u.nf)(u.HP.CUSTOM_THEME, { from: u.xv.CLIENT_THEMES_EDITOR });
    };
    return (0, r.jsxs)("div", {
        className: f.kL,
        children: [
            (0, r.jsxs)("div", {
                className: f.r$,
                children: [
                    (0, r.jsx)("img", { src: p.A, className: f._e, alt: "" }),
                    (0, r.jsxs)("div", {
                        className: f.P_,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: _.intl.string(d.default.XP4jzJ),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: _.intl.string(d.default.MJYvmG),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(s.$nd, {
                variant: "secondary",
                size: "sm",
                text: _.intl.string(d.default.eGxkmm),
                onClick: t,
                fullWidth: !0,
            }),
        ],
    });
}
