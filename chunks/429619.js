n.d(t, {
    A: () => A,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(793574),
    a = n(688810),
    o = n(823092),
    c = n(954571),
    d = n(979286),
    u = n(492499),
    _ = n(652215),
    p = n(788868),
    m = n(985018),
    g = n(844551);
let A = () => {
    var e;
    let { analyticsLocations: t } = (0, a.Ay)(s.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        n = i.useRef(null),
        { asset: A, popoutAsset: f, title: h, body: b, version: E, revertTextColor: x } = (0, u.M)(),
        O = i.useContext(o.gl),
        C = null != (e = null == O ? void 0 : O.navigateWithValidation) ? e : (e) => e();
    return (
        i.useEffect(() => {
            c.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                type: p.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: t,
                version: E,
            });
        }, [t, E]),
        (0, r.jsxs)("div", {
            ref: n,
            className: g.kL,
            style: {
                backgroundImage: "url(".concat(A, ")"),
            },
            children: [
                (0, r.jsx)("div", {
                    className: g.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, r.jsx)("img", {
                        src: f,
                        className: g.Qw,
                        alt: "",
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: g.Em,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: "heading-lg/extrabold",
                            color: x ? "text-overlay-dark" : "currentColor",
                            className: g.DD,
                            children: h,
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: x ? "text-overlay-dark" : "currentColor",
                            children: b,
                        }),
                    ],
                }),
                (0, r.jsx)(l.Button, {
                    onClick: () => {
                        C(() =>
                            (0, d.Cz)({
                                analyticsLocations: t,
                                analyticsSource: s.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: m.intl.string(m.t.fYfGgK),
                }),
            ],
        })
    );
};
