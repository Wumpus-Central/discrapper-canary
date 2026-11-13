(t.r(l), t.d(l, { default: () => ln }));
var s,
    n,
    a = t(477900),
    r = t(582128),
    i = t(503698),
    o = t.n(i),
    c = t(115560),
    u = t(192308),
    d = t(944791),
    E = t(444927),
    h = t(840251),
    m = t(688151);
let L = new h.E([], m.$G.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
var I = t(611924),
    C = t(744082),
    p = t(634110),
    x = t(371794),
    A = t(857512),
    g = t(662829),
    j = t(724874),
    f = t(821816),
    b = t(806163),
    N = t(95362),
    _ = t(516521),
    k = t(688810),
    O = t(354328),
    R = t(12678),
    S = t(706113),
    v = t(841702),
    T = t(983545),
    y = t(685491),
    P = t(235939);
t(321073);
var B =
        (((s = {}).SMALL_SQUARE = "SMALL_SQUARE"),
        (s.TALL = "TALL"),
        (s.WIDE = "WIDE"),
        (s.LARGE_SQUARE = "LARGE_SQUARE"),
        s),
    D = t(575593),
    U = t(651162),
    G = t(855986),
    F = t(534514),
    M = t(821609),
    V = t(40474),
    H = t(151869),
    w = t(287809),
    K = t(129230),
    W = t(969935),
    X = t(73153);
let Y = [];
function $(e, l, t) {
    return `${e}:${l}:${t}`;
}
class Q extends G.Ay.PersistedStore {
    static displayName = "CollectiblesSequencedOfferRevealStore";
    static persistKey = "CollectiblesSequencedOfferRevealStore";
    initialize(e) {
        Y = e?.revealedDayKeys ?? [];
    }
    getState() {
        return { revealedDayKeys: Y };
    }
    isDayRevealed(e, l, t) {
        return Y.includes($(e, l, t));
    }
}
let q = new Q(X.h, {
    COLLECTIBLES_SEQUENCED_OFFER_REVEAL: function (e) {
        let { userId: l, collectionId: t, position: s } = e,
            n = $(l, t, s);
        if (Y.includes(n)) return !1;
        let a = `${l}:${t}:`;
        Y = [...Y.filter((e) => e.startsWith(a)), n];
    },
    LOGOUT: function () {
        Y = [];
    },
});
var z = t(161918),
    Z = t(945810);
let J = { enabled: !1 },
    ee = (0, Z.mj)({
        name: "2026-10-shop-twelve-days-promo",
        kind: "user",
        defaultConfig: J,
        variations: { 0: J, 1: { enabled: !0 } },
    });
var el = t(511265),
    et = t(304210),
    es = t(350172),
    en = t(730202),
    ea = t(510801),
    er = t(652215),
    ei = t(918467),
    eo = t(65238),
    ec = t(181170),
    eu = t(436912),
    ed = t(812760),
    eE = t(442036),
    eh = t(454688),
    em = t(758836),
    eL = t(521420);
function eI(e) {
    return e.id;
}
function eC(e) {
    let { block: l, listItemProps: t } = e,
        s = (0, A.uM)(),
        { onCtaClick: n } = l,
        i = r.useCallback(
            (e) => {
                (K.default.track(er.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: s?.sessionId,
                    page_type: em.G2.COLLECTION_INDEX,
                    page_section: s?.pageSection,
                    page_category: s?.pageCategory,
                    tile_type: "MARKETING_BLOCK",
                    tile_position: String(s?.tilePosition),
                    cta_name: e,
                }),
                    n());
            },
            [s?.sessionId, s?.pageSection, s?.pageCategory, s?.tilePosition, n],
        ),
        o = r.useCallback(() => {
            i("Take me there button");
        }, [i]),
        c = r.useCallback(() => {
            i(null);
        }, [i]);
    return (0, a.jsx)(eh.Ay, {
        layout: eh.uf.CAROUSEL,
        backgroundImageUrl: l.assetUrl,
        title: { text: l.title, variant: "heading-lg/semibold", className: eL.D },
        ctaText: l.ctaText,
        onButtonClick: o,
        onBlockClick: c,
        listItemProps: t,
    });
}
function ep(e) {
    let { block: l, index: t, listItemProps: s } = e,
        n = r.useMemo(
            () => ({
                categoryPosition: t,
                pageCategory: l.id,
                pageSection: "collection_marketing_blocks",
                tilePosition: t,
            }),
            [l.id, t],
        );
    return (0, a.jsx)(A.R9, { newValue: n, children: (0, a.jsx)(eC, { block: l, listItemProps: s }) });
}
function ex(e, l, t) {
    return (0, a.jsx)(ep, { block: e, index: t, listItemProps: l });
}
function eA(e) {
    let { section: l } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(F.D, { variant: "heading-lg/semibold", className: eL.R, children: l.title }),
            (0, a.jsx)(H.A, { gap: "xl", scrollStep: "item", items: l.blocks, getItemKey: eI, renderItem: ex }),
        ],
    });
}
var eg = t(987421),
    ej = t(484469),
    ef = t(834730),
    eb = (((n = {}).LOCKED = "LOCKED"), (n.OPENABLE = "OPENABLE"), (n.HINT = "HINT"), (n.REVEALED = "REVEALED"), n),
    eN = t(792996),
    e_ = t(683421);
