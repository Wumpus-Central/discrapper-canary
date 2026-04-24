"use strict";
n.r(t), n.d(t, { default: () => sf });
var s,
    a,
    l,
    r,
    i,
    o,
    c = n(627968),
    d = n(64700),
    u = n(503698),
    g = n.n(u),
    _ = n(132500),
    h = n(702841),
    m = n(192308),
    p = n(315710),
    f = n(944791),
    E = n(444927),
    x = n(688810),
    C = n(726249),
    b = n(475073),
    S = n(611924),
    A = n(594832),
    v = n(287809),
    L = n(440938),
    I = n(590180),
    T = n(161918),
    N = n(17928),
    j = n(793574),
    O = n(954571),
    y = n(927578),
    k = n(870216),
    R = n(758836),
    B = n(652215),
    P = n(788868);
let M = (e) => {
    let { analyticsSource: t, analyticsLocations: n } = (0, N.cf)([k.A], () => k.A.getAnalytics()),
        s = ((e) => {
            switch (e) {
                case R.G2.ORBS:
                    return j.A.COLLECTIBLES_SHOP_ORBS_TAB;
                case R.G2.HOME:
                    return j.A.COLLECTIBLES_SHOP_HOME_SCREEN;
                case R.G2.BUNDLES:
                    return j.A.COLLECTIBLES_SHOP_BUNDLES_TAB;
                case R.G2.AVATAR_DECORATIONS:
                    return j.A.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                case R.G2.PROFILE_EFFECTS:
                    return j.A.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                case R.G2.NAMEPLATES:
                    return j.A.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                case R.G2.CATALOG:
                case R.G2.COLLECTION_INDEX:
                case R.G2.LAYOUT:
                    return j.A.COLLECTIBLES_SHOP;
                case R.G2.RIVALS:
                case R.G2.GAME_SHOPS:
                    return j.A.SLAYER_STOREFRONT_SHOP_TAB;
            }
        })(e),
        { analyticsLocations: a, newestAnalyticsLocation: l } = (0, x.Ay)([...n, j.A.COLLECTIBLES_SHOP, s]);
    return { analyticsSource: t, analyticsLocations: a, newestAnalyticsLocation: l, currentTabLocation: s };
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
    W = n(621653),
    V = n(983545),
    z = n(23161),
    K = (((a = {}).HOME = "home"), (a.CATALOG = "catalog"), (a.ORBS = "orbs"), a),
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
let ea = (e, t, n, s) => {
        let { scrollTop: a = 0, scrollOffset: l = 0, scrollHeight: r = 0, scrollWidth: i = 0 } = s;
        if (r > 0) {
            let s = (a + l) / r;
            s > 0 &&
                O.default.track(e, {
                    scroll_visible_percent: s,
                    source: n,
                    page_height: Math.round(r),
                    page_width: Math.round(i),
                    page_session_id: t,
                });
        }
    },
    el = (e, t) => {
        let { analyticsSource: n } = M(t),
            s = (0, es.I)(ea, 5e3, [], { trailing: !0 }),
            a = (0, L.uM)(),
            l = a?.sessionId;
        return {
            handleScroll: d.useCallback(() => {
                if (null != e.current) {
                    let t = e.current.getScrollerNode();
                    null != t &&
                        s(B.HAw.COLLECTIBLES_SHOP_SCROLLED, null != l ? l : "", n, {
                            scrollTop: t.scrollTop,
                            scrollOffset: t.offsetHeight,
                            scrollHeight: t.scrollHeight,
                            scrollWidth: t.scrollWidth,
                        });
                }
            }, [s, n, l, e]),
        };
    };
var er = n(785330),
    ei = n(641150),
    eo = n(534514);
function ec() {
    let { itemTypeFilters: e, searchQuery: t } = (0, z.v)((e) => e),
        { totalCount: n, isFetchingResults: s } = (0, q.S)(),
        a = (0, z.v)((e) => e.hasFilters()),
        l = d.useCallback(() => {
            if (!a) return "";
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
        }, [e, n, a, t, s]);
    return (0, c.jsx)(eo.D, { variant: "heading-lg/semibold", children: l() });
}
var ed = n(172218),
    eu = n(932793),
    eg = n(940980),
    e_ = n(993408),
    eh = n(623373),
    em = n(660653),
    ep = n(466459);
let ef = () => {
    let e = (0, h.bG)([v.default], () => v.default.getCurrentUser()),
        t = null != e && y.Ay.canUseCollectibles(e);
    return (0, d.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: n } = (0, ep.o)(J.A, e);
                      if (!(0, e_.aw)(e) || (0, e_.tt)(e) || n) return !0;
                      if (!(0, em.uh)(e)) return !1;
                      if ((0, eh.Ab)(e)) return null != (0, eh.CW)({ product: e, isPremiumUser: t });
                      let s = (0, e_.l8)(t),
                          a = (0, e_.yt)(e, s);
                      if (null == a || 0 === a.amount) return !0;
                      let l = 0;
                      return (
                          null != e.bundledProducts &&
                              (l = e.bundledProducts.reduce((e, t) => {
                                  let n = (0, e_.yt)(t, s);
                                  return e + (n?.amount ?? 0);
                              }, 0)),
                          a.amount < l
                      );
                  }),
        [t],
    );
};
var eE = n(575593);
let ex = (e, t) =>
        e.type === eE.R.BUNDLE && e.items.some((e) => t.includes(e.skuId))
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
        return (0, d.useMemo)(() => [...e].sort((e, t) => ex(e, n) - ex(t, n)), [e, n]);
    };
var eb = n(100057),
    eS = n(653887),
    eA = n(607470),
    ev = n(531685),
    eL = n(203312),
    eI = n(212407),
    eT = n(215688);
function eN(e) {
    let { category: t } = e,
        n = (0, h.bG)([Y.A], () => Y.A.useReducedMotion),
        s = (0, h.bG)([ev.A], () => ev.A.isFocused()),
        { catalogBannerStatic: a, catalogBannerAnimated: l, catalogBannerRive: r } = (0, eI.MV)(t),
        i = d.useRef(null),
        o = null != r;
    return (0, c.jsxs)("div", {
        ref: i,
        className: g()(eT.sW, { [eT.by]: o }),
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
                          (0, c.jsx)("img", { className: eT.ze, src: a, alt: t.name }),
                          null != l &&
                              !n &&
                              s &&
                              (0, c.jsx)(eA.A, { src: l, className: eT.tr, autoPlay: !0, loop: !0 }),
                      ],
                  }),
            (0, c.jsx)(eL.A, { category: t, className: eT.v0, daysRemainingText: G.t["8gsP5M"] }),
        ],
    });
}
(0, e_.$b)(90);
var ej = n(496569),
    eO = n(835090);
