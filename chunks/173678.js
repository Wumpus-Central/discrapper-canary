"use strict";
n.d(t, { M: () => _, z: () => f });
var i = n(627968),
    s = n(575593),
    l = n(635358),
    r = n(397927),
    a = n(576030),
    o = n(245068),
    c = n(44120),
    d = n(353157),
    u = n(957785),
    h = n(788868),
    A = n(985018),
    m = n(55751),
    p = n(754558);
function g(e, t, n) {
    (0, c.A)({
        skuId: e.skuId,
        isGift: !0,
        giftingOrigin: h.vQ.USER_PROFILE_WISHLIST,
        analyticsLocations: n,
        giftRecipient: t,
        variantsReturnStyle: l.g.VARIANTS_GROUP,
    });
}
function _(e, t) {
    let {
            moreCount: n,
            profileOwner: l,
            analyticsLocations: r,
            onViewWishlist: c,
            isSingleCard: h = !1,
            wishlistId: p,
            showTypeTooltip: _ = !1,
            cardSize: f,
        } = t,
        x = null != e.bundleItems && e.bundleItems.length > 0,
        C = null != n && n > 0,
        E = _ && !C,
        I = C ? A.intl.string(A.t.TxBQzD) : A.intl.string(A.t.pLPjsb),
        N = {
            title: E ? A.intl.string(A.t.HFhcqh) : I,
            body: E ? A.intl.string(A.t.ilhtIa) : void 0,
            renderIcon: E ? a.GM : void 0,
            shouldShow: !0,
        },
        b = !x && e.collectiblesItem.type === s.R.PROFILE_EFFECT;
    return (0, i.jsx)(
        u.A,
        {
            onCardClick: () => {
                C ? c() : g(e, l, r);
            },
            tooltipConfig: N,
            shouldScalePreview: x || !b,
            renderPreview: () => {
                if (x) {
                    let t = { items: e.bundleItems };
                    return (0, i.jsx)("div", {
                        className: m.hT,
                        children: (0, i.jsx)(o.X, { product: t, isHighlighted: !1, user: l }),
                    });
                }
                return (0, i.jsx)(d.A, { item: e, profileOwner: l, isHighlighted: !1 });
            },
            moreCount: n,
            isSingleCard: h,
            wishlistItem: e,
            wishlistId: p,
            cardSize: f,
        },
        e.skuId,
    );
}
function f(e, t) {
    let { profileOwner: n, analyticsLocations: l, wishlistId: a, onViewWishlist: o } = t,
        c = null != e.bundleItems && e.bundleItems.length > 0,
        d = _(e, {
            profileOwner: n,
            analyticsLocations: l,
            onViewWishlist: o,
            isSingleCard: !0,
            wishlistId: a,
            index: 0,
        }),
        u = c
            ? A.intl.string(A.t.Zr5tjn)
            : (function (e) {
                  switch (e.collectiblesItem.type) {
                      case s.R.AVATAR_DECORATION:
                          return A.intl.string(A.t["7v0T9P"]);
                      case s.R.PROFILE_EFFECT:
                          return A.intl.string(A.t.wR5wOo);
                      case s.R.NAMEPLATE:
                          return A.intl.string(A.t.x5CoXR);
                      default:
                          return "";
                  }
              })(e);
    return (0, i.jsxs)("div", {
        className: p.D5,
        children: [
            d,
            (0, i.jsxs)("div", {
                className: p.S7,
                children: [
                    (0, i.jsx)(r.DUT, {
                        onClick: () => {
                            g(e, n, l);
                        },
                        className: p.Hh,
                        "aria-label": A.intl.string(A.t.pLPjsb),
                        children: (0, i.jsx)(r.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            lineClamp: 2,
                            children: e.skuName,
                        }),
                    }),
                    (0, i.jsx)(r.Text, { variant: "text-xs/medium", color: "text-default", children: u }),
                ],
            }),
        ],
    });
}
