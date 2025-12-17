n.d(t, { Z: () => d }), n(314940);
var r = n(54381);
n(473749);
var i = n(278074),
    a = n(481060),
    o = n(109213),
    s = n(409813),
    l = n(474936),
    c = n(388032),
    u = n(871943);
function d(e) {
    let { step: t, onClose: n, giftingOrigin: d } = e,
        { enabled: f } = o.G.useExperiment(
            { location: "CollectiblesGiftPaymentModalHeader" },
            { autoTrackExposure: !1 },
        ),
        p = (0, i.EQ)(t)
            .with(s.h8.REVIEW, () => c.intl.string(c.t.JbRd5s))
            .with(s.h8.ADD_PAYMENT_STEPS, () => c.intl.string(c.t.QiGOak))
            .with(s.h8.GIFT_CUSTOMIZATION, () =>
                f && d === l.Wt.DM_CHANNEL ? c.intl.string(c.t["xU+d9M"]) : c.intl.string(c.t["JCFN/y"]),
            )
            .with(s.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => c.intl.string(c.t.lDbi6H))
            .with(s.h8.CONFIRM, () => "")
            .otherwise(() => null);
    return null == p
        ? null
        : (0, r.jsxs)(a.xBx, {
              "data-migration-pending": !0,
              className: u.headerContainerGift,
              separator: t !== s.h8.CONFIRM,
              children: [
                  (0, r.jsx)(a.Heading, {
                      variant: "heading-lg/semibold",
                      children: p,
                  }),
                  (0, r.jsx)(a.olH, {
                      "data-migration-pending": !0,
                      onClick: n,
                      className: u.closeButtonGift,
                  }),
              ],
          });
}
