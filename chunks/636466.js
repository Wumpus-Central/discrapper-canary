n.d(t, {
    B: () => g,
    J: () => h,
});
var r = n(951288),
    i = n(481060),
    l = n(728345),
    a = n(766717),
    s = n(594914),
    o = n(848118),
    c = n(474936),
    d = n(388032),
    u = n(470146),
    p = n(207661);
function h(e, t) {
    let {
            moreCount: n,
            onViewWishlist: i,
            isSingleCard: l = !1,
            profileOwner: p,
            analyticsLocations: h,
            wishlistId: f,
        } = t,
        g = null != n && n > 0,
        m = g ? d.intl.string(d.t.TxBQzD) : d.intl.string(d.t.ilhtIa);
    return (0, r.jsx)(
        a.Z,
        {
            onCardClick: () => {
                if (g) return void i();
                (0, s.P)(e.sku, {
                    isGift: !0,
                    giftRecipient: p,
                    giftingOrigin: c.Wt.USER_PROFILE_WISHLIST,
                });
            },
            tooltipText: m,
            shouldScalePreview: !1,
            renderPreview: () =>
                (0, r.jsx)(o.A, {
                    containerClassName: u.card,
                    backgroundImageClassName: u.cardBackgroundImage,
                    foregroundImageClassName: u.cardImage,
                    sku: e.sku,
                    shape: "custom",
                }),
            moreCount: n,
            isSingleCard: l,
            skuId: e.skuId,
            analyticsLocations: h,
            wishlistId: f,
        },
        e.skuId,
    );
}
function f(e) {
    let { item: t, card: n, profileOwner: a } = e,
        { data: o } = (0, l.IX)(t.sku.applicationId);
    return (0, r.jsxs)("div", {
        className: p.singleItemContainer,
        children: [
            n,
            (0, r.jsx)("div", {
                className: p.singleItemInfo,
                children: (0, r.jsxs)(i.P3F, {
                    onClick: () => {
                        (0, s.P)(t.sku, {
                            isGift: !0,
                            giftRecipient: a,
                            giftingOrigin: c.Wt.USER_PROFILE_WISHLIST,
                        });
                    },
                    className: p.singleItemName,
                    "aria-label": d.intl.string(d.t.ilhtIa),
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            lineClamp: 2,
                            children: t.skuName,
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: d.intl.format(d.t["CqpEC+"], { applicationName: null == o ? void 0 : o.name }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function g(e, t) {
    let { profileOwner: n, analyticsLocations: i, wishlistId: l } = t,
        a = h(e, {
            profileOwner: n,
            analyticsLocations: i,
            onViewWishlist: () => {},
            isSingleCard: !0,
            wishlistId: l,
        });
    return (0, r.jsx)(f, {
        item: e,
        card: a,
        profileOwner: n,
    });
}
