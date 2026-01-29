n.d(t, {
    M: () => b,
    z: () => A,
});
var r = n(627968),
    l = n(575593),
    i = n(635358),
    s = n(397927),
    a = n(576030),
    o = n(245068),
    c = n(44120),
    u = n(353157),
    d = n(957785),
    p = n(788868),
    h = n(985018),
    f = n(733557),
    g = n(101616);

function m(e, t, n) {
    (0, c.A)({
        skuId: e.skuId,
        isGift: !0,
        giftingOrigin: p.vQ.USER_PROFILE_WISHLIST,
        analyticsLocations: n,
        giftRecipient: t,
        variantsReturnStyle: i.g.VARIANTS_GROUP,
    });
}

function b(e, t) {
    let {
            moreCount: n,
            profileOwner: i,
            analyticsLocations: s,
            onViewWishlist: c,
            isSingleCard: p = !1,
            wishlistId: g,
            showTypeTooltip: b = !1,
            cardSize: A,
        } = t,
        y = null != e.bundleItems && e.bundleItems.length > 0,
        _ = null != n && n > 0,
        O = b && !_,
        j = _ ? h.intl.string(h.t.TxBQzD) : h.intl.string(h.t.pLPjsb),
        v = {
            title: O ? h.intl.string(h.t.HFhcqh) : j,
            body: O ? h.intl.string(h.t.ilhtIa) : void 0,
            renderIcon: O ? a.GM : void 0,
            shouldShow: !0,
        },
        x = !y && e.collectiblesItem.type === l.R.PROFILE_EFFECT;
    return (0, r.jsx)(
        d.A,
        {
            onCardClick: () => {
                _ ? c() : m(e, i, s);
            },
            tooltipConfig: v,
            shouldScalePreview: y || !x,
            renderPreview: () => {
                if (y) {
                    let t = {
                        items: e.bundleItems,
                    };
                    return (0, r.jsx)("div", {
                        className: f.hT,
                        children: (0, r.jsx)(o.X, {
                            product: t,
                            isHighlighted: !1,
                            user: i,
                        }),
                    });
                }
                return (0, r.jsx)(u.A, {
                    item: e,
                    profileOwner: i,
                    isHighlighted: !1,
                });
            },
            moreCount: n,
            isSingleCard: p,
            wishlistItem: e,
            wishlistId: g,
            cardSize: A,
        },
        e.skuId,
    );
}

function A(e, t) {
    let { profileOwner: n, analyticsLocations: i, wishlistId: a, onViewWishlist: o } = t,
        c = null != e.bundleItems && e.bundleItems.length > 0,
        u = b(e, {
            profileOwner: n,
            analyticsLocations: i,
            onViewWishlist: o,
            isSingleCard: !0,
            wishlistId: a,
            index: 0,
        }),
        d = c
            ? h.intl.string(h.t.Zr5tjn)
            : (function (e) {
                  switch (e.collectiblesItem.type) {
                      case l.R.AVATAR_DECORATION:
                          return h.intl.string(h.t["7v0T9P"]);
                      case l.R.PROFILE_EFFECT:
                          return h.intl.string(h.t.wR5wOo);
                      case l.R.NAMEPLATE:
                          return h.intl.string(h.t.x5CoXR);
                      default:
                          return "";
                  }
              })(e);
    return (0, r.jsxs)("div", {
        className: g.D5,
        children: [
            u,
            (0, r.jsxs)("div", {
                className: g.S7,
                children: [
                    (0, r.jsx)(s.DUT, {
                        onClick: () => {
                            m(e, n, i);
                        },
                        className: g.Hh,
                        "aria-label": h.intl.string(h.t.pLPjsb),
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            lineClamp: 2,
                            children: e.skuName,
                        }),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: d,
                    }),
                ],
            }),
        ],
    });
}
