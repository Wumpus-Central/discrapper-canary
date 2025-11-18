n.d(t, {
    c: () => f,
    g: () => g,
});
var r = n(54381),
    i = n(979554),
    l = n(311570),
    a = n(481060),
    s = n(333867),
    o = n(221300),
    c = n(766717),
    d = n(474936),
    u = n(388032),
    p = n(207661);
function h(e, t, n) {
    (0, s.Z)({
        skuId: e.skuId,
        isGift: !0,
        giftingOrigin: d.Wt.USER_PROFILE_WISHLIST,
        analyticsLocations: n,
        giftRecipient: t,
        variantsReturnStyle: l.v.VARIANTS_GROUP,
    });
}
function f(e, t) {
    let {
            moreCount: n,
            profileOwner: l,
            analyticsLocations: a,
            onViewWishlist: s,
            isSingleCard: d = !1,
            wishlistId: p,
        } = t,
        f = null != n && n > 0,
        g = f ? u.intl.string(u.t.TxBQzD) : u.intl.string(u.t.ilhtIa),
        m = e.collectiblesItem.type === i.Z.PROFILE_EFFECT;
    return (0, r.jsx)(
        c.Z,
        {
            onCardClick: () => {
                if (f) return void s();
                h(e, l, a);
            },
            tooltipText: g,
            shouldScalePreview: !m,
            renderPreview: () =>
                (0, r.jsx)(o.Z, {
                    item: e,
                    profileOwner: l,
                    isHighlighted: !1,
                }),
            moreCount: n,
            isSingleCard: d,
            skuId: e.skuId,
            analyticsLocations: a,
            wishlistId: p,
        },
        e.skuId,
    );
}
function g(e, t) {
    let { profileOwner: n, analyticsLocations: l, wishlistId: s, onViewWishlist: o } = t,
        c = f(e, {
            profileOwner: n,
            analyticsLocations: l,
            onViewWishlist: o,
            isSingleCard: !0,
            wishlistId: s,
            index: 0,
        });
    return (0, r.jsxs)("div", {
        className: p.singleItemContainer,
        children: [
            c,
            (0, r.jsxs)("div", {
                className: p.singleItemInfo,
                children: [
                    (0, r.jsx)(a.P3F, {
                        onClick: () => {
                            h(e, n, l);
                        },
                        className: p.singleItemName,
                        "aria-label": u.intl.string(u.t.ilhtIa),
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            lineClamp: 2,
                            children: e.skuName,
                        }),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: (function (e) {
                            switch (e.collectiblesItem.type) {
                                case i.Z.AVATAR_DECORATION:
                                    return u.intl.string(u.t["7v0T9P"]);
                                case i.Z.PROFILE_EFFECT:
                                    return u.intl.string(u.t.wR5wOo);
                                case i.Z.NAMEPLATE:
                                    return u.intl.string(u.t.x5CoXR);
                                default:
                                    return "";
                            }
                        })(e),
                    }),
                ],
            }),
        ],
    });
}
