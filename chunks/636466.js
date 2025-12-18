n.d(t, {
    B: () => k,
    J: () => j,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(704215),
    s = n(952265),
    l = n(907862),
    c = n(481060),
    u = n(100527),
    d = n(728345),
    f = n(525302),
    p = n(243778),
    _ = n(766717),
    m = n(602733),
    h = n(819640),
    g = n(699955),
    E = n(594914),
    b = n(848118),
    y = n(582113),
    O = n(921944),
    v = n(474936),
    S = n(388032),
    I = n(466953),
    T = n(788015),
    C = n(993516);
function A(e, t, n) {
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
function N(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = D(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function x(e) {
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
                text: S.intl.string(S.t.uB4Gax),
                variant: "primary",
                onClick: i,
            },
        ],
        targetElementRef: t,
        title: S.intl.string(S.t.qh9t5c),
        body: S.intl.string(S.t.iM6fxV),
        graphic: {
            type: "image",
            src: C.Z,
        },
    });
}
function L(e) {
    var { showPopover: t, onViewWishlist: n, onCardClick: l } = e,
        c = w(e, ["showPopover", "onViewWishlist", "onCardClick"]);
    let u = i.useRef(null),
        d = (0, s.useHasAnyModalOpen)(),
        f = (0, a.e7)([h.Z], () => h.Z.hasLayers()),
        m = (0, g.NN)({ location: "wishlist-card" }),
        [E, b] = (0, p.US)(m ? [o.z.GAME_SHOP_WISHLIST_POPOVER] : [], O.R.SIDEBAR, !0),
        y = i.useCallback(() => {
            b(O.L.USER_DISMISS), l();
        }, [l, b]),
        v = i.useCallback(() => {
            b(O.L.USER_DISMISS);
        }, [b]),
        S = i.useCallback(() => {
            b(O.L.USER_DISMISS), n();
        }, [n, b]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                _.Z,
                R(N({}, c), {
                    onCardClick: y,
                    ref: u,
                }),
            ),
            t &&
                E === o.z.GAME_SHOP_WISHLIST_POPOVER &&
                !d &&
                !f &&
                (0, r.jsx)(x, {
                    targetElementRef: u,
                    onRequestClose: v,
                    onActionClick: S,
                }),
        ],
    });
}
function j(e, t) {
    let {
            index: n,
            moreCount: i,
            onViewWishlist: a,
            isSingleCard: o = !1,
            profileOwner: s,
            wishlistId: l,
            cardSize: c,
            analyticsLocations: d,
            itemSource: p,
        } = t,
        _ = null != i && i > 0,
        h = p === m.lr.POPULAR ? S.intl.string(S.t.Ig6VDH) : S.intl.string(S.t.ilhtIa),
        g = {
            title: _ ? S.intl.string(S.t.TxBQzD) : S.intl.string(S.t["4yiU7x"]),
            body: _ ? void 0 : h,
            renderIcon: _ ? void 0 : f.Q,
            shouldShow: !0,
        },
        O = () => {
            if (_) return void a();
            (0, E.P)(
                e.sku,
                {
                    isGift: !0,
                    giftRecipient: s,
                    giftingOrigin: v.Wt.USER_PROFILE_WISHLIST,
                },
                {
                    analyticsLocations: [...d, u.Z.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON],
                },
            );
        },
        T = () =>
            (0, r.jsx)(b.A, {
                containerClassName: I.card,
                backgroundImageClassName: I.cardBackgroundImage,
                foregroundImageClassName: I.cardImage,
                sku: e.sku,
                shape: "custom",
            });
    return (0, r.jsx)(
        L,
        {
            wishlistItem: e,
            onCardClick: O,
            tooltipConfig: g,
            shouldScalePreview: !1,
            renderPreview: T,
            moreCount: i,
            isSingleCard: o,
            wishlistId: l,
            showPopover: 0 === n && e.sku.applicationId === y.t9,
            onViewWishlist: a,
            cardSize: c,
            itemSource: p,
        },
        e.skuId,
    );
}
function M(e) {
    let { item: t, card: n, analyticsLocations: i, profileOwner: a } = e,
        { data: o } = (0, d.IX)(t.sku.applicationId),
        s = () => {
            (0, E.P)(
                t.sku,
                {
                    isGift: !0,
                    giftRecipient: a,
                    giftingOrigin: v.Wt.USER_PROFILE_WISHLIST,
                },
                {
                    analyticsLocations: [...i, u.Z.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON],
                },
            );
        };
    return (0, r.jsxs)("div", {
        className: T.singleItemContainer,
        children: [
            n,
            (0, r.jsx)("div", {
                className: T.singleItemInfo,
                children: (0, r.jsxs)(c.P3F, {
                    onClick: s,
                    className: T.singleItemName,
                    "aria-label": S.intl.string(S.t.pLPjsb),
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
                            children: S.intl.format(S.t["CqpEC+"], { applicationName: null == o ? void 0 : o.name }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function k(e, t) {
    let { profileOwner: n, analyticsLocations: i, wishlistId: a, onViewWishlist: o } = t,
        s = j(e, {
            index: 0,
            profileOwner: n,
            analyticsLocations: i,
            onViewWishlist: o,
            isSingleCard: !0,
            wishlistId: a,
        });
    return (0, r.jsx)(M, {
        item: e,
        card: s,
        profileOwner: n,
        analyticsLocations: i,
    });
}
