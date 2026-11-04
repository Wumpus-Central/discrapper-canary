i.d(n, { default: () => v });
var e = i(477900);
i(582128);
var l = i(17928),
    o = i(597770),
    a = i(772707),
    r = i(683071),
    c = i(793574),
    u = i(688810),
    s = i(590180),
    p = i(450047),
    d = i(61750),
    g = i(780964),
    f = i(766075),
    h = i(427262),
    m = i(948518),
    y = i(652215),
    C = i(758836),
    k = i(843170),
    T = i(105292),
    A = i(711729);
function v(t) {
    let n,
        {
            transitionState: i,
            onClose: v,
            recipients: b,
            failedRecipients: w,
            rewardSkuIds: I,
            canShowGiftingBadgePostPurchase: O,
            openGiftingBadgePostPurchaseModal: S,
        } = t,
        { analyticsLocations: _ } = (0, u.Ay)(c.A.PREMIUM_GIFT_SUCCESS_MODAL),
        { openGiftModal: x } = (0, m.$)({
            giftRecipient: void 0,
            analyticsLocations: _,
            analyticsObject: { object: y.ZSU.BUTTON_CTA, objectType: y.btD.GIFT },
            location: "bulk-gift-success-modal",
        }),
        E = (0, p.D)(I),
        [P, ...j] = (0, l.yK)([s.A], () => I.map((t) => s.A.getProduct(t)).filter((t) => null != t)),
        G = b[0],
        N = w.length > 0;
    return null != G || N
        ? ((n =
              I.length > 0
                  ? {
                        variant: "primary",
                        text: T.intl.string(k.default.wTKEyX),
                        loading: E,
                        onClick: function () {
                            null != P &&
                                (v(),
                                (0, d.A)({
                                    product: P,
                                    remainingProducts: j,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: _,
                                    purchaseType: C.gs.PROMOTIONAL,
                                    onCloseCallback: O ? S : void 0,
                                }));
                        },
                    }
                  : O
                    ? {
                          variant: "primary",
                          text: T.intl.string(k.default.wTKEyX),
                          onClick: function () {
                              (v(), S());
                          },
                      }
                    : {
                          variant: "primary",
                          text: T.intl.string(k.default.Gr02vu),
                          icon: o.GiftIcon,
                          onClick: function () {
                              (v(), x());
                          },
                      }),
          (0, e.jsx)(a.k, {
              transitionState: i,
              onClose: v,
              gradientColor: "nitro-pink",
              graphic: { type: "image", src: A.A, aspectRatio: "16/9" },
              title: T.intl.string(k.default.owluOg),
              subtitle:
                  null != G
                      ? T.intl.format(k.default.wiBqTu, { recipientName: h.Ay.getName(G), otherCount: b.length - 1 })
                      : void 0,
              actions: [n],
              children:
                  N &&
                  (0, e.jsx)(r.w, {
                      type: "warning",
                      message: T.intl.format(k.default.p0mYoH, {
                          onInventoryClick: function () {
                              (v(), (0, f.openUserSettings)(g.X.GIFT_PANEL, { analyticsLocations: _ }));
                          },
                      }),
                      role: "alert",
                  }),
          }))
        : null;
}
