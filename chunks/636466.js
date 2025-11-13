n.d(t, {
    B: () => E,
    J: () => I,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
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
    g = n(594914),
    m = n(848118),
    b = n(582113),
    _ = n(921944),
    y = n(474936),
    O = n(388032),
    x = n(758650),
    j = n(976218);
function v(e) {
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
                text: O.intl.string(O.t.RzWDqY),
                variant: "primary",
                onClick: i,
            },
        ],
        targetElementRef: t,
        title: O.intl.string(O.t.qh9t5c),
        body: O.intl.string(O.t.iM6fxV),
        graphic: void 0,
    });
}
function C(e) {
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
    let g = i.useRef(null),
        m = (0, s.f9)(),
        b = (0, l.e7)([f.Z], () => f.Z.hasLayers()),
        [y, O] = (0, p.US)([a.z.GAME_SHOP_WISHLIST_POPOVER], _.R.SIDEBAR, !0),
        x = i.useCallback(() => {
            O(_.L.USER_DISMISS), d();
        }, [d, O]),
        j = i.useCallback(() => {
            O(_.L.USER_DISMISS);
        }, [O]),
        C = i.useCallback(() => {
            O(_.L.USER_DISMISS), c();
        }, [c, O]);
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
                        onCardClick: x,
                        ref: g,
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
                y === a.z.GAME_SHOP_WISHLIST_POPOVER &&
                !m &&
                !b &&
                (0, r.jsx)(v, {
                    targetElementRef: g,
                    onRequestClose: j,
                    onActionClick: C,
                }),
        ],
    });
}
function I(e, t) {
    let {
            index: n,
            moreCount: i,
            onViewWishlist: l,
            isSingleCard: a = !1,
            profileOwner: s,
            analyticsLocations: o,
            wishlistId: c,
        } = t,
        u = null != i && i > 0,
        p = u ? O.intl.string(O.t.TxBQzD) : O.intl.string(O.t.ilhtIa);
    return (0, r.jsx)(
        C,
        {
            onCardClick: () => {
                if (u) return void l();
                (0, g.P)(
                    e.sku,
                    {
                        isGift: !0,
                        giftRecipient: s,
                        giftingOrigin: y.Wt.USER_PROFILE_WISHLIST,
                    },
                    { analyticsLocations: [d.Z.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
            },
            tooltipText: p,
            shouldScalePreview: !1,
            renderPreview: () =>
                (0, r.jsx)(m.A, {
                    containerClassName: x.card,
                    backgroundImageClassName: x.cardBackgroundImage,
                    foregroundImageClassName: x.cardImage,
                    sku: e.sku,
                    shape: "custom",
                }),
            moreCount: i,
            isSingleCard: a,
            skuId: e.skuId,
            analyticsLocations: o,
            wishlistId: c,
            showPopover: 0 === n && e.sku.applicationId === b.t9,
            onViewWishlist: l,
        },
        e.skuId,
    );
}
function S(e) {
    let { item: t, card: n, profileOwner: i } = e,
        { data: l } = (0, u.IX)(t.sku.applicationId);
    return (0, r.jsxs)("div", {
        className: j.singleItemContainer,
        children: [
            n,
            (0, r.jsx)("div", {
                className: j.singleItemInfo,
                children: (0, r.jsxs)(c.P3F, {
                    onClick: () => {
                        (0, g.P)(
                            t.sku,
                            {
                                isGift: !0,
                                giftRecipient: i,
                                giftingOrigin: y.Wt.USER_PROFILE_WISHLIST,
                            },
                            { analyticsLocations: [d.Z.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                        );
                    },
                    className: j.singleItemName,
                    "aria-label": O.intl.string(O.t.ilhtIa),
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
                            children: O.intl.format(O.t["CqpEC+"], { applicationName: null == l ? void 0 : l.name }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function E(e, t) {
    let { profileOwner: n, analyticsLocations: i, wishlistId: l, onViewWishlist: a } = t,
        s = I(e, {
            index: 0,
            profileOwner: n,
            analyticsLocations: i,
            onViewWishlist: a,
            isSingleCard: !0,
            wishlistId: l,
        });
    return (0, r.jsx)(S, {
        item: e,
        card: s,
        profileOwner: n,
    });
}
