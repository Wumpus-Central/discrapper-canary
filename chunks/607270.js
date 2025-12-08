n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(990547),
    a = n(159691),
    o = n(481060),
    s = n(906732),
    l = n(213609),
    c = n(550385),
    u = n(799360),
    d = n(342386),
    f = n(771934),
    p = n(202283),
    _ = n(388032),
    m = n(640744),
    h = n(758335);
function g() {
    let { analyticsLocations: e } = (0, s.ZP)();
    (0, l.Z)({
        name: i.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: i.ImpressionTypes.VIEW,
        properties: { location_stack: e },
    });
    let t = (0, u.B)(
            {
                "en-US": p.default["f/cLEi"],
                "en-GB": p.default["f/cLEi"],
            },
            p.default.CARxAC,
        ),
        n = () => {
            (0, f.DI)(f.Ln.APPEARANCE_SETTINGS), (0, c.XO)(c.wh.CUSTOM_THEME, { from: c.tE.SETTING }), (0, d.default)();
        };
    return (0, r.jsxs)("div", {
        className: m.container,
        children: [
            (0, r.jsx)("div", {
                className: m.iconContainer,
                children: (0, r.jsx)("img", {
                    src: h.Z,
                    className: m.bannerImage,
                    alt: "",
                }),
            }),
            (0, r.jsxs)("div", {
                className: m.textContent,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: t,
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: _.intl.string(p.default.nla4RG),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: m.buttonContainer,
                children: (0, r.jsx)(a.zxk, {
                    variant: "primary",
                    text: _.intl.string(_.t.uw9zI7),
                    onClick: n,
                }),
            }),
        ],
    });
}
