r.d(n, {
    Z: function () {
        return C;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(442837),
    u = r(481060),
    c = r(100527),
    d = r(906732),
    f = r(104494),
    p = r(639119),
    h = r(165583),
    _ = r(626135),
    m = r(453070),
    g = r(926491),
    E = r(419922),
    v = r(27733),
    y = r(611480),
    b = r(981631),
    I = r(474936),
    T = r(388032),
    S = r(464545);
let A = 80;
function C(e) {
    var n, r, o;
    let { className: C, onClose: N } = e;
    (0, m.fP)();
    let { analyticsLocations: R } = (0, d.ZP)(c.Z.EMPTY_STATE),
        O = (0, l.Wu)([g.Z], () => y.Wt.map((e) => g.Z.getStickerById(e)));
    a.useEffect(() => {
        _.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
            type: I.cd.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: b.jXE.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: R
        });
    }, [R]);
    let D = (0, p.N)(),
        x = (0, f.Ng)(),
        L = null != D || null != x,
        w = (null == D ? void 0 : null === (n = D.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === I.Si.TIER_0;
    return (0, i.jsxs)('div', {
        className: s()(S.emptyState, C, { [S.unifyTrialUpsell]: L }),
        children: [
            L
                ? (0, i.jsx)(h.ZP, {
                      discountOffer: x,
                      trialOffer: D,
                      onClose: N,
                      type: I.cd.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: null !== (o = null == D ? void 0 : null === (r = D.subscription_trial) || void 0 === r ? void 0 : r.sku_id) && void 0 !== o ? o : I.Si.TIER_2,
                      children: T.intl.string(T.t.FnNud3)
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.Heading, {
                              className: S.header,
                              variant: 'heading-xl/semibold',
                              children: T.intl.string(T.t.HEm04O)
                          }),
                          (0, i.jsx)(u.Text, {
                              className: S.subtitle,
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: T.intl.string(T.t.FnNud3)
                          }),
                          (0, i.jsx)('div', {
                              className: S.stickersRow,
                              children: O.filter((e) => null != e).map((e) =>
                                  (0, i.jsx)(
                                      E.ZP,
                                      {
                                          sticker: e,
                                          className: S.sticker,
                                          size: A
                                      },
                                      null == e ? void 0 : e.id
                                  )
                              )
                          })
                      ]
                  }),
            !L &&
                (0, i.jsx)(v.Z, {
                    analyticsSection: b.jXE.EXPRESSION_PICKER,
                    buttonText: L ? (w ? T.intl.string(T.t.hz78hI) : T.intl.string(T.t['Gd/XHB'])) : void 0
                })
        ]
    });
}
