t.d(n, {
    Z: function () {
        return x;
    }
}),
    t(627341);
var i = t(200651);
t(192379);
var l = t(120356),
    s = t.n(l),
    a = t(278074),
    r = t(481060),
    o = t(109213),
    d = t(409813),
    c = t(474936),
    u = t(388032),
    h = t(283314);
function x(e) {
    let { step: n, onClose: t, giftingOrigin: l } = e,
        { enabled: x } = o.G.useExperiment({ location: 'CollectiblesGiftPaymentModalHeader' }, { autoTrackExposure: !1 }),
        f = (0, a.EQ)(n)
            .with(d.h8.REVIEW, () => u.intl.string(u.t.JbRd5u))
            .with(d.h8.ADD_PAYMENT_STEPS, () => u.intl.string(u.t.QiGOam))
            .with(d.h8.GIFT_CUSTOMIZATION, () => (x && l === c.Wt.DM_CHANNEL ? u.intl.string(u.t['xU+d9P']) : u.intl.string(u.t['JCFN//'])))
            .with(d.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => u.intl.string(u.t.lDbi6O))
            .with(d.h8.CONFIRM, () => '')
            .otherwise(() => null);
    return null == f
        ? null
        : (0, i.jsxs)(r.ModalHeader, {
              className: s()(h.headerContainerGift),
              separator: n !== d.h8.CONFIRM,
              children: [
                  (0, i.jsx)(r.Heading, {
                      variant: 'heading-lg/semibold',
                      children: f
                  }),
                  (0, i.jsx)(r.ModalCloseButton, {
                      onClick: t,
                      className: h.closeButtonGift
                  })
              ]
          });
}
