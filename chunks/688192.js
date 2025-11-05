n.d(t, {
    Y: () => j,
    Z: () => O,
});
var r,
    i = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    o = n(681715),
    c = n(481060),
    d = n(906732),
    u = n(602733),
    h = n(594174),
    p = n(626135),
    f = n(51144),
    g = n(221292),
    m = n(461631),
    b = n(228168),
    _ = n(981631),
    y = n(474936),
    x = n(388032),
    v = n(232644),
    j =
        (((r = {}).GIFTING_FLOW = "gifting_flow"),
        (r.PROFILE_MODAL = "profile_modal"),
        (r.PROFILE_SIDEBAR = "profile_sidebar"),
        r);
function O(e) {
    let {
            item: t,
            wishlistId: n,
            isOwner: r,
            surface: a = "profile_modal",
            cardRef: j,
            renderItemPreview: O,
            accessibleLabel: C,
            onCardClick: I,
            buttonCTALabel: S,
            buttonIcon: E,
            isOwned: Z = !1,
            renderSourceIcon: P,
            giftingOrigin: T,
            source: N,
        } = e,
        R = l.useRef(null),
        w = l.useRef(null),
        A = null != j ? j : w,
        { analyticsLocations: D } = (0, d.ZP)(),
        L = r && !0 === t.isOwned && null != t.gifterUserId,
        M = null != t.gifterUserId ? h.default.getUser(t.gifterUserId) : null,
        k = null != M ? f.ZP.getName(M) : null,
        U = L && null != M && null != k && "" !== k,
        G = U
            ? (0, i.jsx)(c.qEK, {
                  src: M.getAvatarURL(void 0, 48),
                  size: c.EFr.SIZE_48,
                  "aria-label": k,
              })
            : null,
        H = (0, i.jsx)("div", {
            className: v.cardStateIconWrapper,
            children: (0, i.jsx)(c.sV5, {
                size: "custom",
                color: c.TVs.colors.WHITE,
                width: 38,
                height: 38,
                className: s()(v.cardStateIcon, v.checkmark),
                "aria-label": x.intl.string(x.t.L5Pt9L),
            }),
        }),
        F = (0, i.jsx)("div", {
            className: v.overlay,
            children: (0, i.jsx)(c.Button, {
                focusProps: { ringTarget: A },
                variant: "primary",
                size: "sm",
                text: S,
                icon: E,
                onClick: (e) => {
                    e.stopPropagation(), B();
                },
                fullWidth: !0,
            }),
        }),
        B = () => {
            if (T === y.Wt.DM_CHANNEL_WISHLIST) {
                let e = N === u.lr.WISHLIST ? "wishlist" : "shop";
                p.default.track(_.rMx.GIFTING_ITEM_CLICKED, {
                    sku_id: t.skuId,
                    item_source: e,
                    wishlist_id: N === u.lr.WISHLIST ? n : null,
                });
            } else
                null != n &&
                    (0, g.Er)({
                        wishlistId: n,
                        action: b.NW.WISHLIST_ITEM_CLICKED,
                        skuId: t.skuId,
                        analyticsLocations: D,
                    });
            I();
        },
        V = (0, i.jsxs)("div", {
            ref: R,
            className: v.container,
            children: [
                (0, i.jsxs)("div", {
                    ref: A,
                    className: s()(v.card, {
                        [v.isOwned]: Z,
                        [v.smallCard]: "gifting_flow" === a,
                        [v.largeCard]: "profile_modal" === a,
                    }),
                    onClick: B,
                    children: [
                        (0, i.jsx)(c.nn4, { children: (0, i.jsx)(c.H, { children: C }) }),
                        (0, i.jsx)("div", {
                            className: v.cardPreview,
                            children: O(),
                        }),
                        Z && H,
                        "profile_modal" === a
                            ? F
                            : (0, i.jsx)(c.P3F, {
                                  "aria-label": S,
                                  focusProps: { ringTarget: A },
                                  onClick: (e) => {
                                      e.stopPropagation(), B();
                                  },
                              }),
                    ],
                }),
                null != P && P(),
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
        ? (0, i.jsx)(o.i_, {
              asContainer: !0,
              title: x.intl.formatToPlainString(x.t.TL4ktE, { username: k }),
              body: t.skuName,
              asset: G,
              children: V,
          })
        : V;
}
