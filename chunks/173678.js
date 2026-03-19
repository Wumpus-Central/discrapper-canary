"use strict";
n.d(t, { M: () => p, z: () => _ });
var i = n(627968),
    s = n(575593),
    l = n(397927),
    a = n(576030),
    r = n(245068),
    o = n(44120),
    c = n(353157),
    d = n(957785),
    u = n(788868),
    h = n(985018),
    A = n(55751),
    m = n(754558);
function g(e, t, n) {
    (0, o.A)({
        skuId: e.skuId,
        isGift: !0,
        giftingOrigin: u.vQ.USER_PROFILE_WISHLIST,
        analyticsLocations: n,
        giftRecipient: t,
    });
}
function p(e, t) {
    let {
            moreCount: n,
            profileOwner: l,
            analyticsLocations: o,
            onViewWishlist: u,
            isSingleCard: m = !1,
            wishlistId: p,
            showTypeTooltip: _ = !1,
            cardSize: f,
        } = t,
        x = null != e.bundleItems && e.bundleItems.length > 0,
        C = null != n && n > 0,
        E = _ && !C,
        I = C ? h.intl.string(h.t.TxBQzD) : h.intl.string(h.t.pLPjsb),
        N = {
            title: E ? h.intl.string(h.t.HFhcqh) : I,
            body: E ? h.intl.string(h.t.ilhtIa) : void 0,
            renderIcon: E ? a.GM : void 0,
            shouldShow: !0,
        },
        b = !x && e.collectiblesItem.type === s.R.PROFILE_EFFECT;
    return (0, i.jsx)(
        d.A,
        {
            onCardClick: () => {
                C ? u() : g(e, l, o);
            },
            tooltipConfig: N,
            shouldScalePreview: x || !b,
            renderPreview: () => {
                if (x) {
                    let t = { items: e.bundleItems };
                    return (0, i.jsx)("div", {
                        className: A.hT,
                        children: (0, i.jsx)(r.X, { product: t, isHighlighted: !1, user: l }),
                    });
                }
                return (0, i.jsx)(c.A, { item: e, profileOwner: l, isHighlighted: !1 });
            },
            moreCount: n,
            isSingleCard: m,
            wishlistItem: e,
            wishlistId: p,
            cardSize: f,
        },
        e.skuId,
    );
}
function _(e, t) {
    let { profileOwner: n, analyticsLocations: a, wishlistId: r, onViewWishlist: o } = t,
        c = null != e.bundleItems && e.bundleItems.length > 0,
        d = p(e, {
            profileOwner: n,
            analyticsLocations: a,
            onViewWishlist: o,
            isSingleCard: !0,
            wishlistId: r,
            index: 0,
        }),
        u = c
            ? h.intl.string(h.t.Zr5tjn)
            : (function (e) {
                  switch (e.collectiblesItem.type) {
                      case s.R.AVATAR_DECORATION:
                          return h.intl.string(h.t["7v0T9P"]);
                      case s.R.PROFILE_EFFECT:
                          return h.intl.string(h.t.wR5wOo);
                      case s.R.NAMEPLATE:
                          return h.intl.string(h.t.x5CoXR);
                      default:
                          return "";
                  }
              })(e);
    return (0, i.jsxs)("div", {
        className: m.D5,
        children: [
            d,
            (0, i.jsxs)("div", {
                className: m.S7,
                children: [
                    (0, i.jsx)(l.DUT, {
                        onClick: () => {
                            g(e, n, a);
                        },
                        className: m.Hh,
                        "aria-label": h.intl.string(h.t.pLPjsb),
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            lineClamp: 2,
                            children: e.skuName,
                        }),
                    }),
                    (0, i.jsx)(l.Text, { variant: "text-xs/medium", color: "text-default", children: u }),
                ],
            }),
        ],
    });
}