let ey = (e) => {
    let { skipPulseAnimation: t = !1 } = e;
    return (0, c.jsx)("div", {
        className: g()(ej.ty, eO.SQ, { [eO.aE]: !t }),
        children: (0, c.jsxs)("div", {
            className: g()(ej.qt, eO.yw),
            children: [(0, c.jsx)("div", { className: eO.Jr }), (0, c.jsx)("div", { className: eO.N9 })],
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
                        (0, c.jsx)("div", { className: g()(eT.sW, eR.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, c.jsx)(ey, {}, t)),
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
        n = (0, h.bG)([v.default], () => v.default.getCurrentUser()),
        s = eC(t.products),
        a = ef()(s),
        l = (0, eg.W)("CollectiblesCatalogContent");
    return null == n || 0 === a.length
        ? null
        : (0, c.jsx)("div", {
              className: ek.vY,
              children: a.map((e, t) =>
                  (0, c.jsx)(
                      L.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, c.jsx)(
                              eP.A,
                              {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  prioritizedCurrency: l ? eM.Hi.FIAT : void 0,
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
        a = (0, ed.K)((e) => {
            s(e);
        }, 0.15);
    return (0, c.jsxs)("div", {
        className: ek.EF,
        ref: a,
        children: [(0, c.jsx)(eN, { category: t }), (0, c.jsx)(eH, { category: t })],
    });
}
function eF(e) {
    let { categories: t, setCategoryRef: n, currentPage: s, handlePageChange: a, initialCategoryId: l } = e,
        r = (0, L.uM)(),
        i = (0, eD.U)(),
        o = r?.sessionId ?? "",
        { noCache: u, includeUnpublished: g } = (0, ew.A)(),
        _ = d.useMemo(
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
        if (null == l || 0 === _.length) {
            h.current = void 0;
            return;
        }
        if (l === h.current) return;
        let e = _.findIndex((e) => e.skuId === l);
        if (-1 === e) return;
        let t = Math.floor(e / R.l5) + 1;
        t !== s && a(t), (h.current = l);
    }, [l, _, a, s]);
    let m = d.useMemo(() => {
        let e = (s - 1) * R.l5;
        return _.slice(e, e + R.l5);
    }, [_, s]);
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
                          totalCount: _.length,
                          pageSize: R.l5,
                          onPageChange: a,
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
        a = (0, eK.yB)("CollectiblesSortSelect"),
        l = n(),
        r = d.useMemo(() => R.QB.filter((e) => e.sortType !== eV.$.RELEVANCE || l), [l]),
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
                O.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        _ = i(e);
    return (0, c.jsx)("div", {
        className: g()(eY.k, { [eK.jP]: a }),
        children: (0, c.jsx)(ez.l, {
            label: G.intl.string(G.t.uaX705),
            hideLabel: !0,
            options: r.map(i),
            onSelectionChange: u,
            value: _.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var eZ =
        (((l = {}).BLUE = "COLLECTIBLES_COLOR_BLUE"),
        (l.GREEN = "COLLECTIBLES_COLOR_GREEN"),
        (l.PINK = "COLLECTIBLES_COLOR_PINK"),
        (l.RED = "COLLECTIBLES_COLOR_RED"),
        (l.YELLOW = "COLLECTIBLES_COLOR_YELLOW"),
        (l.ORANGE = "COLLECTIBLES_COLOR_ORANGE"),
        (l.PURPLE = "COLLECTIBLES_COLOR_PURPLE"),
        (l.BROWN = "COLLECTIBLES_COLOR_BROWN"),
        (l.BLACK = "COLLECTIBLES_COLOR_BLACK"),
        (l.WHITE = "COLLECTIBLES_COLOR_WHITE"),
        l),
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
    e9 = n(373846),
    e5 = n(308323),
    e3 = n(608599),
    e6 = n(685761),
    e8 = n(157225),
    e7 = n(413249),
    te = n(510241),
    tt = n(601198),
    tn = n(736653),
    ts = n(270051),
    ta = n(818348),
    tl = n(764915);
function tr() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: n, hasFilters: s } = (0, z.v)(),
        a = s(),
        { enabled: l } = (0, ts.Z)({ location: "Shop" }),
        r = (0, L.uM)(),
        i = d.useCallback(
            (e) => {
                O.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        className: tl.kT,
        children: [
            (0, c.jsxs)("div", {
                className: g()(tl.KZ, tl.YG),
                children: [
                    (0, c.jsx)(ee.E, {
                        variant: "text-md/semibold",
                        className: tl.hr,
                        children: G.intl.string(G.t.Qk6r1a),
                    }),
                    R._6.map((e) => (0, c.jsx)(ti, { filter: e, trackFilterAction: i }, e)),
                    l &&
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
            a &&
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
            { itemTypeFilters: a, onToggleItemType: l } = (0, z.v)();
        return (0, c.jsx)(eX.S, {
            checked: a.has(t),
            onChange: () => {
                let e = s[t]?.toLowerCase() != null ? s[t].toLowerCase() : t;
                n(`filter item type ${e} ${!1 === a.has(t) ? "on" : "off"}`), l(t);
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
            className: tl.KZ,
            children: [
                (0, c.jsx)(ee.E, {
                    variant: "text-md/semibold",
                    className: tl.hr,
                    children: G.intl.string(G.t.K1xGoG),
                }),
                (0, c.jsx)(tc, { colors: n, trackFilterAction: t }),
                (0, c.jsx)(tc, { colors: s, trackFilterAction: t }),
            ],
        });
    },
    tc = (e) => {
        let { colors: t, trackFilterAction: n } = e,
            { colorFilters: s, onToggleColor: a } = (0, z.v)();
        return (0, c.jsx)("div", {
            className: tl.OW,
            children: t.map((e) => {
                let { color: t, label: l, enum: r } = e;
                return (0, c.jsx)(
                    td,
                    { color: t, label: l, enum: r, isToggled: s.has(r), onToggleColor: a, trackFilterAction: n },
                    r,
                );
            }),
        });
    },
    td = (e) => {
        let { color: t, label: n, enum: s, isToggled: a, onToggleColor: l, trackFilterAction: r } = e;
        return (0, c.jsx)(
            eq.m,
            {
                text: n,
                asContainer: !0,
                children: (0, c.jsx)(
                    eQ.D,
                    {
                        className: g()(tl.n1, { [tl.lx]: a }),
                        style: { backgroundColor: t },
                        "aria-label": n,
                        onClick: () => {
                            r(`filter color ${n.toLowerCase()} ${!a ? "on" : "off"}`), l(s);
                        },
                        children:
                            a &&
                            (0, c.jsx)("div", {
                                className: tl.oE,
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
            a = (0, tn.Ay)() === ta.NJ.DARK,
            l = d.useCallback(
                (e) => {
                    if (n.has(e) || a) return "always-white";
                },
                [n, a],
            ),
            r = d.useCallback(
                (e) => (n.has(e) || a ? e1.A.colors.WHITE : e1.A.colors.INTERACTIVE_TEXT_DEFAULT),
                [n, a],
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
                        icon: (0, c.jsx)(e9.C, { size: "xs", color: r(eJ.CUTE_COZY) }),
                        enum: eJ.CUTE_COZY,
                    },
                    {
                        name: G.intl.string(G.t.mMvCHo),
                        icon: (0, c.jsx)(e5.L, { size: "xs", color: r(eJ.SCI_FI) }),
                        enum: eJ.SCI_FI,
                    },
                    {
                        name: G.intl.string(G.t.TlhOQC),
                        icon: (0, c.jsx)(e3.L, { size: "xs", color: r(eJ.FOOD_DRINKS) }),
                        enum: eJ.FOOD_DRINKS,
                    },
                    {
                        name: G.intl.string(G.t["4IaUIM"]),
                        icon: (0, c.jsx)(e6.f, { size: "xs", color: r(eJ.FANTASY) }),
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
            className: tl.KZ,
            children: [
                (0, c.jsx)(ee.E, {
                    variant: "text-md/semibold",
                    className: tl.hr,
                    children: G.intl.string(G.t.t1Ztrp),
                }),
                (0, c.jsx)("div", {
                    className: tl.Ot,
                    children: i.map((e) => {
                        let { name: a, icon: r, enum: i } = e;
                        return (0, c.jsxs)(
                            eQ.D,
                            {
                                className: g()(tl.w4, { [tl.C7]: n.has(i) }),
                                onClick: () => {
                                    let e = n.has(i);
                                    t(`filter theme ${a.toLowerCase()} ${!e ? "on" : "off"}`), s(i);
                                },
                                children: [
                                    r,
                                    (0, c.jsx)(ee.E, { color: l(i), variant: "text-md/medium", children: a }),
                                ],
                            },
                            a,
                        );
                    }),
                }),
            ],
        });
    };
var tg = n(687971);
function t_() {
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
var th = n(528096);
let tm = { flattenProductVariants: !0 };
function tp(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: s } = e,
        a = (0, L.uM)(),
        l = a?.sessionId ?? "",
        { noCache: r, includeUnpublished: i } = (0, ew.A)(),
        o = (0, eg.W)("CollectiblesFilterResults"),
        u = (0, h.bG)([v.default], () => v.default.getCurrentUser()),
        { skus: _, currentPage: m, totalCount: p, isFetchingResults: f } = (0, q.S)(),
        E = (0, h.yK)([I.A], () => I.A.getProductsBySkus(_)),
        x = d.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        C = _?.join("");
    d.useEffect(() => {
        x();
    }, [C, x]);
    let b = ef(),
        S = d.useMemo(() => b(E), [b, E]);
    d.useEffect(() => {
        t ||
            (0, eb.z)({
                sessionId: l,
                checkpoint: eb.t.SHOP_RENDERED,
                tab: s,
                unpublishedCategoriesShown: i,
                cacheDisabled: r,
            });
    }, [l, i, r, t, s]);
    let A = d.useRef(null),
        { setQueryPageSize: T, setQueryPageOffset: N, queryPageSize: j } = (0, z.v)(),
        [y, k] = d.useState(!1),
        R = t || f || null == u;
    d.useEffect(() => {
        R ? k(!1) : S.length > 0 && k(!0);
    }, [R, S.length]);
    let P = j > 0 && !R && 0 === S.length;
    d.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == A.current || T(Math.floor(5 * getComputedStyle(A.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != A.current) return e.observe(A.current), () => e.disconnect();
    }, [T]);
    let M = d.useCallback(
        (e) => {
            O.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: a?.sessionId,
                page_section: a?.pageSection,
                page_category: a?.pageCategory,
                page_index: e,
                page_size: j,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                N((e - 1) * j);
        },
        [a, j, N],
    );
    return (0, c.jsxs)(eM.v3.Provider, {
        value: tm,
        children: [
            (0, c.jsxs)("div", {
                className: g()({ [th.oE]: P }),
                children: [
                    P && (0, c.jsx)(t_, {}),
                    (0, c.jsxs)("div", {
                        className: g()(th.ZE, { [th.Kp]: y }),
                        ref: A,
                        children: [
                            R && [...Array(j)].map((e, t) => (0, c.jsx)(ey, {}, t)),
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
            p > j &&
                (0, c.jsx)("div", {
                    className: th.Ej,
                    children: (0, c.jsx)("div", {
                        children: (0, c.jsx)(eu.m, {
                            currentPage: m,
                            totalCount: p,
                            pageSize: j,
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
        a = (0, L.uM)(),
        l = a?.sessionId ?? "",
        { noCache: r, includeUnpublished: i } = (0, ew.A)(),
        o = (0, eg.W)("CollectiblesFilterableShop"),
        u = (0, h.bG)([v.default], () => v.default.getCurrentUser()),
        g = (0, h.bG)([I.A], () => I.A.productsWithVariantsAsGroup),
        [_, m] = d.useState(1),
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
        S = eC(
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
            sessionId: l,
            checkpoint: eb.t.SHOP_MOUNTED,
            tab: s,
            unpublishedCategoriesShown: i,
            cacheDisabled: r,
        });
    }, []),
    d.useEffect(() => {
        t ||
            (0, eb.z)({
                sessionId: l,
                checkpoint: eb.t.SHOP_RENDERED,
                tab: s,
                unpublishedCategoriesShown: i,
                cacheDisabled: r,
            });
    }, [l, i, r, t, s]),
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
                      children: S.slice(40 * (_ - 1), 40 * _).map((e, t) =>
                          null == I.A.getCategory(e.categorySkuId)
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
                  S.length > 40 &&
                      (0, c.jsx)("div", {
                          className: ek.Ej,
                          children: (0, c.jsx)("div", {
                              children: (0, c.jsx)(eu.m, {
                                  currentPage: _,
                                  totalCount: S.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      O.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: a?.sessionId,
                                          page_section: a?.pageSection,
                                          page_category: a?.pageCategory,
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
    let { tab: t, categories: n, initialCategoryId: s, showFilterInitially: a = !0, onUnmount: l } = e;
    (0, z.S)();
    let r = d.useRef(null),
        { handleScroll: i } = el(r, t),
        o = (0, $.f)("Shop Browse"),
        { setCategoryRef: u, handleScrollToCategory: g } = (0, eU.k0)(r.current),
        [_, h] = d.useState(a),
        [m, p] = d.useState(!1);
    return (
        d.useEffect(() => {
            null != s && g(s);
        }, [s, g]),
        d.useEffect(
            () => () => {
                null != l && l();
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
                                  filterBarOpen: _,
                                  setFilterBarOpen: h,
                                  tab: t,
                                  scrollerRef: r,
                                  categories: n,
                                  setCategoryRef: u,
                                  initialCategoryId: s,
                              }),
                    }),
                    _ && !m && (0, c.jsx)("div", { className: tx.yF }),
                    _ && !m && (0, c.jsx)(Q.Ip, { className: tx.kT, children: (0, c.jsx)(tr, {}) }),
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
            tab: a,
            scrollerRef: l,
            categories: r,
            setCategoryRef: i,
            initialCategoryId: o,
        } = e,
        u = d.useRef(null),
        _ = (0, z.v)((e) => e.hasDefaultFilters()),
        h = (0, L.uM)(),
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
        })(l),
        f = d.useCallback(
            (e) => {
                O.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    (O.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                            (0, c.jsx)(e$, {}),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        ref: E,
                                        children: (0, c.jsx)(et.$, {
                                            onClick: () => {
                                                let e = !n;
                                                O.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                    className: tx.Dh,
                                    ref: u,
                                    children: (0, c.jsx)(X.Ch, { className: tx.Qo, children: (0, c.jsx)(tr, {}) }),
                                }),
                        ],
                    }),
                    _
                        ? (0, R.dF)(a)
                            ? (0, c.jsx)(tE, { scrollerRef: l, tab: a }, a)
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
                        : (0, c.jsx)(tp, { scrollerRef: l, tab: a }, a),
                ],
            }),
        })
    );
};
var tS = n(599062),
    tA = n(651162),
    tv = n(554146),
    tL = n(367727);
let tI = d.createContext(null);
function tT(e) {
    let { blockType: t, children: n } = e,
        s = d.useMemo(() => ({ blockType: t }), [t]);
    return (0, c.jsx)(tI.Provider, { value: s, children: n });
}
var tN = n(755172),
    tj = n(325595),
    tO = n(893998),
    ty = n(508770),
    tk = n(403581),
    tR = n(293383),
    tB = n(437032);
let tP = (e) => {
    let { location: t } = e;
    return (0, tR.Do)(t)
        ? (0, c.jsx)(eq.m, {
              position: "top",
              text: G.intl.string(G.t["L9B+ZZ"]),
              children: (0, c.jsx)("span", {
                  className: tB.h,
                  children: (0, c.jsx)(ty.E, { type: "early_access", variant: "expressive", icon: tk.t }),
              }),
          })
        : null;
};
var tM = n(419354),
    tD = n(607399),
    tw = n(946015),
    tH = n(717421),
    tG = n(854818),
    tF = n(134264);
let tU = d.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        s = (0, tH.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsxs)(tM.animated.div, {
        className: g()([tF.lP, tD.Fr && tF.yJ]),
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
            (0, c.jsxs)(tw.s, {
                direction: tw.s.Direction.VERTICAL,
                children: [
                    (0, c.jsx)(ee.E, {
                        variant: "text-md/medium",
                        className: tF.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, c.jsx)(ee.E, {
                            variant: "text-sm/medium",
                            className: tF.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, c.jsx)(tG.e, { endDate: t.endTime }),
        ],
    });
});
var tW = n(424918),
    tV = n(230109),
    tz = n(777666),
    tK = n(597783),
    tY = n(941734);
let t$ = (e) => {
        let t,
            { category: n, subblock: s, badgeText: a, enablePreview: l, handleTransition: r } = e;
        null != s && (t = I.A.getCategoryByStoreListingId(s?.categoryStoreListingId)?.skuId);
        let i = t ?? n?.skuId ?? "",
            { handleCardVisibilityChange: o } = (0, tK.Z)(i, "home", "marketing featured block"),
            u = (0, eI.s4)(n, s, l),
            g = d.useRef(null),
            _ = s?.bodyText,
            h = (0, L.uM)();
        return (0, c.jsx)(tV.L, {
            innerRef: g,
            onChange: o,
            threshold: 0,
            children: (0, c.jsxs)(eQ.D, {
                className: tY.oT,
                innerRef: g,
                style: { ...(null != u && { backgroundImage: `url(${u})` }) },
                onClick: () => {
                    r({
                        sourceButton: "shop marketing tile",
                        categorySkuId: i,
                        isInternalShopDeeplink: !0,
                        isOrbsExclusive: n?.isOrbsExclusive,
                    }),
                        O.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    null != a && (0, c.jsx)(tz.Lp, { disableColor: !0, text: a, className: tY.pv }),
                    (0, c.jsx)("div", {
                        className: tY.Gh,
                        children:
                            null != _ &&
                            (0, c.jsx)(eo.D, {
                                lineClamp: 4,
                                className: tY.BN,
                                style: { color: s?.bannerTextColor ?? "white" },
                                variant: "heading-md/medium",
                                children: _,
                            }),
                    }),
                    (0, c.jsx)("div", {
                        className: tY.b2,
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
                                    O.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    tZ = (e) => {
        let { handleTransition: t, featuredBlockRecord: n } = e;
        return (0, c.jsx)("div", {
            className: g()(tY.n9, tY.YB),
            children: n?.subblocks.map((e, n) =>
                e.type === tW.u.CATEGORY
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
                                  t$,
                                  {
                                      subblock: e,
                                      enablePreview: 0 === n,
                                      badgeText: (0, e_.HF)(e.unpublishedAt) ? G.intl.string(G.t["h/uBCR"]) : void 0,
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
    tJ = (e) => {
        let { handleTransition: t, categories: n } = e;
        if (null == n || n.length < 2) return null;
        let [s, a] = n;
        return (0, c.jsx)("div", {
            className: g()(tY.n9, tY.YB),
            children: (0, c.jsxs)(L.R9, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != s ? s.name : a?.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == s),
                },
                children: [
                    null != s &&
                        (0, c.jsx)(t$, {
                            category: s,
                            enablePreview: !0,
                            badgeText: (0, e_.HF)(s.unpublishedAt) ? G.intl.string(G.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                    null != a &&
                        (0, c.jsx)(t$, {
                            category: a,
                            badgeText: (0, e_.HF)(a.unpublishedAt) ? G.intl.string(G.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                ],
            }),
        });
    },
    tq = (e) => {
        let { isLoading: t, handleTransition: n, categories: s, featuredBlockRecord: a } = e,
            { analyticsLocations: l } = (0, x.Ay)(j.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
        return t
            ? (0, c.jsxs)("div", {
                  className: g()(tY.n9, tY.YB),
                  children: [
                      (0, c.jsx)("div", {
                          className: g()(tY.Jn, tY.oT),
                          children: (0, c.jsx)("div", { className: tY.uy }),
                      }),
                      (0, c.jsx)("div", {
                          className: g()(tY.Jn, tY.oT),
                          children: (0, c.jsx)("div", { className: tY.uy }),
                      }),
                  ],
              })
            : null != a
              ? (0, c.jsx)(x.f5, {
                    value: l,
                    children: (0, c.jsx)(tZ, { featuredBlockRecord: a, handleTransition: n, isLoading: !1 }),
                })
              : (0, c.jsx)(x.f5, {
                    value: l,
                    children: (0, c.jsx)(tJ, { categories: s, handleTransition: n, isLoading: !1 }),
                });
    };
var tX = n(885574),
    tQ = n(975807),
    t0 = n(975571),
    t1 =
        (((i = {}).MOUNTED = "mounted"),
        (i.SORT_OUT = "sort-out"),
        (i.SORT_IN = "sort-in"),
        (i.SHUFFLE_OUT = "shuffle-out"),
        (i.SHUFFLE_IN = "shuffle-in"),
        (i.FINISHED = "finished"),
        i);
n(667532);
var t2 = n(735438),
    t4 = n.n(t2),
    t9 =
        (((o = {}).RECOMMENDED = "recommended"),
        (o.POPULAR = "popular"),
        (o.RECENT = "recent"),
        (o.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (o.RANDOM = "random"),
        o),
    t5 = n(153488),
    t3 = n(155999),
    t6 = n.n(t3);
function t8() {
    let e = (0, N.bG)([I.A], () => I.A.products);
    return (0, d.useCallback)(
        (t) =>
            t6()(
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
let t7 = (e) => {
    let {
            isLoading: t,
            title: n,
            sortedSkuIds: s,
            numVisibleItems: a,
            prioritizeUserDiscounts: l,
            tab: r,
            buttonContainerClassName: i,
            orbsSupportedOnly: o,
        } = e,
        u = (0, N.bG)([v.default], () => v.default.getCurrentUser()),
        _ = y.Ay.canUseCollectibles(u),
        h = (0, eg.W)("FeedBlock"),
        m = (0, eK.yB)("FeedBlock"),
        {
            sortType: p,
            setSortType: f,
            sortedItems: E,
            sortOptions: C,
            shuffleProducts: b,
            showRecommendationOption: S,
        } = (function (e) {
            let { sortedSkuIds: t, isPremiumUser: n, prioritizeUserDiscounts: s, orbsSupportedOnly: a } = e,
                l = (0, N.bG)([t5.A], () => t5.A.hasConsented(B.YAq.PERSONALIZATION)),
                r = d.useMemo(() => t?.[t9.RECOMMENDED] ?? [], [t]),
                i = d.useMemo(() => t?.[t9.POPULAR] ?? [], [t]),
                o = r.length > 0 && l,
                [c, u] = d.useState(o ? t9.RECOMMENDED : t9.POPULAR),
                g = (0, N.bG)([I.A], () => I.A.productsWithVariantsAsGroup),
                _ = d.useMemo(() => (0, e_.CE)(g), [g]),
                h = (0, N.bG)([w.A], () => w.A.getUserDiscounts()),
                m = t8(),
                p = ef(),
                [f, E] = d.useState([]),
                x = d.useCallback(() => {
                    u(t9.RANDOM), E(t4().shuffle(_));
                }, [_]);
            d.useEffect(() => {
                E(t4().shuffle(_));
            }, [_]);
            let C = eC(
                d.useMemo(() => {
                    let e = [];
                    if (c === t9.RECENT) e = _;
                    else if (c === t9.PRICE_LOW_TO_HIGH) e = (0, e_.bf)([..._], n, a);
                    else if (c === t9.RECOMMENDED) {
                        let t = m(r);
                        e = s ? (0, e_.Bs)(t, h) : t;
                    } else if (c === t9.POPULAR) {
                        let t = m(i);
                        e = s ? (0, e_.Bs)(t, h) : t;
                    } else c === t9.RANDOM && (e = f);
                    return a ? (0, eh.ex)(p(e)) : p(e);
                }, [c, a, p, n, _, m, r, s, h, i, f]),
            );
            return {
                sortType: c,
                setSortType: u,
                sortedItems: C,
                sortOptions: d.useMemo(() => {
                    let e = [
                        { value: t9.POPULAR, label: G.intl.string(G.t.Y68e5p) },
                        { value: t9.RECENT, label: G.intl.string(G.t["51Bhiz"]) },
                        { value: t9.PRICE_LOW_TO_HIGH, label: G.intl.string(G.t.m8RVU2) },
                    ];
                    return o && e.unshift({ value: t9.RECOMMENDED, label: G.intl.string(G.t.zPWgFG) }), e;
                }, [o]),
                showRecommendationOption: o,
                shuffleProducts: x,
            };
        })({ sortedSkuIds: s, isPremiumUser: _, prioritizeUserDiscounts: l, orbsSupportedOnly: o }),
        A = (0, N.bG)([Y.A], () => Y.A.useReducedMotion),
        T = (0, N.bG)([ev.A], () => ev.A.isFocused()),
        k = !A && T,
        { animationPhase: P, startAnimation: M } = (() => {
            let [e, t] = d.useState("mounted"),
                [n, s] = d.useState(!1),
                a = d.useRef(null);
            return (
                d.useEffect(() => {
                    n && "finished" === e && (null !== a.current && a.current.focus(), s(!1));
                }, [e, n]),
                {
                    animationPhase: e,
                    startAnimation: d.useCallback((e) => {
                        let { isShuffling: n, onOutroComplete: l, returnRef: r } = e;
                        r?.current != null && ((a.current = r.current), s(!0)),
                            t(n ? "shuffle-out" : "sort-out"),
                            setTimeout(
                                () => {
                                    l(),
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
        { analyticsLocations: F } = (0, x.Ay)(j.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
        U = d.useRef(null),
        W = d.useCallback(
            (e) => {
                M({ isShuffling: !1, onOutroComplete: () => f(e) }),
                    O.default.track(B.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, { page_session_id: H, sort_type: e });
            },
            [M, f, H],
        );
    return null == u
        ? null
        : (0, c.jsx)(x.f5, {
              value: F,
              children: (0, c.jsxs)("div", {
                  className: g()(tY.lD, tY.YB),
                  children: [
                      (0, c.jsxs)("div", {
                          className: tY.$6,
                          children: [
                              (0, c.jsxs)("div", {
                                  className: tY.LD,
                                  children: [
                                      (0, c.jsx)(eo.D, { variant: "heading-lg/semibold", children: n }),
                                      S &&
                                          (0, c.jsx)(eq.m, {
                                              text: G.intl.string(G.t["3taPdj"]),
                                              position: "top",
                                              "aria-label": G.intl.string(G.t["3taPdj"]),
                                              children: (0, c.jsx)(eQ.D, {
                                                  onClick: () =>
                                                      (0, tQ.A)(t0.A.getArticleURL(B.MVz.DATA_USED_FOR_RECOMMENDED)),
                                                  className: tY.sT,
                                                  children: (0, c.jsx)(tX.m, { size: "sm" }),
                                              }),
                                          }),
                                  ],
                              }),
                              (0, c.jsxs)("div", {
                                  className: g()(tY.IE, { [eK.jP]: m }),
                                  children: [
                                      (0, c.jsx)(ee.E, {
                                          variant: "text-md/medium",
                                          children: G.intl.string(G.t.uaX705),
                                      }),
                                      (0, c.jsx)("div", {
                                          className: g()(i, tY.pI),
                                          children: (0, c.jsx)(ez.l, {
                                              label: G.intl.string(G.t.uaX705),
                                              hideLabel: !0,
                                              options: C,
                                              onSelectionChange: W,
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
                                                      O.default.track(B.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                          page_session_id: H,
                                                      });
                                              },
                                              disabled: P !== t1.MOUNTED && P !== t1.FINISHED,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, c.jsx)("div", {
                          className: tY.hm,
                          children: t
                              ? (0, c.jsx)(c.Fragment, {
                                    children: [...Array(12)].map((e, t) => (0, c.jsx)(ey, {}, t + 1)),
                                })
                              : E.slice(0, a).map((e, t) => {
                                    let n,
                                        s = I.A.getCategoryForProduct(e.skuId);
                                    if (null == e || null == s) return null;
                                    if (k)
                                        if (P === t1.SHUFFLE_OUT)
                                            return (0, c.jsx)(
                                                "div",
                                                {
                                                    className: tY.Z2,
                                                    children: (0, c.jsx)(ey, { skipPulseAnimation: !0 }),
                                                },
                                                `${e.skuId}-${t}`,
                                            );
                                        else
                                            P === t1.SORT_OUT
                                                ? (n = tY.MW)
                                                : P === t1.SHUFFLE_IN
                                                  ? (n = tY.aS)
                                                  : P === t1.SORT_IN && (n = tY.F7);
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
var ne = n(696292),
    nt = n(545986),
    nn = n(318346);
let ns = (e) => {
    let { clientX: t, clientY: n, currentTarget: s } = e;
    s.style.pointerEvents = "none";
    let a = document.elementFromPoint(t, n);
    return (s.style.pointerEvents = "auto"), { elementBelow: a, button: a?.closest("button") ?? null };
};
var na = n(929955);
let nl = (e) => {
    let { bannerStatic: t, bannerAnimated: n, bannerRive: s, isResponsive: a = !1, eventTargetRef: l } = e,
        r = (0, N.bG)([Y.A], () => Y.A.useReducedMotion),
        i = (0, N.bG)([ev.A], () => ev.A.isFocused()),
        o = null != n && !r && i;
    return null != s
        ? (0, c.jsx)(eS._, { src: s, fit: "fit-width", eventTargetRef: l })
        : o
          ? (0, c.jsx)(eA.A, { className: g()({ [na.no]: a }, na.BW, na.ud), src: n, autoPlay: !0, loop: !0 })
          : (0, c.jsx)("div", {
                className: g()({ [na.no]: a }, na.BW, na._e),
                style: { backgroundImage: `url(${t})` },
            });
};
var nr = n(951707);
let ni = (e) => (0, c.jsx)("div", { className: tY.hm, children: (0, c.jsx)(nc, { ...e }) }),
    no = (e) => (0, c.jsx)(nr.A, { gap: "xl", children: (0, c.jsx)(nc, { ...e }) }),
    nc = (e) => {
        let { isLoading: t, products: n, tab: s, totalCards: a } = e,
            l = (0, eg.W)("HeroBlockCards");
        if (t) return (0, c.jsx)(c.Fragment, { children: [...Array(a ?? 4)].map((e, t) => (0, c.jsx)(ey, {}, t)) });
        let r = null != a ? n.slice(0, a) : n;
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
                                      prioritizedCurrency: s === R.G2.ORBS ? eM.Hi.ORBS : l ? eM.Hi.FIAT : void 0,
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
            { heroBlockRecord: s, layout: a, tab: l, isBlockLoading: r = !1 } = e,
            { products: i } =
                ((t = t8()),
                (n = d.useMemo(() => (r ? [] : t(s.rankedSkuIds)), [r, t, s.rankedSkuIds])),
                { products: eC(ef()(n)) }),
            o = d.useMemo(
                () =>
                    !r &&
                    0 !== s.rankedSkuIds.length &&
                    !(i.length > 0) &&
                    s.rankedSkuIds.every((e) => I.A.getProduct(e)?.variantGroupStoreListingId != null),
                [r, s.rankedSkuIds, i.length],
            ),
            u = r || o;
        switch (a) {
            case "feed":
                return (0, c.jsx)(ni, { heroBlockRecord: s, isLoading: u, products: i, tab: l });
            case "hscroll":
                return (0, c.jsx)(no, { heroBlockRecord: s, isLoading: u, products: i, tab: l });
        }
    },
    nu = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: tA.g.HERO,
        categoryStoreListingId: "",
    },
    ng = (e) => {
        let {
                isLoading: t,
                handleTransition: n,
                category: s,
                heroBlock: a,
                tab: l,
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
            _ = (0, eK.yB)("HeroBlock"),
            h = (0, N.bG)([v.default], () => v.default.getCurrentUser()),
            m = (0, L.uM)(),
            { analyticsLocations: p } = (0, x.Ay)(j.A.COLLECTIBLES_SHOP_HERO),
            f = d.useMemo(
                () =>
                    null != a
                        ? a
                        : null == s
                          ? nu
                          : {
                                rankedSkuIds: s.heroRanking ?? [],
                                name: s.name,
                                unpublishedAt: s.unpublishedAt,
                                categorySkuId: s.skuId,
                                summary: s.summary,
                                type: tA.g.HERO,
                                categoryStoreListingId: s.storeListingId,
                                bannerDisplayConfig: s.heroBannerDisplayConfig,
                                logoDisplayConfig: s.heroLogoDisplayConfig,
                                heroLogoUrl: s.heroLogoUrl,
                                heroBannerUrl: s.heroBannerUrl,
                                heroBannerAnimatedUrl: s.heroBannerAnimatedUrl,
                            },
                [a, s],
            ),
            {
                bannerDisplayConfig: E,
                logoDisplayConfig: C,
                heroLogo: b,
                heroBannerStatic: S,
                heroBannerAnimated: A,
                heroBannerRive: I,
            } = (0, eI.Kk)(f),
            T = E?.responsive ?? !1,
            y = E?.backgroundStyle,
            k = null != I,
            P = l === R.G2.ORBS,
            M = null != s && s.isOrbsExclusive,
            D = P ? G.intl.string(G.t["1CdL8d"]) : G.intl.string(G.t.xYKa1T),
            w = () => {
                P
                    ? ((0, nn.Y)({
                          pageType: B.liQ.SHOP_ORBS_TAB,
                          sectionType: B.JJy.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: B.ZSU.CTA_TO_QUEST_HOME,
                      }),
                      (0, nt.navigateToQuestHome)({ fromContent: ne.u.ORBS_SHOP_HERO_CTA }))
                    : (n({
                          sourceButton: "shop latest category hero",
                          categorySkuId: M ? f.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: M,
                      }),
                      O.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: m?.sessionId,
                          sku_id: f.categorySkuId,
                          page_type: l,
                          page_section: m?.pageSection,
                          page_category: m?.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != h && (t || f !== nu)
            ? (0, c.jsx)(x.f5, {
                  value: p,
                  children: (0, c.jsxs)("div", {
                      ref: o,
                      className: tY.os,
                      children: [
                          k
                              ? ((e) => {
                                    let { isCustomCursorEnabled: t, className: n, riveEventTargetRef: s } = e,
                                        a = (e) => {
                                            let { button: n } = ns(e),
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
                                        onMouseMove: a,
                                        onMouseDown: (e) => {
                                            let { button: t } = ns(e);
                                            null != t && t.click();
                                        },
                                    });
                                })({ isCustomCursorEnabled: _, className: tY.Xt, riveEventTargetRef: u })
                              : null,
                          (0, c.jsx)("div", {
                              className: g()(tY.vK, { [tY.cN]: k, [tY.no]: T }),
                              style: null != y ? { background: y } : void 0,
                              children:
                                  null != S &&
                                  (0, c.jsx)(nl, {
                                      bannerStatic: S,
                                      bannerAnimated: A,
                                      bannerRive: I,
                                      isResponsive: T,
                                      eventTargetRef: u,
                                  }),
                          }),
                          (0, c.jsxs)("div", {
                              className: tY.xX,
                              children: [
                                  k
                                      ? (0, c.jsx)("div", {
                                            className: tY.fy,
                                            children:
                                                !t &&
                                                (0, c.jsx)(et.$, { variant: "overlay-primary", onClick: w, text: D }),
                                        })
                                      : (0, c.jsxs)("div", {
                                            className: g()(tY.bC, { [tY.no]: T }),
                                            children: [
                                                t
                                                    ? (0, c.jsx)("div", { className: tY.Hw })
                                                    : (0, c.jsxs)("div", {
                                                          className: tY.Hw,
                                                          children: [
                                                              (0, e_.HF)(f.unpublishedAt) &&
                                                                  (0, c.jsx)(tz.Lp, {
                                                                      disableColor: !0,
                                                                      text: G.intl.string(G.t["h/uBCR"]),
                                                                      className: tY.v0,
                                                                  }),
                                                              (0, c.jsxs)("div", {
                                                                  className: tY.Wq,
                                                                  children: [
                                                                      null != i &&
                                                                          (0, c.jsx)("div", {
                                                                              className: tY._I,
                                                                              children: i,
                                                                          }),
                                                                      null != b &&
                                                                          (0, c.jsx)("img", {
                                                                              className: tY.rm,
                                                                              src: b,
                                                                              alt: f.name,
                                                                              style: C?.toDesktopStyles(),
                                                                          }),
                                                                      null != f.title &&
                                                                          (0, c.jsx)(eo.D, {
                                                                              variant: "heading-xxl/bold",
                                                                              className: tY.DD,
                                                                              color: "text-strong",
                                                                              children: f.title,
                                                                          }),
                                                                      null != f.summary &&
                                                                          "" !== f.summary &&
                                                                          (0, c.jsx)(ee.E, {
                                                                              variant: "text-md/normal",
                                                                              className: P ? tY.h4 : tY.Tm,
                                                                              style:
                                                                                  null != f.bannerTextColor
                                                                                      ? { color: f.bannerTextColor }
                                                                                      : void 0,
                                                                              children: f.summary,
                                                                          }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                !t &&
                                                    (0, c.jsx)("div", {
                                                        className: tY.IS,
                                                        children: (0, c.jsx)(et.$, {
                                                            variant: "overlay-primary",
                                                            onClick: w,
                                                            text: D,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                  (0, c.jsx)(nd, {
                                      heroBlockRecord: f,
                                      tab: l,
                                      isBlockLoading: t,
                                      layout: l === R.G2.HOME ? "hscroll" : "feed",
                                  }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var n_ = n(349288),
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
        { bannerUrl: a, bannerAnimatedUrl: l } = (0, eI.qY)(t),
        r = null != t.textColor ? { color: t.textColor } : void 0,
        i = null != t.body && "" !== t.body,
        o = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, c.jsxs)("div", {
        ref: s,
        className: nh.BX,
        children: [
            (0, c.jsx)("div", {
                className: nh.vK,
                children: null != a && (0, c.jsx)(nl, { bannerStatic: a, bannerAnimated: l }),
            }),
            (0, c.jsx)("div", {
                className: nh.HQ,
                children: (0, c.jsxs)("div", {
                    className: nh.Yn,
                    children: [
                        null != t.endTime ? (0, c.jsx)(tG.e, { endDate: t.endTime, size: "lg" }) : null,
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
                                          (0, c.jsx)(n_.Anchor, {
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
var np = n(189213),
    nf = n(290136),
    nE = n(478016),
    nx = n(825484),
    nC = n(713517),
    nb = n(914410),
    nS = n(693477),
    nA = n(61750);
function nv(e, t) {
    let n = d.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        s = (0, N.bG)([J.A], () => J.A.getPurchases(n));
    return {
        readyToClaim: d.useMemo(() => s.length === n.length, [s, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: s,
    };
}
var nL = n(498924);
let nI = d.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: s } = (0, tK.Z)(n),
            a = d.useRef(null),
            { isHoveringOrFocusing: l } = (0, nC.A)(a),
            { readyToClaim: r, collectibleProductSkuIds: i, collectedSkuIds: o } = nv(t, n),
            u = (0, N.bG)([J.A], () => J.A.isClaiming === n);
        return (0, c.jsx)(tV.L, {
            onChange: s,
            threshold: 0,
            innerRef: a,
            children: (0, c.jsx)("div", {
                ref: a,
                className: g()(ej.ty, nL.Q3, { [ej.yo]: l }),
                "aria-label": G.intl.formatToPlainString(G.t.Ez6aHE, { category: t.name }),
                children: (0, c.jsxs)("div", {
                    className: ej.qt,
                    children: [
                        (0, c.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: nL.L8,
                        }),
                        (0, c.jsx)("div", {
                            className: ej.N1,
                            children: (0, c.jsx)(tz.Lp, {
                                text: G.intl.string(G.t.rykAJ9),
                                disableColor: !0,
                                className: nL.HZ,
                            }),
                        }),
                        (0, c.jsxs)("div", {
                            className: ej.xQ,
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
                                                    className: ej.tZ,
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
                                                        children: (0, c.jsx)(nf.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)("div", {
                                            className: ej.oh,
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
                                                        className: g()(nL.__, { [nL.gF]: r }),
                                                        children: [
                                                            r
                                                                ? (0, c.jsx)(nE.U, {
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
                                    className: ej.Vs,
                                    children: (0, c.jsx)(nx.e, {
                                        wrap: !1,
                                        className: ej.Ld,
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
                                                                    (0, nA.A)({
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
                                                                        (0, c.jsx)(np.Modal, {
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
            { isBlockLoading: s = !1, heroBlock: a, tab: l } = e,
            r = (0, eg.W)("RewardHeroBlockCards"),
            i = d.useMemo(() => I.A.getCategoryForProduct(a.rewardSkuId), [a.rewardSkuId]),
            o = (0, N.bG)([J.A], () => J.A.getPurchase(a.rewardSkuId)),
            { products: u } =
                ((t = t8()),
                (n = d.useMemo(
                    () => (s ? [] : t(a.rankedSkuIds).filter((e) => e.skuId !== a.rewardSkuId || null != o)),
                    [s, t, a.rankedSkuIds, o, a.rewardSkuId],
                )),
                { products: eC(ef()(n)) }),
            g = d.useMemo(
                () =>
                    !s &&
                    0 !== a.rankedSkuIds.length &&
                    !(u.length > 0) &&
                    a.rankedSkuIds.every((e) => I.A.getProduct(e)?.variantGroupStoreListingId != null),
                [s, a.rankedSkuIds, u.length],
            ),
            _ = s || g,
            { readyToClaim: h } = nv(i, a.rewardSkuId),
            m = null == o && null != a.rewardSkuId && null != i;
        return (0, c.jsx)(nr.A, {
            gap: "xl",
            children: _
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
                                      children: (0, c.jsx)(nI, { category: i, rewardSkuId: a.rewardSkuId }),
                                  },
                                  a.rewardSkuId,
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
                                                        l === R.G2.ORBS ? eM.Hi.ORBS : r ? eM.Hi.FIAT : void 0,
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
(0, e_.$b)(90);
let nN = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: tA.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    nj = (e) => {
        let { isLoading: t = !1, heroBlock: n, tab: s, onVisibilityChange: a } = e,
            l = (0, ed.K)(
                (e) => {
                    a?.(e);
                },
                0.1,
                null != a,
            ),
            r = (0, N.bG)([v.default], () => v.default.getCurrentUser()),
            { analyticsLocations: i } = (0, x.Ay)(j.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: o,
                logoDisplayConfig: d,
                heroLogo: u,
                heroBannerStatic: _,
                heroBannerAnimated: h,
            } = (0, eI.Kk)(n),
            m = o?.responsive ?? !1,
            p = o?.backgroundStyle;
        return null != r && (t || n !== nN)
            ? (0, c.jsx)(x.f5, {
                  value: i,
                  children: (0, c.jsxs)("div", {
                      ref: l,
                      className: tY.os,
                      children: [
                          (0, c.jsx)("div", {
                              className: g()(tY.vK, { [tY.no]: m }),
                              style: null != p ? { background: p } : void 0,
                              children:
                                  null != _ && (0, c.jsx)(nl, { bannerStatic: _, bannerAnimated: h, isResponsive: m }),
                          }),
                          (0, c.jsxs)("div", {
                              className: tY.xX,
                              children: [
                                  (0, c.jsx)("div", {
                                      className: g()(tY.bC, { [tY.no]: m }),
                                      children: t
                                          ? (0, c.jsx)("div", { className: tY.Hw })
                                          : (0, c.jsx)("div", {
                                                className: tY.Hw,
                                                children: (0, c.jsxs)("div", {
                                                    className: tY.Wq,
                                                    children: [
                                                        null != u &&
                                                            (0, c.jsx)("img", {
                                                                className: tY.rm,
                                                                src: u,
                                                                alt: n.name,
                                                                style: d?.toDesktopStyles(),
                                                            }),
                                                        null != n.title &&
                                                            (0, c.jsx)(eo.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: tY.DD,
                                                                color: "text-strong",
                                                                children: n.title,
                                                            }),
                                                        "" !== n.summary &&
                                                            (0, c.jsx)(ee.E, {
                                                                variant: "text-md/normal",
                                                                className: tY.Tm,
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
    nO = (e) => {
        let { shelf: t, handleTransition: n, tab: s } = e,
            a = (0, N.bG)([v.default], () => v.default.getCurrentUser()),
            l = (0, eg.W)("ShelfBlock"),
            r = (0, N.bG)([I.A], () => I.A.getCategory(t.categorySkuId)),
            i = t8(),
            o = eC(d.useMemo(() => i(t.rankedSkuIds), [t.rankedSkuIds, i])),
            { analyticsLocations: u } = (0, x.Ay)(j.A.COLLECTIBLES_SHOP_SHELF);
        return null == a
            ? null
            : (0, c.jsx)(x.f5, {
                  value: u,
                  children: (0, c.jsxs)("div", {
                      className: g()(tY.Vp, tY.YB),
                      children: [
                          (0, c.jsxs)("div", {
                              className: tY.$6,
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
                          (0, c.jsx)(nr.A, {
                              gap: "xl",
                              children: (0, c.jsx)(c.Fragment, {
                                  children: o.map((e, n) => {
                                      if (null == I.A.getCategoryForProduct(e.skuId) || null == e) return null;
                                      let a = e.skuId;
                                      return (0, c.jsx)(
                                          L.R9,
                                          {
                                              newValue: { tilePosition: n, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, c.jsx)(
                                                  eP.A,
                                                  {
                                                      skuId: a,
                                                      prioritizedCurrency:
                                                          s === R.G2.ORBS ? eM.Hi.ORBS : l ? eM.Hi.FIAT : void 0,
                                                  },
                                                  a,
                                              ),
                                          },
                                          a,
                                      );
                                  }),
                              }),
                          }),
                      ],
                  }),
              });
    };
var ny = n(815021),
    nk = n(509434),
    nR = n(871123),
    nB = n(733391),
    nP = n(439303),
    nM = n(832163),
    nD = n(44724),
    nw = n(317560),
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
                onDismiss: a,
                skuIds: l,
                tab: r,
                applicationId: i,
                headerText: o,
                shopButtonText: u,
                analyticsSection: g,
                analyticsTileType: _,
                analyticsImpressionType: h,
                backgroundGradient: m,
            } = e,
            { guildId: p } = (0, nR.nG)(i);
        d.useEffect(() => {
            null != p && (0, nB.Rw)(p);
        }, [p]);
        let f = (0, N.bG)([nM.A], () => {
                let e = nM.A.getStorefrontMetadata(i);
                return e?.logoAssetId != null ? (0, nU.YE)(i, e.logoAssetId, 75) : void 0;
            }, [i]),
            E =
                ((t = d.useRef([])),
                d.useEffect(() => {
                    if (null != p) for (let e of l) (0, nB.qf)(p, e);
                }, [l, p]),
                (n = (0, N.bG)(
                    [nF.A],
                    () => !l.some((e) => nF.A.isFetching(e)) && l.some((e) => nF.A.didFetchingSkuFail(e)),
                    [l],
                )),
                d.useEffect(() => {
                    n && null != p && (0, nB.Rw)(p);
                }, [n, p]),
                (s = (0, N.yK)([nF.A, nM.A], () => {
                    if (l.some((e) => nF.A.isFetching(e))) return t.current;
                    let e = l.filter((e) => null != nF.A.get(e));
                    if (e.length >= l.length) return l;
                    if (null == p) return e;
                    let n = nM.A.getStorefrontData(p);
                    if (null == n || "loading" === n.state) return e;
                    let s = new Set(l);
                    return [
                        ...e,
                        ...(null != n.storefront
                            ? (0, nR.jd)(n.storefront).filter((e) => !s.has(e) && null != nF.A.get(e))
                            : []),
                    ].slice(0, l.length);
                }, [l, p])),
                d.useEffect(() => {
                    s.length > 0 && (t.current = s);
                }, [s]),
                s);
        (0, nG.j)({ skuIds: E, location: "GamePromotionBanner" });
        let C = (0, L.uM)(),
            { analyticsLocations: b } = (0, x.Ay)(),
            S = d.useRef(null),
            A = d.useRef(!1),
            v = d.useRef(null),
            I = d.useMemo(() => ({ pageSection: g }), [g]),
            T = d.useCallback(
                (e, t) => {
                    O.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: C?.sessionId,
                        page_type: r,
                        page_category: C?.pageCategory,
                        page_section: C?.pageSection,
                        tile_type: _,
                        cta_name: e,
                        ...(null != t ? { sku_id: t } : void 0),
                    });
                },
                [C?.sessionId, C?.pageCategory, C?.pageSection, r, _],
            ),
            j = d.useCallback(() => {
                null != p && (0, nD.X)({ guildId: p });
            }, [p]),
            y = d.useCallback(() => {
                null != p && (T("go_to_game_shop"), (0, nD.default)({ guildId: p }));
            }, [T, p]),
            k = d.useCallback(
                (e, t) => {
                    let { skuId: n, applicationId: s } = t;
                    T("card_click", n),
                        (0, nw.R)({ skuId: n, applicationId: s, isStorefront: !1, analyticsLocations: b });
                },
                [T, b],
            ),
            R = d.useCallback(() => {
                T("dismiss"), a();
            }, [T, a]),
            P = d.useCallback(
                (e) => {
                    !A.current &&
                        (e && null === v.current
                            ? (v.current = setTimeout(() => {
                                  (A.current = !0),
                                      (v.current = null),
                                      O.default.track(B.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                          collectibles_shop_session_id: C?.sessionId,
                                          page_type: r,
                                          page_category: C?.pageCategory,
                                          page_section: C?.pageSection,
                                          type: h,
                                      });
                              }, 1e3))
                            : e || null === v.current || (clearTimeout(v.current), (v.current = null)));
                },
                [C?.sessionId, C?.pageCategory, C?.pageSection, r, h],
            );
        return (d.useEffect(
            () => () => {
                null !== v.current && (clearTimeout(v.current), (v.current = null));
            },
            [],
        ),
        0 === E.length)
            ? null
            : (0, c.jsx)(tV.L, {
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
                              null != f && (0, c.jsx)("img", { className: nW.wm, src: f, alt: "" }),
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
                                              icon: nk.I,
                                              iconPosition: "end",
                                              text: u,
                                              onMouseDown: j,
                                              onClick: y,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, c.jsx)(nP.E9, {
                                  newValue: I,
                                  children: (0, c.jsx)("div", {
                                      className: nW.$2,
                                      children: E.map((e, t) =>
                                          (0, c.jsx)(nH.A, { skuId: e, positionInSection: t, onClick: k }, e),
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
            gradientColors: a,
            gradientAngle: l,
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
            backgroundGradient: `linear-gradient(${l}deg, ${a.join(", ")})`,
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
            a = window.innerHeight,
            l = I.A.getProduct(t.skuId),
            r = l?.items[0],
            i = l?.type,
            o = n + t.horizontalJitter;
        return (0, c.jsx)("div", {
            className: n$.LY,
            style: {
                top: s ? -a - 384 : t.top,
                left: s ? o + t.transitionOffsetLeft : o,
                transform: `rotate(${t.rotation}deg)`,
                height: 160,
                width: 160,
                transitionDelay: t.transitionDelay,
                transitionDuration: t.transitionDuration,
            },
            children: null != r && i === eE.R.AVATAR_DECORATION && (0, c.jsx)(nY.i, { item: r }),
        });
    },
    nq = (e) => {
        let { peaking: t, transitioning: n, parentWidth: s } = e,
            [a, l] = d.useState(!1),
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
                n && setTimeout(() => l(!0), R.H1);
            }, [n]),
            (0, c.jsx)("div", {
                className: g()(n$.rA, { [n$.Kb]: t, [n$.pp]: a }),
                children: r.map((e, t) => {
                    let { config: s, baseLeft: a } = e;
                    return (0, c.jsx)(nJ, { config: s, baseLeft: a, transitioning: n }, s.skuId + t);
                }),
            })
        );
    },
    nX = (e) => {
        let { peaking: t, transitioning: n } = e,
            s = d.useRef(null),
            [a, l] = d.useState(0),
            r = d.useCallback(() => {
                null != s.current && l(s.current.offsetWidth);
            }, []);
        return (
            (0, nK.g)(s, r),
            (0, c.jsx)("div", {
                ref: s,
                className: n$.eL,
                children: (0, c.jsx)(nq, { peaking: t, transitioning: n, parentWidth: a }),
            })
        );
    };
var nQ = n(43990),
    n0 = n(976860),
    n1 = n(49999);
let n2 = (e) => {
        let { wideBannerBlock: t, tab: n } = e,
            s = I.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            a = d.useRef(null),
            l = d.useRef(null),
            [r, i] = d.useState(),
            [o, u] = d.useState(!1);
        d.useEffect(() => {
            let e = l.current;
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
        let _ = s?.skuId ?? "",
            { handleCardVisibilityChange: h } = (0, tK.Z)(_, "home", "marketing wide banner"),
            m = (0, L.uM)(),
            { bannerURL: p } = (0, eI.w$)(t),
            f = n === R.G2.ORBS,
            E = null != t.ctaRoute && "" !== t.ctaRoute,
            x = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || E),
            C = null != t.logoURL && "" !== t.logoURL,
            b = d.useCallback(() => {
                if ((u(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, tL.$l)(tv.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: n1.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            S = d.useCallback(
                (e) => {
                    O.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: m?.sessionId,
                        sku_id: _,
                        page_type: n,
                        page_section: m?.pageSection,
                        page_category: m?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(m?.tilePosition),
                        cta_name: e,
                    });
                },
                [m, _, n],
            ),
            A = d.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((S(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    n = parseInt(t[2], 10);
                                (0, nD.default)({ guildId: e, pageIndex: n });
                            }
                        } else (0, n0.pX)(e);
                    }
                },
                [t.ctaRoute, S],
            );
        if (null == p || o) return null;
        let v = g()(tY.nM, tY.Tq, tY.TS, tY.YB, { [tY._1]: f, [tY.vb]: E }),
            T = (0, c.jsxs)(c.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, c.jsx)("div", {
                            className: tY.Mh,
                            children: (0, c.jsx)(ny.J, {
                                size: "sm",
                                onClick: (e) => {
                                    e.stopPropagation(), b();
                                },
                                "aria-label": G.intl.string(G.t.WAI6xu),
                            }),
                        }),
                    (0, c.jsx)("div", {
                        className: g()(tY.zK, { [tY._1]: f }),
                        style: null != r ? { height: `${r}px` } : void 0,
                        children: (0, c.jsx)("img", {
                            ref: l,
                            src: p,
                            alt: t.title,
                            className: g()(tY.LN, { [tY.d5]: f }),
                        }),
                    }),
                    (0, c.jsx)("div", {
                        className: g()(tY.Ep, { [tY.Qq]: x }),
                        style: { maxHeight: null != r ? `${r}px` : "auto" },
                        children: (0, c.jsxs)("div", {
                            className: tY.E8,
                            children: [
                                (0, c.jsx)(eo.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: f ? tY.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, c.jsx)(ee.E, {
                                    style: { color: "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: f ? "text-md/medium" : "text-sm/medium",
                                    children: f
                                        ? G.intl.format(G.t.SFFP7K, {
                                              helpdeskArticle: t0.A.getArticleURL(B.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                x &&
                                    (0, c.jsxs)("div", {
                                        className: tY.nP,
                                        children: [
                                            (0, c.jsx)(et.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    e.stopPropagation(), A(t.ctaText ?? G.intl.string(G.t.jVcuVY));
                                                },
                                                text: t.ctaText ?? G.intl.string(G.t.jVcuVY),
                                            }),
                                            C && (0, c.jsx)("img", { src: t.logoURL, alt: "", className: tY.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, c.jsx)(nQ.N, {
            theme: f ? void 0 : ta.NJ.DARK,
            children: (e) =>
                (0, c.jsx)(tV.L, {
                    innerRef: a,
                    onChange: h,
                    threshold: 0,
                    children: E
                        ? (0, c.jsx)(eQ.D, { innerRef: a, onClick: () => A(null), className: g()(e, v), children: T })
                        : (0, c.jsx)("div", { ref: a, className: g()(e, v), children: T }),
                }),
        });
    },
    n4 = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: s, tab: a } = e,
            { noCache: l, includeUnpublished: r } = (0, ew.A)(),
            [i, o] = d.useState(!1),
            u = (0, L.uM)(),
            _ = u?.sessionId ?? "";
        d.useEffect(() => {
            (0, eb.z)({
                sessionId: _,
                checkpoint: eb.t.SHOP_MOUNTED,
                tab: a,
                unpublishedCategoriesShown: r,
                cacheDisabled: l,
            });
        }, [a]);
        let {
                isFetchingShopHome: h,
                fetchShopHomeError: m,
                shopBlocks: p,
                refreshShopHome: f,
            } = (0, tN.y)(a, { noCache: l, includeUnpublished: r, logPerf: !0 }, { sessionId: _, tab: a }),
            E = d.useCallback(() => {
                f();
            }, [f]),
            x = d.useMemo(() => p.some((e) => e instanceof tj.p), [p])
                ? (0, c.jsx)(tP, { location: "CollectiblesShop" })
                : null;
        return (d.useEffect(() => {
            null != m ||
                h ||
                0 === p.length ||
                (0, eb.z)({
                    sessionId: _,
                    checkpoint: eb.t.SHOP_RENDERED,
                    tab: a,
                    unpublishedCategoriesShown: r,
                    cacheDisabled: l,
                });
        }, [m, h, p.length, r, l, _, a]),
        null != m)
            ? (0, c.jsx)(tS.h, { onRetry: E, errorOrigin: tS.A.SHOP_PAGE, errorMessage: m.message })
            : h || 0 === p.length
              ? (0, c.jsxs)("div", {
                    className: g()(tY.g4, tY.Of),
                    children: [
                        (0, c.jsx)(ng, { isLoading: h, handleTransition: t, tab: a }),
                        (0, c.jsx)(tq, { isLoading: h, handleTransition: t, categories: [] }),
                        (0, c.jsx)(t7, {
                            isLoading: h,
                            title: a === R.G2.ORBS ? G.intl.string(G.t.dFgeuZ) : G.intl.string(G.t.NSv5KV),
                            numVisibleItems: n,
                            tab: a,
                        }),
                    ],
                })
              : (0, c.jsx)(c.Fragment, {
                    children: p.map((e, l) =>
                        ((e, l, r) => {
                            if (null == e) return null;
                            let d = null,
                                u = !1;
                            switch (e.type) {
                                case tA.g.HERO:
                                    d = (0, c.jsx)(
                                        ng,
                                        { isLoading: h, handleTransition: t, heroBlock: e, tab: a, badge: x },
                                        r,
                                    );
                                    break;
                                case tA.g.FEATURED:
                                    d = (0, c.jsx)(
                                        tq,
                                        { isLoading: h, handleTransition: t, featuredBlockRecord: e },
                                        r,
                                    );
                                    break;
                                case tA.g.FEED:
                                    let _ = e.sortedSkuIds;
                                    d = (0, c.jsx)(
                                        t7,
                                        {
                                            title:
                                                a === R.G2.ORBS ? G.intl.string(G.t.dFgeuZ) : G.intl.string(G.t.NSv5KV),
                                            isLoading: s,
                                            numVisibleItems: n,
                                            sortedSkuIds: _,
                                            buttonContainerClassName: l?.type === tA.g.IMMERSIVE_BANNER ? tY.w : void 0,
                                            prioritizeUserDiscounts: a === R.G2.HOME,
                                            tab: a,
                                            orbsSupportedOnly: a === R.G2.ORBS,
                                        },
                                        r,
                                    );
                                    break;
                                case tA.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, tL.En)(tv.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    d = (0, c.jsx)(n2, { wideBannerBlock: e, tab: a }, r);
                                    break;
                                case tA.g.FRAMES_BANNER:
                                    d = (0, c.jsx)(
                                        n2,
                                        {
                                            wideBannerBlock: tO.y.fromServer({
                                                type: tA.g.WIDE_BANNER,
                                                title: e.title,
                                                body: e.body,
                                                wide_banner_url: e.desktopBackgroundImage,
                                                disable_cta: !0,
                                            }),
                                            tab: a,
                                        },
                                        r,
                                    );
                                    break;
                                case tA.g.SHELF:
                                    d = (0, c.jsx)(nO, { handleTransition: t, shelf: e, tab: a }, r);
                                    break;
                                case tA.g.COUNTDOWN_TIMER:
                                    (d = (0, c.jsx)(tU, { countdownTimerBlock: e, isVisible: i }, r)), (u = !0);
                                    break;
                                case tA.g.IMMERSIVE_BANNER:
                                    d = (0, c.jsx)(
                                        nm,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => o(!e) },
                                        r,
                                    );
                                    break;
                                case tA.g.REWARD_HERO:
                                    d = (0, c.jsx)(nj, { isLoading: h, handleTransition: t, heroBlock: e, tab: a }, r);
                                    break;
                                case tA.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER: {
                                    let { isDismissed: t } = (0, tL.En)(
                                        tv.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
                                    );
                                    if (t) return null;
                                    return (0, c.jsx)(
                                        tT,
                                        {
                                            blockType: e.type,
                                            children: (0, c.jsx)(nz, {
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
                                                tab: a,
                                            }),
                                        },
                                        r,
                                    );
                                }
                                default:
                                    return null;
                            }
                            return (0, c.jsx)(
                                tT,
                                {
                                    blockType: e.type,
                                    children: (0, c.jsx)("div", {
                                        className: g()(tY.v1, tY.Of, { [tY.J1]: 0 === r || u }),
                                        children: d,
                                    }),
                                },
                                r,
                            );
                        })(e, l > 0 ? p[l - 1] : null, l),
                    ),
                });
    },
    n9 = (e) => {
        let { handleTransition: t, tab: n, transitionState: s } = e,
            a = d.useRef(null),
            { handleScroll: l } = el(a, n),
            r = (0, eD.U)(),
            i = (0, L.uM)(),
            [o, u] = d.useState(R.md),
            [g, _] = d.useState(!1);
        return (
            d.useEffect(() => {
                if (null != a.current) {
                    let e = () => {
                            if (null == a.current) return;
                            let e = a.current.getDistanceFromBottom();
                            o >= 36 ? _(e < 20) : e <= 200 && u((e) => e + R.md);
                        },
                        t = a.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [a, o, u, _]),
            (0, c.jsx)(X.Ch, {
                className: tY.OW,
                ref: a,
                onScroll: l,
                children: (0, c.jsxs)("div", {
                    className: tY.bx,
                    children: [
                        (0, c.jsxs)("div", {
                            className: tY.rb,
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
                                        className: tY.R$,
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
                                                        O.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                        (0, c.jsx)(nX, { peaking: g, transitioning: s === R.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var n5 = n(154323),
    n3 = n(295811);
let n6 = () =>
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
            [n, s, a] = (0, N.yK)([k.A], () => [k.A.getLayout(t), k.A.isFetchingLayout(t), k.A.getLayoutFetchError(t)]),
            l = (0, N.bG)([n5.A], () => n5.A.get("shop_include_unpublished")),
            r = (0, N.bG)([I.A], () => I.A.skipNumCategories),
            i = d.useMemo(() => ({ include_unpublished: l ?? !1, skip_num_categories: r ?? 0 }), [l, r]),
            o = null == n && !s && a?.status !== 404 && a?.status !== 429;
        return (d.useEffect(() => {
            o && (0, nS.T2)({ tab: t });
        }, [o, t]),
        null == n)
            ? t !== K.HOME || o || s
                ? null
                : (0, c.jsx)(er.Z_, { tenantId: B.FYj, templateId: "shop-home", requestParams: i })
            : (0, c.jsxs)(c.Fragment, {
                  children: [t === K.ORBS && (0, c.jsx)(n6, {}), (0, c.jsx)(er.Qs, { tenantId: B.FYj, layoutId: n })],
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
            a = (0, L.uM)(),
            l = (0, N.bG)([n3.A], () => n3.A.getShopLayoutUrlOverride()),
            r = d.useRef(null),
            { handleScroll: i } = el(r, n),
            [o, u] = d.useState(R.md),
            [_, h] = d.useState(!1);
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
                className: tY.OW,
                ref: r,
                onScroll: i,
                children: (0, c.jsxs)("div", {
                    className: tY.bx,
                    children: [
                        (0, c.jsxs)("div", {
                            className: g()(tY.rb, tY.GS),
                            children: [
                                null != l && "" !== l ? (0, c.jsx)(n7, { url: l }) : (0, c.jsx)(n8, { tab: n }),
                                n !== K.CATALOG &&
                                    o >= 36 &&
                                    (0, c.jsxs)("div", {
                                        className: tY.R$,
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
                                                        O.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: a?.sessionId,
                                                            page_type: n,
                                                            page_category: n === K.HOME ? void 0 : a?.pageCategory,
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
function sa(e) {
    let {
            tab: t,
            categories: n,
            transitionToTab: s,
            transitionState: a,
            updateAnalyticsState: l,
            refreshCategories: r,
        } = e,
        i = sl();
    sr(i);
    let o = (0, N.bG)([Y.A], () => Y.A.useReducedMotion),
        [u, g] = d.useState(void 0),
        [_, h] = d.useState(!0),
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
        p = (0, $.f)("CollectiblesContent"),
        f = d.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: a,
                    isInternalShopDeeplink: r,
                    isOrbsExclusive: i,
                } = e;
                l(t, n);
                let c = a && !o,
                    d = i ? R.G2.ORBS : R.G2.CATALOG;
                g(n), h(!r), s(d, c);
            },
            [o, s, l],
        ),
        { searchError: E } = (0, q.S)();
    return null != E
        ? (0, c.jsx)(sn, {})
        : null != i
          ? (0, c.jsx)(tS.h, { onRetry: r, errorMessage: i, errorOrigin: tS.A.SHOP_PAGE })
          : t === R.G2.HOME && p
            ? (0, c.jsx)(se, { tab: K.HOME, transitionState: a, handleTransition: f })
            : t === R.G2.ORBS && p
              ? (0, c.jsx)(se, { tab: K.ORBS, transitionState: a, handleTransition: f })
              : ss.includes(t)
                ? (0, c.jsx)(n9, { handleTransition: f, tab: t, transitionState: a })
                : (0, c.jsx)(tC, {
                      tab: t,
                      categories: m,
                      initialCategoryId: u,
                      showFilterInitially: _,
                      onUnmount: () => {
                          g(void 0), h(!0);
                      },
                  });
}
let sl = () =>
        (0, N.bG)([I.A, J.A], () =>
            null != I.A.error
                ? `shop load fetch categories error: ${I.A.error.message}`
                : null != J.A.claimError
                  ? `shop load claim error: ${J.A.claimError.message}`
                  : null != J.A.fetchError
                    ? `shop load fetch purchase error: ${J.A.fetchError.message}`
                    : void 0,
        ),
    sr = (e) => {
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
var si = n(70426);
n(323874), n(14289), n(35956);
var so = n(873263),
    sc = n(858897),
    sd = n(496431),
    su = n(893489);
let sg = { pink: "pinkCountdown" },
    s_ = d.memo(function (e) {
        let { message: t, onClick: n, countdownEndDate: s, variant: a } = e,
            l = d.useMemo(() => {
                if (null == s) return null;
                let e = s instanceof Date ? s : new Date(s);
                return isNaN(e.getTime()) ? null : e;
            }, [s]),
            r = (0, sd.A)(l ?? 0, 1e3, void 0, null == l);
        if (null != l && Object.values(r).every((e) => 0 === e)) return null;
        let i = null != a ? su[a] : void 0,
            o = null != a ? su[sg[a]] : void 0;
        return (0, c.jsx)(eQ.D, {
            className: g()(su.nagBar, i),
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
                    null != l && (0, c.jsx)(tG.e, { endDate: l, size: "md", className: o, showSeconds: !0 }),
                ],
            }),
        });
    });
var sh = n(870308),
    sm = n(650583);
let sp = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: s } = e,
            a = (0, m.useHasAnyModalOpen)();
        return (
            d.useEffect(() => {
                if (!n || a) return;
                let e = (e) => {
                    e.key === sm.N$.Escape && s();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [n, a, s]),
            t
        );
    },
    sf = function (e) {
        let { tab: t = R.G2.HOME } = e;
        (0, S.P)(b.a), (0, W.g)();
        let n = (0, E.A)((0, _.A)()),
            s = (0, h.bG)([v.default], () => v.default.getCurrentUser());
        (0, A.pE)();
        let a = (0, eK.yB)("CollectiblesShop"),
            { onClose: l } = (function () {
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
            j = d.useMemo(() => [...u.values()], [u]),
            [k, K] = d.useState(),
            Y = (0, h.bG)([I.A], () => I.A.getCategory(k)?.name),
            [$, Z] = d.useState();
        (0, eU.XU)(n);
        let J = d.useCallback((e, t) => {
                Z(e), K(t);
            }, []),
            { selectedTab: q, transitionState: X, transitionToTab: Q } = (0, V.o)(o);
        (0, C.HU)({ location: G.intl.string(G.t.pWG4ze) }),
            ((e, t, n, s, a) => {
                let {
                    analyticsLocations: l,
                    analyticsSource: r,
                    currentTabLocation: i,
                    newestAnalyticsLocation: o,
                } = M(t);
                d.useEffect(() => {
                    if (s !== R.Pf.VISIBLE || o !== i) return;
                    let c = t === R.G2.CATALOG ? a : r;
                    O.default.track(B.HAw.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: l,
                        source: c,
                        page_session_id: e,
                        page_type: t === R.G2.CATALOG ? "full" : t,
                        category: t === R.G2.HOME ? void 0 : n,
                    });
                }, [l, e, t, n, i, s, a, r, o]);
            })(n, q, Y, X, $),
            ((e, t) => {
                let { analyticsLocations: n } = M(e);
                d.useEffect(() => {
                    null == t ||
                        y.Ay.canUseCollectibles(t) ||
                        O.default.track(B.HAw.PREMIUM_UPSELL_VIEWED, {
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
            ea = (function (e, t) {
                let n = (0, N.bG)([w.A], () => w.A.getUserDiscount(P.tU)),
                    s = (0, N.bG)([D.default], () => D.default.locale),
                    a = H.useConfig({ location: t }).enabled;
                if (d.useMemo(() => null != n && a && e !== R.G2.ORBS, [n, a, e])) {
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
                newValue: { sessionId: n, pageCategory: Y, pageSize: R.l5 },
                children: (0, c.jsx)(T.iM, {
                    tab: q,
                    children: (0, c.jsx)(sp, {
                        onClose: l,
                        shouldAddEventListener: !1,
                        children: (0, c.jsxs)("div", {
                            className: g()(ek.bx, { [eK.jP]: a }),
                            ref: en,
                            tabIndex: -1,
                            children: [
                                (0, c.jsx)(si.G, { handleTransition: Q, selectedTab: q }),
                                null != ea &&
                                    ea.type === F.COUNTDOWN &&
                                    (0, c.jsx)(s_, {
                                        message: ea.message,
                                        onClick: () => Q(R.G2.HOME),
                                        variant: "pink",
                                        countdownEndDate: ea.countdownEndDate,
                                    }),
                                (0, c.jsx)("div", {
                                    className: g()(ek.td, {
                                        [ek.RK]: X === R.Pf.VISIBLE,
                                        [ek.in]: X === R.Pf.IN,
                                        [ek.FD]: X === R.Pf.OUT,
                                    }),
                                    children: (0, c.jsx)(sa, {
                                        tab: q,
                                        refreshCategories: m,
                                        transitionToTab: Q,
                                        transitionState: X,
                                        categories: j,
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
