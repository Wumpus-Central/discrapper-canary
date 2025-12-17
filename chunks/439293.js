n.d(t, { Z: () => c }), n(314940);
var r = n(54381);
n(473749);
var i = n(278074),
    a = n(481060),
    o = n(409813),
    s = n(388032),
    l = n(849925);
function c(e) {
    let { step: t, onClose: n, isGift: c } = e,
        u = (0, i.EQ)(t)
            .with(o.h8.REVIEW, () => (c ? s.intl.string(s.t.wKaVLC) : s.intl.string(s.t.Whxhpm)))
            .with(o.h8.ADD_PAYMENT_STEPS, () => s.intl.string(s.t.QiGOak))
            .with(o.h8.GIFT_CUSTOMIZATION, () => s.intl.string(s.t["JCFN/y"]))
            .with(o.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => s.intl.string(s.t.lDbi6H))
            .with(o.h8.CONFIRM, () => "")
            .otherwise(() => null);
    return null == u
        ? null
        : (0, r.jsxs)(a.xBx, {
              "data-migration-pending": !0,
              className: l.headerContainerGift,
              separator: t !== o.h8.CONFIRM,
              children: [
                  (0, r.jsx)(a.Heading, {
                      variant: "heading-lg/semibold",
                      children: u,
                  }),
                  (0, r.jsx)(a.olH, {
                      "data-migration-pending": !0,
                      onClick: n,
                      className: l.closeButtonGift,
                  }),
              ],
          });
}
