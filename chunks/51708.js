n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var l = n(481060),
    i = n(100527),
    s = n(906732),
    o = n(436774),
    a = n(197115),
    c = n(156582),
    d = n(474936),
    u = n(843874),
    f = n(388032),
    m = n(393095);
function h(e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, s.ZP)(i.Z.GO_LIVE_MODAL_V2);
    return (0, r.jsxs)('div', {
        className: m.root,
        children: [
            (0, r.jsxs)(l.Text, {
                className: m.infoText,
                variant: 'text-xs/normal',
                color: 'always-white',
                children: [
                    (0, r.jsx)(l.mBM, {
                        size: 'xxs',
                        color: 'currentColor'
                    }),
                    f.intl.format(f.t.sLJ3ER, {
                        onNitroClick: function () {
                            (0, c.E)({
                                analyticsLocation: n[0],
                                onClose: t
                            });
                        }
                    })
                ]
            }),
            (0, r.jsx)(a.Z, {
                className: m.ctaButton,
                iconClassName: m.premiumIcon,
                size: l.zxk.Sizes.TINY,
                color: l.zxk.Colors.BRAND_INVERTED,
                subscriptionTier: d.Si.TIER_2,
                buttonShineClassName: m.premiumShine,
                iconColor: o.JX.PREMIUM_TIER_2,
                textOptions: {
                    subscribeText: f.intl.string(u.default['+f+cqq']),
                    textClassName: m.ctaButtonText
                }
            })
        ]
    });
}