function ek(e) {
    let [l, t] = r.useState(null),
        s = r.useCallback(() => t(e), [e]);
    return [e !== l ? e : null, s];
}
let eO = (e) => {
        let { day: l } = e;
        return (0, a.jsx)("span", {
            className: e_.U$,
            "aria-hidden": "true",
            children: (0, a.jsx)(ef.E, {
                className: e_.Le,
                variant: "heading-sm/medium",
                color: "none",
                tag: "span",
                children: l,
            }),
        });
    },
    eR = (e) => {
        let { skuId: l, tilePosition: t } = e,
            s = r.useMemo(() => ({ tilePosition: t }), [t]);
        return null == l ? null : (0, a.jsx)(A.R9, { newValue: s, children: (0, a.jsx)(eg.A, { skuId: l }) });
    },
    eS = (e) => {
        let { day: l, lockedAssetUrl: t, onLockedAssetError: s, onReveal: n } = e;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: e_.vj,
                    children: [
                        null != t && (0, a.jsx)("img", { className: o()(e_.LY, e_.nu), src: t, alt: "", onError: s }),
                        (0, a.jsx)(eO, { day: l }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: e_.a7,
                    children: (0, a.jsx)(M.$, {
                        variant: "overlay-primary",
                        fullWidth: !0,
                        text: eN.intl.string(eN.t["FvDAI+"]),
                        "aria-label": eN.intl.formatToPlainString(eN.t.IPBwbI, { day: l }),
                        onClick: n,
                    }),
                }),
            ],
        });
    },
    ev = (e) => {
        let { day: l, lockedAssetUrl: t, hintAssetUrl: s, onLockedAssetError: n, onHintAssetError: r } = e;
        return (0, a.jsxs)("div", {
            className: e_.TW,
            role: "img",
            "aria-label": eN.intl.formatToPlainString(eN.t.b0ayfY, { day: l }),
            children: [
                null != t && (0, a.jsx)("img", { className: e_.LY, src: t, alt: "", onError: n }),
                null != s && (0, a.jsx)("img", { className: o()(e_.LY, e_.qC), src: s, alt: "", onError: r }),
                (0, a.jsx)(eO, { day: l }),
            ],
        });
    },
    eT = (e) => {
        let l,
            {
                day: t,
                state: s,
                skuId: n,
                lockedAssetUrl: i,
                hintAssetUrl: c,
                tilePosition: u,
                aspectRatio: d,
                className: E,
                onReveal: h,
            } = e,
            m = r.useMemo(() => ({ "--custom-calendar-tile-aspect-ratio": d }), [d]),
            [L, I] = ek(i),
            [C, p] = ek(c),
            x = r.useRef(null),
            A = r.useRef(!1),
            g = r.useCallback(() => {
                ((A.current = !0), h());
            }, [h]);
        switch (
            (r.useEffect(() => {
                if (s !== eb.REVEALED || !A.current) return;
                A.current = !1;
                let e = x.current;
                (e?.querySelector('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])') ?? e)?.focus();
            }, [s]),
            s)
        ) {
            case eb.REVEALED:
                l = (0, a.jsx)(eR, { skuId: n, tilePosition: u });
                break;
            case eb.OPENABLE:
                l = (0, a.jsx)(eS, { day: t, lockedAssetUrl: L, onLockedAssetError: I, onReveal: g });
                break;
            case eb.HINT:
            case eb.LOCKED:
                l = (0, a.jsx)(ev, {
                    day: t,
                    lockedAssetUrl: L,
                    hintAssetUrl: s === eb.HINT ? C : null,
                    onLockedAssetError: I,
                    onHintAssetError: p,
                });
        }
        let j = s === eb.REVEALED;
        return (0, a.jsx)("li", {
            ref: x,
            className: o()(e_.Vs, { [e_.Ml]: j, [e_.Zk]: s === eb.OPENABLE }, E),
            style: m,
            tabIndex: j ? -1 : void 0,
            children: l,
        });
    };
