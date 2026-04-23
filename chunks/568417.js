"use strict";
n.r(t), n.d(t, { default: () => su });
var s,
    l,
    a,
    r,
    i,
    o,
    c = n(627968),
    d = n(64700),
    u = n(503698),
    g = n.n(u),
    h = n(132500),
    _ = n(702841),
    m = n(192308),
    p = n(315710),
    f = n(944791),
    E = n(444927),
    x = n(688810),
    C = n(726249),
    b = n(475073),
    A = n(611924),
    S = n(594832),
    v = n(287809),
    L = n(440938),
    j = n(590180),
    I = n(161918),
    N = n(17928),
    T = n(793574),
    y = n(954571),
    O = n(927578),
    k = n(870216),
    R = n(758836),
    B = n(652215),
    P = n(788868);
let M = (e) => {
    let { analyticsSource: t, analyticsLocations: n } = (0, N.cf)([k.A], () => k.A.getAnalytics()),
        s = ((e) => {
            switch (e) {
                case R.G2.ORBS:
                    return T.A.COLLECTIBLES_SHOP_ORBS_TAB;
                case R.G2.HOME:
                    return T.A.COLLECTIBLES_SHOP_HOME_SCREEN;
                case R.G2.BUNDLES:
                    return T.A.COLLECTIBLES_SHOP_BUNDLES_TAB;
                case R.G2.AVATAR_DECORATIONS:
                    return T.A.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                case R.G2.PROFILE_EFFECTS:
                    return T.A.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                case R.G2.NAMEPLATES:
                    return T.A.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                case R.G2.CATALOG:
                case R.G2.COLLECTION_INDEX:
                case R.G2.LAYOUT:
                    return T.A.COLLECTIBLES_SHOP;
                case R.G2.RIVALS:
                case R.G2.GAME_SHOPS:
                    return T.A.SLAYER_STOREFRONT_SHOP_TAB;
            }
        })(e),
        { analyticsLocations: l, newestAnalyticsLocation: a } = (0, x.Ay)([...n, T.A.COLLECTIBLES_SHOP, s]);
    return { analyticsSource: t, analyticsLocations: l, newestAnalyticsLocation: a, currentTabLocation: s };
};
var D = n(773669),
    w = n(248352);
let H = (0, n(945810).mj)({
    name: "2026-01-valentines-day-drop",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 } },
});
var G = n(985018),
    F = (((s = {})[(s.COUNTDOWN = 0)] = "COUNTDOWN"), s),
    U = n(841702),
    z = n(621653),
    W = n(983545),
    V = n(23161),
    K = (((l = {}).HOME = "home"), (l.CATALOG = "catalog"), (l.ORBS = "orbs"), l),
    $ = n(775602),
    Y = n(287344),
    Z = n(38405),
    J = n(4227),
    q = n(856686),
    X = n(689175),
    Q = n(364522),
    ee = n(834730),
    et = n(821609),
    en = n(783977),
    es = n(59520);
let el = (e, t, n, s) => {
        let { scrollTop: l = 0, scrollOffset: a = 0, scrollHeight: r = 0, scrollWidth: i = 0 } = s;
        if (r > 0) {
            let s = (l + a) / r;
            s > 0 &&
                y.default.track(e, {
                    scroll_visible_percent: s,
                    source: n,
                    page_height: Math.round(r),
                    page_width: Math.round(i),
                    page_session_id: t,
                });
        }
    },
    ea = (e, t) => {
        let { analyticsSource: n } = M(t),
            s = (0, es.I)(el, 5e3, [], { trailing: !0 }),
            l = (0, L.uM)(),
            a = l?.sessionId;
        return {
            handleScroll: d.useCallback(() => {
                if (null != e.current) {
                    let t = e.current.getScrollerNode();
                    null != t &&
                        s(B.HAw.COLLECTIBLES_SHOP_SCROLLED, null != a ? a : "", n, {
                            scrollTop: t.scrollTop,
                            scrollOffset: t.offsetHeight,
                            scrollHeight: t.scrollHeight,
                            scrollWidth: t.scrollWidth,
                        });
                }
            }, [s, n, a, e]),
        };
    };
var er = n(785330),
    ei = n(641150),
    eo = n(534514);
function ec() {
    let { itemTypeFilters: e, searchQuery: t } = (0, V.v)((e) => e),
        { totalCount: n, isFetchingResults: s } = (0, q.S)(),
        l = (0, V.v)((e) => e.hasFilters()),
        a = d.useCallback(() => {
            if (!l) return "";
            if (s) return G.intl.string(G.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return G.intl.format(G.t.KJMJOz, { count: n, search: e });
            }
            return 1 === e.size && e.has(ei.q.AVATAR_DECORATION)
                ? G.intl.format(G.t.s1UzGQ, { count: n })
                : 1 === e.size && e.has(ei.q.NAMEPLATE)
                  ? G.intl.format(G.t.ZWGN9T, { count: n })
                  : 1 === e.size && e.has(ei.q.PROFILE_EFFECT)
                    ? G.intl.format(G.t["v/7apu"], { count: n })
                    : 1 === e.size && e.has(ei.q.BUNDLE)
                      ? G.intl.format(G.t.fZ1rdk, { count: n })
                      : G.intl.format(G.t["/rPvmQ"], { count: n });
        }, [e, n, l, t, s]);
    return (0, c.jsx)(eo.D, { variant: "heading-lg/semibold", children: a() });
}
var ed = n(172218),
    eu = n(932793),
    eg = n(940980),
    eh = n(993408),
    e_ = n(623373),
    em = n(660653),
    ep = n(466459);
let ef = () => {
    let e = (0, _.bG)([v.default], () => v.default.getCurrentUser()),
        t = null != e && O.Ay.canUseCollectibles(e);
    return (0, d.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: n } = (0, ep.o)(J.A, e);
                      if (!(0, eh.aw)(e) || (0, eh.tt)(e) || n) return !0;
                      if (!(0, em.uh)(e)) return !1;
                      if ((0, e_.Ab)(e)) return null != (0, e_.CW)({ product: e, isPremiumUser: t });
                      let s = (0, eh.l8)(t),
                          l = (0, eh.yt)(e, s);
                      if (null == l || 0 === l.amount) return !0;
                      let a = 0;
                      return (
                          null != e.bundledProducts &&
                              (a = e.bundledProducts.reduce((e, t) => {
                                  let n = (0, eh.yt)(t, s);
                                  return e + (n?.amount ?? 0);
                              }, 0)),
                          l.amount < a
                      );
                  }),
        [t],
    );
};
var eE = n(575593);
let ex = (e, t) =>
        e.type === eE.R.BUNDLE && e.items.some((e) => t.includes(e.skuId))
            ? 1
            : (0, e_.B1)(e)
              ? 2 * !!e.variants.every((e) => t.includes(e.skuId))
              : 2 * !!t.includes(e.skuId),
    eC = (e) => {
        let t = (0, _.bG)([J.A], () => J.A.purchases),
            n = (0, d.useMemo)(
                () =>
                    [...t].map((e) => {
                        let [t] = e;
                        return t;
                    }),
                [t],
            );
        return (0, d.useMemo)(() => [...e].sort((e, t) => ex(e, n) - ex(t, n)), [e, n]);
    };
var eb = n(100057),
    eA = n(653887),
    eS = n(607470),
    ev = n(531685),
    eL = n(203312),
    ej = n(212407),
    eI = n(215688);
function eN(e) {
    let { category: t } = e,
        n = (0, _.bG)([$.A], () => $.A.useReducedMotion),
        s = (0, _.bG)([ev.A], () => ev.A.isFocused()),
        { catalogBannerStatic: l, catalogBannerAnimated: a, catalogBannerRive: r } = (0, ej.MV)(t),
        i = d.useRef(null),
        o = null != r;
    return (0, c.jsxs)("div", {
        ref: i,
        className: g()(eI.sW, { [eI.by]: o }),
        children: [
            o
                ? (0, c.jsx)(eA._, {
                      src: r,
                      fit: "cover",
                      alignment: "center-left",
                      style: { width: "100%", height: "100%" },
                      eventTargetRef: i,
                      autoplay: !0,
                  })
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          (0, c.jsx)("img", { className: eI.ze, src: l, alt: t.name }),
                          null != a &&
                              !n &&
                              s &&
                              (0, c.jsx)(eS.A, { src: a, className: eI.tr, autoPlay: !0, loop: !0 }),
                      ],
                  }),
            (0, c.jsx)(eL.A, { category: t, className: eI.v0, daysRemainingText: G.t["8gsP5M"] }),
        ],
    });
}
(0, eh.$b)(90);
var eT = n(496569),
    ey = n(835090);
let eO = (e) => {
    let { skipPulseAnimation: t = !1 } = e;
    return (0, c.jsx)("div", {
        className: g()(eT.ty, ey.SQ, { [ey.aE]: !t }),
        children: (0, c.jsxs)("div", {
            className: g()(eT.qt, ey.yw),
            children: [(0, c.jsx)("div", { className: ey.Jr }), (0, c.jsx)("div", { className: ey.N9 })],
        }),
    });
};
var ek = n(647685),
    eR = n(10);
