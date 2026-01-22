n.d(t, {
    M: () => b,
    z: () => y,
});
var r = n(627968),
    i = n(575593),
    a = n(635358),
    s = n(397927),
    o = n(576030),
    l = n(245068),
    c = n(44120),
    u = n(594832),
    d = n(353157),
    f = n(957785),
    p = n(788868),
    _ = n(985018),
    h = n(733557),
    m = n(101616);

function g(e, t, n) {
    (0, c.A)({
        skuId: e.skuId,
        isGift: !0,
        giftingOrigin: p.vQ.USER_PROFILE_WISHLIST,
        analyticsLocations: n,
        giftRecipient: t,
        variantsReturnStyle: a.g.VARIANTS_GROUP,
    });
}

function E(e) {
    switch (e.collectiblesItem.type) {
        case i.R.AVATAR_DECORATION:
            return _.intl.string(_.t["7v0T9P"]);
        case i.R.PROFILE_EFFECT:
            return _.intl.string(_.t.wR5wOo);
        case i.R.NAMEPLATE:
            return _.intl.string(_.t.x5CoXR);
        default:
            return "";
    }
}

function b(e, t) {
    let {
            moreCount: n,
            profileOwner: a,
            analyticsLocations: s,
            onViewWishlist: c,
            isSingleCard: p = !1,
            wishlistId: m,
            showTypeTooltip: E = !1,
            cardSize: b,
            itemSource: y,
        } = t,
        O = null != e.bundleItems && e.bundleItems.length > 0,
        A = null != n && n > 0,
        v = E && !A,
        S = A ? _.intl.string(_.t.TxBQzD) : _.intl.string(_.t.pLPjsb),
        I = y === u.uS.POPULAR ? _.intl.string(_.t.Ig6VDH) : _.intl.string(_.t.ilhtIa),
        T = {
            title: v ? _.intl.string(_.t.HFhcqh) : S,
            body: v ? I : void 0,
            renderIcon: v ? o.GM : void 0,
            shouldShow: !0,
        },
        C = () => {
            A ? c() : g(e, a, s);
        },
        N = () => {
            if (O) {
                let t = {
                    items: e.bundleItems,
                };
                return (0, r.jsx)("div", {
                    className: h.hT,
                    children: (0, r.jsx)(l.X, {
                        product: t,
                        isHighlighted: !1,
                        user: a,
                    }),
                });
            }
            return (0, r.jsx)(d.A, {
                item: e,
                profileOwner: a,
                isHighlighted: !1,
            });
        },
        R = !O && e.collectiblesItem.type === i.R.PROFILE_EFFECT,
        w = O || !R;
    return (0, r.jsx)(
        f.A,
        {
            onCardClick: C,
            tooltipConfig: T,
            shouldScalePreview: w,
            renderPreview: N,
            moreCount: n,
            isSingleCard: p,
            wishlistItem: e,
            wishlistId: m,
            cardSize: b,
            itemSource: y,
        },
        e.skuId,
    );
}

function y(e, t) {
    let { profileOwner: n, analyticsLocations: i, wishlistId: a, onViewWishlist: o } = t,
        l = null != e.bundleItems && e.bundleItems.length > 0,
        c = () => {
            g(e, n, i);
        },
        u = b(e, {
            profileOwner: n,
            analyticsLocations: i,
            onViewWishlist: o,
            isSingleCard: !0,
            wishlistId: a,
            index: 0,
        }),
        d = l ? _.intl.string(_.t.Zr5tjn) : E(e);
    return (0, r.jsxs)("div", {
        className: m.D5,
        children: [
            u,
            (0, r.jsxs)("div", {
                className: m.S7,
                children: [
                    (0, r.jsx)(s.DUT, {
                        onClick: c,
                        className: m.Hh,
                        "aria-label": _.intl.string(_.t.pLPjsb),
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
