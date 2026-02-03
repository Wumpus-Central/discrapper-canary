n.d(t, {
    Ay: () => H,
}),
    n(896048),
    n(228524);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(575593),
    o = n(635358),
    c = n(417597),
    u = n(554146),
    d = n(192308),
    p = n(342494),
    h = n(435371),
    g = n(793574),
    f = n(688810),
    m = n(587895),
    b = n(576030),
    A = n(379848),
    y = n(44120),
    O = n(916023),
    j = n(533406),
    x = n(183555);
n(524380);
var _ = n(186111),
    v = n(594832),
    E = n(146423),
    C = n(460442),
    S = n(216020),
    I = n(652215),
    N = n(49999),
    T = n(788868),
    P = n(188275),
    w = n(518477),
    R = n(985018),
    D = n(556786),
    L = n(585048);

function M(e) {
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
}

function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++)
                (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i;
}
let k = l.forwardRef(function (e, t) {
    let {
            sku: n,
            index: i,
            totalUnownedWishlistItems: a,
            wishlistOwner: o,
            wishlistId: c,
            style: u,
            tooltipTypeTitle: d,
            showTypeTooltip: p,
            tooltipIcon: g,
            skuPreviewStyle: f,
            singleCardInfo: m,
            onViewWishlist: b,
            onClick: A,
        } = e,
        y = 3 === i ? a - 4 : 0,
        O = 1 === a,
        { trackUserProfileWishlistAction: j } = (0, x.NJ)(),
        _ = l.useCallback(() => {
            (j({
                action: y > 0 ? w.Mq.PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD : w.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: y > 0 ? null : n.id,
                wishlistId: c,
                productLines: new Set([n.productLine]),
            }),
            y > 0)
                ? b()
                : A();
        }, [n, y, c, b, A, j]),
        I = l.useMemo(() => (y > 0 ? R.intl.string(R.t.TxBQzD) : p ? d : R.intl.string(R.t.pLPjsb)), [p, d, y]),
        N = l.useMemo(() => (p && 0 === y ? R.intl.string(R.t.ilhtIa) : ""), [p, y]);
    return (0, r.jsxs)("div", {
        className: D.kL,
        ref: t,
        children: [
            (0, r.jsx)(h.un, {
                asContainer: !0,
                asset: y > 0 ? void 0 : g,
                assetSize: v.Q8,
                title: I,
                body: N,
                children: (0, r.jsx)("div", {
                    className: s()(D.Ui, {
                        [D.pr]: O,
                    }),
                    children: (0, r.jsx)(E.A, {
                        disableHoverOrFocus: !0,
                        sku: n,
                        user: o,
                        cardStyle: s()(D.Nr, D.Q1, u),
                        skuPreviewStyle: s()(D.ho, f),
                        onClick: _,
                        children:
                            y > 0 &&
                            (0, r.jsx)(C.BF, {
                                count: y,
                            }),
                    }),
                }),
            }),
            O &&
                (0, r.jsx)(S.A, {
                    title: m.title,
                    description: m.description,
                    onClick: _,
                }),
        ],
    });
});

function U(e) {
    let { targetElementRef: t, onRequestClose: n, onActionClick: l } = e;
    return (0, r.jsx)(p.AM, {
        size: "lg",
        shouldShow: !0,
        position: "left",
        caretConfig: {
            align: "center",
        },
        gradientColor: "blue",
        align: "center",
        onRequestClose: n,
        actions: [
            {
                text: R.intl.string(R.t.uB4Gax),
                variant: "primary",
                onClick: l,
            },
        ],
        targetElementRef: t,
        title: R.intl.string(R.t.qh9t5c),
        body: R.intl.string(R.t.iM6fxV),
        graphic: {
            type: "image",
            src: L.A,
        },
    });
}

