s.r(t), s.d(t, { default: () => lj });
var l,
    n,
    a,
    r,
    i,
    o,
    c = s(627968),
    u = s(64700),
    d = s(503698),
    g = s.n(d),
    m = s(835245),
    h = s(702841),
    E = s(192308),
    x = s(315710),
    p = s(944791),
    C = s(444927),
    f = s(688810),
    S = s(726249),
    _ = s(475073),
    A = s(611924),
    L = s(561794),
    v = s(287809),
    j = s(440938),
    b = s(590180),
    I = s(161918),
    O = s(17928),
    N = s(793574),
    y = s(174459),
    k = s(428262),
    T = s(870216),
    R = s(758836),
    B = s(652215),
    M = s(788868);
let P = (e) => {
    let { analyticsSource: t, analyticsLocations: s } = (0, O.cf)([T.A], () => T.A.getAnalytics()),
        l = ((e) => {
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
        { analyticsLocations: n, newestAnalyticsLocation: a } = (0, f.Ay)([...s, N.A.COLLECTIBLES_SHOP, l]);
    return { analyticsSource: t, analyticsLocations: n, newestAnalyticsLocation: a, currentTabLocation: l };
};
var D = s(773669),
    H = s(248352);
let F = (0, s(945810).mj)({
    name: "2026-01-valentines-day-drop",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 } },
});
var w = s(375708),
    G = (((l = {})[(l.COUNTDOWN = 0)] = "COUNTDOWN"), l),
    U = s(841702),
    z = s(621653),
    V = s(983545),
    W = s(23161),
    K = (((n = {}).HOME = "home"), (n.CATALOG = "catalog"), (n.ORBS = "orbs"), n),
    Y = s(775602),
    $ = s(578797),
    Z = s(38405),
    q = s(4227),
    J = s(856686),
    X = s(689175),
    Q = s(364522),
    ee = s(834730),
    et = s(821609),
    es = s(783977),
    el = s(59520);
let en = (e, t, s, l) => {
        let { scrollTop: n = 0, scrollOffset: a = 0, scrollHeight: r = 0, scrollWidth: i = 0 } = l;
        if (r > 0) {
            let l = (n + a) / r;
            l > 0 &&
                y.default.track(e, {
                    scroll_visible_percent: l,
                    source: s,
                    page_height: Math.round(r),
                    page_width: Math.round(i),
                    page_session_id: t,
                });
        }
    },
    ea = (e, t) => {
        let { analyticsSource: s } = P(t),
            l = (0, el.I)(en, 5e3, [], { trailing: !0 }),
            n = (0, j.uM)(),
            a = n?.sessionId;
        return {
            handleScroll: u.useCallback(() => {
                if (null != e.current) {
                    let t = e.current.getScrollerNode();
                    null != t &&
                        l(B.HAw.COLLECTIBLES_SHOP_SCROLLED, null != a ? a : "", s, {
                            scrollTop: t.scrollTop,
                            scrollOffset: t.offsetHeight,
                            scrollHeight: t.scrollHeight,
                            scrollWidth: t.scrollWidth,
                        });
                }
            }, [l, s, a, e]),
        };
    };
var er = s(354328),
    ei = s(356118),
    eo = s(619835),
    ec = s(641150),
    eu = s(534514);
function ed() {
    let { itemTypeFilters: e, searchQuery: t } = (0, W.v)((e) => e),
        { totalCount: s, isFetchingResults: l } = (0, J.S)(),
        n = (0, W.v)((e) => e.hasFilters()),
        a = u.useCallback(() => {
            if (!n) return "";
            if (l) return w.intl.string(w.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return w.intl.format(w.t.KJMJOz, { count: s, search: e });
            }
            return 1 === e.size && e.has(ec.q.AVATAR_DECORATION)
                ? w.intl.format(w.t.s1UzGQ, { count: s })
                : 1 === e.size && e.has(ec.q.NAMEPLATE)
                  ? w.intl.format(w.t.ZWGN9T, { count: s })
                  : 1 === e.size && e.has(ec.q.PROFILE_EFFECT)
                    ? w.intl.format(w.t["v/7apu"], { count: s })
                    : 1 === e.size && e.has(ec.q.PROFILE_FRAME)
                      ? w.intl.format(w.t.eu4eRy, { count: s })
                      : 1 === e.size && e.has(ec.q.BUNDLE)
                        ? w.intl.format(w.t.fZ1rdk, { count: s })
                        : w.intl.format(w.t["/rPvmQ"], { count: s });
        }, [e, s, n, t, l]);
    return (0, c.jsx)(eu.D, { variant: "heading-lg/semibold", children: a() });
}
var eg = s(172218),
    em = s(932793),
    eh = s(940980),
    eE = s(993408),
    ex = s(623373),
    ep = s(660653),
    eC = s(466459);
let ef = () => {
    let e = (0, h.bG)([v.default], () => v.default.getCurrentUser()),
        t = k.Ay.canUseShopDiscounts(e);
    return (0, u.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: s } = (0, eC.o)(q.A, e);
                      if (!(0, eE.aw)(e) || (0, eE.tt)(e) || s) return !0;
                      if (!(0, ep.uh)(e)) return !1;
                      if ((0, ex.Ab)(e)) return null != (0, ex.CW)({ product: e, hasShopDiscount: t });
                      let l = (0, eE.l8)(t),
                          n = (0, eE.yt)(e, l);
                      if (null == n || 0 === n.amount) return !0;
                      let a = 0;
                      return (
                          null != e.bundledProducts &&
                              (a = e.bundledProducts.reduce((e, t) => {
                                  let s = (0, eE.yt)(t, l);
                                  return e + (s?.amount ?? 0);
                              }, 0)),
                          n.amount < a
                      );
                  }),
        [t],
    );
};
var eS = s(575593);
let e_ = (e, t) =>
        e.type === eS.R.BUNDLE && e.items.some((e) => t.includes(e.skuId))
            ? 1
            : (0, ex.B1)(e)
              ? 2 * !!e.variants.every((e) => t.includes(e.skuId))
              : 2 * !!t.includes(e.skuId),
    eA = (e) => {
        let t = (0, h.bG)([q.A], () => q.A.purchases),
            s = (0, u.useMemo)(
                () =>
                    [...t].map((e) => {
                        let [t] = e;
                        return t;
                    }),
                [t],
            );
        return (0, u.useMemo)(() => [...e].sort((e, t) => e_(e, s) - e_(t, s)), [e, s]);
    };
var eL = s(100057),
    ev = s(126031),
    ej = s(653887),
    eb = s(607470),
    eI = s(531685),
    eO = s(203312),
    eN = s(212407),
    ey = s(215688);
function ek(e) {
    let { category: t } = e,
        s = (0, h.bG)([Y.A], () => Y.A.useReducedMotion),
        l = (0, h.bG)([eI.A], () => eI.A.isFocused()),
        { catalogBannerStatic: n, catalogBannerAnimated: a, catalogBannerRive: r } = (0, eN.MV)(t),
        i = u.useRef(null),
        o = null != r;
    return (0, c.jsxs)("div", {
        ref: i,
        className: g()(ey.sW, { [ey.by]: o }),
        children: [
            (0, c.jsx)(ev.s, { children: (0, c.jsx)(eu.D, { variant: "heading-lg/semibold", children: t.name }) }),
            o
                ? (0, c.jsx)(ej._, {
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
                              !s &&
                              l &&
                              (0, c.jsx)(eb.A, { src: a, className: ey.tr, autoPlay: !0, loop: !0 }),
                      ],
                  }),
            (0, c.jsx)(eO.A, { category: t, className: ey.v0, daysRemainingText: w.t["8gsP5M"] }),
        ],
    });
}
(0, eE.$b)(90);
var eT = s(496569),
    eR = s(835090);
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
var eM = s(647685),
    eP = s(10);
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
var eH = s(491438),
    eF = s(561769),
    ew = s(159439),
    eG = s(998694);
