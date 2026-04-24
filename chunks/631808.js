e.d(i, { default: () => ti });
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
    h = e(17928),
    I = e(192308),
    m = e(364522),
    f = e(444927),
    g = e(775602),
    p = e(793574),
    S = e(688810),
    j = e(937008),
    x = e(156312),
    C = e(532794),
    E = e(871123),
    N = e(318254),
    L = e(262427),
    T = e(945942),
    A = e(985018);
function k(t) {
    let { location: i } = t,
        { shouldRender: e, limitedOfferTimeLeft: n } = (0, T.A)({ location: i });
    return e
        ? (0, s.jsx)(L.J, {
              text: A.intl.format(A.t["/bHQ84"], {
                  numDays: Math.max(n, 1),
                  applicationName: A.intl.string(A.t.Uu8hke),
              }),
              Icon: N.C,
          })
        : null;
}
var w = e(975732),
    O = e(299679),
    b = e(332772),
    v = e(594832),
    y = e(862772),
    G = e(310209),
    M = e(944841),
    P = e(734057),
    R = e(309010),
    W = e(954571),
    D = e(427262),
    H = e(77964),
    F = e(672525),
    U = e(788868),
    B = e(652215),
    Q = e(518477),
    X = e(699976),
    V = e(79304),
    Z = e(273944);
