n.d(t, { A: () => t$ });
var l,
    r,
    s = n(477900),
    a = n(582128),
    i = n(503698),
    o = n.n(i),
    c = n(651162),
    u = n(554146),
    d = n(516521),
    m = n(534514),
    g = n(821609),
    h = n(543862),
    p = n(196736),
    f = n(129230),
    x = n(857512);
let E = a.createContext(null);
function v(e) {
    let { blockType: t, children: n } = e,
        l = a.useMemo(() => ({ blockType: t }), [t]);
    return (0, s.jsx)(E.Provider, { value: l, children: n });
}
var C = n(304210),
    _ = n(208930),
    y = n(100057),
    b = n(599062),
    S = n(998694),
    I = n(415926),
    A = n(120692),
    k = n(607399),
    L = n(946015),
    j = n(717421),
    N = n(834730);
n(321073);
var O = n(140735),
    R = n(496431),
    T = n(792996),
    M = n(302326);
function D(e) {
    let { endDate: t, size: n = "md", className: l, showSeconds: r = !1 } = e,
        { days: a, hours: i, minutes: c, seconds: u } = (0, R.A)(t),
        d = (function (e, t, n, l, r) {
            function s(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let a = [s(e), s(t), s(n)];
            return (r && a.push(s(l)), a.join(":"));
        })(a, i, c, u, r);
    return (0, s.jsxs)("div", {
        className: o()(M.kL, l),
        role: "timer",
        children: [
            d
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, s.jsx)(
                              N.E,
                              {
                                  color: "none",
                                  variant: "md" === n ? "heading-lg/semibold" : "heading-xxl/semibold",
                                  className: M.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, s.jsx)(
                              N.E,
                              {
                                  color: "text-overlay-light",
                                  variant: "md" === n ? "heading-sm/semibold" : "heading-xl/semibold",
                                  className: M.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, s.jsx)(O.A, { children: T.intl.format(T.t.j6IyVe, { days: a, hours: i, minutes: c }) }),
        ],
    });
}
var B = n(685879);
let P = a.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        l = (0, j.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, s.jsxs)(A.animated.div, {
        className: o()([B.lP, k.Fr && B.yJ]),
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
            (0, s.jsxs)(L.s, {
                direction: L.s.Direction.VERTICAL,
                children: [
                    (0, s.jsx)(N.E, {
                        variant: "body-md/medium",
                        className: B.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, s.jsx)(N.E, {
                            variant: "body-sm/medium",
                            className: B.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, s.jsx)(D, { endDate: t.endTime }),
        ],
    });
});
var w = n(424918),
    H = n(793574),
    U = n(688810),
    G = n(454688),
    $ = n(196231),
    F = n(105499);
function V(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, s.jsx)("div", {
        className: o()(F.n9, F.YB),
        children: n?.subblocks.map((e, n) =>
            e.type === w.u.CATEGORY
                ? (0, s.jsx)(
                      x.R9,
                      {
                          newValue: {
                              categoryPosition: 1,
                              pageCategory: e.name,
                              pageSection: "featured_block",
                              tilePosition: n,
                          },
                          children: (0, s.jsx)(
                              $.S,
                              { subblock: e, enablePreview: 0 === n, handleTransition: t },
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
    let { handleTransition: t, categories: n } = e;
    if (null == n || n.length < 2) return null;
    let [l, r] = n;
    return (0, s.jsx)("div", {
        className: o()(F.n9, F.YB),
        children: (0, s.jsxs)(x.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != l ? l.name : r?.name,
                pageSection: "featured_block",
                tilePosition: +(null == l),
            },
            children: [
                null != l && (0, s.jsx)($.S, { category: l, enablePreview: !0, handleTransition: t }),
                null != r && (0, s.jsx)($.S, { category: r, handleTransition: t }),
            ],
        }),
    });
}
let W = function (e) {
    let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: r } = e,
        { analyticsLocations: a } = (0, U.Ay)(H.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, s.jsxs)("div", { className: o()(F.n9, F.YB), children: [(0, s.jsx)(G.R3, {}), (0, s.jsx)(G.R3, {})] })
        : null != r
          ? (0, s.jsx)(U.f5, {
                value: a,
                children: (0, s.jsx)(V, { featuredBlockRecord: r, handleTransition: n, isLoading: !1 }),
            })
          : (0, s.jsx)(U.f5, {
                value: a,
                children: (0, s.jsx)(K, { categories: l, handleTransition: n, isLoading: !1 }),
            });
};
var z = n(334279),
    X =
        (((l = {}).RECOMMENDED = "recommended"),
        (l.POPULAR = "popular"),
        (l.RECENT = "recent"),
        (l.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (l.RANDOM = "random"),
        l),
    Y = n(855986),
    q = n(691885),
    Z = n(775602),
    J = n(287809),
    Q = n(531685),
    ee = n(503089),
    et = n(511265),
    en = n(682301),
    el = n(987421),
    er = n(561769),
    es = n(484469),
    ea = n(621466),
    ei =
        (((r = {}).MOUNTED = "mounted"),
        (r.SORT_OUT = "sort-out"),
        (r.SORT_IN = "sort-in"),
        (r.SHUFFLE_OUT = "shuffle-out"),
        (r.SHUFFLE_IN = "shuffle-in"),
        (r.FINISHED = "finished"),
        r),
    eo = n(401864),
    ec = n(124987),
    eu = n(946716);
let ed = {
    [X.RECENT]: { sortType: ec.$.RECENCY, sortDirection: eo.A.DESC },
    [X.PRICE_LOW_TO_HIGH]: { sortType: ec.$.PRICE, sortDirection: eo.A.ASC },
};
n(667532);
var em = n(153488),
    eg = n(652215),
    eh = n(460348),
    ep = n(866665),
    ef = n(939249),
    ex = n(885574),
    eE = n(975807),
    ev = n(975571),
    eC = n(373599);
let e_ = function (e) {
        let { personalizedResults: t, label: n } = e,
            l = n ?? T.intl.string(T.t.NSv5KV);
        return (0, s.jsxs)("div", {
            className: eC.L,
            children: [
                (0, s.jsx)(m.D, { variant: "heading-lg/semibold", children: l }),
                t &&
                    (0, s.jsx)(ep.m, {
                        text: T.intl.string(T.t["3taPdj"]),
                        position: "top",
                        "aria-label": T.intl.string(T.t["3taPdj"]),
                        children: (0, s.jsx)(ef.D, {
                            onClick: () => (0, eE.A)(ev.A.getArticleURL(eg.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: eC.s,
                            children: (0, s.jsx)(ex.CircleInformationIcon, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    ey = [],
    eb = function (e) {
        let {
                isLoading: t,
                title: n,
                sortedSkuIds: l,
                numVisibleItems: r,
                tab: i,
                buttonContainerClassName: c,
                orbsSupportedOnly: u,
            } = e,
            d = (0, Y.bG)([J.default], () => J.default.getCurrentUser()),
            m = (0, er.Mk)(i),
            h = (0, eh.yB)("FeedBlock"),
            {
                sortType: p,
                setSortType: E,
                orderedSkuIds: v,
                sortOptions: C,
                shuffleProducts: _,
                showRecommendationOption: y,
            } = (function (e) {
                let { sortedSkuIds: t } = e,
                    n = (0, Y.bG)([em.A], () => em.A.hasConsented(eg.YAq.PERSONALIZATION)),
                    l = a.useMemo(() => t?.[X.RECOMMENDED] ?? [], [t]),
                    r = a.useMemo(() => t?.[X.POPULAR] ?? [], [t]),
                    s = l.length > 0 && n,
                    [i, o] = a.useState(s ? X.RECOMMENDED : X.POPULAR),
                    c = a.useCallback(() => {
                        o(X.RANDOM);
                    }, []),
                    u = a.useMemo(() => (i === X.RECOMMENDED ? l : i === X.POPULAR ? r : []), [i, l, r]);
                return {
                    sortType: i,
                    setSortType: o,
                    orderedSkuIds: u,
                    sortOptions: a.useMemo(() => {
                        let e = [
                            { value: X.POPULAR, label: T.intl.string(T.t.Y68e5p) },
                            { value: X.RECENT, label: T.intl.string(T.t["51Bhiz"]) },
                            { value: X.PRICE_LOW_TO_HIGH, label: T.intl.string(T.t.m8RVU2) },
                        ];
                        return (s && e.unshift({ value: X.RECOMMENDED, label: T.intl.string(T.t.zPWgFG) }), e);
                    }, [s]),
                    showRecommendationOption: s,
                    shuffleProducts: c,
                };
            })({ sortedSkuIds: l }),
            b = p === X.RANDOM,
            [S, I] = a.useState(0),
            A = `${p}:${!0 === u}:${S}`,
            [k, L] = a.useState({ key: A, extra: 0 }),
            j = k.key === A ? k.extra : 0;
        k.key !== A && L({ key: A, extra: 0 });
        let {
                skuIds: R,
                isLoading: M,
                hasMore: D,
            } = (function (e) {
                let { sortType: t, orbsSupportedOnly: n, numVisibleItems: l, shuffleNonce: r } = e,
                    s = a.useMemo(
                        () =>
                            (function (e, t) {
                                if (e === X.RANDOM) return { randomize: !0 };
                                if (t && e === X.POPULAR) return { randomize_daily: !0 };
                                let n = ed[e];
                                return null == n ? null : { sort_type: n.sortType, sort_direction: n.sortDirection };
                            })(t, !0 === n),
                        [t, n],
                    ),
                    i = t === X.RANDOM,
                    o = l > 0 && null != s && null != s ? `${JSON.stringify(s)}:${!0 === n}` : null,
                    c = null == o ? null : `${o}:${i ? r : ""}:${l}`,
                    [u, d] = a.useState(null);
                if (
                    (a.useEffect(() => {
                        if (null == c || null == s) return;
                        let e = !1;
                        return (
                            (0, eu.$)({
                                item_types: [],
                                colors: [],
                                themes: [],
                                orbs_eligible: !0 === n || void 0,
                                offset: 0,
                                limit: l + (i ? 32 : 8),
                                ...s,
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
                    }, [c, o, i, s, n, l]),
                    null == c)
                )
                    return { skuIds: null, isLoading: !1, hasMore: !1 };
                let m = null != u && u.sortIdentityKey === o ? u : null;
                return { skuIds: m?.skuIds ?? null, isLoading: u?.key !== c, hasMore: m?.hasMore ?? !1 };
            })({ sortType: p, orbsSupportedOnly: u, numVisibleItems: r + j, shuffleNonce: S }),
            B = R ?? (M ? ey : v),
            P = a.useMemo(() => B.slice(0, r + j + (b ? 32 : 8)), [B, r, j, b]),
            w = (0, en.hv)(P, { needsCategory: !1 }),
            G = (0, ee.c)("feed_block"),
            $ = (0, et.p)(),
            V = a.useMemo(() => {
                let e = new Set();
                return P.filter((t) => {
                    let n = w[t];
                    if (
                        n?.state === "error" ||
                        (!G && t === z.j.PREMIUM_TIER_2_1_DAY) ||
                        (n?.product != null && 0 === $([n.product]).length)
                    )
                        return !1;
                    let l = n?.product?.storeListingId;
                    if (null != l) {
                        if (e.has(l)) return !1;
                        e.add(l);
                    }
                    return !0;
                });
            }, [P, w, G, $]),
            K = a.useMemo(
                () =>
                    !M &&
                    P.every((e) => {
                        let t = w[e]?.state;
                        return "ready" === t || "error" === t;
                    }),
                [M, P, w],
            ),
            W = !b && D && j < 16,
            eo = r - V.length;
        if (K && eo > 0 && W) {
            let e = Math.min(16, j + eo + 8);
            e !== j && L({ key: A, extra: e });
        }
        let ec = (0, Y.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
            ep = (0, Y.bG)([Q.A], () => Q.A.isFocused()),
            ef = !ec && ep,
            {
                animationPhase: ex,
                startAnimation: eE,
                signalDataReady: ev,
            } = (() => {
                let [e, t] = a.useState("mounted"),
                    [n, l] = a.useState(!1),
                    r = a.useRef(null),
                    s = a.useRef(!1),
                    i = a.useRef(null);
                (a.useEffect(() => {
                    if (n && "finished" === e) {
                        if (null !== r.current) {
                            let e = r.current;
                            if (
                                e.tabIndex >= 0 ||
                                (0, ea.vq)(e, HTMLButtonElement) ||
                                (0, ea.vq)(e, HTMLAnchorElement) ||
                                (0, ea.vq)(e, HTMLInputElement) ||
                                (0, ea.vq)(e, HTMLSelectElement) ||
                                (0, ea.vq)(e, HTMLTextAreaElement)
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
                    a.useEffect(
                        () => () => {
                            null != i.current && clearTimeout(i.current);
                        },
                        [],
                    ));
                let o = a.useCallback((e) => {
                    ((s.current = !1),
                        null != i.current && (clearTimeout(i.current), (i.current = null)),
                        t(e ? "shuffle-in" : "sort-in"),
                        setTimeout(() => t("finished"), e ? 200 : 300));
                }, []);
                return {
                    animationPhase: e,
                    startAnimation: a.useCallback(
                        (e) => {
                            let { isShuffling: n, onOutroComplete: a, returnRef: c, holdIntroUntilReady: u = !1 } = e;
                            (c?.current != null && ((r.current = c.current), l(!0)),
                                (s.current = !1),
                                null != i.current && (clearTimeout(i.current), (i.current = null)),
                                t(n ? "shuffle-out" : "sort-out"),
                                setTimeout(
                                    () => {
                                        if ((a(), n && u)) {
                                            ((s.current = !0), (i.current = setTimeout(() => o(!0), 1e3)));
                                            return;
                                        }
                                        o(n);
                                    },
                                    n ? 250 : 300,
                                ));
                        },
                        [o],
                    ),
                    signalDataReady: a.useCallback(() => {
                        s.current && o(!0);
                    }, [o]),
                };
            })();
        a.useEffect(() => {
            K && ev();
        }, [K, ev]);
        let eC = (0, x.uM)(),
            eb = eC?.sessionId ?? "",
            { analyticsLocations: eS } = (0, U.Ay)(H.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            eI = a.useRef(null),
            eA = a.useRef(null),
            [ek, eL] = a.useState(!1),
            ej = a.useCallback(
                (e) => {
                    (eL(!1),
                        eE({ isShuffling: !1, onOutroComplete: () => E(e), returnRef: eA }),
                        f.default.track(eg.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: eb,
                            sort_type: e,
                        }));
                },
                [eE, E, eb],
            );
        return null == d
            ? null
            : (0, s.jsx)(U.f5, {
                  value: eS,
                  children: (0, s.jsxs)("div", {
                      className: o()(F.lD, F.YB),
                      children: [
                          (0, s.jsxs)("div", {
                              className: F.$6,
                              children: [
                                  (0, s.jsx)(e_, { label: n, personalizedResults: y }),
                                  (0, s.jsxs)("div", {
                                      className: o()(F.IE, { [eh.jP]: h }),
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: F.gd,
                                              children: [
                                                  (0, s.jsx)(N.E, {
                                                      variant: "body-md/medium",
                                                      children: T.intl.string(T.t.uaX705),
                                                  }),
                                                  (0, s.jsx)("div", {
                                                      className: o()(c, F.pI),
                                                      ref: eA,
                                                      children: (0, s.jsx)(q.l, {
                                                          label: T.intl.string(T.t.uaX705),
                                                          hideLabel: !0,
                                                          options: C,
                                                          onSelectionChange: ej,
                                                          formatOption: (e) => {
                                                              let { label: t, value: n } = e;
                                                              return { id: n, label: t, value: n };
                                                          },
                                                          value: p,
                                                          selectionMode: "single",
                                                          fullWidth: !0,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, s.jsx)("div", {
                                              className: c,
                                              children: (0, s.jsx)(g.$, {
                                                  variant: "secondary",
                                                  text: T.intl.string(T.t.X3tnc4),
                                                  buttonRef: eI,
                                                  onClick: function () {
                                                      (eL(!0),
                                                          eE({
                                                              isShuffling: !0,
                                                              onOutroComplete: () => {
                                                                  (_(), I((e) => e + 1));
                                                              },
                                                              returnRef: eI,
                                                              holdIntroUntilReady: !0,
                                                          }),
                                                          f.default.track(
                                                              eg.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: eb },
                                                          ));
                                                  },
                                                  disabled: ex !== ei.MOUNTED && ex !== ei.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(O.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: ek && ex === ei.FINISHED ? T.intl.string(T.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: F.hm,
                              children: t
                                  ? (0, s.jsx)(s.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, s.jsx)(es.A, {}, t + 1)),
                                    })
                                  : ef && ex === ei.SHUFFLE_OUT
                                    ? [...Array(r)].map((e, t) =>
                                          (0, s.jsx)(
                                              "div",
                                              { className: F.Z2, children: (0, s.jsx)(es.A, {}) },
                                              `shuffle-placeholder-${t}`,
                                          ),
                                      )
                                    : M && null == R
                                      ? (0, s.jsx)(s.Fragment, {
                                            children: [...Array(12)].map((e, t) => (0, s.jsx)(es.A, {}, t + 1)),
                                        })
                                      : V.slice(0, r).map((e, t) => {
                                            let n;
                                            return (
                                                ef &&
                                                    (ex === ei.SORT_OUT
                                                        ? (n = F.tz)
                                                        : ex === ei.SHUFFLE_IN
                                                          ? (n = F.aS)
                                                          : ex === ei.SORT_IN && (n = F.F7)),
                                                (0, s.jsx)(
                                                    x.R9,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: "popular picks",
                                                            categoryPosition: 2,
                                                        },
                                                        children: (0, s.jsx)("div", {
                                                            className: n,
                                                            children: (0, s.jsx)(el.A, {
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
var eS = n(831259),
    eI = n(43990),
    eA = n(890856),
    ek = n(408278),
    eL = n(789645),
    ej = n(976860),
    eN = n(758836),
    eO = n(49999),
    eR = n(818348),
    eT = n(105518),
    eM = n(196064);
let eD = "GAME_SERVER_HOSTING_BANNER";
function eB(e) {
    let { gameServerHostingBannerBlock: t, tab: n } = e,
        l = (0, x.uM)(),
        r = a.useRef(null),
        i = a.useRef(!1),
        c = a.useRef(null),
        [d, p] = a.useState(!1),
        E = a.useCallback(
            (e) => {
                f.default.track(eg.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_type: n,
                    page_category: l?.pageCategory,
                    page_section: l?.pageSection,
                    tile_type: eD,
                    cta_name: e,
                });
            },
            [l?.sessionId, l?.pageCategory, l?.pageSection, n],
        ),
        v = a.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    E("go_to_game_server_hosting"),
                    (0, ej.pX)(eg.BVt.COLLECTIBLES_SHOP_WITH_TAB(eN.G2.GAME_SERVERS)));
            },
            [E],
        ),
        C = a.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    E("dismiss"),
                    p(!0),
                    !0 === t.isDismissible &&
                        (0, h.d6)(u.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
                            dismissAction: eO.i.USER_DISMISS,
                        }));
            },
            [E, t.isDismissible],
        ),
        _ = a.useCallback(
            (e) => {
                !i.current &&
                    (e && null === c.current
                        ? (c.current = setTimeout(() => {
                              ((i.current = !0),
                                  (c.current = null),
                                  f.default.track(eg.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: l?.sessionId,
                                      page_type: n,
                                      page_category: l?.pageCategory,
                                      page_section: l?.pageSection,
                                      type: eD,
                                  }));
                          }, 1e3))
                        : e || null === c.current || (clearTimeout(c.current), (c.current = null)));
            },
            [l?.sessionId, l?.pageCategory, l?.pageSection, n],
        );
    return (a.useEffect(
        () => () => {
            null !== c.current && (clearTimeout(c.current), (c.current = null));
        },
        [],
    ),
    d)
        ? null
        : (0, s.jsx)(eI.N, {
              theme: eR.NJ.DARK,
              children: (e) =>
                  (0, s.jsx)(eS.L, {
                      innerRef: r,
                      onChange: _,
                      threshold: 0,
                      children: (0, s.jsx)("div", {
                          ref: r,
                          className: o()(eM.YB, e),
                          children: (0, s.jsxs)(eA.s, {
                              className: eM.kL,
                              onClick: v,
                              "aria-label": T.intl.string(eT.default["34GMP9"]),
                              children: [
                                  (0, s.jsx)("img", {
                                      className: eM.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, s.jsx)("div", { className: eM.f5, "aria-hidden": !0 }),
                                  !0 === t.isDismissible &&
                                      (0, s.jsx)("div", {
                                          className: eM.b,
                                          children: (0, s.jsx)(ek.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: eL.XSmallIcon,
                                              onClick: C,
                                              "aria-label": T.intl.string(T.t.WAI6xu),
                                          }),
                                      }),
                                  (0, s.jsx)("div", {
                                      className: eM.jE,
                                      children: (0, s.jsxs)("div", {
                                          className: eM.rF,
                                          children: [
                                              (0, s.jsxs)("div", {
                                                  className: eM.Z,
                                                  children: [
                                                      (0, s.jsx)(m.D, {
                                                          className: eM.R_,
                                                          variant: "heading-xl/semibold",
                                                          color: "text-strong",
                                                          children: T.intl.string(eT.default["34GMP9"]),
                                                      }),
                                                      (0, s.jsx)(N.E, {
                                                          className: eM.h_,
                                                          variant: "body-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: T.intl.string(eT.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, s.jsx)(g.$, {
                                                  variant: "overlay-primary",
                                                  text: T.intl.string(T.t.jVcuVY),
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
var eP = n(64018),
    ew = n(172218),
    eH = n(28863),
    eU = n(212407),
    eG = n(815280),
    e$ = n(9530);
let eF = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        l = (0, ew.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: r, bannerAnimatedUrl: a } = (0, eU.qY)(t),
        i = null != t.textColor ? { color: t.textColor } : void 0,
        o = null != t.body && "" !== t.body,
        c = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, s.jsxs)("div", {
        ref: l,
        className: e$.BX,
        children: [
            (0, s.jsx)("div", {
                className: e$.vK,
                children: null != r && (0, s.jsx)(eG.A, { bannerStatic: r, bannerAnimated: a }),
            }),
            (0, s.jsx)("div", {
                className: e$.HQ,
                children: (0, s.jsxs)("div", {
                    className: e$.Yn,
                    children: [
                        null != t.endTime ? (0, s.jsx)(D, { endDate: t.endTime, size: "lg" }) : null,
                        (0, s.jsx)(m.D, {
                            variant: "heading-xxl/semibold",
                            className: e$.DD,
                            color: "text-strong",
                            style: { ...i },
                            children: t.title,
                        }),
                        o || c
                            ? (0, s.jsxs)(N.E, {
                                  variant: "body-md/medium",
                                  style: { ...i },
                                  children: [
                                      o && t.body,
                                      o && c && " ",
                                      c &&
                                          (0, s.jsx)(eH.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: e$.CU,
                                              style: { ...i },
                                              children: T.intl.string(T.t.O7ADgv),
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
var eV = n(151869),
    eK = n(590180),
    eW = n(313276),
    ez = n(206077),
    eX = n(554661);
function eY(e) {
    return e.skuId;
}
function eq(e) {
    let { product: t, index: n, shelfName: l, prioritizedCurrency: r, listItemProps: a } = e;
    return (0, s.jsx)(x.R9, {
        newValue: { tilePosition: n, pageSection: l, categoryPosition: 2 },
        children: (0, s.jsx)(el.A, { skuId: t.skuId, prioritizedCurrency: r, listItemProps: a }),
    });
}
let eZ = function (e) {
    let { shelf: t, handleTransition: n, tab: l } = e,
        r = (0, Y.bG)([J.default], () => J.default.getCurrentUser()),
        i = (0, er.Mk)(l),
        c = (0, Y.bG)([eK.A], () => (null != t.categorySkuId ? eK.A.getCategory(t.categorySkuId) : void 0)),
        u = (0, eW.A)(),
        d = a.useMemo(() => u(t.rankedSkuIds), [t.rankedSkuIds, u]),
        h = (0, ez.X)(d),
        { analyticsLocations: p } = (0, U.Ay)(H.A.COLLECTIBLES_SHOP_SHELF),
        f = a.useMemo(() => h.filter((e) => null != eK.A.getCategoryForProduct(e.skuId)), [h]),
        x = a.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: c?.isOrbsExclusive === !0 && l !== eN.G2.ORBS,
            });
        }, [t.categorySkuId, c, n, l]);
    if (null == r || 0 === h.length) return null;
    let E = t.buttonText ?? T.intl.formatToPlainString(T.t.bc9RBE, { category_name: t.name }),
        v = t.showButton,
        C = t.desktopBackgroundImage,
        _ = null != C;
    return (0, s.jsx)(U.f5, {
        value: p,
        children: (0, s.jsxs)("div", {
            className: o()(eX.mu, F.YB, _ ? eX.VA : eX.Ti),
            children: [
                _ && (0, s.jsx)("img", { className: eX.iL, src: C, alt: "", "aria-hidden": !0 }),
                (0, s.jsxs)("div", {
                    className: eX.Qs,
                    children: [
                        (0, s.jsxs)("div", {
                            className: eX.wx,
                            children: [
                                (0, s.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    style: _ ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                v &&
                                    (0, s.jsx)(g.$, {
                                        variant: _ ? "overlay-primary" : "secondary",
                                        text: E,
                                        onClick: x,
                                    }),
                            ],
                        }),
                        (0, s.jsx)(eV.A, {
                            gap: "xl",
                            edgeFade: _ ? "sm" : void 0,
                            items: f,
                            getItemKey: eY,
                            maintainFocusOnReorder: !0,
                            renderItem: (e, n, l) =>
                                (0, s.jsx)(
                                    eq,
                                    {
                                        product: e,
                                        index: l,
                                        shelfName: t.name,
                                        prioritizedCurrency: i,
                                        listItemProps: n,
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
var eJ = n(918467),
    eQ = n(604913),
    e0 = n(223311),
    e1 = n(65238),
    e2 = n(39196),
    e5 = n(288106),
    e8 = n(5377),
    e6 = n(808598),
    e3 = n(805251),
    e9 = n(993408),
    e7 = n(598047),
    e4 = n(396583),
    te = n(270823);
let tt = a.memo((e) => {
        let { endsAt: t, onCountdownEnd: n } = e,
            l = (0, e7.A)(),
            [r, i] = a.useState(!0),
            [, o] = a.useReducer((e) => e + 1, 0),
            c = a.useRef(!1),
            u = a.useCallback((e) => {
                i(e);
            }, []),
            d = (0, ew.K)(u, 0),
            m = (0, e8.Tf)(Date.now(), t),
            g = (function (e) {
                let { days: t, hours: n, minutes: l, seconds: r } = e;
                return 0 === t && 0 === n && 0 === l && 0 === r;
            })(m);
        return (
            (0, e4.A)(o, g || !(l && r) ? null : 1e3),
            a.useEffect(() => {
                g && !c.current && ((c.current = !0), n());
            }, [g, n]),
            (0, s.jsxs)("div", {
                ref: d,
                className: te.qW,
                role: "timer",
                children: [
                    (function (e) {
                        let { days: t, hours: n, minutes: l, seconds: r } = e;
                        return [t, n, l, r].map((e) => e.toString().padStart(2, "0"));
                    })(m).map((e, t) =>
                        (0, s.jsxs)(
                            a.Fragment,
                            {
                                children: [
                                    t > 0 && (0, s.jsx)("div", { className: te.kx, "aria-hidden": !0 }),
                                    (0, s.jsx)("div", {
                                        className: te.t8,
                                        "aria-hidden": !0,
                                        children: e
                                            .split("")
                                            .map((e, t) =>
                                                (0, s.jsx)(
                                                    N.E,
                                                    {
                                                        tag: "span",
                                                        variant: "heading-xl/semibold",
                                                        color: "currentColor",
                                                        className: te.m3,
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
                    (0, s.jsx)(O.A, { children: T.intl.format(T.t.j6IyVe, m) }),
                ],
            })
        );
    }),
    tn = a.memo((e) => {
        let { collectionName: t, percentOff: n, endsAt: l, countdownStyle: r, onShopSale: a, onCountdownEnd: i } = e;
        return (0, s.jsxs)("div", {
            className: o()(
                te.kL,
                (function (e) {
                    switch (e) {
                        case eQ.d2.LIGHT:
                            return te.BB;
                        case eQ.d2.DARK:
                            return te.XT;
                        case eQ.d2.GRADIENT_V1:
                            return te.eg;
                        default:
                            return te.XT;
                    }
                })(r),
            ),
            children: [
                (0, s.jsx)(tt, { endsAt: l, onCountdownEnd: i }, l.getTime()),
                (0, s.jsx)(N.E, {
                    variant: "body-md/semibold",
                    color: "currentColor",
                    className: te.Rc,
                    children: T.intl.format(T.t["97Qza2"], { percent: n, collectionName: t }),
                }),
                (0, s.jsx)("div", {
                    className: te.lO,
                    children: (0, s.jsx)(g.$, {
                        variant: "overlay-primary",
                        fullWidth: !0,
                        onClick: a,
                        text: T.intl.string(T.t["5GoOlx"]),
                    }),
                }),
            ],
        });
    });
var tl = n(60140);
let tr = (e) => {
    let { heroBlock: t, collectionSale: n, handleTransition: l, tab: r, onSaleEnd: i } = e,
        c = (0, Y.bG)([J.default], () => J.default.getCurrentUser()),
        u = (0, x.uM)(),
        { analyticsLocations: d } = (0, U.Ay)(H.A.COLLECTIBLES_SHOP_HERO),
        {
            bannerDisplayConfig: g,
            logoDisplayConfig: h,
            heroLogo: p,
            heroBannerStatic: E,
            heroBannerAnimated: v,
        } = (0, eU.Kk)(t),
        C = g?.responsive ?? !1,
        _ = g?.backgroundStyle,
        y = a.useCallback(() => {
            (l({
                sourceButton: "shop collection sale hero",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            }),
                f.default.track(eg.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: u?.sessionId,
                    sku_id: t.categorySkuId,
                    page_type: r,
                    page_section: u?.pageSection,
                    page_category: u?.pageCategory,
                    cta_name: "shop collection sale hero button",
                }));
        }, [l, t.categorySkuId, u, r]);
    return null == c
        ? null
        : (0, s.jsx)(U.f5, {
              value: d,
              children: (0, s.jsxs)("div", {
                  className: F.os,
                  children: [
                      (0, s.jsx)("div", {
                          className: o()(F.vK, { [F.no]: C }),
                          style: null != _ ? { background: _ } : void 0,
                          children:
                              null != E && (0, s.jsx)(eG.A, { bannerStatic: E, bannerAnimated: v, isResponsive: C }),
                      }),
                      (0, s.jsxs)("div", {
                          className: F.xX,
                          children: [
                              (0, s.jsxs)("div", {
                                  className: o()(F.uZ, F.bC, { [F.no]: C }),
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: F.Hw,
                                          children: [
                                              (0, e9.HF)(t.unpublishedAt) &&
                                                  (0, s.jsx)("div", {
                                                      className: F.v0,
                                                      children: (0, s.jsx)(e3.E, {
                                                          type: { text: T.intl.string(T.t["h/uBCR"]) },
                                                          variant: "inverted",
                                                      }),
                                                  }),
                                              (0, s.jsxs)("div", {
                                                  className: F.Wq,
                                                  children: [
                                                      null != p &&
                                                          (0, s.jsx)("img", {
                                                              className: F.rm,
                                                              src: p,
                                                              alt: t.name,
                                                              style: h?.toDesktopStyles(),
                                                          }),
                                                      null != t.title &&
                                                          (0, s.jsx)(m.D, {
                                                              variant: "heading-xxl/semibold",
                                                              color: "text-strong",
                                                              children: t.title,
                                                          }),
                                                      null != t.summary &&
                                                          "" !== t.summary &&
                                                          (0, s.jsx)(N.E, {
                                                              variant: "body-md/normal",
                                                              className: F.Tm,
                                                              style: { color: t.bannerTextColor ?? void 0 },
                                                              children: t.summary,
                                                          }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, s.jsx)("div", {
                                          className: F.pv,
                                          children: (0, s.jsx)(tn, {
                                              collectionName: t.name,
                                              percentOff: n.percentOff,
                                              endsAt: n.endsAt,
                                              countdownStyle: n.countdownStyle,
                                              onShopSale: y,
                                              onCountdownEnd: i,
                                          }),
                                      }),
                                  ],
                              }),
                              (0, s.jsx)(tl.A, {
                                  heroBlockRecord: t,
                                  tab: r,
                                  isBlockLoading: !1,
                                  layout: r === eN.G2.HOME ? "hscroll" : "feed",
                              }),
                          ],
                      }),
                  ],
              }),
          });
};
var ts = n(331322),
    ta = n(773669),
    ti = n(480750),
    to = n(93955),
    tc = n(442036),
    tu = n(602051),
    td = n(268270);
function tm(e) {
    let { promotion: t, heroBlockRecord: n, heroLogo: l, logoDisplayConfig: r, collectionId: a, isLoading: i } = e;
    return i
        ? (0, s.jsx)("div", { className: td.Hw })
        : (0, s.jsxs)("div", {
              className: td.Hw,
              children: [
                  (0, s.jsxs)("div", {
                      className: td.Wq,
                      children: [
                          null != l &&
                              (0, s.jsx)("img", { className: td.rm, src: l, alt: n.name, style: r?.toDesktopStyles() }),
                          null != n.title &&
                              (0, s.jsx)(m.D, {
                                  variant: "heading-xxl/semibold",
                                  color: "text-strong",
                                  children: n.title,
                              }),
                          null != n.summary &&
                              "" !== n.summary &&
                              (0, s.jsx)(ts.B, {
                                  onClick: (e) => (0, ti.h)(e, t, tu.S.HOME),
                                  children: (0, s.jsx)(N.E, {
                                      variant: "body-sm/normal",
                                      className: o()(td.Tm, td.vd),
                                      style: { color: null != n.bannerTextColor ? n.bannerTextColor : void 0 },
                                      children: n.summary,
                                  }),
                              }),
                      ],
                  }),
                  (0, s.jsx)(to.A, { collectionId: a, variant: "condensed", surface: tu.S.HOME }),
              ],
          });
}
let tg = function (e) {
        let { promotion: t, heroBlock: n, isLoading: l, handleTransition: r, tab: i } = e,
            c = (0, Y.bG)([J.default], () => J.default.getCurrentUser()),
            u = (0, Y.bG)([ta.default], () => ta.default.locale),
            d = (0, x.uM)(),
            { analyticsLocations: m } = (0, U.Ay)(H.A.COLLECTIBLES_SHOP_HERO),
            g = a.useMemo(() => (0, e2.HF)(t, n), [t, n]),
            h = a.useMemo(() => (0, e2.O8)(t, n, i, u), [t, n, i, u]),
            {
                bannerDisplayConfig: p,
                logoDisplayConfig: E,
                heroLogo: v,
                heroBannerStatic: C,
                heroBannerAnimated: _,
            } = (0, eU.Kk)(h),
            y = p?.responsive ?? !1,
            b = p?.backgroundStyle;
        function S() {
            (r?.({
                sourceButton: "shop latest category hero",
                categorySkuId: h.categorySkuId,
                isInternalShopDeeplink: !0,
            }),
                f.default.track(eg.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: d?.sessionId,
                    sku_id: h.categorySkuId,
                    page_type: i,
                    page_section: d?.pageSection,
                    page_category: d?.pageCategory,
                    cta_name: "shop latest category hero button",
                }),
                (0, ti.l)(t, tu.S.HOME, tu.Z.VIEW_ALL_ITEMS_CLICKED));
        }
        return null == c || null == g
            ? null
            : (0, s.jsx)(U.f5, {
                  value: m,
                  children: (0, s.jsxs)("div", {
                      className: td.os,
                      children: [
                          (0, s.jsx)("div", {
                              className: o()(td.vK, { [td.no]: y }),
                              style: null != b ? { background: b } : void 0,
                              children: null != C && (0, s.jsx)(eG.A, { bannerStatic: C, isResponsive: y }),
                          }),
                          (0, s.jsxs)("div", {
                              className: td.xX,
                              children: [
                                  (0, s.jsx)("div", {
                                      className: td.zl,
                                      style: null != b ? { background: b } : void 0,
                                      children:
                                          null != C &&
                                          (0, s.jsx)(eG.A, { bannerStatic: C, bannerAnimated: _, isResponsive: y }),
                                  }),
                                  (0, s.jsxs)("div", {
                                      className: td.mz,
                                      children: [
                                          (0, s.jsx)(eI.N, {
                                              theme: eg.NJ8.DARK,
                                              children: (e) =>
                                                  (0, s.jsxs)("div", {
                                                      className: e,
                                                      children: [
                                                          (0, s.jsx)("div", {
                                                              className: td.bC,
                                                              children: (0, s.jsx)(tm, {
                                                                  promotion: t,
                                                                  heroBlockRecord: h,
                                                                  heroLogo: v,
                                                                  logoDisplayConfig: E,
                                                                  collectionId: n.categorySkuId,
                                                                  isLoading: l,
                                                              }),
                                                          }),
                                                          (0, s.jsx)(tc.A, {
                                                              onShopCollectionClick: S,
                                                              className: td.ti,
                                                          }),
                                                      ],
                                                  }),
                                          }),
                                          (0, s.jsx)(tl.A, {
                                              heroBlockRecord: h,
                                              tab: i,
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
    },
    th = (e) => {
        var t;
        let n,
            l,
            r,
            i,
            { heroBlock: o, handleTransition: c, tab: u } = e,
            d = (0, e0.A)(eg.FYj),
            m = (0, Y.bG)([eJ.A], () => {
                let e = eJ.A.getFetchState(eg.FYj);
                return null == e || "loading" === e;
            }),
            [g, h] = a.useState(null),
            p =
                u === eN.G2.HOME
                    ? ((t = o.categorySkuId),
                      (n = Date.now()),
                      (l = (0, e1.NN)(d)),
                      (r = d?.rewardConfig?.discount),
                      (i = d?.endsAt),
                      null == d ||
                      null == t ||
                      null == l ||
                      l.collectionId !== t ||
                      r?.type !== e5.RP.PERCENT ||
                      r.amount <= 0 ||
                      null == i ||
                      i.getTime() <= n ||
                      (null != d.startsAt && d.startsAt.getTime() > n)
                          ? null
                          : { percentOff: r.amount, endsAt: i, countdownStyle: l.countdownStyle })
                    : null,
            f = p?.endsAt.getTime() ?? null,
            x = (function (e, t, n) {
                return null != t
                    ? { type: "COLLECTION_SALE", collectionSale: t }
                    : null != e &&
                        null != (0, e1.XF)(e) &&
                        null != e.rewardStatus &&
                        (0, e2.HF)(e, n)?.subtype === eQ.h5.TAKEOVER &&
                        (null == e.endsAt || null != (0, e6.X)(e.endsAt))
                      ? { type: "COLLECT_AND_CLAIM_TAKEOVER", promotion: e }
                      : null;
            })(d, f !== g ? p : null, o),
            E = a.useCallback(() => {
                h(f);
            }, [f]);
        switch (x?.type) {
            case "COLLECTION_SALE":
                return (0, s.jsx)(tr, {
                    heroBlock: o,
                    collectionSale: x.collectionSale,
                    handleTransition: c,
                    tab: u,
                    onSaleEnd: E,
                });
            case "COLLECT_AND_CLAIM_TAKEOVER":
                return (0, s.jsx)(tg, {
                    promotion: x.promotion,
                    isLoading: !1,
                    handleTransition: c,
                    heroBlock: o,
                    tab: u,
                });
            default:
                return (0, s.jsx)(eP.A, { isLoading: m && null == d, handleTransition: c, heroBlock: o, tab: u });
        }
    };
var tp = n(700444),
    tf = n(199510),
    tx = n.n(tf),
    tE = n(575593),
    tv = n(531142),
    tC = n(559106),
    t_ = n(765671),
    ty = n(713517),
    tb = n(161918);
let tS = (0, n(945810).mj)({
    name: "2026-10-collectibles-interactive-jumble-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tI = n(597783),
    tA = n(536572),
    tk = n(929283),
    tL = n(171934);
let tj = { standalonePreview: !0 },
    tN = [
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
function tO(e, t, n) {
    let l = n ? e.transitionOffsetLeft : 0,
        r = n ? -window.innerHeight - 384 - e.verticalOffset : e.verticalOffset;
    return {
        bottom: 0,
        left: t + e.horizontalJitter,
        transform: `translate(${l}px, ${r}px) rotate(${e.rotation}deg)`,
        transitionDelay: e.transitionDelay,
        transitionDuration: e.transitionDuration,
    };
}
function tR(e, t) {
    let n = (0, tb.Mk)()?.tab,
        { handleCardVisibilityChange: l } = (0, tI.Z)(e, n, "jumble product");
    a.useEffect(() => {
        l(t);
    }, [t, l]);
}
function tT(e) {
    let { config: t, baseLeft: n, peaking: l, transitioning: r, product: a, item: i } = e;
    return (
        tR(a.skuId, l),
        (0, s.jsx)("div", {
            className: tL.LY,
            style: tO(t, n, r),
            children: (0, s.jsx)(tk.i, { item: i, className: tL.my }),
        })
    );
}
function tM(e) {
    let { config: t, baseLeft: n, peaking: l, transitioning: r, product: i, item: o } = e,
        c = (0, Y.bG)([J.default], () => J.default.getCurrentUser()),
        u = a.useRef(null),
        { isHoveringOrFocusing: d } = (0, ty.A)(u);
    tR(i.skuId, l);
    let m = (0, tb.Mk)()?.tab,
        g = (0, x.uM)(),
        h = a.useCallback(() => {
            f.default.track(eg.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: g?.sessionId,
                sku_id: i.skuId,
                page_type: m,
                page_section: g?.pageSection,
                page_category: g?.pageCategory,
                tile_type: "JUMBLE_PRODUCT",
                tile_position: String(g?.tilePosition),
            });
        }, [i.skuId, m, g]),
        p = (0, er.ql)(i, H.A.COLLECTIBLES_SHOP_TRANSITION_JUMBLE_ITEM, h);
    return (0, s.jsx)("div", {
        ref: u,
        className: tL.LY,
        style: tO(t, n, r),
        children: (0, s.jsx)(ef.D, {
            onClick: p,
            "aria-label": (0, tA.s7)(i),
            className: tL.vk,
            children: (0, s.jsx)(tk.i, { item: o, className: tL.my, user: c, isHighlighted: d }),
        }),
    });
}
function tD(e) {
    let { peaking: t, transitioning: n } = e,
        { ref: l, width: r } = (0, t_.Ay)(),
        [i] = a.useState(() =>
            tx()(tN).map((e) => ({
                skuId: e,
                verticalOffset: -12 + 36 * Math.random(),
                rotation: -24 + 48 * Math.random(),
                horizontalJitter: -(20 * Math.random()),
                transitionOffsetLeft: -20 - 35 * Math.random(),
                transitionDelay: `${Math.random() / 3}s`,
                transitionDuration: `${800 - 200 * Math.random()}ms`,
            })),
        ),
        c = tS.useConfig({ location: "shop_transition_jumble" }).enabled,
        u = (0, en.hv)(tN, { needsCategory: !1, flattenVariants: !0 }),
        d = a.useMemo(() => {
            let e = i.filter((e) => {
                let t = u[e.skuId]?.product;
                return t?.items[0] != null && t.type === tE.R.AVATAR_DECORATION;
            });
            return e.length > 0 ? e : i;
        }, [i, u]),
        m = a.useMemo(() => {
            if (null == r || r <= 0) return [];
            let e = Math.max(1, Math.floor(r / 130)),
                t = r / e;
            return Array.from({ length: e }, (e, n) => ({ config: d[n % d.length], baseLeft: n * t }));
        }, [r, d]);
    return (0, s.jsx)("div", {
        ref: l,
        className: o()(tL.rA, { [tL.Kb]: t }),
        children: (0, s.jsx)(er.v3.Provider, {
            value: tj,
            children: (0, s.jsx)(tv.g.Provider, {
                value: !0 === n || !0 !== t,
                children: m.map((e, l) => {
                    let r,
                        { config: a, baseLeft: i } = e,
                        o = u[a.skuId]?.product ?? eK.A.getProduct(a.skuId),
                        d = null != (r = o?.items[0]) && o?.type === tE.R.AVATAR_DECORATION ? r : null;
                    if (null == o || null == d) return null;
                    let m = a.skuId + l,
                        g = { config: a, baseLeft: i, peaking: t, transitioning: n, product: o, item: d };
                    return (0, s.jsx)(
                        x.R9,
                        {
                            newValue: { pageSection: "transition_jumble", tilePosition: l },
                            children: c ? (0, s.jsx)(tM, { ...g }) : (0, s.jsx)(tT, { ...g }),
                        },
                        m,
                    );
                }),
            }),
        }),
    });
}
function tB() {
    return (0, s.jsx)("div", { className: o()(tL.I2, tL.F$) });
}
function tP(e) {
    let { isVisible: t, transitioning: n } = e,
        l = a.useRef(null);
    return (0, s.jsx)(tC.xp, {
        containerRef: l,
        children: (0, s.jsx)("div", {
            className: o()(tL.I2, tL.MU),
            ref: l,
            children: (0, s.jsx)(tD, { peaking: t, transitioning: n }),
        }),
    });
}
var tw = n(815021),
    tH = n(44724);
let tU = function (e) {
        let { wideBannerBlock: t, tab: n } = e,
            l = eK.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            r = a.useRef(null),
            i = a.useRef(null),
            [c, d] = a.useState(),
            [p, E] = a.useState(!1);
        a.useEffect(() => {
            let e = i.current;
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
            { handleCardVisibilityChange: C } = (0, tI.Z)(v, "home", "marketing wide banner"),
            _ = (0, x.uM)(),
            { bannerURL: y } = (0, eU.w$)(t),
            b = n === eN.G2.ORBS,
            S = null != t.ctaRoute && "" !== t.ctaRoute,
            I = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || S),
            A = null != t.logoURL && "" !== t.logoURL,
            k = a.useCallback(() => {
                if ((E(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, h.$l)(u.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: eO.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            L = a.useCallback(
                (e) => {
                    f.default.track(eg.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            j = a.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((L(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    n = parseInt(t[2], 10);
                                (0, tH.default)({ guildId: e, pageIndex: n });
                            }
                        } else (0, ej.pX)(e);
                    }
                },
                [t.ctaRoute, L],
            );
        if (null == y || p) return null;
        let O = o()(F.nM, F.Tq, F.TS, F.YB, { [F._1]: b, [F.vb]: S }),
            R = (0, s.jsxs)(s.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, s.jsx)("div", {
                            className: F.Mh,
                            children: (0, s.jsx)(tw.J, {
                                size: "sm",
                                onClick: (e) => {
                                    (e.stopPropagation(), k());
                                },
                                "aria-label": T.intl.string(T.t.WAI6xu),
                            }),
                        }),
                    (0, s.jsx)("div", {
                        className: o()(F.zK, { [F._1]: b }),
                        style: null != c ? { height: `${c}px` } : void 0,
                        children: (0, s.jsx)("img", {
                            ref: i,
                            src: y,
                            alt: t.title,
                            className: o()(F.LN, { [F.d5]: b }),
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: o()(F.Ep, { [F.Qq]: I }),
                        style: { maxHeight: null != c ? `${c}px` : "auto" },
                        children: (0, s.jsxs)("div", {
                            className: F.E8,
                            children: [
                                (0, s.jsx)(m.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: b ? F.O2 : void 0,
                                    variant: "heading-xl/semibold",
                                    children: t.title,
                                }),
                                (0, s.jsx)(N.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: b ? "body-md/medium" : "body-sm/medium",
                                    children: b
                                        ? T.intl.format(T.t.SFFP7K, {
                                              helpdeskArticle: ev.A.getArticleURL(eg.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                I &&
                                    (0, s.jsxs)("div", {
                                        className: F.nP,
                                        children: [
                                            (0, s.jsx)(g.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    (e.stopPropagation(), j(t.ctaText ?? T.intl.string(T.t.jVcuVY)));
                                                },
                                                text: t.ctaText ?? T.intl.string(T.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? T.intl.formatToPlainString(T.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            A && (0, s.jsx)("img", { src: t.logoURL, alt: "", className: F.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, s.jsx)(eI.N, {
            theme: b ? void 0 : eR.NJ.DARK,
            children: (e) =>
                (0, s.jsx)(eS.L, {
                    innerRef: r,
                    onChange: C,
                    threshold: 0,
                    children: S
                        ? (0, s.jsx)(ef.D, { innerRef: r, onClick: () => j(null), className: o()(e, O), children: R })
                        : (0, s.jsx)("div", { ref: r, className: o()(e, O), children: R }),
                }),
        });
    },
    tG = (e) => {
        let { handleTransition: t, numVisibleItems: n, tab: l } = e,
            { noCache: r, includeUnpublished: i } = (0, S.A)(),
            [d, m] = a.useState(!1),
            g = (0, x.uM)(),
            f = g?.sessionId ?? "",
            E = (0, p.H)({ location: "collectibles_shop_feed" }),
            { isFetchingPromotion: I } = (0, C.TI)();
        a.useEffect(() => {
            (0, y.z)({
                sessionId: f,
                checkpoint: y.t.SHOP_MOUNTED,
                tab: l,
                unpublishedCategoriesShown: i,
                cacheDisabled: r,
            });
        }, [l]);
        let {
                isFetchingShopHome: A,
                fetchShopHomeError: k,
                shopBlocks: L,
                refreshShopHome: j,
            } = (0, _.y)(l, { noCache: r, includeUnpublished: i, logPerf: !0 }, { sessionId: f, tab: l }),
            N = a.useCallback(() => {
                j();
            }, [j]);
        return (a.useEffect(() => {
            null != k ||
                A ||
                0 === L.length ||
                (0, y.z)({
                    sessionId: f,
                    checkpoint: y.t.SHOP_RENDERED,
                    tab: l,
                    unpublishedCategoriesShown: i,
                    cacheDisabled: r,
                });
        }, [k, A, L.length, i, r, f, l]),
        null != k)
            ? (0, s.jsx)(b.h, { onRetry: N, errorOrigin: b.A.SHOP_PAGE, errorMessage: k.message })
            : A || 0 === L.length
              ? (0, s.jsxs)("div", {
                    className: o()(F.g4, F.Of),
                    children: [
                        (0, s.jsx)(eP.A, { isLoading: A || I, handleTransition: t, tab: l }),
                        (0, s.jsx)(W, { isLoading: A, handleTransition: t, categories: [] }),
                        (0, s.jsx)(eb, {
                            isLoading: A,
                            title: l === eN.G2.ORBS ? T.intl.string(T.t.dFgeuZ) : T.intl.string(T.t.NSv5KV),
                            numVisibleItems: n,
                            tab: l,
                        }),
                    ],
                })
              : (0, s.jsx)(s.Fragment, {
                    children: L.map((e, r) =>
                        (function (e, r, a) {
                            if (null == e) return null;
                            let i = null,
                                g = !1;
                            switch (e.type) {
                                case c.g.HERO:
                                    i = (0, s.jsx)(th, { heroBlock: e, handleTransition: t, tab: l }, a);
                                    break;
                                case c.g.FEATURED:
                                    i = (0, s.jsx)(
                                        W,
                                        { isLoading: !1, handleTransition: t, featuredBlockRecord: e },
                                        a,
                                    );
                                    break;
                                case c.g.FEED:
                                    let p = e.sortedSkuIds;
                                    i = (0, s.jsx)(
                                        eb,
                                        {
                                            title:
                                                l === eN.G2.ORBS
                                                    ? T.intl.string(T.t.dFgeuZ)
                                                    : T.intl.string(T.t.NSv5KV),
                                            numVisibleItems: n,
                                            sortedSkuIds: p,
                                            buttonContainerClassName: r?.type === c.g.IMMERSIVE_BANNER ? F.w : void 0,
                                            tab: l,
                                            orbsSupportedOnly: l === eN.G2.ORBS,
                                        },
                                        a,
                                    );
                                    break;
                                case c.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, h.En)(u.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    i = (0, s.jsx)(tU, { wideBannerBlock: e, tab: l }, a);
                                    break;
                                case c.g.SHELF:
                                    i = (0, s.jsx)(eZ, { handleTransition: t, shelf: e, tab: l }, a);
                                    break;
                                case c.g.COUNTDOWN_TIMER:
                                    ((i = (0, s.jsx)(P, { countdownTimerBlock: e, isVisible: d }, a)), (g = !0));
                                    break;
                                case c.g.IMMERSIVE_BANNER:
                                    i = (0, s.jsx)(
                                        eF,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => m(!e) },
                                        a,
                                    );
                                    break;
                                case c.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !E ||
                                        (!0 === e.isDismissible &&
                                            (0, h.En)(u.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, s.jsx)(
                                        v,
                                        {
                                            blockType: e.type,
                                            children: (0, s.jsx)(eB, { gameServerHostingBannerBlock: e, tab: l }),
                                        },
                                        a,
                                    );
                                case c.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, s.jsx)(
                                        v,
                                        {
                                            blockType: e.type,
                                            children: (0, s.jsx)(tp.A, {
                                                applicationId: e.applicationId,
                                                headerText: e.headerText,
                                                subheaderText: e.subheaderText,
                                                gradientColors: e.gradientColors,
                                                gradientAngle: e.gradientAngle,
                                                skuIds: e.skuIds,
                                                tab: l,
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
                            return (0, s.jsx)(
                                v,
                                {
                                    blockType: e.type,
                                    children: (0, s.jsx)("div", {
                                        className: o()(F.v1, F.Of, { [F.J1]: 0 === a || g }),
                                        children: i,
                                    }),
                                },
                                a,
                            );
                        })(e, r > 0 ? L[r - 1] : null, r),
                    ),
                });
    },
    t$ = function (e) {
        let { handleTransition: t, tab: n, transitionState: l } = e,
            r = a.useRef(null),
            { handleScroll: i } = (0, I.r)(r, n),
            [o, c] = a.useState(!1),
            u = (0, x.uM)(),
            [h, p] = a.useState(12);
        return (
            a.useEffect(() => {
                if (null != r.current) {
                    function e() {
                        if (null == r.current) return;
                        let e = r.current.getDistanceFromBottom();
                        h >= 36 ? c(e < 20) : e <= 200 && p((e) => e + 12);
                    }
                    let t = r.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [r, h, p]),
            (0, s.jsxs)("div", {
                className: F.or,
                children: [
                    (0, s.jsxs)(d.Ch, {
                        className: F.bx,
                        ref: r,
                        onScroll: i,
                        children: [
                            (0, s.jsx)(tG, { handleTransition: t, numVisibleItems: h, tab: n }),
                            h >= 36 &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsxs)("div", {
                                            className: F.R$,
                                            children: [
                                                (0, s.jsx)(m.D, {
                                                    variant: "heading-sm/semibold",
                                                    children: T.intl.string(T.t.Yr70c4),
                                                }),
                                                (0, s.jsx)(g.$, {
                                                    variant: "primary",
                                                    text: T.intl.string(T.t.AfrvRD),
                                                    onClick: () => {
                                                        (t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                            f.default.track(eg.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: u?.sessionId,
                                                                page_type: n,
                                                                page_category:
                                                                    n === eN.G2.HOME ? void 0 : u?.pageCategory,
                                                                cta_name: "browse the shop button",
                                                            }));
                                                    },
                                                    fullWidth: !0,
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)(tB, {}),
                                    ],
                                }),
                        ],
                    }),
                    (0, s.jsx)(tP, { isVisible: o, transitioning: l === eN.Pf.OUT }),
                ],
            })
        );
    };
