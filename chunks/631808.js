e.d(t, { default: () => is });
var n = e(627968),
    s = e(64700),
    l = e(791282),
    a = e.n(l),
    r = e(835245),
    o = e(172218),
    c = e(331322),
    d = e(534514),
    u = e(761508),
    I = e(224640),
    h = e(20742),
    m = e(17928),
    f = e(192308),
    g = e(364522),
    p = e(444927),
    _ = e(775602),
    S = e(793574),
    x = e(688810),
    j = e(671744),
    C = e(937008),
    L = e(834252),
    E = e(532794),
    N = e(871123),
    T = e(318254),
    A = e(262427),
    k = e(945942),
    O = e(375708);
function b(i) {
    let { location: t } = i,
        { shouldRender: e, limitedOfferTimeLeft: s } = (0, k.A)({ location: t });
    return e
        ? (0, n.jsx)(A.J, {
              text: O.intl.format(O.t["/bHQ84"], {
                  numDays: Math.max(s, 1),
                  applicationName: O.intl.string(O.t.Uu8hke),
              }),
              Icon: T.C,
          })
        : null;
}
var v = e(975732),
    w = e(299679),
    y = e(561794),
    G = e(862772),
    M = e(310209),
    R = e(944841),
    W = e(734057),
    P = e(309010),
    D = e(174459),
    H = e(427262),
    F = e(413074),
    B = e(672525),
    U = e(226830),
    Q = e(788868),
    V = e(652215),
    X = e(518477),
    Z = e(699976),
    J = e(115599),
    K = e(273944);
