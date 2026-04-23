t.d(i, { l7: () => a });
var n = t(64700),
    s = t(594832),
    l = t(721932),
    r = t(985018);
function a(e) {
    let { totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: a, recipientName: c } = e,
        o = (0, n.useMemo)(
            () =>
                (function (e) {
                    let { totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: n } = e;
                    return i >= t
                        ? "FULL_WISHLIST"
                        : i > 0
                          ? "MIXED"
                          : n.length > 0 &&
                              n.every((e) => {
                                  let { item: i, source: t } = e;
                                  return t === s.uS.POPULAR && (0, l.$)(i);
                              })
                            ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                            : "SHOP_ONLY";
                })({ totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: a }),
            [i, t, a],
        );
    return (0, n.useMemo)(() => {
        switch (o) {
            case "FULL_WISHLIST":
                return { title: r.intl.formatToPlainString(r.t["YcL/Vr"], { username: c }), showIcons: !1 };
            case "MIXED":
                return { title: r.intl.formatToPlainString(r.t.dIDKgi, { username: c }), showIcons: !0 };
            default:
                return { title: r.intl.string(r.t.BCi1gT), showIcons: !1 };
        }
    }, [o, c]);
}
r.intl.string(r.t["7lZ31J"]), r.intl.string(r.t.pWG4ze), r.intl.string(r.t.SK5rmi), r.intl.string(r.t.BCi1gT);
