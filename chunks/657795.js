n.d(t, { Z: () => T });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(622909),
    f = n(639119),
    p = n(165583),
    _ = n(626135),
    m = n(453070),
    h = n(926491),
    g = n(419922),
    E = n(251159),
    b = n(611480),
    y = n(981631),
    O = n(474936),
    v = n(388032),
    S = n(107293);
let I = 80;
function T(e) {
    var t, n, a;
    let { className: T, onClose: A } = e;
    (0, m.fP)();
    let { analyticsLocations: C } = (0, u.ZP)(c.Z.EMPTY_STATE),
        N = (0, s.Wu)([h.Z], () => b.Wt.map((e) => h.Z.getStickerById(e)));
    i.useEffect(() => {
        _.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
            type: O.cd.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: y.jXE.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: C,
        });
    }, [C]);
    let P = (0, f.N)(),
        R = (0, d.N)(),
        w = null != P || null != R,
        D = (null == P || null == (t = P.subscription_trial) ? void 0 : t.sku_id) === O.Si.TIER_0;
    return (0, r.jsxs)("div", {
        className: o()(S.emptyState, T, { [S.unifyTrialUpsell]: w }),
        children: [
            w
                ? (0, r.jsx)(p.ZP, {
                      discountOffer: R,
                      trialOffer: P,
                      onClose: A,
                      type: O.cd.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier:
                          null != (a = null == P || null == (n = P.subscription_trial) ? void 0 : n.sku_id)
                              ? a
                              : O.Si.TIER_2,
                      children: v.intl.string(v.t.FnNud4),
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.Heading, {
                              className: S.header,
                              variant: "heading-xl/semibold",
                              children: v.intl.string(v.t.HEm04J),
                          }),
                          (0, r.jsx)(l.Text, {
                              className: S.subtitle,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: v.intl.string(v.t.FnNud4),
                          }),
                          (0, r.jsx)("div", {
                              className: S.stickersRow,
                              children: N.filter((e) => null != e).map((e) =>
                                  (0, r.jsx)(
                                      g.Z,
                                      {
                                          sticker: e,
                                          className: S.sticker,
                                          size: I,
                                      },
                                      null == e ? void 0 : e.id,
                                  ),
                              ),
                          }),
                      ],
                  }),
            !w &&
                (0, r.jsx)(E.Z, {
                    analyticsSection: y.jXE.EXPRESSION_PICKER,
                    buttonText: w ? (D ? v.intl.string(v.t.hz78hE) : v.intl.string(v.t["Gd/XHF"])) : void 0,
                }),
        ],
    });
}
