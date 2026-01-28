n.d(t, {
    M: () => A,
    z: () => y,
});
var r = n(627968),
    l = n(575593),
    i = n(635358),
    s = n(397927),
    a = n(576030),
    o = n(245068),
    c = n(44120),
    u = n(594832),
    d = n(353157),
    p = n(957785),
    h = n(788868),
    f = n(985018),
    g = n(733557),
    m = n(101616);

function b(e, t, n) {
    (0, c.A)({
        skuId: e.skuId,
        isGift: !0,
        giftingOrigin: h.vQ.USER_PROFILE_WISHLIST,
        analyticsLocations: n,
        giftRecipient: t,
        variantsReturnStyle: i.g.VARIANTS_GROUP,
    });
}

function A(e, t) {
    let {
            moreCount: n,
            profileOwner: i,
            analyticsLocations: s,
            onViewWishlist: c,
            isSingleCard: h = !1,
            wishlistId: m,
            showTypeTooltip: A = !1,
            cardSize: y,
            itemSource: _,
        } = t,
        O = null != e.bundleItems && e.bundleItems.length > 0,
        j = null != n && n > 0,
        v = A && !j,
        x = j ? f.intl.string(f.t.TxBQzD) : f.intl.string(f.t.pLPjsb),
        E = _ === u.uS.POPULAR ? f.intl.string(f.t.Ig6VDH) : f.intl.string(f.t.ilhtIa),
        C = {
            title: v ? f.intl.string(f.t.HFhcqh) : x,
            body: v ? E : void 0,
            renderIcon: v ? a.GM : void 0,
            shouldShow: !0,
        },
        S = !O && e.collectiblesItem.type === l.R.PROFILE_EFFECT;
    return (0, r.jsx)(
        p.A,
        {
            onCardClick: () => {
                j ? c() : b(e, i, s);
            },
            tooltipConfig: C,
            shouldScalePreview: O || !S,
            renderPreview: () => {
                if (O) {
                    let t = {
                        items: e.bundleItems,
                    };
                    return (0, r.jsx)("div", {
                        className: g.hT,
                        children: (0, r.jsx)(o.X, {
                            product: t,
                            isHighlighted: !1,
                            user: i,
                        }),
                    });
                }
                return (0, r.jsx)(d.A, {
                    item: e,
                    profileOwner: i,
                    isHighlighted: !1,
                });
            },
            moreCount: n,
            isSingleCard: h,
            wishlistItem: e,
            wishlistId: m,
            cardSize: y,
            itemSource: _,
        },
        e.skuId,
    );
}

function y(e, t) {
    let { profileOwner: n, analyticsLocations: i, wishlistId: a, onViewWishlist: o } = t,
        c = null != e.bundleItems && e.bundleItems.length > 0,
        u = A(e, {
            profileOwner: n,
            analyticsLocations: i,
            onViewWishlist: o,
            isSingleCard: !0,
            wishlistId: a,
            index: 0,
        }),
        d = c
            ? f.intl.string(f.t.Zr5tjn)
            : (function (e) {
                  switch (e.collectiblesItem.type) {
                      case l.R.AVATAR_DECORATION:
                          return f.intl.string(f.t["7v0T9P"]);
                      case l.R.PROFILE_EFFECT:
                          return f.intl.string(f.t.wR5wOo);
                      case l.R.NAMEPLATE:
                          return f.intl.string(f.t.x5CoXR);
                      default:
                          return "";
                  }
              })(e);
    return (0, r.jsxs)("div", {
        className: m.D5,
        children: [
            u,
            (0, r.jsxs)("div", {
                className: m.S7,
                children: [
                    (0, r.jsx)(s.DUT, {
                        onClick: () => {
                            b(e, n, i);
                        },
                        className: m.Hh,
                        "aria-label": f.intl.string(f.t.pLPjsb),
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
