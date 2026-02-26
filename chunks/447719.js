i.d(t, { K: () => a, a: () => l });
var n = i(594832),
    s = i(721932),
    r = i(985018);
let l = {
    FULL_WISHLIST: {
        title: r.intl.string(r.t["7lZ31J"]),
        getSubtitle: (e) => r.intl.formatToPlainString(r.t.BjEX38, { username: e }),
        showIcons: !1,
    },
    MIXED: {
        title: r.intl.string(r.t.SK5rmi),
        getSubtitle: (e) => r.intl.formatToPlainString(r.t.dIDKgi, { username: e }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: r.intl.string(r.t.SK5rmi),
        getSubtitle: (e) => r.intl.formatToPlainString(r.t.wyMp1j, { username: e }),
        showIcons: !1,
    },
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
        title: r.intl.string(r.t.BCi1gT),
        getSubtitle: (e) => r.intl.formatToPlainString(r.t.BjEX38, { username: e }),
        showIcons: !1,
    },
};
function a(e) {
    let { totalUnownedWishlistItemCount: t, wishlistInDmLength: i, displayItems: r } = e;
    return t >= i
        ? "FULL_WISHLIST"
        : t > 0
          ? "MIXED"
          : r.length > 0 &&
              r.every((e) => {
                  let { item: t, source: i } = e;
                  return i === n.uS.POPULAR && (0, s.$)(t);
              })
            ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
            : "SHOP_ONLY";
}
