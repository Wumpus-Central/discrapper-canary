l.d(t, { A: () => tg });
var n,
    s,
    i = l(477900),
    r = l(582128),
    a = l(503698),
    o = l.n(a),
    u = l(651162),
    c = l(554146),
    d = l(689175),
    m = l(297264),
    h = l(821609),
    g = l(564322),
    x = l(367727),
    f = l(196736),
    p = l(604913),
    E = l(174459),
    _ = l(440938);
let b = r.createContext(null);
function C(e) {
    let { blockType: t, children: l } = e,
        n = r.useMemo(() => ({ blockType: t }), [t]);
    return (0, i.jsx)(b.Provider, { value: n, children: l });
}
var v = l(304210),
    j = l(755172),
    S = l(39196),
    N = l(100057),
    y = l(808598),
    A = l(599062),
    I = l(159439),
    R = l(998694),
    k = l(202091),
    T = l(607399),
    L = l(946015),
    O = l(717421),
    M = l(834730);
l(321073);
var D = l(140735),
    P = l(496431),
    H = l(375708),
    B = l(302326);
function U(e) {
    let { endDate: t, size: l = "md", className: n, showSeconds: s = !1 } = e,
        { days: r, hours: a, minutes: u, seconds: c } = (0, P.A)(t),
        d = (function (e, t, l, n, s) {
            function i(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let r = [i(e), i(t), i(l)];
            return (s && r.push(i(n)), r.join(":"));
        })(r, a, u, c, s);
    return (0, i.jsxs)("div", {
        className: o()(B.kL, n),
        role: "timer",
        children: [
            d
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, i.jsx)(
                              M.E,
                              {
                                  color: "none",
                                  variant: "md" === l ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: B.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, i.jsx)(
                              M.E,
                              {
                                  color: "text-overlay-light",
                                  variant: "md" === l ? "heading-md/bold" : "heading-xl/bold",
                                  className: B.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, i.jsx)(D.A, { children: H.intl.format(H.t.j6IyVe, { days: r, hours: a, minutes: u }) }),
        ],
    });
}
var F = l(685879);
let G = r.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: l } = e,
        n = (0, O.z)({
            transform: `translateX(-50%) ${l ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!l,
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsxs)(k.animated.div, {
        className: o()([F.lP, T.Fr && F.yJ]),
        role: "status",
        style: {
            ...n,
            ...(null != t.bannerUrl &&
                "" !== t.bannerUrl && {
                    backgroundImage: `url(${t.bannerUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }),
        },
        children: [
            (0, i.jsxs)(L.s, {
                direction: L.s.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(M.E, {
                        variant: "text-md/medium",
                        className: F.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, i.jsx)(M.E, {
                            variant: "text-sm/medium",
                            className: F.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, i.jsx)(U, { endDate: t.endTime }),
        ],
    });
});
var V = l(424918),
    w = l(793574),
    $ = l(688810),
    W = l(993408),
    z = l(196231),
    Y = l(105499);
function K(e) {
    let { handleTransition: t, featuredBlockRecord: l } = e;
    return (0, i.jsx)("div", {
        className: o()(Y.n9, Y.YB),
        children: l?.subblocks.map((e, l) =>
            e.type === V.u.CATEGORY
                ? (0, i.jsx)(
                      _.R9,
                      {
                          newValue: {
                              categoryPosition: 1,
                              pageCategory: e.name,
                              pageSection: "featured_block",
                              tilePosition: l,
                          },
                          children: (0, i.jsx)(
                              z.S,
                              {
                                  subblock: e,
                                  enablePreview: 0 === l,
                                  badgeText: (0, W.HF)(e.unpublishedAt) ? H.intl.string(H.t["h/uBCR"]) : void 0,
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
function X(e) {
    let { handleTransition: t, categories: l } = e;
    if (null == l || l.length < 2) return null;
    let [n, s] = l;
    return (0, i.jsx)("div", {
        className: o()(Y.n9, Y.YB),
        children: (0, i.jsxs)(_.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != n ? n.name : s?.name,
                pageSection: "featured_block",
                tilePosition: +(null == n),
            },
            children: [
                null != n &&
                    (0, i.jsx)(z.S, {
                        category: n,
                        enablePreview: !0,
                        badgeText: (0, W.HF)(n.unpublishedAt) ? H.intl.string(H.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != s &&
                    (0, i.jsx)(z.S, {
                        category: s,
                        badgeText: (0, W.HF)(s.unpublishedAt) ? H.intl.string(H.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let q = function (e) {
    let { isLoading: t, handleTransition: l, categories: n, featuredBlockRecord: s } = e,
        { analyticsLocations: r } = (0, $.Ay)(w.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, i.jsxs)("div", {
              className: o()(Y.n9, Y.YB),
              children: [
                  (0, i.jsx)("div", { className: o()(Y.Jn, Y.oT), children: (0, i.jsx)("div", { className: Y.uy }) }),
                  (0, i.jsx)("div", { className: o()(Y.Jn, Y.oT), children: (0, i.jsx)("div", { className: Y.uy }) }),
              ],
          })
        : null != s
          ? (0, i.jsx)($.f5, {
                value: r,
                children: (0, i.jsx)(K, { featuredBlockRecord: s, handleTransition: l, isLoading: !1 }),
            })
          : (0, i.jsx)($.f5, {
                value: r,
                children: (0, i.jsx)(X, { categories: n, handleTransition: l, isLoading: !1 }),
            });
};
var J = l(334279),
    Z =
        (((n = {}).RECOMMENDED = "recommended"),
        (n.POPULAR = "popular"),
        (n.RECENT = "recent"),
        (n.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (n.RANDOM = "random"),
        n),
    Q = l(17928),
    ee = l(691885),
    et = l(775602),
    el = l(287809),
    en = l(531685),
    es = l(158045),
    ei = l(590180),
    er = l(395856),
    ea = l(503089),
    eo = l(682301),
    eu = l(258245),
    ec = l(561769),
    ed = l(484469),
    em = l(621466),
    eh =
        (((s = {}).MOUNTED = "mounted"),
        (s.SORT_OUT = "sort-out"),
        (s.SORT_IN = "sort-in"),
        (s.SHUFFLE_OUT = "shuffle-out"),
        (s.SHUFFLE_IN = "shuffle-in"),
        (s.FINISHED = "finished"),
        s),
    eg = l(401864),
    ex = l(124987),
    ef = l(946716);
let ep = {
    [Z.RECENT]: { sortType: ex.$.RECENCY, sortDirection: eg.A.DESC },
    [Z.PRICE_LOW_TO_HIGH]: { sortType: ex.$.PRICE, sortDirection: eg.A.ASC },
};
l(667532);
var eE = l(435558),
    e_ = l.n(eE),
    eb = l(153488),
    eC = l(511265),
    ev = l(313276),
    ej = l(206077),
    eS = l(623373),
    eN = l(652215),
    ey = l(783857),
    eA = l(645501);
let eI = [],
    eR = function (e) {
        let {
                isLoading: t,
                title: l,
                sortedSkuIds: n,
                numVisibleItems: s,
                tab: a,
                buttonContainerClassName: u,
                orbsSupportedOnly: c,
            } = e,
            d = (0, Q.bG)([el.default], () => el.default.getCurrentUser()),
            m = es.Ay.canUseShopDiscounts(d),
            g = (0, ec.Mk)(a),
            x = (0, ey.yB)("FeedBlock"),
            {
                sortType: f,
                setSortType: p,
                sortedItems: b,
                orderedSkuIds: C,
                sortOptions: v,
                shuffleProducts: j,
                showRecommendationOption: S,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: l, orbsSupportedOnly: n } = e,
                    s = (0, Q.bG)([eb.A], () => eb.A.hasConsented(eN.YAq.PERSONALIZATION)),
                    i = r.useMemo(() => t?.[Z.RECOMMENDED] ?? [], [t]),
                    a = r.useMemo(() => t?.[Z.POPULAR] ?? [], [t]),
                    o = i.length > 0 && s,
                    [u, c] = r.useState(o ? Z.RECOMMENDED : Z.POPULAR),
                    d = (0, Q.bG)([ei.A], () => ei.A.productsWithVariantsAsGroup),
                    m = r.useMemo(() => (0, W.CE)(d), [d]),
                    h = (0, ev.A)(),
                    g = (0, eC.p)(),
                    [x, f] = r.useState([]),
                    p = r.useCallback(() => {
                        (c(Z.RANDOM), f(e_().shuffle(m)));
                    }, [m]);
                r.useEffect(() => {
                    f(e_().shuffle(m));
                }, [m]);
                let E = r.useMemo(() => {
                        let e = [];
                        switch (u) {
                            case Z.RECENT:
                                e = m;
                                break;
                            case Z.PRICE_LOW_TO_HIGH:
                                e = (0, W.bf)([...m], l, n);
                                break;
                            case Z.RECOMMENDED:
                                e = h(i);
                                break;
                            case Z.POPULAR:
                                e = h(a);
                                break;
                            case Z.RANDOM:
                                e = x;
                        }
                        return n ? (0, eS.ex)(g(e)) : g(e);
                    }, [u, n, g, l, m, h, i, a, x]),
                    _ = (0, ej.X)(E),
                    b = r.useMemo(
                        () => (u === Z.RECOMMENDED ? i : u === Z.POPULAR ? a : _.map((e) => e.skuId)),
                        [u, i, a, _],
                    );
                return {
                    sortType: u,
                    setSortType: c,
                    sortedItems: _,
                    orderedSkuIds: b,
                    sortOptions: r.useMemo(() => {
                        let e = [
                            { value: Z.POPULAR, label: H.intl.string(H.t.Y68e5p) },
                            { value: Z.RECENT, label: H.intl.string(H.t["51Bhiz"]) },
                            { value: Z.PRICE_LOW_TO_HIGH, label: H.intl.string(H.t.m8RVU2) },
                        ];
                        return (o && e.unshift({ value: Z.RECOMMENDED, label: H.intl.string(H.t.zPWgFG) }), e);
                    }, [o]),
                    showRecommendationOption: o,
                    shuffleProducts: p,
                };
            })({ sortedSkuIds: n, hasShopDiscount: m, orbsSupportedOnly: c }),
            N = f === Z.RANDOM,
            y = (0, er.$)("feed_block"),
            [A, I] = r.useState(0),
            R = `${f}:${!0 === c}:${A}`,
            [k, T] = r.useState({ key: R, extra: 0 }),
            L = k.key === R ? k.extra : 0;
        k.key !== R && T({ key: R, extra: 0 });
        let {
                skuIds: O,
                isLoading: P,
                hasMore: B,
            } = (function (e) {
                let { sortType: t, orbsSupportedOnly: l, numVisibleItems: n, enabled: s, shuffleNonce: i } = e,
                    a = r.useMemo(
                        () =>
                            (function (e, t) {
                                if (e === Z.RANDOM) return { randomize: !0 };
                                if (t && e === Z.POPULAR) return { randomize_daily: !0 };
                                let l = ep[e];
                                return null == l ? null : { sort_type: l.sortType, sort_direction: l.sortDirection };
                            })(t, !0 === l),
                        [t, l],
                    ),
                    o = t === Z.RANDOM,
                    u = s && n > 0 && null != a && null != a ? `${JSON.stringify(a)}:${!0 === l}` : null,
                    c = null == u ? null : `${u}:${o ? i : ""}:${n}`,
                    [d, m] = r.useState(null);
                if (
                    (r.useEffect(() => {
                        if (null == c || null == a) return;
                        let e = !1;
                        return (
                            (0, ef.$)({
                                item_types: [],
                                colors: [],
                                themes: [],
                                orbs_eligible: !0 === l || void 0,
                                offset: 0,
                                limit: n + (o ? 32 : 8),
                                ...a,
                                published_collections_only: !0,
                            })
                                .then((t) => {
                                    e ||
                                        m({
                                            key: c,
                                            sortIdentityKey: u,
                                            skuIds: t.skus ?? [],
                                            hasMore: t.pagination?.has_more === !0,
                                        });
                                })
                                .catch(() => {
                                    e || m({ key: c, sortIdentityKey: u, skuIds: [], hasMore: !1 });
                                }),
                            () => {
                                e = !0;
                            }
                        );
                    }, [c, u, o, a, l, n]),
                    null == c)
                )
                    return { skuIds: null, isLoading: !1, hasMore: !1 };
                let h = null != d && d.sortIdentityKey === u ? d : null;
                return { skuIds: h?.skuIds ?? null, isLoading: d?.key !== c, hasMore: h?.hasMore ?? !1 };
            })({ sortType: f, orbsSupportedOnly: c, numVisibleItems: s + L, enabled: y, shuffleNonce: A }),
            U = O ?? C,
            F = r.useMemo(() => U.slice(0, s + L + (N ? 32 : 8)), [U, s, L, N]),
            G = (0, eo.hv)(y ? F : eI, { needsCategory: !1 }),
            V = (0, ea.c)("feed_block"),
            z = r.useMemo(() => {
                if (!y) return F;
                let e = new Set();
                return F.filter((t) => {
                    let l = G[t];
                    if (l?.state === "error" || (!V && t === J.j.PREMIUM_TIER_2_1_DAY)) return !1;
                    let n = l?.product?.storeListingId;
                    if (null != n) {
                        if (e.has(n)) return !1;
                        e.add(n);
                    }
                    return !0;
                });
            }, [y, F, G, V]),
            K = r.useMemo(
                () =>
                    !!y &&
                    !P &&
                    F.every((e) => {
                        let t = G[e]?.state;
                        return "ready" === t || "error" === t;
                    }),
                [y, P, F, G],
            ),
            X = !N && B && L < 16,
            q = s - z.length;
        if (K && q > 0 && X) {
            let e = Math.min(16, L + q + 8);
            e !== L && T({ key: R, extra: e });
        }
        let eg = (0, Q.bG)([et.Ay], () => et.Ay.useReducedMotion),
            ex = (0, Q.bG)([en.A], () => en.A.isFocused()),
            eE = !eg && ex,
            {
                animationPhase: eR,
                startAnimation: ek,
                signalDataReady: eT,
            } = (() => {
                let [e, t] = r.useState("mounted"),
                    [l, n] = r.useState(!1),
                    s = r.useRef(null),
                    i = r.useRef(!1),
                    a = r.useRef(null);
                (r.useEffect(() => {
                    if (l && "finished" === e) {
                        if (null !== s.current) {
                            let e = s.current;
                            if (
                                e.tabIndex >= 0 ||
                                (0, em.vq)(e, HTMLButtonElement) ||
                                (0, em.vq)(e, HTMLAnchorElement) ||
                                (0, em.vq)(e, HTMLInputElement) ||
                                (0, em.vq)(e, HTMLSelectElement) ||
                                (0, em.vq)(e, HTMLTextAreaElement)
                            )
                                e.focus();
                            else {
                                let t = e.querySelector(
                                    'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [role="combobox"], [role="button"]',
                                );
                                t?.focus();
                            }
                        }
                        n(!1);
                    }
                }, [e, l]),
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
                            let { isShuffling: l, onOutroComplete: r, returnRef: u, holdIntroUntilReady: c = !1 } = e;
                            (u?.current != null && ((s.current = u.current), n(!0)),
                                (i.current = !1),
                                null != a.current && (clearTimeout(a.current), (a.current = null)),
                                t(l ? "shuffle-out" : "sort-out"),
                                setTimeout(
                                    () => {
                                        if ((r(), l && c)) {
                                            ((i.current = !0), (a.current = setTimeout(() => o(!0), 1e3)));
                                            return;
                                        }
                                        o(l);
                                    },
                                    l ? 250 : 300,
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
            K && eT();
        }, [K, eT]);
        let eL = (0, _.uM)(),
            eO = eL?.sessionId ?? "",
            { analyticsLocations: eM } = (0, $.Ay)(w.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            eD = r.useRef(null),
            eP = r.useRef(null),
            [eH, eB] = r.useState(!1),
            eU = r.useCallback(
                (e) => {
                    (eB(!1),
                        ek({ isShuffling: !1, onOutroComplete: () => p(e), returnRef: eP }),
                        E.default.track(eN.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: eO,
                            sort_type: e,
                        }));
                },
                [ek, p, eO],
            );
        if (null == d) return null;
        function eF(e, t) {
            let l;
            return eE && eR === eh.SHUFFLE_OUT
                ? (0, i.jsx)("div", { className: Y.Z2, children: (0, i.jsx)(ed.A, {}) }, `${e}-${t}`)
                : (eE &&
                      (eR === eh.SORT_OUT
                          ? (l = Y.MW)
                          : eR === eh.SHUFFLE_IN
                            ? (l = Y.aS)
                            : eR === eh.SORT_IN && (l = Y.F7)),
                  (0, i.jsx)(
                      _.R9,
                      {
                          newValue: { tilePosition: t, pageSection: "popular picks", categoryPosition: 2 },
                          children: (0, i.jsx)("div", {
                              className: l,
                              children: (0, i.jsx)(eu.A, {
                                  skuId: e,
                                  hideStaticBundleBackgroundAsset: !0,
                                  prioritizedCurrency: g,
                              }),
                          }),
                      },
                      e,
                  ));
        }
        return (0, i.jsx)($.f5, {
            value: eM,
            children: (0, i.jsxs)("div", {
                className: o()(Y.lD, Y.YB),
                children: [
                    (0, i.jsxs)("div", {
                        className: Y.$6,
                        children: [
                            (0, i.jsx)(eA.A, { label: l, personalizedResults: S }),
                            (0, i.jsxs)("div", {
                                className: o()(Y.IE, { [ey.jP]: x }),
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: Y.gd,
                                        children: [
                                            (0, i.jsx)(M.E, {
                                                variant: "text-md/medium",
                                                children: H.intl.string(H.t.uaX705),
                                            }),
                                            (0, i.jsx)("div", {
                                                className: o()(u, Y.pI),
                                                ref: eP,
                                                children: (0, i.jsx)(ee.l, {
                                                    label: H.intl.string(H.t.uaX705),
                                                    hideLabel: !0,
                                                    options: v,
                                                    onSelectionChange: eU,
                                                    formatOption: (e) => {
                                                        let { label: t, value: l } = e;
                                                        return { id: l, label: t, value: l };
                                                    },
                                                    value: f,
                                                    selectionMode: "single",
                                                    fullWidth: !0,
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)("div", {
                                        className: u,
                                        children: (0, i.jsx)(h.$, {
                                            variant: "secondary",
                                            text: H.intl.string(H.t.X3tnc4),
                                            buttonRef: eD,
                                            onClick: function () {
                                                (eB(!0),
                                                    ek({
                                                        isShuffling: !0,
                                                        onOutroComplete: () => {
                                                            (j(), I((e) => e + 1));
                                                        },
                                                        returnRef: eD,
                                                        holdIntroUntilReady: y,
                                                    }),
                                                    E.default.track(eN.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                        page_session_id: eO,
                                                    }));
                                            },
                                            disabled: eR !== eh.MOUNTED && eR !== eh.FINISHED,
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(D.A, {
                                "aria-live": "polite",
                                role: "status",
                                children: eH && eR === eh.FINISHED ? H.intl.string(H.t["3Pml0e"]) : "",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: Y.hm,
                        children: t
                            ? (0, i.jsx)(i.Fragment, {
                                  children: [...Array(12)].map((e, t) => (0, i.jsx)(ed.A, {}, t + 1)),
                              })
                            : y
                              ? eE && eR === eh.SHUFFLE_OUT
                                  ? [...Array(s)].map((e, t) =>
                                        (0, i.jsx)(
                                            "div",
                                            { className: Y.Z2, children: (0, i.jsx)(ed.A, {}) },
                                            `shuffle-placeholder-${t}`,
                                        ),
                                    )
                                  : P && null == O
                                    ? (0, i.jsx)(i.Fragment, {
                                          children: [...Array(12)].map((e, t) => (0, i.jsx)(ed.A, {}, t + 1)),
                                      })
                                    : z.slice(0, s).map((e, t) => eF(e, t))
                              : b
                                    .slice(0, s)
                                    .map((e, t) =>
                                        null == e || null == ei.A.getCategoryForProduct(e.skuId)
                                            ? null
                                            : eF(e.skuId, t),
                                    ),
                    }),
                ],
            }),
        });
    };
var ek = l(269115),
    eT = l(43990),
    eL = l(890856),
    eO = l(408278),
    eM = l(789645),
    eD = l(976860),
    eP = l(758836),
    eH = l(49999),
    eB = l(818348),
    eU = l(344045),
    eF = l(196064);
let eG = "GAME_SERVER_HOSTING_BANNER";
function eV(e) {
    let { gameServerHostingBannerBlock: t, tab: l } = e,
        n = (0, _.uM)(),
        s = r.useRef(null),
        a = r.useRef(!1),
        u = r.useRef(null),
        [d, g] = r.useState(!1),
        f = r.useCallback(
            (e) => {
                E.default.track(eN.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: n?.sessionId,
                    page_type: l,
                    page_category: n?.pageCategory,
                    page_section: n?.pageSection,
                    tile_type: eG,
                    cta_name: e,
                });
            },
            [n?.sessionId, n?.pageCategory, n?.pageSection, l],
        ),
        p = r.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    f("go_to_game_server_hosting"),
                    (0, eD.pX)(eN.BVt.COLLECTIBLES_SHOP_WITH_TAB(eP.G2.GAME_SERVERS)));
            },
            [f],
        ),
        b = r.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    f("dismiss"),
                    g(!0),
                    !0 === t.isDismissible &&
                        (0, x.d6)(c.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
                            dismissAction: eH.i.USER_DISMISS,
                        }));
            },
            [f, t.isDismissible],
        ),
        C = r.useCallback(
            (e) => {
                !a.current &&
                    (e && null === u.current
                        ? (u.current = setTimeout(() => {
                              ((a.current = !0),
                                  (u.current = null),
                                  E.default.track(eN.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: n?.sessionId,
                                      page_type: l,
                                      page_category: n?.pageCategory,
                                      page_section: n?.pageSection,
                                      type: eG,
                                  }));
                          }, 1e3))
                        : e || null === u.current || (clearTimeout(u.current), (u.current = null)));
            },
            [n?.sessionId, n?.pageCategory, n?.pageSection, l],
        );
    return (r.useEffect(
        () => () => {
            null !== u.current && (clearTimeout(u.current), (u.current = null));
        },
        [],
    ),
    d)
        ? null
        : (0, i.jsx)(eT.N, {
              theme: eB.NJ.DARK,
              children: (e) =>
                  (0, i.jsx)(ek.L, {
                      innerRef: s,
                      onChange: C,
                      threshold: 0,
                      children: (0, i.jsx)("div", {
                          ref: s,
                          className: o()(eF.YB, e),
                          children: (0, i.jsxs)(eL.s, {
                              className: eF.kL,
                              onClick: p,
                              "aria-label": H.intl.string(eU.default["34GMP9"]),
                              children: [
                                  (0, i.jsx)("img", {
                                      className: eF.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, i.jsx)("div", { className: eF.f5, "aria-hidden": !0 }),
                                  !0 === t.isDismissible &&
                                      (0, i.jsx)("div", {
                                          className: eF.b,
                                          children: (0, i.jsx)(eO.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: eM.P,
                                              onClick: b,
                                              "aria-label": H.intl.string(H.t.WAI6xu),
                                          }),
                                      }),
                                  (0, i.jsx)("div", {
                                      className: eF.jE,
                                      children: (0, i.jsxs)("div", {
                                          className: eF.rF,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: eF.Z,
                                                  children: [
                                                      (0, i.jsx)(m.D, {
                                                          className: eF.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: H.intl.string(eU.default["34GMP9"]),
                                                      }),
                                                      (0, i.jsx)(M.E, {
                                                          className: eF.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: H.intl.string(eU.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, i.jsx)(h.$, {
                                                  variant: "overlay-primary",
                                                  text: H.intl.string(H.t.jVcuVY),
                                                  onClick: p,
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
var ew = l(227205),
    e$ = l(773669),
    eW = l(320089),
    ez = l(442036),
    eY = l(212407),
    eK = l(815280),
    eX = l(60140),
    eq = l(268270);
function eJ(e) {
    let { heroBlockRecord: t, heroLogo: l, logoDisplayConfig: n, collectionId: s, isLoading: r } = e;
    return r
        ? (0, i.jsx)("div", { className: eq.Hw })
        : (0, i.jsxs)("div", {
              className: eq.Hw,
              children: [
                  (0, i.jsxs)("div", {
                      className: eq.Wq,
                      children: [
                          null != l &&
                              (0, i.jsx)("img", { className: eq.rm, src: l, alt: t.name, style: n?.toDesktopStyles() }),
                          null != t.title &&
                              (0, i.jsx)(m.D, { variant: "heading-xxl/bold", color: "text-strong", children: t.title }),
                          null != t.summary &&
                              "" !== t.summary &&
                              (0, i.jsx)(M.E, {
                                  variant: "text-sm/normal",
                                  className: o()(eq.Tm, eq.vd),
                                  style: { color: null != t.bannerTextColor ? t.bannerTextColor : void 0 },
                                  children: t.summary,
                              }),
                      ],
                  }),
                  (0, i.jsx)(eW.A, { collectionId: s, variant: "condensed" }),
              ],
          });
}
let eZ = function (e) {
    let { promotion: t, heroBlock: l, isLoading: n, handleTransition: s, tab: a } = e,
        u = (0, Q.bG)([el.default], () => el.default.getCurrentUser()),
        c = (0, Q.bG)([e$.default], () => e$.default.locale),
        d = (0, _.uM)(),
        { analyticsLocations: m } = (0, $.Ay)(w.A.COLLECTIBLES_SHOP_HERO),
        h = r.useMemo(() => (0, S.HF)(t, l), [t, l]),
        g = r.useMemo(() => (0, S.O8)(t, l, a, c), [t, l, a, c]),
        {
            bannerDisplayConfig: x,
            logoDisplayConfig: f,
            heroLogo: p,
            heroBannerStatic: b,
            heroBannerAnimated: C,
        } = (0, eY.Kk)(g),
        v = x?.responsive ?? !1,
        j = x?.backgroundStyle;
    function N() {
        (s?.({ sourceButton: "shop latest category hero", categorySkuId: g.categorySkuId, isInternalShopDeeplink: !0 }),
            E.default.track(eN.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: d?.sessionId,
                sku_id: g.categorySkuId,
                page_type: a,
                page_section: d?.pageSection,
                page_category: d?.pageCategory,
                cta_name: "shop latest category hero button",
            }));
    }
    return null == u || null == h
        ? null
        : (0, i.jsx)($.f5, {
              value: m,
              children: (0, i.jsxs)("div", {
                  className: eq.os,
                  children: [
                      (0, i.jsx)("div", {
                          className: o()(eq.vK, { [eq.no]: v }),
                          style: null != j ? { background: j } : void 0,
                          children: null != b && (0, i.jsx)(eK.A, { bannerStatic: b, isResponsive: v }),
                      }),
                      (0, i.jsxs)("div", {
                          className: eq.xX,
                          children: [
                              (0, i.jsx)("div", {
                                  className: eq.zl,
                                  style: null != j ? { background: j } : void 0,
                                  children:
                                      null != b &&
                                      (0, i.jsx)(eK.A, { bannerStatic: b, bannerAnimated: C, isResponsive: v }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: eq.mz,
                                  children: [
                                      (0, i.jsx)(eT.N, {
                                          theme: eN.NJ8.DARK,
                                          children: (e) =>
                                              (0, i.jsxs)("div", {
                                                  className: e,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: eq.bC,
                                                          children: (0, i.jsx)(eJ, {
                                                              heroBlockRecord: g,
                                                              heroLogo: p,
                                                              logoDisplayConfig: f,
                                                              collectionId: l.categorySkuId,
                                                              isLoading: n,
                                                          }),
                                                      }),
                                                      (0, i.jsx)(ez.A, { onShopCollectionClick: N, className: eq.ti }),
                                                  ],
                                              }),
                                      }),
                                      (0, i.jsx)(eX.A, {
                                          heroBlockRecord: g,
                                          tab: a,
                                          isBlockLoading: n,
                                          layout: "hscroll",
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
};
var eQ = l(172218),
    e0 = l(28863),
    e1 = l(9530);
let e2 = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: l } = e,
        n = (0, eQ.K)(
            (e) => {
                l?.(e);
            },
            0.33,
            null != l,
        ),
        { bannerUrl: s, bannerAnimatedUrl: r } = (0, eY.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        o = null != t.body && "" !== t.body,
        u = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, i.jsxs)("div", {
        ref: n,
        className: e1.BX,
        children: [
            (0, i.jsx)("div", {
                className: e1.vK,
                children: null != s && (0, i.jsx)(eK.A, { bannerStatic: s, bannerAnimated: r }),
            }),
            (0, i.jsx)("div", {
                className: e1.HQ,
                children: (0, i.jsxs)("div", {
                    className: e1.Yn,
                    children: [
                        null != t.endTime ? (0, i.jsx)(U, { endDate: t.endTime, size: "lg" }) : null,
                        (0, i.jsx)(m.D, {
                            variant: "heading-xxl/bold",
                            className: e1.DD,
                            color: "text-strong",
                            style: { ...a },
                            children: t.title,
                        }),
                        o || u
                            ? (0, i.jsxs)(M.E, {
                                  variant: "text-md/medium",
                                  style: { ...a },
                                  children: [
                                      o && t.body,
                                      o && u && " ",
                                      u &&
                                          (0, i.jsx)(e0.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: e1.CU,
                                              style: { ...a },
                                              children: H.intl.string(H.t.O7ADgv),
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
var e5 = l(449543),
    e3 = l(197935),
    e4 = l(275161),
    e9 = l(554661);
function e6(e) {
    return e.skuId;
}
function e8(e) {
    let { product: t, index: l, shelfName: n, prioritizedCurrency: s, listItemProps: r } = e;
    return (0, i.jsx)(_.R9, {
        newValue: { tilePosition: l, pageSection: n, categoryPosition: 2 },
        children: (0, i.jsx)(eu.A, { skuId: t.skuId, prioritizedCurrency: s, listItemProps: r }),
    });
}
let e7 = function (e) {
    let { shelf: t, handleTransition: l, tab: n } = e,
        s = (0, Q.bG)([el.default], () => el.default.getCurrentUser()),
        a = (0, ec.Mk)(n),
        u = (0, Q.bG)([ei.A], () => (null != t.categorySkuId ? ei.A.getCategory(t.categorySkuId) : void 0)),
        c = (0, ev.A)(),
        d = r.useMemo(() => c(t.rankedSkuIds), [t.rankedSkuIds, c]),
        g = (0, ej.X)(d),
        { analyticsLocations: x } = (0, $.Ay)(w.A.COLLECTIBLES_SHOP_SHELF),
        f = (0, e4.Y)("shelf_block"),
        p = r.useMemo(() => g.filter((e) => null != ei.A.getCategoryForProduct(e.skuId)), [g]),
        E = r.useCallback(() => {
            l({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: u?.isOrbsExclusive === !0 && n !== eP.G2.ORBS,
            });
        }, [t.categorySkuId, u, l, n]);
    if (null == s || 0 === g.length) return null;
    let _ = t.buttonText ?? H.intl.formatToPlainString(H.t.bc9RBE, { category_name: t.name }),
        b = t.showButton,
        C = t.desktopBackgroundImage,
        v = null != C;
    return (0, i.jsx)($.f5, {
        value: x,
        children: (0, i.jsxs)("div", {
            className: o()(e9.mu, Y.YB, v ? e9.VA : e9.Ti),
            children: [
                v && (0, i.jsx)("img", { className: e9.iL, src: C, alt: "", "aria-hidden": !0 }),
                (0, i.jsxs)("div", {
                    className: e9.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: e9.wx,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    style: v ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                b &&
                                    (0, i.jsx)(h.$, {
                                        variant: v ? "overlay-primary" : "secondary",
                                        text: _,
                                        onClick: E,
                                    }),
                            ],
                        }),
                        f
                            ? (0, i.jsx)(e3.A, {
                                  gap: "xl",
                                  edgeFade: v ? "sm" : void 0,
                                  items: p,
                                  getItemKey: e6,
                                  maintainFocusOnReorder: !0,
                                  renderItem: (e, l, n) =>
                                      (0, i.jsx)(
                                          e8,
                                          {
                                              product: e,
                                              index: n,
                                              shelfName: t.name,
                                              prioritizedCurrency: a,
                                              listItemProps: l,
                                          },
                                          e.skuId,
                                      ),
                              })
                            : (0, i.jsx)(e5.A, {
                                  gap: "xl",
                                  edgeFade: v ? "sm" : void 0,
                                  children: p.map((e, l) =>
                                      (0, i.jsx)(
                                          e8,
                                          { product: e, index: l, shelfName: t.name, prioritizedCurrency: a },
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
var te = l(465794),
    tt = l(69236),
    tl = l(44724),
    tn = l(421108),
    ts = l(873297),
    ti = l(202541);
let tr = function (e) {
    let {
            applicationId: t,
            headerText: l,
            gradientColors: n,
            gradientAngle: s,
            skuIds: a,
            tab: o,
            endTime: u,
            ctaType: c = "storefront",
            logoUrl: d,
        } = e,
        m = (0, tn.ur)(u) ?? void 0,
        h = (0, tt.W8)(),
        g = r.useMemo(
            () =>
                "nitro" !== c || h
                    ? {
                          kind: "button",
                          text: H.intl.string(H.t.apFNLU),
                          onClick: () => (0, tl.default)({ applicationId: t }),
                          onMouseDown: () => (0, tl.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, i.jsx)(te.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: ti.pe.TIER_2,
                              buttonTextOverride: H.intl.string(H.t.pj0XBN),
                          }),
                      },
            [c, t, h],
        );
    return (0, i.jsx)(ts.A, {
        skuIds: a,
        tab: o,
        applicationId: t,
        headerText: l,
        logoUrl: d,
        cta: g,
        timeLeftText: m,
        analyticsSection: "slayer-storefront-promotional-banner",
        analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
        analyticsImpressionType: "social_layer_storefront_promotional_banner",
        backgroundGradient: `linear-gradient(${s}deg, ${n.join(", ")})`,
    });
};
var ta = l(613258),
    to = l(815021),
    tu = l(939249),
    tc = l(975571),
    td = l(597783);
let tm = function (e) {
        let { wideBannerBlock: t, tab: l } = e,
            n = ei.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            s = r.useRef(null),
            a = r.useRef(null),
            [u, d] = r.useState(),
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
                null != e && e.naturalWidth > 0 && e.naturalHeight > 0 && d(1080 * (e.naturalHeight / e.naturalWidth));
            }
        }, []);
        let p = n?.skuId ?? "",
            { handleCardVisibilityChange: b } = (0, td.Z)(p, "home", "marketing wide banner"),
            C = (0, _.uM)(),
            { bannerURL: v } = (0, eY.w$)(t),
            j = l === eP.G2.ORBS,
            S = null != t.ctaRoute && "" !== t.ctaRoute,
            N = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || S),
            y = null != t.logoURL && "" !== t.logoURL,
            A = r.useCallback(() => {
                if ((f(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, x.$l)(c.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: eH.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            I = r.useCallback(
                (e) => {
                    E.default.track(eN.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: C?.sessionId,
                        sku_id: p,
                        page_type: l,
                        page_section: C?.pageSection,
                        page_category: C?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(C?.tilePosition),
                        cta_name: e,
                    });
                },
                [C, p, l],
            ),
            R = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((I(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    l = parseInt(t[2], 10);
                                (0, tl.default)({ guildId: e, pageIndex: l });
                            }
                        } else (0, eD.pX)(e);
                    }
                },
                [t.ctaRoute, I],
            );
        if (null == v || g) return null;
        let k = o()(Y.nM, Y.Tq, Y.TS, Y.YB, { [Y._1]: j, [Y.vb]: S }),
            T = (0, i.jsxs)(i.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, i.jsx)("div", {
                            className: Y.Mh,
                            children: (0, i.jsx)(to.J, {
                                size: "sm",
                                onClick: (e) => {
                                    (e.stopPropagation(), A());
                                },
                                "aria-label": H.intl.string(H.t.WAI6xu),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: o()(Y.zK, { [Y._1]: j }),
                        style: null != u ? { height: `${u}px` } : void 0,
                        children: (0, i.jsx)("img", {
                            ref: a,
                            src: v,
                            alt: t.title,
                            className: o()(Y.LN, { [Y.d5]: j }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: o()(Y.Ep, { [Y.Qq]: N }),
                        style: { maxHeight: null != u ? `${u}px` : "auto" },
                        children: (0, i.jsxs)("div", {
                            className: Y.E8,
                            children: [
                                (0, i.jsx)(m.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: j ? Y.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, i.jsx)(M.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: j ? "text-md/medium" : "text-sm/medium",
                                    children: j
                                        ? H.intl.format(H.t.SFFP7K, {
                                              helpdeskArticle: tc.A.getArticleURL(eN.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                N &&
                                    (0, i.jsxs)("div", {
                                        className: Y.nP,
                                        children: [
                                            (0, i.jsx)(h.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    (e.stopPropagation(), R(t.ctaText ?? H.intl.string(H.t.jVcuVY)));
                                                },
                                                text: t.ctaText ?? H.intl.string(H.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? H.intl.formatToPlainString(H.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            y && (0, i.jsx)("img", { src: t.logoURL, alt: "", className: Y.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, i.jsx)(eT.N, {
            theme: j ? void 0 : eB.NJ.DARK,
            children: (e) =>
                (0, i.jsx)(ek.L, {
                    innerRef: s,
                    onChange: b,
                    threshold: 0,
                    children: S
                        ? (0, i.jsx)(tu.D, { innerRef: s, onClick: () => R(null), className: o()(e, k), children: T })
                        : (0, i.jsx)("div", { ref: s, className: o()(e, k), children: T }),
                }),
        });
    },
    th = (e) => {
        let { handleTransition: t, numVisibleItems: l, isFetchingCategories: n, tab: s } = e,
            { noCache: a, includeUnpublished: d } = (0, R.A)(),
            [m, h] = r.useState(!1),
            g = (0, _.uM)(),
            E = g?.sessionId ?? "",
            b = (0, f.H)({ location: "collectibles_shop_feed" }),
            { promotion: I, isFetchingPromotion: k } = (0, v.T)();
        r.useEffect(() => {
            (0, N.z)({
                sessionId: E,
                checkpoint: N.t.SHOP_MOUNTED,
                tab: s,
                unpublishedCategoriesShown: d,
                cacheDisabled: a,
            });
        }, [s]);
        let {
                isFetchingShopHome: T,
                fetchShopHomeError: L,
                shopBlocks: O,
                refreshShopHome: M,
            } = (0, j.y)(s, { noCache: a, includeUnpublished: d, logPerf: !0 }, { sessionId: E, tab: s }),
            D = r.useCallback(() => {
                M();
            }, [M]);
        return (r.useEffect(() => {
            null != L ||
                T ||
                0 === O.length ||
                (0, N.z)({
                    sessionId: E,
                    checkpoint: N.t.SHOP_RENDERED,
                    tab: s,
                    unpublishedCategoriesShown: d,
                    cacheDisabled: a,
                });
        }, [L, T, O.length, d, a, E, s]),
        null != L)
            ? (0, i.jsx)(A.h, { onRetry: D, errorOrigin: A.A.SHOP_PAGE, errorMessage: L.message })
            : T || 0 === O.length
              ? (0, i.jsxs)("div", {
                    className: o()(Y.g4, Y.Of),
                    children: [
                        (0, i.jsx)(ew.A, { isLoading: T || k, handleTransition: t, tab: s }),
                        (0, i.jsx)(q, { isLoading: T, handleTransition: t, categories: [] }),
                        (0, i.jsx)(eR, {
                            isLoading: T,
                            title: s === eP.G2.ORBS ? H.intl.string(H.t.dFgeuZ) : H.intl.string(H.t.NSv5KV),
                            numVisibleItems: l,
                            tab: s,
                        }),
                    ],
                })
              : (0, i.jsx)(i.Fragment, {
                    children: O.map((e, r) =>
                        (function (e, r, a) {
                            if (null == e) return null;
                            let d = null,
                                g = !1;
                            switch (e.type) {
                                case u.g.HERO:
                                    let f = (0, S.HF)(I, e);
                                    if (
                                        null != I &&
                                        f?.subtype === p.h5.TAKEOVER &&
                                        (null == I.endsAt || null != (0, y.X)(I.endsAt))
                                    ) {
                                        d = (0, i.jsx)(
                                            eZ,
                                            { promotion: I, isLoading: k, handleTransition: t, heroBlock: e, tab: s },
                                            a,
                                        );
                                        break;
                                    }
                                    d = (0, i.jsx)(
                                        ew.A,
                                        { isLoading: k, handleTransition: t, heroBlock: e, tab: s },
                                        a,
                                    );
                                    break;
                                case u.g.FEATURED:
                                    d = (0, i.jsx)(
                                        q,
                                        { isLoading: !1, handleTransition: t, featuredBlockRecord: e },
                                        a,
                                    );
                                    break;
                                case u.g.FEED:
                                    let E = e.sortedSkuIds;
                                    d = (0, i.jsx)(
                                        eR,
                                        {
                                            title:
                                                s === eP.G2.ORBS
                                                    ? H.intl.string(H.t.dFgeuZ)
                                                    : H.intl.string(H.t.NSv5KV),
                                            isLoading: n,
                                            numVisibleItems: l,
                                            sortedSkuIds: E,
                                            buttonContainerClassName: r?.type === u.g.IMMERSIVE_BANNER ? Y.w : void 0,
                                            tab: s,
                                            orbsSupportedOnly: s === eP.G2.ORBS,
                                        },
                                        a,
                                    );
                                    break;
                                case u.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: l } = (0, x.En)(c.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (l) return null;
                                    }
                                    d = (0, i.jsx)(tm, { wideBannerBlock: e, tab: s }, a);
                                    break;
                                case u.g.SHELF:
                                    d = (0, i.jsx)(e7, { handleTransition: t, shelf: e, tab: s }, a);
                                    break;
                                case u.g.COUNTDOWN_TIMER:
                                    ((d = (0, i.jsx)(G, { countdownTimerBlock: e, isVisible: m }, a)), (g = !0));
                                    break;
                                case u.g.IMMERSIVE_BANNER:
                                    d = (0, i.jsx)(
                                        e2,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => h(!e) },
                                        a,
                                    );
                                    break;
                                case u.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !b ||
                                        (!0 === e.isDismissible &&
                                            (0, x.En)(c.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, i.jsx)(
                                        C,
                                        {
                                            blockType: e.type,
                                            children: (0, i.jsx)(eV, { gameServerHostingBannerBlock: e, tab: s }),
                                        },
                                        a,
                                    );
                                case u.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, i.jsx)(
                                        C,
                                        {
                                            blockType: e.type,
                                            children: (0, i.jsx)(tr, {
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
                                C,
                                {
                                    blockType: e.type,
                                    children: (0, i.jsx)("div", {
                                        className: o()(Y.v1, Y.Of, { [Y.J1]: 0 === a || g }),
                                        children: d,
                                    }),
                                },
                                a,
                            );
                        })(e, r > 0 ? O[r - 1] : null, r),
                    ),
                });
    },
    tg = function (e) {
        let { handleTransition: t, tab: l, transitionState: n } = e,
            s = r.useRef(null),
            { handleScroll: a } = (0, g.X)(s, l),
            o = (0, I.U)(),
            u = (0, _.uM)(),
            [c, x] = r.useState(eP.md),
            [f, p] = r.useState(!1);
        return (
            r.useEffect(() => {
                if (null != s.current) {
                    function e() {
                        if (null == s.current) return;
                        let e = s.current.getDistanceFromBottom();
                        c >= 36 ? p(e < 20) : e <= 200 && x((e) => e + eP.md);
                    }
                    let t = s.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [s, c, x, p]),
            (0, i.jsx)(d.Ch, {
                className: Y.OW,
                ref: s,
                onScroll: a,
                children: (0, i.jsxs)("div", {
                    className: Y.bx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: Y.rb,
                            children: [
                                (0, i.jsx)(th, {
                                    handleTransition: t,
                                    numVisibleItems: c,
                                    isFetchingCategories: o,
                                    tab: l,
                                }),
                                l !== eP.G2.CATALOG &&
                                    c >= 36 &&
                                    (0, i.jsxs)("div", {
                                        className: Y.R$,
                                        children: [
                                            (0, i.jsx)(m.D, {
                                                variant: "heading-md/semibold",
                                                children: H.intl.string(H.t.Yr70c4),
                                            }),
                                            (0, i.jsx)(h.$, {
                                                variant: "primary",
                                                text: H.intl.string(H.t.AfrvRD),
                                                onClick: () => {
                                                    (t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        E.default.track(eN.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: u?.sessionId,
                                                            page_type: l,
                                                            page_category: l === eP.G2.HOME ? void 0 : u?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        }));
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)(ta.A, { peaking: f, transitioning: n === eP.Pf.OUT }),
                    ],
                }),
            })
        );
    };
