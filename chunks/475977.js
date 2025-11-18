n.d(t, { Z: () => m });
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
    _ = n(474936),
    p = n(388032),
    h = n(29990);
let m = () => {
    var e;
    let { analyticsLocations: t } = (0, s.ZP)(o.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        n = i.useRef(null),
        { asset: m, popoutAsset: g, title: E, body: b, version: y, revertTextColor: O } = (0, d.W)(),
        v = i.useContext(l.Tx),
        I = null != (e = null == v ? void 0 : v.navigateWithValidation) ? e : (e) => e();
    i.useEffect(() => {
        c.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
            type: _.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
            location_stack: t,
            version: y,
        });
    }, [t, y]);
    let T = () => {
        I(() =>
            (0, u.mK)({
                analyticsLocations: t,
                analyticsSource: o.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
            }),
        );
    };
    return (0, r.jsxs)("div", {
        ref: n,
        className: h.container,
        style: { backgroundImage: "url(".concat(m, ")") },
        children: [
            (0, r.jsx)("div", {
                className: h.artContainer,
                "aria-hidden": !0,
                role: "presentation",
                children: (0, r.jsx)("img", {
                    src: g,
                    className: h.art,
                    alt: "",
                }),
            }),
            (0, r.jsxs)("div", {
                className: h.mainColumn,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-lg/extrabold",
                        color: O ? "redesign-button-overlay-text" : "currentColor",
                        className: h.title,
                        children: E,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: O ? "redesign-button-overlay-text" : "currentColor",
                        children: b,
                    }),
                ],
            }),
            (0, r.jsx)(a.Button, {
                onClick: T,
                variant: "overlay-primary",
                text: p.intl.string(p.t.fYfGgK),
            }),
        ],
    });
};
