n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(990547),
    a = n(159691),
    o = n(481060),
    s = n(906732),
    l = n(213609),
    c = n(550385),
    u = n(799360),
    d = n(342386),
    f = n(771934),
    _ = n(531421),
    p = n(388032),
    h = n(640744),
    m = n(758335);
function g() {
    let { analyticsLocations: e } = (0, s.ZP)();
    (0, l.Z)({
        name: i.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: i.ImpressionTypes.VIEW,
        properties: { location_stack: e },
    });
    let t = (0, u.B)(
            {
                "en-US": _.default["f/cLEi"],
                "en-GB": _.default["f/cLEi"],
            },
            _.default.CARxAC,
        ),
        n = () => {
            (0, f.DI)(f.Ln.APPEARANCE_SETTINGS), (0, c.XO)(c.wh.CUSTOM_THEME, { from: c.tE.SETTING }), (0, d.default)();
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
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-primary",
                        children: t,
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: p.intl.string(_.default.nla4RG),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: h.buttonContainer,
                children: (0, r.jsx)(a.zxk, {
                    variant: "primary",
                    text: p.intl.string(p.t.uw9zI7),
                    onClick: n,
                }),
            }),
        ],
    });
}
