e.d(i, { default: () => ts });
var s = e(627968),
    n = e(64700),
    l = e(791282),
    a = e.n(l),
    o = e(132500),
    r = e(172218),
    c = e(534514),
    d = e(761508),
    u = e(224640),
    _ = e(20742),
    I = e(17928),
    h = e(192308),
    m = e(364522),
    f = e(444927),
    g = e(775602),
    p = e(793574),
    S = e(688810),
    C = e(937008),
    j = e(156312),
    x = e(532794),
    E = e(871123),
    L = e(318254),
    N = e(262427),
    T = e(945942),
    k = e(985018);
function A(t) {
    let { location: i } = t,
        { shouldRender: e, limitedOfferTimeLeft: n } = (0, T.A)({ location: i });
    return e
        ? (0, s.jsx)(N.J, {
              text: k.intl.format(k.t["/bHQ84"], {
                  numDays: Math.max(n, 1),
                  applicationName: k.intl.string(k.t.Uu8hke),
              }),
              Icon: L.C,
          })
        : null;
}
var w = e(975732),
    O = e(299679),
    b = e(332772),
    v = e(594832),
    y = e(862772),
    G = e(872472),
    P = e(721932),
    M = e(310209),
    R = e(944841),
    W = e(734057),
    D = e(309010),
    H = e(954571),
    F = e(427262),
    U = e(77964),
    B = e(672525),
    Q = e(788868),
    X = e(652215),
    Z = e(518477),
    K = e(699976),
    V = e(79304),
    J = e(273944);