function V(e) {
    let { sku: t, wishlistOwner: n, index: i, onViewWishlist: s, analyticsLocations: a } = e,
        o = G(e, ["sku", "wishlistOwner", "index", "onViewWishlist", "analyticsLocations"]),
        p = (0, c.bG)([m.A], () => m.A.getApplication(t.applicationId)),
        { analyticsLocations: h } = (0, f.Ay)(
            ...(null != a ? a : []),
            g.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        y = (0, O.Jw)({
            location: "dm-side-panel-social-layer-storefront-wishlist-item-card",
        }),
        x = (0, d.useHasAnyModalOpen)(),
        v = (0, c.bG)([_.A], () => _.A.hasLayers()),
        [E, C] = (0, A.kn)(
            !y || 0 !== i || t.applicationId !== P.XR || x || v ? [] : [u.M.GAME_SHOP_WISHLIST_POPOVER],
            N.m.SIDEBAR,
            !0,
        ),
        S = l.useRef(null),
        I = l.useCallback(() => {
            C(N.i.USER_DISMISS),
                (0, j.a)(
                    t,
                    {
                        isGift: !0,
                        giftRecipient: n,
                        giftingOrigin: T.vQ.USER_PROFILE_WISHLIST,
                    },
                    {
                        analyticsLocations: h,
                    },
                );
        }, [C, t, n, h]),
        w = l.useCallback(() => {
            C(N.i.USER_DISMISS);
        }, [C]),
        D = l.useCallback(() => {
            C(N.i.USER_DISMISS), s();
        }, [s, C]),
        L = l.useMemo(
            () => ({
                title: t.name,
                description: R.intl.format(R.t["CqpEC+"], {
                    applicationName: null == p ? void 0 : p.name,
                }),
            }),
            [t.name, null == p ? void 0 : p.name],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                k,
                M(
                    {
                        ref: S,
                        sku: t,
                        index: i,
                        onViewWishlist: s,
                        singleCardInfo: L,
                        analyticsLocations: h,
                        wishlistOwner: n,
                        onClick: I,
                        tooltipTypeTitle: R.intl.string(R.t["4yiU7x"]),
                        tooltipIcon: (0, r.jsx)(b.mW, {
                            application: p,
                        }),
                    },
                    o,
                ),
            ),
            E === u.M.GAME_SHOP_WISHLIST_POPOVER &&
                (0, r.jsx)(U, {
                    targetElementRef: S,
                    onRequestClose: w,
                    onActionClick: D,
                }),
        ],
    });
}

function B(e) {
    var t, n;
    let { sku: i, wishlistOwner: c, analyticsLocations: u, showTypeTooltip: d } = e,
        p = G(e, ["sku", "wishlistOwner", "analyticsLocations", "showTypeTooltip"]),
        h = l.useCallback(() => {
            (0, y.A)({
                skuId: i.id,
                isGift: !0,
                giftingOrigin: T.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: null != u ? u : [],
                giftRecipient: c,
                variantsReturnStyle: o.g.VARIANTS_GROUP,
            });
        }, [i.id, c, u]),
        g = l.useMemo(() => {
            var e, t;
            switch (null == i || null == (t = i.tenantMetadata) || null == (e = t.collectibles) ? void 0 : e.type) {
                case a.R.PROFILE_EFFECT:
                    return;
                case a.R.AVATAR_DECORATION:
                    return s()(D.ML, D._P);
                default:
                    return s()(D.ML, D.ZY);
            }
        }, [null == i || null == (n = i.tenantMetadata) || null == (t = n.collectibles) ? void 0 : t.type]),
        f = l.useMemo(
            () => ({
                title: i.name,
                description: (function (e) {
                    var t;
                    if ((null == (t = e.tenantMetadata) ? void 0 : t.collectibles) == null) return "";
                    if (null != e.bundledSkus && e.bundledSkus.length > 0) return R.intl.string(R.t.Zr5tjn);
                    switch (e.tenantMetadata.collectibles.type) {
                        case a.R.AVATAR_DECORATION:
                            return R.intl.string(R.t["7v0T9P"]);
                        case a.R.PROFILE_EFFECT:
                            return R.intl.string(R.t.wR5wOo);
                        case a.R.NAMEPLATE:
                            return R.intl.string(R.t.x5CoXR);
                        default:
                            return "";
                    }
                })(i),
            }),
            [i],
        );
    return (0, r.jsx)(
        k,
        M(
            {
                sku: i,
                singleCardInfo: f,
                wishlistOwner: c,
                analyticsLocations: u,
                onClick: h,
                showTypeTooltip: d,
                skuPreviewStyle: g,
                tooltipTypeTitle: R.intl.string(R.t.HFhcqh),
                tooltipIcon: d ? (0, r.jsx)(b.mW, {}) : void 0,
            },
            p,
        ),
    );
}

function H(e) {
    let { sku: t } = e,
        n = G(e, ["sku"]);
    switch (t.productLine) {
        case I.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, r.jsx)(
                V,
                M(
                    {
                        sku: t,
                    },
                    n,
                ),
            );
        case I.EZt.COLLECTIBLES:
            return (0, r.jsx)(
                B,
                M(
                    {
                        sku: t,
                    },
                    n,
                ),
            );
        default:
            return null;
    }
}
