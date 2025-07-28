n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(755721),
    s = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(678558),
    u = n(388032),
    m = n(669116);
let g = (e) => {
    let {
            guild: t,
            analyticsLocation: n,
            className: i,
            buttonProps: l = {
                color: a.Tt.BRAND_INVERTED,
                text: u.intl.string(u.t.oqweNz)
            }
        } = e,
        { color: s, text: o } = l,
        c = t.premiumTier + 1;
    return (0, r.jsx)(d.Z, {
        color: s,
        analyticsLocation: n,
        guild: t,
        buttonText: o,
        targetBoostedGuildTier: c,
        className: i
    });
};
function p(e) {
    let { header: t, text: i, analyticsLocation: a, guild: d, className: u, textColor: p, headerColor: h, buttonProps: f } = e,
        { analyticsLocations: x } = (0, c.ZP)(o.Z.GUILD_BOOSTING_UPSELL_BANNER);
    return (0, r.jsx)(c.Gt, {
        value: x,
        children: (0, r.jsxs)('div', {
            className: l()(m.banner, u),
            children: [
                (0, r.jsx)('img', {
                    className: m.__invalid_headerGraphic,
                    alt: '',
                    src: n(322393)
                }),
                (0, r.jsxs)('div', {
                    className: m.content,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: 'text-lg/semibold',
                            color: null != h ? h : 'always-white',
                            className: m.header,
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
                    className: m.ctaContainer,
                    children: (0, r.jsx)(g, {
                        guild: d,
                        analyticsLocation: a,
                        className: m.button,
                        buttonProps: f
                    })
                })
            ]
        })
    });
}
