n.d(t, {
    B: () => P,
    J: () => E,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(704215),
    s = n(952265),
    o = n(907862),
    c = n(481060),
    d = n(100527),
    u = n(728345),
    p = n(243778),
    h = n(766717),
    f = n(819640),
    g = n(699955),
    m = n(594914),
    b = n(848118),
    _ = n(582113),
    y = n(921944),
    O = n(474936),
    j = n(388032),
    x = n(758650),
    v = n(976218),
    C = n(30399);
function I(e) {
    let { targetElementRef: t, onRequestClose: n, onActionClick: i } = e;
    return (0, r.jsx)(o.J2, {
        size: "lg",
        shouldShow: !0,
        position: "left",
        caretConfig: { align: "center" },
        gradientColor: "blue",
        align: "center",
        onRequestClose: n,
        actions: [
            {
                text: j.intl.string(j.t.uB4Gax),
                variant: "primary",
                onClick: i,
            },
        ],
        targetElementRef: t,
        title: j.intl.string(j.t.qh9t5c),
        body: j.intl.string(j.t.iM6fxV),
        graphic: {
            type: "image",
            src: C.Z,
        },
    });
}
function S(e) {
    var t,
        n,
        { showPopover: o, onViewWishlist: c, onCardClick: d } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["showPopover", "onViewWishlist", "onCardClick"]);
    let m = i.useRef(null),
        b = (0, s.f9)(),
        _ = (0, l.e7)([f.Z], () => f.Z.hasLayers()),
        O = (0, g.NN)({ location: "wishlist-card" }),
        [j, x] = (0, p.US)(O ? [a.z.GAME_SHOP_WISHLIST_POPOVER] : [], y.R.SIDEBAR, !0),
        v = i.useCallback(() => {
            x(y.L.USER_DISMISS), d();
        }, [d, x]),
        C = i.useCallback(() => {
            x(y.L.USER_DISMISS);
        }, [x]),
        S = i.useCallback(() => {
            x(y.L.USER_DISMISS), c();
        }, [c, x]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                h.Z,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, u)),
                (n = n =
                    {
                        onCardClick: v,
                        ref: m,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            ),
            o &&
                j === a.z.GAME_SHOP_WISHLIST_POPOVER &&
                !b &&
                !_ &&
                (0, r.jsx)(I, {
                    targetElementRef: m,
                    onRequestClose: C,
                    onActionClick: S,
                }),
        ],
    });
}
function E(e, t) {
    let n,
        {
            index: i,
            moreCount: l,
            onViewWishlist: a,
            isSingleCard: s = !1,
            profileOwner: o,
            analyticsLocations: c,
            wishlistId: u,
            showTypeTooltip: p = !1,
        } = t,
        h = null != l && l > 0,
        f = h ? j.intl.string(j.t.TxBQzD) : j.intl.string(j.t.ilhtIa);
    return (
        p && !h && (n = j.intl.string(j.t["4yiU7x"])),
        (0, r.jsx)(
            S,
            {
                productLine: e.skuProductLine,
                onCardClick: () => {
                    if (h) return void a();
                    (0, m.P)(
                        e.sku,
                        {
                            isGift: !0,
                            giftRecipient: o,
                            giftingOrigin: O.Wt.USER_PROFILE_WISHLIST,
                        },
                        { analyticsLocations: [d.Z.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                    );
                },
                tooltipTitle: n,
                tooltipBody: f,
                shouldScalePreview: !1,
                renderPreview: () =>
                    (0, r.jsx)(b.A, {
                        containerClassName: x.card,
                        backgroundImageClassName: x.cardBackgroundImage,
                        foregroundImageClassName: x.cardImage,
                        sku: e.sku,
                        shape: "custom",
                    }),
                moreCount: l,
                isSingleCard: s,
                skuId: e.skuId,
                analyticsLocations: c,
                wishlistId: u,
                showPopover: 0 === i && e.sku.applicationId === _.t9,
                onViewWishlist: a,
            },
            e.skuId,
        )
    );
}
function Z(e) {
    let { item: t, card: n, profileOwner: i } = e,
        { data: l } = (0, u.IX)(t.sku.applicationId);
    return (0, r.jsxs)("div", {
        className: v.singleItemContainer,
        children: [
            n,
            (0, r.jsx)("div", {
                className: v.singleItemInfo,
                children: (0, r.jsxs)(c.P3F, {
                    onClick: () => {
                        (0, m.P)(
                            t.sku,
                            {
                                isGift: !0,
                                giftRecipient: i,
                                giftingOrigin: O.Wt.USER_PROFILE_WISHLIST,
                            },
                            { analyticsLocations: [d.Z.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                        );
                    },
                    className: v.singleItemName,
                    "aria-label": j.intl.string(j.t.ilhtIa),
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            lineClamp: 2,
                            children: t.skuName,
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: j.intl.format(j.t["CqpEC+"], { applicationName: null == l ? void 0 : l.name }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function P(e, t) {
    let { profileOwner: n, analyticsLocations: i, wishlistId: l, onViewWishlist: a } = t,
        s = E(e, {
            index: 0,
            profileOwner: n,
            analyticsLocations: i,
            onViewWishlist: a,
            isSingleCard: !0,
            wishlistId: l,
        });
    return (0, r.jsx)(Z, {
        item: e,
        card: s,
        profileOwner: n,
    });
}