function K(t) {
    let { onSelectSku: i, priceOptions: e, showPromotionalGiftBanner: n } = t;
    return (0, s.jsxs)("div", {
        className: Z.u6,
        children: [
            (0, s.jsx)(F.D3, {
                onClick: () => i(U.pe.TIER_2),
                isGift: !0,
                priceOptions: e,
                showPromotionalGiftBanner: n,
                wumpusPosition: H.Rf.GIFT_SELECTION_MODAL,
                className: V.giftSelectionModalContext,
            }),
            (0, s.jsx)(F.Ls, {
                onClick: () => i(U.pe.TIER_0),
                isGift: !0,
                priceOptions: e,
                removeTopMargin: !0,
                className: V.giftSelectionModalContext,
            }),
        ],
    });
}
function J() {
    return (0, s.jsx)(s.Fragment, {
        children: Array.from({ length: 12 }, (t, i) => (0, s.jsx)(M.O, { spec: X.Z.SIZE_150 }, `placeholder-${i}`)),
    });
}
function $(t) {
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
        u = (0, h.bG)([R.A, P.A], () => P.A.getChannel(R.A.getChannelId())),
        _ = r > i.length ? r - i.length + 1 : void 0,
        m = n.useCallback(() => {
            o?.(), (0, I.closeAllModals)();
        }, [o]);
    return (
        (0, b.T)({ location: "gift_selection_modal_wishlist_section" }),
        (0, s.jsx)(s.Fragment, {
            children: i.map((t, n) => {
                let { sku: o, source: r } = t;
                return (
                    null != o &&
                    (0, s.jsx)(
                        O.dB,
                        {
                            newValue: {
                                positionInSection: n,
                                skuId: o.id,
                                itemSource: r === v.uS.WISHLIST ? "organic" : "recommendation",
                                productLine: o.productLine,
                            },
                            children: (0, s.jsx)(M.A, {
                                numMoreItems: n === i.length - 1 ? _ : void 0,
                                sku: o,
                                wishlistId: l,
                                source: r,
                                wishlistOwner: e,
                                hasMultipleSources: d.size > 1,
                                onOpenWishlist: a,
                                onClick: m,
                                analyticsLocations: c,
                                spec: X.Z.SIZE_150,
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
function z(t) {
    let {
            giftRecipient: i,
            onSeeWishlistClick: e,
            onWishlistItemClick: l,
            displayItems: a,
            defaultWishlistId: d,
            isLoading: u,
            totalUnownedWishlistItems: _,
            analyticsLocations: h,
        } = t,
        I = (0, D.tx)(i),
        m =
            0 === _
                ? A.intl.string(A.t.BCi1gT)
                : _ >= 12
                  ? A.intl.formatToPlainString(A.t.Y2RFOQ, { username: I })
                  : A.intl.formatToPlainString(A.t.dIDKgi, { username: I }),
        { analyticsLocations: g } = (0, S.Ay)(...(h ?? []), p.A.GIFT_SELECTION_MODAL_WISHLIST),
        j = (0, f.A)(() => (0, o.A)()),
        [x, C] = n.useState(!1),
        N = n.useCallback(
            (t) => {
                t &&
                    !u &&
                    a.length > 0 &&
                    (W.default.track(B.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: a.map((t) => {
                            let { sku: i } = t;
                            return i.id;
                        }),
                        product_lines: Array.from(
                            new Set(
                                a.map((t) => {
                                    let { sku: i } = t;
                                    return i.productLine;
                                }),
                            ),
                        ),
                        location_stack: g,
                    }),
                    C(!0));
            },
            [u, a, i.id, g],
        ),
        L = (0, r.K)(N, void 0, !u && !x),
        T = n.useMemo(
            () =>
                a.some((t) => {
                    let { sku: i } = t;
                    return (0, E.bF)(i);
                }),
            [a],
        );
    return (0, s.jsxs)("div", {
        ref: L,
        className: Z.jf,
        children: [
            (0, s.jsx)("div", {
                className: Z.nM,
                children: (0, s.jsx)(c.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    className: Z.Uf,
                    children: m,
                }),
            }),
            T && (0, s.jsx)(k, { location: "gift_selection_modal_wishlist" }),
            (0, s.jsx)("div", {
                className: Z.KN,
                children: u
                    ? (0, s.jsx)(J, {})
                    : (0, s.jsx)(O.dB, {
                          newValue: {
                              impressionSessionId: j,
                              surface: "gift_selection_modal",
                              wishlistOwnerId: i.id,
                              wishlistId: d,
                              analyticsLocations: g,
                          },
                          children: (0, s.jsx)($, {
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
function Y(t) {
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
        I = (u ? r : 0) > 0 ? A.intl.string(A.t["7lZ31J"]) : A.intl.string(A.t.BCi1gT),
        [f, p] = n.useState("Nitro"),
        S = n.useRef(null),
        j = n.useRef(null),
        x = (0, h.bG)([g.A], () => g.A.useReducedMotion),
        C = n.useRef(!1),
        E = n.useCallback(
            (t) => {
                p(t), (C.current = !0);
                let e = S.current;
                null != e &&
                    e.addEventListener(
                        "scrollend",
                        () => {
                            C.current = !1;
                        },
                        { once: !0 },
                    ),
                    "Nitro" === t
                        ? e?.scrollTo({ top: 0, behavior: x ? "auto" : "smooth" })
                        : j.current?.scrollIntoView({ behavior: x ? "auto" : "smooth", block: "start" }),
                    W.default.track(B.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: i.id,
                        tab_name: t,
                        location_stack: a,
                    });
            },
            [i.id, a, x],
        ),
        N = n.useCallback(() => {
            W.default.track(B.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: i.id,
                wishlist_item_count: r,
                location_stack: a,
            }),
                e(),
                (0, w.openUserProfileModal)({ userId: i.id, tabSection: Q.RP.WISHLIST });
        }, [i.id, r, a, e]);
    return (
        n.useEffect(() => {
            let t = j.current,
                i = S.current;
            if (null == t || null == i) return;
            let e = new IntersectionObserver(
                (t) => {
                    let [i] = t;
                    C.current || p(i.isIntersecting ? "Wishlist" : "Nitro");
                },
                { root: i, threshold: 0.5 },
            );
            return e.observe(t), () => e.disconnect();
        }, [_]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                _ &&
                    (0, s.jsx)("div", {
                        className: Z.CE,
                        children: (0, s.jsxs)(d.V, {
                            type: "top",
                            look: "brand",
                            selectedItem: f,
                            onItemSelect: E,
                            children: [
                                (0, s.jsx)(d.V.Item, {
                                    id: "Nitro",
                                    "aria-label": A.intl.string(A.t.Ipxkog),
                                    children: A.intl.string(A.t.Ipxkog),
                                }),
                                (0, s.jsx)(d.V.Item, { id: "Wishlist", "aria-label": I, children: I }),
                            ],
                        }),
                    }),
                (0, s.jsx)(m.Ip, {
                    ref: S,
                    className: Z.XG,
                    children: (0, s.jsxs)("div", {
                        className: Z.Qs,
                        children: [
                            (0, s.jsx)("div", { className: Z.XP, children: l }),
                            _ &&
                                (0, s.jsx)("div", {
                                    ref: j,
                                    className: Z.XP,
                                    children: (0, s.jsx)(z, {
                                        giftRecipient: i,
                                        onSeeWishlistClick: N,
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
function q(t) {
    let { giftRecipient: i, onClose: e, nitroSection: l, analyticsLocations: o } = t,
        {
            wishlistAndRecommendations: r,
            totalUnownedWishlistItemCount: c,
            skusToUserAndReason: d,
            status: u,
            defaultWishlistId: _,
        } = (0, y.rg)({ userId: i.id, numItems: 12, source: v.B5.USER_PROFILE }),
        h = n.useMemo(
            () =>
                a()(
                    r.map((t) => {
                        let e = null != d[t.id] && d[t.id][i.id] === G.j.WISHLIST ? v.uS.WISHLIST : v.uS.POPULAR;
                        return null != t ? { sku: t, source: e } : null;
                    }),
                ),
            [r, i.id, d],
        );
    return (0, s.jsx)(Y, {
        giftRecipient: i,
        onClose: e,
        nitroSection: l,
        analyticsLocations: o,
        displayItems: h,
        wishlistCount: c,
        defaultWishlistId: _,
        isWishlistLoaded: "loading" !== u,
    });
}
function tt(t) {
    let {
            giftRecipient: i,
            onClose: e,
            transitionState: l,
            analyticsLocations: a,
            analyticsLocation: o,
            analyticsObject: r,
            giftMessage: c,
            giftingOrigin: d = U.vQ.DM_CHANNEL,
        } = t,
        { priceOptions: h } = (0, x.P5)(),
        { claimableRewards: I } = (0, j.Pv)(),
        f = null != I && I.length > 0,
        g = n.useCallback(
            (t) => {
                (0, C.A)({
                    isGift: !0,
                    giftRecipient: i,
                    giftingOrigin: d,
                    subscriptionTier: t,
                    analyticsLocations: a ?? [],
                    analyticsLocation: o ?? B.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: r ?? {
                        page: null != i ? B.liQ.DM_CHANNEL : B.liQ.GUILD_CHANNEL,
                        section: B.JJy.CHANNEL_TEXT_AREA,
                        object: B.ZSU.BUTTON_ICON,
                        objectType: B.AnalyticsObjectTypes.GIFT,
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
            W.default.track(B.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: i?.id, location_stack: a }));
    }, [i, a]);
    let S = (0, s.jsx)(K, { onSelectSku: g, priceOptions: h, showPromotionalGiftBanner: f });
    return (0, s.jsx)(u.d, {
        transitionState: l,
        size: "lg",
        onClose: e,
        "aria-label": A.intl.string(A.t["wg/30i"]),
        children: (0, s.jsxs)("div", {
            className: Z.jE,
            children: [
                (0, s.jsx)(_.rQ, { title: A.intl.string(A.t["wg/30i"]) }),
                null != i
                    ? (0, s.jsx)(q, { giftRecipient: i, onClose: e, nitroSection: S, analyticsLocations: a })
                    : (0, s.jsx)(m.Ip, {
                          className: Z.XG,
                          children: (0, s.jsx)("div", {
                              className: `${Z.Qs} ${Z.GP}`,
                              children: (0, s.jsx)("div", { className: Z.XP, children: S }),
                          }),
                      }),
            ],
        }),
    });
}
function ti(t) {
    let {
        giftRecipient: i,
        onClose: e,
        transitionState: n,
        analyticsLocations: l,
        analyticsLocation: a,
        analyticsObject: o,
        giftMessage: r,
        giftingOrigin: c = U.vQ.DM_CHANNEL,
    } = t;
    return (0, s.jsx)(x.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: U.T7,
        isGift: !0,
        children: (0, s.jsx)(j.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: c,
            children: (0, s.jsx)(tt, {
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
