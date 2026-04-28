"use strict";
n.r(t), n.d(t, { default: () => sp });
var s,
    l,
    a,
    r,
    i,
    o,
    c = n(627968),
    d = n(64700),
    u = n(503698),
    _ = n.n(u),
    g = n(132500),
    h = n(702841),
    m = n(192308),
    f = n(315710),
    p = n(944791),
    x = n(444927),
    E = n(688810),
    C = n(726249),
    b = n(475073),
    S = n(611924),
    v = n(594832),
    A = n(287809),
    L = n(440938),
    I = n(590180),
    T = n(161918),
    j = n(17928),
    N = n(793574),
    k = n(954571),
    y = n(927578),
    O = n(870216),
    R = n(758836),
    B = n(652215),
    P = n(788868);
let M = (e) => {
    let { analyticsSource: t, analyticsLocations: n } = (0, j.cf)([O.A], () => O.A.getAnalytics()),
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
                case R.G2.RIVALS:
                case R.G2.GAME_SHOPS:
                    return N.A.SLAYER_STOREFRONT_SHOP_TAB;
            }
        })(e),
        { analyticsLocations: l, newestAnalyticsLocation: a } = (0, E.Ay)([...n, N.A.COLLECTIBLES_SHOP, s]);
    return { analyticsSource: t, analyticsLocations: l, newestAnalyticsLocation: a, currentTabLocation: s };
};
var w = n(773669),
    D = n(248352);
let H = (0, n(945810).mj)({
    name: "2026-01-valentines-day-drop",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 } },
});
var G = n(985018),
    F = (((s = {})[(s.COUNTDOWN = 0)] = "COUNTDOWN"), s),
    U = n(841702),
    W = n(621653),
    V = n(983545),
    z = n(23161),
    K = (((l = {}).HOME = "home"), (l.CATALOG = "catalog"), (l.ORBS = "orbs"), l),
    Y = n(775602),
    $ = n(287344),
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
                k.default.track(e, {
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
    let { itemTypeFilters: e, searchQuery: t } = (0, z.v)((e) => e),
        { totalCount: n, isFetchingResults: s } = (0, q.S)(),
        l = (0, z.v)((e) => e.hasFilters()),
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
    e_ = n(940980),
    eg = n(993408),
    eh = n(623373),
    em = n(660653),
    ef = n(466459);
let ep = () => {
    let e = (0, h.bG)([A.default], () => A.default.getCurrentUser()),
        t = y.Ay.canUseShopDiscounts(e);
    return (0, d.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: n } = (0, ef.o)(J.A, e);
                      if (!(0, eg.aw)(e) || (0, eg.tt)(e) || n) return !0;
                      if (!(0, em.uh)(e)) return !1;
                      if ((0, eh.Ab)(e)) return null != (0, eh.CW)({ product: e, hasShopDiscount: t });
                      let s = (0, eg.l8)(t),
                          l = (0, eg.yt)(e, s);
                      if (null == l || 0 === l.amount) return !0;
                      let a = 0;
                      return (
                          null != e.bundledProducts &&
                              (a = e.bundledProducts.reduce((e, t) => {
                                  let n = (0, eg.yt)(t, s);
                                  return e + (n?.amount ?? 0);
                              }, 0)),
                          l.amount < a
                      );
                  }),
        [t],
    );
};
var ex = n(575593);
let eE = (e, t) =>
        e.type === ex.R.BUNDLE && e.items.some((e) => t.includes(e.skuId))
            ? 1
            : (0, eh.B1)(e)
              ? 2 * !!e.variants.every((e) => t.includes(e.skuId))
              : 2 * !!t.includes(e.skuId),
    eC = (e) => {
        let t = (0, h.bG)([J.A], () => J.A.purchases),
            n = (0, d.useMemo)(
                () =>
                    [...t].map((e) => {
                        let [t] = e;
                        return t;
                    }),
                [t],
            );
        return (0, d.useMemo)(() => [...e].sort((e, t) => eE(e, n) - eE(t, n)), [e, n]);
    };
var eb = n(100057),
    eS = n(653887),
    ev = n(607470),
    eA = n(531685),
    eL = n(203312),
    eI = n(212407),
    eT = n(215688);
function ej(e) {
    let { category: t } = e,
        n = (0, h.bG)([Y.A], () => Y.A.useReducedMotion),
        s = (0, h.bG)([eA.A], () => eA.A.isFocused()),
        { catalogBannerStatic: l, catalogBannerAnimated: a, catalogBannerRive: r } = (0, eI.MV)(t),
        i = d.useRef(null),
        o = null != r;
    return (0, c.jsxs)("div", {
        ref: i,
        className: _()(eT.sW, { [eT.by]: o }),
        children: [
            o
                ? (0, c.jsx)(eS._, {
                      src: r,
                      fit: "cover",
                      alignment: "center-left",
                      style: { width: "100%", height: "100%" },
                      eventTargetRef: i,
                      autoplay: !0,
                  })
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          (0, c.jsx)("img", { className: eT.ze, src: l, alt: t.name }),
                          null != a &&
                              !n &&
                              s &&
                              (0, c.jsx)(ev.A, { src: a, className: eT.tr, autoPlay: !0, loop: !0 }),
                      ],
                  }),
            (0, c.jsx)(eL.A, { category: t, className: eT.v0, daysRemainingText: G.t["8gsP5M"] }),
        ],
    });
}
(0, eg.$b)(90);
var eN = n(496569),
    ek = n(835090);
let ey = (e) => {
    let { skipPulseAnimation: t = !1 } = e;
    return (0, c.jsx)("div", {
        className: _()(eN.ty, ek.SQ, { [ek.aE]: !t }),
        children: (0, c.jsxs)("div", {
            className: _()(eN.qt, ek.yw),
            children: [(0, c.jsx)("div", { className: ek.Jr }), (0, c.jsx)("div", { className: ek.N9 })],
        }),
    });
};
var eO = n(647685),
    eR = n(10);
