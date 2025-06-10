n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(678558),
    d = n(388032),
    u = n(669116);
let m = (e) => {
    let {
            guild: t,
            analyticsLocation: n,
            className: i,
            buttonProps: l = {
                color: s.Ttl.BRAND_INVERTED,
                text: d.intl.string(d.t.oqweNz)
            }
        } = e,
        { color: a, text: o } = l,
        u = t.premiumTier + 1;
    return (0, r.jsx)(c.Z, {
        color: a,
        analyticsLocation: n,
        guild: t,
        buttonText: o,
        targetBoostedGuildTier: u,
        className: i
    });
};
function g(e) {
    let { header: t, text: i, analyticsLocation: c, guild: d, className: g, textColor: p, headerColor: f, buttonProps: h } = e,
        { analyticsLocations: x } = (0, o.ZP)(a.Z.GUILD_BOOSTING_UPSELL_BANNER);
    return (0, r.jsx)(o.Gt, {
        value: x,
        children: (0, r.jsxs)('div', {
            className: l()(u.banner, g),
            children: [
                (0, r.jsx)('img', {
                    className: u.__invalid_headerGraphic,
                    alt: '',
                    src: n(322393)
                }),
                (0, r.jsxs)('div', {
                    className: u.content,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: 'text-lg/semibold',
                            color: null != f ? f : 'always-white',
                            className: u.header,
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
                    className: u.ctaContainer,
                    children: (0, r.jsx)(m, {
                        guild: d,
                        analyticsLocation: c,
                        className: u.button,
                        buttonProps: h
                    })
                })
            ]
        })
    });
}
