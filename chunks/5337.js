n.d(t, {
    c: () => g,
    g: () => m,
});
var r = n(54381),
    i = n(979554),
    l = n(311570),
    a = n(481060),
    s = n(525302),
    o = n(333867),
    c = n(221300),
    d = n(766717),
    u = n(474936),
    p = n(388032),
    h = n(976218);
function f(e, t, n) {
    (0, o.Z)({
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
            onViewWishlist: o,
            isSingleCard: u = !1,
            wishlistId: h,
            showTypeTooltip: g = !1,
        } = t,
        m = null != n && n > 0,
        b = g && !m,
        _ = m ? p.intl.string(p.t.TxBQzD) : p.intl.string(p.t.pLPjsb),
        y = {
            title: b ? p.intl.string(p.t.HFhcqh) : _,
            body: b ? p.intl.string(p.t.ilhtIa) : void 0,
            renderIcon: b ? s.Q : void 0,
            shouldShow: !0,
        },
        O = e.collectiblesItem.type === i.Z.PROFILE_EFFECT;
    return (0, r.jsx)(
        d.Z,
        {
            onCardClick: () => {
                if (m) return void o();
                f(e, l, a);
            },
            tooltipConfig: y,
            shouldScalePreview: !O,
            renderPreview: () =>
                (0, r.jsx)(c.Z, {
                    item: e,
                    profileOwner: l,
                    isHighlighted: !1,
                }),
            moreCount: n,
            isSingleCard: u,
            wishlistItem: e,
            wishlistId: h,
        },
        e.skuId,
    );
}
function m(e, t) {
    let { profileOwner: n, analyticsLocations: l, wishlistId: s, onViewWishlist: o } = t,
        c = g(e, {
            profileOwner: n,
            analyticsLocations: l,
            onViewWishlist: o,
            isSingleCard: !0,
            wishlistId: s,
            index: 0,
        });
    return (0, r.jsxs)("div", {
        className: h.singleItemContainer,
        children: [
            c,
            (0, r.jsxs)("div", {
                className: h.singleItemInfo,
                children: [
                    (0, r.jsx)(a.P3F, {
                        onClick: () => {
                            f(e, n, l);
                        },
                        className: h.singleItemName,
                        "aria-label": p.intl.string(p.t.pLPjsb),
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