var ey = t(517352),
    eP = t(462887),
    eB = t(736653),
    eD = t(775602),
    eU = t(412260),
    eG = t(498470),
    eF = t(807098),
    eM = t(223311),
    eV = t(196231),
    eH = t(64018),
    ew = t(643306),
    eK = t(265351);
let eW = (e) => {
    let { heroBlock: l, handleTransition: t } = e,
        { collectionPromotion: s, handlePromotionEnd: n } = (0, ew.A)(l.categorySkuId);
    return null != s
        ? (0, a.jsx)(eK.A, {
              heroBlock: l,
              collectionPromotion: s,
              handleTransition: t,
              tab: em.G2.COLLECTION_INDEX,
              onPromotionEnd: n,
              hideCards: !0,
              hideCountdownCTA: !0,
          })
        : (0, a.jsx)(eH.A, { heroBlock: l, isLoading: !1, tab: em.G2.COLLECTION_INDEX, hideButton: !0, hideCards: !0 });
};
var eX = t(146053);
function eY(e) {
    return e.skuId;
}
function e$(e) {
    let l = (0, O.A)("shop_include_unpublished"),
        { category: t } = (0, S.A)(e, { includeUnpublished: l, includePricing: !0 });
    return t ?? void 0;
}
let eQ = { aspectRatio: "1 / 1" },
    eq = {
        [D.R.PROFILE_EFFECT]: { className: eX.I5, aspectRatio: "1 / 2" },
        [D.R.BUNDLE]: { className: eX.kP, aspectRatio: "2 / 1" },
    },
    ez = {
        [B.SMALL_SQUARE]: eQ,
        [B.TALL]: { className: eX.I5, aspectRatio: "1 / 2" },
        [B.WIDE]: { className: eX.kP, aspectRatio: "2 / 1" },
        [B.LARGE_SQUARE]: { className: eX.pr, aspectRatio: "1 / 1" },
    };
