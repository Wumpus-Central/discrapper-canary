n.d(t, {
    Ay: () => w,
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
    u = n(435371),
    d = n(793574),
    p = n(688810),
    h = n(587895),
    g = n(576030),
    f = n(44120),
    m = n(533406),
    b = n(183555);
n(524380);
var A = n(594832),
    y = n(146423),
    O = n(460442),
    j = n(216020),
    x = n(652215),
    _ = n(788868),
    v = n(518477),
    E = n(985018),
    C = n(556786);

function S(e) {
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

function I(e, t) {
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

function N(e) {
    let {
            sku: t,
            index: n,
            totalUnownedWishlistItems: i,
            wishlistOwner: a,
            wishlistId: o,
            style: c,
            tooltipTypeTitle: d,
            showTypeTooltip: p,
            tooltipIcon: h,
            skuPreviewStyle: g,
            singleCardInfo: f,
            onViewWishlist: m,
            onClick: x,
        } = e,
        _ = 3 === n ? i - 4 : 0,
        S = 1 === i,
        { trackUserProfileWishlistAction: I } = (0, b.NJ)(),
        N = l.useCallback(() => {
            (I({
                action: _ > 0 ? v.Mq.PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD : v.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: _ > 0 ? null : t.id,
                wishlistId: o,
                productLines: new Set([t.productLine]),
            }),
            _ > 0)
                ? m()
                : x();
        }, [t, _, o, m, x, I]),
        T = l.useMemo(() => (_ > 0 ? E.intl.string(E.t.TxBQzD) : p ? d : E.intl.string(E.t.pLPjsb)), [p, d, _]),
        P = l.useMemo(() => (p && 0 === _ ? E.intl.string(E.t.ilhtIa) : ""), [p, _]);
    return (0, r.jsxs)("div", {
        className: C.kL,
        children: [
            (0, r.jsx)(u.un, {
                asContainer: !0,
                asset: _ > 0 ? void 0 : h,
                assetSize: A.Q8,
                title: T,
                body: P,
                children: (0, r.jsx)("div", {
                    className: s()(C.Ui, {
                        [C.pr]: S,
                    }),
                    children: (0, r.jsx)(y.A, {
                        disableHoverOrFocus: !0,
                        sku: t,
                        user: a,
                        cardStyle: s()(C.Nr, C.Q1, c),
                        skuPreviewStyle: s()(C.ho, g),
                        onClick: N,
                        children:
                            _ > 0 &&
                            (0, r.jsx)(O.BF, {
                                count: _,
                            }),
                    }),
                }),
            }),
            S &&
                (0, r.jsx)(j.A, {
                    title: f.title,
                    description: f.description,
                    onClick: N,
                }),
        ],
    });
}

function T(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i } = e,
        s = I(e, ["sku", "wishlistOwner", "analyticsLocations"]),
        a = (0, c.bG)([h.A], () => h.A.getApplication(t.applicationId)),
        { analyticsLocations: o } = (0, p.Ay)(
            ...(null != i ? i : []),
            d.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        u = l.useCallback(() => {
            (0, m.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: n,
                    giftingOrigin: _.vQ.USER_PROFILE_WISHLIST,
                },
                {
                    analyticsLocations: o,
                },
            );
        }, [t, n, o]),
        f = l.useMemo(
            () => ({
                title: t.name,
                description: E.intl.format(E.t["CqpEC+"], {
                    applicationName: null == a ? void 0 : a.name,
                }),
            }),
            [t.name, null == a ? void 0 : a.name],
        );
    return (0, r.jsx)(
        N,
        S(
            {
                sku: t,
                singleCardInfo: f,
                analyticsLocations: o,
                wishlistOwner: n,
                onClick: u,
                tooltipTypeTitle: E.intl.string(E.t["4yiU7x"]),
                tooltipIcon: (0, r.jsx)(g.mW, {
                    application: a,
                }),
            },
            s,
        ),
    );
}

function P(e) {
    var t, n;
    let { sku: i, wishlistOwner: c, analyticsLocations: u, showTypeTooltip: d } = e,
        p = I(e, ["sku", "wishlistOwner", "analyticsLocations", "showTypeTooltip"]),
        h = l.useCallback(() => {
            (0, f.A)({
                skuId: i.id,
                isGift: !0,
                giftingOrigin: _.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: null != u ? u : [],
                giftRecipient: c,
                variantsReturnStyle: o.g.VARIANTS_GROUP,
            });
        }, [i.id, c, u]),
        m = l.useMemo(() => {
            var e, t;
            switch (null == i || null == (t = i.tenantMetadata) || null == (e = t.collectibles) ? void 0 : e.type) {
                case a.R.PROFILE_EFFECT:
                    return;
                case a.R.AVATAR_DECORATION:
                    return s()(C.ML, C._P);
                default:
                    return s()(C.ML, C.ZY);
            }
        }, [null == i || null == (n = i.tenantMetadata) || null == (t = n.collectibles) ? void 0 : t.type]),
        b = l.useMemo(
            () => ({
                title: i.name,
                description: (function (e) {
                    var t;
                    if ((null == (t = e.tenantMetadata) ? void 0 : t.collectibles) == null) return "";
                    if (null != e.bundledSkus && e.bundledSkus.length > 0) return E.intl.string(E.t.Zr5tjn);
                    switch (e.tenantMetadata.collectibles.type) {
                        case a.R.AVATAR_DECORATION:
                            return E.intl.string(E.t["7v0T9P"]);
                        case a.R.PROFILE_EFFECT:
                            return E.intl.string(E.t.wR5wOo);
                        case a.R.NAMEPLATE:
                            return E.intl.string(E.t.x5CoXR);
                        default:
                            return "";
                    }
                })(i),
            }),
            [i],
        );
    return (0, r.jsx)(
        N,
        S(
            {
                sku: i,
                singleCardInfo: b,
                wishlistOwner: c,
                analyticsLocations: u,
                onClick: h,
                showTypeTooltip: d,
                skuPreviewStyle: m,
                tooltipTypeTitle: E.intl.string(E.t.HFhcqh),
                tooltipIcon: d ? (0, r.jsx)(g.mW, {}) : void 0,
            },
            p,
        ),
    );
}

function w(e) {
    let { sku: t } = e,
        n = I(e, ["sku"]);
    switch (t.productLine) {
        case x.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, r.jsx)(
                T,
                S(
                    {
                        sku: t,
                    },
                    n,
                ),
            );
        case x.EZt.COLLECTIBLES:
            return (0, r.jsx)(
                P,
                S(
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
