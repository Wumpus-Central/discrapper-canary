n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(990547),
    o = n(680018),
    a = n(481060),
    s = n(37234),
    l = n(906732),
    c = n(213609),
    u = n(550385),
    d = n(799360),
    f = n(507962),
    _ = n(119475),
    p = n(388032),
    h = n(640744),
    m = n(758335);
function g() {
    let { analyticsLocations: e } = (0, l.ZP)();
    (0, c.Z)({
        name: i.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: i.ImpressionTypes.VIEW,
        properties: { location_stack: e },
    });
    let t = (0, d.B)(
            {
                "en-US": _.default["f/cLEh"],
                "en-GB": _.default["f/cLEh"],
            },
            _.default.CARxAA,
        ),
        n = () => {
            (0, f.DI)(f.Ln.APPEARANCE_SETTINGS), (0, u.XO)(u.wh.CUSTOM_THEME, { from: u.tE.SETTING }), (0, s.xf)();
        };
    return (0, r.jsxs)("div", {
        className: h.container,
        children: [
            (0, r.jsx)("div", {
                className: h.iconContainer,
                children: (0, r.jsx)("img", {
                    src: m.Z,
                    className: h.bannerImage,
                    alt: "",
                }),
            }),
            (0, r.jsxs)("div", {
                className: h.textContent,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "heading-lg/semibold",
                        color: "text-primary",
                        children: t,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        children: p.intl.string(_.default.nla4RE),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: h.buttonContainer,
                children: (0, r.jsx)(o.z, {
                    variant: "primary",
                    text: p.intl.string(p.t.uw9zIy),
                    onClick: n,
                }),
            }),
        ],
    });
}
