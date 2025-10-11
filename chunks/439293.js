n.d(t, { Z: () => c }), n(314940);
var i = n(951288);
n(647438);
var l = n(278074),
    r = n(481060),
    a = n(409813),
    s = n(388032),
    o = n(525214);
function c(e) {
    let { step: t, onClose: n, isGift: c } = e,
        d = (0, l.EQ)(t)
            .with(a.h8.REVIEW, () => (c ? s.intl.string(s.t.wKaVLC) : s.intl.string(s.t.Whxhpq)))
            .with(a.h8.ADD_PAYMENT_STEPS, () => s.intl.string(s.t.QiGOam))
            .with(a.h8.GIFT_CUSTOMIZATION, () => s.intl.string(s.t["JCFN//"]))
            .with(a.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => s.intl.string(s.t.lDbi6O))
            .with(a.h8.CONFIRM, () => "")
            .otherwise(() => null);
    return null == d
        ? null
        : (0, i.jsxs)(r.xBx, {
              "data-migration-pending": !0,
              className: o.headerContainerGift,
              separator: t !== a.h8.CONFIRM,
              children: [
                  (0, i.jsx)(r.Heading, {
                      variant: "heading-lg/semibold",
                      children: d,
                  }),
                  (0, i.jsx)(r.olH, {
                      "data-migration-pending": !0,
                      onClick: n,
                      className: o.closeButtonGift,
                  }),
              ],
          });
}
