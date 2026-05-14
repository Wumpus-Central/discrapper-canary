e.d(t, { default: () => is });
var n = e(627968),
    s = e(64700),
    l = e(791282),
    a = e.n(l),
    o = e(835245),
    r = e(172218),
    c = e(331322),
    d = e(534514),
    u = e(761508),
    I = e(224640),
    h = e(20742),
    m = e(17928),
    f = e(192308),
    g = e(364522),
    _ = e(444927),
    p = e(775602),
    S = e(793574),
    x = e(688810),
    j = e(937008),
    C = e(834252),
    L = e(532794),
    E = e(871123),
    N = e(318254),
    T = e(262427),
    A = e(945942),
    k = e(375708);
function O(i) {
    let { location: t } = i,
        { shouldRender: e, limitedOfferTimeLeft: s } = (0, A.A)({ location: t });
    return e
        ? (0, n.jsx)(T.J, {
              text: k.intl.format(k.t["/bHQ84"], {
                  numDays: Math.max(s, 1),
                  applicationName: k.intl.string(k.t.Uu8hke),
              }),
              Icon: N.C,
          })
        : null;
}
var b = e(975732),
    v = e(299679),
    w = e(332772),
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
            onWishlistItemClick: o,
            totalUnownedWishlistItems: r,
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
        I = r > t.length ? r - t.length + 1 : void 0,
        h = s.useCallback(() => {
            o?.(), (0, f.closeAllModals)();
        }, [o]);
    return (
        (0, w.T)({ location: "gift_selection_modal_wishlist_section" }),
        (0, n.jsx)(n.Fragment, {
            children: t.map((i, s) => {
                let { sku: o, source: r } = i;
                return (
                    null != o &&
                    (0, n.jsx)(
                        v.dB,
                        {
                            newValue: {
                                positionInSection: s,
                                skuId: o.id,
                                itemSource: r === y.uS.WISHLIST ? "organic" : "recommendation",
                                productLine: o.productLine,
                            },
                            children: (0, n.jsx)(R.A, {
                                numMoreItems: s === t.length - 1 ? I : void 0,
                                sku: o,
                                wishlistId: l,
                                source: r,
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
                        o.id,
                    )
                );
            }),
        })
    );
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
                ? k.intl.string(k.t.BCi1gT)
                : I >= 12
                  ? k.intl.formatToPlainString(k.t.Y2RFOQ, { username: m })
                  : k.intl.formatToPlainString(k.t.dIDKgi, { username: m }),
        { analyticsLocations: g } = (0, x.Ay)(...(h ?? []), S.A.GIFT_SELECTION_MODAL_WISHLIST),
        p = (0, _.A)(() => (0, o.A)()),
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
        N = (0, r.K)(L, void 0, !u && !j),
        T = s.useMemo(
            () =>
                a.some((i) => {
                    let { sku: t } = i;
                    return (0, E.bF)(t);
                }),
            [a],
        );
    return (0, n.jsxs)("div", {
        ref: N,
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
            T && (0, n.jsx)(O, { location: "gift_selection_modal_wishlist" }),
            (0, n.jsx)("div", {
                className: K.KN,
                children: u
                    ? (0, n.jsx)(z, {})
                    : (0, n.jsx)(v.dB, {
                          newValue: {
                              impressionSessionId: p,
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
            displayItems: o,
            wishlistCount: r,
            defaultWishlistId: c,
            isWishlistLoaded: d,
        } = i,
        I = (0, y.tA)({ isGift: !0, giftRecipient: t }),
        h = (d ? r : 0) > 0 ? k.intl.string(k.t["7lZ31J"]) : k.intl.string(k.t.BCi1gT),
        [f, _] = s.useState("Nitro"),
        S = s.useRef(null),
        x = s.useRef(null),
        j = (0, m.bG)([p.A], () => p.A.useReducedMotion),
        C = s.useRef(!1),
        L = s.useCallback(
            (i) => {
                _(i), (C.current = !0);
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
                wishlist_item_count: r,
                location_stack: a,
            }),
                e(),
                (0, b.openUserProfileModal)({ userId: t.id, tabSection: X.RP.WISHLIST });
        }, [t.id, r, a, e]);
    return (
        s.useEffect(() => {
            let i = x.current,
                t = S.current;
            if (null == i || null == t) return;
            let e = new IntersectionObserver(
                (i) => {
                    let [t] = i;
                    C.current || _(t.isIntersecting ? "Wishlist" : "Nitro");
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
                                    "aria-label": k.intl.string(k.t.Ipxkog),
                                    children: k.intl.string(k.t.Ipxkog),
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
                                        displayItems: o,
                                        defaultWishlistId: c,
                                        analyticsLocations: a,
                                        isLoading: !d,
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
function it(i) {
    let { giftRecipient: t, onClose: e, nitroSection: l, analyticsLocations: o } = i,
        {
            wishlistAndRecommendations: r,
            totalUnownedWishlistItemCount: c,
            skusToUserAndReason: d,
            status: u,
            defaultWishlistId: I,
        } = (0, G.rg)({ userId: t.id, numItems: 12, source: y.B5.USER_PROFILE }),
        h = s.useMemo(
            () =>
                a()(
                    r.map((i) => {
                        let e = null != d[i.id] && d[i.id][t.id] === M.j.WISHLIST ? y.uS.WISHLIST : y.uS.POPULAR;
                        return null != i ? { sku: i, source: e } : null;
                    }),
                ),
            [r, t.id, d],
        );
    return (0, n.jsx)(ii, {
        giftRecipient: t,
        onClose: e,
        nitroSection: l,
        analyticsLocations: o,
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
            analyticsLocation: o,
            analyticsObject: r,
            giftMessage: c,
            giftingOrigin: d = Q.vQ.DM_CHANNEL,
        } = i,
        { priceOptions: u } = (0, C.P5)(),
        { claimableRewards: m } = (0, j.Pv)(),
        f = null != m && m.length > 0,
        _ = s.useCallback(
            (i) => {
                (0, L.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: d,
                    subscriptionTier: i,
                    analyticsLocations: a ?? [],
                    analyticsLocation: o ?? V.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: r ?? {
                        page: null != t ? V.liQ.DM_CHANNEL : V.liQ.GUILD_CHANNEL,
                        section: V.JJy.CHANNEL_TEXT_AREA,
                        object: V.ZSU.BUTTON_ICON,
                        objectType: V.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: c,
                }),
                    e();
            },
            [t, d, a, o, r, c, e],
        ),
        p = s.useRef(!1);
    s.useEffect(() => {
        p.current ||
            ((p.current = !0),
            D.default.track(V.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: t?.id, location_stack: a }));
    }, [t, a]);
    let S = (0, n.jsx)($, { onSelectSku: _, priceOptions: u, showPromotionalGiftBanner: f });
    return (0, n.jsx)(I.d, {
        transitionState: l,
        size: "lg",
        onClose: e,
        "aria-label": k.intl.string(k.t["wg/30i"]),
        children: (0, n.jsxs)("div", {
            className: K.jE,
            children: [
                (0, n.jsx)(h.rQ, { title: k.intl.string(k.t["wg/30i"]) }),
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
        analyticsObject: o,
        giftMessage: r,
        giftingOrigin: c = Q.vQ.DM_CHANNEL,
    } = i;
    return (0, n.jsx)(C.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: Q.T7,
        isGift: !0,
        children: (0, n.jsx)(j.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: c,
            children: (0, n.jsx)(ie, {
                giftRecipient: t,
                onClose: e,
                transitionState: s,
                analyticsLocations: l,
                analyticsLocation: a,
                analyticsObject: o,
                giftMessage: r,
                giftingOrigin: c,
            }),
        }),
    });
}
