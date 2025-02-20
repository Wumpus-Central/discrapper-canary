n.d(t, { Z: () => T });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(104494),
    f = n(639119),
    p = n(165583),
    _ = n(626135),
    h = n(453070),
    m = n(926491),
    g = n(419922),
    E = n(27733),
    v = n(611480),
    b = n(981631),
    y = n(474936),
    O = n(388032),
    S = n(467005);
let I = 80;
function T(e) {
    var t, n, o;
    let { className: T, onClose: N } = e;
    (0, h.fP)();
    let { analyticsLocations: A } = (0, u.ZP)(c.Z.EMPTY_STATE),
        C = (0, s.Wu)([m.Z], () => v.Wt.map((e) => m.Z.getStickerById(e)));
    i.useEffect(() => {
        _.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
            type: y.cd.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: b.jXE.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: A
        });
    }, [A]);
    let R = (0, f.N)(),
        P = (0, d.Ng)(),
        w = null != R || null != P,
        D = (null == R ? void 0 : null === (t = R.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === y.Si.TIER_0;
    return (0, r.jsxs)('div', {
        className: a()(S.emptyState, T, { [S.unifyTrialUpsell]: w }),
        children: [
            w
                ? (0, r.jsx)(p.ZP, {
                      discountOffer: P,
                      trialOffer: R,
                      onClose: N,
                      type: y.cd.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: null !== (o = null == R ? void 0 : null === (n = R.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== o ? o : y.Si.TIER_2,
                      children: O.NW.string(O.t.FnNud3)
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.X6q, {
                              className: S.header,
                              variant: 'heading-xl/semibold',
                              children: O.NW.string(O.t.HEm04O)
                          }),
                          (0, r.jsx)(l.Text, {
                              className: S.subtitle,
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: O.NW.string(O.t.FnNud3)
                          }),
                          (0, r.jsx)('div', {
                              className: S.stickersRow,
                              children: C.filter((e) => null != e).map((e) =>
                                  (0, r.jsx)(
                                      g.ZP,
                                      {
                                          sticker: e,
                                          className: S.sticker,
                                          size: I
                                      },
                                      null == e ? void 0 : e.id
                                  )
                              )
                          })
                      ]
                  }),
            !w &&
                (0, r.jsx)(E.Z, {
                    analyticsSection: b.jXE.EXPRESSION_PICKER,
                    buttonText: w ? (D ? O.NW.string(O.t.hz78hI) : O.NW.string(O.t['Gd/XHB'])) : void 0
                })
        ]
    });
}
