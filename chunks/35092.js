n.d(t, { Ay: () => V });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(575593),
    o = n(635358),
    d = n(417597),
    c = n(554146),
    u = n(192308),
    h = n(342494),
    A = n(435371),
    g = n(793574),
    m = n(688810),
    p = n(587895),
    _ = n(576030),
    x = n(379848),
    f = n(44120),
    E = n(916023),
    C = n(533406),
    I = n(183555);
n(524380);
var S = n(186111),
    b = n(594832),
    N = n(146423),
    T = n(460442),
    j = n(216020),
    v = n(652215),
    y = n(49999),
    R = n(788868),
    O = n(188275),
    L = n(518477),
    D = n(985018),
    M = n(556786),
    G = n(585048);
let U = l.forwardRef(function (e, t) {
    let {
            sku: n,
            index: s,
            totalUnownedWishlistItems: r,
            wishlistOwner: o,
            wishlistId: d,
            style: c,
            tooltipTypeTitle: u,
            showTypeTooltip: h,
            tooltipIcon: g,
            skuPreviewStyle: m,
            singleCardInfo: p,
            onViewWishlist: _,
            onClick: x,
        } = e,
        f = 3 === s ? r - 4 : 0,
        E = 1 === r,
        { trackUserProfileWishlistAction: C } = (0, I.NJ)(),
        S = l.useCallback(() => {
            (C({
                action: f > 0 ? L.Mq.PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD : L.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: f > 0 ? null : n.id,
                wishlistId: d,
                productLines: new Set([n.productLine]),
            }),
            f > 0)
                ? _()
                : x();
        }, [n, f, d, _, x, C]),
        v = l.useMemo(() => (f > 0 ? D.intl.string(D.t.TxBQzD) : h ? u : D.intl.string(D.t.pLPjsb)), [h, u, f]),
        y = l.useMemo(() => (h && 0 === f ? D.intl.string(D.t.ilhtIa) : ""), [h, f]);
    return (0, i.jsxs)("div", {
        className: M.kL,
        ref: t,
        children: [
            (0, i.jsx)(A.un, {
                asContainer: !0,
                asset: f > 0 ? void 0 : g,
                assetSize: b.Q8,
                title: v,
                body: y,
                children: (0, i.jsx)("div", {
                    className: a()(M.Ui, { [M.pr]: E }),
                    children: (0, i.jsx)(N.A, {
                        disableHoverOrFocus: !0,
                        sku: n,
                        user: o,
                        cardStyle: a()(M.Nr, M.Q1, c),
                        skuPreviewStyle: a()(M.ho, m),
                        onClick: S,
                        children: f > 0 && (0, i.jsx)(T.BF, { count: f }),
                    }),
                }),
            }),
            E && (0, i.jsx)(j.A, { title: p.title, description: p.description, onClick: S }),
        ],
    });
});
function P(e) {
    let { targetElementRef: t, onRequestClose: n, onActionClick: l } = e;
    return (0, i.jsx)(h.AM, {
        size: "lg",
        shouldShow: !0,
        position: "left",
        caretConfig: { align: "center" },
        gradientColor: "blue",
        align: "center",
        onRequestClose: n,
        actions: [{ text: D.intl.string(D.t.uB4Gax), variant: "primary", onClick: l }],
        targetElementRef: t,
        title: D.intl.string(D.t.qh9t5c),
        body: D.intl.string(D.t.iM6fxV),
        graphic: { type: "image", src: G.A },
    });
}
function k(e) {
    let { sku: t, wishlistOwner: n, index: s, onViewWishlist: a, analyticsLocations: r, ...o } = e,
        h = (0, d.bG)([p.A], () => p.A.getApplication(t.applicationId)),
        { analyticsLocations: A } = (0, m.Ay)(
            ...(r ?? []),
            g.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        f = (0, E.Jw)({ location: "dm-side-panel-social-layer-storefront-wishlist-item-card" }),
        I = (0, u.useHasAnyModalOpen)(),
        b = (0, d.bG)([S.A], () => S.A.hasLayers()),
        [N, T] = (0, x.kn)(
            !f || 0 !== s || t.applicationId !== O.XR || I || b ? [] : [c.M.GAME_SHOP_WISHLIST_POPOVER],
            y.m.SIDEBAR,
            !0,
        ),
        j = l.useRef(null),
        v = l.useCallback(() => {
            T(y.i.USER_DISMISS),
                (0, C.a)(
                    t,
                    { isGift: !0, giftRecipient: n, giftingOrigin: R.vQ.USER_PROFILE_WISHLIST },
                    { analyticsLocations: A },
                );
        }, [T, t, n, A]),
        L = l.useCallback(() => {
            T(y.i.USER_DISMISS);
        }, [T]),
        M = l.useCallback(() => {
            T(y.i.USER_DISMISS), a();
        }, [a, T]),
        G = l.useMemo(
            () => ({ title: t.name, description: D.intl.format(D.t["CqpEC+"], { applicationName: h?.name }) }),
            [t.name, h?.name],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(U, {
                ref: j,
                sku: t,
                index: s,
                onViewWishlist: a,
                singleCardInfo: G,
                analyticsLocations: A,
                wishlistOwner: n,
                onClick: v,
                tooltipTypeTitle: D.intl.string(D.t["4yiU7x"]),
                tooltipIcon: (0, i.jsx)(_.mW, { application: h }),
                ...o,
            }),
            N === c.M.GAME_SHOP_WISHLIST_POPOVER &&
                (0, i.jsx)(P, { targetElementRef: j, onRequestClose: L, onActionClick: M }),
        ],
    });
}
function w(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: s, showTypeTooltip: d, ...c } = e,
        u = l.useCallback(() => {
            (0, f.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: s ?? [],
                giftRecipient: n,
                variantsReturnStyle: o.g.VARIANTS_GROUP,
            });
        }, [t.id, n, s]),
        h = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case r.R.PROFILE_EFFECT:
                    return;
                case r.R.AVATAR_DECORATION:
                    return a()(M.ML, M._P);
                default:
                    return a()(M.ML, M.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]),
        A = l.useMemo(
            () => ({
                title: t.name,
                description: (function (e) {
                    if (e.tenantMetadata?.collectibles == null) return "";
                    if (null != e.bundledSkus && e.bundledSkus.length > 0) return D.intl.string(D.t.Zr5tjn);
                    switch (e.tenantMetadata.collectibles.type) {
                        case r.R.AVATAR_DECORATION:
                            return D.intl.string(D.t["7v0T9P"]);
                        case r.R.PROFILE_EFFECT:
                            return D.intl.string(D.t.wR5wOo);
                        case r.R.NAMEPLATE:
                            return D.intl.string(D.t.x5CoXR);
                        default:
                            return "";
                    }
                })(t),
            }),
            [t],
        );
    return (0, i.jsx)(U, {
        sku: t,
        singleCardInfo: A,
        wishlistOwner: n,
        analyticsLocations: s,
        onClick: u,
        showTypeTooltip: d,
        skuPreviewStyle: h,
        tooltipTypeTitle: D.intl.string(D.t.HFhcqh),
        tooltipIcon: d ? (0, i.jsx)(_.mW, {}) : void 0,
        ...c,
    });
}
function V(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case v.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(k, { sku: t, ...n });
        case v.EZt.COLLECTIBLES:
            return (0, i.jsx)(w, { sku: t, ...n });
        default:
            return null;
    }
}
