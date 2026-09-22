l.d(t, { A: () => tL });
var n,
    s,
    i = l(477900),
    r = l(582128),
    a = l(503698),
    o = l.n(a),
    c = l(651162),
    d = l(554146),
    u = l(689175),
    m = l(297264),
    h = l(821609),
    g = l(564322),
    x = l(367727),
    f = l(196736),
    p = l(604913),
    b = l(174459),
    E = l(440938);
let v = r.createContext(null);
function j(e) {
    let { blockType: t, children: l } = e,
        n = r.useMemo(() => ({ blockType: t }), [t]);
    return (0, i.jsx)(v.Provider, { value: n, children: l });
}
var S = l(304210),
    C = l(755172),
    _ = l(39196),
    k = l(100057),
    y = l(599062),
    I = l(159439),
    N = l(998694),
    A = l(202091),
    R = l(607399),
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
        { days: r, hours: a, minutes: c, seconds: d } = (0, D.A)(t),
        u = (function (e, t, l, n, s) {
            function i(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let r = [i(e), i(t), i(l)];
            return (s && r.push(i(n)), r.join(":"));
        })(r, a, c, d, s);
    return (0, i.jsxs)("div", {
        className: o()(H.kL, n),
        role: "timer",
        children: [
            u
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
            (0, i.jsx)(M.A, { children: P.intl.format(P.t.j6IyVe, { days: r, hours: a, minutes: c }) }),
        ],
    });
}
var w = l(685879);
let F = r.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: l } = e,
        n = (0, L.z)({
            transform: `translateX(-50%) ${l ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!l,
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsxs)(A.animated.div, {
        className: o()([w.lP, R.Fr && w.yJ]),
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
                        className: w.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, i.jsx)(O.E, {
                            variant: "text-sm/medium",
                            className: w.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, i.jsx)(B, { endDate: t.endTime }),
        ],
    });
});
var U = l(424918),
    G = l(793574),
    V = l(688810),
    $ = l(993408),
    W = l(196231),
    z = l(105499);
function K(e) {
    let { handleTransition: t, featuredBlockRecord: l } = e;
    return (0, i.jsx)("div", {
        className: o()(z.n9, z.YB),
        children: l?.subblocks.map((e, l) =>
            e.type === U.u.CATEGORY
                ? (0, i.jsx)(
                      E.R9,
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
function Y(e) {
    let { handleTransition: t, categories: l } = e;
    if (null == l || l.length < 2) return null;
    let [n, s] = l;
    return (0, i.jsx)("div", {
        className: o()(z.n9, z.YB),
        children: (0, i.jsxs)(E.R9, {
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
        { analyticsLocations: r } = (0, V.Ay)(G.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, i.jsxs)("div", {
              className: o()(z.n9, z.YB),
              children: [
                  (0, i.jsx)("div", { className: o()(z.Jn, z.oT), children: (0, i.jsx)("div", { className: z.uy }) }),
                  (0, i.jsx)("div", { className: o()(z.Jn, z.oT), children: (0, i.jsx)("div", { className: z.uy }) }),
              ],
          })
        : null != s
          ? (0, i.jsx)(V.f5, {
                value: r,
                children: (0, i.jsx)(K, { featuredBlockRecord: s, handleTransition: l, isLoading: !1 }),
            })
          : (0, i.jsx)(V.f5, {
                value: r,
                children: (0, i.jsx)(Y, { categories: n, handleTransition: l, isLoading: !1 }),
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
    ec = l(561769),
    ed = l(484469),
    eu = l(621466),
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
    eb = l.n(ep),
    eE = l(153488),
    ev = l(511265),
    ej = l(313276),
    eS = l(206077),
    eC = l(623373),
    e_ = l(652215),
    ek = l(146919),
    ey = l(645501);
let eI = [],
    eN = function (e) {
        let {
                isLoading: t,
                title: l,
                sortedSkuIds: n,
                numVisibleItems: s,
                tab: a,
                buttonContainerClassName: c,
                orbsSupportedOnly: d,
            } = e,
            u = (0, Z.bG)([et.default], () => et.default.getCurrentUser()),
            m = en.Ay.canUseShopDiscounts(u),
            g = (0, ec.Mk)(a),
            x = (0, ek.yB)("FeedBlock"),
            {
                sortType: f,
                setSortType: p,
                sortedItems: v,
                orderedSkuIds: j,
                sortOptions: S,
                shuffleProducts: C,
                showRecommendationOption: _,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: l, orbsSupportedOnly: n } = e,
                    s = (0, Z.bG)([eE.A], () => eE.A.hasConsented(e_.YAq.PERSONALIZATION)),
                    i = r.useMemo(() => t?.[J.RECOMMENDED] ?? [], [t]),
                    a = r.useMemo(() => t?.[J.POPULAR] ?? [], [t]),
                    o = i.length > 0 && s,
                    [c, d] = r.useState(o ? J.RECOMMENDED : J.POPULAR),
                    u = (0, Z.bG)([es.A], () => es.A.productsWithVariantsAsGroup),
                    m = r.useMemo(() => (0, $.CE)(u), [u]),
                    h = (0, ej.A)(),
                    g = (0, ev.p)(),
                    [x, f] = r.useState([]),
                    p = r.useCallback(() => {
                        (d(J.RANDOM), f(eb().shuffle(m)));
                    }, [m]);
                r.useEffect(() => {
                    f(eb().shuffle(m));
                }, [m]);
                let b = r.useMemo(() => {
                        let e = [];
                        switch (c) {
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
                        return n ? (0, eC.ex)(g(e)) : g(e);
                    }, [c, n, g, l, m, h, i, a, x]),
                    E = (0, eS.X)(b),
                    v = r.useMemo(
                        () => (c === J.RECOMMENDED ? i : c === J.POPULAR ? a : E.map((e) => e.skuId)),
                        [c, i, a, E],
                    );
                return {
                    sortType: c,
                    setSortType: d,
                    sortedItems: E,
                    orderedSkuIds: v,
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
            })({ sortedSkuIds: n, hasShopDiscount: m, orbsSupportedOnly: d }),
            k = f === J.RANDOM,
            y = (0, ei.$)("feed_block"),
            [I, N] = r.useState(0),
            A = `${f}:${!0 === d}:${I}`,
            [R, T] = r.useState({ key: A, extra: 0 }),
            L = R.key === A ? R.extra : 0;
        R.key !== A && T({ key: A, extra: 0 });
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
                    c = s && n > 0 && null != a && null != a ? `${JSON.stringify(a)}:${!0 === l}` : null,
                    d = null == c ? null : `${c}:${o ? i : ""}:${n}`,
                    [u, m] = r.useState(null);
                if (
                    (r.useEffect(() => {
                        if (null == d || null == a) return;
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
                                            key: d,
                                            sortIdentityKey: c,
                                            skuIds: t.skus ?? [],
                                            hasMore: t.pagination?.has_more === !0,
                                        });
                                })
                                .catch(() => {
                                    e || m({ key: d, sortIdentityKey: c, skuIds: [], hasMore: !1 });
                                }),
                            () => {
                                e = !0;
                            }
                        );
                    }, [d, c, o, a, l, n]),
                    null == d)
                )
                    return { skuIds: null, isLoading: !1, hasMore: !1 };
                let h = null != u && u.sortIdentityKey === c ? u : null;
                return { skuIds: h?.skuIds ?? null, isLoading: u?.key !== d, hasMore: h?.hasMore ?? !1 };
            })({ sortType: f, orbsSupportedOnly: d, numVisibleItems: s + L, enabled: y, shuffleNonce: I }),
            w = D ?? j,
            F = r.useMemo(() => w.slice(0, s + L + (k ? 32 : 8)), [w, s, L, k]),
            U = (0, ea.hv)(y ? F : eI, { needsCategory: !1 }),
            W = (0, er.c)("feed_block"),
            K = r.useMemo(() => {
                if (!y) return F;
                let e = new Set();
                return F.filter((t) => {
                    let l = U[t];
                    if (l?.state === "error" || (!W && t === q.j.PREMIUM_TIER_2_1_DAY)) return !1;
                    let n = l?.product?.storeListingId;
                    if (null != n) {
                        if (e.has(n)) return !1;
                        e.add(n);
                    }
                    return !0;
                });
            }, [y, F, U, W]),
            Y = r.useMemo(
                () =>
                    !!y &&
                    !H &&
                    F.every((e) => {
                        let t = U[e]?.state;
                        return "ready" === t || "error" === t;
                    }),
                [y, H, F, U],
            ),
            X = !k && B && L < 16,
            eh = s - K.length;
        if (Y && eh > 0 && X) {
            let e = Math.min(16, L + eh + 8);
            e !== L && T({ key: A, extra: e });
        }
        let eg = (0, Z.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
            ep = (0, Z.bG)([el.A], () => el.A.isFocused()),
            eN = !eg && ep,
            {
                animationPhase: eA,
                startAnimation: eR,
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
                                (0, eu.vq)(e, HTMLButtonElement) ||
                                (0, eu.vq)(e, HTMLAnchorElement) ||
                                (0, eu.vq)(e, HTMLInputElement) ||
                                (0, eu.vq)(e, HTMLSelectElement) ||
                                (0, eu.vq)(e, HTMLTextAreaElement)
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
                            let { isShuffling: l, onOutroComplete: r, returnRef: c, holdIntroUntilReady: d = !1 } = e;
                            (c?.current != null && ((s.current = c.current), n(!0)),
                                (i.current = !1),
                                null != a.current && (clearTimeout(a.current), (a.current = null)),
                                t(l ? "shuffle-out" : "sort-out"),
                                setTimeout(
                                    () => {
                                        if ((r(), l && d)) {
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
            Y && eT();
        }, [Y, eT]);
        let eL = (0, E.uM)(),
            eO = eL?.sessionId ?? "",
            { analyticsLocations: eM } = (0, V.Ay)(G.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            eD = r.useRef(null),
            eP = r.useRef(null),
            [eH, eB] = r.useState(!1),
            ew = r.useCallback(
                (e) => {
                    (eB(!1),
                        eR({ isShuffling: !1, onOutroComplete: () => p(e), returnRef: eP }),
                        b.default.track(e_.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: eO,
                            sort_type: e,
                        }));
                },
                [eR, p, eO],
            );
        if (null == u) return null;
        function eF(e, t) {
            let l;
            return eN && eA === em.SHUFFLE_OUT
                ? (0, i.jsx)("div", { className: z.Z2, children: (0, i.jsx)(ed.A, {}) }, `${e}-${t}`)
                : (eN &&
                      (eA === em.SORT_OUT
                          ? (l = z.MW)
                          : eA === em.SHUFFLE_IN
                            ? (l = z.aS)
                            : eA === em.SORT_IN && (l = z.F7)),
                  (0, i.jsx)(
                      E.R9,
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
        return (0, i.jsx)(V.f5, {
            value: eM,
            children: (0, i.jsxs)("div", {
                className: o()(z.lD, z.YB),
                children: [
                    (0, i.jsxs)("div", {
                        className: z.$6,
                        children: [
                            (0, i.jsx)(ey.A, { label: l, personalizedResults: _ }),
                            (0, i.jsxs)("div", {
                                className: o()(z.IE, { [ek.jP]: x }),
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: z.gd,
                                        children: [
                                            (0, i.jsx)(O.E, {
                                                variant: "text-md/medium",
                                                children: P.intl.string(P.t.uaX705),
                                            }),
                                            (0, i.jsx)("div", {
                                                className: o()(c, z.pI),
                                                ref: eP,
                                                children: (0, i.jsx)(Q.l, {
                                                    label: P.intl.string(P.t.uaX705),
                                                    hideLabel: !0,
                                                    options: S,
                                                    onSelectionChange: ew,
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
                                        className: c,
                                        children: (0, i.jsx)(h.$, {
                                            variant: "secondary",
                                            text: P.intl.string(P.t.X3tnc4),
                                            buttonRef: eD,
                                            onClick: function () {
                                                (eB(!0),
                                                    eR({
                                                        isShuffling: !0,
                                                        onOutroComplete: () => {
                                                            (C(), N((e) => e + 1));
                                                        },
                                                        returnRef: eD,
                                                        holdIntroUntilReady: y,
                                                    }),
                                                    b.default.track(e_.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                        page_session_id: eO,
                                                    }));
                                            },
                                            disabled: eA !== em.MOUNTED && eA !== em.FINISHED,
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(M.A, {
                                "aria-live": "polite",
                                role: "status",
                                children: eH && eA === em.FINISHED ? P.intl.string(P.t["3Pml0e"]) : "",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: z.hm,
                        children: t
                            ? (0, i.jsx)(i.Fragment, {
                                  children: [...Array(12)].map((e, t) => (0, i.jsx)(ed.A, {}, t + 1)),
                              })
                            : y
                              ? eN && eA === em.SHUFFLE_OUT
                                  ? [...Array(s)].map((e, t) =>
                                        (0, i.jsx)(
                                            "div",
                                            { className: z.Z2, children: (0, i.jsx)(ed.A, {}) },
                                            `shuffle-placeholder-${t}`,
                                        ),
                                    )
                                  : H && null == D
                                    ? (0, i.jsx)(i.Fragment, {
                                          children: [...Array(12)].map((e, t) => (0, i.jsx)(ed.A, {}, t + 1)),
                                      })
                                    : K.slice(0, s).map((e, t) => eF(e, t))
                              : v
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
var eA = l(269115),
    eR = l(43990),
    eT = l(890856),
    eL = l(408278),
    eO = l(789645),
    eM = l(976860),
    eD = l(758836),
    eP = l(49999),
    eH = l(818348),
    eB = l(394107),
    ew = l(196064);
let eF = "GAME_SERVER_HOSTING_BANNER";
function eU(e) {
    let { gameServerHostingBannerBlock: t, tab: l } = e,
        n = (0, E.uM)(),
        s = r.useRef(null),
        a = r.useRef(!1),
        c = r.useRef(null),
        [u, g] = r.useState(!1),
        f = r.useCallback(
            (e) => {
                b.default.track(e_.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    (0, eM.pX)(e_.BVt.COLLECTIBLES_SHOP_WITH_TAB(eD.G2.GAME_SERVERS)));
            },
            [f],
        ),
        v = r.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    f("dismiss"),
                    g(!0),
                    !0 === t.isDismissible &&
                        (0, x.d6)(d.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
                            dismissAction: eP.i.USER_DISMISS,
                        }));
            },
            [f, t.isDismissible],
        ),
        j = r.useCallback(
            (e) => {
                !a.current &&
                    (e && null === c.current
                        ? (c.current = setTimeout(() => {
                              ((a.current = !0),
                                  (c.current = null),
                                  b.default.track(e_.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: n?.sessionId,
                                      page_type: l,
                                      page_category: n?.pageCategory,
                                      page_section: n?.pageSection,
                                      type: eF,
                                  }));
                          }, 1e3))
                        : e || null === c.current || (clearTimeout(c.current), (c.current = null)));
            },
            [n?.sessionId, n?.pageCategory, n?.pageSection, l],
        );
    return (r.useEffect(
        () => () => {
            null !== c.current && (clearTimeout(c.current), (c.current = null));
        },
        [],
    ),
    u)
        ? null
        : (0, i.jsx)(eR.N, {
              theme: eH.NJ.DARK,
              children: (e) =>
                  (0, i.jsx)(eA.L, {
                      innerRef: s,
                      onChange: j,
                      threshold: 0,
                      children: (0, i.jsx)("div", {
                          ref: s,
                          className: o()(ew.YB, e),
                          children: (0, i.jsxs)(eT.s, {
                              className: ew.kL,
                              onClick: p,
                              "aria-label": P.intl.string(eB.default["34GMP9"]),
                              children: [
                                  (0, i.jsx)("img", {
                                      className: ew.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, i.jsx)("div", { className: ew.f5, "aria-hidden": !0 }),
                                  !0 === t.isDismissible &&
                                      (0, i.jsx)("div", {
                                          className: ew.b,
                                          children: (0, i.jsx)(eL.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: eO.P,
                                              onClick: v,
                                              "aria-label": P.intl.string(P.t.WAI6xu),
                                          }),
                                      }),
                                  (0, i.jsx)("div", {
                                      className: ew.jE,
                                      children: (0, i.jsxs)("div", {
                                          className: ew.rF,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: ew.Z,
                                                  children: [
                                                      (0, i.jsx)(m.D, {
                                                          className: ew.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: P.intl.string(eB.default["34GMP9"]),
                                                      }),
                                                      (0, i.jsx)(O.E, {
                                                          className: ew.h_,
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
var eG = l(227205),
    eV = l(773669),
    e$ = l(655583),
    eW = l(442036),
    ez = l(212407),
    eK = l(815280),
    eY = l(60140),
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
                                  variant: "text-md/normal",
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
        c = (0, Z.bG)([et.default], () => et.default.getCurrentUser()),
        d = (0, Z.bG)([eV.default], () => eV.default.locale),
        u = (0, E.uM)(),
        { analyticsLocations: m } = (0, V.Ay)(G.A.COLLECTIBLES_SHOP_HERO),
        h = r.useMemo(() => (0, _.HF)(t, l), [t, l]),
        g = r.useMemo(() => (0, _.O8)(t, l, a, d), [t, l, a, d]),
        {
            bannerDisplayConfig: x,
            logoDisplayConfig: f,
            heroLogo: p,
            heroBannerStatic: v,
            heroBannerAnimated: j,
        } = (0, ez.Kk)(g),
        S = x?.responsive ?? !1,
        C = x?.backgroundStyle;
    return null == c || null == h
        ? null
        : (0, i.jsx)(V.f5, {
              value: m,
              children: (0, i.jsxs)("div", {
                  className: eX.os,
                  children: [
                      (0, i.jsx)("div", {
                          className: o()(eX.vK, { [eX.no]: S }),
                          style: null != C ? { background: C } : void 0,
                          children: null != v && (0, i.jsx)(eK.A, { bannerStatic: v, isResponsive: S }),
                      }),
                      (0, i.jsxs)("div", {
                          className: eX.xX,
                          children: [
                              (0, i.jsx)("div", {
                                  className: eX.zl,
                                  style: null != C ? { background: C } : void 0,
                                  children:
                                      null != v &&
                                      (0, i.jsx)(eK.A, { bannerStatic: v, bannerAnimated: j, isResponsive: S }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: eX.mz,
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
                                      (0, i.jsx)(eW.A, {
                                          handleButtonClick: function () {
                                              (s?.({
                                                  sourceButton: "shop latest category hero",
                                                  categorySkuId: g.categorySkuId,
                                                  isInternalShopDeeplink: !0,
                                              }),
                                                  b.default.track(e_.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                      collectibles_shop_session_id: u?.sessionId,
                                                      sku_id: g.categorySkuId,
                                                      page_type: a,
                                                      page_section: u?.pageSection,
                                                      page_category: u?.pageCategory,
                                                      cta_name: "shop latest category hero button",
                                                  }));
                                          },
                                      }),
                                      (0, i.jsx)(eY.A, {
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
        c = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, i.jsxs)("div", {
        ref: n,
        className: e0.BX,
        children: [
            (0, i.jsx)("div", {
                className: e0.vK,
                children: null != s && (0, i.jsx)(eK.A, { bannerStatic: s, bannerAnimated: r }),
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
                        o || c
                            ? (0, i.jsxs)(O.E, {
                                  variant: "text-md/medium",
                                  style: { ...a },
                                  children: [
                                      o && t.body,
                                      o && c && " ",
                                      c &&
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
    e5 = l(4227),
    e4 = l(189213),
    e9 = l(290136),
    e3 = l(478016),
    e6 = l(825484),
    e8 = l(192308),
    e7 = l(812993),
    te = l(866665),
    tt = l(713517),
    tl = l(914410),
    tn = l(839534),
    ts = l(597783),
    ti = l(61750);
function tr(e, t) {
    let l = r.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        n = (0, Z.bG)([e5.A], () => e5.A.getPurchases(l));
    return {
        readyToClaim: r.useMemo(() => n.length === l.length, [n, l]),
        collectibleProductSkuIds: l,
        collectedSkuIds: n,
    };
}
var ta = l(496552),
    to = l(299533);
let tc = r.memo(function (e) {
        let { category: t, rewardSkuId: l } = e,
            { handleCardVisibilityChange: n } = (0, ts.Z)(l),
            s = r.useRef(null),
            { isHoveringOrFocusing: a } = (0, tt.A)(s),
            { readyToClaim: c, collectibleProductSkuIds: d, collectedSkuIds: u } = tr(t, l),
            g = (0, Z.bG)([e5.A], () => e5.A.isClaiming === l);
        return (0, i.jsx)(eA.L, {
            onChange: n,
            threshold: 0,
            innerRef: s,
            children: (0, i.jsx)("div", {
                ref: s,
                className: o()(ta.ty, to.Q3, { [ta.yo]: a }),
                "aria-label": P.intl.formatToPlainString(P.t.Ez6aHE, { category: t.name }),
                children: (0, i.jsxs)("div", {
                    className: ta.qt,
                    children: [
                        (0, i.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: to.L8,
                        }),
                        (0, i.jsx)("div", {
                            className: ta.N1,
                            children: (0, i.jsx)(e7.Lp, {
                                text: P.intl.string(P.t.rykAJ9),
                                disableColor: !0,
                                className: to.HZ,
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: ta.xQ,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: to.xE,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: to.cs,
                                            children: [
                                                (0, i.jsx)(m.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: ta.tZ,
                                                    children: P.intl.string(P.t["0mDmg/"]),
                                                }),
                                                (0, i.jsx)(te.m, {
                                                    text: c
                                                        ? P.intl.string(P.t.cKH3tk)
                                                        : P.intl.formatToPlainString(P.t["8aMDPc"], {
                                                              totalCount: d.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, i.jsx)("span", {
                                                        className: to.ZB,
                                                        children: (0, i.jsx)(e9.CircleQuestionIcon, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)("div", {
                                            className: ta.oh,
                                            "aria-hidden": !0,
                                            children: (0, i.jsxs)("div", {
                                                className: to.L$,
                                                children: [
                                                    (0, i.jsx)(tl.Ay, {
                                                        variant: tl.qP.BLUE,
                                                        progress: u.length,
                                                        maximum: d.length,
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: o()(to.__, { [to.gF]: c }),
                                                        children: [
                                                            c
                                                                ? (0, i.jsx)(e3.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, i.jsx)(O.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: P.intl.formatToPlainString(P.t["5TwASM"], {
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
                                    className: ta.Vs,
                                    children: (0, i.jsx)(e6.e, {
                                        wrap: !1,
                                        className: ta.Ld,
                                        fullWidth: !0,
                                        children: (0, i.jsx)(h.$, {
                                            variant: "primary",
                                            onClick: function (e) {
                                                (e.stopPropagation(),
                                                    c &&
                                                        (0, tn.BX)(t.skuId, l)
                                                            .then(() => {
                                                                let e = es.A.getProduct(l);
                                                                null != e &&
                                                                    (0, ti.A)({
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
                                                                (0, e8.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, i.jsx)(e4.Modal, {
                                                                            transitionState: e.transitionState,
                                                                            onClose: e.onClose,
                                                                            size: "sm",
                                                                            title: P.intl.string(P.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: P.intl.string(P.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, i.jsx)("div", {
                                                                                children: P.intl.string(P.t["0YpIF/"]),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            }));
                                            },
                                            text: P.intl.string(P.t.VnVTNc),
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
    td = function (e) {
        let t,
            l,
            n,
            { isBlockLoading: s = !1, heroBlock: a, tab: o } = e,
            c = (0, ec.Mk)(o),
            d = r.useMemo(() => es.A.getCategoryForProduct(a.rewardSkuId), [a.rewardSkuId]),
            u = (0, Z.bG)([e5.A], () => e5.A.getPurchase(a.rewardSkuId)),
            { products: m } =
                ((t = (0, ej.A)()),
                (l = r.useMemo(
                    () => (s ? [] : t(a.rankedSkuIds).filter((e) => e.skuId !== a.rewardSkuId || null != u)),
                    [s, t, a.rankedSkuIds, u, a.rewardSkuId],
                )),
                (n = (0, ev.p)()(l)),
                { products: (0, eS.X)(n) }),
            h = r.useMemo(
                () =>
                    !s &&
                    0 !== a.rankedSkuIds.length &&
                    !(m.length > 0) &&
                    a.rankedSkuIds.every((e) => es.A.getProduct(e)?.variantGroupStoreListingId != null),
                [s, a.rankedSkuIds, m.length],
            ),
            g = s || h,
            { readyToClaim: x } = tr(d, a.rewardSkuId),
            f = null == u && null != a.rewardSkuId && null != d;
        return (0, i.jsx)(e2.A, {
            gap: "xl",
            children: g
                ? (0, i.jsx)(i.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, i.jsx)(ed.A, {}, t)),
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          f &&
                              x &&
                              (0, i.jsx)(
                                  E.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, i.jsx)(tc, { category: d, rewardSkuId: a.rewardSkuId }),
                                  },
                                  a.rewardSkuId,
                              ),
                          m.map((e, t) => {
                              let l = es.A.getCategoryForProduct(e.skuId);
                              return null == e || null == l
                                  ? null
                                  : (0, i.jsx)(
                                        E.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, i.jsx)(eo.A, { skuId: e.skuId, prioritizedCurrency: c }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, $.$b)(90);
let tu = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: c.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    tm = function (e) {
        let { isLoading: t = !1, heroBlock: l, tab: n, onVisibilityChange: s } = e,
            r = (0, eZ.K)(
                (e) => {
                    s?.(e);
                },
                0.1,
                null != s,
            ),
            a = (0, Z.bG)([et.default], () => et.default.getCurrentUser()),
            { analyticsLocations: c } = (0, V.Ay)(G.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: d,
                logoDisplayConfig: u,
                heroLogo: h,
                heroBannerStatic: g,
                heroBannerAnimated: x,
            } = (0, ez.Kk)(l),
            f = d?.responsive ?? !1,
            p = d?.backgroundStyle;
        return null != a && (t || l !== tu)
            ? (0, i.jsx)(V.f5, {
                  value: c,
                  children: (0, i.jsxs)("div", {
                      ref: r,
                      className: z.os,
                      children: [
                          (0, i.jsx)("div", {
                              className: o()(z.vK, { [z.no]: f }),
                              style: null != p ? { background: p } : void 0,
                              children:
                                  null != g &&
                                  (0, i.jsx)(eK.A, { bannerStatic: g, bannerAnimated: x, isResponsive: f }),
                          }),
                          (0, i.jsxs)("div", {
                              className: z.xX,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: o()(z.bC, { [z.no]: f }),
                                      children: t
                                          ? (0, i.jsx)("div", { className: z.Hw })
                                          : (0, i.jsx)("div", {
                                                className: z.Hw,
                                                children: (0, i.jsxs)("div", {
                                                    className: z.Wq,
                                                    children: [
                                                        null != h &&
                                                            (0, i.jsx)("img", {
                                                                className: z.rm,
                                                                src: h,
                                                                alt: l.name,
                                                                style: u?.toDesktopStyles(),
                                                            }),
                                                        null != l.title &&
                                                            (0, i.jsx)(m.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: z.DD,
                                                                color: "text-strong",
                                                                children: l.title,
                                                            }),
                                                        "" !== l.summary &&
                                                            (0, i.jsx)(O.E, {
                                                                variant: "text-md/normal",
                                                                className: z.Tm,
                                                                style:
                                                                    null != l.bannerTextColor
                                                                        ? { color: l.bannerTextColor }
                                                                        : void 0,
                                                                children: l.summary,
                                                            }),
                                                    ],
                                                }),
                                            }),
                                  }),
                                  (0, i.jsx)(td, { isBlockLoading: t, heroBlock: l, tab: n }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var th = l(197935),
    tg = l(879221),
    tx = l(554661);
function tf(e) {
    return e.skuId;
}
function tp(e) {
    let { product: t, index: l, shelfName: n, prioritizedCurrency: s, listItemProps: r } = e;
    return (0, i.jsx)(E.R9, {
        newValue: { tilePosition: l, pageSection: n, categoryPosition: 2 },
        children: (0, i.jsx)(eo.A, { skuId: t.skuId, prioritizedCurrency: s, listItemProps: r }),
    });
}
let tb = function (e) {
    let { shelf: t, handleTransition: l, tab: n } = e,
        s = (0, Z.bG)([et.default], () => et.default.getCurrentUser()),
        a = (0, ec.Mk)(n),
        c = (0, Z.bG)([es.A], () => (null != t.categorySkuId ? es.A.getCategory(t.categorySkuId) : void 0)),
        d = (0, ej.A)(),
        u = r.useMemo(() => d(t.rankedSkuIds), [t.rankedSkuIds, d]),
        g = (0, eS.X)(u),
        { analyticsLocations: x } = (0, V.Ay)(G.A.COLLECTIBLES_SHOP_SHELF),
        f = (0, tg.O)("shelf_block"),
        p = r.useMemo(() => g.filter((e) => null != es.A.getCategoryForProduct(e.skuId)), [g]),
        b = r.useCallback(() => {
            l({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: c?.isOrbsExclusive === !0 && n !== eD.G2.ORBS,
            });
        }, [t.categorySkuId, c, l, n]);
    if (null == s || 0 === g.length) return null;
    let E = t.buttonText ?? P.intl.formatToPlainString(P.t.bc9RBE, { category_name: t.name }),
        v = t.showButton,
        j = t.desktopBackgroundImage,
        S = null != j;
    return (0, i.jsx)(V.f5, {
        value: x,
        children: (0, i.jsxs)("div", {
            className: o()(tx.mu, z.YB, S ? tx.VA : tx.Ti),
            children: [
                S && (0, i.jsx)("img", { className: tx.iL, src: j, alt: "", "aria-hidden": !0 }),
                (0, i.jsxs)("div", {
                    className: tx.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tx.wx,
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
                            ? (0, i.jsx)(th.A, {
                                  gap: "xl",
                                  edgeFade: S ? "sm" : void 0,
                                  items: p,
                                  getItemKey: tf,
                                  maintainFocusOnReorder: !0,
                                  renderItem: (e, l, n) =>
                                      (0, i.jsx)(
                                          tp,
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
                                  edgeFade: S ? "sm" : void 0,
                                  children: p.map((e, l) =>
                                      (0, i.jsx)(
                                          tp,
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
var tE = l(465794),
    tv = l(69236),
    tj = l(44724),
    tS = l(421108),
    tC = l(873297),
    t_ = l(202541);
let tk = function (e) {
    let {
            applicationId: t,
            headerText: l,
            gradientColors: n,
            gradientAngle: s,
            skuIds: a,
            tab: o,
            endTime: c,
            ctaType: d = "storefront",
            logoUrl: u,
        } = e,
        m = (0, tS.ur)(c) ?? void 0,
        h = (0, tv.W8)(),
        g = r.useMemo(
            () =>
                "nitro" !== d || h
                    ? {
                          kind: "button",
                          text: P.intl.string(P.t.apFNLU),
                          onClick: () => (0, tj.default)({ applicationId: t }),
                          onMouseDown: () => (0, tj.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, i.jsx)(tE.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: t_.pe.TIER_2,
                              buttonTextOverride: P.intl.string(P.t.pj0XBN),
                          }),
                      },
            [d, t, h],
        );
    return (0, i.jsx)(tC.A, {
        skuIds: a,
        tab: o,
        applicationId: t,
        headerText: l,
        logoUrl: u,
        cta: g,
        timeLeftText: m,
        analyticsSection: "slayer-storefront-promotional-banner",
        analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
        analyticsImpressionType: "social_layer_storefront_promotional_banner",
        backgroundGradient: `linear-gradient(${s}deg, ${n.join(", ")})`,
    });
};
var ty = l(613258),
    tI = l(815021),
    tN = l(939249),
    tA = l(975571);
let tR = function (e) {
        let { wideBannerBlock: t, tab: l } = e,
            n = es.A.getCategoryByStoreListingId(t.categoryStoreListingId),
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
        let p = n?.skuId ?? "",
            { handleCardVisibilityChange: v } = (0, ts.Z)(p, "home", "marketing wide banner"),
            j = (0, E.uM)(),
            { bannerURL: S } = (0, ez.w$)(t),
            C = l === eD.G2.ORBS,
            _ = null != t.ctaRoute && "" !== t.ctaRoute,
            k = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || _),
            y = null != t.logoURL && "" !== t.logoURL,
            I = r.useCallback(() => {
                if ((f(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, x.$l)(d.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: eP.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            N = r.useCallback(
                (e) => {
                    b.default.track(e_.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: j?.sessionId,
                        sku_id: p,
                        page_type: l,
                        page_section: j?.pageSection,
                        page_category: j?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(j?.tilePosition),
                        cta_name: e,
                    });
                },
                [j, p, l],
            ),
            A = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((N(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    l = parseInt(t[2], 10);
                                (0, tj.default)({ guildId: e, pageIndex: l });
                            }
                        } else (0, eM.pX)(e);
                    }
                },
                [t.ctaRoute, N],
            );
        if (null == S || g) return null;
        let R = o()(z.nM, z.Tq, z.TS, z.YB, { [z._1]: C, [z.vb]: _ }),
            T = (0, i.jsxs)(i.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, i.jsx)("div", {
                            className: z.Mh,
                            children: (0, i.jsx)(tI.J, {
                                size: "sm",
                                onClick: (e) => {
                                    (e.stopPropagation(), I());
                                },
                                "aria-label": P.intl.string(P.t.WAI6xu),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: o()(z.zK, { [z._1]: C }),
                        style: null != c ? { height: `${c}px` } : void 0,
                        children: (0, i.jsx)("img", {
                            ref: a,
                            src: S,
                            alt: t.title,
                            className: o()(z.LN, { [z.d5]: C }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: o()(z.Ep, { [z.Qq]: k }),
                        style: { maxHeight: null != c ? `${c}px` : "auto" },
                        children: (0, i.jsxs)("div", {
                            className: z.E8,
                            children: [
                                (0, i.jsx)(m.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: C ? z.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, i.jsx)(O.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: C ? "text-md/medium" : "text-sm/medium",
                                    children: C
                                        ? P.intl.format(P.t.SFFP7K, {
                                              helpdeskArticle: tA.A.getArticleURL(e_.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                k &&
                                    (0, i.jsxs)("div", {
                                        className: z.nP,
                                        children: [
                                            (0, i.jsx)(h.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    (e.stopPropagation(), A(t.ctaText ?? P.intl.string(P.t.jVcuVY)));
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
        return (0, i.jsx)(eR.N, {
            theme: C ? void 0 : eH.NJ.DARK,
            children: (e) =>
                (0, i.jsx)(eA.L, {
                    innerRef: s,
                    onChange: v,
                    threshold: 0,
                    children: _
                        ? (0, i.jsx)(tN.D, { innerRef: s, onClick: () => A(null), className: o()(e, R), children: T })
                        : (0, i.jsx)("div", { ref: s, className: o()(e, R), children: T }),
                }),
        });
    },
    tT = (e) => {
        let { handleTransition: t, numVisibleItems: l, isFetchingCategories: n, tab: s } = e,
            { noCache: a, includeUnpublished: u } = (0, N.A)(),
            [m, h] = r.useState(!1),
            g = (0, E.uM)(),
            b = g?.sessionId ?? "",
            v = (0, f.H)({ location: "collectibles_shop_feed" }),
            I = (0, S.S)();
        r.useEffect(() => {
            (0, k.z)({
                sessionId: b,
                checkpoint: k.t.SHOP_MOUNTED,
                tab: s,
                unpublishedCategoriesShown: u,
                cacheDisabled: a,
            });
        }, [s]);
        let {
                isFetchingShopHome: A,
                fetchShopHomeError: R,
                shopBlocks: T,
                refreshShopHome: L,
            } = (0, C.y)(s, { noCache: a, includeUnpublished: u, logPerf: !0 }, { sessionId: b, tab: s }),
            O = r.useCallback(() => {
                L();
            }, [L]);
        return (r.useEffect(() => {
            null != R ||
                A ||
                0 === T.length ||
                (0, k.z)({
                    sessionId: b,
                    checkpoint: k.t.SHOP_RENDERED,
                    tab: s,
                    unpublishedCategoriesShown: u,
                    cacheDisabled: a,
                });
        }, [R, A, T.length, u, a, b, s]),
        null != R)
            ? (0, i.jsx)(y.h, { onRetry: O, errorOrigin: y.A.SHOP_PAGE, errorMessage: R.message })
            : A || 0 === T.length
              ? (0, i.jsxs)("div", {
                    className: o()(z.g4, z.Of),
                    children: [
                        (0, i.jsx)(eG.A, { isLoading: A, handleTransition: t, tab: s }),
                        (0, i.jsx)(X, { isLoading: A, handleTransition: t, categories: [] }),
                        (0, i.jsx)(eN, {
                            isLoading: A,
                            title: s === eD.G2.ORBS ? P.intl.string(P.t.dFgeuZ) : P.intl.string(P.t.NSv5KV),
                            numVisibleItems: l,
                            tab: s,
                        }),
                    ],
                })
              : (0, i.jsx)(i.Fragment, {
                    children: T.map((e, r) =>
                        (function (e, r, a) {
                            if (null == e) return null;
                            let u = null,
                                g = !1;
                            switch (e.type) {
                                case c.g.HERO:
                                    let f = (0, _.HF)(I, e);
                                    if (null != I && f?.subtype === p.h5.TAKEOVER) {
                                        u = (0, i.jsx)(
                                            eJ,
                                            { promotion: I, isLoading: A, handleTransition: t, heroBlock: e, tab: s },
                                            a,
                                        );
                                        break;
                                    }
                                    u = (0, i.jsx)(
                                        eG.A,
                                        { isLoading: A, handleTransition: t, heroBlock: e, tab: s },
                                        a,
                                    );
                                    break;
                                case c.g.FEATURED:
                                    u = (0, i.jsx)(X, { isLoading: A, handleTransition: t, featuredBlockRecord: e }, a);
                                    break;
                                case c.g.FEED:
                                    let b = e.sortedSkuIds;
                                    u = (0, i.jsx)(
                                        eN,
                                        {
                                            title:
                                                s === eD.G2.ORBS
                                                    ? P.intl.string(P.t.dFgeuZ)
                                                    : P.intl.string(P.t.NSv5KV),
                                            isLoading: n,
                                            numVisibleItems: l,
                                            sortedSkuIds: b,
                                            buttonContainerClassName: r?.type === c.g.IMMERSIVE_BANNER ? z.w : void 0,
                                            tab: s,
                                            orbsSupportedOnly: s === eD.G2.ORBS,
                                        },
                                        a,
                                    );
                                    break;
                                case c.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: l } = (0, x.En)(d.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (l) return null;
                                    }
                                    u = (0, i.jsx)(tR, { wideBannerBlock: e, tab: s }, a);
                                    break;
                                case c.g.SHELF:
                                    u = (0, i.jsx)(tb, { handleTransition: t, shelf: e, tab: s }, a);
                                    break;
                                case c.g.COUNTDOWN_TIMER:
                                    ((u = (0, i.jsx)(F, { countdownTimerBlock: e, isVisible: m }, a)), (g = !0));
                                    break;
                                case c.g.IMMERSIVE_BANNER:
                                    u = (0, i.jsx)(
                                        e1,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => h(!e) },
                                        a,
                                    );
                                    break;
                                case c.g.REWARD_HERO:
                                    u = (0, i.jsx)(tm, { isLoading: A, handleTransition: t, heroBlock: e, tab: s }, a);
                                    break;
                                case c.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !v ||
                                        (!0 === e.isDismissible &&
                                            (0, x.En)(d.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, i.jsx)(
                                        j,
                                        {
                                            blockType: e.type,
                                            children: (0, i.jsx)(eU, { gameServerHostingBannerBlock: e, tab: s }),
                                        },
                                        a,
                                    );
                                case c.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, i.jsx)(
                                        j,
                                        {
                                            blockType: e.type,
                                            children: (0, i.jsx)(tk, {
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
                                j,
                                {
                                    blockType: e.type,
                                    children: (0, i.jsx)("div", {
                                        className: o()(z.v1, z.Of, { [z.J1]: 0 === a || g }),
                                        children: u,
                                    }),
                                },
                                a,
                            );
                        })(e, r > 0 ? T[r - 1] : null, r),
                    ),
                });
    },
    tL = function (e) {
        let { handleTransition: t, tab: l, transitionState: n } = e,
            s = r.useRef(null),
            { handleScroll: a } = (0, g.X)(s, l),
            o = (0, I.U)(),
            c = (0, E.uM)(),
            [d, x] = r.useState(eD.md),
            [f, p] = r.useState(!1);
        return (
            r.useEffect(() => {
                if (null != s.current) {
                    function e() {
                        if (null == s.current) return;
                        let e = s.current.getDistanceFromBottom();
                        d >= 36 ? p(e < 20) : e <= 200 && x((e) => e + eD.md);
                    }
                    let t = s.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [s, d, x, p]),
            (0, i.jsx)(u.Ch, {
                className: z.OW,
                ref: s,
                onScroll: a,
                children: (0, i.jsxs)("div", {
                    className: z.bx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: z.rb,
                            children: [
                                (0, i.jsx)(tT, {
                                    handleTransition: t,
                                    numVisibleItems: d,
                                    isFetchingCategories: o,
                                    tab: l,
                                }),
                                l !== eD.G2.CATALOG &&
                                    d >= 36 &&
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
                                                        b.default.track(e_.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: c?.sessionId,
                                                            page_type: l,
                                                            page_category: l === eD.G2.HOME ? void 0 : c?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        }));
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)(ty.A, { peaking: f, transitioning: n === eD.Pf.OUT }),
                    ],
                }),
            })
        );
    };