function $(i) {
    let { onSelectSku: t, priceOptions: e, showPromotionalGiftBanner: s } = i;
    return (0, n.jsxs)(c.B, {
        direction: "vertical",
        gap: 16,
        children: [
            (0, n.jsxs)("div", {
                className: K.u6,
                children: [
                    (0, n.jsx)(B.D3, {
                        onClick: () => t(Q.pe.TIER_2),
                        isGift: !0,
                        priceOptions: e,
                        showPromotionalGiftBanner: s,
                        wumpusPosition: U.Rf.GIFT_SELECTION_MODAL,
                        className: J.giftSelectionModalContext,
                    }),
                    (0, n.jsx)(B.Ls, {
                        onClick: () => t(Q.pe.TIER_0),
                        isGift: !0,
                        priceOptions: e,
                        removeTopMargin: !0,
                        className: J.giftSelectionModalContext,
                    }),
                ],
            }),
            (0, n.jsx)(F.A, {}),
        ],
    });
}
function z() {
    return (0, n.jsx)(n.Fragment, {
        children: Array.from({ length: 12 }, (i, t) => (0, n.jsx)(R.O, { spec: Z.Z.SIZE_150 }, `placeholder-${t}`)),
    });
}
function Y(i) {
    let {
            displayItems: t,
            giftRecipient: e,
            defaultWishlistId: l,
            onSeeWishlistClick: a,
            onWishlistItemClick: r,
            totalUnownedWishlistItems: o,
            analyticsLocations: c,
        } = i,
        d = s.useMemo(
            () =>
                new Set(
                    t.map((i) => {
                        let { source: t } = i;
                        return t;
                    }),
                ),
            [t],
        ),
        u = (0, m.bG)([P.A, W.A], () => W.A.getChannel(P.A.getChannelId())),
        I = o > t.length ? o - t.length + 1 : void 0,
        h = s.useCallback(() => {
            r?.(), (0, f.closeAllModals)();
        }, [r]);
    return (0, n.jsx)(n.Fragment, {
        children: t.map((i, s) => {
            let { sku: r, source: o } = i;
            return (
                null != r &&
                (0, n.jsx)(
                    w.dB,
                    {
                        newValue: {
                            positionInSection: s,
                            skuId: r.id,
                            itemSource: o === y.uS.WISHLIST ? "organic" : "recommendation",
                            productLine: r.productLine,
                        },
                        children: (0, n.jsx)(R.A, {
                            numMoreItems: s === t.length - 1 ? I : void 0,
                            sku: r,
                            wishlistId: l,
                            source: o,
                            wishlistOwner: e,
                            hasMultipleSources: d.size > 1,
                            onOpenWishlist: a,
                            onClick: h,
                            analyticsLocations: c,
                            spec: Z.Z.SIZE_150,
                            guildId: u?.guild_id,
                            channelId: u?.id,
                        }),
                    },
                    r.id,
                )
            );
        }),
    });
}
function q(i) {
    let {
            giftRecipient: t,
            onSeeWishlistClick: e,
            onWishlistItemClick: l,
            displayItems: a,
            defaultWishlistId: c,
            isLoading: u,
            totalUnownedWishlistItems: I,
            analyticsLocations: h,
        } = i,
        m = (0, H.tx)(t),
        f =
            0 === I
                ? O.intl.string(O.t.BCi1gT)
                : I >= 12
                  ? O.intl.formatToPlainString(O.t.Y2RFOQ, { username: m })
                  : O.intl.formatToPlainString(O.t.dIDKgi, { username: m }),
        { analyticsLocations: g } = (0, x.Ay)(...(h ?? []), S.A.GIFT_SELECTION_MODAL_WISHLIST),
        _ = (0, p.A)(() => (0, r.A)()),
        [j, C] = s.useState(!1),
        L = s.useCallback(
            (i) => {
                i &&
                    !u &&
                    a.length > 0 &&
                    (D.default.track(V.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: a.map((i) => {
                            let { sku: t } = i;
                            return t.id;
                        }),
                        product_lines: Array.from(
                            new Set(
                                a.map((i) => {
                                    let { sku: t } = i;
                                    return t.productLine;
                                }),
                            ),
                        ),
                        location_stack: g,
                    }),
                    C(!0));
            },
            [u, a, t.id, g],
        ),
        E = (0, o.K)(L, void 0, !u && !j),
        T = s.useMemo(
            () =>
                a.some((i) => {
                    let { sku: t } = i;
                    return (0, N.bF)(t);
                }),
            [a],
        );
    return (0, n.jsxs)("div", {
        ref: E,
        className: K.jf,
        children: [
            (0, n.jsx)("div", {
                className: K.nM,
                children: (0, n.jsx)(d.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    className: K.Uf,
                    children: f,
                }),
            }),
            T && (0, n.jsx)(b, { location: "gift_selection_modal_wishlist" }),
            (0, n.jsx)("div", {
                className: K.KN,
                children: u
                    ? (0, n.jsx)(z, {})
                    : (0, n.jsx)(w.dB, {
                          newValue: {
                              impressionSessionId: _,
                              surface: "gift_selection_modal",
                              wishlistOwnerId: t.id,
                              wishlistId: c,
                              analyticsLocations: g,
                          },
                          children: (0, n.jsx)(Y, {
                              displayItems: a,
                              giftRecipient: t,
                              defaultWishlistId: c,
                              onSeeWishlistClick: e,
                              onWishlistItemClick: l,
                              totalUnownedWishlistItems: I,
                              analyticsLocations: g,
                          }),
                      }),
            }),
        ],
    });
}
function ii(i) {
    let {
            giftRecipient: t,
            onClose: e,
            nitroSection: l,
            analyticsLocations: a,
            displayItems: r,
            wishlistCount: o,
            defaultWishlistId: c,
            isWishlistLoaded: d,
        } = i,
        I = (0, y.tA)({ isGift: !0, giftRecipient: t }),
        h = (d ? o : 0) > 0 ? O.intl.string(O.t["7lZ31J"]) : O.intl.string(O.t.BCi1gT),
        [f, p] = s.useState("Nitro"),
        S = s.useRef(null),
        x = s.useRef(null),
        j = (0, m.bG)([_.A], () => _.A.useReducedMotion),
        C = s.useRef(!1),
        L = s.useCallback(
            (i) => {
                p(i), (C.current = !0);
                let e = S.current;
                null != e &&
                    e.addEventListener(
                        "scrollend",
                        () => {
                            C.current = !1;
                        },
                        { once: !0 },
                    ),
                    "Nitro" === i
                        ? e?.scrollTo({ top: 0, behavior: j ? "auto" : "smooth" })
                        : x.current?.scrollIntoView({ behavior: j ? "auto" : "smooth", block: "start" }),
                    D.default.track(V.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: t.id,
                        tab_name: i,
                        location_stack: a,
                    });
            },
            [t.id, a, j],
        ),
        E = s.useCallback(() => {
            D.default.track(V.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: t.id,
                wishlist_item_count: o,
                location_stack: a,
            }),
                e(),
                (0, v.openUserProfileModal)({ userId: t.id, tabSection: X.RP.WISHLIST });
        }, [t.id, o, a, e]);
    return (
        s.useEffect(() => {
            let i = x.current,
                t = S.current;
            if (null == i || null == t) return;
            let e = new IntersectionObserver(
                (i) => {
                    let [t] = i;
                    C.current || p(t.isIntersecting ? "Wishlist" : "Nitro");
                },
                { root: t, threshold: 0.5 },
            );
            return e.observe(i), () => e.disconnect();
        }, [I]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                I &&
                    (0, n.jsx)("div", {
                        className: K.CE,
                        children: (0, n.jsxs)(u.V, {
                            type: "top",
                            look: "brand",
                            selectedItem: f,
                            onItemSelect: L,
                            children: [
                                (0, n.jsx)(u.V.Item, {
                                    id: "Nitro",
                                    "aria-label": O.intl.string(O.t.Ipxkog),
                                    children: O.intl.string(O.t.Ipxkog),
                                }),
                                (0, n.jsx)(u.V.Item, { id: "Wishlist", "aria-label": h, children: h }),
                            ],
                        }),
                    }),
                (0, n.jsx)(g.Ip, {
                    ref: S,
                    className: K.XG,
                    children: (0, n.jsxs)("div", {
                        className: K.Qs,
                        children: [
                            (0, n.jsx)("div", { className: K.XP, children: l }),
                            I &&
                                (0, n.jsx)("div", {
                                    ref: x,
                                    className: K.XP,
                                    children: (0, n.jsx)(q, {
                                        giftRecipient: t,
                                        onSeeWishlistClick: E,
                                        onWishlistItemClick: e,
                                        displayItems: r,
                                        defaultWishlistId: c,
                                        analyticsLocations: a,
                                        isLoading: !d,
                                        totalUnownedWishlistItems: o,
                                    }),
                                }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function it(i) {
    let { giftRecipient: t, onClose: e, nitroSection: l, analyticsLocations: r } = i,
        {
            wishlistAndRecommendations: o,
            totalUnownedWishlistItemCount: c,
            skusToUserAndReason: d,
            status: u,
            defaultWishlistId: I,
        } = (0, G.rg)({ userId: t.id, numItems: 12, source: y.B5.USER_PROFILE }),
        h = s.useMemo(
            () =>
                a()(
                    o.map((i) => {
                        let e = null != d[i.id] && d[i.id][t.id] === M.j.WISHLIST ? y.uS.WISHLIST : y.uS.POPULAR;
                        return null != i ? { sku: i, source: e } : null;
                    }),
                ),
            [o, t.id, d],
        );
    return (0, n.jsx)(ii, {
        giftRecipient: t,
        onClose: e,
        nitroSection: l,
        analyticsLocations: r,
        displayItems: h,
        wishlistCount: c,
        defaultWishlistId: I,
        isWishlistLoaded: "loading" !== u,
    });
}
function ie(i) {
    let {
            giftRecipient: t,
            onClose: e,
            transitionState: l,
            analyticsLocations: a,
            analyticsLocation: r,
            analyticsObject: o,
            giftMessage: c,
            giftingOrigin: d = Q.vQ.DM_CHANNEL,
        } = i,
        u = (0, j.t4)((i) => i.checkoutPriceOptions),
        { claimableRewards: m } = (0, C.Pv)(),
        f = null != m && m.length > 0,
        p = s.useCallback(
            (i) => {
                (0, E.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: d,
                    subscriptionTier: i,
                    analyticsLocations: a ?? [],
                    analyticsLocation: r ?? V.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: o ?? {
                        page: null != t ? V.liQ.DM_CHANNEL : V.liQ.GUILD_CHANNEL,
                        section: V.JJy.CHANNEL_TEXT_AREA,
                        object: V.ZSU.BUTTON_ICON,
                        objectType: V.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: c,
                }),
                    e();
            },
            [t, d, a, r, o, c, e],
        ),
        _ = s.useRef(!1);
    s.useEffect(() => {
        _.current ||
            ((_.current = !0),
            D.default.track(V.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: t?.id, location_stack: a }));
    }, [t, a]);
    let S = (0, n.jsx)($, { onSelectSku: p, priceOptions: u, showPromotionalGiftBanner: f });
    return (0, n.jsx)(I.d, {
        transitionState: l,
        size: "lg",
        onClose: e,
        "aria-label": O.intl.string(O.t["wg/30i"]),
        children: (0, n.jsxs)("div", {
            className: K.jE,
            children: [
                (0, n.jsx)(h.rQ, { title: O.intl.string(O.t["wg/30i"]) }),
                null != t
                    ? (0, n.jsx)(it, { giftRecipient: t, onClose: e, nitroSection: S, analyticsLocations: a })
                    : (0, n.jsx)(g.Ip, {
                          className: K.XG,
                          children: (0, n.jsx)("div", {
                              className: `${K.Qs} ${K.GP}`,
                              children: (0, n.jsx)("div", { className: K.XP, children: S }),
                          }),
                      }),
            ],
        }),
    });
}
function is(i) {
    let {
        giftRecipient: t,
        onClose: e,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: a,
        analyticsObject: r,
        giftMessage: o,
        giftingOrigin: c = Q.vQ.DM_CHANNEL,
    } = i;
    return (0, n.jsx)(L.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: Q.T7,
        isGift: !0,
        children: (0, n.jsx)(C.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: c,
            children: (0, n.jsx)(ie, {
                giftRecipient: t,
                onClose: e,
                transitionState: s,
                analyticsLocations: l,
                analyticsLocation: a,
                analyticsObject: r,
                giftMessage: o,
                giftingOrigin: c,
            }),
        }),
    });
}
