n.d(t, { Z: () => T });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(104494),
    f = n(639119),
    _ = n(165583),
    p = n(626135),
    h = n(453070),
    m = n(926491),
    g = n(419922),
    E = n(27733),
    b = n(611480),
    y = n(981631),
    v = n(474936),
    O = n(388032),
    I = n(962749);
let S = 80;
function T(e) {
    var t, n, a;
    let { className: T, onClose: A } = e;
    (0, h.fP)();
    let { analyticsLocations: N } = (0, u.ZP)(c.Z.EMPTY_STATE),
        C = (0, s.Wu)([m.Z], () => b.Wt.map((e) => m.Z.getStickerById(e)));
    i.useEffect(() => {
        p.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
            type: v.cd.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: y.jXE.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: N
        });
    }, [N]);
    let R = (0, f.N)(),
        P = (0, d.Ng)(),
        w = null != R || null != P,
        D = (null == R || null == (t = R.subscription_trial) ? void 0 : t.sku_id) === v.Si.TIER_0;
    return (0, r.jsxs)('div', {
        className: o()(I.emptyState, T, { [I.unifyTrialUpsell]: w }),
        children: [
            w
                ? (0, r.jsx)(_.ZP, {
                      discountOffer: P,
                      trialOffer: R,
                      onClose: A,
                      type: v.cd.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: null != (a = null == R || null == (n = R.subscription_trial) ? void 0 : n.sku_id) ? a : v.Si.TIER_2,
                      children: O.intl.string(O.t.FnNud3)
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.X6q, {
                              className: I.header,
                              variant: 'heading-xl/semibold',
                              children: O.intl.string(O.t.HEm04O)
                          }),
                          (0, r.jsx)(l.Text, {
                              className: I.subtitle,
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: O.intl.string(O.t.FnNud3)
                          }),
                          (0, r.jsx)('div', {
                              className: I.stickersRow,
                              children: C.filter((e) => null != e).map((e) =>
                                  (0, r.jsx)(
                                      g.Z,
                                      {
                                          sticker: e,
                                          className: I.sticker,
                                          size: S
                                      },
                                      null == e ? void 0 : e.id
                                  )
                              )
                          })
                      ]
                  }),
            !w &&
                (0, r.jsx)(E.Z, {
                    analyticsSection: y.jXE.EXPRESSION_PICKER,
                    buttonText: w ? (D ? O.intl.string(O.t.hz78hI) : O.intl.string(O.t['Gd/XHB'])) : void 0
                })
        ]
    });
}
