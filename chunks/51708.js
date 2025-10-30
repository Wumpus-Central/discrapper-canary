n.d(t, { Z: () => x });
var r = n(951288);
n(647438);
var i = n(755721),
    l = n(481060),
    s = n(100527),
    o = n(906732),
    a = n(436774),
    c = n(104494),
    d = n(639119),
    u = n(767714),
    f = n(74538),
    p = n(156582),
    h = n(474936),
    m = n(832832),
    _ = n(388032),
    g = n(46546);
function x(e) {
    var t, n, x;
    let { onClose: v } = e,
        { analyticsLocations: j } = (0, o.ZP)(s.Z.GO_LIVE_MODAL_V2),
        S = (0, d.N)(),
        b = (0, c.Ng)(),
        y =
            (null == S || null == (t = S.subscription_trial) ? void 0 : t.sku_id) === h.Si.TIER_2 ||
            (0, c.Wp)(b, h.Si.TIER_2),
        C = _.intl.string(m.default["+f+cqk"]);
    return (
        y &&
            (null != S
                ? (C = (0, f.Rt)({
                      intervalType: null == S || null == (n = S.subscription_trial) ? void 0 : n.interval,
                      intervalCount: null == S || null == (x = S.subscription_trial) ? void 0 : x.interval_count,
                  }))
                : null != b && (C = _.intl.formatToPlainString(_.t.bkQ4bH, { percent: b.discount.amount }))),
        (0, r.jsxs)("div", {
            className: g.root,
            children: [
                (0, r.jsxs)(l.Text, {
                    className: g.infoText,
                    variant: "text-xs/normal",
                    color: "always-white",
                    children: [
                        (0, r.jsx)(l.mBM, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        _.intl.format(_.t.sLJ3EV, {
                            onNitroClick: function () {
                                (0, p.E)({
                                    analyticsLocation: j[0],
                                    onClose: v,
                                });
                            },
                        }),
                    ],
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
                        subscribeText: C,
                        textClassName: g.ctaButtonText,
                    },
                }),
            ],
        })
    );
}
