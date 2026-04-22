s.d(t, { A: () => C });
var i = s(627968);
s(64700);
var r = s(862482),
    n = s(834730),
    l = s(194261),
    a = s(793574),
    o = s(688810),
    c = s(404374),
    d = s(422936),
    u = s(234419),
    f = s(725807),
    h = s(511484),
    x = s(400669),
    p = s(909536),
    _ = s(927578),
    m = s(213279),
    g = s(788868),
    j = s(710787),
    v = s(985018),
    A = s(518728);
function C(e) {
    let { onClose: t } = e,
        { analyticsLocations: s } = (0, o.Ay)(a.A.GO_LIVE_MODAL_V2),
        C = (0, p.St)("hd_streaming_upsell_ribbon"),
        S = (0, u.V)(),
        y = (0, d.O)(),
        b = S?.subscription_trial?.sku_id === g.pe.TIER_2 || (0, h.U9)(y, g.pe.TIER_2),
        w = v.intl.string(j.default["+f+cqk"]);
    return (
        b &&
            (null != S
                ? (w = (0, _.FY)({
                      intervalType: S?.subscription_trial?.interval,
                      intervalCount: S?.subscription_trial?.interval_count,
                  }))
                : null != y && (w = v.intl.formatToPlainString(v.t.bkQ4bH, { percent: y.discount.amount }))),
        (0, i.jsxs)("div", {
            className: A.zr,
            children: [
                (0, i.jsxs)(n.E, {
                    className: A.aV,
                    variant: "text-xs/normal",
                    color: "always-white",
                    children: [
                        (0, i.jsx)(l.X, { size: "xxs", color: "currentColor" }),
                        v.intl.format(v.t.sLJ3EV, {
                            onNitroClick: function () {
                                (0, m.p)({ analyticsLocation: s[0], onClose: t });
                            },
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: A.OQ,
                    children: [
                        C &&
                            (0, i.jsx)(x.l, {
                                size: "sm",
                                className: A.ij,
                                location: a.A.PREMIUM_WISHLIST_STREAM_UPSELL,
                            }),
                        (0, i.jsx)(f.A, {
                            className: A.lI,
                            iconClassName: A.PC,
                            size: r.$n.Sizes.TINY,
                            color: r.$n.Colors.BRAND_INVERTED,
                            subscriptionTier: g.pe.TIER_2,
                            buttonShineClassName: A.vb,
                            iconColor: c.k0.PREMIUM_TIER_2,
                            onClick: () => {
                                t();
                            },
                            textOptions: { subscribeText: w, textClassName: A.U_ },
                        }),
                    ],
                }),
            ],
        })
    );
}
