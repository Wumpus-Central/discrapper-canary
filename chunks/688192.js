n.d(t, {
    Y: () => j,
    Z: () => x,
});
var r,
    i = n(951288),
    l = n(647438),
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
    j =
        (((r = {}).GIFTING_FLOW = "gifting_flow"),
        (r.PROFILE_MODAL = "profile_modal"),
        (r.PROFILE_SIDEBAR = "profile_sidebar"),
        r);
function x(e) {
    let {
            item: t,
            wishlistId: n,
            isOwner: r,
            surface: o = "profile_modal",
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
        { analyticsLocations: D } = (0, u.ZP)(),
        L = r && !0 === t.isOwned && null != t.gifterUserId,
        M = null != t.gifterUserId ? p.default.getUser(t.gifterUserId) : null,
        k = null != M ? f.ZP.getName(M) : null,
        G = L && null != M && null != k && "" !== k,
        U = G
            ? (0, i.jsx)(c.qEK, {
                  src: M.getAvatarURL(void 0, 48),
                  size: c.EFr.SIZE_48,
                  "aria-label": k,
              })
            : null,
        B = (0, i.jsx)("div", {
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
        F = (0, i.jsx)("div", {
            className: v.overlay,
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
            if (Z === y.Wt.DM_CHANNEL_WISHLIST) {
                let e = w === d.lr.WISHLIST ? "wishlist" : "shop";
                h.default.track(_.rMx.GIFTING_ITEM_CLICKED, {
                    sku_id: t.skuId,
                    item_source: e,
                    wishlist_id: w === d.lr.WISHLIST ? n : null,
                });
            } else
                null != n &&
                    (0, g.Er)({
                        wishlistId: n,
                        action: b.NW.WISHLIST_ITEM_CLICKED,
                        skuId: t.skuId,
                        analyticsLocations: D,
                    });
            E();
        },
        H = (0, i.jsxs)("div", {
            ref: T,
            className: v.container,
            children: [
                (0, i.jsxs)("div", {
                    ref: R,
                    className: a()(v.card, {
                        [v.isOwned]: P,
                        [v.smallCard]: "gifting_flow" === o,
                        [v.largeCard]: "profile_modal" === o,
                    }),
                    onClick: V,
                    children: [
                        (0, i.jsx)(c.nn4, { children: (0, i.jsx)(c.H, { children: C }) }),
                        (0, i.jsx)("div", {
                            className: v.cardPreview,
                            children: x(),
                        }),
                        P && B,
                        "profile_modal" === o
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
                    (0, i.jsx)(m.Z, {
                        iconSize: "sm",
                        item: t,
                        wishlistId: n,
                        className: v.removeItemButton,
                    }),
            ],
        });
    return G
        ? (0, i.jsx)(s.i_, {
              asContainer: !0,
              title: O.intl.formatToPlainString(O.t.TL4ktE, { username: k }),
              body: t.skuName,
              asset: U,
              children: H,
          })
        : H;
}
