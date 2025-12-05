n.d(t, {
    c: () => b,
    g: () => _,
});
var r = n(54381),
    i = n(979554),
    l = n(311570),
    a = n(481060),
    s = n(525302),
    o = n(684263),
    c = n(333867),
    d = n(221300),
    u = n(766717),
    p = n(474936),
    h = n(388032),
    f = n(239990),
    g = n(976218);
function m(e, t, n) {
    (0, c.Z)({
        skuId: e.skuId,
        isGift: !0,
        giftingOrigin: p.Wt.USER_PROFILE_WISHLIST,
        analyticsLocations: n,
        giftRecipient: t,
        variantsReturnStyle: l.v.VARIANTS_GROUP,
    });
}
function b(e, t) {
    let {
            moreCount: n,
            profileOwner: l,
            analyticsLocations: a,
            onViewWishlist: c,
            isSingleCard: p = !1,
            wishlistId: g,
            showTypeTooltip: b = !1,
        } = t,
        _ = null != e.bundleItems && e.bundleItems.length > 0,
        y = null != n && n > 0,
        O = b && !y,
        x = y ? h.intl.string(h.t.TxBQzD) : h.intl.string(h.t.pLPjsb),
        j = {
            title: O ? h.intl.string(h.t.HFhcqh) : x,
            body: O ? h.intl.string(h.t.ilhtIa) : void 0,
            renderIcon: O ? s.Q : void 0,
            shouldShow: !0,
        },
        v = !_ && e.collectiblesItem.type === i.Z.PROFILE_EFFECT;
    return (0, r.jsx)(
        u.Z,
        {
            onCardClick: () => {
                if (y) return void c();
                m(e, l, a);
            },
            tooltipConfig: j,
            shouldScalePreview: _ || !v,
            renderPreview: () => {
                if (_) {
                    let t = { items: e.bundleItems };
                    return (0, r.jsx)("div", {
                        className: f.bundlePreview,
                        children: (0, r.jsx)(o.U, {
                            product: t,
                            isPurchased: !1,
                            isHighlighted: !1,
                            user: l,
                        }),
                    });
                }
                return (0, r.jsx)(d.Z, {
                    item: e,
                    profileOwner: l,
                    isHighlighted: !1,
                });
            },
            moreCount: n,
            isSingleCard: p,
            wishlistItem: e,
            wishlistId: g,
        },
        e.skuId,
    );
}
function _(e, t) {
    let { profileOwner: n, analyticsLocations: l, wishlistId: s, onViewWishlist: o } = t,
        c = null != e.bundleItems && e.bundleItems.length > 0,
        d = b(e, {
            profileOwner: n,
            analyticsLocations: l,
            onViewWishlist: o,
            isSingleCard: !0,
            wishlistId: s,
            index: 0,
        }),
        u = c
            ? h.intl.string(h.t.Zr5tjn)
            : (function (e) {
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
              })(e);
    return (0, r.jsxs)("div", {
        className: g.singleItemContainer,
        children: [
            d,
            (0, r.jsxs)("div", {
                className: g.singleItemInfo,
                children: [
                    (0, r.jsx)(a.P3F, {
                        onClick: () => {
                            m(e, n, l);
                        },
                        className: g.singleItemName,
                        "aria-label": h.intl.string(h.t.pLPjsb),
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
                        children: u,
                    }),
                ],
            }),
        ],
    });
}
