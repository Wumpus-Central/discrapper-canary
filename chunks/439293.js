n.d(t, { Z: () => c }), n(314940);
var i = n(951288);
n(647438);
var r = n(278074),
    a = n(481060),
    l = n(409813),
    s = n(388032),
    o = n(525214);
function c(e) {
    let { step: t, onClose: n, isGift: c } = e,
        d = (0, r.EQ)(t)
            .with(l.h8.REVIEW, () => (c ? s.intl.string(s.t.wKaVLC) : s.intl.string(s.t.Whxhpm)))
            .with(l.h8.ADD_PAYMENT_STEPS, () => s.intl.string(s.t.QiGOak))
            .with(l.h8.GIFT_CUSTOMIZATION, () => s.intl.string(s.t["JCFN/y"]))
            .with(l.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => s.intl.string(s.t.lDbi6H))
            .with(l.h8.CONFIRM, () => "")
            .otherwise(() => null);
    return null == d
        ? null
        : (0, i.jsxs)(a.xBx, {
              "data-migration-pending": !0,
              className: o.headerContainerGift,
              separator: t !== l.h8.CONFIRM,
              children: [
                  (0, i.jsx)(a.Heading, {
                      variant: "heading-lg/semibold",
                      children: d,
                  }),
                  (0, i.jsx)(a.olH, {
                      "data-migration-pending": !0,
                      onClick: n,
                      className: o.closeButtonGift,
                  }),
              ],
          });
}
