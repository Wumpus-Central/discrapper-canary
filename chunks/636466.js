n.d(t, {
    B: () => M,
    J: () => L,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    o = n(442837),
    a = n(704215),
    s = n(952265),
    l = n(907862),
    c = n(481060),
    u = n(100527),
    d = n(728345),
    f = n(525302),
    p = n(243778),
    _ = n(766717),
    m = n(819640),
    h = n(699955),
    g = n(594914),
    E = n(848118),
    b = n(582113),
    y = n(921944),
    O = n(474936),
    v = n(388032),
    S = n(758650),
    I = n(976218),
    T = n(30399);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function D(e) {
    let { targetElementRef: t, onRequestClose: n, onActionClick: i } = e;
    return (0, r.jsx)(l.J2, {
        size: "lg",
        shouldShow: !0,
        position: "left",
        caretConfig: { align: "center" },
        gradientColor: "blue",
        align: "center",
        onRequestClose: n,
        actions: [
            {
                text: v.intl.string(v.t.uB4Gax),
                variant: "primary",
                onClick: i,
            },
        ],
        targetElementRef: t,
        title: v.intl.string(v.t.qh9t5c),
        body: v.intl.string(v.t.iM6fxV),
        graphic: {
            type: "image",
            src: T.Z,
        },
    });
}
function x(e) {
    var { showPopover: t, onViewWishlist: n, onCardClick: l } = e,
        c = R(e, ["showPopover", "onViewWishlist", "onCardClick"]);
    let u = i.useRef(null),
        d = (0, s.useHasAnyModalOpen)(),
        f = (0, o.e7)([m.Z], () => m.Z.hasLayers()),
        g = (0, h.NN)({ location: "wishlist-card" }),
        [E, b] = (0, p.US)(g ? [a.z.GAME_SHOP_WISHLIST_POPOVER] : [], y.R.SIDEBAR, !0),
        O = i.useCallback(() => {
            b(y.L.USER_DISMISS), l();
        }, [l, b]),
        v = i.useCallback(() => {
            b(y.L.USER_DISMISS);
        }, [b]),
        S = i.useCallback(() => {
            b(y.L.USER_DISMISS), n();
        }, [n, b]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                _.Z,
                P(A({}, c), {
                    onCardClick: O,
                    ref: u,
                }),
            ),
            t &&
                E === a.z.GAME_SHOP_WISHLIST_POPOVER &&
                !d &&
                !f &&
                (0, r.jsx)(D, {
                    targetElementRef: u,
                    onRequestClose: v,
                    onActionClick: S,
                }),
        ],
    });
}
function L(e, t) {
    let {
            index: n,
            moreCount: i,
            onViewWishlist: o,
            isSingleCard: a = !1,
            profileOwner: s,
            wishlistId: l,
            showTypeTooltip: c = !1,
            cardSize: d,
        } = t,
        p = null != i && i > 0,
        _ = c && !p,
        m = p ? v.intl.string(v.t.TxBQzD) : v.intl.string(v.t.pLPjsb),
        h = {
            title: _ ? v.intl.string(v.t["4yiU7x"]) : m,
            body: _ ? v.intl.string(v.t.ilhtIa) : void 0,
            renderIcon: _ ? f.Q : void 0,
            shouldShow: !0,
        },
        y = () => {
            if (p) return void o();
            (0, g.P)(
                e.sku,
                {
                    isGift: !0,
                    giftRecipient: s,
                    giftingOrigin: O.Wt.USER_PROFILE_WISHLIST,
                },
                { analyticsLocations: [u.Z.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        },
        I = () =>
            (0, r.jsx)(E.A, {
                containerClassName: S.card,
                backgroundImageClassName: S.cardBackgroundImage,
                foregroundImageClassName: S.cardImage,
                sku: e.sku,
                shape: "custom",
            });
    return (0, r.jsx)(
        x,
        {
            wishlistItem: e,
            onCardClick: y,
            tooltipConfig: h,
            shouldScalePreview: !1,
            renderPreview: I,
            moreCount: i,
            isSingleCard: a,
            wishlistId: l,
            showPopover: 0 === n && e.sku.applicationId === b.t9,
            onViewWishlist: o,
            cardSize: d,
        },
        e.skuId,
    );
}
function j(e) {
    let { item: t, card: n, profileOwner: i } = e,
        { data: o } = (0, d.IX)(t.sku.applicationId),
        a = () => {
            (0, g.P)(
                t.sku,
                {
                    isGift: !0,
                    giftRecipient: i,
                    giftingOrigin: O.Wt.USER_PROFILE_WISHLIST,
                },
                { analyticsLocations: [u.Z.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        };
    return (0, r.jsxs)("div", {
        className: I.singleItemContainer,
        children: [
            n,
            (0, r.jsx)("div", {
                className: I.singleItemInfo,
                children: (0, r.jsxs)(c.P3F, {
                    onClick: a,
                    className: I.singleItemName,
                    "aria-label": v.intl.string(v.t.pLPjsb),
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
                            children: v.intl.format(v.t["CqpEC+"], { applicationName: null == o ? void 0 : o.name }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function M(e, t) {
    let { profileOwner: n, analyticsLocations: i, wishlistId: o, onViewWishlist: a } = t,
        s = L(e, {
            index: 0,
            profileOwner: n,
            analyticsLocations: i,
            onViewWishlist: a,
            isSingleCard: !0,
            wishlistId: o,
        });
    return (0, r.jsx)(j, {
        item: e,
        card: s,
        profileOwner: n,
    });
}
