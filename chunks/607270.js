n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(990547),
    a = n(680018),
    o = n(481060),
    s = n(37234),
    l = n(906732),
    c = n(213609),
    u = n(550385),
    d = n(507962),
    f = n(119475),
    _ = n(388032),
    p = n(640744),
    h = n(758335);
function m() {
    let { analyticsLocations: e } = (0, l.ZP)();
    (0, c.Z)({
        name: i.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: i.ImpressionTypes.VIEW,
        properties: { location_stack: e },
    });
    let t = () => {
        (0, d.DI)(d.Ln.APPEARANCE_SETTINGS), (0, u.XO)(u.wh.CUSTOM_THEME, { from: u.tE.SETTING }), (0, s.xf)();
    };
    return (0, r.jsxs)("div", {
        className: p.container,
        children: [
            (0, r.jsx)("div", {
                className: p.iconContainer,
                children: (0, r.jsx)("img", {
                    src: h.Z,
                    className: p.bannerImage,
                    alt: "",
                }),
            }),
            (0, r.jsxs)("div", {
                className: p.textContent,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-lg/semibold",
                        color: "text-primary",
                        children: _.intl.string(f.default.CARxAA),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: _.intl.string(f.default.nla4RE),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: p.buttonContainer,
                children: (0, r.jsx)(a.z, {
                    variant: "primary",
                    text: _.intl.string(_.t.uw9zIy),
                    onClick: t,
                }),
            }),
        ],
    });
}
