n.d(t, { Z: () => A });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(100527),
    c = n(906732),
    d = n(104494),
    f = n(639119),
    _ = n(165583),
    p = n(626135),
    h = n(453070),
    m = n(926491),
    g = n(419922),
    E = n(27733),
    v = n(611480),
    y = n(981631),
    I = n(474936),
    b = n(388032),
    T = n(464545);
let S = 80;
function A(e) {
    var t, n, a;
    let { className: A, onClose: N } = e;
    (0, h.fP)();
    let { analyticsLocations: C } = (0, c.ZP)(u.Z.EMPTY_STATE),
        R = (0, o.Wu)([m.Z], () => v.Wt.map((e) => m.Z.getStickerById(e)));
    r.useEffect(() => {
        p.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
            type: I.cd.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: y.jXE.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: C
        });
    }, [C]);
    let O = (0, f.N)(),
        D = (0, d.Ng)(),
        x = null != O || null != D,
        L = (null == O ? void 0 : null === (t = O.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === I.Si.TIER_0;
    return (0, i.jsxs)('div', {
        className: s()(T.emptyState, A, { [T.unifyTrialUpsell]: x }),
        children: [
            x
                ? (0, i.jsx)(_.ZP, {
                      discountOffer: D,
                      trialOffer: O,
                      onClose: N,
                      type: I.cd.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: null !== (a = null == O ? void 0 : null === (n = O.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : I.Si.TIER_2,
                      children: b.intl.string(b.t.FnNud3)
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(l.X6q, {
                              className: T.header,
                              variant: 'heading-xl/semibold',
                              children: b.intl.string(b.t.HEm04O)
                          }),
                          (0, i.jsx)(l.Text, {
                              className: T.subtitle,
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: b.intl.string(b.t.FnNud3)
                          }),
                          (0, i.jsx)('div', {
                              className: T.stickersRow,
                              children: R.filter((e) => null != e).map((e) =>
                                  (0, i.jsx)(
                                      g.ZP,
                                      {
                                          sticker: e,
                                          className: T.sticker,
                                          size: S
                                      },
                                      null == e ? void 0 : e.id
                                  )
                              )
                          })
                      ]
                  }),
            !x &&
                (0, i.jsx)(E.Z, {
                    analyticsSection: y.jXE.EXPRESSION_PICKER,
                    buttonText: x ? (L ? b.intl.string(b.t.hz78hI) : b.intl.string(b.t['Gd/XHB'])) : void 0
                })
        ]
    });
}
