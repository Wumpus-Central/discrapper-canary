n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(924052),
    c = n(626135),
    u = n(335131),
    d = n(196033),
    f = n(981631),
    p = n(474936),
    _ = n(388032),
    m = n(200471);
let h = () => {
    var e;
    let { analyticsLocations: t } = (0, s.ZP)(o.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        n = i.useRef(null),
        { asset: h, popoutAsset: g, title: E, body: b, version: y, revertTextColor: O } = (0, d.W)(),
        v = i.useContext(l.Tx),
        S = null != (e = null == v ? void 0 : v.navigateWithValidation) ? e : (e) => e();
    i.useEffect(() => {
        c.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
            type: p.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
            location_stack: t,
            version: y,
        });
    }, [t, y]);
    let I = () => {
        S(() =>
            (0, u.mK)({
                analyticsLocations: t,
                analyticsSource: o.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
            }),
        );
    };
    return (0, r.jsxs)("div", {
        ref: n,
        className: m.container,
        style: { backgroundImage: "url(".concat(h, ")") },
        children: [
            (0, r.jsx)("div", {
                className: m.artContainer,
                "aria-hidden": !0,
                role: "presentation",
                children: (0, r.jsx)("img", {
                    src: g,
                    className: m.art,
                    alt: "",
                }),
            }),
            (0, r.jsxs)("div", {
                className: m.mainColumn,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-lg/extrabold",
                        color: O ? "text-overlay-dark" : "currentColor",
                        className: m.title,
                        children: E,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: O ? "text-overlay-dark" : "currentColor",
                        children: b,
                    }),
                ],
            }),
            (0, r.jsx)(a.Button, {
                onClick: I,
                variant: "overlay-primary",
                text: _.intl.string(_.t.fYfGgK),
            }),
        ],
    });
};
