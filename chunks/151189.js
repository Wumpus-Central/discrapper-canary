n.d(t, { C: () => S });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(622909),
    d = n(639119),
    f = n(165583),
    p = n(626135),
    _ = n(74538),
    m = n(45521),
    h = n(251159),
    g = n(981631),
    E = n(474936),
    b = n(388032),
    y = n(935149),
    O = n(867250);
let v = () => (0, m.f)(!1),
    S = (e) => {
        var t, n, a;
        let { onLearnMore: m } = e,
            { analyticsLocations: S } = (0, c.ZP)(l.Z.PREMIUM_UPSELL);
        i.useEffect(() => {
            p.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                location_section: g.jXE.STICKER_PICKER_UPSELL,
                type: E.cd.STICKER_PICKER_UPSELL,
                location_stack: S,
            });
        }, [S]);
        let I = (0, d.N)(),
            T = (0, u.N)(),
            C = (null == I || null == (t = I.subscription_trial) ? void 0 : t.sku_id) === E.Si.TIER_0,
            A = null != I || null != T;
        return (0, r.jsxs)("div", {
            className: o()(y.upsellWrapper, { [y.unifyTrialUpsell]: A }),
            children: [
                A
                    ? (0, r.jsx)(f.ZP, {
                          trialOffer: I,
                          discountOffer: T,
                          onClose: v,
                          type: E.cd.STICKER_PICKER_UPSELL,
                          subscriptionTier:
                              null != (a = null == I || null == (n = I.subscription_trial) ? void 0 : n.sku_id)
                                  ? a
                                  : E.Si.TIER_2,
                          children: C
                              ? b.intl.format(b.t.MAGagw, {
                                    planName: (0, _.MF)(E.Xh.PREMIUM_MONTH_TIER_0),
                                    onClick: m,
                                })
                              : b.intl.format(b.t.jt7JX6, { onClick: m }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("img", {
                                  className: y.upsellImage,
                                  src: O,
                                  alt: b.intl.string(b.t.do7AoM),
                              }),
                              (0, r.jsx)(s.Text, {
                                  className: y.upsellTitle,
                                  color: "header-primary",
                                  variant: "text-lg/semibold",
                                  children: b.intl.string(b.t.jJG1pl),
                              }),
                              (0, r.jsx)(s.Text, {
                                  className: y.upsellDescription,
                                  variant: "text-md/normal",
                                  children: b.intl.format(b.t.jt7JX6, { onClick: m }),
                              }),
                          ],
                      }),
                !A &&
                    (0, r.jsx)(h.Z, {
                        analyticsSection: g.jXE.EXPRESSION_PICKER,
                        buttonText: A ? (C ? b.intl.string(b.t.hz78hE) : b.intl.string(b.t["Gd/XHF"])) : void 0,
                    }),
                (0, r.jsx)(s.P3F, {
                    className: y.upsellClose,
                    onClick: v,
                    children: (0, r.jsx)(s.Dio, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
            ],
        });
    };
