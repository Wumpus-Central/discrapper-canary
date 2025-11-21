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
    p = n(976218);
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
    let n,
        {
            moreCount: l,
            profileOwner: a,
            analyticsLocations: s,
            onViewWishlist: d,
            isSingleCard: p = !1,
            wishlistId: f,
            showTypeTooltip: g = !1,
        } = t,
        m = null != l && l > 0,
        b = m ? u.intl.string(u.t.TxBQzD) : u.intl.string(u.t.ilhtIa);
    g && !m && (n = u.intl.string(u.t.HFhcqh));
    let _ = e.collectiblesItem.type === i.Z.PROFILE_EFFECT;
    return (0, r.jsx)(
        c.Z,
        {
            onCardClick: () => {
                if (m) return void d();
                h(e, a, s);
            },
            tooltipTitle: n,
            tooltipBody: b,
            shouldScalePreview: !_,
            renderPreview: () =>
                (0, r.jsx)(o.Z, {
                    item: e,
                    profileOwner: a,
                    isHighlighted: !1,
                }),
            moreCount: l,
            isSingleCard: p,
            skuId: e.skuId,
            wishlistId: f,
            productLine: e.skuProductLine,
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
