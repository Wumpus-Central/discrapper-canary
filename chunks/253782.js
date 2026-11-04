n.d(t, { A: () => tW });
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
    x = n(440938);
let E = a.createContext(null);
function v(e) {
    let { blockType: t, children: n } = e,
        l = a.useMemo(() => ({ blockType: t }), [t]);
    return (0, s.jsx)(E.Provider, { value: l, children: n });
}
var _ = n(304210),
    C = n(208930),
    y = n(100057),
    b = n(599062),
    S = n(998694),
    I = n(415926),
    A = n(736819),
    j = n(607399),
    L = n(946015),
    k = n(717421),
    N = n(834730);
n(321073);
var O = n(140735),
    T = n(496431),
    R = n(792996),
    M = n(302326);
function D(e) {
    let { endDate: t, size: n = "md", className: l, showSeconds: r = !1 } = e,
        { days: a, hours: i, minutes: c, seconds: u } = (0, T.A)(t),
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
            (0, s.jsx)(O.A, { children: R.intl.format(R.t.j6IyVe, { days: a, hours: i, minutes: c }) }),
        ],
    });
}
var B = n(685879);
let P = a.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        l = (0, k.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, s.jsxs)(A.animated.div, {
        className: o()([B.lP, j.Fr && B.yJ]),
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
    G = n(196231),
    $ = n(105499);
function F(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, s.jsx)("div", {
        className: o()($.n9, $.YB),
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
                              G.S,
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
function V(e) {
    let { handleTransition: t, categories: n } = e;
    if (null == n || n.length < 2) return null;
    let [l, r] = n;
    return (0, s.jsx)("div", {
        className: o()($.n9, $.YB),
        children: (0, s.jsxs)(x.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != l ? l.name : r?.name,
                pageSection: "featured_block",
                tilePosition: +(null == l),
            },
            children: [
                null != l && (0, s.jsx)(G.S, { category: l, enablePreview: !0, handleTransition: t }),
                null != r && (0, s.jsx)(G.S, { category: r, handleTransition: t }),
            ],
        }),
    });
}
let K = function (e) {
    let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: r } = e,
        { analyticsLocations: a } = (0, U.Ay)(H.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, s.jsxs)("div", {
              className: o()($.n9, $.YB),
              children: [
                  (0, s.jsx)("div", { className: o()($.Jn, $.oT), children: (0, s.jsx)("div", { className: $.uy }) }),
                  (0, s.jsx)("div", { className: o()($.Jn, $.oT), children: (0, s.jsx)("div", { className: $.uy }) }),
              ],
          })
        : null != r
          ? (0, s.jsx)(U.f5, {
                value: a,
                children: (0, s.jsx)(F, { featuredBlockRecord: r, handleTransition: n, isLoading: !1 }),
            })
          : (0, s.jsx)(U.f5, {
                value: a,
                children: (0, s.jsx)(V, { categories: l, handleTransition: n, isLoading: !1 }),
            });
};
var W = n(334279),
    z =
        (((l = {}).RECOMMENDED = "recommended"),
        (l.POPULAR = "popular"),
        (l.RECENT = "recent"),
        (l.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (l.RANDOM = "random"),
        l),
    X = n(855986),
    Y = n(691885),
    q = n(775602),
    Z = n(287809),
    J = n(531685),
    Q = n(503089),
    ee = n(511265),
    et = n(682301),
    en = n(987421),
    el = n(561769),
    er = n(484469),
    es = n(621466),
    ea =
        (((r = {}).MOUNTED = "mounted"),
        (r.SORT_OUT = "sort-out"),
        (r.SORT_IN = "sort-in"),
        (r.SHUFFLE_OUT = "shuffle-out"),
        (r.SHUFFLE_IN = "shuffle-in"),
        (r.FINISHED = "finished"),
        r),
    ei = n(401864),
    eo = n(124987),
    ec = n(946716);
let eu = {
    [z.RECENT]: { sortType: eo.$.RECENCY, sortDirection: ei.A.DESC },
    [z.PRICE_LOW_TO_HIGH]: { sortType: eo.$.PRICE, sortDirection: ei.A.ASC },
};
n(667532);
var ed = n(153488),
    em = n(652215),
    eg = n(460348),
    eh = n(866665),
    ep = n(939249),
    ef = n(885574),
    ex = n(975807),
    eE = n(975571),
    ev = n(373599);
let e_ = function (e) {
        let { personalizedResults: t, label: n } = e,
            l = n ?? R.intl.string(R.t.NSv5KV);
        return (0, s.jsxs)("div", {
            className: ev.L,
            children: [
                (0, s.jsx)(m.D, { variant: "heading-lg/semibold", children: l }),
                t &&
                    (0, s.jsx)(eh.m, {
                        text: R.intl.string(R.t["3taPdj"]),
                        position: "top",
                        "aria-label": R.intl.string(R.t["3taPdj"]),
                        children: (0, s.jsx)(ep.D, {
                            onClick: () => (0, ex.A)(eE.A.getArticleURL(em.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: ev.s,
                            children: (0, s.jsx)(ef.CircleInformationIcon, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    eC = [],
    ey = function (e) {
        let {
                isLoading: t,
                title: n,
                sortedSkuIds: l,
                numVisibleItems: r,
                tab: i,
                buttonContainerClassName: c,
                orbsSupportedOnly: u,
            } = e,
            d = (0, X.bG)([Z.default], () => Z.default.getCurrentUser()),
            m = (0, el.Mk)(i),
            h = (0, eg.yB)("FeedBlock"),
            {
                sortType: p,
                setSortType: E,
                orderedSkuIds: v,
                sortOptions: _,
                shuffleProducts: C,
                showRecommendationOption: y,
            } = (function (e) {
                let { sortedSkuIds: t } = e,
                    n = (0, X.bG)([ed.A], () => ed.A.hasConsented(em.YAq.PERSONALIZATION)),
                    l = a.useMemo(() => t?.[z.RECOMMENDED] ?? [], [t]),
                    r = a.useMemo(() => t?.[z.POPULAR] ?? [], [t]),
                    s = l.length > 0 && n,
                    [i, o] = a.useState(s ? z.RECOMMENDED : z.POPULAR),
                    c = a.useCallback(() => {
                        o(z.RANDOM);
                    }, []),
                    u = a.useMemo(() => (i === z.RECOMMENDED ? l : i === z.POPULAR ? r : []), [i, l, r]);
                return {
                    sortType: i,
                    setSortType: o,
                    orderedSkuIds: u,
                    sortOptions: a.useMemo(() => {
                        let e = [
                            { value: z.POPULAR, label: R.intl.string(R.t.Y68e5p) },
                            { value: z.RECENT, label: R.intl.string(R.t["51Bhiz"]) },
                            { value: z.PRICE_LOW_TO_HIGH, label: R.intl.string(R.t.m8RVU2) },
                        ];
                        return (s && e.unshift({ value: z.RECOMMENDED, label: R.intl.string(R.t.zPWgFG) }), e);
                    }, [s]),
                    showRecommendationOption: s,
                    shuffleProducts: c,
                };
            })({ sortedSkuIds: l }),
            b = p === z.RANDOM,
            [S, I] = a.useState(0),
            A = `${p}:${!0 === u}:${S}`,
            [j, L] = a.useState({ key: A, extra: 0 }),
            k = j.key === A ? j.extra : 0;
        j.key !== A && L({ key: A, extra: 0 });
        let {
                skuIds: T,
                isLoading: M,
                hasMore: D,
            } = (function (e) {
                let { sortType: t, orbsSupportedOnly: n, numVisibleItems: l, shuffleNonce: r } = e,
                    s = a.useMemo(
                        () =>
                            (function (e, t) {
                                if (e === z.RANDOM) return { randomize: !0 };
                                if (t && e === z.POPULAR) return { randomize_daily: !0 };
                                let n = eu[e];
                                return null == n ? null : { sort_type: n.sortType, sort_direction: n.sortDirection };
                            })(t, !0 === n),
                        [t, n],
                    ),
                    i = t === z.RANDOM,
                    o = l > 0 && null != s && null != s ? `${JSON.stringify(s)}:${!0 === n}` : null,
                    c = null == o ? null : `${o}:${i ? r : ""}:${l}`,
                    [u, d] = a.useState(null);
                if (
                    (a.useEffect(() => {
                        if (null == c || null == s) return;
                        let e = !1;
                        return (
                            (0, ec.$)({
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
            })({ sortType: p, orbsSupportedOnly: u, numVisibleItems: r + k, shuffleNonce: S }),
            B = T ?? (M ? eC : v),
            P = a.useMemo(() => B.slice(0, r + k + (b ? 32 : 8)), [B, r, k, b]),
            w = (0, et.hv)(P, { needsCategory: !1 }),
            G = (0, Q.c)("feed_block"),
            F = (0, ee.p)(),
            V = a.useMemo(() => {
                let e = new Set();
                return P.filter((t) => {
                    let n = w[t];
                    if (
                        n?.state === "error" ||
                        (!G && t === W.j.PREMIUM_TIER_2_1_DAY) ||
                        (n?.product != null && 0 === F([n.product]).length)
                    )
                        return !1;
                    let l = n?.product?.storeListingId;
                    if (null != l) {
                        if (e.has(l)) return !1;
                        e.add(l);
                    }
                    return !0;
                });
            }, [P, w, G, F]),
            K = a.useMemo(
                () =>
                    !M &&
                    P.every((e) => {
                        let t = w[e]?.state;
                        return "ready" === t || "error" === t;
                    }),
                [M, P, w],
            ),
            ei = !b && D && k < 16,
            eo = r - V.length;
        if (K && eo > 0 && ei) {
            let e = Math.min(16, k + eo + 8);
            e !== k && L({ key: A, extra: e });
        }
        let eh = (0, X.bG)([q.Ay], () => q.Ay.useReducedMotion),
            ep = (0, X.bG)([J.A], () => J.A.isFocused()),
            ef = !eh && ep,
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
                                (0, es.vq)(e, HTMLButtonElement) ||
                                (0, es.vq)(e, HTMLAnchorElement) ||
                                (0, es.vq)(e, HTMLInputElement) ||
                                (0, es.vq)(e, HTMLSelectElement) ||
                                (0, es.vq)(e, HTMLTextAreaElement)
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
        let ey = (0, x.uM)(),
            eb = ey?.sessionId ?? "",
            { analyticsLocations: eS } = (0, U.Ay)(H.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            eI = a.useRef(null),
            eA = a.useRef(null),
            [ej, eL] = a.useState(!1),
            ek = a.useCallback(
                (e) => {
                    (eL(!1),
                        eE({ isShuffling: !1, onOutroComplete: () => E(e), returnRef: eA }),
                        f.default.track(em.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
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
                      className: o()($.lD, $.YB),
                      children: [
                          (0, s.jsxs)("div", {
                              className: $.$6,
                              children: [
                                  (0, s.jsx)(e_, { label: n, personalizedResults: y }),
                                  (0, s.jsxs)("div", {
                                      className: o()($.IE, { [eg.jP]: h }),
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: $.gd,
                                              children: [
                                                  (0, s.jsx)(N.E, {
                                                      variant: "body-md/medium",
                                                      children: R.intl.string(R.t.uaX705),
                                                  }),
                                                  (0, s.jsx)("div", {
                                                      className: o()(c, $.pI),
                                                      ref: eA,
                                                      children: (0, s.jsx)(Y.l, {
                                                          label: R.intl.string(R.t.uaX705),
                                                          hideLabel: !0,
                                                          options: _,
                                                          onSelectionChange: ek,
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
                                                  text: R.intl.string(R.t.X3tnc4),
                                                  buttonRef: eI,
                                                  onClick: function () {
                                                      (eL(!0),
                                                          eE({
                                                              isShuffling: !0,
                                                              onOutroComplete: () => {
                                                                  (C(), I((e) => e + 1));
                                                              },
                                                              returnRef: eI,
                                                              holdIntroUntilReady: !0,
                                                          }),
                                                          f.default.track(
                                                              em.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: eb },
                                                          ));
                                                  },
                                                  disabled: ex !== ea.MOUNTED && ex !== ea.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(O.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: ej && ex === ea.FINISHED ? R.intl.string(R.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: $.hm,
                              children: t
                                  ? (0, s.jsx)(s.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, s.jsx)(er.A, {}, t + 1)),
                                    })
                                  : ef && ex === ea.SHUFFLE_OUT
                                    ? [...Array(r)].map((e, t) =>
                                          (0, s.jsx)(
                                              "div",
                                              { className: $.Z2, children: (0, s.jsx)(er.A, {}) },
                                              `shuffle-placeholder-${t}`,
                                          ),
                                      )
                                    : M && null == T
                                      ? (0, s.jsx)(s.Fragment, {
                                            children: [...Array(12)].map((e, t) => (0, s.jsx)(er.A, {}, t + 1)),
                                        })
                                      : V.slice(0, r).map((e, t) => {
                                            let n;
                                            return (
                                                ef &&
                                                    (ex === ea.SORT_OUT
                                                        ? (n = $.MW)
                                                        : ex === ea.SHUFFLE_IN
                                                          ? (n = $.aS)
                                                          : ex === ea.SORT_IN && (n = $.F7)),
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
                                                            children: (0, s.jsx)(en.A, {
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
var eb = n(831259),
    eS = n(43990),
    eI = n(890856),
    eA = n(408278),
    ej = n(789645),
    eL = n(976860),
    ek = n(758836),
    eN = n(49999),
    eO = n(818348),
    eT = n(105518),
    eR = n(196064);
let eM = "GAME_SERVER_HOSTING_BANNER";
function eD(e) {
    let { gameServerHostingBannerBlock: t, tab: n } = e,
        l = (0, x.uM)(),
        r = a.useRef(null),
        i = a.useRef(!1),
        c = a.useRef(null),
        [d, p] = a.useState(!1),
        E = a.useCallback(
            (e) => {
                f.default.track(em.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_type: n,
                    page_category: l?.pageCategory,
                    page_section: l?.pageSection,
                    tile_type: eM,
                    cta_name: e,
                });
            },
            [l?.sessionId, l?.pageCategory, l?.pageSection, n],
        ),
        v = a.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    E("go_to_game_server_hosting"),
                    (0, eL.pX)(em.BVt.COLLECTIBLES_SHOP_WITH_TAB(ek.G2.GAME_SERVERS)));
            },
            [E],
        ),
        _ = a.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    E("dismiss"),
                    p(!0),
                    !0 === t.isDismissible &&
                        (0, h.d6)(u.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
                            dismissAction: eN.i.USER_DISMISS,
                        }));
            },
            [E, t.isDismissible],
        ),
        C = a.useCallback(
            (e) => {
                !i.current &&
                    (e && null === c.current
                        ? (c.current = setTimeout(() => {
                              ((i.current = !0),
                                  (c.current = null),
                                  f.default.track(em.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: l?.sessionId,
                                      page_type: n,
                                      page_category: l?.pageCategory,
                                      page_section: l?.pageSection,
                                      type: eM,
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
        : (0, s.jsx)(eS.N, {
              theme: eO.NJ.DARK,
              children: (e) =>
                  (0, s.jsx)(eb.L, {
                      innerRef: r,
                      onChange: C,
                      threshold: 0,
                      children: (0, s.jsx)("div", {
                          ref: r,
                          className: o()(eR.YB, e),
                          children: (0, s.jsxs)(eI.s, {
                              className: eR.kL,
                              onClick: v,
                              "aria-label": R.intl.string(eT.default["34GMP9"]),
                              children: [
                                  (0, s.jsx)("img", {
                                      className: eR.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, s.jsx)("div", { className: eR.f5, "aria-hidden": !0 }),
                                  !0 === t.isDismissible &&
                                      (0, s.jsx)("div", {
                                          className: eR.b,
                                          children: (0, s.jsx)(eA.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: ej.P,
                                              onClick: _,
                                              "aria-label": R.intl.string(R.t.WAI6xu),
                                          }),
                                      }),
                                  (0, s.jsx)("div", {
                                      className: eR.jE,
                                      children: (0, s.jsxs)("div", {
                                          className: eR.rF,
                                          children: [
                                              (0, s.jsxs)("div", {
                                                  className: eR.Z,
                                                  children: [
                                                      (0, s.jsx)(m.D, {
                                                          className: eR.R_,
                                                          variant: "heading-xl/semibold",
                                                          color: "text-strong",
                                                          children: R.intl.string(eT.default["34GMP9"]),
                                                      }),
                                                      (0, s.jsx)(N.E, {
                                                          className: eR.h_,
                                                          variant: "body-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: R.intl.string(eT.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, s.jsx)(g.$, {
                                                  variant: "overlay-primary",
                                                  text: R.intl.string(R.t.jVcuVY),
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
var eB = n(353448),
    eP = n(172218),
    ew = n(28863),
    eH = n(212407),
    eU = n(815280),
    eG = n(9530);
let e$ = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        l = (0, eP.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: r, bannerAnimatedUrl: a } = (0, eH.qY)(t),
        i = null != t.textColor ? { color: t.textColor } : void 0,
        o = null != t.body && "" !== t.body,
        c = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, s.jsxs)("div", {
        ref: l,
        className: eG.BX,
        children: [
            (0, s.jsx)("div", {
                className: eG.vK,
                children: null != r && (0, s.jsx)(eU.A, { bannerStatic: r, bannerAnimated: a }),
            }),
            (0, s.jsx)("div", {
                className: eG.HQ,
                children: (0, s.jsxs)("div", {
                    className: eG.Yn,
                    children: [
                        null != t.endTime ? (0, s.jsx)(D, { endDate: t.endTime, size: "lg" }) : null,
                        (0, s.jsx)(m.D, {
                            variant: "heading-xxl/semibold",
                            className: eG.DD,
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
                                          (0, s.jsx)(ew.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: eG.CU,
                                              style: { ...i },
                                              children: R.intl.string(R.t.O7ADgv),
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
var eF = n(151869),
    eV = n(590180),
    eK = n(313276),
    eW = n(206077),
    ez = n(554661);
function eX(e) {
    return e.skuId;
}
function eY(e) {
    let { product: t, index: n, shelfName: l, prioritizedCurrency: r, listItemProps: a } = e;
    return (0, s.jsx)(x.R9, {
        newValue: { tilePosition: n, pageSection: l, categoryPosition: 2 },
        children: (0, s.jsx)(en.A, { skuId: t.skuId, prioritizedCurrency: r, listItemProps: a }),
    });
}
let eq = function (e) {
    let { shelf: t, handleTransition: n, tab: l } = e,
        r = (0, X.bG)([Z.default], () => Z.default.getCurrentUser()),
        i = (0, el.Mk)(l),
        c = (0, X.bG)([eV.A], () => (null != t.categorySkuId ? eV.A.getCategory(t.categorySkuId) : void 0)),
        u = (0, eK.A)(),
        d = a.useMemo(() => u(t.rankedSkuIds), [t.rankedSkuIds, u]),
        h = (0, eW.X)(d),
        { analyticsLocations: p } = (0, U.Ay)(H.A.COLLECTIBLES_SHOP_SHELF),
        f = a.useMemo(() => h.filter((e) => null != eV.A.getCategoryForProduct(e.skuId)), [h]),
        x = a.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: c?.isOrbsExclusive === !0 && l !== ek.G2.ORBS,
            });
        }, [t.categorySkuId, c, n, l]);
    if (null == r || 0 === h.length) return null;
    let E = t.buttonText ?? R.intl.formatToPlainString(R.t.bc9RBE, { category_name: t.name }),
        v = t.showButton,
        _ = t.desktopBackgroundImage,
        C = null != _;
    return (0, s.jsx)(U.f5, {
        value: p,
        children: (0, s.jsxs)("div", {
            className: o()(ez.mu, $.YB, C ? ez.VA : ez.Ti),
            children: [
                C && (0, s.jsx)("img", { className: ez.iL, src: _, alt: "", "aria-hidden": !0 }),
                (0, s.jsxs)("div", {
                    className: ez.Qs,
                    children: [
                        (0, s.jsxs)("div", {
                            className: ez.wx,
                            children: [
                                (0, s.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    style: C ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                v &&
                                    (0, s.jsx)(g.$, {
                                        variant: C ? "overlay-primary" : "secondary",
                                        text: E,
                                        onClick: x,
                                    }),
                            ],
                        }),
                        (0, s.jsx)(eF.A, {
                            gap: "xl",
                            edgeFade: C ? "sm" : void 0,
                            items: f,
                            getItemKey: eX,
                            maintainFocusOnReorder: !0,
                            renderItem: (e, n, l) =>
                                (0, s.jsx)(
                                    eY,
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
var eZ = n(918467),
    eJ = n(604913),
    eQ = n(223311),
    e0 = n(65238),
    e1 = n(39196),
    e2 = n(288106),
    e5 = n(5377),
    e8 = n(808598),
    e6 = n(805251),
    e3 = n(993408),
    e9 = n(598047),
    e4 = n(396583),
    e7 = n(270823);
let te = a.memo((e) => {
        let { endsAt: t, onCountdownEnd: n } = e,
            l = (0, e9.A)(),
            [r, i] = a.useState(!0),
            [, o] = a.useReducer((e) => e + 1, 0),
            c = a.useRef(!1),
            u = a.useCallback((e) => {
                i(e);
            }, []),
            d = (0, eP.K)(u, 0),
            m = (0, e5.Tf)(Date.now(), t),
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
                className: e7.qW,
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
                                    t > 0 && (0, s.jsx)("div", { className: e7.kx, "aria-hidden": !0 }),
                                    (0, s.jsx)("div", {
                                        className: e7.t8,
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
                    (0, s.jsx)(O.A, { children: R.intl.format(R.t.j6IyVe, m) }),
                ],
            })
        );
    }),
    tt = a.memo((e) => {
        let { collectionName: t, percentOff: n, endsAt: l, countdownStyle: r, onShopSale: a, onCountdownEnd: i } = e;
        return (0, s.jsxs)("div", {
            className: o()(
                e7.kL,
                (function (e) {
                    switch (e) {
                        case eJ.d2.LIGHT:
                            return e7.BB;
                        case eJ.d2.DARK:
                            return e7.XT;
                        case eJ.d2.GRADIENT_V1:
                            return e7.eg;
                        default:
                            return e7.XT;
                    }
                })(r),
            ),
            children: [
                (0, s.jsx)(te, { endsAt: l, onCountdownEnd: i }, l.getTime()),
                (0, s.jsx)(N.E, {
                    variant: "body-md/semibold",
                    color: "currentColor",
                    className: e7.Rc,
                    children: R.intl.format(R.t["97Qza2"], { percent: n, collectionName: t }),
                }),
                (0, s.jsx)("div", {
                    className: e7.lO,
                    children: (0, s.jsx)(g.$, {
                        variant: "overlay-primary",
                        fullWidth: !0,
                        onClick: a,
                        text: R.intl.string(R.t["5GoOlx"]),
                    }),
                }),
            ],
        });
    });
var tn = n(60140);
let tl = (e) => {
    let { heroBlock: t, collectionSale: n, handleTransition: l, tab: r, onSaleEnd: i } = e,
        c = (0, X.bG)([Z.default], () => Z.default.getCurrentUser()),
        u = (0, x.uM)(),
        { analyticsLocations: d } = (0, U.Ay)(H.A.COLLECTIBLES_SHOP_HERO),
        {
            bannerDisplayConfig: g,
            logoDisplayConfig: h,
            heroLogo: p,
            heroBannerStatic: E,
            heroBannerAnimated: v,
        } = (0, eH.Kk)(t),
        _ = g?.responsive ?? !1,
        C = g?.backgroundStyle,
        y = a.useCallback(() => {
            (l({
                sourceButton: "shop collection sale hero",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            }),
                f.default.track(em.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                  className: $.os,
                  children: [
                      (0, s.jsx)("div", {
                          className: o()($.vK, { [$.no]: _ }),
                          style: null != C ? { background: C } : void 0,
                          children:
                              null != E && (0, s.jsx)(eU.A, { bannerStatic: E, bannerAnimated: v, isResponsive: _ }),
                      }),
                      (0, s.jsxs)("div", {
                          className: $.xX,
                          children: [
                              (0, s.jsxs)("div", {
                                  className: o()($.uZ, $.bC, { [$.no]: _ }),
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: $.Hw,
                                          children: [
                                              (0, e3.HF)(t.unpublishedAt) &&
                                                  (0, s.jsx)("div", {
                                                      className: $.v0,
                                                      children: (0, s.jsx)(e6.E, {
                                                          type: { text: R.intl.string(R.t["h/uBCR"]) },
                                                          variant: "inverted",
                                                      }),
                                                  }),
                                              (0, s.jsxs)("div", {
                                                  className: $.Wq,
                                                  children: [
                                                      null != p &&
                                                          (0, s.jsx)("img", {
                                                              className: $.rm,
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
                                                              className: $.Tm,
                                                              style: { color: t.bannerTextColor ?? void 0 },
                                                              children: t.summary,
                                                          }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, s.jsx)("div", {
                                          className: $.IS,
                                          children: (0, s.jsx)(tt, {
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
                              (0, s.jsx)(tn.A, {
                                  heroBlockRecord: t,
                                  tab: r,
                                  isBlockLoading: !1,
                                  layout: r === ek.G2.HOME ? "hscroll" : "feed",
                              }),
                          ],
                      }),
                  ],
              }),
          });
};
var tr = n(331322),
    ts = n(773669),
    ta = n(480750),
    ti = n(93955),
    to = n(442036),
    tc = n(602051),
    tu = n(268270);
function td(e) {
    let { promotion: t, heroBlockRecord: n, heroLogo: l, logoDisplayConfig: r, collectionId: a, isLoading: i } = e;
    return i
        ? (0, s.jsx)("div", { className: tu.Hw })
        : (0, s.jsxs)("div", {
              className: tu.Hw,
              children: [
                  (0, s.jsxs)("div", {
                      className: tu.Wq,
                      children: [
                          null != l &&
                              (0, s.jsx)("img", { className: tu.rm, src: l, alt: n.name, style: r?.toDesktopStyles() }),
                          null != n.title &&
                              (0, s.jsx)(m.D, {
                                  variant: "heading-xxl/semibold",
                                  color: "text-strong",
                                  children: n.title,
                              }),
                          null != n.summary &&
                              "" !== n.summary &&
                              (0, s.jsx)(tr.B, {
                                  onClick: (e) => (0, ta.h)(e, t, tc.S.HOME),
                                  children: (0, s.jsx)(N.E, {
                                      variant: "body-sm/normal",
                                      className: o()(tu.Tm, tu.vd),
                                      style: { color: null != n.bannerTextColor ? n.bannerTextColor : void 0 },
                                      children: n.summary,
                                  }),
                              }),
                      ],
                  }),
                  (0, s.jsx)(ti.A, { collectionId: a, variant: "condensed", surface: tc.S.HOME }),
              ],
          });
}
let tm = function (e) {
        let { promotion: t, heroBlock: n, isLoading: l, handleTransition: r, tab: i } = e,
            c = (0, X.bG)([Z.default], () => Z.default.getCurrentUser()),
            u = (0, X.bG)([ts.default], () => ts.default.locale),
            d = (0, x.uM)(),
            { analyticsLocations: m } = (0, U.Ay)(H.A.COLLECTIBLES_SHOP_HERO),
            g = a.useMemo(() => (0, e1.HF)(t, n), [t, n]),
            h = a.useMemo(() => (0, e1.O8)(t, n, i, u), [t, n, i, u]),
            {
                bannerDisplayConfig: p,
                logoDisplayConfig: E,
                heroLogo: v,
                heroBannerStatic: _,
                heroBannerAnimated: C,
            } = (0, eH.Kk)(h),
            y = p?.responsive ?? !1,
            b = p?.backgroundStyle;
        function S() {
            (r?.({
                sourceButton: "shop latest category hero",
                categorySkuId: h.categorySkuId,
                isInternalShopDeeplink: !0,
            }),
                f.default.track(em.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: d?.sessionId,
                    sku_id: h.categorySkuId,
                    page_type: i,
                    page_section: d?.pageSection,
                    page_category: d?.pageCategory,
                    cta_name: "shop latest category hero button",
                }),
                (0, ta.l)(t, tc.S.HOME, tc.Z.VIEW_ALL_ITEMS_CLICKED));
        }
        return null == c || null == g
            ? null
            : (0, s.jsx)(U.f5, {
                  value: m,
                  children: (0, s.jsxs)("div", {
                      className: tu.os,
                      children: [
                          (0, s.jsx)("div", {
                              className: o()(tu.vK, { [tu.no]: y }),
                              style: null != b ? { background: b } : void 0,
                              children: null != _ && (0, s.jsx)(eU.A, { bannerStatic: _, isResponsive: y }),
                          }),
                          (0, s.jsxs)("div", {
                              className: tu.xX,
                              children: [
                                  (0, s.jsx)("div", {
                                      className: tu.zl,
                                      style: null != b ? { background: b } : void 0,
                                      children:
                                          null != _ &&
                                          (0, s.jsx)(eU.A, { bannerStatic: _, bannerAnimated: C, isResponsive: y }),
                                  }),
                                  (0, s.jsxs)("div", {
                                      className: tu.mz,
                                      children: [
                                          (0, s.jsx)(eS.N, {
                                              theme: em.NJ8.DARK,
                                              children: (e) =>
                                                  (0, s.jsxs)("div", {
                                                      className: e,
                                                      children: [
                                                          (0, s.jsx)("div", {
                                                              className: tu.bC,
                                                              children: (0, s.jsx)(td, {
                                                                  promotion: t,
                                                                  heroBlockRecord: h,
                                                                  heroLogo: v,
                                                                  logoDisplayConfig: E,
                                                                  collectionId: n.categorySkuId,
                                                                  isLoading: l,
                                                              }),
                                                          }),
                                                          (0, s.jsx)(to.A, {
                                                              onShopCollectionClick: S,
                                                              className: tu.ti,
                                                          }),
                                                      ],
                                                  }),
                                          }),
                                          (0, s.jsx)(tn.A, {
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
    tg = (e) => {
        var t;
        let n,
            l,
            r,
            i,
            { heroBlock: o, handleTransition: c, tab: u } = e,
            d = (0, eQ.A)(em.FYj),
            m = (0, X.bG)([eZ.A], () => {
                let e = eZ.A.getFetchState(em.FYj);
                return null == e || "loading" === e;
            }),
            [g, h] = a.useState(null),
            p =
                u === ek.G2.HOME
                    ? ((t = o.categorySkuId),
                      (n = Date.now()),
                      (l = (0, e0.NN)(d)),
                      (r = d?.rewardConfig?.discount),
                      (i = d?.endsAt),
                      null == d ||
                      null == t ||
                      null == l ||
                      l.collectionId !== t ||
                      r?.type !== e2.RP.PERCENT ||
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
                        null != (0, e0.XF)(e) &&
                        null != e.rewardStatus &&
                        (0, e1.HF)(e, n)?.subtype === eJ.h5.TAKEOVER &&
                        (null == e.endsAt || null != (0, e8.X)(e.endsAt))
                      ? { type: "COLLECT_AND_CLAIM_TAKEOVER", promotion: e }
                      : null;
            })(d, f !== g ? p : null, o),
            E = a.useCallback(() => {
                h(f);
            }, [f]);
        switch (x?.type) {
            case "COLLECTION_SALE":
                return (0, s.jsx)(tl, {
                    heroBlock: o,
                    collectionSale: x.collectionSale,
                    handleTransition: c,
                    tab: u,
                    onSaleEnd: E,
                });
            case "COLLECT_AND_CLAIM_TAKEOVER":
                return (0, s.jsx)(tm, {
                    promotion: x.promotion,
                    isLoading: !1,
                    handleTransition: c,
                    heroBlock: o,
                    tab: u,
                });
            default:
                return (0, s.jsx)(eB.A, { isLoading: m && null == d, handleTransition: c, heroBlock: o, tab: u });
        }
    };
var th = n(465794),
    tp = n(69236),
    tf = n(44724),
    tx = n(421108),
    tE = n(504262),
    tv = n(682901);
let t_ = function (e) {
    let {
            applicationId: t,
            headerText: n,
            subheaderText: l,
            gradientColors: r,
            gradientAngle: i,
            skuIds: o,
            tab: c,
            endTime: u,
            ctaType: d = "storefront",
            logoUrl: m,
            termsUrl: g,
            backgroundImageUrl: h,
        } = e,
        p = (0, tx.ur)(u) ?? void 0,
        f = (0, tp.W8)(),
        x = a.useMemo(() => {
            if ("none" !== d)
                return "nitro" !== d || f
                    ? {
                          kind: "button",
                          text: R.intl.string(R.t.apFNLU),
                          onClick: () => (0, tf.default)({ applicationId: t }),
                          onMouseDown: () => (0, tf.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, s.jsx)(th.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: tv.pe.TIER_2,
                              buttonTextOverride: R.intl.string(R.t.pj0XBN),
                          }),
                      };
        }, [d, t, f]);
    return (0, s.jsx)(tE.A, {
        skuIds: o,
        tab: c,
        applicationId: t,
        headerText: n,
        subheaderText: l,
        logoUrl: m,
        cta: x,
        timeLeftText: p,
        termsUrl: g,
        backgroundImageUrl: h,
        analyticsSection: "slayer-storefront-promotional-banner",
        analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
        analyticsImpressionType: "social_layer_storefront_promotional_banner",
        backgroundGradient: r.length > 0 ? `linear-gradient(${i}deg, ${r.join(", ")})` : void 0,
    });
};
var tC = n(199510),
    ty = n.n(tC),
    tb = n(575593),
    tS = n(531142),
    tI = n(559106),
    tA = n(765671),
    tj = n(713517),
    tL = n(161918);
let tk = (0, n(945810).mj)({
    name: "2026-10-collectibles-interactive-jumble-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tN = n(597783),
    tO = n(536572),
    tT = n(929283),
    tR = n(171934);
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
function tB(e, t, n) {
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
function tP(e, t) {
    let n = (0, tL.Mk)()?.tab,
        { handleCardVisibilityChange: l } = (0, tN.Z)(e, n, "jumble product");
    a.useEffect(() => {
        l(t);
    }, [t, l]);
}
function tw(e) {
    let { config: t, baseLeft: n, peaking: l, transitioning: r, product: a, item: i } = e;
    return (
        tP(a.skuId, l),
        (0, s.jsx)("div", {
            className: tR.LY,
            style: tB(t, n, r),
            children: (0, s.jsx)(tT.i, { item: i, className: tR.my }),
        })
    );
}
function tH(e) {
    let { config: t, baseLeft: n, peaking: l, transitioning: r, product: i, item: o } = e,
        c = (0, X.bG)([Z.default], () => Z.default.getCurrentUser()),
        u = a.useRef(null),
        { isHoveringOrFocusing: d } = (0, tj.A)(u);
    tP(i.skuId, l);
    let m = (0, tL.Mk)()?.tab,
        g = (0, x.uM)(),
        h = a.useCallback(() => {
            f.default.track(em.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: g?.sessionId,
                sku_id: i.skuId,
                page_type: m,
                page_section: g?.pageSection,
                page_category: g?.pageCategory,
                tile_type: "JUMBLE_PRODUCT",
                tile_position: String(g?.tilePosition),
            });
        }, [i.skuId, m, g]),
        p = (0, el.ql)(i, H.A.COLLECTIBLES_SHOP_TRANSITION_JUMBLE_ITEM, h);
    return (0, s.jsx)("div", {
        ref: u,
        className: tR.LY,
        style: tB(t, n, r),
        children: (0, s.jsx)(ep.D, {
            onClick: p,
            "aria-label": (0, tO.s7)(i),
            className: tR.vk,
            children: (0, s.jsx)(tT.i, { item: o, className: tR.my, user: c, isHighlighted: d }),
        }),
    });
}
function tU(e) {
    let { peaking: t, transitioning: n } = e,
        { ref: l, width: r } = (0, tA.Ay)(),
        [i] = a.useState(() =>
            ty()(tD).map((e) => ({
                skuId: e,
                verticalOffset: -12 + 36 * Math.random(),
                rotation: -24 + 48 * Math.random(),
                horizontalJitter: -(20 * Math.random()),
                transitionOffsetLeft: -20 - 35 * Math.random(),
                transitionDelay: `${Math.random() / 3}s`,
                transitionDuration: `${800 - 200 * Math.random()}ms`,
            })),
        ),
        c = tk.useConfig({ location: "shop_transition_jumble" }).enabled,
        u = (0, et.hv)(tD, { needsCategory: !1, flattenVariants: !0 }),
        d = a.useMemo(() => {
            let e = i.filter((e) => {
                let t = u[e.skuId]?.product;
                return t?.items[0] != null && t.type === tb.R.AVATAR_DECORATION;
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
        className: o()(tR.rA, { [tR.Kb]: t }),
        children: (0, s.jsx)(el.v3.Provider, {
            value: tM,
            children: (0, s.jsx)(tS.g.Provider, {
                value: !0 === n || !0 !== t,
                children: m.map((e, l) => {
                    let r,
                        { config: a, baseLeft: i } = e,
                        o = u[a.skuId]?.product ?? eV.A.getProduct(a.skuId),
                        d = null != (r = o?.items[0]) && o?.type === tb.R.AVATAR_DECORATION ? r : null;
                    if (null == o || null == d) return null;
                    let m = a.skuId + l,
                        g = { config: a, baseLeft: i, peaking: t, transitioning: n, product: o, item: d };
                    return (0, s.jsx)(
                        x.R9,
                        {
                            newValue: { pageSection: "transition_jumble", tilePosition: l },
                            children: c ? (0, s.jsx)(tH, { ...g }) : (0, s.jsx)(tw, { ...g }),
                        },
                        m,
                    );
                }),
            }),
        }),
    });
}
function tG() {
    return (0, s.jsx)("div", { className: o()(tR.I2, tR.F$) });
}
function t$(e) {
    let { isVisible: t, transitioning: n } = e,
        l = a.useRef(null);
    return (0, s.jsx)(tI.xp, {
        containerRef: l,
        children: (0, s.jsx)("div", {
            className: o()(tR.I2, tR.MU),
            ref: l,
            children: (0, s.jsx)(tU, { peaking: t, transitioning: n }),
        }),
    });
}
var tF = n(815021);
let tV = function (e) {
        let { wideBannerBlock: t, tab: n } = e,
            l = eV.A.getCategoryByStoreListingId(t.categoryStoreListingId),
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
            { handleCardVisibilityChange: _ } = (0, tN.Z)(v, "home", "marketing wide banner"),
            C = (0, x.uM)(),
            { bannerURL: y } = (0, eH.w$)(t),
            b = n === ek.G2.ORBS,
            S = null != t.ctaRoute && "" !== t.ctaRoute,
            I = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || S),
            A = null != t.logoURL && "" !== t.logoURL,
            j = a.useCallback(() => {
                if ((E(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, h.$l)(u.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: eN.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            L = a.useCallback(
                (e) => {
                    f.default.track(em.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: C?.sessionId,
                        sku_id: v,
                        page_type: n,
                        page_section: C?.pageSection,
                        page_category: C?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(C?.tilePosition),
                        cta_name: e,
                    });
                },
                [C, v, n],
            ),
            k = a.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((L(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    n = parseInt(t[2], 10);
                                (0, tf.default)({ guildId: e, pageIndex: n });
                            }
                        } else (0, eL.pX)(e);
                    }
                },
                [t.ctaRoute, L],
            );
        if (null == y || p) return null;
        let O = o()($.nM, $.Tq, $.TS, $.YB, { [$._1]: b, [$.vb]: S }),
            T = (0, s.jsxs)(s.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, s.jsx)("div", {
                            className: $.Mh,
                            children: (0, s.jsx)(tF.J, {
                                size: "sm",
                                onClick: (e) => {
                                    (e.stopPropagation(), j());
                                },
                                "aria-label": R.intl.string(R.t.WAI6xu),
                            }),
                        }),
                    (0, s.jsx)("div", {
                        className: o()($.zK, { [$._1]: b }),
                        style: null != c ? { height: `${c}px` } : void 0,
                        children: (0, s.jsx)("img", {
                            ref: i,
                            src: y,
                            alt: t.title,
                            className: o()($.LN, { [$.d5]: b }),
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: o()($.Ep, { [$.Qq]: I }),
                        style: { maxHeight: null != c ? `${c}px` : "auto" },
                        children: (0, s.jsxs)("div", {
                            className: $.E8,
                            children: [
                                (0, s.jsx)(m.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: b ? $.O2 : void 0,
                                    variant: "heading-xl/semibold",
                                    children: t.title,
                                }),
                                (0, s.jsx)(N.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: b ? "body-md/medium" : "body-sm/medium",
                                    children: b
                                        ? R.intl.format(R.t.SFFP7K, {
                                              helpdeskArticle: eE.A.getArticleURL(em.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                I &&
                                    (0, s.jsxs)("div", {
                                        className: $.nP,
                                        children: [
                                            (0, s.jsx)(g.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    (e.stopPropagation(), k(t.ctaText ?? R.intl.string(R.t.jVcuVY)));
                                                },
                                                text: t.ctaText ?? R.intl.string(R.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? R.intl.formatToPlainString(R.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            A && (0, s.jsx)("img", { src: t.logoURL, alt: "", className: $.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, s.jsx)(eS.N, {
            theme: b ? void 0 : eO.NJ.DARK,
            children: (e) =>
                (0, s.jsx)(eb.L, {
                    innerRef: r,
                    onChange: _,
                    threshold: 0,
                    children: S
                        ? (0, s.jsx)(ep.D, { innerRef: r, onClick: () => k(null), className: o()(e, O), children: T })
                        : (0, s.jsx)("div", { ref: r, className: o()(e, O), children: T }),
                }),
        });
    },
    tK = (e) => {
        let { handleTransition: t, numVisibleItems: n, tab: l } = e,
            { noCache: r, includeUnpublished: i } = (0, S.A)(),
            [d, m] = a.useState(!1),
            g = (0, x.uM)(),
            f = g?.sessionId ?? "",
            E = (0, p.H)({ location: "collectibles_shop_feed" }),
            { isFetchingPromotion: I } = (0, _.TI)();
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
                fetchShopHomeError: j,
                shopBlocks: L,
                refreshShopHome: k,
            } = (0, C.y)(l, { noCache: r, includeUnpublished: i, logPerf: !0 }, { sessionId: f, tab: l }),
            N = a.useCallback(() => {
                k();
            }, [k]);
        return (a.useEffect(() => {
            null != j ||
                A ||
                0 === L.length ||
                (0, y.z)({
                    sessionId: f,
                    checkpoint: y.t.SHOP_RENDERED,
                    tab: l,
                    unpublishedCategoriesShown: i,
                    cacheDisabled: r,
                });
        }, [j, A, L.length, i, r, f, l]),
        null != j)
            ? (0, s.jsx)(b.h, { onRetry: N, errorOrigin: b.A.SHOP_PAGE, errorMessage: j.message })
            : A || 0 === L.length
              ? (0, s.jsxs)("div", {
                    className: o()($.g4, $.Of),
                    children: [
                        (0, s.jsx)(eB.A, { isLoading: A || I, handleTransition: t, tab: l }),
                        (0, s.jsx)(K, { isLoading: A, handleTransition: t, categories: [] }),
                        (0, s.jsx)(ey, {
                            isLoading: A,
                            title: l === ek.G2.ORBS ? R.intl.string(R.t.dFgeuZ) : R.intl.string(R.t.NSv5KV),
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
                                    i = (0, s.jsx)(tg, { heroBlock: e, handleTransition: t, tab: l }, a);
                                    break;
                                case c.g.FEATURED:
                                    i = (0, s.jsx)(
                                        K,
                                        { isLoading: !1, handleTransition: t, featuredBlockRecord: e },
                                        a,
                                    );
                                    break;
                                case c.g.FEED:
                                    let p = e.sortedSkuIds;
                                    i = (0, s.jsx)(
                                        ey,
                                        {
                                            title:
                                                l === ek.G2.ORBS
                                                    ? R.intl.string(R.t.dFgeuZ)
                                                    : R.intl.string(R.t.NSv5KV),
                                            numVisibleItems: n,
                                            sortedSkuIds: p,
                                            buttonContainerClassName: r?.type === c.g.IMMERSIVE_BANNER ? $.w : void 0,
                                            tab: l,
                                            orbsSupportedOnly: l === ek.G2.ORBS,
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
                                    i = (0, s.jsx)(tV, { wideBannerBlock: e, tab: l }, a);
                                    break;
                                case c.g.SHELF:
                                    i = (0, s.jsx)(eq, { handleTransition: t, shelf: e, tab: l }, a);
                                    break;
                                case c.g.COUNTDOWN_TIMER:
                                    ((i = (0, s.jsx)(P, { countdownTimerBlock: e, isVisible: d }, a)), (g = !0));
                                    break;
                                case c.g.IMMERSIVE_BANNER:
                                    i = (0, s.jsx)(
                                        e$,
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
                                            children: (0, s.jsx)(eD, { gameServerHostingBannerBlock: e, tab: l }),
                                        },
                                        a,
                                    );
                                case c.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, s.jsx)(
                                        v,
                                        {
                                            blockType: e.type,
                                            children: (0, s.jsx)(t_, {
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
                                        className: o()($.v1, $.Of, { [$.J1]: 0 === a || g }),
                                        children: i,
                                    }),
                                },
                                a,
                            );
                        })(e, r > 0 ? L[r - 1] : null, r),
                    ),
                });
    },
    tW = function (e) {
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
                className: $.or,
                children: [
                    (0, s.jsxs)(d.Ch, {
                        className: $.bx,
                        ref: r,
                        onScroll: i,
                        children: [
                            (0, s.jsx)(tK, { handleTransition: t, numVisibleItems: h, tab: n }),
                            h >= 36 &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsxs)("div", {
                                            className: $.R$,
                                            children: [
                                                (0, s.jsx)(m.D, {
                                                    variant: "heading-sm/semibold",
                                                    children: R.intl.string(R.t.Yr70c4),
                                                }),
                                                (0, s.jsx)(g.$, {
                                                    variant: "primary",
                                                    text: R.intl.string(R.t.AfrvRD),
                                                    onClick: () => {
                                                        (t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                            f.default.track(em.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: u?.sessionId,
                                                                page_type: n,
                                                                page_category:
                                                                    n === ek.G2.HOME ? void 0 : u?.pageCategory,
                                                                cta_name: "browse the shop button",
                                                            }));
                                                    },
                                                    fullWidth: !0,
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)(tG, {}),
                                    ],
                                }),
                        ],
                    }),
                    (0, s.jsx)(t$, { isVisible: o, transitioning: l === ek.Pf.OUT }),
                ],
            })
        );
    };
