"use strict";
n.d(t, { A: () => _, Z: () => p });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(793574),
    r = n(627363),
    a = n(576030),
    o = n(957785),
    c = n(533406),
    d = n(366523),
    u = n(788868),
    h = n(985018),
    A = n(673892),
    m = n(754558);
function p(e, t) {
    let {
            moreCount: n,
            onViewWishlist: s,
            isSingleCard: r = !1,
            profileOwner: m,
            wishlistId: p,
            cardSize: g,
            analyticsLocations: _,
        } = t,
        f = null != n && n > 0,
        x = {
            title: f ? h.intl.string(h.t.TxBQzD) : h.intl.string(h.t["4yiU7x"]),
            body: f ? void 0 : h.intl.string(h.t.ilhtIa),
            renderIcon: f ? void 0 : a.GM,
            shouldShow: !0,
        };
    return (0, i.jsx)(
        o.A,
        {
            wishlistItem: e,
            onCardClick: () => {
                f
                    ? s()
                    : (0, c.a)(
                          e.sku,
                          { isGift: !0, giftRecipient: m, giftingOrigin: u.vQ.USER_PROFILE_WISHLIST },
                          {
                              analyticsLocations: [
                                  ..._,
                                  l.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
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
            isSingleCard: r,
            wishlistId: p,
            cardSize: g,
        },
        e.skuId,
    );
}
function g(e) {
    let { item: t, card: n, analyticsLocations: a, profileOwner: o } = e,
        { data: d } = (0, r.YY)(t.sku.applicationId);
    return (0, i.jsxs)("div", {
        className: m.D5,
        children: [
            n,
            (0, i.jsx)("div", {
                className: m.S7,
                children: (0, i.jsxs)(s.DUT, {
                    onClick: () => {
                        (0, c.a)(
                            t.sku,
                            { isGift: !0, giftRecipient: o, giftingOrigin: u.vQ.USER_PROFILE_WISHLIST },
                            {
                                analyticsLocations: [
                                    ...a,
                                    l.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
                                ],
                            },
                        );
                    },
                    className: m.Hh,
                    "aria-label": h.intl.string(h.t.pLPjsb),
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            lineClamp: 2,
                            children: t.skuName,
                        }),
                        (0, i.jsx)(s.Text, {
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
function _(e, t) {
    let { profileOwner: n, analyticsLocations: s, wishlistId: l, onViewWishlist: r } = t,
        a = p(e, {
            index: 0,
            profileOwner: n,
            analyticsLocations: s,
            onViewWishlist: r,
            isSingleCard: !0,
            wishlistId: l,
        });
    return (0, i.jsx)(g, { item: e, card: a, profileOwner: n, analyticsLocations: s });
}
