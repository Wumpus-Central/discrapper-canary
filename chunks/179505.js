n.d(t, {
    c: () => b,
    g: () => y,
});
var r = n(54381),
    i = n(979554),
    a = n(311570),
    o = n(481060),
    s = n(525302),
    l = n(216541),
    c = n(333867),
    u = n(602733),
    d = n(221300),
    f = n(766717),
    p = n(474936),
    _ = n(388032),
    m = n(669155),
    h = n(788015);
function g(e, t, n) {
    (0, c.Z)({
        skuId: e.skuId,
        isGift: !0,
        giftingOrigin: p.Wt.USER_PROFILE_WISHLIST,
        analyticsLocations: n,
        giftRecipient: t,
        variantsReturnStyle: a.v.VARIANTS_GROUP,
    });
}
function E(e) {
    switch (e.collectiblesItem.type) {
        case i.Z.AVATAR_DECORATION:
            return _.intl.string(_.t["7v0T9P"]);
        case i.Z.PROFILE_EFFECT:
            return _.intl.string(_.t.wR5wOo);
        case i.Z.NAMEPLATE:
            return _.intl.string(_.t.x5CoXR);
        default:
            return "";
    }
}
function b(e, t) {
    let {
            moreCount: n,
            profileOwner: a,
            analyticsLocations: o,
            onViewWishlist: c,
            isSingleCard: p = !1,
            wishlistId: h,
            showTypeTooltip: E = !1,
            cardSize: b,
            itemSource: y,
        } = t,
        O = null != e.bundleItems && e.bundleItems.length > 0,
        v = null != n && n > 0,
        S = E && !v,
        I = v ? _.intl.string(_.t.TxBQzD) : _.intl.string(_.t.pLPjsb),
        T = y === u.lr.POPULAR ? _.intl.string(_.t.Ig6VDH) : _.intl.string(_.t.ilhtIa),
        C = {
            title: S ? _.intl.string(_.t.HFhcqh) : I,
            body: S ? T : void 0,
            renderIcon: S ? s.Qe : void 0,
            shouldShow: !0,
        },
        A = () => {
            if (v) return void c();
            g(e, a, o);
        },
        N = () => {
            if (O) {
                let t = { items: e.bundleItems };
                return (0, r.jsx)("div", {
                    className: m.bundlePreview,
                    children: (0, r.jsx)(l.d, {
                        product: t,
                        isHighlighted: !1,
                        user: a,
                    }),
                });
            }
            return (0, r.jsx)(d.Z, {
                item: e,
                profileOwner: a,
                isHighlighted: !1,
            });
        },
        P = !O && e.collectiblesItem.type === i.Z.PROFILE_EFFECT,
        R = O || !P;
    return (0, r.jsx)(
        f.Z,
        {
            onCardClick: A,
            tooltipConfig: C,
            shouldScalePreview: R,
            renderPreview: N,
            moreCount: n,
            isSingleCard: p,
            wishlistItem: e,
            wishlistId: h,
            cardSize: b,
            itemSource: y,
        },
        e.skuId,
    );
}
function y(e, t) {
    let { profileOwner: n, analyticsLocations: i, wishlistId: a, onViewWishlist: s } = t,
        l = null != e.bundleItems && e.bundleItems.length > 0,
        c = () => {
            g(e, n, i);
        },
        u = b(e, {
            profileOwner: n,
            analyticsLocations: i,
            onViewWishlist: s,
            isSingleCard: !0,
            wishlistId: a,
            index: 0,
        }),
        d = l ? _.intl.string(_.t.Zr5tjn) : E(e);
    return (0, r.jsxs)("div", {
        className: h.singleItemContainer,
        children: [
            u,
            (0, r.jsxs)("div", {
                className: h.singleItemInfo,
                children: [
                    (0, r.jsx)(o.P3F, {
                        onClick: c,
                        className: h.singleItemName,
                        "aria-label": _.intl.string(_.t.pLPjsb),
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
