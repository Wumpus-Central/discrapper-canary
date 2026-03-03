t.d(i, { KX: () => l, ap: () => a });
var n = t(594832),
    r = t(721932),
    s = t(985018);
let a = {
    FULL_WISHLIST: {
        title: s.intl.string(s.t["7lZ31J"]),
        getSubtitle: (e) => s.intl.formatToPlainString(s.t.BjEX38, { username: e }),
        showIcons: !1,
    },
    MIXED: {
        title: s.intl.string(s.t.SK5rmi),
        getSubtitle: (e) => s.intl.formatToPlainString(s.t.dIDKgi, { username: e }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: s.intl.string(s.t.SK5rmi),
        getSubtitle: (e) => s.intl.formatToPlainString(s.t.wyMp1j, { username: e }),
        showIcons: !1,
    },
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
        title: s.intl.string(s.t.BCi1gT),
        getSubtitle: (e) => s.intl.formatToPlainString(s.t.BjEX38, { username: e }),
        showIcons: !1,
    },
};
function l(e) {
    let { totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: s } = e;
    return i >= t
        ? "FULL_WISHLIST"
        : i > 0
          ? "MIXED"
          : s.length > 0 &&
              s.every((e) => {
                  let { item: i, source: t } = e;
                  return t === n.uS.POPULAR && (0, r.$)(i);
              })
            ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
            : "SHOP_ONLY";
}
s.intl.string(s.t["7lZ31J"]), s.intl.string(s.t.pWG4ze), s.intl.string(s.t.SK5rmi), s.intl.string(s.t.BCi1gT);