function $(t) {
    let { onSelectSku: i, priceOptions: e, showPromotionalGiftBanner: n } = t;
    return (0, s.jsxs)("div", {
        className: J.u6,
        children: [
            (0, s.jsx)(B.D3, {
                onClick: () => i(Q.pe.TIER_2),
                isGift: !0,
                priceOptions: e,
                showPromotionalGiftBanner: n,
                wumpusPosition: U.Rf.GIFT_SELECTION_MODAL,
                className: V.giftSelectionModalContext,
            }),
            (0, s.jsx)(B.Ls, {
                onClick: () => i(Q.pe.TIER_0),
                isGift: !0,
                priceOptions: e,
                removeTopMargin: !0,
                className: V.giftSelectionModalContext,
            }),
        ],
    });
}
function z() {
    return (0, s.jsx)(s.Fragment, {
        children: Array.from({ length: 12 }, (t, i) => (0, s.jsx)(R.O, { spec: K.Z.SIZE_150 }, `placeholder-${i}`)),
    });
}
function Y(t) {
    let {
            displayItems: i,
            giftRecipient: e,
            defaultWishlistId: l,
            onSeeWishlistClick: a,
            onWishlistItemClick: o,
            totalUnownedWishlistItems: r,
            analyticsLocations: c,
        } = t,
        d = n.useMemo(
            () =>
                new Set(
                    i.map((t) => {
                        let { source: i } = t;
                        return i;
                    }),
                ),
            [i],
        ),
        u = (0, I.bG)([D.A, W.A], () => W.A.getChannel(D.A.getChannelId())),
        _ = r > i.length ? r - i.length + 1 : void 0,
        m = n.useCallback(() => {
            o?.(), (0, h.closeAllModals)();
        }, [o]);
    return (
        (0, b.T)({ location: "gift_selection_modal_wishlist_section" }),
        (0, s.jsx)(s.Fragment, {
            children: i.map((t, n) => {
                let { item: o, source: r } = t;
                return (
                    null != o.sku &&
                    (0, s.jsx)(
                        O.dB,
                        {
                            newValue: {
                                positionInSection: n,
                                skuId: o.skuId,
                                itemSource: r === v.uS.WISHLIST ? "organic" : "recommendation",
                                productLine: o.skuProductLine,
                            },
                            children: (0, s.jsx)(R.A, {
                                numMoreItems: n === i.length - 1 ? _ : void 0,
                                sku: o.sku,
                                wishlistId: l,
                                source: r,
                                wishlistOwner: e,
                                hasMultipleSources: d.size > 1,
                                onOpenWishlist: a,
                                onClick: m,
                                analyticsLocations: c,
                                spec: K.Z.SIZE_150,
                                guildId: u?.guild_id,
                                channelId: u?.id,
                            }),
                        },
                        o.skuId,
                    )
                );
            }),
        })
    );
}
function q(t) {
    let {
            giftRecipient: i,
            onSeeWishlistClick: e,
            onWishlistItemClick: l,
            displayItems: a,
            defaultWishlistId: d,
            isLoading: u,
            totalUnownedWishlistItems: _,
            analyticsLocations: I,
        } = t,
        h = (0, F.tx)(i),
        m =
            0 === _
                ? k.intl.string(k.t.BCi1gT)
                : _ >= 12
                  ? k.intl.formatToPlainString(k.t.Y2RFOQ, { username: h })
                  : k.intl.formatToPlainString(k.t.dIDKgi, { username: h }),
        { analyticsLocations: g } = (0, S.Ay)(...(I ?? []), p.A.GIFT_SELECTION_MODAL_WISHLIST),
        C = (0, f.A)(() => (0, o.A)()),
        [j, x] = n.useState(!1),
        L = n.useCallback(
            (t) => {
                t &&
                    !u &&
                    a.length > 0 &&
                    (H.default.track(X.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: a.map((t) => {
                            let { item: i } = t;
                            return i.skuId;
                        }),
                        product_lines: Array.from(
                            new Set(
                                a.map((t) => {
                                    let { item: i } = t;
                                    return i.skuProductLine;
                                }),
                            ),
                        ),
                        location_stack: g,
                    }),
                    x(!0));
            },
            [u, a, i.id, g],
        ),
        N = (0, r.K)(L, void 0, !u && !j),
        T = n.useMemo(
            () =>
                a.some((t) => {
                    let { item: i } = t;
                    return (0, E.bF)(i.sku);
                }),
            [a],
        );
    return (0, s.jsxs)("div", {
        ref: N,
        className: J.jf,
        children: [
            (0, s.jsx)("div", {
                className: J.nM,
                children: (0, s.jsx)(c.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    className: J.Uf,
                    children: m,
                }),
            }),
            T && (0, s.jsx)(A, { location: "gift_selection_modal_wishlist" }),
            (0, s.jsx)("div", {
                className: J.KN,
                children: u
                    ? (0, s.jsx)(z, {})
                    : (0, s.jsx)(O.dB, {
                          newValue: {
                              impressionSessionId: C,
                              surface: "gift_selection_modal",
                              wishlistOwnerId: i.id,
                              wishlistId: d,
                              analyticsLocations: g,
                          },
                          children: (0, s.jsx)(Y, {
                              displayItems: a,
                              giftRecipient: i,
                              defaultWishlistId: d,
                              onSeeWishlistClick: e,
                              onWishlistItemClick: l,
                              totalUnownedWishlistItems: _,
                              analyticsLocations: g,
                          }),
                      }),
            }),
        ],
    });
}
function tt(t) {
    let {
            giftRecipient: i,
            onClose: e,
            nitroSection: l,
            analyticsLocations: a,
            displayItems: o,
            wishlistCount: r,
            defaultWishlistId: c,
            isWishlistLoaded: u,
        } = t,
        _ = (0, v.tA)({ isGift: !0, giftRecipient: i }),
        h = (u ? r : 0) > 0 ? k.intl.string(k.t["7lZ31J"]) : k.intl.string(k.t.BCi1gT),
        [f, p] = n.useState("Nitro"),
        S = n.useRef(null),
        C = n.useRef(null),
        j = (0, I.bG)([g.A], () => g.A.useReducedMotion),
        x = n.useRef(!1),
        E = n.useCallback(
            (t) => {
                p(t), (x.current = !0);
                let e = S.current;
                null != e &&
                    e.addEventListener(
                        "scrollend",
                        () => {
                            x.current = !1;
                        },
                        { once: !0 },
                    ),
                    "Nitro" === t
                        ? e?.scrollTo({ top: 0, behavior: j ? "auto" : "smooth" })
                        : C.current?.scrollIntoView({ behavior: j ? "auto" : "smooth", block: "start" }),
                    H.default.track(X.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: i.id,
                        tab_name: t,
                        location_stack: a,
                    });
            },
            [i.id, a, j],
        ),
        L = n.useCallback(() => {
            H.default.track(X.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: i.id,
                wishlist_item_count: r,
                location_stack: a,
            }),
                e(),
                (0, w.openUserProfileModal)({ userId: i.id, tabSection: Z.RP.WISHLIST });
        }, [i.id, r, a, e]);
    return (
        n.useEffect(() => {
            let t = C.current,
                i = S.current;
            if (null == t || null == i) return;
            let e = new IntersectionObserver(
                (t) => {
                    let [i] = t;
                    x.current || p(i.isIntersecting ? "Wishlist" : "Nitro");
                },
                { root: i, threshold: 0.5 },
            );
            return e.observe(t), () => e.disconnect();
        }, [_]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                _ &&
                    (0, s.jsx)("div", {
                        className: J.CE,
                        children: (0, s.jsxs)(d.V, {
                            type: "top",
                            look: "brand",
                            selectedItem: f,
                            onItemSelect: E,
                            children: [
                                (0, s.jsx)(d.V.Item, {
                                    id: "Nitro",
                                    "aria-label": k.intl.string(k.t.Ipxkog),
                                    children: k.intl.string(k.t.Ipxkog),
                                }),
                                (0, s.jsx)(d.V.Item, { id: "Wishlist", "aria-label": h, children: h }),
                            ],
                        }),
                    }),
                (0, s.jsx)(m.Ip, {
                    ref: S,
                    className: J.XG,
                    children: (0, s.jsxs)("div", {
                        className: J.Qs,
                        children: [
                            (0, s.jsx)("div", { className: J.XP, children: l }),
                            _ &&
                                (0, s.jsx)("div", {
                                    ref: C,
                                    className: J.XP,
                                    children: (0, s.jsx)(q, {
                                        giftRecipient: i,
                                        onSeeWishlistClick: L,
                                        onWishlistItemClick: e,
                                        displayItems: o,
                                        defaultWishlistId: c,
                                        analyticsLocations: a,
                                        isLoading: !u,
                                        totalUnownedWishlistItems: r,
                                    }),
                                }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function ti(t) {
    let { giftRecipient: i, onClose: e, nitroSection: l, analyticsLocations: o } = t,
        {
            wishlistAndRecommendations: r,
            totalUnownedWishlistItemCount: c,
            skusToUserAndReason: d,
            status: u,
            defaultWishlistId: _,
        } = (0, y.rg)({ userId: i.id, numItems: 12, source: v.B5.USER_PROFILE }),
        I = n.useMemo(
            () =>
                a()(
                    r.map((t) => {
                        let e = t.productLine === X.EZt.COLLECTIBLES ? G.A.fromSKU(t) : P.A.fromSKU(t),
                            s = null != d[t.id] && d[t.id][i.id] === M.j.WISHLIST ? v.uS.WISHLIST : v.uS.POPULAR;
                        return null != e ? { item: e, source: s } : null;
                    }),
                ),
            [r, i.id, d],
        );
    return (0, s.jsx)(tt, {
        giftRecipient: i,
        onClose: e,
        nitroSection: l,
        analyticsLocations: o,
        displayItems: I,
        wishlistCount: c,
        defaultWishlistId: _,
        isWishlistLoaded: "loading" !== u,
    });
}
function te(t) {
    let {
            giftRecipient: i,
            onClose: e,
            transitionState: l,
            analyticsLocations: a,
            analyticsLocation: o,
            analyticsObject: r,
            giftMessage: c,
            giftingOrigin: d = Q.vQ.DM_CHANNEL,
        } = t,
        { priceOptions: I } = (0, j.P5)(),
        { claimableRewards: h } = (0, C.Pv)(),
        f = null != h && h.length > 0,
        g = n.useCallback(
            (t) => {
                (0, x.A)({
                    isGift: !0,
                    giftRecipient: i,
                    giftingOrigin: d,
                    subscriptionTier: t,
                    analyticsLocations: a ?? [],
                    analyticsLocation: o ?? X.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: r ?? {
                        page: null != i ? X.liQ.DM_CHANNEL : X.liQ.GUILD_CHANNEL,
                        section: X.JJy.CHANNEL_TEXT_AREA,
                        object: X.ZSU.BUTTON_ICON,
                        objectType: X.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: c,
                }),
                    e();
            },
            [i, d, a, o, r, c, e],
        ),
        p = n.useRef(!1);
    n.useEffect(() => {
        p.current ||
            ((p.current = !0),
            H.default.track(X.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: i?.id, location_stack: a }));
    }, [i, a]);
    let S = (0, s.jsx)($, { onSelectSku: g, priceOptions: I, showPromotionalGiftBanner: f });
    return (0, s.jsx)(u.d, {
        transitionState: l,
        size: "lg",
        onClose: e,
        "aria-label": k.intl.string(k.t["wg/30i"]),
        children: (0, s.jsxs)("div", {
            className: J.jE,
            children: [
                (0, s.jsx)(_.rQ, { title: k.intl.string(k.t["wg/30i"]) }),
                null != i
                    ? (0, s.jsx)(ti, { giftRecipient: i, onClose: e, nitroSection: S, analyticsLocations: a })
                    : (0, s.jsx)(m.Ip, {
                          className: J.XG,
                          children: (0, s.jsx)("div", {
                              className: `${J.Qs} ${J.GP}`,
                              children: (0, s.jsx)("div", { className: J.XP, children: S }),
                          }),
                      }),
            ],
        }),
    });
}
function ts(t) {
    let {
        giftRecipient: i,
        onClose: e,
        transitionState: n,
        analyticsLocations: l,
        analyticsLocation: a,
        analyticsObject: o,
        giftMessage: r,
        giftingOrigin: c = Q.vQ.DM_CHANNEL,
    } = t;
    return (0, s.jsx)(j.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: Q.T7,
        isGift: !0,
        children: (0, s.jsx)(C.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: c,
            children: (0, s.jsx)(te, {
                giftRecipient: i,
                onClose: e,
                transitionState: n,
                analyticsLocations: l,
                analyticsLocation: a,
                analyticsObject: o,
                giftMessage: r,
                giftingOrigin: c,
            }),
        }),
    });
}
