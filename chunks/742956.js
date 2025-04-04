n.d(t, { Z: () => d }), n(627341);
var r = n(200651);
n(192379);
var i = n(278074),
    o = n(481060),
    a = n(109213),
    s = n(409813),
    l = n(474936),
    c = n(388032),
    u = n(368159);
function d(e) {
    let { step: t, onClose: n, giftingOrigin: d } = e,
        { enabled: f } = a.G.useExperiment({ location: 'CollectiblesGiftPaymentModalHeader' }, { autoTrackExposure: !1 }),
        _ = (0, i.EQ)(t)
            .with(s.h8.REVIEW, () => c.NW.string(c.t.JbRd5u))
            .with(s.h8.ADD_PAYMENT_STEPS, () => c.NW.string(c.t.QiGOam))
            .with(s.h8.GIFT_CUSTOMIZATION, () => (f && d === l.Wt.DM_CHANNEL ? c.NW.string(c.t['xU+d9P']) : c.NW.string(c.t['JCFN//'])))
            .with(s.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => c.NW.string(c.t.lDbi6O))
            .with(s.h8.CONFIRM, () => '')
            .otherwise(() => null);
    return null == _
        ? null
        : (0, r.jsxs)(o.xBx, {
              className: u.headerContainerGift,
              separator: t !== s.h8.CONFIRM,
              children: [
                  (0, r.jsx)(o.X6q, {
                      variant: 'heading-lg/semibold',
                      children: _
                  }),
                  (0, r.jsx)(o.olH, {
                      onClick: n,
                      className: u.closeButtonGift
                  })
              ]
          });
}
