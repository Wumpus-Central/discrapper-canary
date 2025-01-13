t.d(n, {
    Z: function () {
        return f;
    }
}),
    t(627341);
var i = t(200651);
t(192379);
var l = t(120356),
    s = t.n(l),
    r = t(278074),
    a = t(481060),
    o = t(109213),
    d = t(409813),
    c = t(474936),
    u = t(388032),
    h = t(283314);
function f(e) {
    let { step: n, onClose: t, giftingOrigin: l } = e,
        { enabled: f } = o.G.useExperiment({ location: 'CollectiblesGiftPaymentModalHeader' }, { autoTrackExposure: !1 }),
        x = (0, r.EQ)(n)
            .with(d.h8.REVIEW, () => u.intl.string(u.t.JbRd5u))
            .with(d.h8.ADD_PAYMENT_STEPS, () => u.intl.string(u.t.QiGOam))
            .with(d.h8.GIFT_CUSTOMIZATION, () => (f && l === c.Wt.DM_CHANNEL ? u.intl.string(u.t['xU+d9P']) : u.intl.string(u.t['JCFN//'])))
            .with(d.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => u.intl.string(u.t.lDbi6O))
            .with(d.h8.CONFIRM, () => '')
            .otherwise(() => null);
    return null == x
        ? null
        : (0, i.jsxs)(a.ModalHeader, {
              className: s()(h.headerContainerGift),
              separator: n !== d.h8.CONFIRM,
              children: [
                  (0, i.jsx)(a.Heading, {
                      variant: 'heading-lg/semibold',
                      children: x
                  }),
                  (0, i.jsx)(a.ModalCloseButton, {
                      onClick: t,
                      className: h.closeButtonGift
                  })
              ]
          });
}
