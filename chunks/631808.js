e.d(t, { default: () => is });
var s = e(627968),
    n = e(64700),
    l = e(791282),
    a = e.n(l),
    o = e(132500),
    r = e(172218),
    c = e(331322),
    d = e(534514),
    u = e(761508),
    _ = e(224640),
    h = e(20742),
    I = e(17928),
    m = e(192308),
    f = e(364522),
    g = e(444927),
    p = e(775602),
    S = e(793574),
    j = e(688810),
    x = e(937008),
    C = e(156312),
    E = e(532794),
    N = e(871123),
    L = e(318254),
    T = e(262427),
    A = e(945942),
    k = e(985018);
function w(i) {
    let { location: t } = i,
        { shouldRender: e, limitedOfferTimeLeft: n } = (0, A.A)({ location: t });
    return e
        ? (0, s.jsx)(T.J, {
              text: k.intl.format(k.t["/bHQ84"], {
                  numDays: Math.max(n, 1),
                  applicationName: k.intl.string(k.t.Uu8hke),
              }),
              Icon: L.C,
          })
        : null;
}
var O = e(975732),
    b = e(299679),
    v = e(332772),
    y = e(594832),
    G = e(862772),
    M = e(310209),
    P = e(944841),
    R = e(734057),
    W = e(309010),
    D = e(954571),
    H = e(427262),
    F = e(413074),
    B = e(77964),
    U = e(672525),
    Q = e(788868),
    X = e(652215),
    V = e(518477),
    Z = e(699976),
    K = e(79304),
    J = e(273944);
