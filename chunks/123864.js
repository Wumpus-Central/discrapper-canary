t.d(s, { A: () => Q });
var i = t(627968),
    n = t(64700),
    l = t(503698),
    a = t.n(l),
    o = t(17928),
    r = t(492518),
    u = t(287809),
    d = t(299679);
t(667532);
var c = t(840411),
    m = t(909536),
    p = t(862772),
    f = t(202541),
    g = t(561794),
    h = t(132500),
    S = t(172218),
    w = t(575593),
    I = t(691540),
    M = t(857250),
    k = t(97483),
    _ = t(765178),
    E = t(444927),
    A = t(793574),
    v = t(688810),
    L = t(274681),
    y = t(31969),
    C = t(183555),
    x = t(174459),
    b = t(661492),
    D = t(808247),
    U = t(95817),
    j = t(212387),
    R = t(74135),
    O = t(460442),
    T = t(699976),
    G = t(652215),
    F = t(518477),
    P = t(375708),
    N = t(316587),
    H = t(997990);
let B = T.Z.SIZE_90;
function Z(e) {
    let {
            sku: s,
            wishlistOwner: t,
            style: l,
            skuPreviewStyle: o,
            setIsHoveringOrFocusing: r,
            onClick: u,
            "aria-label": c,
            wishlistId: m,
            children: p,
        } = e,
        { trackUserProfileWishlistAction: f } = (0, C.NJ)(),
        g = (0, d.Ar)(),
        w = (0, E.A)(() => (0, h.A)()),
        { handleVisibilityChange: I } = (0, U.G)(w),
        M = (0, S.K)(I, 0.5, g?.surface != null),
        k = n.useCallback(() => {
            f({
                wishlistId: m,
                action: F.Mq.WISHLIST_ITEM_CLICKED,
                skuId: s.id,
                productLines: new Set([s.productLine]),
            }),
                g?.surface != null &&
                    x.default.track(G.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: s.id,
                        wishlist_id: m,
                        wishlist_owner_id: g.wishlistOwnerId,
                        surface: g.surface,
                        position_in_section: g.positionInSection,
                        item_source: g.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: s.productLine,
                        card_id: w,
                        impression_session_id: g.impressionSessionId,
                        location_stack: g.analyticsLocations,
                    }),
                u();
        }, [u, s.id, s.productLine, f, m, g, w]);
    return (0, i.jsx)("div", {
        ref: M,
        children: (0, i.jsx)(j.A, {
            sku: s,
            user: t,
            spec: B,
            cardStyle: a()(N.Nr, l),
            skuPreviewStyle: a()(N.ev, o),
            onHoverOrFocusChange: r,
            onClick: k,
            "aria-label": c,
            children: p,
        }),
    });
}
function W(e) {
    let {
            sku: s,
            analyticsLocations: t,
            isHoveringOrFocusing: l,
            handleOpenUserProfileModal: o,
            skuPreviewStyle: r,
            wishlistOwner: u,
            onAddSuccess: d,
            promotion: c,
            ...m
        } = e,
        [p, f] = n.useState(!1),
        g = n.useCallback(async () => {
            if (!p) {
                f(!0);
                try {
                    await D.A.addSkuToWishlist(s.id, t), d?.(), o?.({ tabSection: F.RP.WISHLIST });
                } catch (e) {
                    (0, I.P0)((0, M.o)(P.intl.string(P.t.F8FvUy), k.Ck.FAILURE)),
                        _.O.announce(P.intl.string(P.t.F8FvUy));
                } finally {
                    f(!1);
                }
            }
        }, [s, t, p, o, d]),
        h = n.useMemo(() => a()({ [N.zW]: l || p }, r), [l, p, r]);
    return (0, i.jsxs)(Z, {
        "aria-label": P.intl.formatToPlainString(P.t.xRjJBe, { productName: (0, b.TC)(s) }),
        sku: s,
        wishlistOwner: u,
        skuPreviewStyle: h,
        onClick: g,
        isHoveringOrFocusing: l,
        ...m,
        children: [(0, i.jsx)(O.oU, { isHoveringOrFocusing: l, loading: p }), !l && !p && c],
    });
}
function V(e) {
    let { sku: s, analyticsLocations: t, ...n } = e,
        { analyticsLocations: l } = (0, v.Ay)(...(t ?? []), A.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        a = (0, y.F)("sku_purchase_badge", { applicationId: s.applicationId, skuId: s.id });
    return (0, i.jsx)(W, {
        sku: s,
        analyticsLocations: l,
        promotion: null != a ? (0, i.jsx)(R.s, { spec: B, icon: a.Icon, tooltipText: a.tooltip }) : null,
        ...n,
    });
}
function Y(e) {
    let { sku: s, ...t } = e,
        l = n.useMemo(() => {
            switch (s?.tenantMetadata?.collectibles?.type) {
                case w.R.PROFILE_EFFECT:
                case w.R.NAMEPLATE:
                case w.R.BUNDLE:
                case w.R.PROFILE_FRAME:
                    return;
                case w.R.AVATAR_DECORATION:
                    return N.ML;
                default:
                    return a()(N.ML, N.ZY);
            }
        }, [s?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(W, { sku: s, skuPreviewStyle: l, ...t });
}
function K(e) {
    let { sku: s, ...t } = e;
    return (0, i.jsx)(W, { sku: s, skuPreviewStyle: H.MO, onAddSuccess: L.w, ...t });
}
function J(e) {
    let { sku: s, ...t } = e,
        [l, a] = n.useState(!1);
    switch (s.productLine) {
        case G.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(V, { sku: s, isHoveringOrFocusing: l, setIsHoveringOrFocusing: a, ...t });
        case G.EZt.COLLECTIBLES:
            return (0, i.jsx)(Y, { sku: s, isHoveringOrFocusing: l, setIsHoveringOrFocusing: a, ...t });
        case G.EZt.PREMIUM:
            return (0, i.jsx)(K, { sku: s, isHoveringOrFocusing: l, setIsHoveringOrFocusing: a, ...t });
        default:
            return null;
    }
}
var q = t(817990);
function z(e) {
    let { wishlist: s, handleOpenUserProfileModal: t, analyticsLocations: n, className: l, isLoading: c, items: m } = e,
        p = (0, o.bG)([u.default], () => u.default.getUser(s?.userId));
    return c
        ? (0, i.jsx)("div", { className: q.g4, children: (0, i.jsx)(r.k, {}) })
        : 0 === m.length
          ? null
          : (0, i.jsx)("ul", {
                className: a()(q.Vg, l),
                children: m.map((e, l) => {
                    let { sku: a, itemSource: o } = e;
                    return (0, i.jsx)(
                        d.dB,
                        {
                            newValue: { positionInSection: l, skuId: a.id, itemSource: o, productLine: a.productLine },
                            children: (0, i.jsx)(J, {
                                sku: a,
                                wishlistId: s?.id,
                                wishlistOwner: p,
                                handleOpenUserProfileModal: t,
                                analyticsLocations: n,
                            }),
                        },
                        a.id,
                    );
                }),
            });
}
function Q(e) {
    let { userId: s, wishlist: t, numWishlistItemsToRecommend: l, maxWishlistItemsToShow: a, ...o } = e,
        { items: r, status: u } = (function (e) {
            let {
                    userId: s,
                    wishlist: t,
                    numWishlistItemsToRecommend: i,
                    maxWishlistItemsToShow: l = i,
                    source: a,
                } = e,
                { recommendations: o, status: r } = (0, p.Ul)({ userId: s, numItems: i, source: a }),
                u = (0, m.Gh)("add_to_wishlist_grid_suggested_nitro"),
                d = n.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
                g = u && !d.has(f.pe.TIER_2);
            return {
                items: n.useMemo(() => {
                    let e = o.filter((e) => !d.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return g && e.unshift({ sku: (0, c.rI)(), itemSource: "takeover" }), e.slice(0, l);
                }, [o, d, g, l]),
                status: r,
            };
        })({
            userId: s,
            wishlist: t,
            numWishlistItemsToRecommend: l,
            maxWishlistItemsToShow: a,
            source: g.B5.USER_PROFILE,
        });
    return (0, i.jsx)(z, { isLoading: "loading" === u, items: r, wishlist: t, ...o });
}
