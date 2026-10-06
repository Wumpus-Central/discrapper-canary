n.d(t, { A: () => tE });
var l,
    s,
    r = n(477900),
    i = n(582128),
    a = n(503698),
    o = n.n(a),
    u = n(651162),
    c = n(554146),
    d = n(689175),
    m = n(297264),
    h = n(821609),
    g = n(501419),
    x = n(196736),
    f = n(604913),
    E = n(174459),
    p = n(440938);
let v = i.createContext(null);
function b(e) {
    let { blockType: t, children: n } = e,
        l = i.useMemo(() => ({ blockType: t }), [t]);
    return (0, r.jsx)(v.Provider, { value: l, children: n });
}
var _ = n(304210),
    C = n(755172),
    S = n(39196),
    j = n(100057),
    N = n(808598),
    y = n(599062),
    A = n(159439),
    I = n(998694),
    R = n(415926),
    k = n(202091),
    L = n(607399),
    T = n(946015),
    O = n(717421),
    M = n(834730);
n(321073);
var D = n(140735),
    P = n(496431),
    H = n(375708),
    B = n(302326);
function U(e) {
    let { endDate: t, size: n = "md", className: l, showSeconds: s = !1 } = e,
        { days: i, hours: a, minutes: u, seconds: c } = (0, P.A)(t),
        d = (function (e, t, n, l, s) {
            function r(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let i = [r(e), r(t), r(n)];
            return (s && i.push(r(l)), i.join(":"));
        })(i, a, u, c, s);
    return (0, r.jsxs)("div", {
        className: o()(B.kL, l),
        role: "timer",
        children: [
            d
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, r.jsx)(
                              M.E,
                              {
                                  color: "none",
                                  variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: B.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, r.jsx)(
                              M.E,
                              {
                                  color: "text-overlay-light",
                                  variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
                                  className: B.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, r.jsx)(D.A, { children: H.intl.format(H.t.j6IyVe, { days: i, hours: a, minutes: u }) }),
        ],
    });
}
var w = n(685879);
let F = i.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        l = (0, O.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, r.jsxs)(k.animated.div, {
        className: o()([w.lP, L.Fr && w.yJ]),
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
            (0, r.jsxs)(T.s, {
                direction: T.s.Direction.VERTICAL,
                children: [
                    (0, r.jsx)(M.E, {
                        variant: "text-md/medium",
                        className: w.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, r.jsx)(M.E, {
                            variant: "text-sm/medium",
                            className: w.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, r.jsx)(U, { endDate: t.endTime }),
        ],
    });
});
var V = n(424918),
    $ = n(793574),
    G = n(688810),
    W = n(993408),
    z = n(196231),
    K = n(105499);
function Y(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, r.jsx)("div", {
        className: o()(K.n9, K.YB),
        children: n?.subblocks.map((e, n) =>
            e.type === V.u.CATEGORY
                ? (0, r.jsx)(
                      p.R9,
                      {
                          newValue: {
                              categoryPosition: 1,
                              pageCategory: e.name,
                              pageSection: "featured_block",
                              tilePosition: n,
                          },
                          children: (0, r.jsx)(
                              z.S,
                              {
                                  subblock: e,
                                  enablePreview: 0 === n,
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
    let { handleTransition: t, categories: n } = e;
    if (null == n || n.length < 2) return null;
    let [l, s] = n;
    return (0, r.jsx)("div", {
        className: o()(K.n9, K.YB),
        children: (0, r.jsxs)(p.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != l ? l.name : s?.name,
                pageSection: "featured_block",
                tilePosition: +(null == l),
            },
            children: [
                null != l &&
                    (0, r.jsx)(z.S, {
                        category: l,
                        enablePreview: !0,
                        badgeText: (0, W.HF)(l.unpublishedAt) ? H.intl.string(H.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != s &&
                    (0, r.jsx)(z.S, {
                        category: s,
                        badgeText: (0, W.HF)(s.unpublishedAt) ? H.intl.string(H.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let q = function (e) {
    let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: s } = e,
        { analyticsLocations: i } = (0, G.Ay)($.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, r.jsxs)("div", {
              className: o()(K.n9, K.YB),
              children: [
                  (0, r.jsx)("div", { className: o()(K.Jn, K.oT), children: (0, r.jsx)("div", { className: K.uy }) }),
                  (0, r.jsx)("div", { className: o()(K.Jn, K.oT), children: (0, r.jsx)("div", { className: K.uy }) }),
              ],
          })
        : null != s
          ? (0, r.jsx)(G.f5, {
                value: i,
                children: (0, r.jsx)(Y, { featuredBlockRecord: s, handleTransition: n, isLoading: !1 }),
            })
          : (0, r.jsx)(G.f5, {
                value: i,
                children: (0, r.jsx)(X, { categories: l, handleTransition: n, isLoading: !1 }),
            });
};
var J = n(334279),
    Z =
        (((l = {}).RECOMMENDED = "recommended"),
        (l.POPULAR = "popular"),
        (l.RECENT = "recent"),
        (l.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (l.RANDOM = "random"),
        l),
    Q = n(17928),
    ee = n(691885),
    et = n(775602),
    en = n(287809),
    el = n(531685),
    es = n(927578),
    er = n(590180),
    ei = n(395856),
    ea = n(503089),
    eo = n(682301),
    eu = n(258245),
    ec = n(561769),
    ed = n(484469),
    em = n(621466),
    eh =
        (((s = {}).MOUNTED = "mounted"),
        (s.SORT_OUT = "sort-out"),
        (s.SORT_IN = "sort-in"),
        (s.SHUFFLE_OUT = "shuffle-out"),
        (s.SHUFFLE_IN = "shuffle-in"),
        (s.FINISHED = "finished"),
        s),
    eg = n(401864),
    ex = n(124987),
    ef = n(946716);
let eE = {
    [Z.RECENT]: { sortType: ex.$.RECENCY, sortDirection: eg.A.DESC },
    [Z.PRICE_LOW_TO_HIGH]: { sortType: ex.$.PRICE, sortDirection: eg.A.ASC },
};
n(667532);
var ep = n(435558),
    ev = n.n(ep),
    eb = n(153488),
    e_ = n(511265),
    eC = n(313276),
    eS = n(206077),
    ej = n(623373),
    eN = n(652215),
    ey = n(783857),
    eA = n(645501);
let eI = [],
    eR = function (e) {
        let {
                isLoading: t,
                title: n,
                sortedSkuIds: l,
                numVisibleItems: s,
                tab: a,
                buttonContainerClassName: u,
                orbsSupportedOnly: c,
            } = e,
            d = (0, Q.bG)([en.default], () => en.default.getCurrentUser()),
            m = es.Ay.canUseShopDiscounts(d),
            g = (0, ec.Mk)(a),
            x = (0, ey.yB)("FeedBlock"),
            {
                sortType: f,
                setSortType: v,
                sortedItems: b,
                orderedSkuIds: _,
                sortOptions: C,
                shuffleProducts: S,
                showRecommendationOption: j,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: n, orbsSupportedOnly: l } = e,
                    s = (0, Q.bG)([eb.A], () => eb.A.hasConsented(eN.YAq.PERSONALIZATION)),
                    r = i.useMemo(() => t?.[Z.RECOMMENDED] ?? [], [t]),
                    a = i.useMemo(() => t?.[Z.POPULAR] ?? [], [t]),
                    o = r.length > 0 && s,
                    [u, c] = i.useState(o ? Z.RECOMMENDED : Z.POPULAR),
                    d = (0, Q.bG)([er.A], () => er.A.productsWithVariantsAsGroup),
                    m = i.useMemo(() => (0, W.CE)(d), [d]),
                    h = (0, eC.A)(),
                    g = (0, e_.p)(),
                    [x, f] = i.useState([]),
                    E = i.useCallback(() => {
                        (c(Z.RANDOM), f(ev().shuffle(m)));
                    }, [m]);
                i.useEffect(() => {
                    f(ev().shuffle(m));
                }, [m]);
                let p = i.useMemo(() => {
                        let e = [];
                        switch (u) {
                            case Z.RECENT:
                                e = m;
                                break;
                            case Z.PRICE_LOW_TO_HIGH:
                                e = (0, W.bf)([...m], n, l);
                                break;
                            case Z.RECOMMENDED:
                                e = h(r);
                                break;
                            case Z.POPULAR:
                                e = h(a);
                                break;
                            case Z.RANDOM:
                                e = x;
                        }
                        return l ? (0, ej.ex)(g(e)) : g(e);
                    }, [u, l, g, n, m, h, r, a, x]),
                    v = (0, eS.X)(p),
                    b = i.useMemo(
                        () => (u === Z.RECOMMENDED ? r : u === Z.POPULAR ? a : v.map((e) => e.skuId)),
                        [u, r, a, v],
                    );
                return {
                    sortType: u,
                    setSortType: c,
                    sortedItems: v,
                    orderedSkuIds: b,
                    sortOptions: i.useMemo(() => {
                        let e = [
                            { value: Z.POPULAR, label: H.intl.string(H.t.Y68e5p) },
                            { value: Z.RECENT, label: H.intl.string(H.t["51Bhiz"]) },
                            { value: Z.PRICE_LOW_TO_HIGH, label: H.intl.string(H.t.m8RVU2) },
                        ];
                        return (o && e.unshift({ value: Z.RECOMMENDED, label: H.intl.string(H.t.zPWgFG) }), e);
                    }, [o]),
                    showRecommendationOption: o,
                    shuffleProducts: E,
                };
            })({ sortedSkuIds: l, hasShopDiscount: m, orbsSupportedOnly: c }),
            N = f === Z.RANDOM,
            y = (0, ei.$)("feed_block"),
            [A, I] = i.useState(0),
            R = `${f}:${!0 === c}:${A}`,
            [k, L] = i.useState({ key: R, extra: 0 }),
            T = k.key === R ? k.extra : 0;
        k.key !== R && L({ key: R, extra: 0 });
        let {
                skuIds: O,
                isLoading: P,
                hasMore: B,
            } = (function (e) {
                let { sortType: t, orbsSupportedOnly: n, numVisibleItems: l, enabled: s, shuffleNonce: r } = e,
                    a = i.useMemo(
                        () =>
                            (function (e, t) {
                                if (e === Z.RANDOM) return { randomize: !0 };
                                if (t && e === Z.POPULAR) return { randomize_daily: !0 };
                                let n = eE[e];
                                return null == n ? null : { sort_type: n.sortType, sort_direction: n.sortDirection };
                            })(t, !0 === n),
                        [t, n],
                    ),
                    o = t === Z.RANDOM,
                    u = s && l > 0 && null != a && null != a ? `${JSON.stringify(a)}:${!0 === n}` : null,
                    c = null == u ? null : `${u}:${o ? r : ""}:${l}`,
                    [d, m] = i.useState(null);
                if (
                    (i.useEffect(() => {
                        if (null == c || null == a) return;
                        let e = !1;
                        return (
                            (0, ef.$)({
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
                    }, [c, u, o, a, n, l]),
                    null == c)
                )
                    return { skuIds: null, isLoading: !1, hasMore: !1 };
                let h = null != d && d.sortIdentityKey === u ? d : null;
                return { skuIds: h?.skuIds ?? null, isLoading: d?.key !== c, hasMore: h?.hasMore ?? !1 };
            })({ sortType: f, orbsSupportedOnly: c, numVisibleItems: s + T, enabled: y, shuffleNonce: A }),
            U = O ?? _,
            w = i.useMemo(() => U.slice(0, s + T + (N ? 32 : 8)), [U, s, T, N]),
            F = (0, eo.hv)(y ? w : eI, { needsCategory: !1 }),
            V = (0, ea.c)("feed_block"),
            z = i.useMemo(() => {
                if (!y) return w;
                let e = new Set();
                return w.filter((t) => {
                    let n = F[t];
                    if (n?.state === "error" || (!V && t === J.j.PREMIUM_TIER_2_1_DAY)) return !1;
                    let l = n?.product?.storeListingId;
                    if (null != l) {
                        if (e.has(l)) return !1;
                        e.add(l);
                    }
                    return !0;
                });
            }, [y, w, F, V]),
            Y = i.useMemo(
                () =>
                    !!y &&
                    !P &&
                    w.every((e) => {
                        let t = F[e]?.state;
                        return "ready" === t || "error" === t;
                    }),
                [y, P, w, F],
            ),
            X = !N && B && T < 16,
            q = s - z.length;
        if (Y && q > 0 && X) {
            let e = Math.min(16, T + q + 8);
            e !== T && L({ key: R, extra: e });
        }
        let eg = (0, Q.bG)([et.Ay], () => et.Ay.useReducedMotion),
            ex = (0, Q.bG)([el.A], () => el.A.isFocused()),
            ep = !eg && ex,
            {
                animationPhase: eR,
                startAnimation: ek,
                signalDataReady: eL,
            } = (() => {
                let [e, t] = i.useState("mounted"),
                    [n, l] = i.useState(!1),
                    s = i.useRef(null),
                    r = i.useRef(!1),
                    a = i.useRef(null);
                (i.useEffect(() => {
                    if (n && "finished" === e) {
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
                        l(!1);
                    }
                }, [e, n]),
                    i.useEffect(
                        () => () => {
                            null != a.current && clearTimeout(a.current);
                        },
                        [],
                    ));
                let o = i.useCallback((e) => {
                    ((r.current = !1),
                        null != a.current && (clearTimeout(a.current), (a.current = null)),
                        t(e ? "shuffle-in" : "sort-in"),
                        setTimeout(() => t("finished"), e ? 200 : 300));
                }, []);
                return {
                    animationPhase: e,
                    startAnimation: i.useCallback(
                        (e) => {
                            let { isShuffling: n, onOutroComplete: i, returnRef: u, holdIntroUntilReady: c = !1 } = e;
                            (u?.current != null && ((s.current = u.current), l(!0)),
                                (r.current = !1),
                                null != a.current && (clearTimeout(a.current), (a.current = null)),
                                t(n ? "shuffle-out" : "sort-out"),
                                setTimeout(
                                    () => {
                                        if ((i(), n && c)) {
                                            ((r.current = !0), (a.current = setTimeout(() => o(!0), 1e3)));
                                            return;
                                        }
                                        o(n);
                                    },
                                    n ? 250 : 300,
                                ));
                        },
                        [o],
                    ),
                    signalDataReady: i.useCallback(() => {
                        r.current && o(!0);
                    }, [o]),
                };
            })();
        i.useEffect(() => {
            Y && eL();
        }, [Y, eL]);
        let eT = (0, p.uM)(),
            eO = eT?.sessionId ?? "",
            { analyticsLocations: eM } = (0, G.Ay)($.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            eD = i.useRef(null),
            eP = i.useRef(null),
            [eH, eB] = i.useState(!1),
            eU = i.useCallback(
                (e) => {
                    (eB(!1),
                        ek({ isShuffling: !1, onOutroComplete: () => v(e), returnRef: eP }),
                        E.default.track(eN.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: eO,
                            sort_type: e,
                        }));
                },
                [ek, v, eO],
            );
        if (null == d) return null;
        function ew(e, t) {
            let n;
            return ep && eR === eh.SHUFFLE_OUT
                ? (0, r.jsx)("div", { className: K.Z2, children: (0, r.jsx)(ed.A, {}) }, `${e}-${t}`)
                : (ep &&
                      (eR === eh.SORT_OUT
                          ? (n = K.MW)
                          : eR === eh.SHUFFLE_IN
                            ? (n = K.aS)
                            : eR === eh.SORT_IN && (n = K.F7)),
                  (0, r.jsx)(
                      p.R9,
                      {
                          newValue: { tilePosition: t, pageSection: "popular picks", categoryPosition: 2 },
                          children: (0, r.jsx)("div", {
                              className: n,
                              children: (0, r.jsx)(eu.A, {
                                  skuId: e,
                                  hideStaticBundleBackgroundAsset: !0,
                                  prioritizedCurrency: g,
                              }),
                          }),
                      },
                      e,
                  ));
        }
        return (0, r.jsx)(G.f5, {
            value: eM,
            children: (0, r.jsxs)("div", {
                className: o()(K.lD, K.YB),
                children: [
                    (0, r.jsxs)("div", {
                        className: K.$6,
                        children: [
                            (0, r.jsx)(eA.A, { label: n, personalizedResults: j }),
                            (0, r.jsxs)("div", {
                                className: o()(K.IE, { [ey.jP]: x }),
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: K.gd,
                                        children: [
                                            (0, r.jsx)(M.E, {
                                                variant: "text-md/medium",
                                                children: H.intl.string(H.t.uaX705),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: o()(u, K.pI),
                                                ref: eP,
                                                children: (0, r.jsx)(ee.l, {
                                                    label: H.intl.string(H.t.uaX705),
                                                    hideLabel: !0,
                                                    options: C,
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
                                    (0, r.jsx)("div", {
                                        className: u,
                                        children: (0, r.jsx)(h.$, {
                                            variant: "secondary",
                                            text: H.intl.string(H.t.X3tnc4),
                                            buttonRef: eD,
                                            onClick: function () {
                                                (eB(!0),
                                                    ek({
                                                        isShuffling: !0,
                                                        onOutroComplete: () => {
                                                            (S(), I((e) => e + 1));
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
                            (0, r.jsx)(D.A, {
                                "aria-live": "polite",
                                role: "status",
                                children: eH && eR === eh.FINISHED ? H.intl.string(H.t["3Pml0e"]) : "",
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: K.hm,
                        children: t
                            ? (0, r.jsx)(r.Fragment, {
                                  children: [...Array(12)].map((e, t) => (0, r.jsx)(ed.A, {}, t + 1)),
                              })
                            : y
                              ? ep && eR === eh.SHUFFLE_OUT
                                  ? [...Array(s)].map((e, t) =>
                                        (0, r.jsx)(
                                            "div",
                                            { className: K.Z2, children: (0, r.jsx)(ed.A, {}) },
                                            `shuffle-placeholder-${t}`,
                                        ),
                                    )
                                  : P && null == O
                                    ? (0, r.jsx)(r.Fragment, {
                                          children: [...Array(12)].map((e, t) => (0, r.jsx)(ed.A, {}, t + 1)),
                                      })
                                    : z.slice(0, s).map((e, t) => ew(e, t))
                              : b
                                    .slice(0, s)
                                    .map((e, t) =>
                                        null == e || null == er.A.getCategoryForProduct(e.skuId)
                                            ? null
                                            : ew(e.skuId, t),
                                    ),
                    }),
                ],
            }),
        });
    };
var ek = n(269115),
    eL = n(43990),
    eT = n(890856),
    eO = n(408278),
    eM = n(789645),
    eD = n(976860),
    eP = n(758836),
    eH = n(49999),
    eB = n(818348),
    eU = n(394107),
    ew = n(196064);
let eF = "GAME_SERVER_HOSTING_BANNER";
function eV(e) {
    let { gameServerHostingBannerBlock: t, tab: n } = e,
        l = (0, p.uM)(),
        s = i.useRef(null),
        a = i.useRef(!1),
        u = i.useRef(null),
        [d, x] = i.useState(!1),
        f = i.useCallback(
            (e) => {
                E.default.track(eN.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_type: n,
                    page_category: l?.pageCategory,
                    page_section: l?.pageSection,
                    tile_type: eF,
                    cta_name: e,
                });
            },
            [l?.sessionId, l?.pageCategory, l?.pageSection, n],
        ),
        v = i.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    f("go_to_game_server_hosting"),
                    (0, eD.pX)(eN.BVt.COLLECTIBLES_SHOP_WITH_TAB(eP.G2.GAME_SERVERS)));
            },
            [f],
        ),
        b = i.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    f("dismiss"),
                    x(!0),
                    !0 === t.isDismissible &&
                        (0, g.d6)(c.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
                            dismissAction: eH.i.USER_DISMISS,
                        }));
            },
            [f, t.isDismissible],
        ),
        _ = i.useCallback(
            (e) => {
                !a.current &&
                    (e && null === u.current
                        ? (u.current = setTimeout(() => {
                              ((a.current = !0),
                                  (u.current = null),
                                  E.default.track(eN.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: l?.sessionId,
                                      page_type: n,
                                      page_category: l?.pageCategory,
                                      page_section: l?.pageSection,
                                      type: eF,
                                  }));
                          }, 1e3))
                        : e || null === u.current || (clearTimeout(u.current), (u.current = null)));
            },
            [l?.sessionId, l?.pageCategory, l?.pageSection, n],
        );
    return (i.useEffect(
        () => () => {
            null !== u.current && (clearTimeout(u.current), (u.current = null));
        },
        [],
    ),
    d)
        ? null
        : (0, r.jsx)(eL.N, {
              theme: eB.NJ.DARK,
              children: (e) =>
                  (0, r.jsx)(ek.L, {
                      innerRef: s,
                      onChange: _,
                      threshold: 0,
                      children: (0, r.jsx)("div", {
                          ref: s,
                          className: o()(ew.YB, e),
                          children: (0, r.jsxs)(eT.s, {
                              className: ew.kL,
                              onClick: v,
                              "aria-label": H.intl.string(eU.default["34GMP9"]),
                              children: [
                                  (0, r.jsx)("img", {
                                      className: ew.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, r.jsx)("div", { className: ew.f5, "aria-hidden": !0 }),
                                  !0 === t.isDismissible &&
                                      (0, r.jsx)("div", {
                                          className: ew.b,
                                          children: (0, r.jsx)(eO.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: eM.P,
                                              onClick: b,
                                              "aria-label": H.intl.string(H.t.WAI6xu),
                                          }),
                                      }),
                                  (0, r.jsx)("div", {
                                      className: ew.jE,
                                      children: (0, r.jsxs)("div", {
                                          className: ew.rF,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: ew.Z,
                                                  children: [
                                                      (0, r.jsx)(m.D, {
                                                          className: ew.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: H.intl.string(eU.default["34GMP9"]),
                                                      }),
                                                      (0, r.jsx)(M.E, {
                                                          className: ew.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: H.intl.string(eU.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(h.$, {
                                                  variant: "overlay-primary",
                                                  text: H.intl.string(H.t.jVcuVY),
                                                  onClick: v,
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
var e$ = n(946052),
    eG = n(331322),
    eW = n(773669),
    ez = n(480750),
    eK = n(320089),
    eY = n(442036),
    eX = n(212407),
    eq = n(815280),
    eJ = n(60140),
    eZ = n(602051),
    eQ = n(268270);
function e0(e) {
    let { promotion: t, heroBlockRecord: n, heroLogo: l, logoDisplayConfig: s, collectionId: i, isLoading: a } = e;
    return a
        ? (0, r.jsx)("div", { className: eQ.Hw })
        : (0, r.jsxs)("div", {
              className: eQ.Hw,
              children: [
                  (0, r.jsxs)("div", {
                      className: eQ.Wq,
                      children: [
                          null != l &&
                              (0, r.jsx)("img", { className: eQ.rm, src: l, alt: n.name, style: s?.toDesktopStyles() }),
                          null != n.title &&
                              (0, r.jsx)(m.D, { variant: "heading-xxl/bold", color: "text-strong", children: n.title }),
                          null != n.summary &&
                              "" !== n.summary &&
                              (0, r.jsx)(eG.B, {
                                  onClick: (e) => (0, ez.h)(e, t, eZ.S.HOME),
                                  children: (0, r.jsx)(M.E, {
                                      variant: "text-sm/normal",
                                      className: o()(eQ.Tm, eQ.vd),
                                      style: { color: null != n.bannerTextColor ? n.bannerTextColor : void 0 },
                                      children: n.summary,
                                  }),
                              }),
                      ],
                  }),
                  (0, r.jsx)(eK.A, { collectionId: i, variant: "condensed", surface: eZ.S.HOME }),
              ],
          });
}
let e1 = function (e) {
    let { promotion: t, heroBlock: n, isLoading: l, handleTransition: s, tab: a } = e,
        u = (0, Q.bG)([en.default], () => en.default.getCurrentUser()),
        c = (0, Q.bG)([eW.default], () => eW.default.locale),
        d = (0, p.uM)(),
        { analyticsLocations: m } = (0, G.Ay)($.A.COLLECTIBLES_SHOP_HERO),
        h = i.useMemo(() => (0, S.HF)(t, n), [t, n]),
        g = i.useMemo(() => (0, S.O8)(t, n, a, c), [t, n, a, c]),
        {
            bannerDisplayConfig: x,
            logoDisplayConfig: f,
            heroLogo: v,
            heroBannerStatic: b,
            heroBannerAnimated: _,
        } = (0, eX.Kk)(g),
        C = x?.responsive ?? !1,
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
            }),
            (0, ez.l)(t, eZ.S.HOME, eZ.Z.VIEW_ALL_ITEMS_CLICKED));
    }
    return null == u || null == h
        ? null
        : (0, r.jsx)(G.f5, {
              value: m,
              children: (0, r.jsxs)("div", {
                  className: eQ.os,
                  children: [
                      (0, r.jsx)("div", {
                          className: o()(eQ.vK, { [eQ.no]: C }),
                          style: null != j ? { background: j } : void 0,
                          children: null != b && (0, r.jsx)(eq.A, { bannerStatic: b, isResponsive: C }),
                      }),
                      (0, r.jsxs)("div", {
                          className: eQ.xX,
                          children: [
                              (0, r.jsx)("div", {
                                  className: eQ.zl,
                                  style: null != j ? { background: j } : void 0,
                                  children:
                                      null != b &&
                                      (0, r.jsx)(eq.A, { bannerStatic: b, bannerAnimated: _, isResponsive: C }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: eQ.mz,
                                  children: [
                                      (0, r.jsx)(eL.N, {
                                          theme: eN.NJ8.DARK,
                                          children: (e) =>
                                              (0, r.jsxs)("div", {
                                                  className: e,
                                                  children: [
                                                      (0, r.jsx)("div", {
                                                          className: eQ.bC,
                                                          children: (0, r.jsx)(e0, {
                                                              promotion: t,
                                                              heroBlockRecord: g,
                                                              heroLogo: v,
                                                              logoDisplayConfig: f,
                                                              collectionId: n.categorySkuId,
                                                              isLoading: l,
                                                          }),
                                                      }),
                                                      (0, r.jsx)(eY.A, { onShopCollectionClick: N, className: eQ.ti }),
                                                  ],
                                              }),
                                      }),
                                      (0, r.jsx)(eJ.A, {
                                          heroBlockRecord: g,
                                          tab: a,
                                          isBlockLoading: l,
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
var e2 = n(172218),
    e5 = n(28863),
    e3 = n(9530);
let e4 = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        l = (0, e2.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: s, bannerAnimatedUrl: i } = (0, eX.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        o = null != t.body && "" !== t.body,
        u = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, r.jsxs)("div", {
        ref: l,
        className: e3.BX,
        children: [
            (0, r.jsx)("div", {
                className: e3.vK,
                children: null != s && (0, r.jsx)(eq.A, { bannerStatic: s, bannerAnimated: i }),
            }),
            (0, r.jsx)("div", {
                className: e3.HQ,
                children: (0, r.jsxs)("div", {
                    className: e3.Yn,
                    children: [
                        null != t.endTime ? (0, r.jsx)(U, { endDate: t.endTime, size: "lg" }) : null,
                        (0, r.jsx)(m.D, {
                            variant: "heading-xxl/bold",
                            className: e3.DD,
                            color: "text-strong",
                            style: { ...a },
                            children: t.title,
                        }),
                        o || u
                            ? (0, r.jsxs)(M.E, {
                                  variant: "text-md/medium",
                                  style: { ...a },
                                  children: [
                                      o && t.body,
                                      o && u && " ",
                                      u &&
                                          (0, r.jsx)(e5.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: e3.CU,
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
var e9 = n(449543),
    e6 = n(197935),
    e8 = n(275161),
    e7 = n(554661);
function te(e) {
    return e.skuId;
}
function tt(e) {
    let { product: t, index: n, shelfName: l, prioritizedCurrency: s, listItemProps: i } = e;
    return (0, r.jsx)(p.R9, {
        newValue: { tilePosition: n, pageSection: l, categoryPosition: 2 },
        children: (0, r.jsx)(eu.A, { skuId: t.skuId, prioritizedCurrency: s, listItemProps: i }),
    });
}
let tn = function (e) {
    let { shelf: t, handleTransition: n, tab: l } = e,
        s = (0, Q.bG)([en.default], () => en.default.getCurrentUser()),
        a = (0, ec.Mk)(l),
        u = (0, Q.bG)([er.A], () => (null != t.categorySkuId ? er.A.getCategory(t.categorySkuId) : void 0)),
        c = (0, eC.A)(),
        d = i.useMemo(() => c(t.rankedSkuIds), [t.rankedSkuIds, c]),
        g = (0, eS.X)(d),
        { analyticsLocations: x } = (0, G.Ay)($.A.COLLECTIBLES_SHOP_SHELF),
        f = (0, e8.Y)("shelf_block"),
        E = i.useMemo(() => g.filter((e) => null != er.A.getCategoryForProduct(e.skuId)), [g]),
        p = i.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: u?.isOrbsExclusive === !0 && l !== eP.G2.ORBS,
            });
        }, [t.categorySkuId, u, n, l]);
    if (null == s || 0 === g.length) return null;
    let v = t.buttonText ?? H.intl.formatToPlainString(H.t.bc9RBE, { category_name: t.name }),
        b = t.showButton,
        _ = t.desktopBackgroundImage,
        C = null != _;
    return (0, r.jsx)(G.f5, {
        value: x,
        children: (0, r.jsxs)("div", {
            className: o()(e7.mu, K.YB, C ? e7.VA : e7.Ti),
            children: [
                C && (0, r.jsx)("img", { className: e7.iL, src: _, alt: "", "aria-hidden": !0 }),
                (0, r.jsxs)("div", {
                    className: e7.Qs,
                    children: [
                        (0, r.jsxs)("div", {
                            className: e7.wx,
                            children: [
                                (0, r.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    style: C ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                b &&
                                    (0, r.jsx)(h.$, {
                                        variant: C ? "overlay-primary" : "secondary",
                                        text: v,
                                        onClick: p,
                                    }),
                            ],
                        }),
                        f
                            ? (0, r.jsx)(e6.A, {
                                  gap: "xl",
                                  edgeFade: C ? "sm" : void 0,
                                  items: E,
                                  getItemKey: te,
                                  maintainFocusOnReorder: !0,
                                  renderItem: (e, n, l) =>
                                      (0, r.jsx)(
                                          tt,
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
                            : (0, r.jsx)(e9.A, {
                                  gap: "xl",
                                  edgeFade: C ? "sm" : void 0,
                                  children: E.map((e, n) =>
                                      (0, r.jsx)(
                                          tt,
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
var tl = n(465794),
    ts = n(69236),
    tr = n(44724),
    ti = n(421108),
    ta = n(482358),
    to = n(202541);
let tu = function (e) {
    let {
            applicationId: t,
            headerText: n,
            subheaderText: l,
            gradientColors: s,
            gradientAngle: a,
            skuIds: o,
            tab: u,
            endTime: c,
            ctaType: d = "storefront",
            logoUrl: m,
            termsUrl: h,
            backgroundImageUrl: g,
        } = e,
        x = (0, ti.ur)(c) ?? void 0,
        f = (0, ts.W8)(),
        E = i.useMemo(() => {
            if ("none" !== d)
                return "nitro" !== d || f
                    ? {
                          kind: "button",
                          text: H.intl.string(H.t.apFNLU),
                          onClick: () => (0, tr.default)({ applicationId: t }),
                          onMouseDown: () => (0, tr.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, r.jsx)(tl.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: to.pe.TIER_2,
                              buttonTextOverride: H.intl.string(H.t.pj0XBN),
                          }),
                      };
        }, [d, t, f]);
    return (0, r.jsx)(ta.A, {
        skuIds: o,
        tab: u,
        applicationId: t,
        headerText: n,
        subheaderText: l,
        logoUrl: m,
        cta: E,
        timeLeftText: x,
        termsUrl: h,
        backgroundImageUrl: g,
        analyticsSection: "slayer-storefront-promotional-banner",
        analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
        analyticsImpressionType: "social_layer_storefront_promotional_banner",
        backgroundGradient: s.length > 0 ? `linear-gradient(${a}deg, ${s.join(", ")})` : void 0,
    });
};
var tc = n(613258),
    td = n(815021),
    tm = n(939249),
    th = n(975571),
    tg = n(597783);
let tx = function (e) {
        let { wideBannerBlock: t, tab: n } = e,
            l = er.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            s = i.useRef(null),
            a = i.useRef(null),
            [u, d] = i.useState(),
            [x, f] = i.useState(!1);
        i.useEffect(() => {
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
        let v = l?.skuId ?? "",
            { handleCardVisibilityChange: b } = (0, tg.Z)(v, "home", "marketing wide banner"),
            _ = (0, p.uM)(),
            { bannerURL: C } = (0, eX.w$)(t),
            S = n === eP.G2.ORBS,
            j = null != t.ctaRoute && "" !== t.ctaRoute,
            N = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || j),
            y = null != t.logoURL && "" !== t.logoURL,
            A = i.useCallback(() => {
                if ((f(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, g.$l)(c.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: eH.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            I = i.useCallback(
                (e) => {
                    E.default.track(eN.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: _?.sessionId,
                        sku_id: v,
                        page_type: n,
                        page_section: _?.pageSection,
                        page_category: _?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(_?.tilePosition),
                        cta_name: e,
                    });
                },
                [_, v, n],
            ),
            R = i.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((I(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    n = parseInt(t[2], 10);
                                (0, tr.default)({ guildId: e, pageIndex: n });
                            }
                        } else (0, eD.pX)(e);
                    }
                },
                [t.ctaRoute, I],
            );
        if (null == C || x) return null;
        let k = o()(K.nM, K.Tq, K.TS, K.YB, { [K._1]: S, [K.vb]: j }),
            L = (0, r.jsxs)(r.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, r.jsx)("div", {
                            className: K.Mh,
                            children: (0, r.jsx)(td.J, {
                                size: "sm",
                                onClick: (e) => {
                                    (e.stopPropagation(), A());
                                },
                                "aria-label": H.intl.string(H.t.WAI6xu),
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: o()(K.zK, { [K._1]: S }),
                        style: null != u ? { height: `${u}px` } : void 0,
                        children: (0, r.jsx)("img", {
                            ref: a,
                            src: C,
                            alt: t.title,
                            className: o()(K.LN, { [K.d5]: S }),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: o()(K.Ep, { [K.Qq]: N }),
                        style: { maxHeight: null != u ? `${u}px` : "auto" },
                        children: (0, r.jsxs)("div", {
                            className: K.E8,
                            children: [
                                (0, r.jsx)(m.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: S ? K.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, r.jsx)(M.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: S ? "text-md/medium" : "text-sm/medium",
                                    children: S
                                        ? H.intl.format(H.t.SFFP7K, {
                                              helpdeskArticle: th.A.getArticleURL(eN.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                N &&
                                    (0, r.jsxs)("div", {
                                        className: K.nP,
                                        children: [
                                            (0, r.jsx)(h.$, {
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
                                            y && (0, r.jsx)("img", { src: t.logoURL, alt: "", className: K.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, r.jsx)(eL.N, {
            theme: S ? void 0 : eB.NJ.DARK,
            children: (e) =>
                (0, r.jsx)(ek.L, {
                    innerRef: s,
                    onChange: b,
                    threshold: 0,
                    children: j
                        ? (0, r.jsx)(tm.D, { innerRef: s, onClick: () => R(null), className: o()(e, k), children: L })
                        : (0, r.jsx)("div", { ref: s, className: o()(e, k), children: L }),
                }),
        });
    },
    tf = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: l, tab: s } = e,
            { noCache: a, includeUnpublished: d } = (0, I.A)(),
            [m, h] = i.useState(!1),
            E = (0, p.uM)(),
            v = E?.sessionId ?? "",
            A = (0, x.H)({ location: "collectibles_shop_feed" }),
            { promotion: R, isFetchingPromotion: k } = (0, _.T)();
        i.useEffect(() => {
            (0, j.z)({
                sessionId: v,
                checkpoint: j.t.SHOP_MOUNTED,
                tab: s,
                unpublishedCategoriesShown: d,
                cacheDisabled: a,
            });
        }, [s]);
        let {
                isFetchingShopHome: L,
                fetchShopHomeError: T,
                shopBlocks: O,
                refreshShopHome: M,
            } = (0, C.y)(s, { noCache: a, includeUnpublished: d, logPerf: !0 }, { sessionId: v, tab: s }),
            D = i.useCallback(() => {
                M();
            }, [M]);
        return (i.useEffect(() => {
            null != T ||
                L ||
                0 === O.length ||
                (0, j.z)({
                    sessionId: v,
                    checkpoint: j.t.SHOP_RENDERED,
                    tab: s,
                    unpublishedCategoriesShown: d,
                    cacheDisabled: a,
                });
        }, [T, L, O.length, d, a, v, s]),
        null != T)
            ? (0, r.jsx)(y.h, { onRetry: D, errorOrigin: y.A.SHOP_PAGE, errorMessage: T.message })
            : L || 0 === O.length
              ? (0, r.jsxs)("div", {
                    className: o()(K.g4, K.Of),
                    children: [
                        (0, r.jsx)(e$.A, { isLoading: L || k, handleTransition: t, tab: s }),
                        (0, r.jsx)(q, { isLoading: L, handleTransition: t, categories: [] }),
                        (0, r.jsx)(eR, {
                            isLoading: L,
                            title: s === eP.G2.ORBS ? H.intl.string(H.t.dFgeuZ) : H.intl.string(H.t.NSv5KV),
                            numVisibleItems: n,
                            tab: s,
                        }),
                    ],
                })
              : (0, r.jsx)(r.Fragment, {
                    children: O.map((e, i) =>
                        (function (e, i, a) {
                            if (null == e) return null;
                            let d = null,
                                x = !1;
                            switch (e.type) {
                                case u.g.HERO:
                                    let E = (0, S.HF)(R, e);
                                    if (
                                        null != R &&
                                        E?.subtype === f.h5.TAKEOVER &&
                                        (null == R.endsAt || null != (0, N.X)(R.endsAt))
                                    ) {
                                        d = (0, r.jsx)(
                                            e1,
                                            { promotion: R, isLoading: k, handleTransition: t, heroBlock: e, tab: s },
                                            a,
                                        );
                                        break;
                                    }
                                    d = (0, r.jsx)(
                                        e$.A,
                                        { isLoading: k, handleTransition: t, heroBlock: e, tab: s },
                                        a,
                                    );
                                    break;
                                case u.g.FEATURED:
                                    d = (0, r.jsx)(
                                        q,
                                        { isLoading: !1, handleTransition: t, featuredBlockRecord: e },
                                        a,
                                    );
                                    break;
                                case u.g.FEED:
                                    let p = e.sortedSkuIds;
                                    d = (0, r.jsx)(
                                        eR,
                                        {
                                            title:
                                                s === eP.G2.ORBS
                                                    ? H.intl.string(H.t.dFgeuZ)
                                                    : H.intl.string(H.t.NSv5KV),
                                            isLoading: l,
                                            numVisibleItems: n,
                                            sortedSkuIds: p,
                                            buttonContainerClassName: i?.type === u.g.IMMERSIVE_BANNER ? K.w : void 0,
                                            tab: s,
                                            orbsSupportedOnly: s === eP.G2.ORBS,
                                        },
                                        a,
                                    );
                                    break;
                                case u.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, g.En)(c.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    d = (0, r.jsx)(tx, { wideBannerBlock: e, tab: s }, a);
                                    break;
                                case u.g.SHELF:
                                    d = (0, r.jsx)(tn, { handleTransition: t, shelf: e, tab: s }, a);
                                    break;
                                case u.g.COUNTDOWN_TIMER:
                                    ((d = (0, r.jsx)(F, { countdownTimerBlock: e, isVisible: m }, a)), (x = !0));
                                    break;
                                case u.g.IMMERSIVE_BANNER:
                                    d = (0, r.jsx)(
                                        e4,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => h(!e) },
                                        a,
                                    );
                                    break;
                                case u.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !A ||
                                        (!0 === e.isDismissible &&
                                            (0, g.En)(c.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, r.jsx)(
                                        b,
                                        {
                                            blockType: e.type,
                                            children: (0, r.jsx)(eV, { gameServerHostingBannerBlock: e, tab: s }),
                                        },
                                        a,
                                    );
                                case u.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, r.jsx)(
                                        b,
                                        {
                                            blockType: e.type,
                                            children: (0, r.jsx)(tu, {
                                                applicationId: e.applicationId,
                                                headerText: e.headerText,
                                                subheaderText: e.subheaderText,
                                                gradientColors: e.gradientColors,
                                                gradientAngle: e.gradientAngle,
                                                skuIds: e.skuIds,
                                                tab: s,
                                                endTime: e.endTime,
                                                ctaType: e.ctaType,
                                                logoUrl: e.logoUrl,
                                                termsUrl: e.termsUrl,
                                                backgroundImageUrl: e.backgroundImageUrl,
                                            }),
                                        },
                                        a,
                                    );
                                default:
                                    return null;
                            }
                            return (0, r.jsx)(
                                b,
                                {
                                    blockType: e.type,
                                    children: (0, r.jsx)("div", {
                                        className: o()(K.v1, K.Of, { [K.J1]: 0 === a || x }),
                                        children: d,
                                    }),
                                },
                                a,
                            );
                        })(e, i > 0 ? O[i - 1] : null, i),
                    ),
                });
    },
    tE = function (e) {
        let { handleTransition: t, tab: n, transitionState: l } = e,
            s = i.useRef(null),
            { handleScroll: a } = (0, R.r)(s, n),
            o = (0, A.U)(),
            u = (0, p.uM)(),
            [c, g] = i.useState(eP.md),
            [x, f] = i.useState(!1);
        return (
            i.useEffect(() => {
                if (null != s.current) {
                    function e() {
                        if (null == s.current) return;
                        let e = s.current.getDistanceFromBottom();
                        c >= 36 ? f(e < 20) : e <= 200 && g((e) => e + eP.md);
                    }
                    let t = s.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [s, c, g, f]),
            (0, r.jsx)(d.Ch, {
                className: K.OW,
                ref: s,
                onScroll: a,
                children: (0, r.jsxs)("div", {
                    className: K.bx,
                    children: [
                        (0, r.jsxs)("div", {
                            className: K.rb,
                            children: [
                                (0, r.jsx)(tf, {
                                    handleTransition: t,
                                    numVisibleItems: c,
                                    isFetchingCategories: o,
                                    tab: n,
                                }),
                                n !== eP.G2.CATALOG &&
                                    c >= 36 &&
                                    (0, r.jsxs)("div", {
                                        className: K.R$,
                                        children: [
                                            (0, r.jsx)(m.D, {
                                                variant: "heading-md/semibold",
                                                children: H.intl.string(H.t.Yr70c4),
                                            }),
                                            (0, r.jsx)(h.$, {
                                                variant: "primary",
                                                text: H.intl.string(H.t.AfrvRD),
                                                onClick: () => {
                                                    (t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        E.default.track(eN.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: u?.sessionId,
                                                            page_type: n,
                                                            page_category: n === eP.G2.HOME ? void 0 : u?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        }));
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)(tc.A, { peaking: x, transitioning: l === eP.Pf.OUT }),
                    ],
                }),
            })
        );
    };
