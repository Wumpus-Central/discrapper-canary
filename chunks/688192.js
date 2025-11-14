n.d(t, {
    U: () => x,
    Z: () => C,
});
var r,
    i = n(951288),
    l = n(647438),
    o = n(120356),
    a = n.n(o),
    s = n(681715),
    c = n(481060),
    u = n(906732),
    d = n(607550),
    p = n(602733),
    f = n(594174),
    h = n(626135),
    g = n(51144),
    m = n(221292),
    b = n(461631),
    _ = n(228168),
    y = n(981631),
    O = n(474936),
    v = n(388032),
    j = n(232644),
    x = (((r = {}).SMALL = "small"), (r.MEDIUM = "medium"), (r.LARGE = "large"), r);
function C(e) {
    let {
            item: t,
            wishlistId: n,
            isOwner: r,
            cardSize: o = "medium",
            showOverlayButton: x = !0,
            cardRef: C,
            renderItemPreview: E,
            accessibleLabel: S,
            onCardClick: I,
            buttonCTALabel: P,
            buttonIcon: N,
            isOwned: Z = !1,
            renderSourceIcon: w,
            giftingOrigin: T,
            source: A,
        } = e,
        R = l.useRef(null),
        D = l.useRef(null),
        L = null != C ? C : D,
        { analyticsLocations: M } = (0, u.ZP)(),
        k = r && !0 === t.isOwned && null != t.gifterUserId,
        G = null != t.gifterUserId ? f.default.getUser(t.gifterUserId) : null,
        U = null != G ? g.ZP.getName(G) : null,
        B = k && null != G && null != U && "" !== U,
        F = B
            ? (0, i.jsx)(c.qEK, {
                  src: G.getAvatarURL(void 0, 48),
                  size: c.EFr.SIZE_48,
                  "aria-label": U,
              })
            : null,
        V = (0, i.jsx)("div", {
            className: j.cardStateIconWrapper,
            children: (0, i.jsx)(c.sV5, {
                size: "custom",
                color: c.TVs.colors.WHITE,
                width: 38,
                height: 38,
                className: a()(j.cardStateIcon, j.checkmark),
                "aria-label": v.intl.string(v.t.L5Pt9L),
            }),
        }),
        H = (0, i.jsx)("div", {
            className: j.overlay,
            children: (0, i.jsx)(c.Button, {
                focusProps: { ringTarget: L },
                variant: "primary",
                size: "sm",
                text: P,
                icon: N,
                onClick: (e) => {
                    e.stopPropagation(), z();
                },
                fullWidth: !0,
            }),
        }),
        z = () => {
            if (T === O.Wt.DM_CHANNEL_WISHLIST) {
                let e = A === p.lr.WISHLIST ? "wishlist" : "shop";
                h.default.track(y.rMx.GIFTING_ITEM_CLICKED, {
                    sku_id: t.skuId,
                    item_source: e,
                    wishlist_id: A === p.lr.WISHLIST ? n : null,
                });
            } else if (null != n) {
                var e;
                let r = d.Z.getWishlist(n),
                    i = null != (e = null == r ? void 0 : r.hasThirdPartySku()) && e;
                (0, m.Er)({
                    wishlistId: n,
                    action: _.NW.WISHLIST_ITEM_CLICKED,
                    skuId: t.skuId,
                    analyticsLocations: M,
                    hasThirdPartySku: i,
                });
            }
            I();
        },
        W = (0, i.jsxs)("div", {
            ref: R,
            className: j.container,
            children: [
                (0, i.jsxs)("div", {
                    ref: L,
                    className: a()(j.card, {
                        [j.isOwned]: Z,
                        [j.smallCard]: "small" === o,
                        [j.largeCard]: "large" === o,
                    }),
                    onClick: z,
                    children: [
                        (0, i.jsx)(c.nn4, { children: (0, i.jsx)(c.H, { children: S }) }),
                        (0, i.jsx)("div", {
                            className: j.cardPreview,
                            children: E(),
                        }),
                        Z && V,
                        x
                            ? H
                            : (0, i.jsx)(c.P3F, {
                                  "aria-label": P,
                                  focusProps: { ringTarget: L },
                                  onClick: (e) => {
                                      e.stopPropagation(), z();
                                  },
                              }),
                    ],
                }),
                null != w && w(),
                r &&
                    null != n &&
                    (0, i.jsx)(b.Z, {
                        iconSize: "sm",
                        item: t,
                        wishlistId: n,
                        className: j.removeItemButton,
                    }),
            ],
        });
    return B
        ? (0, i.jsx)(s.i_, {
              asContainer: !0,
              title: v.intl.formatToPlainString(v.t.TL4ktE, { username: U }),
              body: t.skuName,
              asset: F,
              children: W,
          })
        : W;
}