function $(i) {
    let { onSelectSku: t, priceOptions: e, showPromotionalGiftBanner: n } = i;
    return (0, s.jsxs)(c.B, {
        direction: "vertical",
        gap: 16,
        children: [
            (0, s.jsxs)("div", {
                className: J.u6,
                children: [
                    (0, s.jsx)(U.D3, {
                        onClick: () => t(Q.pe.TIER_2),
                        isGift: !0,
                        priceOptions: e,
                        showPromotionalGiftBanner: n,
                        wumpusPosition: B.Rf.GIFT_SELECTION_MODAL,
                        className: K.giftSelectionModalContext,
                    }),
                    (0, s.jsx)(U.Ls, {
                        onClick: () => t(Q.pe.TIER_0),
                        isGift: !0,
                        priceOptions: e,
                        removeTopMargin: !0,
                        className: K.giftSelectionModalContext,
                    }),
                ],
            }),
            (0, s.jsx)(F.A, {}),
        ],
    });
}
function z() {
    return (0, s.jsx)(s.Fragment, {
        children: Array.from({ length: 12 }, (i, t) => (0, s.jsx)(P.O, { spec: Z.Z.SIZE_150 }, `placeholder-${t}`)),
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
        d = n.useMemo(
            () =>
                new Set(
                    t.map((i) => {
                        let { source: t } = i;
                        return t;
                    }),
                ),
            [t],
        ),
        u = (0, I.bG)([W.A, R.A], () => R.A.getChannel(W.A.getChannelId())),
        _ = r > t.length ? r - t.length + 1 : void 0,
        h = n.useCallback(() => {
            o?.(), (0, m.closeAllModals)();
        }, [o]);
    return (
        (0, v.T)({ location: "gift_selection_modal_wishlist_section" }),
        (0, s.jsx)(s.Fragment, {
            children: t.map((i, n) => {
                let { sku: o, source: r } = i;
                return (
                    null != o &&
                    (0, s.jsx)(
                        b.dB,
                        {
                            newValue: {
                                positionInSection: n,
                                skuId: o.id,
                                itemSource: r === y.uS.WISHLIST ? "organic" : "recommendation",
                                productLine: o.productLine,
                            },
                            children: (0, s.jsx)(P.A, {
                                numMoreItems: n === t.length - 1 ? _ : void 0,
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
            totalUnownedWishlistItems: _,
            analyticsLocations: h,
        } = i,
        I = (0, H.tx)(t),
        m =
            0 === _
                ? k.intl.string(k.t.BCi1gT)
                : _ >= 12
                  ? k.intl.formatToPlainString(k.t.Y2RFOQ, { username: I })
                  : k.intl.formatToPlainString(k.t.dIDKgi, { username: I }),
        { analyticsLocations: f } = (0, j.Ay)(...(h ?? []), S.A.GIFT_SELECTION_MODAL_WISHLIST),
        p = (0, g.A)(() => (0, o.A)()),
        [x, C] = n.useState(!1),
        E = n.useCallback(
            (i) => {
                i &&
                    !u &&
                    a.length > 0 &&
                    (D.default.track(X.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
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
                        location_stack: f,
                    }),
                    C(!0));
            },
            [u, a, t.id, f],
        ),
        L = (0, r.K)(E, void 0, !u && !x),
        T = n.useMemo(
            () =>
                a.some((i) => {
                    let { sku: t } = i;
                    return (0, N.bF)(t);
                }),
            [a],
        );
    return (0, s.jsxs)("div", {
        ref: L,
        className: J.jf,
        children: [
            (0, s.jsx)("div", {
                className: J.nM,
                children: (0, s.jsx)(d.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    className: J.Uf,
                    children: m,
                }),
            }),
            T && (0, s.jsx)(w, { location: "gift_selection_modal_wishlist" }),
            (0, s.jsx)("div", {
                className: J.KN,
                children: u
                    ? (0, s.jsx)(z, {})
                    : (0, s.jsx)(b.dB, {
                          newValue: {
                              impressionSessionId: p,
                              surface: "gift_selection_modal",
                              wishlistOwnerId: t.id,
                              wishlistId: c,
                              analyticsLocations: f,
                          },
                          children: (0, s.jsx)(Y, {
                              displayItems: a,
                              giftRecipient: t,
                              defaultWishlistId: c,
                              onSeeWishlistClick: e,
                              onWishlistItemClick: l,
                              totalUnownedWishlistItems: _,
                              analyticsLocations: f,
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
        _ = (0, y.tA)({ isGift: !0, giftRecipient: t }),
        h = (d ? r : 0) > 0 ? k.intl.string(k.t["7lZ31J"]) : k.intl.string(k.t.BCi1gT),
        [m, g] = n.useState("Nitro"),
        S = n.useRef(null),
        j = n.useRef(null),
        x = (0, I.bG)([p.A], () => p.A.useReducedMotion),
        C = n.useRef(!1),
        E = n.useCallback(
            (i) => {
                g(i), (C.current = !0);
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
                        ? e?.scrollTo({ top: 0, behavior: x ? "auto" : "smooth" })
                        : j.current?.scrollIntoView({ behavior: x ? "auto" : "smooth", block: "start" }),
                    D.default.track(X.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: t.id,
                        tab_name: i,
                        location_stack: a,
                    });
            },
            [t.id, a, x],
        ),
        N = n.useCallback(() => {
            D.default.track(X.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: t.id,
                wishlist_item_count: r,
                location_stack: a,
            }),
                e(),
                (0, O.openUserProfileModal)({ userId: t.id, tabSection: V.RP.WISHLIST });
        }, [t.id, r, a, e]);
    return (
        n.useEffect(() => {
            let i = j.current,
                t = S.current;
            if (null == i || null == t) return;
            let e = new IntersectionObserver(
                (i) => {
                    let [t] = i;
                    C.current || g(t.isIntersecting ? "Wishlist" : "Nitro");
                },
                { root: t, threshold: 0.5 },
            );
            return e.observe(i), () => e.disconnect();
        }, [_]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                _ &&
                    (0, s.jsx)("div", {
                        className: J.CE,
                        children: (0, s.jsxs)(u.V, {
                            type: "top",
                            look: "brand",
                            selectedItem: m,
                            onItemSelect: E,
                            children: [
                                (0, s.jsx)(u.V.Item, {
                                    id: "Nitro",
                                    "aria-label": k.intl.string(k.t.Ipxkog),
                                    children: k.intl.string(k.t.Ipxkog),
                                }),
                                (0, s.jsx)(u.V.Item, { id: "Wishlist", "aria-label": h, children: h }),
                            ],
                        }),
                    }),
                (0, s.jsx)(f.Ip, {
                    ref: S,
                    className: J.XG,
                    children: (0, s.jsxs)("div", {
                        className: J.Qs,
                        children: [
                            (0, s.jsx)("div", { className: J.XP, children: l }),
                            _ &&
                                (0, s.jsx)("div", {
                                    ref: j,
                                    className: J.XP,
                                    children: (0, s.jsx)(q, {
                                        giftRecipient: t,
                                        onSeeWishlistClick: N,
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
            defaultWishlistId: _,
        } = (0, G.rg)({ userId: t.id, numItems: 12, source: y.B5.USER_PROFILE }),
        h = n.useMemo(
            () =>
                a()(
                    r.map((i) => {
                        let e = null != d[i.id] && d[i.id][t.id] === M.j.WISHLIST ? y.uS.WISHLIST : y.uS.POPULAR;
                        return null != i ? { sku: i, source: e } : null;
                    }),
                ),
            [r, t.id, d],
        );
    return (0, s.jsx)(ii, {
        giftRecipient: t,
        onClose: e,
        nitroSection: l,
        analyticsLocations: o,
        displayItems: h,
        wishlistCount: c,
        defaultWishlistId: _,
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
        { claimableRewards: I } = (0, x.Pv)(),
        m = null != I && I.length > 0,
        g = n.useCallback(
            (i) => {
                (0, E.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: d,
                    subscriptionTier: i,
                    analyticsLocations: a ?? [],
                    analyticsLocation: o ?? X.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: r ?? {
                        page: null != t ? X.liQ.DM_CHANNEL : X.liQ.GUILD_CHANNEL,
                        section: X.JJy.CHANNEL_TEXT_AREA,
                        object: X.ZSU.BUTTON_ICON,
                        objectType: X.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: c,
                }),
                    e();
            },
            [t, d, a, o, r, c, e],
        ),
        p = n.useRef(!1);
    n.useEffect(() => {
        p.current ||
            ((p.current = !0),
            D.default.track(X.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: t?.id, location_stack: a }));
    }, [t, a]);
    let S = (0, s.jsx)($, { onSelectSku: g, priceOptions: u, showPromotionalGiftBanner: m });
    return (0, s.jsx)(_.d, {
        transitionState: l,
        size: "lg",
        onClose: e,
        "aria-label": k.intl.string(k.t["wg/30i"]),
        children: (0, s.jsxs)("div", {
            className: J.jE,
            children: [
                (0, s.jsx)(h.rQ, { title: k.intl.string(k.t["wg/30i"]) }),
                null != t
                    ? (0, s.jsx)(it, { giftRecipient: t, onClose: e, nitroSection: S, analyticsLocations: a })
                    : (0, s.jsx)(f.Ip, {
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
function is(i) {
    let {
        giftRecipient: t,
        onClose: e,
        transitionState: n,
        analyticsLocations: l,
        analyticsLocation: a,
        analyticsObject: o,
        giftMessage: r,
        giftingOrigin: c = Q.vQ.DM_CHANNEL,
    } = i;
    return (0, s.jsx)(C.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: Q.T7,
        isGift: !0,
        children: (0, s.jsx)(x.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: c,
            children: (0, s.jsx)(ie, {
                giftRecipient: t,
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
