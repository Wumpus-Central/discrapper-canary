n.d(t, { A: () => tb });
var l,
    s,
    i = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a),
    c = n(651162),
    d = n(554146),
    u = n(689175),
    m = n(297264),
    h = n(821609),
    g = n(564322),
    x = n(367727),
    f = n(196736),
    p = n(174459),
    E = n(440938);
let b = r.createContext(null);
function v(e) {
    let { blockType: t, children: n } = e,
        l = r.useMemo(() => ({ blockType: t }), [t]);
    return (0, i.jsx)(b.Provider, { value: l, children: n });
}
var j = n(755172),
    S = n(100057),
    C = n(599062),
    _ = n(159439),
    k = n(998694),
    A = n(74445),
    I = n(607399),
    N = n(946015),
    y = n(717421),
    R = n(834730);
n(321073);
var T = n(140735),
    L = n(496431),
    O = n(375708),
    M = n(302326);
function D(e) {
    let { endDate: t, size: n = "md", className: l, showSeconds: s = !1 } = e,
        { days: r, hours: a, minutes: c, seconds: d } = (0, L.A)(t),
        u = (function (e, t, n, l, s) {
            function i(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let r = [i(e), i(t), i(n)];
            return s && r.push(i(l)), r.join(":");
        })(r, a, c, d, s);
    return (0, i.jsxs)("div", {
        className: o()(M.kL, l),
        role: "timer",
        children: [
            u
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, i.jsx)(
                              R.E,
                              {
                                  color: "none",
                                  variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: M.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, i.jsx)(
                              R.E,
                              {
                                  color: "text-overlay-light",
                                  variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
                                  className: M.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, i.jsx)(T.A, { children: O.intl.format(O.t.j6IyVe, { days: r, hours: a, minutes: c }) }),
        ],
    });
}
var P = n(685879);
let H = r.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        l = (0, y.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsxs)(A.animated.div, {
        className: o()([P.lP, I.Fr && P.yJ]),
        role: "status",
        style: {
            ...l,
            ...(null != t.bannerUrl &&
                "" !== t.bannerUrl && {
                    backgroundImage: `url(${t.bannerUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }),
        },
        children: [
            (0, i.jsxs)(N.s, {
                direction: N.s.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(R.E, {
                        variant: "text-md/medium",
                        className: P.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, i.jsx)(R.E, {
                            variant: "text-sm/medium",
                            className: P.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, i.jsx)(D, { endDate: t.endTime }),
        ],
    });
});
var B = n(424918),
    U = n(793574),
    w = n(688810),
    F = n(993408),
    V = n(196231),
    G = n(105499);
function $(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, i.jsx)("div", {
        className: o()(G.n9, G.YB),
        children: n?.subblocks.map((e, n) =>
            e.type === B.u.CATEGORY
                ? (0, i.jsx)(
                      E.R9,
                      {
                          newValue: {
                              categoryPosition: 1,
                              pageCategory: e.name,
                              pageSection: "featured_block",
                              tilePosition: n,
                          },
                          children: (0, i.jsx)(
                              V.S,
                              {
                                  subblock: e,
                                  enablePreview: 0 === n,
                                  badgeText: (0, F.HF)(e.unpublishedAt) ? O.intl.string(O.t["h/uBCR"]) : void 0,
                                  handleTransition: t,
                              },
                              e.categoryStoreListingId,
                          ),
                      },
                      e.categoryStoreListingId,
                  )
                : (e.type, null),
        ),
    });
}
function W(e) {
    let { handleTransition: t, categories: n } = e;
    if (null == n || n.length < 2) return null;
    let [l, s] = n;
    return (0, i.jsx)("div", {
        className: o()(G.n9, G.YB),
        children: (0, i.jsxs)(E.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != l ? l.name : s?.name,
                pageSection: "featured_block",
                tilePosition: +(null == l),
            },
            children: [
                null != l &&
                    (0, i.jsx)(V.S, {
                        category: l,
                        enablePreview: !0,
                        badgeText: (0, F.HF)(l.unpublishedAt) ? O.intl.string(O.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != s &&
                    (0, i.jsx)(V.S, {
                        category: s,
                        badgeText: (0, F.HF)(s.unpublishedAt) ? O.intl.string(O.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let z = function (e) {
    let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: s } = e,
        { analyticsLocations: r } = (0, w.Ay)(U.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, i.jsxs)("div", {
              className: o()(G.n9, G.YB),
              children: [
                  (0, i.jsx)("div", { className: o()(G.Jn, G.oT), children: (0, i.jsx)("div", { className: G.uy }) }),
                  (0, i.jsx)("div", { className: o()(G.Jn, G.oT), children: (0, i.jsx)("div", { className: G.uy }) }),
              ],
          })
        : null != s
          ? (0, i.jsx)(w.f5, {
                value: r,
                children: (0, i.jsx)($, { featuredBlockRecord: s, handleTransition: n, isLoading: !1 }),
            })
          : (0, i.jsx)(w.f5, {
                value: r,
                children: (0, i.jsx)(W, { categories: l, handleTransition: n, isLoading: !1 }),
            });
};
var Y = n(334279),
    K =
        (((l = {}).RECOMMENDED = "recommended"),
        (l.POPULAR = "popular"),
        (l.RECENT = "recent"),
        (l.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (l.RANDOM = "random"),
        l),
    X = n(17928),
    q = n(691885),
    Z = n(775602),
    J = n(287809),
    Q = n(531685),
    ee = n(158045),
    et = n(590180),
    en = n(395856),
    el = n(503089),
    es = n(682301),
    ei = n(258245),
    er = n(561769),
    ea = n(484469),
    eo = n(621466),
    ec =
        (((s = {}).MOUNTED = "mounted"),
        (s.SORT_OUT = "sort-out"),
        (s.SORT_IN = "sort-in"),
        (s.SHUFFLE_OUT = "shuffle-out"),
        (s.SHUFFLE_IN = "shuffle-in"),
        (s.FINISHED = "finished"),
        s),
    ed = n(401864),
    eu = n(124987),
    em = n(946716);
let eh = {
        [K.RECENT]: { sortType: eu.$.RECENCY, sortDirection: ed.A.DESC },
        [K.PRICE_LOW_TO_HIGH]: { sortType: eu.$.PRICE, sortDirection: ed.A.ASC },
    },
    eg = { ...eh, [K.POPULAR]: { sortType: eu.$.POPULARITY, sortDirection: ed.A.DESC } };
n(667532);
var ex = n(435558),
    ef = n.n(ex),
    ep = n(153488),
    eE = n(511265),
    eb = n(313276),
    ev = n(206077),
    ej = n(623373),
    eS = n(652215),
    eC = n(146919),
    e_ = n(645501);
let ek = [],
    eA = function (e) {
        let {
                isLoading: t,
                title: n,
                sortedSkuIds: l,
                numVisibleItems: s,
                tab: a,
                buttonContainerClassName: c,
                orbsSupportedOnly: d,
            } = e,
            u = (0, X.bG)([J.default], () => J.default.getCurrentUser()),
            m = ee.Ay.canUseShopDiscounts(u),
            g = (0, er.Mk)(a),
            x = (0, eC.yB)("FeedBlock"),
            {
                sortType: f,
                setSortType: b,
                sortedItems: v,
                orderedSkuIds: j,
                sortOptions: S,
                shuffleProducts: C,
                showRecommendationOption: _,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: n, orbsSupportedOnly: l } = e,
                    s = (0, X.bG)([ep.A], () => ep.A.hasConsented(eS.YAq.PERSONALIZATION)),
                    i = r.useMemo(() => t?.[K.RECOMMENDED] ?? [], [t]),
                    a = r.useMemo(() => t?.[K.POPULAR] ?? [], [t]),
                    o = i.length > 0 && s,
                    [c, d] = r.useState(o ? K.RECOMMENDED : K.POPULAR),
                    u = (0, X.bG)([et.A], () => et.A.productsWithVariantsAsGroup),
                    m = r.useMemo(() => (0, F.CE)(u), [u]),
                    h = (0, eb.A)(),
                    g = (0, eE.p)(),
                    [x, f] = r.useState([]),
                    p = r.useCallback(() => {
                        d(K.RANDOM), f(ef().shuffle(m));
                    }, [m]);
                r.useEffect(() => {
                    f(ef().shuffle(m));
                }, [m]);
                let E = r.useMemo(() => {
                        let e = [];
                        switch (c) {
                            case K.RECENT:
                                e = m;
                                break;
                            case K.PRICE_LOW_TO_HIGH:
                                e = (0, F.bf)([...m], n, l);
                                break;
                            case K.RECOMMENDED:
                                e = h(i);
                                break;
                            case K.POPULAR:
                                e = h(a);
                                break;
                            case K.RANDOM:
                                e = x;
                        }
                        return l ? (0, ej.ex)(g(e)) : g(e);
                    }, [c, l, g, n, m, h, i, a, x]),
                    b = (0, ev.X)(E),
                    v = r.useMemo(
                        () => (c === K.RECOMMENDED ? i : c === K.POPULAR ? a : b.map((e) => e.skuId)),
                        [c, i, a, b],
                    );
                return {
                    sortType: c,
                    setSortType: d,
                    sortedItems: b,
                    orderedSkuIds: v,
                    sortOptions: r.useMemo(() => {
                        let e = [
                            { value: K.POPULAR, label: O.intl.string(O.t.Y68e5p) },
                            { value: K.RECENT, label: O.intl.string(O.t["51Bhiz"]) },
                            { value: K.PRICE_LOW_TO_HIGH, label: O.intl.string(O.t.m8RVU2) },
                        ];
                        return o && e.unshift({ value: K.RECOMMENDED, label: O.intl.string(O.t.zPWgFG) }), e;
                    }, [o]),
                    showRecommendationOption: o,
                    shuffleProducts: p,
                };
            })({ sortedSkuIds: l, hasShopDiscount: m, orbsSupportedOnly: d }),
            k = f === K.RANDOM,
            A = (0, en.$)("feed_block"),
            [I, N] = r.useState(0),
            y = `${f}:${!0 === d}:${I}`,
            [L, M] = r.useState({ key: y, extra: 0 }),
            D = L.key === y ? L.extra : 0;
        L.key !== y && M({ key: y, extra: 0 });
        let {
                skuIds: P,
                isLoading: H,
                hasMore: B,
            } = (function (e) {
                let { sortType: t, orbsSupportedOnly: n, numVisibleItems: l, enabled: s, shuffleNonce: i } = e,
                    a = (!0 === n ? eg : eh)[t],
                    o = t === K.RANDOM,
                    c = s && l > 0 && (o || null != a),
                    d = c ? (o ? `random:${!0 === n}` : `${a?.sortType}:${a?.sortDirection}:${!0 === n}`) : null,
                    u = c
                        ? o
                            ? `random:${i}:${!0 === n}:${l}`
                            : `${a?.sortType}:${a?.sortDirection}:${!0 === n}:${l}`
                        : null,
                    [m, h] = r.useState(null);
                if (
                    (r.useEffect(() => {
                        if (null == u) return;
                        let e = o
                            ? { randomize: !0 }
                            : null != a
                              ? { sort_type: a.sortType, sort_direction: a.sortDirection }
                              : null;
                        if (null == e) return;
                        let t = !1;
                        return (
                            (0, em.$)({
                                item_types: [],
                                colors: [],
                                themes: [],
                                orbs_eligible: !0 === n || void 0,
                                offset: 0,
                                limit: l + (o ? 32 : 8),
                                ...e,
                                published_collections_only: !0,
                            })
                                .then((e) => {
                                    t ||
                                        h({
                                            key: u,
                                            sortIdentityKey: d,
                                            skuIds: e.skus ?? [],
                                            hasMore: e.pagination?.has_more === !0,
                                        });
                                })
                                .catch(() => {
                                    t || h({ key: u, sortIdentityKey: d, skuIds: [], hasMore: !1 });
                                }),
                            () => {
                                t = !0;
                            }
                        );
                    }, [u, d, o, a, i, n, l]),
                    null == u)
                )
                    return { skuIds: null, isLoading: !1, hasMore: !1 };
                let g = null != m && m.sortIdentityKey === d ? m : null;
                return { skuIds: g?.skuIds ?? null, isLoading: m?.key !== u, hasMore: g?.hasMore ?? !1 };
            })({ sortType: f, orbsSupportedOnly: d, numVisibleItems: s + D, enabled: A, shuffleNonce: I }),
            V = P ?? j,
            $ = r.useMemo(() => V.slice(0, s + D + (k ? 32 : 8)), [V, s, D, k]),
            W = (0, es.hv)(A ? $ : ek, { needsCategory: !1 }),
            z = (0, el.c)("feed_block"),
            ed = r.useMemo(() => {
                if (!A) return $;
                let e = new Set();
                return $.filter((t) => {
                    let n = W[t];
                    if (n?.state === "error" || (!z && t === Y.j.PREMIUM_TIER_2_1_DAY)) return !1;
                    let l = n?.product?.storeListingId;
                    if (null != l) {
                        if (e.has(l)) return !1;
                        e.add(l);
                    }
                    return !0;
                });
            }, [A, $, W, z]),
            eu = r.useMemo(
                () =>
                    !!A &&
                    !H &&
                    $.every((e) => {
                        let t = W[e]?.state;
                        return "ready" === t || "error" === t;
                    }),
                [A, H, $, W],
            ),
            ex = !k && B && D < 16,
            eA = s - ed.length;
        if (eu && eA > 0 && ex) {
            let e = Math.min(16, D + eA + 8);
            e !== D && M({ key: y, extra: e });
        }
        let eI = (0, X.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
            eN = (0, X.bG)([Q.A], () => Q.A.isFocused()),
            ey = !eI && eN,
            {
                animationPhase: eR,
                startAnimation: eT,
                signalDataReady: eL,
            } = (() => {
                let [e, t] = r.useState("mounted"),
                    [n, l] = r.useState(!1),
                    s = r.useRef(null),
                    i = r.useRef(!1),
                    a = r.useRef(null);
                r.useEffect(() => {
                    if (n && "finished" === e) {
                        if (null !== s.current) {
                            let e = s.current;
                            if (
                                e.tabIndex >= 0 ||
                                (0, eo.vq)(e, HTMLButtonElement) ||
                                (0, eo.vq)(e, HTMLAnchorElement) ||
                                (0, eo.vq)(e, HTMLInputElement) ||
                                (0, eo.vq)(e, HTMLSelectElement) ||
                                (0, eo.vq)(e, HTMLTextAreaElement)
                            )
                                e.focus();
                            else {
                                let t = e.querySelector(
                                    'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [role="combobox"], [role="button"]',
                                );
                                t?.focus();
                            }
                        }
                        l(!1);
                    }
                }, [e, n]),
                    r.useEffect(
                        () => () => {
                            null != a.current && clearTimeout(a.current);
                        },
                        [],
                    );
                let o = r.useCallback((e) => {
                    (i.current = !1),
                        null != a.current && (clearTimeout(a.current), (a.current = null)),
                        t(e ? "shuffle-in" : "sort-in"),
                        setTimeout(() => t("finished"), e ? 200 : 300);
                }, []);
                return {
                    animationPhase: e,
                    startAnimation: r.useCallback(
                        (e) => {
                            let { isShuffling: n, onOutroComplete: r, returnRef: c, holdIntroUntilReady: d = !1 } = e;
                            c?.current != null && ((s.current = c.current), l(!0)),
                                (i.current = !1),
                                null != a.current && (clearTimeout(a.current), (a.current = null)),
                                t(n ? "shuffle-out" : "sort-out"),
                                setTimeout(
                                    () => {
                                        if ((r(), n && d)) {
                                            (i.current = !0), (a.current = setTimeout(() => o(!0), 1e3));
                                            return;
                                        }
                                        o(n);
                                    },
                                    n ? 250 : 300,
                                );
                        },
                        [o],
                    ),
                    signalDataReady: r.useCallback(() => {
                        i.current && o(!0);
                    }, [o]),
                };
            })();
        r.useEffect(() => {
            eu && eL();
        }, [eu, eL]);
        let eO = (0, E.uM)(),
            eM = eO?.sessionId ?? "",
            { analyticsLocations: eD } = (0, w.Ay)(U.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            eP = r.useRef(null),
            eH = r.useRef(null),
            [eB, eU] = r.useState(!1),
            ew = r.useCallback(
                (e) => {
                    eU(!1),
                        eT({ isShuffling: !1, onOutroComplete: () => b(e), returnRef: eH }),
                        p.default.track(eS.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: eM,
                            sort_type: e,
                        });
                },
                [eT, b, eM],
            );
        if (null == u) return null;
        function eF(e, t) {
            let n;
            return ey && eR === ec.SHUFFLE_OUT
                ? (0, i.jsx)("div", { className: G.Z2, children: (0, i.jsx)(ea.A, {}) }, `${e}-${t}`)
                : (ey &&
                      (eR === ec.SORT_OUT
                          ? (n = G.MW)
                          : eR === ec.SHUFFLE_IN
                            ? (n = G.aS)
                            : eR === ec.SORT_IN && (n = G.F7)),
                  (0, i.jsx)(
                      E.R9,
                      {
                          newValue: { tilePosition: t, pageSection: "popular picks", categoryPosition: 2 },
                          children: (0, i.jsx)("div", {
                              className: n,
                              children: (0, i.jsx)(ei.A, {
                                  skuId: e,
                                  hideStaticBundleBackgroundAsset: !0,
                                  prioritizedCurrency: g,
                              }),
                          }),
                      },
                      e,
                  ));
        }
        return (0, i.jsx)(w.f5, {
            value: eD,
            children: (0, i.jsxs)("div", {
                className: o()(G.lD, G.YB),
                children: [
                    (0, i.jsxs)("div", {
                        className: G.$6,
                        children: [
                            (0, i.jsx)(e_.A, { label: n, personalizedResults: _ }),
                            (0, i.jsxs)("div", {
                                className: o()(G.IE, { [eC.jP]: x }),
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: G.gd,
                                        children: [
                                            (0, i.jsx)(R.E, {
                                                variant: "text-md/medium",
                                                children: O.intl.string(O.t.uaX705),
                                            }),
                                            (0, i.jsx)("div", {
                                                className: o()(c, G.pI),
                                                ref: eH,
                                                children: (0, i.jsx)(q.l, {
                                                    label: O.intl.string(O.t.uaX705),
                                                    hideLabel: !0,
                                                    options: S,
                                                    onSelectionChange: ew,
                                                    formatOption: (e) => {
                                                        let { label: t, value: n } = e;
                                                        return { id: n, label: t, value: n };
                                                    },
                                                    value: f,
                                                    selectionMode: "single",
                                                    fullWidth: !0,
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)("div", {
                                        className: c,
                                        children: (0, i.jsx)(h.$, {
                                            variant: "secondary",
                                            text: O.intl.string(O.t.X3tnc4),
                                            buttonRef: eP,
                                            onClick: function () {
                                                eU(!0),
                                                    eT({
                                                        isShuffling: !0,
                                                        onOutroComplete: () => {
                                                            C(), N((e) => e + 1);
                                                        },
                                                        returnRef: eP,
                                                        holdIntroUntilReady: A,
                                                    }),
                                                    p.default.track(eS.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                        page_session_id: eM,
                                                    });
                                            },
                                            disabled: eR !== ec.MOUNTED && eR !== ec.FINISHED,
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(T.A, {
                                "aria-live": "polite",
                                role: "status",
                                children: eB && eR === ec.FINISHED ? O.intl.string(O.t["3Pml0e"]) : "",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: G.hm,
                        children: t
                            ? (0, i.jsx)(i.Fragment, {
                                  children: [...Array(12)].map((e, t) => (0, i.jsx)(ea.A, {}, t + 1)),
                              })
                            : A
                              ? ey && eR === ec.SHUFFLE_OUT
                                  ? [...Array(s)].map((e, t) =>
                                        (0, i.jsx)(
                                            "div",
                                            { className: G.Z2, children: (0, i.jsx)(ea.A, {}) },
                                            `shuffle-placeholder-${t}`,
                                        ),
                                    )
                                  : H && null == P
                                    ? (0, i.jsx)(i.Fragment, {
                                          children: [...Array(12)].map((e, t) => (0, i.jsx)(ea.A, {}, t + 1)),
                                      })
                                    : ed.slice(0, s).map((e, t) => eF(e, t))
                              : v
                                    .slice(0, s)
                                    .map((e, t) =>
                                        null == e || null == et.A.getCategoryForProduct(e.skuId)
                                            ? null
                                            : eF(e.skuId, t),
                                    ),
                    }),
                ],
            }),
        });
    };
var eI = n(269115),
    eN = n(43990),
    ey = n(890856),
    eR = n(408278),
    eT = n(789645),
    eL = n(976860),
    eO = n(758836),
    eM = n(49999),
    eD = n(818348),
    eP = n(394107),
    eH = n(196064);
let eB = "GAME_SERVER_HOSTING_BANNER";
function eU(e) {
    let { gameServerHostingBannerBlock: t, tab: n } = e,
        l = (0, E.uM)(),
        s = r.useRef(null),
        a = r.useRef(!1),
        c = r.useRef(null),
        [u, g] = r.useState(!1),
        f = r.useCallback(
            (e) => {
                p.default.track(eS.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_type: n,
                    page_category: l?.pageCategory,
                    page_section: l?.pageSection,
                    tile_type: eB,
                    cta_name: e,
                });
            },
            [l?.sessionId, l?.pageCategory, l?.pageSection, n],
        ),
        b = r.useCallback(
            (e) => {
                e?.stopPropagation(),
                    f("go_to_game_server_hosting"),
                    (0, eL.pX)(eS.BVt.COLLECTIBLES_SHOP_WITH_TAB(eO.G2.GAME_SERVERS));
            },
            [f],
        ),
        v = r.useCallback(
            (e) => {
                e?.stopPropagation(),
                    f("dismiss"),
                    g(!0),
                    !0 === t.isDismissible &&
                        (0, x.d6)(d.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
                            dismissAction: eM.i.USER_DISMISS,
                        });
            },
            [f, t.isDismissible],
        ),
        j = r.useCallback(
            (e) => {
                !a.current &&
                    (e && null === c.current
                        ? (c.current = setTimeout(() => {
                              (a.current = !0),
                                  (c.current = null),
                                  p.default.track(eS.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: l?.sessionId,
                                      page_type: n,
                                      page_category: l?.pageCategory,
                                      page_section: l?.pageSection,
                                      type: eB,
                                  });
                          }, 1e3))
                        : e || null === c.current || (clearTimeout(c.current), (c.current = null)));
            },
            [l?.sessionId, l?.pageCategory, l?.pageSection, n],
        );
    return (r.useEffect(
        () => () => {
            null !== c.current && (clearTimeout(c.current), (c.current = null));
        },
        [],
    ),
    u)
        ? null
        : (0, i.jsx)(eN.N, {
              theme: eD.NJ.DARKER,
              children: (e) =>
                  (0, i.jsx)(eI.L, {
                      innerRef: s,
                      onChange: j,
                      threshold: 0,
                      children: (0, i.jsx)("div", {
                          ref: s,
                          className: o()(eH.YB, e),
                          children: (0, i.jsxs)(ey.s, {
                              className: eH.kL,
                              onClick: b,
                              "aria-label": O.intl.string(eP.default["34GMP9"]),
                              children: [
                                  (0, i.jsx)("img", {
                                      className: eH.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, i.jsx)("div", { className: eH.f5, "aria-hidden": !0 }),
                                  !0 === t.isDismissible &&
                                      (0, i.jsx)("div", {
                                          className: eH.b,
                                          children: (0, i.jsx)(eR.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: eT.P,
                                              onClick: v,
                                              "aria-label": O.intl.string(O.t.WAI6xu),
                                          }),
                                      }),
                                  (0, i.jsx)("div", {
                                      className: eH.jE,
                                      children: (0, i.jsxs)("div", {
                                          className: eH.rF,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: eH.Z,
                                                  children: [
                                                      (0, i.jsx)(m.D, {
                                                          className: eH.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: O.intl.string(eP.default["34GMP9"]),
                                                      }),
                                                      (0, i.jsx)(R.E, {
                                                          className: eH.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: O.intl.string(eP.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, i.jsx)(h.$, {
                                                  variant: "overlay-primary",
                                                  text: O.intl.string(O.t.jVcuVY),
                                                  onClick: b,
                                              }),
                                          ],
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  }),
          });
}
var ew = n(337183),
    eF = n(172218),
    eV = n(28863),
    eG = n(212407),
    e$ = n(815280),
    eW = n(9530);
let ez = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        l = (0, eF.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: s, bannerAnimatedUrl: r } = (0, eG.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        o = null != t.body && "" !== t.body,
        c = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, i.jsxs)("div", {
        ref: l,
        className: eW.BX,
        children: [
            (0, i.jsx)("div", {
                className: eW.vK,
                children: null != s && (0, i.jsx)(e$.A, { bannerStatic: s, bannerAnimated: r }),
            }),
            (0, i.jsx)("div", {
                className: eW.HQ,
                children: (0, i.jsxs)("div", {
                    className: eW.Yn,
                    children: [
                        null != t.endTime ? (0, i.jsx)(D, { endDate: t.endTime, size: "lg" }) : null,
                        (0, i.jsx)(m.D, {
                            variant: "heading-xxl/bold",
                            className: eW.DD,
                            color: "text-strong",
                            style: { ...a },
                            children: t.title,
                        }),
                        o || c
                            ? (0, i.jsxs)(R.E, {
                                  variant: "text-md/medium",
                                  style: { ...a },
                                  children: [
                                      o && t.body,
                                      o && c && " ",
                                      c &&
                                          (0, i.jsx)(eV.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: eW.CU,
                                              style: { ...a },
                                              children: O.intl.string(O.t.O7ADgv),
                                          }),
                                  ],
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
};
var eY = n(449543),
    eK = n(4227),
    eX = n(189213),
    eq = n(290136),
    eZ = n(478016),
    eJ = n(825484),
    eQ = n(192308),
    e0 = n(812993),
    e1 = n(866665),
    e2 = n(713517),
    e5 = n(914410),
    e4 = n(839534),
    e3 = n(597783),
    e9 = n(61750);
function e6(e, t) {
    let n = r.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        l = (0, X.bG)([eK.A], () => eK.A.getPurchases(n));
    return {
        readyToClaim: r.useMemo(() => l.length === n.length, [l, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: l,
    };
}
var e8 = n(496552),
    e7 = n(299533);
let te = r.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: l } = (0, e3.Z)(n),
            s = r.useRef(null),
            { isHoveringOrFocusing: a } = (0, e2.A)(s),
            { readyToClaim: c, collectibleProductSkuIds: d, collectedSkuIds: u } = e6(t, n),
            g = (0, X.bG)([eK.A], () => eK.A.isClaiming === n);
        return (0, i.jsx)(eI.L, {
            onChange: l,
            threshold: 0,
            innerRef: s,
            children: (0, i.jsx)("div", {
                ref: s,
                className: o()(e8.ty, e7.Q3, { [e8.yo]: a }),
                "aria-label": O.intl.formatToPlainString(O.t.Ez6aHE, { category: t.name }),
                children: (0, i.jsxs)("div", {
                    className: e8.qt,
                    children: [
                        (0, i.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: e7.L8,
                        }),
                        (0, i.jsx)("div", {
                            className: e8.N1,
                            children: (0, i.jsx)(e0.Lp, {
                                text: O.intl.string(O.t.rykAJ9),
                                disableColor: !0,
                                className: e7.HZ,
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: e8.xQ,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: e7.xE,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: e7.cs,
                                            children: [
                                                (0, i.jsx)(m.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: e8.tZ,
                                                    children: O.intl.string(O.t["0mDmg/"]),
                                                }),
                                                (0, i.jsx)(e1.m, {
                                                    text: c
                                                        ? O.intl.string(O.t.cKH3tk)
                                                        : O.intl.formatToPlainString(O.t["8aMDPc"], {
                                                              totalCount: d.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, i.jsx)("span", {
                                                        className: e7.ZB,
                                                        children: (0, i.jsx)(eq.CircleQuestionIcon, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)("div", {
                                            className: e8.oh,
                                            "aria-hidden": !0,
                                            children: (0, i.jsxs)("div", {
                                                className: e7.L$,
                                                children: [
                                                    (0, i.jsx)(e5.Ay, {
                                                        variant: e5.qP.BLUE,
                                                        progress: u.length,
                                                        maximum: d.length,
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: o()(e7.__, { [e7.gF]: c }),
                                                        children: [
                                                            c
                                                                ? (0, i.jsx)(eZ.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, i.jsx)(R.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: O.intl.formatToPlainString(O.t["5TwASM"], {
                                                                    collectedCount: u.length,
                                                                    totalCount: d.length,
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    className: e8.Vs,
                                    children: (0, i.jsx)(eJ.e, {
                                        wrap: !1,
                                        className: e8.Ld,
                                        fullWidth: !0,
                                        children: (0, i.jsx)(h.$, {
                                            variant: "primary",
                                            onClick: function (e) {
                                                e.stopPropagation(),
                                                    c &&
                                                        (0, e4.BX)(t.skuId, n)
                                                            .then(() => {
                                                                let e = et.A.getProduct(n);
                                                                null != e &&
                                                                    (0, e9.A)({
                                                                        product: e,
                                                                        analyticsLocations: [],
                                                                        overrideGraphic: {
                                                                            type: "video",
                                                                            src: "https://cdn.discordapp.com/assets/content/0b8a43491ba8f130b2d07df54fb2b7582d7eb21af11491a58db2d440bb1a2c87.webm",
                                                                            fallbackImageSrc:
                                                                                "https://cdn.discordapp.com/assets/content/b01f9c900f0fd1f3be0846b6f5fc4feac072c377d6ceaf1e4157bccf44d2b6bf.png",
                                                                            loop: !0,
                                                                            loopAt: 6,
                                                                            aspectRatio: "16/9",
                                                                        },
                                                                    });
                                                            })
                                                            .catch(() => {
                                                                (0, eQ.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, i.jsx)(eX.Modal, {
                                                                            transitionState: e.transitionState,
                                                                            onClose: e.onClose,
                                                                            size: "sm",
                                                                            title: O.intl.string(O.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: O.intl.string(O.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, i.jsx)("div", {
                                                                                children: O.intl.string(O.t["0YpIF/"]),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            });
                                            },
                                            text: O.intl.string(O.t.VnVTNc),
                                            fullWidth: !0,
                                            disabled: !c,
                                            loading: g,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    }),
    tt = function (e) {
        let t,
            n,
            l,
            { isBlockLoading: s = !1, heroBlock: a, tab: o } = e,
            c = (0, er.Mk)(o),
            d = r.useMemo(() => et.A.getCategoryForProduct(a.rewardSkuId), [a.rewardSkuId]),
            u = (0, X.bG)([eK.A], () => eK.A.getPurchase(a.rewardSkuId)),
            { products: m } =
                ((t = (0, eb.A)()),
                (n = r.useMemo(
                    () => (s ? [] : t(a.rankedSkuIds).filter((e) => e.skuId !== a.rewardSkuId || null != u)),
                    [s, t, a.rankedSkuIds, u, a.rewardSkuId],
                )),
                (l = (0, eE.p)()(n)),
                { products: (0, ev.X)(l) }),
            h = r.useMemo(
                () =>
                    !s &&
                    0 !== a.rankedSkuIds.length &&
                    !(m.length > 0) &&
                    a.rankedSkuIds.every((e) => et.A.getProduct(e)?.variantGroupStoreListingId != null),
                [s, a.rankedSkuIds, m.length],
            ),
            g = s || h,
            { readyToClaim: x } = e6(d, a.rewardSkuId),
            f = null == u && null != a.rewardSkuId && null != d;
        return (0, i.jsx)(eY.A, {
            gap: "xl",
            children: g
                ? (0, i.jsx)(i.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, i.jsx)(ea.A, {}, t)),
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          f &&
                              x &&
                              (0, i.jsx)(
                                  E.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, i.jsx)(te, { category: d, rewardSkuId: a.rewardSkuId }),
                                  },
                                  a.rewardSkuId,
                              ),
                          m.map((e, t) => {
                              let n = et.A.getCategoryForProduct(e.skuId);
                              return null == e || null == n
                                  ? null
                                  : (0, i.jsx)(
                                        E.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, i.jsx)(ei.A, { skuId: e.skuId, prioritizedCurrency: c }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, F.$b)(90);
let tn = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: c.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    tl = function (e) {
        let { isLoading: t = !1, heroBlock: n, tab: l, onVisibilityChange: s } = e,
            r = (0, eF.K)(
                (e) => {
                    s?.(e);
                },
                0.1,
                null != s,
            ),
            a = (0, X.bG)([J.default], () => J.default.getCurrentUser()),
            { analyticsLocations: c } = (0, w.Ay)(U.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: d,
                logoDisplayConfig: u,
                heroLogo: h,
                heroBannerStatic: g,
                heroBannerAnimated: x,
            } = (0, eG.Kk)(n),
            f = d?.responsive ?? !1,
            p = d?.backgroundStyle;
        return null != a && (t || n !== tn)
            ? (0, i.jsx)(w.f5, {
                  value: c,
                  children: (0, i.jsxs)("div", {
                      ref: r,
                      className: G.os,
                      children: [
                          (0, i.jsx)("div", {
                              className: o()(G.vK, { [G.no]: f }),
                              style: null != p ? { background: p } : void 0,
                              children:
                                  null != g &&
                                  (0, i.jsx)(e$.A, { bannerStatic: g, bannerAnimated: x, isResponsive: f }),
                          }),
                          (0, i.jsxs)("div", {
                              className: G.xX,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: o()(G.bC, { [G.no]: f }),
                                      children: t
                                          ? (0, i.jsx)("div", { className: G.Hw })
                                          : (0, i.jsx)("div", {
                                                className: G.Hw,
                                                children: (0, i.jsxs)("div", {
                                                    className: G.Wq,
                                                    children: [
                                                        null != h &&
                                                            (0, i.jsx)("img", {
                                                                className: G.rm,
                                                                src: h,
                                                                alt: n.name,
                                                                style: u?.toDesktopStyles(),
                                                            }),
                                                        null != n.title &&
                                                            (0, i.jsx)(m.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: G.DD,
                                                                color: "text-strong",
                                                                children: n.title,
                                                            }),
                                                        "" !== n.summary &&
                                                            (0, i.jsx)(R.E, {
                                                                variant: "text-md/normal",
                                                                className: G.Tm,
                                                                style:
                                                                    null != n.bannerTextColor
                                                                        ? { color: n.bannerTextColor }
                                                                        : void 0,
                                                                children: n.summary,
                                                            }),
                                                    ],
                                                }),
                                            }),
                                  }),
                                  (0, i.jsx)(tt, { isBlockLoading: t, heroBlock: n, tab: l }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var ts = n(554661);
let ti = function (e) {
    let { shelf: t, handleTransition: n, tab: l } = e,
        s = (0, X.bG)([J.default], () => J.default.getCurrentUser()),
        a = (0, er.Mk)(l),
        c = (0, X.bG)([et.A], () => (null != t.categorySkuId ? et.A.getCategory(t.categorySkuId) : void 0)),
        d = (0, eb.A)(),
        u = r.useMemo(() => d(t.rankedSkuIds), [t.rankedSkuIds, d]),
        g = (0, ev.X)(u),
        { analyticsLocations: x } = (0, w.Ay)(U.A.COLLECTIBLES_SHOP_SHELF),
        f = r.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: c?.isOrbsExclusive === !0 && l !== eO.G2.ORBS,
            });
        }, [t.categorySkuId, c, n, l]);
    if (null == s || 0 === g.length) return null;
    let p = t.buttonText ?? O.intl.formatToPlainString(O.t.bc9RBE, { category_name: t.name }),
        b = t.showButton,
        v = t.desktopBackgroundImage,
        j = null != v;
    return (0, i.jsx)(w.f5, {
        value: x,
        children: (0, i.jsxs)("div", {
            className: o()(ts.mu, G.YB, j ? ts.VA : ts.Ti),
            children: [
                j && (0, i.jsx)("img", { className: ts.iL, src: v, alt: "", "aria-hidden": !0 }),
                (0, i.jsxs)("div", {
                    className: ts.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: ts.wx,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    style: j ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                b &&
                                    (0, i.jsx)(h.$, {
                                        variant: j ? "overlay-primary" : "secondary",
                                        text: p,
                                        onClick: f,
                                    }),
                            ],
                        }),
                        (0, i.jsx)(eY.A, {
                            gap: "xl",
                            edgeFade: j ? "sm" : void 0,
                            children: g.map((e, n) =>
                                null == et.A.getCategoryForProduct(e.skuId)
                                    ? null
                                    : (0, i.jsx)(
                                          E.R9,
                                          {
                                              newValue: { tilePosition: n, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, i.jsx)(ei.A, { skuId: e.skuId, prioritizedCurrency: a }),
                                          },
                                          e.skuId,
                                      ),
                            ),
                        }),
                    ],
                }),
            ],
        }),
    });
};
var tr = n(465794),
    ta = n(69236),
    to = n(44724),
    tc = n(421108),
    td = n(873297),
    tu = n(202541);
let tm = function (e) {
    let {
            applicationId: t,
            headerText: n,
            gradientColors: l,
            gradientAngle: s,
            skuIds: a,
            tab: o,
            endTime: c,
            ctaType: d = "storefront",
            logoUrl: u,
        } = e,
        m = (0, tc.ur)(c) ?? void 0,
        h = (0, ta.W8)(),
        g = r.useMemo(
            () =>
                "nitro" !== d || h
                    ? {
                          kind: "button",
                          text: O.intl.string(O.t.apFNLU),
                          onClick: () => (0, to.default)({ applicationId: t }),
                          onMouseDown: () => (0, to.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, i.jsx)(tr.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: tu.pe.TIER_2,
                              buttonTextOverride: O.intl.string(O.t.pj0XBN),
                          }),
                      },
            [d, t, h],
        );
    return (0, i.jsx)(td.A, {
        skuIds: a,
        tab: o,
        applicationId: t,
        headerText: n,
        logoUrl: u,
        cta: g,
        timeLeftText: m,
        analyticsSection: "slayer-storefront-promotional-banner",
        analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
        analyticsImpressionType: "social_layer_storefront_promotional_banner",
        backgroundGradient: `linear-gradient(${s}deg, ${l.join(", ")})`,
    });
};
var th = n(613258),
    tg = n(815021),
    tx = n(939249),
    tf = n(975571);
let tp = function (e) {
        let { wideBannerBlock: t, tab: n } = e,
            l = et.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            s = r.useRef(null),
            a = r.useRef(null),
            [c, u] = r.useState(),
            [g, f] = r.useState(!1);
        r.useEffect(() => {
            let e = a.current;
            if (null != e)
                return (
                    e.complete ? t() : (e.onload = t),
                    () => {
                        e.onload = null;
                    }
                );
            function t() {
                null != e && e.naturalWidth > 0 && e.naturalHeight > 0 && u(1080 * (e.naturalHeight / e.naturalWidth));
            }
        }, []);
        let b = l?.skuId ?? "",
            { handleCardVisibilityChange: v } = (0, e3.Z)(b, "home", "marketing wide banner"),
            j = (0, E.uM)(),
            { bannerURL: S } = (0, eG.w$)(t),
            C = n === eO.G2.ORBS,
            _ = null != t.ctaRoute && "" !== t.ctaRoute,
            k = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || _),
            A = null != t.logoURL && "" !== t.logoURL,
            I = r.useCallback(() => {
                if ((f(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, x.$l)(d.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: eM.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            N = r.useCallback(
                (e) => {
                    p.default.track(eS.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: j?.sessionId,
                        sku_id: b,
                        page_type: n,
                        page_section: j?.pageSection,
                        page_category: j?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(j?.tilePosition),
                        cta_name: e,
                    });
                },
                [j, b, n],
            ),
            y = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((N(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    n = parseInt(t[2], 10);
                                (0, to.default)({ guildId: e, pageIndex: n });
                            }
                        } else (0, eL.pX)(e);
                    }
                },
                [t.ctaRoute, N],
            );
        if (null == S || g) return null;
        let T = o()(G.nM, G.Tq, G.TS, G.YB, { [G._1]: C, [G.vb]: _ }),
            L = (0, i.jsxs)(i.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, i.jsx)("div", {
                            className: G.Mh,
                            children: (0, i.jsx)(tg.J, {
                                size: "sm",
                                onClick: (e) => {
                                    e.stopPropagation(), I();
                                },
                                "aria-label": O.intl.string(O.t.WAI6xu),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: o()(G.zK, { [G._1]: C }),
                        style: null != c ? { height: `${c}px` } : void 0,
                        children: (0, i.jsx)("img", {
                            ref: a,
                            src: S,
                            alt: t.title,
                            className: o()(G.LN, { [G.d5]: C }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: o()(G.Ep, { [G.Qq]: k }),
                        style: { maxHeight: null != c ? `${c}px` : "auto" },
                        children: (0, i.jsxs)("div", {
                            className: G.E8,
                            children: [
                                (0, i.jsx)(m.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: C ? G.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, i.jsx)(R.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: C ? "text-md/medium" : "text-sm/medium",
                                    children: C
                                        ? O.intl.format(O.t.SFFP7K, {
                                              helpdeskArticle: tf.A.getArticleURL(eS.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                k &&
                                    (0, i.jsxs)("div", {
                                        className: G.nP,
                                        children: [
                                            (0, i.jsx)(h.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    e.stopPropagation(), y(t.ctaText ?? O.intl.string(O.t.jVcuVY));
                                                },
                                                text: t.ctaText ?? O.intl.string(O.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? O.intl.formatToPlainString(O.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            A && (0, i.jsx)("img", { src: t.logoURL, alt: "", className: G.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, i.jsx)(eN.N, {
            theme: C ? void 0 : eD.NJ.DARK,
            children: (e) =>
                (0, i.jsx)(eI.L, {
                    innerRef: s,
                    onChange: v,
                    threshold: 0,
                    children: _
                        ? (0, i.jsx)(tx.D, { innerRef: s, onClick: () => y(null), className: o()(e, T), children: L })
                        : (0, i.jsx)("div", { ref: s, className: o()(e, T), children: L }),
                }),
        });
    },
    tE = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: l, tab: s } = e,
            { noCache: a, includeUnpublished: u } = (0, k.A)(),
            [m, h] = r.useState(!1),
            g = (0, E.uM)(),
            p = g?.sessionId ?? "",
            b = (0, f.H)({ location: "collectibles_shop_feed" });
        r.useEffect(() => {
            (0, S.z)({
                sessionId: p,
                checkpoint: S.t.SHOP_MOUNTED,
                tab: s,
                unpublishedCategoriesShown: u,
                cacheDisabled: a,
            });
        }, [s]);
        let {
                isFetchingShopHome: _,
                fetchShopHomeError: A,
                shopBlocks: I,
                refreshShopHome: N,
            } = (0, j.y)(s, { noCache: a, includeUnpublished: u, logPerf: !0 }, { sessionId: p, tab: s }),
            y = r.useCallback(() => {
                N();
            }, [N]);
        return (r.useEffect(() => {
            null != A ||
                _ ||
                0 === I.length ||
                (0, S.z)({
                    sessionId: p,
                    checkpoint: S.t.SHOP_RENDERED,
                    tab: s,
                    unpublishedCategoriesShown: u,
                    cacheDisabled: a,
                });
        }, [A, _, I.length, u, a, p, s]),
        null != A)
            ? (0, i.jsx)(C.h, { onRetry: y, errorOrigin: C.A.SHOP_PAGE, errorMessage: A.message })
            : _ || 0 === I.length
              ? (0, i.jsxs)("div", {
                    className: o()(G.g4, G.Of),
                    children: [
                        (0, i.jsx)(ew.A, { isLoading: _, handleTransition: t, tab: s }),
                        (0, i.jsx)(z, { isLoading: _, handleTransition: t, categories: [] }),
                        (0, i.jsx)(eA, {
                            isLoading: _,
                            title: s === eO.G2.ORBS ? O.intl.string(O.t.dFgeuZ) : O.intl.string(O.t.NSv5KV),
                            numVisibleItems: n,
                            tab: s,
                        }),
                    ],
                })
              : (0, i.jsx)(i.Fragment, {
                    children: I.map((e, r) =>
                        (function (e, r, a) {
                            if (null == e) return null;
                            let u = null,
                                g = !1;
                            switch (e.type) {
                                case c.g.HERO:
                                    u = (0, i.jsx)(
                                        ew.A,
                                        { isLoading: _, handleTransition: t, heroBlock: e, tab: s },
                                        a,
                                    );
                                    break;
                                case c.g.FEATURED:
                                    u = (0, i.jsx)(z, { isLoading: _, handleTransition: t, featuredBlockRecord: e }, a);
                                    break;
                                case c.g.FEED:
                                    let f = e.sortedSkuIds;
                                    u = (0, i.jsx)(
                                        eA,
                                        {
                                            title:
                                                s === eO.G2.ORBS
                                                    ? O.intl.string(O.t.dFgeuZ)
                                                    : O.intl.string(O.t.NSv5KV),
                                            isLoading: l,
                                            numVisibleItems: n,
                                            sortedSkuIds: f,
                                            buttonContainerClassName: r?.type === c.g.IMMERSIVE_BANNER ? G.w : void 0,
                                            tab: s,
                                            orbsSupportedOnly: s === eO.G2.ORBS,
                                        },
                                        a,
                                    );
                                    break;
                                case c.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, x.En)(d.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    u = (0, i.jsx)(tp, { wideBannerBlock: e, tab: s }, a);
                                    break;
                                case c.g.SHELF:
                                    u = (0, i.jsx)(ti, { handleTransition: t, shelf: e, tab: s }, a);
                                    break;
                                case c.g.COUNTDOWN_TIMER:
                                    (u = (0, i.jsx)(H, { countdownTimerBlock: e, isVisible: m }, a)), (g = !0);
                                    break;
                                case c.g.IMMERSIVE_BANNER:
                                    u = (0, i.jsx)(
                                        ez,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => h(!e) },
                                        a,
                                    );
                                    break;
                                case c.g.REWARD_HERO:
                                    u = (0, i.jsx)(tl, { isLoading: _, handleTransition: t, heroBlock: e, tab: s }, a);
                                    break;
                                case c.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !b ||
                                        (!0 === e.isDismissible &&
                                            (0, x.En)(d.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, i.jsx)(
                                        v,
                                        {
                                            blockType: e.type,
                                            children: (0, i.jsx)(eU, { gameServerHostingBannerBlock: e, tab: s }),
                                        },
                                        a,
                                    );
                                case c.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, i.jsx)(
                                        v,
                                        {
                                            blockType: e.type,
                                            children: (0, i.jsx)(tm, {
                                                applicationId: e.applicationId,
                                                headerText: e.headerText,
                                                gradientColors: e.gradientColors,
                                                gradientAngle: e.gradientAngle,
                                                skuIds: e.skuIds,
                                                tab: s,
                                                endTime: e.endTime,
                                                ctaType: e.ctaType,
                                                logoUrl: e.logoUrl,
                                            }),
                                        },
                                        a,
                                    );
                                default:
                                    return null;
                            }
                            return (0, i.jsx)(
                                v,
                                {
                                    blockType: e.type,
                                    children: (0, i.jsx)("div", {
                                        className: o()(G.v1, G.Of, { [G.J1]: 0 === a || g }),
                                        children: u,
                                    }),
                                },
                                a,
                            );
                        })(e, r > 0 ? I[r - 1] : null, r),
                    ),
                });
    },
    tb = function (e) {
        let { handleTransition: t, tab: n, transitionState: l } = e,
            s = r.useRef(null),
            { handleScroll: a } = (0, g.X)(s, n),
            o = (0, _.U)(),
            c = (0, E.uM)(),
            [d, x] = r.useState(eO.md),
            [f, b] = r.useState(!1);
        return (
            r.useEffect(() => {
                if (null != s.current) {
                    function e() {
                        if (null == s.current) return;
                        let e = s.current.getDistanceFromBottom();
                        d >= 36 ? b(e < 20) : e <= 200 && x((e) => e + eO.md);
                    }
                    let t = s.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [s, d, x, b]),
            (0, i.jsx)(u.Ch, {
                className: G.OW,
                ref: s,
                onScroll: a,
                children: (0, i.jsxs)("div", {
                    className: G.bx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: G.rb,
                            children: [
                                (0, i.jsx)(tE, {
                                    handleTransition: t,
                                    numVisibleItems: d,
                                    isFetchingCategories: o,
                                    tab: n,
                                }),
                                n !== eO.G2.CATALOG &&
                                    d >= 36 &&
                                    (0, i.jsxs)("div", {
                                        className: G.R$,
                                        children: [
                                            (0, i.jsx)(m.D, {
                                                variant: "heading-md/semibold",
                                                children: O.intl.string(O.t.Yr70c4),
                                            }),
                                            (0, i.jsx)(h.$, {
                                                variant: "primary",
                                                text: O.intl.string(O.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        p.default.track(eS.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: c?.sessionId,
                                                            page_type: n,
                                                            page_category: n === eO.G2.HOME ? void 0 : c?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)(th.A, { peaking: f, transitioning: l === eO.Pf.OUT }),
                    ],
                }),
            })
        );
    };
