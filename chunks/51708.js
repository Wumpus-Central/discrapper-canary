n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var i = n(755721),
    l = n(481060),
    s = n(100527),
    o = n(906732),
    a = n(436774),
    c = n(622909),
    d = n(639119),
    u = n(767714),
    f = n(230916),
    p = n(74538),
    h = n(156582),
    m = n(474936),
    g = n(297940),
    x = n(388032),
    v = n(367880);
function b(e) {
    var t, n, b;
    let { onClose: j } = e,
        { analyticsLocations: _ } = (0, o.ZP)(s.Z.GO_LIVE_MODAL_V2),
        S = (0, d.N)(),
        y = (0, c.N)(),
        C =
            (null == S || null == (t = S.subscription_trial) ? void 0 : t.sku_id) === m.Si.TIER_2 ||
            (0, f.Wp)(y, m.Si.TIER_2),
        O = x.intl.string(g.default["+f+cqk"]);
    return (
        C &&
            (null != S
                ? (O = (0, p.Rt)({
                      intervalType: null == S || null == (n = S.subscription_trial) ? void 0 : n.interval,
                      intervalCount: null == S || null == (b = S.subscription_trial) ? void 0 : b.interval_count,
                  }))
                : null != y && (O = x.intl.formatToPlainString(x.t.bkQ4bH, { percent: y.discount.amount }))),
        (0, r.jsxs)("div", {
            className: v.root,
            children: [
                (0, r.jsxs)(l.Text, {
                    className: v.infoText,
                    variant: "text-xs/normal",
                    color: "always-white",
                    children: [
                        (0, r.jsx)(l.mBM, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        x.intl.format(x.t.sLJ3EV, {
                            onNitroClick: function () {
                                (0, h.E)({
                                    analyticsLocation: _[0],
                                    onClose: j,
                                });
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(u.Z, {
                    className: v.ctaButton,
                    iconClassName: v.premiumIcon,
                    size: i.zx.Sizes.TINY,
                    color: i.zx.Colors.BRAND_INVERTED,
                    subscriptionTier: m.Si.TIER_2,
                    buttonShineClassName: v.premiumShine,
                    iconColor: a.JX.PREMIUM_TIER_2,
                    onClick: () => {
                        j();
                    },
                    textOptions: {
                        subscribeText: O,
                        textClassName: v.ctaButtonText,
                    },
                }),
            ],
        })
    );
}
