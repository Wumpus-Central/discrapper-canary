n.d(t, { M: () => g, z: () => p });
var i = n(627968),
    l = n(575593),
    s = n(397927),
    a = n(576030),
    r = n(245068),
    o = n(44120),
    c = n(353157),
    d = n(957785),
    u = n(788868),
    h = n(985018),
    A = n(842006),
    _ = n(522999);
function m(e, t, n) {
    (0, o.A)({
        skuId: e.skuId,
        isGift: !0,
        giftingOrigin: u.vQ.USER_PROFILE_WISHLIST,
        analyticsLocations: n,
        giftRecipient: t,
    });
}
function g(e, t) {
    let {
            moreCount: n,
            profileOwner: s,
            analyticsLocations: o,
            onViewWishlist: u,
            isSingleCard: _ = !1,
            wishlistId: g,
            showTypeTooltip: p = !1,
            cardSize: f,
        } = t,
        x = null != e.bundleItems && e.bundleItems.length > 0,
        E = null != n && n > 0,
        I = p && !E,
        C = E ? h.intl.string(h.t.TxBQzD) : h.intl.string(h.t.pLPjsb),
        N = {
            title: I ? h.intl.string(h.t.HFhcqh) : C,
            body: I ? h.intl.string(h.t.ilhtIa) : void 0,
            renderIcon: I ? a.GM : void 0,
            shouldShow: !0,
        },
        T = !x && e.collectiblesItem.type === l.R.PROFILE_EFFECT;
    return (0, i.jsx)(
        d.A,
        {
            onCardClick: () => {
                E ? u() : m(e, s, o);
            },
            tooltipConfig: N,
            shouldScalePreview: x || !T,
            renderPreview: () => {
                if (x) {
                    let t = { items: e.bundleItems };
                    return (0, i.jsx)("div", {
                        className: A.hT,
                        children: (0, i.jsx)(r.X, { product: t, isHighlighted: !1, user: s }),
                    });
                }
                return (0, i.jsx)(c.A, { item: e, profileOwner: s, isHighlighted: !1 });
            },
            moreCount: n,
            isSingleCard: _,
            wishlistItem: e,
            wishlistId: g,
            cardSize: f,
        },
        e.skuId,
    );
}
function p(e, t) {
    let { profileOwner: n, analyticsLocations: a, wishlistId: r, onViewWishlist: o } = t,
        c = null != e.bundleItems && e.bundleItems.length > 0,
        d = g(e, {
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
    return (0, i.jsxs)("div", {
        className: _.D5,
        children: [
            d,
            (0, i.jsxs)("div", {
                className: _.S7,
                children: [
                    (0, i.jsx)(s.DUT, {
                        onClick: () => {
                            m(e, n, a);
                        },
                        className: _.Hh,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            lineClamp: 2,
                            children: e.skuName,
                        }),
                    }),
                    (0, i.jsx)(s.Text, { variant: "text-xs/medium", color: "text-default", children: u }),
                ],
            }),
        ],
    });
}
