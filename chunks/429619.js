n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(793574),
    l = n(688810),
    o = n(823092),
    c = n(954571),
    d = n(979286),
    u = n(492499),
    _ = n(652215),
    m = n(788868),
    A = n(985018),
    g = n(844551);
let E = () => {
    let { analyticsLocations: e } = (0, l.Ay)(a.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        t = s.useRef(null),
        { asset: n, popoutAsset: E, title: h, body: p, version: C, revertTextColor: x } = (0, u.M)(),
        T = s.useContext(o.gl),
        I = T?.navigateWithValidation ?? ((e) => e());
    return (
        s.useEffect(() => {
            c.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                type: m.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: e,
                version: C,
            });
        }, [e, C]),
        (0, i.jsxs)("div", {
            ref: t,
            className: g.kL,
            style: { backgroundImage: `url(${n})` },
            children: [
                (0, i.jsx)("div", {
                    className: g.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, i.jsx)("img", { src: E, className: g.Qw, alt: "" }),
                }),
                (0, i.jsxs)("div", {
                    className: g.Em,
                    children: [
                        (0, i.jsx)(r.Heading, {
                            variant: "heading-lg/extrabold",
                            color: x ? "text-overlay-dark" : "currentColor",
                            className: g.DD,
                            children: h,
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: x ? "text-overlay-dark" : "currentColor",
                            children: p,
                        }),
                    ],
                }),
                (0, i.jsx)(r.Button, {
                    onClick: () => {
                        I(() =>
                            (0, d.Cz)({
                                analyticsLocations: e,
                                analyticsSource: a.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: A.intl.string(A.t.fYfGgK),
                }),
            ],
        })
    );
};
