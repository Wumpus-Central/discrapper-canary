(t.r(l), t.d(l, { default: () => lo }));
var n,
    s,
    r = t(477900),
    a = t(582128),
    i = t(503698),
    o = t.n(i),
    c = t(115560),
    u = t(192308),
    d = t(944791),
    m = t(444927),
    E = t(840251),
    h = t(688151);
let p = new E.E([], h.$G.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
var L = t(611924),
    A = t(744082),
    f = t(634110),
    x = t(371794),
    C = t(857512),
    I = t(662829),
    g = t(724874),
    j = t(821816),
    N = t(806163),
    b = t(95362),
    S = t(516521),
    _ = t(688810),
    R = t(354328),
    k = t(12678),
    v = t(706113),
    O = t(841702),
    T = t(983545),
    y = t(685491),
    P = t(235939);
t(321073);
var D =
        (((n = {}).SMALL_SQUARE = "SMALL_SQUARE"),
        (n.TALL = "TALL"),
        (n.WIDE = "WIDE"),
        (n.LARGE_SQUARE = "LARGE_SQUARE"),
        n),
    B = t(575593),
    U = t(651162),
    M = t(855986),
    w = t(534514),
    G = t(821609),
    F = t(40474),
    V = t(151869),
    H = t(287809),
    K = t(129230),
    W = t(969935),
    $ = t(73153);
let Q = [];
function X(e, l, t) {
    return `${e}:${l}:${t}`;
}
class Y extends M.Ay.PersistedStore {
    static displayName = "CollectiblesSequencedOfferRevealStore";
    static persistKey = "CollectiblesSequencedOfferRevealStore";
    initialize(e) {
        Q = e?.revealedDayKeys ?? [];
    }
    getState() {
        return { revealedDayKeys: Q };
    }
    isDayRevealed(e, l, t) {
        return Q.includes(X(e, l, t));
    }
}
let q = new Y($.h, {
    COLLECTIBLES_SEQUENCED_OFFER_REVEAL: function (e) {
        let { userId: l, collectionId: t, position: n } = e,
            s = X(l, t, n);
        if (Q.includes(s)) return !1;
        let r = `${l}:${t}:`;
        Q = [...Q.filter((e) => e.startsWith(r)), s];
    },
    LOGOUT: function () {
        Q = [];
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
    en = t(350172),
    es = t(730202),
    er = t(510801),
    ea = t(652215),
    ei = t(918467),
    eo = t(65238),
    ec = t(181170),
    eu = t(436912),
    ed = t(812760),
    em = t(442036),
    eE = t(454688),
    eh = t(758836),
    ep = t(521420);
function eL(e) {
    return e.id;
}
function eA(e) {
    let { block: l, listItemProps: t } = e,
        n = (0, C.uM)(),
        { onCtaClick: s } = l,
        i = a.useCallback(
            (e) => {
                (K.default.track(ea.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: n?.sessionId,
                    page_type: eh.G2.COLLECTION_INDEX,
                    page_section: n?.pageSection,
                    page_category: n?.pageCategory,
                    tile_type: "MARKETING_BLOCK",
                    tile_position: String(n?.tilePosition),
                    cta_name: e,
                }),
                    s());
            },
            [n?.sessionId, n?.pageSection, n?.pageCategory, n?.tilePosition, s],
        ),
        o = a.useCallback(() => {
            i("Take me there button");
        }, [i]),
        c = a.useCallback(() => {
            i(null);
        }, [i]);
    return (0, r.jsx)(eE.Ay, {
        layout: eE.uf.CAROUSEL,
        backgroundImageUrl: l.assetUrl,
        title: { text: l.title, variant: "heading-lg/semibold", className: ep.D },
        ctaText: l.ctaText,
        onButtonClick: o,
        onBlockClick: c,
        listItemProps: t,
    });
}
function ef(e) {
    let { block: l, index: t, listItemProps: n } = e,
        s = a.useMemo(
            () => ({
                categoryPosition: t,
                pageCategory: l.id,
                pageSection: "collection_marketing_blocks",
                tilePosition: t,
            }),
            [l.id, t],
        );
    return (0, r.jsx)(C.R9, { newValue: s, children: (0, r.jsx)(eA, { block: l, listItemProps: n }) });
}
function ex(e, l, t) {
    return (0, r.jsx)(ef, { block: e, index: t, listItemProps: l });
}
function eC(e) {
    let { section: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(w.D, { variant: "heading-lg/semibold", className: ep.R, children: l.title }),
            (0, r.jsx)(V.A, { gap: "xl", scrollStep: "item", items: l.blocks, getItemKey: eL, renderItem: ex }),
        ],
    });
}
var eI = t(987421),
    eg = t(484469),
    ej = t(834730),
    eN = (((s = {}).LOCKED = "LOCKED"), (s.OPENABLE = "OPENABLE"), (s.HINT = "HINT"), (s.REVEALED = "REVEALED"), s);
let eb = {
    [D.SMALL_SQUARE]: { columns: 1, rows: 1 },
    [D.TALL]: { columns: 1, rows: 2 },
    [D.WIDE]: { columns: 2, rows: 1 },
    [D.LARGE_SQUARE]: { columns: 2, rows: 2 },
};
function eS(e, l) {
    let { row: t, column: n } = e,
        s = [];
    for (let e = t; e < t + l.rows; e++) for (let t = n; t < n + l.columns; t++) s.push(`${e},${t}`);
    return s;
}
function e_(e, l, t) {
    return eS(l, t).every((l) => !e.has(l));
}
var eR = t(792996),
    ek = t(683421);
function ev(e) {
    let [l, t] = a.useState(null),
        n = a.useCallback(() => t(e), [e]);
    return [e !== l ? e : null, n];
}
let eO = (e) => {
        let { day: l } = e;
        return (0, r.jsx)("span", {
            className: ek.U$,
            "aria-hidden": "true",
            children: (0, r.jsx)(ej.E, {
                className: ek.Le,
                variant: "heading-sm/medium",
                color: "none",
                tag: "span",
                children: l,
            }),
        });
    },
    eT = (e) => {
        let { skuId: l, tilePosition: t } = e,
            n = a.useMemo(() => ({ tilePosition: t }), [t]);
        return null == l ? null : (0, r.jsx)(C.R9, { newValue: n, children: (0, r.jsx)(eI.A, { skuId: l }) });
    },
    ey = (e) => {
        let { day: l, lockedAssetUrl: t, hintAssetUrl: n, onLockedAssetError: s, onHintAssetError: a, onReveal: i } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: ek.vj,
                    children: [
                        null != t && (0, r.jsx)("img", { className: o()(ek.LY, ek.nu), src: t, alt: "", onError: s }),
                        null != n && (0, r.jsx)("img", { className: o()(ek.LY, ek.nu), src: n, alt: "", onError: a }),
                        (0, r.jsx)(eO, { day: l }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: ek.a7,
                    children: (0, r.jsx)(G.$, {
                        variant: "overlay-primary",
                        fullWidth: !0,
                        text: eR.intl.string(eR.t["1PdKvg"]),
                        "aria-label": eR.intl.formatToPlainString(eR.t.zzDQv3, { day: l }),
                        onClick: i,
                    }),
                }),
            ],
        });
    },
    eP = (e) => {
        let { day: l, lockedAssetUrl: t, hintAssetUrl: n, onLockedAssetError: s, onHintAssetError: a } = e;
        return (0, r.jsxs)("div", {
            className: ek.TW,
            role: "img",
            "aria-label": eR.intl.formatToPlainString(eR.t.EeYnVZ, { day: l }),
            children: [
                null != t && (0, r.jsx)("img", { className: ek.LY, src: t, alt: "", onError: s }),
                null != n && (0, r.jsx)("img", { className: ek.LY, src: n, alt: "", onError: a }),
                (0, r.jsx)(eO, { day: l }),
            ],
        });
    },
    eD = (e) => {
        let l,
            {
                day: t,
                state: n,
                skuId: s,
                lockedAssetUrl: i,
                hintAssetUrl: c,
                tilePosition: u,
                aspectRatio: d,
                className: m,
                style: E,
                onReveal: h,
            } = e,
            p = a.useMemo(() => ({ ...E, "--custom-calendar-tile-aspect-ratio": d }), [E, d]),
            [L, A] = ev(i),
            [f, x] = ev(c),
            C = a.useRef(null),
            I = a.useRef(!1),
            g = a.useCallback(() => {
                ((I.current = !0), h());
            }, [h]);
        switch (
            (a.useEffect(() => {
                if (n !== eN.REVEALED || !I.current) return;
                I.current = !1;
                let e = C.current;
                (e?.querySelector('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])') ?? e)?.focus();
            }, [n]),
            n)
        ) {
            case eN.REVEALED:
                l = (0, r.jsx)(eT, { skuId: s, tilePosition: u });
                break;
            case eN.OPENABLE:
                l = (0, r.jsx)(ey, {
                    day: t,
                    lockedAssetUrl: L,
                    hintAssetUrl: f,
                    onLockedAssetError: A,
                    onHintAssetError: x,
                    onReveal: g,
                });
                break;
            case eN.HINT:
            case eN.LOCKED:
                l = (0, r.jsx)(eP, {
                    day: t,
                    lockedAssetUrl: L,
                    hintAssetUrl: n === eN.HINT ? f : null,
                    onLockedAssetError: A,
                    onHintAssetError: x,
                });
        }
        let j = n === eN.REVEALED;
        return (0, r.jsx)("li", {
            ref: C,
            className: o()(ek.Vs, { [ek.Ml]: j, [ek.Zk]: n === eN.OPENABLE }, m),
            style: p,
            tabIndex: j ? -1 : void 0,
            children: l,
        });
    };
