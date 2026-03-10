i.d(t, { l7: () => d });
var n = i(64700),
    r = i(178213),
    s = i(594832),
    a = i(721932),
    l = i(985018);
let o = {
    FULL_WISHLIST: {
        title: l.intl.string(l.t["7lZ31J"]),
        getSubtitle: (e) => l.intl.formatToPlainString(l.t.BjEX38, { username: e }),
        showIcons: !1,
    },
    MIXED: {
        title: l.intl.string(l.t.SK5rmi),
        getSubtitle: (e) => l.intl.formatToPlainString(l.t.dIDKgi, { username: e }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: l.intl.string(l.t.SK5rmi),
        getSubtitle: (e) => l.intl.formatToPlainString(l.t.wyMp1j, { username: e }),
        showIcons: !1,
    },
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
        title: l.intl.string(l.t.BCi1gT),
        getSubtitle: (e) => l.intl.formatToPlainString(l.t.BjEX38, { username: e }),
        showIcons: !1,
    },
};
function d(e) {
    let { totalUnownedWishlistItemCount: t, wishlistInDmLength: i, displayItems: d, recipientName: c } = e,
        u = (0, n.useMemo)(
            () =>
                (function (e) {
                    let { totalUnownedWishlistItemCount: t, wishlistInDmLength: i, displayItems: n } = e;
                    return t >= i
                        ? "FULL_WISHLIST"
                        : t > 0
                          ? "MIXED"
                          : n.length > 0 &&
                              n.every((e) => {
                                  let { item: t, source: i } = e;
                                  return i === s.uS.POPULAR && (0, a.$)(t);
                              })
                            ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                            : "SHOP_ONLY";
                })({ totalUnownedWishlistItemCount: t, wishlistInDmLength: i, displayItems: d }),
            [t, i, d],
        ),
        _ = (0, r.GG)("wishlist_banner_config");
    return (0, n.useMemo)(() => {
        if (_)
            switch (u) {
                case "FULL_WISHLIST":
                    return { title: l.intl.formatToPlainString(l.t["YcL/Vr"], { username: c }), showIcons: !1 };
                case "MIXED":
                    return { title: l.intl.formatToPlainString(l.t.dIDKgi, { username: c }), showIcons: !0 };
                default:
                    return { title: l.intl.string(l.t.BCi1gT), showIcons: !1 };
            }
        return { title: o[u].title, subtitle: o[u].getSubtitle(c), showIcons: o[u].showIcons };
    }, [u, c, _]);
}
l.intl.string(l.t["7lZ31J"]), l.intl.string(l.t.pWG4ze), l.intl.string(l.t.SK5rmi), l.intl.string(l.t.BCi1gT);
