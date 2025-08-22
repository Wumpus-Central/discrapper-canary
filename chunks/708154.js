n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(990547),
    a = n(680018),
    o = n(481060),
    s = n(906732),
    l = n(213609),
    c = n(550385),
    u = n(119475),
    d = n(388032),
    f = n(574876),
    _ = n(374291);
function p() {
    let { analyticsLocations: e } = (0, s.ZP)();
    (0, l.Z)({
        name: i.ImpressionNames.CUSTOM_THEMES_PREVIEW_THEMES_BANNER,
        type: i.ImpressionTypes.VIEW,
        properties: { location_stack: e },
    });
    let t = () => {
        (0, c.XO)(c.wh.CUSTOM_THEME, { from: c.tE.CLIENT_THEMES_EDITOR });
    };
    return (0, r.jsxs)("div", {
        className: f.container,
        children: [
            (0, r.jsxs)("div", {
                className: f.topContent,
                children: [
                    (0, r.jsx)("img", {
                        src: _.Z,
                        className: f.bannerImage,
                        alt: "",
                    }),
                    (0, r.jsxs)("div", {
                        className: f.textContent,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/semibold",
                                color: "text-primary",
                                children: d.intl.string(u.default.XP4jzM),
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-tertiary",
                                children: d.intl.string(u.default.MJYvmJ),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(a.z, {
                variant: "secondary",
                size: "sm",
                text: d.intl.string(u.default.eGxkmp),
                onClick: t,
                fullWidth: !0,
            }),
        ],
    });
}
