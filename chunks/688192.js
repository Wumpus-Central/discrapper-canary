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
    b = n(232644),
    y = (function (e) {
        return (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"), e;
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
            giftingOrigin: R,
            source: w,
        } = e,
        D = i.useRef(null),
        x = i.useRef(null),
        L = null != v ? v : x,
        { trackUserProfileWishlistAction: j } = (0, p.KZ)(),
        M = a && !0 === t.isOwned && null != t.gifterUserId,
        k = null != t.gifterUserId ? u.default.getUser(t.gifterUserId) : null,
        U = null != k ? f.ZP.getName(k) : null,
        G = M && null != k && null != U && "" !== U,
        Z = G
            ? (0, r.jsx)(l.qEK, {
                  src: k.getAvatarURL(void 0, 48),
                  size: l.EFr.SIZE_48,
                  "aria-label": U,
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
        F = (0, r.jsx)("div", {
            className: b.overlay,
            children: (0, r.jsx)(l.Button, {
                focusProps: { ringTarget: L },
                variant: "primary",
                size: "sm",
                text: C,
                icon: A,
                onClick: (e) => {
                    e.stopPropagation(), V();
                },
                fullWidth: !0,
            }),
        }),
        V = () => {
            if (R === g.Wt.DM_CHANNEL_WISHLIST) {
                let e = w === c.lr.WISHLIST ? "wishlist" : "shop";
                d.default.track(h.rMx.GIFTING_ITEM_CLICKED, {
                    sku_id: t.skuId,
                    item_source: e,
                    wishlist_id: w === c.lr.WISHLIST ? n : null,
                    product_line: t.skuProductLine,
                });
            } else
                null != n &&
                    j({
                        wishlistId: n,
                        action: m.NW.WISHLIST_ITEM_CLICKED,
                        skuId: t.skuId,
                        productLines: new Set([t.skuProductLine]),
                    });
            T();
        },
        H = (0, r.jsxs)("div", {
            ref: D,
            className: b.container,
            children: [
                (0, r.jsxs)("div", {
                    ref: L,
                    className: o()(b.card, {
                        [b.isOwned]: N,
                        [b.smallCard]: "small" === y,
                        [b.largeCard]: "large" === y,
                    }),
                    onClick: V,
                    children: [
                        (0, r.jsx)(l.nn4, { children: (0, r.jsx)(l.H, { children: I }) }),
                        (0, r.jsx)("div", {
                            className: b.cardPreview,
                            children: S(),
                        }),
                        N && B,
                        O
                            ? F
                            : (0, r.jsx)(l.P3F, {
                                  "aria-label": C,
                                  focusProps: { ringTarget: L },
                                  onClick: (e) => {
                                      e.stopPropagation(), V();
                                  },
                              }),
                    ],
                }),
                null != P && P(),
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
    return G
        ? (0, r.jsx)(s.i_, {
              asContainer: !0,
              title: E.intl.formatToPlainString(E.t.TL4ktE, { username: U }),
              body: t.skuName,
              asset: Z,
              children: H,
          })
        : H;
}
