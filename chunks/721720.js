l.d(t, { A: () => tU });
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
    I = l(808598),
    y = l(599062),
    N = l(159439),
    k = l(998694),
    R = l(415926),
    A = l(941143),
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
    return (0, i.jsxs)(A.animated.div, {
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
    en = l(927578),
    es = l(590180),
    ei = l(395856),
    er = l(503089),
    ea = l(511265),
    eo = l(682301),
    eu = l(258245),
    ec = l(561769),
    ed = l(484469),
    em = l(621466),
    eg =
        (((s = {}).MOUNTED = "mounted"),
        (s.SORT_OUT = "sort-out"),
        (s.SORT_IN = "sort-in"),
        (s.SHUFFLE_OUT = "shuffle-out"),
        (s.SHUFFLE_IN = "shuffle-in"),
        (s.FINISHED = "finished"),
        s),
    eh = l(401864),
    ex = l(124987),
    ef = l(946716);
let eE = {
    [X.RECENT]: { sortType: ex.$.RECENCY, sortDirection: eh.A.DESC },
    [X.PRICE_LOW_TO_HIGH]: { sortType: ex.$.PRICE, sortDirection: eh.A.ASC },
};
l(667532);
var ep = l(435558),
    e_ = l.n(ep),
    eb = l(153488),
    ej = l(993408),
    ev = l(313276),
    eC = l(206077),
    eS = l(623373),
    eI = l(652215),
    ey = l(783857),
    eN = l(866665),
    ek = l(939249),
    eR = l(885574),
    eA = l(975807),
    eT = l(975571),
    eL = l(373599);
let eO = function (e) {
        let { personalizedResults: t, label: l } = e,
            n = l ?? B.intl.string(B.t.NSv5KV);
        return (0, i.jsxs)("div", {
            className: eL.L,
            children: [
                (0, i.jsx)(m.D, { variant: "heading-lg/semibold", children: n }),
                t &&
                    (0, i.jsx)(eN.m, {
                        text: B.intl.string(B.t["3taPdj"]),
                        position: "top",
                        "aria-label": B.intl.string(B.t["3taPdj"]),
                        children: (0, i.jsx)(ek.D, {
                            onClick: () => (0, eA.A)(eT.A.getArticleURL(eI.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: eL.s,
                            children: (0, i.jsx)(eR.CircleInformationIcon, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    eM = [],
    eD = function (e) {
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
            h = (0, ec.Mk)(a),
            x = (0, ey.yB)("FeedBlock"),
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
                    s = (0, Z.bG)([eb.A], () => eb.A.hasConsented(eI.YAq.PERSONALIZATION)),
                    i = r.useMemo(() => t?.[X.RECOMMENDED] ?? [], [t]),
                    a = r.useMemo(() => t?.[X.POPULAR] ?? [], [t]),
                    o = i.length > 0 && s,
                    [u, c] = r.useState(o ? X.RECOMMENDED : X.POPULAR),
                    d = (0, Z.bG)([es.A], () => es.A.productsWithVariantsAsGroup),
                    m = r.useMemo(() => (0, ej.CE)(d), [d]),
                    g = (0, ev.A)(),
                    h = (0, ea.p)(),
                    [x, f] = r.useState([]),
                    E = r.useCallback(() => {
                        (c(X.RANDOM), f(e_().shuffle(m)));
                    }, [m]);
                r.useEffect(() => {
                    f(e_().shuffle(m));
                }, [m]);
                let p = r.useMemo(() => {
                        let e = [];
                        switch (u) {
                            case X.RECENT:
                                e = m;
                                break;
                            case X.PRICE_LOW_TO_HIGH:
                                e = (0, ej.bf)([...m], l, n);
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
            I = f === X.RANDOM,
            y = (0, ei.$)("feed_block"),
            [N, k] = r.useState(0),
            R = `${f}:${!0 === c}:${N}`,
            [A, T] = r.useState({ key: R, extra: 0 }),
            L = A.key === R ? A.extra : 0;
        A.key !== R && T({ key: R, extra: 0 });
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
                                let l = eE[e];
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
                let g = null != d && d.sortIdentityKey === u ? d : null;
                return { skuIds: g?.skuIds ?? null, isLoading: d?.key !== c, hasMore: g?.hasMore ?? !1 };
            })({ sortType: f, orbsSupportedOnly: c, numVisibleItems: s + L, enabled: y, shuffleNonce: N }),
            U = O ?? j,
            F = r.useMemo(() => U.slice(0, s + L + (I ? 32 : 8)), [U, s, L, I]),
            V = (0, eo.hv)(y ? F : eM, { needsCategory: !1 }),
            w = (0, er.c)("feed_block"),
            K = (0, ea.p)(),
            z = r.useMemo(() => {
                if (!y) return F;
                let e = new Set();
                return F.filter((t) => {
                    let l = V[t];
                    if (
                        l?.state === "error" ||
                        (!w && t === q.j.PREMIUM_TIER_2_1_DAY) ||
                        (l?.product != null && 0 === K([l.product]).length)
                    )
                        return !1;
                    let n = l?.product?.storeListingId;
                    if (null != n) {
                        if (e.has(n)) return !1;
                        e.add(n);
                    }
                    return !0;
                });
            }, [y, F, V, w, K]),
            W = r.useMemo(
                () =>
                    !!y &&
                    !P &&
                    F.every((e) => {
                        let t = V[e]?.state;
                        return "ready" === t || "error" === t;
                    }),
                [y, P, F, V],
            ),
            J = !I && H && L < 16,
            eh = s - z.length;
        if (W && eh > 0 && J) {
            let e = Math.min(16, L + eh + 8);
            e !== L && T({ key: R, extra: e });
        }
        let ex = (0, Z.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
            ep = (0, Z.bG)([el.A], () => el.A.isFocused()),
            eN = !ex && ep,
            {
                animationPhase: ek,
                startAnimation: eR,
                signalDataReady: eA,
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
            W && eA();
        }, [W, eA]);
        let eT = (0, p.uM)(),
            eL = eT?.sessionId ?? "",
            { analyticsLocations: eD } = (0, $.Ay)(G.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            eP = r.useRef(null),
            eB = r.useRef(null),
            [eH, eU] = r.useState(!1),
            eF = r.useCallback(
                (e) => {
                    (eU(!1),
                        eR({ isShuffling: !1, onOutroComplete: () => _(e), returnRef: eB }),
                        E.default.track(eI.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: eL,
                            sort_type: e,
                        }));
                },
                [eR, _, eL],
            );
        if (null == d) return null;
        function eV(e, t) {
            let l;
            return eN && ek === eg.SHUFFLE_OUT
                ? (0, i.jsx)("div", { className: Y.Z2, children: (0, i.jsx)(ed.A, {}) }, `${e}-${t}`)
                : (eN &&
                      (ek === eg.SORT_OUT
                          ? (l = Y.MW)
                          : ek === eg.SHUFFLE_IN
                            ? (l = Y.aS)
                            : ek === eg.SORT_IN && (l = Y.F7)),
                  (0, i.jsx)(
                      p.R9,
                      {
                          newValue: { tilePosition: t, pageSection: "popular picks", categoryPosition: 2 },
                          children: (0, i.jsx)("div", {
                              className: l,
                              children: (0, i.jsx)(eu.A, {
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
            value: eD,
            children: (0, i.jsxs)("div", {
                className: o()(Y.lD, Y.YB),
                children: [
                    (0, i.jsxs)("div", {
                        className: Y.$6,
                        children: [
                            (0, i.jsx)(eO, { label: l, personalizedResults: S }),
                            (0, i.jsxs)("div", {
                                className: o()(Y.IE, { [ey.jP]: x }),
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
                                                ref: eB,
                                                children: (0, i.jsx)(Q.l, {
                                                    label: B.intl.string(B.t.uaX705),
                                                    hideLabel: !0,
                                                    options: v,
                                                    onSelectionChange: eF,
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
                                            buttonRef: eP,
                                            onClick: function () {
                                                (eU(!0),
                                                    eR({
                                                        isShuffling: !0,
                                                        onOutroComplete: () => {
                                                            (C(), k((e) => e + 1));
                                                        },
                                                        returnRef: eP,
                                                        holdIntroUntilReady: y,
                                                    }),
                                                    E.default.track(eI.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                        page_session_id: eL,
                                                    }));
                                            },
                                            disabled: ek !== eg.MOUNTED && ek !== eg.FINISHED,
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(D.A, {
                                "aria-live": "polite",
                                role: "status",
                                children: eH && ek === eg.FINISHED ? B.intl.string(B.t["3Pml0e"]) : "",
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
                              ? eN && ek === eg.SHUFFLE_OUT
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
                                    : z.slice(0, s).map((e, t) => eV(e, t))
                              : b
                                    .slice(0, s)
                                    .map((e, t) =>
                                        null == e || null == es.A.getCategoryForProduct(e.skuId)
                                            ? null
                                            : eV(e.skuId, t),
                                    ),
                    }),
                ],
            }),
        });
    };
var eP = l(269115),
    eB = l(43990),
    eH = l(890856),
    eU = l(408278),
    eF = l(789645),
    eV = l(976860),
    ew = l(758836),
    eG = l(49999),
    e$ = l(818348),
    eK = l(394107),
    eY = l(196064);
let ez = "GAME_SERVER_HOSTING_BANNER";
function eW(e) {
    let { gameServerHostingBannerBlock: t, tab: l } = e,
        n = (0, p.uM)(),
        s = r.useRef(null),
        a = r.useRef(!1),
        u = r.useRef(null),
        [d, x] = r.useState(!1),
        f = r.useCallback(
            (e) => {
                E.default.track(eI.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: n?.sessionId,
                    page_type: l,
                    page_category: n?.pageCategory,
                    page_section: n?.pageSection,
                    tile_type: ez,
                    cta_name: e,
                });
            },
            [n?.sessionId, n?.pageCategory, n?.pageSection, l],
        ),
        _ = r.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    f("go_to_game_server_hosting"),
                    (0, eV.pX)(eI.BVt.COLLECTIBLES_SHOP_WITH_TAB(ew.G2.GAME_SERVERS)));
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
                            dismissAction: eG.i.USER_DISMISS,
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
                                  E.default.track(eI.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: n?.sessionId,
                                      page_type: l,
                                      page_category: n?.pageCategory,
                                      page_section: n?.pageSection,
                                      type: ez,
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
        : (0, i.jsx)(eB.N, {
              theme: e$.NJ.DARK,
              children: (e) =>
                  (0, i.jsx)(eP.L, {
                      innerRef: s,
                      onChange: j,
                      threshold: 0,
                      children: (0, i.jsx)("div", {
                          ref: s,
                          className: o()(eY.YB, e),
                          children: (0, i.jsxs)(eH.s, {
                              className: eY.kL,
                              onClick: _,
                              "aria-label": B.intl.string(eK.default["34GMP9"]),
                              children: [
                                  (0, i.jsx)("img", {
                                      className: eY.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, i.jsx)("div", { className: eY.f5, "aria-hidden": !0 }),
                                  !0 === t.isDismissible &&
                                      (0, i.jsx)("div", {
                                          className: eY.b,
                                          children: (0, i.jsx)(eU.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: eF.P,
                                              onClick: b,
                                              "aria-label": B.intl.string(B.t.WAI6xu),
                                          }),
                                      }),
                                  (0, i.jsx)("div", {
                                      className: eY.jE,
                                      children: (0, i.jsxs)("div", {
                                          className: eY.rF,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: eY.Z,
                                                  children: [
                                                      (0, i.jsx)(m.D, {
                                                          className: eY.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: B.intl.string(eK.default["34GMP9"]),
                                                      }),
                                                      (0, i.jsx)(M.E, {
                                                          className: eY.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: B.intl.string(eK.default.xMpGuO),
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
var eJ = l(946052),
    eq = l(331322),
    eX = l(773669),
    eZ = l(480750),
    eQ = l(135517),
    e0 = l(442036),
    e1 = l(212407),
    e2 = l(815280),
    e5 = l(60140),
    e6 = l(602051),
    e3 = l(268270);
function e8(e) {
    let { promotion: t, heroBlockRecord: l, heroLogo: n, logoDisplayConfig: s, collectionId: r, isLoading: a } = e;
    return a
        ? (0, i.jsx)("div", { className: e3.Hw })
        : (0, i.jsxs)("div", {
              className: e3.Hw,
              children: [
                  (0, i.jsxs)("div", {
                      className: e3.Wq,
                      children: [
                          null != n &&
                              (0, i.jsx)("img", { className: e3.rm, src: n, alt: l.name, style: s?.toDesktopStyles() }),
                          null != l.title &&
                              (0, i.jsx)(m.D, { variant: "heading-xxl/bold", color: "text-strong", children: l.title }),
                          null != l.summary &&
                              "" !== l.summary &&
                              (0, i.jsx)(eq.B, {
                                  onClick: (e) => (0, eZ.h)(e, t, e6.S.HOME),
                                  children: (0, i.jsx)(M.E, {
                                      variant: "text-sm/normal",
                                      className: o()(e3.Tm, e3.vd),
                                      style: { color: null != l.bannerTextColor ? l.bannerTextColor : void 0 },
                                      children: l.summary,
                                  }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(eQ.A, { collectionId: r, variant: "condensed", surface: e6.S.HOME }),
              ],
          });
}
let e9 = function (e) {
    let { promotion: t, heroBlock: l, isLoading: n, handleTransition: s, tab: a } = e,
        u = (0, Z.bG)([et.default], () => et.default.getCurrentUser()),
        c = (0, Z.bG)([eX.default], () => eX.default.locale),
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
        } = (0, e1.Kk)(h),
        v = x?.responsive ?? !1,
        S = x?.backgroundStyle;
    function I() {
        (s?.({ sourceButton: "shop latest category hero", categorySkuId: h.categorySkuId, isInternalShopDeeplink: !0 }),
            E.default.track(eI.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: d?.sessionId,
                sku_id: h.categorySkuId,
                page_type: a,
                page_section: d?.pageSection,
                page_category: d?.pageCategory,
                cta_name: "shop latest category hero button",
            }),
            (0, eZ.l)(t, e6.S.HOME, e6.Z.VIEW_ALL_ITEMS_CLICKED));
    }
    return null == u || null == g
        ? null
        : (0, i.jsx)($.f5, {
              value: m,
              children: (0, i.jsxs)("div", {
                  className: e3.os,
                  children: [
                      (0, i.jsx)("div", {
                          className: o()(e3.vK, { [e3.no]: v }),
                          style: null != S ? { background: S } : void 0,
                          children: null != b && (0, i.jsx)(e2.A, { bannerStatic: b, isResponsive: v }),
                      }),
                      (0, i.jsxs)("div", {
                          className: e3.xX,
                          children: [
                              (0, i.jsx)("div", {
                                  className: e3.zl,
                                  style: null != S ? { background: S } : void 0,
                                  children:
                                      null != b &&
                                      (0, i.jsx)(e2.A, { bannerStatic: b, bannerAnimated: j, isResponsive: v }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: e3.mz,
                                  children: [
                                      (0, i.jsx)(eB.N, {
                                          theme: eI.NJ8.DARK,
                                          children: (e) =>
                                              (0, i.jsxs)("div", {
                                                  className: e,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: e3.bC,
                                                          children: (0, i.jsx)(e8, {
                                                              promotion: t,
                                                              heroBlockRecord: h,
                                                              heroLogo: _,
                                                              logoDisplayConfig: f,
                                                              collectionId: l.categorySkuId,
                                                              isLoading: n,
                                                          }),
                                                      }),
                                                      (0, i.jsx)(e0.A, { onShopCollectionClick: I, className: e3.ti }),
                                                  ],
                                              }),
                                      }),
                                      (0, i.jsx)(e5.A, {
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
var e4 = l(172218),
    e7 = l(28863),
    te = l(9530);
let tt = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: l } = e,
        n = (0, e4.K)(
            (e) => {
                l?.(e);
            },
            0.33,
            null != l,
        ),
        { bannerUrl: s, bannerAnimatedUrl: r } = (0, e1.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        o = null != t.body && "" !== t.body,
        u = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, i.jsxs)("div", {
        ref: n,
        className: te.BX,
        children: [
            (0, i.jsx)("div", {
                className: te.vK,
                children: null != s && (0, i.jsx)(e2.A, { bannerStatic: s, bannerAnimated: r }),
            }),
            (0, i.jsx)("div", {
                className: te.HQ,
                children: (0, i.jsxs)("div", {
                    className: te.Yn,
                    children: [
                        null != t.endTime ? (0, i.jsx)(U, { endDate: t.endTime, size: "lg" }) : null,
                        (0, i.jsx)(m.D, {
                            variant: "heading-xxl/bold",
                            className: te.DD,
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
                                          (0, i.jsx)(e7.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: te.CU,
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
var tl = l(197935),
    tn = l(554661);
function ts(e) {
    return e.skuId;
}
function ti(e) {
    let { product: t, index: l, shelfName: n, prioritizedCurrency: s, listItemProps: r } = e;
    return (0, i.jsx)(p.R9, {
        newValue: { tilePosition: l, pageSection: n, categoryPosition: 2 },
        children: (0, i.jsx)(eu.A, { skuId: t.skuId, prioritizedCurrency: s, listItemProps: r }),
    });
}
let tr = function (e) {
    let { shelf: t, handleTransition: l, tab: n } = e,
        s = (0, Z.bG)([et.default], () => et.default.getCurrentUser()),
        a = (0, ec.Mk)(n),
        u = (0, Z.bG)([es.A], () => (null != t.categorySkuId ? es.A.getCategory(t.categorySkuId) : void 0)),
        c = (0, ev.A)(),
        d = r.useMemo(() => c(t.rankedSkuIds), [t.rankedSkuIds, c]),
        h = (0, eC.X)(d),
        { analyticsLocations: x } = (0, $.Ay)(G.A.COLLECTIBLES_SHOP_SHELF),
        f = r.useMemo(() => h.filter((e) => null != es.A.getCategoryForProduct(e.skuId)), [h]),
        E = r.useCallback(() => {
            l({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: u?.isOrbsExclusive === !0 && n !== ew.G2.ORBS,
            });
        }, [t.categorySkuId, u, l, n]);
    if (null == s || 0 === h.length) return null;
    let p = t.buttonText ?? B.intl.formatToPlainString(B.t.bc9RBE, { category_name: t.name }),
        _ = t.showButton,
        b = t.desktopBackgroundImage,
        j = null != b;
    return (0, i.jsx)($.f5, {
        value: x,
        children: (0, i.jsxs)("div", {
            className: o()(tn.mu, Y.YB, j ? tn.VA : tn.Ti),
            children: [
                j && (0, i.jsx)("img", { className: tn.iL, src: b, alt: "", "aria-hidden": !0 }),
                (0, i.jsxs)("div", {
                    className: tn.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tn.wx,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    style: j ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                _ &&
                                    (0, i.jsx)(g.$, {
                                        variant: j ? "overlay-primary" : "secondary",
                                        text: p,
                                        onClick: E,
                                    }),
                            ],
                        }),
                        (0, i.jsx)(tl.A, {
                            gap: "xl",
                            edgeFade: j ? "sm" : void 0,
                            items: f,
                            getItemKey: ts,
                            maintainFocusOnReorder: !0,
                            renderItem: (e, l, n) =>
                                (0, i.jsx)(
                                    ti,
                                    {
                                        product: e,
                                        index: n,
                                        shelfName: t.name,
                                        prioritizedCurrency: a,
                                        listItemProps: l,
                                    },
                                    e.skuId,
                                ),
                        }),
                    ],
                }),
            ],
        }),
    });
};
var ta = l(465794),
    to = l(69236),
    tu = l(44724),
    tc = l(421108),
    td = l(482358),
    tm = l(202541);
let tg = function (e) {
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
        x = (0, tc.ur)(c) ?? void 0,
        f = (0, to.W8)(),
        E = r.useMemo(() => {
            if ("none" !== d)
                return "nitro" !== d || f
                    ? {
                          kind: "button",
                          text: B.intl.string(B.t.apFNLU),
                          onClick: () => (0, tu.default)({ applicationId: t }),
                          onMouseDown: () => (0, tu.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, i.jsx)(ta.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: tm.pe.TIER_2,
                              buttonTextOverride: B.intl.string(B.t.pj0XBN),
                          }),
                      };
        }, [d, t, f]);
    return (0, i.jsx)(td.A, {
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
var th = l(199510),
    tx = l.n(th),
    tf = l(575593),
    tE = l(531142),
    tp = l(559106),
    t_ = l(765671),
    tb = l(713517),
    tj = l(161918);
let tv = (0, l(945810).mj)({
    name: "2026-10-collectibles-interactive-jumble-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tC = l(597783),
    tS = l(536572),
    tI = l(929283),
    ty = l(171934);
let tN = [],
    tk = [
        "1212569433839636530",
        "1144308439720394944",
        "1462116613674373345",
        "1462116613632426014",
        "1432550258134487124",
        "1516559294819074088",
        "1432550258239602810",
        "1459194821255237723",
        "1495805817792761976",
        "1212570343567261736",
        "1271174640026255380",
        "1432550258730078258",
        "1538990902306152558",
        "1287835633787732070",
        "1538991362601656420",
        "1404558257174876300",
        "1256321669467865088",
        "1271174732577767626",
        "1402472280642289775",
        "1483911783268876489",
        "1287835633615765524",
        "1545191258564075630",
        "1354894010522800158",
        "1333866045236314327",
        "1533914517329678408",
        "1519795013586911452",
        "1531405732174626986",
        "1516559585601786028",
    ];
function tR(e, t, l) {
    let n = l ? e.transitionOffsetLeft : 0,
        s = l ? -window.innerHeight - 384 - e.verticalOffset : e.verticalOffset;
    return {
        bottom: 0,
        left: t + e.horizontalJitter,
        transform: `translate(${n}px, ${s}px) rotate(${e.rotation}deg)`,
        transitionDelay: e.transitionDelay,
        transitionDuration: e.transitionDuration,
    };
}
function tA(e, t) {
    let l = (0, tj.Mk)()?.tab,
        { handleCardVisibilityChange: n } = (0, tC.Z)(e, l, "jumble product");
    r.useEffect(() => {
        n(t);
    }, [t, n]);
}
function tT(e) {
    let { config: t, baseLeft: l, peaking: n, transitioning: s, product: r, item: a } = e;
    return (
        tA(r.skuId, n),
        (0, i.jsx)("div", {
            className: ty.LY,
            style: tR(t, l, s),
            children: (0, i.jsx)(tI.i, { item: a, className: ty.my }),
        })
    );
}
function tL(e) {
    let { config: t, baseLeft: l, peaking: n, transitioning: s, product: a, item: o } = e,
        u = (0, Z.bG)([et.default], () => et.default.getCurrentUser()),
        c = r.useRef(null),
        { isHoveringOrFocusing: d } = (0, tb.A)(c);
    tA(a.skuId, n);
    let m = (0, tj.Mk)()?.tab,
        g = (0, p.uM)(),
        h = r.useCallback(() => {
            E.default.track(eI.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: g?.sessionId,
                sku_id: a.skuId,
                page_type: m,
                page_section: g?.pageSection,
                page_category: g?.pageCategory,
                tile_type: "JUMBLE_PRODUCT",
                tile_position: String(g?.tilePosition),
            });
        }, [a.skuId, m, g]),
        x = (0, ec.ql)(a, G.A.COLLECTIBLES_SHOP_TRANSITION_JUMBLE_ITEM, h);
    return (0, i.jsx)("div", {
        ref: c,
        className: ty.LY,
        style: tR(t, l, s),
        children: (0, i.jsx)(ek.D, {
            onClick: x,
            "aria-label": (0, tS.s7)(a),
            children: (0, i.jsx)(tI.i, { item: o, className: ty.my, user: u, isHighlighted: d }),
        }),
    });
}
function tO(e) {
    let { peaking: t, transitioning: l } = e,
        { ref: n, width: s } = (0, t_.Ay)(),
        [a] = r.useState(() =>
            tx()(tk).map((e) => ({
                skuId: e,
                verticalOffset: -12 + 36 * Math.random(),
                rotation: -24 + 48 * Math.random(),
                horizontalJitter: -(20 * Math.random()),
                transitionOffsetLeft: -20 - 35 * Math.random(),
                transitionDelay: `${Math.random() / 3}s`,
                transitionDuration: `${ew.H1 - 200 * Math.random()}ms`,
            })),
        ),
        u = (0, ei.$)("shop_transition_jumble"),
        c = tv.useConfig({ location: "shop_transition_jumble" }).enabled,
        d = (0, eo.hv)(u ? tk : tN, { needsCategory: !1, flattenVariants: !0 }),
        m = r.useMemo(() => {
            if (!u) return a;
            let e = a.filter((e) => {
                let t = d[e.skuId]?.product;
                return t?.items[0] != null && t.type === tf.R.AVATAR_DECORATION;
            });
            return e.length > 0 ? e : a;
        }, [u, a, d]),
        g = r.useMemo(() => {
            if (null == s || s <= 0) return [];
            let e = Math.max(1, Math.floor(s / 130)),
                t = s / e;
            return Array.from({ length: e }, (e, l) => ({ config: m[l % m.length], baseLeft: l * t }));
        }, [s, m]),
        h = r.useMemo(() => ({ standalonePreview: u }), [u]);
    return (0, i.jsx)("div", {
        ref: n,
        className: o()(ty.rA, { [ty.Kb]: t }),
        children: (0, i.jsx)(ec.v3.Provider, {
            value: h,
            children: (0, i.jsx)(tE.g.Provider, {
                value: !0 === l || !0 !== t,
                children: g.map((e, n) => {
                    let s,
                        { config: r, baseLeft: a } = e,
                        o = d[r.skuId]?.product ?? es.A.getProduct(r.skuId),
                        u = null != (s = o?.items[0]) && o?.type === tf.R.AVATAR_DECORATION ? s : null;
                    if (null == o || null == u) return null;
                    let m = r.skuId + n,
                        g = { config: r, baseLeft: a, peaking: t, transitioning: l, product: o, item: u };
                    return (0, i.jsx)(
                        p.R9,
                        {
                            newValue: { pageSection: "transition_jumble", tilePosition: n },
                            children: c ? (0, i.jsx)(tL, { ...g }) : (0, i.jsx)(tT, { ...g }),
                        },
                        m,
                    );
                }),
            }),
        }),
    });
}
function tM() {
    return (0, i.jsx)("div", { className: o()(ty.I2, ty.F$) });
}
function tD(e) {
    let { isVisible: t, transitioning: l } = e,
        n = r.useRef(null);
    return (0, i.jsx)(tp.xp, {
        containerRef: n,
        children: (0, i.jsx)("div", {
            className: o()(ty.I2, ty.MU),
            ref: n,
            children: (0, i.jsx)(tO, { peaking: t, transitioning: l }),
        }),
    });
}
var tP = l(815021);
let tB = function (e) {
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
            { handleCardVisibilityChange: b } = (0, tC.Z)(_, "home", "marketing wide banner"),
            j = (0, p.uM)(),
            { bannerURL: v } = (0, e1.w$)(t),
            C = l === ew.G2.ORBS,
            S = null != t.ctaRoute && "" !== t.ctaRoute,
            I = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || S),
            y = null != t.logoURL && "" !== t.logoURL,
            N = r.useCallback(() => {
                if ((f(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, h.$l)(c.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: eG.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            k = r.useCallback(
                (e) => {
                    E.default.track(eI.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            R = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((k(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    l = parseInt(t[2], 10);
                                (0, tu.default)({ guildId: e, pageIndex: l });
                            }
                        } else (0, eV.pX)(e);
                    }
                },
                [t.ctaRoute, k],
            );
        if (null == v || x) return null;
        let A = o()(Y.nM, Y.Tq, Y.TS, Y.YB, { [Y._1]: C, [Y.vb]: S }),
            T = (0, i.jsxs)(i.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, i.jsx)("div", {
                            className: Y.Mh,
                            children: (0, i.jsx)(tP.J, {
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
                        className: o()(Y.Ep, { [Y.Qq]: I }),
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
                                              helpdeskArticle: eT.A.getArticleURL(eI.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                I &&
                                    (0, i.jsxs)("div", {
                                        className: Y.nP,
                                        children: [
                                            (0, i.jsx)(g.$, {
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
                                            y && (0, i.jsx)("img", { src: t.logoURL, alt: "", className: Y.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, i.jsx)(eB.N, {
            theme: C ? void 0 : e$.NJ.DARK,
            children: (e) =>
                (0, i.jsx)(eP.L, {
                    innerRef: s,
                    onChange: b,
                    threshold: 0,
                    children: S
                        ? (0, i.jsx)(ek.D, { innerRef: s, onClick: () => R(null), className: o()(e, A), children: T })
                        : (0, i.jsx)("div", { ref: s, className: o()(e, A), children: T }),
                }),
        });
    },
    tH = (e) => {
        let { handleTransition: t, numVisibleItems: l, isFetchingCategories: n, tab: s } = e,
            { noCache: a, includeUnpublished: d } = (0, k.A)(),
            [m, g] = r.useState(!1),
            E = (0, p.uM)(),
            _ = E?.sessionId ?? "",
            N = (0, x.H)({ location: "collectibles_shop_feed" }),
            { promotion: R, isFetchingPromotion: A } = (0, j.TI)();
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
            ? (0, i.jsx)(y.h, { onRetry: D, errorOrigin: y.A.SHOP_PAGE, errorMessage: L.message })
            : T || 0 === O.length
              ? (0, i.jsxs)("div", {
                    className: o()(Y.g4, Y.Of),
                    children: [
                        (0, i.jsx)(eJ.A, { isLoading: T || A, handleTransition: t, tab: s }),
                        (0, i.jsx)(J, { isLoading: T, handleTransition: t, categories: [] }),
                        (0, i.jsx)(eD, {
                            isLoading: T,
                            title: s === ew.G2.ORBS ? B.intl.string(B.t.dFgeuZ) : B.intl.string(B.t.NSv5KV),
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
                                    let E = (0, C.HF)(R, e);
                                    if (
                                        null != R &&
                                        E?.subtype === f.h5.TAKEOVER &&
                                        (null == R.endsAt || null != (0, I.X)(R.endsAt))
                                    ) {
                                        d = (0, i.jsx)(
                                            e9,
                                            { promotion: R, isLoading: A, handleTransition: t, heroBlock: e, tab: s },
                                            a,
                                        );
                                        break;
                                    }
                                    d = (0, i.jsx)(
                                        eJ.A,
                                        { isLoading: A, handleTransition: t, heroBlock: e, tab: s },
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
                                        eD,
                                        {
                                            title:
                                                s === ew.G2.ORBS
                                                    ? B.intl.string(B.t.dFgeuZ)
                                                    : B.intl.string(B.t.NSv5KV),
                                            isLoading: n,
                                            numVisibleItems: l,
                                            sortedSkuIds: p,
                                            buttonContainerClassName: r?.type === u.g.IMMERSIVE_BANNER ? Y.w : void 0,
                                            tab: s,
                                            orbsSupportedOnly: s === ew.G2.ORBS,
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
                                    d = (0, i.jsx)(tB, { wideBannerBlock: e, tab: s }, a);
                                    break;
                                case u.g.SHELF:
                                    d = (0, i.jsx)(tr, { handleTransition: t, shelf: e, tab: s }, a);
                                    break;
                                case u.g.COUNTDOWN_TIMER:
                                    ((d = (0, i.jsx)(V, { countdownTimerBlock: e, isVisible: m }, a)), (x = !0));
                                    break;
                                case u.g.IMMERSIVE_BANNER:
                                    d = (0, i.jsx)(
                                        tt,
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
                                            children: (0, i.jsx)(eW, { gameServerHostingBannerBlock: e, tab: s }),
                                        },
                                        a,
                                    );
                                case u.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, i.jsx)(
                                        b,
                                        {
                                            blockType: e.type,
                                            children: (0, i.jsx)(tg, {
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
    tU = function (e) {
        let { handleTransition: t, tab: l, transitionState: n } = e,
            s = r.useRef(null),
            { handleScroll: a } = (0, R.r)(s, l),
            [o, u] = r.useState(!1),
            c = (0, N.U)(),
            h = (0, p.uM)(),
            [x, f] = r.useState(ew.md);
        return (
            r.useEffect(() => {
                if (null != s.current) {
                    function e() {
                        if (null == s.current) return;
                        let e = s.current.getDistanceFromBottom();
                        x >= 36 ? u(e < 20) : e <= 200 && f((e) => e + ew.md);
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
                            (0, i.jsx)(tH, {
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
                                                            E.default.track(eI.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: h?.sessionId,
                                                                page_type: l,
                                                                page_category:
                                                                    l === ew.G2.HOME ? void 0 : h?.pageCategory,
                                                                cta_name: "browse the shop button",
                                                            }));
                                                    },
                                                    fullWidth: !0,
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(tM, {}),
                                    ],
                                }),
                        ],
                    }),
                    (0, i.jsx)(tD, { isVisible: o, transitioning: n === ew.Pf.OUT }),
                ],
            })
        );
    };
