n.d(t, {
    U: () => j,
    Z: () => C,
}),
    n(388685);
var r,
    i = n(54381),
    l = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(681715),
    c = n(481060),
    u = n(906732),
    d = n(602733),
    p = n(594174),
    h = n(626135),
    f = n(51144),
    g = n(221292),
    m = n(461631),
    b = n(228168),
    _ = n(981631),
    y = n(474936),
    O = n(388032),
    v = n(232644),
    j = (((r = {}).SMALL = "small"), (r.MEDIUM = "medium"), (r.LARGE = "large"), r);
function C(e) {
    let {
            item: t,
            wishlistId: n,
            isOwner: r,
            cardSize: o = "medium",
            showOverlayButton: j = !0,
            cardRef: C,
            renderItemPreview: x,
            accessibleLabel: E,
            onCardClick: S,
            buttonCTALabel: I,
            buttonIcon: P,
            isOwned: N = !1,
            renderSourceIcon: Z,
            giftingOrigin: w,
            source: T,
        } = e,
        A = l.useRef(null),
        R = l.useRef(null),
        D = null != C ? C : R,
        { analyticsLocations: L } = (0, u.ZP)(),
        M = r && !0 === t.isOwned && null != t.gifterUserId,
        k = null != t.gifterUserId ? p.default.getUser(t.gifterUserId) : null,
        G = null != k ? f.ZP.getName(k) : null,
        U = M && null != k && null != G && "" !== G,
        B = U
            ? (0, i.jsx)(c.qEK, {
                  src: k.getAvatarURL(void 0, 48),
                  size: c.EFr.SIZE_48,
                  "aria-label": G,
              })
            : void 0,
        F = (0, i.jsx)("div", {
            className: v.cardStateIconWrapper,
            children: (0, i.jsx)(c.sV5, {
                size: "custom",
                color: c.TVs.colors.WHITE,
                width: 38,
                height: 38,
                className: a()(v.cardStateIcon, v.checkmark),
                "aria-label": O.intl.string(O.t.L5Pt9L),
            }),
        }),
        V = (0, i.jsx)("div", {
            className: v.overlay,
            children: (0, i.jsx)(c.Button, {
                focusProps: { ringTarget: D },
                variant: "primary",
                size: "sm",
                text: I,
                icon: P,
                onClick: (e) => {
                    e.stopPropagation(), H();
                },
                fullWidth: !0,
            }),
        }),
        H = () => {
            if (w === y.Wt.DM_CHANNEL_WISHLIST) {
                let e = T === d.lr.WISHLIST ? "wishlist" : "shop";
                h.default.track(_.rMx.GIFTING_ITEM_CLICKED, {
                    sku_id: t.skuId,
                    item_source: e,
                    wishlist_id: T === d.lr.WISHLIST ? n : null,
                    product_line: t.skuProductLine,
                });
            } else
                null != n &&
                    (0, g.Er)({
                        wishlistId: n,
                        action: b.NW.WISHLIST_ITEM_CLICKED,
                        skuId: t.skuId,
                        analyticsLocations: L,
                        productLines: new Set([t.skuProductLine]),
                    });
            S();
        },
        z = (0, i.jsxs)("div", {
            ref: A,
            className: v.container,
            children: [
                (0, i.jsxs)("div", {
                    ref: D,
                    className: a()(v.card, {
                        [v.isOwned]: N,
                        [v.smallCard]: "small" === o,
                        [v.largeCard]: "large" === o,
                    }),
                    onClick: H,
                    children: [
                        (0, i.jsx)(c.nn4, { children: (0, i.jsx)(c.H, { children: E }) }),
                        (0, i.jsx)("div", {
                            className: v.cardPreview,
                            children: x(),
                        }),
                        N && F,
                        j
                            ? V
                            : (0, i.jsx)(c.P3F, {
                                  "aria-label": I,
                                  focusProps: { ringTarget: D },
                                  onClick: (e) => {
                                      e.stopPropagation(), H();
                                  },
                              }),
                    ],
                }),
                null != Z && Z(),
                r &&
                    null != n &&
                    (0, i.jsx)(m.Z, {
                        iconSize: "sm",
                        item: t,
                        wishlistId: n,
                        className: v.removeItemButton,
                    }),
            ],
        });
    return U
        ? (0, i.jsx)(s.i_, {
              asContainer: !0,
              title: O.intl.formatToPlainString(O.t.TL4ktE, { username: G }),
              body: t.skuName,
              asset: B,
              children: z,
          })
        : z;
}
