l.d(t, { A: () => tL });
var n,
    s,
    i = l(477900),
    r = l(582128),
    a = l(503698),
    o = l.n(a),
    c = l(651162),
    u = l(554146),
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
    N = l(998694),
    R = l(415926),
    k = l(399513),
    A = l(607399),
    T = l(946015),
    L = l(717421),
    O = l(834730);
l(321073);
var M = l(140735),
    D = l(496431),
    P = l(105292),
    B = l(302326);
function H(e) {
    let { endDate: t, size: l = "md", className: n, showSeconds: s = !1 } = e,
        { days: r, hours: a, minutes: c, seconds: u } = (0, D.A)(t),
        d = (function (e, t, l, n, s) {
            function i(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let r = [i(e), i(t), i(l)];
            return (s && r.push(i(n)), r.join(":"));
        })(r, a, c, u, s);
    return (0, i.jsxs)("div", {
        className: o()(B.kL, n),
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
                                  className: B.eC,
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
                                  className: B.ai,
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
var U = l(685879);
let F = r.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: l } = e,
        n = (0, L.z)({
            transform: `translateX(-50%) ${l ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!l,
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsxs)(k.animated.div, {
        className: o()([U.lP, A.Fr && U.yJ]),
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
            (0, i.jsx)(H, { endDate: t.endTime }),
        ],
    });
});
var V = l(424918),
    w = l(793574),
    G = l(688810),
    $ = l(196231),
    K = l(105499);
function Y(e) {
    let { handleTransition: t, featuredBlockRecord: l } = e;
    return (0, i.jsx)("div", {
        className: o()(K.n9, K.YB),
        children: l?.subblocks.map((e, l) =>
            e.type === V.u.CATEGORY
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
                              $.S,
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
function z(e) {
    let { handleTransition: t, categories: l } = e;
    if (null == l || l.length < 2) return null;
    let [n, s] = l;
    return (0, i.jsx)("div", {
        className: o()(K.n9, K.YB),
        children: (0, i.jsxs)(p.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != n ? n.name : s?.name,
                pageSection: "featured_block",
                tilePosition: +(null == n),
            },
            children: [
                null != n && (0, i.jsx)($.S, { category: n, enablePreview: !0, handleTransition: t }),
                null != s && (0, i.jsx)($.S, { category: s, handleTransition: t }),
            ],
        }),
    });
}
let W = function (e) {
    let { isLoading: t, handleTransition: l, categories: n, featuredBlockRecord: s } = e,
        { analyticsLocations: r } = (0, G.Ay)(w.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, i.jsxs)("div", {
              className: o()(K.n9, K.YB),
              children: [
                  (0, i.jsx)("div", { className: o()(K.Jn, K.oT), children: (0, i.jsx)("div", { className: K.uy }) }),
                  (0, i.jsx)("div", { className: o()(K.Jn, K.oT), children: (0, i.jsx)("div", { className: K.uy }) }),
              ],
          })
        : null != s
          ? (0, i.jsx)(G.f5, {
                value: r,
                children: (0, i.jsx)(Y, { featuredBlockRecord: s, handleTransition: l, isLoading: !1 }),
            })
          : (0, i.jsx)(G.f5, {
                value: r,
                children: (0, i.jsx)(z, { categories: n, handleTransition: l, isLoading: !1 }),
            });
};
var J = l(334279),
    q =
        (((n = {}).RECOMMENDED = "recommended"),
        (n.POPULAR = "popular"),
        (n.RECENT = "recent"),
        (n.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (n.RANDOM = "random"),
        n),
    X = l(17928),
    Z = l(691885),
    Q = l(775602),
    ee = l(287809),
    et = l(531685),
    el = l(503089),
    en = l(511265),
    es = l(682301),
    ei = l(258245),
    er = l(561769),
    ea = l(484469),
    eo = l(621466),
    ec =
        (((s = {}).MOUNTED = "mounted"),
        (s.SORT_OUT = "sort-out"),
        (s.SORT_IN = "sort-in"),
        (s.SHUFFLE_OUT = "shuffle-out"),
        (s.SHUFFLE_IN = "shuffle-in"),
        (s.FINISHED = "finished"),
        s),
    eu = l(401864),
    ed = l(124987),
    em = l(946716);
let eg = {
    [q.RECENT]: { sortType: ed.$.RECENCY, sortDirection: eu.A.DESC },
    [q.PRICE_LOW_TO_HIGH]: { sortType: ed.$.PRICE, sortDirection: eu.A.ASC },
};
l(667532);
var eh = l(153488),
    ex = l(652215),
    ef = l(783857),
    eE = l(866665),
    ep = l(939249),
    e_ = l(885574),
    eb = l(975807),
    ej = l(975571),
    ev = l(373599);
let eC = function (e) {
        let { personalizedResults: t, label: l } = e,
            n = l ?? P.intl.string(P.t.NSv5KV);
        return (0, i.jsxs)("div", {
            className: ev.L,
            children: [
                (0, i.jsx)(m.D, { variant: "heading-lg/semibold", children: n }),
                t &&
                    (0, i.jsx)(eE.m, {
                        text: P.intl.string(P.t["3taPdj"]),
                        position: "top",
                        "aria-label": P.intl.string(P.t["3taPdj"]),
                        children: (0, i.jsx)(ep.D, {
                            onClick: () => (0, eb.A)(ej.A.getArticleURL(ex.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: ev.s,
                            children: (0, i.jsx)(e_.CircleInformationIcon, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    eS = [],
    ey = function (e) {
        let {
                isLoading: t,
                title: l,
                sortedSkuIds: n,
                numVisibleItems: s,
                tab: a,
                buttonContainerClassName: c,
                orbsSupportedOnly: u,
            } = e,
            d = (0, X.bG)([ee.default], () => ee.default.getCurrentUser()),
            m = (0, er.Mk)(a),
            h = (0, ef.yB)("FeedBlock"),
            {
                sortType: x,
                setSortType: f,
                orderedSkuIds: _,
                sortOptions: b,
                shuffleProducts: j,
                showRecommendationOption: v,
            } = (function (e) {
                let { sortedSkuIds: t } = e,
                    l = (0, X.bG)([eh.A], () => eh.A.hasConsented(ex.YAq.PERSONALIZATION)),
                    n = r.useMemo(() => t?.[q.RECOMMENDED] ?? [], [t]),
                    s = r.useMemo(() => t?.[q.POPULAR] ?? [], [t]),
                    i = n.length > 0 && l,
                    [a, o] = r.useState(i ? q.RECOMMENDED : q.POPULAR),
                    c = r.useCallback(() => {
                        o(q.RANDOM);
                    }, []),
                    u = r.useMemo(() => (a === q.RECOMMENDED ? n : a === q.POPULAR ? s : []), [a, n, s]);
                return {
                    sortType: a,
                    setSortType: o,
                    orderedSkuIds: u,
                    sortOptions: r.useMemo(() => {
                        let e = [
                            { value: q.POPULAR, label: P.intl.string(P.t.Y68e5p) },
                            { value: q.RECENT, label: P.intl.string(P.t["51Bhiz"]) },
                            { value: q.PRICE_LOW_TO_HIGH, label: P.intl.string(P.t.m8RVU2) },
                        ];
                        return (i && e.unshift({ value: q.RECOMMENDED, label: P.intl.string(P.t.zPWgFG) }), e);
                    }, [i]),
                    showRecommendationOption: i,
                    shuffleProducts: c,
                };
            })({ sortedSkuIds: n }),
            C = x === q.RANDOM,
            [S, y] = r.useState(0),
            I = `${x}:${!0 === u}:${S}`,
            [N, R] = r.useState({ key: I, extra: 0 }),
            k = N.key === I ? N.extra : 0;
        N.key !== I && R({ key: I, extra: 0 });
        let {
                skuIds: A,
                isLoading: T,
                hasMore: L,
            } = (function (e) {
                let { sortType: t, orbsSupportedOnly: l, numVisibleItems: n, shuffleNonce: s } = e,
                    i = r.useMemo(
                        () =>
                            (function (e, t) {
                                if (e === q.RANDOM) return { randomize: !0 };
                                if (t && e === q.POPULAR) return { randomize_daily: !0 };
                                let l = eg[e];
                                return null == l ? null : { sort_type: l.sortType, sort_direction: l.sortDirection };
                            })(t, !0 === l),
                        [t, l],
                    ),
                    a = t === q.RANDOM,
                    o = n > 0 && null != i && null != i ? `${JSON.stringify(i)}:${!0 === l}` : null,
                    c = null == o ? null : `${o}:${a ? s : ""}:${n}`,
                    [u, d] = r.useState(null);
                if (
                    (r.useEffect(() => {
                        if (null == c || null == i) return;
                        let e = !1;
                        return (
                            (0, em.$)({
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
            D = A ?? (T ? eS : _),
            B = r.useMemo(() => D.slice(0, s + k + (C ? 32 : 8)), [D, s, k, C]),
            H = (0, es.hv)(B, { needsCategory: !1 }),
            U = (0, el.c)("feed_block"),
            F = (0, en.p)(),
            V = r.useMemo(() => {
                let e = new Set();
                return B.filter((t) => {
                    let l = H[t];
                    if (
                        l?.state === "error" ||
                        (!U && t === J.j.PREMIUM_TIER_2_1_DAY) ||
                        (l?.product != null && 0 === F([l.product]).length)
                    )
                        return !1;
                    let n = l?.product?.storeListingId;
                    if (null != n) {
                        if (e.has(n)) return !1;
                        e.add(n);
                    }
                    return !0;
                });
            }, [B, H, U, F]),
            $ = r.useMemo(
                () =>
                    !T &&
                    B.every((e) => {
                        let t = H[e]?.state;
                        return "ready" === t || "error" === t;
                    }),
                [T, B, H],
            ),
            Y = !C && L && k < 16,
            z = s - V.length;
        if ($ && z > 0 && Y) {
            let e = Math.min(16, k + z + 8);
            e !== k && R({ key: I, extra: e });
        }
        let W = (0, X.bG)([Q.Ay], () => Q.Ay.useReducedMotion),
            eu = (0, X.bG)([et.A], () => et.A.isFocused()),
            ed = !W && eu,
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
            $ && e_();
        }, [$, e_]);
        let eb = (0, p.uM)(),
            ej = eb?.sessionId ?? "",
            { analyticsLocations: ev } = (0, G.Ay)(w.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            ey = r.useRef(null),
            eI = r.useRef(null),
            [eN, eR] = r.useState(!1),
            ek = r.useCallback(
                (e) => {
                    (eR(!1),
                        ep({ isShuffling: !1, onOutroComplete: () => f(e), returnRef: eI }),
                        E.default.track(ex.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: ej,
                            sort_type: e,
                        }));
                },
                [ep, f, ej],
            );
        return null == d
            ? null
            : (0, i.jsx)(G.f5, {
                  value: ev,
                  children: (0, i.jsxs)("div", {
                      className: o()(K.lD, K.YB),
                      children: [
                          (0, i.jsxs)("div", {
                              className: K.$6,
                              children: [
                                  (0, i.jsx)(eC, { label: l, personalizedResults: v }),
                                  (0, i.jsxs)("div", {
                                      className: o()(K.IE, { [ef.jP]: h }),
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: K.gd,
                                              children: [
                                                  (0, i.jsx)(O.E, {
                                                      variant: "text-md/medium",
                                                      children: P.intl.string(P.t.uaX705),
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: o()(c, K.pI),
                                                      ref: eI,
                                                      children: (0, i.jsx)(Z.l, {
                                                          label: P.intl.string(P.t.uaX705),
                                                          hideLabel: !0,
                                                          options: b,
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
                                              children: (0, i.jsx)(g.$, {
                                                  variant: "secondary",
                                                  text: P.intl.string(P.t.X3tnc4),
                                                  buttonRef: ey,
                                                  onClick: function () {
                                                      (eR(!0),
                                                          ep({
                                                              isShuffling: !0,
                                                              onOutroComplete: () => {
                                                                  (j(), y((e) => e + 1));
                                                              },
                                                              returnRef: ey,
                                                              holdIntroUntilReady: !0,
                                                          }),
                                                          E.default.track(
                                                              ex.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: ej },
                                                          ));
                                                  },
                                                  disabled: eE !== ec.MOUNTED && eE !== ec.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(M.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: eN && eE === ec.FINISHED ? P.intl.string(P.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: K.hm,
                              children: t
                                  ? (0, i.jsx)(i.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, i.jsx)(ea.A, {}, t + 1)),
                                    })
                                  : ed && eE === ec.SHUFFLE_OUT
                                    ? [...Array(s)].map((e, t) =>
                                          (0, i.jsx)(
                                              "div",
                                              { className: K.Z2, children: (0, i.jsx)(ea.A, {}) },
                                              `shuffle-placeholder-${t}`,
                                          ),
                                      )
                                    : T && null == A
                                      ? (0, i.jsx)(i.Fragment, {
                                            children: [...Array(12)].map((e, t) => (0, i.jsx)(ea.A, {}, t + 1)),
                                        })
                                      : V.slice(0, s).map((e, t) => {
                                            let l;
                                            return (
                                                ed &&
                                                    (eE === ec.SORT_OUT
                                                        ? (l = K.MW)
                                                        : eE === ec.SHUFFLE_IN
                                                          ? (l = K.aS)
                                                          : eE === ec.SORT_IN && (l = K.F7)),
                                                (0, i.jsx)(
                                                    p.R9,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: "popular picks",
                                                            categoryPosition: 2,
                                                        },
                                                        children: (0, i.jsx)("div", {
                                                            className: l,
                                                            children: (0, i.jsx)(ei.A, {
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
var eI = l(269115),
    eN = l(43990),
    eR = l(890856),
    ek = l(408278),
    eA = l(789645),
    eT = l(976860),
    eL = l(758836),
    eO = l(49999),
    eM = l(818348),
    eD = l(394107),
    eP = l(196064);
let eB = "GAME_SERVER_HOSTING_BANNER";
function eH(e) {
    let { gameServerHostingBannerBlock: t, tab: l } = e,
        n = (0, p.uM)(),
        s = r.useRef(null),
        a = r.useRef(!1),
        c = r.useRef(null),
        [d, x] = r.useState(!1),
        f = r.useCallback(
            (e) => {
                E.default.track(ex.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: n?.sessionId,
                    page_type: l,
                    page_category: n?.pageCategory,
                    page_section: n?.pageSection,
                    tile_type: eB,
                    cta_name: e,
                });
            },
            [n?.sessionId, n?.pageCategory, n?.pageSection, l],
        ),
        _ = r.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    f("go_to_game_server_hosting"),
                    (0, eT.pX)(ex.BVt.COLLECTIBLES_SHOP_WITH_TAB(eL.G2.GAME_SERVERS)));
            },
            [f],
        ),
        b = r.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    f("dismiss"),
                    x(!0),
                    !0 === t.isDismissible &&
                        (0, h.d6)(u.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
                            dismissAction: eO.i.USER_DISMISS,
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
                                  E.default.track(ex.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: n?.sessionId,
                                      page_type: l,
                                      page_category: n?.pageCategory,
                                      page_section: n?.pageSection,
                                      type: eB,
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
        : (0, i.jsx)(eN.N, {
              theme: eM.NJ.DARK,
              children: (e) =>
                  (0, i.jsx)(eI.L, {
                      innerRef: s,
                      onChange: j,
                      threshold: 0,
                      children: (0, i.jsx)("div", {
                          ref: s,
                          className: o()(eP.YB, e),
                          children: (0, i.jsxs)(eR.s, {
                              className: eP.kL,
                              onClick: _,
                              "aria-label": P.intl.string(eD.default["34GMP9"]),
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
                                          children: (0, i.jsx)(ek.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: eA.P,
                                              onClick: b,
                                              "aria-label": P.intl.string(P.t.WAI6xu),
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
                                                          children: P.intl.string(eD.default["34GMP9"]),
                                                      }),
                                                      (0, i.jsx)(O.E, {
                                                          className: eP.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: P.intl.string(eD.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, i.jsx)(g.$, {
                                                  variant: "overlay-primary",
                                                  text: P.intl.string(P.t.jVcuVY),
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
var eU = l(946052),
    eF = l(331322),
    eV = l(773669),
    ew = l(480750),
    eG = l(192943),
    e$ = l(442036),
    eK = l(212407),
    eY = l(815280),
    ez = l(60140),
    eW = l(602051),
    eJ = l(268270);
function eq(e) {
    let { promotion: t, heroBlockRecord: l, heroLogo: n, logoDisplayConfig: s, collectionId: r, isLoading: a } = e;
    return a
        ? (0, i.jsx)("div", { className: eJ.Hw })
        : (0, i.jsxs)("div", {
              className: eJ.Hw,
              children: [
                  (0, i.jsxs)("div", {
                      className: eJ.Wq,
                      children: [
                          null != n &&
                              (0, i.jsx)("img", { className: eJ.rm, src: n, alt: l.name, style: s?.toDesktopStyles() }),
                          null != l.title &&
                              (0, i.jsx)(m.D, { variant: "heading-xxl/bold", color: "text-strong", children: l.title }),
                          null != l.summary &&
                              "" !== l.summary &&
                              (0, i.jsx)(eF.B, {
                                  onClick: (e) => (0, ew.h)(e, t, eW.S.HOME),
                                  children: (0, i.jsx)(O.E, {
                                      variant: "text-sm/normal",
                                      className: o()(eJ.Tm, eJ.vd),
                                      style: { color: null != l.bannerTextColor ? l.bannerTextColor : void 0 },
                                      children: l.summary,
                                  }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(eG.A, { collectionId: r, variant: "condensed", surface: eW.S.HOME }),
              ],
          });
}
let eX = function (e) {
    let { promotion: t, heroBlock: l, isLoading: n, handleTransition: s, tab: a } = e,
        c = (0, X.bG)([ee.default], () => ee.default.getCurrentUser()),
        u = (0, X.bG)([eV.default], () => eV.default.locale),
        d = (0, p.uM)(),
        { analyticsLocations: m } = (0, G.Ay)(w.A.COLLECTIBLES_SHOP_HERO),
        g = r.useMemo(() => (0, C.HF)(t, l), [t, l]),
        h = r.useMemo(() => (0, C.O8)(t, l, a, u), [t, l, a, u]),
        {
            bannerDisplayConfig: x,
            logoDisplayConfig: f,
            heroLogo: _,
            heroBannerStatic: b,
            heroBannerAnimated: j,
        } = (0, eK.Kk)(h),
        v = x?.responsive ?? !1,
        S = x?.backgroundStyle;
    function y() {
        (s?.({ sourceButton: "shop latest category hero", categorySkuId: h.categorySkuId, isInternalShopDeeplink: !0 }),
            E.default.track(ex.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: d?.sessionId,
                sku_id: h.categorySkuId,
                page_type: a,
                page_section: d?.pageSection,
                page_category: d?.pageCategory,
                cta_name: "shop latest category hero button",
            }),
            (0, ew.l)(t, eW.S.HOME, eW.Z.VIEW_ALL_ITEMS_CLICKED));
    }
    return null == c || null == g
        ? null
        : (0, i.jsx)(G.f5, {
              value: m,
              children: (0, i.jsxs)("div", {
                  className: eJ.os,
                  children: [
                      (0, i.jsx)("div", {
                          className: o()(eJ.vK, { [eJ.no]: v }),
                          style: null != S ? { background: S } : void 0,
                          children: null != b && (0, i.jsx)(eY.A, { bannerStatic: b, isResponsive: v }),
                      }),
                      (0, i.jsxs)("div", {
                          className: eJ.xX,
                          children: [
                              (0, i.jsx)("div", {
                                  className: eJ.zl,
                                  style: null != S ? { background: S } : void 0,
                                  children:
                                      null != b &&
                                      (0, i.jsx)(eY.A, { bannerStatic: b, bannerAnimated: j, isResponsive: v }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: eJ.mz,
                                  children: [
                                      (0, i.jsx)(eN.N, {
                                          theme: ex.NJ8.DARK,
                                          children: (e) =>
                                              (0, i.jsxs)("div", {
                                                  className: e,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: eJ.bC,
                                                          children: (0, i.jsx)(eq, {
                                                              promotion: t,
                                                              heroBlockRecord: h,
                                                              heroLogo: _,
                                                              logoDisplayConfig: f,
                                                              collectionId: l.categorySkuId,
                                                              isLoading: n,
                                                          }),
                                                      }),
                                                      (0, i.jsx)(e$.A, { onShopCollectionClick: y, className: eJ.ti }),
                                                  ],
                                              }),
                                      }),
                                      (0, i.jsx)(ez.A, {
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
        { bannerUrl: s, bannerAnimatedUrl: r } = (0, eK.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        o = null != t.body && "" !== t.body,
        c = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
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
                        null != t.endTime ? (0, i.jsx)(H, { endDate: t.endTime, size: "lg" }) : null,
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
var e2 = l(197935),
    e5 = l(590180),
    e6 = l(313276),
    e3 = l(206077),
    e8 = l(554661);
function e9(e) {
    return e.skuId;
}
function e4(e) {
    let { product: t, index: l, shelfName: n, prioritizedCurrency: s, listItemProps: r } = e;
    return (0, i.jsx)(p.R9, {
        newValue: { tilePosition: l, pageSection: n, categoryPosition: 2 },
        children: (0, i.jsx)(ei.A, { skuId: t.skuId, prioritizedCurrency: s, listItemProps: r }),
    });
}
let e7 = function (e) {
    let { shelf: t, handleTransition: l, tab: n } = e,
        s = (0, X.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = (0, er.Mk)(n),
        c = (0, X.bG)([e5.A], () => (null != t.categorySkuId ? e5.A.getCategory(t.categorySkuId) : void 0)),
        u = (0, e6.A)(),
        d = r.useMemo(() => u(t.rankedSkuIds), [t.rankedSkuIds, u]),
        h = (0, e3.X)(d),
        { analyticsLocations: x } = (0, G.Ay)(w.A.COLLECTIBLES_SHOP_SHELF),
        f = r.useMemo(() => h.filter((e) => null != e5.A.getCategoryForProduct(e.skuId)), [h]),
        E = r.useCallback(() => {
            l({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: c?.isOrbsExclusive === !0 && n !== eL.G2.ORBS,
            });
        }, [t.categorySkuId, c, l, n]);
    if (null == s || 0 === h.length) return null;
    let p = t.buttonText ?? P.intl.formatToPlainString(P.t.bc9RBE, { category_name: t.name }),
        _ = t.showButton,
        b = t.desktopBackgroundImage,
        j = null != b;
    return (0, i.jsx)(G.f5, {
        value: x,
        children: (0, i.jsxs)("div", {
            className: o()(e8.mu, K.YB, j ? e8.VA : e8.Ti),
            children: [
                j && (0, i.jsx)("img", { className: e8.iL, src: b, alt: "", "aria-hidden": !0 }),
                (0, i.jsxs)("div", {
                    className: e8.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: e8.wx,
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
                        (0, i.jsx)(e2.A, {
                            gap: "xl",
                            edgeFade: j ? "sm" : void 0,
                            items: f,
                            getItemKey: e9,
                            maintainFocusOnReorder: !0,
                            renderItem: (e, l, n) =>
                                (0, i.jsx)(
                                    e4,
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
var te = l(465794),
    tt = l(69236),
    tl = l(44724),
    tn = l(421108),
    ts = l(482358),
    ti = l(202541);
let tr = function (e) {
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
            termsUrl: g,
            backgroundImageUrl: h,
        } = e,
        x = (0, tn.ur)(u) ?? void 0,
        f = (0, tt.W8)(),
        E = r.useMemo(() => {
            if ("none" !== d)
                return "nitro" !== d || f
                    ? {
                          kind: "button",
                          text: P.intl.string(P.t.apFNLU),
                          onClick: () => (0, tl.default)({ applicationId: t }),
                          onMouseDown: () => (0, tl.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, i.jsx)(te.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: ti.pe.TIER_2,
                              buttonTextOverride: P.intl.string(P.t.pj0XBN),
                          }),
                      };
        }, [d, t, f]);
    return (0, i.jsx)(ts.A, {
        skuIds: o,
        tab: c,
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
var ta = l(199510),
    to = l.n(ta),
    tc = l(575593),
    tu = l(531142),
    td = l(559106),
    tm = l(765671),
    tg = l(713517),
    th = l(161918);
let tx = (0, l(945810).mj)({
    name: "2026-10-collectibles-interactive-jumble-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tf = l(597783),
    tE = l(536572),
    tp = l(929283),
    t_ = l(171934);
let tb = { standalonePreview: !0 },
    tj = [
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
function tv(e, t, l) {
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
function tC(e, t) {
    let l = (0, th.Mk)()?.tab,
        { handleCardVisibilityChange: n } = (0, tf.Z)(e, l, "jumble product");
    r.useEffect(() => {
        n(t);
    }, [t, n]);
}
function tS(e) {
    let { config: t, baseLeft: l, peaking: n, transitioning: s, product: r, item: a } = e;
    return (
        tC(r.skuId, n),
        (0, i.jsx)("div", {
            className: t_.LY,
            style: tv(t, l, s),
            children: (0, i.jsx)(tp.i, { item: a, className: t_.my }),
        })
    );
}
function ty(e) {
    let { config: t, baseLeft: l, peaking: n, transitioning: s, product: a, item: o } = e,
        c = (0, X.bG)([ee.default], () => ee.default.getCurrentUser()),
        u = r.useRef(null),
        { isHoveringOrFocusing: d } = (0, tg.A)(u);
    tC(a.skuId, n);
    let m = (0, th.Mk)()?.tab,
        g = (0, p.uM)(),
        h = r.useCallback(() => {
            E.default.track(ex.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: g?.sessionId,
                sku_id: a.skuId,
                page_type: m,
                page_section: g?.pageSection,
                page_category: g?.pageCategory,
                tile_type: "JUMBLE_PRODUCT",
                tile_position: String(g?.tilePosition),
            });
        }, [a.skuId, m, g]),
        x = (0, er.ql)(a, w.A.COLLECTIBLES_SHOP_TRANSITION_JUMBLE_ITEM, h);
    return (0, i.jsx)("div", {
        ref: u,
        className: t_.LY,
        style: tv(t, l, s),
        children: (0, i.jsx)(ep.D, {
            onClick: x,
            "aria-label": (0, tE.s7)(a),
            className: t_.vk,
            children: (0, i.jsx)(tp.i, { item: o, className: t_.my, user: c, isHighlighted: d }),
        }),
    });
}
function tI(e) {
    let { peaking: t, transitioning: l } = e,
        { ref: n, width: s } = (0, tm.Ay)(),
        [a] = r.useState(() =>
            to()(tj).map((e) => ({
                skuId: e,
                verticalOffset: -12 + 36 * Math.random(),
                rotation: -24 + 48 * Math.random(),
                horizontalJitter: -(20 * Math.random()),
                transitionOffsetLeft: -20 - 35 * Math.random(),
                transitionDelay: `${Math.random() / 3}s`,
                transitionDuration: `${eL.H1 - 200 * Math.random()}ms`,
            })),
        ),
        c = tx.useConfig({ location: "shop_transition_jumble" }).enabled,
        u = (0, es.hv)(tj, { needsCategory: !1, flattenVariants: !0 }),
        d = r.useMemo(() => {
            let e = a.filter((e) => {
                let t = u[e.skuId]?.product;
                return t?.items[0] != null && t.type === tc.R.AVATAR_DECORATION;
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
        className: o()(t_.rA, { [t_.Kb]: t }),
        children: (0, i.jsx)(er.v3.Provider, {
            value: tb,
            children: (0, i.jsx)(tu.g.Provider, {
                value: !0 === l || !0 !== t,
                children: m.map((e, n) => {
                    let s,
                        { config: r, baseLeft: a } = e,
                        o = u[r.skuId]?.product ?? e5.A.getProduct(r.skuId),
                        d = null != (s = o?.items[0]) && o?.type === tc.R.AVATAR_DECORATION ? s : null;
                    if (null == o || null == d) return null;
                    let m = r.skuId + n,
                        g = { config: r, baseLeft: a, peaking: t, transitioning: l, product: o, item: d };
                    return (0, i.jsx)(
                        p.R9,
                        {
                            newValue: { pageSection: "transition_jumble", tilePosition: n },
                            children: c ? (0, i.jsx)(ty, { ...g }) : (0, i.jsx)(tS, { ...g }),
                        },
                        m,
                    );
                }),
            }),
        }),
    });
}
function tN() {
    return (0, i.jsx)("div", { className: o()(t_.I2, t_.F$) });
}
function tR(e) {
    let { isVisible: t, transitioning: l } = e,
        n = r.useRef(null);
    return (0, i.jsx)(td.xp, {
        containerRef: n,
        children: (0, i.jsx)("div", {
            className: o()(t_.I2, t_.MU),
            ref: n,
            children: (0, i.jsx)(tI, { peaking: t, transitioning: l }),
        }),
    });
}
var tk = l(815021);
let tA = function (e) {
        let { wideBannerBlock: t, tab: l } = e,
            n = e5.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            s = r.useRef(null),
            a = r.useRef(null),
            [c, d] = r.useState(),
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
            { handleCardVisibilityChange: b } = (0, tf.Z)(_, "home", "marketing wide banner"),
            j = (0, p.uM)(),
            { bannerURL: v } = (0, eK.w$)(t),
            C = l === eL.G2.ORBS,
            S = null != t.ctaRoute && "" !== t.ctaRoute,
            y = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || S),
            I = null != t.logoURL && "" !== t.logoURL,
            N = r.useCallback(() => {
                if ((f(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, h.$l)(u.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: eO.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            R = r.useCallback(
                (e) => {
                    E.default.track(ex.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    if ((R(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    l = parseInt(t[2], 10);
                                (0, tl.default)({ guildId: e, pageIndex: l });
                            }
                        } else (0, eT.pX)(e);
                    }
                },
                [t.ctaRoute, R],
            );
        if (null == v || x) return null;
        let A = o()(K.nM, K.Tq, K.TS, K.YB, { [K._1]: C, [K.vb]: S }),
            T = (0, i.jsxs)(i.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, i.jsx)("div", {
                            className: K.Mh,
                            children: (0, i.jsx)(tk.J, {
                                size: "sm",
                                onClick: (e) => {
                                    (e.stopPropagation(), N());
                                },
                                "aria-label": P.intl.string(P.t.WAI6xu),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: o()(K.zK, { [K._1]: C }),
                        style: null != c ? { height: `${c}px` } : void 0,
                        children: (0, i.jsx)("img", {
                            ref: a,
                            src: v,
                            alt: t.title,
                            className: o()(K.LN, { [K.d5]: C }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: o()(K.Ep, { [K.Qq]: y }),
                        style: { maxHeight: null != c ? `${c}px` : "auto" },
                        children: (0, i.jsxs)("div", {
                            className: K.E8,
                            children: [
                                (0, i.jsx)(m.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: C ? K.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, i.jsx)(O.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: C ? "text-md/medium" : "text-sm/medium",
                                    children: C
                                        ? P.intl.format(P.t.SFFP7K, {
                                              helpdeskArticle: ej.A.getArticleURL(ex.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                y &&
                                    (0, i.jsxs)("div", {
                                        className: K.nP,
                                        children: [
                                            (0, i.jsx)(g.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    (e.stopPropagation(), k(t.ctaText ?? P.intl.string(P.t.jVcuVY)));
                                                },
                                                text: t.ctaText ?? P.intl.string(P.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? P.intl.formatToPlainString(P.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            I && (0, i.jsx)("img", { src: t.logoURL, alt: "", className: K.bU }),
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
                (0, i.jsx)(eI.L, {
                    innerRef: s,
                    onChange: b,
                    threshold: 0,
                    children: S
                        ? (0, i.jsx)(ep.D, { innerRef: s, onClick: () => k(null), className: o()(e, A), children: T })
                        : (0, i.jsx)("div", { ref: s, className: o()(e, A), children: T }),
                }),
        });
    },
    tT = (e) => {
        let { handleTransition: t, numVisibleItems: l, tab: n } = e,
            { noCache: s, includeUnpublished: a } = (0, N.A)(),
            [d, m] = r.useState(!1),
            g = (0, p.uM)(),
            E = g?.sessionId ?? "",
            _ = (0, x.H)({ location: "collectibles_shop_feed" }),
            { promotion: R, isFetchingPromotion: k } = (0, j.TI)();
        r.useEffect(() => {
            (0, S.z)({
                sessionId: E,
                checkpoint: S.t.SHOP_MOUNTED,
                tab: n,
                unpublishedCategoriesShown: a,
                cacheDisabled: s,
            });
        }, [n]);
        let {
                isFetchingShopHome: A,
                fetchShopHomeError: T,
                shopBlocks: L,
                refreshShopHome: O,
            } = (0, v.y)(n, { noCache: s, includeUnpublished: a, logPerf: !0 }, { sessionId: E, tab: n }),
            M = r.useCallback(() => {
                O();
            }, [O]);
        return (r.useEffect(() => {
            null != T ||
                A ||
                0 === L.length ||
                (0, S.z)({
                    sessionId: E,
                    checkpoint: S.t.SHOP_RENDERED,
                    tab: n,
                    unpublishedCategoriesShown: a,
                    cacheDisabled: s,
                });
        }, [T, A, L.length, a, s, E, n]),
        null != T)
            ? (0, i.jsx)(I.h, { onRetry: M, errorOrigin: I.A.SHOP_PAGE, errorMessage: T.message })
            : A || 0 === L.length
              ? (0, i.jsxs)("div", {
                    className: o()(K.g4, K.Of),
                    children: [
                        (0, i.jsx)(eU.A, { isLoading: A || k, handleTransition: t, tab: n }),
                        (0, i.jsx)(W, { isLoading: A, handleTransition: t, categories: [] }),
                        (0, i.jsx)(ey, {
                            isLoading: A,
                            title: n === eL.G2.ORBS ? P.intl.string(P.t.dFgeuZ) : P.intl.string(P.t.NSv5KV),
                            numVisibleItems: l,
                            tab: n,
                        }),
                    ],
                })
              : (0, i.jsx)(i.Fragment, {
                    children: L.map((e, s) =>
                        (function (e, s, r) {
                            if (null == e) return null;
                            let a = null,
                                g = !1;
                            switch (e.type) {
                                case c.g.HERO:
                                    let x = (0, C.HF)(R, e);
                                    if (
                                        null != R &&
                                        x?.subtype === f.h5.TAKEOVER &&
                                        (null == R.endsAt || null != (0, y.X)(R.endsAt))
                                    ) {
                                        a = (0, i.jsx)(
                                            eX,
                                            { promotion: R, isLoading: k, handleTransition: t, heroBlock: e, tab: n },
                                            r,
                                        );
                                        break;
                                    }
                                    a = (0, i.jsx)(
                                        eU.A,
                                        { isLoading: k, handleTransition: t, heroBlock: e, tab: n },
                                        r,
                                    );
                                    break;
                                case c.g.FEATURED:
                                    a = (0, i.jsx)(
                                        W,
                                        { isLoading: !1, handleTransition: t, featuredBlockRecord: e },
                                        r,
                                    );
                                    break;
                                case c.g.FEED:
                                    let E = e.sortedSkuIds;
                                    a = (0, i.jsx)(
                                        ey,
                                        {
                                            title:
                                                n === eL.G2.ORBS
                                                    ? P.intl.string(P.t.dFgeuZ)
                                                    : P.intl.string(P.t.NSv5KV),
                                            numVisibleItems: l,
                                            sortedSkuIds: E,
                                            buttonContainerClassName: s?.type === c.g.IMMERSIVE_BANNER ? K.w : void 0,
                                            tab: n,
                                            orbsSupportedOnly: n === eL.G2.ORBS,
                                        },
                                        r,
                                    );
                                    break;
                                case c.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: l } = (0, h.En)(u.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (l) return null;
                                    }
                                    a = (0, i.jsx)(tA, { wideBannerBlock: e, tab: n }, r);
                                    break;
                                case c.g.SHELF:
                                    a = (0, i.jsx)(e7, { handleTransition: t, shelf: e, tab: n }, r);
                                    break;
                                case c.g.COUNTDOWN_TIMER:
                                    ((a = (0, i.jsx)(F, { countdownTimerBlock: e, isVisible: d }, r)), (g = !0));
                                    break;
                                case c.g.IMMERSIVE_BANNER:
                                    a = (0, i.jsx)(
                                        e1,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => m(!e) },
                                        r,
                                    );
                                    break;
                                case c.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !_ ||
                                        (!0 === e.isDismissible &&
                                            (0, h.En)(u.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, i.jsx)(
                                        b,
                                        {
                                            blockType: e.type,
                                            children: (0, i.jsx)(eH, { gameServerHostingBannerBlock: e, tab: n }),
                                        },
                                        r,
                                    );
                                case c.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, i.jsx)(
                                        b,
                                        {
                                            blockType: e.type,
                                            children: (0, i.jsx)(tr, {
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
                                b,
                                {
                                    blockType: e.type,
                                    children: (0, i.jsx)("div", {
                                        className: o()(K.v1, K.Of, { [K.J1]: 0 === r || g }),
                                        children: a,
                                    }),
                                },
                                r,
                            );
                        })(e, s > 0 ? L[s - 1] : null, s),
                    ),
                });
    },
    tL = function (e) {
        let { handleTransition: t, tab: l, transitionState: n } = e,
            s = r.useRef(null),
            { handleScroll: a } = (0, R.r)(s, l),
            [o, c] = r.useState(!1),
            u = (0, p.uM)(),
            [h, x] = r.useState(eL.md);
        return (
            r.useEffect(() => {
                if (null != s.current) {
                    function e() {
                        if (null == s.current) return;
                        let e = s.current.getDistanceFromBottom();
                        h >= 36 ? c(e < 20) : e <= 200 && x((e) => e + eL.md);
                    }
                    let t = s.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [s, h, x]),
            (0, i.jsxs)("div", {
                className: K.or,
                children: [
                    (0, i.jsxs)(d.Ch, {
                        className: K.bx,
                        ref: s,
                        onScroll: a,
                        children: [
                            (0, i.jsx)(tT, { handleTransition: t, numVisibleItems: h, tab: l }),
                            h >= 36 &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: K.R$,
                                            children: [
                                                (0, i.jsx)(m.D, {
                                                    variant: "heading-md/semibold",
                                                    children: P.intl.string(P.t.Yr70c4),
                                                }),
                                                (0, i.jsx)(g.$, {
                                                    variant: "primary",
                                                    text: P.intl.string(P.t.AfrvRD),
                                                    onClick: () => {
                                                        (t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                            E.default.track(ex.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: u?.sessionId,
                                                                page_type: l,
                                                                page_category:
                                                                    l === eL.G2.HOME ? void 0 : u?.pageCategory,
                                                                cta_name: "browse the shop button",
                                                            }));
                                                    },
                                                    fullWidth: !0,
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(tN, {}),
                                    ],
                                }),
                        ],
                    }),
                    (0, i.jsx)(tR, { isVisible: o, transitioning: n === eL.Pf.OUT }),
                ],
            })
        );
    };
