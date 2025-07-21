n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    s = n(100527),
    o = n(906732),
    a = n(436774),
    c = n(104494),
    d = n(639119),
    u = n(767714),
    f = n(74538),
    m = n(156582),
    h = n(474936),
    p = n(676462),
    x = n(388032),
    g = n(393095);
function _(e) {
    var t, n, _;
    let { onClose: v } = e,
        { analyticsLocations: j } = (0, o.ZP)(s.Z.GO_LIVE_MODAL_V2),
        S = (0, d.N)(),
        b = (0, c.Ng)(),
        C = (null == S || null == (t = S.subscription_trial) ? void 0 : t.sku_id) === h.Si.TIER_2 || (0, c.Wp)(b, h.Si.TIER_2),
        y = x.intl.string(p.default['+f+cqq']);
    return (
        C &&
            (null != S
                ? (y = (0, f.Rt)({
                      intervalType: null == S || null == (n = S.subscription_trial) ? void 0 : n.interval,
                      intervalCount: null == S || null == (_ = S.subscription_trial) ? void 0 : _.interval_count
                  }))
                : null != b && (y = x.intl.formatToPlainString(x.t.bkQ4bG, { percent: b.discount.amount }))),
        (0, r.jsxs)('div', {
            className: g.root,
            children: [
                (0, r.jsxs)(l.Text, {
                    className: g.infoText,
                    variant: 'text-xs/normal',
                    color: 'always-white',
                    children: [
                        (0, r.jsx)(l.mBM, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        x.intl.format(x.t.sLJ3ER, {
                            onNitroClick: function () {
                                (0, m.E)({
                                    analyticsLocation: j[0],
                                    onClose: v
                                });
                            }
                        })
                    ]
                }),
                (0, r.jsx)(u.Z, {
                    className: g.ctaButton,
                    iconClassName: g.premiumIcon,
                    size: i.zx.Sizes.TINY,
                    color: i.zx.Colors.BRAND_INVERTED,
                    subscriptionTier: h.Si.TIER_2,
                    buttonShineClassName: g.premiumShine,
                    iconColor: a.JX.PREMIUM_TIER_2,
                    onClick: () => {
                        v();
                    },
                    textOptions: {
                        subscribeText: y,
                        textClassName: g.ctaButtonText
                    }
                })
            ]
        })
    );
}
