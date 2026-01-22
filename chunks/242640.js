n.d(t, {
    A: () => O,
    Y: () => y,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(435371),
    l = n(397927),
    c = n(594832),
    u = n(287809),
    d = n(954571),
    f = n(427262),
    p = n(183555),
    _ = n(941165),
    h = n(518477),
    m = n(652215),
    g = n(788868),
    E = n(985018),
    b = n(752276),
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
            cardRef: A,
            renderItemPreview: v,
            accessibleLabel: S,
            onCardClick: I,
            buttonCTALabel: T,
            buttonIcon: C,
            isOwned: N = !1,
            renderSourceIcon: R,
            dragHandle: w,
            giftingOrigin: P,
            source: D,
        } = e,
        x = i.useRef(null),
        L = i.useRef(null),
        j = null != A ? A : L,
        { trackUserProfileWishlistAction: M } = (0, p.NJ)(),
        k = a && !0 === t.isOwned && null != t.gifterUserId,
        U = null != t.gifterUserId ? u.default.getUser(t.gifterUserId) : null,
        G = null != U ? f.Ay.getName(U) : null,
        V = k && null != U && null != G && "" !== G,
        F = V
            ? (0, r.jsx)(l.euF, {
                  src: U.getAvatarURL(void 0, 48),
                  size: l._3J.SIZE_48,
                  "aria-label": G,
              })
            : void 0,
        B = (0, r.jsx)("div", {
            className: b.Af,
            children: (0, r.jsx)(l.rOg, {
                size: "custom",
                color: l.LU0.colors.WHITE,
                width: 38,
                height: 38,
                className: s()(b.x6, b.AI),
                "aria-label": E.intl.string(E.t.L5Pt9L),
            }),
        }),
        H = (0, r.jsx)("div", {
            className: b.Lw,
            children: (0, r.jsx)(l.Button, {
                focusProps: {
                    ringTarget: j,
                },
                variant: "primary",
                size: "sm",
                text: T,
                icon: C,
                onClick: (e) => {
                    e.stopPropagation(), Y();
                },
                fullWidth: !0,
            }),
        }),
        Y = () => {
            if (P === g.vQ.DM_CHANNEL_WISHLIST) {
                let e = D === c.uS.WISHLIST ? "wishlist" : "shop";
                d.default.track(m.HAw.GIFTING_ITEM_CLICKED, {
                    sku_id: t.skuId,
                    item_source: e,
                    wishlist_id: D === c.uS.WISHLIST ? n : null,
                    product_line: t.skuProductLine,
                });
            } else
                null != n &&
                    M({
                        wishlistId: n,
                        action: h.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: t.skuId,
                        productLines: new Set([t.skuProductLine]),
                    });
            I();
        },
        W = (0, r.jsxs)("div", {
            ref: x,
            className: b.kL,
            children: [
                (0, r.jsxs)("div", {
                    ref: j,
                    className: s()(b.Nr, {
                        [b.go]: N,
                        [b.tM]: "small-square" === y,
                        [b.IU]: "small" === y,
                        [b.Sd]: "large" === y,
                        [b.uE]: "flex" === y,
                    }),
                    onClick: Y,
                    children: [
                        (0, r.jsx)(l.AC4, {
                            children: (0, r.jsx)(l.H, {
                                children: S,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: b.ho,
                            children: v(),
                        }),
                        N && B,
                        O
                            ? H
                            : (0, r.jsx)(l.DUT, {
                                  "aria-label": T,
                                  focusProps: {
                                      ringTarget: j,
                                  },
                                  onClick: (e) => {
                                      e.stopPropagation(), Y();
                                  },
                              }),
                    ],
                }),
                null != R && R(),
                w,
                a &&
                    null != n &&
                    (0, r.jsx)(_.A, {
                        iconSize: "sm",
                        item: t,
                        wishlistId: n,
                        className: b.eP,
                    }),
            ],
        });
    return V
        ? (0, r.jsx)(o.un, {
              asContainer: !0,
              title: E.intl.formatToPlainString(E.t.TL4ktE, {
                  username: G,
              }),
              body: t.skuName,
              asset: F,
              children: W,
          })
        : W;
}
