l.d(t, { A: () => th });
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
    y = l(599062),
    A = l(159439),
    I = l(998694),
    R = l(202091),
    k = l(607399),
    T = l(946015),
    L = l(717421),
    O = l(834730);
l(321073);
var M = l(140735),
    D = l(496431),
    P = l(375708),
    H = l(302326);
function B(e) {
    let { endDate: t, size: l = "md", className: n, showSeconds: s = !1 } = e,
        { days: r, hours: a, minutes: u, seconds: c } = (0, D.A)(t),
        d = (function (e, t, l, n, s) {
            function i(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let r = [i(e), i(t), i(l)];
            return (s && r.push(i(n)), r.join(":"));
        })(r, a, u, c, s);
    return (0, i.jsxs)("div", {
        className: o()(H.kL, n),
        role: "timer",
        children: [
            d
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, i.jsx)(
                              O.E,
                              {
                                  color: "none",
                                  variant: "md" === l ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: H.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, i.jsx)(
                              O.E,
                              {
                                  color: "text-overlay-light",
                                  variant: "md" === l ? "heading-md/bold" : "heading-xl/bold",
                                  className: H.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, i.jsx)(M.A, { children: P.intl.format(P.t.j6IyVe, { days: r, hours: a, minutes: u }) }),
        ],
    });
}
var U = l(685879);
let F = r.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: l } = e,
        n = (0, L.z)({
            transform: `translateX(-50%) ${l ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!l,
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsxs)(R.animated.div, {
        className: o()([U.lP, k.Fr && U.yJ]),
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
            (0, i.jsxs)(T.s, {
                direction: T.s.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(O.E, {
                        variant: "text-md/medium",
                        className: U.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, i.jsx)(O.E, {
                            variant: "text-sm/medium",
                            className: U.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, i.jsx)(B, { endDate: t.endTime }),
        ],
    });
});
var G = l(424918),
    V = l(793574),
    w = l(688810),
    $ = l(993408),
    W = l(196231),
    z = l(105499);
function Y(e) {
    let { handleTransition: t, featuredBlockRecord: l } = e;
    return (0, i.jsx)("div", {
        className: o()(z.n9, z.YB),
        children: l?.subblocks.map((e, l) =>
            e.type === G.u.CATEGORY
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
                              W.S,
                              {
                                  subblock: e,
                                  enablePreview: 0 === l,
                                  badgeText: (0, $.HF)(e.unpublishedAt) ? P.intl.string(P.t["h/uBCR"]) : void 0,
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
function K(e) {
    let { handleTransition: t, categories: l } = e;
    if (null == l || l.length < 2) return null;
    let [n, s] = l;
    return (0, i.jsx)("div", {
        className: o()(z.n9, z.YB),
        children: (0, i.jsxs)(_.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != n ? n.name : s?.name,
                pageSection: "featured_block",
                tilePosition: +(null == n),
            },
            children: [
                null != n &&
                    (0, i.jsx)(W.S, {
                        category: n,
                        enablePreview: !0,
                        badgeText: (0, $.HF)(n.unpublishedAt) ? P.intl.string(P.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != s &&
                    (0, i.jsx)(W.S, {
                        category: s,
                        badgeText: (0, $.HF)(s.unpublishedAt) ? P.intl.string(P.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let X = function (e) {
    let { isLoading: t, handleTransition: l, categories: n, featuredBlockRecord: s } = e,
        { analyticsLocations: r } = (0, w.Ay)(V.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, i.jsxs)("div", {
              className: o()(z.n9, z.YB),
              children: [
                  (0, i.jsx)("div", { className: o()(z.Jn, z.oT), children: (0, i.jsx)("div", { className: z.uy }) }),
                  (0, i.jsx)("div", { className: o()(z.Jn, z.oT), children: (0, i.jsx)("div", { className: z.uy }) }),
              ],
          })
        : null != s
          ? (0, i.jsx)(w.f5, {
                value: r,
                children: (0, i.jsx)(Y, { featuredBlockRecord: s, handleTransition: l, isLoading: !1 }),
            })
          : (0, i.jsx)(w.f5, {
                value: r,
                children: (0, i.jsx)(K, { categories: n, handleTransition: l, isLoading: !1 }),
            });
};
var q = l(334279),
    J =
        (((n = {}).RECOMMENDED = "recommended"),
        (n.POPULAR = "popular"),
        (n.RECENT = "recent"),
        (n.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (n.RANDOM = "random"),
        n),
    Z = l(17928),
    Q = l(691885),
    ee = l(775602),
    et = l(287809),
    el = l(531685),
    en = l(158045),
    es = l(590180),
    ei = l(395856),
    er = l(503089),
    ea = l(682301),
    eo = l(258245),
    eu = l(561769),
    ec = l(484469),
    ed = l(621466),
    em =
        (((s = {}).MOUNTED = "mounted"),
        (s.SORT_OUT = "sort-out"),
        (s.SORT_IN = "sort-in"),
        (s.SHUFFLE_OUT = "shuffle-out"),
        (s.SHUFFLE_IN = "shuffle-in"),
        (s.FINISHED = "finished"),
        s),
    eh = l(401864),
    eg = l(124987),
    ex = l(946716);
let ef = {
    [J.RECENT]: { sortType: eg.$.RECENCY, sortDirection: eh.A.DESC },
    [J.PRICE_LOW_TO_HIGH]: { sortType: eg.$.PRICE, sortDirection: eh.A.ASC },
};
l(667532);
var ep = l(435558),
    eE = l.n(ep),
    e_ = l(153488),
    eb = l(511265),
    eC = l(313276),
    ev = l(206077),
    ej = l(623373),
    eS = l(652215),
    eN = l(783857),
    ey = l(645501);
let eA = [],
    eI = function (e) {
        let {
                isLoading: t,
                title: l,
                sortedSkuIds: n,
                numVisibleItems: s,
                tab: a,
                buttonContainerClassName: u,
                orbsSupportedOnly: c,
            } = e,
            d = (0, Z.bG)([et.default], () => et.default.getCurrentUser()),
            m = en.Ay.canUseShopDiscounts(d),
            g = (0, eu.Mk)(a),
            x = (0, eN.yB)("FeedBlock"),
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
                    s = (0, Z.bG)([e_.A], () => e_.A.hasConsented(eS.YAq.PERSONALIZATION)),
                    i = r.useMemo(() => t?.[J.RECOMMENDED] ?? [], [t]),
                    a = r.useMemo(() => t?.[J.POPULAR] ?? [], [t]),
                    o = i.length > 0 && s,
                    [u, c] = r.useState(o ? J.RECOMMENDED : J.POPULAR),
                    d = (0, Z.bG)([es.A], () => es.A.productsWithVariantsAsGroup),
                    m = r.useMemo(() => (0, $.CE)(d), [d]),
                    h = (0, eC.A)(),
                    g = (0, eb.p)(),
                    [x, f] = r.useState([]),
                    p = r.useCallback(() => {
                        (c(J.RANDOM), f(eE().shuffle(m)));
                    }, [m]);
                r.useEffect(() => {
                    f(eE().shuffle(m));
                }, [m]);
                let E = r.useMemo(() => {
                        let e = [];
                        switch (u) {
                            case J.RECENT:
                                e = m;
                                break;
                            case J.PRICE_LOW_TO_HIGH:
                                e = (0, $.bf)([...m], l, n);
                                break;
                            case J.RECOMMENDED:
                                e = h(i);
                                break;
                            case J.POPULAR:
                                e = h(a);
                                break;
                            case J.RANDOM:
                                e = x;
                        }
                        return n ? (0, ej.ex)(g(e)) : g(e);
                    }, [u, n, g, l, m, h, i, a, x]),
                    _ = (0, ev.X)(E),
                    b = r.useMemo(
                        () => (u === J.RECOMMENDED ? i : u === J.POPULAR ? a : _.map((e) => e.skuId)),
                        [u, i, a, _],
                    );
                return {
                    sortType: u,
                    setSortType: c,
                    sortedItems: _,
                    orderedSkuIds: b,
                    sortOptions: r.useMemo(() => {
                        let e = [
                            { value: J.POPULAR, label: P.intl.string(P.t.Y68e5p) },
                            { value: J.RECENT, label: P.intl.string(P.t["51Bhiz"]) },
                            { value: J.PRICE_LOW_TO_HIGH, label: P.intl.string(P.t.m8RVU2) },
                        ];
                        return (o && e.unshift({ value: J.RECOMMENDED, label: P.intl.string(P.t.zPWgFG) }), e);
                    }, [o]),
                    showRecommendationOption: o,
                    shuffleProducts: p,
                };
            })({ sortedSkuIds: n, hasShopDiscount: m, orbsSupportedOnly: c }),
            N = f === J.RANDOM,
            y = (0, ei.$)("feed_block"),
            [A, I] = r.useState(0),
            R = `${f}:${!0 === c}:${A}`,
            [k, T] = r.useState({ key: R, extra: 0 }),
            L = k.key === R ? k.extra : 0;
        k.key !== R && T({ key: R, extra: 0 });
        let {
                skuIds: D,
                isLoading: H,
                hasMore: B,
            } = (function (e) {
                let { sortType: t, orbsSupportedOnly: l, numVisibleItems: n, enabled: s, shuffleNonce: i } = e,
                    a = r.useMemo(
                        () =>
                            (function (e, t) {
                                if (e === J.RANDOM) return { randomize: !0 };
                                if (t && e === J.POPULAR) return { randomize_daily: !0 };
                                let l = ef[e];
                                return null == l ? null : { sort_type: l.sortType, sort_direction: l.sortDirection };
                            })(t, !0 === l),
                        [t, l],
                    ),
                    o = t === J.RANDOM,
                    u = s && n > 0 && null != a && null != a ? `${JSON.stringify(a)}:${!0 === l}` : null,
                    c = null == u ? null : `${u}:${o ? i : ""}:${n}`,
                    [d, m] = r.useState(null);
                if (
                    (r.useEffect(() => {
                        if (null == c || null == a) return;
                        let e = !1;
                        return (
                            (0, ex.$)({
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
            U = D ?? C,
            F = r.useMemo(() => U.slice(0, s + L + (N ? 32 : 8)), [U, s, L, N]),
            G = (0, ea.hv)(y ? F : eA, { needsCategory: !1 }),
            W = (0, er.c)("feed_block"),
            Y = r.useMemo(() => {
                if (!y) return F;
                let e = new Set();
                return F.filter((t) => {
                    let l = G[t];
                    if (l?.state === "error" || (!W && t === q.j.PREMIUM_TIER_2_1_DAY)) return !1;
                    let n = l?.product?.storeListingId;
                    if (null != n) {
                        if (e.has(n)) return !1;
                        e.add(n);
                    }
                    return !0;
                });
            }, [y, F, G, W]),
            K = r.useMemo(
                () =>
                    !!y &&
                    !H &&
                    F.every((e) => {
                        let t = G[e]?.state;
                        return "ready" === t || "error" === t;
                    }),
                [y, H, F, G],
            ),
            X = !N && B && L < 16,
            eh = s - Y.length;
        if (K && eh > 0 && X) {
            let e = Math.min(16, L + eh + 8);
            e !== L && T({ key: R, extra: e });
        }
        let eg = (0, Z.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
            ep = (0, Z.bG)([el.A], () => el.A.isFocused()),
            eI = !eg && ep,
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
                                (0, ed.vq)(e, HTMLButtonElement) ||
                                (0, ed.vq)(e, HTMLAnchorElement) ||
                                (0, ed.vq)(e, HTMLInputElement) ||
                                (0, ed.vq)(e, HTMLSelectElement) ||
                                (0, ed.vq)(e, HTMLTextAreaElement)
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
            { analyticsLocations: eM } = (0, w.Ay)(V.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            eD = r.useRef(null),
            eP = r.useRef(null),
            [eH, eB] = r.useState(!1),
            eU = r.useCallback(
                (e) => {
                    (eB(!1),
                        ek({ isShuffling: !1, onOutroComplete: () => p(e), returnRef: eP }),
                        E.default.track(eS.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: eO,
                            sort_type: e,
                        }));
                },
                [ek, p, eO],
            );
        if (null == d) return null;
        function eF(e, t) {
            let l;
            return eI && eR === em.SHUFFLE_OUT
                ? (0, i.jsx)("div", { className: z.Z2, children: (0, i.jsx)(ec.A, {}) }, `${e}-${t}`)
                : (eI &&
                      (eR === em.SORT_OUT
                          ? (l = z.MW)
                          : eR === em.SHUFFLE_IN
                            ? (l = z.aS)
                            : eR === em.SORT_IN && (l = z.F7)),
                  (0, i.jsx)(
                      _.R9,
                      {
                          newValue: { tilePosition: t, pageSection: "popular picks", categoryPosition: 2 },
                          children: (0, i.jsx)("div", {
                              className: l,
                              children: (0, i.jsx)(eo.A, {
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
            value: eM,
            children: (0, i.jsxs)("div", {
                className: o()(z.lD, z.YB),
                children: [
                    (0, i.jsxs)("div", {
                        className: z.$6,
                        children: [
                            (0, i.jsx)(ey.A, { label: l, personalizedResults: S }),
                            (0, i.jsxs)("div", {
                                className: o()(z.IE, { [eN.jP]: x }),
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: z.gd,
                                        children: [
                                            (0, i.jsx)(O.E, {
                                                variant: "text-md/medium",
                                                children: P.intl.string(P.t.uaX705),
                                            }),
                                            (0, i.jsx)("div", {
                                                className: o()(u, z.pI),
                                                ref: eP,
                                                children: (0, i.jsx)(Q.l, {
                                                    label: P.intl.string(P.t.uaX705),
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
                                            text: P.intl.string(P.t.X3tnc4),
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
                                                    E.default.track(eS.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                        page_session_id: eO,
                                                    }));
                                            },
                                            disabled: eR !== em.MOUNTED && eR !== em.FINISHED,
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(M.A, {
                                "aria-live": "polite",
                                role: "status",
                                children: eH && eR === em.FINISHED ? P.intl.string(P.t["3Pml0e"]) : "",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: z.hm,
                        children: t
                            ? (0, i.jsx)(i.Fragment, {
                                  children: [...Array(12)].map((e, t) => (0, i.jsx)(ec.A, {}, t + 1)),
                              })
                            : y
                              ? eI && eR === em.SHUFFLE_OUT
                                  ? [...Array(s)].map((e, t) =>
                                        (0, i.jsx)(
                                            "div",
                                            { className: z.Z2, children: (0, i.jsx)(ec.A, {}) },
                                            `shuffle-placeholder-${t}`,
                                        ),
                                    )
                                  : H && null == D
                                    ? (0, i.jsx)(i.Fragment, {
                                          children: [...Array(12)].map((e, t) => (0, i.jsx)(ec.A, {}, t + 1)),
                                      })
                                    : Y.slice(0, s).map((e, t) => eF(e, t))
                              : b
                                    .slice(0, s)
                                    .map((e, t) =>
                                        null == e || null == es.A.getCategoryForProduct(e.skuId)
                                            ? null
                                            : eF(e.skuId, t),
                                    ),
                    }),
                ],
            }),
        });
    };
var eR = l(269115),
    ek = l(43990),
    eT = l(890856),
    eL = l(408278),
    eO = l(789645),
    eM = l(976860),
    eD = l(758836),
    eP = l(49999),
    eH = l(818348),
    eB = l(394107),
    eU = l(196064);
let eF = "GAME_SERVER_HOSTING_BANNER";
function eG(e) {
    let { gameServerHostingBannerBlock: t, tab: l } = e,
        n = (0, _.uM)(),
        s = r.useRef(null),
        a = r.useRef(!1),
        u = r.useRef(null),
        [d, g] = r.useState(!1),
        f = r.useCallback(
            (e) => {
                E.default.track(eS.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: n?.sessionId,
                    page_type: l,
                    page_category: n?.pageCategory,
                    page_section: n?.pageSection,
                    tile_type: eF,
                    cta_name: e,
                });
            },
            [n?.sessionId, n?.pageCategory, n?.pageSection, l],
        ),
        p = r.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    f("go_to_game_server_hosting"),
                    (0, eM.pX)(eS.BVt.COLLECTIBLES_SHOP_WITH_TAB(eD.G2.GAME_SERVERS)));
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
                            dismissAction: eP.i.USER_DISMISS,
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
                                  E.default.track(eS.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: n?.sessionId,
                                      page_type: l,
                                      page_category: n?.pageCategory,
                                      page_section: n?.pageSection,
                                      type: eF,
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
        : (0, i.jsx)(ek.N, {
              theme: eH.NJ.DARK,
              children: (e) =>
                  (0, i.jsx)(eR.L, {
                      innerRef: s,
                      onChange: C,
                      threshold: 0,
                      children: (0, i.jsx)("div", {
                          ref: s,
                          className: o()(eU.YB, e),
                          children: (0, i.jsxs)(eT.s, {
                              className: eU.kL,
                              onClick: p,
                              "aria-label": P.intl.string(eB.default["34GMP9"]),
                              children: [
                                  (0, i.jsx)("img", {
                                      className: eU.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, i.jsx)("div", { className: eU.f5, "aria-hidden": !0 }),
                                  !0 === t.isDismissible &&
                                      (0, i.jsx)("div", {
                                          className: eU.b,
                                          children: (0, i.jsx)(eL.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: eO.P,
                                              onClick: b,
                                              "aria-label": P.intl.string(P.t.WAI6xu),
                                          }),
                                      }),
                                  (0, i.jsx)("div", {
                                      className: eU.jE,
                                      children: (0, i.jsxs)("div", {
                                          className: eU.rF,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: eU.Z,
                                                  children: [
                                                      (0, i.jsx)(m.D, {
                                                          className: eU.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: P.intl.string(eB.default["34GMP9"]),
                                                      }),
                                                      (0, i.jsx)(O.E, {
                                                          className: eU.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: P.intl.string(eB.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, i.jsx)(h.$, {
                                                  variant: "overlay-primary",
                                                  text: P.intl.string(P.t.jVcuVY),
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
var eV = l(227205),
    ew = l(773669),
    e$ = l(320089),
    eW = l(442036),
    ez = l(212407),
    eY = l(815280),
    eK = l(60140),
    eX = l(268270);
function eq(e) {
    let { heroBlockRecord: t, heroLogo: l, logoDisplayConfig: n, collectionId: s, isLoading: r } = e;
    return r
        ? (0, i.jsx)("div", { className: eX.Hw })
        : (0, i.jsxs)("div", {
              className: eX.Hw,
              children: [
                  (0, i.jsxs)("div", {
                      className: eX.Wq,
                      children: [
                          null != l &&
                              (0, i.jsx)("img", { className: eX.rm, src: l, alt: t.name, style: n?.toDesktopStyles() }),
                          null != t.title &&
                              (0, i.jsx)(m.D, { variant: "heading-xxl/bold", color: "text-strong", children: t.title }),
                          null != t.summary &&
                              "" !== t.summary &&
                              (0, i.jsx)(O.E, {
                                  variant: "text-sm/normal",
                                  className: o()(eX.Tm, eX.vd),
                                  style: { color: null != t.bannerTextColor ? t.bannerTextColor : void 0 },
                                  children: t.summary,
                              }),
                      ],
                  }),
                  (0, i.jsx)(e$.A, { collectionId: s, variant: "condensed" }),
              ],
          });
}
let eJ = function (e) {
    let { promotion: t, heroBlock: l, isLoading: n, handleTransition: s, tab: a } = e,
        u = (0, Z.bG)([et.default], () => et.default.getCurrentUser()),
        c = (0, Z.bG)([ew.default], () => ew.default.locale),
        d = (0, _.uM)(),
        { analyticsLocations: m } = (0, w.Ay)(V.A.COLLECTIBLES_SHOP_HERO),
        h = r.useMemo(() => (0, S.HF)(t, l), [t, l]),
        g = r.useMemo(() => (0, S.O8)(t, l, a, c), [t, l, a, c]),
        {
            bannerDisplayConfig: x,
            logoDisplayConfig: f,
            heroLogo: p,
            heroBannerStatic: b,
            heroBannerAnimated: C,
        } = (0, ez.Kk)(g),
        v = x?.responsive ?? !1,
        j = x?.backgroundStyle;
    function N() {
        (s?.({ sourceButton: "shop latest category hero", categorySkuId: g.categorySkuId, isInternalShopDeeplink: !0 }),
            E.default.track(eS.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        : (0, i.jsx)(w.f5, {
              value: m,
              children: (0, i.jsxs)("div", {
                  className: eX.os,
                  children: [
                      (0, i.jsx)("div", {
                          className: o()(eX.vK, { [eX.no]: v }),
                          style: null != j ? { background: j } : void 0,
                          children: null != b && (0, i.jsx)(eY.A, { bannerStatic: b, isResponsive: v }),
                      }),
                      (0, i.jsxs)("div", {
                          className: eX.xX,
                          children: [
                              (0, i.jsx)("div", {
                                  className: eX.zl,
                                  style: null != j ? { background: j } : void 0,
                                  children:
                                      null != b &&
                                      (0, i.jsx)(eY.A, { bannerStatic: b, bannerAnimated: C, isResponsive: v }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: eX.mz,
                                  children: [
                                      (0, i.jsx)(ek.N, {
                                          theme: eS.NJ8.DARK,
                                          children: (e) =>
                                              (0, i.jsxs)("div", {
                                                  className: e,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: eX.bC,
                                                          children: (0, i.jsx)(eq, {
                                                              heroBlockRecord: g,
                                                              heroLogo: p,
                                                              logoDisplayConfig: f,
                                                              collectionId: l.categorySkuId,
                                                              isLoading: n,
                                                          }),
                                                      }),
                                                      (0, i.jsx)(eW.A, { onShopCollectionClick: N, className: eX.ti }),
                                                  ],
                                              }),
                                      }),
                                      (0, i.jsx)(eK.A, {
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
var eZ = l(172218),
    eQ = l(28863),
    e0 = l(9530);
let e1 = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: l } = e,
        n = (0, eZ.K)(
            (e) => {
                l?.(e);
            },
            0.33,
            null != l,
        ),
        { bannerUrl: s, bannerAnimatedUrl: r } = (0, ez.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        o = null != t.body && "" !== t.body,
        u = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, i.jsxs)("div", {
        ref: n,
        className: e0.BX,
        children: [
            (0, i.jsx)("div", {
                className: e0.vK,
                children: null != s && (0, i.jsx)(eY.A, { bannerStatic: s, bannerAnimated: r }),
            }),
            (0, i.jsx)("div", {
                className: e0.HQ,
                children: (0, i.jsxs)("div", {
                    className: e0.Yn,
                    children: [
                        null != t.endTime ? (0, i.jsx)(B, { endDate: t.endTime, size: "lg" }) : null,
                        (0, i.jsx)(m.D, {
                            variant: "heading-xxl/bold",
                            className: e0.DD,
                            color: "text-strong",
                            style: { ...a },
                            children: t.title,
                        }),
                        o || u
                            ? (0, i.jsxs)(O.E, {
                                  variant: "text-md/medium",
                                  style: { ...a },
                                  children: [
                                      o && t.body,
                                      o && u && " ",
                                      u &&
                                          (0, i.jsx)(eQ.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: e0.CU,
                                              style: { ...a },
                                              children: P.intl.string(P.t.O7ADgv),
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
var e2 = l(449543),
    e5 = l(197935),
    e3 = l(275161),
    e4 = l(554661);
function e9(e) {
    return e.skuId;
}
function e6(e) {
    let { product: t, index: l, shelfName: n, prioritizedCurrency: s, listItemProps: r } = e;
    return (0, i.jsx)(_.R9, {
        newValue: { tilePosition: l, pageSection: n, categoryPosition: 2 },
        children: (0, i.jsx)(eo.A, { skuId: t.skuId, prioritizedCurrency: s, listItemProps: r }),
    });
}
let e7 = function (e) {
    let { shelf: t, handleTransition: l, tab: n } = e,
        s = (0, Z.bG)([et.default], () => et.default.getCurrentUser()),
        a = (0, eu.Mk)(n),
        u = (0, Z.bG)([es.A], () => (null != t.categorySkuId ? es.A.getCategory(t.categorySkuId) : void 0)),
        c = (0, eC.A)(),
        d = r.useMemo(() => c(t.rankedSkuIds), [t.rankedSkuIds, c]),
        g = (0, ev.X)(d),
        { analyticsLocations: x } = (0, w.Ay)(V.A.COLLECTIBLES_SHOP_SHELF),
        f = (0, e3.Y)("shelf_block"),
        p = r.useMemo(() => g.filter((e) => null != es.A.getCategoryForProduct(e.skuId)), [g]),
        E = r.useCallback(() => {
            l({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: u?.isOrbsExclusive === !0 && n !== eD.G2.ORBS,
            });
        }, [t.categorySkuId, u, l, n]);
    if (null == s || 0 === g.length) return null;
    let _ = t.buttonText ?? P.intl.formatToPlainString(P.t.bc9RBE, { category_name: t.name }),
        b = t.showButton,
        C = t.desktopBackgroundImage,
        v = null != C;
    return (0, i.jsx)(w.f5, {
        value: x,
        children: (0, i.jsxs)("div", {
            className: o()(e4.mu, z.YB, v ? e4.VA : e4.Ti),
            children: [
                v && (0, i.jsx)("img", { className: e4.iL, src: C, alt: "", "aria-hidden": !0 }),
                (0, i.jsxs)("div", {
                    className: e4.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: e4.wx,
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
                            ? (0, i.jsx)(e5.A, {
                                  gap: "xl",
                                  edgeFade: v ? "sm" : void 0,
                                  items: p,
                                  getItemKey: e9,
                                  maintainFocusOnReorder: !0,
                                  renderItem: (e, l, n) =>
                                      (0, i.jsx)(
                                          e6,
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
                            : (0, i.jsx)(e2.A, {
                                  gap: "xl",
                                  edgeFade: v ? "sm" : void 0,
                                  children: p.map((e, l) =>
                                      (0, i.jsx)(
                                          e6,
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
var e8 = l(465794),
    te = l(69236),
    tt = l(44724),
    tl = l(421108),
    tn = l(873297),
    ts = l(202541);
let ti = function (e) {
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
        m = (0, tl.ur)(u) ?? void 0,
        h = (0, te.W8)(),
        g = r.useMemo(
            () =>
                "nitro" !== c || h
                    ? {
                          kind: "button",
                          text: P.intl.string(P.t.apFNLU),
                          onClick: () => (0, tt.default)({ applicationId: t }),
                          onMouseDown: () => (0, tt.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, i.jsx)(e8.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: ts.pe.TIER_2,
                              buttonTextOverride: P.intl.string(P.t.pj0XBN),
                          }),
                      },
            [c, t, h],
        );
    return (0, i.jsx)(tn.A, {
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
var tr = l(613258),
    ta = l(815021),
    to = l(939249),
    tu = l(975571),
    tc = l(597783);
let td = function (e) {
        let { wideBannerBlock: t, tab: l } = e,
            n = es.A.getCategoryByStoreListingId(t.categoryStoreListingId),
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
            { handleCardVisibilityChange: b } = (0, tc.Z)(p, "home", "marketing wide banner"),
            C = (0, _.uM)(),
            { bannerURL: v } = (0, ez.w$)(t),
            j = l === eD.G2.ORBS,
            S = null != t.ctaRoute && "" !== t.ctaRoute,
            N = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || S),
            y = null != t.logoURL && "" !== t.logoURL,
            A = r.useCallback(() => {
                if ((f(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, x.$l)(c.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: eP.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            I = r.useCallback(
                (e) => {
                    E.default.track(eS.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                (0, tt.default)({ guildId: e, pageIndex: l });
                            }
                        } else (0, eM.pX)(e);
                    }
                },
                [t.ctaRoute, I],
            );
        if (null == v || g) return null;
        let k = o()(z.nM, z.Tq, z.TS, z.YB, { [z._1]: j, [z.vb]: S }),
            T = (0, i.jsxs)(i.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, i.jsx)("div", {
                            className: z.Mh,
                            children: (0, i.jsx)(ta.J, {
                                size: "sm",
                                onClick: (e) => {
                                    (e.stopPropagation(), A());
                                },
                                "aria-label": P.intl.string(P.t.WAI6xu),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: o()(z.zK, { [z._1]: j }),
                        style: null != u ? { height: `${u}px` } : void 0,
                        children: (0, i.jsx)("img", {
                            ref: a,
                            src: v,
                            alt: t.title,
                            className: o()(z.LN, { [z.d5]: j }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: o()(z.Ep, { [z.Qq]: N }),
                        style: { maxHeight: null != u ? `${u}px` : "auto" },
                        children: (0, i.jsxs)("div", {
                            className: z.E8,
                            children: [
                                (0, i.jsx)(m.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: j ? z.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, i.jsx)(O.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: j ? "text-md/medium" : "text-sm/medium",
                                    children: j
                                        ? P.intl.format(P.t.SFFP7K, {
                                              helpdeskArticle: tu.A.getArticleURL(eS.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                N &&
                                    (0, i.jsxs)("div", {
                                        className: z.nP,
                                        children: [
                                            (0, i.jsx)(h.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    (e.stopPropagation(), R(t.ctaText ?? P.intl.string(P.t.jVcuVY)));
                                                },
                                                text: t.ctaText ?? P.intl.string(P.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? P.intl.formatToPlainString(P.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            y && (0, i.jsx)("img", { src: t.logoURL, alt: "", className: z.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, i.jsx)(ek.N, {
            theme: j ? void 0 : eH.NJ.DARK,
            children: (e) =>
                (0, i.jsx)(eR.L, {
                    innerRef: s,
                    onChange: b,
                    threshold: 0,
                    children: S
                        ? (0, i.jsx)(to.D, { innerRef: s, onClick: () => R(null), className: o()(e, k), children: T })
                        : (0, i.jsx)("div", { ref: s, className: o()(e, k), children: T }),
                }),
        });
    },
    tm = (e) => {
        let { handleTransition: t, numVisibleItems: l, isFetchingCategories: n, tab: s } = e,
            { noCache: a, includeUnpublished: d } = (0, I.A)(),
            [m, h] = r.useState(!1),
            g = (0, _.uM)(),
            E = g?.sessionId ?? "",
            b = (0, f.H)({ location: "collectibles_shop_feed" }),
            { promotion: A, isFetchingPromotion: R } = (0, v.T)();
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
                isFetchingShopHome: k,
                fetchShopHomeError: T,
                shopBlocks: L,
                refreshShopHome: O,
            } = (0, j.y)(s, { noCache: a, includeUnpublished: d, logPerf: !0 }, { sessionId: E, tab: s }),
            M = r.useCallback(() => {
                O();
            }, [O]);
        return (r.useEffect(() => {
            null != T ||
                k ||
                0 === L.length ||
                (0, N.z)({
                    sessionId: E,
                    checkpoint: N.t.SHOP_RENDERED,
                    tab: s,
                    unpublishedCategoriesShown: d,
                    cacheDisabled: a,
                });
        }, [T, k, L.length, d, a, E, s]),
        null != T)
            ? (0, i.jsx)(y.h, { onRetry: M, errorOrigin: y.A.SHOP_PAGE, errorMessage: T.message })
            : k || 0 === L.length
              ? (0, i.jsxs)("div", {
                    className: o()(z.g4, z.Of),
                    children: [
                        (0, i.jsx)(eV.A, { isLoading: k || R, handleTransition: t, tab: s }),
                        (0, i.jsx)(X, { isLoading: k, handleTransition: t, categories: [] }),
                        (0, i.jsx)(eI, {
                            isLoading: k,
                            title: s === eD.G2.ORBS ? P.intl.string(P.t.dFgeuZ) : P.intl.string(P.t.NSv5KV),
                            numVisibleItems: l,
                            tab: s,
                        }),
                    ],
                })
              : (0, i.jsx)(i.Fragment, {
                    children: L.map((e, r) =>
                        (function (e, r, a) {
                            if (null == e) return null;
                            let d = null,
                                g = !1;
                            switch (e.type) {
                                case u.g.HERO:
                                    let f = (0, S.HF)(A, e);
                                    if (null != A && f?.subtype === p.h5.TAKEOVER) {
                                        d = (0, i.jsx)(
                                            eJ,
                                            { promotion: A, isLoading: R, handleTransition: t, heroBlock: e, tab: s },
                                            a,
                                        );
                                        break;
                                    }
                                    d = (0, i.jsx)(
                                        eV.A,
                                        { isLoading: R, handleTransition: t, heroBlock: e, tab: s },
                                        a,
                                    );
                                    break;
                                case u.g.FEATURED:
                                    d = (0, i.jsx)(
                                        X,
                                        { isLoading: !1, handleTransition: t, featuredBlockRecord: e },
                                        a,
                                    );
                                    break;
                                case u.g.FEED:
                                    let E = e.sortedSkuIds;
                                    d = (0, i.jsx)(
                                        eI,
                                        {
                                            title:
                                                s === eD.G2.ORBS
                                                    ? P.intl.string(P.t.dFgeuZ)
                                                    : P.intl.string(P.t.NSv5KV),
                                            isLoading: n,
                                            numVisibleItems: l,
                                            sortedSkuIds: E,
                                            buttonContainerClassName: r?.type === u.g.IMMERSIVE_BANNER ? z.w : void 0,
                                            tab: s,
                                            orbsSupportedOnly: s === eD.G2.ORBS,
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
                                    d = (0, i.jsx)(td, { wideBannerBlock: e, tab: s }, a);
                                    break;
                                case u.g.SHELF:
                                    d = (0, i.jsx)(e7, { handleTransition: t, shelf: e, tab: s }, a);
                                    break;
                                case u.g.COUNTDOWN_TIMER:
                                    ((d = (0, i.jsx)(F, { countdownTimerBlock: e, isVisible: m }, a)), (g = !0));
                                    break;
                                case u.g.IMMERSIVE_BANNER:
                                    d = (0, i.jsx)(
                                        e1,
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
                                            children: (0, i.jsx)(eG, { gameServerHostingBannerBlock: e, tab: s }),
                                        },
                                        a,
                                    );
                                case u.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, i.jsx)(
                                        C,
                                        {
                                            blockType: e.type,
                                            children: (0, i.jsx)(ti, {
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
                                        className: o()(z.v1, z.Of, { [z.J1]: 0 === a || g }),
                                        children: d,
                                    }),
                                },
                                a,
                            );
                        })(e, r > 0 ? L[r - 1] : null, r),
                    ),
                });
    },
    th = function (e) {
        let { handleTransition: t, tab: l, transitionState: n } = e,
            s = r.useRef(null),
            { handleScroll: a } = (0, g.X)(s, l),
            o = (0, A.U)(),
            u = (0, _.uM)(),
            [c, x] = r.useState(eD.md),
            [f, p] = r.useState(!1);
        return (
            r.useEffect(() => {
                if (null != s.current) {
                    function e() {
                        if (null == s.current) return;
                        let e = s.current.getDistanceFromBottom();
                        c >= 36 ? p(e < 20) : e <= 200 && x((e) => e + eD.md);
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
                className: z.OW,
                ref: s,
                onScroll: a,
                children: (0, i.jsxs)("div", {
                    className: z.bx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: z.rb,
                            children: [
                                (0, i.jsx)(tm, {
                                    handleTransition: t,
                                    numVisibleItems: c,
                                    isFetchingCategories: o,
                                    tab: l,
                                }),
                                l !== eD.G2.CATALOG &&
                                    c >= 36 &&
                                    (0, i.jsxs)("div", {
                                        className: z.R$,
                                        children: [
                                            (0, i.jsx)(m.D, {
                                                variant: "heading-md/semibold",
                                                children: P.intl.string(P.t.Yr70c4),
                                            }),
                                            (0, i.jsx)(h.$, {
                                                variant: "primary",
                                                text: P.intl.string(P.t.AfrvRD),
                                                onClick: () => {
                                                    (t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        E.default.track(eS.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: u?.sessionId,
                                                            page_type: l,
                                                            page_category: l === eD.G2.HOME ? void 0 : u?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        }));
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)(tr.A, { peaking: f, transitioning: n === eD.Pf.OUT }),
                    ],
                }),
            })
        );
    };
