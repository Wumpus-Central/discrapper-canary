l.r(t), l.d(t, { default: () => sj });
var s,
    n,
    a,
    r,
    i,
    o,
    c = l(627968),
    u = l(64700),
    d = l(503698),
    g = l.n(d),
    m = l(835245),
    h = l(702841),
    E = l(192308),
    x = l(315710),
    p = l(944791),
    C = l(444927),
    f = l(688810),
    S = l(726249),
    _ = l(475073),
    A = l(611924),
    L = l(561794),
    v = l(287809),
    b = l(440938),
    j = l(590180),
    I = l(161918),
    O = l(17928),
    N = l(793574),
    y = l(174459),
    k = l(428262),
    T = l(870216),
    R = l(758836),
    B = l(652215),
    M = l(788868);
let P = (e) => {
    let { analyticsSource: t, analyticsLocations: l } = (0, O.cf)([T.A], () => T.A.getAnalytics()),
        s = ((e) => {
            switch (e) {
                case R.G2.ORBS:
                    return N.A.COLLECTIBLES_SHOP_ORBS_TAB;
                case R.G2.HOME:
                    return N.A.COLLECTIBLES_SHOP_HOME_SCREEN;
                case R.G2.BUNDLES:
                    return N.A.COLLECTIBLES_SHOP_BUNDLES_TAB;
                case R.G2.AVATAR_DECORATIONS:
                    return N.A.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                case R.G2.PROFILE_EFFECTS:
                    return N.A.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                case R.G2.NAMEPLATES:
                    return N.A.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                case R.G2.PROFILE_FRAMES:
                    return N.A.COLLECTIBLES_SHOP_PROFILE_FRAMES_TAB;
                case R.G2.CATALOG:
                case R.G2.COLLECTION_INDEX:
                case R.G2.LAYOUT:
                    return N.A.COLLECTIBLES_SHOP;
                case R.G2.GAME_SHOPS:
                    return N.A.SLAYER_STOREFRONT_SHOP_TAB;
            }
        })(e),
        { analyticsLocations: n, newestAnalyticsLocation: a } = (0, f.Ay)([...l, N.A.COLLECTIBLES_SHOP, s]);
    return { analyticsSource: t, analyticsLocations: n, newestAnalyticsLocation: a, currentTabLocation: s };
};
var D = l(773669),
    H = l(248352);
let F = (0, l(945810).mj)({
    name: "2026-01-valentines-day-drop",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 } },
});
var w = l(375708),
    G = (((s = {})[(s.COUNTDOWN = 0)] = "COUNTDOWN"), s),
    U = l(841702),
    z = l(621653),
    V = l(983545),
    W = l(23161),
    K = (((n = {}).HOME = "home"), (n.CATALOG = "catalog"), (n.ORBS = "orbs"), n),
    Y = l(775602),
    $ = l(578797),
    q = l(38405),
    Z = l(4227),
    J = l(856686),
    X = l(689175),
    Q = l(364522),
    ee = l(834730),
    et = l(821609),
    el = l(783977),
    es = l(59520);
let en = (e, t, l, s) => {
        let { scrollTop: n = 0, scrollOffset: a = 0, scrollHeight: r = 0, scrollWidth: i = 0 } = s;
        if (r > 0) {
            let s = (n + a) / r;
            s > 0 &&
                y.default.track(e, {
                    scroll_visible_percent: s,
                    source: l,
                    page_height: Math.round(r),
                    page_width: Math.round(i),
                    page_session_id: t,
                });
        }
    },
    ea = (e, t) => {
        let { analyticsSource: l } = P(t),
            s = (0, es.I)(en, 5e3, [], { trailing: !0 }),
            n = (0, b.uM)(),
            a = n?.sessionId;
        return {
            handleScroll: u.useCallback(() => {
                if (null != e.current) {
                    let t = e.current.getScrollerNode();
                    null != t &&
                        s(B.HAw.COLLECTIBLES_SHOP_SCROLLED, null != a ? a : "", l, {
                            scrollTop: t.scrollTop,
                            scrollOffset: t.offsetHeight,
                            scrollHeight: t.scrollHeight,
                            scrollWidth: t.scrollWidth,
                        });
                }
            }, [s, l, a, e]),
        };
    };
var er = l(354328),
    ei = l(356118),
    eo = l(619835),
    ec = l(641150),
    eu = l(534514);
function ed() {
    let { itemTypeFilters: e, searchQuery: t } = (0, W.v)((e) => e),
        { totalCount: l, isFetchingResults: s } = (0, J.S)(),
        n = (0, W.v)((e) => e.hasFilters()),
        a = u.useCallback(() => {
            if (!n) return "";
            if (s) return w.intl.string(w.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return w.intl.format(w.t.KJMJOz, { count: l, search: e });
            }
            return 1 === e.size && e.has(ec.q.AVATAR_DECORATION)
                ? w.intl.format(w.t.s1UzGQ, { count: l })
                : 1 === e.size && e.has(ec.q.NAMEPLATE)
                  ? w.intl.format(w.t.ZWGN9T, { count: l })
                  : 1 === e.size && e.has(ec.q.PROFILE_EFFECT)
                    ? w.intl.format(w.t["v/7apu"], { count: l })
                    : 1 === e.size && e.has(ec.q.PROFILE_FRAME)
                      ? w.intl.format(w.t.eu4eRy, { count: l })
                      : 1 === e.size && e.has(ec.q.BUNDLE)
                        ? w.intl.format(w.t.fZ1rdk, { count: l })
                        : w.intl.format(w.t["/rPvmQ"], { count: l });
        }, [e, l, n, t, s]);
    return (0, c.jsx)(eu.D, { variant: "heading-lg/semibold", children: a() });
}
var eg = l(172218),
    em = l(932793),
    eh = l(940980),
    eE = l(993408),
    ex = l(623373),
    ep = l(660653),
    eC = l(466459);
let ef = () => {
    let e = (0, h.bG)([v.default], () => v.default.getCurrentUser()),
        t = k.Ay.canUseShopDiscounts(e);
    return (0, u.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: l } = (0, eC.o)(Z.A, e);
                      if (!(0, eE.aw)(e) || (0, eE.tt)(e) || l) return !0;
                      if (!(0, ep.uh)(e)) return !1;
                      if ((0, ex.Ab)(e)) return null != (0, ex.CW)({ product: e, hasShopDiscount: t });
                      let s = (0, eE.l8)(t),
                          n = (0, eE.yt)(e, s);
                      if (null == n || 0 === n.amount) return !0;
                      let a = 0;
                      return (
                          null != e.bundledProducts &&
                              (a = e.bundledProducts.reduce((e, t) => {
                                  let l = (0, eE.yt)(t, s);
                                  return e + (l?.amount ?? 0);
                              }, 0)),
                          n.amount < a
                      );
                  }),
        [t],
    );
};
var eS = l(575593);
let e_ = (e, t) =>
        e.type === eS.R.BUNDLE && e.items.some((e) => t.includes(e.skuId))
            ? 1
            : (0, ex.B1)(e)
              ? 2 * !!e.variants.every((e) => t.includes(e.skuId))
              : 2 * !!t.includes(e.skuId),
    eA = (e) => {
        let t = (0, h.bG)([Z.A], () => Z.A.purchases),
            l = (0, u.useMemo)(
                () =>
                    [...t].map((e) => {
                        let [t] = e;
                        return t;
                    }),
                [t],
            );
        return (0, u.useMemo)(() => [...e].sort((e, t) => e_(e, l) - e_(t, l)), [e, l]);
    };
var eL = l(100057),
    ev = l(126031),
    eb = l(653887),
    ej = l(607470),
    eI = l(531685),
    eO = l(203312),
    eN = l(212407),
    ey = l(215688);
function ek(e) {
    let { category: t } = e,
        l = (0, h.bG)([Y.A], () => Y.A.useReducedMotion),
        s = (0, h.bG)([eI.A], () => eI.A.isFocused()),
        { catalogBannerStatic: n, catalogBannerAnimated: a, catalogBannerRive: r } = (0, eN.MV)(t),
        i = u.useRef(null),
        o = null != r;
    return (0, c.jsxs)("div", {
        ref: i,
        className: g()(ey.sW, { [ey.by]: o }),
        children: [
            (0, c.jsx)(ev.s, { children: (0, c.jsx)(eu.D, { variant: "heading-lg/semibold", children: t.name }) }),
            o
                ? (0, c.jsx)(eb._, {
                      src: r,
                      fit: "cover",
                      alignment: "center-left",
                      style: { width: "100%", height: "100%" },
                      eventTargetRef: i,
                      autoplay: !0,
                  })
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          (0, c.jsx)("img", { className: ey.ze, src: n, alt: "" }),
                          null != a &&
                              !l &&
                              s &&
                              (0, c.jsx)(ej.A, { src: a, className: ey.tr, autoPlay: !0, loop: !0 }),
                      ],
                  }),
            (0, c.jsx)(eO.A, { category: t, className: ey.v0, daysRemainingText: w.t["8gsP5M"] }),
        ],
    });
}
(0, eE.$b)(90);
var eT = l(496569),
    eR = l(835090);
let eB = (e) => {
    let { skipPulseAnimation: t = !1 } = e;
    return (0, c.jsx)("div", {
        className: g()(eT.ty, eR.SQ, { [eR.aE]: !t }),
        children: (0, c.jsxs)("div", {
            className: g()(eT.qt, eR.yw),
            children: [(0, c.jsx)("div", { className: eR.Jr }), (0, c.jsx)("div", { className: eR.N9 })],
        }),
    });
};
var eM = l(647685),
    eP = l(10);
