n.d(t, {
    U: () => v,
    Z: () => j,
}),
    n(388685);
var r,
    i = n(54381),
    l = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(681715),
    c = n(481060),
    u = n(602733),
    d = n(594174),
    f = n(626135),
    h = n(51144),
    p = n(785717),
    g = n(461631),
    m = n(228168),
    b = n(981631),
    _ = n(474936),
    y = n(388032),
    O = n(232644),
    v = (((r = {}).SMALL = "small"), (r.MEDIUM = "medium"), (r.LARGE = "large"), r);
function j(e) {
    let {
            item: t,
            wishlistId: n,
            isOwner: r,
            cardSize: o = "medium",
            showOverlayButton: v = !0,
            cardRef: j,
            renderItemPreview: x,
            accessibleLabel: C,
            onCardClick: E,
            buttonCTALabel: S,
            buttonIcon: I,
            isOwned: P = !1,
            renderSourceIcon: N,
            giftingOrigin: Z,
            source: w,
        } = e,
        T = l.useRef(null),
        A = l.useRef(null),
        R = null != j ? j : A,
        { trackUserProfileWishlistAction: D } = (0, p.KZ)(),
        L = r && !0 === t.isOwned && null != t.gifterUserId,
        M = null != t.gifterUserId ? d.default.getUser(t.gifterUserId) : null,
        k = null != M ? h.ZP.getName(M) : null,
        G = L && null != M && null != k && "" !== k,
        U = G
            ? (0, i.jsx)(c.qEK, {
                  src: M.getAvatarURL(void 0, 48),
                  size: c.EFr.SIZE_48,
                  "aria-label": k,
              })
            : void 0,
        B = (0, i.jsx)("div", {
            className: O.cardStateIconWrapper,
            children: (0, i.jsx)(c.sV5, {
                size: "custom",
                color: c.TVs.colors.WHITE,
                width: 38,
                height: 38,
                className: a()(O.cardStateIcon, O.checkmark),
                "aria-label": y.intl.string(y.t.L5Pt9L),
            }),
        }),
        F = (0, i.jsx)("div", {
            className: O.overlay,
            children: (0, i.jsx)(c.Button, {
                focusProps: { ringTarget: R },
                variant: "primary",
                size: "sm",
                text: S,
                icon: I,
                onClick: (e) => {
                    e.stopPropagation(), V();
                },
                fullWidth: !0,
            }),
        }),
        V = () => {
            if (Z === _.Wt.DM_CHANNEL_WISHLIST) {
                let e = w === u.lr.WISHLIST ? "wishlist" : "shop";
                f.default.track(b.rMx.GIFTING_ITEM_CLICKED, {
                    sku_id: t.skuId,
                    item_source: e,
                    wishlist_id: w === u.lr.WISHLIST ? n : null,
                    product_line: t.skuProductLine,
                });
            } else
                null != n &&
                    D({
                        wishlistId: n,
                        action: m.NW.WISHLIST_ITEM_CLICKED,
                        skuId: t.skuId,
                        productLines: new Set([t.skuProductLine]),
                    });
            E();
        },
        H = (0, i.jsxs)("div", {
            ref: T,
            className: O.container,
            children: [
                (0, i.jsxs)("div", {
                    ref: R,
                    className: a()(O.card, {
                        [O.isOwned]: P,
                        [O.smallCard]: "small" === o,
                        [O.largeCard]: "large" === o,
                    }),
                    onClick: V,
                    children: [
                        (0, i.jsx)(c.nn4, { children: (0, i.jsx)(c.H, { children: C }) }),
                        (0, i.jsx)("div", {
                            className: O.cardPreview,
                            children: x(),
                        }),
                        P && B,
                        v
                            ? F
                            : (0, i.jsx)(c.P3F, {
                                  "aria-label": S,
                                  focusProps: { ringTarget: R },
                                  onClick: (e) => {
                                      e.stopPropagation(), V();
                                  },
                              }),
                    ],
                }),
                null != N && N(),
                r &&
                    null != n &&
                    (0, i.jsx)(g.Z, {
                        iconSize: "sm",
                        item: t,
                        wishlistId: n,
                        className: O.removeItemButton,
                    }),
            ],
        });
    return G
        ? (0, i.jsx)(s.i_, {
              asContainer: !0,
              title: y.intl.formatToPlainString(y.t.TL4ktE, { username: k }),
              body: t.skuName,
              asset: U,
              children: H,
          })
        : H;
}
