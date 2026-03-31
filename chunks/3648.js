n.d(t, { A: () => p, Z: () => m });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(793574),
    a = n(627363),
    r = n(576030),
    o = n(957785),
    c = n(533406),
    d = n(366523),
    u = n(788868),
    h = n(985018),
    A = n(738895),
    _ = n(522999);
function m(e, t) {
    let {
            moreCount: n,
            onViewWishlist: l,
            isSingleCard: a = !1,
            profileOwner: _,
            wishlistId: m,
            cardSize: g,
            analyticsLocations: p,
        } = t,
        f = null != n && n > 0,
        x = {
            title: f ? h.intl.string(h.t.TxBQzD) : h.intl.string(h.t["4yiU7x"]),
            body: f ? void 0 : h.intl.string(h.t.ilhtIa),
            renderIcon: f ? void 0 : r.GM,
            shouldShow: !0,
        };
    return (0, i.jsx)(
        o.A,
        {
            wishlistItem: e,
            onCardClick: () => {
                f
                    ? l()
                    : (0, c.a)(
                          e.sku,
                          { isGift: !0, giftRecipient: _, giftingOrigin: u.vQ.USER_PROFILE_WISHLIST },
                          {
                              analyticsLocations: [
                                  ...p,
                                  s.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
                              ],
                          },
                      );
            },
            tooltipConfig: x,
            shouldScalePreview: !1,
            renderPreview: () =>
                (0, i.jsx)(d.e, {
                    containerClassName: A.Nr,
                    backgroundImageClassName: A.GC,
                    foregroundImageClassName: A.wP,
                    sku: e.sku,
                    shape: "custom",
                }),
            moreCount: n,
            isSingleCard: a,
            wishlistId: m,
            cardSize: g,
        },
        e.skuId,
    );
}
function g(e) {
    let { item: t, card: n, analyticsLocations: r, profileOwner: o } = e,
        { data: d } = (0, a.YY)(t.sku.applicationId);
    return (0, i.jsxs)("div", {
        className: _.D5,
        children: [
            n,
            (0, i.jsx)("div", {
                className: _.S7,
                children: (0, i.jsxs)(l.DUT, {
                    onClick: () => {
                        (0, c.a)(
                            t.sku,
                            { isGift: !0, giftRecipient: o, giftingOrigin: u.vQ.USER_PROFILE_WISHLIST },
                            {
                                analyticsLocations: [
                                    ...r,
                                    s.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
                                ],
                            },
                        );
                    },
                    className: _.Hh,
                    children: [
                        (0, i.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            lineClamp: 2,
                            children: t.skuName,
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: h.intl.format(h.t["CqpEC+"], { applicationName: d?.name }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function p(e, t) {
    let { profileOwner: n, analyticsLocations: l, wishlistId: s, onViewWishlist: a } = t,
        r = m(e, {
            index: 0,
            profileOwner: n,
            analyticsLocations: l,
            onViewWishlist: a,
            isSingleCard: !0,
            wishlistId: s,
        });
    return (0, i.jsx)(g, { item: e, card: r, profileOwner: n, analyticsLocations: l });
}
