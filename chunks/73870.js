n.d(t, { A: () => tS });
var l,
    s,
    i = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a),
    d = n(651162),
    c = n(554146),
    u = n(689175),
    m = n(297264),
    h = n(821609),
    g = n(564322),
    x = n(367727),
    f = n(196736),
    p = n(174459),
    b = n(440938);
let E = r.createContext(null);
function v(e) {
    let { blockType: t, children: n } = e,
        l = r.useMemo(() => ({ blockType: t }), [t]);
    return (0, i.jsx)(E.Provider, { value: l, children: n });
}
var j = n(755172),
    S = n(100057),
    C = n(599062),
    _ = n(159439),
    I = n(998694),
    k = n(892437),
    N = n(607399),
    A = n(946015),
    y = n(717421),
    R = n(834730);
n(321073);
var T = n(140735),
    L = n(496431),
    O = n(375708),
    M = n(302326);
function D(e) {
    let { endDate: t, size: n = "md", className: l, showSeconds: s = !1 } = e,
        { days: r, hours: a, minutes: d, seconds: c } = (0, L.A)(t),
        u = (function (e, t, n, l, s) {
            function i(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let r = [i(e), i(t), i(n)];
            return (s && r.push(i(l)), r.join(":"));
        })(r, a, d, c, s);
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
            (0, i.jsx)(T.A, { children: O.intl.format(O.t.j6IyVe, { days: r, hours: a, minutes: d }) }),
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
    return (0, i.jsxs)(k.animated.div, {
        className: o()([P.lP, N.Fr && P.yJ]),
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
            (0, i.jsxs)(A.s, {
                direction: A.s.Direction.VERTICAL,
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
    F = n(688810),
    w = n(993408),
    V = n(196231),
    G = n(105499);
function $(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, i.jsx)("div", {
        className: o()(G.n9, G.YB),
        children: n?.subblocks.map((e, n) =>
            e.type === B.u.CATEGORY
                ? (0, i.jsx)(
                      b.R9,
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
                                  badgeText: (0, w.HF)(e.unpublishedAt) ? O.intl.string(O.t["h/uBCR"]) : void 0,
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
        children: (0, i.jsxs)(b.R9, {
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
                        badgeText: (0, w.HF)(l.unpublishedAt) ? O.intl.string(O.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != s &&
                    (0, i.jsx)(V.S, {
                        category: s,
                        badgeText: (0, w.HF)(s.unpublishedAt) ? O.intl.string(O.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let z = function (e) {
    let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: s } = e,
        { analyticsLocations: r } = (0, F.Ay)(U.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, i.jsxs)("div", {
              className: o()(G.n9, G.YB),
              children: [
                  (0, i.jsx)("div", { className: o()(G.Jn, G.oT), children: (0, i.jsx)("div", { className: G.uy }) }),
                  (0, i.jsx)("div", { className: o()(G.Jn, G.oT), children: (0, i.jsx)("div", { className: G.uy }) }),
              ],
          })
        : null != s
          ? (0, i.jsx)(F.f5, {
                value: r,
                children: (0, i.jsx)($, { featuredBlockRecord: s, handleTransition: n, isLoading: !1 }),
            })
          : (0, i.jsx)(F.f5, {
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
    J = n(775602),
    Z = n(287809),
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
    ed =
        (((s = {}).MOUNTED = "mounted"),
        (s.SORT_OUT = "sort-out"),
        (s.SORT_IN = "sort-in"),
        (s.SHUFFLE_OUT = "shuffle-out"),
        (s.SHUFFLE_IN = "shuffle-in"),
        (s.FINISHED = "finished"),
        s),
    ec = n(401864),
    eu = n(124987),
    em = n(946716);
let eh = {
    [K.RECENT]: { sortType: eu.$.RECENCY, sortDirection: ec.A.DESC },
    [K.PRICE_LOW_TO_HIGH]: { sortType: eu.$.PRICE, sortDirection: ec.A.ASC },
};
n(667532);
var eg = n(435558),
    ex = n.n(eg),
    ef = n(153488),
    ep = n(511265),
    eb = n(313276),
    eE = n(206077),
    ev = n(623373),
    ej = n(652215),
    eS = n(146919),
    eC = n(645501);
let e_ = [],
    eI = function (e) {
        let {
                isLoading: t,
                title: n,
                sortedSkuIds: l,
                numVisibleItems: s,
                tab: a,
                buttonContainerClassName: d,
                orbsSupportedOnly: c,
            } = e,
            u = (0, X.bG)([Z.default], () => Z.default.getCurrentUser()),
            m = ee.Ay.canUseShopDiscounts(u),
            g = (0, er.Mk)(a),
            x = (0, eS.yB)("FeedBlock"),
            {
                sortType: f,
                setSortType: E,
                sortedItems: v,
                orderedSkuIds: j,
                sortOptions: S,
                shuffleProducts: C,
                showRecommendationOption: _,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: n, orbsSupportedOnly: l } = e,
                    s = (0, X.bG)([ef.A], () => ef.A.hasConsented(ej.YAq.PERSONALIZATION)),
                    i = r.useMemo(() => t?.[K.RECOMMENDED] ?? [], [t]),
                    a = r.useMemo(() => t?.[K.POPULAR] ?? [], [t]),
                    o = i.length > 0 && s,
                    [d, c] = r.useState(o ? K.RECOMMENDED : K.POPULAR),
                    u = (0, X.bG)([et.A], () => et.A.productsWithVariantsAsGroup),
                    m = r.useMemo(() => (0, w.CE)(u), [u]),
                    h = (0, eb.A)(),
                    g = (0, ep.p)(),
                    [x, f] = r.useState([]),
                    p = r.useCallback(() => {
                        (c(K.RANDOM), f(ex().shuffle(m)));
                    }, [m]);
                r.useEffect(() => {
                    f(ex().shuffle(m));
                }, [m]);
                let b = r.useMemo(() => {
                        let e = [];
                        switch (d) {
                            case K.RECENT:
                                e = m;
                                break;
                            case K.PRICE_LOW_TO_HIGH:
                                e = (0, w.bf)([...m], n, l);
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
                        return l ? (0, ev.ex)(g(e)) : g(e);
                    }, [d, l, g, n, m, h, i, a, x]),
                    E = (0, eE.X)(b),
                    v = r.useMemo(
                        () => (d === K.RECOMMENDED ? i : d === K.POPULAR ? a : E.map((e) => e.skuId)),
                        [d, i, a, E],
                    );
                return {
                    sortType: d,
                    setSortType: c,
                    sortedItems: E,
                    orderedSkuIds: v,
                    sortOptions: r.useMemo(() => {
                        let e = [
                            { value: K.POPULAR, label: O.intl.string(O.t.Y68e5p) },
                            { value: K.RECENT, label: O.intl.string(O.t["51Bhiz"]) },
                            { value: K.PRICE_LOW_TO_HIGH, label: O.intl.string(O.t.m8RVU2) },
                        ];
                        return (o && e.unshift({ value: K.RECOMMENDED, label: O.intl.string(O.t.zPWgFG) }), e);
                    }, [o]),
                    showRecommendationOption: o,
                    shuffleProducts: p,
                };
            })({ sortedSkuIds: l, hasShopDiscount: m, orbsSupportedOnly: c }),
            I = f === K.RANDOM,
            k = (0, en.$)("feed_block"),
            [N, A] = r.useState(0),
            y = `${f}:${!0 === c}:${N}`,
            [L, M] = r.useState({ key: y, extra: 0 }),
            D = L.key === y ? L.extra : 0;
        L.key !== y && M({ key: y, extra: 0 });
        let {
                skuIds: P,
                isLoading: H,
                hasMore: B,
            } = (function (e) {
                let { sortType: t, orbsSupportedOnly: n, numVisibleItems: l, enabled: s, shuffleNonce: i } = e,
                    a = r.useMemo(
                        () =>
                            (function (e, t) {
                                if (e === K.RANDOM) return { randomize: !0 };
                                if (t && e === K.POPULAR) return { randomize_daily: !0 };
                                let n = eh[e];
                                return null == n ? null : { sort_type: n.sortType, sort_direction: n.sortDirection };
                            })(t, !0 === n),
                        [t, n],
                    ),
                    o = t === K.RANDOM,
                    d = s && l > 0 && null != a && null != a ? `${JSON.stringify(a)}:${!0 === n}` : null,
                    c = null == d ? null : `${d}:${o ? i : ""}:${l}`,
                    [u, m] = r.useState(null);
                if (
                    (r.useEffect(() => {
                        if (null == c || null == a) return;
                        let e = !1;
                        return (
                            (0, em.$)({
                                item_types: [],
                                colors: [],
                                themes: [],
                                orbs_eligible: !0 === n || void 0,
                                offset: 0,
                                limit: l + (o ? 32 : 8),
                                ...a,
                                published_collections_only: !0,
                            })
                                .then((t) => {
                                    e ||
                                        m({
                                            key: c,
                                            sortIdentityKey: d,
                                            skuIds: t.skus ?? [],
                                            hasMore: t.pagination?.has_more === !0,
                                        });
                                })
                                .catch(() => {
                                    e || m({ key: c, sortIdentityKey: d, skuIds: [], hasMore: !1 });
                                }),
                            () => {
                                e = !0;
                            }
                        );
                    }, [c, d, o, a, n, l]),
                    null == c)
                )
                    return { skuIds: null, isLoading: !1, hasMore: !1 };
                let h = null != u && u.sortIdentityKey === d ? u : null;
                return { skuIds: h?.skuIds ?? null, isLoading: u?.key !== c, hasMore: h?.hasMore ?? !1 };
            })({ sortType: f, orbsSupportedOnly: c, numVisibleItems: s + D, enabled: k, shuffleNonce: N }),
            V = P ?? j,
            $ = r.useMemo(() => V.slice(0, s + D + (I ? 32 : 8)), [V, s, D, I]),
            W = (0, es.hv)(k ? $ : e_, { needsCategory: !1 }),
            z = (0, el.c)("feed_block"),
            ec = r.useMemo(() => {
                if (!k) return $;
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
            }, [k, $, W, z]),
            eu = r.useMemo(
                () =>
                    !!k &&
                    !H &&
                    $.every((e) => {
                        let t = W[e]?.state;
                        return "ready" === t || "error" === t;
                    }),
                [k, H, $, W],
            ),
            eg = !I && B && D < 16,
            eI = s - ec.length;
        if (eu && eI > 0 && eg) {
            let e = Math.min(16, D + eI + 8);
            e !== D && M({ key: y, extra: e });
        }
        let ek = (0, X.bG)([J.Ay], () => J.Ay.useReducedMotion),
            eN = (0, X.bG)([Q.A], () => Q.A.isFocused()),
            eA = !ek && eN,
            {
                animationPhase: ey,
                startAnimation: eR,
                signalDataReady: eT,
            } = (() => {
                let [e, t] = r.useState("mounted"),
                    [n, l] = r.useState(!1),
                    s = r.useRef(null),
                    i = r.useRef(!1),
                    a = r.useRef(null);
                (r.useEffect(() => {
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
                    ));
                let o = r.useCallback((e) => {
                    ((i.current = !1),
                        null != a.current && (clearTimeout(a.current), (a.current = null)),
                        t(e ? "shuffle-in" : "sort-in"),
                        setTimeout(() => t("finished"), e ? 200 : 300));
                }, []);
                return {
                    animationPhase: e,
                    startAnimation: r.useCallback(
                        (e) => {
                            let { isShuffling: n, onOutroComplete: r, returnRef: d, holdIntroUntilReady: c = !1 } = e;
                            (d?.current != null && ((s.current = d.current), l(!0)),
                                (i.current = !1),
                                null != a.current && (clearTimeout(a.current), (a.current = null)),
                                t(n ? "shuffle-out" : "sort-out"),
                                setTimeout(
                                    () => {
                                        if ((r(), n && c)) {
                                            ((i.current = !0), (a.current = setTimeout(() => o(!0), 1e3)));
                                            return;
                                        }
                                        o(n);
                                    },
                                    n ? 250 : 300,
                                ));
                        },
                        [o],
                    ),
                    signalDataReady: r.useCallback(() => {
                        i.current && o(!0);
                    }, [o]),
                };
            })();
        r.useEffect(() => {
            eu && eT();
        }, [eu, eT]);
        let eL = (0, b.uM)(),
            eO = eL?.sessionId ?? "",
            { analyticsLocations: eM } = (0, F.Ay)(U.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            eD = r.useRef(null),
            eP = r.useRef(null),
            [eH, eB] = r.useState(!1),
            eU = r.useCallback(
                (e) => {
                    (eB(!1),
                        eR({ isShuffling: !1, onOutroComplete: () => E(e), returnRef: eP }),
                        p.default.track(ej.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: eO,
                            sort_type: e,
                        }));
                },
                [eR, E, eO],
            );
        if (null == u) return null;
        function eF(e, t) {
            let n;
            return eA && ey === ed.SHUFFLE_OUT
                ? (0, i.jsx)("div", { className: G.Z2, children: (0, i.jsx)(ea.A, {}) }, `${e}-${t}`)
                : (eA &&
                      (ey === ed.SORT_OUT
                          ? (n = G.MW)
                          : ey === ed.SHUFFLE_IN
                            ? (n = G.aS)
                            : ey === ed.SORT_IN && (n = G.F7)),
                  (0, i.jsx)(
                      b.R9,
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
        return (0, i.jsx)(F.f5, {
            value: eM,
            children: (0, i.jsxs)("div", {
                className: o()(G.lD, G.YB),
                children: [
                    (0, i.jsxs)("div", {
                        className: G.$6,
                        children: [
                            (0, i.jsx)(eC.A, { label: n, personalizedResults: _ }),
                            (0, i.jsxs)("div", {
                                className: o()(G.IE, { [eS.jP]: x }),
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: G.gd,
                                        children: [
                                            (0, i.jsx)(R.E, {
                                                variant: "text-md/medium",
                                                children: O.intl.string(O.t.uaX705),
                                            }),
                                            (0, i.jsx)("div", {
                                                className: o()(d, G.pI),
                                                ref: eP,
                                                children: (0, i.jsx)(q.l, {
                                                    label: O.intl.string(O.t.uaX705),
                                                    hideLabel: !0,
                                                    options: S,
                                                    onSelectionChange: eU,
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
                                        className: d,
                                        children: (0, i.jsx)(h.$, {
                                            variant: "secondary",
                                            text: O.intl.string(O.t.X3tnc4),
                                            buttonRef: eD,
                                            onClick: function () {
                                                (eB(!0),
                                                    eR({
                                                        isShuffling: !0,
                                                        onOutroComplete: () => {
                                                            (C(), A((e) => e + 1));
                                                        },
                                                        returnRef: eD,
                                                        holdIntroUntilReady: k,
                                                    }),
                                                    p.default.track(ej.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                        page_session_id: eO,
                                                    }));
                                            },
                                            disabled: ey !== ed.MOUNTED && ey !== ed.FINISHED,
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(T.A, {
                                "aria-live": "polite",
                                role: "status",
                                children: eH && ey === ed.FINISHED ? O.intl.string(O.t["3Pml0e"]) : "",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: G.hm,
                        children: t
                            ? (0, i.jsx)(i.Fragment, {
                                  children: [...Array(12)].map((e, t) => (0, i.jsx)(ea.A, {}, t + 1)),
                              })
                            : k
                              ? eA && ey === ed.SHUFFLE_OUT
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
                                    : ec.slice(0, s).map((e, t) => eF(e, t))
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
var ek = n(269115),
    eN = n(43990),
    eA = n(890856),
    ey = n(408278),
    eR = n(789645),
    eT = n(976860),
    eL = n(758836),
    eO = n(49999),
    eM = n(818348),
    eD = n(394107),
    eP = n(196064);
let eH = "GAME_SERVER_HOSTING_BANNER";
function eB(e) {
    let { gameServerHostingBannerBlock: t, tab: n } = e,
        l = (0, b.uM)(),
        s = r.useRef(null),
        a = r.useRef(!1),
        d = r.useRef(null),
        [u, g] = r.useState(!1),
        f = r.useCallback(
            (e) => {
                p.default.track(ej.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_type: n,
                    page_category: l?.pageCategory,
                    page_section: l?.pageSection,
                    tile_type: eH,
                    cta_name: e,
                });
            },
            [l?.sessionId, l?.pageCategory, l?.pageSection, n],
        ),
        E = r.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    f("go_to_game_server_hosting"),
                    (0, eT.pX)(ej.BVt.COLLECTIBLES_SHOP_WITH_TAB(eL.G2.GAME_SERVERS)));
            },
            [f],
        ),
        v = r.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    f("dismiss"),
                    g(!0),
                    !0 === t.isDismissible &&
                        (0, x.d6)(c.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
                            dismissAction: eO.i.USER_DISMISS,
                        }));
            },
            [f, t.isDismissible],
        ),
        j = r.useCallback(
            (e) => {
                !a.current &&
                    (e && null === d.current
                        ? (d.current = setTimeout(() => {
                              ((a.current = !0),
                                  (d.current = null),
                                  p.default.track(ej.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: l?.sessionId,
                                      page_type: n,
                                      page_category: l?.pageCategory,
                                      page_section: l?.pageSection,
                                      type: eH,
                                  }));
                          }, 1e3))
                        : e || null === d.current || (clearTimeout(d.current), (d.current = null)));
            },
            [l?.sessionId, l?.pageCategory, l?.pageSection, n],
        );
    return (r.useEffect(
        () => () => {
            null !== d.current && (clearTimeout(d.current), (d.current = null));
        },
        [],
    ),
    u)
        ? null
        : (0, i.jsx)(eN.N, {
              theme: eM.NJ.DARK,
              children: (e) =>
                  (0, i.jsx)(ek.L, {
                      innerRef: s,
                      onChange: j,
                      threshold: 0,
                      children: (0, i.jsx)("div", {
                          ref: s,
                          className: o()(eP.YB, e),
                          children: (0, i.jsxs)(eA.s, {
                              className: eP.kL,
                              onClick: E,
                              "aria-label": O.intl.string(eD.default["34GMP9"]),
                              children: [
                                  (0, i.jsx)("img", {
                                      className: eP.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, i.jsx)("div", { className: eP.f5, "aria-hidden": !0 }),
                                  !0 === t.isDismissible &&
                                      (0, i.jsx)("div", {
                                          className: eP.b,
                                          children: (0, i.jsx)(ey.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: eR.P,
                                              onClick: v,
                                              "aria-label": O.intl.string(O.t.WAI6xu),
                                          }),
                                      }),
                                  (0, i.jsx)("div", {
                                      className: eP.jE,
                                      children: (0, i.jsxs)("div", {
                                          className: eP.rF,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: eP.Z,
                                                  children: [
                                                      (0, i.jsx)(m.D, {
                                                          className: eP.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: O.intl.string(eD.default["34GMP9"]),
                                                      }),
                                                      (0, i.jsx)(R.E, {
                                                          className: eP.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: O.intl.string(eD.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, i.jsx)(h.$, {
                                                  variant: "overlay-primary",
                                                  text: O.intl.string(O.t.jVcuVY),
                                                  onClick: E,
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
var eU = n(93938),
    eF = n(172218),
    ew = n(28863),
    eV = n(212407),
    eG = n(815280),
    e$ = n(9530);
let eW = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        l = (0, eF.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: s, bannerAnimatedUrl: r } = (0, eV.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        o = null != t.body && "" !== t.body,
        d = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, i.jsxs)("div", {
        ref: l,
        className: e$.BX,
        children: [
            (0, i.jsx)("div", {
                className: e$.vK,
                children: null != s && (0, i.jsx)(eG.A, { bannerStatic: s, bannerAnimated: r }),
            }),
            (0, i.jsx)("div", {
                className: e$.HQ,
                children: (0, i.jsxs)("div", {
                    className: e$.Yn,
                    children: [
                        null != t.endTime ? (0, i.jsx)(D, { endDate: t.endTime, size: "lg" }) : null,
                        (0, i.jsx)(m.D, {
                            variant: "heading-xxl/bold",
                            className: e$.DD,
                            color: "text-strong",
                            style: { ...a },
                            children: t.title,
                        }),
                        o || d
                            ? (0, i.jsxs)(R.E, {
                                  variant: "text-md/medium",
                                  style: { ...a },
                                  children: [
                                      o && t.body,
                                      o && d && " ",
                                      d &&
                                          (0, i.jsx)(ew.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: e$.CU,
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
var ez = n(449543),
    eY = n(4227),
    eK = n(189213),
    eX = n(290136),
    eq = n(478016),
    eJ = n(825484),
    eZ = n(192308),
    eQ = n(812993),
    e0 = n(866665),
    e1 = n(713517),
    e2 = n(914410),
    e5 = n(839534),
    e4 = n(597783),
    e9 = n(61750);
function e3(e, t) {
    let n = r.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        l = (0, X.bG)([eY.A], () => eY.A.getPurchases(n));
    return {
        readyToClaim: r.useMemo(() => l.length === n.length, [l, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: l,
    };
}
var e6 = n(496552),
    e8 = n(299533);
let e7 = r.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: l } = (0, e4.Z)(n),
            s = r.useRef(null),
            { isHoveringOrFocusing: a } = (0, e1.A)(s),
            { readyToClaim: d, collectibleProductSkuIds: c, collectedSkuIds: u } = e3(t, n),
            g = (0, X.bG)([eY.A], () => eY.A.isClaiming === n);
        return (0, i.jsx)(ek.L, {
            onChange: l,
            threshold: 0,
            innerRef: s,
            children: (0, i.jsx)("div", {
                ref: s,
                className: o()(e6.ty, e8.Q3, { [e6.yo]: a }),
                "aria-label": O.intl.formatToPlainString(O.t.Ez6aHE, { category: t.name }),
                children: (0, i.jsxs)("div", {
                    className: e6.qt,
                    children: [
                        (0, i.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: e8.L8,
                        }),
                        (0, i.jsx)("div", {
                            className: e6.N1,
                            children: (0, i.jsx)(eQ.Lp, {
                                text: O.intl.string(O.t.rykAJ9),
                                disableColor: !0,
                                className: e8.HZ,
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: e6.xQ,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: e8.xE,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: e8.cs,
                                            children: [
                                                (0, i.jsx)(m.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: e6.tZ,
                                                    children: O.intl.string(O.t["0mDmg/"]),
                                                }),
                                                (0, i.jsx)(e0.m, {
                                                    text: d
                                                        ? O.intl.string(O.t.cKH3tk)
                                                        : O.intl.formatToPlainString(O.t["8aMDPc"], {
                                                              totalCount: c.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, i.jsx)("span", {
                                                        className: e8.ZB,
                                                        children: (0, i.jsx)(eX.CircleQuestionIcon, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)("div", {
                                            className: e6.oh,
                                            "aria-hidden": !0,
                                            children: (0, i.jsxs)("div", {
                                                className: e8.L$,
                                                children: [
                                                    (0, i.jsx)(e2.Ay, {
                                                        variant: e2.qP.BLUE,
                                                        progress: u.length,
                                                        maximum: c.length,
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: o()(e8.__, { [e8.gF]: d }),
                                                        children: [
                                                            d
                                                                ? (0, i.jsx)(eq.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, i.jsx)(R.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: O.intl.formatToPlainString(O.t["5TwASM"], {
                                                                    collectedCount: u.length,
                                                                    totalCount: c.length,
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
                                    className: e6.Vs,
                                    children: (0, i.jsx)(eJ.e, {
                                        wrap: !1,
                                        className: e6.Ld,
                                        fullWidth: !0,
                                        children: (0, i.jsx)(h.$, {
                                            variant: "primary",
                                            onClick: function (e) {
                                                (e.stopPropagation(),
                                                    d &&
                                                        (0, e5.BX)(t.skuId, n)
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
                                                                (0, eZ.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, i.jsx)(eK.Modal, {
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
                                                            }));
                                            },
                                            text: O.intl.string(O.t.VnVTNc),
                                            fullWidth: !0,
                                            disabled: !d,
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
    te = function (e) {
        let t,
            n,
            l,
            { isBlockLoading: s = !1, heroBlock: a, tab: o } = e,
            d = (0, er.Mk)(o),
            c = r.useMemo(() => et.A.getCategoryForProduct(a.rewardSkuId), [a.rewardSkuId]),
            u = (0, X.bG)([eY.A], () => eY.A.getPurchase(a.rewardSkuId)),
            { products: m } =
                ((t = (0, eb.A)()),
                (n = r.useMemo(
                    () => (s ? [] : t(a.rankedSkuIds).filter((e) => e.skuId !== a.rewardSkuId || null != u)),
                    [s, t, a.rankedSkuIds, u, a.rewardSkuId],
                )),
                (l = (0, ep.p)()(n)),
                { products: (0, eE.X)(l) }),
            h = r.useMemo(
                () =>
                    !s &&
                    0 !== a.rankedSkuIds.length &&
                    !(m.length > 0) &&
                    a.rankedSkuIds.every((e) => et.A.getProduct(e)?.variantGroupStoreListingId != null),
                [s, a.rankedSkuIds, m.length],
            ),
            g = s || h,
            { readyToClaim: x } = e3(c, a.rewardSkuId),
            f = null == u && null != a.rewardSkuId && null != c;
        return (0, i.jsx)(ez.A, {
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
                                  b.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, i.jsx)(e7, { category: c, rewardSkuId: a.rewardSkuId }),
                                  },
                                  a.rewardSkuId,
                              ),
                          m.map((e, t) => {
                              let n = et.A.getCategoryForProduct(e.skuId);
                              return null == e || null == n
                                  ? null
                                  : (0, i.jsx)(
                                        b.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, i.jsx)(ei.A, { skuId: e.skuId, prioritizedCurrency: d }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, w.$b)(90);
let tt = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: d.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    tn = function (e) {
        let { isLoading: t = !1, heroBlock: n, tab: l, onVisibilityChange: s } = e,
            r = (0, eF.K)(
                (e) => {
                    s?.(e);
                },
                0.1,
                null != s,
            ),
            a = (0, X.bG)([Z.default], () => Z.default.getCurrentUser()),
            { analyticsLocations: d } = (0, F.Ay)(U.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: c,
                logoDisplayConfig: u,
                heroLogo: h,
                heroBannerStatic: g,
                heroBannerAnimated: x,
            } = (0, eV.Kk)(n),
            f = c?.responsive ?? !1,
            p = c?.backgroundStyle;
        return null != a && (t || n !== tt)
            ? (0, i.jsx)(F.f5, {
                  value: d,
                  children: (0, i.jsxs)("div", {
                      ref: r,
                      className: G.os,
                      children: [
                          (0, i.jsx)("div", {
                              className: o()(G.vK, { [G.no]: f }),
                              style: null != p ? { background: p } : void 0,
                              children:
                                  null != g &&
                                  (0, i.jsx)(eG.A, { bannerStatic: g, bannerAnimated: x, isResponsive: f }),
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
                                  (0, i.jsx)(te, { isBlockLoading: t, heroBlock: n, tab: l }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var tl = n(197935),
    ts = n(879221),
    ti = n(554661);
function tr(e) {
    return e.skuId;
}
function ta(e) {
    let { product: t, index: n, shelfName: l, prioritizedCurrency: s, listItemProps: r } = e;
    return (0, i.jsx)(b.R9, {
        newValue: { tilePosition: n, pageSection: l, categoryPosition: 2 },
        children: (0, i.jsx)(ei.A, { skuId: t.skuId, prioritizedCurrency: s, listItemProps: r }),
    });
}
let to = function (e) {
    let { shelf: t, handleTransition: n, tab: l } = e,
        s = (0, X.bG)([Z.default], () => Z.default.getCurrentUser()),
        a = (0, er.Mk)(l),
        d = (0, X.bG)([et.A], () => (null != t.categorySkuId ? et.A.getCategory(t.categorySkuId) : void 0)),
        c = (0, eb.A)(),
        u = r.useMemo(() => c(t.rankedSkuIds), [t.rankedSkuIds, c]),
        g = (0, eE.X)(u),
        { analyticsLocations: x } = (0, F.Ay)(U.A.COLLECTIBLES_SHOP_SHELF),
        f = (0, ts.O)("shelf_block"),
        p = r.useMemo(() => g.filter((e) => null != et.A.getCategoryForProduct(e.skuId)), [g]),
        b = r.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: d?.isOrbsExclusive === !0 && l !== eL.G2.ORBS,
            });
        }, [t.categorySkuId, d, n, l]);
    if (null == s || 0 === g.length) return null;
    let E = t.buttonText ?? O.intl.formatToPlainString(O.t.bc9RBE, { category_name: t.name }),
        v = t.showButton,
        j = t.desktopBackgroundImage,
        S = null != j;
    return (0, i.jsx)(F.f5, {
        value: x,
        children: (0, i.jsxs)("div", {
            className: o()(ti.mu, G.YB, S ? ti.VA : ti.Ti),
            children: [
                S && (0, i.jsx)("img", { className: ti.iL, src: j, alt: "", "aria-hidden": !0 }),
                (0, i.jsxs)("div", {
                    className: ti.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: ti.wx,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    style: S ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                v &&
                                    (0, i.jsx)(h.$, {
                                        variant: S ? "overlay-primary" : "secondary",
                                        text: E,
                                        onClick: b,
                                    }),
                            ],
                        }),
                        f
                            ? (0, i.jsx)(tl.A, {
                                  gap: "xl",
                                  edgeFade: S ? "sm" : void 0,
                                  items: p,
                                  getItemKey: tr,
                                  maintainFocusOnReorder: !0,
                                  renderItem: (e, n, l) =>
                                      (0, i.jsx)(
                                          ta,
                                          {
                                              product: e,
                                              index: l,
                                              shelfName: t.name,
                                              prioritizedCurrency: a,
                                              listItemProps: n,
                                          },
                                          e.skuId,
                                      ),
                              })
                            : (0, i.jsx)(ez.A, {
                                  gap: "xl",
                                  edgeFade: S ? "sm" : void 0,
                                  children: p.map((e, n) =>
                                      (0, i.jsx)(
                                          ta,
                                          { product: e, index: n, shelfName: t.name, prioritizedCurrency: a },
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
var td = n(465794),
    tc = n(69236),
    tu = n(44724),
    tm = n(421108),
    th = n(873297),
    tg = n(202541);
let tx = function (e) {
    let {
            applicationId: t,
            headerText: n,
            gradientColors: l,
            gradientAngle: s,
            skuIds: a,
            tab: o,
            endTime: d,
            ctaType: c = "storefront",
            logoUrl: u,
        } = e,
        m = (0, tm.ur)(d) ?? void 0,
        h = (0, tc.W8)(),
        g = r.useMemo(
            () =>
                "nitro" !== c || h
                    ? {
                          kind: "button",
                          text: O.intl.string(O.t.apFNLU),
                          onClick: () => (0, tu.default)({ applicationId: t }),
                          onMouseDown: () => (0, tu.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, i.jsx)(td.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: tg.pe.TIER_2,
                              buttonTextOverride: O.intl.string(O.t.pj0XBN),
                          }),
                      },
            [c, t, h],
        );
    return (0, i.jsx)(th.A, {
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
var tf = n(613258),
    tp = n(815021),
    tb = n(939249),
    tE = n(975571);
let tv = function (e) {
        let { wideBannerBlock: t, tab: n } = e,
            l = et.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            s = r.useRef(null),
            a = r.useRef(null),
            [d, u] = r.useState(),
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
        let E = l?.skuId ?? "",
            { handleCardVisibilityChange: v } = (0, e4.Z)(E, "home", "marketing wide banner"),
            j = (0, b.uM)(),
            { bannerURL: S } = (0, eV.w$)(t),
            C = n === eL.G2.ORBS,
            _ = null != t.ctaRoute && "" !== t.ctaRoute,
            I = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || _),
            k = null != t.logoURL && "" !== t.logoURL,
            N = r.useCallback(() => {
                if ((f(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, x.$l)(c.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: eO.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            A = r.useCallback(
                (e) => {
                    p.default.track(ej.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: j?.sessionId,
                        sku_id: E,
                        page_type: n,
                        page_section: j?.pageSection,
                        page_category: j?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(j?.tilePosition),
                        cta_name: e,
                    });
                },
                [j, E, n],
            ),
            y = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((A(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    n = parseInt(t[2], 10);
                                (0, tu.default)({ guildId: e, pageIndex: n });
                            }
                        } else (0, eT.pX)(e);
                    }
                },
                [t.ctaRoute, A],
            );
        if (null == S || g) return null;
        let T = o()(G.nM, G.Tq, G.TS, G.YB, { [G._1]: C, [G.vb]: _ }),
            L = (0, i.jsxs)(i.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, i.jsx)("div", {
                            className: G.Mh,
                            children: (0, i.jsx)(tp.J, {
                                size: "sm",
                                onClick: (e) => {
                                    (e.stopPropagation(), N());
                                },
                                "aria-label": O.intl.string(O.t.WAI6xu),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: o()(G.zK, { [G._1]: C }),
                        style: null != d ? { height: `${d}px` } : void 0,
                        children: (0, i.jsx)("img", {
                            ref: a,
                            src: S,
                            alt: t.title,
                            className: o()(G.LN, { [G.d5]: C }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: o()(G.Ep, { [G.Qq]: I }),
                        style: { maxHeight: null != d ? `${d}px` : "auto" },
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
                                              helpdeskArticle: tE.A.getArticleURL(ej.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                I &&
                                    (0, i.jsxs)("div", {
                                        className: G.nP,
                                        children: [
                                            (0, i.jsx)(h.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    (e.stopPropagation(), y(t.ctaText ?? O.intl.string(O.t.jVcuVY)));
                                                },
                                                text: t.ctaText ?? O.intl.string(O.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? O.intl.formatToPlainString(O.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            k && (0, i.jsx)("img", { src: t.logoURL, alt: "", className: G.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, i.jsx)(eN.N, {
            theme: C ? void 0 : eM.NJ.DARK,
            children: (e) =>
                (0, i.jsx)(ek.L, {
                    innerRef: s,
                    onChange: v,
                    threshold: 0,
                    children: _
                        ? (0, i.jsx)(tb.D, { innerRef: s, onClick: () => y(null), className: o()(e, T), children: L })
                        : (0, i.jsx)("div", { ref: s, className: o()(e, T), children: L }),
                }),
        });
    },
    tj = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: l, tab: s } = e,
            { noCache: a, includeUnpublished: u } = (0, I.A)(),
            [m, h] = r.useState(!1),
            g = (0, b.uM)(),
            p = g?.sessionId ?? "",
            E = (0, f.H)({ location: "collectibles_shop_feed" });
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
                fetchShopHomeError: k,
                shopBlocks: N,
                refreshShopHome: A,
            } = (0, j.y)(s, { noCache: a, includeUnpublished: u, logPerf: !0 }, { sessionId: p, tab: s }),
            y = r.useCallback(() => {
                A();
            }, [A]);
        return (r.useEffect(() => {
            null != k ||
                _ ||
                0 === N.length ||
                (0, S.z)({
                    sessionId: p,
                    checkpoint: S.t.SHOP_RENDERED,
                    tab: s,
                    unpublishedCategoriesShown: u,
                    cacheDisabled: a,
                });
        }, [k, _, N.length, u, a, p, s]),
        null != k)
            ? (0, i.jsx)(C.h, { onRetry: y, errorOrigin: C.A.SHOP_PAGE, errorMessage: k.message })
            : _ || 0 === N.length
              ? (0, i.jsxs)("div", {
                    className: o()(G.g4, G.Of),
                    children: [
                        (0, i.jsx)(eU.A, { isLoading: _, handleTransition: t, tab: s }),
                        (0, i.jsx)(z, { isLoading: _, handleTransition: t, categories: [] }),
                        (0, i.jsx)(eI, {
                            isLoading: _,
                            title: s === eL.G2.ORBS ? O.intl.string(O.t.dFgeuZ) : O.intl.string(O.t.NSv5KV),
                            numVisibleItems: n,
                            tab: s,
                        }),
                    ],
                })
              : (0, i.jsx)(i.Fragment, {
                    children: N.map((e, r) =>
                        (function (e, r, a) {
                            if (null == e) return null;
                            let u = null,
                                g = !1;
                            switch (e.type) {
                                case d.g.HERO:
                                    u = (0, i.jsx)(
                                        eU.A,
                                        { isLoading: _, handleTransition: t, heroBlock: e, tab: s },
                                        a,
                                    );
                                    break;
                                case d.g.FEATURED:
                                    u = (0, i.jsx)(z, { isLoading: _, handleTransition: t, featuredBlockRecord: e }, a);
                                    break;
                                case d.g.FEED:
                                    let f = e.sortedSkuIds;
                                    u = (0, i.jsx)(
                                        eI,
                                        {
                                            title:
                                                s === eL.G2.ORBS
                                                    ? O.intl.string(O.t.dFgeuZ)
                                                    : O.intl.string(O.t.NSv5KV),
                                            isLoading: l,
                                            numVisibleItems: n,
                                            sortedSkuIds: f,
                                            buttonContainerClassName: r?.type === d.g.IMMERSIVE_BANNER ? G.w : void 0,
                                            tab: s,
                                            orbsSupportedOnly: s === eL.G2.ORBS,
                                        },
                                        a,
                                    );
                                    break;
                                case d.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, x.En)(c.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    u = (0, i.jsx)(tv, { wideBannerBlock: e, tab: s }, a);
                                    break;
                                case d.g.SHELF:
                                    u = (0, i.jsx)(to, { handleTransition: t, shelf: e, tab: s }, a);
                                    break;
                                case d.g.COUNTDOWN_TIMER:
                                    ((u = (0, i.jsx)(H, { countdownTimerBlock: e, isVisible: m }, a)), (g = !0));
                                    break;
                                case d.g.IMMERSIVE_BANNER:
                                    u = (0, i.jsx)(
                                        eW,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => h(!e) },
                                        a,
                                    );
                                    break;
                                case d.g.REWARD_HERO:
                                    u = (0, i.jsx)(tn, { isLoading: _, handleTransition: t, heroBlock: e, tab: s }, a);
                                    break;
                                case d.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !E ||
                                        (!0 === e.isDismissible &&
                                            (0, x.En)(c.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, i.jsx)(
                                        v,
                                        {
                                            blockType: e.type,
                                            children: (0, i.jsx)(eB, { gameServerHostingBannerBlock: e, tab: s }),
                                        },
                                        a,
                                    );
                                case d.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, i.jsx)(
                                        v,
                                        {
                                            blockType: e.type,
                                            children: (0, i.jsx)(tx, {
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
                        })(e, r > 0 ? N[r - 1] : null, r),
                    ),
                });
    },
    tS = function (e) {
        let { handleTransition: t, tab: n, transitionState: l } = e,
            s = r.useRef(null),
            { handleScroll: a } = (0, g.X)(s, n),
            o = (0, _.U)(),
            d = (0, b.uM)(),
            [c, x] = r.useState(eL.md),
            [f, E] = r.useState(!1);
        return (
            r.useEffect(() => {
                if (null != s.current) {
                    function e() {
                        if (null == s.current) return;
                        let e = s.current.getDistanceFromBottom();
                        c >= 36 ? E(e < 20) : e <= 200 && x((e) => e + eL.md);
                    }
                    let t = s.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [s, c, x, E]),
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
                                (0, i.jsx)(tj, {
                                    handleTransition: t,
                                    numVisibleItems: c,
                                    isFetchingCategories: o,
                                    tab: n,
                                }),
                                n !== eL.G2.CATALOG &&
                                    c >= 36 &&
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
                                                    (t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        p.default.track(ej.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: d?.sessionId,
                                                            page_type: n,
                                                            page_category: n === eL.G2.HOME ? void 0 : d?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        }));
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)(tf.A, { peaking: f, transitioning: l === eL.Pf.OUT }),
                    ],
                }),
            })
        );
    };
