s.d(t, { A: () => A });
var r = s(627968);
s(64700);
var i = s(421380),
    n = s(397927),
    l = s(793574),
    a = s(688810),
    o = s(404374),
    c = s(422936),
    d = s(234419),
    u = s(725807),
    f = s(511484),
    h = s(400669),
    x = s(909536),
    p = s(927578),
    m = s(213279),
    _ = s(788868),
    g = s(191850),
    j = s(985018),
    v = s(591960);
function A(e) {
    let { onClose: t } = e,
        { analyticsLocations: s } = (0, a.Ay)(l.A.GO_LIVE_MODAL_V2),
        A = (0, x.St)("hd_streaming_upsell_ribbon"),
        S = (0, d.V)(),
        y = (0, c.O)(),
        C = S?.subscription_trial?.sku_id === _.pe.TIER_2 || (0, f.U9)(y, _.pe.TIER_2),
        b = j.intl.string(g.default["+f+cqk"]);
    return (
        C &&
            (null != S
                ? (b = (0, p.FY)({
                      intervalType: S?.subscription_trial?.interval,
                      intervalCount: S?.subscription_trial?.interval_count,
                  }))
                : null != y && (b = j.intl.formatToPlainString(j.t.bkQ4bH, { percent: y.discount.amount }))),
        (0, r.jsxs)("div", {
            className: v.zr,
            children: [
                (0, r.jsxs)(n.Text, {
                    className: v.aV,
                    variant: "text-xs/normal",
                    color: "always-white",
                    children: [
                        (0, r.jsx)(n.XAi, { size: "xxs", color: "currentColor" }),
                        j.intl.format(j.t.sLJ3EV, {
                            onNitroClick: function () {
                                (0, m.p)({ analyticsLocation: s[0], onClose: t });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: v.OQ,
                    children: [
                        A &&
                            (0, r.jsx)(h.l, {
                                size: "sm",
                                className: v.ij,
                                location: l.A.PREMIUM_WISHLIST_STREAM_UPSELL,
                            }),
                        (0, r.jsx)(u.A, {
                            className: v.lI,
                            iconClassName: v.PC,
                            size: i.$n.Sizes.TINY,
                            color: i.$n.Colors.BRAND_INVERTED,
                            subscriptionTier: _.pe.TIER_2,
                            buttonShineClassName: v.vb,
                            iconColor: o.k0.PREMIUM_TIER_2,
                            onClick: () => {
                                t();
                            },
                            textOptions: { subscribeText: b, textClassName: v.U_ },
                        }),
                    ],
                }),
            ],
        })
    );
}
