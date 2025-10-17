n.d(t, { Z: () => c }), n(314940);
var i = n(951288);
n(647438);
var r = n(278074),
    l = n(481060),
    a = n(409813),
    o = n(388032),
    s = n(525214);
function c(e) {
    let { step: t, onClose: n, isGift: c } = e,
        d = (0, r.EQ)(t)
            .with(a.h8.REVIEW, () => (c ? o.intl.string(o.t.wKaVLC) : o.intl.string(o.t.Whxhpq)))
            .with(a.h8.ADD_PAYMENT_STEPS, () => o.intl.string(o.t.QiGOam))
            .with(a.h8.GIFT_CUSTOMIZATION, () => o.intl.string(o.t["JCFN//"]))
            .with(a.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => o.intl.string(o.t.lDbi6O))
            .with(a.h8.CONFIRM, () => "")
            .otherwise(() => null);
    return null == d
        ? null
        : (0, i.jsxs)(l.xBx, {
              "data-migration-pending": !0,
              className: s.headerContainerGift,
              separator: t !== a.h8.CONFIRM,
              children: [
                  (0, i.jsx)(l.Heading, {
                      variant: "heading-lg/semibold",
                      children: d,
                  }),
                  (0, i.jsx)(l.olH, {
                      "data-migration-pending": !0,
                      onClick: n,
                      className: s.closeButtonGift,
                  }),
              ],
          });
}
