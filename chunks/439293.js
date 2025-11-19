n.d(t, { Z: () => d }), n(314940);
var i = n(54381);
n(473749);
var l = n(278074),
    a = n(481060),
    r = n(409813),
    s = n(388032),
    o = n(191684);
function d(e) {
    let { step: t, onClose: n, isGift: d } = e,
        c = (0, l.EQ)(t)
            .with(r.h8.REVIEW, () => (d ? s.intl.string(s.t.wKaVLC) : s.intl.string(s.t.Whxhpm)))
            .with(r.h8.ADD_PAYMENT_STEPS, () => s.intl.string(s.t.QiGOak))
            .with(r.h8.GIFT_CUSTOMIZATION, () => s.intl.string(s.t["JCFN/y"]))
            .with(r.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => s.intl.string(s.t.lDbi6H))
            .with(r.h8.CONFIRM, () => "")
            .otherwise(() => null);
    return null == c
        ? null
        : (0, i.jsxs)(a.xBx, {
              "data-migration-pending": !0,
              className: o.headerContainerGift,
              separator: t !== r.h8.CONFIRM,
              children: [
                  (0, i.jsx)(a.Heading, {
                      variant: "heading-lg/semibold",
                      children: c,
                  }),
                  (0, i.jsx)(a.olH, {
                      "data-migration-pending": !0,
                      onClick: n,
                      className: o.closeButtonGift,
                  }),
              ],
          });
}
