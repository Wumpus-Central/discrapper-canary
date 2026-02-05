"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(793574),
    l = n(688810),
    u = n(429913),
    c = n(657331),
    d = n(242640),
    _ = n(111085),
    f = n(594832),
    p = n(580630),
    h = n(44724),
    m = n(317560),
    g = n(533406),
    E = n(366523),
    A = n(788868),
    I = n(818348),
    T = n(985018),
    y = n(125908);
let S = 20;
function v(e) {
    let {
            profileOwner: t,
            additionalUserIds: n,
            hideButtonIcon: v = !1,
            showPrice: C = !1,
            showIcons: b = !1,
            source: N = f.uS.WISHLIST,
            analyticsLocations: R,
            ...O
        } = e,
        { item: D, isOwner: L, giftingOrigin: w = A.vQ.USER_PROFILE_WISHLIST } = O,
        x = D.sku,
        P = x.applicationId,
        M = (0, u.h)(P),
        k = i.useRef(null),
        { analyticsLocations: U } = (0, l.Ay)(...(R ?? []), o.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        G = (0, a.bG)([_.A], () => null != t && _.A.hasSentGift(D.skuId, t.id), [D.skuId, t]),
        V = G || !0 === D.isOwned,
        F = D.skuName,
        {
            buttonCTALabel: B,
            buttonIcon: j,
            handleCardClick: H,
        } = i.useMemo(
            () =>
                L || V
                    ? {
                          buttonCTALabel: C
                              ? (0, p.$g)(x.price?.amount ?? 0, x.price?.currency ?? I.Yr.USD)
                              : T.intl.string(T.t.FdGl5A),
                          buttonIcon: void 0,
                          handleCardClick: () => {
                              M?.guildId != null &&
                                  (L
                                      ? ((0, c.closeUserProfileModal)(),
                                        (0, h.default)({ guildId: M.guildId, skuId: x.id, slug: x.slug }))
                                      : (0, m.R)({
                                            skuId: x.id,
                                            applicationId: M.id,
                                            guildId: M.guildId,
                                            isStorefront: !1,
                                            analyticsLocations: U,
                                        }));
                          },
                      }
                    : {
                          buttonCTALabel: C
                              ? (0, p.$g)(x.price?.amount ?? 0, x.price?.currency ?? I.Yr.USD)
                              : T.intl.string(T.t.ilhtIa),
                          buttonIcon: v ? void 0 : s.okO,
                          handleCardClick: () => {
                              G ||
                                  (0, g.a)(
                                      x,
                                      { isGift: !0, giftRecipient: t, additionalUserIds: n, giftingOrigin: w },
                                      {
                                          analyticsLocations: [
                                              ...U,
                                              o.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
                                          ],
                                      },
                                  );
                          },
                      },
            [L, V, C, x, v, M, G, t, n, w, U],
        ),
        Y = i.useCallback(
            () =>
                b
                    ? N === f.uS.WISHLIST
                        ? (0, r.jsx)("div", {
                              className: y.Fx,
                              children: (0, r.jsx)(s.C3E, {
                                  size: "custom",
                                  width: S,
                                  height: S,
                                  color: "currentColor",
                                  colorClass: y.Be,
                              }),
                          })
                        : N === f.uS.POPULAR
                          ? (0, r.jsx)("div", {
                                className: y.Fx,
                                children: (0, r.jsx)(s.Y3C, {
                                    size: "custom",
                                    width: S,
                                    height: S,
                                    color: "currentColor",
                                    colorClass: y.rY,
                                }),
                            })
                          : null
                    : null,
            [b, N],
        ),
        W = i.useCallback(
            () =>
                (0, r.jsx)(E.e, {
                    shape: "custom",
                    containerClassName: y.Nr,
                    backgroundImageClassName: y.GC,
                    foregroundImageClassName: y.wP,
                    sku: x,
                }),
            [x],
        );
    return (0, r.jsx)(d.A, {
        ...O,
        source: N,
        cardRef: k,
        accessibleLabel: F,
        onCardClick: H,
        buttonCTALabel: B,
        buttonIcon: j,
        isOwned: V,
        renderItemPreview: W,
        renderSourceIcon: Y,
    });
}
