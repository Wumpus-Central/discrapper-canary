n.d(t, { A: () => tE });
var l,
    s,
    i = n(477900),
    r = n(582128),
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
let b = r.createContext(null);
function _(e) {
    let { blockType: t, children: n } = e,
        l = r.useMemo(() => ({ blockType: t }), [t]);
    return (0, i.jsx)(b.Provider, { value: l, children: n });
}
var j = n(304210),
    v = n(755172),
    C = n(39196),
    S = n(100057),
    y = n(808598),
    N = n(599062),
    I = n(159439),
    A = n(998694),
    R = n(415926),
    k = n(202091),
    T = n(607399),
    L = n(946015),
    O = n(717421),
    M = n(834730);
n(321073);
var D = n(140735),
    P = n(496431),
    B = n(660183),
    H = n(302326);
function U(e) {
    let { endDate: t, size: n = "md", className: l, showSeconds: s = !1 } = e,
        { days: r, hours: a, minutes: u, seconds: c } = (0, P.A)(t),
        d = (function (e, t, n, l, s) {
            function i(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let r = [i(e), i(t), i(n)];
            return (s && r.push(i(l)), r.join(":"));
        })(r, a, u, c, s);
    return (0, i.jsxs)("div", {
        className: o()(H.kL, l),
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
                                  variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: H.eC,
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
                                  variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
                                  className: H.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, i.jsx)(D.A, { children: B.intl.format(B.t.j6IyVe, { days: r, hours: a, minutes: u }) }),
        ],
    });
}
var F = n(685879);
let V = r.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        l = (0, O.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsxs)(k.animated.div, {
        className: o()([F.lP, T.Fr && F.yJ]),
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
var G = n(424918),
    $ = n(793574),
    w = n(688810),
    z = n(993408),
    K = n(196231),
    Y = n(105499);
function W(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, i.jsx)("div", {
        className: o()(Y.n9, Y.YB),
        children: n?.subblocks.map((e, n) =>
            e.type === G.u.CATEGORY
                ? (0, i.jsx)(
                      p.R9,
                      {
                          newValue: {
                              categoryPosition: 1,
                              pageCategory: e.name,
                              pageSection: "featured_block",
                              tilePosition: n,
                          },
                          children: (0, i.jsx)(
                              K.S,
                              {
                                  subblock: e,
                                  enablePreview: 0 === n,
                                  badgeText: (0, z.HF)(e.unpublishedAt) ? B.intl.string(B.t["h/uBCR"]) : void 0,
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
    return (0, i.jsx)("div", {
        className: o()(Y.n9, Y.YB),
        children: (0, i.jsxs)(p.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != l ? l.name : s?.name,
                pageSection: "featured_block",
                tilePosition: +(null == l),
            },
            children: [
                null != l &&
                    (0, i.jsx)(K.S, {
                        category: l,
                        enablePreview: !0,
                        badgeText: (0, z.HF)(l.unpublishedAt) ? B.intl.string(B.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != s &&
                    (0, i.jsx)(K.S, {
                        category: s,
                        badgeText: (0, z.HF)(s.unpublishedAt) ? B.intl.string(B.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let q = function (e) {
    let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: s } = e,
        { analyticsLocations: r } = (0, w.Ay)($.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, i.jsxs)("div", {
              className: o()(Y.n9, Y.YB),
              children: [
                  (0, i.jsx)("div", { className: o()(Y.Jn, Y.oT), children: (0, i.jsx)("div", { className: Y.uy }) }),
                  (0, i.jsx)("div", { className: o()(Y.Jn, Y.oT), children: (0, i.jsx)("div", { className: Y.uy }) }),
              ],
          })
        : null != s
          ? (0, i.jsx)(w.f5, {
                value: r,
                children: (0, i.jsx)(W, { featuredBlockRecord: s, handleTransition: n, isLoading: !1 }),
            })
          : (0, i.jsx)(w.f5, {
                value: r,
                children: (0, i.jsx)(X, { categories: l, handleTransition: n, isLoading: !1 }),
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
    es = n(158045),
    ei = n(590180),
    er = n(395856),
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
    eb = n.n(ep),
    e_ = n(153488),
    ej = n(511265),
    ev = n(313276),
    eC = n(206077),
    eS = n(623373),
    ey = n(652215),
    eN = n(783857),
    eI = n(645501);
let eA = [],
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
            x = (0, eN.yB)("FeedBlock"),
            {
                sortType: f,
                setSortType: b,
                sortedItems: _,
                orderedSkuIds: j,
                sortOptions: v,
                shuffleProducts: C,
                showRecommendationOption: S,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: n, orbsSupportedOnly: l } = e,
                    s = (0, Q.bG)([e_.A], () => e_.A.hasConsented(ey.YAq.PERSONALIZATION)),
                    i = r.useMemo(() => t?.[Z.RECOMMENDED] ?? [], [t]),
                    a = r.useMemo(() => t?.[Z.POPULAR] ?? [], [t]),
                    o = i.length > 0 && s,
                    [u, c] = r.useState(o ? Z.RECOMMENDED : Z.POPULAR),
                    d = (0, Q.bG)([ei.A], () => ei.A.productsWithVariantsAsGroup),
                    m = r.useMemo(() => (0, z.CE)(d), [d]),
                    h = (0, ev.A)(),
                    g = (0, ej.p)(),
                    [x, f] = r.useState([]),
                    E = r.useCallback(() => {
                        (c(Z.RANDOM), f(eb().shuffle(m)));
                    }, [m]);
                r.useEffect(() => {
                    f(eb().shuffle(m));
                }, [m]);
                let p = r.useMemo(() => {
                        let e = [];
                        switch (u) {
                            case Z.RECENT:
                                e = m;
                                break;
                            case Z.PRICE_LOW_TO_HIGH:
                                e = (0, z.bf)([...m], n, l);
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
                        return l ? (0, eS.ex)(g(e)) : g(e);
                    }, [u, l, g, n, m, h, i, a, x]),
                    b = (0, eC.X)(p),
                    _ = r.useMemo(
                        () => (u === Z.RECOMMENDED ? i : u === Z.POPULAR ? a : b.map((e) => e.skuId)),
                        [u, i, a, b],
                    );
                return {
                    sortType: u,
                    setSortType: c,
                    sortedItems: b,
                    orderedSkuIds: _,
                    sortOptions: r.useMemo(() => {
                        let e = [
                            { value: Z.POPULAR, label: B.intl.string(B.t.Y68e5p) },
                            { value: Z.RECENT, label: B.intl.string(B.t["51Bhiz"]) },
                            { value: Z.PRICE_LOW_TO_HIGH, label: B.intl.string(B.t.m8RVU2) },
                        ];
                        return (o && e.unshift({ value: Z.RECOMMENDED, label: B.intl.string(B.t.zPWgFG) }), e);
                    }, [o]),
                    showRecommendationOption: o,
                    shuffleProducts: E,
                };
            })({ sortedSkuIds: l, hasShopDiscount: m, orbsSupportedOnly: c }),
            y = f === Z.RANDOM,
            N = (0, er.$)("feed_block"),
            [I, A] = r.useState(0),
            R = `${f}:${!0 === c}:${I}`,
            [k, T] = r.useState({ key: R, extra: 0 }),
            L = k.key === R ? k.extra : 0;
        k.key !== R && T({ key: R, extra: 0 });
        let {
                skuIds: O,
                isLoading: P,
                hasMore: H,
            } = (function (e) {
                let { sortType: t, orbsSupportedOnly: n, numVisibleItems: l, enabled: s, shuffleNonce: i } = e,
                    a = r.useMemo(
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
                    c = null == u ? null : `${u}:${o ? i : ""}:${l}`,
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
            })({ sortType: f, orbsSupportedOnly: c, numVisibleItems: s + L, enabled: N, shuffleNonce: I }),
            U = O ?? j,
            F = r.useMemo(() => U.slice(0, s + L + (y ? 32 : 8)), [U, s, L, y]),
            V = (0, eo.hv)(N ? F : eA, { needsCategory: !1 }),
            G = (0, ea.c)("feed_block"),
            K = r.useMemo(() => {
                if (!N) return F;
                let e = new Set();
                return F.filter((t) => {
                    let n = V[t];
                    if (n?.state === "error" || (!G && t === J.j.PREMIUM_TIER_2_1_DAY)) return !1;
                    let l = n?.product?.storeListingId;
                    if (null != l) {
                        if (e.has(l)) return !1;
                        e.add(l);
                    }
                    return !0;
                });
            }, [N, F, V, G]),
            W = r.useMemo(
                () =>
                    !!N &&
                    !P &&
                    F.every((e) => {
                        let t = V[e]?.state;
                        return "ready" === t || "error" === t;
                    }),
                [N, P, F, V],
            ),
            X = !y && H && L < 16,
            q = s - K.length;
        if (W && q > 0 && X) {
            let e = Math.min(16, L + q + 8);
            e !== L && T({ key: R, extra: e });
        }
        let eg = (0, Q.bG)([et.Ay], () => et.Ay.useReducedMotion),
            ex = (0, Q.bG)([el.A], () => el.A.isFocused()),
            ep = !eg && ex,
            {
                animationPhase: eR,
                startAnimation: ek,
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
                            let { isShuffling: n, onOutroComplete: r, returnRef: u, holdIntroUntilReady: c = !1 } = e;
                            (u?.current != null && ((s.current = u.current), l(!0)),
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
            W && eT();
        }, [W, eT]);
        let eL = (0, p.uM)(),
            eO = eL?.sessionId ?? "",
            { analyticsLocations: eM } = (0, w.Ay)($.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            eD = r.useRef(null),
            eP = r.useRef(null),
            [eB, eH] = r.useState(!1),
            eU = r.useCallback(
                (e) => {
                    (eH(!1),
                        ek({ isShuffling: !1, onOutroComplete: () => b(e), returnRef: eP }),
                        E.default.track(ey.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: eO,
                            sort_type: e,
                        }));
                },
                [ek, b, eO],
            );
        if (null == d) return null;
        function eF(e, t) {
            let n;
            return ep && eR === eh.SHUFFLE_OUT
                ? (0, i.jsx)("div", { className: Y.Z2, children: (0, i.jsx)(ed.A, {}) }, `${e}-${t}`)
                : (ep &&
                      (eR === eh.SORT_OUT
                          ? (n = Y.MW)
                          : eR === eh.SHUFFLE_IN
                            ? (n = Y.aS)
                            : eR === eh.SORT_IN && (n = Y.F7)),
                  (0, i.jsx)(
                      p.R9,
                      {
                          newValue: { tilePosition: t, pageSection: "popular picks", categoryPosition: 2 },
                          children: (0, i.jsx)("div", {
                              className: n,
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
        return (0, i.jsx)(w.f5, {
            value: eM,
            children: (0, i.jsxs)("div", {
                className: o()(Y.lD, Y.YB),
                children: [
                    (0, i.jsxs)("div", {
                        className: Y.$6,
                        children: [
                            (0, i.jsx)(eI.A, { label: n, personalizedResults: S }),
                            (0, i.jsxs)("div", {
                                className: o()(Y.IE, { [eN.jP]: x }),
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: Y.gd,
                                        children: [
                                            (0, i.jsx)(M.E, {
                                                variant: "text-md/medium",
                                                children: B.intl.string(B.t.uaX705),
                                            }),
                                            (0, i.jsx)("div", {
                                                className: o()(u, Y.pI),
                                                ref: eP,
                                                children: (0, i.jsx)(ee.l, {
                                                    label: B.intl.string(B.t.uaX705),
                                                    hideLabel: !0,
                                                    options: v,
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
                                        className: u,
                                        children: (0, i.jsx)(h.$, {
                                            variant: "secondary",
                                            text: B.intl.string(B.t.X3tnc4),
                                            buttonRef: eD,
                                            onClick: function () {
                                                (eH(!0),
                                                    ek({
                                                        isShuffling: !0,
                                                        onOutroComplete: () => {
                                                            (C(), A((e) => e + 1));
                                                        },
                                                        returnRef: eD,
                                                        holdIntroUntilReady: N,
                                                    }),
                                                    E.default.track(ey.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
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
                                children: eB && eR === eh.FINISHED ? B.intl.string(B.t["3Pml0e"]) : "",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: Y.hm,
                        children: t
                            ? (0, i.jsx)(i.Fragment, {
                                  children: [...Array(12)].map((e, t) => (0, i.jsx)(ed.A, {}, t + 1)),
                              })
                            : N
                              ? ep && eR === eh.SHUFFLE_OUT
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
                                    : K.slice(0, s).map((e, t) => eF(e, t))
                              : _.slice(0, s).map((e, t) =>
                                    null == e || null == ei.A.getCategoryForProduct(e.skuId) ? null : eF(e.skuId, t),
                                ),
                    }),
                ],
            }),
        });
    };
var ek = n(269115),
    eT = n(43990),
    eL = n(890856),
    eO = n(408278),
    eM = n(789645),
    eD = n(976860),
    eP = n(758836),
    eB = n(49999),
    eH = n(818348),
    eU = n(394107),
    eF = n(196064);
let eV = "GAME_SERVER_HOSTING_BANNER";
function eG(e) {
    let { gameServerHostingBannerBlock: t, tab: n } = e,
        l = (0, p.uM)(),
        s = r.useRef(null),
        a = r.useRef(!1),
        u = r.useRef(null),
        [d, x] = r.useState(!1),
        f = r.useCallback(
            (e) => {
                E.default.track(ey.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_type: n,
                    page_category: l?.pageCategory,
                    page_section: l?.pageSection,
                    tile_type: eV,
                    cta_name: e,
                });
            },
            [l?.sessionId, l?.pageCategory, l?.pageSection, n],
        ),
        b = r.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    f("go_to_game_server_hosting"),
                    (0, eD.pX)(ey.BVt.COLLECTIBLES_SHOP_WITH_TAB(eP.G2.GAME_SERVERS)));
            },
            [f],
        ),
        _ = r.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    f("dismiss"),
                    x(!0),
                    !0 === t.isDismissible &&
                        (0, g.d6)(c.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
                            dismissAction: eB.i.USER_DISMISS,
                        }));
            },
            [f, t.isDismissible],
        ),
        j = r.useCallback(
            (e) => {
                !a.current &&
                    (e && null === u.current
                        ? (u.current = setTimeout(() => {
                              ((a.current = !0),
                                  (u.current = null),
                                  E.default.track(ey.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: l?.sessionId,
                                      page_type: n,
                                      page_category: l?.pageCategory,
                                      page_section: l?.pageSection,
                                      type: eV,
                                  }));
                          }, 1e3))
                        : e || null === u.current || (clearTimeout(u.current), (u.current = null)));
            },
            [l?.sessionId, l?.pageCategory, l?.pageSection, n],
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
              theme: eH.NJ.DARK,
              children: (e) =>
                  (0, i.jsx)(ek.L, {
                      innerRef: s,
                      onChange: j,
                      threshold: 0,
                      children: (0, i.jsx)("div", {
                          ref: s,
                          className: o()(eF.YB, e),
                          children: (0, i.jsxs)(eL.s, {
                              className: eF.kL,
                              onClick: b,
                              "aria-label": B.intl.string(eU.default["34GMP9"]),
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
                                              onClick: _,
                                              "aria-label": B.intl.string(B.t.WAI6xu),
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
                                                          children: B.intl.string(eU.default["34GMP9"]),
                                                      }),
                                                      (0, i.jsx)(M.E, {
                                                          className: eF.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: B.intl.string(eU.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, i.jsx)(h.$, {
                                                  variant: "overlay-primary",
                                                  text: B.intl.string(B.t.jVcuVY),
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
var e$ = n(946052),
    ew = n(331322),
    ez = n(773669),
    eK = n(480750),
    eY = n(135517),
    eW = n(442036),
    eX = n(212407),
    eq = n(815280),
    eJ = n(60140),
    eZ = n(602051),
    eQ = n(268270);
function e0(e) {
    let { promotion: t, heroBlockRecord: n, heroLogo: l, logoDisplayConfig: s, collectionId: r, isLoading: a } = e;
    return a
        ? (0, i.jsx)("div", { className: eQ.Hw })
        : (0, i.jsxs)("div", {
              className: eQ.Hw,
              children: [
                  (0, i.jsxs)("div", {
                      className: eQ.Wq,
                      children: [
                          null != l &&
                              (0, i.jsx)("img", { className: eQ.rm, src: l, alt: n.name, style: s?.toDesktopStyles() }),
                          null != n.title &&
                              (0, i.jsx)(m.D, { variant: "heading-xxl/bold", color: "text-strong", children: n.title }),
                          null != n.summary &&
                              "" !== n.summary &&
                              (0, i.jsx)(ew.B, {
                                  onClick: (e) => (0, eK.h)(e, t, eZ.S.HOME),
                                  children: (0, i.jsx)(M.E, {
                                      variant: "text-sm/normal",
                                      className: o()(eQ.Tm, eQ.vd),
                                      style: { color: null != n.bannerTextColor ? n.bannerTextColor : void 0 },
                                      children: n.summary,
                                  }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(eY.A, { collectionId: r, variant: "condensed", surface: eZ.S.HOME }),
              ],
          });
}
let e1 = function (e) {
    let { promotion: t, heroBlock: n, isLoading: l, handleTransition: s, tab: a } = e,
        u = (0, Q.bG)([en.default], () => en.default.getCurrentUser()),
        c = (0, Q.bG)([ez.default], () => ez.default.locale),
        d = (0, p.uM)(),
        { analyticsLocations: m } = (0, w.Ay)($.A.COLLECTIBLES_SHOP_HERO),
        h = r.useMemo(() => (0, C.HF)(t, n), [t, n]),
        g = r.useMemo(() => (0, C.O8)(t, n, a, c), [t, n, a, c]),
        {
            bannerDisplayConfig: x,
            logoDisplayConfig: f,
            heroLogo: b,
            heroBannerStatic: _,
            heroBannerAnimated: j,
        } = (0, eX.Kk)(g),
        v = x?.responsive ?? !1,
        S = x?.backgroundStyle;
    function y() {
        (s?.({ sourceButton: "shop latest category hero", categorySkuId: g.categorySkuId, isInternalShopDeeplink: !0 }),
            E.default.track(ey.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: d?.sessionId,
                sku_id: g.categorySkuId,
                page_type: a,
                page_section: d?.pageSection,
                page_category: d?.pageCategory,
                cta_name: "shop latest category hero button",
            }),
            (0, eK.l)(t, eZ.S.HOME, eZ.Z.VIEW_ALL_ITEMS_CLICKED));
    }
    return null == u || null == h
        ? null
        : (0, i.jsx)(w.f5, {
              value: m,
              children: (0, i.jsxs)("div", {
                  className: eQ.os,
                  children: [
                      (0, i.jsx)("div", {
                          className: o()(eQ.vK, { [eQ.no]: v }),
                          style: null != S ? { background: S } : void 0,
                          children: null != _ && (0, i.jsx)(eq.A, { bannerStatic: _, isResponsive: v }),
                      }),
                      (0, i.jsxs)("div", {
                          className: eQ.xX,
                          children: [
                              (0, i.jsx)("div", {
                                  className: eQ.zl,
                                  style: null != S ? { background: S } : void 0,
                                  children:
                                      null != _ &&
                                      (0, i.jsx)(eq.A, { bannerStatic: _, bannerAnimated: j, isResponsive: v }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: eQ.mz,
                                  children: [
                                      (0, i.jsx)(eT.N, {
                                          theme: ey.NJ8.DARK,
                                          children: (e) =>
                                              (0, i.jsxs)("div", {
                                                  className: e,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: eQ.bC,
                                                          children: (0, i.jsx)(e0, {
                                                              promotion: t,
                                                              heroBlockRecord: g,
                                                              heroLogo: b,
                                                              logoDisplayConfig: f,
                                                              collectionId: n.categorySkuId,
                                                              isLoading: l,
                                                          }),
                                                      }),
                                                      (0, i.jsx)(eW.A, { onShopCollectionClick: y, className: eQ.ti }),
                                                  ],
                                              }),
                                      }),
                                      (0, i.jsx)(eJ.A, {
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
    e6 = n(9530);
let e3 = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        l = (0, e2.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: s, bannerAnimatedUrl: r } = (0, eX.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        o = null != t.body && "" !== t.body,
        u = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, i.jsxs)("div", {
        ref: l,
        className: e6.BX,
        children: [
            (0, i.jsx)("div", {
                className: e6.vK,
                children: null != s && (0, i.jsx)(eq.A, { bannerStatic: s, bannerAnimated: r }),
            }),
            (0, i.jsx)("div", {
                className: e6.HQ,
                children: (0, i.jsxs)("div", {
                    className: e6.Yn,
                    children: [
                        null != t.endTime ? (0, i.jsx)(U, { endDate: t.endTime, size: "lg" }) : null,
                        (0, i.jsx)(m.D, {
                            variant: "heading-xxl/bold",
                            className: e6.DD,
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
                                          (0, i.jsx)(e5.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: e6.CU,
                                              style: { ...a },
                                              children: B.intl.string(B.t.O7ADgv),
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
var e4 = n(449543),
    e9 = n(197935),
    e8 = n(275161),
    e7 = n(554661);
function te(e) {
    return e.skuId;
}
function tt(e) {
    let { product: t, index: n, shelfName: l, prioritizedCurrency: s, listItemProps: r } = e;
    return (0, i.jsx)(p.R9, {
        newValue: { tilePosition: n, pageSection: l, categoryPosition: 2 },
        children: (0, i.jsx)(eu.A, { skuId: t.skuId, prioritizedCurrency: s, listItemProps: r }),
    });
}
let tn = function (e) {
    let { shelf: t, handleTransition: n, tab: l } = e,
        s = (0, Q.bG)([en.default], () => en.default.getCurrentUser()),
        a = (0, ec.Mk)(l),
        u = (0, Q.bG)([ei.A], () => (null != t.categorySkuId ? ei.A.getCategory(t.categorySkuId) : void 0)),
        c = (0, ev.A)(),
        d = r.useMemo(() => c(t.rankedSkuIds), [t.rankedSkuIds, c]),
        g = (0, eC.X)(d),
        { analyticsLocations: x } = (0, w.Ay)($.A.COLLECTIBLES_SHOP_SHELF),
        f = (0, e8.Y)("shelf_block"),
        E = r.useMemo(() => g.filter((e) => null != ei.A.getCategoryForProduct(e.skuId)), [g]),
        p = r.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: u?.isOrbsExclusive === !0 && l !== eP.G2.ORBS,
            });
        }, [t.categorySkuId, u, n, l]);
    if (null == s || 0 === g.length) return null;
    let b = t.buttonText ?? B.intl.formatToPlainString(B.t.bc9RBE, { category_name: t.name }),
        _ = t.showButton,
        j = t.desktopBackgroundImage,
        v = null != j;
    return (0, i.jsx)(w.f5, {
        value: x,
        children: (0, i.jsxs)("div", {
            className: o()(e7.mu, Y.YB, v ? e7.VA : e7.Ti),
            children: [
                v && (0, i.jsx)("img", { className: e7.iL, src: j, alt: "", "aria-hidden": !0 }),
                (0, i.jsxs)("div", {
                    className: e7.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: e7.wx,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    style: v ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                _ &&
                                    (0, i.jsx)(h.$, {
                                        variant: v ? "overlay-primary" : "secondary",
                                        text: b,
                                        onClick: p,
                                    }),
                            ],
                        }),
                        f
                            ? (0, i.jsx)(e9.A, {
                                  gap: "xl",
                                  edgeFade: v ? "sm" : void 0,
                                  items: E,
                                  getItemKey: te,
                                  maintainFocusOnReorder: !0,
                                  renderItem: (e, n, l) =>
                                      (0, i.jsx)(
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
                            : (0, i.jsx)(e4.A, {
                                  gap: "xl",
                                  edgeFade: v ? "sm" : void 0,
                                  children: E.map((e, n) =>
                                      (0, i.jsx)(
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
    ti = n(44724),
    tr = n(421108),
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
        x = (0, tr.ur)(c) ?? void 0,
        f = (0, ts.W8)(),
        E = r.useMemo(() => {
            if ("none" !== d)
                return "nitro" !== d || f
                    ? {
                          kind: "button",
                          text: B.intl.string(B.t.apFNLU),
                          onClick: () => (0, ti.default)({ applicationId: t }),
                          onMouseDown: () => (0, ti.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, i.jsx)(tl.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: to.pe.TIER_2,
                              buttonTextOverride: B.intl.string(B.t.pj0XBN),
                          }),
                      };
        }, [d, t, f]);
    return (0, i.jsx)(ta.A, {
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
            l = ei.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            s = r.useRef(null),
            a = r.useRef(null),
            [u, d] = r.useState(),
            [x, f] = r.useState(!1);
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
        let b = l?.skuId ?? "",
            { handleCardVisibilityChange: _ } = (0, tg.Z)(b, "home", "marketing wide banner"),
            j = (0, p.uM)(),
            { bannerURL: v } = (0, eX.w$)(t),
            C = n === eP.G2.ORBS,
            S = null != t.ctaRoute && "" !== t.ctaRoute,
            y = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || S),
            N = null != t.logoURL && "" !== t.logoURL,
            I = r.useCallback(() => {
                if ((f(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, g.$l)(c.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: eB.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            A = r.useCallback(
                (e) => {
                    E.default.track(ey.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            R = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((A(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    n = parseInt(t[2], 10);
                                (0, ti.default)({ guildId: e, pageIndex: n });
                            }
                        } else (0, eD.pX)(e);
                    }
                },
                [t.ctaRoute, A],
            );
        if (null == v || x) return null;
        let k = o()(Y.nM, Y.Tq, Y.TS, Y.YB, { [Y._1]: C, [Y.vb]: S }),
            T = (0, i.jsxs)(i.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, i.jsx)("div", {
                            className: Y.Mh,
                            children: (0, i.jsx)(td.J, {
                                size: "sm",
                                onClick: (e) => {
                                    (e.stopPropagation(), I());
                                },
                                "aria-label": B.intl.string(B.t.WAI6xu),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: o()(Y.zK, { [Y._1]: C }),
                        style: null != u ? { height: `${u}px` } : void 0,
                        children: (0, i.jsx)("img", {
                            ref: a,
                            src: v,
                            alt: t.title,
                            className: o()(Y.LN, { [Y.d5]: C }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: o()(Y.Ep, { [Y.Qq]: y }),
                        style: { maxHeight: null != u ? `${u}px` : "auto" },
                        children: (0, i.jsxs)("div", {
                            className: Y.E8,
                            children: [
                                (0, i.jsx)(m.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: C ? Y.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, i.jsx)(M.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: C ? "text-md/medium" : "text-sm/medium",
                                    children: C
                                        ? B.intl.format(B.t.SFFP7K, {
                                              helpdeskArticle: th.A.getArticleURL(ey.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                y &&
                                    (0, i.jsxs)("div", {
                                        className: Y.nP,
                                        children: [
                                            (0, i.jsx)(h.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    (e.stopPropagation(), R(t.ctaText ?? B.intl.string(B.t.jVcuVY)));
                                                },
                                                text: t.ctaText ?? B.intl.string(B.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? B.intl.formatToPlainString(B.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            N && (0, i.jsx)("img", { src: t.logoURL, alt: "", className: Y.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, i.jsx)(eT.N, {
            theme: C ? void 0 : eH.NJ.DARK,
            children: (e) =>
                (0, i.jsx)(ek.L, {
                    innerRef: s,
                    onChange: _,
                    threshold: 0,
                    children: S
                        ? (0, i.jsx)(tm.D, { innerRef: s, onClick: () => R(null), className: o()(e, k), children: T })
                        : (0, i.jsx)("div", { ref: s, className: o()(e, k), children: T }),
                }),
        });
    },
    tf = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: l, tab: s } = e,
            { noCache: a, includeUnpublished: d } = (0, A.A)(),
            [m, h] = r.useState(!1),
            E = (0, p.uM)(),
            b = E?.sessionId ?? "",
            I = (0, x.H)({ location: "collectibles_shop_feed" }),
            { promotion: R, isFetchingPromotion: k } = (0, j.T)();
        r.useEffect(() => {
            (0, S.z)({
                sessionId: b,
                checkpoint: S.t.SHOP_MOUNTED,
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
            } = (0, v.y)(s, { noCache: a, includeUnpublished: d, logPerf: !0 }, { sessionId: b, tab: s }),
            D = r.useCallback(() => {
                M();
            }, [M]);
        return (r.useEffect(() => {
            null != L ||
                T ||
                0 === O.length ||
                (0, S.z)({
                    sessionId: b,
                    checkpoint: S.t.SHOP_RENDERED,
                    tab: s,
                    unpublishedCategoriesShown: d,
                    cacheDisabled: a,
                });
        }, [L, T, O.length, d, a, b, s]),
        null != L)
            ? (0, i.jsx)(N.h, { onRetry: D, errorOrigin: N.A.SHOP_PAGE, errorMessage: L.message })
            : T || 0 === O.length
              ? (0, i.jsxs)("div", {
                    className: o()(Y.g4, Y.Of),
                    children: [
                        (0, i.jsx)(e$.A, { isLoading: T || k, handleTransition: t, tab: s }),
                        (0, i.jsx)(q, { isLoading: T, handleTransition: t, categories: [] }),
                        (0, i.jsx)(eR, {
                            isLoading: T,
                            title: s === eP.G2.ORBS ? B.intl.string(B.t.dFgeuZ) : B.intl.string(B.t.NSv5KV),
                            numVisibleItems: n,
                            tab: s,
                        }),
                    ],
                })
              : (0, i.jsx)(i.Fragment, {
                    children: O.map((e, r) =>
                        (function (e, r, a) {
                            if (null == e) return null;
                            let d = null,
                                x = !1;
                            switch (e.type) {
                                case u.g.HERO:
                                    let E = (0, C.HF)(R, e);
                                    if (
                                        null != R &&
                                        E?.subtype === f.h5.TAKEOVER &&
                                        (null == R.endsAt || null != (0, y.X)(R.endsAt))
                                    ) {
                                        d = (0, i.jsx)(
                                            e1,
                                            { promotion: R, isLoading: k, handleTransition: t, heroBlock: e, tab: s },
                                            a,
                                        );
                                        break;
                                    }
                                    d = (0, i.jsx)(
                                        e$.A,
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
                                    let p = e.sortedSkuIds;
                                    d = (0, i.jsx)(
                                        eR,
                                        {
                                            title:
                                                s === eP.G2.ORBS
                                                    ? B.intl.string(B.t.dFgeuZ)
                                                    : B.intl.string(B.t.NSv5KV),
                                            isLoading: l,
                                            numVisibleItems: n,
                                            sortedSkuIds: p,
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
                                            { isDismissed: n } = (0, g.En)(c.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    d = (0, i.jsx)(tx, { wideBannerBlock: e, tab: s }, a);
                                    break;
                                case u.g.SHELF:
                                    d = (0, i.jsx)(tn, { handleTransition: t, shelf: e, tab: s }, a);
                                    break;
                                case u.g.COUNTDOWN_TIMER:
                                    ((d = (0, i.jsx)(V, { countdownTimerBlock: e, isVisible: m }, a)), (x = !0));
                                    break;
                                case u.g.IMMERSIVE_BANNER:
                                    d = (0, i.jsx)(
                                        e3,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => h(!e) },
                                        a,
                                    );
                                    break;
                                case u.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !I ||
                                        (!0 === e.isDismissible &&
                                            (0, g.En)(c.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, i.jsx)(
                                        _,
                                        {
                                            blockType: e.type,
                                            children: (0, i.jsx)(eG, { gameServerHostingBannerBlock: e, tab: s }),
                                        },
                                        a,
                                    );
                                case u.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, i.jsx)(
                                        _,
                                        {
                                            blockType: e.type,
                                            children: (0, i.jsx)(tu, {
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
                            return (0, i.jsx)(
                                _,
                                {
                                    blockType: e.type,
                                    children: (0, i.jsx)("div", {
                                        className: o()(Y.v1, Y.Of, { [Y.J1]: 0 === a || x }),
                                        children: d,
                                    }),
                                },
                                a,
                            );
                        })(e, r > 0 ? O[r - 1] : null, r),
                    ),
                });
    },
    tE = function (e) {
        let { handleTransition: t, tab: n, transitionState: l } = e,
            s = r.useRef(null),
            { handleScroll: a } = (0, R.r)(s, n),
            [o, u] = r.useState(!1),
            c = (0, I.U)(),
            g = (0, p.uM)(),
            [x, f] = r.useState(eP.md);
        return (
            r.useEffect(() => {
                if (null != s.current) {
                    function e() {
                        if (null == s.current) return;
                        let e = s.current.getDistanceFromBottom();
                        x >= 36 ? u(e < 20) : e <= 200 && f((e) => e + eP.md);
                    }
                    let t = s.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [s, x, f]),
            (0, i.jsxs)("div", {
                className: Y.or,
                children: [
                    (0, i.jsxs)(d.Ch, {
                        className: Y.bx,
                        ref: s,
                        onScroll: a,
                        children: [
                            (0, i.jsx)(tf, {
                                handleTransition: t,
                                numVisibleItems: x,
                                isFetchingCategories: c,
                                tab: n,
                            }),
                            x >= 36 &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: Y.R$,
                                            children: [
                                                (0, i.jsx)(m.D, {
                                                    variant: "heading-md/semibold",
                                                    children: B.intl.string(B.t.Yr70c4),
                                                }),
                                                (0, i.jsx)(h.$, {
                                                    variant: "primary",
                                                    text: B.intl.string(B.t.AfrvRD),
                                                    onClick: () => {
                                                        (t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                            E.default.track(ey.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: g?.sessionId,
                                                                page_type: n,
                                                                page_category:
                                                                    n === eP.G2.HOME ? void 0 : g?.pageCategory,
                                                                cta_name: "browse the shop button",
                                                            }));
                                                    },
                                                    fullWidth: !0,
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(tc.V, {}),
                                    ],
                                }),
                        ],
                    }),
                    (0, i.jsx)(tc.j, { isVisible: o, transitioning: l === eP.Pf.OUT }),
                ],
            })
        );
    };
