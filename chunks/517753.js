r.d(t, { A: () => b });
var n = r(627968);
r(64700);
var l = r(421380),
    s = r(397927),
    i = r(793574),
    a = r(688810),
    c = r(404374),
    o = r(422936),
    d = r(234419),
    f = r(465794),
    u = r(511484),
    h = r(927578),
    p = r(213279),
    x = r(788868),
    j = r(191850),
    m = r(985018),
    g = r(827025);
function b(e) {
    var t, r, b;
    let { onClose: v } = e,
        { analyticsLocations: y } = (0, a.Ay)(i.A.GO_LIVE_MODAL_V2),
        S = (0, d.V)(),
        A = (0, o.O)(),
        _ =
            (null == S || null == (t = S.subscription_trial) ? void 0 : t.sku_id) === x.pe.TIER_2 ||
            (0, u.U9)(A, x.pe.TIER_2),
        O = m.intl.string(j.default["+f+cqk"]);
    return (
        _ &&
            (null != S
                ? (O = (0, h.FY)({
                      intervalType: null == S || null == (r = S.subscription_trial) ? void 0 : r.interval,
                      intervalCount: null == S || null == (b = S.subscription_trial) ? void 0 : b.interval_count,
                  }))
                : null != A && (O = m.intl.formatToPlainString(m.t.bkQ4bH, { percent: A.discount.amount }))),
        (0, n.jsxs)("div", {
            className: g.zr,
            children: [
                (0, n.jsxs)(s.Text, {
                    className: g.aV,
                    variant: "text-xs/normal",
                    color: "always-white",
                    children: [
                        (0, n.jsx)(s.XAi, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        m.intl.format(m.t.sLJ3EV, {
                            onNitroClick: function () {
                                (0, p.p)({
                                    analyticsLocation: y[0],
                                    onClose: v,
                                });
                            },
                        }),
                    ],
                }),
                (0, n.jsx)(f.A, {
                    className: g.lI,
                    iconClassName: g.PC,
                    size: l.$n.Sizes.TINY,
                    color: l.$n.Colors.BRAND_INVERTED,
                    subscriptionTier: x.pe.TIER_2,
                    buttonShineClassName: g.vb,
                    iconColor: c.k0.PREMIUM_TIER_2,
                    onClick: () => {
                        v();
                    },
                    textOptions: {
                        subscribeText: O,
                        textClassName: g.U_,
                    },
                }),
            ],
        })
    );
}
