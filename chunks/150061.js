i.d(n, { default: () => v });
var e = i(477900);
i(582128);
var l = i(17928),
    a = i(597770),
    o = i(772707),
    r = i(683071),
    c = i(793574),
    s = i(688810),
    u = i(590180),
    p = i(450047),
    d = i(61750),
    g = i(780964),
    f = i(766075),
    y = i(427262),
    h = i(948518),
    m = i(652215),
    C = i(758836),
    T = i(843170),
    k = i(105292),
    A = i(711729);
function v(t) {
    let n,
        {
            transitionState: i,
            onClose: v,
            recipients: b,
            failedRecipients: w,
            rewardSkuIds: O,
            canShowGiftingBadgePostPurchase: I,
            openGiftingBadgePostPurchaseModal: S,
        } = t,
        { analyticsLocations: _ } = (0, s.Ay)(c.A.PREMIUM_GIFT_SUCCESS_MODAL),
        { openGiftModal: j } = (0, h.$)({
            giftRecipient: void 0,
            analyticsLocations: _,
            analyticsObject: { object: m.ZSU.BUTTON_CTA, objectType: m.AnalyticsObjectTypes.GIFT },
            location: "bulk-gift-success-modal",
        }),
        x = (0, p.D)(O),
        [E, ...P] = (0, l.yK)([u.A], () => O.map((t) => u.A.getProduct(t)).filter((t) => null != t)),
        G = b[0],
        N = w.length > 0;
    return null != G || N
        ? ((n =
              O.length > 0
                  ? {
                        variant: "primary",
                        text: k.intl.string(T.default.wTKEyX),
                        loading: x,
                        onClick: function () {
                            null != E &&
                                (v(),
                                (0, d.A)({
                                    product: E,
                                    remainingProducts: P,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: _,
                                    purchaseType: C.gs.PROMOTIONAL,
                                    onCloseCallback: I ? S : void 0,
                                }));
                        },
                    }
                  : I
                    ? {
                          variant: "primary",
                          text: k.intl.string(T.default.wTKEyX),
                          onClick: function () {
                              (v(), S());
                          },
                      }
                    : {
                          variant: "primary",
                          text: k.intl.string(T.default.Gr02vu),
                          icon: a.GiftIcon,
                          onClick: function () {
                              (v(), j());
                          },
                      }),
          (0, e.jsx)(o.k, {
              transitionState: i,
              onClose: v,
              gradientColor: "nitro-pink",
              graphic: { type: "image", src: A.A, aspectRatio: "16/9" },
              title: k.intl.string(T.default.owluOg),
              subtitle:
                  null != G
                      ? k.intl.format(T.default.wiBqTu, { recipientName: y.Ay.getName(G), otherCount: b.length - 1 })
                      : void 0,
              actions: [n],
              children:
                  N &&
                  (0, e.jsx)(r.w, {
                      type: "warning",
                      message: k.intl.format(T.default.p0mYoH, {
                          onInventoryClick: function () {
                              (v(), (0, f.openUserSettings)(g.X.GIFT_PANEL, { analyticsLocations: _ }));
                          },
                      }),
                      role: "alert",
                  }),
          }))
        : null;
}
