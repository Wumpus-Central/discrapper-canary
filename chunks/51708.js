n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var l = n(481060),
    i = n(100527),
    s = n(906732),
    o = n(436774),
    a = n(104494),
    c = n(639119),
    d = n(767714),
    u = n(74538),
    f = n(156582),
    m = n(474936),
    h = n(825107),
    p = n(388032),
    x = n(393095);
function g(e) {
    var t, n, g;
    let { onClose: _ } = e,
        { analyticsLocations: v } = (0, s.ZP)(i.Z.GO_LIVE_MODAL_V2),
        j = (0, c.N)(),
        b = (0, a.Ng)(),
        S = (null == j || null == (t = j.subscription_trial) ? void 0 : t.sku_id) === m.Si.TIER_2 || (0, a.Wp)(b, m.Si.TIER_2),
        C = p.intl.string(h.default['+f+cqq']);
    return (
        S &&
            (null != j
                ? (C = (0, u.Rt)({
                      intervalType: null == j || null == (n = j.subscription_trial) ? void 0 : n.interval,
                      intervalCount: null == j || null == (g = j.subscription_trial) ? void 0 : g.interval_count
                  }))
                : null != b && (C = p.intl.formatToPlainString(p.t.bkQ4bG, { percent: b.discount.amount }))),
        (0, r.jsxs)('div', {
            className: x.root,
            children: [
                (0, r.jsxs)(l.Text, {
                    className: x.infoText,
                    variant: 'text-xs/normal',
                    color: 'always-white',
                    children: [
                        (0, r.jsx)(l.mBM, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        p.intl.format(p.t.sLJ3ER, {
                            onNitroClick: function () {
                                (0, f.E)({
                                    analyticsLocation: v[0],
                                    onClose: _
                                });
                            }
                        })
                    ]
                }),
                (0, r.jsx)(d.Z, {
                    className: x.ctaButton,
                    iconClassName: x.premiumIcon,
                    size: l.zxk.Sizes.TINY,
                    color: l.zxk.Colors.BRAND_INVERTED,
                    subscriptionTier: m.Si.TIER_2,
                    buttonShineClassName: x.premiumShine,
                    iconColor: o.JX.PREMIUM_TIER_2,
                    onClick: () => {
                        _();
                    },
                    textOptions: {
                        subscribeText: C,
                        textClassName: x.ctaButtonText
                    }
                })
            ]
        })
    );
}
