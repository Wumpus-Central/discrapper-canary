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
    d = i(450047),
    p = i(61750),
    g = i(780964),
    f = i(766075),
    h = i(427262),
    y = i(788833),
    C = i(652215),
    m = i(758836),
    A = i(805161),
    T = i(375708),
    k = i(711729);
function v(t) {
    let n,
        {
            transitionState: i,
            onClose: v,
            recipients: b,
            failedRecipients: w,
            rewardSkuIds: O,
            canShowGiftingBadgePostPurchase: j,
            openGiftingBadgePostPurchaseModal: x,
        } = t,
        { analyticsLocations: I } = (0, u.Ay)(c.A.PREMIUM_GIFT_SUCCESS_MODAL),
        { openGiftModal: S } = (0, y.$)({
            giftRecipient: void 0,
            analyticsLocations: I,
            analyticsObject: { object: C.ZSU.BUTTON_CTA, objectType: C.AnalyticsObjectTypes.GIFT },
            location: "bulk-gift-success-modal",
        }),
        _ = (0, d.D)(O),
        [E, ...P] = (0, l.yK)([s.A], () => O.map((t) => s.A.getProduct(t)).filter((t) => null != t)),
        G = b[0],
        N = w.length > 0;
    return null != G || N
        ? ((n =
              O.length > 0
                  ? {
                        variant: "primary",
                        text: T.intl.string(A.default.wTKEyX),
                        loading: _,
                        onClick: function () {
                            null != E &&
                                (v(),
                                (0, p.A)({
                                    product: E,
                                    remainingProducts: P,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: I,
                                    purchaseType: m.gs.PROMOTIONAL,
                                    onCloseCallback: j ? x : void 0,
                                }));
                        },
                    }
                  : j
                    ? {
                          variant: "primary",
                          text: T.intl.string(A.default.wTKEyX),
                          onClick: function () {
                              v(), x();
                          },
                      }
                    : {
                          variant: "primary",
                          text: T.intl.string(A.default.Gr02vu),
                          icon: o.GiftIcon,
                          onClick: function () {
                              v(), S();
                          },
                      }),
          (0, e.jsx)(a.k, {
              transitionState: i,
              onClose: v,
              gradientColor: "nitro-pink",
              graphic: { type: "image", src: k.A, aspectRatio: "16/9" },
              title: T.intl.string(A.default.owluOg),
              subtitle:
                  null != G
                      ? T.intl.format(A.default.wiBqTu, { recipientName: h.Ay.getName(G), otherCount: b.length - 1 })
                      : void 0,
              actions: [n],
              children:
                  N &&
                  (0, e.jsx)("div", {
                      role: "alert",
                      children: (0, e.jsx)(r.w, {
                          type: "warning",
                          iconAlign: "center",
                          children: T.intl.format(A.default.p0mYoH, {
                              onInventoryClick: function () {
                                  v(), (0, f.openUserSettings)(g.X.GIFT_PANEL, { analyticsLocations: I });
                              },
                          }),
                      }),
                  }),
          }))
        : null;
}
