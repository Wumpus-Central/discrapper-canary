r.d(n, {
    Z: function () {
        return N;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(442837),
    u = r(481060),
    c = r(100527),
    d = r(906732),
    f = r(104494),
    _ = r(639119),
    h = r(165583),
    p = r(626135),
    m = r(453070),
    g = r(926491),
    E = r(419922),
    v = r(27733),
    I = r(611480),
    T = r(981631),
    b = r(474936),
    y = r(388032),
    S = r(464545);
let A = 80;
function N(e) {
    var n, r, s;
    let { className: N, onClose: C } = e;
    (0, m.fP)();
    let { analyticsLocations: R } = (0, d.ZP)(c.Z.EMPTY_STATE),
        O = (0, l.Wu)([g.Z], () => I.Wt.map((e) => g.Z.getStickerById(e)));
    a.useEffect(() => {
        p.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
            type: b.cd.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: T.jXE.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: R
        });
    }, [R]);
    let D = (0, _.N)(),
        L = (0, f.Ng)(),
        x = null != D || null != L,
        w = (null == D ? void 0 : null === (n = D.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === b.Si.TIER_0;
    return (0, i.jsxs)('div', {
        className: o()(S.emptyState, N, { [S.unifyTrialUpsell]: x }),
        children: [
            x
                ? (0, i.jsx)(h.ZP, {
                      discountOffer: L,
                      trialOffer: D,
                      onClose: C,
                      type: b.cd.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: null !== (s = null == D ? void 0 : null === (r = D.subscription_trial) || void 0 === r ? void 0 : r.sku_id) && void 0 !== s ? s : b.Si.TIER_2,
                      children: y.intl.string(y.t.FnNud3)
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.Heading, {
                              className: S.header,
                              variant: 'heading-xl/semibold',
                              children: y.intl.string(y.t.HEm04O)
                          }),
                          (0, i.jsx)(u.Text, {
                              className: S.subtitle,
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: y.intl.string(y.t.FnNud3)
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
            !x &&
                (0, i.jsx)(v.Z, {
                    analyticsSection: T.jXE.EXPRESSION_PICKER,
                    buttonText: x ? (w ? y.intl.string(y.t.hz78hI) : y.intl.string(y.t['Gd/XHB'])) : void 0
                })
        ]
    });
}
