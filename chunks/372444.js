n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(755721),
    s = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(678558),
    u = n(388032),
    g = n(736692);
let m = (e) => {
    let {
            guild: t,
            analyticsLocation: n,
            className: i,
            buttonProps: l = {
                color: a.Tt.BRAND_INVERTED,
                text: u.intl.string(u.t.oqweNx),
            },
            useExpressiveButton: s,
        } = e,
        { color: o, text: c } = l,
        g = t.premiumTier + 1;
    return (0, r.jsx)(d.Z, {
        color: o,
        analyticsLocation: n,
        guild: t,
        buttonText: c,
        targetBoostedGuildTier: g,
        className: i,
        useExpressiveButton: s,
    });
};
function p(e) {
    let {
            header: t,
            text: i,
            analyticsLocation: a,
            guild: d,
            className: u,
            textColor: p,
            headerColor: f,
            buttonProps: h,
            useExpressiveButton: b,
        } = e,
        { analyticsLocations: x } = (0, c.ZP)(o.Z.GUILD_BOOSTING_UPSELL_BANNER);
    return (0, r.jsx)(c.Gt, {
        value: x,
        children: (0, r.jsxs)("div", {
            className: l()(g.banner, u),
            children: [
                (0, r.jsx)("img", {
                    className: g.__invalid_headerGraphic,
                    alt: "",
                    src: n(322393),
                }),
                (0, r.jsxs)("div", {
                    className: g.content,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-lg/semibold",
                            color: null != f ? f : "always-white",
                            className: g.header,
                            children: t,
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: null != p ? p : "always-white",
                            children: i,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: g.ctaContainer,
                    children: (0, r.jsx)(m, {
                        guild: d,
                        analyticsLocation: a,
                        className: g.button,
                        buttonProps: h,
                        useExpressiveButton: b,
                    }),
                }),
            ],
        }),
    });
}
