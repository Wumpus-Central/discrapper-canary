n.d(t, {
    B: () => S,
    J: () => C,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(704215),
    s = n(952265),
    o = n(907862),
    c = n(481060),
    d = n(728345),
    u = n(243778),
    p = n(766717),
    h = n(819640),
    f = n(594914),
    g = n(848118),
    m = n(582113),
    b = n(921944),
    _ = n(474936),
    y = n(388032),
    O = n(758650),
    x = n(976218);
function j(e) {
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
                text: y.intl.string(y.t.RzWDqY),
                variant: "primary",
                onClick: i,
            },
        ],
        targetElementRef: t,
        title: y.intl.string(y.t.qh9t5c),
        body: y.intl.string(y.t.iM6fxV),
        graphic: void 0,
    });
}
function v(e) {
    var t,
        n,
        { showPopover: o, onViewWishlist: c, onCardClick: d } = e,
        f = (function (e, t) {
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
        _ = (0, l.e7)([h.Z], () => h.Z.hasLayers()),
        [y, O] = (0, u.US)([a.z.GAME_SHOP_WISHLIST_POPOVER], b.R.SIDEBAR, !0),
        x = i.useCallback(() => {
            O(b.L.USER_DISMISS), d();
        }, [d, O]),
        v = i.useCallback(() => {
            O(b.L.USER_DISMISS);
        }, [O]),
        C = i.useCallback(() => {
            O(b.L.USER_DISMISS), c();
        }, [c, O]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                p.Z,
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
                })({}, f)),
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
                !_ &&
                (0, r.jsx)(j, {
                    targetElementRef: g,
                    onRequestClose: v,
                    onActionClick: C,
                }),
        ],
    });
}
function C(e, t) {
    let {
            index: n,
            moreCount: i,
            onViewWishlist: l,
            isSingleCard: a = !1,
            profileOwner: s,
            analyticsLocations: o,
            wishlistId: c,
        } = t,
        d = null != i && i > 0,
        u = d ? y.intl.string(y.t.TxBQzD) : y.intl.string(y.t.ilhtIa);
    return (0, r.jsx)(
        v,
        {
            onCardClick: () => {
                if (d) return void l();
                (0, f.P)(e.sku, {
                    isGift: !0,
                    giftRecipient: s,
                    giftingOrigin: _.Wt.USER_PROFILE_WISHLIST,
                });
            },
            tooltipText: u,
            shouldScalePreview: !1,
            renderPreview: () =>
                (0, r.jsx)(g.A, {
                    containerClassName: O.card,
                    backgroundImageClassName: O.cardBackgroundImage,
                    foregroundImageClassName: O.cardImage,
                    sku: e.sku,
                    shape: "custom",
                }),
            moreCount: i,
            isSingleCard: a,
            skuId: e.skuId,
            analyticsLocations: o,
            wishlistId: c,
            showPopover: 0 === n && e.sku.applicationId === m.t9,
            onViewWishlist: l,
        },
        e.skuId,
    );
}
function I(e) {
    let { item: t, card: n, profileOwner: i } = e,
        { data: l } = (0, d.IX)(t.sku.applicationId);
    return (0, r.jsxs)("div", {
        className: x.singleItemContainer,
        children: [
            n,
            (0, r.jsx)("div", {
                className: x.singleItemInfo,
                children: (0, r.jsxs)(c.P3F, {
                    onClick: () => {
                        (0, f.P)(t.sku, {
                            isGift: !0,
                            giftRecipient: i,
                            giftingOrigin: _.Wt.USER_PROFILE_WISHLIST,
                        });
                    },
                    className: x.singleItemName,
                    "aria-label": y.intl.string(y.t.ilhtIa),
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
                            children: y.intl.format(y.t["CqpEC+"], { applicationName: null == l ? void 0 : l.name }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function S(e, t) {
    let { profileOwner: n, analyticsLocations: i, wishlistId: l, onViewWishlist: a } = t,
        s = C(e, {
            index: 0,
            profileOwner: n,
            analyticsLocations: i,
            onViewWishlist: a,
            isSingleCard: !0,
            wishlistId: l,
        });
    return (0, r.jsx)(I, {
        item: e,
        card: s,
        profileOwner: n,
    });
}