function eZ(e) {
    let { products: l } = e;
    return (0, a.jsx)("div", {
        className: eX.fr,
        children: l.map((e, l) => {
            let { className: t, aspectRatio: s } =
                eq[
                    e.type === D.R.VARIANTS_GROUP &&
                    null != e.variants &&
                    e.variants.length > 0 &&
                    e.variants.every((e) => e.type === D.R.PROFILE_EFFECT)
                        ? D.R.PROFILE_EFFECT
                        : e.type
                ] ?? eQ;
            return (0, a.jsx)(
                A.R9,
                {
                    newValue: { tilePosition: l },
                    children: (0, a.jsx)(eg.A, { skuId: e.skuId, cardClassName: t, aspectRatio: s }),
                },
                e.skuId,
            );
        }),
    });
}
let eJ = (e) => {
        let { sequencedOffers: l, products: t, openPosition: s } = e,
            { collectionId: n, promotions: i, startsAt: c, endsAt: u } = l,
            d = (0, G.bG)([w.default], () => w.default.getCurrentUser()?.id),
            E = (0, G.bG)([q], () => null != d && null != n && null != s && q.isDayRevealed(d, n, s)),
            h = r.useCallback(() => {
                null != n && null != s && (0, W.cb)(n, s);
            }, [n, s]),
            m = new Date(),
            L = null != u && u <= m,
            I = (function (e) {
                let { positions: l, openPosition: t, hasCampaignStarted: s } = e;
                if (null == t && s) return null;
                let n = t ?? 0,
                    a = l.filter((e) => e > n);
                return a.length > 0 ? Math.min(...a) : null;
            })({
                positions: i.map((e) => {
                    let { position: l } = e;
                    return l;
                }),
                openPosition: s,
                hasCampaignStarted: null == c || c <= m,
            });
        return (0, a.jsx)("div", {
            className: eX.aD,
            children: (0, a.jsx)("ol", {
                className: o()(eX.fr, eX.ZP),
                children: i.map((e) => {
                    let { position: l, cardShape: n, assets: r } = e,
                        { className: i, aspectRatio: c } = ez[n] ?? ez[B.SMALL_SQUARE];
                    return (0, a.jsx)(
                        eT,
                        {
                            day: l,
                            state: (function (e) {
                                let {
                                    position: l,
                                    openPosition: t,
                                    hintPosition: s,
                                    isOpenPositionRevealed: n,
                                    hasCampaignEnded: a,
                                } = e;
                                return l === s
                                    ? "HINT"
                                    : null == t
                                      ? a
                                          ? "REVEALED"
                                          : "LOCKED"
                                      : l < t
                                        ? "REVEALED"
                                        : l === t
                                          ? n
                                              ? "REVEALED"
                                              : "OPENABLE"
                                          : "LOCKED";
                            })({
                                position: l,
                                openPosition: s,
                                hintPosition: I,
                                isOpenPositionRevealed: E,
                                hasCampaignEnded: L,
                            }),
                            skuId: t[l - 1]?.skuId ?? null,
                            lockedAssetUrl: r.locked,
                            hintAssetUrl: r.hint,
                            tilePosition: l - 1,
                            aspectRatio: c,
                            className: o()(eX.Pu, i),
                            onReveal: h,
                        },
                        l,
                    );
                }),
            }),
        });
    },
    e0 = (e) => {
        let { sequencedOffers: l, products: t, filteredProducts: s, openPosition: n } = e;
        return ee.useConfig({ location: "collection_index_page" }).enabled
            ? (0, a.jsx)(eJ, { sequencedOffers: l, products: t, openPosition: n })
            : (0, a.jsx)(eZ, { products: s });
    };
