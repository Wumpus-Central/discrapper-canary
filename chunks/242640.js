n.d(t, {
    A: () => E,
    Y: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(397927),
    l = n(594832),
    c = n(954571),
    u = n(183555),
    d = n(941165),
    f = n(518477),
    p = n(652215),
    _ = n(788868),
    h = n(985018),
    m = n(752276),
    g = (function (e) {
        return (
            (e.SMALL = "small"),
            (e.SMALL_SQUARE = "small-square"),
            (e.MEDIUM = "medium"),
            (e.LARGE = "large"),
            (e.FLEX = "flex"),
            e
        );
    })({});

function E(e) {
    let {
            item: t,
            wishlistId: n,
            isOwner: a,
            cardSize: g = "medium",
            showOverlayButton: E = !0,
            cardRef: y,
            renderItemPreview: b,
            accessibleLabel: O,
            onCardClick: v,
            buttonCTALabel: A,
            buttonIcon: I,
            isOwned: S = !1,
            renderSourceIcon: T,
            dragHandle: C,
            giftingOrigin: N,
            source: w,
        } = e,
        R = i.useRef(null),
        P = i.useRef(null),
        D = null != y ? y : P,
        { trackUserProfileWishlistAction: L } = (0, u.NJ)(),
        x = (0, r.jsx)("div", {
            className: m.Af,
            children: (0, r.jsx)(s.rOg, {
                size: "custom",
                color: s.LU0.colors.WHITE,
                width: 38,
                height: 38,
                className: o()(m.x6, m.AI),
                "aria-label": h.intl.string(h.t.L5Pt9L),
            }),
        }),
        M = (0, r.jsx)("div", {
            className: m.Lw,
            children: (0, r.jsx)(s.Button, {
                focusProps: {
                    ringTarget: D,
                },
                variant: "primary",
                size: "sm",
                text: A,
                icon: I,
                onClick: (e) => {
                    e.stopPropagation(), j();
                },
                fullWidth: !0,
            }),
        }),
        j = () => {
            if (N === _.vQ.DM_CHANNEL_WISHLIST) {
                let e = w === l.uS.WISHLIST ? "wishlist" : "shop";
                c.default.track(p.HAw.GIFTING_ITEM_CLICKED, {
                    sku_id: t.skuId,
                    item_source: e,
                    wishlist_id: w === l.uS.WISHLIST ? n : null,
                    product_line: t.skuProductLine,
                });
            } else
                null != n &&
                    L({
                        wishlistId: n,
                        action: f.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: t.skuId,
                        productLines: new Set([t.skuProductLine]),
                    });
            v();
        };
    return (0, r.jsxs)("div", {
        ref: R,
        className: m.kL,
        children: [
            (0, r.jsxs)("div", {
                ref: D,
                className: o()(m.Nr, {
                    [m.go]: S,
                    [m.tM]: "small-square" === g,
                    [m.IU]: "small" === g,
                    [m.Sd]: "large" === g,
                    [m.uE]: "flex" === g,
                }),
                onClick: j,
                children: [
                    (0, r.jsx)(s.AC4, {
                        children: (0, r.jsx)(s.H, {
                            children: O,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: m.ho,
                        children: b(),
                    }),
                    S && x,
                    E
                        ? M
                        : (0, r.jsx)(s.DUT, {
                              "aria-label": A,
                              focusProps: {
                                  ringTarget: D,
                              },
                              onClick: (e) => {
                                  e.stopPropagation(), j();
                              },
                          }),
                ],
            }),
            null != T && T(),
            C,
            a &&
                null != n &&
                (0, r.jsx)(d.A, {
                    iconSize: "sm",
                    item: t,
                    wishlistId: n,
                    className: m.eP,
                }),
        ],
    });
}