var eB = t(517352),
    eU = t(462887),
    eM = t(736653),
    ew = t(775602),
    eG = t(412260),
    eF = t(498470),
    eV = t(807098),
    eH = t(223311),
    eK = t(196231),
    eW = t(64018),
    e$ = t(643306),
    eQ = t(265351);
let eX = (e) => {
    let { heroBlock: l, handleTransition: t } = e,
        { collectionPromotion: n, handlePromotionEnd: s } = (0, e$.A)(l.categorySkuId);
    return null != n
        ? (0, r.jsx)(eQ.A, {
              heroBlock: l,
              collectionPromotion: n,
              handleTransition: t,
              tab: eh.G2.COLLECTION_INDEX,
              onPromotionEnd: s,
              hideCards: !0,
              hideCountdownCTA: !0,
          })
        : (0, r.jsx)(eW.A, { heroBlock: l, isLoading: !1, tab: eh.G2.COLLECTION_INDEX, hideButton: !0, hideCards: !0 });
};
var eY = t(146053);
function eq(e) {
    return e.skuId;
}
function ez(e) {
    let l = (0, R.A)("shop_include_unpublished"),
        { category: t } = (0, v.A)(e, { includeUnpublished: l, includePricing: !0 });
    return t ?? void 0;
}
let eZ = { aspectRatio: "1 / 1" },
    eJ = {
        [B.R.PROFILE_EFFECT]: { className: eY.I5, aspectRatio: "1 / 2" },
        [B.R.BUNDLE]: { className: eY.kP, aspectRatio: "2 / 1" },
    },
    e0 = {
        [D.SMALL_SQUARE]: eZ,
        [D.TALL]: { className: eY.I5, aspectRatio: "1 / 2" },
        [D.WIDE]: { className: eY.kP, aspectRatio: "2 / 1" },
        [D.LARGE_SQUARE]: { className: eY.pr, aspectRatio: "1 / 1" },
    };