function e1(e) {
    var l;
    let t,
        { category: s } = e,
        n =
            ((l = s.skuId),
            null == (t = (0, G.bG)([eu.A], () => eu.A.getSequencedOffersForCollection(l))) || 0 === t.promotions.length
                ? null
                : t),
        r = (function (e) {
            let l = (0, G.bG)([ei.A], () => ei.A.getPromotionsForApplication(er.FYj)),
                t = new Date().getTime();
            for (let s of l ?? []) {
                let l = (0, eo.d3)(s);
                if (null != l && l.collectionId === e && (0, ec.us)(s, t)) return l.position;
            }
            return null;
        })(s.skuId),
        i = (0, G.bG)([w.default], () => w.default.getCurrentUser()),
        o = (0, el.p)(),
        c = null != (0, et.ty)(s.skuId),
        u = o(s.products);
    return null == n && (null == i || 0 === u.length)
        ? null
        : (0, a.jsxs)("div", {
              className: eX.hd,
              children: [
                  c && (0, a.jsx)(eE.A, { className: eX.aQ }),
                  null != n
                      ? (0, a.jsx)(e0, {
                            sequencedOffers: n,
                            products: s.products,
                            filteredProducts: u,
                            openPosition: r,
                        })
                      : (0, a.jsx)(eZ, { products: u }),
              ],
          });
}
function e2(e) {
    let { currentCategorySkuId: l, handleTransition: t } = e,
        { categories: s } = (function (e) {
            let { anchorCollectionId: l, limit: t } = e,
                s = r.useMemo(() => ({ applicationId: er.FYj, anchorCollectionId: l ?? "", limit: t }), [l, t]),
                n = null != l && "" !== l,
                a = (0, es.HX)(s);
            r.useEffect(() => {
                n && (0, es.Su)(s);
            }, [n, s]);
            let { collectionIds: i, fetchState: o } = (0, G.cf)(
                    [en.A],
                    () => ({
                        collectionIds: en.A.getCollectionsAfterIds(a),
                        fetchState: en.A.getCollectionsAfterFetchState(a),
                    }),
                    [a],
                ),
                c = r.useMemo(() => (n ? (i ?? []) : []), [n, i]),
                u = c.join(","),
                d = (0, G.cf)(
                    [en.A],
                    () => {
                        let e = {};
                        for (let l of c) e[l] = en.A.getCollectionOrSummary(l);
                        return e;
                    },
                    [c],
                );
            return {
                categories: r.useMemo(
                    () =>
                        c
                            .map((e) => d[e])
                            .filter((e) => null != e)
                            .map((e) => ea.A.fromStorefrontCollectionRecord(e)),
                    [u, d],
                ),
                isLoading: n && null == i && "error" !== o,
            };
        })({ anchorCollectionId: l, limit: 12 }),
        n = r.useCallback(
            (e) =>
                e.skuId !== l &&
                null != e.featuredBlockUrl &&
                !0 !== e.isOrbsExclusive &&
                (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                !em.MS.some((l) => {
                    let { categorySkuId: t } = l;
                    return t === e.skuId;
                }),
            [l],
        ),
        i = r.useMemo(() => s.filter(n).slice(0, 8), [s, n]);
    return 0 === i.length
        ? null
        : (0, a.jsxs)("div", {
              className: eX.t3,
              children: [
                  (0, a.jsx)("div", {
                      className: eX.bb,
                      children: (0, a.jsx)(F.D, {
                          variant: "heading-lg/semibold",
                          children: eN.intl.string(eN.t.EhRZ9o),
                      }),
                  }),
                  (0, a.jsx)(
                      H.A,
                      {
                          gap: "xl",
                          scrollStep: "item",
                          items: i,
                          getItemKey: eY,
                          renderItem: (e, l, s) =>
                              (0, a.jsx)(e6, { category: e, index: s, handleTransition: t, listItemProps: l }, e.skuId),
                      },
                      l,
                  ),
              ],
          });
}
function e6(e) {
    let { category: l, index: t, handleTransition: s, listItemProps: n } = e;
    return (0, a.jsx)(A.R9, {
        newValue: { categoryPosition: t, pageCategory: l.name, pageSection: "related_drops", tilePosition: t },
        children: (0, a.jsx)(eV.S, {
            layout: eh.uf.CAROUSEL,
            category: l,
            handleTransition: s,
            pageType: em.G2.COLLECTION_INDEX,
            listItemProps: n,
        }),
    });
}
let e8 = [
    { tab: em.G2.AVATAR_DECORATIONS, label: () => eN.intl.string(eN.t.dRZYNE) },
    { tab: em.G2.PROFILE_EFFECTS, label: () => eN.intl.string(eN.t["1cNjtx"]) },
    { tab: em.G2.NAMEPLATES, label: () => eN.intl.string(eN.t.V68Fqz) },
    { tab: em.G2.PROFILE_FRAMES, label: () => eN.intl.string(eN.t.ecTJkR) },
    { tab: em.G2.BUNDLES, label: () => eN.intl.string(eN.t.FYFpps) },
];
function e4() {
    let e = (0, b.W6)();
    return (0, a.jsxs)("div", {
        className: eX.nb,
        children: [
            (0, a.jsx)(F.D, { variant: "heading-sm/semibold", children: eN.intl.string(eN.t.Yr70c4) }),
            (0, a.jsx)("div", {
                className: eX.J2,
                children: e8.map((l) => {
                    let { tab: t, label: s } = l;
                    return (0, a.jsx)(
                        M.$,
                        {
                            variant: "secondary",
                            text: s(),
                            onClick: () => e.push(er.BVt.COLLECTIBLES_SHOP_WITH_TAB(t)),
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
function e5(e) {
    let { collectionId: l } = e,
        t = (0, b.W6)(),
        s = (0, A.uM)(),
        n = e$(l)?.name,
        i = r.useMemo(
            () => [
                { id: "shop_all", label: eN.intl.string(eN.t.xFcotU) },
                { id: "collection", label: n ?? "" },
            ],
            [n],
        ),
        c = r.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (K.default.track(er.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: s?.sessionId,
                        sku_id: l,
                        page_type: em.G2.COLLECTION_INDEX,
                        page_category: n,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    t.push(er.BVt.COLLECTIBLES_SHOP_WITH_TAB(em.G2.CATALOG)));
            },
            [t, s?.sessionId, l, n],
        ),
        u = r.useCallback(
            (e, l) =>
                (0, a.jsxs)("span", {
                    className: o()(eX.u, { [eX.kG]: l }),
                    children: [e.label, !l && (0, a.jsx)("span", { className: eX.Tl, children: "/" })],
                }),
            [],
        );
    return (0, a.jsx)(V.A, {
        className: eX.C2,
        separatorClassName: eX.Lw,
        breadcrumbs: i,
        activeId: "collection",
        onBreadcrumbClick: c,
        renderCustomBreadcrumb: u,
    });
}
function e3() {
    return (0, a.jsxs)("div", {
        className: eX.kL,
        children: [
            (0, a.jsx)(eH.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: em.G2.COLLECTION_INDEX }),
            (0, a.jsx)("div", {
                className: eX.hd,
                children: (0, a.jsx)("div", {
                    className: eX.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, a.jsx)(ej.A, {}, l)),
                }),
            }),
            (0, a.jsxs)("div", {
                className: eX.t3,
                children: [
                    (0, a.jsx)("div", { className: eX.bb, children: (0, a.jsx)("div", { className: eX.M$ }) }),
                    (0, a.jsxs)("div", { className: eX.A9, children: [(0, a.jsx)(eh.R3, {}), (0, a.jsx)(eh.R3, {})] }),
                ],
            }),
        ],
    });
}
let e9 = function (e) {
    var l;
    let t,
        s,
        n,
        i,
        o,
        c,
        { collectionId: u } = e,
        d = (0, b.W6)(),
        E = e$(u),
        h =
            ((t = (0, eM.A)(er.FYj)),
            (l = ey.oW.COLLECTION_PAGE_MARKETING_BLOCK),
            (s = (0, G.yK)([eU.A], () => eU.A.getMarketingComponentsBySurfaceAcrossPromotions(l), [l])),
            (n = (0, eP.M)((0, eB.Ay)())),
            (i = (0, G.bG)([eD.Ay], () => eD.Ay.useReducedMotion)),
            (o = r.useMemo(
                () =>
                    s.map((e) => {
                        let { title: l, art: t, button: s } = e.surface;
                        return {
                            id: e.id,
                            title: l,
                            assetUrl: (0, eF.c)(t, n, i) ?? "",
                            ctaText: s?.copy ?? "",
                            onCtaClick: (0, eG.h)({
                                buttonAction: s?.buttonAction,
                                deeplinkSection: s?.deeplinkSection,
                                applicationId: s?.navigableStorefrontApplicationId?.value,
                                shopCollectionId: s?.shopCollectionId?.value,
                            }),
                        };
                    }),
                [s, n, i],
            )),
            null == (c = (0, eo.NN)(t)) ||
            c.collectionId !== u ||
            !c.showUpsellBlocks ||
            (t?.endsAt != null && t.endsAt <= new Date()) ||
            0 === o.length
                ? null
                : { title: eN.intl.string(eN.t.IXKfvy), blocks: o }),
        m = r.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && d.push(er.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
            },
            [d],
        ),
        L = r.useMemo(
            () =>
                null == E
                    ? null
                    : {
                          rankedSkuIds: E.heroRanking ?? [],
                          name: E.name,
                          unpublishedAt: E.unpublishedAt,
                          categorySkuId: E.skuId,
                          summary: E.summary,
                          type: U.g.HERO,
                          categoryStoreListingId: E.storeListingId,
                          bannerDisplayConfig: E.heroBannerDisplayConfig,
                          logoDisplayConfig: E.heroLogoDisplayConfig,
                          heroLogoUrl: E.heroLogoUrl,
                          heroBannerUrl: E.heroBannerUrl,
                          heroBannerAnimatedUrl: E.heroBannerAnimatedUrl,
                          heroRiveUrl: E.heroRiveUrl,
                      },
            [E],
        );
    if (null == E) return null;
    let I = null != E.heroBannerUrl || null != E.heroRiveUrl;
    return (0, a.jsx)(z.iM, {
        tab: em.G2.COLLECTION_INDEX,
        children: (0, a.jsxs)("div", {
            className: eX.kL,
            children: [
                I && null != L
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsxs)("div", {
                                  className: eX.rz,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: eX.zn,
                                          children: (0, a.jsx)(e5, { collectionId: u }),
                                      }),
                                      (0, a.jsx)(eW, { heroBlock: L, handleTransition: m }),
                                  ],
                              }),
                              (0, a.jsx)(e1, { category: E }),
                              null != h
                                  ? (0, a.jsx)("div", { className: eX.t3, children: (0, a.jsx)(eA, { section: h }) })
                                  : (0, a.jsx)(e2, { currentCategorySkuId: E.skuId, handleTransition: m }, E.skuId),
                          ],
                      })
                    : (0, a.jsxs)("div", {
                          className: eX.AW,
                          children: [
                              (0, a.jsx)("div", { className: eX.zn, children: (0, a.jsx)(e5, { collectionId: u }) }),
                              (0, a.jsx)("div", { className: eX.$T, children: (0, a.jsx)(ed.A, { category: E }) }),
                              (0, a.jsx)(e1, { category: E }),
                              null != h
                                  ? (0, a.jsx)("div", { className: eX.t3, children: (0, a.jsx)(eA, { section: h }) })
                                  : (0, a.jsx)(e2, { currentCategorySkuId: E.skuId, handleTransition: m }, E.skuId),
                          ],
                      }),
                (0, a.jsx)(e4, {}),
            ],
        }),
    });
};
var e7 = t(415926);
function le(e) {
    let { scrollerRef: l, children: t } = e,
        { handleScroll: s } = (0, e7.r)(l, em.G2.COLLECTION_INDEX);
    return (0, a.jsx)(_.Ch, { ref: l, onScroll: s, children: t });
}
let ll = function (e) {
    let { collectionId: l, sessionId: t } = e,
        s = r.useRef(null),
        { selectedTab: n, transitionToTab: i, transitionState: o } = (0, T.oI)(em.G2.COLLECTION_INDEX);
    (0, v.Wg)(!0);
    let c = (0, O.A)("shop_include_unpublished"),
        { category: u, state: d } = (0, S.A)(l, { includeUnpublished: c, includePricing: !0 }),
        E = u ?? void 0,
        { analyticsLocations: h } = (0, R.lC)(em.G2.COLLECTION_INDEX);
    return ((0, R.uS)(t, n, E?.name, o, { enabled: null != E }),
    r.useEffect(() => {
        s.current?.scrollTo({ to: 0 });
    }, [l]),
    "loading" !== d && null == E)
        ? (0, a.jsx)(b.rd, { to: er.BVt.COLLECTIBLES_SHOP })
        : E?.isOrbsExclusive === !0
          ? (0, a.jsx)(b.rd, { to: er.BVt.COLLECTIBLES_SHOP_WITH_TAB(em.G2.ORBS) })
          : (0, a.jsxs)(k.f5, {
                value: h,
                children: [
                    (0, a.jsx)(y.G, { handleTransition: i, selectedTab: n, selectedCollectionId: l }),
                    null == E
                        ? (0, a.jsx)(N.Ip, { children: (0, a.jsx)(e3, {}) })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(P.A, { tab: n, handleTransition: i }),
                                  (0, a.jsx)(le, { scrollerRef: s, children: (0, a.jsx)(e9, { collectionId: l }) }),
                              ],
                          }),
                ],
            });
};
var lt = t(460348),
    ls = t(170522);
let ln = (e) => {
    let { tab: l, collectionId: t } = e;
    (0, I.P)(L);
    let s = (0, E.A)(() => (0, c.A)()),
        n = (0, lt.yB)("CollectiblesShop");
    ((0, lt.gB)(n),
        (0, p.pE)(),
        (0, g.X_)(),
        (0, C.A)(er.FYj),
        r.useEffect(() => {
            (0, x.rW)();
        }, []),
        r.useEffect(() => {
            (0, d.I)(er.BVt.COLLECTIBLES_SHOP);
        }, []));
    let i = r.useMemo(() => ({ sessionId: s }), [s]),
        h = r.useRef(null),
        m = (0, u.Rv)();
    return (0, a.jsx)(A.R9, {
        newValue: i,
        children: (0, a.jsx)("div", {
            className: o()(ls.bx, { [lt.jP]: n }),
            ref: h,
            inert: m,
            tabIndex: -1,
            children: (0, a.jsx)(j.Y, {
                children:
                    null != t && "" !== t
                        ? (0, a.jsx)(ll, { collectionId: t, sessionId: s })
                        : (0, a.jsx)(f.default, { tab: l, sessionId: s, containerRef: h }),
            }),
        }),
    });
};
