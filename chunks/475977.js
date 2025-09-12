n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(626135),
    c = n(335131),
    u = n(196033),
    d = n(981631),
    f = n(474936),
    _ = n(388032),
    p = n(227919);
let h = () => {
    let { analyticsLocations: e } = (0, s.ZP)(o.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        t = i.useRef(null),
        { asset: n, popoutAsset: h, title: m, body: g, version: E, revertTextColor: b } = (0, u.W)();
    i.useEffect(() => {
        l.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
            type: f.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
            location_stack: e,
            version: E,
        });
    }, [e, E]);
    let y = () => {
        (0, c.mK)({
            analyticsLocations: e,
            analyticsSource: o.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
        });
    };
    return (0, r.jsxs)("div", {
        ref: t,
        className: p.container,
        style: { backgroundImage: "url(".concat(n, ")") },
        children: [
            (0, r.jsx)("div", {
                className: p.artContainer,
                "aria-hidden": !0,
                role: "presentation",
                children: (0, r.jsx)("img", {
                    src: h,
                    className: p.art,
                    alt: "",
                }),
            }),
            (0, r.jsxs)("div", {
                className: p.mainColumn,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "heading-lg/extrabold",
                        color: b ? "redesign-button-overlay-text" : "currentColor",
                        className: p.title,
                        children: m,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: b ? "redesign-button-overlay-text" : "currentColor",
                        children: g,
                    }),
                ],
            }),
            (0, r.jsx)(a.zxk, {
                onClick: y,
                variant: "overlay-primary",
                text: _.intl.string(_.t.fYfGgI),
            }),
        ],
    });
};
