n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(534514),
    a = n(834730),
    r = n(821609),
    o = n(793574),
    d = n(688810),
    u = n(823092),
    c = n(954571),
    g = n(979286),
    m = n(492499),
    _ = n(652215),
    A = n(788868),
    h = n(985018),
    p = n(144030);
let x = () => {
    let { analyticsLocations: e } = (0, d.Ay)(o.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        t = s.useRef(null),
        { asset: n, popoutAsset: x, title: E, body: T, version: S, revertTextColor: f } = (0, m.M)(),
        { navigateWithValidation: b } = (0, u.L_)();
    return (
        s.useEffect(() => {
            c.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                type: A.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: e,
                version: S,
            });
        }, [e, S]),
        (0, i.jsxs)("div", {
            ref: t,
            className: p.kL,
            style: { backgroundImage: `url(${n})` },
            children: [
                (0, i.jsx)("div", {
                    className: p.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, i.jsx)("img", { src: x, className: p.Qw, alt: "" }),
                }),
                (0, i.jsxs)("div", {
                    className: p.Em,
                    children: [
                        (0, i.jsx)(l.D, {
                            variant: "heading-lg/extrabold",
                            color: f ? "text-overlay-dark" : "currentColor",
                            className: p.DD,
                            children: E,
                        }),
                        (0, i.jsx)(a.E, {
                            variant: "text-sm/normal",
                            color: f ? "text-overlay-dark" : "currentColor",
                            children: T,
                        }),
                    ],
                }),
                (0, i.jsx)(r.$, {
                    onClick: () => {
                        b(() =>
                            (0, g.Cz)({
                                analyticsLocations: e,
                                analyticsSource: o.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: h.intl.string(h.t.fYfGgK),
                }),
            ],
        })
    );
};
