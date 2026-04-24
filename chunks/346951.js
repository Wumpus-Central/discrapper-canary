e.d(t, { default: () => iN });
var n = e(627968),
    s = e(64700),
    l = e(791282),
    a = e.n(l),
    r = e(132500),
    o = e(172218),
    c = e(331322),
    d = e(534514),
    u = e(761508),
    _ = e(224640),
    h = e(20742),
    m = e(17928),
    f = e(192308),
    g = e(364522),
    I = e(444927),
    p = e(775602),
    x = e(793574),
    j = e(688810),
    S = e(937008),
    C = e(156312),
    E = e(532794),
    N = e(871123),
    T = e(318254),
    L = e(262427),
    v = e(945942),
    k = e(985018);
function A(i) {
    let { location: t } = i,
        { shouldRender: e, limitedOfferTimeLeft: s } = (0, v.A)({ location: t });
    return e
        ? (0, n.jsx)(L.J, {
              text: k.intl.format(k.t["/bHQ84"], {
                  numDays: Math.max(s, 1),
                  applicationName: k.intl.string(k.t.Uu8hke),
              }),
              Icon: T.C,
          })
        : null;
}
var b = e(975732),
    O = e(299679),
    w = e(332772),
    y = e(594832),
    P = e(862772),
    G = e(310209),
    M = e(944841),
    R = e(734057),
    W = e(309010),
    D = e(954571),
    H = e(427262),
    U = e(554146),
    B = e(778712),
    F = e(834730),
    Q = e(821609),
    z = e(403581),
    X = e(408278),
    Z = e(789645),
    K = e(379848),
    V = e(287809),
    J = e(927578);
