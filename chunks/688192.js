n.d(t, {
    Y: () => x,
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
    h = n(594174),
    f = n(626135),
    g = n(51144),
    m = n(221292),
    b = n(461631),
    _ = n(228168),
    y = n(981631),
    O = n(474936),
    v = n(388032),
    j = n(232644),
    x =
        (((r = {}).GIFTING_FLOW = "gifting_flow"),
        (r.PROFILE_MODAL = "profile_modal"),
        (r.PROFILE_SIDEBAR = "profile_sidebar"),
        r);
function C(e) {
    let {
            item: t,
            wishlistId: n,
            isOwner: r,
            surface: o = "profile_modal",
            cardRef: x,
            renderItemPreview: C,
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
        D = null != x ? x : R,
        { analyticsLocations: L } = (0, u.ZP)(),
        M = r && !0 === t.isOwned && null != t.gifterUserId,
        k = null != t.gifterUserId ? h.default.getUser(t.gifterUserId) : null,
        G = null != k ? g.ZP.getName(k) : null,
        U = M && null != k && null != G && "" !== G,
        B = U
            ? (0, i.jsx)(c.qEK, {
                  src: k.getAvatarURL(void 0, 48),
                  size: c.EFr.SIZE_48,
                  "aria-label": G,
              })
            : null,
        F = (0, i.jsx)("div", {
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
        V = (0, i.jsx)("div", {
            className: j.overlay,
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
            if (w === O.Wt.DM_CHANNEL_WISHLIST) {
                let e = T === p.lr.WISHLIST ? "wishlist" : "shop";
                f.default.track(y.rMx.GIFTING_ITEM_CLICKED, {
                    sku_id: t.skuId,
                    item_source: e,
                    wishlist_id: T === p.lr.WISHLIST ? n : null,
                });
            } else if (null != n) {
                var e;
                let r = d.Z.getWishlist(n),
                    i = null != (e = null == r ? void 0 : r.hasThirdPartySku()) && e;
                (0, m.Er)({
                    wishlistId: n,
                    action: _.NW.WISHLIST_ITEM_CLICKED,
                    skuId: t.skuId,
                    analyticsLocations: L,
                    hasThirdPartySku: i,
                });
            }
            S();
        },
        z = (0, i.jsxs)("div", {
            ref: A,
            className: j.container,
            children: [
                (0, i.jsxs)("div", {
                    ref: D,
                    className: a()(j.card, {
                        [j.isOwned]: N,
                        [j.smallCard]: "gifting_flow" === o,
                        [j.largeCard]: "profile_modal" === o,
                    }),
                    onClick: H,
                    children: [
                        (0, i.jsx)(c.nn4, { children: (0, i.jsx)(c.H, { children: E }) }),
                        (0, i.jsx)("div", {
                            className: j.cardPreview,
                            children: C(),
                        }),
                        N && F,
                        "profile_modal" === o
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
                    (0, i.jsx)(b.Z, {
                        iconSize: "sm",
                        item: t,
                        wishlistId: n,
                        className: j.removeItemButton,
                    }),
            ],
        });
    return U
        ? (0, i.jsx)(s.i_, {
              asContainer: !0,
              title: v.intl.formatToPlainString(v.t.TL4ktE, { username: G }),
              body: t.skuName,
              asset: B,
              children: z,
          })
        : z;
}
