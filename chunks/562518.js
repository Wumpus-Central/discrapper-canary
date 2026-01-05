n.d(t, { Z: () => j });
var r = n(54381);
n(473749);
var i = n(755721),
    s = n(481060),
    l = n(100527),
    o = n(906732),
    c = n(436774),
    a = n(622909),
    d = n(639119),
    u = n(767714),
    f = n(230916),
    h = n(74538),
    p = n(504710),
    x = n(474936),
    m = n(715689),
    g = n(388032),
    v = n(230240);
function j(e) {
    var t, n, j;
    let { onClose: _ } = e,
        { analyticsLocations: b } = (0, o.ZP)(l.Z.GO_LIVE_MODAL_V2),
        y = (0, d.N)(),
        w = (0, a.N)(),
        O =
            (null == y || null == (t = y.subscription_trial) ? void 0 : t.sku_id) === x.Si.TIER_2 ||
            (0, f.Wp)(w, x.Si.TIER_2),
        C = g.intl.string(m.default["+f+cqk"]);
    return (
        O &&
            (null != y
                ? (C = (0, h.Rt)({
                      intervalType: null == y || null == (n = y.subscription_trial) ? void 0 : n.interval,
                      intervalCount: null == y || null == (j = y.subscription_trial) ? void 0 : j.interval_count,
                  }))
                : null != w && (C = g.intl.formatToPlainString(g.t.bkQ4bH, { percent: w.discount.amount }))),
        (0, r.jsxs)("div", {
            className: v.root,
            children: [
                (0, r.jsxs)(s.Text, {
                    className: v.infoText,
                    variant: "text-xs/normal",
                    color: "always-white",
                    children: [
                        (0, r.jsx)(s.mBM, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        g.intl.format(g.t.sLJ3EV, {
                            onNitroClick: function () {
                                (0, p.E)({
                                    analyticsLocation: b[0],
                                    onClose: _,
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
                    subscriptionTier: x.Si.TIER_2,
                    buttonShineClassName: v.premiumShine,
                    iconColor: c.JX.PREMIUM_TIER_2,
                    onClick: () => {
                        _();
                    },
                    textOptions: {
                        subscribeText: C,
                        textClassName: v.ctaButtonText,
                    },
                }),
            ],
        })
    );
}
