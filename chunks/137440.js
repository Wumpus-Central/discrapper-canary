n.d(t, { Z: () => c }), n(314940);
var i = n(951288);
n(647438);
var a = n(278074),
    l = n(481060),
    r = n(409813),
    s = n(388032),
    o = n(790793);
function c(e) {
    let { step: t, onClose: n } = e,
        c = (0, a.EQ)(t)
            .with(r.h8.REVIEW, () => s.intl.string(s.t.JbRd5u))
            .with(r.h8.ADD_PAYMENT_STEPS, () => s.intl.string(s.t.QiGOam))
            .with(r.h8.GIFT_CUSTOMIZATION, () => s.intl.string(s.t["JCFN//"]))
            .with(r.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => s.intl.string(s.t.lDbi6O))
            .with(r.h8.CONFIRM, () => "")
            .otherwise(() => null);
    return null == c
        ? null
        : (0, i.jsxs)(l.xBx, {
              "data-migration-pending": !0,
              className: o.headerContainerGift,
              separator: t !== r.h8.CONFIRM,
              children: [
                  (0, i.jsx)(l.Heading, {
                      variant: "heading-lg/semibold",
                      children: c,
                  }),
                  (0, i.jsx)(l.olH, {
                      "data-migration-pending": !0,
                      onClick: n,
                      className: o.closeButtonGift,
                  }),
              ],
          });
}
