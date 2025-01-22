r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(627341);
var a = r(200651);
r(192379);
var o = r(120356),
    s = r.n(o),
    l = r(278074),
    u = r(481060),
    c = r(109213),
    d = r(409813),
    f = r(474936),
    p = r(388032),
    h = r(283314);
function _(e) {
    let { step: n, onClose: r, giftingOrigin: i } = e,
        { enabled: o } = c.G.useExperiment({ location: 'CollectiblesGiftPaymentModalHeader' }, { autoTrackExposure: !1 }),
        _ = (0, l.EQ)(n)
            .with(d.h8.REVIEW, () => p.intl.string(p.t.JbRd5u))
            .with(d.h8.ADD_PAYMENT_STEPS, () => p.intl.string(p.t.QiGOam))
            .with(d.h8.GIFT_CUSTOMIZATION, () => (o && i === f.Wt.DM_CHANNEL ? p.intl.string(p.t['xU+d9P']) : p.intl.string(p.t['JCFN//'])))
            .with(d.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => p.intl.string(p.t.lDbi6O))
            .with(d.h8.CONFIRM, () => '')
            .otherwise(() => null);
    return null == _
        ? null
        : (0, a.jsxs)(u.ModalHeader, {
              className: s()(h.headerContainerGift),
              separator: n !== d.h8.CONFIRM,
              children: [
                  (0, a.jsx)(u.Heading, {
                      variant: 'heading-lg/semibold',
                      children: _
                  }),
                  (0, a.jsx)(u.ModalCloseButton, {
                      onClick: r,
                      className: h.closeButtonGift
                  })
              ]
          });
}
