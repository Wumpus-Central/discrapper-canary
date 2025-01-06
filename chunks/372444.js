n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    s = n(100527),
    o = n(906732),
    c = n(678558),
    d = n(388032),
    u = n(909743);
let m = (e) => {
    let {
            guild: t,
            analyticsLocation: n,
            className: r,
            buttonProps: l = {
                color: a.ButtonColors.BRAND_INVERTED,
                text: d.intl.string(d.t.oqweNz)
            }
        } = e,
        { color: s, text: o } = l,
        u = t.premiumTier + 1;
    return (0, i.jsx)(c.Z, {
        color: s,
        analyticsLocation: n,
        guild: t,
        buttonText: o,
        targetBoostedGuildTier: u,
        className: r
    });
};
function h(e) {
    let { header: t, text: r, analyticsLocation: c, guild: d, className: h, textColor: g, headerColor: x, buttonProps: p } = e,
        { analyticsLocations: f } = (0, o.ZP)(s.Z.GUILD_BOOSTING_UPSELL_BANNER);
    return (0, i.jsx)(o.Gt, {
        value: f,
        children: (0, i.jsxs)('div', {
            className: l()(u.banner, h),
            children: [
                (0, i.jsx)('img', {
                    className: u.__invalid_headerGraphic,
                    alt: '',
                    src: n(322393)
                }),
                (0, i.jsxs)('div', {
                    className: u.content,
                    children: [
                        (0, i.jsx)(a.Text, {
                            variant: 'text-lg/semibold',
                            color: null != x ? x : 'always-white',
                            className: u.header,
                            children: t
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: null != g ? g : 'always-white',
                            children: r
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: u.ctaContainer,
                    children: (0, i.jsx)(m, {
                        guild: d,
                        analyticsLocation: c,
                        className: u.button,
                        buttonProps: p
                    })
                })
            ]
        })
    });
}
