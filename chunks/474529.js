n.d(t, {
    A: () => h,
});
var r = n(627968);
n(64700);
var i = n(110259),
    a = n(732955),
    s = n(397927),
    o = n(688810),
    l = n(139286),
    c = n(793943),
    u = n(738419),
    d = n(520650),
    f = n(985018),
    p = n(61305),
    _ = n(114149);

function h() {
    let { analyticsLocations: e } = (0, o.Ay)();
    (0, l.A)({
        name: i.ImpressionNames.CUSTOM_THEMES_PREVIEW_THEMES_BANNER,
        type: i.ImpressionTypes.VIEW,
        properties: {
            location_stack: e,
        },
    });
    let t = () => {
        (0, u.b0)(u.G8.PREVIEW_THEMES),
            (0, c.nf)(c.HP.CUSTOM_THEME, {
                from: c.xv.CLIENT_THEMES_EDITOR,
            });
    };
    return (0, r.jsxs)("div", {
        className: p.kL,
        children: [
            (0, r.jsxs)("div", {
                className: p.r$,
                children: [
                    (0, r.jsx)("img", {
                        src: _.A,
                        className: p._e,
                        alt: "",
                    }),
                    (0, r.jsxs)("div", {
                        className: p.P_,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: f.intl.string(d.default.XP4jzJ),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: f.intl.string(d.default.MJYvmG),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(a.$nd, {
                variant: "secondary",
                size: "sm",
                text: f.intl.string(d.default.eGxkmm),
                onClick: t,
                fullWidth: !0,
            }),
        ],
    });
}