let eB = () =>
    (0, c.jsx)("div", {
        className: eR.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, c.jsxs)(
                "div",
                {
                    className: ek.vY,
                    children: [
                        (0, c.jsx)("div", { className: g()(eI.sW, eR.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, c.jsx)(eO, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
var eP = n(491438),
    eM = n(561769),
    eD = n(159439),
    ew = n(998694);
function eH(e) {
    let { category: t } = e,
        n = (0, _.bG)([v.default], () => v.default.getCurrentUser()),
        s = eC(t.products),
        l = ef()(s),
        a = (0, eg.W)("CollectiblesCatalogContent");
    return null == n || 0 === l.length
        ? null
        : (0, c.jsx)("div", {
              className: ek.vY,
              children: l.map((e, t) =>
                  (0, c.jsx)(
                      L.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, c.jsx)(
                              eP.A,
                              {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  prioritizedCurrency: a ? eM.Hi.FIAT : void 0,
                              },
                              e.skuId,
                          ),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function eG(e) {
    let { category: t } = e,
        [n, s] = d.useState(!1),
        l = (0, ed.K)((e) => {
            s(e);
        }, 0.15);
    return (0, c.jsxs)("div", {
        className: ek.EF,
        ref: l,
        children: [(0, c.jsx)(eN, { category: t }), (0, c.jsx)(eH, { category: t })],
    });
}
function eF(e) {
    let { categories: t, setCategoryRef: n, currentPage: s, handlePageChange: l, initialCategoryId: a } = e,
        r = (0, L.uM)(),
        i = (0, eD.U)(),
        o = r?.sessionId ?? "",
        { noCache: u, includeUnpublished: g } = (0, ew.A)(),
        h = d.useMemo(
            () =>
                t
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [t],
        ),
        _ = d.useRef(void 0);
    d.useEffect(() => {
        if (null == a || 0 === h.length) {
            _.current = void 0;
            return;
        }
        if (a === _.current) return;
        let e = h.findIndex((e) => e.skuId === a);
        if (-1 === e) return;
        let t = Math.floor(e / R.l5) + 1;
        t !== s && l(t), (_.current = a);
    }, [a, h, l, s]);
    let m = d.useMemo(() => {
        let e = (s - 1) * R.l5;
        return h.slice(e, e + R.l5);
    }, [h, s]);
    return (d.useEffect(() => {
        (0, eb.z)({
            sessionId: o,
            checkpoint: eb.t.SHOP_MOUNTED,
            tab: R.G2.CATALOG,
            unpublishedCategoriesShown: g,
            cacheDisabled: u,
        });
    }, []),
    d.useEffect(() => {
        i ||
            0 === m.length ||
            (0, eb.z)({
                sessionId: o,
                checkpoint: eb.t.SHOP_RENDERED,
                tab: R.G2.CATALOG,
                unpublishedCategoriesShown: g,
                cacheDisabled: u,
            });
    }, [o, g, u, i, m.length]),
    i)
        ? (0, c.jsx)(eB, {})
        : (0, c.jsxs)("div", {
              className: ek.LZ,
              children: [
                  m.map((e, t) =>
                      (0, c.jsx)(
                          "div",
                          {
                              ref: (t) => n(e.skuId, t),
                              children: (0, c.jsx)(L.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, c.jsx)(eG, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, c.jsx)("div", {
                      className: ek.Ej,
                      children: (0, c.jsx)(eu.m, {
                          currentPage: s,
                          totalCount: h.length,
                          pageSize: R.l5,
                          onPageChange: l,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var eU = n(177366),
    ez = n(401864),
    eW = n(124987),
    eV = n(691885),
    eK = n(146919),
    e$ = n(912853);
let eY = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, V.v)(),
        s = (0, L.uM)(),
        l = (0, eK.yB)("CollectiblesSortSelect"),
        a = n(),
        r = d.useMemo(() => R.QB.filter((e) => e.sortType !== eW.$.RELEVANCE || a), [a]),
        i = d.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === eW.$.RECENCY
                ? { label: G.intl.string(G.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === eW.$.PRICE
                  ? n === ez.A.ASC
                      ? { label: G.intl.string(G.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: G.intl.string(G.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === eW.$.RELEVANCE
                    ? { label: G.intl.string(G.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: G.intl.string(G.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        o = d.useCallback(
            (e) =>
                ({
                    recent: { sortType: eW.$.RECENCY, sortDirection: ez.A.DESC },
                    "price-asc": { sortType: eW.$.PRICE, sortDirection: ez.A.ASC },
                    "price-desc": { sortType: eW.$.PRICE, sortDirection: ez.A.DESC },
                    popularity: { sortType: eW.$.POPULARITY, sortDirection: ez.A.DESC },
                    relevance: { sortType: eW.$.RELEVANCE, sortDirection: ez.A.DESC },
                })[e],
            [],
        ),
        u = d.useCallback(
            (e) => {
                let n = i(o(e));
                y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: s?.sessionId,
                    page_section: s?.pageSection,
                    page_category: s?.pageCategory,
                    page_index: s?.pageIndex,
                    page_size: s?.pageSize,
                    cta_name: `sort by ${n.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(o(e));
            },
            [s, i, o, t],
        ),
        h = i(e);
    return (0, c.jsx)("div", {
        className: g()(e$.k, { [eK.jP]: l }),
        children: (0, c.jsx)(eV.l, {
            label: G.intl.string(G.t.uaX705),
            hideLabel: !0,
            options: r.map(i),
            onSelectionChange: u,
            value: h.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var eZ =
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
    eJ =
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
    eq = n(990078),
    eX = n(150934),
    eQ = n(939249),
    e0 = n(947641),
    e1 = n(661531),
    e2 = n(604338),
    e4 = n(785866),
    e5 = n(373846),
    e3 = n(308323),
    e6 = n(608599),
    e8 = n(685761),
    e9 = n(157225),
    e7 = n(413249),
    te = n(510241),
    tt = n(601198),
    tn = n(736653),
    ts = n(270051),
    tl = n(818348),
    ta = n(764915);
function tr() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: n, hasFilters: s } = (0, V.v)(),
        l = s(),
        { enabled: a } = (0, ts.Z)({ location: "Shop" }),
        r = (0, L.uM)(),
        i = d.useCallback(
            (e) => {
                y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: r?.sessionId,
                    page_section: r?.pageSection,
                    page_category: r?.pageCategory,
                    page_index: r?.pageIndex,
                    page_size: r?.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [r],
        );
    return (0, c.jsxs)("div", {
        className: ta.kT,
        children: [
            (0, c.jsxs)("div", {
                className: g()(ta.KZ, ta.YG),
                children: [
                    (0, c.jsx)(ee.E, {
                        variant: "text-md/semibold",
                        className: ta.hr,
                        children: G.intl.string(G.t.Qk6r1a),
                    }),
                    R._6.map((e) => (0, c.jsx)(ti, { filter: e, trackFilterAction: i }, e)),
                    a &&
                        (0, c.jsx)(eX.S, {
                            checked: t,
                            onChange: () => {
                                i(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                            },
                            label: G.intl.string(G.t.AHHHgG),
                        }),
                ],
            }),
            (0, c.jsx)(to, { trackFilterAction: i }),
            (0, c.jsx)(tu, { trackFilterAction: i }),
            l &&
                (0, c.jsx)(et.$, {
                    variant: "secondary",
                    onClick: () => {
                        i("filter reset"), n();
                    },
                    text: G.intl.string(G.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
let ti = (e) => {
        let { filter: t, trackFilterAction: n } = e,
            s = {
                [ei.q.AVATAR_DECORATION]: G.intl.string(G.t.dRZYNE),
                [ei.q.PROFILE_EFFECT]: G.intl.string(G.t["1cNjtx"]),
                [ei.q.NAMEPLATE]: G.intl.string(G.t.V68Fqz),
                [ei.q.BUNDLE]: G.intl.string(G.t.FYFpps),
            },
            { itemTypeFilters: l, onToggleItemType: a } = (0, V.v)();
        return (0, c.jsx)(eX.S, {
            checked: l.has(t),
            onChange: () => {
                let e = s[t]?.toLowerCase() != null ? s[t].toLowerCase() : t;
                n(`filter item type ${e} ${!1 === l.has(t) ? "on" : "off"}`), a(t);
            },
            label: s[t] ?? "",
        });
    },
    to = (e) => {
        let { trackFilterAction: t } = e,
            n = d.useMemo(
                () => [
                    { color: "#9B59B6", label: G.intl.string(G.t.kqUD4P), enum: eZ.PURPLE },
                    { color: "#3498DB", label: G.intl.string(G.t.qQTRae), enum: eZ.BLUE },
                    { color: "#2ECC71", label: G.intl.string(G.t["f/Ylk6"]), enum: eZ.GREEN },
                    { color: "#A0522D", label: G.intl.string(G.t["Sd/BMa"]), enum: eZ.BROWN },
                    { color: "#F1C40F", label: G.intl.string(G.t["0fevYz"]), enum: eZ.YELLOW },
                ],
                [],
            ),
            s = d.useMemo(
                () => [
                    { color: "#E67E22", label: G.intl.string(G.t.ZE7weD), enum: eZ.ORANGE },
                    { color: "#E74C3C", label: G.intl.string(G.t.hKJGOM), enum: eZ.RED },
                    { color: "#EC407A", label: G.intl.string(G.t.HvLEGM), enum: eZ.PINK },
                    { color: "#FFFFFF", label: G.intl.string(G.t["CB+lNO"]), enum: eZ.WHITE },
                    { color: "#262626", label: G.intl.string(G.t["dMey+v"]), enum: eZ.BLACK },
                ],
                [],
            );
        return (0, c.jsxs)("div", {
            className: ta.KZ,
            children: [
                (0, c.jsx)(ee.E, {
                    variant: "text-md/semibold",
                    className: ta.hr,
                    children: G.intl.string(G.t.K1xGoG),
                }),
                (0, c.jsx)(tc, { colors: n, trackFilterAction: t }),
                (0, c.jsx)(tc, { colors: s, trackFilterAction: t }),
            ],
        });
    },
    tc = (e) => {
        let { colors: t, trackFilterAction: n } = e,
            { colorFilters: s, onToggleColor: l } = (0, V.v)();
        return (0, c.jsx)("div", {
            className: ta.OW,
            children: t.map((e) => {
                let { color: t, label: a, enum: r } = e;
                return (0, c.jsx)(
                    td,
                    { color: t, label: a, enum: r, isToggled: s.has(r), onToggleColor: l, trackFilterAction: n },
                    r,
                );
            }),
        });
    },
    td = (e) => {
        let { color: t, label: n, enum: s, isToggled: l, onToggleColor: a, trackFilterAction: r } = e;
        return (0, c.jsx)(
            eq.m,
            {
                text: n,
                asContainer: !0,
                children: (0, c.jsx)(
                    eQ.D,
                    {
                        className: g()(ta.n1, { [ta.lx]: l }),
                        style: { backgroundColor: t },
                        "aria-label": n,
                        onClick: () => {
                            r(`filter color ${n.toLowerCase()} ${!l ? "on" : "off"}`), a(s);
                        },
                        children:
                            l &&
                            (0, c.jsx)("div", {
                                className: ta.oE,
                                children: (0, c.jsx)(e0.r, { size: "xs", color: e1.A.colors.WHITE }),
                            }),
                    },
                    t,
                ),
            },
            n,
        );
    },
    tu = (e) => {
        let { trackFilterAction: t } = e,
            { themeFilters: n, onToggleTheme: s } = (0, V.v)(),
            l = (0, tn.Ay)() === tl.NJ.DARK,
            a = d.useCallback(
                (e) => {
                    if (n.has(e) || l) return "always-white";
                },
                [n, l],
            ),
            r = d.useCallback(
                (e) => (n.has(e) || l ? e1.A.colors.WHITE : e1.A.colors.INTERACTIVE_TEXT_DEFAULT),
                [n, l],
            ),
            i = d.useMemo(
                () => [
                    {
                        name: G.intl.string(G.t.aVBOKh),
                        icon: (0, c.jsx)(e2.E, { size: "xs", color: r(eJ.ANIME) }),
                        enum: eJ.ANIME,
                    },
                    {
                        name: G.intl.string(G.t["3WoZBc"]),
                        icon: (0, c.jsx)(e4._, { size: "xs", color: r(eJ.GAMING) }),
                        enum: eJ.GAMING,
                    },
                    {
                        name: G.intl.string(G.t.yuEmLj),
                        icon: (0, c.jsx)(e5.C, { size: "xs", color: r(eJ.CUTE_COZY) }),
                        enum: eJ.CUTE_COZY,
                    },
                    {
                        name: G.intl.string(G.t.mMvCHo),
                        icon: (0, c.jsx)(e3.L, { size: "xs", color: r(eJ.SCI_FI) }),
                        enum: eJ.SCI_FI,
                    },
                    {
                        name: G.intl.string(G.t.TlhOQC),
                        icon: (0, c.jsx)(e6.L, { size: "xs", color: r(eJ.FOOD_DRINKS) }),
                        enum: eJ.FOOD_DRINKS,
                    },
                    {
                        name: G.intl.string(G.t["4IaUIM"]),
                        icon: (0, c.jsx)(e8.f, { size: "xs", color: r(eJ.FANTASY) }),
                        enum: eJ.FANTASY,
                    },
                    {
                        name: G.intl.string(G.t["w0nSG/"]),
                        icon: (0, c.jsx)(e9.N, { size: "xs", color: r(eJ.ANIMALS_PETS) }),
                        enum: eJ.ANIMALS_PETS,
                    },
                    {
                        name: G.intl.string(G.t.cJng7v),
                        icon: (0, c.jsx)(e7.p, { size: "xs", color: r(eJ.NATURE) }),
                        enum: eJ.NATURE,
                    },
                    {
                        name: G.intl.string(G.t["5mUvyM"]),
                        icon: (0, c.jsx)(te.T, { size: "xs", color: r(eJ.MOVIES_TV_SHOWS) }),
                        enum: eJ.MOVIES_TV_SHOWS,
                    },
                    {
                        name: G.intl.string(G.t.MB9H5Z),
                        icon: (0, c.jsx)(tt.e, { size: "xs", color: r(eJ.DARK_MOODY) }),
                        enum: eJ.DARK_MOODY,
                    },
                ],
                [r],
            );
        return (0, c.jsxs)("div", {
            className: ta.KZ,
            children: [
                (0, c.jsx)(ee.E, {
                    variant: "text-md/semibold",
                    className: ta.hr,
                    children: G.intl.string(G.t.t1Ztrp),
                }),
                (0, c.jsx)("div", {
                    className: ta.Ot,
                    children: i.map((e) => {
                        let { name: l, icon: r, enum: i } = e;
                        return (0, c.jsxs)(
                            eQ.D,
                            {
                                className: g()(ta.w4, { [ta.C7]: n.has(i) }),
                                onClick: () => {
                                    let e = n.has(i);
                                    t(`filter theme ${l.toLowerCase()} ${!e ? "on" : "off"}`), s(i);
                                },
                                children: [
                                    r,
                                    (0, c.jsx)(ee.E, { color: a(i), variant: "text-md/medium", children: l }),
                                ],
                            },
                            l,
                        );
                    }),
                }),
            ],
        });
    };
var tg = n(687971);
function th() {
    return (0, c.jsxs)("div", {
        className: tg.k,
        children: [
            (0, c.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: G.intl.string(G.t.oezC3x),
                className: tg._,
            }),
            (0, c.jsx)(eo.D, { variant: "heading-xl/semibold", children: G.intl.string(G.t.oezC3x) }),
            (0, c.jsx)(ee.E, { variant: "text-md/medium", children: G.intl.string(G.t["Tc/Ndl"]) }),
        ],
    });
}
var t_ = n(528096);
let tm = { flattenProductVariants: !0 };
function tp(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: s } = e,
        l = (0, L.uM)(),
        a = l?.sessionId ?? "",
        { noCache: r, includeUnpublished: i } = (0, ew.A)(),
        o = (0, eg.W)("CollectiblesFilterResults"),
        u = (0, _.bG)([v.default], () => v.default.getCurrentUser()),
        { skus: h, currentPage: m, totalCount: p, isFetchingResults: f } = (0, q.S)(),
        E = (0, _.yK)([j.A], () => j.A.getProductsBySkus(h)),
        x = d.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        C = h?.join("");
    d.useEffect(() => {
        x();
    }, [C, x]);
    let b = ef(),
        A = d.useMemo(() => b(E), [b, E]);
    d.useEffect(() => {
        t ||
            (0, eb.z)({
                sessionId: a,
                checkpoint: eb.t.SHOP_RENDERED,
                tab: s,
                unpublishedCategoriesShown: i,
                cacheDisabled: r,
            });
    }, [a, i, r, t, s]);
    let S = d.useRef(null),
        { setQueryPageSize: I, setQueryPageOffset: N, queryPageSize: T } = (0, V.v)(),
        [O, k] = d.useState(!1),
        R = t || f || null == u;
    d.useEffect(() => {
        R ? k(!1) : A.length > 0 && k(!0);
    }, [R, A.length]);
    let P = T > 0 && !R && 0 === A.length;
    d.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == S.current || I(Math.floor(5 * getComputedStyle(S.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != S.current) return e.observe(S.current), () => e.disconnect();
    }, [I]);
    let M = d.useCallback(
        (e) => {
            y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: l?.sessionId,
                page_section: l?.pageSection,
                page_category: l?.pageCategory,
                page_index: e,
                page_size: T,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                N((e - 1) * T);
        },
        [l, T, N],
    );
    return (0, c.jsxs)(eM.v3.Provider, {
        value: tm,
        children: [
            (0, c.jsxs)("div", {
                className: g()({ [t_.oE]: P }),
                children: [
                    P && (0, c.jsx)(th, {}),
                    (0, c.jsxs)("div", {
                        className: g()(t_.ZE, { [t_.Kp]: O }),
                        ref: S,
                        children: [
                            R && [...Array(T)].map((e, t) => (0, c.jsx)(eO, {}, t)),
                            !R &&
                                A.map((e, t) =>
                                    null == j.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, c.jsx)(
                                              L.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, c.jsx)(
                                                      eP.A,
                                                      {
                                                          skuId: e.skuId,
                                                          hideStaticBundleBackgroundAsset: !0,
                                                          prioritizedCurrency: o ? eM.Hi.FIAT : void 0,
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
            p > T &&
                (0, c.jsx)("div", {
                    className: t_.Ej,
                    children: (0, c.jsx)("div", {
                        children: (0, c.jsx)(eu.m, {
                            currentPage: m,
                            totalCount: p,
                            pageSize: T,
                            onPageChange: M,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var tf = n(462887);
function tE(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: s } = e,
        l = (0, L.uM)(),
        a = l?.sessionId ?? "",
        { noCache: r, includeUnpublished: i } = (0, ew.A)(),
        o = (0, eg.W)("CollectiblesFilterableShop"),
        u = (0, _.bG)([v.default], () => v.default.getCurrentUser()),
        g = (0, _.bG)([j.A], () => j.A.productsWithVariantsAsGroup),
        [h, m] = d.useState(1),
        p = (0, tn.DP)(),
        f = (0, tf.q)(p),
        [E, x, C] = d.useMemo(() => {
            switch (s) {
                case R.G2.AVATAR_DECORATIONS:
                    return [
                        G.intl.string(G.t.dRZYNE),
                        f
                            ? "https://cdn.discordapp.com/assets/content/5f78e4a16442147d8913e9962625423a1aecd5dc6ce90969491e694884e62fa9.png"
                            : "https://cdn.discordapp.com/assets/content/5f9ee4f527aab17a65775370d8805574ca18c6375b3b0b98b96ec1e7acb55c1c.png",
                        eE.R.AVATAR_DECORATION,
                    ];
                case R.G2.PROFILE_EFFECTS:
                    return [
                        G.intl.string(G.t["1cNjtx"]),
                        f
                            ? "https://cdn.discordapp.com/assets/content/3f15126b9ccef449667c07091146a922027c550d11abc8607d98fa10ee724e7e.png"
                            : "https://cdn.discordapp.com/assets/content/100926ee18a28a73bf09b6dfeb3406b2c669808ff8cd820e4af6e93c6a5b184a.png",
                        eE.R.PROFILE_EFFECT,
                    ];
                case R.G2.NAMEPLATES:
                    return [
                        G.intl.string(G.t.V68Fqz),
                        f
                            ? "https://cdn.discordapp.com/assets/content/c4eb73efcbe0d97c5e43ac8d53359fd76f9051372cfe2b7ca84b164d21ba07d8.png"
                            : "https://cdn.discordapp.com/assets/content/f03942e6b99f99660e054f531489b8bf1ccc50d28242e893a8569929eee26fa7.png",
                        eE.R.NAMEPLATE,
                    ];
                case R.G2.BUNDLES:
                    return [
                        G.intl.string(G.t.FYFpps),
                        f
                            ? "https://cdn.discordapp.com/assets/content/f09f0cd1842532e42a1c02a9f757baec79df1440d08f6e233b09e9c61d9a20d6.png"
                            : "https://cdn.discordapp.com/assets/content/dec663d6f1a34d2c384a7c02d97a2ad2526a0cca19cb894ff9681ecf82b9c7b5.png",
                        eE.R.BUNDLE,
                    ];
            }
        }, [s, f]),
        b = ef(),
        A = eC(
            d.useMemo(
                () =>
                    b(
                        g.filter(
                            (e) =>
                                (e.type === C ||
                                    (e.type === eE.R.VARIANTS_GROUP && e.variants?.some((e) => e.type === C) === !0)) &&
                                !R.MS.some((t) => {
                                    let { categorySkuId: n } = t;
                                    return n === e.categorySkuId;
                                }),
                        ),
                    ),
                [g, C, b],
            ),
        );
    return (d.useEffect(() => {
        (0, eb.z)({
            sessionId: a,
            checkpoint: eb.t.SHOP_MOUNTED,
            tab: s,
            unpublishedCategoriesShown: i,
            cacheDisabled: r,
        });
    }, []),
    d.useEffect(() => {
        t ||
            (0, eb.z)({
                sessionId: a,
                checkpoint: eb.t.SHOP_RENDERED,
                tab: s,
                unpublishedCategoriesShown: i,
                cacheDisabled: r,
            });
    }, [a, i, r, t, s]),
    t || null == u)
        ? (0, c.jsx)(eB, {})
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)("div", {
                      style: { backgroundImage: `url(${x})` },
                      className: ek.cI,
                      children: (0, c.jsx)(eo.D, { variant: "heading-xxl/extrabold", children: E }),
                  }),
                  (0, c.jsx)("div", {
                      className: ek.ZE,
                      children: A.slice(40 * (h - 1), 40 * h).map((e, t) =>
                          null == j.A.getCategory(e.categorySkuId)
                              ? null
                              : (0, c.jsx)(
                                    L.R9,
                                    {
                                        newValue: { tilePosition: t },
                                        children: (0, c.jsx)(
                                            eP.A,
                                            { skuId: e.skuId, prioritizedCurrency: o ? eM.Hi.FIAT : void 0 },
                                            e.skuId,
                                        ),
                                    },
                                    e.skuId,
                                ),
                      ),
                  }),
                  A.length > 40 &&
                      (0, c.jsx)("div", {
                          className: ek.Ej,
                          children: (0, c.jsx)("div", {
                              children: (0, c.jsx)(eu.m, {
                                  currentPage: h,
                                  totalCount: A.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: l?.sessionId,
                                          page_section: l?.pageSection,
                                          page_category: l?.pageCategory,
                                          page_index: e,
                                          page_size: 40,
                                          cta_name: `${s} page ${e}`,
                                          page_type: s,
                                      }),
                                          m(e),
                                          n?.current?.scrollToTop({ animate: !0 });
                                  },
                                  disablePaginationGap: !0,
                              }),
                          }),
                      }),
              ],
          });
}
var tx = n(832179);
function tC(e) {
    let { tab: t, categories: n, initialCategoryId: s, showFilterInitially: l = !0, onUnmount: a } = e;
    (0, V.S)();
    let r = d.useRef(null),
        { handleScroll: i } = ea(r, t),
        o = (0, Y.f)("Shop Browse"),
        { setCategoryRef: u, handleScrollToCategory: g } = (0, eU.k0)(r.current),
        [h, _] = d.useState(l),
        [m, p] = d.useState(!1);
    return (
        d.useEffect(() => {
            null != s && g(s);
        }, [s, g]),
        d.useEffect(
            () => () => {
                null != a && a();
            },
            [],
        ),
        d.useEffect(() => {
            let e = () => {
                p(window.innerWidth < 1400);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, c.jsx)("div", {
            className: tx.VM,
            children: (0, c.jsxs)("main", {
                className: tx.MY,
                children: [
                    (0, c.jsx)(X.Gt, {
                        className: tx.OW,
                        ref: r,
                        onScroll: i,
                        children: o
                            ? (0, c.jsx)("div", {
                                  className: tx.en,
                                  children: (0, c.jsx)("div", {
                                      className: tx.pf,
                                      children: (0, c.jsx)(er.Z_, { tenantId: B.FYj, templateId: "back-catalog" }),
                                  }),
                              })
                            : (0, c.jsx)(tb, {
                                  isSmallScreen: m,
                                  filterBarOpen: h,
                                  setFilterBarOpen: _,
                                  tab: t,
                                  scrollerRef: r,
                                  categories: n,
                                  setCategoryRef: u,
                                  initialCategoryId: s,
                              }),
                    }),
                    h && !m && (0, c.jsx)("div", { className: tx.yF }),
                    h && !m && (0, c.jsx)(Q.Ip, { className: tx.kT, children: (0, c.jsx)(tr, {}) }),
                ],
            }),
        })
    );
}
let tb = (e) => {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: s,
            tab: l,
            scrollerRef: a,
            categories: r,
            setCategoryRef: i,
            initialCategoryId: o,
        } = e,
        u = d.useRef(null),
        h = (0, V.v)((e) => e.hasDefaultFilters()),
        _ = (0, L.uM)(),
        { handlePageChange: m, currentPage: p } = ((e) => {
            let [t, n] = d.useState(1);
            return {
                currentPage: t,
                handlePageChange: d.useCallback(
                    (t) => {
                        n(t), e.current?.scrollTo({ to: 0 });
                    },
                    [e, n],
                ),
            };
        })(a),
        f = d.useCallback(
            (e) => {
                y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: _?.sessionId,
                    page_section: _?.pageSection,
                    page_category: _?.pageCategory,
                    page_index: e,
                    page_size: _?.pageSize,
                    cta_name: `catalog page ${e}`,
                    page_type: "catalog",
                }),
                    m(e);
            },
            [_, m],
        ),
        E = d.useRef(null);
    return (
        d.useEffect(() => {
            if (!t || !n) return;
            let e = (e) => {
                let t = e.target;
                null === u.current ||
                    null === E.current ||
                    u.current.contains(t) ||
                    E.current.contains(t) ||
                    (y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: _?.sessionId,
                        page_section: _?.pageSection,
                        page_category: _?.pageCategory,
                        page_index: _?.pageIndex,
                        page_size: _?.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    s(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [t, n, s, _]),
        (0, c.jsx)("div", {
            className: tx.en,
            children: (0, c.jsxs)("div", {
                className: tx.pf,
                children: [
                    (0, c.jsxs)("div", {
                        className: tx.ne,
                        children: [
                            (0, c.jsx)("div", { className: tx.lQ, children: (0, c.jsx)(ec, {}) }),
                            (0, c.jsxs)("div", {
                                className: g()(tx.wR, { [tx.Im]: t }),
                                children: [
                                    (0, c.jsxs)("div", {
                                        className: tx.Ul,
                                        children: [
                                            (0, c.jsx)(ee.E, {
                                                variant: "text-md/semibold",
                                                children: G.intl.string(G.t.uaX705),
                                            }),
                                            (0, c.jsx)(eY, {}),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        ref: E,
                                        children: (0, c.jsx)(et.$, {
                                            onClick: () => {
                                                let e = !n;
                                                y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: _?.sessionId,
                                                    page_section: _?.pageSection,
                                                    page_category: _?.pageCategory,
                                                    page_index: _?.pageIndex,
                                                    page_size: _?.pageSize,
                                                    cta_name: `filter bar ${e ? "show" : "hide"}`,
                                                    page_type: "catalog",
                                                }),
                                                    s(e);
                                            },
                                            variant: "secondary",
                                            text: G.intl.string(n ? G.t.fYtm6f : G.t["TeTYE+"]),
                                            icon: en.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, c.jsx)("div", {
                                    className: tx.Dh,
                                    ref: u,
                                    children: (0, c.jsx)(X.Ch, { className: tx.Qo, children: (0, c.jsx)(tr, {}) }),
                                }),
                        ],
                    }),
                    h
                        ? (0, R.dF)(l)
                            ? (0, c.jsx)(tE, { scrollerRef: a, tab: l }, l)
                            : (0, c.jsx)(L.R9, {
                                  newValue: { pageIndex: p },
                                  children: (0, c.jsx)(eF, {
                                      categories: r,
                                      setCategoryRef: i,
                                      currentPage: p,
                                      handlePageChange: f,
                                      initialCategoryId: o,
                                  }),
                              })
                        : (0, c.jsx)(tp, { scrollerRef: a, tab: l }, l),
                ],
            }),
        })
    );
};
var tA = n(599062),
    tS = n(651162),
    tv = n(554146),
    tL = n(367727);
let tj = d.createContext(null);
function tI(e) {
    let { blockType: t, children: n } = e,
        s = d.useMemo(() => ({ blockType: t }), [t]);
    return (0, c.jsx)(tj.Provider, { value: s, children: n });
}
var tN = n(755172),
    tT = n(893998),
    ty = n(419354),
    tO = n(607399),
    tk = n(946015),
    tR = n(717421),
    tB = n(854818),
    tP = n(134264);
let tM = d.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        s = (0, tR.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsxs)(ty.animated.div, {
        className: g()([tP.lP, tO.Fr && tP.yJ]),
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
            (0, c.jsxs)(tk.s, {
                direction: tk.s.Direction.VERTICAL,
                children: [
                    (0, c.jsx)(ee.E, {
                        variant: "text-md/medium",
                        className: tP.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, c.jsx)(ee.E, {
                            variant: "text-sm/medium",
                            className: tP.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, c.jsx)(tB.e, { endDate: t.endTime }),
        ],
    });
});
var tD = n(424918),
    tw = n(230109),
    tH = n(777666),
    tG = n(597783),
    tF = n(941734);
let tU = (e) => {
        let t,
            { category: n, subblock: s, badgeText: l, enablePreview: a, handleTransition: r } = e;
        null != s && (t = j.A.getCategoryByStoreListingId(s?.categoryStoreListingId)?.skuId);
        let i = t ?? n?.skuId ?? "",
            { handleCardVisibilityChange: o } = (0, tG.Z)(i, "home", "marketing featured block"),
            u = (0, ej.s4)(n, s, a),
            g = d.useRef(null),
            h = s?.bodyText,
            _ = (0, L.uM)();
        return (0, c.jsx)(tw.L, {
            innerRef: g,
            onChange: o,
            threshold: 0,
            children: (0, c.jsxs)(eQ.D, {
                className: tF.oT,
                innerRef: g,
                style: { ...(null != u && { backgroundImage: `url(${u})` }) },
                onClick: () => {
                    r({
                        sourceButton: "shop marketing tile",
                        categorySkuId: i,
                        isInternalShopDeeplink: !0,
                        isOrbsExclusive: n?.isOrbsExclusive,
                    }),
                        y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: _?.sessionId,
                            sku_id: i,
                            page_type: "home",
                            page_section: _?.pageSection,
                            page_category: _?.pageCategory,
                            tile_type: "FEATURED_BLOCK",
                            tile_position: String(_?.tilePosition),
                            cta_name: null,
                        });
                },
                children: [
                    null != l && (0, c.jsx)(tH.Lp, { disableColor: !0, text: l, className: tF.pv }),
                    (0, c.jsx)("div", {
                        className: tF.Gh,
                        children:
                            null != h &&
                            (0, c.jsx)(eo.D, {
                                lineClamp: 4,
                                className: tF.BN,
                                style: { color: s?.bannerTextColor ?? "white" },
                                variant: "heading-md/medium",
                                children: h,
                            }),
                    }),
                    (0, c.jsx)("div", {
                        className: tF.b2,
                        children: (0, c.jsx)(et.$, {
                            variant: "overlay-primary",
                            text: G.intl.string(G.t.jVcuVY),
                            onClick: (e) => {
                                r({
                                    sourceButton: "shop marketing take me there button",
                                    categorySkuId: i,
                                    isInternalShopDeeplink: !0,
                                    isOrbsExclusive: n?.isOrbsExclusive,
                                }),
                                    e.stopPropagation(),
                                    y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                        collectibles_shop_session_id: _?.sessionId,
                                        sku_id: i,
                                        page_type: "home",
                                        page_section: _?.pageSection,
                                        page_category: _?.pageCategory,
                                        tile_type: "FEATURED_BLOCK",
                                        tile_position: String(_?.tilePosition),
                                        cta_name: "Take me there button",
                                    });
                            },
                        }),
                    }),
                ],
            }),
        });
    },
    tz = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e;
        return (0, c.jsx)("div", {
            className: g()(tF.n9, tF.YB),
            children: n?.subblocks.map((e, n) =>
                e.type === tD.u.CATEGORY
                    ? (0, c.jsx)(
                          L.R9,
                          {
                              newValue: {
                                  categoryPosition: 1,
                                  pageCategory: e.name,
                                  pageSection: "featured_block",
                                  tilePosition: n,
                              },
                              children: (0, c.jsx)(
                                  tU,
                                  {
                                      subblock: e,
                                      enablePreview: 0 === n,
                                      badgeText: (0, eh.HF)(e.unpublishedAt) ? G.intl.string(G.t["h/uBCR"]) : void 0,
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
    tW = (e) => {
        let { handleTransition: t, categories: n } = e;
        if (null == n || n.length < 2) return null;
        let [s, l] = n;
        return (0, c.jsx)("div", {
            className: g()(tF.n9, tF.YB),
            children: (0, c.jsxs)(L.R9, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != s ? s.name : l?.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == s),
                },
                children: [
                    null != s &&
                        (0, c.jsx)(tU, {
                            category: s,
                            enablePreview: !0,
                            badgeText: (0, eh.HF)(s.unpublishedAt) ? G.intl.string(G.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                    null != l &&
                        (0, c.jsx)(tU, {
                            category: l,
                            badgeText: (0, eh.HF)(l.unpublishedAt) ? G.intl.string(G.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                ],
            }),
        });
    },
    tV = (e) => {
        let { isLoading: t, handleTransition: n, categories: s, featuredBlockRecord: l } = e,
            { analyticsLocations: a } = (0, x.Ay)(T.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
        return t
            ? (0, c.jsxs)("div", {
                  className: g()(tF.n9, tF.YB),
                  children: [
                      (0, c.jsx)("div", {
                          className: g()(tF.Jn, tF.oT),
                          children: (0, c.jsx)("div", { className: tF.uy }),
                      }),
                      (0, c.jsx)("div", {
                          className: g()(tF.Jn, tF.oT),
                          children: (0, c.jsx)("div", { className: tF.uy }),
                      }),
                  ],
              })
            : null != l
              ? (0, c.jsx)(x.f5, {
                    value: a,
                    children: (0, c.jsx)(tz, { featuredBlockRecord: l, handleTransition: n, isLoading: !1 }),
                })
              : (0, c.jsx)(x.f5, {
                    value: a,
                    children: (0, c.jsx)(tW, { categories: s, handleTransition: n, isLoading: !1 }),
                });
    };
var tK = n(885574),
    t$ = n(975807),
    tY = n(975571),
    tZ =
        (((i = {}).MOUNTED = "mounted"),
        (i.SORT_OUT = "sort-out"),
        (i.SORT_IN = "sort-in"),
        (i.SHUFFLE_OUT = "shuffle-out"),
        (i.SHUFFLE_IN = "shuffle-in"),
        (i.FINISHED = "finished"),
        i);
n(667532);
var tJ = n(735438),
    tq = n.n(tJ),
    tX =
        (((o = {}).RECOMMENDED = "recommended"),
        (o.POPULAR = "popular"),
        (o.RECENT = "recent"),
        (o.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (o.RANDOM = "random"),
        o),
    tQ = n(153488),
    t0 = n(155999),
    t1 = n.n(t0);
function t2() {
    let e = (0, N.bG)([j.A], () => j.A.products);
    return (0, d.useCallback)(
        (t) =>
            t1()(
                t
                    .map((t) => {
                        let n = e.get(t);
                        return null != n && null != n.variantGroupStoreListingId
                            ? j.A.getProductByStoreListingId(n.variantGroupStoreListingId)
                            : n;
                    })
                    .filter((e) => null != e),
                "storeListingId",
            ),
        [e],
    );
}
let t4 = (e) => {
    let {
            isLoading: t,
            title: n,
            sortedSkuIds: s,
            numVisibleItems: l,
            prioritizeUserDiscounts: a,
            tab: r,
            buttonContainerClassName: i,
            orbsSupportedOnly: o,
        } = e,
        u = (0, N.bG)([v.default], () => v.default.getCurrentUser()),
        h = O.Ay.canUseCollectibles(u),
        _ = (0, eg.W)("FeedBlock"),
        m = (0, eK.yB)("FeedBlock"),
        {
            sortType: p,
            setSortType: f,
            sortedItems: E,
            sortOptions: C,
            shuffleProducts: b,
            showRecommendationOption: A,
        } = (function (e) {
            let { sortedSkuIds: t, isPremiumUser: n, prioritizeUserDiscounts: s, orbsSupportedOnly: l } = e,
                a = (0, N.bG)([tQ.A], () => tQ.A.hasConsented(B.YAq.PERSONALIZATION)),
                r = d.useMemo(() => t?.[tX.RECOMMENDED] ?? [], [t]),
                i = d.useMemo(() => t?.[tX.POPULAR] ?? [], [t]),
                o = r.length > 0 && a,
                [c, u] = d.useState(o ? tX.RECOMMENDED : tX.POPULAR),
                g = (0, N.bG)([j.A], () => j.A.productsWithVariantsAsGroup),
                h = d.useMemo(() => (0, eh.CE)(g), [g]),
                _ = (0, N.bG)([w.A], () => w.A.getUserDiscounts()),
                m = t2(),
                p = ef(),
                [f, E] = d.useState([]),
                x = d.useCallback(() => {
                    u(tX.RANDOM), E(tq().shuffle(h));
                }, [h]);
            d.useEffect(() => {
                E(tq().shuffle(h));
            }, [h]);
            let C = eC(
                d.useMemo(() => {
                    let e = [];
                    if (c === tX.RECENT) e = h;
                    else if (c === tX.PRICE_LOW_TO_HIGH) e = (0, eh.bf)([...h], n, l);
                    else if (c === tX.RECOMMENDED) {
                        let t = m(r);
                        e = s ? (0, eh.Bs)(t, _) : t;
                    } else if (c === tX.POPULAR) {
                        let t = m(i);
                        e = s ? (0, eh.Bs)(t, _) : t;
                    } else c === tX.RANDOM && (e = f);
                    return l ? (0, e_.ex)(p(e)) : p(e);
                }, [c, l, p, n, h, m, r, s, _, i, f]),
            );
            return {
                sortType: c,
                setSortType: u,
                sortedItems: C,
                sortOptions: d.useMemo(() => {
                    let e = [
                        { value: tX.POPULAR, label: G.intl.string(G.t.Y68e5p) },
                        { value: tX.RECENT, label: G.intl.string(G.t["51Bhiz"]) },
                        { value: tX.PRICE_LOW_TO_HIGH, label: G.intl.string(G.t.m8RVU2) },
                    ];
                    return o && e.unshift({ value: tX.RECOMMENDED, label: G.intl.string(G.t.zPWgFG) }), e;
                }, [o]),
                showRecommendationOption: o,
                shuffleProducts: x,
            };
        })({ sortedSkuIds: s, isPremiumUser: h, prioritizeUserDiscounts: a, orbsSupportedOnly: o }),
        S = (0, N.bG)([$.A], () => $.A.useReducedMotion),
        I = (0, N.bG)([ev.A], () => ev.A.isFocused()),
        k = !S && I,
        { animationPhase: P, startAnimation: M } = (() => {
            let [e, t] = d.useState("mounted"),
                [n, s] = d.useState(!1),
                l = d.useRef(null);
            return (
                d.useEffect(() => {
                    n && "finished" === e && (null !== l.current && l.current.focus(), s(!1));
                }, [e, n]),
                {
                    animationPhase: e,
                    startAnimation: d.useCallback((e) => {
                        let { isShuffling: n, onOutroComplete: a, returnRef: r } = e;
                        r?.current != null && ((l.current = r.current), s(!0)),
                            t(n ? "shuffle-out" : "sort-out"),
                            setTimeout(
                                () => {
                                    a(),
                                        t(n ? "shuffle-in" : "sort-in"),
                                        setTimeout(
                                            () => {
                                                t("finished");
                                            },
                                            n ? 200 : 300,
                                        );
                                },
                                n ? 250 : 300,
                            );
                    }, []),
                }
            );
        })(),
        D = (0, L.uM)(),
        H = D?.sessionId ?? "",
        { analyticsLocations: F } = (0, x.Ay)(T.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
        U = d.useRef(null),
        z = d.useCallback(
            (e) => {
                M({ isShuffling: !1, onOutroComplete: () => f(e) }),
                    y.default.track(B.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, { page_session_id: H, sort_type: e });
            },
            [M, f, H],
        );
    return null == u
        ? null
        : (0, c.jsx)(x.f5, {
              value: F,
              children: (0, c.jsxs)("div", {
                  className: g()(tF.lD, tF.YB),
                  children: [
                      (0, c.jsxs)("div", {
                          className: tF.$6,
                          children: [
                              (0, c.jsxs)("div", {
                                  className: tF.LD,
                                  children: [
                                      (0, c.jsx)(eo.D, { variant: "heading-lg/semibold", children: n }),
                                      A &&
                                          (0, c.jsx)(eq.m, {
                                              text: G.intl.string(G.t["3taPdj"]),
                                              position: "top",
                                              "aria-label": G.intl.string(G.t["3taPdj"]),
                                              children: (0, c.jsx)(eQ.D, {
                                                  onClick: () =>
                                                      (0, t$.A)(tY.A.getArticleURL(B.MVz.DATA_USED_FOR_RECOMMENDED)),
                                                  className: tF.sT,
                                                  children: (0, c.jsx)(tK.m, { size: "sm" }),
                                              }),
                                          }),
                                  ],
                              }),
                              (0, c.jsxs)("div", {
                                  className: g()(tF.IE, { [eK.jP]: m }),
                                  children: [
                                      (0, c.jsx)(ee.E, {
                                          variant: "text-md/medium",
                                          children: G.intl.string(G.t.uaX705),
                                      }),
                                      (0, c.jsx)("div", {
                                          className: g()(i, tF.pI),
                                          children: (0, c.jsx)(eV.l, {
                                              label: G.intl.string(G.t.uaX705),
                                              hideLabel: !0,
                                              options: C,
                                              onSelectionChange: z,
                                              formatOption: (e) => {
                                                  let { label: t, value: n } = e;
                                                  return { id: n, label: t, value: n };
                                              },
                                              value: p,
                                              selectionMode: "single",
                                              fullWidth: !0,
                                          }),
                                      }),
                                      (0, c.jsx)("div", {
                                          className: i,
                                          children: (0, c.jsx)(et.$, {
                                              variant: "secondary",
                                              text: G.intl.string(G.t.X3tnc4),
                                              buttonRef: U,
                                              onClick: () => {
                                                  M({ isShuffling: !0, onOutroComplete: b, returnRef: U }),
                                                      y.default.track(B.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                          page_session_id: H,
                                                      });
                                              },
                                              disabled: P !== tZ.MOUNTED && P !== tZ.FINISHED,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, c.jsx)("div", {
                          className: tF.hm,
                          children: t
                              ? (0, c.jsx)(c.Fragment, {
                                    children: [...Array(12)].map((e, t) => (0, c.jsx)(eO, {}, t + 1)),
                                })
                              : E.slice(0, l).map((e, t) => {
                                    let n,
                                        s = j.A.getCategoryForProduct(e.skuId);
                                    if (null == e || null == s) return null;
                                    if (k)
                                        if (P === tZ.SHUFFLE_OUT)
                                            return (0, c.jsx)(
                                                "div",
                                                {
                                                    className: tF.Z2,
                                                    children: (0, c.jsx)(eO, { skipPulseAnimation: !0 }),
                                                },
                                                `${e.skuId}-${t}`,
                                            );
                                        else
                                            P === tZ.SORT_OUT
                                                ? (n = tF.MW)
                                                : P === tZ.SHUFFLE_IN
                                                  ? (n = tF.aS)
                                                  : P === tZ.SORT_IN && (n = tF.F7);
                                    return (0, c.jsx)(
                                        L.R9,
                                        {
                                            newValue: {
                                                tilePosition: t,
                                                pageSection: "popular picks",
                                                categoryPosition: 2,
                                            },
                                            children: (0, c.jsx)("div", {
                                                className: n,
                                                children: (0, c.jsx)(eP.A, {
                                                    skuId: e.skuId,
                                                    hideStaticBundleBackgroundAsset: !0,
                                                    prioritizedCurrency:
                                                        r === R.G2.ORBS ? eM.Hi.ORBS : _ ? eM.Hi.FIAT : void 0,
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
var t5 = n(696292),
    t3 = n(545986),
    t6 = n(318346);
let t8 = (e) => {
    let { clientX: t, clientY: n, currentTarget: s } = e;
    s.style.pointerEvents = "none";
    let l = document.elementFromPoint(t, n);
    return (s.style.pointerEvents = "auto"), { elementBelow: l, button: l?.closest("button") ?? null };
};
var t9 = n(929955);
let t7 = (e) => {
    let { bannerStatic: t, bannerAnimated: n, bannerRive: s, isResponsive: l = !1, eventTargetRef: a } = e,
        r = (0, N.bG)([$.A], () => $.A.useReducedMotion),
        i = (0, N.bG)([ev.A], () => ev.A.isFocused()),
        o = null != n && !r && i;
    return null != s
        ? (0, c.jsx)(eA._, { src: s, fit: "fit-width", eventTargetRef: a })
        : o
          ? (0, c.jsx)(eS.A, { className: g()({ [t9.no]: l }, t9.BW, t9.ud), src: n, autoPlay: !0, loop: !0 })
          : (0, c.jsx)("div", {
                className: g()({ [t9.no]: l }, t9.BW, t9._e),
                style: { backgroundImage: `url(${t})` },
            });
};
var ne = n(951707);
let nt = (e) => (0, c.jsx)("div", { className: tF.hm, children: (0, c.jsx)(ns, { ...e }) }),
    nn = (e) => (0, c.jsx)(ne.A, { gap: "xl", children: (0, c.jsx)(ns, { ...e }) }),
    ns = (e) => {
        let { isLoading: t, products: n, tab: s, totalCards: l } = e,
            a = (0, eg.W)("HeroBlockCards");
        if (t) return (0, c.jsx)(c.Fragment, { children: [...Array(l ?? 4)].map((e, t) => (0, c.jsx)(eO, {}, t)) });
        let r = null != l ? n.slice(0, l) : n;
        return (0, c.jsx)(eM.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: r.map((e, t) => {
                let n = j.A.getCategoryForProduct(e.skuId);
                return null == e || null == n
                    ? null
                    : (0, c.jsx)(
                          L.R9,
                          {
                              newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                              children: (0, c.jsx)(
                                  eP.A,
                                  {
                                      skuId: e?.skuId,
                                      prioritizedCurrency: s === R.G2.ORBS ? eM.Hi.ORBS : a ? eM.Hi.FIAT : void 0,
                                  },
                                  e.skuId,
                              ),
                          },
                          e.skuId,
                      );
            }),
        });
    },
    nl = (e) => {
        let t,
            n,
            { heroBlockRecord: s, layout: l, tab: a, isBlockLoading: r = !1 } = e,
            { products: i } =
                ((t = t2()),
                (n = d.useMemo(() => (r ? [] : t(s.rankedSkuIds)), [r, t, s.rankedSkuIds])),
                { products: eC(ef()(n)) }),
            o = d.useMemo(
                () =>
                    !r &&
                    0 !== s.rankedSkuIds.length &&
                    !(i.length > 0) &&
                    s.rankedSkuIds.every((e) => j.A.getProduct(e)?.variantGroupStoreListingId != null),
                [r, s.rankedSkuIds, i.length],
            ),
            u = r || o;
        switch (l) {
            case "feed":
                return (0, c.jsx)(nt, { heroBlockRecord: s, isLoading: u, products: i, tab: a });
            case "hscroll":
                return (0, c.jsx)(nn, { heroBlockRecord: s, isLoading: u, products: i, tab: a });
        }
    },
    na = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: tS.g.HERO,
        categoryStoreListingId: "",
    },
    nr = (e) => {
        let { isLoading: t, handleTransition: n, category: s, heroBlock: l, tab: a, onVisibilityChange: r } = e,
            i = (0, ed.K)(
                (e) => {
                    r?.(e);
                },
                0.1,
                null != r,
            ),
            o = d.useRef(null),
            u = (0, eK.yB)("HeroBlock"),
            h = (0, N.bG)([v.default], () => v.default.getCurrentUser()),
            _ = (0, L.uM)(),
            { analyticsLocations: m } = (0, x.Ay)(T.A.COLLECTIBLES_SHOP_HERO),
            p = d.useMemo(
                () =>
                    null != l
                        ? l
                        : null == s
                          ? na
                          : {
                                rankedSkuIds: s.heroRanking ?? [],
                                name: s.name,
                                unpublishedAt: s.unpublishedAt,
                                categorySkuId: s.skuId,
                                summary: s.summary,
                                type: tS.g.HERO,
                                categoryStoreListingId: s.storeListingId,
                                bannerDisplayConfig: s.heroBannerDisplayConfig,
                                logoDisplayConfig: s.heroLogoDisplayConfig,
                                heroLogoUrl: s.heroLogoUrl,
                                heroBannerUrl: s.heroBannerUrl,
                                heroBannerAnimatedUrl: s.heroBannerAnimatedUrl,
                            },
                [l, s],
            ),
            {
                bannerDisplayConfig: f,
                logoDisplayConfig: E,
                heroLogo: C,
                heroBannerStatic: b,
                heroBannerAnimated: A,
                heroBannerRive: S,
            } = (0, ej.Kk)(p),
            j = f?.responsive ?? !1,
            I = f?.backgroundStyle,
            O = null != S,
            k = a === R.G2.ORBS,
            P = null != s && s.isOrbsExclusive,
            M = k ? G.intl.string(G.t["1CdL8d"]) : G.intl.string(G.t.xYKa1T),
            D = () => {
                k
                    ? ((0, t6.Y)({
                          pageType: B.liQ.SHOP_ORBS_TAB,
                          sectionType: B.JJy.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: B.ZSU.CTA_TO_QUEST_HOME,
                      }),
                      (0, t3.navigateToQuestHome)({ fromContent: t5.u.ORBS_SHOP_HERO_CTA }))
                    : (n({
                          sourceButton: "shop latest category hero",
                          categorySkuId: P ? p.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: P,
                      }),
                      y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: _?.sessionId,
                          sku_id: p.categorySkuId,
                          page_type: a,
                          page_section: _?.pageSection,
                          page_category: _?.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != h && (t || p !== na)
            ? (0, c.jsx)(x.f5, {
                  value: m,
                  children: (0, c.jsxs)("div", {
                      ref: i,
                      className: tF.os,
                      children: [
                          O
                              ? ((e) => {
                                    let { isCustomCursorEnabled: t, className: n, riveEventTargetRef: s } = e,
                                        l = (e) => {
                                            let { button: n } = t8(e),
                                                s = e.currentTarget;
                                            t
                                                ? (s.style.cursor =
                                                      null != n
                                                          ? "var(--custom-cursor-pointer)"
                                                          : "var(--custom-cursor)")
                                                : (s.style.cursor = null != n ? "pointer" : "default");
                                        };
                                    return (0, c.jsx)("div", {
                                        ref: s,
                                        className: n,
                                        onMouseMove: l,
                                        onMouseDown: (e) => {
                                            let { button: t } = t8(e);
                                            null != t && t.click();
                                        },
                                    });
                                })({ isCustomCursorEnabled: u, className: tF.Xt, riveEventTargetRef: o })
                              : null,
                          (0, c.jsx)("div", {
                              className: g()(tF.vK, { [tF.cN]: O, [tF.no]: j }),
                              style: null != I ? { background: I } : void 0,
                              children:
                                  null != b &&
                                  (0, c.jsx)(t7, {
                                      bannerStatic: b,
                                      bannerAnimated: A,
                                      bannerRive: S,
                                      isResponsive: j,
                                      eventTargetRef: o,
                                  }),
                          }),
                          (0, c.jsxs)("div", {
                              className: tF.xX,
                              children: [
                                  O
                                      ? (0, c.jsx)("div", {
                                            className: tF.fy,
                                            children:
                                                !t &&
                                                (0, c.jsx)(et.$, { variant: "overlay-primary", onClick: D, text: M }),
                                        })
                                      : (0, c.jsxs)("div", {
                                            className: g()(tF.bC, { [tF.no]: j }),
                                            children: [
                                                t
                                                    ? (0, c.jsx)("div", { className: tF.Hw })
                                                    : (0, c.jsxs)("div", {
                                                          className: tF.Hw,
                                                          children: [
                                                              (0, eh.HF)(p.unpublishedAt) &&
                                                                  (0, c.jsx)(tH.Lp, {
                                                                      disableColor: !0,
                                                                      text: G.intl.string(G.t["h/uBCR"]),
                                                                      className: tF.v0,
                                                                  }),
                                                              (0, c.jsxs)("div", {
                                                                  className: tF.Wq,
                                                                  children: [
                                                                      null != C &&
                                                                          (0, c.jsx)("img", {
                                                                              className: tF.rm,
                                                                              src: C,
                                                                              alt: p.name,
                                                                              style: E?.toDesktopStyles(),
                                                                          }),
                                                                      null != p.title &&
                                                                          (0, c.jsx)(eo.D, {
                                                                              variant: "heading-xxl/bold",
                                                                              className: tF.DD,
                                                                              color: "text-strong",
                                                                              children: p.title,
                                                                          }),
                                                                      null != p.summary &&
                                                                          "" !== p.summary &&
                                                                          (0, c.jsx)(ee.E, {
                                                                              variant: "text-md/normal",
                                                                              className: k ? tF.h4 : tF.Tm,
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
                                                        className: tF.IS,
                                                        children: (0, c.jsx)(et.$, {
                                                            variant: "overlay-primary",
                                                            onClick: D,
                                                            text: M,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                  (0, c.jsx)(nl, {
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
var ni = n(349288),
    no = n(537947);
let nc = (e) => {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        s = (0, ed.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: l, bannerAnimatedUrl: a } = (0, ej.qY)(t),
        r = null != t.textColor ? { color: t.textColor } : void 0,
        i = null != t.body && "" !== t.body,
        o = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, c.jsxs)("div", {
        ref: s,
        className: no.BX,
        children: [
            (0, c.jsx)("div", {
                className: no.vK,
                children: null != l && (0, c.jsx)(t7, { bannerStatic: l, bannerAnimated: a }),
            }),
            (0, c.jsx)("div", {
                className: no.HQ,
                children: (0, c.jsxs)("div", {
                    className: no.Yn,
                    children: [
                        null != t.endTime ? (0, c.jsx)(tB.e, { endDate: t.endTime, size: "lg" }) : null,
                        (0, c.jsx)(eo.D, {
                            variant: "heading-xxl/bold",
                            className: no.DD,
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
                                          (0, c.jsx)(ni.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: no.CU,
                                              style: { ...r },
                                              children: G.intl.string(G.t.O7ADgv),
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
var nd = n(189213),
    nu = n(290136),
    ng = n(478016),
    nh = n(825484),
    n_ = n(713517),
    nm = n(914410),
    np = n(634927),
    nf = n(61750);
function nE(e, t) {
    let n = d.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        s = (0, N.bG)([J.A], () => J.A.getPurchases(n));
    return {
        readyToClaim: d.useMemo(() => s.length === n.length, [s, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: s,
    };
}
var nx = n(498924);
let nC = d.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: s } = (0, tG.Z)(n),
            l = d.useRef(null),
            { isHoveringOrFocusing: a } = (0, n_.A)(l),
            { readyToClaim: r, collectibleProductSkuIds: i, collectedSkuIds: o } = nE(t, n),
            u = (0, N.bG)([J.A], () => J.A.isClaiming === n);
        return (0, c.jsx)(tw.L, {
            onChange: s,
            threshold: 0,
            innerRef: l,
            children: (0, c.jsx)("div", {
                ref: l,
                className: g()(eT.ty, nx.Q3, { [eT.yo]: a }),
                "aria-label": G.intl.formatToPlainString(G.t.Ez6aHE, { category: t.name }),
                children: (0, c.jsxs)("div", {
                    className: eT.qt,
                    children: [
                        (0, c.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: nx.L8,
                        }),
                        (0, c.jsx)("div", {
                            className: eT.N1,
                            children: (0, c.jsx)(tH.Lp, {
                                text: G.intl.string(G.t.rykAJ9),
                                disableColor: !0,
                                className: nx.HZ,
                            }),
                        }),
                        (0, c.jsxs)("div", {
                            className: eT.xQ,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: nx.xE,
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: nx.cs,
                                            children: [
                                                (0, c.jsx)(eo.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: eT.tZ,
                                                    children: G.intl.string(G.t["0mDmg/"]),
                                                }),
                                                (0, c.jsx)(eq.m, {
                                                    text: r
                                                        ? G.intl.string(G.t.cKH3tk)
                                                        : G.intl.formatToPlainString(G.t["8aMDPc"], {
                                                              totalCount: i.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, c.jsx)("span", {
                                                        className: nx.ZB,
                                                        children: (0, c.jsx)(nu.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)("div", {
                                            className: eT.oh,
                                            "aria-hidden": !0,
                                            children: (0, c.jsxs)("div", {
                                                className: nx.L$,
                                                children: [
                                                    (0, c.jsx)(nm.Ay, {
                                                        variant: nm.qP.BLUE,
                                                        progress: o.length,
                                                        maximum: i.length,
                                                    }),
                                                    (0, c.jsxs)("div", {
                                                        className: g()(nx.__, { [nx.gF]: r }),
                                                        children: [
                                                            r
                                                                ? (0, c.jsx)(ng.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, c.jsx)(ee.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: G.intl.formatToPlainString(G.t["5TwASM"], {
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
                                    children: (0, c.jsx)(nh.e, {
                                        wrap: !1,
                                        className: eT.Ld,
                                        fullWidth: !0,
                                        children: (0, c.jsx)(et.$, {
                                            variant: "primary",
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    r &&
                                                        (0, np.BX)(t.skuId, n)
                                                            .then(() => {
                                                                let e = j.A.getProduct(n);
                                                                null != e &&
                                                                    (0, nf.A)({
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
                                                                (0, m.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, c.jsx)(nd.Modal, {
                                                                            transitionState: e.transitionState,
                                                                            onClose: e.onClose,
                                                                            size: "sm",
                                                                            title: G.intl.string(G.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: G.intl.string(G.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, c.jsx)("div", {
                                                                                children: G.intl.string(G.t["0YpIF/"]),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            });
                                            },
                                            text: G.intl.string(G.t.VnVTNc),
                                            fullWidth: !0,
                                            disabled: !r,
                                            loading: u,
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
    nb = (e) => {
        let t,
            n,
            { isBlockLoading: s = !1, heroBlock: l, tab: a } = e,
            r = (0, eg.W)("RewardHeroBlockCards"),
            i = d.useMemo(() => j.A.getCategoryForProduct(l.rewardSkuId), [l.rewardSkuId]),
            o = (0, N.bG)([J.A], () => J.A.getPurchase(l.rewardSkuId)),
            { products: u } =
                ((t = t2()),
                (n = d.useMemo(
                    () => (s ? [] : t(l.rankedSkuIds).filter((e) => e.skuId !== l.rewardSkuId || null != o)),
                    [s, t, l.rankedSkuIds, o, l.rewardSkuId],
                )),
                { products: eC(ef()(n)) }),
            g = d.useMemo(
                () =>
                    !s &&
                    0 !== l.rankedSkuIds.length &&
                    !(u.length > 0) &&
                    l.rankedSkuIds.every((e) => j.A.getProduct(e)?.variantGroupStoreListingId != null),
                [s, l.rankedSkuIds, u.length],
            ),
            h = s || g,
            { readyToClaim: _ } = nE(i, l.rewardSkuId),
            m = null == o && null != l.rewardSkuId && null != i;
        return (0, c.jsx)(ne.A, {
            gap: "xl",
            children: h
                ? (0, c.jsx)(c.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, c.jsx)(eO, {}, t)),
                  })
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          m &&
                              _ &&
                              (0, c.jsx)(
                                  L.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, c.jsx)(nC, { category: i, rewardSkuId: l.rewardSkuId }),
                                  },
                                  l.rewardSkuId,
                              ),
                          u.map((e, t) => {
                              let n = j.A.getCategoryForProduct(e.skuId);
                              return null == e || null == n
                                  ? null
                                  : (0, c.jsx)(
                                        L.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, c.jsx)(
                                                eP.A,
                                                {
                                                    skuId: e?.skuId,
                                                    prioritizedCurrency:
                                                        a === R.G2.ORBS ? eM.Hi.ORBS : r ? eM.Hi.FIAT : void 0,
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
(0, eh.$b)(90);
let nA = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: tS.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    nS = (e) => {
        let { isLoading: t = !1, heroBlock: n, tab: s, onVisibilityChange: l } = e,
            a = (0, ed.K)(
                (e) => {
                    l?.(e);
                },
                0.1,
                null != l,
            ),
            r = (0, N.bG)([v.default], () => v.default.getCurrentUser()),
            { analyticsLocations: i } = (0, x.Ay)(T.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: o,
                logoDisplayConfig: d,
                heroLogo: u,
                heroBannerStatic: h,
                heroBannerAnimated: _,
            } = (0, ej.Kk)(n),
            m = o?.responsive ?? !1,
            p = o?.backgroundStyle;
        return null != r && (t || n !== nA)
            ? (0, c.jsx)(x.f5, {
                  value: i,
                  children: (0, c.jsxs)("div", {
                      ref: a,
                      className: tF.os,
                      children: [
                          (0, c.jsx)("div", {
                              className: g()(tF.vK, { [tF.no]: m }),
                              style: null != p ? { background: p } : void 0,
                              children:
                                  null != h && (0, c.jsx)(t7, { bannerStatic: h, bannerAnimated: _, isResponsive: m }),
                          }),
                          (0, c.jsxs)("div", {
                              className: tF.xX,
                              children: [
                                  (0, c.jsx)("div", {
                                      className: g()(tF.bC, { [tF.no]: m }),
                                      children: t
                                          ? (0, c.jsx)("div", { className: tF.Hw })
                                          : (0, c.jsx)("div", {
                                                className: tF.Hw,
                                                children: (0, c.jsxs)("div", {
                                                    className: tF.Wq,
                                                    children: [
                                                        null != u &&
                                                            (0, c.jsx)("img", {
                                                                className: tF.rm,
                                                                src: u,
                                                                alt: n.name,
                                                                style: d?.toDesktopStyles(),
                                                            }),
                                                        null != n.title &&
                                                            (0, c.jsx)(eo.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: tF.DD,
                                                                color: "text-strong",
                                                                children: n.title,
                                                            }),
                                                        "" !== n.summary &&
                                                            (0, c.jsx)(ee.E, {
                                                                variant: "text-md/normal",
                                                                className: tF.Tm,
                                                                style:
                                                                    null != n.bannerTextColor
                                                                        ? { color: n.bannerTextColor }
                                                                        : void 0,
                                                                children: n.summary,
                                                            }),
                                                    ],
                                                }),
                                            }),
                                  }),
                                  (0, c.jsx)(nb, { isBlockLoading: t, heroBlock: n, tab: s }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    },
    nv = (e) => {
        let { shelf: t, handleTransition: n, tab: s } = e,
            l = (0, N.bG)([v.default], () => v.default.getCurrentUser()),
            a = (0, eg.W)("ShelfBlock"),
            r = (0, N.bG)([j.A], () => j.A.getCategory(t.categorySkuId)),
            i = t2(),
            o = eC(d.useMemo(() => i(t.rankedSkuIds), [t.rankedSkuIds, i])),
            { analyticsLocations: u } = (0, x.Ay)(T.A.COLLECTIBLES_SHOP_SHELF);
        return null == l
            ? null
            : (0, c.jsx)(x.f5, {
                  value: u,
                  children: (0, c.jsxs)("div", {
                      className: g()(tF.Vp, tF.YB),
                      children: [
                          (0, c.jsxs)("div", {
                              className: tF.$6,
                              children: [
                                  (0, c.jsx)(eo.D, { variant: "heading-lg/semibold", children: t.name }),
                                  (0, c.jsx)(et.$, {
                                      variant: "secondary",
                                      text: G.intl.formatToPlainString(G.t.bc9RBE, { category_name: t.name }),
                                      onClick: () => {
                                          n({
                                              sourceButton: "shelf block see all",
                                              categorySkuId: t.categorySkuId,
                                              isInternalShopDeeplink: !0,
                                              isOrbsExclusive: r?.isOrbsExclusive && s !== R.G2.ORBS,
                                          });
                                      },
                                  }),
                              ],
                          }),
                          (0, c.jsx)(ne.A, {
                              gap: "xl",
                              children: (0, c.jsx)(c.Fragment, {
                                  children: o.map((e, n) => {
                                      if (null == j.A.getCategoryForProduct(e.skuId) || null == e) return null;
                                      let l = e.skuId;
                                      return (0, c.jsx)(
                                          L.R9,
                                          {
                                              newValue: { tilePosition: n, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, c.jsx)(
                                                  eP.A,
                                                  {
                                                      skuId: l,
                                                      prioritizedCurrency:
                                                          s === R.G2.ORBS ? eM.Hi.ORBS : a ? eM.Hi.FIAT : void 0,
                                                  },
                                                  l,
                                              ),
                                          },
                                          l,
                                      );
                                  }),
                              }),
                          }),
                      ],
                  }),
              });
    };
var nL = n(815021),
    nj = n(509434),
    nI = n(871123),
    nN = n(733391),
    nT = n(439303),
    ny = n(832163),
    nO = n(44724),
    nk = n(317560),
    nR = n(183802),
    nB = n(171491),
    nP = n(67480),
    nM = n(371794),
    nD = n(74564);
let nw = (e) => {
        let t,
            n,
            s,
            {
                onDismiss: l,
                skuIds: a,
                tab: r,
                applicationId: i,
                headerText: o,
                shopButtonText: u,
                analyticsSection: g,
                analyticsTileType: h,
                analyticsImpressionType: _,
                backgroundGradient: m,
            } = e,
            { guildId: p } = (0, nI.nG)(i);
        d.useEffect(() => {
            null != p && (0, nN.Rw)(p);
        }, [p]);
        let f = (0, N.bG)([ny.A], () => {
                let e = ny.A.getStorefrontMetadata(i);
                return e?.logoAssetId != null ? (0, nM.YE)(i, e.logoAssetId, 75) : void 0;
            }, [i]),
            E =
                ((t = d.useRef([])),
                d.useEffect(() => {
                    if (null != p) for (let e of a) (0, nN.qf)(p, e);
                }, [a, p]),
                (n = (0, N.bG)(
                    [nP.A],
                    () => !a.some((e) => nP.A.isFetching(e)) && a.some((e) => nP.A.didFetchingSkuFail(e)),
                    [a],
                )),
                d.useEffect(() => {
                    n && null != p && (0, nN.Rw)(p);
                }, [n, p]),
                (s = (0, N.yK)([nP.A, ny.A], () => {
                    if (a.some((e) => nP.A.isFetching(e))) return t.current;
                    let e = a.filter((e) => null != nP.A.get(e));
                    if (e.length >= a.length) return a;
                    if (null == p) return e;
                    let n = ny.A.getStorefrontData(p);
                    if (null == n || "loading" === n.state) return e;
                    let s = new Set(a);
                    return [
                        ...e,
                        ...(null != n.storefront
                            ? (0, nI.jd)(n.storefront).filter((e) => !s.has(e) && null != nP.A.get(e))
                            : []),
                    ].slice(0, a.length);
                }, [a, p])),
                d.useEffect(() => {
                    s.length > 0 && (t.current = s);
                }, [s]),
                s);
        (0, nB.j)({ skuIds: E, location: "GamePromotionBanner" });
        let C = (0, L.uM)(),
            { analyticsLocations: b } = (0, x.Ay)(),
            A = d.useRef(null),
            S = d.useRef(!1),
            v = d.useRef(null),
            j = d.useMemo(() => ({ pageSection: g }), [g]),
            I = d.useCallback(
                (e, t) => {
                    y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: C?.sessionId,
                        page_type: r,
                        page_category: C?.pageCategory,
                        page_section: C?.pageSection,
                        tile_type: h,
                        cta_name: e,
                        ...(null != t ? { sku_id: t } : void 0),
                    });
                },
                [C?.sessionId, C?.pageCategory, C?.pageSection, r, h],
            ),
            T = d.useCallback(() => {
                null != p && (0, nO.X)({ guildId: p });
            }, [p]),
            O = d.useCallback(() => {
                null != p && (I("go_to_game_shop"), (0, nO.default)({ guildId: p }));
            }, [I, p]),
            k = d.useCallback(
                (e, t) => {
                    let { skuId: n, applicationId: s } = t;
                    I("card_click", n),
                        (0, nk.R)({ skuId: n, applicationId: s, isStorefront: !1, analyticsLocations: b });
                },
                [I, b],
            ),
            R = d.useCallback(() => {
                I("dismiss"), l();
            }, [I, l]),
            P = d.useCallback(
                (e) => {
                    !S.current &&
                        (e && null === v.current
                            ? (v.current = setTimeout(() => {
                                  (S.current = !0),
                                      (v.current = null),
                                      y.default.track(B.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                          collectibles_shop_session_id: C?.sessionId,
                                          page_type: r,
                                          page_category: C?.pageCategory,
                                          page_section: C?.pageSection,
                                          type: _,
                                      });
                              }, 1e3))
                            : e || null === v.current || (clearTimeout(v.current), (v.current = null)));
                },
                [C?.sessionId, C?.pageCategory, C?.pageSection, r, _],
            );
        return (d.useEffect(
            () => () => {
                null !== v.current && (clearTimeout(v.current), (v.current = null));
            },
            [],
        ),
        0 === E.length)
            ? null
            : (0, c.jsx)(tw.L, {
                  innerRef: A,
                  onChange: P,
                  threshold: 0,
                  children: (0, c.jsx)("div", {
                      ref: A,
                      className: nD.YB,
                      children: (0, c.jsxs)("div", {
                          className: nD.kL,
                          children: [
                              null != m && (0, c.jsx)("div", { className: nD.D7, style: { background: m } }),
                              (0, c.jsx)("div", {
                                  className: nD.b,
                                  children: (0, c.jsx)(nL.J, { size: "sm", variant: "icon-only", onClick: R }),
                              }),
                              null != f && (0, c.jsx)("img", { className: nD.wm, src: f, alt: "" }),
                              (0, c.jsx)("div", {
                                  className: nD.xf,
                                  children: (0, c.jsxs)("div", {
                                      className: nD.B5,
                                      children: [
                                          (0, c.jsx)(eo.D, {
                                              variant: "heading-lg/semibold",
                                              color: "always-white",
                                              children: o,
                                          }),
                                          (0, c.jsx)(et.$, {
                                              variant: "overlay-primary",
                                              size: "sm",
                                              icon: nj.I,
                                              iconPosition: "end",
                                              text: u,
                                              onMouseDown: T,
                                              onClick: O,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, c.jsx)(nT.E9, {
                                  newValue: j,
                                  children: (0, c.jsx)("div", {
                                      className: nD.$2,
                                      children: E.map((e, t) =>
                                          (0, c.jsx)(nR.A, { skuId: e, positionInSection: t, onClick: k }, e),
                                      ),
                                  }),
                              }),
                          ],
                      }),
                  }),
              });
    },
    nH = (e) => {
        let {
            onDismiss: t,
            applicationId: n,
            headerText: s,
            gradientColors: l,
            gradientAngle: a,
            skuIds: r,
            tab: i,
        } = e;
        return (0, c.jsx)(nw, {
            onDismiss: t,
            skuIds: r,
            tab: i,
            applicationId: n,
            headerText: s,
            shopButtonText: G.intl.string(G.t.apFNLU),
            analyticsSection: "slayer-storefront-promotional-banner",
            analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
            analyticsImpressionType: "social_layer_storefront_promotional_banner",
            backgroundGradient: `linear-gradient(${a}deg, ${l.join(", ")})`,
        });
    };
var nG = n(770178),
    nF = n(929283),
    nU = n(275483);
let nz = [
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
    nW = (e) => {
        let { config: t, baseLeft: n, transitioning: s } = e,
            l = window.innerHeight,
            a = j.A.getProduct(t.skuId),
            r = a?.items[0],
            i = a?.type,
            o = n + t.horizontalJitter;
        return (0, c.jsx)("div", {
            className: nU.LY,
            style: {
                top: s ? -l - 384 : t.top,
                left: s ? o + t.transitionOffsetLeft : o,
                transform: `rotate(${t.rotation}deg)`,
                height: 160,
                width: 160,
                transitionDelay: t.transitionDelay,
                transitionDuration: t.transitionDuration,
            },
            children: null != r && i === eE.R.AVATAR_DECORATION && (0, c.jsx)(nF.i, { item: r }),
        });
    },
    nV = (e) => {
        let { peaking: t, transitioning: n, parentWidth: s } = e,
            [l, a] = d.useState(!1),
            [r, i] = d.useState([]),
            [o] = d.useState(() =>
                [...nz]
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
            d.useEffect(() => {
                if (null != s && s > 0) {
                    let e = Math.max(1, Math.floor(s / 130)),
                        t = s / e;
                    i(Array.from({ length: e }, (e, n) => ({ config: o[n % o.length], baseLeft: n * t })));
                }
            }, [s, o]),
            d.useEffect(() => {
                n && setTimeout(() => a(!0), R.H1);
            }, [n]),
            (0, c.jsx)("div", {
                className: g()(nU.rA, { [nU.Kb]: t, [nU.pp]: l }),
                children: r.map((e, t) => {
                    let { config: s, baseLeft: l } = e;
                    return (0, c.jsx)(nW, { config: s, baseLeft: l, transitioning: n }, s.skuId + t);
                }),
            })
        );
    },
    nK = (e) => {
        let { peaking: t, transitioning: n } = e,
            s = d.useRef(null),
            [l, a] = d.useState(0),
            r = d.useCallback(() => {
                null != s.current && a(s.current.offsetWidth);
            }, []);
        return (
            (0, nG.g)(s, r),
            (0, c.jsx)("div", {
                ref: s,
                className: nU.eL,
                children: (0, c.jsx)(nV, { peaking: t, transitioning: n, parentWidth: l }),
            })
        );
    };
var n$ = n(43990),
    nY = n(976860),
    nZ = n(49999);
let nJ = (e) => {
        let { wideBannerBlock: t, tab: n } = e,
            s = j.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            l = d.useRef(null),
            a = d.useRef(null),
            [r, i] = d.useState(),
            [o, u] = d.useState(!1);
        d.useEffect(() => {
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
        let h = s?.skuId ?? "",
            { handleCardVisibilityChange: _ } = (0, tG.Z)(h, "home", "marketing wide banner"),
            m = (0, L.uM)(),
            { bannerURL: p } = (0, ej.w$)(t),
            f = n === R.G2.ORBS,
            E = null != t.ctaRoute && "" !== t.ctaRoute,
            x = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || E),
            C = null != t.logoURL && "" !== t.logoURL,
            b = d.useCallback(() => {
                if ((u(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, tL.$l)(tv.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: nZ.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            A = d.useCallback(
                (e) => {
                    y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: m?.sessionId,
                        sku_id: h,
                        page_type: n,
                        page_section: m?.pageSection,
                        page_category: m?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(m?.tilePosition),
                        cta_name: e,
                    });
                },
                [m, h, n],
            ),
            S = d.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((A(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    n = parseInt(t[2], 10);
                                (0, nO.default)({ guildId: e, pageIndex: n });
                            }
                        } else (0, nY.pX)(e);
                    }
                },
                [t.ctaRoute, A],
            );
        if (null == p || o) return null;
        let v = g()(tF.nM, tF.Tq, tF.TS, tF.YB, { [tF._1]: f, [tF.vb]: E }),
            I = (0, c.jsxs)(c.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, c.jsx)("div", {
                            className: tF.Mh,
                            children: (0, c.jsx)(nL.J, {
                                size: "sm",
                                onClick: (e) => {
                                    e.stopPropagation(), b();
                                },
                                "aria-label": G.intl.string(G.t.WAI6xu),
                            }),
                        }),
                    (0, c.jsx)("div", {
                        className: g()(tF.zK, { [tF._1]: f }),
                        style: null != r ? { height: `${r}px` } : void 0,
                        children: (0, c.jsx)("img", {
                            ref: a,
                            src: p,
                            alt: t.title,
                            className: g()(tF.LN, { [tF.d5]: f }),
                        }),
                    }),
                    (0, c.jsx)("div", {
                        className: g()(tF.Ep, { [tF.Qq]: x }),
                        style: { maxHeight: null != r ? `${r}px` : "auto" },
                        children: (0, c.jsxs)("div", {
                            className: tF.E8,
                            children: [
                                (0, c.jsx)(eo.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: f ? tF.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, c.jsx)(ee.E, {
                                    style: { color: "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: f ? "text-md/medium" : "text-sm/medium",
                                    children: f
                                        ? G.intl.format(G.t.SFFP7K, {
                                              helpdeskArticle: tY.A.getArticleURL(B.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                x &&
                                    (0, c.jsxs)("div", {
                                        className: tF.nP,
                                        children: [
                                            (0, c.jsx)(et.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    e.stopPropagation(), S(t.ctaText ?? G.intl.string(G.t.jVcuVY));
                                                },
                                                text: t.ctaText ?? G.intl.string(G.t.jVcuVY),
                                            }),
                                            C && (0, c.jsx)("img", { src: t.logoURL, alt: "", className: tF.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, c.jsx)(n$.N, {
            theme: f ? void 0 : tl.NJ.DARK,
            children: (e) =>
                (0, c.jsx)(tw.L, {
                    innerRef: l,
                    onChange: _,
                    threshold: 0,
                    children: E
                        ? (0, c.jsx)(eQ.D, { innerRef: l, onClick: () => S(null), className: g()(e, v), children: I })
                        : (0, c.jsx)("div", { ref: l, className: g()(e, v), children: I }),
                }),
        });
    },
    nq = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: s, tab: l } = e,
            { noCache: a, includeUnpublished: r } = (0, ew.A)(),
            [i, o] = d.useState(!1),
            u = (0, L.uM)(),
            h = u?.sessionId ?? "";
        d.useEffect(() => {
            (0, eb.z)({
                sessionId: h,
                checkpoint: eb.t.SHOP_MOUNTED,
                tab: l,
                unpublishedCategoriesShown: r,
                cacheDisabled: a,
            });
        }, [l]);
        let {
                isFetchingShopHome: _,
                fetchShopHomeError: m,
                shopBlocks: p,
                refreshShopHome: f,
            } = (0, tN.y)(l, { noCache: a, includeUnpublished: r, logPerf: !0 }, { sessionId: h, tab: l }),
            E = d.useCallback(() => {
                f();
            }, [f]);
        return (d.useEffect(() => {
            null != m ||
                _ ||
                0 === p.length ||
                (0, eb.z)({
                    sessionId: h,
                    checkpoint: eb.t.SHOP_RENDERED,
                    tab: l,
                    unpublishedCategoriesShown: r,
                    cacheDisabled: a,
                });
        }, [m, _, p.length, r, a, h, l]),
        null != m)
            ? (0, c.jsx)(tA.h, { onRetry: E, errorOrigin: tA.A.SHOP_PAGE, errorMessage: m.message })
            : _ || 0 === p.length
              ? (0, c.jsxs)("div", {
                    className: g()(tF.g4, tF.Of),
                    children: [
                        (0, c.jsx)(nr, { isLoading: _, handleTransition: t, tab: l }),
                        (0, c.jsx)(tV, { isLoading: _, handleTransition: t, categories: [] }),
                        (0, c.jsx)(t4, {
                            isLoading: _,
                            title: l === R.G2.ORBS ? G.intl.string(G.t.dFgeuZ) : G.intl.string(G.t.NSv5KV),
                            numVisibleItems: n,
                            tab: l,
                        }),
                    ],
                })
              : (0, c.jsx)(c.Fragment, {
                    children: p.map((e, a) =>
                        ((e, a, r) => {
                            if (null == e) return null;
                            let d = null,
                                u = !1;
                            switch (e.type) {
                                case tS.g.HERO:
                                    d = (0, c.jsx)(nr, { isLoading: _, handleTransition: t, heroBlock: e, tab: l }, r);
                                    break;
                                case tS.g.FEATURED:
                                    d = (0, c.jsx)(
                                        tV,
                                        { isLoading: _, handleTransition: t, featuredBlockRecord: e },
                                        r,
                                    );
                                    break;
                                case tS.g.FEED:
                                    let h = e.sortedSkuIds;
                                    d = (0, c.jsx)(
                                        t4,
                                        {
                                            title:
                                                l === R.G2.ORBS ? G.intl.string(G.t.dFgeuZ) : G.intl.string(G.t.NSv5KV),
                                            isLoading: s,
                                            numVisibleItems: n,
                                            sortedSkuIds: h,
                                            buttonContainerClassName: a?.type === tS.g.IMMERSIVE_BANNER ? tF.w : void 0,
                                            prioritizeUserDiscounts: l === R.G2.HOME,
                                            tab: l,
                                            orbsSupportedOnly: l === R.G2.ORBS,
                                        },
                                        r,
                                    );
                                    break;
                                case tS.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, tL.En)(tv.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    d = (0, c.jsx)(nJ, { wideBannerBlock: e, tab: l }, r);
                                    break;
                                case tS.g.FRAMES_BANNER:
                                    d = (0, c.jsx)(
                                        nJ,
                                        {
                                            wideBannerBlock: tT.y.fromServer({
                                                type: tS.g.WIDE_BANNER,
                                                title: e.title,
                                                body: e.body,
                                                wide_banner_url: e.desktopBackgroundImage,
                                                disable_cta: !0,
                                            }),
                                            tab: l,
                                        },
                                        r,
                                    );
                                    break;
                                case tS.g.SHELF:
                                    d = (0, c.jsx)(nv, { handleTransition: t, shelf: e, tab: l }, r);
                                    break;
                                case tS.g.COUNTDOWN_TIMER:
                                    (d = (0, c.jsx)(tM, { countdownTimerBlock: e, isVisible: i }, r)), (u = !0);
                                    break;
                                case tS.g.IMMERSIVE_BANNER:
                                    d = (0, c.jsx)(
                                        nc,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => o(!e) },
                                        r,
                                    );
                                    break;
                                case tS.g.REWARD_HERO:
                                    d = (0, c.jsx)(nS, { isLoading: _, handleTransition: t, heroBlock: e, tab: l }, r);
                                    break;
                                case tS.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER: {
                                    let { isDismissed: t } = (0, tL.En)(
                                        tv.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
                                    );
                                    if (t) return null;
                                    return (0, c.jsx)(
                                        tI,
                                        {
                                            blockType: e.type,
                                            children: (0, c.jsx)(nH, {
                                                onDismiss: () => {
                                                    (0, tL.d6)(
                                                        tv.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
                                                        {},
                                                    );
                                                },
                                                applicationId: e.applicationId,
                                                headerText: e.headerText,
                                                gradientColors: e.gradientColors,
                                                gradientAngle: e.gradientAngle,
                                                skuIds: e.skuIds,
                                                tab: l,
                                            }),
                                        },
                                        r,
                                    );
                                }
                                default:
                                    return null;
                            }
                            return (0, c.jsx)(
                                tI,
                                {
                                    blockType: e.type,
                                    children: (0, c.jsx)("div", {
                                        className: g()(tF.v1, tF.Of, { [tF.J1]: 0 === r || u }),
                                        children: d,
                                    }),
                                },
                                r,
                            );
                        })(e, a > 0 ? p[a - 1] : null, a),
                    ),
                });
    },
    nX = (e) => {
        let { handleTransition: t, tab: n, transitionState: s } = e,
            l = d.useRef(null),
            { handleScroll: a } = ea(l, n),
            r = (0, eD.U)(),
            i = (0, L.uM)(),
            [o, u] = d.useState(R.md),
            [g, h] = d.useState(!1);
        return (
            d.useEffect(() => {
                if (null != l.current) {
                    let e = () => {
                            if (null == l.current) return;
                            let e = l.current.getDistanceFromBottom();
                            o >= 36 ? h(e < 20) : e <= 200 && u((e) => e + R.md);
                        },
                        t = l.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [l, o, u, h]),
            (0, c.jsx)(X.Ch, {
                className: tF.OW,
                ref: l,
                onScroll: a,
                children: (0, c.jsxs)("div", {
                    className: tF.bx,
                    children: [
                        (0, c.jsxs)("div", {
                            className: tF.rb,
                            children: [
                                (0, c.jsx)(nq, {
                                    handleTransition: t,
                                    numVisibleItems: o,
                                    isFetchingCategories: r,
                                    tab: n,
                                }),
                                n !== R.G2.CATALOG &&
                                    o >= 36 &&
                                    (0, c.jsxs)("div", {
                                        className: tF.R$,
                                        children: [
                                            (0, c.jsx)(eo.D, {
                                                variant: "heading-md/semibold",
                                                children: G.intl.string(G.t.Yr70c4),
                                            }),
                                            (0, c.jsx)(et.$, {
                                                variant: "primary",
                                                text: G.intl.string(G.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: i?.sessionId,
                                                            page_type: n,
                                                            page_category: n === R.G2.HOME ? void 0 : i?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, c.jsx)(nK, { peaking: g, transitioning: s === R.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var nQ = n(154323),
    n0 = n(295811);
let n1 = () =>
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
    n2 = (e) => {
        let { tab: t } = e,
            [n, s, l] = (0, N.yK)([k.A], () => [k.A.getLayout(t), k.A.isFetchingLayout(t), k.A.getLayoutFetchError(t)]),
            a = (0, N.bG)([nQ.A], () => nQ.A.get("shop_include_unpublished")),
            r = (0, N.bG)([j.A], () => j.A.skipNumCategories),
            i = d.useMemo(() => ({ include_unpublished: a ?? !1, skip_num_categories: r ?? 0 }), [a, r]),
            o = null == n && !s && l?.status !== 404 && l?.status !== 429;
        return (d.useEffect(() => {
            o && (0, np.T2)({ tab: t });
        }, [o, t]),
        null == n)
            ? t !== K.HOME || o || s
                ? null
                : (0, c.jsx)(er.Z_, { tenantId: B.FYj, templateId: "shop-home", requestParams: i })
            : (0, c.jsxs)(c.Fragment, {
                  children: [t === K.ORBS && (0, c.jsx)(n1, {}), (0, c.jsx)(er.Qs, { tenantId: B.FYj, layoutId: n })],
              });
    },
    n4 = (e) => {
        let { url: t } = e,
            [n, s] = d.useState(null);
        return (d.useEffect(() => {
            (async () => {
                try {
                    let e = await fetch(t),
                        n = await e.json();
                    s(n);
                } catch (e) {
                    s(null);
                }
            })();
        }, [t]),
        null == n)
            ? null
            : (0, c.jsx)(er.Ay, { layout: n });
    },
    n5 = (e) => {
        let { handleTransition: t, tab: n, transitionState: s } = e,
            l = (0, L.uM)(),
            a = (0, N.bG)([n0.A], () => n0.A.getShopLayoutUrlOverride()),
            r = d.useRef(null),
            { handleScroll: i } = ea(r, n),
            [o, u] = d.useState(R.md),
            [h, _] = d.useState(!1);
        return (
            d.useEffect(() => {
                if (null != r.current) {
                    let e = () => {
                            if (null == r.current) return;
                            let e = r.current.getDistanceFromBottom();
                            o >= 36 ? _(e < 20) : e <= 200 && u((e) => e + R.md);
                        },
                        t = r.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [r, o, u, _]),
            (0, c.jsx)(X.Ch, {
                className: tF.OW,
                ref: r,
                onScroll: i,
                children: (0, c.jsxs)("div", {
                    className: tF.bx,
                    children: [
                        (0, c.jsxs)("div", {
                            className: g()(tF.rb, tF.GS),
                            children: [
                                null != a && "" !== a ? (0, c.jsx)(n4, { url: a }) : (0, c.jsx)(n2, { tab: n }),
                                n !== K.CATALOG &&
                                    o >= 36 &&
                                    (0, c.jsxs)("div", {
                                        className: tF.R$,
                                        children: [
                                            (0, c.jsx)(eo.D, {
                                                variant: "heading-md/semibold",
                                                children: G.intl.string(G.t.Yr70c4),
                                            }),
                                            (0, c.jsx)(et.$, {
                                                variant: "primary",
                                                text: G.intl.string(G.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: l?.sessionId,
                                                            page_type: n,
                                                            page_category: n === K.HOME ? void 0 : l?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, c.jsx)(nK, { peaking: h, transitioning: s === R.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var n3 = n(256067);
let n6 = () =>
        (0, c.jsxs)("div", {
            className: n3.z,
            children: [
                (0, c.jsx)("img", {
                    className: n3.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: G.intl.string(G.t["p8+qtU"]),
                }),
                (0, c.jsx)(eo.D, { variant: "heading-xl/semibold", children: G.intl.string(G.t["p8+qtU"]) }),
                (0, c.jsx)(ee.E, { variant: "text-md/medium", children: G.intl.string(G.t.UEiyvs) }),
            ],
        }),
    n8 = [R.G2.HOME, R.G2.ORBS];
function n9(e) {
    let {
            tab: t,
            categories: n,
            transitionToTab: s,
            transitionState: l,
            updateAnalyticsState: a,
            refreshCategories: r,
        } = e,
        i = n7();
    se(i);
    let o = (0, N.bG)([$.A], () => $.A.useReducedMotion),
        [u, g] = d.useState(void 0),
        [h, _] = d.useState(!0),
        m = d.useMemo(
            () =>
                n.filter(
                    (e) =>
                        !R.MS.some((t) => {
                            let { categorySkuId: n } = t;
                            return n === e.skuId;
                        }),
                ),
            [n],
        ),
        p = (0, Y.f)("CollectiblesContent"),
        f = d.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: l,
                    isInternalShopDeeplink: r,
                    isOrbsExclusive: i,
                } = e;
                a(t, n);
                let c = l && !o,
                    d = i ? R.G2.ORBS : R.G2.CATALOG;
                g(n), _(!r), s(d, c);
            },
            [o, s, a],
        ),
        { searchError: E } = (0, q.S)();
    return null != E
        ? (0, c.jsx)(n6, {})
        : null != i
          ? (0, c.jsx)(tA.h, { onRetry: r, errorMessage: i, errorOrigin: tA.A.SHOP_PAGE })
          : t === R.G2.HOME && p
            ? (0, c.jsx)(n5, { tab: K.HOME, transitionState: l, handleTransition: f })
            : t === R.G2.ORBS && p
              ? (0, c.jsx)(n5, { tab: K.ORBS, transitionState: l, handleTransition: f })
              : n8.includes(t)
                ? (0, c.jsx)(nX, { handleTransition: f, tab: t, transitionState: l })
                : (0, c.jsx)(tC, {
                      tab: t,
                      categories: m,
                      initialCategoryId: u,
                      showFilterInitially: h,
                      onUnmount: () => {
                          g(void 0), _(!0);
                      },
                  });
}
let n7 = () =>
        (0, N.bG)([j.A, J.A], () =>
            null != j.A.error
                ? `shop load fetch categories error: ${j.A.error.message}`
                : null != J.A.claimError
                  ? `shop load claim error: ${J.A.claimError.message}`
                  : null != J.A.fetchError
                    ? `shop load fetch purchase error: ${J.A.fetchError.message}`
                    : void 0,
        ),
    se = (e) => {
        let t = (0, N.bG)([v.default], () => v.default.getCurrentUser()),
            { noCache: n, includeUnpublished: s } = (0, ew.A)();
        d.useEffect(() => {
            null != e &&
                Z.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: s.toString(),
                    },
                });
        }, [e, t, n, s]);
    };
var st = n(70426);
n(323874), n(14289), n(35956);
var sn = n(873263),
    ss = n(858897),
    sl = n(496431),
    sa = n(893489);
let sr = { pink: "pinkCountdown" },
    si = d.memo(function (e) {
        let { message: t, onClick: n, countdownEndDate: s, variant: l } = e,
            a = d.useMemo(() => {
                if (null == s) return null;
                let e = s instanceof Date ? s : new Date(s);
                return isNaN(e.getTime()) ? null : e;
            }, [s]),
            r = (0, sl.A)(a ?? 0, 1e3, void 0, null == a);
        if (null != a && Object.values(r).every((e) => 0 === e)) return null;
        let i = null != l ? sa[l] : void 0,
            o = null != l ? sa[sr[l]] : void 0;
        return (0, c.jsx)(eQ.D, {
            className: g()(sa.nagBar, i),
            onClick: n,
            "aria-label": G.intl.string(G.t["wjws+K"]),
            children: (0, c.jsxs)("div", {
                className: sa.content,
                children: [
                    (0, c.jsx)(ee.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: sa.message,
                        children: t,
                    }),
                    null != a && (0, c.jsx)(tB.e, { endDate: a, size: "md", className: o, showSeconds: !0 }),
                ],
            }),
        });
    });
var so = n(870308),
    sc = n(650583);
let sd = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: s } = e,
            l = (0, m.useHasAnyModalOpen)();
        return (
            d.useEffect(() => {
                if (!n || l) return;
                let e = (e) => {
                    e.key === sc.N$.Escape && s();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [n, l, s]),
            t
        );
    },
    su = function (e) {
        let { tab: t = R.G2.HOME } = e;
        (0, A.P)(b.a), (0, z.g)();
        let n = (0, E.A)((0, h.A)()),
            s = (0, _.bG)([v.default], () => v.default.getCurrentUser());
        (0, S.pE)();
        let l = (0, eK.yB)("CollectiblesShop"),
            { onClose: a } = (function () {
                let { search: e } = (0, sn.zy)(),
                    t = (0, sn.g)(),
                    n = d.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                    s = null != n ? parseInt(n, 10) : null;
                return {
                    onClose: d.useCallback(() => {
                        if (0 === s) {
                            (0, nY.aX)(), (0, ss.openUserSettings)();
                            return;
                        }
                        (0, nY.EL)() ? (0, nY.aX)() : (0, nY.pX)(B.BVt.APP);
                    }, [s]),
                    source: s,
                    ...t,
                };
            })(),
            { currentTab: r, hasFilters: i } = (0, V.v)(),
            o = d.useMemo(() => (t === R.G2.HOME && null != r && i() ? r : t), [t, r, i]),
            { categories: u, refreshCategories: m } = (0, U.Ay)({ logPerf: !0 }, { sessionId: n, tab: o }),
            T = d.useMemo(() => [...u.values()], [u]),
            [k, K] = d.useState(),
            $ = (0, _.bG)([j.A], () => j.A.getCategory(k)?.name),
            [Y, Z] = d.useState();
        (0, eU.XU)(n);
        let J = d.useCallback((e, t) => {
                Z(e), K(t);
            }, []),
            { selectedTab: q, transitionState: X, transitionToTab: Q } = (0, W.o)(o);
        (0, C.HU)({ location: G.intl.string(G.t.pWG4ze) }),
            ((e, t, n, s, l) => {
                let {
                    analyticsLocations: a,
                    analyticsSource: r,
                    currentTabLocation: i,
                    newestAnalyticsLocation: o,
                } = M(t);
                d.useEffect(() => {
                    if (s !== R.Pf.VISIBLE || o !== i) return;
                    let c = t === R.G2.CATALOG ? l : r;
                    y.default.track(B.HAw.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: a,
                        source: c,
                        page_session_id: e,
                        page_type: t === R.G2.CATALOG ? "full" : t,
                        category: t === R.G2.HOME ? void 0 : n,
                    });
                }, [a, e, t, n, i, s, l, r, o]);
            })(n, q, $, X, Y),
            ((e, t) => {
                let { analyticsLocations: n } = M(e);
                d.useEffect(() => {
                    null == t ||
                        O.Ay.canUseCollectibles(t) ||
                        y.default.track(B.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: P.e.COLLECTIBLES_SHOP,
                            location_stack: n,
                        });
                }, [n, t]);
            })(q, s);
        let { dismissShopButtonDC: ee } = (0, so.A)();
        d.useEffect(() => {
            ee();
        }, [ee]),
            d.useEffect(() => {
                (0, f.I)(B.BVt.COLLECTIBLES_SHOP);
            }, []);
        let et = d.useRef(null),
            en = d.useRef(null);
        (0, p.t)(et),
            d.useEffect(() => {
                en.current?.focus();
            }, []),
            (0, eK.gB)();
        let { analyticsLocations: es } = M(q),
            el = (function (e, t) {
                let n = (0, N.bG)([w.A], () => w.A.getUserDiscount(P.tU)),
                    s = (0, N.bG)([D.default], () => D.default.locale),
                    l = H.useConfig({ location: t }).enabled;
                if (d.useMemo(() => null != n && l && e !== R.G2.ORBS, [n, l, e])) {
                    let e =
                        null != n && null != n.expiresAt
                            ? new Date(n.expiresAt).toLocaleDateString(s, { day: "numeric", month: "numeric" })
                            : void 0;
                    return { type: 0, countdownEndDate: n?.expiresAt, message: G.intl.format(G.t.RCo9MF, { date: e }) };
                }
            })(q, "collectibles_shop");
        return (0, c.jsx)(x.f5, {
            value: es,
            children: (0, c.jsx)(L.R9, {
                newValue: { sessionId: n, pageCategory: $, pageSize: R.l5 },
                children: (0, c.jsx)(I.iM, {
                    tab: q,
                    children: (0, c.jsx)(sd, {
                        onClose: a,
                        shouldAddEventListener: !1,
                        children: (0, c.jsxs)("div", {
                            className: g()(ek.bx, { [eK.jP]: l }),
                            ref: en,
                            tabIndex: -1,
                            children: [
                                (0, c.jsx)(st.G, { handleTransition: Q, selectedTab: q }),
                                null != el &&
                                    el.type === F.COUNTDOWN &&
                                    (0, c.jsx)(si, {
                                        message: el.message,
                                        onClick: () => Q(R.G2.HOME),
                                        variant: "pink",
                                        countdownEndDate: el.countdownEndDate,
                                    }),
                                (0, c.jsx)("div", {
                                    className: g()(ek.td, {
                                        [ek.RK]: X === R.Pf.VISIBLE,
                                        [ek.in]: X === R.Pf.IN,
                                        [ek.FD]: X === R.Pf.OUT,
                                    }),
                                    children: (0, c.jsx)(n9, {
                                        tab: q,
                                        refreshCategories: m,
                                        transitionToTab: Q,
                                        transitionState: X,
                                        categories: T,
                                        updateAnalyticsState: J,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        });
    };
