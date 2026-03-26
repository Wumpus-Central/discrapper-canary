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
    _ = n(657331),
    f = n(798048),
    p = n(111085),
    h = n(594832),
    m = n(580630),
    E = n(44724),
    g = n(317560),
    A = n(533406),
    I = n(366523),
    T = n(788868),
    S = n(818348),
    y = n(985018),
    v = n(474259);
let N = 20;
function C(e) {
    let {
            profileOwner: t,
            additionalUserIds: n,
            hideButtonIcon: s = !1,
            showPrice: C = !1,
            showIcons: R = !1,
            source: O = h.uS.WISHLIST,
            heartColor: b = "red",
            onWishlistItemClick: D,
            analyticsLocations: L,
            ...w
        } = e,
        { item: M, isOwner: x, giftingOrigin: P = T.vQ.USER_PROFILE_WISHLIST } = w,
        k = M.sku,
        U = k.applicationId,
        G = (0, d.h)(U),
        F = i.useRef(null),
        { analyticsLocations: V } = (0, c.Ay)(...(L ?? []), u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        B = (0, o.bG)([p.A], () => null != t && p.A.hasSentGift(M.skuId, t.id), [M.skuId, t]) || !0 === M.isOwned,
        H = M.skuName,
        {
            buttonCTALabel: j,
            buttonIcon: Y,
            handleCardClick: W,
        } = i.useMemo(
            () =>
                x || B
                    ? {
                          buttonCTALabel: C
                              ? (0, m.$g)(k.price?.amount ?? 0, k.price?.currency ?? S.Yr.USD)
                              : y.intl.string(y.t.FdGl5A),
                          buttonIcon: void 0,
                          handleCardClick: () => {
                              G?.guildId != null &&
                                  (x
                                      ? ((0, _.closeUserProfileModal)(),
                                        (0, E.default)({ guildId: G.guildId, skuId: k.id, slug: k.slug }))
                                      : (0, g.R)({
                                            skuId: k.id,
                                            applicationId: G.id,
                                            guildId: G.guildId,
                                            isStorefront: !1,
                                            analyticsLocations: V,
                                        }));
                          },
                      }
                    : {
                          buttonCTALabel: C
                              ? (0, m.$g)(k.price?.amount ?? 0, k.price?.currency ?? S.Yr.USD)
                              : y.intl.string(y.t.ilhtIa),
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
            [x, B, C, k, s, G, t, n, P, D, V],
        ),
        K = i.useCallback(
            () =>
                R
                    ? O === h.uS.WISHLIST
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
                        : O === h.uS.POPULAR
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
        $ = i.useCallback(
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
    return (0, r.jsx)(f.A, {
        ...w,
        source: O,
        cardRef: F,
        accessibleLabel: H,
        onCardClick: W,
        buttonCTALabel: j,
        buttonIcon: Y,
        isOwned: B,
        renderItemPreview: $,
        renderSourceIcon: K,
    });
}
