n.d(t, { M: () => _, z: () => x });
var i = n(627968),
    l = n(575593),
    s = n(635358),
    a = n(397927),
    r = n(576030),
    o = n(245068),
    d = n(44120),
    c = n(353157),
    u = n(957785),
    h = n(788868),
    A = n(985018),
    g = n(733557),
    m = n(101616);
function p(e, t, n) {
    (0, d.A)({
        skuId: e.skuId,
        isGift: !0,
        giftingOrigin: h.vQ.USER_PROFILE_WISHLIST,
        analyticsLocations: n,
        giftRecipient: t,
        variantsReturnStyle: s.g.VARIANTS_GROUP,
    });
}
function _(e, t) {
    let {
            moreCount: n,
            profileOwner: s,
            analyticsLocations: a,
            onViewWishlist: d,
            isSingleCard: h = !1,
            wishlistId: m,
            showTypeTooltip: _ = !1,
            cardSize: x,
        } = t,
        f = null != e.bundleItems && e.bundleItems.length > 0,
        E = null != n && n > 0,
        C = _ && !E,
        I = E ? A.intl.string(A.t.TxBQzD) : A.intl.string(A.t.pLPjsb),
        S = {
            title: C ? A.intl.string(A.t.HFhcqh) : I,
            body: C ? A.intl.string(A.t.ilhtIa) : void 0,
            renderIcon: C ? r.GM : void 0,
            shouldShow: !0,
        },
        b = !f && e.collectiblesItem.type === l.R.PROFILE_EFFECT;
    return (0, i.jsx)(
        u.A,
        {
            onCardClick: () => {
                E ? d() : p(e, s, a);
            },
            tooltipConfig: S,
            shouldScalePreview: f || !b,
            renderPreview: () => {
                if (f) {
                    let t = { items: e.bundleItems };
                    return (0, i.jsx)("div", {
                        className: g.hT,
                        children: (0, i.jsx)(o.X, { product: t, isHighlighted: !1, user: s }),
                    });
                }
                return (0, i.jsx)(c.A, { item: e, profileOwner: s, isHighlighted: !1 });
            },
            moreCount: n,
            isSingleCard: h,
            wishlistItem: e,
            wishlistId: m,
            cardSize: x,
        },
        e.skuId,
    );
}
function x(e, t) {
    let { profileOwner: n, analyticsLocations: s, wishlistId: r, onViewWishlist: o } = t,
        d = null != e.bundleItems && e.bundleItems.length > 0,
        c = _(e, {
            profileOwner: n,
            analyticsLocations: s,
            onViewWishlist: o,
            isSingleCard: !0,
            wishlistId: r,
            index: 0,
        }),
        u = d
            ? A.intl.string(A.t.Zr5tjn)
            : (function (e) {
                  switch (e.collectiblesItem.type) {
                      case l.R.AVATAR_DECORATION:
                          return A.intl.string(A.t["7v0T9P"]);
                      case l.R.PROFILE_EFFECT:
                          return A.intl.string(A.t.wR5wOo);
                      case l.R.NAMEPLATE:
                          return A.intl.string(A.t.x5CoXR);
                      default:
                          return "";
                  }
              })(e);
    return (0, i.jsxs)("div", {
        className: m.D5,
        children: [
            c,
            (0, i.jsxs)("div", {
                className: m.S7,
                children: [
                    (0, i.jsx)(a.DUT, {
                        onClick: () => {
                            p(e, n, s);
                        },
                        className: m.Hh,
                        "aria-label": A.intl.string(A.t.pLPjsb),
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            lineClamp: 2,
                            children: e.skuName,
                        }),
                    }),
                    (0, i.jsx)(a.Text, { variant: "text-xs/medium", color: "text-default", children: u }),
                ],
            }),
        ],
    });
}