let $ = (0, e(945810).mj)({
    name: "2026-04-premium-group-gift-selection-upsell",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var Y = e(286320),
    q = e(783420),
    ii = e(224850),
    it = e(612669),
    ie = e(788868),
    is = e(88001),
    il = e(49999),
    ia = e(466919),
    ir = e(761479);
function io() {
    let i = (function (i) {
            let { location: t } = i;
            return $.useConfig({ location: t });
        })({ location: "gift_selection_modal" }),
        t = (0, it.O9)(),
        e = (0, Y.b)().slice(0, 3),
        s = (0, m.bG)([V.default], () => V.default.getCurrentUser());
    return i && t
        ? (0, n.jsx)(K.Ay, {
              contentTypes: [U.M.PREMIUM_GROUP_GIFT_SELECTION_UPSELL],
              children: (i) => {
                  let { visibleContent: t, markAsDismissed: l } = i;
                  return null == t
                      ? null
                      : (0, n.jsxs)(c.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 24,
                            className: ir.vK,
                            padding: 16,
                            fullWidth: !1,
                            children: [
                                (0, n.jsxs)(c.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 16,
                                    className: ir.rf,
                                    fullWidth: !1,
                                    children: [
                                        e.length > 0 &&
                                            (0, n.jsx)(c.B, {
                                                direction: "horizontal",
                                                className: ir.Gc,
                                                fullWidth: !1,
                                                children: e.map((i, t, e) =>
                                                    (0, n.jsx)(
                                                        ii.n,
                                                        {
                                                            affinity: i,
                                                            applyMask: t !== e.length - 1,
                                                            size: B._3.SIZE_32,
                                                        },
                                                        i.id,
                                                    ),
                                                ),
                                            }),
                                        (0, n.jsxs)(c.B, {
                                            direction: "vertical",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, n.jsx)(d.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: k.intl.string(ia.default["9nYcrx"]),
                                                }),
                                                (0, n.jsx)(F.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    children: k.intl.string(ia.default["2MwL4Z"]),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)(c.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 12,
                                    className: ir.o1,
                                    fullWidth: !1,
                                    children: [
                                        (0, n.jsx)(q.A, {
                                            subscriptionTier: ie.pe.TIER_2,
                                            initialPlanId: ie.gD.PREMIUM_GROUP_MONTH,
                                            children: (i) => {
                                                let { onClick: t } = i;
                                                return (0, n.jsx)(Q.$, {
                                                    variant: "primary",
                                                    size: "sm",
                                                    icon: z.t,
                                                    text: (0, J.TW)(s)
                                                        ? k.intl.string(k.t.IJI7yk)
                                                        : k.intl.formatToPlainString(ia.default.LwdrNi, {
                                                              premiumGroupProductName: (0, is.DP)(),
                                                          }),
                                                    onClick: t,
                                                });
                                            },
                                        }),
                                        (0, n.jsx)(X.K, {
                                            icon: Z.P,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": k.intl.string(k.t.cpT0Cq),
                                            onClick: () => l(il.i.USER_DISMISS),
                                        }),
                                    ],
                                }),
                            ],
                        });
              },
          })
        : null;
}
var ic = e(77964),
    id = e(672525),
    iu = e(652215),
    i_ = e(518477),
    ih = e(699976),
    im = e(79304),
    ig = e(273944);
function iI(i) {
    let { onSelectSku: t, priceOptions: e, showPromotionalGiftBanner: s } = i;
    return (0, n.jsxs)(c.B, {
        direction: "vertical",
        gap: 16,
        children: [
            (0, n.jsxs)("div", {
                className: ig.u6,
                children: [
                    (0, n.jsx)(id.D3, {
                        onClick: () => t(ie.pe.TIER_2),
                        isGift: !0,
                        priceOptions: e,
                        showPromotionalGiftBanner: s,
                        wumpusPosition: ic.Rf.GIFT_SELECTION_MODAL,
                        className: im.giftSelectionModalContext,
                    }),
                    (0, n.jsx)(id.Ls, {
                        onClick: () => t(ie.pe.TIER_0),
                        isGift: !0,
                        priceOptions: e,
                        removeTopMargin: !0,
                        className: im.giftSelectionModalContext,
                    }),
                ],
            }),
            (0, n.jsx)(io, {}),
        ],
    });
}
function ip() {
    return (0, n.jsx)(n.Fragment, {
        children: Array.from({ length: 12 }, (i, t) => (0, n.jsx)(M.O, { spec: ih.Z.SIZE_150 }, `placeholder-${t}`)),
    });
}
function ix(i) {
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
        _ = o > t.length ? o - t.length + 1 : void 0,
        h = s.useCallback(() => {
            r?.(), (0, f.closeAllModals)();
        }, [r]);
    return (
        (0, w.T)({ location: "gift_selection_modal_wishlist_section" }),
        (0, n.jsx)(n.Fragment, {
            children: t.map((i, s) => {
                let { sku: r, source: o } = i;
                return (
                    null != r &&
                    (0, n.jsx)(
                        O.dB,
                        {
                            newValue: {
                                positionInSection: s,
                                skuId: r.id,
                                itemSource: o === y.uS.WISHLIST ? "organic" : "recommendation",
                                productLine: r.productLine,
                            },
                            children: (0, n.jsx)(M.A, {
                                numMoreItems: s === t.length - 1 ? _ : void 0,
                                sku: r,
                                wishlistId: l,
                                source: o,
                                wishlistOwner: e,
                                hasMultipleSources: d.size > 1,
                                onOpenWishlist: a,
                                onClick: h,
                                analyticsLocations: c,
                                spec: ih.Z.SIZE_150,
                                guildId: u?.guild_id,
                                channelId: u?.id,
                            }),
                        },
                        r.id,
                    )
                );
            }),
        })
    );
}
function ij(i) {
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
        m = (0, H.tx)(t),
        f =
            0 === _
                ? k.intl.string(k.t.BCi1gT)
                : _ >= 12
                  ? k.intl.formatToPlainString(k.t.Y2RFOQ, { username: m })
                  : k.intl.formatToPlainString(k.t.dIDKgi, { username: m }),
        { analyticsLocations: g } = (0, j.Ay)(...(h ?? []), x.A.GIFT_SELECTION_MODAL_WISHLIST),
        p = (0, I.A)(() => (0, r.A)()),
        [S, C] = s.useState(!1),
        E = s.useCallback(
            (i) => {
                i &&
                    !u &&
                    a.length > 0 &&
                    (D.default.track(iu.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
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
        T = (0, o.K)(E, void 0, !u && !S),
        L = s.useMemo(
            () =>
                a.some((i) => {
                    let { sku: t } = i;
                    return (0, N.bF)(t);
                }),
            [a],
        );
    return (0, n.jsxs)("div", {
        ref: T,
        className: ig.jf,
        children: [
            (0, n.jsx)("div", {
                className: ig.nM,
                children: (0, n.jsx)(d.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    className: ig.Uf,
                    children: f,
                }),
            }),
            L && (0, n.jsx)(A, { location: "gift_selection_modal_wishlist" }),
            (0, n.jsx)("div", {
                className: ig.KN,
                children: u
                    ? (0, n.jsx)(ip, {})
                    : (0, n.jsx)(O.dB, {
                          newValue: {
                              impressionSessionId: p,
                              surface: "gift_selection_modal",
                              wishlistOwnerId: t.id,
                              wishlistId: c,
                              analyticsLocations: g,
                          },
                          children: (0, n.jsx)(ix, {
                              displayItems: a,
                              giftRecipient: t,
                              defaultWishlistId: c,
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
function iS(i) {
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
        _ = (0, y.tA)({ isGift: !0, giftRecipient: t }),
        h = (d ? o : 0) > 0 ? k.intl.string(k.t["7lZ31J"]) : k.intl.string(k.t.BCi1gT),
        [f, I] = s.useState("Nitro"),
        x = s.useRef(null),
        j = s.useRef(null),
        S = (0, m.bG)([p.A], () => p.A.useReducedMotion),
        C = s.useRef(!1),
        E = s.useCallback(
            (i) => {
                I(i), (C.current = !0);
                let e = x.current;
                null != e &&
                    e.addEventListener(
                        "scrollend",
                        () => {
                            C.current = !1;
                        },
                        { once: !0 },
                    ),
                    "Nitro" === i
                        ? e?.scrollTo({ top: 0, behavior: S ? "auto" : "smooth" })
                        : j.current?.scrollIntoView({ behavior: S ? "auto" : "smooth", block: "start" }),
                    D.default.track(iu.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: t.id,
                        tab_name: i,
                        location_stack: a,
                    });
            },
            [t.id, a, S],
        ),
        N = s.useCallback(() => {
            D.default.track(iu.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: t.id,
                wishlist_item_count: o,
                location_stack: a,
            }),
                e(),
                (0, b.openUserProfileModal)({ userId: t.id, tabSection: i_.RP.WISHLIST });
        }, [t.id, o, a, e]);
    return (
        s.useEffect(() => {
            let i = j.current,
                t = x.current;
            if (null == i || null == t) return;
            let e = new IntersectionObserver(
                (i) => {
                    let [t] = i;
                    C.current || I(t.isIntersecting ? "Wishlist" : "Nitro");
                },
                { root: t, threshold: 0.5 },
            );
            return e.observe(i), () => e.disconnect();
        }, [_]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                _ &&
                    (0, n.jsx)("div", {
                        className: ig.CE,
                        children: (0, n.jsxs)(u.V, {
                            type: "top",
                            look: "brand",
                            selectedItem: f,
                            onItemSelect: E,
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
                    ref: x,
                    className: ig.XG,
                    children: (0, n.jsxs)("div", {
                        className: ig.Qs,
                        children: [
                            (0, n.jsx)("div", { className: ig.XP, children: l }),
                            _ &&
                                (0, n.jsx)("div", {
                                    ref: j,
                                    className: ig.XP,
                                    children: (0, n.jsx)(ij, {
                                        giftRecipient: t,
                                        onSeeWishlistClick: N,
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
function iC(i) {
    let { giftRecipient: t, onClose: e, nitroSection: l, analyticsLocations: r } = i,
        {
            wishlistAndRecommendations: o,
            totalUnownedWishlistItemCount: c,
            skusToUserAndReason: d,
            status: u,
            defaultWishlistId: _,
        } = (0, P.rg)({ userId: t.id, numItems: 12, source: y.B5.USER_PROFILE }),
        h = s.useMemo(
            () =>
                a()(
                    o.map((i) => {
                        let e = null != d[i.id] && d[i.id][t.id] === G.j.WISHLIST ? y.uS.WISHLIST : y.uS.POPULAR;
                        return null != i ? { sku: i, source: e } : null;
                    }),
                ),
            [o, t.id, d],
        );
    return (0, n.jsx)(iS, {
        giftRecipient: t,
        onClose: e,
        nitroSection: l,
        analyticsLocations: r,
        displayItems: h,
        wishlistCount: c,
        defaultWishlistId: _,
        isWishlistLoaded: "loading" !== u,
    });
}
function iE(i) {
    let {
            giftRecipient: t,
            onClose: e,
            transitionState: l,
            analyticsLocations: a,
            analyticsLocation: r,
            analyticsObject: o,
            giftMessage: c,
            giftingOrigin: d = ie.vQ.DM_CHANNEL,
        } = i,
        { priceOptions: u } = (0, C.P5)(),
        { claimableRewards: m } = (0, S.Pv)(),
        f = null != m && m.length > 0,
        I = s.useCallback(
            (i) => {
                (0, E.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: d,
                    subscriptionTier: i,
                    analyticsLocations: a ?? [],
                    analyticsLocation: r ?? iu.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: o ?? {
                        page: null != t ? iu.liQ.DM_CHANNEL : iu.liQ.GUILD_CHANNEL,
                        section: iu.JJy.CHANNEL_TEXT_AREA,
                        object: iu.ZSU.BUTTON_ICON,
                        objectType: iu.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: c,
                }),
                    e();
            },
            [t, d, a, r, o, c, e],
        ),
        p = s.useRef(!1);
    s.useEffect(() => {
        p.current ||
            ((p.current = !0),
            D.default.track(iu.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: t?.id, location_stack: a }));
    }, [t, a]);
    let x = (0, n.jsx)(iI, { onSelectSku: I, priceOptions: u, showPromotionalGiftBanner: f });
    return (0, n.jsx)(_.d, {
        transitionState: l,
        size: "lg",
        onClose: e,
        "aria-label": k.intl.string(k.t["wg/30i"]),
        children: (0, n.jsxs)("div", {
            className: ig.jE,
            children: [
                (0, n.jsx)(h.rQ, { title: k.intl.string(k.t["wg/30i"]) }),
                null != t
                    ? (0, n.jsx)(iC, { giftRecipient: t, onClose: e, nitroSection: x, analyticsLocations: a })
                    : (0, n.jsx)(g.Ip, {
                          className: ig.XG,
                          children: (0, n.jsx)("div", {
                              className: `${ig.Qs} ${ig.GP}`,
                              children: (0, n.jsx)("div", { className: ig.XP, children: x }),
                          }),
                      }),
            ],
        }),
    });
}
function iN(i) {
    let {
        giftRecipient: t,
        onClose: e,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: a,
        analyticsObject: r,
        giftMessage: o,
        giftingOrigin: c = ie.vQ.DM_CHANNEL,
    } = i;
    return (0, n.jsx)(C.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: ie.T7,
        isGift: !0,
        children: (0, n.jsx)(S.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: c,
            children: (0, n.jsx)(iE, {
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