function eU(e) {
    let { category: t } = e,
        s = (0, h.bG)([v.default], () => v.default.getCurrentUser()),
        l = eA(t.products),
        n = ef()(l),
        a = (0, eh.W)("CollectiblesCatalogContent");
    return null == s || 0 === n.length
        ? null
        : (0, c.jsx)("div", {
              className: eM.vY,
              children: n.map((e, t) =>
                  (0, c.jsx)(
                      j.R9,
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
        [s, l] = u.useState(!1),
        n = (0, eg.K)((e) => {
            l(e);
        }, 0.15);
    return (0, c.jsxs)("div", {
        className: eM.EF,
        ref: n,
        children: [(0, c.jsx)(ek, { category: t }), (0, c.jsx)(eU, { category: t })],
    });
}
function eV(e) {
    let { categories: t, setCategoryRef: s, currentPage: l, handlePageChange: n, initialCategoryId: a } = e,
        r = (0, j.uM)(),
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
        t !== l && n(t), (h.current = a);
    }, [a, m, n, l]);
    let E = u.useMemo(() => {
        let e = (l - 1) * R.l5;
        return m.slice(e, e + R.l5);
    }, [m, l]);
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
                              ref: (t) => s(e.skuId, t),
                              children: (0, c.jsx)(j.R9, {
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
                          currentPage: l,
                          totalCount: m.length,
                          pageSize: R.l5,
                          onPageChange: n,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var eW = s(177366),
    eK = s(401864),
    eY = s(124987),
    e$ = s(691885),
    eZ = s(146919),
    eq = s(912853);
let eJ = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: s } = (0, W.v)(),
        l = (0, j.uM)(),
        n = (0, eZ.yB)("CollectiblesSortSelect"),
        a = s(),
        r = u.useMemo(() => R.QB.filter((e) => e.sortType !== eY.$.RELEVANCE || a), [a]),
        i = u.useCallback((e) => {
            let { sortType: t, sortDirection: s } = e;
            return t === eY.$.RECENCY
                ? { label: w.intl.string(w.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === eY.$.PRICE
                  ? s === eK.A.ASC
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
                let s = i(o(e));
                y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_section: l?.pageSection,
                    page_category: l?.pageCategory,
                    page_index: l?.pageIndex,
                    page_size: l?.pageSize,
                    cta_name: `sort by ${s.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(o(e));
            },
            [l, i, o, t],
        ),
        m = i(e);
    return (0, c.jsx)("div", {
        className: g()(eq.k, { [eZ.jP]: n }),
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
    e0 = s(990078),
    e1 = s(150934),
    e2 = s(508770),
    e4 = s(939249),
    e5 = s(947641),
    e9 = s(661531),
    e3 = s(604338),
    e7 = s(785866),
    e6 = s(373846),
    e8 = s(308323),
    te = s(608599),
    tt = s(685761),
    ts = s(157225),
    tl = s(413249),
    tn = s(510241),
    ta = s(601198),
    tr = s(736653),
    ti = s(371446),
    to = s(13875),
    tc = s(818348),
    tu = s(764915);
function td() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: s, hasFilters: l } = (0, W.v)(),
        n = l(),
        { enabled: a } = (0, ti.Z)({ location: "Shop" }),
        r = (0, to.sk)("FilterBar"),
        i = (0, j.uM)(),
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
                        m("filter reset"), s(), requestAnimationFrame(() => o.current?.focus());
                    },
                    text: w.intl.string(w.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
let tg = (e) => {
        let { filter: t, trackFilterAction: s } = e,
            l = {
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
                    let e = l[t]?.toLowerCase() != null ? l[t].toLowerCase() : t;
                    s(`filter item type ${e} ${!1 === n.has(t) ? "on" : "off"}`), a(t);
                },
                label: l[t] ?? "",
            });
        return t === ec.q.PROFILE_FRAME
            ? (0, c.jsxs)("div", { className: tu.Ym, children: [r, (0, c.jsx)(e2.E, { type: "new" })] })
            : r;
    },
    tm = (e) => {
        let { trackFilterAction: t } = e,
            s = u.useMemo(
                () => [
                    { color: "#9B59B6", label: w.intl.string(w.t.kqUD4P), enum: eX.PURPLE },
                    { color: "#3498DB", label: w.intl.string(w.t.qQTRae), enum: eX.BLUE },
                    { color: "#2ECC71", label: w.intl.string(w.t["f/Ylk6"]), enum: eX.GREEN },
                    { color: "#A0522D", label: w.intl.string(w.t["Sd/BMa"]), enum: eX.BROWN },
                    { color: "#F1C40F", label: w.intl.string(w.t["0fevYz"]), enum: eX.YELLOW },
                ],
                [],
            ),
            l = u.useMemo(
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
                (0, c.jsx)(th, { colors: s, trackFilterAction: t }),
                (0, c.jsx)(th, { colors: l, trackFilterAction: t }),
            ],
        });
    },
    th = (e) => {
        let { colors: t, trackFilterAction: s } = e,
            { colorFilters: l, onToggleColor: n } = (0, W.v)();
        return (0, c.jsx)("div", {
            className: tu.OW,
            children: t.map((e) => {
                let { color: t, label: a, enum: r } = e;
                return (0, c.jsx)(
                    tE,
                    { color: t, label: a, enum: r, isToggled: l.has(r), onToggleColor: n, trackFilterAction: s },
                    r,
                );
            }),
        });
    },
    tE = (e) => {
        let { color: t, label: s, enum: l, isToggled: n, onToggleColor: a, trackFilterAction: r } = e;
        return (0, c.jsx)(
            e0.m,
            {
                text: s,
                asContainer: !0,
                children: (0, c.jsx)(
                    e4.D,
                    {
                        className: g()(tu.n1, { [tu.lx]: n }),
                        style: { backgroundColor: t },
                        "aria-label": s,
                        "aria-pressed": n,
                        onClick: () => {
                            r(`filter color ${s.toLowerCase()} ${!n ? "on" : "off"}`), a(l);
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
            s,
        );
    },
    tx = (e) => {
        let { trackFilterAction: t } = e,
            { themeFilters: s, onToggleTheme: l } = (0, W.v)(),
            n = (0, tr.Ay)() === tc.NJ.DARK,
            a = u.useCallback(
                (e) => {
                    if (s.has(e) || n) return "always-white";
                },
                [s, n],
            ),
            r = u.useCallback(
                (e) => (s.has(e) || n ? e9.A.colors.WHITE : e9.A.colors.INTERACTIVE_TEXT_DEFAULT),
                [s, n],
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
                        icon: (0, c.jsx)(ts.N, { size: "xs", color: r(eQ.ANIMALS_PETS) }),
                        enum: eQ.ANIMALS_PETS,
                    },
                    {
                        name: w.intl.string(w.t.cJng7v),
                        icon: (0, c.jsx)(tl.p, { size: "xs", color: r(eQ.NATURE) }),
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
                                className: g()(tu.w4, { [tu.C7]: s.has(i) }),
                                "aria-label": n,
                                "aria-pressed": s.has(i),
                                onClick: () => {
                                    let e = s.has(i);
                                    t(`filter theme ${n.toLowerCase()} ${!e ? "on" : "off"}`), l(i);
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
var tp = s(687971);
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
var tf = s(528096);
let tS = { flattenProductVariants: !0 };
function t_(e) {
    let { isFetchingCategories: t, scrollerRef: s, tab: l } = e,
        n = (0, j.uM)(),
        a = n?.sessionId ?? "",
        { noCache: r, includeUnpublished: i } = (0, eG.A)(),
        o = (0, eh.W)("CollectiblesFilterResults"),
        d = (0, h.bG)([v.default], () => v.default.getCurrentUser()),
        { skus: m, currentPage: E, totalCount: x, isFetchingResults: p } = (0, J.S)(),
        C = (0, h.yK)([b.A], () => b.A.getProductsBySkus(m)),
        f = u.useCallback(() => {
            s?.current?.scrollToTop({ animate: !0 });
        }, [s]),
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
                tab: l,
                unpublishedCategoriesShown: i,
                cacheDisabled: r,
            });
    }, [a, i, r, t, l]);
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
                                    null == b.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, c.jsx)(
                                              j.R9,
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
var tA = s(832179);
function tL(e) {
    let { tab: t, categories: s, initialCategoryId: l, showFilterInitially: n = !0, onUnmount: a } = e,
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
            null != l && m(l);
        }, [l, m]),
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
                                  categories: s,
                                  setCategoryRef: g,
                                  initialCategoryId: l,
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
            filterBarOpen: s,
            setFilterBarOpen: l,
            tab: n,
            scrollerRef: a,
            categories: r,
            setCategoryRef: i,
            initialCategoryId: o,
        } = e,
        d = u.useRef(null),
        m = (0, W.v)((e) => e.hasDefaultFilters()),
        h = (0, j.uM)(),
        { handlePageChange: E, currentPage: x } = ((e) => {
            let [t, s] = u.useState(1);
            return {
                currentPage: t,
                handlePageChange: u.useCallback(
                    (t) => {
                        s(t), e.current?.scrollTo({ to: 0 });
                    },
                    [e, s],
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
            if (!t || !s) return;
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
                    l(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [t, s, l, h]),
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
                                                let e = !s;
                                                y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: h?.sessionId,
                                                    page_section: h?.pageSection,
                                                    page_category: h?.pageCategory,
                                                    page_index: h?.pageIndex,
                                                    page_size: h?.pageSize,
                                                    cta_name: `filter bar ${e ? "show" : "hide"}`,
                                                    page_type: "catalog",
                                                }),
                                                    l(e);
                                            },
                                            variant: "secondary",
                                            text: w.intl.string(s ? w.t.fYtm6f : w.t["TeTYE+"]),
                                            icon: es.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            s &&
                                t &&
                                (0, c.jsx)("div", {
                                    className: tA.Dh,
                                    ref: d,
                                    children: (0, c.jsx)(X.Ch, { className: tA.Qo, children: (0, c.jsx)(td, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, c.jsx)(j.R9, {
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
var tj = s(599062),
    tb = s(651162),
    tI = s(554146),
    tO = s(367727);
let tN = u.createContext(null);
function ty(e) {
    let { blockType: t, children: s } = e,
        l = u.useMemo(() => ({ blockType: t }), [t]);
    return (0, c.jsx)(tN.Provider, { value: l, children: s });
}
var tk = s(755172),
    tT = s(325595),
    tR = s(893998),
    tB = s(110629),
    tM = s(873174),
    tP = s(607399),
    tD = s(946015),
    tH = s(717421),
    tF = s(854818),
    tw = s(134264);
let tG = u.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: s } = e,
        l = (0, tH.z)({
            transform: `translateX(-50%) ${s ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!s,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsxs)(tM.animated.div, {
        className: g()([tw.lP, tP.Fr && tw.yJ]),
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
var tU = s(424918),
    tz = s(269115),
    tV = s(777666),
    tW = s(597783),
    tK = s(941734);
let tY = (e) => {
        let t,
            { category: s, subblock: l, badgeText: n, enablePreview: a, handleTransition: r } = e;
        null != l && (t = b.A.getCategoryByStoreListingId(l?.categoryStoreListingId)?.skuId);
        let i = t ?? s?.skuId ?? "",
            { handleCardVisibilityChange: o } = (0, tW.Z)(i, "home", "marketing featured block"),
            d = (0, eN.s4)(s, l, a),
            g = u.useRef(null),
            m = l?.bodyText,
            h = (0, j.uM)();
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
                        isOrbsExclusive: s?.isOrbsExclusive,
                    }),
                        y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: h?.sessionId,
                            sku_id: i,
                            page_type: "home",
                            page_section: h?.pageSection,
                            page_category: h?.pageCategory,
                            tile_type: "FEATURED_BLOCK",
                            tile_position: String(h?.tilePosition),
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
                                style: { color: l?.bannerTextColor ?? "white" },
                                variant: "heading-md/medium",
                                children: m,
                            }),
                    }),
                    (0, c.jsx)("div", {
                        className: tK.b2,
                        children: (0, c.jsx)(et.$, {
                            variant: "overlay-primary",
                            text: w.intl.string(w.t.jVcuVY),
                            onClick: (e) => {
                                r({
                                    sourceButton: "shop marketing take me there button",
                                    categorySkuId: i,
                                    isInternalShopDeeplink: !0,
                                    isOrbsExclusive: s?.isOrbsExclusive,
                                }),
                                    e.stopPropagation(),
                                    y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                        collectibles_shop_session_id: h?.sessionId,
                                        sku_id: i,
                                        page_type: "home",
                                        page_section: h?.pageSection,
                                        page_category: h?.pageCategory,
                                        tile_type: "FEATURED_BLOCK",
                                        tile_position: String(h?.tilePosition),
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
        let { handleTransition: t, featuredBlockRecord: s } = e;
        return (0, c.jsx)("div", {
            className: g()(tK.n9, tK.YB),
            children: s?.subblocks.map((e, s) =>
                e.type === tU.u.CATEGORY
                    ? (0, c.jsx)(
                          j.R9,
                          {
                              newValue: {
                                  categoryPosition: 1,
                                  pageCategory: e.name,
                                  pageSection: "featured_block",
                                  tilePosition: s,
                              },
                              children: (0, c.jsx)(
                                  tY,
                                  {
                                      subblock: e,
                                      enablePreview: 0 === s,
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
    tZ = (e) => {
        let { handleTransition: t, categories: s } = e;
        if (null == s || s.length < 2) return null;
        let [l, n] = s;
        return (0, c.jsx)("div", {
            className: g()(tK.n9, tK.YB),
            children: (0, c.jsxs)(j.R9, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != l ? l.name : n?.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == l),
                },
                children: [
                    null != l &&
                        (0, c.jsx)(tY, {
                            category: l,
                            enablePreview: !0,
                            badgeText: (0, eE.HF)(l.unpublishedAt) ? w.intl.string(w.t["h/uBCR"]) : void 0,
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
    tq = (e) => {
        let { isLoading: t, handleTransition: s, categories: l, featuredBlockRecord: n } = e,
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
                    children: (0, c.jsx)(t$, { featuredBlockRecord: n, handleTransition: s, isLoading: !1 }),
                })
              : (0, c.jsx)(f.f5, {
                    value: a,
                    children: (0, c.jsx)(tZ, { categories: l, handleTransition: s, isLoading: !1 }),
                });
    };
var tJ = s(140735),
    tX =
        (((i = {}).MOUNTED = "mounted"),
        (i.SORT_OUT = "sort-out"),
        (i.SORT_IN = "sort-in"),
        (i.SHUFFLE_OUT = "shuffle-out"),
        (i.SHUFFLE_IN = "shuffle-in"),
        (i.FINISHED = "finished"),
        i);
s(667532);
var tQ = s(735438),
    t0 = s.n(tQ),
    t1 =
        (((o = {}).RECOMMENDED = "recommended"),
        (o.POPULAR = "popular"),
        (o.RECENT = "recent"),
        (o.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (o.RANDOM = "random"),
        o),
    t2 = s(153488),
    t4 = s(155999),
    t5 = s.n(t4);
function t9() {
    let e = (0, O.bG)([b.A], () => b.A.products);
    return (0, u.useCallback)(
        (t) =>
            t5()(
                t
                    .map((t) => {
                        let s = e.get(t);
                        return null != s && null != s.variantGroupStoreListingId
                            ? b.A.getProductByStoreListingId(s.variantGroupStoreListingId)
                            : s;
                    })
                    .filter((e) => null != e),
                "storeListingId",
            ),
        [e],
    );
}
var t3 = s(885574),
    t7 = s(975807),
    t6 = s(975571),
    t8 = s(365714);
let se = (e) => {
        let { personalizedResults: t, label: s } = e,
            l = s ?? w.intl.string(w.t.NSv5KV);
        return (0, c.jsxs)("div", {
            className: t8.L,
            children: [
                (0, c.jsx)(eu.D, { variant: "heading-lg/semibold", children: l }),
                t &&
                    (0, c.jsx)(e0.m, {
                        text: w.intl.string(w.t["3taPdj"]),
                        position: "top",
                        "aria-label": w.intl.string(w.t["3taPdj"]),
                        children: (0, c.jsx)(e4.D, {
                            onClick: () => (0, t7.A)(t6.A.getArticleURL(B.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: t8.s,
                            children: (0, c.jsx)(t3.m, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    st = (e) => {
        let {
                isLoading: t,
                title: s,
                sortedSkuIds: l,
                numVisibleItems: n,
                prioritizeUserDiscounts: a,
                tab: r,
                buttonContainerClassName: i,
                orbsSupportedOnly: o,
            } = e,
            d = (0, O.bG)([v.default], () => v.default.getCurrentUser()),
            m = k.Ay.canUseShopDiscounts(d),
            h = (0, eh.W)("FeedBlock"),
            E = (0, eZ.yB)("FeedBlock"),
            {
                sortType: x,
                setSortType: p,
                sortedItems: C,
                sortOptions: S,
                shuffleProducts: _,
                showRecommendationOption: A,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: s, prioritizeUserDiscounts: l, orbsSupportedOnly: n } = e,
                    a = (0, O.bG)([t2.A], () => t2.A.hasConsented(B.YAq.PERSONALIZATION)),
                    r = u.useMemo(() => t?.[t1.RECOMMENDED] ?? [], [t]),
                    i = u.useMemo(() => t?.[t1.POPULAR] ?? [], [t]),
                    o = r.length > 0 && a,
                    [c, d] = u.useState(o ? t1.RECOMMENDED : t1.POPULAR),
                    g = (0, O.bG)([b.A], () => b.A.productsWithVariantsAsGroup),
                    m = u.useMemo(() => (0, eE.CE)(g), [g]),
                    h = (0, O.bG)([H.A], () => H.A.getUserDiscounts()),
                    E = t9(),
                    x = ef(),
                    [p, C] = u.useState([]),
                    f = u.useCallback(() => {
                        d(t1.RANDOM), C(t0().shuffle(m));
                    }, [m]);
                u.useEffect(() => {
                    C(t0().shuffle(m));
                }, [m]);
                let S = eA(
                    u.useMemo(() => {
                        let e = [];
                        if (c === t1.RECENT) e = m;
                        else if (c === t1.PRICE_LOW_TO_HIGH) e = (0, eE.bf)([...m], s, n);
                        else if (c === t1.RECOMMENDED) {
                            let t = E(r);
                            e = l ? (0, eE.Bs)(t, h) : t;
                        } else if (c === t1.POPULAR) {
                            let t = E(i);
                            e = l ? (0, eE.Bs)(t, h) : t;
                        } else c === t1.RANDOM && (e = p);
                        return n ? (0, ex.ex)(x(e)) : x(e);
                    }, [c, n, x, s, m, E, r, l, h, i, p]),
                );
                return {
                    sortType: c,
                    setSortType: d,
                    sortedItems: S,
                    sortOptions: u.useMemo(() => {
                        let e = [
                            { value: t1.POPULAR, label: w.intl.string(w.t.Y68e5p) },
                            { value: t1.RECENT, label: w.intl.string(w.t["51Bhiz"]) },
                            { value: t1.PRICE_LOW_TO_HIGH, label: w.intl.string(w.t.m8RVU2) },
                        ];
                        return o && e.unshift({ value: t1.RECOMMENDED, label: w.intl.string(w.t.zPWgFG) }), e;
                    }, [o]),
                    showRecommendationOption: o,
                    shuffleProducts: f,
                };
            })({ sortedSkuIds: l, hasShopDiscount: m, prioritizeUserDiscounts: a, orbsSupportedOnly: o }),
            L = (0, O.bG)([Y.A], () => Y.A.useReducedMotion),
            I = (0, O.bG)([eI.A], () => eI.A.isFocused()),
            T = !L && I,
            { animationPhase: M, startAnimation: P } = (() => {
                let [e, t] = u.useState("mounted"),
                    [s, l] = u.useState(!1),
                    n = u.useRef(null);
                return (
                    u.useEffect(() => {
                        s && "finished" === e && (null !== n.current && n.current.focus(), l(!1));
                    }, [e, s]),
                    {
                        animationPhase: e,
                        startAnimation: u.useCallback((e) => {
                            let { isShuffling: s, onOutroComplete: a, returnRef: r } = e;
                            r?.current != null && ((n.current = r.current), l(!0)),
                                t(s ? "shuffle-out" : "sort-out"),
                                setTimeout(
                                    () => {
                                        a(),
                                            t(s ? "shuffle-in" : "sort-in"),
                                            setTimeout(
                                                () => {
                                                    t("finished");
                                                },
                                                s ? 200 : 300,
                                            );
                                    },
                                    s ? 250 : 300,
                                );
                        }, []),
                    }
                );
            })(),
            D = (0, j.uM)(),
            F = D?.sessionId ?? "",
            { analyticsLocations: G } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            U = u.useRef(null),
            [z, V] = u.useState(!1),
            W = u.useCallback(
                (e) => {
                    V(!1),
                        P({ isShuffling: !1, onOutroComplete: () => p(e) }),
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
                                  (0, c.jsx)(se, { label: s, personalizedResults: A }),
                                  (0, c.jsxs)("div", {
                                      className: g()(tK.IE, { [eZ.jP]: E }),
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
                                                      children: (0, c.jsx)(e$.l, {
                                                          label: w.intl.string(w.t.uaX705),
                                                          hideLabel: !0,
                                                          options: S,
                                                          onSelectionChange: W,
                                                          formatOption: (e) => {
                                                              let { label: t, value: s } = e;
                                                              return { id: s, label: t, value: s };
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
                                                      V(!0),
                                                          P({ isShuffling: !0, onOutroComplete: _, returnRef: U }),
                                                          y.default.track(
                                                              B.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: F },
                                                          );
                                                  },
                                                  disabled: M !== tX.MOUNTED && M !== tX.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, c.jsx)(tJ.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: z && M === tX.FINISHED ? w.intl.string(w.t["3Pml0e"]) : "",
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
                                        let s,
                                            l = b.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == l) return null;
                                        if (T)
                                            if (M === tX.SHUFFLE_OUT)
                                                return (0, c.jsx)(
                                                    "div",
                                                    {
                                                        className: tK.Z2,
                                                        children: (0, c.jsx)(eB, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                M === tX.SORT_OUT
                                                    ? (s = tK.MW)
                                                    : M === tX.SHUFFLE_IN
                                                      ? (s = tK.aS)
                                                      : M === tX.SORT_IN && (s = tK.F7);
                                        return (0, c.jsx)(
                                            j.R9,
                                            {
                                                newValue: {
                                                    tilePosition: t,
                                                    pageSection: "popular picks",
                                                    categoryPosition: 2,
                                                },
                                                children: (0, c.jsx)("div", {
                                                    className: s,
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
var ss = s(449543),
    sl = s(622697);
let sn = (e) => {
    let { block: t, handleTransition: s, tab: l } = e,
        n = (0, O.bG)([v.default], () => v.default.getCurrentUser()),
        a = (0, eh.W)("FramesProductShelfBlock"),
        r = t9(),
        i = eA(u.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r])),
        { analyticsLocations: o } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_SHELF),
        d = u.useCallback(() => {
            s({
                sourceButton: "frames product shelf see all",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            });
        }, [s, t.categorySkuId]);
    return null == n || 0 === i.length
        ? null
        : (0, c.jsx)(f.f5, {
              value: o,
              children: (0, c.jsxs)("div", {
                  className: g()(sl.kL, tK.YB),
                  children: [
                      null != t.backgroundImage &&
                          (0, c.jsx)("img", { className: sl.iL, src: t.backgroundImage, alt: "", "aria-hidden": !0 }),
                      (0, c.jsxs)("div", {
                          className: sl.Qs,
                          children: [
                              (0, c.jsxs)("div", {
                                  className: sl.wx,
                                  children: [
                                      (0, c.jsxs)("div", {
                                          className: sl.Jb,
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
                              (0, c.jsx)(ss.A, {
                                  gap: "xl",
                                  edgeFade: "sm",
                                  children: i.map((e, s) =>
                                      null == b.A.getCategoryForProduct(e.skuId)
                                          ? null
                                          : (0, c.jsx)(
                                                j.R9,
                                                {
                                                    newValue: {
                                                        tilePosition: s,
                                                        pageSection: t.title,
                                                        categoryPosition: 1,
                                                    },
                                                    children: (0, c.jsx)(eH.A, {
                                                        skuId: e.skuId,
                                                        prioritizedCurrency:
                                                            l === R.G2.ORBS ? eF.Hi.ORBS : a ? eF.Hi.FIAT : void 0,
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
var sa = s(696292),
    sr = s(617986),
    si = s(318346);
let so = (e) => {
    let { clientX: t, clientY: s, currentTarget: l } = e;
    l.style.pointerEvents = "none";
    let n = document.elementFromPoint(t, s);
    return (l.style.pointerEvents = "auto"), { elementBelow: n, button: n?.closest("button") ?? null };
};
var sc = s(929955);
let su = (e) => {
        let { bannerStatic: t, bannerAnimated: s, bannerRive: l, isResponsive: n = !1, eventTargetRef: a } = e,
            r = (0, O.bG)([Y.A], () => Y.A.useReducedMotion),
            i = (0, O.bG)([eI.A], () => eI.A.isFocused()),
            o = null != s && !r && i;
        return null != l
            ? (0, c.jsx)(ej._, { src: l, fit: "fit-width", eventTargetRef: a })
            : o
              ? (0, c.jsx)(eb.A, { className: g()({ [sc.no]: n }, sc.BW, sc.ud), src: s, autoPlay: !0, loop: !0 })
              : (0, c.jsx)("div", {
                    className: g()({ [sc.no]: n }, sc.BW, sc._e),
                    style: { backgroundImage: `url(${t})` },
                });
    },
    sd = (e) => (0, c.jsx)("div", { className: tK.hm, children: (0, c.jsx)(sm, { ...e }) }),
    sg = (e) => (0, c.jsx)(ss.A, { gap: "xl", children: (0, c.jsx)(sm, { ...e }) }),
    sm = (e) => {
        let { isLoading: t, products: s, tab: l, totalCards: n } = e,
            a = (0, eh.W)("HeroBlockCards");
        if (t) return (0, c.jsx)(c.Fragment, { children: [...Array(n ?? 4)].map((e, t) => (0, c.jsx)(eB, {}, t)) });
        let r = null != n ? s.slice(0, n) : s;
        return (0, c.jsx)(eF.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: r.map((e, t) => {
                let s = b.A.getCategoryForProduct(e.skuId);
                return null == e || null == s
                    ? null
                    : (0, c.jsx)(
                          j.R9,
                          {
                              newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                              children: (0, c.jsx)(
                                  eH.A,
                                  {
                                      skuId: e?.skuId,
                                      prioritizedCurrency: l === R.G2.ORBS ? eF.Hi.ORBS : a ? eF.Hi.FIAT : void 0,
                                  },
                                  e.skuId,
                              ),
                          },
                          e.skuId,
                      );
            }),
        });
    },
    sh = (e) => {
        let t,
            s,
            { heroBlockRecord: l, layout: n, tab: a, isBlockLoading: r = !1 } = e,
            { products: i } =
                ((t = t9()),
                (s = u.useMemo(() => (r ? [] : t(l.rankedSkuIds)), [r, t, l.rankedSkuIds])),
                { products: eA(ef()(s)) }),
            o = u.useMemo(
                () =>
                    !r &&
                    0 !== l.rankedSkuIds.length &&
                    !(i.length > 0) &&
                    l.rankedSkuIds.every((e) => b.A.getProduct(e)?.variantGroupStoreListingId != null),
                [r, l.rankedSkuIds, i.length],
            ),
            d = r || o;
        switch (n) {
            case "feed":
                return (0, c.jsx)(sd, { heroBlockRecord: l, isLoading: d, products: i, tab: a });
            case "hscroll":
                return (0, c.jsx)(sg, { heroBlockRecord: l, isLoading: d, products: i, tab: a });
        }
    },
    sE = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: tb.g.HERO,
        categoryStoreListingId: "",
    },
    sx = (e) => {
        let {
                isLoading: t,
                handleTransition: s,
                category: l,
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
            m = (0, eZ.yB)("HeroBlock"),
            h = (0, O.bG)([v.default], () => v.default.getCurrentUser()),
            E = (0, j.uM)(),
            { analyticsLocations: x } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_HERO),
            p = u.useMemo(
                () =>
                    null != n
                        ? n
                        : null == l
                          ? sE
                          : {
                                rankedSkuIds: l.heroRanking ?? [],
                                name: l.name,
                                unpublishedAt: l.unpublishedAt,
                                categorySkuId: l.skuId,
                                summary: l.summary,
                                type: tb.g.HERO,
                                categoryStoreListingId: l.storeListingId,
                                bannerDisplayConfig: l.heroBannerDisplayConfig,
                                logoDisplayConfig: l.heroLogoDisplayConfig,
                                heroLogoUrl: l.heroLogoUrl,
                                heroBannerUrl: l.heroBannerUrl,
                                heroBannerAnimatedUrl: l.heroBannerAnimatedUrl,
                            },
                [n, l],
            ),
            {
                bannerDisplayConfig: C,
                logoDisplayConfig: S,
                heroLogo: _,
                heroBannerStatic: A,
                heroBannerAnimated: L,
                heroBannerRive: b,
            } = (0, eN.Kk)(p),
            I = C?.responsive ?? !1,
            k = C?.backgroundStyle,
            T = null != b,
            M = a === R.G2.ORBS,
            P = null != l && l.isOrbsExclusive,
            D = M ? w.intl.string(w.t["1CdL8d"]) : w.intl.string(w.t.xYKa1T),
            H = () => {
                M
                    ? ((0, si.Y)({
                          pageType: B.liQ.SHOP_ORBS_TAB,
                          sectionType: B.JJy.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: B.ZSU.CTA_TO_QUEST_HOME,
                      }),
                      (0, sr.navigateToQuestHome)({ fromContent: sa.u.ORBS_SHOP_HERO_CTA }))
                    : (s({
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
        return null != h && (t || p !== sE)
            ? (0, c.jsx)(f.f5, {
                  value: x,
                  children: (0, c.jsxs)("div", {
                      ref: o,
                      className: tK.os,
                      children: [
                          T
                              ? ((e) => {
                                    let { isCustomCursorEnabled: t, className: s, riveEventTargetRef: l } = e,
                                        n = (e) => {
                                            let { button: s } = so(e),
                                                l = e.currentTarget;
                                            t
                                                ? (l.style.cursor =
                                                      null != s
                                                          ? "var(--custom-cursor-pointer)"
                                                          : "var(--custom-cursor)")
                                                : (l.style.cursor = null != s ? "pointer" : "default");
                                        };
                                    return (0, c.jsx)("div", {
                                        ref: l,
                                        className: s,
                                        onMouseMove: n,
                                        onMouseDown: (e) => {
                                            let { button: t } = so(e);
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
                                  (0, c.jsx)(su, {
                                      bannerStatic: A,
                                      bannerAnimated: L,
                                      bannerRive: b,
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
                                  (0, c.jsx)(sh, {
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
var sp = s(349288),
    sC = s(537947);
let sf = (e) => {
    let { immersiveBannerBlock: t, onVisibilityChange: s } = e,
        l = (0, eg.K)(
            (e) => {
                s?.(e);
            },
            0.33,
            null != s,
        ),
        { bannerUrl: n, bannerAnimatedUrl: a } = (0, eN.qY)(t),
        r = null != t.textColor ? { color: t.textColor } : void 0,
        i = null != t.body && "" !== t.body,
        o = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, c.jsxs)("div", {
        ref: l,
        className: sC.BX,
        children: [
            (0, c.jsx)("div", {
                className: sC.vK,
                children: null != n && (0, c.jsx)(su, { bannerStatic: n, bannerAnimated: a }),
            }),
            (0, c.jsx)("div", {
                className: sC.HQ,
                children: (0, c.jsxs)("div", {
                    className: sC.Yn,
                    children: [
                        null != t.endTime ? (0, c.jsx)(tF.e, { endDate: t.endTime, size: "lg" }) : null,
                        (0, c.jsx)(eu.D, {
                            variant: "heading-xxl/bold",
                            className: sC.DD,
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
                                          (0, c.jsx)(sp.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: sC.CU,
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
var sS = s(189213),
    s_ = s(290136),
    sA = s(478016),
    sL = s(825484),
    sv = s(713517),
    sj = s(914410),
    sb = s(859040),
    sI = s(61750);
function sO(e, t) {
    let s = u.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        l = (0, O.bG)([q.A], () => q.A.getPurchases(s));
    return {
        readyToClaim: u.useMemo(() => l.length === s.length, [l, s]),
        collectibleProductSkuIds: s,
        collectedSkuIds: l,
    };
}
var sN = s(498924);
let sy = u.memo(function (e) {
        let { category: t, rewardSkuId: s } = e,
            { handleCardVisibilityChange: l } = (0, tW.Z)(s),
            n = u.useRef(null),
            { isHoveringOrFocusing: a } = (0, sv.A)(n),
            { readyToClaim: r, collectibleProductSkuIds: i, collectedSkuIds: o } = sO(t, s),
            d = (0, O.bG)([q.A], () => q.A.isClaiming === s);
        return (0, c.jsx)(tz.L, {
            onChange: l,
            threshold: 0,
            innerRef: n,
            children: (0, c.jsx)("div", {
                ref: n,
                className: g()(eT.ty, sN.Q3, { [eT.yo]: a }),
                "aria-label": w.intl.formatToPlainString(w.t.Ez6aHE, { category: t.name }),
                children: (0, c.jsxs)("div", {
                    className: eT.qt,
                    children: [
                        (0, c.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: sN.L8,
                        }),
                        (0, c.jsx)("div", {
                            className: eT.N1,
                            children: (0, c.jsx)(tV.Lp, {
                                text: w.intl.string(w.t.rykAJ9),
                                disableColor: !0,
                                className: sN.HZ,
                            }),
                        }),
                        (0, c.jsxs)("div", {
                            className: eT.xQ,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: sN.xE,
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: sN.cs,
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
                                                        className: sN.ZB,
                                                        children: (0, c.jsx)(s_.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)("div", {
                                            className: eT.oh,
                                            "aria-hidden": !0,
                                            children: (0, c.jsxs)("div", {
                                                className: sN.L$,
                                                children: [
                                                    (0, c.jsx)(sj.Ay, {
                                                        variant: sj.qP.BLUE,
                                                        progress: o.length,
                                                        maximum: i.length,
                                                    }),
                                                    (0, c.jsxs)("div", {
                                                        className: g()(sN.__, { [sN.gF]: r }),
                                                        children: [
                                                            r
                                                                ? (0, c.jsx)(sA.U, {
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
                                    children: (0, c.jsx)(sL.e, {
                                        wrap: !1,
                                        className: eT.Ld,
                                        fullWidth: !0,
                                        children: (0, c.jsx)(et.$, {
                                            variant: "primary",
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    r &&
                                                        (0, sb.BX)(t.skuId, s)
                                                            .then(() => {
                                                                let e = b.A.getProduct(s);
                                                                null != e &&
                                                                    (0, sI.A)({
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
                                                                        (0, c.jsx)(sS.Modal, {
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
    sk = (e) => {
        let t,
            s,
            { isBlockLoading: l = !1, heroBlock: n, tab: a } = e,
            r = (0, eh.W)("RewardHeroBlockCards"),
            i = u.useMemo(() => b.A.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]),
            o = (0, O.bG)([q.A], () => q.A.getPurchase(n.rewardSkuId)),
            { products: d } =
                ((t = t9()),
                (s = u.useMemo(
                    () => (l ? [] : t(n.rankedSkuIds).filter((e) => e.skuId !== n.rewardSkuId || null != o)),
                    [l, t, n.rankedSkuIds, o, n.rewardSkuId],
                )),
                { products: eA(ef()(s)) }),
            g = u.useMemo(
                () =>
                    !l &&
                    0 !== n.rankedSkuIds.length &&
                    !(d.length > 0) &&
                    n.rankedSkuIds.every((e) => b.A.getProduct(e)?.variantGroupStoreListingId != null),
                [l, n.rankedSkuIds, d.length],
            ),
            m = l || g,
            { readyToClaim: h } = sO(i, n.rewardSkuId),
            E = null == o && null != n.rewardSkuId && null != i;
        return (0, c.jsx)(ss.A, {
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
                                  j.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, c.jsx)(sy, { category: i, rewardSkuId: n.rewardSkuId }),
                                  },
                                  n.rewardSkuId,
                              ),
                          d.map((e, t) => {
                              let s = b.A.getCategoryForProduct(e.skuId);
                              return null == e || null == s
                                  ? null
                                  : (0, c.jsx)(
                                        j.R9,
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
let sT = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: tb.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    sR = (e) => {
        let { isLoading: t = !1, heroBlock: s, tab: l, onVisibilityChange: n } = e,
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
            } = (0, eN.Kk)(s),
            E = o?.responsive ?? !1,
            x = o?.backgroundStyle;
        return null != r && (t || s !== sT)
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
                                  null != m && (0, c.jsx)(su, { bannerStatic: m, bannerAnimated: h, isResponsive: E }),
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
                                                                alt: s.name,
                                                                style: u?.toDesktopStyles(),
                                                            }),
                                                        null != s.title &&
                                                            (0, c.jsx)(eu.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: tK.DD,
                                                                color: "text-strong",
                                                                children: s.title,
                                                            }),
                                                        "" !== s.summary &&
                                                            (0, c.jsx)(ee.E, {
                                                                variant: "text-md/normal",
                                                                className: tK.Tm,
                                                                style:
                                                                    null != s.bannerTextColor
                                                                        ? { color: s.bannerTextColor }
                                                                        : void 0,
                                                                children: s.summary,
                                                            }),
                                                    ],
                                                }),
                                            }),
                                  }),
                                  (0, c.jsx)(sk, { isBlockLoading: t, heroBlock: s, tab: l }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    },
    sB = (e) => {
        let { shelf: t, handleTransition: s, tab: l } = e,
            n = (0, O.bG)([v.default], () => v.default.getCurrentUser()),
            a = (0, eh.W)("ShelfBlock"),
            r = (0, O.bG)([b.A], () => b.A.getCategory(t.categorySkuId)),
            i = t9(),
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
                                          s({
                                              sourceButton: "shelf block see all",
                                              categorySkuId: t.categorySkuId,
                                              isInternalShopDeeplink: !0,
                                              isOrbsExclusive: r?.isOrbsExclusive && l !== R.G2.ORBS,
                                          });
                                      },
                                  }),
                              ],
                          }),
                          (0, c.jsx)(ss.A, {
                              gap: "xl",
                              children: (0, c.jsx)(c.Fragment, {
                                  children: o.map((e, s) => {
                                      if (null == b.A.getCategoryForProduct(e.skuId) || null == e) return null;
                                      let n = e.skuId;
                                      return (0, c.jsx)(
                                          j.R9,
                                          {
                                              newValue: { tilePosition: s, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, c.jsx)(
                                                  eH.A,
                                                  {
                                                      skuId: n,
                                                      prioritizedCurrency:
                                                          l === R.G2.ORBS ? eF.Hi.ORBS : a ? eF.Hi.FIAT : void 0,
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
var sM = s(43990),
    sP = s(815021),
    sD = s(509434),
    sH = s(871123),
    sF = s(733391),
    sw = s(439303),
    sG = s(832163),
    sU = s(44724),
    sz = s(317560),
    sV = s(467884),
    sW = s(530868),
    sK = s(67480),
    sY = s(371794),
    s$ = s(74564);
let sZ = (e) => {
        let t,
            s,
            l,
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
            { guildId: p } = (0, sH.nG)(i);
        u.useEffect(() => {
            null != p && (0, sF.Rw)(p);
        }, [p]);
        let C = (0, O.bG)([sG.A], () => {
                let e = sG.A.getStorefrontMetadata(i);
                return e?.logoAssetId != null ? (0, sY.YE)(i, e.logoAssetId, 256) : void 0;
            }, [i]),
            S =
                ((t = u.useRef([])),
                u.useEffect(() => {
                    if (null != p) for (let e of a) (0, sF.qf)(p, e);
                }, [a, p]),
                (s = (0, O.bG)(
                    [sK.A],
                    () => !a.some((e) => sK.A.isFetching(e)) && a.some((e) => sK.A.didFetchingSkuFail(e)),
                    [a],
                )),
                u.useEffect(() => {
                    s && null != p && (0, sF.Rw)(p);
                }, [s, p]),
                (l = (0, O.yK)([sK.A, sG.A], () => {
                    if (a.some((e) => sK.A.isFetching(e))) return t.current;
                    let e = a.filter((e) => null != sK.A.get(e));
                    if (e.length >= a.length) return a;
                    if (null == p) return e;
                    let s = sG.A.getStorefrontData(p);
                    if (null == s || "loading" === s.state) return e;
                    let l = new Set(a);
                    return [
                        ...e,
                        ...(null != s.storefront
                            ? (0, sH.jd)(s.storefront).filter((e) => !l.has(e) && null != sK.A.get(e))
                            : []),
                    ].slice(0, a.length);
                }, [a, p])),
                u.useEffect(() => {
                    l.length > 0 && (t.current = l);
                }, [l]),
                l);
        (0, sW.j)({ skuIds: S, location: "GamePromotionBanner" });
        let _ = (0, j.uM)(),
            { analyticsLocations: A } = (0, f.Ay)(),
            L = u.useRef(null),
            v = u.useRef(!1),
            b = u.useRef(null),
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
                null != p && (0, sU.X)({ guildId: p });
            }, [p]),
            T = u.useCallback(() => {
                null != p && (N("go_to_game_shop"), (0, sU.default)({ guildId: p }));
            }, [N, p]),
            R = u.useCallback(
                (e, t) => {
                    let { skuId: s, applicationId: l } = t;
                    N("card_click", s),
                        (0, sz.R)({ skuId: s, applicationId: l, isStorefront: !1, analyticsLocations: A });
                },
                [N, A],
            ),
            M = u.useCallback(() => {
                N("dismiss"), n();
            }, [N, n]),
            P = u.useCallback(
                (e) => {
                    !v.current &&
                        (e && null === b.current
                            ? (b.current = setTimeout(() => {
                                  (v.current = !0),
                                      (b.current = null),
                                      y.default.track(B.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                          collectibles_shop_session_id: _?.sessionId,
                                          page_type: r,
                                          page_category: _?.pageCategory,
                                          page_section: _?.pageSection,
                                          type: E,
                                      });
                              }, 1e3))
                            : e || null === b.current || (clearTimeout(b.current), (b.current = null)));
                },
                [_?.sessionId, _?.pageCategory, _?.pageSection, r, E],
            );
        return (u.useEffect(
            () => () => {
                null !== b.current && (clearTimeout(b.current), (b.current = null));
            },
            [],
        ),
        0 === S.length)
            ? null
            : (0, c.jsx)(sM.N, {
                  theme: B.NJ8.DARKER,
                  children: (e) =>
                      (0, c.jsx)(tz.L, {
                          innerRef: L,
                          onChange: P,
                          threshold: 0,
                          children: (0, c.jsx)("div", {
                              ref: L,
                              className: g()(s$.YB, e),
                              children: (0, c.jsxs)("div", {
                                  className: s$.kL,
                                  children: [
                                      null != x && (0, c.jsx)("div", { className: s$.D7, style: { background: x } }),
                                      (0, c.jsx)("div", {
                                          className: s$.b,
                                          children: (0, c.jsx)(sP.J, { size: "sm", variant: "icon-only", onClick: M }),
                                      }),
                                      null != C && (0, c.jsx)("img", { className: s$.wm, src: C, alt: "" }),
                                      (0, c.jsx)("div", {
                                          className: s$.xf,
                                          children: (0, c.jsxs)("div", {
                                              className: s$.B5,
                                              children: [
                                                  (0, c.jsx)(eu.D, {
                                                      variant: "heading-lg/semibold",
                                                      color: "always-white",
                                                      children: o,
                                                  }),
                                                  (0, c.jsx)(et.$, {
                                                      variant: "overlay-primary",
                                                      size: "sm",
                                                      icon: sD.I,
                                                      iconPosition: "end",
                                                      text: d,
                                                      onMouseDown: k,
                                                      onClick: T,
                                                  }),
                                              ],
                                          }),
                                      }),
                                      (0, c.jsx)(sw.E9, {
                                          newValue: I,
                                          children: (0, c.jsx)("div", {
                                              className: s$.$2,
                                              children: S.map((e, t) =>
                                                  (0, c.jsx)(sV.A, { skuId: e, positionInSection: t, onClick: R }, e),
                                              ),
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                      }),
              });
    },
    sq = (e) => {
        let {
            onDismiss: t,
            applicationId: s,
            headerText: l,
            gradientColors: n,
            gradientAngle: a,
            skuIds: r,
            tab: i,
        } = e;
        return (0, c.jsx)(sZ, {
            onDismiss: t,
            skuIds: r,
            tab: i,
            applicationId: s,
            headerText: l,
            shopButtonText: w.intl.string(w.t.apFNLU),
            analyticsSection: "slayer-storefront-promotional-banner",
            analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
            analyticsImpressionType: "social_layer_storefront_promotional_banner",
            backgroundGradient: `linear-gradient(${a}deg, ${n.join(", ")})`,
        });
    };
var sJ = s(770178),
    sX = s(929283),
    sQ = s(275483);
let s0 = [
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
    s1 = (e) => {
        let { config: t, baseLeft: s, transitioning: l } = e,
            n = window.innerHeight,
            a = b.A.getProduct(t.skuId),
            r = a?.items[0],
            i = a?.type,
            o = s + t.horizontalJitter;
        return (0, c.jsx)("div", {
            className: sQ.LY,
            style: {
                top: l ? -n - 384 : t.top,
                left: l ? o + t.transitionOffsetLeft : o,
                transform: `rotate(${t.rotation}deg)`,
                height: 160,
                width: 160,
                transitionDelay: t.transitionDelay,
                transitionDuration: t.transitionDuration,
            },
            children: null != r && i === eS.R.AVATAR_DECORATION && (0, c.jsx)(sX.i, { item: r }),
        });
    },
    s2 = (e) => {
        let { peaking: t, transitioning: s, parentWidth: l } = e,
            [n, a] = u.useState(!1),
            [r, i] = u.useState([]),
            [o] = u.useState(() =>
                [...s0]
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
                if (null != l && l > 0) {
                    let e = Math.max(1, Math.floor(l / 130)),
                        t = l / e;
                    i(Array.from({ length: e }, (e, s) => ({ config: o[s % o.length], baseLeft: s * t })));
                }
            }, [l, o]),
            u.useEffect(() => {
                s && setTimeout(() => a(!0), R.H1);
            }, [s]),
            (0, c.jsx)("div", {
                className: g()(sQ.rA, { [sQ.Kb]: t, [sQ.pp]: n }),
                children: r.map((e, t) => {
                    let { config: l, baseLeft: n } = e;
                    return (0, c.jsx)(s1, { config: l, baseLeft: n, transitioning: s }, l.skuId + t);
                }),
            })
        );
    },
    s4 = (e) => {
        let { peaking: t, transitioning: s } = e,
            l = u.useRef(null),
            [n, a] = u.useState(0),
            r = u.useCallback(() => {
                null != l.current && a(l.current.offsetWidth);
            }, []);
        return (
            (0, sJ.g)(l, r),
            (0, c.jsx)("div", {
                ref: l,
                className: sQ.eL,
                children: (0, c.jsx)(s2, { peaking: t, transitioning: s, parentWidth: n }),
            })
        );
    };
var s5 = s(976860),
    s9 = s(49999);
let s3 = (e) => {
        let { wideBannerBlock: t, tab: s } = e,
            l = b.A.getCategoryByStoreListingId(t.categoryStoreListingId),
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
        let m = l?.skuId ?? "",
            { handleCardVisibilityChange: h } = (0, tW.Z)(m, "home", "marketing wide banner"),
            E = (0, j.uM)(),
            { bannerURL: x } = (0, eN.w$)(t),
            p = s === R.G2.ORBS,
            C = null != t.ctaRoute && "" !== t.ctaRoute,
            f = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || C),
            S = null != t.logoURL && "" !== t.logoURL,
            _ = u.useCallback(() => {
                if ((d(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, tO.$l)(tI.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: s9.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            A = u.useCallback(
                (e) => {
                    y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: E?.sessionId,
                        sku_id: m,
                        page_type: s,
                        page_section: E?.pageSection,
                        page_category: E?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(E?.tilePosition),
                        cta_name: e,
                    });
                },
                [E, m, s],
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
                                    s = parseInt(t[2], 10);
                                (0, sU.default)({ guildId: e, pageIndex: s });
                            }
                        } else (0, s5.pX)(e);
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
                            children: (0, c.jsx)(sP.J, {
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
                                              helpdeskArticle: t6.A.getArticleURL(B.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
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
                                            }),
                                            S && (0, c.jsx)("img", { src: t.logoURL, alt: "", className: tK.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, c.jsx)(sM.N, {
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
    s7 = (e) => {
        let { handleTransition: t, numVisibleItems: s, isFetchingCategories: l, tab: n } = e,
            { noCache: a, includeUnpublished: r } = (0, eG.A)(),
            [i, o] = u.useState(!1),
            d = (0, j.uM)(),
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
            ? (0, c.jsx)(tj.h, { onRetry: C, errorOrigin: tj.A.SHOP_PAGE, errorMessage: E.message })
            : h || 0 === x.length
              ? (0, c.jsxs)("div", {
                    className: g()(tK.g4, tK.Of),
                    children: [
                        (0, c.jsx)(sx, { isLoading: h, handleTransition: t, tab: n }),
                        (0, c.jsx)(tq, { isLoading: h, handleTransition: t, categories: [] }),
                        (0, c.jsx)(st, {
                            isLoading: h,
                            title: n === R.G2.ORBS ? w.intl.string(w.t.dFgeuZ) : w.intl.string(w.t.NSv5KV),
                            numVisibleItems: s,
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
                                case tb.g.HERO:
                                    u = (0, c.jsx)(
                                        sx,
                                        { isLoading: h, handleTransition: t, heroBlock: e, tab: n, badge: f },
                                        r,
                                    );
                                    break;
                                case tb.g.FEATURED:
                                    u = (0, c.jsx)(
                                        tq,
                                        { isLoading: h, handleTransition: t, featuredBlockRecord: e },
                                        r,
                                    );
                                    break;
                                case tb.g.FEED:
                                    let m = e.sortedSkuIds;
                                    u = (0, c.jsx)(
                                        st,
                                        {
                                            title:
                                                n === R.G2.ORBS ? w.intl.string(w.t.dFgeuZ) : w.intl.string(w.t.NSv5KV),
                                            isLoading: l,
                                            numVisibleItems: s,
                                            sortedSkuIds: m,
                                            buttonContainerClassName: a?.type === tb.g.IMMERSIVE_BANNER ? tK.w : void 0,
                                            prioritizeUserDiscounts: n === R.G2.HOME,
                                            tab: n,
                                            orbsSupportedOnly: n === R.G2.ORBS,
                                        },
                                        r,
                                    );
                                    break;
                                case tb.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: s } = (0, tO.En)(tI.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (s) return null;
                                    }
                                    u = (0, c.jsx)(s3, { wideBannerBlock: e, tab: n }, r);
                                    break;
                                case tb.g.FRAMES_BANNER:
                                    u = (0, c.jsx)(
                                        s3,
                                        {
                                            wideBannerBlock: tR.y.fromServer({
                                                type: tb.g.WIDE_BANNER,
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
                                case tb.g.FRAMES_PRODUCT_SHELF:
                                    u = (0, c.jsx)(sn, { block: e, handleTransition: t, tab: n }, r);
                                    break;
                                case tb.g.SHELF:
                                    u = (0, c.jsx)(sB, { handleTransition: t, shelf: e, tab: n }, r);
                                    break;
                                case tb.g.COUNTDOWN_TIMER:
                                    (u = (0, c.jsx)(tG, { countdownTimerBlock: e, isVisible: i }, r)), (d = !0);
                                    break;
                                case tb.g.IMMERSIVE_BANNER:
                                    u = (0, c.jsx)(
                                        sf,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => o(!e) },
                                        r,
                                    );
                                    break;
                                case tb.g.REWARD_HERO:
                                    u = (0, c.jsx)(sR, { isLoading: h, handleTransition: t, heroBlock: e, tab: n }, r);
                                    break;
                                case tb.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER: {
                                    let { isDismissed: t } = (0, tO.En)(
                                        tI.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
                                    );
                                    if (t) return null;
                                    return (0, c.jsx)(
                                        ty,
                                        {
                                            blockType: e.type,
                                            children: (0, c.jsx)(sq, {
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
    s6 = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            n = u.useRef(null),
            { handleScroll: a } = ea(n, s),
            r = (0, ew.U)(),
            i = (0, j.uM)(),
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
                                (0, c.jsx)(s7, {
                                    handleTransition: t,
                                    numVisibleItems: o,
                                    isFetchingCategories: r,
                                    tab: s,
                                }),
                                s !== R.G2.CATALOG &&
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
                                                            page_type: s,
                                                            page_category: s === R.G2.HOME ? void 0 : i?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, c.jsx)(s4, { peaking: g, transitioning: l === R.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var s8 = s(154323),
    le = s(295811);
let lt = { "Any:personalization-header": se },
    ls = { [eo.b.SHOP_HOME]: lt },
    ll = { "1465939725649973269": lt, "1478495181551440044": lt },
    ln = () =>
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
    la = { prioritizedCurrency: eF.Hi.ORBS },
    lr = (e) => {
        let { tab: t } = e,
            [s, l, n] = (0, O.yK)([T.A], () => [T.A.getLayout(t), T.A.isFetchingLayout(t), T.A.getLayoutFetchError(t)]),
            a = (0, O.bG)([s8.A], () => s8.A.get("shop_include_unpublished")),
            r = (0, O.bG)([b.A], () => b.A.skipNumCategories),
            i = u.useMemo(() => {
                let e = {};
                return !0 === a && (e.include_unpublished = !0), null != r && r > 0 && (e.skip_num_categories = r), e;
            }, [a, r]),
            o = null == s && !l && n?.status !== 404 && n?.status !== 429;
        if (
            (u.useEffect(() => {
                o && (0, sb.T2)({ tab: t });
            }, [o, t]),
            null == s)
        )
            return t !== K.HOME || o || l
                ? null
                : (0, c.jsx)(ei.Z_, {
                      tenantId: B.FYj,
                      templateId: eo.b.SHOP_HOME,
                      requestParams: i,
                      overrides: ls[eo.b.SHOP_HOME],
                  });
        let d = (0, c.jsx)(ei.Qs, { tenantId: B.FYj, layoutId: s, overrides: ll[s] });
        return (0, c.jsxs)(c.Fragment, {
            children: [
                t === K.ORBS && (0, c.jsx)(ln, {}),
                t === K.ORBS ? (0, c.jsx)(eF.v3.Provider, { value: la, children: d }) : d,
            ],
        });
    },
    li = (e) => {
        let { url: t } = e,
            [s, l] = u.useState(null);
        return (u.useEffect(() => {
            (async () => {
                try {
                    let e = await fetch(t),
                        s = await e.json();
                    l(s);
                } catch (e) {
                    l(null);
                }
            })();
        }, [t]),
        null == s)
            ? null
            : (0, c.jsx)(ei.Ay, { layout: s });
    },
    lo = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            n = (0, j.uM)(),
            a = (0, O.bG)([le.A], () => le.A.getShopLayoutUrlOverride()),
            r = u.useRef(null),
            { handleScroll: i } = ea(r, s),
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
                                null != a && "" !== a ? (0, c.jsx)(li, { url: a }) : (0, c.jsx)(lr, { tab: s }),
                                s !== K.CATALOG &&
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
                                                            page_type: s,
                                                            page_category: s === K.HOME ? void 0 : n?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, c.jsx)(s4, { peaking: m, transitioning: l === R.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var lc = s(256067);
let lu = () =>
        (0, c.jsxs)("div", {
            className: lc.z,
            children: [
                (0, c.jsx)("img", {
                    className: lc.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: w.intl.string(w.t["p8+qtU"]),
                }),
                (0, c.jsx)(eu.D, { variant: "heading-xl/semibold", children: w.intl.string(w.t["p8+qtU"]) }),
                (0, c.jsx)(ee.E, { variant: "text-md/medium", children: w.intl.string(w.t.UEiyvs) }),
            ],
        }),
    ld = [R.G2.HOME, R.G2.ORBS];
function lg(e) {
    let {
            tab: t,
            categories: s,
            transitionToTab: l,
            transitionState: n,
            updateAnalyticsState: a,
            refreshCategories: r,
        } = e,
        i = lm();
    lh(i);
    let o = (0, O.bG)([Y.A], () => Y.A.useReducedMotion),
        [d, g] = u.useState(void 0),
        [m, h] = u.useState(!0),
        E = u.useMemo(
            () =>
                s.filter(
                    (e) =>
                        !R.MS.some((t) => {
                            let { categorySkuId: s } = t;
                            return s === e.skuId;
                        }),
                ),
            [s],
        ),
        x = (0, $.U)("CollectiblesContent"),
        p = u.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: s,
                    shouldAnimate: n,
                    isInternalShopDeeplink: r,
                    isOrbsExclusive: i,
                } = e;
                a(t, s);
                let c = n && !o,
                    u = i ? R.G2.ORBS : R.G2.CATALOG;
                g(s), h(!r), l(u, c);
            },
            [o, l, a],
        ),
        { searchError: C } = (0, J.S)();
    return null != C
        ? (0, c.jsx)(lu, {})
        : null != i
          ? (0, c.jsx)(tj.h, { onRetry: r, errorMessage: i, errorOrigin: tj.A.SHOP_PAGE })
          : t === R.G2.HOME && x
            ? (0, c.jsx)(lo, { tab: K.HOME, transitionState: n, handleTransition: p })
            : t === R.G2.ORBS && x
              ? (0, c.jsx)(lo, { tab: K.ORBS, transitionState: n, handleTransition: p })
              : ld.includes(t)
                ? (0, c.jsx)(s6, { handleTransition: p, tab: t, transitionState: n })
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
let lm = () =>
        (0, O.bG)([b.A, q.A], () =>
            null != b.A.error
                ? `shop load fetch categories error: ${b.A.error.message}`
                : null != q.A.claimError
                  ? `shop load claim error: ${q.A.claimError.message}`
                  : null != q.A.fetchError
                    ? `shop load fetch purchase error: ${q.A.fetchError.message}`
                    : void 0,
        ),
    lh = (e) => {
        let t = (0, O.bG)([v.default], () => v.default.getCurrentUser()),
            { noCache: s, includeUnpublished: l } = (0, eG.A)();
        u.useEffect(() => {
            null != e &&
                Z.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: s.toString(),
                        includeUnpublished: l.toString(),
                    },
                });
        }, [e, t, s, l]);
    };
var lE = s(956123);
s(323874), s(14289), s(35956);
var lx = s(873263),
    lp = s(766075),
    lC = s(496431),
    lf = s(893489);
let lS = { pink: "pinkCountdown" },
    l_ = u.memo(function (e) {
        let { message: t, onClick: s, countdownEndDate: l, variant: n } = e,
            a = u.useMemo(() => {
                if (null == l) return null;
                let e = l instanceof Date ? l : new Date(l);
                return isNaN(e.getTime()) ? null : e;
            }, [l]),
            r = (0, lC.A)(a ?? 0, 1e3, void 0, null == a);
        if (null != a && Object.values(r).every((e) => 0 === e)) return null;
        let i = null != n ? lf[n] : void 0,
            o = null != n ? lf[lS[n]] : void 0;
        return (0, c.jsx)(e4.D, {
            className: g()(lf.nagBar, i),
            onClick: s,
            "aria-label": w.intl.string(w.t["wjws+K"]),
            children: (0, c.jsxs)("div", {
                className: lf.content,
                children: [
                    (0, c.jsx)(ee.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: lf.message,
                        children: t,
                    }),
                    null != a && (0, c.jsx)(tF.e, { endDate: a, size: "md", className: o, showSeconds: !0 }),
                ],
            }),
        });
    });
var lA = s(870308),
    lL = s(650583);
let lv = (e) => {
        let { children: t, shouldAddEventListener: s, onClose: l } = e,
            n = (0, E.useHasAnyModalOpen)();
        return (
            u.useEffect(() => {
                if (!s || n) return;
                let e = (e) => {
                    e.key === lL.N$.Escape && l();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [s, n, l]),
            t
        );
    },
    lj = function (e) {
        let { tab: t = R.G2.HOME } = e;
        (0, A.P)(_.a), (0, z.g)();
        let s = (0, C.A)((0, m.A)()),
            l = (0, h.bG)([v.default], () => v.default.getCurrentUser());
        (0, L.pE)();
        let n = (0, eZ.yB)("CollectiblesShop"),
            { onClose: a } = (function () {
                let { search: e } = (0, lx.zy)(),
                    t = (0, lx.g)(),
                    s = u.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                    l = null != s ? parseInt(s, 10) : null;
                return {
                    onClose: u.useCallback(() => {
                        if (0 === l) {
                            (0, s5.aX)(), (0, lp.openUserSettings)();
                            return;
                        }
                        (0, s5.EL)() ? (0, s5.aX)() : (0, s5.pX)(B.BVt.APP);
                    }, [l]),
                    source: l,
                    ...t,
                };
            })(),
            { currentTab: r, hasFilters: i } = (0, W.v)(),
            o = u.useMemo(() => (t === R.G2.HOME && null != r && i() ? r : t), [t, r, i]),
            { categories: d, refreshCategories: E } = (0, U.Ay)({ logPerf: !0 }, { sessionId: s, tab: o }),
            N = u.useMemo(() => [...d.values()], [d]),
            [T, K] = u.useState(),
            Y = (0, h.bG)([b.A], () => b.A.getCategory(T)?.name),
            [$, Z] = u.useState();
        (0, eW.XU)(s);
        let q = u.useCallback((e, t) => {
                Z(e), K(t);
            }, []),
            { selectedTab: J, transitionState: X, transitionToTab: Q } = (0, V.o)(o);
        (0, S.HU)({ location: w.intl.string(w.t.pWG4ze) }),
            ((e, t, s, l, n) => {
                let {
                    analyticsLocations: a,
                    analyticsSource: r,
                    currentTabLocation: i,
                    newestAnalyticsLocation: o,
                } = P(t);
                u.useEffect(() => {
                    if (l !== R.Pf.VISIBLE || o !== i) return;
                    let c = t === R.G2.CATALOG ? n : r;
                    y.default.track(B.HAw.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: a,
                        source: c,
                        page_session_id: e,
                        page_type: t === R.G2.CATALOG ? "full" : t,
                        category: t === R.G2.HOME ? void 0 : s,
                    });
                }, [a, e, t, s, i, l, n, r, o]);
            })(s, J, Y, X, $),
            ((e, t) => {
                let { analyticsLocations: s } = P(e);
                u.useEffect(() => {
                    null == t ||
                        k.Ay.canUseCollectibles(t) ||
                        y.default.track(B.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: M.e.COLLECTIBLES_SHOP,
                            location_stack: s,
                        });
                }, [s, t]);
            })(J, l);
        let { dismissShopButtonDC: ee } = (0, lA.A)();
        u.useEffect(() => {
            ee();
        }, [ee]),
            u.useEffect(() => {
                (0, p.I)(B.BVt.COLLECTIBLES_SHOP);
            }, []);
        let et = u.useRef(null),
            es = u.useRef(null);
        (0, x.t)(et),
            u.useEffect(() => {
                es.current?.focus();
            }, []),
            (0, eZ.gB)();
        let { analyticsLocations: el } = P(J),
            en = (function (e, t) {
                let s = (0, O.bG)([H.A], () => H.A.getUserDiscount(M.tU)),
                    l = (0, O.bG)([D.default], () => D.default.locale),
                    n = F.useConfig({ location: t }).enabled;
                if (u.useMemo(() => null != s && n && e !== R.G2.ORBS, [s, n, e])) {
                    let e =
                        null != s && null != s.expiresAt
                            ? new Date(s.expiresAt).toLocaleDateString(l, { day: "numeric", month: "numeric" })
                            : void 0;
                    return { type: 0, countdownEndDate: s?.expiresAt, message: w.intl.format(w.t.RCo9MF, { date: e }) };
                }
            })(J, "collectibles_shop");
        return (0, c.jsx)(f.f5, {
            value: el,
            children: (0, c.jsx)(j.R9, {
                newValue: { sessionId: s, pageCategory: Y, pageSize: R.l5 },
                children: (0, c.jsx)(I.iM, {
                    tab: J,
                    children: (0, c.jsx)(lv, {
                        onClose: a,
                        shouldAddEventListener: !1,
                        children: (0, c.jsxs)("div", {
                            className: g()(eM.bx, { [eZ.jP]: n }),
                            ref: es,
                            tabIndex: -1,
                            children: [
                                (0, c.jsx)(lE.G, { handleTransition: Q, selectedTab: J }),
                                null != en &&
                                    en.type === G.COUNTDOWN &&
                                    (0, c.jsx)(l_, {
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
                                    children: (0, c.jsx)(lg, {
                                        tab: J,
                                        refreshCategories: E,
                                        transitionToTab: Q,
                                        transitionState: X,
                                        categories: N,
                                        updateAnalyticsState: q,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        });
    };
