t.d(i, { l7: () => l });
var r = t(64700),
    n = t(594832),
    a = t(721932),
    s = t(985018);
function l(e) {
    let { totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: l, recipientName: o } = e,
        c = (0, r.useMemo)(
            () =>
                (function (e) {
                    let { totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: r } = e;
                    return i >= t
                        ? "FULL_WISHLIST"
                        : i > 0
                          ? "MIXED"
                          : r.length > 0 &&
                              r.every((e) => {
                                  let { item: i, source: t } = e;
                                  return t === n.uS.POPULAR && (0, a.$)(i);
                              })
                            ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                            : "SHOP_ONLY";
                })({ totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: l }),
            [i, t, l],
        );
    return (0, r.useMemo)(() => {
        switch (c) {
            case "FULL_WISHLIST":
                return { title: s.intl.formatToPlainString(s.t["YcL/Vr"], { username: o }), showIcons: !1 };
            case "MIXED":
                return { title: s.intl.formatToPlainString(s.t.dIDKgi, { username: o }), showIcons: !0 };
            default:
                return { title: s.intl.string(s.t.BCi1gT), showIcons: !1 };
        }
    }, [c, o]);
}
s.intl.string(s.t["7lZ31J"]), s.intl.string(s.t.pWG4ze), s.intl.string(s.t.SK5rmi), s.intl.string(s.t.BCi1gT);
