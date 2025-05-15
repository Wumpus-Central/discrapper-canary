n.d(t, { Z: () => d }), n(314940);
var r = n(255367);
n(73800);
var i = n(278074),
    a = n(481060),
    o = n(109213),
    s = n(409813),
    l = n(474936),
    c = n(388032),
    u = n(368159);
function d(e) {
    let { step: t, onClose: n, giftingOrigin: d } = e,
        { enabled: f } = o.G.useExperiment({ location: 'CollectiblesGiftPaymentModalHeader' }, { autoTrackExposure: !1 }),
        _ = (0, i.EQ)(t)
            .with(s.h8.REVIEW, () => c.intl.string(c.t.JbRd5u))
            .with(s.h8.ADD_PAYMENT_STEPS, () => c.intl.string(c.t.QiGOam))
            .with(s.h8.GIFT_CUSTOMIZATION, () => (f && d === l.Wt.DM_CHANNEL ? c.intl.string(c.t['xU+d9P']) : c.intl.string(c.t['JCFN//'])))
            .with(s.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => c.intl.string(c.t.lDbi6O))
            .with(s.h8.CONFIRM, () => '')
            .otherwise(() => null);
    return null == _
        ? null
        : (0, r.jsxs)(a.xBx, {
              className: u.headerContainerGift,
              separator: t !== s.h8.CONFIRM,
              children: [
                  (0, r.jsx)(a.X6q, {
                      variant: 'heading-lg/semibold',
                      children: _
                  }),
                  (0, r.jsx)(a.olH, {
                      onClick: n,
                      className: u.closeButtonGift
                  })
              ]
          });
}
