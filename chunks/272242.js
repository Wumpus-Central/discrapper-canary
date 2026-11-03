l.d(t, { A: () => tY });
var n,
    s,
    i = l(477900),
    r = l(582128),
    a = l(503698),
    o = l.n(a),
    c = l(651162),
    u = l(554146),
    d = l(689175),
    m = l(534514),
    h = l(821609),
    g = l(501419),
    x = l(196736),
    f = l(174459),
    E = l(440938);
let p = r.createContext(null);
function _(e) {
    let { blockType: t, children: l } = e,
        n = r.useMemo(() => ({ blockType: t }), [t]);
    return (0, i.jsx)(p.Provider, { value: n, children: l });
}
var j = l(304210),
    v = l(755172),
    b = l(100057),
    C = l(599062),
    S = l(998694),
    y = l(415926),
    N = l(941143),
    I = l(607399),
    A = l(946015),
    k = l(717421),
    T = l(834730);
l(321073);
var L = l(140735),
    R = l(496431),
    O = l(105292),
    M = l(302326);
function D(e) {
    let { endDate: t, size: l = "md", className: n, showSeconds: s = !1 } = e,
        { days: r, hours: a, minutes: c, seconds: u } = (0, R.A)(t),
        d = (function (e, t, l, n, s) {
            function i(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let r = [i(e), i(t), i(l)];
            return (s && r.push(i(n)), r.join(":"));
        })(r, a, c, u, s);
    return (0, i.jsxs)("div", {
        className: o()(M.kL, n),
        role: "timer",
        children: [
            d
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, i.jsx)(
                              T.E,
                              {
                                  color: "none",
                                  variant: "md" === l ? "heading-lg/semibold" : "heading-xxl/semibold",
                                  className: M.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, i.jsx)(
                              T.E,
                              {
                                  color: "text-overlay-light",
                                  variant: "md" === l ? "heading-md/semibold" : "heading-xl/semibold",
                                  className: M.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, i.jsx)(L.A, { children: O.intl.format(O.t.j6IyVe, { days: r, hours: a, minutes: c }) }),
        ],
    });
}
var P = l(685879);
let B = r.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: l } = e,
        n = (0, k.z)({
            transform: `translateX(-50%) ${l ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!l,
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsxs)(N.animated.div, {
        className: o()([P.lP, I.Fr && P.yJ]),
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
            (0, i.jsxs)(A.s, {
                direction: A.s.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(T.E, {
                        variant: "text-md/medium",
                        className: P.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, i.jsx)(T.E, {
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
var H = l(424918),
    U = l(793574),
    F = l(688810),
    w = l(196231),
    V = l(105499);
function G(e) {
    let { handleTransition: t, featuredBlockRecord: l } = e;
    return (0, i.jsx)("div", {
        className: o()(V.n9, V.YB),
        children: l?.subblocks.map((e, l) =>
            e.type === H.u.CATEGORY
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
                              w.S,
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
function $(e) {
    let { handleTransition: t, categories: l } = e;
    if (null == l || l.length < 2) return null;
    let [n, s] = l;
    return (0, i.jsx)("div", {
        className: o()(V.n9, V.YB),
        children: (0, i.jsxs)(E.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != n ? n.name : s?.name,
                pageSection: "featured_block",
                tilePosition: +(null == n),
            },
            children: [
                null != n && (0, i.jsx)(w.S, { category: n, enablePreview: !0, handleTransition: t }),
                null != s && (0, i.jsx)(w.S, { category: s, handleTransition: t }),
            ],
        }),
    });
}
let K = function (e) {
    let { isLoading: t, handleTransition: l, categories: n, featuredBlockRecord: s } = e,
        { analyticsLocations: r } = (0, F.Ay)(U.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, i.jsxs)("div", {
              className: o()(V.n9, V.YB),
              children: [
                  (0, i.jsx)("div", { className: o()(V.Jn, V.oT), children: (0, i.jsx)("div", { className: V.uy }) }),
                  (0, i.jsx)("div", { className: o()(V.Jn, V.oT), children: (0, i.jsx)("div", { className: V.uy }) }),
              ],
          })
        : null != s
          ? (0, i.jsx)(F.f5, {
                value: r,
                children: (0, i.jsx)(G, { featuredBlockRecord: s, handleTransition: l, isLoading: !1 }),
            })
          : (0, i.jsx)(F.f5, {
                value: r,
                children: (0, i.jsx)($, { categories: n, handleTransition: l, isLoading: !1 }),
            });
};
var Y = l(334279),
    z =
        (((n = {}).RECOMMENDED = "recommended"),
        (n.POPULAR = "popular"),
        (n.RECENT = "recent"),
        (n.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (n.RANDOM = "random"),
        n),
    W = l(17928),
    q = l(691885),
    J = l(775602),
    X = l(287809),
    Z = l(531685),
    Q = l(503089),
    ee = l(511265),
    et = l(682301),
    el = l(905276),
    en = l(561769),
    es = l(484469),
    ei = l(621466),
    er =
        (((s = {}).MOUNTED = "mounted"),
        (s.SORT_OUT = "sort-out"),
        (s.SORT_IN = "sort-in"),
        (s.SHUFFLE_OUT = "shuffle-out"),
        (s.SHUFFLE_IN = "shuffle-in"),
        (s.FINISHED = "finished"),
        s),
    ea = l(401864),
    eo = l(124987),
    ec = l(946716);
let eu = {
    [z.RECENT]: { sortType: eo.$.RECENCY, sortDirection: ea.A.DESC },
    [z.PRICE_LOW_TO_HIGH]: { sortType: eo.$.PRICE, sortDirection: ea.A.ASC },
};
l(667532);
var ed = l(153488),
    em = l(652215),
    eh = l(783857),
    eg = l(866665),
    ex = l(939249),
    ef = l(885574),
    eE = l(975807),
    ep = l(975571),
    e_ = l(373599);
let ej = function (e) {
        let { personalizedResults: t, label: l } = e,
            n = l ?? O.intl.string(O.t.NSv5KV);
        return (0, i.jsxs)("div", {
            className: e_.L,
            children: [
                (0, i.jsx)(m.D, { variant: "heading-lg/semibold", children: n }),
                t &&
                    (0, i.jsx)(eg.m, {
                        text: O.intl.string(O.t["3taPdj"]),
                        position: "top",
                        "aria-label": O.intl.string(O.t["3taPdj"]),
                        children: (0, i.jsx)(ex.D, {
                            onClick: () => (0, eE.A)(ep.A.getArticleURL(em.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: e_.s,
                            children: (0, i.jsx)(ef.CircleInformationIcon, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    ev = [],
    eb = function (e) {
        let {
                isLoading: t,
                title: l,
                sortedSkuIds: n,
                numVisibleItems: s,
                tab: a,
                buttonContainerClassName: c,
                orbsSupportedOnly: u,
            } = e,
            d = (0, W.bG)([X.default], () => X.default.getCurrentUser()),
            m = (0, en.Mk)(a),
            g = (0, eh.yB)("FeedBlock"),
            {
                sortType: x,
                setSortType: p,
                orderedSkuIds: _,
                sortOptions: j,
                shuffleProducts: v,
                showRecommendationOption: b,
            } = (function (e) {
                let { sortedSkuIds: t } = e,
                    l = (0, W.bG)([ed.A], () => ed.A.hasConsented(em.YAq.PERSONALIZATION)),
                    n = r.useMemo(() => t?.[z.RECOMMENDED] ?? [], [t]),
                    s = r.useMemo(() => t?.[z.POPULAR] ?? [], [t]),
                    i = n.length > 0 && l,
                    [a, o] = r.useState(i ? z.RECOMMENDED : z.POPULAR),
                    c = r.useCallback(() => {
                        o(z.RANDOM);
                    }, []),
                    u = r.useMemo(() => (a === z.RECOMMENDED ? n : a === z.POPULAR ? s : []), [a, n, s]);
                return {
                    sortType: a,
                    setSortType: o,
                    orderedSkuIds: u,
                    sortOptions: r.useMemo(() => {
                        let e = [
                            { value: z.POPULAR, label: O.intl.string(O.t.Y68e5p) },
                            { value: z.RECENT, label: O.intl.string(O.t["51Bhiz"]) },
                            { value: z.PRICE_LOW_TO_HIGH, label: O.intl.string(O.t.m8RVU2) },
                        ];
                        return (i && e.unshift({ value: z.RECOMMENDED, label: O.intl.string(O.t.zPWgFG) }), e);
                    }, [i]),
                    showRecommendationOption: i,
                    shuffleProducts: c,
                };
            })({ sortedSkuIds: n }),
            C = x === z.RANDOM,
            [S, y] = r.useState(0),
            N = `${x}:${!0 === u}:${S}`,
            [I, A] = r.useState({ key: N, extra: 0 }),
            k = I.key === N ? I.extra : 0;
        I.key !== N && A({ key: N, extra: 0 });
        let {
                skuIds: R,
                isLoading: M,
                hasMore: D,
            } = (function (e) {
                let { sortType: t, orbsSupportedOnly: l, numVisibleItems: n, shuffleNonce: s } = e,
                    i = r.useMemo(
                        () =>
                            (function (e, t) {
                                if (e === z.RANDOM) return { randomize: !0 };
                                if (t && e === z.POPULAR) return { randomize_daily: !0 };
                                let l = eu[e];
                                return null == l ? null : { sort_type: l.sortType, sort_direction: l.sortDirection };
                            })(t, !0 === l),
                        [t, l],
                    ),
                    a = t === z.RANDOM,
                    o = n > 0 && null != i && null != i ? `${JSON.stringify(i)}:${!0 === l}` : null,
                    c = null == o ? null : `${o}:${a ? s : ""}:${n}`,
                    [u, d] = r.useState(null);
                if (
                    (r.useEffect(() => {
                        if (null == c || null == i) return;
                        let e = !1;
                        return (
                            (0, ec.$)({
                                item_types: [],
                                colors: [],
                                themes: [],
                                orbs_eligible: !0 === l || void 0,
                                offset: 0,
                                limit: n + (a ? 32 : 8),
                                ...i,
                                published_collections_only: !0,
                            })
                                .then((t) => {
                                    e ||
                                        d({
                                            key: c,
                                            sortIdentityKey: o,
                                            skuIds: t.skus ?? [],
                                            hasMore: t.pagination?.has_more === !0,
                                        });
                                })
                                .catch(() => {
                                    e || d({ key: c, sortIdentityKey: o, skuIds: [], hasMore: !1 });
                                }),
                            () => {
                                e = !0;
                            }
                        );
                    }, [c, o, a, i, l, n]),
                    null == c)
                )
                    return { skuIds: null, isLoading: !1, hasMore: !1 };
                let m = null != u && u.sortIdentityKey === o ? u : null;
                return { skuIds: m?.skuIds ?? null, isLoading: u?.key !== c, hasMore: m?.hasMore ?? !1 };
            })({ sortType: x, orbsSupportedOnly: u, numVisibleItems: s + k, shuffleNonce: S }),
            P = R ?? (M ? ev : _),
            B = r.useMemo(() => P.slice(0, s + k + (C ? 32 : 8)), [P, s, k, C]),
            H = (0, et.hv)(B, { needsCategory: !1 }),
            w = (0, Q.c)("feed_block"),
            G = (0, ee.p)(),
            $ = r.useMemo(() => {
                let e = new Set();
                return B.filter((t) => {
                    let l = H[t];
                    if (
                        l?.state === "error" ||
                        (!w && t === Y.j.PREMIUM_TIER_2_1_DAY) ||
                        (l?.product != null && 0 === G([l.product]).length)
                    )
                        return !1;
                    let n = l?.product?.storeListingId;
                    if (null != n) {
                        if (e.has(n)) return !1;
                        e.add(n);
                    }
                    return !0;
                });
            }, [B, H, w, G]),
            K = r.useMemo(
                () =>
                    !M &&
                    B.every((e) => {
                        let t = H[e]?.state;
                        return "ready" === t || "error" === t;
                    }),
                [M, B, H],
            ),
            ea = !C && D && k < 16,
            eo = s - $.length;
        if (K && eo > 0 && ea) {
            let e = Math.min(16, k + eo + 8);
            e !== k && A({ key: N, extra: e });
        }
        let eg = (0, W.bG)([J.Ay], () => J.Ay.useReducedMotion),
            ex = (0, W.bG)([Z.A], () => Z.A.isFocused()),
            ef = !eg && ex,
            {
                animationPhase: eE,
                startAnimation: ep,
                signalDataReady: e_,
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
                                (0, ei.vq)(e, HTMLButtonElement) ||
                                (0, ei.vq)(e, HTMLAnchorElement) ||
                                (0, ei.vq)(e, HTMLInputElement) ||
                                (0, ei.vq)(e, HTMLSelectElement) ||
                                (0, ei.vq)(e, HTMLTextAreaElement)
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
                            let { isShuffling: l, onOutroComplete: r, returnRef: c, holdIntroUntilReady: u = !1 } = e;
                            (c?.current != null && ((s.current = c.current), n(!0)),
                                (i.current = !1),
                                null != a.current && (clearTimeout(a.current), (a.current = null)),
                                t(l ? "shuffle-out" : "sort-out"),
                                setTimeout(
                                    () => {
                                        if ((r(), l && u)) {
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
            K && e_();
        }, [K, e_]);
        let eb = (0, E.uM)(),
            eC = eb?.sessionId ?? "",
            { analyticsLocations: eS } = (0, F.Ay)(U.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            ey = r.useRef(null),
            eN = r.useRef(null),
            [eI, eA] = r.useState(!1),
            ek = r.useCallback(
                (e) => {
                    (eA(!1),
                        ep({ isShuffling: !1, onOutroComplete: () => p(e), returnRef: eN }),
                        f.default.track(em.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: eC,
                            sort_type: e,
                        }));
                },
                [ep, p, eC],
            );
        return null == d
            ? null
            : (0, i.jsx)(F.f5, {
                  value: eS,
                  children: (0, i.jsxs)("div", {
                      className: o()(V.lD, V.YB),
                      children: [
                          (0, i.jsxs)("div", {
                              className: V.$6,
                              children: [
                                  (0, i.jsx)(ej, { label: l, personalizedResults: b }),
                                  (0, i.jsxs)("div", {
                                      className: o()(V.IE, { [eh.jP]: g }),
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: V.gd,
                                              children: [
                                                  (0, i.jsx)(T.E, {
                                                      variant: "text-md/medium",
                                                      children: O.intl.string(O.t.uaX705),
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: o()(c, V.pI),
                                                      ref: eN,
                                                      children: (0, i.jsx)(q.l, {
                                                          label: O.intl.string(O.t.uaX705),
                                                          hideLabel: !0,
                                                          options: j,
                                                          onSelectionChange: ek,
                                                          formatOption: (e) => {
                                                              let { label: t, value: l } = e;
                                                              return { id: l, label: t, value: l };
                                                          },
                                                          value: x,
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
                                                  buttonRef: ey,
                                                  onClick: function () {
                                                      (eA(!0),
                                                          ep({
                                                              isShuffling: !0,
                                                              onOutroComplete: () => {
                                                                  (v(), y((e) => e + 1));
                                                              },
                                                              returnRef: ey,
                                                              holdIntroUntilReady: !0,
                                                          }),
                                                          f.default.track(
                                                              em.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: eC },
                                                          ));
                                                  },
                                                  disabled: eE !== er.MOUNTED && eE !== er.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(L.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: eI && eE === er.FINISHED ? O.intl.string(O.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: V.hm,
                              children: t
                                  ? (0, i.jsx)(i.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, i.jsx)(es.A, {}, t + 1)),
                                    })
                                  : ef && eE === er.SHUFFLE_OUT
                                    ? [...Array(s)].map((e, t) =>
                                          (0, i.jsx)(
                                              "div",
                                              { className: V.Z2, children: (0, i.jsx)(es.A, {}) },
                                              `shuffle-placeholder-${t}`,
                                          ),
                                      )
                                    : M && null == R
                                      ? (0, i.jsx)(i.Fragment, {
                                            children: [...Array(12)].map((e, t) => (0, i.jsx)(es.A, {}, t + 1)),
                                        })
                                      : $.slice(0, s).map((e, t) => {
                                            let l;
                                            return (
                                                ef &&
                                                    (eE === er.SORT_OUT
                                                        ? (l = V.MW)
                                                        : eE === er.SHUFFLE_IN
                                                          ? (l = V.aS)
                                                          : eE === er.SORT_IN && (l = V.F7)),
                                                (0, i.jsx)(
                                                    E.R9,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: "popular picks",
                                                            categoryPosition: 2,
                                                        },
                                                        children: (0, i.jsx)("div", {
                                                            className: l,
                                                            children: (0, i.jsx)(el.A, {
                                                                skuId: e,
                                                                hideStaticBundleBackgroundAsset: !0,
                                                                prioritizedCurrency: m,
                                                            }),
                                                        }),
                                                    },
                                                    e,
                                                )
                                            );
                                        }),
                          }),
                      ],
                  }),
              });
    };
var eC = l(269115),
    eS = l(43990),
    ey = l(890856),
    eN = l(408278),
    eI = l(789645),
    eA = l(976860),
    ek = l(758836),
    eT = l(49999),
    eL = l(818348),
    eR = l(135570),
    eO = l(196064);
let eM = "GAME_SERVER_HOSTING_BANNER";
function eD(e) {
    let { gameServerHostingBannerBlock: t, tab: l } = e,
        n = (0, E.uM)(),
        s = r.useRef(null),
        a = r.useRef(!1),
        c = r.useRef(null),
        [d, x] = r.useState(!1),
        p = r.useCallback(
            (e) => {
                f.default.track(em.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: n?.sessionId,
                    page_type: l,
                    page_category: n?.pageCategory,
                    page_section: n?.pageSection,
                    tile_type: eM,
                    cta_name: e,
                });
            },
            [n?.sessionId, n?.pageCategory, n?.pageSection, l],
        ),
        _ = r.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    p("go_to_game_server_hosting"),
                    (0, eA.pX)(em.BVt.COLLECTIBLES_SHOP_WITH_TAB(ek.G2.GAME_SERVERS)));
            },
            [p],
        ),
        j = r.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    p("dismiss"),
                    x(!0),
                    !0 === t.isDismissible &&
                        (0, g.d6)(u.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
                            dismissAction: eT.i.USER_DISMISS,
                        }));
            },
            [p, t.isDismissible],
        ),
        v = r.useCallback(
            (e) => {
                !a.current &&
                    (e && null === c.current
                        ? (c.current = setTimeout(() => {
                              ((a.current = !0),
                                  (c.current = null),
                                  f.default.track(em.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: n?.sessionId,
                                      page_type: l,
                                      page_category: n?.pageCategory,
                                      page_section: n?.pageSection,
                                      type: eM,
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
    d)
        ? null
        : (0, i.jsx)(eS.N, {
              theme: eL.NJ.DARK,
              children: (e) =>
                  (0, i.jsx)(eC.L, {
                      innerRef: s,
                      onChange: v,
                      threshold: 0,
                      children: (0, i.jsx)("div", {
                          ref: s,
                          className: o()(eO.YB, e),
                          children: (0, i.jsxs)(ey.s, {
                              className: eO.kL,
                              onClick: _,
                              "aria-label": O.intl.string(eR.default["34GMP9"]),
                              children: [
                                  (0, i.jsx)("img", {
                                      className: eO.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, i.jsx)("div", { className: eO.f5, "aria-hidden": !0 }),
                                  !0 === t.isDismissible &&
                                      (0, i.jsx)("div", {
                                          className: eO.b,
                                          children: (0, i.jsx)(eN.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: eI.P,
                                              onClick: j,
                                              "aria-label": O.intl.string(O.t.WAI6xu),
                                          }),
                                      }),
                                  (0, i.jsx)("div", {
                                      className: eO.jE,
                                      children: (0, i.jsxs)("div", {
                                          className: eO.rF,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: eO.Z,
                                                  children: [
                                                      (0, i.jsx)(m.D, {
                                                          className: eO.R_,
                                                          variant: "heading-xl/semibold",
                                                          color: "text-strong",
                                                          children: O.intl.string(eR.default["34GMP9"]),
                                                      }),
                                                      (0, i.jsx)(T.E, {
                                                          className: eO.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: O.intl.string(eR.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, i.jsx)(h.$, {
                                                  variant: "overlay-primary",
                                                  text: O.intl.string(O.t.jVcuVY),
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
var eP = l(946052),
    eB = l(172218),
    eH = l(28863),
    eU = l(212407),
    eF = l(815280),
    ew = l(9530);
let eV = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: l } = e,
        n = (0, eB.K)(
            (e) => {
                l?.(e);
            },
            0.33,
            null != l,
        ),
        { bannerUrl: s, bannerAnimatedUrl: r } = (0, eU.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        o = null != t.body && "" !== t.body,
        c = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, i.jsxs)("div", {
        ref: n,
        className: ew.BX,
        children: [
            (0, i.jsx)("div", {
                className: ew.vK,
                children: null != s && (0, i.jsx)(eF.A, { bannerStatic: s, bannerAnimated: r }),
            }),
            (0, i.jsx)("div", {
                className: ew.HQ,
                children: (0, i.jsxs)("div", {
                    className: ew.Yn,
                    children: [
                        null != t.endTime ? (0, i.jsx)(D, { endDate: t.endTime, size: "lg" }) : null,
                        (0, i.jsx)(m.D, {
                            variant: "heading-xxl/semibold",
                            className: ew.DD,
                            color: "text-strong",
                            style: { ...a },
                            children: t.title,
                        }),
                        o || c
                            ? (0, i.jsxs)(T.E, {
                                  variant: "text-md/medium",
                                  style: { ...a },
                                  children: [
                                      o && t.body,
                                      o && c && " ",
                                      c &&
                                          (0, i.jsx)(eH.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: ew.CU,
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
var eG = l(197935),
    e$ = l(590180),
    eK = l(313276),
    eY = l(206077),
    ez = l(554661);
function eW(e) {
    return e.skuId;
}
function eq(e) {
    let { product: t, index: l, shelfName: n, prioritizedCurrency: s, listItemProps: r } = e;
    return (0, i.jsx)(E.R9, {
        newValue: { tilePosition: l, pageSection: n, categoryPosition: 2 },
        children: (0, i.jsx)(el.A, { skuId: t.skuId, prioritizedCurrency: s, listItemProps: r }),
    });
}
let eJ = function (e) {
    let { shelf: t, handleTransition: l, tab: n } = e,
        s = (0, W.bG)([X.default], () => X.default.getCurrentUser()),
        a = (0, en.Mk)(n),
        c = (0, W.bG)([e$.A], () => (null != t.categorySkuId ? e$.A.getCategory(t.categorySkuId) : void 0)),
        u = (0, eK.A)(),
        d = r.useMemo(() => u(t.rankedSkuIds), [t.rankedSkuIds, u]),
        g = (0, eY.X)(d),
        { analyticsLocations: x } = (0, F.Ay)(U.A.COLLECTIBLES_SHOP_SHELF),
        f = r.useMemo(() => g.filter((e) => null != e$.A.getCategoryForProduct(e.skuId)), [g]),
        E = r.useCallback(() => {
            l({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: c?.isOrbsExclusive === !0 && n !== ek.G2.ORBS,
            });
        }, [t.categorySkuId, c, l, n]);
    if (null == s || 0 === g.length) return null;
    let p = t.buttonText ?? O.intl.formatToPlainString(O.t.bc9RBE, { category_name: t.name }),
        _ = t.showButton,
        j = t.desktopBackgroundImage,
        v = null != j;
    return (0, i.jsx)(F.f5, {
        value: x,
        children: (0, i.jsxs)("div", {
            className: o()(ez.mu, V.YB, v ? ez.VA : ez.Ti),
            children: [
                v && (0, i.jsx)("img", { className: ez.iL, src: j, alt: "", "aria-hidden": !0 }),
                (0, i.jsxs)("div", {
                    className: ez.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: ez.wx,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    style: v ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                _ &&
                                    (0, i.jsx)(h.$, {
                                        variant: v ? "overlay-primary" : "secondary",
                                        text: p,
                                        onClick: E,
                                    }),
                            ],
                        }),
                        (0, i.jsx)(eG.A, {
                            gap: "xl",
                            edgeFade: v ? "sm" : void 0,
                            items: f,
                            getItemKey: eW,
                            maintainFocusOnReorder: !0,
                            renderItem: (e, l, n) =>
                                (0, i.jsx)(
                                    eq,
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
var eX = l(918467),
    eZ = l(604913),
    eQ = l(223311),
    e0 = l(65238),
    e1 = l(39196),
    e2 = l(288106),
    e5 = l(58703),
    e3 = l(808598),
    e6 = l(62010),
    e8 = l(993408),
    e9 = l(598047),
    e4 = l(396583),
    e7 = l(270823);
let te = r.memo((e) => {
        let { endsAt: t, onCountdownEnd: l } = e,
            n = (0, e9.A)(),
            [s, a] = r.useState(!0),
            [, o] = r.useReducer((e) => e + 1, 0),
            c = r.useRef(!1),
            u = r.useCallback((e) => {
                a(e);
            }, []),
            d = (0, eB.K)(u, 0),
            m = (0, e5.Tf)(Date.now(), t),
            h = (function (e) {
                let { days: t, hours: l, minutes: n, seconds: s } = e;
                return 0 === t && 0 === l && 0 === n && 0 === s;
            })(m);
        return (
            (0, e4.A)(o, h || !(n && s) ? null : 1e3),
            r.useEffect(() => {
                h && !c.current && ((c.current = !0), l());
            }, [h, l]),
            (0, i.jsxs)("div", {
                ref: d,
                className: e7.qW,
                role: "timer",
                children: [
                    (function (e) {
                        let { days: t, hours: l, minutes: n, seconds: s } = e;
                        return [t, l, n, s].map((e) => e.toString().padStart(2, "0"));
                    })(m).map((e, t) =>
                        (0, i.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    t > 0 && (0, i.jsx)("div", { className: e7.kx, "aria-hidden": !0 }),
                                    (0, i.jsx)("div", {
                                        className: e7.t8,
                                        "aria-hidden": !0,
                                        children: e
                                            .split("")
                                            .map((e, t) =>
                                                (0, i.jsx)(
                                                    T.E,
                                                    {
                                                        tag: "span",
                                                        variant: "heading-xl/semibold",
                                                        color: "text-overlay-dark",
                                                        className: e7.m3,
                                                        children: e,
                                                    },
                                                    t,
                                                ),
                                            ),
                                    }),
                                ],
                            },
                            t,
                        ),
                    ),
                    (0, i.jsx)(L.A, { children: O.intl.format(O.t.j6IyVe, m) }),
                ],
            })
        );
    }),
    tt = r.memo((e) => {
        let { collectionName: t, percentOff: l, endsAt: n, onShopSale: s, onCountdownEnd: r } = e;
        return (0, i.jsxs)("div", {
            className: e7.kL,
            children: [
                (0, i.jsx)(te, { endsAt: n, onCountdownEnd: r }, n.getTime()),
                (0, i.jsx)(T.E, {
                    variant: "text-md/semibold",
                    color: "text-overlay-light",
                    className: e7.Rc,
                    children: O.intl.format(O.t["97Qza2"], { percent: l, collectionName: t }),
                }),
                (0, i.jsx)("div", {
                    className: e7.lO,
                    children: (0, i.jsx)(h.$, {
                        variant: "overlay-primary",
                        fullWidth: !0,
                        onClick: s,
                        text: O.intl.string(O.t["5GoOlx"]),
                    }),
                }),
            ],
        });
    });
var tl = l(60140);
let tn = (e) => {
    let { heroBlock: t, collectionSale: l, handleTransition: n, tab: s, onSaleEnd: a } = e,
        c = (0, W.bG)([X.default], () => X.default.getCurrentUser()),
        u = (0, E.uM)(),
        { analyticsLocations: d } = (0, F.Ay)(U.A.COLLECTIBLES_SHOP_HERO),
        {
            bannerDisplayConfig: h,
            logoDisplayConfig: g,
            heroLogo: x,
            heroBannerStatic: p,
            heroBannerAnimated: _,
        } = (0, eU.Kk)(t),
        j = h?.responsive ?? !1,
        v = h?.backgroundStyle,
        b = r.useCallback(() => {
            (n({
                sourceButton: "shop collection sale hero",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            }),
                f.default.track(em.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: u?.sessionId,
                    sku_id: t.categorySkuId,
                    page_type: s,
                    page_section: u?.pageSection,
                    page_category: u?.pageCategory,
                    cta_name: "shop collection sale hero button",
                }));
        }, [n, t.categorySkuId, u, s]);
    return null == c
        ? null
        : (0, i.jsx)(F.f5, {
              value: d,
              children: (0, i.jsxs)("div", {
                  className: V.os,
                  children: [
                      (0, i.jsx)("div", {
                          className: o()(V.vK, { [V.no]: j }),
                          style: null != v ? { background: v } : void 0,
                          children:
                              null != p && (0, i.jsx)(eF.A, { bannerStatic: p, bannerAnimated: _, isResponsive: j }),
                      }),
                      (0, i.jsxs)("div", {
                          className: V.xX,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: o()(V.uZ, V.bC, { [V.no]: j }),
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: V.Hw,
                                          children: [
                                              (0, e8.HF)(t.unpublishedAt) &&
                                                  (0, i.jsx)("div", {
                                                      className: V.v0,
                                                      children: (0, i.jsx)(e6.E, {
                                                          type: { text: O.intl.string(O.t["h/uBCR"]) },
                                                          variant: "inverted",
                                                      }),
                                                  }),
                                              (0, i.jsxs)("div", {
                                                  className: V.Wq,
                                                  children: [
                                                      null != x &&
                                                          (0, i.jsx)("img", {
                                                              className: V.rm,
                                                              src: x,
                                                              alt: t.name,
                                                              style: g?.toDesktopStyles(),
                                                          }),
                                                      null != t.title &&
                                                          (0, i.jsx)(m.D, {
                                                              variant: "heading-xxl/semibold",
                                                              color: "text-strong",
                                                              children: t.title,
                                                          }),
                                                      null != t.summary &&
                                                          "" !== t.summary &&
                                                          (0, i.jsx)(T.E, {
                                                              variant: "text-md/normal",
                                                              className: V.Tm,
                                                              style: { color: t.bannerTextColor ?? void 0 },
                                                              children: t.summary,
                                                          }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, i.jsx)("div", {
                                          className: V.IS,
                                          children: (0, i.jsx)(tt, {
                                              collectionName: t.name,
                                              percentOff: l.percentOff,
                                              endsAt: l.endsAt,
                                              onShopSale: b,
                                              onCountdownEnd: a,
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(tl.A, {
                                  heroBlockRecord: t,
                                  tab: s,
                                  isBlockLoading: !1,
                                  layout: s === ek.G2.HOME ? "hscroll" : "feed",
                              }),
                          ],
                      }),
                  ],
              }),
          });
};
var ts = l(331322),
    ti = l(773669),
    tr = l(480750),
    ta = l(192943),
    to = l(442036),
    tc = l(602051),
    tu = l(268270);
function td(e) {
    let { promotion: t, heroBlockRecord: l, heroLogo: n, logoDisplayConfig: s, collectionId: r, isLoading: a } = e;
    return a
        ? (0, i.jsx)("div", { className: tu.Hw })
        : (0, i.jsxs)("div", {
              className: tu.Hw,
              children: [
                  (0, i.jsxs)("div", {
                      className: tu.Wq,
                      children: [
                          null != n &&
                              (0, i.jsx)("img", { className: tu.rm, src: n, alt: l.name, style: s?.toDesktopStyles() }),
                          null != l.title &&
                              (0, i.jsx)(m.D, {
                                  variant: "heading-xxl/semibold",
                                  color: "text-strong",
                                  children: l.title,
                              }),
                          null != l.summary &&
                              "" !== l.summary &&
                              (0, i.jsx)(ts.B, {
                                  onClick: (e) => (0, tr.h)(e, t, tc.S.HOME),
                                  children: (0, i.jsx)(T.E, {
                                      variant: "text-sm/normal",
                                      className: o()(tu.Tm, tu.vd),
                                      style: { color: null != l.bannerTextColor ? l.bannerTextColor : void 0 },
                                      children: l.summary,
                                  }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(ta.A, { collectionId: r, variant: "condensed", surface: tc.S.HOME }),
              ],
          });
}
let tm = function (e) {
        let { promotion: t, heroBlock: l, isLoading: n, handleTransition: s, tab: a } = e,
            c = (0, W.bG)([X.default], () => X.default.getCurrentUser()),
            u = (0, W.bG)([ti.default], () => ti.default.locale),
            d = (0, E.uM)(),
            { analyticsLocations: m } = (0, F.Ay)(U.A.COLLECTIBLES_SHOP_HERO),
            h = r.useMemo(() => (0, e1.HF)(t, l), [t, l]),
            g = r.useMemo(() => (0, e1.O8)(t, l, a, u), [t, l, a, u]),
            {
                bannerDisplayConfig: x,
                logoDisplayConfig: p,
                heroLogo: _,
                heroBannerStatic: j,
                heroBannerAnimated: v,
            } = (0, eU.Kk)(g),
            b = x?.responsive ?? !1,
            C = x?.backgroundStyle;
        function S() {
            (s?.({
                sourceButton: "shop latest category hero",
                categorySkuId: g.categorySkuId,
                isInternalShopDeeplink: !0,
            }),
                f.default.track(em.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: d?.sessionId,
                    sku_id: g.categorySkuId,
                    page_type: a,
                    page_section: d?.pageSection,
                    page_category: d?.pageCategory,
                    cta_name: "shop latest category hero button",
                }),
                (0, tr.l)(t, tc.S.HOME, tc.Z.VIEW_ALL_ITEMS_CLICKED));
        }
        return null == c || null == h
            ? null
            : (0, i.jsx)(F.f5, {
                  value: m,
                  children: (0, i.jsxs)("div", {
                      className: tu.os,
                      children: [
                          (0, i.jsx)("div", {
                              className: o()(tu.vK, { [tu.no]: b }),
                              style: null != C ? { background: C } : void 0,
                              children: null != j && (0, i.jsx)(eF.A, { bannerStatic: j, isResponsive: b }),
                          }),
                          (0, i.jsxs)("div", {
                              className: tu.xX,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: tu.zl,
                                      style: null != C ? { background: C } : void 0,
                                      children:
                                          null != j &&
                                          (0, i.jsx)(eF.A, { bannerStatic: j, bannerAnimated: v, isResponsive: b }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: tu.mz,
                                      children: [
                                          (0, i.jsx)(eS.N, {
                                              theme: em.NJ8.DARK,
                                              children: (e) =>
                                                  (0, i.jsxs)("div", {
                                                      className: e,
                                                      children: [
                                                          (0, i.jsx)("div", {
                                                              className: tu.bC,
                                                              children: (0, i.jsx)(td, {
                                                                  promotion: t,
                                                                  heroBlockRecord: g,
                                                                  heroLogo: _,
                                                                  logoDisplayConfig: p,
                                                                  collectionId: l.categorySkuId,
                                                                  isLoading: n,
                                                              }),
                                                          }),
                                                          (0, i.jsx)(to.A, {
                                                              onShopCollectionClick: S,
                                                              className: tu.ti,
                                                          }),
                                                      ],
                                                  }),
                                          }),
                                          (0, i.jsx)(tl.A, {
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
    },
    th = (e) => {
        var t;
        let l,
            n,
            s,
            a,
            { heroBlock: o, handleTransition: c, tab: u } = e,
            d = (0, eQ.A)(em.FYj),
            m = (0, W.bG)([eX.A], () => {
                let e = eX.A.getFetchState(em.FYj);
                return null == e || "loading" === e;
            }),
            [h, g] = r.useState(null),
            x =
                u === ek.G2.HOME
                    ? ((t = o.categorySkuId),
                      (l = Date.now()),
                      (n = (0, e0.NN)(d)),
                      (s = d?.rewardConfig?.discount),
                      (a = d?.endsAt),
                      null == d ||
                      null == t ||
                      null == n ||
                      n.collectionId !== t ||
                      s?.type !== e2.RP.PERCENT ||
                      s.amount <= 0 ||
                      null == a ||
                      a.getTime() <= l ||
                      (null != d.startsAt && d.startsAt.getTime() > l)
                          ? null
                          : { percentOff: s.amount, endsAt: a })
                    : null,
            f = x?.endsAt.getTime() ?? null,
            E = (function (e, t, l) {
                return null != t
                    ? { type: "COLLECTION_SALE", collectionSale: t }
                    : null != e &&
                        null != (0, e0.XF)(e) &&
                        null != e.rewardStatus &&
                        (0, e1.HF)(e, l)?.subtype === eZ.h5.TAKEOVER &&
                        (null == e.endsAt || null != (0, e3.X)(e.endsAt))
                      ? { type: "COLLECT_AND_CLAIM_TAKEOVER", promotion: e }
                      : null;
            })(d, f !== h ? x : null, o),
            p = r.useCallback(() => {
                g(f);
            }, [f]);
        switch (E?.type) {
            case "COLLECTION_SALE":
                return (0, i.jsx)(tn, {
                    heroBlock: o,
                    collectionSale: E.collectionSale,
                    handleTransition: c,
                    tab: u,
                    onSaleEnd: p,
                });
            case "COLLECT_AND_CLAIM_TAKEOVER":
                return (0, i.jsx)(tm, {
                    promotion: E.promotion,
                    isLoading: !1,
                    handleTransition: c,
                    heroBlock: o,
                    tab: u,
                });
            default:
                return (0, i.jsx)(eP.A, { isLoading: m && null == d, handleTransition: c, heroBlock: o, tab: u });
        }
    };
var tg = l(465794),
    tx = l(69236),
    tf = l(44724),
    tE = l(421108),
    tp = l(482358),
    t_ = l(202541);
let tj = function (e) {
    let {
            applicationId: t,
            headerText: l,
            subheaderText: n,
            gradientColors: s,
            gradientAngle: a,
            skuIds: o,
            tab: c,
            endTime: u,
            ctaType: d = "storefront",
            logoUrl: m,
            termsUrl: h,
            backgroundImageUrl: g,
        } = e,
        x = (0, tE.ur)(u) ?? void 0,
        f = (0, tx.W8)(),
        E = r.useMemo(() => {
            if ("none" !== d)
                return "nitro" !== d || f
                    ? {
                          kind: "button",
                          text: O.intl.string(O.t.apFNLU),
                          onClick: () => (0, tf.default)({ applicationId: t }),
                          onMouseDown: () => (0, tf.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, i.jsx)(tg.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: t_.pe.TIER_2,
                              buttonTextOverride: O.intl.string(O.t.pj0XBN),
                          }),
                      };
        }, [d, t, f]);
    return (0, i.jsx)(tp.A, {
        skuIds: o,
        tab: c,
        applicationId: t,
        headerText: l,
        subheaderText: n,
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
var tv = l(199510),
    tb = l.n(tv),
    tC = l(575593),
    tS = l(531142),
    ty = l(559106),
    tN = l(765671),
    tI = l(713517),
    tA = l(161918);
let tk = (0, l(945810).mj)({
    name: "2026-10-collectibles-interactive-jumble-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tT = l(597783),
    tL = l(536572),
    tR = l(929283),
    tO = l(171934);
let tM = { standalonePreview: !0 },
    tD = [
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
function tP(e, t, l) {
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
function tB(e, t) {
    let l = (0, tA.Mk)()?.tab,
        { handleCardVisibilityChange: n } = (0, tT.Z)(e, l, "jumble product");
    r.useEffect(() => {
        n(t);
    }, [t, n]);
}
function tH(e) {
    let { config: t, baseLeft: l, peaking: n, transitioning: s, product: r, item: a } = e;
    return (
        tB(r.skuId, n),
        (0, i.jsx)("div", {
            className: tO.LY,
            style: tP(t, l, s),
            children: (0, i.jsx)(tR.i, { item: a, className: tO.my }),
        })
    );
}
function tU(e) {
    let { config: t, baseLeft: l, peaking: n, transitioning: s, product: a, item: o } = e,
        c = (0, W.bG)([X.default], () => X.default.getCurrentUser()),
        u = r.useRef(null),
        { isHoveringOrFocusing: d } = (0, tI.A)(u);
    tB(a.skuId, n);
    let m = (0, tA.Mk)()?.tab,
        h = (0, E.uM)(),
        g = r.useCallback(() => {
            f.default.track(em.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: h?.sessionId,
                sku_id: a.skuId,
                page_type: m,
                page_section: h?.pageSection,
                page_category: h?.pageCategory,
                tile_type: "JUMBLE_PRODUCT",
                tile_position: String(h?.tilePosition),
            });
        }, [a.skuId, m, h]),
        x = (0, en.ql)(a, U.A.COLLECTIBLES_SHOP_TRANSITION_JUMBLE_ITEM, g);
    return (0, i.jsx)("div", {
        ref: u,
        className: tO.LY,
        style: tP(t, l, s),
        children: (0, i.jsx)(ex.D, {
            onClick: x,
            "aria-label": (0, tL.s7)(a),
            className: tO.vk,
            children: (0, i.jsx)(tR.i, { item: o, className: tO.my, user: c, isHighlighted: d }),
        }),
    });
}
function tF(e) {
    let { peaking: t, transitioning: l } = e,
        { ref: n, width: s } = (0, tN.Ay)(),
        [a] = r.useState(() =>
            tb()(tD).map((e) => ({
                skuId: e,
                verticalOffset: -12 + 36 * Math.random(),
                rotation: -24 + 48 * Math.random(),
                horizontalJitter: -(20 * Math.random()),
                transitionOffsetLeft: -20 - 35 * Math.random(),
                transitionDelay: `${Math.random() / 3}s`,
                transitionDuration: `${ek.H1 - 200 * Math.random()}ms`,
            })),
        ),
        c = tk.useConfig({ location: "shop_transition_jumble" }).enabled,
        u = (0, et.hv)(tD, { needsCategory: !1, flattenVariants: !0 }),
        d = r.useMemo(() => {
            let e = a.filter((e) => {
                let t = u[e.skuId]?.product;
                return t?.items[0] != null && t.type === tC.R.AVATAR_DECORATION;
            });
            return e.length > 0 ? e : a;
        }, [a, u]),
        m = r.useMemo(() => {
            if (null == s || s <= 0) return [];
            let e = Math.max(1, Math.floor(s / 130)),
                t = s / e;
            return Array.from({ length: e }, (e, l) => ({ config: d[l % d.length], baseLeft: l * t }));
        }, [s, d]);
    return (0, i.jsx)("div", {
        ref: n,
        className: o()(tO.rA, { [tO.Kb]: t }),
        children: (0, i.jsx)(en.v3.Provider, {
            value: tM,
            children: (0, i.jsx)(tS.g.Provider, {
                value: !0 === l || !0 !== t,
                children: m.map((e, n) => {
                    let s,
                        { config: r, baseLeft: a } = e,
                        o = u[r.skuId]?.product ?? e$.A.getProduct(r.skuId),
                        d = null != (s = o?.items[0]) && o?.type === tC.R.AVATAR_DECORATION ? s : null;
                    if (null == o || null == d) return null;
                    let m = r.skuId + n,
                        h = { config: r, baseLeft: a, peaking: t, transitioning: l, product: o, item: d };
                    return (0, i.jsx)(
                        E.R9,
                        {
                            newValue: { pageSection: "transition_jumble", tilePosition: n },
                            children: c ? (0, i.jsx)(tU, { ...h }) : (0, i.jsx)(tH, { ...h }),
                        },
                        m,
                    );
                }),
            }),
        }),
    });
}
function tw() {
    return (0, i.jsx)("div", { className: o()(tO.I2, tO.F$) });
}
function tV(e) {
    let { isVisible: t, transitioning: l } = e,
        n = r.useRef(null);
    return (0, i.jsx)(ty.xp, {
        containerRef: n,
        children: (0, i.jsx)("div", {
            className: o()(tO.I2, tO.MU),
            ref: n,
            children: (0, i.jsx)(tF, { peaking: t, transitioning: l }),
        }),
    });
}
var tG = l(815021);
let t$ = function (e) {
        let { wideBannerBlock: t, tab: l } = e,
            n = e$.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            s = r.useRef(null),
            a = r.useRef(null),
            [c, d] = r.useState(),
            [x, p] = r.useState(!1);
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
            { handleCardVisibilityChange: j } = (0, tT.Z)(_, "home", "marketing wide banner"),
            v = (0, E.uM)(),
            { bannerURL: b } = (0, eU.w$)(t),
            C = l === ek.G2.ORBS,
            S = null != t.ctaRoute && "" !== t.ctaRoute,
            y = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || S),
            N = null != t.logoURL && "" !== t.logoURL,
            I = r.useCallback(() => {
                if ((p(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, g.$l)(u.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: eT.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            A = r.useCallback(
                (e) => {
                    f.default.track(em.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: v?.sessionId,
                        sku_id: _,
                        page_type: l,
                        page_section: v?.pageSection,
                        page_category: v?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(v?.tilePosition),
                        cta_name: e,
                    });
                },
                [v, _, l],
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
                                (0, tf.default)({ guildId: e, pageIndex: l });
                            }
                        } else (0, eA.pX)(e);
                    }
                },
                [t.ctaRoute, A],
            );
        if (null == b || x) return null;
        let L = o()(V.nM, V.Tq, V.TS, V.YB, { [V._1]: C, [V.vb]: S }),
            R = (0, i.jsxs)(i.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, i.jsx)("div", {
                            className: V.Mh,
                            children: (0, i.jsx)(tG.J, {
                                size: "sm",
                                onClick: (e) => {
                                    (e.stopPropagation(), I());
                                },
                                "aria-label": O.intl.string(O.t.WAI6xu),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: o()(V.zK, { [V._1]: C }),
                        style: null != c ? { height: `${c}px` } : void 0,
                        children: (0, i.jsx)("img", {
                            ref: a,
                            src: b,
                            alt: t.title,
                            className: o()(V.LN, { [V.d5]: C }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: o()(V.Ep, { [V.Qq]: y }),
                        style: { maxHeight: null != c ? `${c}px` : "auto" },
                        children: (0, i.jsxs)("div", {
                            className: V.E8,
                            children: [
                                (0, i.jsx)(m.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: C ? V.O2 : void 0,
                                    variant: "heading-xl/semibold",
                                    children: t.title,
                                }),
                                (0, i.jsx)(T.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: C ? "text-md/medium" : "text-sm/medium",
                                    children: C
                                        ? O.intl.format(O.t.SFFP7K, {
                                              helpdeskArticle: ep.A.getArticleURL(em.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                y &&
                                    (0, i.jsxs)("div", {
                                        className: V.nP,
                                        children: [
                                            (0, i.jsx)(h.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    (e.stopPropagation(), k(t.ctaText ?? O.intl.string(O.t.jVcuVY)));
                                                },
                                                text: t.ctaText ?? O.intl.string(O.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? O.intl.formatToPlainString(O.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            N && (0, i.jsx)("img", { src: t.logoURL, alt: "", className: V.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, i.jsx)(eS.N, {
            theme: C ? void 0 : eL.NJ.DARK,
            children: (e) =>
                (0, i.jsx)(eC.L, {
                    innerRef: s,
                    onChange: j,
                    threshold: 0,
                    children: S
                        ? (0, i.jsx)(ex.D, { innerRef: s, onClick: () => k(null), className: o()(e, L), children: R })
                        : (0, i.jsx)("div", { ref: s, className: o()(e, L), children: R }),
                }),
        });
    },
    tK = (e) => {
        let { handleTransition: t, numVisibleItems: l, tab: n } = e,
            { noCache: s, includeUnpublished: a } = (0, S.A)(),
            [d, m] = r.useState(!1),
            h = (0, E.uM)(),
            f = h?.sessionId ?? "",
            p = (0, x.H)({ location: "collectibles_shop_feed" }),
            { isFetchingPromotion: y } = (0, j.TI)();
        r.useEffect(() => {
            (0, b.z)({
                sessionId: f,
                checkpoint: b.t.SHOP_MOUNTED,
                tab: n,
                unpublishedCategoriesShown: a,
                cacheDisabled: s,
            });
        }, [n]);
        let {
                isFetchingShopHome: N,
                fetchShopHomeError: I,
                shopBlocks: A,
                refreshShopHome: k,
            } = (0, v.y)(n, { noCache: s, includeUnpublished: a, logPerf: !0 }, { sessionId: f, tab: n }),
            T = r.useCallback(() => {
                k();
            }, [k]);
        return (r.useEffect(() => {
            null != I ||
                N ||
                0 === A.length ||
                (0, b.z)({
                    sessionId: f,
                    checkpoint: b.t.SHOP_RENDERED,
                    tab: n,
                    unpublishedCategoriesShown: a,
                    cacheDisabled: s,
                });
        }, [I, N, A.length, a, s, f, n]),
        null != I)
            ? (0, i.jsx)(C.h, { onRetry: T, errorOrigin: C.A.SHOP_PAGE, errorMessage: I.message })
            : N || 0 === A.length
              ? (0, i.jsxs)("div", {
                    className: o()(V.g4, V.Of),
                    children: [
                        (0, i.jsx)(eP.A, { isLoading: N || y, handleTransition: t, tab: n }),
                        (0, i.jsx)(K, { isLoading: N, handleTransition: t, categories: [] }),
                        (0, i.jsx)(eb, {
                            isLoading: N,
                            title: n === ek.G2.ORBS ? O.intl.string(O.t.dFgeuZ) : O.intl.string(O.t.NSv5KV),
                            numVisibleItems: l,
                            tab: n,
                        }),
                    ],
                })
              : (0, i.jsx)(i.Fragment, {
                    children: A.map((e, s) =>
                        (function (e, s, r) {
                            if (null == e) return null;
                            let a = null,
                                h = !1;
                            switch (e.type) {
                                case c.g.HERO:
                                    a = (0, i.jsx)(th, { heroBlock: e, handleTransition: t, tab: n }, r);
                                    break;
                                case c.g.FEATURED:
                                    a = (0, i.jsx)(
                                        K,
                                        { isLoading: !1, handleTransition: t, featuredBlockRecord: e },
                                        r,
                                    );
                                    break;
                                case c.g.FEED:
                                    let x = e.sortedSkuIds;
                                    a = (0, i.jsx)(
                                        eb,
                                        {
                                            title:
                                                n === ek.G2.ORBS
                                                    ? O.intl.string(O.t.dFgeuZ)
                                                    : O.intl.string(O.t.NSv5KV),
                                            numVisibleItems: l,
                                            sortedSkuIds: x,
                                            buttonContainerClassName: s?.type === c.g.IMMERSIVE_BANNER ? V.w : void 0,
                                            tab: n,
                                            orbsSupportedOnly: n === ek.G2.ORBS,
                                        },
                                        r,
                                    );
                                    break;
                                case c.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: l } = (0, g.En)(u.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (l) return null;
                                    }
                                    a = (0, i.jsx)(t$, { wideBannerBlock: e, tab: n }, r);
                                    break;
                                case c.g.SHELF:
                                    a = (0, i.jsx)(eJ, { handleTransition: t, shelf: e, tab: n }, r);
                                    break;
                                case c.g.COUNTDOWN_TIMER:
                                    ((a = (0, i.jsx)(B, { countdownTimerBlock: e, isVisible: d }, r)), (h = !0));
                                    break;
                                case c.g.IMMERSIVE_BANNER:
                                    a = (0, i.jsx)(
                                        eV,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => m(!e) },
                                        r,
                                    );
                                    break;
                                case c.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !p ||
                                        (!0 === e.isDismissible &&
                                            (0, g.En)(u.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, i.jsx)(
                                        _,
                                        {
                                            blockType: e.type,
                                            children: (0, i.jsx)(eD, { gameServerHostingBannerBlock: e, tab: n }),
                                        },
                                        r,
                                    );
                                case c.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, i.jsx)(
                                        _,
                                        {
                                            blockType: e.type,
                                            children: (0, i.jsx)(tj, {
                                                applicationId: e.applicationId,
                                                headerText: e.headerText,
                                                subheaderText: e.subheaderText,
                                                gradientColors: e.gradientColors,
                                                gradientAngle: e.gradientAngle,
                                                skuIds: e.skuIds,
                                                tab: n,
                                                endTime: e.endTime,
                                                ctaType: e.ctaType,
                                                logoUrl: e.logoUrl,
                                                termsUrl: e.termsUrl,
                                                backgroundImageUrl: e.backgroundImageUrl,
                                            }),
                                        },
                                        r,
                                    );
                                default:
                                    return null;
                            }
                            return (0, i.jsx)(
                                _,
                                {
                                    blockType: e.type,
                                    children: (0, i.jsx)("div", {
                                        className: o()(V.v1, V.Of, { [V.J1]: 0 === r || h }),
                                        children: a,
                                    }),
                                },
                                r,
                            );
                        })(e, s > 0 ? A[s - 1] : null, s),
                    ),
                });
    },
    tY = function (e) {
        let { handleTransition: t, tab: l, transitionState: n } = e,
            s = r.useRef(null),
            { handleScroll: a } = (0, y.r)(s, l),
            [o, c] = r.useState(!1),
            u = (0, E.uM)(),
            [g, x] = r.useState(ek.md);
        return (
            r.useEffect(() => {
                if (null != s.current) {
                    function e() {
                        if (null == s.current) return;
                        let e = s.current.getDistanceFromBottom();
                        g >= 36 ? c(e < 20) : e <= 200 && x((e) => e + ek.md);
                    }
                    let t = s.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [s, g, x]),
            (0, i.jsxs)("div", {
                className: V.or,
                children: [
                    (0, i.jsxs)(d.Ch, {
                        className: V.bx,
                        ref: s,
                        onScroll: a,
                        children: [
                            (0, i.jsx)(tK, { handleTransition: t, numVisibleItems: g, tab: l }),
                            g >= 36 &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: V.R$,
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
                                                            f.default.track(em.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: u?.sessionId,
                                                                page_type: l,
                                                                page_category:
                                                                    l === ek.G2.HOME ? void 0 : u?.pageCategory,
                                                                cta_name: "browse the shop button",
                                                            }));
                                                    },
                                                    fullWidth: !0,
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(tw, {}),
                                    ],
                                }),
                        ],
                    }),
                    (0, i.jsx)(tV, { isVisible: o, transitioning: n === ek.Pf.OUT }),
                ],
            })
        );
    };