let eD = () =>
    (0, c.jsx)("div", {
        className: eP.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, c.jsxs)(
                "div",
                {
                    className: eM.vY,
                    children: [
                        (0, c.jsx)("div", { className: g()(ey.sW, eP.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, c.jsx)(eB, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
var eH = l(491438),
    eF = l(561769),
    ew = l(159439),
    eG = l(998694);
function eU(e) {
    let { category: t } = e,
        l = (0, h.bG)([v.default], () => v.default.getCurrentUser()),
        s = eA(t.products),
        n = ef()(s),
        a = (0, eh.W)("CollectiblesCatalogContent");
    return null == l || 0 === n.length
        ? null
        : (0, c.jsx)("div", {
              className: eM.vY,
              children: n.map((e, t) =>
                  (0, c.jsx)(
                      b.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, c.jsx)(
                              eH.A,
                              {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  prioritizedCurrency: a ? eF.Hi.FIAT : void 0,
                              },
                              e.skuId,
                          ),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function ez(e) {
    let { category: t } = e,
        [l, s] = u.useState(!1),
        n = (0, eg.K)((e) => {
            s(e);
        }, 0.15);
    return (0, c.jsxs)("div", {
        className: eM.EF,
        ref: n,
        children: [(0, c.jsx)(ek, { category: t }), (0, c.jsx)(eU, { category: t })],
    });
}
function eV(e) {
    let { categories: t, setCategoryRef: l, currentPage: s, handlePageChange: n, initialCategoryId: a } = e,
        r = (0, b.uM)(),
        i = (0, ew.U)(),
        o = r?.sessionId ?? "",
        { noCache: d, includeUnpublished: g } = (0, eG.A)(),
        m = u.useMemo(
            () =>
                t
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [t],
        ),
        h = u.useRef(void 0);
    u.useEffect(() => {
        if (null == a || 0 === m.length) {
            h.current = void 0;
            return;
        }
        if (a === h.current) return;
        let e = m.findIndex((e) => e.skuId === a);
        if (-1 === e) return;
        let t = Math.floor(e / R.l5) + 1;
        t !== s && n(t), (h.current = a);
    }, [a, m, n, s]);
    let E = u.useMemo(() => {
        let e = (s - 1) * R.l5;
        return m.slice(e, e + R.l5);
    }, [m, s]);
    return (u.useEffect(() => {
        (0, eL.z)({
            sessionId: o,
            checkpoint: eL.t.SHOP_MOUNTED,
            tab: R.G2.CATALOG,
            unpublishedCategoriesShown: g,
            cacheDisabled: d,
        });
    }, []),
    u.useEffect(() => {
        i ||
            0 === E.length ||
            (0, eL.z)({
                sessionId: o,
                checkpoint: eL.t.SHOP_RENDERED,
                tab: R.G2.CATALOG,
                unpublishedCategoriesShown: g,
                cacheDisabled: d,
            });
    }, [o, g, d, i, E.length]),
    i)
        ? (0, c.jsx)(eD, {})
        : (0, c.jsxs)("div", {
              className: eM.LZ,
              children: [
                  E.map((e, t) =>
                      (0, c.jsx)(
                          "div",
                          {
                              ref: (t) => l(e.skuId, t),
                              children: (0, c.jsx)(b.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, c.jsx)(ez, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, c.jsx)("div", {
                      className: eM.Ej,
                      children: (0, c.jsx)(em.m, {
                          currentPage: s,
                          totalCount: m.length,
                          pageSize: R.l5,
                          onPageChange: n,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var eW = l(177366),
    eK = l(401864),
    eY = l(124987),
    e$ = l(691885),
    eq = l(146919),
    eZ = l(912853);
let eJ = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: l } = (0, W.v)(),
        s = (0, b.uM)(),
        n = (0, eq.yB)("CollectiblesSortSelect"),
        a = l(),
        r = u.useMemo(() => R.QB.filter((e) => e.sortType !== eY.$.RELEVANCE || a), [a]),
        i = u.useCallback((e) => {
            let { sortType: t, sortDirection: l } = e;
            return t === eY.$.RECENCY
                ? { label: w.intl.string(w.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === eY.$.PRICE
                  ? l === eK.A.ASC
                      ? { label: w.intl.string(w.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: w.intl.string(w.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === eY.$.RELEVANCE
                    ? { label: w.intl.string(w.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: w.intl.string(w.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        o = u.useCallback(
            (e) =>
                ({
                    recent: { sortType: eY.$.RECENCY, sortDirection: eK.A.DESC },
                    "price-asc": { sortType: eY.$.PRICE, sortDirection: eK.A.ASC },
                    "price-desc": { sortType: eY.$.PRICE, sortDirection: eK.A.DESC },
                    popularity: { sortType: eY.$.POPULARITY, sortDirection: eK.A.DESC },
                    relevance: { sortType: eY.$.RELEVANCE, sortDirection: eK.A.DESC },
                })[e],
            [],
        ),
        d = u.useCallback(
            (e) => {
                let l = i(o(e));
                y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: s?.sessionId,
                    page_section: s?.pageSection,
                    page_category: s?.pageCategory,
                    page_index: s?.pageIndex,
                    page_size: s?.pageSize,
                    cta_name: `sort by ${l.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(o(e));
            },
            [s, i, o, t],
        ),
        m = i(e);
    return (0, c.jsx)("div", {
        className: g()(eZ.k, { [eq.jP]: n }),
        children: (0, c.jsx)(e$.l, {
            label: w.intl.string(w.t.uaX705),
            hideLabel: !0,
            options: r.map(i),
            onSelectionChange: d,
            value: m.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var eX =
        (((a = {}).BLUE = "COLLECTIBLES_COLOR_BLUE"),
        (a.GREEN = "COLLECTIBLES_COLOR_GREEN"),
        (a.PINK = "COLLECTIBLES_COLOR_PINK"),
        (a.RED = "COLLECTIBLES_COLOR_RED"),
        (a.YELLOW = "COLLECTIBLES_COLOR_YELLOW"),
        (a.ORANGE = "COLLECTIBLES_COLOR_ORANGE"),
        (a.PURPLE = "COLLECTIBLES_COLOR_PURPLE"),
        (a.BROWN = "COLLECTIBLES_COLOR_BROWN"),
        (a.BLACK = "COLLECTIBLES_COLOR_BLACK"),
        (a.WHITE = "COLLECTIBLES_COLOR_WHITE"),
        a),
    eQ =
        (((r = {}).ANIME = "COLLECTIBLES_THEME_ANIME"),
        (r.GAMING = "COLLECTIBLES_THEME_GAMING"),
        (r.CUTE_COZY = "COLLECTIBLES_THEME_CUTE_COZY"),
        (r.FOOD_DRINKS = "COLLECTIBLES_THEME_FOOD_DRINKS"),
        (r.ANIMALS_PETS = "COLLECTIBLES_THEME_ANIMALS_PETS"),
        (r.MOVIES_TV_SHOWS = "COLLECTIBLES_THEME_MOVIES_TV_SHOWS"),
        (r.FANTASY = "COLLECTIBLES_THEME_FANTASY"),
        (r.DARK_MOODY = "COLLECTIBLES_THEME_DARK_MOODY"),
        (r.NATURE = "COLLECTIBLES_THEME_NATURE"),
        (r.SCI_FI = "COLLECTIBLES_THEME_SCI_FI"),
        r),
    e0 = l(990078),
    e1 = l(150934),
    e2 = l(508770),
    e4 = l(939249),
    e5 = l(947641),
    e9 = l(661531),
    e3 = l(604338),
    e7 = l(785866),
    e6 = l(373846),
    e8 = l(308323),
    te = l(608599),
    tt = l(685761),
    tl = l(157225),
    ts = l(413249),
    tn = l(510241),
    ta = l(601198),
    tr = l(736653),
    ti = l(371446),
    to = l(13875),
    tc = l(818348),
    tu = l(764915);
function td() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: l, hasFilters: s } = (0, W.v)(),
        n = s(),
        { enabled: a } = (0, ti.Z)({ location: "Shop" }),
        r = (0, to.sk)("FilterBar"),
        i = (0, b.uM)(),
        o = u.useRef(null),
        d = u.useMemo(() => R._6.filter((e) => r || e !== ec.q.PROFILE_FRAME), [r]),
        m = u.useCallback(
            (e) => {
                y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: i?.sessionId,
                    page_section: i?.pageSection,
                    page_category: i?.pageCategory,
                    page_index: i?.pageIndex,
                    page_size: i?.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [i],
        );
    return (0, c.jsxs)("div", {
        className: tu.kT,
        children: [
            (0, c.jsxs)("div", {
                className: g()(tu.KZ, tu.YG),
                children: [
                    (0, c.jsx)("div", {
                        ref: o,
                        tabIndex: -1,
                        children: (0, c.jsx)(ee.E, {
                            variant: "text-md/semibold",
                            className: tu.hr,
                            children: w.intl.string(w.t.Qk6r1a),
                        }),
                    }),
                    d.map((e) => (0, c.jsx)(tg, { filter: e, trackFilterAction: m }, e)),
                    a &&
                        (0, c.jsx)(e1.S, {
                            checked: t,
                            onChange: () => {
                                m(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                            },
                            label: w.intl.string(w.t.AHHHgG),
                        }),
                ],
            }),
            (0, c.jsx)(tm, { trackFilterAction: m }),
            (0, c.jsx)(tx, { trackFilterAction: m }),
            n &&
                (0, c.jsx)(et.$, {
                    variant: "secondary",
                    onClick: () => {
                        m("filter reset"), l(), requestAnimationFrame(() => o.current?.focus());
                    },
                    text: w.intl.string(w.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
let tg = (e) => {
        let { filter: t, trackFilterAction: l } = e,
            s = {
                [ec.q.AVATAR_DECORATION]: w.intl.string(w.t.dRZYNE),
                [ec.q.PROFILE_EFFECT]: w.intl.string(w.t["1cNjtx"]),
                [ec.q.NAMEPLATE]: w.intl.string(w.t.V68Fqz),
                [ec.q.PROFILE_FRAME]: w.intl.string(w.t.ecTJkR),
                [ec.q.BUNDLE]: w.intl.string(w.t.FYFpps),
            },
            { itemTypeFilters: n, onToggleItemType: a } = (0, W.v)(),
            r = (0, c.jsx)(e1.S, {
                checked: n.has(t),
                onChange: () => {
                    let e = s[t]?.toLowerCase() != null ? s[t].toLowerCase() : t;
                    l(`filter item type ${e} ${!1 === n.has(t) ? "on" : "off"}`), a(t);
                },
                label: s[t] ?? "",
            });
        return t === ec.q.PROFILE_FRAME
            ? (0, c.jsxs)("div", { className: tu.Ym, children: [r, (0, c.jsx)(e2.E, { type: "new" })] })
            : r;
    },
    tm = (e) => {
        let { trackFilterAction: t } = e,
            l = u.useMemo(
                () => [
                    { color: "#9B59B6", label: w.intl.string(w.t.kqUD4P), enum: eX.PURPLE },
                    { color: "#3498DB", label: w.intl.string(w.t.qQTRae), enum: eX.BLUE },
                    { color: "#2ECC71", label: w.intl.string(w.t["f/Ylk6"]), enum: eX.GREEN },
                    { color: "#A0522D", label: w.intl.string(w.t["Sd/BMa"]), enum: eX.BROWN },
                    { color: "#F1C40F", label: w.intl.string(w.t["0fevYz"]), enum: eX.YELLOW },
                ],
                [],
            ),
            s = u.useMemo(
                () => [
                    { color: "#E67E22", label: w.intl.string(w.t.ZE7weD), enum: eX.ORANGE },
                    { color: "#E74C3C", label: w.intl.string(w.t.hKJGOM), enum: eX.RED },
                    { color: "#EC407A", label: w.intl.string(w.t.HvLEGM), enum: eX.PINK },
                    { color: "#FFFFFF", label: w.intl.string(w.t["CB+lNO"]), enum: eX.WHITE },
                    { color: "#262626", label: w.intl.string(w.t["dMey+v"]), enum: eX.BLACK },
                ],
                [],
            );
        return (0, c.jsxs)("div", {
            className: tu.KZ,
            children: [
                (0, c.jsx)(ee.E, {
                    variant: "text-md/semibold",
                    className: tu.hr,
                    children: w.intl.string(w.t.K1xGoG),
                }),
                (0, c.jsx)(th, { colors: l, trackFilterAction: t }),
                (0, c.jsx)(th, { colors: s, trackFilterAction: t }),
            ],
        });
    },
    th = (e) => {
        let { colors: t, trackFilterAction: l } = e,
            { colorFilters: s, onToggleColor: n } = (0, W.v)();
        return (0, c.jsx)("div", {
            className: tu.OW,
            children: t.map((e) => {
                let { color: t, label: a, enum: r } = e;
                return (0, c.jsx)(
                    tE,
                    { color: t, label: a, enum: r, isToggled: s.has(r), onToggleColor: n, trackFilterAction: l },
                    r,
                );
            }),
        });
    },
    tE = (e) => {
        let { color: t, label: l, enum: s, isToggled: n, onToggleColor: a, trackFilterAction: r } = e;
        return (0, c.jsx)(
            e0.m,
            {
                text: l,
                asContainer: !0,
                ariaHidden: !0,
                children: (0, c.jsx)(
                    e4.D,
                    {
                        className: g()(tu.n1, { [tu.lx]: n }),
                        style: { backgroundColor: t },
                        "aria-label": l,
                        "aria-pressed": n,
                        onClick: () => {
                            r(`filter color ${l.toLowerCase()} ${!n ? "on" : "off"}`), a(s);
                        },
                        children:
                            n &&
                            (0, c.jsx)("div", {
                                className: tu.oE,
                                children: (0, c.jsx)(e5.r, { size: "xs", color: e9.A.colors.WHITE }),
                            }),
                    },
                    t,
                ),
            },
            l,
        );
    },
    tx = (e) => {
        let { trackFilterAction: t } = e,
            { themeFilters: l, onToggleTheme: s } = (0, W.v)(),
            n = (0, tr.Ay)() === tc.NJ.DARK,
            a = u.useCallback(
                (e) => {
                    if (l.has(e) || n) return "always-white";
                },
                [l, n],
            ),
            r = u.useCallback(
                (e) => (l.has(e) || n ? e9.A.colors.WHITE : e9.A.colors.INTERACTIVE_TEXT_DEFAULT),
                [l, n],
            ),
            i = u.useMemo(
                () => [
                    {
                        name: w.intl.string(w.t.aVBOKh),
                        icon: (0, c.jsx)(e3.E, { size: "xs", color: r(eQ.ANIME) }),
                        enum: eQ.ANIME,
                    },
                    {
                        name: w.intl.string(w.t["3WoZBc"]),
                        icon: (0, c.jsx)(e7._, { size: "xs", color: r(eQ.GAMING) }),
                        enum: eQ.GAMING,
                    },
                    {
                        name: w.intl.string(w.t.yuEmLj),
                        icon: (0, c.jsx)(e6.C, { size: "xs", color: r(eQ.CUTE_COZY) }),
                        enum: eQ.CUTE_COZY,
                    },
                    {
                        name: w.intl.string(w.t.mMvCHo),
                        icon: (0, c.jsx)(e8.L, { size: "xs", color: r(eQ.SCI_FI) }),
                        enum: eQ.SCI_FI,
                    },
                    {
                        name: w.intl.string(w.t.TlhOQC),
                        icon: (0, c.jsx)(te.L, { size: "xs", color: r(eQ.FOOD_DRINKS) }),
                        enum: eQ.FOOD_DRINKS,
                    },
                    {
                        name: w.intl.string(w.t["4IaUIM"]),
                        icon: (0, c.jsx)(tt.f, { size: "xs", color: r(eQ.FANTASY) }),
                        enum: eQ.FANTASY,
                    },
                    {
                        name: w.intl.string(w.t["w0nSG/"]),
                        icon: (0, c.jsx)(tl.N, { size: "xs", color: r(eQ.ANIMALS_PETS) }),
                        enum: eQ.ANIMALS_PETS,
                    },
                    {
                        name: w.intl.string(w.t.cJng7v),
                        icon: (0, c.jsx)(ts.p, { size: "xs", color: r(eQ.NATURE) }),
                        enum: eQ.NATURE,
                    },
                    {
                        name: w.intl.string(w.t["5mUvyM"]),
                        icon: (0, c.jsx)(tn.T, { size: "xs", color: r(eQ.MOVIES_TV_SHOWS) }),
                        enum: eQ.MOVIES_TV_SHOWS,
                    },
                    {
                        name: w.intl.string(w.t.MB9H5Z),
                        icon: (0, c.jsx)(ta.e, { size: "xs", color: r(eQ.DARK_MOODY) }),
                        enum: eQ.DARK_MOODY,
                    },
                ],
                [r],
            );
        return (0, c.jsxs)("div", {
            className: tu.KZ,
            children: [
                (0, c.jsx)(ee.E, {
                    variant: "text-md/semibold",
                    className: tu.hr,
                    children: w.intl.string(w.t.t1Ztrp),
                }),
                (0, c.jsx)("div", {
                    className: tu.Ot,
                    children: i.map((e) => {
                        let { name: n, icon: r, enum: i } = e;
                        return (0, c.jsxs)(
                            e4.D,
                            {
                                className: g()(tu.w4, { [tu.C7]: l.has(i) }),
                                "aria-label": n,
                                "aria-pressed": l.has(i),
                                onClick: () => {
                                    let e = l.has(i);
                                    t(`filter theme ${n.toLowerCase()} ${!e ? "on" : "off"}`), s(i);
                                },
                                children: [
                                    r,
                                    (0, c.jsx)(ee.E, { color: a(i), variant: "text-md/medium", children: n }),
                                ],
                            },
                            n,
                        );
                    }),
                }),
            ],
        });
    };
var tp = l(687971);
function tC() {
    return (0, c.jsxs)("div", {
        className: tp.k,
        children: [
            (0, c.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: w.intl.string(w.t.oezC3x),
                className: tp._,
            }),
            (0, c.jsx)(eu.D, { variant: "heading-xl/semibold", children: w.intl.string(w.t.oezC3x) }),
            (0, c.jsx)(ee.E, { variant: "text-md/medium", children: w.intl.string(w.t["Tc/Ndl"]) }),
        ],
    });
}
var tf = l(528096);
let tS = { flattenProductVariants: !0 };
function t_(e) {
    let { isFetchingCategories: t, scrollerRef: l, tab: s } = e,
        n = (0, b.uM)(),
        a = n?.sessionId ?? "",
        { noCache: r, includeUnpublished: i } = (0, eG.A)(),
        o = (0, eh.W)("CollectiblesFilterResults"),
        d = (0, h.bG)([v.default], () => v.default.getCurrentUser()),
        { skus: m, currentPage: E, totalCount: x, isFetchingResults: p } = (0, J.S)(),
        C = (0, h.yK)([j.A], () => j.A.getProductsBySkus(m)),
        f = u.useCallback(() => {
            l?.current?.scrollToTop({ animate: !0 });
        }, [l]),
        S = m?.join("");
    u.useEffect(() => {
        f();
    }, [S, f]);
    let _ = ef(),
        A = u.useMemo(() => _(C), [_, C]);
    u.useEffect(() => {
        t ||
            (0, eL.z)({
                sessionId: a,
                checkpoint: eL.t.SHOP_RENDERED,
                tab: s,
                unpublishedCategoriesShown: i,
                cacheDisabled: r,
            });
    }, [a, i, r, t, s]);
    let L = u.useRef(null),
        { setQueryPageSize: I, setQueryPageOffset: O, queryPageSize: N } = (0, W.v)(),
        [k, T] = u.useState(!1),
        R = t || p || null == d;
    u.useEffect(() => {
        R ? T(!1) : A.length > 0 && T(!0);
    }, [R, A.length]);
    let M = N > 0 && !R && 0 === A.length;
    u.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == L.current || I(Math.floor(5 * getComputedStyle(L.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != L.current) return e.observe(L.current), () => e.disconnect();
    }, [I]);
    let P = u.useCallback(
        (e) => {
            y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: n?.sessionId,
                page_section: n?.pageSection,
                page_category: n?.pageCategory,
                page_index: e,
                page_size: N,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                O((e - 1) * N);
        },
        [n, N, O],
    );
    return (0, c.jsxs)(eF.v3.Provider, {
        value: tS,
        children: [
            (0, c.jsxs)("div", {
                className: g()({ [tf.oE]: M }),
                children: [
                    M && (0, c.jsx)(tC, {}),
                    (0, c.jsxs)("div", {
                        className: g()(tf.ZE, { [tf.Kp]: k }),
                        ref: L,
                        children: [
                            R && [...Array(N)].map((e, t) => (0, c.jsx)(eB, {}, t)),
                            !R &&
                                A.map((e, t) =>
                                    null == j.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, c.jsx)(
                                              b.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, c.jsx)(
                                                      eH.A,
                                                      {
                                                          skuId: e.skuId,
                                                          hideStaticBundleBackgroundAsset: !0,
                                                          prioritizedCurrency: o ? eF.Hi.FIAT : void 0,
                                                      },
                                                      e.skuId,
                                                  ),
                                              },
                                              e.skuId,
                                          ),
                                ),
                        ],
                    }),
                ],
            }),
            x > N &&
                (0, c.jsx)("div", {
                    className: tf.Ej,
                    children: (0, c.jsx)("div", {
                        children: (0, c.jsx)(em.m, {
                            currentPage: E,
                            totalCount: x,
                            pageSize: N,
                            onPageChange: P,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var tA = l(832179);
function tL(e) {
    let { tab: t, categories: l, initialCategoryId: s, showFilterInitially: n = !0, onUnmount: a } = e,
        r = (0, er.A)("shop_include_unpublished");
    (0, W.S)(r);
    let i = u.useRef(null),
        { handleScroll: o } = ea(i, t),
        d = (0, $.U)("Shop Browse"),
        { setCategoryRef: g, handleScrollToCategory: m } = (0, eW.k0)(i.current),
        [h, E] = u.useState(n),
        [x, p] = u.useState(!1);
    return (
        u.useEffect(() => {
            null != s && m(s);
        }, [s, m]),
        u.useEffect(
            () => () => {
                null != a && a();
            },
            [],
        ),
        u.useEffect(() => {
            let e = () => {
                p(window.innerWidth < 1400);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, c.jsx)("div", {
            className: tA.VM,
            children: (0, c.jsxs)("main", {
                className: tA.MY,
                children: [
                    (0, c.jsx)(X.Gt, {
                        className: tA.OW,
                        ref: i,
                        onScroll: o,
                        children: d
                            ? (0, c.jsx)("div", {
                                  className: tA.en,
                                  children: (0, c.jsx)("div", {
                                      className: tA.pf,
                                      children: (0, c.jsx)(ei.Z_, { tenantId: B.FYj, templateId: eo.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, c.jsx)(tv, {
                                  isSmallScreen: x,
                                  filterBarOpen: h,
                                  setFilterBarOpen: E,
                                  tab: t,
                                  scrollerRef: i,
                                  categories: l,
                                  setCategoryRef: g,
                                  initialCategoryId: s,
                              }),
                    }),
                    h && !x && (0, c.jsx)("div", { className: tA.yF }),
                    h && !x && (0, c.jsx)(Q.Ip, { className: tA.kT, children: (0, c.jsx)(td, {}) }),
                ],
            }),
        })
    );
}
let tv = (e) => {
    let {
            isSmallScreen: t,
            filterBarOpen: l,
            setFilterBarOpen: s,
            tab: n,
            scrollerRef: a,
            categories: r,
            setCategoryRef: i,
            initialCategoryId: o,
        } = e,
        d = u.useRef(null),
        m = (0, W.v)((e) => e.hasDefaultFilters()),
        h = (0, b.uM)(),
        { handlePageChange: E, currentPage: x } = ((e) => {
            let [t, l] = u.useState(1);
            return {
                currentPage: t,
                handlePageChange: u.useCallback(
                    (t) => {
                        l(t), e.current?.scrollTo({ to: 0 });
                    },
                    [e, l],
                ),
            };
        })(a),
        p = u.useCallback(
            (e) => {
                y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: h?.sessionId,
                    page_section: h?.pageSection,
                    page_category: h?.pageCategory,
                    page_index: e,
                    page_size: h?.pageSize,
                    cta_name: `catalog page ${e}`,
                    page_type: "catalog",
                }),
                    E(e);
            },
            [h, E],
        ),
        C = u.useRef(null);
    return (
        u.useEffect(() => {
            if (!t || !l) return;
            let e = (e) => {
                let t = e.target;
                null === d.current ||
                    null === C.current ||
                    d.current.contains(t) ||
                    C.current.contains(t) ||
                    (y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: h?.sessionId,
                        page_section: h?.pageSection,
                        page_category: h?.pageCategory,
                        page_index: h?.pageIndex,
                        page_size: h?.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    s(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [t, l, s, h]),
        (0, c.jsx)("div", {
            className: tA.en,
            children: (0, c.jsxs)("div", {
                className: tA.pf,
                children: [
                    (0, c.jsxs)("div", {
                        className: tA.ne,
                        children: [
                            (0, c.jsx)("div", { className: tA.lQ, children: (0, c.jsx)(ed, {}) }),
                            (0, c.jsxs)("div", {
                                className: g()(tA.wR, { [tA.Im]: t }),
                                children: [
                                    (0, c.jsxs)("div", {
                                        className: tA.Ul,
                                        children: [
                                            (0, c.jsx)(ee.E, {
                                                variant: "text-md/semibold",
                                                children: w.intl.string(w.t.uaX705),
                                            }),
                                            (0, c.jsx)(eJ, {}),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        ref: C,
                                        children: (0, c.jsx)(et.$, {
                                            onClick: () => {
                                                let e = !l;
                                                y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: h?.sessionId,
                                                    page_section: h?.pageSection,
                                                    page_category: h?.pageCategory,
                                                    page_index: h?.pageIndex,
                                                    page_size: h?.pageSize,
                                                    cta_name: `filter bar ${e ? "show" : "hide"}`,
                                                    page_type: "catalog",
                                                }),
                                                    s(e);
                                            },
                                            variant: "secondary",
                                            text: w.intl.string(l ? w.t.fYtm6f : w.t["TeTYE+"]),
                                            icon: el.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            l &&
                                t &&
                                (0, c.jsx)("div", {
                                    className: tA.Dh,
                                    ref: d,
                                    children: (0, c.jsx)(X.Ch, { className: tA.Qo, children: (0, c.jsx)(td, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, c.jsx)(b.R9, {
                              newValue: { pageIndex: x },
                              children: (0, c.jsx)(eV, {
                                  categories: r,
                                  setCategoryRef: i,
                                  currentPage: x,
                                  handlePageChange: p,
                                  initialCategoryId: o,
                              }),
                          })
                        : (0, c.jsx)(t_, { scrollerRef: a, tab: n }, n),
                ],
            }),
        })
    );
};
var tb = l(599062),
    tj = l(651162),
    tI = l(554146),
    tO = l(367727);
let tN = u.createContext(null);
function ty(e) {
    let { blockType: t, children: l } = e,
        s = u.useMemo(() => ({ blockType: t }), [t]);
    return (0, c.jsx)(tN.Provider, { value: s, children: l });
}
var tk = l(755172),
    tT = l(325595),
    tR = l(893998),
    tB = l(110629),
    tM = l(873174),
    tP = l(607399),
    tD = l(946015),
    tH = l(717421),
    tF = l(854818),
    tw = l(134264);
let tG = u.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: l } = e,
        s = (0, tH.z)({
            transform: `translateX(-50%) ${l ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!l,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsxs)(tM.animated.div, {
        className: g()([tw.lP, tP.Fr && tw.yJ]),
        role: "status",
        style: {
            ...s,
            ...(null != t.bannerUrl &&
                "" !== t.bannerUrl && {
                    backgroundImage: `url(${t.bannerUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }),
        },
        children: [
            (0, c.jsxs)(tD.s, {
                direction: tD.s.Direction.VERTICAL,
                children: [
                    (0, c.jsx)(ee.E, {
                        variant: "text-md/medium",
                        className: tw.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, c.jsx)(ee.E, {
                            variant: "text-sm/medium",
                            className: tw.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, c.jsx)(tF.e, { endDate: t.endTime }),
        ],
    });
});
var tU = l(424918),
    tz = l(269115),
    tV = l(777666),
    tW = l(597783),
    tK = l(941734);
let tY = (e) => {
        let t,
            { category: l, subblock: s, badgeText: n, enablePreview: a, handleTransition: r } = e;
        null != s && (t = j.A.getCategoryByStoreListingId(s?.categoryStoreListingId)?.skuId);
        let i = t ?? l?.skuId ?? "",
            { handleCardVisibilityChange: o } = (0, tW.Z)(i, "home", "marketing featured block"),
            d = (0, eN.s4)(l, s, a),
            g = u.useRef(null),
            m = s?.bodyText,
            h = s?.name ?? l?.name,
            E = null != h ? w.intl.formatToPlainString(w.t.frSHlf, { destination: h }) : void 0,
            x = (0, b.uM)();
        return (0, c.jsx)(tz.L, {
            innerRef: g,
            onChange: o,
            threshold: 0,
            children: (0, c.jsxs)(e4.D, {
                className: tK.oT,
                innerRef: g,
                style: { ...(null != d && { backgroundImage: `url(${d})` }) },
                onClick: () => {
                    r({
                        sourceButton: "shop marketing tile",
                        categorySkuId: i,
                        isInternalShopDeeplink: !0,
                        isOrbsExclusive: l?.isOrbsExclusive,
                    }),
                        y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: x?.sessionId,
                            sku_id: i,
                            page_type: "home",
                            page_section: x?.pageSection,
                            page_category: x?.pageCategory,
                            tile_type: "FEATURED_BLOCK",
                            tile_position: String(x?.tilePosition),
                            cta_name: null,
                        });
                },
                children: [
                    null != n && (0, c.jsx)(tV.Lp, { disableColor: !0, text: n, className: tK.pv }),
                    (0, c.jsx)("div", {
                        className: tK.Gh,
                        children:
                            null != m &&
                            (0, c.jsx)(eu.D, {
                                lineClamp: 4,
                                className: tK.BN,
                                style: { color: s?.bannerTextColor ?? "white" },
                                variant: "heading-md/medium",
                                children: m,
                            }),
                    }),
                    (0, c.jsx)("div", {
                        className: tK.b2,
                        children: (0, c.jsx)(et.$, {
                            variant: "overlay-primary",
                            text: w.intl.string(w.t.jVcuVY),
                            "aria-label": E,
                            onClick: (e) => {
                                r({
                                    sourceButton: "shop marketing take me there button",
                                    categorySkuId: i,
                                    isInternalShopDeeplink: !0,
                                    isOrbsExclusive: l?.isOrbsExclusive,
                                }),
                                    e.stopPropagation(),
                                    y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                        collectibles_shop_session_id: x?.sessionId,
                                        sku_id: i,
                                        page_type: "home",
                                        page_section: x?.pageSection,
                                        page_category: x?.pageCategory,
                                        tile_type: "FEATURED_BLOCK",
                                        tile_position: String(x?.tilePosition),
                                        cta_name: "Take me there button",
                                    });
                            },
                        }),
                    }),
                ],
            }),
        });
    },
    t$ = (e) => {
        let { handleTransition: t, featuredBlockRecord: l } = e;
        return (0, c.jsx)("div", {
            className: g()(tK.n9, tK.YB),
            children: l?.subblocks.map((e, l) =>
                e.type === tU.u.CATEGORY
                    ? (0, c.jsx)(
                          b.R9,
                          {
                              newValue: {
                                  categoryPosition: 1,
                                  pageCategory: e.name,
                                  pageSection: "featured_block",
                                  tilePosition: l,
                              },
                              children: (0, c.jsx)(
                                  tY,
                                  {
                                      subblock: e,
                                      enablePreview: 0 === l,
                                      badgeText: (0, eE.HF)(e.unpublishedAt) ? w.intl.string(w.t["h/uBCR"]) : void 0,
                                      handleTransition: t,
                                  },
                                  e.categoryStoreListingId,
                              ),
                          },
                          e.categoryStoreListingId,
                      )
                    : null,
            ),
        });
    },
    tq = (e) => {
        let { handleTransition: t, categories: l } = e;
        if (null == l || l.length < 2) return null;
        let [s, n] = l;
        return (0, c.jsx)("div", {
            className: g()(tK.n9, tK.YB),
            children: (0, c.jsxs)(b.R9, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != s ? s.name : n?.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == s),
                },
                children: [
                    null != s &&
                        (0, c.jsx)(tY, {
                            category: s,
                            enablePreview: !0,
                            badgeText: (0, eE.HF)(s.unpublishedAt) ? w.intl.string(w.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                    null != n &&
                        (0, c.jsx)(tY, {
                            category: n,
                            badgeText: (0, eE.HF)(n.unpublishedAt) ? w.intl.string(w.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                ],
            }),
        });
    },
    tZ = (e) => {
        let { isLoading: t, handleTransition: l, categories: s, featuredBlockRecord: n } = e,
            { analyticsLocations: a } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
        return t
            ? (0, c.jsxs)("div", {
                  className: g()(tK.n9, tK.YB),
                  children: [
                      (0, c.jsx)("div", {
                          className: g()(tK.Jn, tK.oT),
                          children: (0, c.jsx)("div", { className: tK.uy }),
                      }),
                      (0, c.jsx)("div", {
                          className: g()(tK.Jn, tK.oT),
                          children: (0, c.jsx)("div", { className: tK.uy }),
                      }),
                  ],
              })
            : null != n
              ? (0, c.jsx)(f.f5, {
                    value: a,
                    children: (0, c.jsx)(t$, { featuredBlockRecord: n, handleTransition: l, isLoading: !1 }),
                })
              : (0, c.jsx)(f.f5, {
                    value: a,
                    children: (0, c.jsx)(tq, { categories: s, handleTransition: l, isLoading: !1 }),
                });
    };
var tJ = l(140735),
    tX = l(621466),
    tQ =
        (((i = {}).MOUNTED = "mounted"),
        (i.SORT_OUT = "sort-out"),
        (i.SORT_IN = "sort-in"),
        (i.SHUFFLE_OUT = "shuffle-out"),
        (i.SHUFFLE_IN = "shuffle-in"),
        (i.FINISHED = "finished"),
        i);
l(667532);
var t0 = l(735438),
    t1 = l.n(t0),
    t2 =
        (((o = {}).RECOMMENDED = "recommended"),
        (o.POPULAR = "popular"),
        (o.RECENT = "recent"),
        (o.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (o.RANDOM = "random"),
        o),
    t4 = l(153488),
    t5 = l(155999),
    t9 = l.n(t5);
function t3() {
    let e = (0, O.bG)([j.A], () => j.A.products);
    return (0, u.useCallback)(
        (t) =>
            t9()(
                t
                    .map((t) => {
                        let l = e.get(t);
                        return null != l && null != l.variantGroupStoreListingId
                            ? j.A.getProductByStoreListingId(l.variantGroupStoreListingId)
                            : l;
                    })
                    .filter((e) => null != e),
                "storeListingId",
            ),
        [e],
    );
}
var t7 = l(885574),
    t6 = l(975807),
    t8 = l(975571),
    le = l(365714);
let lt = (e) => {
        let { personalizedResults: t, label: l } = e,
            s = l ?? w.intl.string(w.t.NSv5KV);
        return (0, c.jsxs)("div", {
            className: le.L,
            children: [
                (0, c.jsx)(eu.D, { variant: "heading-lg/semibold", children: s }),
                t &&
                    (0, c.jsx)(e0.m, {
                        text: w.intl.string(w.t["3taPdj"]),
                        position: "top",
                        "aria-label": w.intl.string(w.t["3taPdj"]),
                        children: (0, c.jsx)(e4.D, {
                            onClick: () => (0, t6.A)(t8.A.getArticleURL(B.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: le.s,
                            children: (0, c.jsx)(t7.m, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    ll = (e) => {
        let {
                isLoading: t,
                title: l,
                sortedSkuIds: s,
                numVisibleItems: n,
                prioritizeUserDiscounts: a,
                tab: r,
                buttonContainerClassName: i,
                orbsSupportedOnly: o,
            } = e,
            d = (0, O.bG)([v.default], () => v.default.getCurrentUser()),
            m = k.Ay.canUseShopDiscounts(d),
            h = (0, eh.W)("FeedBlock"),
            E = (0, eq.yB)("FeedBlock"),
            {
                sortType: x,
                setSortType: p,
                sortedItems: C,
                sortOptions: S,
                shuffleProducts: _,
                showRecommendationOption: A,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: l, prioritizeUserDiscounts: s, orbsSupportedOnly: n } = e,
                    a = (0, O.bG)([t4.A], () => t4.A.hasConsented(B.YAq.PERSONALIZATION)),
                    r = u.useMemo(() => t?.[t2.RECOMMENDED] ?? [], [t]),
                    i = u.useMemo(() => t?.[t2.POPULAR] ?? [], [t]),
                    o = r.length > 0 && a,
                    [c, d] = u.useState(o ? t2.RECOMMENDED : t2.POPULAR),
                    g = (0, O.bG)([j.A], () => j.A.productsWithVariantsAsGroup),
                    m = u.useMemo(() => (0, eE.CE)(g), [g]),
                    h = (0, O.bG)([H.A], () => H.A.getUserDiscounts()),
                    E = t3(),
                    x = ef(),
                    [p, C] = u.useState([]),
                    f = u.useCallback(() => {
                        d(t2.RANDOM), C(t1().shuffle(m));
                    }, [m]);
                u.useEffect(() => {
                    C(t1().shuffle(m));
                }, [m]);
                let S = eA(
                    u.useMemo(() => {
                        let e = [];
                        if (c === t2.RECENT) e = m;
                        else if (c === t2.PRICE_LOW_TO_HIGH) e = (0, eE.bf)([...m], l, n);
                        else if (c === t2.RECOMMENDED) {
                            let t = E(r);
                            e = s ? (0, eE.Bs)(t, h) : t;
                        } else if (c === t2.POPULAR) {
                            let t = E(i);
                            e = s ? (0, eE.Bs)(t, h) : t;
                        } else c === t2.RANDOM && (e = p);
                        return n ? (0, ex.ex)(x(e)) : x(e);
                    }, [c, n, x, l, m, E, r, s, h, i, p]),
                );
                return {
                    sortType: c,
                    setSortType: d,
                    sortedItems: S,
                    sortOptions: u.useMemo(() => {
                        let e = [
                            { value: t2.POPULAR, label: w.intl.string(w.t.Y68e5p) },
                            { value: t2.RECENT, label: w.intl.string(w.t["51Bhiz"]) },
                            { value: t2.PRICE_LOW_TO_HIGH, label: w.intl.string(w.t.m8RVU2) },
                        ];
                        return o && e.unshift({ value: t2.RECOMMENDED, label: w.intl.string(w.t.zPWgFG) }), e;
                    }, [o]),
                    showRecommendationOption: o,
                    shuffleProducts: f,
                };
            })({ sortedSkuIds: s, hasShopDiscount: m, prioritizeUserDiscounts: a, orbsSupportedOnly: o }),
            L = (0, O.bG)([Y.A], () => Y.A.useReducedMotion),
            I = (0, O.bG)([eI.A], () => eI.A.isFocused()),
            T = !L && I,
            { animationPhase: M, startAnimation: P } = (() => {
                let [e, t] = u.useState("mounted"),
                    [l, s] = u.useState(!1),
                    n = u.useRef(null);
                return (
                    u.useEffect(() => {
                        if (l && "finished" === e) {
                            if (null !== n.current) {
                                let e = n.current;
                                if (
                                    e.tabIndex >= 0 ||
                                    (0, tX.vq)(e, HTMLButtonElement) ||
                                    (0, tX.vq)(e, HTMLAnchorElement) ||
                                    (0, tX.vq)(e, HTMLInputElement) ||
                                    (0, tX.vq)(e, HTMLSelectElement) ||
                                    (0, tX.vq)(e, HTMLTextAreaElement)
                                )
                                    e.focus();
                                else {
                                    let t = e.querySelector(
                                        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [role="combobox"], [role="button"]',
                                    );
                                    t?.focus();
                                }
                            }
                            s(!1);
                        }
                    }, [e, l]),
                    {
                        animationPhase: e,
                        startAnimation: u.useCallback((e) => {
                            let { isShuffling: l, onOutroComplete: a, returnRef: r } = e;
                            r?.current != null && ((n.current = r.current), s(!0)),
                                t(l ? "shuffle-out" : "sort-out"),
                                setTimeout(
                                    () => {
                                        a(),
                                            t(l ? "shuffle-in" : "sort-in"),
                                            setTimeout(
                                                () => {
                                                    t("finished");
                                                },
                                                l ? 200 : 300,
                                            );
                                    },
                                    l ? 250 : 300,
                                );
                        }, []),
                    }
                );
            })(),
            D = (0, b.uM)(),
            F = D?.sessionId ?? "",
            { analyticsLocations: G } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            U = u.useRef(null),
            z = u.useRef(null),
            [V, W] = u.useState(!1),
            K = u.useCallback(
                (e) => {
                    W(!1),
                        P({ isShuffling: !1, onOutroComplete: () => p(e), returnRef: z }),
                        y.default.track(B.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: F,
                            sort_type: e,
                        });
                },
                [P, p, F],
            );
        return null == d
            ? null
            : (0, c.jsx)(f.f5, {
                  value: G,
                  children: (0, c.jsxs)("div", {
                      className: g()(tK.lD, tK.YB),
                      children: [
                          (0, c.jsxs)("div", {
                              className: tK.$6,
                              children: [
                                  (0, c.jsx)(lt, { label: l, personalizedResults: A }),
                                  (0, c.jsxs)("div", {
                                      className: g()(tK.IE, { [eq.jP]: E }),
                                      children: [
                                          (0, c.jsxs)("div", {
                                              className: tK.gd,
                                              children: [
                                                  (0, c.jsx)(ee.E, {
                                                      variant: "text-md/medium",
                                                      children: w.intl.string(w.t.uaX705),
                                                  }),
                                                  (0, c.jsx)("div", {
                                                      className: g()(i, tK.pI),
                                                      ref: z,
                                                      children: (0, c.jsx)(e$.l, {
                                                          label: w.intl.string(w.t.uaX705),
                                                          hideLabel: !0,
                                                          options: S,
                                                          onSelectionChange: K,
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
                                          (0, c.jsx)("div", {
                                              className: i,
                                              children: (0, c.jsx)(et.$, {
                                                  variant: "secondary",
                                                  text: w.intl.string(w.t.X3tnc4),
                                                  buttonRef: U,
                                                  onClick: () => {
                                                      W(!0),
                                                          P({ isShuffling: !0, onOutroComplete: _, returnRef: U }),
                                                          y.default.track(
                                                              B.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: F },
                                                          );
                                                  },
                                                  disabled: M !== tQ.MOUNTED && M !== tQ.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, c.jsx)(tJ.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: V && M === tQ.FINISHED ? w.intl.string(w.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, c.jsx)("div", {
                              className: tK.hm,
                              children: t
                                  ? (0, c.jsx)(c.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, c.jsx)(eB, {}, t + 1)),
                                    })
                                  : C.slice(0, n).map((e, t) => {
                                        let l,
                                            s = j.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == s) return null;
                                        if (T)
                                            if (M === tQ.SHUFFLE_OUT)
                                                return (0, c.jsx)(
                                                    "div",
                                                    {
                                                        className: tK.Z2,
                                                        children: (0, c.jsx)(eB, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                M === tQ.SORT_OUT
                                                    ? (l = tK.MW)
                                                    : M === tQ.SHUFFLE_IN
                                                      ? (l = tK.aS)
                                                      : M === tQ.SORT_IN && (l = tK.F7);
                                        return (0, c.jsx)(
                                            b.R9,
                                            {
                                                newValue: {
                                                    tilePosition: t,
                                                    pageSection: "popular picks",
                                                    categoryPosition: 2,
                                                },
                                                children: (0, c.jsx)("div", {
                                                    className: l,
                                                    children: (0, c.jsx)(eH.A, {
                                                        skuId: e.skuId,
                                                        hideStaticBundleBackgroundAsset: !0,
                                                        prioritizedCurrency:
                                                            r === R.G2.ORBS ? eF.Hi.ORBS : h ? eF.Hi.FIAT : void 0,
                                                    }),
                                                }),
                                            },
                                            e.skuId,
                                        );
                                    }),
                          }),
                      ],
                  }),
              });
    };
var ls = l(449543),
    ln = l(622697);
let la = (e) => {
    let { block: t, handleTransition: l, tab: s } = e,
        n = (0, O.bG)([v.default], () => v.default.getCurrentUser()),
        a = (0, eh.W)("FramesProductShelfBlock"),
        r = t3(),
        i = eA(u.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r])),
        { analyticsLocations: o } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_SHELF),
        d = u.useCallback(() => {
            l({
                sourceButton: "frames product shelf see all",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            });
        }, [l, t.categorySkuId]);
    return null == n || 0 === i.length
        ? null
        : (0, c.jsx)(f.f5, {
              value: o,
              children: (0, c.jsxs)("div", {
                  className: g()(ln.kL, tK.YB),
                  children: [
                      null != t.backgroundImage &&
                          (0, c.jsx)("img", { className: ln.iL, src: t.backgroundImage, alt: "", "aria-hidden": !0 }),
                      (0, c.jsxs)("div", {
                          className: ln.Qs,
                          children: [
                              (0, c.jsxs)("div", {
                                  className: ln.wx,
                                  children: [
                                      (0, c.jsxs)("div", {
                                          className: ln.Jb,
                                          children: [
                                              (0, c.jsx)(tB.A, { location: "FramesProductShelfBlock" }),
                                              (0, c.jsx)(eu.D, {
                                                  variant: "heading-lg/semibold",
                                                  color: "always-white",
                                                  children: t.title,
                                              }),
                                          ],
                                      }),
                                      null != t.buttonText &&
                                          "" !== t.buttonText &&
                                          (0, c.jsx)(et.$, {
                                              variant: "overlay-primary",
                                              text: t.buttonText,
                                              onClick: d,
                                          }),
                                  ],
                              }),
                              (0, c.jsx)(ls.A, {
                                  gap: "xl",
                                  edgeFade: "sm",
                                  children: i.map((e, l) =>
                                      null == j.A.getCategoryForProduct(e.skuId)
                                          ? null
                                          : (0, c.jsx)(
                                                b.R9,
                                                {
                                                    newValue: {
                                                        tilePosition: l,
                                                        pageSection: t.title,
                                                        categoryPosition: 1,
                                                    },
                                                    children: (0, c.jsx)(eH.A, {
                                                        skuId: e.skuId,
                                                        prioritizedCurrency:
                                                            s === R.G2.ORBS ? eF.Hi.ORBS : a ? eF.Hi.FIAT : void 0,
                                                    }),
                                                },
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
var lr = l(696292),
    li = l(617986),
    lo = l(318346);
let lc = (e) => {
    let { clientX: t, clientY: l, currentTarget: s } = e;
    s.style.pointerEvents = "none";
    let n = document.elementFromPoint(t, l);
    return (s.style.pointerEvents = "auto"), { elementBelow: n, button: n?.closest("button") ?? null };
};
var lu = l(929955);
let ld = (e) => {
        let { bannerStatic: t, bannerAnimated: l, bannerRive: s, isResponsive: n = !1, eventTargetRef: a } = e,
            r = (0, O.bG)([Y.A], () => Y.A.useReducedMotion),
            i = (0, O.bG)([eI.A], () => eI.A.isFocused()),
            o = null != l && !r && i;
        return null != s
            ? (0, c.jsx)(eb._, { src: s, fit: "fit-width", eventTargetRef: a })
            : o
              ? (0, c.jsx)(ej.A, { className: g()({ [lu.no]: n }, lu.BW, lu.ud), src: l, autoPlay: !0, loop: !0 })
              : (0, c.jsx)("div", {
                    className: g()({ [lu.no]: n }, lu.BW, lu._e),
                    style: { backgroundImage: `url(${t})` },
                });
    },
    lg = (e) => (0, c.jsx)("div", { className: tK.hm, children: (0, c.jsx)(lh, { ...e }) }),
    lm = (e) =>
        (0, c.jsx)(ls.A, { gap: "xl", "aria-label": w.intl.string(w.t.HP8LNG), children: (0, c.jsx)(lh, { ...e }) }),
    lh = (e) => {
        let { isLoading: t, products: l, tab: s, totalCards: n } = e,
            a = (0, eh.W)("HeroBlockCards");
        if (t) return (0, c.jsx)(c.Fragment, { children: [...Array(n ?? 4)].map((e, t) => (0, c.jsx)(eB, {}, t)) });
        let r = null != n ? l.slice(0, n) : l;
        return (0, c.jsx)(eF.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: r.map((e, t) => {
                let l = j.A.getCategoryForProduct(e.skuId);
                return null == e || null == l
                    ? null
                    : (0, c.jsx)(
                          b.R9,
                          {
                              newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                              children: (0, c.jsx)(
                                  eH.A,
                                  {
                                      skuId: e?.skuId,
                                      prioritizedCurrency: s === R.G2.ORBS ? eF.Hi.ORBS : a ? eF.Hi.FIAT : void 0,
                                  },
                                  e.skuId,
                              ),
                          },
                          e.skuId,
                      );
            }),
        });
    },
    lE = (e) => {
        let t,
            l,
            { heroBlockRecord: s, layout: n, tab: a, isBlockLoading: r = !1 } = e,
            { products: i } =
                ((t = t3()),
                (l = u.useMemo(() => (r ? [] : t(s.rankedSkuIds)), [r, t, s.rankedSkuIds])),
                { products: eA(ef()(l)) }),
            o = u.useMemo(
                () =>
                    !r &&
                    0 !== s.rankedSkuIds.length &&
                    !(i.length > 0) &&
                    s.rankedSkuIds.every((e) => j.A.getProduct(e)?.variantGroupStoreListingId != null),
                [r, s.rankedSkuIds, i.length],
            ),
            d = r || o;
        switch (n) {
            case "feed":
                return (0, c.jsx)(lg, { heroBlockRecord: s, isLoading: d, products: i, tab: a });
            case "hscroll":
                return (0, c.jsx)(lm, { heroBlockRecord: s, isLoading: d, products: i, tab: a });
        }
    },
    lx = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: tj.g.HERO,
        categoryStoreListingId: "",
    },
    lp = (e) => {
        let {
                isLoading: t,
                handleTransition: l,
                category: s,
                heroBlock: n,
                tab: a,
                onVisibilityChange: r,
                badge: i,
            } = e,
            o = (0, eg.K)(
                (e) => {
                    r?.(e);
                },
                0.1,
                null != r,
            ),
            d = u.useRef(null),
            m = (0, eq.yB)("HeroBlock"),
            h = (0, O.bG)([v.default], () => v.default.getCurrentUser()),
            E = (0, b.uM)(),
            { analyticsLocations: x } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_HERO),
            p = u.useMemo(
                () =>
                    null != n
                        ? n
                        : null == s
                          ? lx
                          : {
                                rankedSkuIds: s.heroRanking ?? [],
                                name: s.name,
                                unpublishedAt: s.unpublishedAt,
                                categorySkuId: s.skuId,
                                summary: s.summary,
                                type: tj.g.HERO,
                                categoryStoreListingId: s.storeListingId,
                                bannerDisplayConfig: s.heroBannerDisplayConfig,
                                logoDisplayConfig: s.heroLogoDisplayConfig,
                                heroLogoUrl: s.heroLogoUrl,
                                heroBannerUrl: s.heroBannerUrl,
                                heroBannerAnimatedUrl: s.heroBannerAnimatedUrl,
                            },
                [n, s],
            ),
            {
                bannerDisplayConfig: C,
                logoDisplayConfig: S,
                heroLogo: _,
                heroBannerStatic: A,
                heroBannerAnimated: L,
                heroBannerRive: j,
            } = (0, eN.Kk)(p),
            I = C?.responsive ?? !1,
            k = C?.backgroundStyle,
            T = null != j,
            M = a === R.G2.ORBS,
            P = null != s && s.isOrbsExclusive,
            D = M ? w.intl.string(w.t["1CdL8d"]) : w.intl.string(w.t.xYKa1T),
            H = () => {
                M
                    ? ((0, lo.Y)({
                          pageType: B.liQ.SHOP_ORBS_TAB,
                          sectionType: B.JJy.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: B.ZSU.CTA_TO_QUEST_HOME,
                      }),
                      (0, li.navigateToQuestHome)({ fromContent: lr.u.ORBS_SHOP_HERO_CTA }))
                    : (l({
                          sourceButton: "shop latest category hero",
                          categorySkuId: p.categorySkuId,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: P,
                      }),
                      y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: E?.sessionId,
                          sku_id: p.categorySkuId,
                          page_type: a,
                          page_section: E?.pageSection,
                          page_category: E?.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != h && (t || p !== lx)
            ? (0, c.jsx)(f.f5, {
                  value: x,
                  children: (0, c.jsxs)("div", {
                      ref: o,
                      className: tK.os,
                      children: [
                          T
                              ? ((e) => {
                                    let { isCustomCursorEnabled: t, className: l, riveEventTargetRef: s } = e,
                                        n = (e) => {
                                            let { button: l } = lc(e),
                                                s = e.currentTarget;
                                            t
                                                ? (s.style.cursor =
                                                      null != l
                                                          ? "var(--custom-cursor-pointer)"
                                                          : "var(--custom-cursor)")
                                                : (s.style.cursor = null != l ? "pointer" : "default");
                                        };
                                    return (0, c.jsx)("div", {
                                        ref: s,
                                        className: l,
                                        onMouseMove: n,
                                        onMouseDown: (e) => {
                                            let { button: t } = lc(e);
                                            null != t && t.click();
                                        },
                                    });
                                })({ isCustomCursorEnabled: m, className: tK.Xt, riveEventTargetRef: d })
                              : null,
                          (0, c.jsx)("div", {
                              className: g()(tK.vK, { [tK.cN]: T, [tK.no]: I }),
                              style: null != k ? { background: k } : void 0,
                              children:
                                  null != A &&
                                  (0, c.jsx)(ld, {
                                      bannerStatic: A,
                                      bannerAnimated: L,
                                      bannerRive: j,
                                      isResponsive: I,
                                      eventTargetRef: d,
                                  }),
                          }),
                          (0, c.jsxs)("div", {
                              className: tK.xX,
                              children: [
                                  T
                                      ? (0, c.jsx)("div", {
                                            className: tK.fy,
                                            children:
                                                !t &&
                                                (0, c.jsx)(et.$, { variant: "overlay-primary", onClick: H, text: D }),
                                        })
                                      : (0, c.jsxs)("div", {
                                            className: g()(tK.bC, { [tK.no]: I }),
                                            children: [
                                                t
                                                    ? (0, c.jsx)("div", { className: tK.Hw })
                                                    : (0, c.jsxs)("div", {
                                                          className: tK.Hw,
                                                          children: [
                                                              (0, eE.HF)(p.unpublishedAt) &&
                                                                  (0, c.jsx)(tV.Lp, {
                                                                      disableColor: !0,
                                                                      text: w.intl.string(w.t["h/uBCR"]),
                                                                      className: tK.v0,
                                                                  }),
                                                              (0, c.jsxs)("div", {
                                                                  className: tK.Wq,
                                                                  children: [
                                                                      null != i &&
                                                                          (0, c.jsx)("div", {
                                                                              className: tK._I,
                                                                              children: i,
                                                                          }),
                                                                      null != _ &&
                                                                          (0, c.jsx)("img", {
                                                                              className: tK.rm,
                                                                              src: _,
                                                                              alt: p.name,
                                                                              style: S?.toDesktopStyles(),
                                                                          }),
                                                                      null != p.title &&
                                                                          (0, c.jsx)(eu.D, {
                                                                              variant: "heading-xxl/bold",
                                                                              className: tK.DD,
                                                                              color: "text-strong",
                                                                              children: p.title,
                                                                          }),
                                                                      null != p.summary &&
                                                                          "" !== p.summary &&
                                                                          (0, c.jsx)(ee.E, {
                                                                              variant: "text-md/normal",
                                                                              className: M ? tK.h4 : tK.Tm,
                                                                              style:
                                                                                  null != p.bannerTextColor
                                                                                      ? { color: p.bannerTextColor }
                                                                                      : void 0,
                                                                              children: p.summary,
                                                                          }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                !t &&
                                                    (0, c.jsx)("div", {
                                                        className: tK.IS,
                                                        children: (0, c.jsx)(et.$, {
                                                            variant: "overlay-primary",
                                                            onClick: H,
                                                            text: D,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                  (0, c.jsx)(lE, {
                                      heroBlockRecord: p,
                                      tab: a,
                                      isBlockLoading: t,
                                      layout: a === R.G2.HOME ? "hscroll" : "feed",
                                  }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var lC = l(349288),
    lf = l(537947);
let lS = (e) => {
    let { immersiveBannerBlock: t, onVisibilityChange: l } = e,
        s = (0, eg.K)(
            (e) => {
                l?.(e);
            },
            0.33,
            null != l,
        ),
        { bannerUrl: n, bannerAnimatedUrl: a } = (0, eN.qY)(t),
        r = null != t.textColor ? { color: t.textColor } : void 0,
        i = null != t.body && "" !== t.body,
        o = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, c.jsxs)("div", {
        ref: s,
        className: lf.BX,
        children: [
            (0, c.jsx)("div", {
                className: lf.vK,
                children: null != n && (0, c.jsx)(ld, { bannerStatic: n, bannerAnimated: a }),
            }),
            (0, c.jsx)("div", {
                className: lf.HQ,
                children: (0, c.jsxs)("div", {
                    className: lf.Yn,
                    children: [
                        null != t.endTime ? (0, c.jsx)(tF.e, { endDate: t.endTime, size: "lg" }) : null,
                        (0, c.jsx)(eu.D, {
                            variant: "heading-xxl/bold",
                            className: lf.DD,
                            color: "text-strong",
                            style: { ...r },
                            children: t.title,
                        }),
                        i || o
                            ? (0, c.jsxs)(ee.E, {
                                  variant: "text-md/medium",
                                  style: { ...r },
                                  children: [
                                      i && t.body,
                                      i && o && " ",
                                      o &&
                                          (0, c.jsx)(lC.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: lf.CU,
                                              style: { ...r },
                                              children: w.intl.string(w.t.O7ADgv),
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
var l_ = l(189213),
    lA = l(290136),
    lL = l(478016),
    lv = l(825484),
    lb = l(713517),
    lj = l(914410),
    lI = l(859040),
    lO = l(61750);
function lN(e, t) {
    let l = u.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        s = (0, O.bG)([Z.A], () => Z.A.getPurchases(l));
    return {
        readyToClaim: u.useMemo(() => s.length === l.length, [s, l]),
        collectibleProductSkuIds: l,
        collectedSkuIds: s,
    };
}
var ly = l(498924);
let lk = u.memo(function (e) {
        let { category: t, rewardSkuId: l } = e,
            { handleCardVisibilityChange: s } = (0, tW.Z)(l),
            n = u.useRef(null),
            { isHoveringOrFocusing: a } = (0, lb.A)(n),
            { readyToClaim: r, collectibleProductSkuIds: i, collectedSkuIds: o } = lN(t, l),
            d = (0, O.bG)([Z.A], () => Z.A.isClaiming === l);
        return (0, c.jsx)(tz.L, {
            onChange: s,
            threshold: 0,
            innerRef: n,
            children: (0, c.jsx)("div", {
                ref: n,
                className: g()(eT.ty, ly.Q3, { [eT.yo]: a }),
                "aria-label": w.intl.formatToPlainString(w.t.Ez6aHE, { category: t.name }),
                children: (0, c.jsxs)("div", {
                    className: eT.qt,
                    children: [
                        (0, c.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: ly.L8,
                        }),
                        (0, c.jsx)("div", {
                            className: eT.N1,
                            children: (0, c.jsx)(tV.Lp, {
                                text: w.intl.string(w.t.rykAJ9),
                                disableColor: !0,
                                className: ly.HZ,
                            }),
                        }),
                        (0, c.jsxs)("div", {
                            className: eT.xQ,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: ly.xE,
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: ly.cs,
                                            children: [
                                                (0, c.jsx)(eu.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: eT.tZ,
                                                    children: w.intl.string(w.t["0mDmg/"]),
                                                }),
                                                (0, c.jsx)(e0.m, {
                                                    text: r
                                                        ? w.intl.string(w.t.cKH3tk)
                                                        : w.intl.formatToPlainString(w.t["8aMDPc"], {
                                                              totalCount: i.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, c.jsx)("span", {
                                                        className: ly.ZB,
                                                        children: (0, c.jsx)(lA.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)("div", {
                                            className: eT.oh,
                                            "aria-hidden": !0,
                                            children: (0, c.jsxs)("div", {
                                                className: ly.L$,
                                                children: [
                                                    (0, c.jsx)(lj.Ay, {
                                                        variant: lj.qP.BLUE,
                                                        progress: o.length,
                                                        maximum: i.length,
                                                    }),
                                                    (0, c.jsxs)("div", {
                                                        className: g()(ly.__, { [ly.gF]: r }),
                                                        children: [
                                                            r
                                                                ? (0, c.jsx)(lL.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, c.jsx)(ee.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: w.intl.formatToPlainString(w.t["5TwASM"], {
                                                                    collectedCount: o.length,
                                                                    totalCount: i.length,
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, c.jsx)("div", {
                                    className: eT.Vs,
                                    children: (0, c.jsx)(lv.e, {
                                        wrap: !1,
                                        className: eT.Ld,
                                        fullWidth: !0,
                                        children: (0, c.jsx)(et.$, {
                                            variant: "primary",
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    r &&
                                                        (0, lI.BX)(t.skuId, l)
                                                            .then(() => {
                                                                let e = j.A.getProduct(l);
                                                                null != e &&
                                                                    (0, lO.A)({
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
                                                                (0, E.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, c.jsx)(l_.Modal, {
                                                                            transitionState: e.transitionState,
                                                                            onClose: e.onClose,
                                                                            size: "sm",
                                                                            title: w.intl.string(w.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: w.intl.string(w.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, c.jsx)("div", {
                                                                                children: w.intl.string(w.t["0YpIF/"]),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            });
                                            },
                                            text: w.intl.string(w.t.VnVTNc),
                                            fullWidth: !0,
                                            disabled: !r,
                                            loading: d,
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
    lT = (e) => {
        let t,
            l,
            { isBlockLoading: s = !1, heroBlock: n, tab: a } = e,
            r = (0, eh.W)("RewardHeroBlockCards"),
            i = u.useMemo(() => j.A.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]),
            o = (0, O.bG)([Z.A], () => Z.A.getPurchase(n.rewardSkuId)),
            { products: d } =
                ((t = t3()),
                (l = u.useMemo(
                    () => (s ? [] : t(n.rankedSkuIds).filter((e) => e.skuId !== n.rewardSkuId || null != o)),
                    [s, t, n.rankedSkuIds, o, n.rewardSkuId],
                )),
                { products: eA(ef()(l)) }),
            g = u.useMemo(
                () =>
                    !s &&
                    0 !== n.rankedSkuIds.length &&
                    !(d.length > 0) &&
                    n.rankedSkuIds.every((e) => j.A.getProduct(e)?.variantGroupStoreListingId != null),
                [s, n.rankedSkuIds, d.length],
            ),
            m = s || g,
            { readyToClaim: h } = lN(i, n.rewardSkuId),
            E = null == o && null != n.rewardSkuId && null != i;
        return (0, c.jsx)(ls.A, {
            gap: "xl",
            children: m
                ? (0, c.jsx)(c.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, c.jsx)(eB, {}, t)),
                  })
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          E &&
                              h &&
                              (0, c.jsx)(
                                  b.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, c.jsx)(lk, { category: i, rewardSkuId: n.rewardSkuId }),
                                  },
                                  n.rewardSkuId,
                              ),
                          d.map((e, t) => {
                              let l = j.A.getCategoryForProduct(e.skuId);
                              return null == e || null == l
                                  ? null
                                  : (0, c.jsx)(
                                        b.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, c.jsx)(
                                                eH.A,
                                                {
                                                    skuId: e?.skuId,
                                                    prioritizedCurrency:
                                                        a === R.G2.ORBS ? eF.Hi.ORBS : r ? eF.Hi.FIAT : void 0,
                                                },
                                                e.skuId,
                                            ),
                                        },
                                        e?.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, eE.$b)(90);
let lR = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: tj.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    lB = (e) => {
        let { isLoading: t = !1, heroBlock: l, tab: s, onVisibilityChange: n } = e,
            a = (0, eg.K)(
                (e) => {
                    n?.(e);
                },
                0.1,
                null != n,
            ),
            r = (0, O.bG)([v.default], () => v.default.getCurrentUser()),
            { analyticsLocations: i } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: o,
                logoDisplayConfig: u,
                heroLogo: d,
                heroBannerStatic: m,
                heroBannerAnimated: h,
            } = (0, eN.Kk)(l),
            E = o?.responsive ?? !1,
            x = o?.backgroundStyle;
        return null != r && (t || l !== lR)
            ? (0, c.jsx)(f.f5, {
                  value: i,
                  children: (0, c.jsxs)("div", {
                      ref: a,
                      className: tK.os,
                      children: [
                          (0, c.jsx)("div", {
                              className: g()(tK.vK, { [tK.no]: E }),
                              style: null != x ? { background: x } : void 0,
                              children:
                                  null != m && (0, c.jsx)(ld, { bannerStatic: m, bannerAnimated: h, isResponsive: E }),
                          }),
                          (0, c.jsxs)("div", {
                              className: tK.xX,
                              children: [
                                  (0, c.jsx)("div", {
                                      className: g()(tK.bC, { [tK.no]: E }),
                                      children: t
                                          ? (0, c.jsx)("div", { className: tK.Hw })
                                          : (0, c.jsx)("div", {
                                                className: tK.Hw,
                                                children: (0, c.jsxs)("div", {
                                                    className: tK.Wq,
                                                    children: [
                                                        null != d &&
                                                            (0, c.jsx)("img", {
                                                                className: tK.rm,
                                                                src: d,
                                                                alt: l.name,
                                                                style: u?.toDesktopStyles(),
                                                            }),
                                                        null != l.title &&
                                                            (0, c.jsx)(eu.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: tK.DD,
                                                                color: "text-strong",
                                                                children: l.title,
                                                            }),
                                                        "" !== l.summary &&
                                                            (0, c.jsx)(ee.E, {
                                                                variant: "text-md/normal",
                                                                className: tK.Tm,
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
                                  (0, c.jsx)(lT, { isBlockLoading: t, heroBlock: l, tab: s }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    },
    lM = (e) => {
        let { shelf: t, handleTransition: l, tab: s } = e,
            n = (0, O.bG)([v.default], () => v.default.getCurrentUser()),
            a = (0, eh.W)("ShelfBlock"),
            r = (0, O.bG)([j.A], () => j.A.getCategory(t.categorySkuId)),
            i = t3(),
            o = eA(u.useMemo(() => i(t.rankedSkuIds), [t.rankedSkuIds, i])),
            { analyticsLocations: d } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_SHELF);
        return null == n
            ? null
            : (0, c.jsx)(f.f5, {
                  value: d,
                  children: (0, c.jsxs)("div", {
                      className: g()(tK.Vp, tK.YB),
                      children: [
                          (0, c.jsxs)("div", {
                              className: tK.$6,
                              children: [
                                  (0, c.jsx)(eu.D, { variant: "heading-lg/semibold", children: t.name }),
                                  (0, c.jsx)(et.$, {
                                      variant: "secondary",
                                      text: w.intl.formatToPlainString(w.t.bc9RBE, { category_name: t.name }),
                                      onClick: () => {
                                          l({
                                              sourceButton: "shelf block see all",
                                              categorySkuId: t.categorySkuId,
                                              isInternalShopDeeplink: !0,
                                              isOrbsExclusive: r?.isOrbsExclusive && s !== R.G2.ORBS,
                                          });
                                      },
                                  }),
                              ],
                          }),
                          (0, c.jsx)(ls.A, {
                              gap: "xl",
                              children: (0, c.jsx)(c.Fragment, {
                                  children: o.map((e, l) => {
                                      if (null == j.A.getCategoryForProduct(e.skuId) || null == e) return null;
                                      let n = e.skuId;
                                      return (0, c.jsx)(
                                          b.R9,
                                          {
                                              newValue: { tilePosition: l, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, c.jsx)(
                                                  eH.A,
                                                  {
                                                      skuId: n,
                                                      prioritizedCurrency:
                                                          s === R.G2.ORBS ? eF.Hi.ORBS : a ? eF.Hi.FIAT : void 0,
                                                  },
                                                  n,
                                              ),
                                          },
                                          n,
                                      );
                                  }),
                              }),
                          }),
                      ],
                  }),
              });
    };
var lP = l(43990),
    lD = l(815021),
    lH = l(509434),
    lF = l(871123),
    lw = l(733391),
    lG = l(439303),
    lU = l(832163),
    lz = l(44724),
    lV = l(317560),
    lW = l(467884),
    lK = l(530868),
    lY = l(67480),
    l$ = l(371794),
    lq = l(74564);
let lZ = (e) => {
        let t,
            l,
            s,
            {
                onDismiss: n,
                skuIds: a,
                tab: r,
                applicationId: i,
                headerText: o,
                shopButtonText: d,
                analyticsSection: m,
                analyticsTileType: h,
                analyticsImpressionType: E,
                backgroundGradient: x,
            } = e,
            { guildId: p } = (0, lF.nG)(i);
        u.useEffect(() => {
            null != p && (0, lw.Rw)(p);
        }, [p]);
        let C = (0, O.bG)([lU.A], () => {
                let e = lU.A.getStorefrontMetadata(i);
                return e?.logoAssetId != null ? (0, l$.YE)(i, e.logoAssetId, 256) : void 0;
            }, [i]),
            S =
                ((t = u.useRef([])),
                u.useEffect(() => {
                    if (null != p) for (let e of a) (0, lw.qf)(p, e);
                }, [a, p]),
                (l = (0, O.bG)(
                    [lY.A],
                    () => !a.some((e) => lY.A.isFetching(e)) && a.some((e) => lY.A.didFetchingSkuFail(e)),
                    [a],
                )),
                u.useEffect(() => {
                    l && null != p && (0, lw.Rw)(p);
                }, [l, p]),
                (s = (0, O.yK)([lY.A, lU.A], () => {
                    if (a.some((e) => lY.A.isFetching(e))) return t.current;
                    let e = a.filter((e) => null != lY.A.get(e));
                    if (e.length >= a.length) return a;
                    if (null == p) return e;
                    let l = lU.A.getStorefrontData(p);
                    if (null == l || "loading" === l.state) return e;
                    let s = new Set(a);
                    return [
                        ...e,
                        ...(null != l.storefront
                            ? (0, lF.jd)(l.storefront).filter((e) => !s.has(e) && null != lY.A.get(e))
                            : []),
                    ].slice(0, a.length);
                }, [a, p])),
                u.useEffect(() => {
                    s.length > 0 && (t.current = s);
                }, [s]),
                s);
        (0, lK.j)({ skuIds: S, location: "GamePromotionBanner" });
        let _ = (0, b.uM)(),
            { analyticsLocations: A } = (0, f.Ay)(),
            L = u.useRef(null),
            v = u.useRef(!1),
            j = u.useRef(null),
            I = u.useMemo(() => ({ pageSection: m }), [m]),
            N = u.useCallback(
                (e, t) => {
                    y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: _?.sessionId,
                        page_type: r,
                        page_category: _?.pageCategory,
                        page_section: _?.pageSection,
                        tile_type: h,
                        cta_name: e,
                        ...(null != t ? { sku_id: t } : void 0),
                    });
                },
                [_?.sessionId, _?.pageCategory, _?.pageSection, r, h],
            ),
            k = u.useCallback(() => {
                null != p && (0, lz.X)({ guildId: p });
            }, [p]),
            T = u.useCallback(() => {
                null != p && (N("go_to_game_shop"), (0, lz.default)({ guildId: p }));
            }, [N, p]),
            R = u.useCallback(
                (e, t) => {
                    let { skuId: l, applicationId: s } = t;
                    N("card_click", l),
                        (0, lV.R)({ skuId: l, applicationId: s, isStorefront: !1, analyticsLocations: A });
                },
                [N, A],
            ),
            M = u.useCallback(() => {
                N("dismiss"), n();
            }, [N, n]),
            P = u.useCallback(
                (e) => {
                    !v.current &&
                        (e && null === j.current
                            ? (j.current = setTimeout(() => {
                                  (v.current = !0),
                                      (j.current = null),
                                      y.default.track(B.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                          collectibles_shop_session_id: _?.sessionId,
                                          page_type: r,
                                          page_category: _?.pageCategory,
                                          page_section: _?.pageSection,
                                          type: E,
                                      });
                              }, 1e3))
                            : e || null === j.current || (clearTimeout(j.current), (j.current = null)));
                },
                [_?.sessionId, _?.pageCategory, _?.pageSection, r, E],
            );
        return (u.useEffect(
            () => () => {
                null !== j.current && (clearTimeout(j.current), (j.current = null));
            },
            [],
        ),
        0 === S.length)
            ? null
            : (0, c.jsx)(lP.N, {
                  theme: B.NJ8.DARKER,
                  children: (e) =>
                      (0, c.jsx)(tz.L, {
                          innerRef: L,
                          onChange: P,
                          threshold: 0,
                          children: (0, c.jsx)("div", {
                              ref: L,
                              className: g()(lq.YB, e),
                              children: (0, c.jsxs)("div", {
                                  className: lq.kL,
                                  children: [
                                      null != x && (0, c.jsx)("div", { className: lq.D7, style: { background: x } }),
                                      (0, c.jsx)("div", {
                                          className: lq.b,
                                          children: (0, c.jsx)(lD.J, { size: "sm", variant: "icon-only", onClick: M }),
                                      }),
                                      null != C && (0, c.jsx)("img", { className: lq.wm, src: C, alt: "" }),
                                      (0, c.jsx)("div", {
                                          className: lq.xf,
                                          children: (0, c.jsxs)("div", {
                                              className: lq.B5,
                                              children: [
                                                  (0, c.jsx)(eu.D, {
                                                      variant: "heading-lg/semibold",
                                                      color: "always-white",
                                                      children: o,
                                                  }),
                                                  (0, c.jsx)(et.$, {
                                                      variant: "overlay-primary",
                                                      size: "sm",
                                                      icon: lH.I,
                                                      iconPosition: "end",
                                                      text: d,
                                                      onMouseDown: k,
                                                      onClick: T,
                                                  }),
                                              ],
                                          }),
                                      }),
                                      (0, c.jsx)(lG.E9, {
                                          newValue: I,
                                          children: (0, c.jsx)("div", {
                                              className: lq.$2,
                                              children: S.map((e, t) =>
                                                  (0, c.jsx)(lW.A, { skuId: e, positionInSection: t, onClick: R }, e),
                                              ),
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                      }),
              });
    },
    lJ = (e) => {
        let {
            onDismiss: t,
            applicationId: l,
            headerText: s,
            gradientColors: n,
            gradientAngle: a,
            skuIds: r,
            tab: i,
        } = e;
        return (0, c.jsx)(lZ, {
            onDismiss: t,
            skuIds: r,
            tab: i,
            applicationId: l,
            headerText: s,
            shopButtonText: w.intl.string(w.t.apFNLU),
            analyticsSection: "slayer-storefront-promotional-banner",
            analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
            analyticsImpressionType: "social_layer_storefront_promotional_banner",
            backgroundGradient: `linear-gradient(${a}deg, ${n.join(", ")})`,
        });
    };
var lX = l(770178),
    lQ = l(929283),
    l0 = l(275483);
let l1 = [
        "1212569433839636530",
        "1144308439720394944",
        "1228251144065777765",
        "1343751620965564426",
        "1157407831348228141",
        "1197344326133502032",
        "1232071712695386162",
        "1144046002110738634",
        "1271174324375519273",
        "1237653964582031400",
        "1217625794382401577",
        "1462116613871636542",
        "1458472704469499965",
        "1447654091072344195",
        "1432550258839392376",
        "1409898407849365565",
        "1404558257065824347",
    ],
    l2 = (e) => {
        let { config: t, baseLeft: l, transitioning: s } = e,
            n = window.innerHeight,
            a = j.A.getProduct(t.skuId),
            r = a?.items[0],
            i = a?.type,
            o = l + t.horizontalJitter;
        return (0, c.jsx)("div", {
            className: l0.LY,
            style: {
                top: s ? -n - 384 : t.top,
                left: s ? o + t.transitionOffsetLeft : o,
                transform: `rotate(${t.rotation}deg)`,
                height: 160,
                width: 160,
                transitionDelay: t.transitionDelay,
                transitionDuration: t.transitionDuration,
            },
            children: null != r && i === eS.R.AVATAR_DECORATION && (0, c.jsx)(lQ.i, { item: r }),
        });
    },
    l4 = (e) => {
        let { peaking: t, transitioning: l, parentWidth: s } = e,
            [n, a] = u.useState(!1),
            [r, i] = u.useState([]),
            [o] = u.useState(() =>
                [...l1]
                    .sort(() => Math.random() - 0.5)
                    .map((e) => ({
                        skuId: e,
                        top: 0 + 48 * Math.random(),
                        rotation: -32 + 64 * Math.random(),
                        horizontalJitter: -(20 * Math.random()),
                        transitionOffsetLeft: -20 - 35 * Math.random(),
                        transitionDelay: `${Math.random() / 3}s`,
                        transitionDuration: `${R.H1 - 200 * Math.random()}ms`,
                    })),
            );
        return (
            u.useEffect(() => {
                if (null != s && s > 0) {
                    let e = Math.max(1, Math.floor(s / 130)),
                        t = s / e;
                    i(Array.from({ length: e }, (e, l) => ({ config: o[l % o.length], baseLeft: l * t })));
                }
            }, [s, o]),
            u.useEffect(() => {
                l && setTimeout(() => a(!0), R.H1);
            }, [l]),
            (0, c.jsx)("div", {
                className: g()(l0.rA, { [l0.Kb]: t, [l0.pp]: n }),
                children: r.map((e, t) => {
                    let { config: s, baseLeft: n } = e;
                    return (0, c.jsx)(l2, { config: s, baseLeft: n, transitioning: l }, s.skuId + t);
                }),
            })
        );
    },
    l5 = (e) => {
        let { peaking: t, transitioning: l } = e,
            s = u.useRef(null),
            [n, a] = u.useState(0),
            r = u.useCallback(() => {
                null != s.current && a(s.current.offsetWidth);
            }, []);
        return (
            (0, lX.g)(s, r),
            (0, c.jsx)("div", {
                ref: s,
                className: l0.eL,
                children: (0, c.jsx)(l4, { peaking: t, transitioning: l, parentWidth: n }),
            })
        );
    };
var l9 = l(976860),
    l3 = l(49999);
let l7 = (e) => {
        let { wideBannerBlock: t, tab: l } = e,
            s = j.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            n = u.useRef(null),
            a = u.useRef(null),
            [r, i] = u.useState(),
            [o, d] = u.useState(!1);
        u.useEffect(() => {
            let e = a.current;
            if (null == e) return;
            let t = () => {
                e.naturalWidth > 0 && e.naturalHeight > 0 && i(1080 * (e.naturalHeight / e.naturalWidth));
            };
            return (
                e.complete ? t() : (e.onload = t),
                () => {
                    e.onload = null;
                }
            );
        }, []);
        let m = s?.skuId ?? "",
            { handleCardVisibilityChange: h } = (0, tW.Z)(m, "home", "marketing wide banner"),
            E = (0, b.uM)(),
            { bannerURL: x } = (0, eN.w$)(t),
            p = l === R.G2.ORBS,
            C = null != t.ctaRoute && "" !== t.ctaRoute,
            f = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || C),
            S = null != t.logoURL && "" !== t.logoURL,
            _ = u.useCallback(() => {
                if ((d(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, tO.$l)(tI.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: l3.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            A = u.useCallback(
                (e) => {
                    y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: E?.sessionId,
                        sku_id: m,
                        page_type: l,
                        page_section: E?.pageSection,
                        page_category: E?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(E?.tilePosition),
                        cta_name: e,
                    });
                },
                [E, m, l],
            ),
            L = u.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((A(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    l = parseInt(t[2], 10);
                                (0, lz.default)({ guildId: e, pageIndex: l });
                            }
                        } else (0, l9.pX)(e);
                    }
                },
                [t.ctaRoute, A],
            );
        if (null == x || o) return null;
        let v = g()(tK.nM, tK.Tq, tK.TS, tK.YB, { [tK._1]: p, [tK.vb]: C }),
            I = (0, c.jsxs)(c.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, c.jsx)("div", {
                            className: tK.Mh,
                            children: (0, c.jsx)(lD.J, {
                                size: "sm",
                                onClick: (e) => {
                                    e.stopPropagation(), _();
                                },
                                "aria-label": w.intl.string(w.t.WAI6xu),
                            }),
                        }),
                    (0, c.jsx)("div", {
                        className: g()(tK.zK, { [tK._1]: p }),
                        style: null != r ? { height: `${r}px` } : void 0,
                        children: (0, c.jsx)("img", {
                            ref: a,
                            src: x,
                            alt: t.title,
                            className: g()(tK.LN, { [tK.d5]: p }),
                        }),
                    }),
                    (0, c.jsx)("div", {
                        className: g()(tK.Ep, { [tK.Qq]: f }),
                        style: { maxHeight: null != r ? `${r}px` : "auto" },
                        children: (0, c.jsxs)("div", {
                            className: tK.E8,
                            children: [
                                (0, c.jsx)(eu.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: p ? tK.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, c.jsx)(ee.E, {
                                    style: { color: "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: p ? "text-md/medium" : "text-sm/medium",
                                    children: p
                                        ? w.intl.format(w.t.SFFP7K, {
                                              helpdeskArticle: t8.A.getArticleURL(B.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                f &&
                                    (0, c.jsxs)("div", {
                                        className: tK.nP,
                                        children: [
                                            (0, c.jsx)(et.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    e.stopPropagation(), L(t.ctaText ?? w.intl.string(w.t.jVcuVY));
                                                },
                                                text: t.ctaText ?? w.intl.string(w.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? w.intl.formatToPlainString(w.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            S && (0, c.jsx)("img", { src: t.logoURL, alt: "", className: tK.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, c.jsx)(lP.N, {
            theme: p ? void 0 : tc.NJ.DARK,
            children: (e) =>
                (0, c.jsx)(tz.L, {
                    innerRef: n,
                    onChange: h,
                    threshold: 0,
                    children: C
                        ? (0, c.jsx)(e4.D, { innerRef: n, onClick: () => L(null), className: g()(e, v), children: I })
                        : (0, c.jsx)("div", { ref: n, className: g()(e, v), children: I }),
                }),
        });
    },
    l6 = (e) => {
        let { handleTransition: t, numVisibleItems: l, isFetchingCategories: s, tab: n } = e,
            { noCache: a, includeUnpublished: r } = (0, eG.A)(),
            [i, o] = u.useState(!1),
            d = (0, b.uM)(),
            m = d?.sessionId ?? "";
        u.useEffect(() => {
            (0, eL.z)({
                sessionId: m,
                checkpoint: eL.t.SHOP_MOUNTED,
                tab: n,
                unpublishedCategoriesShown: r,
                cacheDisabled: a,
            });
        }, [n]);
        let {
                isFetchingShopHome: h,
                fetchShopHomeError: E,
                shopBlocks: x,
                refreshShopHome: p,
            } = (0, tk.y)(n, { noCache: a, includeUnpublished: r, logPerf: !0 }, { sessionId: m, tab: n }),
            C = u.useCallback(() => {
                p();
            }, [p]),
            f = u.useMemo(() => x.some((e) => e instanceof tT.p), [x])
                ? (0, c.jsx)(tB.A, { location: "CollectiblesShop" })
                : null;
        return (u.useEffect(() => {
            null != E ||
                h ||
                0 === x.length ||
                (0, eL.z)({
                    sessionId: m,
                    checkpoint: eL.t.SHOP_RENDERED,
                    tab: n,
                    unpublishedCategoriesShown: r,
                    cacheDisabled: a,
                });
        }, [E, h, x.length, r, a, m, n]),
        null != E)
            ? (0, c.jsx)(tb.h, { onRetry: C, errorOrigin: tb.A.SHOP_PAGE, errorMessage: E.message })
            : h || 0 === x.length
              ? (0, c.jsxs)("div", {
                    className: g()(tK.g4, tK.Of),
                    children: [
                        (0, c.jsx)(lp, { isLoading: h, handleTransition: t, tab: n }),
                        (0, c.jsx)(tZ, { isLoading: h, handleTransition: t, categories: [] }),
                        (0, c.jsx)(ll, {
                            isLoading: h,
                            title: n === R.G2.ORBS ? w.intl.string(w.t.dFgeuZ) : w.intl.string(w.t.NSv5KV),
                            numVisibleItems: l,
                            tab: n,
                        }),
                    ],
                })
              : (0, c.jsx)(c.Fragment, {
                    children: x.map((e, a) =>
                        ((e, a, r) => {
                            if (null == e) return null;
                            let u = null,
                                d = !1;
                            switch (e.type) {
                                case tj.g.HERO:
                                    u = (0, c.jsx)(
                                        lp,
                                        { isLoading: h, handleTransition: t, heroBlock: e, tab: n, badge: f },
                                        r,
                                    );
                                    break;
                                case tj.g.FEATURED:
                                    u = (0, c.jsx)(
                                        tZ,
                                        { isLoading: h, handleTransition: t, featuredBlockRecord: e },
                                        r,
                                    );
                                    break;
                                case tj.g.FEED:
                                    let m = e.sortedSkuIds;
                                    u = (0, c.jsx)(
                                        ll,
                                        {
                                            title:
                                                n === R.G2.ORBS ? w.intl.string(w.t.dFgeuZ) : w.intl.string(w.t.NSv5KV),
                                            isLoading: s,
                                            numVisibleItems: l,
                                            sortedSkuIds: m,
                                            buttonContainerClassName: a?.type === tj.g.IMMERSIVE_BANNER ? tK.w : void 0,
                                            prioritizeUserDiscounts: n === R.G2.HOME,
                                            tab: n,
                                            orbsSupportedOnly: n === R.G2.ORBS,
                                        },
                                        r,
                                    );
                                    break;
                                case tj.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: l } = (0, tO.En)(tI.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (l) return null;
                                    }
                                    u = (0, c.jsx)(l7, { wideBannerBlock: e, tab: n }, r);
                                    break;
                                case tj.g.FRAMES_BANNER:
                                    u = (0, c.jsx)(
                                        l7,
                                        {
                                            wideBannerBlock: tR.y.fromServer({
                                                type: tj.g.WIDE_BANNER,
                                                title: e.title,
                                                body: e.body,
                                                wide_banner_url: e.desktopBackgroundImage,
                                                disable_cta: !0,
                                            }),
                                            tab: n,
                                        },
                                        r,
                                    );
                                    break;
                                case tj.g.FRAMES_PRODUCT_SHELF:
                                    u = (0, c.jsx)(la, { block: e, handleTransition: t, tab: n }, r);
                                    break;
                                case tj.g.SHELF:
                                    u = (0, c.jsx)(lM, { handleTransition: t, shelf: e, tab: n }, r);
                                    break;
                                case tj.g.COUNTDOWN_TIMER:
                                    (u = (0, c.jsx)(tG, { countdownTimerBlock: e, isVisible: i }, r)), (d = !0);
                                    break;
                                case tj.g.IMMERSIVE_BANNER:
                                    u = (0, c.jsx)(
                                        lS,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => o(!e) },
                                        r,
                                    );
                                    break;
                                case tj.g.REWARD_HERO:
                                    u = (0, c.jsx)(lB, { isLoading: h, handleTransition: t, heroBlock: e, tab: n }, r);
                                    break;
                                case tj.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER: {
                                    let { isDismissed: t } = (0, tO.En)(
                                        tI.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
                                    );
                                    if (t) return null;
                                    return (0, c.jsx)(
                                        ty,
                                        {
                                            blockType: e.type,
                                            children: (0, c.jsx)(lJ, {
                                                onDismiss: () => {
                                                    (0, tO.d6)(
                                                        tI.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
                                                        {},
                                                    );
                                                },
                                                applicationId: e.applicationId,
                                                headerText: e.headerText,
                                                gradientColors: e.gradientColors,
                                                gradientAngle: e.gradientAngle,
                                                skuIds: e.skuIds,
                                                tab: n,
                                            }),
                                        },
                                        r,
                                    );
                                }
                                default:
                                    return null;
                            }
                            return (0, c.jsx)(
                                ty,
                                {
                                    blockType: e.type,
                                    children: (0, c.jsx)("div", {
                                        className: g()(tK.v1, tK.Of, { [tK.J1]: 0 === r || d }),
                                        children: u,
                                    }),
                                },
                                r,
                            );
                        })(e, a > 0 ? x[a - 1] : null, a),
                    ),
                });
    },
    l8 = (e) => {
        let { handleTransition: t, tab: l, transitionState: s } = e,
            n = u.useRef(null),
            { handleScroll: a } = ea(n, l),
            r = (0, ew.U)(),
            i = (0, b.uM)(),
            [o, d] = u.useState(R.md),
            [g, m] = u.useState(!1);
        return (
            u.useEffect(() => {
                if (null != n.current) {
                    let e = () => {
                            if (null == n.current) return;
                            let e = n.current.getDistanceFromBottom();
                            o >= 36 ? m(e < 20) : e <= 200 && d((e) => e + R.md);
                        },
                        t = n.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [n, o, d, m]),
            (0, c.jsx)(X.Ch, {
                className: tK.OW,
                ref: n,
                onScroll: a,
                children: (0, c.jsxs)("div", {
                    className: tK.bx,
                    children: [
                        (0, c.jsxs)("div", {
                            className: tK.rb,
                            children: [
                                (0, c.jsx)(l6, {
                                    handleTransition: t,
                                    numVisibleItems: o,
                                    isFetchingCategories: r,
                                    tab: l,
                                }),
                                l !== R.G2.CATALOG &&
                                    o >= 36 &&
                                    (0, c.jsxs)("div", {
                                        className: tK.R$,
                                        children: [
                                            (0, c.jsx)(eu.D, {
                                                variant: "heading-md/semibold",
                                                children: w.intl.string(w.t.Yr70c4),
                                            }),
                                            (0, c.jsx)(et.$, {
                                                variant: "primary",
                                                text: w.intl.string(w.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: i?.sessionId,
                                                            page_type: l,
                                                            page_category: l === R.G2.HOME ? void 0 : i?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, c.jsx)(l5, { peaking: g, transitioning: s === R.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var se = l(154323),
    st = l(295811);
let sl = { "Any:personalization-header": lt },
    ss = { [eo.b.SHOP_HOME]: sl },
    sn = { "1465939725649973269": sl, "1478495181551440044": sl },
    sa = () =>
        (0, c.jsx)("div", {
            style: {
                background: "linear-gradient(rgba(39, 30, 173, 0.3), transparent)",
                width: "100%",
                height: 500,
                position: "absolute",
                top: 0,
            },
            children: (0, c.jsx)("div", {
                style: {
                    backgroundImage:
                        'url("https://cdn.discordapp.com/assets/content/8f774ab3b8482a9fd205e8b7285cc372448c4893d8fe9b50d37ddb70c922240d")',
                    backgroundPosition: "center top",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.4,
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                },
            }),
        }),
    sr = { prioritizedCurrency: eF.Hi.ORBS },
    si = (e) => {
        let { tab: t } = e,
            [l, s, n] = (0, O.yK)([T.A], () => [T.A.getLayout(t), T.A.isFetchingLayout(t), T.A.getLayoutFetchError(t)]),
            a = (0, O.bG)([se.A], () => se.A.get("shop_include_unpublished")),
            r = (0, O.bG)([j.A], () => j.A.skipNumCategories),
            i = u.useMemo(() => {
                let e = {};
                return !0 === a && (e.include_unpublished = !0), null != r && r > 0 && (e.skip_num_categories = r), e;
            }, [a, r]),
            o = null == l && !s && n?.status !== 404 && n?.status !== 429;
        if (
            (u.useEffect(() => {
                o && (0, lI.T2)({ tab: t });
            }, [o, t]),
            null == l)
        )
            return t !== K.HOME || o || s
                ? null
                : (0, c.jsx)(ei.Z_, {
                      tenantId: B.FYj,
                      templateId: eo.b.SHOP_HOME,
                      requestParams: i,
                      overrides: ss[eo.b.SHOP_HOME],
                  });
        let d = (0, c.jsx)(ei.Qs, { tenantId: B.FYj, layoutId: l, overrides: sn[l] });
        return (0, c.jsxs)(c.Fragment, {
            children: [
                t === K.ORBS && (0, c.jsx)(sa, {}),
                t === K.ORBS ? (0, c.jsx)(eF.v3.Provider, { value: sr, children: d }) : d,
            ],
        });
    },
    so = (e) => {
        let { url: t } = e,
            [l, s] = u.useState(null);
        return (u.useEffect(() => {
            (async () => {
                try {
                    let e = await fetch(t),
                        l = await e.json();
                    s(l);
                } catch (e) {
                    s(null);
                }
            })();
        }, [t]),
        null == l)
            ? null
            : (0, c.jsx)(ei.Ay, { layout: l });
    },
    sc = (e) => {
        let { handleTransition: t, tab: l, transitionState: s } = e,
            n = (0, b.uM)(),
            a = (0, O.bG)([st.A], () => st.A.getShopLayoutUrlOverride()),
            r = u.useRef(null),
            { handleScroll: i } = ea(r, l),
            [o, d] = u.useState(R.md),
            [m, h] = u.useState(!1);
        return (
            u.useEffect(() => {
                if (null != r.current) {
                    let e = () => {
                            if (null == r.current) return;
                            let e = r.current.getDistanceFromBottom();
                            o >= 36 ? h(e < 20) : e <= 200 && d((e) => e + R.md);
                        },
                        t = r.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [r, o, d, h]),
            (0, c.jsx)(X.Ch, {
                className: tK.OW,
                ref: r,
                onScroll: i,
                children: (0, c.jsxs)("div", {
                    className: tK.bx,
                    children: [
                        (0, c.jsxs)("div", {
                            className: g()(tK.rb, tK.GS),
                            children: [
                                null != a && "" !== a ? (0, c.jsx)(so, { url: a }) : (0, c.jsx)(si, { tab: l }),
                                l !== K.CATALOG &&
                                    o >= 36 &&
                                    (0, c.jsxs)("div", {
                                        className: tK.R$,
                                        children: [
                                            (0, c.jsx)(eu.D, {
                                                variant: "heading-md/semibold",
                                                children: w.intl.string(w.t.Yr70c4),
                                            }),
                                            (0, c.jsx)(et.$, {
                                                variant: "primary",
                                                text: w.intl.string(w.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: n?.sessionId,
                                                            page_type: l,
                                                            page_category: l === K.HOME ? void 0 : n?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, c.jsx)(l5, { peaking: m, transitioning: s === R.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var su = l(256067);
let sd = () =>
        (0, c.jsxs)("div", {
            className: su.z,
            children: [
                (0, c.jsx)("img", {
                    className: su.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: w.intl.string(w.t["p8+qtU"]),
                }),
                (0, c.jsx)(eu.D, { variant: "heading-xl/semibold", children: w.intl.string(w.t["p8+qtU"]) }),
                (0, c.jsx)(ee.E, { variant: "text-md/medium", children: w.intl.string(w.t.UEiyvs) }),
            ],
        }),
    sg = [R.G2.HOME, R.G2.ORBS];
function sm(e) {
    let {
            tab: t,
            categories: l,
            transitionToTab: s,
            transitionState: n,
            updateAnalyticsState: a,
            refreshCategories: r,
        } = e,
        i = sh();
    sE(i);
    let o = (0, O.bG)([Y.A], () => Y.A.useReducedMotion),
        [d, g] = u.useState(void 0),
        [m, h] = u.useState(!0),
        E = u.useMemo(
            () =>
                l.filter(
                    (e) =>
                        !R.MS.some((t) => {
                            let { categorySkuId: l } = t;
                            return l === e.skuId;
                        }),
                ),
            [l],
        ),
        x = (0, $.U)("CollectiblesContent"),
        p = u.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: l,
                    shouldAnimate: n,
                    isInternalShopDeeplink: r,
                    isOrbsExclusive: i,
                } = e;
                a(t, l);
                let c = n && !o,
                    u = i ? R.G2.ORBS : R.G2.CATALOG;
                g(l), h(!r), s(u, c);
            },
            [o, s, a],
        ),
        { searchError: C } = (0, J.S)();
    return null != C
        ? (0, c.jsx)(sd, {})
        : null != i
          ? (0, c.jsx)(tb.h, { onRetry: r, errorMessage: i, errorOrigin: tb.A.SHOP_PAGE })
          : t === R.G2.HOME && x
            ? (0, c.jsx)(sc, { tab: K.HOME, transitionState: n, handleTransition: p })
            : t === R.G2.ORBS && x
              ? (0, c.jsx)(sc, { tab: K.ORBS, transitionState: n, handleTransition: p })
              : sg.includes(t)
                ? (0, c.jsx)(l8, { handleTransition: p, tab: t, transitionState: n })
                : (0, c.jsx)(tL, {
                      tab: t,
                      categories: E,
                      initialCategoryId: d,
                      showFilterInitially: m,
                      onUnmount: () => {
                          g(void 0), h(!0);
                      },
                  });
}
let sh = () =>
        (0, O.bG)([j.A, Z.A], () =>
            null != j.A.error
                ? `shop load fetch categories error: ${j.A.error.message}`
                : null != Z.A.claimError
                  ? `shop load claim error: ${Z.A.claimError.message}`
                  : null != Z.A.fetchError
                    ? `shop load fetch purchase error: ${Z.A.fetchError.message}`
                    : void 0,
        ),
    sE = (e) => {
        let t = (0, O.bG)([v.default], () => v.default.getCurrentUser()),
            { noCache: l, includeUnpublished: s } = (0, eG.A)();
        u.useEffect(() => {
            null != e &&
                q.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: l.toString(),
                        includeUnpublished: s.toString(),
                    },
                });
        }, [e, t, l, s]);
    };
var sx = l(956123);
l(323874), l(14289), l(35956);
var sp = l(873263),
    sC = l(766075),
    sf = l(496431),
    sS = l(893489);
let s_ = { pink: "pinkCountdown" },
    sA = u.memo(function (e) {
        let { message: t, onClick: l, countdownEndDate: s, variant: n } = e,
            a = u.useMemo(() => {
                if (null == s) return null;
                let e = s instanceof Date ? s : new Date(s);
                return isNaN(e.getTime()) ? null : e;
            }, [s]),
            r = (0, sf.A)(a ?? 0, 1e3, void 0, null == a);
        if (null != a && Object.values(r).every((e) => 0 === e)) return null;
        let i = null != n ? sS[n] : void 0,
            o = null != n ? sS[s_[n]] : void 0;
        return (0, c.jsx)(e4.D, {
            className: g()(sS.nagBar, i),
            onClick: l,
            "aria-label": w.intl.string(w.t["wjws+K"]),
            children: (0, c.jsxs)("div", {
                className: sS.content,
                children: [
                    (0, c.jsx)(ee.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: sS.message,
                        children: t,
                    }),
                    null != a && (0, c.jsx)(tF.e, { endDate: a, size: "md", className: o, showSeconds: !0 }),
                ],
            }),
        });
    });
var sL = l(870308),
    sv = l(650583);
let sb = (e) => {
        let { children: t, shouldAddEventListener: l, onClose: s } = e,
            n = (0, E.useHasAnyModalOpen)();
        return (
            u.useEffect(() => {
                if (!l || n) return;
                let e = (e) => {
                    e.key === sv.N$.Escape && s();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [l, n, s]),
            t
        );
    },
    sj = function (e) {
        let { tab: t = R.G2.HOME } = e;
        (0, A.P)(_.a), (0, z.g)();
        let l = (0, C.A)((0, m.A)()),
            s = (0, h.bG)([v.default], () => v.default.getCurrentUser());
        (0, L.pE)();
        let n = (0, eq.yB)("CollectiblesShop"),
            { onClose: a } = (function () {
                let { search: e } = (0, sp.zy)(),
                    t = (0, sp.g)(),
                    l = u.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                    s = null != l ? parseInt(l, 10) : null;
                return {
                    onClose: u.useCallback(() => {
                        if (0 === s) {
                            (0, l9.aX)(), (0, sC.openUserSettings)();
                            return;
                        }
                        (0, l9.EL)() ? (0, l9.aX)() : (0, l9.pX)(B.BVt.APP);
                    }, [s]),
                    source: s,
                    ...t,
                };
            })(),
            { currentTab: r, hasFilters: i } = (0, W.v)(),
            o = u.useMemo(() => (t === R.G2.HOME && null != r && i() ? r : t), [t, r, i]),
            { categories: d, refreshCategories: E } = (0, U.Ay)({ logPerf: !0 }, { sessionId: l, tab: o }),
            N = u.useMemo(() => [...d.values()], [d]),
            [T, K] = u.useState(),
            Y = (0, h.bG)([j.A], () => j.A.getCategory(T)?.name),
            [$, q] = u.useState();
        (0, eW.XU)(l);
        let Z = u.useCallback((e, t) => {
                q(e), K(t);
            }, []),
            { selectedTab: J, transitionState: X, transitionToTab: Q } = (0, V.o)(o);
        (0, S.HU)({ location: w.intl.string(w.t.pWG4ze) }),
            ((e, t, l, s, n) => {
                let {
                    analyticsLocations: a,
                    analyticsSource: r,
                    currentTabLocation: i,
                    newestAnalyticsLocation: o,
                } = P(t);
                u.useEffect(() => {
                    if (s !== R.Pf.VISIBLE || o !== i) return;
                    let c = t === R.G2.CATALOG ? n : r;
                    y.default.track(B.HAw.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: a,
                        source: c,
                        page_session_id: e,
                        page_type: t === R.G2.CATALOG ? "full" : t,
                        category: t === R.G2.HOME ? void 0 : l,
                    });
                }, [a, e, t, l, i, s, n, r, o]);
            })(l, J, Y, X, $),
            ((e, t) => {
                let { analyticsLocations: l } = P(e);
                u.useEffect(() => {
                    null == t ||
                        k.Ay.canUseCollectibles(t) ||
                        y.default.track(B.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: M.e.COLLECTIBLES_SHOP,
                            location_stack: l,
                        });
                }, [l, t]);
            })(J, s);
        let { dismissShopButtonDC: ee } = (0, sL.A)();
        u.useEffect(() => {
            ee();
        }, [ee]),
            u.useEffect(() => {
                (0, p.I)(B.BVt.COLLECTIBLES_SHOP);
            }, []);
        let et = u.useRef(null),
            el = u.useRef(null);
        (0, x.t)(et),
            u.useEffect(() => {
                el.current?.focus();
            }, []),
            (0, eq.gB)();
        let { analyticsLocations: es } = P(J),
            en = (function (e, t) {
                let l = (0, O.bG)([H.A], () => H.A.getUserDiscount(M.tU)),
                    s = (0, O.bG)([D.default], () => D.default.locale),
                    n = F.useConfig({ location: t }).enabled;
                if (u.useMemo(() => null != l && n && e !== R.G2.ORBS, [l, n, e])) {
                    let e =
                        null != l && null != l.expiresAt
                            ? new Date(l.expiresAt).toLocaleDateString(s, { day: "numeric", month: "numeric" })
                            : void 0;
                    return { type: 0, countdownEndDate: l?.expiresAt, message: w.intl.format(w.t.RCo9MF, { date: e }) };
                }
            })(J, "collectibles_shop");
        return (0, c.jsx)(f.f5, {
            value: es,
            children: (0, c.jsx)(b.R9, {
                newValue: { sessionId: l, pageCategory: Y, pageSize: R.l5 },
                children: (0, c.jsx)(I.iM, {
                    tab: J,
                    children: (0, c.jsx)(sb, {
                        onClose: a,
                        shouldAddEventListener: !1,
                        children: (0, c.jsxs)("div", {
                            className: g()(eM.bx, { [eq.jP]: n }),
                            ref: el,
                            tabIndex: -1,
                            children: [
                                (0, c.jsx)(sx.G, { handleTransition: Q, selectedTab: J }),
                                null != en &&
                                    en.type === G.COUNTDOWN &&
                                    (0, c.jsx)(sA, {
                                        message: en.message,
                                        onClick: () => Q(R.G2.HOME),
                                        variant: "pink",
                                        countdownEndDate: en.countdownEndDate,
                                    }),
                                (0, c.jsx)("div", {
                                    className: g()(eM.td, {
                                        [eM.RK]: X === R.Pf.VISIBLE,
                                        [eM.in]: X === R.Pf.IN,
                                        [eM.FD]: X === R.Pf.OUT,
                                    }),
                                    children: (0, c.jsx)(sm, {
                                        tab: J,
                                        refreshCategories: E,
                                        transitionToTab: Q,
                                        transitionState: X,
                                        categories: N,
                                        updateAnalyticsState: Z,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        });
    };
