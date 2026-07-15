"use strict";
n.d(t, { A: () => X });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(492518),
    d = n(287809),
    c = n(299679);
n(667532);
var u = n(840411),
    _ = n(909536),
    E = n(862772),
    A = n(202541),
    h = n(561794),
    I = n(132500),
    f = n(172218),
    p = n(575593),
    T = n(691540),
    m = n(857250),
    g = n(97483),
    S = n(765178),
    N = n(444927),
    C = n(793574),
    R = n(688810),
    O = n(274681),
    L = n(31969),
    D = n(183555),
    y = n(174459),
    v = n(661492),
    b = n(808247),
    M = n(95817),
    P = n(212387),
    U = n(74135),
    w = n(460442),
    G = n(699976),
    x = n(652215),
    k = n(518477),
    F = n(375708),
    V = n(316587),
    B = n(997990);
let H = G.Z.SIZE_90;
function j(e) {
    let {
            sku: t,
            wishlistOwner: n,
            style: a,
            skuPreviewStyle: l,
            setIsHoveringOrFocusing: o,
            onClick: d,
            "aria-label": u,
            wishlistId: _,
            children: E,
        } = e,
        { trackUserProfileWishlistAction: A } = (0, D.NJ)(),
        h = (0, c.Ar)(),
        p = (0, N.A)(() => (0, I.A)()),
        { handleVisibilityChange: T } = (0, M.G)(p),
        m = (0, f.K)(T, 0.5, h?.surface != null),
        g = r.useCallback(() => {
            A({
                wishlistId: _,
                action: k.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                h?.surface != null &&
                    y.default.track(x.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: t.id,
                        wishlist_id: _,
                        wishlist_owner_id: h.wishlistOwnerId,
                        surface: h.surface,
                        position_in_section: h.positionInSection,
                        item_source: h.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: t.productLine,
                        card_id: p,
                        impression_session_id: h.impressionSessionId,
                        location_stack: h.analyticsLocations,
                    }),
                d();
        }, [d, t.id, t.productLine, A, _, h, p]);
    return (0, i.jsx)("div", {
        ref: m,
        children: (0, i.jsx)(P.A, {
            sku: t,
            user: n,
            spec: H,
            cardStyle: s()(V.Nr, a),
            skuPreviewStyle: s()(V.ev, l),
            onHoverOrFocusChange: o,
            onClick: g,
            "aria-label": u,
            children: E,
        }),
    });
}
function W(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: a,
            handleOpenUserProfileModal: l,
            skuPreviewStyle: o,
            wishlistOwner: d,
            onAddSuccess: c,
            promotion: u,
            ..._
        } = e,
        [E, A] = r.useState(!1),
        h = r.useCallback(async () => {
            if (!E) {
                A(!0);
                try {
                    await b.A.addSkuToWishlist(t.id, n), c?.(), l?.({ tabSection: k.RP.WISHLIST });
                } catch (e) {
                    (0, T.P0)((0, m.o)(F.intl.string(F.t.F8FvUy), g.Ck.FAILURE)),
                        S.O.announce(F.intl.string(F.t.F8FvUy));
                } finally {
                    A(!1);
                }
            }
        }, [t, n, E, l, c]),
        I = r.useMemo(() => s()({ [V.zW]: a || E }, o), [a, E, o]);
    return (0, i.jsxs)(j, {
        "aria-label": F.intl.formatToPlainString(F.t.xRjJBe, { productName: (0, v.TC)(t) }),
        sku: t,
        wishlistOwner: d,
        skuPreviewStyle: I,
        onClick: h,
        isHoveringOrFocusing: a,
        ..._,
        children: [(0, i.jsx)(w.oU, { isHoveringOrFocusing: a, loading: E }), !a && !E && u],
    });
}
function Y(e) {
    let { sku: t, analyticsLocations: n, ...r } = e,
        { analyticsLocations: a } = (0, R.Ay)(...(n ?? []), C.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        s = (0, L.F)("sku_purchase_badge", { applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(W, {
        sku: t,
        analyticsLocations: a,
        promotion: null != s ? (0, i.jsx)(U.s, { spec: H, icon: s.Icon, tooltipText: s.tooltip }) : null,
        ...r,
    });
}
function K(e) {
    let { sku: t, ...n } = e,
        a = r.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case p.R.PROFILE_EFFECT:
                case p.R.NAMEPLATE:
                case p.R.BUNDLE:
                case p.R.PROFILE_FRAME:
                    return;
                case p.R.AVATAR_DECORATION:
                    return V.ML;
                default:
                    return s()(V.ML, V.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(W, { sku: t, skuPreviewStyle: a, ...n });
}
function $(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(W, { sku: t, skuPreviewStyle: B.MO, onAddSuccess: O.w, ...n });
}
function z(e) {
    let { sku: t, ...n } = e,
        [a, s] = r.useState(!1);
    switch (t.productLine) {
        case x.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(Y, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        case x.EZt.COLLECTIBLES:
            return (0, i.jsx)(K, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        case x.EZt.PREMIUM:
            return (0, i.jsx)($, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
var q = n(817990);
function Z(e) {
    let { wishlist: t, handleOpenUserProfileModal: n, analyticsLocations: r, className: a, isLoading: u, items: _ } = e,
        E = (0, l.bG)([d.default], () => d.default.getUser(t?.userId));
    return u
        ? (0, i.jsx)("div", { className: q.g4, children: (0, i.jsx)(o.k, {}) })
        : 0 === _.length
          ? null
          : (0, i.jsx)("ul", {
                className: s()(q.Vg, a),
                children: _.map((e, a) => {
                    let { sku: s, itemSource: l } = e;
                    return (0, i.jsx)(
                        c.dB,
                        {
                            newValue: { positionInSection: a, skuId: s.id, itemSource: l, productLine: s.productLine },
                            children: (0, i.jsx)(z, {
                                sku: s,
                                wishlistId: t?.id,
                                wishlistOwner: E,
                                handleOpenUserProfileModal: n,
                                analyticsLocations: r,
                            }),
                        },
                        s.id,
                    );
                }),
            });
}
function X(e) {
    let { userId: t, wishlist: n, numWishlistItemsToRecommend: a, maxWishlistItemsToShow: s, ...l } = e,
        { items: o, status: d } = (function (e) {
            let {
                    userId: t,
                    wishlist: n,
                    numWishlistItemsToRecommend: i,
                    maxWishlistItemsToShow: a = i,
                    source: s,
                } = e,
                { recommendations: l, status: o } = (0, E.Ul)({ userId: t, numItems: i, source: s }),
                d = (0, _.Gh)("add_to_wishlist_grid_suggested_nitro"),
                c = r.useMemo(() => new Set(n?.items.map((e) => e.skuId) ?? []), [n]),
                h = d && !c.has(A.pe.TIER_2);
            return {
                items: r.useMemo(() => {
                    let e = l.filter((e) => !c.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return h && e.unshift({ sku: (0, u.rI)(), itemSource: "takeover" }), e.slice(0, a);
                }, [l, c, h, a]),
                status: o,
            };
        })({
            userId: t,
            wishlist: n,
            numWishlistItemsToRecommend: a,
            maxWishlistItemsToShow: s,
            source: h.B5.USER_PROFILE,
        });
    return (0, i.jsx)(Z, { isLoading: "loading" === d, items: o, wishlist: n, ...l });
}
