n.d(t, { C: () => I });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(622909),
    d = n(639119),
    f = n(165583),
    _ = n(626135),
    p = n(74538),
    h = n(45521),
    m = n(251159),
    g = n(981631),
    E = n(474936),
    b = n(388032),
    y = n(935149),
    O = n(867250);
let v = () => (0, h.f)(!1),
    I = (e) => {
        var t, n, a;
        let { onLearnMore: h } = e,
            { analyticsLocations: I } = (0, c.ZP)(l.Z.PREMIUM_UPSELL);
        i.useEffect(() => {
            _.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                location_section: g.jXE.STICKER_PICKER_UPSELL,
                type: E.cd.STICKER_PICKER_UPSELL,
                location_stack: I,
            });
        }, [I]);
        let S = (0, d.N)(),
            T = (0, u.N)(),
            A = (null == S || null == (t = S.subscription_trial) ? void 0 : t.sku_id) === E.Si.TIER_0,
            C = null != S || null != T;
        return (0, r.jsxs)("div", {
            className: o()(y.upsellWrapper, { [y.unifyTrialUpsell]: C }),
            children: [
                C
                    ? (0, r.jsx)(f.ZP, {
                          trialOffer: S,
                          discountOffer: T,
                          onClose: v,
                          type: E.cd.STICKER_PICKER_UPSELL,
                          subscriptionTier:
                              null != (a = null == S || null == (n = S.subscription_trial) ? void 0 : n.sku_id)
                                  ? a
                                  : E.Si.TIER_2,
                          children: A
                              ? b.intl.format(b.t.MAGagw, {
                                    planName: (0, p.aq)(E.Xh.PREMIUM_MONTH_TIER_0),
                                    onClick: h,
                                })
                              : b.intl.format(b.t.jt7JX6, { onClick: h }),
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
                                  children: b.intl.format(b.t.jt7JX6, { onClick: h }),
                              }),
                          ],
                      }),
                !C &&
                    (0, r.jsx)(m.Z, {
                        analyticsSection: g.jXE.EXPRESSION_PICKER,
                        buttonText: C ? (A ? b.intl.string(b.t.hz78hE) : b.intl.string(b.t["Gd/XHF"])) : void 0,
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
