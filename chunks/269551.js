n.d(t, { A: () => tD });
var l,
    r,
    s = n(477900),
    a = n(582128),
    i = n(503698),
    o = n.n(i),
    u = n(651162),
    c = n(554146),
    d = n(516521),
    m = n(534514),
    g = n(821609),
    h = n(543862),
    E = n(196736),
    p = n(129230),
    f = n(857512);
let x = a.createContext(null);
function A(e) {
    let { blockType: t, children: n } = e,
        l = a.useMemo(() => ({ blockType: t }), [t]);
    return (0, s.jsx)(x.Provider, { value: l, children: n });
}
var v = n(304210),
    C = n(208930),
    b = n(100057),
    y = n(599062),
    L = n(998694),
    _ = n(415926),
    S = n(120692),
    I = n(607399),
    j = n(946015),
    k = n(717421),
    N = n(834730);
n(321073);
var O = n(140735),
    T = n(496431),
    R = n(792996),
    D = n(302326);
function P(e) {
    let { endDate: t, size: n = "md", className: l, showSeconds: r = !1 } = e,
        { days: a, hours: i, minutes: u, seconds: c } = (0, T.A)(t),
        d = (function (e, t, n, l, r) {
            function s(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let a = [s(e), s(t), s(n)];
            return (r && a.push(s(l)), a.join(":"));
        })(a, i, u, c, r);
    return (0, s.jsxs)("div", {
        className: o()(D.kL, l),
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
                                  className: D.eC,
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
                                  className: D.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, s.jsx)(O.A, { children: R.intl.format(R.t.j6IyVe, { days: a, hours: i, minutes: u }) }),
        ],
    });
}
var M = n(685879);
let B = a.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        l = (0, k.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, s.jsxs)(S.animated.div, {
        className: o()([M.lP, I.Fr && M.yJ]),
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
            (0, s.jsxs)(j.s, {
                direction: j.s.Direction.VERTICAL,
                children: [
                    (0, s.jsx)(N.E, {
                        variant: "body-md/medium",
                        className: M.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, s.jsx)(N.E, {
                            variant: "body-sm/medium",
                            className: M.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, s.jsx)(P, { endDate: t.endTime }),
        ],
    });
});
var w = n(424918),
    H = n(793574),
    U = n(688810),
    G = n(454688),
    F = n(196231),
    $ = n(105499);
function V(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, s.jsx)("div", {
        className: o()($.n9, $.YB),
        children: n?.subblocks.map((e, n) =>
            e.type === w.u.CATEGORY
                ? (0, s.jsx)(
                      f.R9,
                      {
                          newValue: {
                              categoryPosition: 1,
                              pageCategory: e.name,
                              pageSection: "featured_block",
                              tilePosition: n,
                          },
                          children: (0, s.jsx)(
                              F.S,
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
        className: o()($.n9, $.YB),
        children: (0, s.jsxs)(f.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != l ? l.name : r?.name,
                pageSection: "featured_block",
                tilePosition: +(null == l),
            },
            children: [
                null != l && (0, s.jsx)(F.S, { category: l, enablePreview: !0, handleTransition: t }),
                null != r && (0, s.jsx)(F.S, { category: r, handleTransition: t }),
            ],
        }),
    });
}
let W = function (e) {
    let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: r } = e,
        { analyticsLocations: a } = (0, U.Ay)(H.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, s.jsxs)("div", { className: o()($.n9, $.YB), children: [(0, s.jsx)(G.R3, {}), (0, s.jsx)(G.R3, {})] })
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
    Y =
        (((l = {}).RECOMMENDED = "recommended"),
        (l.POPULAR = "popular"),
        (l.RECENT = "recent"),
        (l.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (l.RANDOM = "random"),
        l),
    q = n(855986),
    X = n(691885),
    Q = n(775602),
    Z = n(287809),
    J = n(531685),
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
    eu = n(124987),
    ec = n(946716);
let ed = {
    [Y.RECENT]: { sortType: eu.$.RECENCY, sortDirection: eo.A.DESC },
    [Y.PRICE_LOW_TO_HIGH]: { sortType: eu.$.PRICE, sortDirection: eo.A.ASC },
};
n(667532);
var em = n(153488),
    eg = n(652215),
    eh = n(532603),
    eE = n(866665),
    ep = n(939249),
    ef = n(885574),
    ex = n(975807),
    eA = n(975571),
    ev = n(373599);
let eC = function (e) {
        let { personalizedResults: t, label: n } = e,
            l = n ?? R.intl.string(R.t.NSv5KV);
        return (0, s.jsxs)("div", {
            className: ev.L,
            children: [
                (0, s.jsx)(m.D, { variant: "heading-lg/semibold", children: l }),
                t &&
                    (0, s.jsx)(eE.m, {
                        text: R.intl.string(R.t["3taPdj"]),
                        position: "top",
                        "aria-label": R.intl.string(R.t["3taPdj"]),
                        children: (0, s.jsx)(ep.D, {
                            onClick: () => (0, ex.A)(eA.A.getArticleURL(eg.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: ev.s,
                            children: (0, s.jsx)(ef.CircleInformationIcon, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    eb = [],
    ey = function (e) {
        let {
                isLoading: t,
                title: n,
                sortedSkuIds: l,
                numVisibleItems: r,
                tab: i,
                buttonContainerClassName: u,
                orbsSupportedOnly: c,
            } = e,
            d = (0, q.bG)([Z.default], () => Z.default.getCurrentUser()),
            m = (0, er.Mk)(i),
            h = (0, eh.yB)("FeedBlock"),
            {
                sortType: E,
                setSortType: x,
                orderedSkuIds: A,
                sortOptions: v,
                shuffleProducts: C,
                showRecommendationOption: b,
            } = (function (e) {
                let { sortedSkuIds: t } = e,
                    n = (0, q.bG)([em.A], () => em.A.hasConsented(eg.YAq.PERSONALIZATION)),
                    l = a.useMemo(() => t?.[Y.RECOMMENDED] ?? [], [t]),
                    r = a.useMemo(() => t?.[Y.POPULAR] ?? [], [t]),
                    s = l.length > 0 && n,
                    [i, o] = a.useState(s ? Y.RECOMMENDED : Y.POPULAR),
                    u = a.useCallback(() => {
                        o(Y.RANDOM);
                    }, []),
                    c = a.useMemo(() => (i === Y.RECOMMENDED ? l : i === Y.POPULAR ? r : []), [i, l, r]);
                return {
                    sortType: i,
                    setSortType: o,
                    orderedSkuIds: c,
                    sortOptions: a.useMemo(() => {
                        let e = [
                            { value: Y.POPULAR, label: R.intl.string(R.t.Y68e5p) },
                            { value: Y.RECENT, label: R.intl.string(R.t["51Bhiz"]) },
                            { value: Y.PRICE_LOW_TO_HIGH, label: R.intl.string(R.t.m8RVU2) },
                        ];
                        return (s && e.unshift({ value: Y.RECOMMENDED, label: R.intl.string(R.t.zPWgFG) }), e);
                    }, [s]),
                    showRecommendationOption: s,
                    shuffleProducts: u,
                };
            })({ sortedSkuIds: l }),
            y = E === Y.RANDOM,
            [L, _] = a.useState(0),
            S = `${E}:${!0 === c}:${L}`,
            [I, j] = a.useState({ key: S, extra: 0 }),
            k = I.key === S ? I.extra : 0;
        I.key !== S && j({ key: S, extra: 0 });
        let {
                skuIds: T,
                isLoading: D,
                hasMore: P,
            } = (function (e) {
                let { sortType: t, orbsSupportedOnly: n, numVisibleItems: l, shuffleNonce: r } = e,
                    s = a.useMemo(
                        () =>
                            (function (e, t) {
                                if (e === Y.RANDOM) return { randomize: !0 };
                                if (t && e === Y.POPULAR) return { randomize_daily: !0 };
                                let n = ed[e];
                                return null == n ? null : { sort_type: n.sortType, sort_direction: n.sortDirection };
                            })(t, !0 === n),
                        [t, n],
                    ),
                    i = t === Y.RANDOM,
                    o = l > 0 && null != s && null != s ? `${JSON.stringify(s)}:${!0 === n}` : null,
                    u = null == o ? null : `${o}:${i ? r : ""}:${l}`,
                    [c, d] = a.useState(null);
                if (
                    (a.useEffect(() => {
                        if (null == u || null == s) return;
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
                                            key: u,
                                            sortIdentityKey: o,
                                            skuIds: t.skus ?? [],
                                            hasMore: t.pagination?.has_more === !0,
                                        });
                                })
                                .catch(() => {
                                    e || d({ key: u, sortIdentityKey: o, skuIds: [], hasMore: !1 });
                                }),
                            () => {
                                e = !0;
                            }
                        );
                    }, [u, o, i, s, n, l]),
                    null == u)
                )
                    return { skuIds: null, isLoading: !1, hasMore: !1 };
                let m = null != c && c.sortIdentityKey === o ? c : null;
                return { skuIds: m?.skuIds ?? null, isLoading: c?.key !== u, hasMore: m?.hasMore ?? !1 };
            })({ sortType: E, orbsSupportedOnly: c, numVisibleItems: r + k, shuffleNonce: L }),
            M = T ?? (D ? eb : A),
            B = a.useMemo(() => M.slice(0, r + k + (y ? 32 : 8)), [M, r, k, y]),
            w = (0, en.hv)(B, { needsCategory: !1 }),
            G = (0, ee.c)("feed_block"),
            F = (0, et.p)(),
            V = a.useMemo(() => {
                let e = new Set();
                return B.filter((t) => {
                    let n = w[t];
                    if (
                        n?.state === "error" ||
                        (!G && t === z.j.PREMIUM_TIER_2_1_DAY) ||
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
            }, [B, w, G, F]),
            K = a.useMemo(
                () =>
                    !D &&
                    B.every((e) => {
                        let t = w[e]?.state;
                        return "ready" === t || "error" === t;
                    }),
                [D, B, w],
            ),
            W = !y && P && k < 16,
            eo = r - V.length;
        if (K && eo > 0 && W) {
            let e = Math.min(16, k + eo + 8);
            e !== k && j({ key: S, extra: e });
        }
        let eu = (0, q.bG)([Q.Ay], () => Q.Ay.useReducedMotion),
            eE = (0, q.bG)([J.A], () => J.A.isFocused()),
            ep = !eu && eE,
            {
                animationPhase: ef,
                startAnimation: ex,
                signalDataReady: eA,
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
                            let { isShuffling: n, onOutroComplete: a, returnRef: u, holdIntroUntilReady: c = !1 } = e;
                            (u?.current != null && ((r.current = u.current), l(!0)),
                                (s.current = !1),
                                null != i.current && (clearTimeout(i.current), (i.current = null)),
                                t(n ? "shuffle-out" : "sort-out"),
                                setTimeout(
                                    () => {
                                        if ((a(), n && c)) {
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
            K && eA();
        }, [K, eA]);
        let ev = (0, f.uM)(),
            ey = ev?.sessionId ?? "",
            { analyticsLocations: eL } = (0, U.Ay)(H.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            e_ = a.useRef(null),
            eS = a.useRef(null),
            [eI, ej] = a.useState(!1),
            ek = a.useCallback(
                (e) => {
                    (ej(!1),
                        ex({ isShuffling: !1, onOutroComplete: () => x(e), returnRef: eS }),
                        p.default.track(eg.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: ey,
                            sort_type: e,
                        }));
                },
                [ex, x, ey],
            );
        return null == d
            ? null
            : (0, s.jsx)(U.f5, {
                  value: eL,
                  children: (0, s.jsxs)("div", {
                      className: o()($.lD, $.YB),
                      children: [
                          (0, s.jsxs)("div", {
                              className: $.$6,
                              children: [
                                  (0, s.jsx)(eC, { label: n, personalizedResults: b }),
                                  (0, s.jsxs)("div", {
                                      className: o()($.IE, { [eh.jP]: h }),
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: $.gd,
                                              children: [
                                                  (0, s.jsx)(N.E, {
                                                      variant: "body-md/medium",
                                                      children: R.intl.string(R.t.uaX705),
                                                  }),
                                                  (0, s.jsx)("div", {
                                                      className: o()(u, $.pI),
                                                      ref: eS,
                                                      children: (0, s.jsx)(X.l, {
                                                          label: R.intl.string(R.t.uaX705),
                                                          hideLabel: !0,
                                                          options: v,
                                                          onSelectionChange: ek,
                                                          formatOption: (e) => {
                                                              let { label: t, value: n } = e;
                                                              return { id: n, label: t, value: n };
                                                          },
                                                          value: E,
                                                          selectionMode: "single",
                                                          fullWidth: !0,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, s.jsx)("div", {
                                              className: u,
                                              children: (0, s.jsx)(g.$, {
                                                  variant: "secondary",
                                                  text: R.intl.string(R.t.X3tnc4),
                                                  buttonRef: e_,
                                                  onClick: function () {
                                                      (ej(!0),
                                                          ex({
                                                              isShuffling: !0,
                                                              onOutroComplete: () => {
                                                                  (C(), _((e) => e + 1));
                                                              },
                                                              returnRef: e_,
                                                              holdIntroUntilReady: !0,
                                                          }),
                                                          p.default.track(
                                                              eg.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: ey },
                                                          ));
                                                  },
                                                  disabled: ef !== ei.MOUNTED && ef !== ei.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(O.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: eI && ef === ei.FINISHED ? R.intl.string(R.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: $.hm,
                              children: t
                                  ? (0, s.jsx)(s.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, s.jsx)(es.A, {}, t + 1)),
                                    })
                                  : ep && ef === ei.SHUFFLE_OUT
                                    ? [...Array(r)].map((e, t) =>
                                          (0, s.jsx)(
                                              "div",
                                              { className: $.Z2, children: (0, s.jsx)(es.A, {}) },
                                              `shuffle-placeholder-${t}`,
                                          ),
                                      )
                                    : D && null == T
                                      ? (0, s.jsx)(s.Fragment, {
                                            children: [...Array(12)].map((e, t) => (0, s.jsx)(es.A, {}, t + 1)),
                                        })
                                      : V.slice(0, r).map((e, t) => {
                                            let n;
                                            return (
                                                ep &&
                                                    (ef === ei.SORT_OUT
                                                        ? (n = $.tz)
                                                        : ef === ei.SHUFFLE_IN
                                                          ? (n = $.aS)
                                                          : ef === ei.SORT_IN && (n = $.F7)),
                                                (0, s.jsx)(
                                                    f.R9,
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
var eL = n(831259),
    e_ = n(43990),
    eS = n(890856),
    eI = n(408278),
    ej = n(789645),
    ek = n(976860),
    eN = n(758836),
    eO = n(49999),
    eT = n(818348),
    eR = n(105518),
    eD = n(196064);
let eP = "GAME_SERVER_HOSTING_BANNER";
function eM(e) {
    let { gameServerHostingBannerBlock: t, tab: n } = e,
        l = (0, f.uM)(),
        r = a.useRef(null),
        i = a.useRef(!1),
        u = a.useRef(null),
        [d, E] = a.useState(!1),
        x = a.useCallback(
            (e) => {
                p.default.track(eg.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_type: n,
                    page_category: l?.pageCategory,
                    page_section: l?.pageSection,
                    tile_type: eP,
                    cta_name: e,
                });
            },
            [l?.sessionId, l?.pageCategory, l?.pageSection, n],
        ),
        A = a.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    x("go_to_game_server_hosting"),
                    (0, ek.pX)(eg.BVt.COLLECTIBLES_SHOP_WITH_TAB(eN.G2.GAME_SERVERS)));
            },
            [x],
        ),
        v = a.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    x("dismiss"),
                    E(!0),
                    !0 === t.isDismissible &&
                        (0, h.d6)(c.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
                            dismissAction: eO.i.USER_DISMISS,
                        }));
            },
            [x, t.isDismissible],
        ),
        C = a.useCallback(
            (e) => {
                !i.current &&
                    (e && null === u.current
                        ? (u.current = setTimeout(() => {
                              ((i.current = !0),
                                  (u.current = null),
                                  p.default.track(eg.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: l?.sessionId,
                                      page_type: n,
                                      page_category: l?.pageCategory,
                                      page_section: l?.pageSection,
                                      type: eP,
                                  }));
                          }, 1e3))
                        : e || null === u.current || (clearTimeout(u.current), (u.current = null)));
            },
            [l?.sessionId, l?.pageCategory, l?.pageSection, n],
        );
    return (a.useEffect(
        () => () => {
            null !== u.current && (clearTimeout(u.current), (u.current = null));
        },
        [],
    ),
    d)
        ? null
        : (0, s.jsx)(e_.N, {
              theme: eT.NJ.DARK,
              children: (e) =>
                  (0, s.jsx)(eL.L, {
                      innerRef: r,
                      onChange: C,
                      threshold: 0,
                      children: (0, s.jsx)("div", {
                          ref: r,
                          className: o()(eD.YB, e),
                          children: (0, s.jsxs)(eS.s, {
                              className: eD.kL,
                              onClick: A,
                              "aria-label": R.intl.string(eR.default["34GMP9"]),
                              children: [
                                  (0, s.jsx)("img", {
                                      className: eD.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, s.jsx)("div", { className: eD.f5, "aria-hidden": !0 }),
                                  !0 === t.isDismissible &&
                                      (0, s.jsx)("div", {
                                          className: eD.b,
                                          children: (0, s.jsx)(eI.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: ej.XSmallIcon,
                                              onClick: v,
                                              "aria-label": R.intl.string(R.t.WAI6xu),
                                          }),
                                      }),
                                  (0, s.jsx)("div", {
                                      className: eD.jE,
                                      children: (0, s.jsxs)("div", {
                                          className: eD.rF,
                                          children: [
                                              (0, s.jsxs)("div", {
                                                  className: eD.Z,
                                                  children: [
                                                      (0, s.jsx)(m.D, {
                                                          className: eD.R_,
                                                          variant: "heading-xl/semibold",
                                                          color: "text-strong",
                                                          children: R.intl.string(eR.default["34GMP9"]),
                                                      }),
                                                      (0, s.jsx)(N.E, {
                                                          className: eD.h_,
                                                          variant: "body-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: R.intl.string(eR.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, s.jsx)(g.$, {
                                                  variant: "overlay-primary",
                                                  text: R.intl.string(R.t.jVcuVY),
                                                  onClick: A,
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
var eB = n(64018),
    ew = n(172218),
    eH = n(28863),
    eU = n(212407),
    eG = n(815280),
    eF = n(9530);
let e$ = function (e) {
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
        u = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, s.jsxs)("div", {
        ref: l,
        className: eF.BX,
        children: [
            (0, s.jsx)("div", {
                className: eF.vK,
                children: null != r && (0, s.jsx)(eG.A, { bannerStatic: r, bannerAnimated: a }),
            }),
            (0, s.jsx)("div", {
                className: eF.HQ,
                children: (0, s.jsxs)("div", {
                    className: eF.Yn,
                    children: [
                        null != t.endTime ? (0, s.jsx)(P, { endDate: t.endTime, size: "lg" }) : null,
                        (0, s.jsx)(m.D, {
                            variant: "heading-xxl/semibold",
                            className: eF.DD,
                            color: "text-strong",
                            style: { ...i },
                            children: t.title,
                        }),
                        o || u
                            ? (0, s.jsxs)(N.E, {
                                  variant: "body-md/medium",
                                  style: { ...i },
                                  children: [
                                      o && t.body,
                                      o && u && " ",
                                      u &&
                                          (0, s.jsx)(eH.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: eF.CU,
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
var eV = n(151869),
    eK = n(590180),
    eW = n(313276),
    ez = n(206077),
    eY = n(554661);
function eq(e) {
    return e.skuId;
}
function eX(e) {
    let { product: t, index: n, shelfName: l, prioritizedCurrency: r, listItemProps: a } = e;
    return (0, s.jsx)(f.R9, {
        newValue: { tilePosition: n, pageSection: l, categoryPosition: 2 },
        children: (0, s.jsx)(el.A, { skuId: t.skuId, prioritizedCurrency: r, listItemProps: a }),
    });
}
let eQ = function (e) {
    let { shelf: t, handleTransition: n, tab: l } = e,
        r = (0, q.bG)([Z.default], () => Z.default.getCurrentUser()),
        i = (0, er.Mk)(l),
        u = (0, q.bG)([eK.A], () => (null != t.categorySkuId ? eK.A.getCategory(t.categorySkuId) : void 0)),
        c = (0, eW.A)(),
        d = a.useMemo(() => c(t.rankedSkuIds), [t.rankedSkuIds, c]),
        h = (0, ez.X)(d),
        { analyticsLocations: E } = (0, U.Ay)(H.A.COLLECTIBLES_SHOP_SHELF),
        p = a.useMemo(() => h.filter((e) => null != eK.A.getCategoryForProduct(e.skuId)), [h]),
        f = a.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: u?.isOrbsExclusive === !0 && l !== eN.G2.ORBS,
            });
        }, [t.categorySkuId, u, n, l]);
    if (null == r || 0 === h.length) return null;
    let x = t.buttonText ?? R.intl.formatToPlainString(R.t.bc9RBE, { category_name: t.name }),
        A = t.showButton,
        v = t.desktopBackgroundImage,
        C = null != v;
    return (0, s.jsx)(U.f5, {
        value: E,
        children: (0, s.jsxs)("div", {
            className: o()(eY.mu, $.YB, C ? eY.VA : eY.Ti),
            children: [
                C && (0, s.jsx)("img", { className: eY.iL, src: v, alt: "", "aria-hidden": !0 }),
                (0, s.jsxs)("div", {
                    className: eY.Qs,
                    children: [
                        (0, s.jsxs)("div", {
                            className: eY.wx,
                            children: [
                                (0, s.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    style: C ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                A &&
                                    (0, s.jsx)(g.$, {
                                        variant: C ? "overlay-primary" : "secondary",
                                        text: x,
                                        onClick: f,
                                    }),
                            ],
                        }),
                        (0, s.jsx)(eV.A, {
                            gap: "xl",
                            edgeFade: C ? "sm" : void 0,
                            items: p,
                            getItemKey: eq,
                            maintainFocusOnReorder: !0,
                            renderItem: (e, n, l) =>
                                (0, s.jsx)(
                                    eX,
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
    e0 = n(223311),
    e1 = n(65238),
    e2 = n(643306),
    e5 = n(39196),
    e8 = n(808598),
    e6 = n(200420),
    e9 = n(331322),
    e3 = n(773669),
    e7 = n(480750),
    e4 = n(93955),
    te = n(28875),
    tt = n(60140),
    tn = n(602051),
    tl = n(268270);
function tr(e) {
    let { promotion: t, heroBlockRecord: n, heroLogo: l, logoDisplayConfig: r, collectionId: a, isLoading: i } = e;
    return i
        ? (0, s.jsx)("div", { className: tl.Hw })
        : (0, s.jsxs)("div", {
              className: tl.Hw,
              children: [
                  (0, s.jsxs)("div", {
                      className: tl.Wq,
                      children: [
                          null != l &&
                              (0, s.jsx)("img", {
                                  className: tl.rm,
                                  draggable: !1,
                                  src: l,
                                  alt: n.name,
                                  style: r?.toDesktopStyles(),
                              }),
                          null != n.title &&
                              (0, s.jsx)(m.D, {
                                  variant: "heading-xxl/semibold",
                                  color: "text-strong",
                                  children: n.title,
                              }),
                          null != n.summary &&
                              "" !== n.summary &&
                              (0, s.jsx)(e9.B, {
                                  onClick: (e) => (0, e7.h)(e, t, tn.S.HOME),
                                  children: (0, s.jsx)(N.E, {
                                      variant: "body-sm/normal",
                                      className: o()(tl.Tm, tl.vd),
                                      style: { color: null != n.bannerTextColor ? n.bannerTextColor : void 0 },
                                      children: n.summary,
                                  }),
                              }),
                      ],
                  }),
                  (0, s.jsx)(e4.A, { collectionId: a, variant: "condensed", surface: tn.S.HOME }),
              ],
          });
}
let ts = function (e) {
        let { promotion: t, heroBlock: n, isLoading: l, handleTransition: r, tab: i } = e,
            u = (0, q.bG)([Z.default], () => Z.default.getCurrentUser()),
            c = (0, q.bG)([e3.default], () => e3.default.locale),
            d = (0, f.uM)(),
            { analyticsLocations: m } = (0, U.Ay)(H.A.COLLECTIBLES_SHOP_HERO),
            g = a.useMemo(() => (0, e5.HF)(t, n), [t, n]),
            h = a.useMemo(() => (0, e5.O8)(t, n, i, c), [t, n, i, c]),
            {
                bannerDisplayConfig: E,
                logoDisplayConfig: x,
                heroLogo: A,
                heroBannerStatic: v,
                heroBannerAnimated: C,
            } = (0, eU.Kk)(h),
            b = E?.responsive ?? !1,
            y = E?.backgroundStyle;
        function L() {
            (r?.({
                sourceButton: "shop latest category hero",
                categorySkuId: h.categorySkuId,
                isInternalShopDeeplink: !0,
            }),
                p.default.track(eg.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: d?.sessionId,
                    sku_id: h.categorySkuId,
                    page_type: i,
                    page_section: d?.pageSection,
                    page_category: d?.pageCategory,
                    cta_name: "shop latest category hero button",
                }),
                (0, e7.l)(t, tn.S.HOME, tn.Z.VIEW_ALL_ITEMS_CLICKED));
        }
        return null == u || null == g
            ? null
            : (0, s.jsx)(U.f5, {
                  value: m,
                  children: (0, s.jsxs)("div", {
                      className: tl.os,
                      children: [
                          (0, s.jsx)("div", {
                              className: o()(tl.vK, { [tl.no]: b }),
                              style: null != y ? { background: y } : void 0,
                              children: null != v && (0, s.jsx)(eG.A, { bannerStatic: v, isResponsive: b }),
                          }),
                          (0, s.jsxs)("div", {
                              className: tl.xX,
                              children: [
                                  (0, s.jsx)("div", {
                                      className: tl.zl,
                                      style: null != y ? { background: y } : void 0,
                                      children:
                                          null != v &&
                                          (0, s.jsx)(eG.A, { bannerStatic: v, bannerAnimated: C, isResponsive: b }),
                                  }),
                                  (0, s.jsxs)("div", {
                                      className: tl.mz,
                                      children: [
                                          (0, s.jsx)(e_.N, {
                                              theme: eg.NJ8.DARK,
                                              children: (e) =>
                                                  (0, s.jsxs)("div", {
                                                      className: e,
                                                      children: [
                                                          (0, s.jsx)("div", {
                                                              className: tl.bC,
                                                              children: (0, s.jsx)(tr, {
                                                                  promotion: t,
                                                                  heroBlockRecord: h,
                                                                  heroLogo: A,
                                                                  logoDisplayConfig: x,
                                                                  collectionId: n.categorySkuId,
                                                                  isLoading: l,
                                                              }),
                                                          }),
                                                          (0, s.jsx)(te.A, {
                                                              title: R.intl.string(R.t.Pla5Vk),
                                                              buttonText: R.intl.string(R.t.xYKa1T),
                                                              onButtonClick: L,
                                                              className: tl.ti,
                                                          }),
                                                      ],
                                                  }),
                                          }),
                                          (0, s.jsx)(tt.A, {
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
    ta = (e) => {
        let { heroBlock: t, handleTransition: n, tab: l } = e,
            r = (0, e0.A)(eg.FYj),
            a = (0, q.bG)([eZ.A], () => {
                let e = eZ.A.getFetchState(eg.FYj);
                return null == e || "loading" === e;
            }),
            { collectionPromotion: i, handlePromotionEnd: o } = (0, e2.A)(l === eN.G2.HOME ? t.categorySkuId : void 0),
            u = (function (e, t, n) {
                return null != t
                    ? {
                          type:
                              t.type === eJ.hE.COLLECTION_SEQUENCED_OFFER
                                  ? "COLLECTION_SEQUENCED_OFFER"
                                  : "COLLECTION_SALE",
                          collectionPromotion: t,
                      }
                    : null != e &&
                        null != (0, e1.XF)(e) &&
                        null != e.rewardStatus &&
                        (0, e5.HF)(e, n)?.subtype === eJ.h5.TAKEOVER &&
                        (null == e.endsAt || null != (0, e8.X)(e.endsAt))
                      ? { type: "COLLECT_AND_CLAIM_TAKEOVER", promotion: e }
                      : null;
            })(r, i, t);
        switch (u?.type) {
            case "COLLECTION_SALE":
            case "COLLECTION_SEQUENCED_OFFER":
                return (0, s.jsx)(e6.A, {
                    heroBlock: t,
                    collectionPromotion: u.collectionPromotion,
                    handleTransition: n,
                    tab: l,
                    onPromotionEnd: o,
                });
            case "COLLECT_AND_CLAIM_TAKEOVER":
                return (0, s.jsx)(ts, {
                    promotion: u.promotion,
                    isLoading: !1,
                    handleTransition: n,
                    heroBlock: t,
                    tab: l,
                });
            default:
                return (0, s.jsx)(eB.A, { isLoading: a && null == r, handleTransition: n, heroBlock: t, tab: l });
        }
    };
var ti = n(700444),
    to = n(199510),
    tu = n.n(to),
    tc = n(575593),
    td = n(531142),
    tm = n(559106),
    tg = n(765671),
    th = n(713517),
    tE = n(161918);
let tp = (0, n(945810).mj)({
    name: "2026-10-collectibles-interactive-jumble-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tf = n(597783),
    tx = n(536572),
    tA = n(929283),
    tv = n(171934);
let tC = { standalonePreview: !0 },
    tb = [
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
function ty(e, t, n) {
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
function tL(e, t) {
    let n = (0, tE.Mk)()?.tab,
        { handleCardVisibilityChange: l } = (0, tf.Z)(e, n, "jumble product");
    a.useEffect(() => {
        l(t);
    }, [t, l]);
}
function t_(e) {
    let { config: t, baseLeft: n, peaking: l, transitioning: r, product: a, item: i } = e;
    return (
        tL(a.skuId, l),
        (0, s.jsx)("div", {
            className: tv.LY,
            style: ty(t, n, r),
            children: (0, s.jsx)(tA.i, { item: i, className: tv.my }),
        })
    );
}
function tS(e) {
    let { config: t, baseLeft: n, peaking: l, transitioning: r, product: i, item: o } = e,
        u = (0, q.bG)([Z.default], () => Z.default.getCurrentUser()),
        c = a.useRef(null),
        { isHoveringOrFocusing: d } = (0, th.A)(c);
    tL(i.skuId, l);
    let m = (0, tE.Mk)()?.tab,
        g = (0, f.uM)(),
        h = a.useCallback(() => {
            p.default.track(eg.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: g?.sessionId,
                sku_id: i.skuId,
                page_type: m,
                page_section: g?.pageSection,
                page_category: g?.pageCategory,
                tile_type: "JUMBLE_PRODUCT",
                tile_position: String(g?.tilePosition),
            });
        }, [i.skuId, m, g]),
        E = (0, er.ql)(i, H.A.COLLECTIBLES_SHOP_TRANSITION_JUMBLE_ITEM, h);
    return (0, s.jsx)("div", {
        ref: c,
        className: tv.LY,
        style: ty(t, n, r),
        children: (0, s.jsx)(ep.D, {
            onClick: E,
            "aria-label": (0, tx.s7)(i),
            className: tv.vk,
            children: (0, s.jsx)(tA.i, { item: o, className: tv.my, user: u, isHighlighted: d }),
        }),
    });
}
function tI(e) {
    let { peaking: t, transitioning: n } = e,
        { ref: l, width: r } = (0, tg.Ay)(),
        [i] = a.useState(() =>
            tu()(tb).map((e) => ({
                skuId: e,
                verticalOffset: -12 + 36 * Math.random(),
                rotation: -24 + 48 * Math.random(),
                horizontalJitter: -(20 * Math.random()),
                transitionOffsetLeft: -20 - 35 * Math.random(),
                transitionDelay: `${Math.random() / 3}s`,
                transitionDuration: `${800 - 200 * Math.random()}ms`,
            })),
        ),
        u = tp.useConfig({ location: "shop_transition_jumble" }).enabled,
        c = (0, en.hv)(tb, { needsCategory: !1, flattenVariants: !0 }),
        d = a.useMemo(() => {
            let e = i.filter((e) => {
                let t = c[e.skuId]?.product;
                return t?.items[0] != null && t.type === tc.R.AVATAR_DECORATION;
            });
            return e.length > 0 ? e : i;
        }, [i, c]),
        m = a.useMemo(() => {
            if (null == r || r <= 0) return [];
            let e = Math.max(1, Math.floor(r / 130)),
                t = r / e;
            return Array.from({ length: e }, (e, n) => ({ config: d[n % d.length], baseLeft: n * t }));
        }, [r, d]);
    return (0, s.jsx)("div", {
        ref: l,
        className: o()(tv.rA, { [tv.Kb]: t }),
        children: (0, s.jsx)(er.v3.Provider, {
            value: tC,
            children: (0, s.jsx)(td.g.Provider, {
                value: !0 === n || !0 !== t,
                children: m.map((e, l) => {
                    let r,
                        { config: a, baseLeft: i } = e,
                        o = c[a.skuId]?.product ?? eK.A.getProduct(a.skuId),
                        d = null != (r = o?.items[0]) && o?.type === tc.R.AVATAR_DECORATION ? r : null;
                    if (null == o || null == d) return null;
                    let m = a.skuId + l,
                        g = { config: a, baseLeft: i, peaking: t, transitioning: n, product: o, item: d };
                    return (0, s.jsx)(
                        f.R9,
                        {
                            newValue: { pageSection: "transition_jumble", tilePosition: l },
                            children: u ? (0, s.jsx)(tS, { ...g }) : (0, s.jsx)(t_, { ...g }),
                        },
                        m,
                    );
                }),
            }),
        }),
    });
}
function tj() {
    return (0, s.jsx)("div", { className: o()(tv.I2, tv.F$) });
}
function tk(e) {
    let { isVisible: t, transitioning: n } = e,
        l = a.useRef(null);
    return (0, s.jsx)(tm.xp, {
        containerRef: l,
        children: (0, s.jsx)("div", {
            className: o()(tv.I2, tv.MU),
            ref: l,
            children: (0, s.jsx)(tI, { peaking: t, transitioning: n }),
        }),
    });
}
var tN = n(815021),
    tO = n(44724);
let tT = function (e) {
        let { wideBannerBlock: t, tab: n } = e,
            l = eK.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            r = a.useRef(null),
            i = a.useRef(null),
            [u, d] = a.useState(),
            [E, x] = a.useState(!1);
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
        let A = l?.skuId ?? "",
            { handleCardVisibilityChange: v } = (0, tf.Z)(A, "home", "marketing wide banner"),
            C = (0, f.uM)(),
            { bannerURL: b } = (0, eU.w$)(t),
            y = n === eN.G2.ORBS,
            L = null != t.ctaRoute && "" !== t.ctaRoute,
            _ = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || L),
            S = null != t.logoURL && "" !== t.logoURL,
            I = a.useCallback(() => {
                if ((x(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, h.$l)(c.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: eO.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            j = a.useCallback(
                (e) => {
                    p.default.track(eg.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: C?.sessionId,
                        sku_id: A,
                        page_type: n,
                        page_section: C?.pageSection,
                        page_category: C?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(C?.tilePosition),
                        cta_name: e,
                    });
                },
                [C, A, n],
            ),
            k = a.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((j(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    n = parseInt(t[2], 10);
                                (0, tO.default)({ guildId: e, pageIndex: n });
                            }
                        } else (0, ek.pX)(e);
                    }
                },
                [t.ctaRoute, j],
            );
        if (null == b || E) return null;
        let O = o()($.nM, $.Tq, $.TS, $.YB, { [$._1]: y, [$.vb]: L }),
            T = (0, s.jsxs)(s.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, s.jsx)("div", {
                            className: $.Mh,
                            children: (0, s.jsx)(tN.J, {
                                size: "sm",
                                onClick: (e) => {
                                    (e.stopPropagation(), I());
                                },
                                "aria-label": R.intl.string(R.t.WAI6xu),
                            }),
                        }),
                    (0, s.jsx)("div", {
                        className: o()($.zK, { [$._1]: y }),
                        style: null != u ? { height: `${u}px` } : void 0,
                        children: (0, s.jsx)("img", {
                            ref: i,
                            src: b,
                            alt: t.title,
                            className: o()($.LN, { [$.d5]: y }),
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: o()($.Ep, { [$.Qq]: _ }),
                        style: { maxHeight: null != u ? `${u}px` : "auto" },
                        children: (0, s.jsxs)("div", {
                            className: $.E8,
                            children: [
                                (0, s.jsx)(m.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: y ? $.O2 : void 0,
                                    variant: "heading-xl/semibold",
                                    children: t.title,
                                }),
                                (0, s.jsx)(N.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: y ? "body-md/medium" : "body-sm/medium",
                                    children: y
                                        ? R.intl.format(R.t.SFFP7K, {
                                              helpdeskArticle: eA.A.getArticleURL(eg.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                _ &&
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
                                            S && (0, s.jsx)("img", { src: t.logoURL, alt: "", className: $.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, s.jsx)(e_.N, {
            theme: y ? void 0 : eT.NJ.DARK,
            children: (e) =>
                (0, s.jsx)(eL.L, {
                    innerRef: r,
                    onChange: v,
                    threshold: 0,
                    children: L
                        ? (0, s.jsx)(ep.D, { innerRef: r, onClick: () => k(null), className: o()(e, O), children: T })
                        : (0, s.jsx)("div", { ref: r, className: o()(e, O), children: T }),
                }),
        });
    },
    tR = (e) => {
        let { handleTransition: t, numVisibleItems: n, tab: l } = e,
            { noCache: r, includeUnpublished: i } = (0, L.A)(),
            [d, m] = a.useState(!1),
            g = (0, f.uM)(),
            p = g?.sessionId ?? "",
            x = (0, E.H)({ location: "collectibles_shop_feed" }),
            { isFetchingPromotion: _ } = (0, v.TI)();
        a.useEffect(() => {
            (0, b.z)({
                sessionId: p,
                checkpoint: b.t.SHOP_MOUNTED,
                tab: l,
                unpublishedCategoriesShown: i,
                cacheDisabled: r,
            });
        }, [l]);
        let {
                isFetchingShopHome: S,
                fetchShopHomeError: I,
                shopBlocks: j,
                refreshShopHome: k,
            } = (0, C.y)(l, { noCache: r, includeUnpublished: i, logPerf: !0 }, { sessionId: p, tab: l }),
            N = a.useCallback(() => {
                k();
            }, [k]);
        return (a.useEffect(() => {
            null != I ||
                S ||
                0 === j.length ||
                (0, b.z)({
                    sessionId: p,
                    checkpoint: b.t.SHOP_RENDERED,
                    tab: l,
                    unpublishedCategoriesShown: i,
                    cacheDisabled: r,
                });
        }, [I, S, j.length, i, r, p, l]),
        null != I)
            ? (0, s.jsx)(y.h, { onRetry: N, errorOrigin: y.A.SHOP_PAGE, errorMessage: I.message })
            : S || 0 === j.length
              ? (0, s.jsxs)("div", {
                    className: o()($.g4, $.Of),
                    children: [
                        (0, s.jsx)(eB.A, { isLoading: S || _, handleTransition: t, tab: l }),
                        (0, s.jsx)(W, { isLoading: S, handleTransition: t, categories: [] }),
                        (0, s.jsx)(ey, {
                            isLoading: S,
                            title: l === eN.G2.ORBS ? R.intl.string(R.t.dFgeuZ) : R.intl.string(R.t.NSv5KV),
                            numVisibleItems: n,
                            tab: l,
                        }),
                    ],
                })
              : (0, s.jsx)(s.Fragment, {
                    children: j.map((e, r) =>
                        (function (e, r, a) {
                            if (null == e) return null;
                            let i = null,
                                g = !1;
                            switch (e.type) {
                                case u.g.HERO:
                                    i = (0, s.jsx)(ta, { heroBlock: e, handleTransition: t, tab: l }, a);
                                    break;
                                case u.g.FEATURED:
                                    i = (0, s.jsx)(
                                        W,
                                        { isLoading: !1, handleTransition: t, featuredBlockRecord: e },
                                        a,
                                    );
                                    break;
                                case u.g.FEED:
                                    let E = e.sortedSkuIds;
                                    i = (0, s.jsx)(
                                        ey,
                                        {
                                            title:
                                                l === eN.G2.ORBS
                                                    ? R.intl.string(R.t.dFgeuZ)
                                                    : R.intl.string(R.t.NSv5KV),
                                            numVisibleItems: n,
                                            sortedSkuIds: E,
                                            buttonContainerClassName: r?.type === u.g.IMMERSIVE_BANNER ? $.w : void 0,
                                            tab: l,
                                            orbsSupportedOnly: l === eN.G2.ORBS,
                                        },
                                        a,
                                    );
                                    break;
                                case u.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, h.En)(c.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    i = (0, s.jsx)(tT, { wideBannerBlock: e, tab: l }, a);
                                    break;
                                case u.g.SHELF:
                                    i = (0, s.jsx)(eQ, { handleTransition: t, shelf: e, tab: l }, a);
                                    break;
                                case u.g.COUNTDOWN_TIMER:
                                    ((i = (0, s.jsx)(B, { countdownTimerBlock: e, isVisible: d }, a)), (g = !0));
                                    break;
                                case u.g.IMMERSIVE_BANNER:
                                    i = (0, s.jsx)(
                                        e$,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => m(!e) },
                                        a,
                                    );
                                    break;
                                case u.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !x ||
                                        (!0 === e.isDismissible &&
                                            (0, h.En)(c.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, s.jsx)(
                                        A,
                                        {
                                            blockType: e.type,
                                            children: (0, s.jsx)(eM, { gameServerHostingBannerBlock: e, tab: l }),
                                        },
                                        a,
                                    );
                                case u.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, s.jsx)(
                                        A,
                                        {
                                            blockType: e.type,
                                            children: (0, s.jsx)(ti.A, {
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
                                A,
                                {
                                    blockType: e.type,
                                    children: (0, s.jsx)("div", {
                                        className: o()($.v1, $.Of, { [$.J1]: 0 === a || g }),
                                        children: i,
                                    }),
                                },
                                a,
                            );
                        })(e, r > 0 ? j[r - 1] : null, r),
                    ),
                });
    },
    tD = function (e) {
        let { handleTransition: t, tab: n, transitionState: l } = e,
            r = a.useRef(null),
            { handleScroll: i } = (0, _.r)(r, n),
            [o, u] = a.useState(!1),
            c = (0, f.uM)(),
            [h, E] = a.useState(12);
        return (
            a.useEffect(() => {
                if (null != r.current) {
                    function e() {
                        if (null == r.current) return;
                        let e = r.current.getDistanceFromBottom();
                        h >= 36 ? u(e < 20) : e <= 200 && E((e) => e + 12);
                    }
                    let t = r.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [r, h, E]),
            (0, s.jsxs)("div", {
                className: $.or,
                children: [
                    (0, s.jsxs)(d.Ch, {
                        className: $.bx,
                        ref: r,
                        onScroll: i,
                        children: [
                            (0, s.jsx)(tR, { handleTransition: t, numVisibleItems: h, tab: n }),
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
                                                            p.default.track(eg.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: c?.sessionId,
                                                                page_type: n,
                                                                page_category:
                                                                    n === eN.G2.HOME ? void 0 : c?.pageCategory,
                                                                cta_name: "browse the shop button",
                                                            }));
                                                    },
                                                    fullWidth: !0,
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)(tj, {}),
                                    ],
                                }),
                        ],
                    }),
                    (0, s.jsx)(tk, { isVisible: o, transitioning: l === eN.Pf.OUT }),
                ],
            })
        );
    };
