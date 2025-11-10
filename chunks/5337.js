n.d(t, {
    c: () => g,
    g: () => m,
});
var r = n(951288),
    i = n(979554),
    l = n(311570),
    a = n(481060),
    s = n(333867),
    o = n(221300),
    c = n(688192),
    d = n(766717),
    u = n(474936),
    p = n(388032),
    h = n(976218);
function f(e, t, n) {
    (0, s.Z)({
        skuId: e.skuId,
        isGift: !0,
        giftingOrigin: u.Wt.USER_PROFILE_WISHLIST,
        analyticsLocations: n,
        giftRecipient: t,
        variantsReturnStyle: l.v.VARIANTS_GROUP,
    });
}
function g(e, t) {
    let {
            moreCount: n,
            profileOwner: l,
            analyticsLocations: a,
            onViewWishlist: s,
            isSingleCard: u = !1,
            wishlistId: h,
        } = t,
        g = null != n && n > 0,
        m = g ? p.intl.string(p.t.TxBQzD) : p.intl.string(p.t.ilhtIa),
        b = e.collectiblesItem.type === i.Z.PROFILE_EFFECT;
    return (0, r.jsx)(
        d.Z,
        {
            onCardClick: () => {
                if (g) return void s();
                f(e, l, a);
            },
            tooltipText: m,
            shouldScalePreview: !b,
            renderPreview: () =>
                (0, r.jsx)(o.Z, {
                    item: e,
                    profileOwner: l,
                    isHighlighted: !1,
                    surface: c.Y.PROFILE_SIDEBAR,
                }),
            moreCount: n,
            isSingleCard: u,
            skuId: e.skuId,
            analyticsLocations: a,
            wishlistId: h,
        },
        e.skuId,
    );
}
function m(e, t) {
    let { profileOwner: n, analyticsLocations: l, wishlistId: s } = t,
        o = g(e, {
            profileOwner: n,
            analyticsLocations: l,
            onViewWishlist: () => {},
            isSingleCard: !0,
            wishlistId: s,
        });
    return (0, r.jsxs)("div", {
        className: h.singleItemContainer,
        children: [
            o,
            (0, r.jsxs)("div", {
                className: h.singleItemInfo,
                children: [
                    (0, r.jsx)(a.P3F, {
                        onClick: () => {
                            f(e, n, l);
                        },
                        className: h.singleItemName,
                        "aria-label": p.intl.string(p.t.ilhtIa),
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
                                    return p.intl.string(p.t["7v0T9P"]);
                                case i.Z.PROFILE_EFFECT:
                                    return p.intl.string(p.t.wR5wOo);
                                case i.Z.NAMEPLATE:
                                    return p.intl.string(p.t.x5CoXR);
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
