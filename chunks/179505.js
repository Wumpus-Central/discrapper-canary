n.d(t, {
    c: () => E,
    g: () => b,
});
var r = n(54381),
    i = n(979554),
    a = n(311570),
    o = n(481060),
    s = n(525302),
    l = n(216541),
    c = n(333867),
    u = n(221300),
    d = n(766717),
    f = n(474936),
    p = n(388032),
    _ = n(239990),
    m = n(976218);
function h(e, t, n) {
    (0, c.Z)({
        skuId: e.skuId,
        isGift: !0,
        giftingOrigin: f.Wt.USER_PROFILE_WISHLIST,
        analyticsLocations: n,
        giftRecipient: t,
        variantsReturnStyle: a.v.VARIANTS_GROUP,
    });
}
function g(e) {
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
}
function E(e, t) {
    let {
            moreCount: n,
            profileOwner: a,
            analyticsLocations: o,
            onViewWishlist: c,
            isSingleCard: f = !1,
            wishlistId: m,
            showTypeTooltip: g = !1,
            cardSize: E,
        } = t,
        b = null != e.bundleItems && e.bundleItems.length > 0,
        y = null != n && n > 0,
        O = g && !y,
        v = y ? p.intl.string(p.t.TxBQzD) : p.intl.string(p.t.pLPjsb),
        S = {
            title: O ? p.intl.string(p.t.HFhcqh) : v,
            body: O ? p.intl.string(p.t.ilhtIa) : void 0,
            renderIcon: O ? s.Q : void 0,
            shouldShow: !0,
        },
        I = () => {
            if (y) return void c();
            h(e, a, o);
        },
        T = () => {
            if (b) {
                let t = { items: e.bundleItems };
                return (0, r.jsx)("div", {
                    className: _.bundlePreview,
                    children: (0, r.jsx)(l.d, {
                        product: t,
                        isPurchased: !1,
                        isHighlighted: !1,
                        user: a,
                    }),
                });
            }
            return (0, r.jsx)(u.Z, {
                item: e,
                profileOwner: a,
                isHighlighted: !1,
            });
        },
        C = !b && e.collectiblesItem.type === i.Z.PROFILE_EFFECT,
        A = b || !C;
    return (0, r.jsx)(
        d.Z,
        {
            onCardClick: I,
            tooltipConfig: S,
            shouldScalePreview: A,
            renderPreview: T,
            moreCount: n,
            isSingleCard: f,
            wishlistItem: e,
            wishlistId: m,
            cardSize: E,
        },
        e.skuId,
    );
}
function b(e, t) {
    let { profileOwner: n, analyticsLocations: i, wishlistId: a, onViewWishlist: s } = t,
        l = null != e.bundleItems && e.bundleItems.length > 0,
        c = () => {
            h(e, n, i);
        },
        u = E(e, {
            profileOwner: n,
            analyticsLocations: i,
            onViewWishlist: s,
            isSingleCard: !0,
            wishlistId: a,
            index: 0,
        }),
        d = l ? p.intl.string(p.t.Zr5tjn) : g(e);
    return (0, r.jsxs)("div", {
        className: m.singleItemContainer,
        children: [
            u,
            (0, r.jsxs)("div", {
                className: m.singleItemInfo,
                children: [
                    (0, r.jsx)(o.P3F, {
                        onClick: c,
                        className: m.singleItemName,
                        "aria-label": p.intl.string(p.t.pLPjsb),
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            lineClamp: 2,
                            children: e.skuName,
                        }),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: d,
                    }),
                ],
            }),
        ],
    });
}
