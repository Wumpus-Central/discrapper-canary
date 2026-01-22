n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(110259),
    a = n(732955),
    s = n(397927),
    o = n(688810),
    l = n(139286),
    c = n(793943),
    u = n(996254),
    d = n(12901),
    f = n(738419),
    p = n(520650),
    _ = n(985018),
    h = n(996554),
    m = n(114149);
function g() {
    let { analyticsLocations: e } = (0, o.Ay)();
    (0, l.A)({
        name: i.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: i.ImpressionTypes.VIEW,
        properties: { location_stack: e },
    });
    let t = (0, u.X)(
            {
                "en-US": p.default["f/cLEi"],
                "en-GB": p.default["f/cLEi"],
            },
            p.default.CARxAC,
        ),
        n = () => {
            (0, f.b0)(f.G8.APPEARANCE_SETTINGS), (0, c.nf)(c.HP.CUSTOM_THEME, { from: c.xv.SETTING }), (0, d.default)();
        };
    return (0, r.jsxs)("div", {
        className: h.kL,
        children: [
            (0, r.jsx)("div", {
                className: h.zc,
                children: (0, r.jsx)("img", {
                    src: m.A,
                    className: h._e,
                    alt: "",
                }),
            }),
            (0, r.jsxs)("div", {
                className: h.P_,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: t,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: _.intl.string(p.default.nla4RG),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: h.UD,
                children: (0, r.jsx)(a.$nd, {
                    variant: "primary",
                    text: _.intl.string(_.t.uw9zI7),
                    onClick: n,
                }),
            }),
        ],
    });
}