let eB = () =>
    (0, c.jsx)("div", {
        className: eR.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, c.jsxs)(
                "div",
                {
                    className: eO.vY,
                    children: [
                        (0, c.jsx)("div", { className: _()(eT.sW, eR.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, c.jsx)(ey, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
var eP = n(491438),
    eM = n(561769),
    ew = n(159439),
    eD = n(998694);
function eH(e) {
    let { category: t } = e,
        n = (0, h.bG)([A.default], () => A.default.getCurrentUser()),
        s = eC(t.products),
        l = ep()(s),
        a = (0, e_.W)("CollectiblesCatalogContent");
    return null == n || 0 === l.length
        ? null
        : (0, c.jsx)("div", {
              className: eO.vY,
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
        className: eO.EF,
        ref: l,
        children: [(0, c.jsx)(ej, { category: t }), (0, c.jsx)(eH, { category: t })],
    });
}
function eF(e) {
    let { categories: t, setCategoryRef: n, currentPage: s, handlePageChange: l, initialCategoryId: a } = e,
        r = (0, L.uM)(),
        i = (0, ew.U)(),
        o = r?.sessionId ?? "",
        { noCache: u, includeUnpublished: _ } = (0, eD.A)(),
        g = d.useMemo(
            () =>
                t
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [t],
        ),
        h = d.useRef(void 0);
    d.useEffect(() => {
        if (null == a || 0 === g.length) {
            h.current = void 0;
            return;
        }
        if (a === h.current) return;
        let e = g.findIndex((e) => e.skuId === a);
        if (-1 === e) return;
        let t = Math.floor(e / R.l5) + 1;
        t !== s && l(t), (h.current = a);
    }, [a, g, l, s]);
    let m = d.useMemo(() => {
        let e = (s - 1) * R.l5;
        return g.slice(e, e + R.l5);
    }, [g, s]);
    return (d.useEffect(() => {
        (0, eb.z)({
            sessionId: o,
            checkpoint: eb.t.SHOP_MOUNTED,
            tab: R.G2.CATALOG,
            unpublishedCategoriesShown: _,
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
                unpublishedCategoriesShown: _,
                cacheDisabled: u,
            });
    }, [o, _, u, i, m.length]),
    i)
        ? (0, c.jsx)(eB, {})
        : (0, c.jsxs)("div", {
              className: eO.LZ,
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
                      className: eO.Ej,
                      children: (0, c.jsx)(eu.m, {
                          currentPage: s,
                          totalCount: g.length,
                          pageSize: R.l5,
                          onPageChange: l,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var eU = n(177366),
    eW = n(401864),
    eV = n(124987),
    ez = n(691885),
    eK = n(146919),
    eY = n(912853);
let e$ = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, z.v)(),
        s = (0, L.uM)(),
        l = (0, eK.yB)("CollectiblesSortSelect"),
        a = n(),
        r = d.useMemo(() => R.QB.filter((e) => e.sortType !== eV.$.RELEVANCE || a), [a]),
        i = d.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === eV.$.RECENCY
                ? { label: G.intl.string(G.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === eV.$.PRICE
                  ? n === eW.A.ASC
                      ? { label: G.intl.string(G.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: G.intl.string(G.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === eV.$.RELEVANCE
                    ? { label: G.intl.string(G.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: G.intl.string(G.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        o = d.useCallback(
            (e) =>
                ({
                    recent: { sortType: eV.$.RECENCY, sortDirection: eW.A.DESC },
                    "price-asc": { sortType: eV.$.PRICE, sortDirection: eW.A.ASC },
                    "price-desc": { sortType: eV.$.PRICE, sortDirection: eW.A.DESC },
                    popularity: { sortType: eV.$.POPULARITY, sortDirection: eW.A.DESC },
                    relevance: { sortType: eV.$.RELEVANCE, sortDirection: eW.A.DESC },
                })[e],
            [],
        ),
        u = d.useCallback(
            (e) => {
                let n = i(o(e));
                k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        g = i(e);
    return (0, c.jsx)("div", {
        className: _()(eY.k, { [eK.jP]: l }),
        children: (0, c.jsx)(ez.l, {
            label: G.intl.string(G.t.uaX705),
            hideLabel: !0,
            options: r.map(i),
            onSelectionChange: u,
            value: g.value,
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
    e9 = n(685761),
    e8 = n(157225),
    e7 = n(413249),
    te = n(510241),
    tt = n(601198),
    tn = n(736653),
    ts = n(270051),
    tl = n(818348),
    ta = n(764915);
function tr() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: n, hasFilters: s } = (0, z.v)(),
        l = s(),
        { enabled: a } = (0, ts.Z)({ location: "Shop" }),
        r = (0, L.uM)(),
        i = d.useCallback(
            (e) => {
                k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                className: _()(ta.KZ, ta.YG),
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
            { itemTypeFilters: l, onToggleItemType: a } = (0, z.v)();
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
            { colorFilters: s, onToggleColor: l } = (0, z.v)();
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
                        className: _()(ta.n1, { [ta.lx]: l }),
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
            { themeFilters: n, onToggleTheme: s } = (0, z.v)(),
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
                        icon: (0, c.jsx)(e9.f, { size: "xs", color: r(eJ.FANTASY) }),
                        enum: eJ.FANTASY,
                    },
                    {
                        name: G.intl.string(G.t["w0nSG/"]),
                        icon: (0, c.jsx)(e8.N, { size: "xs", color: r(eJ.ANIMALS_PETS) }),
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
                                className: _()(ta.w4, { [ta.C7]: n.has(i) }),
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
var t_ = n(687971);
function tg() {
    return (0, c.jsxs)("div", {
        className: t_.k,
        children: [
            (0, c.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: G.intl.string(G.t.oezC3x),
                className: t_._,
            }),
            (0, c.jsx)(eo.D, { variant: "heading-xl/semibold", children: G.intl.string(G.t.oezC3x) }),
            (0, c.jsx)(ee.E, { variant: "text-md/medium", children: G.intl.string(G.t["Tc/Ndl"]) }),
        ],
    });
}
var th = n(528096);
let tm = { flattenProductVariants: !0 };
function tf(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: s } = e,
        l = (0, L.uM)(),
        a = l?.sessionId ?? "",
        { noCache: r, includeUnpublished: i } = (0, eD.A)(),
        o = (0, e_.W)("CollectiblesFilterResults"),
        u = (0, h.bG)([A.default], () => A.default.getCurrentUser()),
        { skus: g, currentPage: m, totalCount: f, isFetchingResults: p } = (0, q.S)(),
        x = (0, h.yK)([I.A], () => I.A.getProductsBySkus(g)),
        E = d.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        C = g?.join("");
    d.useEffect(() => {
        E();
    }, [C, E]);
    let b = ep(),
        S = d.useMemo(() => b(x), [b, x]);
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
    let v = d.useRef(null),
        { setQueryPageSize: T, setQueryPageOffset: j, queryPageSize: N } = (0, z.v)(),
        [y, O] = d.useState(!1),
        R = t || p || null == u;
    d.useEffect(() => {
        R ? O(!1) : S.length > 0 && O(!0);
    }, [R, S.length]);
    let P = N > 0 && !R && 0 === S.length;
    d.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == v.current || T(Math.floor(5 * getComputedStyle(v.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != v.current) return e.observe(v.current), () => e.disconnect();
    }, [T]);
    let M = d.useCallback(
        (e) => {
            k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: l?.sessionId,
                page_section: l?.pageSection,
                page_category: l?.pageCategory,
                page_index: e,
                page_size: N,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                j((e - 1) * N);
        },
        [l, N, j],
    );
    return (0, c.jsxs)(eM.v3.Provider, {
        value: tm,
        children: [
            (0, c.jsxs)("div", {
                className: _()({ [th.oE]: P }),
                children: [
                    P && (0, c.jsx)(tg, {}),
                    (0, c.jsxs)("div", {
                        className: _()(th.ZE, { [th.Kp]: y }),
                        ref: v,
                        children: [
                            R && [...Array(N)].map((e, t) => (0, c.jsx)(ey, {}, t)),
                            !R &&
                                S.map((e, t) =>
                                    null == I.A.getCategory(e.categorySkuId)
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
            f > N &&
                (0, c.jsx)("div", {
                    className: th.Ej,
                    children: (0, c.jsx)("div", {
                        children: (0, c.jsx)(eu.m, {
                            currentPage: m,
                            totalCount: f,
                            pageSize: N,
                            onPageChange: M,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var tp = n(832179);
function tx(e) {
    let { tab: t, categories: n, initialCategoryId: s, showFilterInitially: l = !0, onUnmount: a } = e;
    (0, z.S)();
    let r = d.useRef(null),
        { handleScroll: i } = ea(r, t),
        o = (0, $.f)("Shop Browse"),
        { setCategoryRef: u, handleScrollToCategory: _ } = (0, eU.k0)(r.current),
        [g, h] = d.useState(l),
        [m, f] = d.useState(!1);
    return (
        d.useEffect(() => {
            null != s && _(s);
        }, [s, _]),
        d.useEffect(
            () => () => {
                null != a && a();
            },
            [],
        ),
        d.useEffect(() => {
            let e = () => {
                f(window.innerWidth < 1400);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, c.jsx)("div", {
            className: tp.VM,
            children: (0, c.jsxs)("main", {
                className: tp.MY,
                children: [
                    (0, c.jsx)(X.Gt, {
                        className: tp.OW,
                        ref: r,
                        onScroll: i,
                        children: o
                            ? (0, c.jsx)("div", {
                                  className: tp.en,
                                  children: (0, c.jsx)("div", {
                                      className: tp.pf,
                                      children: (0, c.jsx)(er.Z_, { tenantId: B.FYj, templateId: "back-catalog" }),
                                  }),
                              })
                            : (0, c.jsx)(tE, {
                                  isSmallScreen: m,
                                  filterBarOpen: g,
                                  setFilterBarOpen: h,
                                  tab: t,
                                  scrollerRef: r,
                                  categories: n,
                                  setCategoryRef: u,
                                  initialCategoryId: s,
                              }),
                    }),
                    g && !m && (0, c.jsx)("div", { className: tp.yF }),
                    g && !m && (0, c.jsx)(Q.Ip, { className: tp.kT, children: (0, c.jsx)(tr, {}) }),
                ],
            }),
        })
    );
}
let tE = (e) => {
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
        g = (0, z.v)((e) => e.hasDefaultFilters()),
        h = (0, L.uM)(),
        { handlePageChange: m, currentPage: f } = ((e) => {
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
        p = d.useCallback(
            (e) => {
                k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: h?.sessionId,
                    page_section: h?.pageSection,
                    page_category: h?.pageCategory,
                    page_index: e,
                    page_size: h?.pageSize,
                    cta_name: `catalog page ${e}`,
                    page_type: "catalog",
                }),
                    m(e);
            },
            [h, m],
        ),
        x = d.useRef(null);
    return (
        d.useEffect(() => {
            if (!t || !n) return;
            let e = (e) => {
                let t = e.target;
                null === u.current ||
                    null === x.current ||
                    u.current.contains(t) ||
                    x.current.contains(t) ||
                    (k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        }, [t, n, s, h]),
        (0, c.jsx)("div", {
            className: tp.en,
            children: (0, c.jsxs)("div", {
                className: tp.pf,
                children: [
                    (0, c.jsxs)("div", {
                        className: tp.ne,
                        children: [
                            (0, c.jsx)("div", { className: tp.lQ, children: (0, c.jsx)(ec, {}) }),
                            (0, c.jsxs)("div", {
                                className: _()(tp.wR, { [tp.Im]: t }),
                                children: [
                                    (0, c.jsxs)("div", {
                                        className: tp.Ul,
                                        children: [
                                            (0, c.jsx)(ee.E, {
                                                variant: "text-md/semibold",
                                                children: G.intl.string(G.t.uaX705),
                                            }),
                                            (0, c.jsx)(e$, {}),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        ref: x,
                                        children: (0, c.jsx)(et.$, {
                                            onClick: () => {
                                                let e = !n;
                                                k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                    className: tp.Dh,
                                    ref: u,
                                    children: (0, c.jsx)(X.Ch, { className: tp.Qo, children: (0, c.jsx)(tr, {}) }),
                                }),
                        ],
                    }),
                    g
                        ? (0, c.jsx)(L.R9, {
                              newValue: { pageIndex: f },
                              children: (0, c.jsx)(eF, {
                                  categories: r,
                                  setCategoryRef: i,
                                  currentPage: f,
                                  handlePageChange: p,
                                  initialCategoryId: o,
                              }),
                          })
                        : (0, c.jsx)(tf, { scrollerRef: a, tab: l }, l),
                ],
            }),
        })
    );
};
var tC = n(599062),
    tb = n(651162),
    tS = n(554146),
    tv = n(367727);
let tA = d.createContext(null);
function tL(e) {
    let { blockType: t, children: n } = e,
        s = d.useMemo(() => ({ blockType: t }), [t]);
    return (0, c.jsx)(tA.Provider, { value: s, children: n });
}
var tI = n(755172),
    tT = n(325595),
    tj = n(893998),
    tN = n(508770),
    tk = n(403581),
    ty = n(13875),
    tO = n(437032);
let tR = (e) => {
    let { location: t } = e;
    return (0, ty.Do)(t)
        ? (0, c.jsx)(eq.m, {
              position: "top",
              text: G.intl.string(G.t["L9B+ZZ"]),
              children: (0, c.jsx)("span", {
                  className: tO.h,
                  children: (0, c.jsx)(tN.E, { type: "early_access", variant: "expressive", icon: tk.t }),
              }),
          })
        : null;
};
var tB = n(123924),
    tP = n(607399),
    tM = n(946015),
    tw = n(717421),
    tD = n(854818),
    tH = n(134264);
let tG = d.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        s = (0, tw.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsxs)(tB.animated.div, {
        className: _()([tH.lP, tP.Fr && tH.yJ]),
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
            (0, c.jsxs)(tM.s, {
                direction: tM.s.Direction.VERTICAL,
                children: [
                    (0, c.jsx)(ee.E, {
                        variant: "text-md/medium",
                        className: tH.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, c.jsx)(ee.E, {
                            variant: "text-sm/medium",
                            className: tH.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, c.jsx)(tD.e, { endDate: t.endTime }),
        ],
    });
});
var tF = n(424918),
    tU = n(230109),
    tW = n(777666),
    tV = n(597783),
    tz = n(941734);
let tK = (e) => {
        let t,
            { category: n, subblock: s, badgeText: l, enablePreview: a, handleTransition: r } = e;
        null != s && (t = I.A.getCategoryByStoreListingId(s?.categoryStoreListingId)?.skuId);
        let i = t ?? n?.skuId ?? "",
            { handleCardVisibilityChange: o } = (0, tV.Z)(i, "home", "marketing featured block"),
            u = (0, eI.s4)(n, s, a),
            _ = d.useRef(null),
            g = s?.bodyText,
            h = (0, L.uM)();
        return (0, c.jsx)(tU.L, {
            innerRef: _,
            onChange: o,
            threshold: 0,
            children: (0, c.jsxs)(eQ.D, {
                className: tz.oT,
                innerRef: _,
                style: { ...(null != u && { backgroundImage: `url(${u})` }) },
                onClick: () => {
                    r({
                        sourceButton: "shop marketing tile",
                        categorySkuId: i,
                        isInternalShopDeeplink: !0,
                        isOrbsExclusive: n?.isOrbsExclusive,
                    }),
                        k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    null != l && (0, c.jsx)(tW.Lp, { disableColor: !0, text: l, className: tz.pv }),
                    (0, c.jsx)("div", {
                        className: tz.Gh,
                        children:
                            null != g &&
                            (0, c.jsx)(eo.D, {
                                lineClamp: 4,
                                className: tz.BN,
                                style: { color: s?.bannerTextColor ?? "white" },
                                variant: "heading-md/medium",
                                children: g,
                            }),
                    }),
                    (0, c.jsx)("div", {
                        className: tz.b2,
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
                                    k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    tY = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e;
        return (0, c.jsx)("div", {
            className: _()(tz.n9, tz.YB),
            children: n?.subblocks.map((e, n) =>
                e.type === tF.u.CATEGORY
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
                                  tK,
                                  {
                                      subblock: e,
                                      enablePreview: 0 === n,
                                      badgeText: (0, eg.HF)(e.unpublishedAt) ? G.intl.string(G.t["h/uBCR"]) : void 0,
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
    t$ = (e) => {
        let { handleTransition: t, categories: n } = e;
        if (null == n || n.length < 2) return null;
        let [s, l] = n;
        return (0, c.jsx)("div", {
            className: _()(tz.n9, tz.YB),
            children: (0, c.jsxs)(L.R9, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != s ? s.name : l?.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == s),
                },
                children: [
                    null != s &&
                        (0, c.jsx)(tK, {
                            category: s,
                            enablePreview: !0,
                            badgeText: (0, eg.HF)(s.unpublishedAt) ? G.intl.string(G.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                    null != l &&
                        (0, c.jsx)(tK, {
                            category: l,
                            badgeText: (0, eg.HF)(l.unpublishedAt) ? G.intl.string(G.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                ],
            }),
        });
    },
    tZ = (e) => {
        let { isLoading: t, handleTransition: n, categories: s, featuredBlockRecord: l } = e,
            { analyticsLocations: a } = (0, E.Ay)(N.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
        return t
            ? (0, c.jsxs)("div", {
                  className: _()(tz.n9, tz.YB),
                  children: [
                      (0, c.jsx)("div", {
                          className: _()(tz.Jn, tz.oT),
                          children: (0, c.jsx)("div", { className: tz.uy }),
                      }),
                      (0, c.jsx)("div", {
                          className: _()(tz.Jn, tz.oT),
                          children: (0, c.jsx)("div", { className: tz.uy }),
                      }),
                  ],
              })
            : null != l
              ? (0, c.jsx)(E.f5, {
                    value: a,
                    children: (0, c.jsx)(tY, { featuredBlockRecord: l, handleTransition: n, isLoading: !1 }),
                })
              : (0, c.jsx)(E.f5, {
                    value: a,
                    children: (0, c.jsx)(t$, { categories: s, handleTransition: n, isLoading: !1 }),
                });
    };
var tJ = n(885574),
    tq = n(975807),
    tX = n(975571),
    tQ =
        (((i = {}).MOUNTED = "mounted"),
        (i.SORT_OUT = "sort-out"),
        (i.SORT_IN = "sort-in"),
        (i.SHUFFLE_OUT = "shuffle-out"),
        (i.SHUFFLE_IN = "shuffle-in"),
        (i.FINISHED = "finished"),
        i);
n(667532);
var t0 = n(735438),
    t1 = n.n(t0),
    t2 =
        (((o = {}).RECOMMENDED = "recommended"),
        (o.POPULAR = "popular"),
        (o.RECENT = "recent"),
        (o.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (o.RANDOM = "random"),
        o),
    t4 = n(153488),
    t5 = n(155999),
    t3 = n.n(t5);
function t6() {
    let e = (0, j.bG)([I.A], () => I.A.products);
    return (0, d.useCallback)(
        (t) =>
            t3()(
                t
                    .map((t) => {
                        let n = e.get(t);
                        return null != n && null != n.variantGroupStoreListingId
                            ? I.A.getProductByStoreListingId(n.variantGroupStoreListingId)
                            : n;
                    })
                    .filter((e) => null != e),
                "storeListingId",
            ),
        [e],
    );
}
let t9 = (e) => {
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
        u = (0, j.bG)([A.default], () => A.default.getCurrentUser()),
        g = y.Ay.canUseShopDiscounts(u),
        h = (0, e_.W)("FeedBlock"),
        m = (0, eK.yB)("FeedBlock"),
        {
            sortType: f,
            setSortType: p,
            sortedItems: x,
            sortOptions: C,
            shuffleProducts: b,
            showRecommendationOption: S,
        } = (function (e) {
            let { sortedSkuIds: t, hasShopDiscount: n, prioritizeUserDiscounts: s, orbsSupportedOnly: l } = e,
                a = (0, j.bG)([t4.A], () => t4.A.hasConsented(B.YAq.PERSONALIZATION)),
                r = d.useMemo(() => t?.[t2.RECOMMENDED] ?? [], [t]),
                i = d.useMemo(() => t?.[t2.POPULAR] ?? [], [t]),
                o = r.length > 0 && a,
                [c, u] = d.useState(o ? t2.RECOMMENDED : t2.POPULAR),
                _ = (0, j.bG)([I.A], () => I.A.productsWithVariantsAsGroup),
                g = d.useMemo(() => (0, eg.CE)(_), [_]),
                h = (0, j.bG)([D.A], () => D.A.getUserDiscounts()),
                m = t6(),
                f = ep(),
                [p, x] = d.useState([]),
                E = d.useCallback(() => {
                    u(t2.RANDOM), x(t1().shuffle(g));
                }, [g]);
            d.useEffect(() => {
                x(t1().shuffle(g));
            }, [g]);
            let C = eC(
                d.useMemo(() => {
                    let e = [];
                    if (c === t2.RECENT) e = g;
                    else if (c === t2.PRICE_LOW_TO_HIGH) e = (0, eg.bf)([...g], n, l);
                    else if (c === t2.RECOMMENDED) {
                        let t = m(r);
                        e = s ? (0, eg.Bs)(t, h) : t;
                    } else if (c === t2.POPULAR) {
                        let t = m(i);
                        e = s ? (0, eg.Bs)(t, h) : t;
                    } else c === t2.RANDOM && (e = p);
                    return l ? (0, eh.ex)(f(e)) : f(e);
                }, [c, l, f, n, g, m, r, s, h, i, p]),
            );
            return {
                sortType: c,
                setSortType: u,
                sortedItems: C,
                sortOptions: d.useMemo(() => {
                    let e = [
                        { value: t2.POPULAR, label: G.intl.string(G.t.Y68e5p) },
                        { value: t2.RECENT, label: G.intl.string(G.t["51Bhiz"]) },
                        { value: t2.PRICE_LOW_TO_HIGH, label: G.intl.string(G.t.m8RVU2) },
                    ];
                    return o && e.unshift({ value: t2.RECOMMENDED, label: G.intl.string(G.t.zPWgFG) }), e;
                }, [o]),
                showRecommendationOption: o,
                shuffleProducts: E,
            };
        })({ sortedSkuIds: s, hasShopDiscount: g, prioritizeUserDiscounts: a, orbsSupportedOnly: o }),
        v = (0, j.bG)([Y.A], () => Y.A.useReducedMotion),
        T = (0, j.bG)([eA.A], () => eA.A.isFocused()),
        O = !v && T,
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
        w = (0, L.uM)(),
        H = w?.sessionId ?? "",
        { analyticsLocations: F } = (0, E.Ay)(N.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
        U = d.useRef(null),
        W = d.useCallback(
            (e) => {
                M({ isShuffling: !1, onOutroComplete: () => p(e) }),
                    k.default.track(B.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, { page_session_id: H, sort_type: e });
            },
            [M, p, H],
        );
    return null == u
        ? null
        : (0, c.jsx)(E.f5, {
              value: F,
              children: (0, c.jsxs)("div", {
                  className: _()(tz.lD, tz.YB),
                  children: [
                      (0, c.jsxs)("div", {
                          className: tz.$6,
                          children: [
                              (0, c.jsxs)("div", {
                                  className: tz.LD,
                                  children: [
                                      (0, c.jsx)(eo.D, { variant: "heading-lg/semibold", children: n }),
                                      S &&
                                          (0, c.jsx)(eq.m, {
                                              text: G.intl.string(G.t["3taPdj"]),
                                              position: "top",
                                              "aria-label": G.intl.string(G.t["3taPdj"]),
                                              children: (0, c.jsx)(eQ.D, {
                                                  onClick: () =>
                                                      (0, tq.A)(tX.A.getArticleURL(B.MVz.DATA_USED_FOR_RECOMMENDED)),
                                                  className: tz.sT,
                                                  children: (0, c.jsx)(tJ.m, { size: "sm" }),
                                              }),
                                          }),
                                  ],
                              }),
                              (0, c.jsxs)("div", {
                                  className: _()(tz.IE, { [eK.jP]: m }),
                                  children: [
                                      (0, c.jsx)(ee.E, {
                                          variant: "text-md/medium",
                                          children: G.intl.string(G.t.uaX705),
                                      }),
                                      (0, c.jsx)("div", {
                                          className: _()(i, tz.pI),
                                          children: (0, c.jsx)(ez.l, {
                                              label: G.intl.string(G.t.uaX705),
                                              hideLabel: !0,
                                              options: C,
                                              onSelectionChange: W,
                                              formatOption: (e) => {
                                                  let { label: t, value: n } = e;
                                                  return { id: n, label: t, value: n };
                                              },
                                              value: f,
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
                                                      k.default.track(B.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                          page_session_id: H,
                                                      });
                                              },
                                              disabled: P !== tQ.MOUNTED && P !== tQ.FINISHED,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, c.jsx)("div", {
                          className: tz.hm,
                          children: t
                              ? (0, c.jsx)(c.Fragment, {
                                    children: [...Array(12)].map((e, t) => (0, c.jsx)(ey, {}, t + 1)),
                                })
                              : x.slice(0, l).map((e, t) => {
                                    let n,
                                        s = I.A.getCategoryForProduct(e.skuId);
                                    if (null == e || null == s) return null;
                                    if (O)
                                        if (P === tQ.SHUFFLE_OUT)
                                            return (0, c.jsx)(
                                                "div",
                                                {
                                                    className: tz.Z2,
                                                    children: (0, c.jsx)(ey, { skipPulseAnimation: !0 }),
                                                },
                                                `${e.skuId}-${t}`,
                                            );
                                        else
                                            P === tQ.SORT_OUT
                                                ? (n = tz.MW)
                                                : P === tQ.SHUFFLE_IN
                                                  ? (n = tz.aS)
                                                  : P === tQ.SORT_IN && (n = tz.F7);
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
                                                        r === R.G2.ORBS ? eM.Hi.ORBS : h ? eM.Hi.FIAT : void 0,
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
var t8 = n(951707),
    t7 = n(622697);
let ne = (e) => {
    let { block: t, handleTransition: n, tab: s } = e,
        l = (0, j.bG)([A.default], () => A.default.getCurrentUser()),
        a = (0, e_.W)("FramesProductShelfBlock"),
        r = t6(),
        i = eC(d.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r])),
        { analyticsLocations: o } = (0, E.Ay)(N.A.COLLECTIBLES_SHOP_SHELF),
        u = d.useCallback(() => {
            n({
                sourceButton: "frames product shelf see all",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            });
        }, [n, t.categorySkuId]);
    return null == l || 0 === i.length
        ? null
        : (0, c.jsx)(E.f5, {
              value: o,
              children: (0, c.jsxs)("div", {
                  className: _()(t7.kL, tz.YB),
                  children: [
                      null != t.backgroundImage &&
                          (0, c.jsx)("img", { className: t7.iL, src: t.backgroundImage, alt: "", "aria-hidden": !0 }),
                      (0, c.jsxs)("div", {
                          className: t7.Qs,
                          children: [
                              (0, c.jsxs)("div", {
                                  className: t7.wx,
                                  children: [
                                      (0, c.jsxs)("div", {
                                          className: t7.Jb,
                                          children: [
                                              (0, c.jsx)(tR, { location: "FramesProductShelfBlock" }),
                                              (0, c.jsx)(eo.D, {
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
                                              onClick: u,
                                          }),
                                  ],
                              }),
                              (0, c.jsx)(t8.A, {
                                  gap: "xl",
                                  edgeFade: "sm",
                                  children: i.map((e, n) =>
                                      null == I.A.getCategoryForProduct(e.skuId)
                                          ? null
                                          : (0, c.jsx)(
                                                L.R9,
                                                {
                                                    newValue: {
                                                        tilePosition: n,
                                                        pageSection: t.title,
                                                        categoryPosition: 1,
                                                    },
                                                    children: (0, c.jsx)(eP.A, {
                                                        skuId: e.skuId,
                                                        prioritizedCurrency:
                                                            s === R.G2.ORBS ? eM.Hi.ORBS : a ? eM.Hi.FIAT : void 0,
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
var nt = n(696292),
    nn = n(545986),
    ns = n(318346);
let nl = (e) => {
    let { clientX: t, clientY: n, currentTarget: s } = e;
    s.style.pointerEvents = "none";
    let l = document.elementFromPoint(t, n);
    return (s.style.pointerEvents = "auto"), { elementBelow: l, button: l?.closest("button") ?? null };
};
var na = n(929955);
let nr = (e) => {
        let { bannerStatic: t, bannerAnimated: n, bannerRive: s, isResponsive: l = !1, eventTargetRef: a } = e,
            r = (0, j.bG)([Y.A], () => Y.A.useReducedMotion),
            i = (0, j.bG)([eA.A], () => eA.A.isFocused()),
            o = null != n && !r && i;
        return null != s
            ? (0, c.jsx)(eS._, { src: s, fit: "fit-width", eventTargetRef: a })
            : o
              ? (0, c.jsx)(ev.A, { className: _()({ [na.no]: l }, na.BW, na.ud), src: n, autoPlay: !0, loop: !0 })
              : (0, c.jsx)("div", {
                    className: _()({ [na.no]: l }, na.BW, na._e),
                    style: { backgroundImage: `url(${t})` },
                });
    },
    ni = (e) => (0, c.jsx)("div", { className: tz.hm, children: (0, c.jsx)(nc, { ...e }) }),
    no = (e) => (0, c.jsx)(t8.A, { gap: "xl", children: (0, c.jsx)(nc, { ...e }) }),
    nc = (e) => {
        let { isLoading: t, products: n, tab: s, totalCards: l } = e,
            a = (0, e_.W)("HeroBlockCards");
        if (t) return (0, c.jsx)(c.Fragment, { children: [...Array(l ?? 4)].map((e, t) => (0, c.jsx)(ey, {}, t)) });
        let r = null != l ? n.slice(0, l) : n;
        return (0, c.jsx)(eM.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: r.map((e, t) => {
                let n = I.A.getCategoryForProduct(e.skuId);
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
    nd = (e) => {
        let t,
            n,
            { heroBlockRecord: s, layout: l, tab: a, isBlockLoading: r = !1 } = e,
            { products: i } =
                ((t = t6()),
                (n = d.useMemo(() => (r ? [] : t(s.rankedSkuIds)), [r, t, s.rankedSkuIds])),
                { products: eC(ep()(n)) }),
            o = d.useMemo(
                () =>
                    !r &&
                    0 !== s.rankedSkuIds.length &&
                    !(i.length > 0) &&
                    s.rankedSkuIds.every((e) => I.A.getProduct(e)?.variantGroupStoreListingId != null),
                [r, s.rankedSkuIds, i.length],
            ),
            u = r || o;
        switch (l) {
            case "feed":
                return (0, c.jsx)(ni, { heroBlockRecord: s, isLoading: u, products: i, tab: a });
            case "hscroll":
                return (0, c.jsx)(no, { heroBlockRecord: s, isLoading: u, products: i, tab: a });
        }
    },
    nu = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: tb.g.HERO,
        categoryStoreListingId: "",
    },
    n_ = (e) => {
        let {
                isLoading: t,
                handleTransition: n,
                category: s,
                heroBlock: l,
                tab: a,
                onVisibilityChange: r,
                badge: i,
            } = e,
            o = (0, ed.K)(
                (e) => {
                    r?.(e);
                },
                0.1,
                null != r,
            ),
            u = d.useRef(null),
            g = (0, eK.yB)("HeroBlock"),
            h = (0, j.bG)([A.default], () => A.default.getCurrentUser()),
            m = (0, L.uM)(),
            { analyticsLocations: f } = (0, E.Ay)(N.A.COLLECTIBLES_SHOP_HERO),
            p = d.useMemo(
                () =>
                    null != l
                        ? l
                        : null == s
                          ? nu
                          : {
                                rankedSkuIds: s.heroRanking ?? [],
                                name: s.name,
                                unpublishedAt: s.unpublishedAt,
                                categorySkuId: s.skuId,
                                summary: s.summary,
                                type: tb.g.HERO,
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
                bannerDisplayConfig: x,
                logoDisplayConfig: C,
                heroLogo: b,
                heroBannerStatic: S,
                heroBannerAnimated: v,
                heroBannerRive: I,
            } = (0, eI.Kk)(p),
            T = x?.responsive ?? !1,
            y = x?.backgroundStyle,
            O = null != I,
            P = a === R.G2.ORBS,
            M = null != s && s.isOrbsExclusive,
            w = P ? G.intl.string(G.t["1CdL8d"]) : G.intl.string(G.t.xYKa1T),
            D = () => {
                P
                    ? ((0, ns.Y)({
                          pageType: B.liQ.SHOP_ORBS_TAB,
                          sectionType: B.JJy.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: B.ZSU.CTA_TO_QUEST_HOME,
                      }),
                      (0, nn.navigateToQuestHome)({ fromContent: nt.u.ORBS_SHOP_HERO_CTA }))
                    : (n({
                          sourceButton: "shop latest category hero",
                          categorySkuId: p.categorySkuId,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: M,
                      }),
                      k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: m?.sessionId,
                          sku_id: p.categorySkuId,
                          page_type: a,
                          page_section: m?.pageSection,
                          page_category: m?.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != h && (t || p !== nu)
            ? (0, c.jsx)(E.f5, {
                  value: f,
                  children: (0, c.jsxs)("div", {
                      ref: o,
                      className: tz.os,
                      children: [
                          O
                              ? ((e) => {
                                    let { isCustomCursorEnabled: t, className: n, riveEventTargetRef: s } = e,
                                        l = (e) => {
                                            let { button: n } = nl(e),
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
                                            let { button: t } = nl(e);
                                            null != t && t.click();
                                        },
                                    });
                                })({ isCustomCursorEnabled: g, className: tz.Xt, riveEventTargetRef: u })
                              : null,
                          (0, c.jsx)("div", {
                              className: _()(tz.vK, { [tz.cN]: O, [tz.no]: T }),
                              style: null != y ? { background: y } : void 0,
                              children:
                                  null != S &&
                                  (0, c.jsx)(nr, {
                                      bannerStatic: S,
                                      bannerAnimated: v,
                                      bannerRive: I,
                                      isResponsive: T,
                                      eventTargetRef: u,
                                  }),
                          }),
                          (0, c.jsxs)("div", {
                              className: tz.xX,
                              children: [
                                  O
                                      ? (0, c.jsx)("div", {
                                            className: tz.fy,
                                            children:
                                                !t &&
                                                (0, c.jsx)(et.$, { variant: "overlay-primary", onClick: D, text: w }),
                                        })
                                      : (0, c.jsxs)("div", {
                                            className: _()(tz.bC, { [tz.no]: T }),
                                            children: [
                                                t
                                                    ? (0, c.jsx)("div", { className: tz.Hw })
                                                    : (0, c.jsxs)("div", {
                                                          className: tz.Hw,
                                                          children: [
                                                              (0, eg.HF)(p.unpublishedAt) &&
                                                                  (0, c.jsx)(tW.Lp, {
                                                                      disableColor: !0,
                                                                      text: G.intl.string(G.t["h/uBCR"]),
                                                                      className: tz.v0,
                                                                  }),
                                                              (0, c.jsxs)("div", {
                                                                  className: tz.Wq,
                                                                  children: [
                                                                      null != i &&
                                                                          (0, c.jsx)("div", {
                                                                              className: tz._I,
                                                                              children: i,
                                                                          }),
                                                                      null != b &&
                                                                          (0, c.jsx)("img", {
                                                                              className: tz.rm,
                                                                              src: b,
                                                                              alt: p.name,
                                                                              style: C?.toDesktopStyles(),
                                                                          }),
                                                                      null != p.title &&
                                                                          (0, c.jsx)(eo.D, {
                                                                              variant: "heading-xxl/bold",
                                                                              className: tz.DD,
                                                                              color: "text-strong",
                                                                              children: p.title,
                                                                          }),
                                                                      null != p.summary &&
                                                                          "" !== p.summary &&
                                                                          (0, c.jsx)(ee.E, {
                                                                              variant: "text-md/normal",
                                                                              className: P ? tz.h4 : tz.Tm,
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
                                                        className: tz.IS,
                                                        children: (0, c.jsx)(et.$, {
                                                            variant: "overlay-primary",
                                                            onClick: D,
                                                            text: w,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                  (0, c.jsx)(nd, {
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
var ng = n(349288),
    nh = n(537947);
let nm = (e) => {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        s = (0, ed.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: l, bannerAnimatedUrl: a } = (0, eI.qY)(t),
        r = null != t.textColor ? { color: t.textColor } : void 0,
        i = null != t.body && "" !== t.body,
        o = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, c.jsxs)("div", {
        ref: s,
        className: nh.BX,
        children: [
            (0, c.jsx)("div", {
                className: nh.vK,
                children: null != l && (0, c.jsx)(nr, { bannerStatic: l, bannerAnimated: a }),
            }),
            (0, c.jsx)("div", {
                className: nh.HQ,
                children: (0, c.jsxs)("div", {
                    className: nh.Yn,
                    children: [
                        null != t.endTime ? (0, c.jsx)(tD.e, { endDate: t.endTime, size: "lg" }) : null,
                        (0, c.jsx)(eo.D, {
                            variant: "heading-xxl/bold",
                            className: nh.DD,
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
                                          (0, c.jsx)(ng.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: nh.CU,
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
var nf = n(189213),
    np = n(290136),
    nx = n(478016),
    nE = n(825484),
    nC = n(713517),
    nb = n(914410),
    nS = n(693477),
    nv = n(61750);
function nA(e, t) {
    let n = d.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        s = (0, j.bG)([J.A], () => J.A.getPurchases(n));
    return {
        readyToClaim: d.useMemo(() => s.length === n.length, [s, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: s,
    };
}
var nL = n(498924);
let nI = d.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: s } = (0, tV.Z)(n),
            l = d.useRef(null),
            { isHoveringOrFocusing: a } = (0, nC.A)(l),
            { readyToClaim: r, collectibleProductSkuIds: i, collectedSkuIds: o } = nA(t, n),
            u = (0, j.bG)([J.A], () => J.A.isClaiming === n);
        return (0, c.jsx)(tU.L, {
            onChange: s,
            threshold: 0,
            innerRef: l,
            children: (0, c.jsx)("div", {
                ref: l,
                className: _()(eN.ty, nL.Q3, { [eN.yo]: a }),
                "aria-label": G.intl.formatToPlainString(G.t.Ez6aHE, { category: t.name }),
                children: (0, c.jsxs)("div", {
                    className: eN.qt,
                    children: [
                        (0, c.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: nL.L8,
                        }),
                        (0, c.jsx)("div", {
                            className: eN.N1,
                            children: (0, c.jsx)(tW.Lp, {
                                text: G.intl.string(G.t.rykAJ9),
                                disableColor: !0,
                                className: nL.HZ,
                            }),
                        }),
                        (0, c.jsxs)("div", {
                            className: eN.xQ,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: nL.xE,
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: nL.cs,
                                            children: [
                                                (0, c.jsx)(eo.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: eN.tZ,
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
                                                        className: nL.ZB,
                                                        children: (0, c.jsx)(np.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)("div", {
                                            className: eN.oh,
                                            "aria-hidden": !0,
                                            children: (0, c.jsxs)("div", {
                                                className: nL.L$,
                                                children: [
                                                    (0, c.jsx)(nb.Ay, {
                                                        variant: nb.qP.BLUE,
                                                        progress: o.length,
                                                        maximum: i.length,
                                                    }),
                                                    (0, c.jsxs)("div", {
                                                        className: _()(nL.__, { [nL.gF]: r }),
                                                        children: [
                                                            r
                                                                ? (0, c.jsx)(nx.U, {
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
                                    className: eN.Vs,
                                    children: (0, c.jsx)(nE.e, {
                                        wrap: !1,
                                        className: eN.Ld,
                                        fullWidth: !0,
                                        children: (0, c.jsx)(et.$, {
                                            variant: "primary",
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    r &&
                                                        (0, nS.BX)(t.skuId, n)
                                                            .then(() => {
                                                                let e = I.A.getProduct(n);
                                                                null != e &&
                                                                    (0, nv.A)({
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
                                                                        (0, c.jsx)(nf.Modal, {
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
    nT = (e) => {
        let t,
            n,
            { isBlockLoading: s = !1, heroBlock: l, tab: a } = e,
            r = (0, e_.W)("RewardHeroBlockCards"),
            i = d.useMemo(() => I.A.getCategoryForProduct(l.rewardSkuId), [l.rewardSkuId]),
            o = (0, j.bG)([J.A], () => J.A.getPurchase(l.rewardSkuId)),
            { products: u } =
                ((t = t6()),
                (n = d.useMemo(
                    () => (s ? [] : t(l.rankedSkuIds).filter((e) => e.skuId !== l.rewardSkuId || null != o)),
                    [s, t, l.rankedSkuIds, o, l.rewardSkuId],
                )),
                { products: eC(ep()(n)) }),
            _ = d.useMemo(
                () =>
                    !s &&
                    0 !== l.rankedSkuIds.length &&
                    !(u.length > 0) &&
                    l.rankedSkuIds.every((e) => I.A.getProduct(e)?.variantGroupStoreListingId != null),
                [s, l.rankedSkuIds, u.length],
            ),
            g = s || _,
            { readyToClaim: h } = nA(i, l.rewardSkuId),
            m = null == o && null != l.rewardSkuId && null != i;
        return (0, c.jsx)(t8.A, {
            gap: "xl",
            children: g
                ? (0, c.jsx)(c.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, c.jsx)(ey, {}, t)),
                  })
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          m &&
                              h &&
                              (0, c.jsx)(
                                  L.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, c.jsx)(nI, { category: i, rewardSkuId: l.rewardSkuId }),
                                  },
                                  l.rewardSkuId,
                              ),
                          u.map((e, t) => {
                              let n = I.A.getCategoryForProduct(e.skuId);
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
(0, eg.$b)(90);
let nj = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: tb.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    nN = (e) => {
        let { isLoading: t = !1, heroBlock: n, tab: s, onVisibilityChange: l } = e,
            a = (0, ed.K)(
                (e) => {
                    l?.(e);
                },
                0.1,
                null != l,
            ),
            r = (0, j.bG)([A.default], () => A.default.getCurrentUser()),
            { analyticsLocations: i } = (0, E.Ay)(N.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: o,
                logoDisplayConfig: d,
                heroLogo: u,
                heroBannerStatic: g,
                heroBannerAnimated: h,
            } = (0, eI.Kk)(n),
            m = o?.responsive ?? !1,
            f = o?.backgroundStyle;
        return null != r && (t || n !== nj)
            ? (0, c.jsx)(E.f5, {
                  value: i,
                  children: (0, c.jsxs)("div", {
                      ref: a,
                      className: tz.os,
                      children: [
                          (0, c.jsx)("div", {
                              className: _()(tz.vK, { [tz.no]: m }),
                              style: null != f ? { background: f } : void 0,
                              children:
                                  null != g && (0, c.jsx)(nr, { bannerStatic: g, bannerAnimated: h, isResponsive: m }),
                          }),
                          (0, c.jsxs)("div", {
                              className: tz.xX,
                              children: [
                                  (0, c.jsx)("div", {
                                      className: _()(tz.bC, { [tz.no]: m }),
                                      children: t
                                          ? (0, c.jsx)("div", { className: tz.Hw })
                                          : (0, c.jsx)("div", {
                                                className: tz.Hw,
                                                children: (0, c.jsxs)("div", {
                                                    className: tz.Wq,
                                                    children: [
                                                        null != u &&
                                                            (0, c.jsx)("img", {
                                                                className: tz.rm,
                                                                src: u,
                                                                alt: n.name,
                                                                style: d?.toDesktopStyles(),
                                                            }),
                                                        null != n.title &&
                                                            (0, c.jsx)(eo.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: tz.DD,
                                                                color: "text-strong",
                                                                children: n.title,
                                                            }),
                                                        "" !== n.summary &&
                                                            (0, c.jsx)(ee.E, {
                                                                variant: "text-md/normal",
                                                                className: tz.Tm,
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
                                  (0, c.jsx)(nT, { isBlockLoading: t, heroBlock: n, tab: s }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    },
    nk = (e) => {
        let { shelf: t, handleTransition: n, tab: s } = e,
            l = (0, j.bG)([A.default], () => A.default.getCurrentUser()),
            a = (0, e_.W)("ShelfBlock"),
            r = (0, j.bG)([I.A], () => I.A.getCategory(t.categorySkuId)),
            i = t6(),
            o = eC(d.useMemo(() => i(t.rankedSkuIds), [t.rankedSkuIds, i])),
            { analyticsLocations: u } = (0, E.Ay)(N.A.COLLECTIBLES_SHOP_SHELF);
        return null == l
            ? null
            : (0, c.jsx)(E.f5, {
                  value: u,
                  children: (0, c.jsxs)("div", {
                      className: _()(tz.Vp, tz.YB),
                      children: [
                          (0, c.jsxs)("div", {
                              className: tz.$6,
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
                          (0, c.jsx)(t8.A, {
                              gap: "xl",
                              children: (0, c.jsx)(c.Fragment, {
                                  children: o.map((e, n) => {
                                      if (null == I.A.getCategoryForProduct(e.skuId) || null == e) return null;
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
var ny = n(815021),
    nO = n(509434),
    nR = n(871123),
    nB = n(733391),
    nP = n(439303),
    nM = n(832163),
    nw = n(44724),
    nD = n(317560),
    nH = n(183802),
    nG = n(171491),
    nF = n(67480),
    nU = n(371794),
    nW = n(74564);
let nV = (e) => {
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
                analyticsSection: _,
                analyticsTileType: g,
                analyticsImpressionType: h,
                backgroundGradient: m,
            } = e,
            { guildId: f } = (0, nR.nG)(i);
        d.useEffect(() => {
            null != f && (0, nB.Rw)(f);
        }, [f]);
        let p = (0, j.bG)([nM.A], () => {
                let e = nM.A.getStorefrontMetadata(i);
                return e?.logoAssetId != null ? (0, nU.YE)(i, e.logoAssetId, 75) : void 0;
            }, [i]),
            x =
                ((t = d.useRef([])),
                d.useEffect(() => {
                    if (null != f) for (let e of a) (0, nB.qf)(f, e);
                }, [a, f]),
                (n = (0, j.bG)(
                    [nF.A],
                    () => !a.some((e) => nF.A.isFetching(e)) && a.some((e) => nF.A.didFetchingSkuFail(e)),
                    [a],
                )),
                d.useEffect(() => {
                    n && null != f && (0, nB.Rw)(f);
                }, [n, f]),
                (s = (0, j.yK)([nF.A, nM.A], () => {
                    if (a.some((e) => nF.A.isFetching(e))) return t.current;
                    let e = a.filter((e) => null != nF.A.get(e));
                    if (e.length >= a.length) return a;
                    if (null == f) return e;
                    let n = nM.A.getStorefrontData(f);
                    if (null == n || "loading" === n.state) return e;
                    let s = new Set(a);
                    return [
                        ...e,
                        ...(null != n.storefront
                            ? (0, nR.jd)(n.storefront).filter((e) => !s.has(e) && null != nF.A.get(e))
                            : []),
                    ].slice(0, a.length);
                }, [a, f])),
                d.useEffect(() => {
                    s.length > 0 && (t.current = s);
                }, [s]),
                s);
        (0, nG.j)({ skuIds: x, location: "GamePromotionBanner" });
        let C = (0, L.uM)(),
            { analyticsLocations: b } = (0, E.Ay)(),
            S = d.useRef(null),
            v = d.useRef(!1),
            A = d.useRef(null),
            I = d.useMemo(() => ({ pageSection: _ }), [_]),
            T = d.useCallback(
                (e, t) => {
                    k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: C?.sessionId,
                        page_type: r,
                        page_category: C?.pageCategory,
                        page_section: C?.pageSection,
                        tile_type: g,
                        cta_name: e,
                        ...(null != t ? { sku_id: t } : void 0),
                    });
                },
                [C?.sessionId, C?.pageCategory, C?.pageSection, r, g],
            ),
            N = d.useCallback(() => {
                null != f && (0, nw.X)({ guildId: f });
            }, [f]),
            y = d.useCallback(() => {
                null != f && (T("go_to_game_shop"), (0, nw.default)({ guildId: f }));
            }, [T, f]),
            O = d.useCallback(
                (e, t) => {
                    let { skuId: n, applicationId: s } = t;
                    T("card_click", n),
                        (0, nD.R)({ skuId: n, applicationId: s, isStorefront: !1, analyticsLocations: b });
                },
                [T, b],
            ),
            R = d.useCallback(() => {
                T("dismiss"), l();
            }, [T, l]),
            P = d.useCallback(
                (e) => {
                    !v.current &&
                        (e && null === A.current
                            ? (A.current = setTimeout(() => {
                                  (v.current = !0),
                                      (A.current = null),
                                      k.default.track(B.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                          collectibles_shop_session_id: C?.sessionId,
                                          page_type: r,
                                          page_category: C?.pageCategory,
                                          page_section: C?.pageSection,
                                          type: h,
                                      });
                              }, 1e3))
                            : e || null === A.current || (clearTimeout(A.current), (A.current = null)));
                },
                [C?.sessionId, C?.pageCategory, C?.pageSection, r, h],
            );
        return (d.useEffect(
            () => () => {
                null !== A.current && (clearTimeout(A.current), (A.current = null));
            },
            [],
        ),
        0 === x.length)
            ? null
            : (0, c.jsx)(tU.L, {
                  innerRef: S,
                  onChange: P,
                  threshold: 0,
                  children: (0, c.jsx)("div", {
                      ref: S,
                      className: nW.YB,
                      children: (0, c.jsxs)("div", {
                          className: nW.kL,
                          children: [
                              null != m && (0, c.jsx)("div", { className: nW.D7, style: { background: m } }),
                              (0, c.jsx)("div", {
                                  className: nW.b,
                                  children: (0, c.jsx)(ny.J, { size: "sm", variant: "icon-only", onClick: R }),
                              }),
                              null != p && (0, c.jsx)("img", { className: nW.wm, src: p, alt: "" }),
                              (0, c.jsx)("div", {
                                  className: nW.xf,
                                  children: (0, c.jsxs)("div", {
                                      className: nW.B5,
                                      children: [
                                          (0, c.jsx)(eo.D, {
                                              variant: "heading-lg/semibold",
                                              color: "always-white",
                                              children: o,
                                          }),
                                          (0, c.jsx)(et.$, {
                                              variant: "overlay-primary",
                                              size: "sm",
                                              icon: nO.I,
                                              iconPosition: "end",
                                              text: u,
                                              onMouseDown: N,
                                              onClick: y,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, c.jsx)(nP.E9, {
                                  newValue: I,
                                  children: (0, c.jsx)("div", {
                                      className: nW.$2,
                                      children: x.map((e, t) =>
                                          (0, c.jsx)(nH.A, { skuId: e, positionInSection: t, onClick: O }, e),
                                      ),
                                  }),
                              }),
                          ],
                      }),
                  }),
              });
    },
    nz = (e) => {
        let {
            onDismiss: t,
            applicationId: n,
            headerText: s,
            gradientColors: l,
            gradientAngle: a,
            skuIds: r,
            tab: i,
        } = e;
        return (0, c.jsx)(nV, {
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
var nK = n(770178),
    nY = n(929283),
    n$ = n(275483);
let nZ = [
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
    nJ = (e) => {
        let { config: t, baseLeft: n, transitioning: s } = e,
            l = window.innerHeight,
            a = I.A.getProduct(t.skuId),
            r = a?.items[0],
            i = a?.type,
            o = n + t.horizontalJitter;
        return (0, c.jsx)("div", {
            className: n$.LY,
            style: {
                top: s ? -l - 384 : t.top,
                left: s ? o + t.transitionOffsetLeft : o,
                transform: `rotate(${t.rotation}deg)`,
                height: 160,
                width: 160,
                transitionDelay: t.transitionDelay,
                transitionDuration: t.transitionDuration,
            },
            children: null != r && i === ex.R.AVATAR_DECORATION && (0, c.jsx)(nY.i, { item: r }),
        });
    },
    nq = (e) => {
        let { peaking: t, transitioning: n, parentWidth: s } = e,
            [l, a] = d.useState(!1),
            [r, i] = d.useState([]),
            [o] = d.useState(() =>
                [...nZ]
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
                className: _()(n$.rA, { [n$.Kb]: t, [n$.pp]: l }),
                children: r.map((e, t) => {
                    let { config: s, baseLeft: l } = e;
                    return (0, c.jsx)(nJ, { config: s, baseLeft: l, transitioning: n }, s.skuId + t);
                }),
            })
        );
    },
    nX = (e) => {
        let { peaking: t, transitioning: n } = e,
            s = d.useRef(null),
            [l, a] = d.useState(0),
            r = d.useCallback(() => {
                null != s.current && a(s.current.offsetWidth);
            }, []);
        return (
            (0, nK.g)(s, r),
            (0, c.jsx)("div", {
                ref: s,
                className: n$.eL,
                children: (0, c.jsx)(nq, { peaking: t, transitioning: n, parentWidth: l }),
            })
        );
    };
var nQ = n(43990),
    n0 = n(976860),
    n1 = n(49999);
let n2 = (e) => {
        let { wideBannerBlock: t, tab: n } = e,
            s = I.A.getCategoryByStoreListingId(t.categoryStoreListingId),
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
        let g = s?.skuId ?? "",
            { handleCardVisibilityChange: h } = (0, tV.Z)(g, "home", "marketing wide banner"),
            m = (0, L.uM)(),
            { bannerURL: f } = (0, eI.w$)(t),
            p = n === R.G2.ORBS,
            x = null != t.ctaRoute && "" !== t.ctaRoute,
            E = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || x),
            C = null != t.logoURL && "" !== t.logoURL,
            b = d.useCallback(() => {
                if ((u(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, tv.$l)(tS.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: n1.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            S = d.useCallback(
                (e) => {
                    k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: m?.sessionId,
                        sku_id: g,
                        page_type: n,
                        page_section: m?.pageSection,
                        page_category: m?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(m?.tilePosition),
                        cta_name: e,
                    });
                },
                [m, g, n],
            ),
            v = d.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((S(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    n = parseInt(t[2], 10);
                                (0, nw.default)({ guildId: e, pageIndex: n });
                            }
                        } else (0, n0.pX)(e);
                    }
                },
                [t.ctaRoute, S],
            );
        if (null == f || o) return null;
        let A = _()(tz.nM, tz.Tq, tz.TS, tz.YB, { [tz._1]: p, [tz.vb]: x }),
            T = (0, c.jsxs)(c.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, c.jsx)("div", {
                            className: tz.Mh,
                            children: (0, c.jsx)(ny.J, {
                                size: "sm",
                                onClick: (e) => {
                                    e.stopPropagation(), b();
                                },
                                "aria-label": G.intl.string(G.t.WAI6xu),
                            }),
                        }),
                    (0, c.jsx)("div", {
                        className: _()(tz.zK, { [tz._1]: p }),
                        style: null != r ? { height: `${r}px` } : void 0,
                        children: (0, c.jsx)("img", {
                            ref: a,
                            src: f,
                            alt: t.title,
                            className: _()(tz.LN, { [tz.d5]: p }),
                        }),
                    }),
                    (0, c.jsx)("div", {
                        className: _()(tz.Ep, { [tz.Qq]: E }),
                        style: { maxHeight: null != r ? `${r}px` : "auto" },
                        children: (0, c.jsxs)("div", {
                            className: tz.E8,
                            children: [
                                (0, c.jsx)(eo.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: p ? tz.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, c.jsx)(ee.E, {
                                    style: { color: "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: p ? "text-md/medium" : "text-sm/medium",
                                    children: p
                                        ? G.intl.format(G.t.SFFP7K, {
                                              helpdeskArticle: tX.A.getArticleURL(B.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                E &&
                                    (0, c.jsxs)("div", {
                                        className: tz.nP,
                                        children: [
                                            (0, c.jsx)(et.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    e.stopPropagation(), v(t.ctaText ?? G.intl.string(G.t.jVcuVY));
                                                },
                                                text: t.ctaText ?? G.intl.string(G.t.jVcuVY),
                                            }),
                                            C && (0, c.jsx)("img", { src: t.logoURL, alt: "", className: tz.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, c.jsx)(nQ.N, {
            theme: p ? void 0 : tl.NJ.DARK,
            children: (e) =>
                (0, c.jsx)(tU.L, {
                    innerRef: l,
                    onChange: h,
                    threshold: 0,
                    children: x
                        ? (0, c.jsx)(eQ.D, { innerRef: l, onClick: () => v(null), className: _()(e, A), children: T })
                        : (0, c.jsx)("div", { ref: l, className: _()(e, A), children: T }),
                }),
        });
    },
    n4 = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: s, tab: l } = e,
            { noCache: a, includeUnpublished: r } = (0, eD.A)(),
            [i, o] = d.useState(!1),
            u = (0, L.uM)(),
            g = u?.sessionId ?? "";
        d.useEffect(() => {
            (0, eb.z)({
                sessionId: g,
                checkpoint: eb.t.SHOP_MOUNTED,
                tab: l,
                unpublishedCategoriesShown: r,
                cacheDisabled: a,
            });
        }, [l]);
        let {
                isFetchingShopHome: h,
                fetchShopHomeError: m,
                shopBlocks: f,
                refreshShopHome: p,
            } = (0, tI.y)(l, { noCache: a, includeUnpublished: r, logPerf: !0 }, { sessionId: g, tab: l }),
            x = d.useCallback(() => {
                p();
            }, [p]),
            E = d.useMemo(() => f.some((e) => e instanceof tT.p), [f])
                ? (0, c.jsx)(tR, { location: "CollectiblesShop" })
                : null;
        return (d.useEffect(() => {
            null != m ||
                h ||
                0 === f.length ||
                (0, eb.z)({
                    sessionId: g,
                    checkpoint: eb.t.SHOP_RENDERED,
                    tab: l,
                    unpublishedCategoriesShown: r,
                    cacheDisabled: a,
                });
        }, [m, h, f.length, r, a, g, l]),
        null != m)
            ? (0, c.jsx)(tC.h, { onRetry: x, errorOrigin: tC.A.SHOP_PAGE, errorMessage: m.message })
            : h || 0 === f.length
              ? (0, c.jsxs)("div", {
                    className: _()(tz.g4, tz.Of),
                    children: [
                        (0, c.jsx)(n_, { isLoading: h, handleTransition: t, tab: l }),
                        (0, c.jsx)(tZ, { isLoading: h, handleTransition: t, categories: [] }),
                        (0, c.jsx)(t9, {
                            isLoading: h,
                            title: l === R.G2.ORBS ? G.intl.string(G.t.dFgeuZ) : G.intl.string(G.t.NSv5KV),
                            numVisibleItems: n,
                            tab: l,
                        }),
                    ],
                })
              : (0, c.jsx)(c.Fragment, {
                    children: f.map((e, a) =>
                        ((e, a, r) => {
                            if (null == e) return null;
                            let d = null,
                                u = !1;
                            switch (e.type) {
                                case tb.g.HERO:
                                    d = (0, c.jsx)(
                                        n_,
                                        { isLoading: h, handleTransition: t, heroBlock: e, tab: l, badge: E },
                                        r,
                                    );
                                    break;
                                case tb.g.FEATURED:
                                    d = (0, c.jsx)(
                                        tZ,
                                        { isLoading: h, handleTransition: t, featuredBlockRecord: e },
                                        r,
                                    );
                                    break;
                                case tb.g.FEED:
                                    let g = e.sortedSkuIds;
                                    d = (0, c.jsx)(
                                        t9,
                                        {
                                            title:
                                                l === R.G2.ORBS ? G.intl.string(G.t.dFgeuZ) : G.intl.string(G.t.NSv5KV),
                                            isLoading: s,
                                            numVisibleItems: n,
                                            sortedSkuIds: g,
                                            buttonContainerClassName: a?.type === tb.g.IMMERSIVE_BANNER ? tz.w : void 0,
                                            prioritizeUserDiscounts: l === R.G2.HOME,
                                            tab: l,
                                            orbsSupportedOnly: l === R.G2.ORBS,
                                        },
                                        r,
                                    );
                                    break;
                                case tb.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, tv.En)(tS.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    d = (0, c.jsx)(n2, { wideBannerBlock: e, tab: l }, r);
                                    break;
                                case tb.g.FRAMES_BANNER:
                                    d = (0, c.jsx)(
                                        n2,
                                        {
                                            wideBannerBlock: tj.y.fromServer({
                                                type: tb.g.WIDE_BANNER,
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
                                case tb.g.FRAMES_PRODUCT_SHELF:
                                    d = (0, c.jsx)(ne, { block: e, handleTransition: t, tab: l }, r);
                                    break;
                                case tb.g.SHELF:
                                    d = (0, c.jsx)(nk, { handleTransition: t, shelf: e, tab: l }, r);
                                    break;
                                case tb.g.COUNTDOWN_TIMER:
                                    (d = (0, c.jsx)(tG, { countdownTimerBlock: e, isVisible: i }, r)), (u = !0);
                                    break;
                                case tb.g.IMMERSIVE_BANNER:
                                    d = (0, c.jsx)(
                                        nm,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => o(!e) },
                                        r,
                                    );
                                    break;
                                case tb.g.REWARD_HERO:
                                    d = (0, c.jsx)(nN, { isLoading: h, handleTransition: t, heroBlock: e, tab: l }, r);
                                    break;
                                case tb.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER: {
                                    let { isDismissed: t } = (0, tv.En)(
                                        tS.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
                                    );
                                    if (t) return null;
                                    return (0, c.jsx)(
                                        tL,
                                        {
                                            blockType: e.type,
                                            children: (0, c.jsx)(nz, {
                                                onDismiss: () => {
                                                    (0, tv.d6)(
                                                        tS.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
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
                                tL,
                                {
                                    blockType: e.type,
                                    children: (0, c.jsx)("div", {
                                        className: _()(tz.v1, tz.Of, { [tz.J1]: 0 === r || u }),
                                        children: d,
                                    }),
                                },
                                r,
                            );
                        })(e, a > 0 ? f[a - 1] : null, a),
                    ),
                });
    },
    n5 = (e) => {
        let { handleTransition: t, tab: n, transitionState: s } = e,
            l = d.useRef(null),
            { handleScroll: a } = ea(l, n),
            r = (0, ew.U)(),
            i = (0, L.uM)(),
            [o, u] = d.useState(R.md),
            [_, g] = d.useState(!1);
        return (
            d.useEffect(() => {
                if (null != l.current) {
                    let e = () => {
                            if (null == l.current) return;
                            let e = l.current.getDistanceFromBottom();
                            o >= 36 ? g(e < 20) : e <= 200 && u((e) => e + R.md);
                        },
                        t = l.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [l, o, u, g]),
            (0, c.jsx)(X.Ch, {
                className: tz.OW,
                ref: l,
                onScroll: a,
                children: (0, c.jsxs)("div", {
                    className: tz.bx,
                    children: [
                        (0, c.jsxs)("div", {
                            className: tz.rb,
                            children: [
                                (0, c.jsx)(n4, {
                                    handleTransition: t,
                                    numVisibleItems: o,
                                    isFetchingCategories: r,
                                    tab: n,
                                }),
                                n !== R.G2.CATALOG &&
                                    o >= 36 &&
                                    (0, c.jsxs)("div", {
                                        className: tz.R$,
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
                                                        k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                        (0, c.jsx)(nX, { peaking: _, transitioning: s === R.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var n3 = n(154323),
    n6 = n(295811);
let n9 = () =>
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
    n8 = (e) => {
        let { tab: t } = e,
            [n, s, l] = (0, j.yK)([O.A], () => [O.A.getLayout(t), O.A.isFetchingLayout(t), O.A.getLayoutFetchError(t)]),
            a = (0, j.bG)([n3.A], () => n3.A.get("shop_include_unpublished")),
            r = (0, j.bG)([I.A], () => I.A.skipNumCategories),
            i = d.useMemo(() => ({ include_unpublished: a ?? !1, skip_num_categories: r ?? 0 }), [a, r]),
            o = null == n && !s && l?.status !== 404 && l?.status !== 429;
        return (d.useEffect(() => {
            o && (0, nS.T2)({ tab: t });
        }, [o, t]),
        null == n)
            ? t !== K.HOME || o || s
                ? null
                : (0, c.jsx)(er.Z_, { tenantId: B.FYj, templateId: "shop-home", requestParams: i })
            : (0, c.jsxs)(c.Fragment, {
                  children: [t === K.ORBS && (0, c.jsx)(n9, {}), (0, c.jsx)(er.Qs, { tenantId: B.FYj, layoutId: n })],
              });
    },
    n7 = (e) => {
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
    se = (e) => {
        let { handleTransition: t, tab: n, transitionState: s } = e,
            l = (0, L.uM)(),
            a = (0, j.bG)([n6.A], () => n6.A.getShopLayoutUrlOverride()),
            r = d.useRef(null),
            { handleScroll: i } = ea(r, n),
            [o, u] = d.useState(R.md),
            [g, h] = d.useState(!1);
        return (
            d.useEffect(() => {
                if (null != r.current) {
                    let e = () => {
                            if (null == r.current) return;
                            let e = r.current.getDistanceFromBottom();
                            o >= 36 ? h(e < 20) : e <= 200 && u((e) => e + R.md);
                        },
                        t = r.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [r, o, u, h]),
            (0, c.jsx)(X.Ch, {
                className: tz.OW,
                ref: r,
                onScroll: i,
                children: (0, c.jsxs)("div", {
                    className: tz.bx,
                    children: [
                        (0, c.jsxs)("div", {
                            className: _()(tz.rb, tz.GS),
                            children: [
                                null != a && "" !== a ? (0, c.jsx)(n7, { url: a }) : (0, c.jsx)(n8, { tab: n }),
                                n !== K.CATALOG &&
                                    o >= 36 &&
                                    (0, c.jsxs)("div", {
                                        className: tz.R$,
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
                                                        k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                        (0, c.jsx)(nX, { peaking: g, transitioning: s === R.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var st = n(256067);
let sn = () =>
        (0, c.jsxs)("div", {
            className: st.z,
            children: [
                (0, c.jsx)("img", {
                    className: st.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: G.intl.string(G.t["p8+qtU"]),
                }),
                (0, c.jsx)(eo.D, { variant: "heading-xl/semibold", children: G.intl.string(G.t["p8+qtU"]) }),
                (0, c.jsx)(ee.E, { variant: "text-md/medium", children: G.intl.string(G.t.UEiyvs) }),
            ],
        }),
    ss = [R.G2.HOME, R.G2.ORBS];
function sl(e) {
    let {
            tab: t,
            categories: n,
            transitionToTab: s,
            transitionState: l,
            updateAnalyticsState: a,
            refreshCategories: r,
        } = e,
        i = sa();
    sr(i);
    let o = (0, j.bG)([Y.A], () => Y.A.useReducedMotion),
        [u, _] = d.useState(void 0),
        [g, h] = d.useState(!0),
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
        f = (0, $.f)("CollectiblesContent"),
        p = d.useCallback(
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
                _(n), h(!r), s(d, c);
            },
            [o, s, a],
        ),
        { searchError: x } = (0, q.S)();
    return null != x
        ? (0, c.jsx)(sn, {})
        : null != i
          ? (0, c.jsx)(tC.h, { onRetry: r, errorMessage: i, errorOrigin: tC.A.SHOP_PAGE })
          : t === R.G2.HOME && f
            ? (0, c.jsx)(se, { tab: K.HOME, transitionState: l, handleTransition: p })
            : t === R.G2.ORBS && f
              ? (0, c.jsx)(se, { tab: K.ORBS, transitionState: l, handleTransition: p })
              : ss.includes(t)
                ? (0, c.jsx)(n5, { handleTransition: p, tab: t, transitionState: l })
                : (0, c.jsx)(tx, {
                      tab: t,
                      categories: m,
                      initialCategoryId: u,
                      showFilterInitially: g,
                      onUnmount: () => {
                          _(void 0), h(!0);
                      },
                  });
}
let sa = () =>
        (0, j.bG)([I.A, J.A], () =>
            null != I.A.error
                ? `shop load fetch categories error: ${I.A.error.message}`
                : null != J.A.claimError
                  ? `shop load claim error: ${J.A.claimError.message}`
                  : null != J.A.fetchError
                    ? `shop load fetch purchase error: ${J.A.fetchError.message}`
                    : void 0,
        ),
    sr = (e) => {
        let t = (0, j.bG)([A.default], () => A.default.getCurrentUser()),
            { noCache: n, includeUnpublished: s } = (0, eD.A)();
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
var si = n(70426);
n(323874), n(14289), n(35956);
var so = n(873263),
    sc = n(858897),
    sd = n(496431),
    su = n(893489);
let s_ = { pink: "pinkCountdown" },
    sg = d.memo(function (e) {
        let { message: t, onClick: n, countdownEndDate: s, variant: l } = e,
            a = d.useMemo(() => {
                if (null == s) return null;
                let e = s instanceof Date ? s : new Date(s);
                return isNaN(e.getTime()) ? null : e;
            }, [s]),
            r = (0, sd.A)(a ?? 0, 1e3, void 0, null == a);
        if (null != a && Object.values(r).every((e) => 0 === e)) return null;
        let i = null != l ? su[l] : void 0,
            o = null != l ? su[s_[l]] : void 0;
        return (0, c.jsx)(eQ.D, {
            className: _()(su.nagBar, i),
            onClick: n,
            "aria-label": G.intl.string(G.t["wjws+K"]),
            children: (0, c.jsxs)("div", {
                className: su.content,
                children: [
                    (0, c.jsx)(ee.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: su.message,
                        children: t,
                    }),
                    null != a && (0, c.jsx)(tD.e, { endDate: a, size: "md", className: o, showSeconds: !0 }),
                ],
            }),
        });
    });
var sh = n(870308),
    sm = n(650583);
let sf = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: s } = e,
            l = (0, m.useHasAnyModalOpen)();
        return (
            d.useEffect(() => {
                if (!n || l) return;
                let e = (e) => {
                    e.key === sm.N$.Escape && s();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [n, l, s]),
            t
        );
    },
    sp = function (e) {
        let { tab: t = R.G2.HOME } = e;
        (0, S.P)(b.a), (0, W.g)();
        let n = (0, x.A)((0, g.A)()),
            s = (0, h.bG)([A.default], () => A.default.getCurrentUser());
        (0, v.pE)();
        let l = (0, eK.yB)("CollectiblesShop"),
            { onClose: a } = (function () {
                let { search: e } = (0, so.zy)(),
                    t = (0, so.g)(),
                    n = d.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                    s = null != n ? parseInt(n, 10) : null;
                return {
                    onClose: d.useCallback(() => {
                        if (0 === s) {
                            (0, n0.aX)(), (0, sc.openUserSettings)();
                            return;
                        }
                        (0, n0.EL)() ? (0, n0.aX)() : (0, n0.pX)(B.BVt.APP);
                    }, [s]),
                    source: s,
                    ...t,
                };
            })(),
            { currentTab: r, hasFilters: i } = (0, z.v)(),
            o = d.useMemo(() => (t === R.G2.HOME && null != r && i() ? r : t), [t, r, i]),
            { categories: u, refreshCategories: m } = (0, U.Ay)({ logPerf: !0 }, { sessionId: n, tab: o }),
            N = d.useMemo(() => [...u.values()], [u]),
            [O, K] = d.useState(),
            Y = (0, h.bG)([I.A], () => I.A.getCategory(O)?.name),
            [$, Z] = d.useState();
        (0, eU.XU)(n);
        let J = d.useCallback((e, t) => {
                Z(e), K(t);
            }, []),
            { selectedTab: q, transitionState: X, transitionToTab: Q } = (0, V.o)(o);
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
                    k.default.track(B.HAw.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: a,
                        source: c,
                        page_session_id: e,
                        page_type: t === R.G2.CATALOG ? "full" : t,
                        category: t === R.G2.HOME ? void 0 : n,
                    });
                }, [a, e, t, n, i, s, l, r, o]);
            })(n, q, Y, X, $),
            ((e, t) => {
                let { analyticsLocations: n } = M(e);
                d.useEffect(() => {
                    null == t ||
                        y.Ay.canUseCollectibles(t) ||
                        k.default.track(B.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: P.e.COLLECTIBLES_SHOP,
                            location_stack: n,
                        });
                }, [n, t]);
            })(q, s);
        let { dismissShopButtonDC: ee } = (0, sh.A)();
        d.useEffect(() => {
            ee();
        }, [ee]),
            d.useEffect(() => {
                (0, p.I)(B.BVt.COLLECTIBLES_SHOP);
            }, []);
        let et = d.useRef(null),
            en = d.useRef(null);
        (0, f.t)(et),
            d.useEffect(() => {
                en.current?.focus();
            }, []),
            (0, eK.gB)();
        let { analyticsLocations: es } = M(q),
            el = (function (e, t) {
                let n = (0, j.bG)([D.A], () => D.A.getUserDiscount(P.tU)),
                    s = (0, j.bG)([w.default], () => w.default.locale),
                    l = H.useConfig({ location: t }).enabled;
                if (d.useMemo(() => null != n && l && e !== R.G2.ORBS, [n, l, e])) {
                    let e =
                        null != n && null != n.expiresAt
                            ? new Date(n.expiresAt).toLocaleDateString(s, { day: "numeric", month: "numeric" })
                            : void 0;
                    return { type: 0, countdownEndDate: n?.expiresAt, message: G.intl.format(G.t.RCo9MF, { date: e }) };
                }
            })(q, "collectibles_shop");
        return (0, c.jsx)(E.f5, {
            value: es,
            children: (0, c.jsx)(L.R9, {
                newValue: { sessionId: n, pageCategory: Y, pageSize: R.l5 },
                children: (0, c.jsx)(T.iM, {
                    tab: q,
                    children: (0, c.jsx)(sf, {
                        onClose: a,
                        shouldAddEventListener: !1,
                        children: (0, c.jsxs)("div", {
                            className: _()(eO.bx, { [eK.jP]: l }),
                            ref: en,
                            tabIndex: -1,
                            children: [
                                (0, c.jsx)(si.G, { handleTransition: Q, selectedTab: q }),
                                null != el &&
                                    el.type === F.COUNTDOWN &&
                                    (0, c.jsx)(sg, {
                                        message: el.message,
                                        onClick: () => Q(R.G2.HOME),
                                        variant: "pink",
                                        countdownEndDate: el.countdownEndDate,
                                    }),
                                (0, c.jsx)("div", {
                                    className: _()(eO.td, {
                                        [eO.RK]: X === R.Pf.VISIBLE,
                                        [eO.in]: X === R.Pf.IN,
                                        [eO.FD]: X === R.Pf.OUT,
                                    }),
                                    children: (0, c.jsx)(sl, {
                                        tab: q,
                                        refreshCategories: m,
                                        transitionToTab: Q,
                                        transitionState: X,
                                        categories: N,
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
