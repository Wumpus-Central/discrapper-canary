n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(678558),
    u = n(388032),
    d = n(669116);
let m = (e) => {
    let {
            guild: t,
            analyticsLocation: n,
            className: i,
            buttonProps: l = {
                color: s.Ttl.BRAND_INVERTED,
                text: u.intl.string(u.t.oqweNz)
            }
        } = e,
        { color: a, text: o } = l,
        d = t.premiumTier + 1;
    return (0, r.jsx)(c.Z, {
        color: a,
        analyticsLocation: n,
        guild: t,
        buttonText: o,
        targetBoostedGuildTier: d,
        className: i
    });
};
function g(e) {
    let { header: t, text: i, analyticsLocation: c, guild: u, className: g, textColor: p, headerColor: h, buttonProps: f } = e,
        { analyticsLocations: x } = (0, o.ZP)(a.Z.GUILD_BOOSTING_UPSELL_BANNER);
    return (0, r.jsx)(o.Gt, {
        value: x,
        children: (0, r.jsxs)('div', {
            className: l()(d.banner, g),
            children: [
                (0, r.jsx)('img', {
                    className: d.__invalid_headerGraphic,
                    alt: '',
                    src: n(322393)
                }),
                (0, r.jsxs)('div', {
                    className: d.content,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: 'text-lg/semibold',
                            color: null != h ? h : 'always-white',
                            className: d.header,
                            children: t
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: null != p ? p : 'always-white',
                            children: i
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: d.ctaContainer,
                    children: (0, r.jsx)(m, {
                        guild: u,
                        analyticsLocation: c,
                        className: d.button,
                        buttonProps: f
                    })
                })
            ]
        })
    });
}
