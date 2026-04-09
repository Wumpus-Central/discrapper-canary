"use strict";
n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(793574),
    c = n(688810),
    d = n(429913),
    _ = n(993046),
    f = n(657331),
    p = n(798048),
    h = n(111085),
    m = n(594832),
    E = n(44724),
    g = n(317560),
    A = n(533406),
    I = n(366523),
    T = n(652215),
    S = n(788868),
    y = n(985018),
    v = n(934026);
let N = 20;
function C(e) {
    let {
            profileOwner: t,
            additionalUserIds: n,
            hideButtonIcon: s = !1,
            showPrice: C = !1,
            showIcons: R = !1,
            source: O = m.uS.WISHLIST,
            heartColor: b = "red",
            onWishlistItemClick: D,
            analyticsLocations: L,
            ...w
        } = e,
        { item: M, isOwner: x, giftingOrigin: P = S.vQ.USER_PROFILE_WISHLIST } = w,
        k = M.sku,
        U = k.applicationId,
        G = (0, d.h)(U),
        F = i.useRef(null),
        { analyticsLocations: V } = (0, c.Ay)(...(L ?? []), u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        B = (0, o.bG)([h.A], () => null != t && h.A.hasSentGift(M.skuId, t.id), [M.skuId, t]),
        { normalPrice: H, discountedPrice: j } = (0, _.ou)({ sku: k, priceSetAssignmentPurchaseType: T.lid.DEFAULT }),
        { normalPrice: Y, discountedPrice: W } = (0, _.ou)({ sku: k, priceSetAssignmentPurchaseType: T.lid.GIFT }),
        K = null != j ? j : H,
        $ = null != W ? W : Y,
        z = B || !0 === M.isOwned,
        q = M.skuName,
        {
            buttonCTALabel: Z,
            buttonIcon: X,
            handleCardClick: Q,
        } = i.useMemo(
            () =>
                x || z
                    ? {
                          buttonCTALabel: C && null != K ? K : y.intl.string(y.t.FdGl5A),
                          buttonIcon: void 0,
                          handleCardClick: () => {
                              G?.guildId != null &&
                                  (x
                                      ? ((0, f.closeUserProfileModal)(),
                                        (0, E.default)({ guildId: G.guildId, skuId: k.id, slug: k.slug }))
                                      : (0, g.R)({
                                            skuId: k.id,
                                            applicationId: G.id,
                                            isStorefront: !1,
                                            analyticsLocations: V,
                                        }));
                          },
                      }
                    : {
                          buttonCTALabel: C && null != $ ? $ : y.intl.string(y.t.ilhtIa),
                          buttonIcon: s ? void 0 : l.okO,
                          handleCardClick: () => {
                              D?.(),
                                  (0, A.a)(
                                      k,
                                      { isGift: !0, giftRecipient: t, additionalUserIds: n, giftingOrigin: P },
                                      {
                                          analyticsLocations: [
                                              ...V,
                                              u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
                                          ],
                                      },
                                  );
                          },
                      },
            [x, z, C, k, s, G, t, n, K, $, P, D, V],
        ),
        J = i.useCallback(
            () =>
                R
                    ? O === m.uS.WISHLIST
                        ? (0, r.jsx)("div", {
                              className: v.Fx,
                              children: (0, r.jsx)(l.C3E, {
                                  size: "custom",
                                  width: N,
                                  height: N,
                                  color: "currentColor",
                                  colorClass: a()({ [v.e_]: "white" === b, [v.Be]: "red" === b }),
                              }),
                          })
                        : O === m.uS.POPULAR
                          ? (0, r.jsx)("div", {
                                className: v.Fx,
                                children: (0, r.jsx)(l.Y3C, {
                                    size: "custom",
                                    width: N,
                                    height: N,
                                    color: "currentColor",
                                    colorClass: v.rY,
                                }),
                            })
                          : null
                    : null,
            [R, O, b],
        ),
        ee = i.useCallback(
            () =>
                (0, r.jsx)(I.e, {
                    shape: "custom",
                    containerClassName: v.Nr,
                    backgroundImageClassName: v.GC,
                    foregroundImageClassName: v.wP,
                    sku: k,
                }),
            [k],
        );
    return (0, r.jsx)(p.A, {
        ...w,
        source: O,
        cardRef: F,
        accessibleLabel: q,
        onCardClick: Q,
        buttonCTALabel: Z ?? y.intl.string(y.t.FdGl5A),
        buttonIcon: X,
        isOwned: z,
        renderItemPreview: ee,
        renderSourceIcon: J,
    });
}
