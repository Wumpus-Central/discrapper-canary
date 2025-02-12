n.d(t, { Z: () => _ }), n(627341);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(278074),
    o = n(481060),
    l = n(109213),
    u = n(409813),
    c = n(474936),
    d = n(388032),
    f = n(364957);
function _(e) {
    let { step: t, onClose: n, giftingOrigin: r } = e,
        { enabled: _ } = l.G.useExperiment({ location: 'CollectiblesGiftPaymentModalHeader' }, { autoTrackExposure: !1 }),
        p = (0, s.EQ)(t)
            .with(u.h8.REVIEW, () => d.intl.string(d.t.JbRd5u))
            .with(u.h8.ADD_PAYMENT_STEPS, () => d.intl.string(d.t.QiGOam))
            .with(u.h8.GIFT_CUSTOMIZATION, () => (_ && r === c.Wt.DM_CHANNEL ? d.intl.string(d.t['xU+d9P']) : d.intl.string(d.t['JCFN//'])))
            .with(u.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => d.intl.string(d.t.lDbi6O))
            .with(u.h8.CONFIRM, () => '')
            .otherwise(() => null);
    return null == p
        ? null
        : (0, i.jsxs)(o.xBx, {
              className: a()(f.headerContainerGift),
              separator: t !== u.h8.CONFIRM,
              children: [
                  (0, i.jsx)(o.X6q, {
                      variant: 'heading-lg/semibold',
                      children: p
                  }),
                  (0, i.jsx)(o.olH, {
                      onClick: n,
                      className: f.closeButtonGift
                  })
              ]
          });
}
