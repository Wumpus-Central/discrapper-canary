n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(990547),
    a = n(159691),
    o = n(481060),
    s = n(906732),
    l = n(213609),
    c = n(550385),
    u = n(771934),
    d = n(202283),
    f = n(388032),
    p = n(574876),
    _ = n(758335);
function m() {
    let { analyticsLocations: e } = (0, s.ZP)();
    (0, l.Z)({
        name: i.ImpressionNames.CUSTOM_THEMES_PREVIEW_THEMES_BANNER,
        type: i.ImpressionTypes.VIEW,
        properties: { location_stack: e },
    });
    let t = () => {
        (0, u.DI)(u.Ln.PREVIEW_THEMES), (0, c.XO)(c.wh.CUSTOM_THEME, { from: c.tE.CLIENT_THEMES_EDITOR });
    };
    return (0, r.jsxs)("div", {
        className: p.container,
        children: [
            (0, r.jsxs)("div", {
                className: p.topContent,
                children: [
                    (0, r.jsx)("img", {
                        src: _.Z,
                        className: p.bannerImage,
                        alt: "",
                    }),
                    (0, r.jsxs)("div", {
                        className: p.textContent,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: f.intl.string(d.default.XP4jzJ),
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: f.intl.string(d.default.MJYvmG),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(a.zxk, {
                variant: "secondary",
                size: "sm",
                text: f.intl.string(d.default.eGxkmm),
                onClick: t,
                fullWidth: !0,
            }),
        ],
    });
}
