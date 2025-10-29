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
    h = n(388032),
    p = n(976218);
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
    let { moreCount: n, profileOwner: l, analyticsLocations: a, onViewWishlist: s, isSingleCard: u = !1 } = t,
        p = null != n && n > 0,
        g = p ? h.intl.string(h.t.TxBQzD) : h.intl.string(h.t.ilhtIa),
        m = e.collectiblesItem.type === i.Z.PROFILE_EFFECT;
    return (0, r.jsx)(
        d.Z,
        {
            onCardClick: () => {
                if (p) return void s();
                f(e, l, a);
            },
            tooltipText: g,
            shouldScalePreview: !m,
            renderPreview: () =>
                (0, r.jsx)(o.Z, {
                    item: e,
                    profileOwner: l,
                    isHighlighted: !1,
                    surface: c.Y.PROFILE_SIDEBAR,
                }),
            moreCount: n,
            isSingleCard: u,
        },
        e.skuId,
    );
}
function m(e, t) {
    let { profileOwner: n, analyticsLocations: l } = t,
        s = g(e, {
            profileOwner: n,
            analyticsLocations: l,
            onViewWishlist: () => {},
            isSingleCard: !0,
        });
    return (0, r.jsxs)("div", {
        className: p.singleItemContainer,
        children: [
            s,
            (0, r.jsxs)("div", {
                className: p.singleItemInfo,
                children: [
                    (0, r.jsx)(a.P3F, {
                        onClick: () => {
                            f(e, n, l);
                        },
                        className: p.singleItemName,
                        "aria-label": h.intl.string(h.t.ilhtIa),
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
                                    return h.intl.string(h.t["7v0T9P"]);
                                case i.Z.PROFILE_EFFECT:
                                    return h.intl.string(h.t.wR5wOo);
                                case i.Z.NAMEPLATE:
                                    return h.intl.string(h.t.x5CoXR);
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
