l.d(t, { A: () => tE });
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
    g = l(821609),
    h = l(501419),
    x = l(196736),
    f = l(604913),
    E = l(174459),
    p = l(440938);
let _ = r.createContext(null);
function b(e) {
    let { blockType: t, children: l } = e,
        n = r.useMemo(() => ({ blockType: t }), [t]);
    return (0, i.jsx)(_.Provider, { value: n, children: l });
}
var j = l(304210),
    v = l(755172),
    C = l(39196),
    S = l(100057),
    y = l(808598),
    I = l(599062),
    N = l(159439),
    A = l(998694),
    k = l(415926),
    R = l(941143),
    T = l(607399),
    L = l(946015),
    O = l(717421),
    M = l(834730);
l(321073);
var D = l(140735),
    P = l(496431),
    B = l(105292),
    H = l(302326);
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
        className: o()(H.kL, n),
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
                                  variant: "md" === l ? "heading-md/bold" : "heading-xl/bold",
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
var F = l(685879);
let V = r.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: l } = e,
        n = (0, O.z)({
            transform: `translateX(-50%) ${l ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!l,
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsxs)(R.animated.div, {
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
var w = l(424918),
    G = l(793574),
    $ = l(688810),
    K = l(196231),
    Y = l(105499);
function z(e) {
    let { handleTransition: t, featuredBlockRecord: l } = e;
    return (0, i.jsx)("div", {
        className: o()(Y.n9, Y.YB),
        children: l?.subblocks.map((e, l) =>
            e.type === w.u.CATEGORY
                ? (0, i.jsx)(
                      p.R9,
                      {
                          newValue: {
                              categoryPosition: 1,
                              pageCategory: e.name,
                              pageSection: "featured_block",
                              tilePosition: l,
                          },
                          children: (0, i.jsx)(
                              K.S,
                              { subblock: e, enablePreview: 0 === l, handleTransition: t },
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
    let { handleTransition: t, categories: l } = e;
    if (null == l || l.length < 2) return null;
    let [n, s] = l;
    return (0, i.jsx)("div", {
        className: o()(Y.n9, Y.YB),
        children: (0, i.jsxs)(p.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != n ? n.name : s?.name,
                pageSection: "featured_block",
                tilePosition: +(null == n),
            },
            children: [
                null != n && (0, i.jsx)(K.S, { category: n, enablePreview: !0, handleTransition: t }),
                null != s && (0, i.jsx)(K.S, { category: s, handleTransition: t }),
            ],
        }),
    });
}
let J = function (e) {
    let { isLoading: t, handleTransition: l, categories: n, featuredBlockRecord: s } = e,
        { analyticsLocations: r } = (0, $.Ay)(G.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
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
                children: (0, i.jsx)(z, { featuredBlockRecord: s, handleTransition: l, isLoading: !1 }),
            })
          : (0, i.jsx)($.f5, {
                value: r,
                children: (0, i.jsx)(W, { categories: n, handleTransition: l, isLoading: !1 }),
            });
};
var q = l(334279),
    X =
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
    eg = l(401864),
    eh = l(124987),
    ex = l(946716);
let ef = {
    [X.RECENT]: { sortType: eh.$.RECENCY, sortDirection: eg.A.DESC },
    [X.PRICE_LOW_TO_HIGH]: { sortType: eh.$.PRICE, sortDirection: eg.A.ASC },
};
l(667532);
var eE = l(435558),
    ep = l.n(eE),
    e_ = l(153488),
    eb = l(993408),
    ej = l(511265),
    ev = l(313276),
    eC = l(206077),
    eS = l(623373),
    ey = l(652215),
    eI = l(783857),
    eN = l(645501);
let eA = [],
    ek = function (e) {
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
            h = (0, eu.Mk)(a),
            x = (0, eI.yB)("FeedBlock"),
            {
                sortType: f,
                setSortType: _,
                sortedItems: b,
                orderedSkuIds: j,
                sortOptions: v,
                shuffleProducts: C,
                showRecommendationOption: S,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: l, orbsSupportedOnly: n } = e,
                    s = (0, Z.bG)([e_.A], () => e_.A.hasConsented(ey.YAq.PERSONALIZATION)),
                    i = r.useMemo(() => t?.[X.RECOMMENDED] ?? [], [t]),
                    a = r.useMemo(() => t?.[X.POPULAR] ?? [], [t]),
                    o = i.length > 0 && s,
                    [u, c] = r.useState(o ? X.RECOMMENDED : X.POPULAR),
                    d = (0, Z.bG)([es.A], () => es.A.productsWithVariantsAsGroup),
                    m = r.useMemo(() => (0, eb.CE)(d), [d]),
                    g = (0, ev.A)(),
                    h = (0, ej.p)(),
                    [x, f] = r.useState([]),
                    E = r.useCallback(() => {
                        (c(X.RANDOM), f(ep().shuffle(m)));
                    }, [m]);
                r.useEffect(() => {
                    f(ep().shuffle(m));
                }, [m]);
                let p = r.useMemo(() => {
                        let e = [];
                        switch (u) {
                            case X.RECENT:
                                e = m;
                                break;
                            case X.PRICE_LOW_TO_HIGH:
                                e = (0, eb.bf)([...m], l, n);
                                break;
                            case X.RECOMMENDED:
                                e = g(i);
                                break;
                            case X.POPULAR:
                                e = g(a);
                                break;
                            case X.RANDOM:
                                e = x;
                        }
                        return n ? (0, eS.ex)(h(e)) : h(e);
                    }, [u, n, h, l, m, g, i, a, x]),
                    _ = (0, eC.X)(p),
                    b = r.useMemo(
                        () => (u === X.RECOMMENDED ? i : u === X.POPULAR ? a : _.map((e) => e.skuId)),
                        [u, i, a, _],
                    );
                return {
                    sortType: u,
                    setSortType: c,
                    sortedItems: _,
                    orderedSkuIds: b,
                    sortOptions: r.useMemo(() => {
                        let e = [
                            { value: X.POPULAR, label: B.intl.string(B.t.Y68e5p) },
                            { value: X.RECENT, label: B.intl.string(B.t["51Bhiz"]) },
                            { value: X.PRICE_LOW_TO_HIGH, label: B.intl.string(B.t.m8RVU2) },
                        ];
                        return (o && e.unshift({ value: X.RECOMMENDED, label: B.intl.string(B.t.zPWgFG) }), e);
                    }, [o]),
                    showRecommendationOption: o,
                    shuffleProducts: E,
                };
            })({ sortedSkuIds: n, hasShopDiscount: m, orbsSupportedOnly: c }),
            y = f === X.RANDOM,
            I = (0, ei.$)("feed_block"),
            [N, A] = r.useState(0),
            k = `${f}:${!0 === c}:${N}`,
            [R, T] = r.useState({ key: k, extra: 0 }),
            L = R.key === k ? R.extra : 0;
        R.key !== k && T({ key: k, extra: 0 });
        let {
                skuIds: O,
                isLoading: P,
                hasMore: H,
            } = (function (e) {
                let { sortType: t, orbsSupportedOnly: l, numVisibleItems: n, enabled: s, shuffleNonce: i } = e,
                    a = r.useMemo(
                        () =>
                            (function (e, t) {
                                if (e === X.RANDOM) return { randomize: !0 };
                                if (t && e === X.POPULAR) return { randomize_daily: !0 };
                                let l = ef[e];
                                return null == l ? null : { sort_type: l.sortType, sort_direction: l.sortDirection };
                            })(t, !0 === l),
                        [t, l],
                    ),
                    o = t === X.RANDOM,
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
                let g = null != d && d.sortIdentityKey === u ? d : null;
                return { skuIds: g?.skuIds ?? null, isLoading: d?.key !== c, hasMore: g?.hasMore ?? !1 };
            })({ sortType: f, orbsSupportedOnly: c, numVisibleItems: s + L, enabled: I, shuffleNonce: N }),
            U = O ?? j,
            F = r.useMemo(() => U.slice(0, s + L + (y ? 32 : 8)), [U, s, L, y]),
            V = (0, ea.hv)(I ? F : eA, { needsCategory: !1 }),
            w = (0, er.c)("feed_block"),
            K = r.useMemo(() => {
                if (!I) return F;
                let e = new Set();
                return F.filter((t) => {
                    let l = V[t];
                    if (l?.state === "error" || (!w && t === q.j.PREMIUM_TIER_2_1_DAY)) return !1;
                    let n = l?.product?.storeListingId;
                    if (null != n) {
                        if (e.has(n)) return !1;
                        e.add(n);
                    }
                    return !0;
                });
            }, [I, F, V, w]),
            z = r.useMemo(
                () =>
                    !!I &&
                    !P &&
                    F.every((e) => {
                        let t = V[e]?.state;
                        return "ready" === t || "error" === t;
                    }),
                [I, P, F, V],
            ),
            W = !y && H && L < 16,
            J = s - K.length;
        if (z && J > 0 && W) {
            let e = Math.min(16, L + J + 8);
            e !== L && T({ key: k, extra: e });
        }
        let eg = (0, Z.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
            eh = (0, Z.bG)([el.A], () => el.A.isFocused()),
            eE = !eg && eh,
            {
                animationPhase: ek,
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
            z && eT();
        }, [z, eT]);
        let eL = (0, p.uM)(),
            eO = eL?.sessionId ?? "",
            { analyticsLocations: eM } = (0, $.Ay)(G.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            eD = r.useRef(null),
            eP = r.useRef(null),
            [eB, eH] = r.useState(!1),
            eU = r.useCallback(
                (e) => {
                    (eH(!1),
                        eR({ isShuffling: !1, onOutroComplete: () => _(e), returnRef: eP }),
                        E.default.track(ey.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: eO,
                            sort_type: e,
                        }));
                },
                [eR, _, eO],
            );
        if (null == d) return null;
        function eF(e, t) {
            let l;
            return eE && ek === em.SHUFFLE_OUT
                ? (0, i.jsx)("div", { className: Y.Z2, children: (0, i.jsx)(ec.A, {}) }, `${e}-${t}`)
                : (eE &&
                      (ek === em.SORT_OUT
                          ? (l = Y.MW)
                          : ek === em.SHUFFLE_IN
                            ? (l = Y.aS)
                            : ek === em.SORT_IN && (l = Y.F7)),
                  (0, i.jsx)(
                      p.R9,
                      {
                          newValue: { tilePosition: t, pageSection: "popular picks", categoryPosition: 2 },
                          children: (0, i.jsx)("div", {
                              className: l,
                              children: (0, i.jsx)(eo.A, {
                                  skuId: e,
                                  hideStaticBundleBackgroundAsset: !0,
                                  prioritizedCurrency: h,
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
                            (0, i.jsx)(eN.A, { label: l, personalizedResults: S }),
                            (0, i.jsxs)("div", {
                                className: o()(Y.IE, { [eI.jP]: x }),
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
                                                children: (0, i.jsx)(Q.l, {
                                                    label: B.intl.string(B.t.uaX705),
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
                                        children: (0, i.jsx)(g.$, {
                                            variant: "secondary",
                                            text: B.intl.string(B.t.X3tnc4),
                                            buttonRef: eD,
                                            onClick: function () {
                                                (eH(!0),
                                                    eR({
                                                        isShuffling: !0,
                                                        onOutroComplete: () => {
                                                            (C(), A((e) => e + 1));
                                                        },
                                                        returnRef: eD,
                                                        holdIntroUntilReady: I,
                                                    }),
                                                    E.default.track(ey.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                        page_session_id: eO,
                                                    }));
                                            },
                                            disabled: ek !== em.MOUNTED && ek !== em.FINISHED,
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(D.A, {
                                "aria-live": "polite",
                                role: "status",
                                children: eB && ek === em.FINISHED ? B.intl.string(B.t["3Pml0e"]) : "",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: Y.hm,
                        children: t
                            ? (0, i.jsx)(i.Fragment, {
                                  children: [...Array(12)].map((e, t) => (0, i.jsx)(ec.A, {}, t + 1)),
                              })
                            : I
                              ? eE && ek === em.SHUFFLE_OUT
                                  ? [...Array(s)].map((e, t) =>
                                        (0, i.jsx)(
                                            "div",
                                            { className: Y.Z2, children: (0, i.jsx)(ec.A, {}) },
                                            `shuffle-placeholder-${t}`,
                                        ),
                                    )
                                  : P && null == O
                                    ? (0, i.jsx)(i.Fragment, {
                                          children: [...Array(12)].map((e, t) => (0, i.jsx)(ec.A, {}, t + 1)),
                                      })
                                    : K.slice(0, s).map((e, t) => eF(e, t))
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
    eT = l(43990),
    eL = l(890856),
    eO = l(408278),
    eM = l(789645),
    eD = l(976860),
    eP = l(758836),
    eB = l(49999),
    eH = l(818348),
    eU = l(394107),
    eF = l(196064);
let eV = "GAME_SERVER_HOSTING_BANNER";
function ew(e) {
    let { gameServerHostingBannerBlock: t, tab: l } = e,
        n = (0, p.uM)(),
        s = r.useRef(null),
        a = r.useRef(!1),
        u = r.useRef(null),
        [d, x] = r.useState(!1),
        f = r.useCallback(
            (e) => {
                E.default.track(ey.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: n?.sessionId,
                    page_type: l,
                    page_category: n?.pageCategory,
                    page_section: n?.pageSection,
                    tile_type: eV,
                    cta_name: e,
                });
            },
            [n?.sessionId, n?.pageCategory, n?.pageSection, l],
        ),
        _ = r.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    f("go_to_game_server_hosting"),
                    (0, eD.pX)(ey.BVt.COLLECTIBLES_SHOP_WITH_TAB(eP.G2.GAME_SERVERS)));
            },
            [f],
        ),
        b = r.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    f("dismiss"),
                    x(!0),
                    !0 === t.isDismissible &&
                        (0, h.d6)(c.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
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
                                      collectibles_shop_session_id: n?.sessionId,
                                      page_type: l,
                                      page_category: n?.pageCategory,
                                      page_section: n?.pageSection,
                                      type: eV,
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
              theme: eH.NJ.DARK,
              children: (e) =>
                  (0, i.jsx)(eR.L, {
                      innerRef: s,
                      onChange: j,
                      threshold: 0,
                      children: (0, i.jsx)("div", {
                          ref: s,
                          className: o()(eF.YB, e),
                          children: (0, i.jsxs)(eL.s, {
                              className: eF.kL,
                              onClick: _,
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
                                              onClick: b,
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
                                              (0, i.jsx)(g.$, {
                                                  variant: "overlay-primary",
                                                  text: B.intl.string(B.t.jVcuVY),
                                                  onClick: _,
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
var eG = l(946052),
    e$ = l(331322),
    eK = l(773669),
    eY = l(480750),
    ez = l(135517),
    eW = l(442036),
    eJ = l(212407),
    eq = l(815280),
    eX = l(60140),
    eZ = l(602051),
    eQ = l(268270);
function e0(e) {
    let { promotion: t, heroBlockRecord: l, heroLogo: n, logoDisplayConfig: s, collectionId: r, isLoading: a } = e;
    return a
        ? (0, i.jsx)("div", { className: eQ.Hw })
        : (0, i.jsxs)("div", {
              className: eQ.Hw,
              children: [
                  (0, i.jsxs)("div", {
                      className: eQ.Wq,
                      children: [
                          null != n &&
                              (0, i.jsx)("img", { className: eQ.rm, src: n, alt: l.name, style: s?.toDesktopStyles() }),
                          null != l.title &&
                              (0, i.jsx)(m.D, { variant: "heading-xxl/bold", color: "text-strong", children: l.title }),
                          null != l.summary &&
                              "" !== l.summary &&
                              (0, i.jsx)(e$.B, {
                                  onClick: (e) => (0, eY.h)(e, t, eZ.S.HOME),
                                  children: (0, i.jsx)(M.E, {
                                      variant: "text-sm/normal",
                                      className: o()(eQ.Tm, eQ.vd),
                                      style: { color: null != l.bannerTextColor ? l.bannerTextColor : void 0 },
                                      children: l.summary,
                                  }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(ez.A, { collectionId: r, variant: "condensed", surface: eZ.S.HOME }),
              ],
          });
}
let e1 = function (e) {
    let { promotion: t, heroBlock: l, isLoading: n, handleTransition: s, tab: a } = e,
        u = (0, Z.bG)([et.default], () => et.default.getCurrentUser()),
        c = (0, Z.bG)([eK.default], () => eK.default.locale),
        d = (0, p.uM)(),
        { analyticsLocations: m } = (0, $.Ay)(G.A.COLLECTIBLES_SHOP_HERO),
        g = r.useMemo(() => (0, C.HF)(t, l), [t, l]),
        h = r.useMemo(() => (0, C.O8)(t, l, a, c), [t, l, a, c]),
        {
            bannerDisplayConfig: x,
            logoDisplayConfig: f,
            heroLogo: _,
            heroBannerStatic: b,
            heroBannerAnimated: j,
        } = (0, eJ.Kk)(h),
        v = x?.responsive ?? !1,
        S = x?.backgroundStyle;
    function y() {
        (s?.({ sourceButton: "shop latest category hero", categorySkuId: h.categorySkuId, isInternalShopDeeplink: !0 }),
            E.default.track(ey.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: d?.sessionId,
                sku_id: h.categorySkuId,
                page_type: a,
                page_section: d?.pageSection,
                page_category: d?.pageCategory,
                cta_name: "shop latest category hero button",
            }),
            (0, eY.l)(t, eZ.S.HOME, eZ.Z.VIEW_ALL_ITEMS_CLICKED));
    }
    return null == u || null == g
        ? null
        : (0, i.jsx)($.f5, {
              value: m,
              children: (0, i.jsxs)("div", {
                  className: eQ.os,
                  children: [
                      (0, i.jsx)("div", {
                          className: o()(eQ.vK, { [eQ.no]: v }),
                          style: null != S ? { background: S } : void 0,
                          children: null != b && (0, i.jsx)(eq.A, { bannerStatic: b, isResponsive: v }),
                      }),
                      (0, i.jsxs)("div", {
                          className: eQ.xX,
                          children: [
                              (0, i.jsx)("div", {
                                  className: eQ.zl,
                                  style: null != S ? { background: S } : void 0,
                                  children:
                                      null != b &&
                                      (0, i.jsx)(eq.A, { bannerStatic: b, bannerAnimated: j, isResponsive: v }),
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
                                                              heroBlockRecord: h,
                                                              heroLogo: _,
                                                              logoDisplayConfig: f,
                                                              collectionId: l.categorySkuId,
                                                              isLoading: n,
                                                          }),
                                                      }),
                                                      (0, i.jsx)(eW.A, { onShopCollectionClick: y, className: eQ.ti }),
                                                  ],
                                              }),
                                      }),
                                      (0, i.jsx)(eX.A, {
                                          heroBlockRecord: h,
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
var e2 = l(172218),
    e5 = l(28863),
    e4 = l(9530);
let e9 = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: l } = e,
        n = (0, e2.K)(
            (e) => {
                l?.(e);
            },
            0.33,
            null != l,
        ),
        { bannerUrl: s, bannerAnimatedUrl: r } = (0, eJ.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        o = null != t.body && "" !== t.body,
        u = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, i.jsxs)("div", {
        ref: n,
        className: e4.BX,
        children: [
            (0, i.jsx)("div", {
                className: e4.vK,
                children: null != s && (0, i.jsx)(eq.A, { bannerStatic: s, bannerAnimated: r }),
            }),
            (0, i.jsx)("div", {
                className: e4.HQ,
                children: (0, i.jsxs)("div", {
                    className: e4.Yn,
                    children: [
                        null != t.endTime ? (0, i.jsx)(U, { endDate: t.endTime, size: "lg" }) : null,
                        (0, i.jsx)(m.D, {
                            variant: "heading-xxl/bold",
                            className: e4.DD,
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
                                              className: e4.CU,
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
var e6 = l(449543),
    e3 = l(197935),
    e8 = l(275161),
    e7 = l(554661);
function te(e) {
    return e.skuId;
}
function tt(e) {
    let { product: t, index: l, shelfName: n, prioritizedCurrency: s, listItemProps: r } = e;
    return (0, i.jsx)(p.R9, {
        newValue: { tilePosition: l, pageSection: n, categoryPosition: 2 },
        children: (0, i.jsx)(eo.A, { skuId: t.skuId, prioritizedCurrency: s, listItemProps: r }),
    });
}
let tl = function (e) {
    let { shelf: t, handleTransition: l, tab: n } = e,
        s = (0, Z.bG)([et.default], () => et.default.getCurrentUser()),
        a = (0, eu.Mk)(n),
        u = (0, Z.bG)([es.A], () => (null != t.categorySkuId ? es.A.getCategory(t.categorySkuId) : void 0)),
        c = (0, ev.A)(),
        d = r.useMemo(() => c(t.rankedSkuIds), [t.rankedSkuIds, c]),
        h = (0, eC.X)(d),
        { analyticsLocations: x } = (0, $.Ay)(G.A.COLLECTIBLES_SHOP_SHELF),
        f = (0, e8.Y)("shelf_block"),
        E = r.useMemo(() => h.filter((e) => null != es.A.getCategoryForProduct(e.skuId)), [h]),
        p = r.useCallback(() => {
            l({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: u?.isOrbsExclusive === !0 && n !== eP.G2.ORBS,
            });
        }, [t.categorySkuId, u, l, n]);
    if (null == s || 0 === h.length) return null;
    let _ = t.buttonText ?? B.intl.formatToPlainString(B.t.bc9RBE, { category_name: t.name }),
        b = t.showButton,
        j = t.desktopBackgroundImage,
        v = null != j;
    return (0, i.jsx)($.f5, {
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
                                b &&
                                    (0, i.jsx)(g.$, {
                                        variant: v ? "overlay-primary" : "secondary",
                                        text: _,
                                        onClick: p,
                                    }),
                            ],
                        }),
                        f
                            ? (0, i.jsx)(e3.A, {
                                  gap: "xl",
                                  edgeFade: v ? "sm" : void 0,
                                  items: E,
                                  getItemKey: te,
                                  maintainFocusOnReorder: !0,
                                  renderItem: (e, l, n) =>
                                      (0, i.jsx)(
                                          tt,
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
                            : (0, i.jsx)(e6.A, {
                                  gap: "xl",
                                  edgeFade: v ? "sm" : void 0,
                                  children: E.map((e, l) =>
                                      (0, i.jsx)(
                                          tt,
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
var tn = l(465794),
    ts = l(69236),
    ti = l(44724),
    tr = l(421108),
    ta = l(482358),
    to = l(202541);
let tu = function (e) {
    let {
            applicationId: t,
            headerText: l,
            subheaderText: n,
            gradientColors: s,
            gradientAngle: a,
            skuIds: o,
            tab: u,
            endTime: c,
            ctaType: d = "storefront",
            logoUrl: m,
            termsUrl: g,
            backgroundImageUrl: h,
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
                          node: (0, i.jsx)(tn.A, {
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
        headerText: l,
        subheaderText: n,
        logoUrl: m,
        cta: E,
        timeLeftText: x,
        termsUrl: g,
        backgroundImageUrl: h,
        analyticsSection: "slayer-storefront-promotional-banner",
        analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
        analyticsImpressionType: "social_layer_storefront_promotional_banner",
        backgroundGradient: s.length > 0 ? `linear-gradient(${a}deg, ${s.join(", ")})` : void 0,
    });
};
var tc = l(654264),
    td = l(815021),
    tm = l(939249),
    tg = l(975571),
    th = l(597783);
let tx = function (e) {
        let { wideBannerBlock: t, tab: l } = e,
            n = es.A.getCategoryByStoreListingId(t.categoryStoreListingId),
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
        let _ = n?.skuId ?? "",
            { handleCardVisibilityChange: b } = (0, th.Z)(_, "home", "marketing wide banner"),
            j = (0, p.uM)(),
            { bannerURL: v } = (0, eJ.w$)(t),
            C = l === eP.G2.ORBS,
            S = null != t.ctaRoute && "" !== t.ctaRoute,
            y = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || S),
            I = null != t.logoURL && "" !== t.logoURL,
            N = r.useCallback(() => {
                if ((f(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, h.$l)(c.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: eB.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            A = r.useCallback(
                (e) => {
                    E.default.track(ey.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: j?.sessionId,
                        sku_id: _,
                        page_type: l,
                        page_section: j?.pageSection,
                        page_category: j?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(j?.tilePosition),
                        cta_name: e,
                    });
                },
                [j, _, l],
            ),
            k = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((A(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    l = parseInt(t[2], 10);
                                (0, ti.default)({ guildId: e, pageIndex: l });
                            }
                        } else (0, eD.pX)(e);
                    }
                },
                [t.ctaRoute, A],
            );
        if (null == v || x) return null;
        let R = o()(Y.nM, Y.Tq, Y.TS, Y.YB, { [Y._1]: C, [Y.vb]: S }),
            T = (0, i.jsxs)(i.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, i.jsx)("div", {
                            className: Y.Mh,
                            children: (0, i.jsx)(td.J, {
                                size: "sm",
                                onClick: (e) => {
                                    (e.stopPropagation(), N());
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
                                              helpdeskArticle: tg.A.getArticleURL(ey.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                y &&
                                    (0, i.jsxs)("div", {
                                        className: Y.nP,
                                        children: [
                                            (0, i.jsx)(g.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    (e.stopPropagation(), k(t.ctaText ?? B.intl.string(B.t.jVcuVY)));
                                                },
                                                text: t.ctaText ?? B.intl.string(B.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? B.intl.formatToPlainString(B.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            I && (0, i.jsx)("img", { src: t.logoURL, alt: "", className: Y.bU }),
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
                (0, i.jsx)(eR.L, {
                    innerRef: s,
                    onChange: b,
                    threshold: 0,
                    children: S
                        ? (0, i.jsx)(tm.D, { innerRef: s, onClick: () => k(null), className: o()(e, R), children: T })
                        : (0, i.jsx)("div", { ref: s, className: o()(e, R), children: T }),
                }),
        });
    },
    tf = (e) => {
        let { handleTransition: t, numVisibleItems: l, isFetchingCategories: n, tab: s } = e,
            { noCache: a, includeUnpublished: d } = (0, A.A)(),
            [m, g] = r.useState(!1),
            E = (0, p.uM)(),
            _ = E?.sessionId ?? "",
            N = (0, x.H)({ location: "collectibles_shop_feed" }),
            { promotion: k, isFetchingPromotion: R } = (0, j.TI)();
        r.useEffect(() => {
            (0, S.z)({
                sessionId: _,
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
            } = (0, v.y)(s, { noCache: a, includeUnpublished: d, logPerf: !0 }, { sessionId: _, tab: s }),
            D = r.useCallback(() => {
                M();
            }, [M]);
        return (r.useEffect(() => {
            null != L ||
                T ||
                0 === O.length ||
                (0, S.z)({
                    sessionId: _,
                    checkpoint: S.t.SHOP_RENDERED,
                    tab: s,
                    unpublishedCategoriesShown: d,
                    cacheDisabled: a,
                });
        }, [L, T, O.length, d, a, _, s]),
        null != L)
            ? (0, i.jsx)(I.h, { onRetry: D, errorOrigin: I.A.SHOP_PAGE, errorMessage: L.message })
            : T || 0 === O.length
              ? (0, i.jsxs)("div", {
                    className: o()(Y.g4, Y.Of),
                    children: [
                        (0, i.jsx)(eG.A, { isLoading: T || R, handleTransition: t, tab: s }),
                        (0, i.jsx)(J, { isLoading: T, handleTransition: t, categories: [] }),
                        (0, i.jsx)(ek, {
                            isLoading: T,
                            title: s === eP.G2.ORBS ? B.intl.string(B.t.dFgeuZ) : B.intl.string(B.t.NSv5KV),
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
                                x = !1;
                            switch (e.type) {
                                case u.g.HERO:
                                    let E = (0, C.HF)(k, e);
                                    if (
                                        null != k &&
                                        E?.subtype === f.h5.TAKEOVER &&
                                        (null == k.endsAt || null != (0, y.X)(k.endsAt))
                                    ) {
                                        d = (0, i.jsx)(
                                            e1,
                                            { promotion: k, isLoading: R, handleTransition: t, heroBlock: e, tab: s },
                                            a,
                                        );
                                        break;
                                    }
                                    d = (0, i.jsx)(
                                        eG.A,
                                        { isLoading: R, handleTransition: t, heroBlock: e, tab: s },
                                        a,
                                    );
                                    break;
                                case u.g.FEATURED:
                                    d = (0, i.jsx)(
                                        J,
                                        { isLoading: !1, handleTransition: t, featuredBlockRecord: e },
                                        a,
                                    );
                                    break;
                                case u.g.FEED:
                                    let p = e.sortedSkuIds;
                                    d = (0, i.jsx)(
                                        ek,
                                        {
                                            title:
                                                s === eP.G2.ORBS
                                                    ? B.intl.string(B.t.dFgeuZ)
                                                    : B.intl.string(B.t.NSv5KV),
                                            isLoading: n,
                                            numVisibleItems: l,
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
                                            { isDismissed: l } = (0, h.En)(c.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (l) return null;
                                    }
                                    d = (0, i.jsx)(tx, { wideBannerBlock: e, tab: s }, a);
                                    break;
                                case u.g.SHELF:
                                    d = (0, i.jsx)(tl, { handleTransition: t, shelf: e, tab: s }, a);
                                    break;
                                case u.g.COUNTDOWN_TIMER:
                                    ((d = (0, i.jsx)(V, { countdownTimerBlock: e, isVisible: m }, a)), (x = !0));
                                    break;
                                case u.g.IMMERSIVE_BANNER:
                                    d = (0, i.jsx)(
                                        e9,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => g(!e) },
                                        a,
                                    );
                                    break;
                                case u.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !N ||
                                        (!0 === e.isDismissible &&
                                            (0, h.En)(c.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, i.jsx)(
                                        b,
                                        {
                                            blockType: e.type,
                                            children: (0, i.jsx)(ew, { gameServerHostingBannerBlock: e, tab: s }),
                                        },
                                        a,
                                    );
                                case u.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, i.jsx)(
                                        b,
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
                                b,
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
        let { handleTransition: t, tab: l, transitionState: n } = e,
            s = r.useRef(null),
            { handleScroll: a } = (0, k.r)(s, l),
            [o, u] = r.useState(!1),
            c = (0, N.U)(),
            h = (0, p.uM)(),
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
                                tab: l,
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
                                                (0, i.jsx)(g.$, {
                                                    variant: "primary",
                                                    text: B.intl.string(B.t.AfrvRD),
                                                    onClick: () => {
                                                        (t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                            E.default.track(ey.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: h?.sessionId,
                                                                page_type: l,
                                                                page_category:
                                                                    l === eP.G2.HOME ? void 0 : h?.pageCategory,
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
                    (0, i.jsx)(tc.j, { isVisible: o, transitioning: n === eP.Pf.OUT }),
                ],
            })
        );
    };