function e1(e) {
    let { products: l } = e;
    return (0, r.jsx)("div", {
        className: eY.fr,
        children: l.map((e, l) => {
            let { className: t, aspectRatio: n } =
                eJ[
                    e.type === B.R.VARIANTS_GROUP &&
                    null != e.variants &&
                    e.variants.length > 0 &&
                    e.variants.every((e) => e.type === B.R.PROFILE_EFFECT)
                        ? B.R.PROFILE_EFFECT
                        : e.type
                ] ?? eZ;
            return (0, r.jsx)(
                C.R9,
                {
                    newValue: { tilePosition: l },
                    children: (0, r.jsx)(eI.A, { skuId: e.skuId, cardClassName: t, aspectRatio: n }),
                },
                e.skuId,
            );
        }),
    });
}
let e2 = [4, 3, 2],
    e6 = (e) => {
        let { sequencedOffers: l, products: t, openPosition: n } = e,
            { collectionId: s, startsAt: i, endsAt: c } = l,
            u = a.useMemo(() => [...l.promotions].sort((e, l) => e.position - l.position), [l.promotions]),
            d = a.useMemo(() => {
                var e;
                let l;
                return (
                    (e = u.map((e) => {
                        let { cardShape: l } = e;
                        return l;
                    })),
                    (l = e2.map((l) =>
                        (function (e, l) {
                            let t = e.map((e) => {
                                let t = eb[e] ?? eb[D.SMALL_SQUARE];
                                return { columns: Math.min(t.columns, l), rows: t.rows };
                            });
                            if (0 === t.length) return [];
                            if (l <= 2) {
                                var n, s;
                                let e, r, a, i, o;
                                return (
                                    (n = t),
                                    (s = l),
                                    (e = new Set()),
                                    (r = []),
                                    (a = 0),
                                    (i = 1),
                                    (o = 1),
                                    n.forEach((l, t) => {
                                        let c = t === n.length - 1;
                                        for (
                                            ;
                                            (c && i + l.rows - 1 < a) ||
                                            o + l.columns - 1 > s ||
                                            !e_(e, { row: i, column: o }, l);
                                        )
                                            ++o > s && ((o = 1), i++);
                                        (eS({ row: i, column: o }, l).forEach((l) => e.add(l)),
                                            r.push({ row: i, column: o }),
                                            (a = Math.max(a, i + l.rows - 1)));
                                    }),
                                    r
                                );
                            }
                            let r = t.reduce((e, l) => e + l.columns * l.rows, 0);
                            for (let e = Math.max(Math.ceil(r / l), t[t.length - 1].rows); ; e++) {
                                let n = (function (e, l, t) {
                                    let n = e[e.length - 1],
                                        s = { row: t - n.rows + 1, column: 3 === l ? 1 : l - n.columns + 1 },
                                        r = new Set(eS(s, n)),
                                        a = [];
                                    for (let n of e.slice(0, -1)) {
                                        let e = null;
                                        for (let s = 1; s + n.rows - 1 <= t && null == e; s++)
                                            for (let t = 1; t + n.columns - 1 <= l && null == e; t++)
                                                e_(r, { row: s, column: t }, n) && (e = { row: s, column: t });
                                        if (null == e) return null;
                                        (eS(e, n).forEach((e) => r.add(e)), a.push(e));
                                    }
                                    return [...a, s];
                                })(t, l, e);
                                if (null != n) return n;
                            }
                        })(e, l),
                    )),
                    e.map((e, t) => {
                        let n = {};
                        return (
                            e2.forEach((e, s) => {
                                ((n[`--custom-calendar-${e}-row`] = l[s][t].row),
                                    (n[`--custom-calendar-${e}-column`] = l[s][t].column));
                            }),
                            n
                        );
                    })
                );
            }, [u]),
            m = (0, M.bG)([H.default], () => H.default.getCurrentUser()?.id),
            E = (0, M.bG)([q], () => null != m && null != s && null != n && q.isDayRevealed(m, s, n)),
            h = a.useCallback(() => {
                null != s && null != n && (0, W.cb)(s, n);
            }, [s, n]),
            p = new Date(),
            L = null != c && c <= p,
            A = (function (e) {
                let { positions: l, openPosition: t } = e,
                    n = t ?? 0,
                    s = l.filter((e) => e > n);
                return s.length > 0 ? Math.min(...s) : null;
            })({
                positions: u.map((e) => {
                    let { position: l } = e;
                    return l;
                }),
                openPosition: n,
                hasCampaignStarted: null == i || i <= p,
            });
        return (0, r.jsx)("div", {
            className: eY.aD,
            children: (0, r.jsx)("ol", {
                className: o()(eY.fr, eY.ZP),
                children: u.map((e, l) => {
                    let { position: s, cardShape: a, assets: i } = e,
                        { className: c, aspectRatio: u } = e0[a] ?? e0[D.SMALL_SQUARE];
                    return (0, r.jsx)(
                        eD,
                        {
                            day: s,
                            state: (function (e) {
                                let {
                                    position: l,
                                    openPosition: t,
                                    hintPosition: n,
                                    isOpenPositionRevealed: s,
                                    hasCampaignEnded: r,
                                } = e;
                                return null == t && r
                                    ? "REVEALED"
                                    : l === n
                                      ? "HINT"
                                      : null == t
                                        ? "LOCKED"
                                        : l < t
                                          ? "REVEALED"
                                          : l === t
                                            ? s
                                                ? "REVEALED"
                                                : "OPENABLE"
                                            : "LOCKED";
                            })({
                                position: s,
                                openPosition: n,
                                hintPosition: A,
                                isOpenPositionRevealed: E,
                                hasCampaignEnded: L,
                            }),
                            skuId: t[s - 1]?.skuId ?? null,
                            lockedAssetUrl: i.locked,
                            hintAssetUrl: i.hint,
                            tilePosition: s - 1,
                            aspectRatio: u,
                            className: o()(eY.Pu, c),
                            style: d[l],
                            onReveal: h,
                        },
                        s,
                    );
                }),
            }),
        });
    },
    e8 = (e) => {
        let { sequencedOffers: l, products: t, filteredProducts: n, openPosition: s } = e;
        return ee.useConfig({ location: "collection_index_page" }).enabled
            ? (0, r.jsx)(e6, { sequencedOffers: l, products: t, openPosition: s })
            : (0, r.jsx)(e1, { products: n });
    };
