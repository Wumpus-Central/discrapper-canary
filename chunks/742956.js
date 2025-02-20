n.d(t, { Z: () => p }), n(627341);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(278074),
    s = n(481060),
    l = n(109213),
    c = n(409813),
    u = n(474936),
    d = n(388032),
    f = n(298315);
function p(e) {
    let { step: t, onClose: n, giftingOrigin: i } = e,
        { enabled: p } = l.G.useExperiment({ location: 'CollectiblesGiftPaymentModalHeader' }, { autoTrackExposure: !1 }),
        _ = (0, a.EQ)(t)
            .with(c.h8.REVIEW, () => d.NW.string(d.t.JbRd5u))
            .with(c.h8.ADD_PAYMENT_STEPS, () => d.NW.string(d.t.QiGOam))
            .with(c.h8.GIFT_CUSTOMIZATION, () => (p && i === u.Wt.DM_CHANNEL ? d.NW.string(d.t['xU+d9P']) : d.NW.string(d.t['JCFN//'])))
            .with(c.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => d.NW.string(d.t.lDbi6O))
            .with(c.h8.CONFIRM, () => '')
            .otherwise(() => null);
    return null == _
        ? null
        : (0, r.jsxs)(s.xBx, {
              className: o()(f.headerContainerGift),
              separator: t !== c.h8.CONFIRM,
              children: [
                  (0, r.jsx)(s.X6q, {
                      variant: 'heading-lg/semibold',
                      children: _
                  }),
                  (0, r.jsx)(s.olH, {
                      onClick: n,
                      className: f.closeButtonGift
                  })
              ]
          });
}
