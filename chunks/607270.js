n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(990547),
    a = n(680018),
    o = n(481060),
    s = n(37234),
    l = n(906732),
    c = n(213609),
    u = n(550385),
    d = n(119475),
    f = n(388032),
    _ = n(640744),
    p = n(758335);
function h() {
    let { analyticsLocations: e } = (0, l.ZP)();
    (0, c.Z)({
        name: i.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: i.ImpressionTypes.VIEW,
        properties: { location_stack: e },
    });
    let t = () => {
        (0, u.XO)(u.wh.CUSTOM_THEME, { from: u.tE.SETTING }), (0, s.xf)();
    };
    return (0, r.jsxs)("div", {
        className: _.container,
        children: [
            (0, r.jsx)("div", {
                className: _.iconContainer,
                children: (0, r.jsx)("img", {
                    src: p.Z,
                    className: _.bannerImage,
                    alt: "",
                }),
            }),
            (0, r.jsxs)("div", {
                className: _.textContent,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-lg/semibold",
                        color: "text-primary",
                        children: f.intl.string(d.default.CARxAA),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: f.intl.string(d.default.nla4RE),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: _.buttonContainer,
                children: (0, r.jsx)(a.z, {
                    variant: "primary",
                    text: f.intl.string(f.t.uw9zIy),
                    onClick: t,
                }),
            }),
        ],
    });
}
