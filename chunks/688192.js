n.d(t, {
    U: () => y,
    Z: () => O,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(681715),
    l = n(481060),
    c = n(602733),
    u = n(594174),
    d = n(626135),
    f = n(51144),
    p = n(785717),
    _ = n(461631),
    m = n(228168),
    h = n(981631),
    g = n(474936),
    E = n(388032),
    b = n(889588),
    y = (function (e) {
        return (
            (e.SMALL = "small"),
            (e.SMALL_SQUARE = "small-square"),
            (e.MEDIUM = "medium"),
            (e.LARGE = "large"),
            (e.FLEX = "flex"),
            e
        );
    })({});
function O(e) {
    let {
            item: t,
            wishlistId: n,
            isOwner: a,
            cardSize: y = "medium",
            showOverlayButton: O = !0,
            cardRef: v,
            renderItemPreview: S,
            accessibleLabel: I,
            onCardClick: T,
            buttonCTALabel: C,
            buttonIcon: A,
            isOwned: N = !1,
            renderSourceIcon: P,
            dragHandle: R,
            giftingOrigin: w,
            source: D,
        } = e,
        x = i.useRef(null),
        L = i.useRef(null),
        j = null != v ? v : L,
        { trackUserProfileWishlistAction: M } = (0, p.KZ)(),
        k = a && !0 === t.isOwned && null != t.gifterUserId,
        U = null != t.gifterUserId ? u.default.getUser(t.gifterUserId) : null,
        G = null != U ? f.ZP.getName(U) : null,
        Z = k && null != U && null != G && "" !== G,
        F = Z
            ? (0, r.jsx)(l.qEK, {
                  src: U.getAvatarURL(void 0, 48),
                  size: l.EFr.SIZE_48,
                  "aria-label": G,
              })
            : void 0,
        B = (0, r.jsx)("div", {
            className: b.cardStateIconWrapper,
            children: (0, r.jsx)(l.sV5, {
                size: "custom",
                color: l.TVs.colors.WHITE,
                width: 38,
                height: 38,
                className: o()(b.cardStateIcon, b.checkmark),
                "aria-label": E.intl.string(E.t.L5Pt9L),
            }),
        }),
        V = (0, r.jsx)("div", {
            className: b.overlay,
            children: (0, r.jsx)(l.Button, {
                focusProps: { ringTarget: j },
                variant: "primary",
                size: "sm",
                text: C,
                icon: A,
                onClick: (e) => {
                    e.stopPropagation(), H();
                },
                fullWidth: !0,
            }),
        }),
        H = () => {
            if (w === g.Wt.DM_CHANNEL_WISHLIST) {
                let e = D === c.lr.WISHLIST ? "wishlist" : "shop";
                d.default.track(h.rMx.GIFTING_ITEM_CLICKED, {
                    sku_id: t.skuId,
                    item_source: e,
                    wishlist_id: D === c.lr.WISHLIST ? n : null,
                    product_line: t.skuProductLine,
                });
            } else
                null != n &&
                    M({
                        wishlistId: n,
                        action: m.NW.WISHLIST_ITEM_CLICKED,
                        skuId: t.skuId,
                        productLines: new Set([t.skuProductLine]),
                    });
            T();
        },
        Y = (0, r.jsxs)("div", {
            ref: x,
            className: b.container,
            children: [
                (0, r.jsxs)("div", {
                    ref: j,
                    className: o()(b.card, {
                        [b.isOwned]: N,
                        [b.smallSquareCard]: "small-square" === y,
                        [b.smallCard]: "small" === y,
                        [b.largeCard]: "large" === y,
                        [b.flexCard]: "flex" === y,
                    }),
                    onClick: H,
                    children: [
                        (0, r.jsx)(l.nn4, { children: (0, r.jsx)(l.H, { children: I }) }),
                        (0, r.jsx)("div", {
                            className: b.cardPreview,
                            children: S(),
                        }),
                        N && B,
                        O
                            ? V
                            : (0, r.jsx)(l.P3F, {
                                  "aria-label": C,
                                  focusProps: { ringTarget: j },
                                  onClick: (e) => {
                                      e.stopPropagation(), H();
                                  },
                              }),
                    ],
                }),
                null != P && P(),
                R,
                a &&
                    null != n &&
                    (0, r.jsx)(_.Z, {
                        iconSize: "sm",
                        item: t,
                        wishlistId: n,
                        className: b.removeItemButton,
                    }),
            ],
        });
    return Z
        ? (0, r.jsx)(s.i_, {
              asContainer: !0,
              title: E.intl.formatToPlainString(E.t.TL4ktE, { username: G }),
              body: t.skuName,
              asset: F,
              children: Y,
          })
        : Y;
}