function e3(e) {
    var l;
    let t,
        { category: n } = e,
        s =
            ((l = n.skuId),
            null == (t = (0, M.bG)([eu.A], () => eu.A.getSequencedOffersForCollection(l))) || 0 === t.promotions.length
                ? null
                : t),
        a = (function (e) {
            let l = (0, M.bG)([ei.A], () => ei.A.getPromotionsForApplication(ea.FYj)),
                t = new Date().getTime();
            for (let n of l ?? []) {
                let l = (0, eo.d3)(n);
                if (null != l && l.collectionId === e && (0, ec.us)(n, t)) return l.position;
            }
            return null;
        })(n.skuId),
        i = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
        o = (0, el.p)(),
        c = null != (0, et.ty)(n.skuId),
        u = o(n.products);
    return null == s && (null == i || 0 === u.length)
        ? null
        : (0, r.jsxs)("div", {
              className: eY.hd,
              children: [
                  c && (0, r.jsx)(em.A, { className: eY.aQ }),
                  null != s
                      ? (0, r.jsx)(e8, {
                            sequencedOffers: s,
                            products: n.products,
                            filteredProducts: u,
                            openPosition: a,
                        })
                      : (0, r.jsx)(e1, { products: u }),
              ],
          });
}
function e4(e) {
    let { currentCategorySkuId: l, handleTransition: t } = e,
        { categories: n } = (function (e) {
            let { anchorCollectionId: l, limit: t } = e,
                n = a.useMemo(() => ({ applicationId: ea.FYj, anchorCollectionId: l ?? "", limit: t }), [l, t]),
                s = null != l && "" !== l,
                r = (0, en.HX)(n);
            a.useEffect(() => {
                s && (0, en.Su)(n);
            }, [s, n]);
            let { collectionIds: i, fetchState: o } = (0, M.cf)(
                    [es.A],
                    () => ({
                        collectionIds: es.A.getCollectionsAfterIds(r),
                        fetchState: es.A.getCollectionsAfterFetchState(r),
                    }),
                    [r],
                ),
                c = a.useMemo(() => (s ? (i ?? []) : []), [s, i]),
                u = c.join(","),
                d = (0, M.cf)(
                    [es.A],
                    () => {
                        let e = {};
                        for (let l of c) e[l] = es.A.getCollectionOrSummary(l);
                        return e;
                    },
                    [c],
                );
            return {
                categories: a.useMemo(
                    () =>
                        c
                            .map((e) => d[e])
                            .filter((e) => null != e)
                            .map((e) => er.A.fromStorefrontCollectionRecord(e)),
                    [u, d],
                ),
                isLoading: s && null == i && "error" !== o,
            };
        })({ anchorCollectionId: l, limit: 12 }),
        s = a.useCallback(
            (e) =>
                e.skuId !== l &&
                null != e.featuredBlockUrl &&
                !0 !== e.isOrbsExclusive &&
                (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                !eh.MS.some((l) => {
                    let { categorySkuId: t } = l;
                    return t === e.skuId;
                }),
            [l],
        ),
        i = a.useMemo(() => n.filter(s).slice(0, 8), [n, s]);
    return 0 === i.length
        ? null
        : (0, r.jsxs)("div", {
              className: eY.t3,
              children: [
                  (0, r.jsx)("div", {
                      className: eY.bb,
                      children: (0, r.jsx)(w.D, {
                          variant: "heading-lg/semibold",
                          children: eR.intl.string(eR.t.EhRZ9o),
                      }),
                  }),
                  (0, r.jsx)(
                      V.A,
                      {
                          gap: "xl",
                          scrollStep: "item",
                          items: i,
                          getItemKey: eq,
                          renderItem: (e, l, n) =>
                              (0, r.jsx)(e5, { category: e, index: n, handleTransition: t, listItemProps: l }, e.skuId),
                      },
                      l,
                  ),
              ],
          });
}
function e5(e) {
    let { category: l, index: t, handleTransition: n, listItemProps: s } = e;
    return (0, r.jsx)(C.R9, {
        newValue: { categoryPosition: t, pageCategory: l.name, pageSection: "related_drops", tilePosition: t },
        children: (0, r.jsx)(eK.S, {
            layout: eE.uf.CAROUSEL,
            category: l,
            handleTransition: n,
            pageType: eh.G2.COLLECTION_INDEX,
            listItemProps: s,
        }),
    });
}
let e9 = [
    { tab: eh.G2.AVATAR_DECORATIONS, label: () => eR.intl.string(eR.t.dRZYNE) },
    { tab: eh.G2.PROFILE_EFFECTS, label: () => eR.intl.string(eR.t["1cNjtx"]) },
    { tab: eh.G2.NAMEPLATES, label: () => eR.intl.string(eR.t.V68Fqz) },
    { tab: eh.G2.PROFILE_FRAMES, label: () => eR.intl.string(eR.t.ecTJkR) },
    { tab: eh.G2.BUNDLES, label: () => eR.intl.string(eR.t.FYFpps) },
];
function e7() {
    let e = (0, N.W6)();
    return (0, r.jsxs)("div", {
        className: eY.nb,
        children: [
            (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: eR.intl.string(eR.t.Yr70c4) }),
            (0, r.jsx)("div", {
                className: eY.J2,
                children: e9.map((l) => {
                    let { tab: t, label: n } = l;
                    return (0, r.jsx)(
                        G.$,
                        {
                            variant: "secondary",
                            text: n(),
                            onClick: () => e.push(ea.BVt.COLLECTIBLES_SHOP_WITH_TAB(t)),
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
function le(e) {
    let { collectionId: l } = e,
        t = (0, N.W6)(),
        n = (0, C.uM)(),
        s = ez(l)?.name,
        i = a.useMemo(
            () => [
                { id: "shop_all", label: eR.intl.string(eR.t.xFcotU) },
                { id: "collection", label: s ?? "" },
            ],
            [s],
        ),
        c = a.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (K.default.track(ea.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: n?.sessionId,
                        sku_id: l,
                        page_type: eh.G2.COLLECTION_INDEX,
                        page_category: s,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    t.push(ea.BVt.COLLECTIBLES_SHOP_WITH_TAB(eh.G2.CATALOG)));
            },
            [t, n?.sessionId, l, s],
        ),
        u = a.useCallback(
            (e, l) =>
                (0, r.jsxs)("span", {
                    className: o()(eY.u, { [eY.kG]: l }),
                    children: [e.label, !l && (0, r.jsx)("span", { className: eY.Tl, children: "/" })],
                }),
            [],
        );
    return (0, r.jsx)(F.A, {
        className: eY.C2,
        separatorClassName: eY.Lw,
        breadcrumbs: i,
        activeId: "collection",
        onBreadcrumbClick: c,
        renderCustomBreadcrumb: u,
    });
}
function ll() {
    return (0, r.jsxs)("div", {
        className: eY.kL,
        children: [
            (0, r.jsx)(eW.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: eh.G2.COLLECTION_INDEX }),
            (0, r.jsx)("div", {
                className: eY.hd,
                children: (0, r.jsx)("div", {
                    className: eY.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, r.jsx)(eg.A, {}, l)),
                }),
            }),
            (0, r.jsxs)("div", {
                className: eY.t3,
                children: [
                    (0, r.jsx)("div", { className: eY.bb, children: (0, r.jsx)("div", { className: eY.M$ }) }),
                    (0, r.jsxs)("div", { className: eY.A9, children: [(0, r.jsx)(eE.R3, {}), (0, r.jsx)(eE.R3, {})] }),
                ],
            }),
        ],
    });
}
let lt = function (e) {
    var l;
    let t,
        n,
        s,
        i,
        o,
        c,
        { collectionId: u } = e,
        d = (0, N.W6)(),
        m = ez(u),
        E =
            ((t = (0, eH.A)(ea.FYj)),
            (l = eB.oW.COLLECTION_PAGE_MARKETING_BLOCK),
            (n = (0, M.yK)([eG.A], () => eG.A.getMarketingComponentsBySurfaceAcrossPromotions(l), [l])),
            (s = (0, eU.M)((0, eM.Ay)())),
            (i = (0, M.bG)([ew.Ay], () => ew.Ay.useReducedMotion)),
            (o = a.useMemo(
                () =>
                    n.map((e) => {
                        let { title: l, art: t, button: n } = e.surface;
                        return {
                            id: e.id,
                            title: l,
                            assetUrl: (0, eV.c)(t, s, i) ?? "",
                            ctaText: n?.copy ?? "",
                            onCtaClick: (0, eF.h)({
                                buttonAction: n?.buttonAction,
                                deeplinkSection: n?.deeplinkSection,
                                applicationId: n?.navigableStorefrontApplicationId?.value,
                                shopCollectionId: n?.shopCollectionId?.value,
                            }),
                        };
                    }),
                [n, s, i],
            )),
            null == (c = (0, eo.NN)(t)) ||
            c.collectionId !== u ||
            !c.showUpsellBlocks ||
            (t?.endsAt != null && t.endsAt <= new Date()) ||
            0 === o.length
                ? null
                : { title: eR.intl.string(eR.t.IXKfvy), blocks: o }),
        h = a.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && d.push(ea.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
            },
            [d],
        ),
        p = a.useMemo(
            () =>
                null == m
                    ? null
                    : {
                          rankedSkuIds: m.heroRanking ?? [],
                          name: m.name,
                          unpublishedAt: m.unpublishedAt,
                          categorySkuId: m.skuId,
                          summary: m.summary,
                          type: U.g.HERO,
                          categoryStoreListingId: m.storeListingId,
                          bannerDisplayConfig: m.heroBannerDisplayConfig,
                          logoDisplayConfig: m.heroLogoDisplayConfig,
                          heroLogoUrl: m.heroLogoUrl,
                          heroBannerUrl: m.heroBannerUrl,
                          heroBannerAnimatedUrl: m.heroBannerAnimatedUrl,
                          heroRiveUrl: m.heroRiveUrl,
                      },
            [m],
        );
    if (null == m) return null;
    let L = null != m.heroBannerUrl || null != m.heroRiveUrl;
    return (0, r.jsx)(z.iM, {
        tab: eh.G2.COLLECTION_INDEX,
        children: (0, r.jsxs)("div", {
            className: eY.kL,
            children: [
                L && null != p
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)("div", {
                                  className: eY.rz,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: eY.zn,
                                          children: (0, r.jsx)(le, { collectionId: u }),
                                      }),
                                      (0, r.jsx)(eX, { heroBlock: p, handleTransition: h }),
                                  ],
                              }),
                              (0, r.jsx)(e3, { category: m }),
                              null != E
                                  ? (0, r.jsx)("div", { className: eY.t3, children: (0, r.jsx)(eC, { section: E }) })
                                  : (0, r.jsx)(e4, { currentCategorySkuId: m.skuId, handleTransition: h }, m.skuId),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: eY.AW,
                          children: [
                              (0, r.jsx)("div", { className: eY.zn, children: (0, r.jsx)(le, { collectionId: u }) }),
                              (0, r.jsx)("div", { className: eY.$T, children: (0, r.jsx)(ed.A, { category: m }) }),
                              (0, r.jsx)(e3, { category: m }),
                              null != E
                                  ? (0, r.jsx)("div", { className: eY.t3, children: (0, r.jsx)(eC, { section: E }) })
                                  : (0, r.jsx)(e4, { currentCategorySkuId: m.skuId, handleTransition: h }, m.skuId),
                          ],
                      }),
                (0, r.jsx)(e7, {}),
            ],
        }),
    });
};
var ln = t(415926);
function ls(e) {
    let { scrollerRef: l, children: t } = e,
        { handleScroll: n } = (0, ln.r)(l, eh.G2.COLLECTION_INDEX);
    return (0, r.jsx)(S.Ch, { ref: l, onScroll: n, children: t });
}
let lr = function (e) {
    let { collectionId: l, sessionId: t } = e,
        n = a.useRef(null),
        { selectedTab: s, transitionToTab: i, transitionState: o } = (0, T.oI)(eh.G2.COLLECTION_INDEX);
    (0, O.Wg)(!0);
    let c = (0, R.A)("shop_include_unpublished"),
        { category: u, state: d } = (0, v.A)(l, { includeUnpublished: c, includePricing: !0 }),
        m = u ?? void 0,
        { analyticsLocations: E } = (0, k.lC)(eh.G2.COLLECTION_INDEX);
    return ((0, k.uS)(t, s, m?.name, o, { enabled: null != m }),
    a.useEffect(() => {
        n.current?.scrollTo({ to: 0 });
    }, [l]),
    "loading" !== d && null == m)
        ? (0, r.jsx)(N.rd, { to: ea.BVt.COLLECTIBLES_SHOP })
        : m?.isOrbsExclusive === !0
          ? (0, r.jsx)(N.rd, { to: ea.BVt.COLLECTIBLES_SHOP_WITH_TAB(eh.G2.ORBS) })
          : (0, r.jsxs)(_.f5, {
                value: E,
                children: [
                    (0, r.jsx)(y.G, { handleTransition: i, selectedTab: s, selectedCollectionId: l }),
                    null == m
                        ? (0, r.jsx)(b.Ip, { children: (0, r.jsx)(ll, {}) })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(P.A, { tab: s, handleTransition: i }),
                                  (0, r.jsx)(ls, { scrollerRef: n, children: (0, r.jsx)(lt, { collectionId: l }) }),
                              ],
                          }),
                ],
            });
};
var la = t(460348),
    li = t(170522);
let lo = (e) => {
    let { tab: l, collectionId: t } = e;
    (0, L.P)(p);
    let n = (0, m.A)(() => (0, c.A)()),
        s = (0, la.yB)("CollectiblesShop");
    ((0, la.gB)(s),
        (0, f.pE)(),
        (0, I.X_)(),
        (0, A.A)(ea.FYj),
        a.useEffect(() => {
            (0, x.rW)();
        }, []),
        a.useEffect(() => {
            (0, d.I)(ea.BVt.COLLECTIBLES_SHOP);
        }, []));
    let i = a.useMemo(() => ({ sessionId: n }), [n]),
        E = a.useRef(null),
        h = (0, u.Rv)();
    return (0, r.jsx)(C.R9, {
        newValue: i,
        children: (0, r.jsx)("div", {
            className: o()(li.bx, { [la.jP]: s }),
            ref: E,
            inert: h,
            tabIndex: -1,
            children: (0, r.jsx)(g.Y, {
                children:
                    null != t && "" !== t
                        ? (0, r.jsx)(lr, { collectionId: t, sessionId: n })
                        : (0, r.jsx)(j.default, { tab: l, sessionId: n, containerRef: E }),
            }),
        }),
    });
};
