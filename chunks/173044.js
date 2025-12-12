n.d(t, { Z: () => v });
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
    _ = n(258587),
    g = n(388032),
    x = n(312518);
function v(e) {
    var t, n, v;
    let { onClose: j } = e,
        { analyticsLocations: S } = (0, o.ZP)(s.Z.GO_LIVE_MODAL_V2),
        b = (0, d.N)(),
        y = (0, c.N)(),
        C =
            (null == b || null == (t = b.subscription_trial) ? void 0 : t.sku_id) === m.Si.TIER_2 ||
            (0, f.Wp)(y, m.Si.TIER_2),
        O = g.intl.string(_.default["+f+cqk"]);
    return (
        C &&
            (null != b
                ? (O = (0, p.Rt)({
                      intervalType: null == b || null == (n = b.subscription_trial) ? void 0 : n.interval,
                      intervalCount: null == b || null == (v = b.subscription_trial) ? void 0 : v.interval_count,
                  }))
                : null != y && (O = g.intl.formatToPlainString(g.t.bkQ4bH, { percent: y.discount.amount }))),
        (0, r.jsxs)("div", {
            className: x.root,
            children: [
                (0, r.jsxs)(l.Text, {
                    className: x.infoText,
                    variant: "text-xs/normal",
                    color: "always-white",
                    children: [
                        (0, r.jsx)(l.mBM, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        g.intl.format(g.t.sLJ3EV, {
                            onNitroClick: function () {
                                (0, h.E)({
                                    analyticsLocation: S[0],
                                    onClose: j,
                                });
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(u.Z, {
                    className: x.ctaButton,
                    iconClassName: x.premiumIcon,
                    size: i.zx.Sizes.TINY,
                    color: i.zx.Colors.BRAND_INVERTED,
                    subscriptionTier: m.Si.TIER_2,
                    buttonShineClassName: x.premiumShine,
                    iconColor: a.JX.PREMIUM_TIER_2,
                    onClick: () => {
                        j();
                    },
                    textOptions: {
                        subscribeText: O,
                        textClassName: x.ctaButtonText,
                    },
                }),
            ],
        })
    );
}
