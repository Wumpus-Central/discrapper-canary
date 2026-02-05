"use strict";
n.d(t, { A: () => E, Y: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(594832),
    u = n(954571),
    c = n(183555),
    d = n(941165),
    _ = n(518477),
    f = n(652215),
    p = n(788868),
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
            cardRef: A,
            renderItemPreview: I,
            accessibleLabel: T,
            onCardClick: y,
            buttonCTALabel: S,
            buttonIcon: v,
            isOwned: C = !1,
            renderSourceIcon: b,
            dragHandle: N,
            giftingOrigin: R,
            source: O,
        } = e,
        D = i.useRef(null),
        L = i.useRef(null),
        w = null != A ? A : L,
        { trackUserProfileWishlistAction: x } = (0, c.NJ)(),
        P = (0, r.jsx)("div", {
            className: m.Af,
            children: (0, r.jsx)(o.rOg, {
                size: "custom",
                color: o.LU0.colors.WHITE,
                width: 38,
                height: 38,
                className: s()(m.x6, m.AI),
                "aria-label": h.intl.string(h.t.L5Pt9L),
            }),
        }),
        M = (0, r.jsx)("div", {
            className: m.Lw,
            children: (0, r.jsx)(o.Button, {
                focusProps: { ringTarget: w },
                variant: "primary",
                size: "sm",
                text: S,
                icon: v,
                onClick: (e) => {
                    e.stopPropagation(), k();
                },
                fullWidth: !0,
            }),
        }),
        k = () => {
            if (R === p.vQ.DM_CHANNEL_WISHLIST) {
                let e = O === l.uS.WISHLIST ? "wishlist" : "shop";
                u.default.track(f.HAw.GIFTING_ITEM_CLICKED, {
                    sku_id: t.skuId,
                    item_source: e,
                    wishlist_id: O === l.uS.WISHLIST ? n : null,
                    product_line: t.skuProductLine,
                });
            } else
                null != n &&
                    x({
                        wishlistId: n,
                        action: _.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: t.skuId,
                        productLines: new Set([t.skuProductLine]),
                    });
            y();
        };
    return (0, r.jsxs)("div", {
        ref: D,
        className: m.kL,
        children: [
            (0, r.jsxs)("div", {
                ref: w,
                className: s()(m.Nr, {
                    [m.go]: C,
                    [m.tM]: "small-square" === g,
                    [m.IU]: "small" === g,
                    [m.Sd]: "large" === g,
                    [m.uE]: "flex" === g,
                }),
                onClick: k,
                children: [
                    (0, r.jsx)(o.AC4, { children: (0, r.jsx)(o.H, { children: T }) }),
                    (0, r.jsx)("div", { className: m.ho, children: I() }),
                    C && P,
                    E
                        ? M
                        : (0, r.jsx)(o.DUT, {
                              "aria-label": S,
                              focusProps: { ringTarget: w },
                              onClick: (e) => {
                                  e.stopPropagation(), k();
                              },
                          }),
                ],
            }),
            null != b && b(),
            N,
            a && null != n && (0, r.jsx)(d.A, { iconSize: "sm", item: t, wishlistId: n, className: m.eP }),
        ],
    });
}
