e.d(t, { default: () => ie });
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
    w = e(561794),
    y = e(862772),
    G = e(310209),
    M = e(944841),
    R = e(734057),
    W = e(309010),
    P = e(174459),
    D = e(427262),
    H = e(413074),
    F = e(672525),
    B = e(226830),
    U = e(788868),
    Q = e(652215),
    V = e(518477),
    X = e(699976),
    Z = e(115599),
    J = e(273944);
function K(i) {
    let { onSelectSku: t, priceOptions: e, showPromotionalGiftBanner: s } = i;
    return (0, n.jsxs)(c.B, {
        direction: "vertical",
        gap: 16,
        children: [
            (0, n.jsxs)("div", {
                className: J.u6,
                children: [
                    (0, n.jsx)(F.D3, {
                        onClick: () => t(U.pe.TIER_2),
                        isGift: !0,
                        priceOptions: e,
                        showPromotionalGiftBanner: s,
                        wumpusPosition: B.Rf.GIFT_SELECTION_MODAL,
                        className: Z.giftSelectionModalContext,
                    }),
                    (0, n.jsx)(F.Ls, {
                        onClick: () => t(U.pe.TIER_0),
                        isGift: !0,
                        priceOptions: e,
                        removeTopMargin: !0,
                        className: Z.giftSelectionModalContext,
                    }),
                ],
            }),
            (0, n.jsx)(H.A, {}),
        ],
    });
}
function $() {
    return (0, n.jsx)(n.Fragment, {
        children: Array.from({ length: 12 }, (i, t) => (0, n.jsx)(M.O, { spec: X.Z.SIZE_150 }, `placeholder-${t}`)),
    });
}
function z(i) {
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
        u = (0, m.bG)([W.A, R.A], () => R.A.getChannel(W.A.getChannelId())),
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
                    v.dB,
                    {
                        newValue: {
                            positionInSection: s,
                            skuId: r.id,
                            itemSource: o === w.uS.WISHLIST ? "organic" : "recommendation",
                            productLine: r.productLine,
                        },
                        children: (0, n.jsx)(M.A, {
                            numMoreItems: s === t.length - 1 ? I : void 0,
                            sku: r,
                            wishlistId: l,
                            source: o,
                            wishlistOwner: e,
                            hasMultipleSources: d.size > 1,
                            onOpenWishlist: a,
                            onClick: h,
                            analyticsLocations: c,
                            spec: X.Z.SIZE_150,
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
function Y(i) {
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
        m = (0, D.tx)(t),
        f =
            0 === I
                ? k.intl.string(k.t.BCi1gT)
                : I >= 12
                  ? k.intl.formatToPlainString(k.t.Y2RFOQ, { username: m })
                  : k.intl.formatToPlainString(k.t.dIDKgi, { username: m }),
        { analyticsLocations: g } = (0, x.Ay)(...(h ?? []), S.A.GIFT_SELECTION_MODAL_WISHLIST),
        _ = (0, p.A)(() => (0, r.A)()),
        [j, C] = s.useState(!1),
        L = s.useCallback(
            (i) => {
                i &&
                    !u &&
                    a.length > 0 &&
                    (P.default.track(Q.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
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
        N = (0, o.K)(L, void 0, !u && !j),
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
        className: J.jf,
        children: [
            (0, n.jsx)("div", {
                className: J.nM,
                children: (0, n.jsx)(d.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    className: J.Uf,
                    children: f,
                }),
            }),
            T && (0, n.jsx)(O, { location: "gift_selection_modal_wishlist" }),
            (0, n.jsx)("div", {
                className: J.KN,
                children: u
                    ? (0, n.jsx)($, {})
                    : (0, n.jsx)(v.dB, {
                          newValue: {
                              impressionSessionId: _,
                              surface: "gift_selection_modal",
                              wishlistOwnerId: t.id,
                              wishlistId: c,
                              analyticsLocations: g,
                          },
                          children: (0, n.jsx)(z, {
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
function q(i) {
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
        I = (0, w.tA)({ isGift: !0, giftRecipient: t }),
        h = (d ? o : 0) > 0 ? k.intl.string(k.t["7lZ31J"]) : k.intl.string(k.t.BCi1gT),
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
                    P.default.track(Q.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: t.id,
                        tab_name: i,
                        location_stack: a,
                    });
            },
            [t.id, a, j],
        ),
        E = s.useCallback(() => {
            P.default.track(Q.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: t.id,
                wishlist_item_count: o,
                location_stack: a,
            }),
                e(),
                (0, b.openUserProfileModal)({ userId: t.id, tabSection: V.RP.WISHLIST });
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
                        className: J.CE,
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
                    className: J.XG,
                    children: (0, n.jsxs)("div", {
                        className: J.Qs,
                        children: [
                            (0, n.jsx)("div", { className: J.XP, children: l }),
                            I &&
                                (0, n.jsx)("div", {
                                    ref: x,
                                    className: J.XP,
                                    children: (0, n.jsx)(Y, {
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
function ii(i) {
    let { giftRecipient: t, onClose: e, nitroSection: l, analyticsLocations: r } = i,
        {
            wishlistAndRecommendations: o,
            totalUnownedWishlistItemCount: c,
            skusToUserAndReason: d,
            status: u,
            defaultWishlistId: I,
        } = (0, y.rg)({ userId: t.id, numItems: 12, source: w.B5.USER_PROFILE }),
        h = s.useMemo(
            () =>
                a()(
                    o.map((i) => {
                        let e = null != d[i.id] && d[i.id][t.id] === G.j.WISHLIST ? w.uS.WISHLIST : w.uS.POPULAR;
                        return null != i ? { sku: i, source: e } : null;
                    }),
                ),
            [o, t.id, d],
        );
    return (0, n.jsx)(q, {
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
function it(i) {
    let {
            giftRecipient: t,
            onClose: e,
            transitionState: l,
            analyticsLocations: a,
            analyticsLocation: r,
            analyticsObject: o,
            giftMessage: c,
            giftingOrigin: d = U.vQ.DM_CHANNEL,
        } = i,
        { priceOptions: u } = (0, C.P5)(),
        { claimableRewards: m } = (0, j.Pv)(),
        f = null != m && m.length > 0,
        p = s.useCallback(
            (i) => {
                (0, L.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: d,
                    subscriptionTier: i,
                    analyticsLocations: a ?? [],
                    analyticsLocation: r ?? Q.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: o ?? {
                        page: null != t ? Q.liQ.DM_CHANNEL : Q.liQ.GUILD_CHANNEL,
                        section: Q.JJy.CHANNEL_TEXT_AREA,
                        object: Q.ZSU.BUTTON_ICON,
                        objectType: Q.AnalyticsObjectTypes.GIFT,
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
            P.default.track(Q.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: t?.id, location_stack: a }));
    }, [t, a]);
    let S = (0, n.jsx)(K, { onSelectSku: p, priceOptions: u, showPromotionalGiftBanner: f });
    return (0, n.jsx)(I.d, {
        transitionState: l,
        size: "lg",
        onClose: e,
        "aria-label": k.intl.string(k.t["wg/30i"]),
        children: (0, n.jsxs)("div", {
            className: J.jE,
            children: [
                (0, n.jsx)(h.rQ, { title: k.intl.string(k.t["wg/30i"]) }),
                null != t
                    ? (0, n.jsx)(ii, { giftRecipient: t, onClose: e, nitroSection: S, analyticsLocations: a })
                    : (0, n.jsx)(g.Ip, {
                          className: J.XG,
                          children: (0, n.jsx)("div", {
                              className: `${J.Qs} ${J.GP}`,
                              children: (0, n.jsx)("div", { className: J.XP, children: S }),
                          }),
                      }),
            ],
        }),
    });
}
function ie(i) {
    let {
        giftRecipient: t,
        onClose: e,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: a,
        analyticsObject: r,
        giftMessage: o,
        giftingOrigin: c = U.vQ.DM_CHANNEL,
    } = i;
    return (0, n.jsx)(C.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: U.T7,
        isGift: !0,
        children: (0, n.jsx)(j.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: c,
            children: (0, n.jsx)(it, {
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
