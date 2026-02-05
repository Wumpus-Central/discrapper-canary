s.d(t, { A: () => j });
var r = s(627968);
s(64700);
var i = s(421380),
    n = s(397927),
    l = s(793574),
    a = s(688810),
    o = s(404374),
    c = s(422936),
    d = s(234419),
    u = s(465794),
    f = s(511484),
    h = s(927578),
    x = s(213279),
    p = s(788868),
    m = s(191850),
    _ = s(985018),
    g = s(827025);
function j(e) {
    let { onClose: t } = e,
        { analyticsLocations: s } = (0, a.Ay)(l.A.GO_LIVE_MODAL_V2),
        j = (0, d.V)(),
        v = (0, c.O)(),
        A = j?.subscription_trial?.sku_id === p.pe.TIER_2 || (0, f.U9)(v, p.pe.TIER_2),
        S = _.intl.string(m.default["+f+cqk"]);
    return (
        A &&
            (null != j
                ? (S = (0, h.FY)({
                      intervalType: j?.subscription_trial?.interval,
                      intervalCount: j?.subscription_trial?.interval_count,
                  }))
                : null != v && (S = _.intl.formatToPlainString(_.t.bkQ4bH, { percent: v.discount.amount }))),
        (0, r.jsxs)("div", {
            className: g.zr,
            children: [
                (0, r.jsxs)(n.Text, {
                    className: g.aV,
                    variant: "text-xs/normal",
                    color: "always-white",
                    children: [
                        (0, r.jsx)(n.XAi, { size: "xxs", color: "currentColor" }),
                        _.intl.format(_.t.sLJ3EV, {
                            onNitroClick: function () {
                                (0, x.p)({ analyticsLocation: s[0], onClose: t });
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(u.A, {
                    className: g.lI,
                    iconClassName: g.PC,
                    size: i.$n.Sizes.TINY,
                    color: i.$n.Colors.BRAND_INVERTED,
                    subscriptionTier: p.pe.TIER_2,
                    buttonShineClassName: g.vb,
                    iconColor: o.k0.PREMIUM_TIER_2,
                    onClick: () => {
                        t();
                    },
                    textOptions: { subscribeText: S, textClassName: g.U_ },
                }),
            ],
        })
    );
}
