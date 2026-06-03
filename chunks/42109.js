s.r(t), s.d(t, { default: () => lj });
var l,
    n,
    a,
    r,
    i,
    o,
    c = s(627968),
    d = s(64700),
    u = s(503698),
    g = s.n(u),
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
    b = s(287809),
    v = s(440938),
    j = s(590180),
    I = s(161918),
    O = s(17928),
    N = s(793574),
    k = s(174459),
    y = s(428262),
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
    q = s(38405),
    Z = s(4227),
    J = s(856686),
    Q = s(689175),
    X = s(364522),
    ee = s(834730),
    et = s(821609),
    es = s(783977),
    el = s(59520);
let en = (e, t, s, l) => {
        let { scrollTop: n = 0, scrollOffset: a = 0, scrollHeight: r = 0, scrollWidth: i = 0 } = l;
        if (r > 0) {
            let l = (n + a) / r;
            l > 0 &&
                k.default.track(e, {
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
            n = (0, v.uM)(),
            a = n?.sessionId;
        return {
            handleScroll: d.useCallback(() => {
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
    ed = s(534514);
function eu() {
    let { itemTypeFilters: e, searchQuery: t } = (0, W.v)((e) => e),
        { totalCount: s, isFetchingResults: l } = (0, J.S)(),
        n = (0, W.v)((e) => e.hasFilters()),
        a = d.useCallback(() => {
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
    return (0, c.jsx)(ed.D, { variant: "heading-lg/semibold", children: a() });
}
var eg = s(172218),
    em = s(932793),
    eh = s(940980),
    eE = s(993408),
    ex = s(623373),
    ep = s(660653),
    eC = s(466459);
let ef = () => {
    let e = (0, h.bG)([b.default], () => b.default.getCurrentUser()),
        t = y.Ay.canUseShopDiscounts(e);
    return (0, d.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: s } = (0, eC.o)(Z.A, e);
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
        let t = (0, h.bG)([Z.A], () => Z.A.purchases),
            s = (0, d.useMemo)(
                () =>
                    [...t].map((e) => {
                        let [t] = e;
                        return t;
                    }),
                [t],
            );
        return (0, d.useMemo)(() => [...e].sort((e, t) => e_(e, s) - e_(t, s)), [e, s]);
    };
var eL = s(100057),
    eb = s(126031),
    ev = s(653887),
    ej = s(607470),
    eI = s(531685),
    eO = s(203312),
    eN = s(212407),
    ek = s(215688);
function ey(e) {
    let { category: t } = e,
        s = (0, h.bG)([Y.A], () => Y.A.useReducedMotion),
        l = (0, h.bG)([eI.A], () => eI.A.isFocused()),
        { catalogBannerStatic: n, catalogBannerAnimated: a, catalogBannerRive: r } = (0, eN.MV)(t),
        i = d.useRef(null),
        o = null != r;
    return (0, c.jsxs)("div", {
        ref: i,
        className: g()(ek.sW, { [ek.by]: o }),
        children: [
            (0, c.jsx)(eb.s, { children: (0, c.jsx)(ed.D, { variant: "heading-lg/semibold", children: t.name }) }),
            o
                ? (0, c.jsx)(ev._, {
                      src: r,
                      fit: "cover",
                      alignment: "center-left",
                      style: { width: "100%", height: "100%" },
                      eventTargetRef: i,
                      autoplay: !0,
                  })
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          (0, c.jsx)("img", { className: ek.ze, src: n, alt: "" }),
                          null != a &&
                              !s &&
                              l &&
                              (0, c.jsx)(ej.A, { src: a, className: ek.tr, autoPlay: !0, loop: !0 }),
                      ],
                  }),
            (0, c.jsx)(eO.A, { category: t, className: ek.v0, daysRemainingText: w.t["8gsP5M"] }),
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
                        (0, c.jsx)("div", { className: g()(ek.sW, eP.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, c.jsx)(eB, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
var eH = s(828614),
    eF = s(561769),
    ew = s(159439),
    eG = s(998694);
function eU(e) {
    let { category: t } = e,
        s = (0, h.bG)([b.default], () => b.default.getCurrentUser()),
        l = eA(t.products),
        n = ef()(l),
        a = (0, eh.W)("CollectiblesCatalogContent");
    return null == s || 0 === n.length
        ? null
        : (0, c.jsx)("div", {
              className: eM.vY,
              children: n.map((e, t) =>
                  (0, c.jsx)(
                      v.R9,
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
        [s, l] = d.useState(!1),
        n = (0, eg.K)((e) => {
            l(e);
        }, 0.15);
    return (0, c.jsxs)("div", {
        className: eM.EF,
        ref: n,
        children: [(0, c.jsx)(ey, { category: t }), (0, c.jsx)(eU, { category: t })],
    });
}
function eV(e) {
    let { categories: t, setCategoryRef: s, currentPage: l, handlePageChange: n, initialCategoryId: a } = e,
        r = (0, v.uM)(),
        i = (0, ew.U)(),
        o = r?.sessionId ?? "",
        { noCache: u, includeUnpublished: g } = (0, eG.A)(),
        m = d.useMemo(
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
    let E = d.useMemo(() => {
        let e = (l - 1) * R.l5;
        return m.slice(e, e + R.l5);
    }, [m, l]);
    return (d.useEffect(() => {
        (0, eL.z)({
            sessionId: o,
            checkpoint: eL.t.SHOP_MOUNTED,
            tab: R.G2.CATALOG,
            unpublishedCategoriesShown: g,
            cacheDisabled: u,
        });
    }, []),
    d.useEffect(() => {
        i ||
            0 === E.length ||
            (0, eL.z)({
                sessionId: o,
                checkpoint: eL.t.SHOP_RENDERED,
                tab: R.G2.CATALOG,
                unpublishedCategoriesShown: g,
                cacheDisabled: u,
            });
    }, [o, g, u, i, E.length]),
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
                              children: (0, c.jsx)(v.R9, {
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
    eq = s(146919),
    eZ = s(912853);
let eJ = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: s } = (0, W.v)(),
        l = (0, v.uM)(),
        n = (0, eq.yB)("CollectiblesSortSelect"),
        a = s(),
        r = d.useMemo(() => R.QB.filter((e) => e.sortType !== eY.$.RELEVANCE || a), [a]),
        i = d.useCallback((e) => {
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
        o = d.useCallback(
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
        u = d.useCallback(
            (e) => {
                let s = i(o(e));
                k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        className: g()(eZ.k, { [eq.jP]: n }),
        children: (0, c.jsx)(e$.l, {
            label: w.intl.string(w.t.uaX705),
            hideLabel: !0,
            options: r.map(i),
            onSelectionChange: u,
            value: m.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var eQ =
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
    eX =
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
    ti = s(13875),
    to = s(818348),
    tc = s(764915);
function td() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: s, hasFilters: l } = (0, W.v)(),
        n = l(),
        a = (0, ti.sk)("FilterBar"),
        r = (0, v.uM)(),
        i = d.useRef(null),
        o = d.useMemo(() => R._6.filter((e) => a || e !== ec.q.PROFILE_FRAME), [a]),
        u = d.useCallback(
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
        className: tc.kT,
        children: [
            (0, c.jsxs)("div", {
                className: g()(tc.KZ, tc.YG),
                children: [
                    (0, c.jsx)("div", {
                        ref: i,
                        tabIndex: -1,
                        children: (0, c.jsx)(ee.E, {
                            variant: "text-md/semibold",
                            className: tc.hr,
                            children: w.intl.string(w.t.Qk6r1a),
                        }),
                    }),
                    o.map((e) => (0, c.jsx)(tu, { filter: e, trackFilterAction: u }, e)),
                    (0, c.jsx)(e1.S, {
                        checked: t,
                        onChange: () => {
                            u(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                        },
                        label: w.intl.string(w.t.AHHHgG),
                    }),
                ],
            }),
            (0, c.jsx)(tg, { trackFilterAction: u }),
            (0, c.jsx)(tE, { trackFilterAction: u }),
            n &&
                (0, c.jsx)(et.$, {
                    variant: "secondary",
                    onClick: () => {
                        u("filter reset"), s(), requestAnimationFrame(() => i.current?.focus());
                    },
                    text: w.intl.string(w.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
let tu = (e) => {
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
            ? (0, c.jsxs)("div", { className: tc.Ym, children: [r, (0, c.jsx)(e2.E, { type: "new" })] })
            : r;
    },
    tg = (e) => {
        let { trackFilterAction: t } = e,
            s = d.useMemo(
                () => [
                    { color: "#9B59B6", label: w.intl.string(w.t.kqUD4P), enum: eQ.PURPLE },
                    { color: "#3498DB", label: w.intl.string(w.t.qQTRae), enum: eQ.BLUE },
                    { color: "#2ECC71", label: w.intl.string(w.t["f/Ylk6"]), enum: eQ.GREEN },
                    { color: "#A0522D", label: w.intl.string(w.t["Sd/BMa"]), enum: eQ.BROWN },
                    { color: "#F1C40F", label: w.intl.string(w.t["0fevYz"]), enum: eQ.YELLOW },
                ],
                [],
            ),
            l = d.useMemo(
                () => [
                    { color: "#E67E22", label: w.intl.string(w.t.ZE7weD), enum: eQ.ORANGE },
                    { color: "#E74C3C", label: w.intl.string(w.t.hKJGOM), enum: eQ.RED },
                    { color: "#EC407A", label: w.intl.string(w.t.HvLEGM), enum: eQ.PINK },
                    { color: "#FFFFFF", label: w.intl.string(w.t["CB+lNO"]), enum: eQ.WHITE },
                    { color: "#262626", label: w.intl.string(w.t["dMey+v"]), enum: eQ.BLACK },
                ],
                [],
            );
        return (0, c.jsxs)("div", {
            className: tc.KZ,
            children: [
                (0, c.jsx)(ee.E, {
                    variant: "text-md/semibold",
                    className: tc.hr,
                    children: w.intl.string(w.t.K1xGoG),
                }),
                (0, c.jsx)(tm, { colors: s, trackFilterAction: t }),
                (0, c.jsx)(tm, { colors: l, trackFilterAction: t }),
            ],
        });
    },
    tm = (e) => {
        let { colors: t, trackFilterAction: s } = e,
            { colorFilters: l, onToggleColor: n } = (0, W.v)();
        return (0, c.jsx)("div", {
            className: tc.OW,
            children: t.map((e) => {
                let { color: t, label: a, enum: r } = e;
                return (0, c.jsx)(
                    th,
                    { color: t, label: a, enum: r, isToggled: l.has(r), onToggleColor: n, trackFilterAction: s },
                    r,
                );
            }),
        });
    },
    th = (e) => {
        let { color: t, label: s, enum: l, isToggled: n, onToggleColor: a, trackFilterAction: r } = e;
        return (0, c.jsx)(
            e0.m,
            {
                text: s,
                asContainer: !0,
                ariaHidden: !0,
                children: (0, c.jsx)(
                    e4.D,
                    {
                        className: g()(tc.n1, { [tc.lx]: n }),
                        style: { backgroundColor: t },
                        "aria-label": s,
                        "aria-pressed": n,
                        onClick: () => {
                            r(`filter color ${s.toLowerCase()} ${!n ? "on" : "off"}`), a(l);
                        },
                        children:
                            n &&
                            (0, c.jsx)("div", {
                                className: tc.oE,
                                children: (0, c.jsx)(e5.r, { size: "xs", color: e9.A.colors.WHITE }),
                            }),
                    },
                    t,
                ),
            },
            s,
        );
    },
    tE = (e) => {
        let { trackFilterAction: t } = e,
            { themeFilters: s, onToggleTheme: l } = (0, W.v)(),
            n = (0, tr.Ay)() === to.NJ.DARK,
            a = d.useCallback(
                (e) => {
                    if (s.has(e) || n) return "always-white";
                },
                [s, n],
            ),
            r = d.useCallback(
                (e) => (s.has(e) || n ? e9.A.colors.WHITE : e9.A.colors.INTERACTIVE_TEXT_DEFAULT),
                [s, n],
            ),
            i = d.useMemo(
                () => [
                    {
                        name: w.intl.string(w.t.aVBOKh),
                        icon: (0, c.jsx)(e3.E, { size: "xs", color: r(eX.ANIME) }),
                        enum: eX.ANIME,
                    },
                    {
                        name: w.intl.string(w.t["3WoZBc"]),
                        icon: (0, c.jsx)(e7._, { size: "xs", color: r(eX.GAMING) }),
                        enum: eX.GAMING,
                    },
                    {
                        name: w.intl.string(w.t.yuEmLj),
                        icon: (0, c.jsx)(e6.C, { size: "xs", color: r(eX.CUTE_COZY) }),
                        enum: eX.CUTE_COZY,
                    },
                    {
                        name: w.intl.string(w.t.mMvCHo),
                        icon: (0, c.jsx)(e8.L, { size: "xs", color: r(eX.SCI_FI) }),
                        enum: eX.SCI_FI,
                    },
                    {
                        name: w.intl.string(w.t.TlhOQC),
                        icon: (0, c.jsx)(te.L, { size: "xs", color: r(eX.FOOD_DRINKS) }),
                        enum: eX.FOOD_DRINKS,
                    },
                    {
                        name: w.intl.string(w.t["4IaUIM"]),
                        icon: (0, c.jsx)(tt.f, { size: "xs", color: r(eX.FANTASY) }),
                        enum: eX.FANTASY,
                    },
                    {
                        name: w.intl.string(w.t["w0nSG/"]),
                        icon: (0, c.jsx)(ts.N, { size: "xs", color: r(eX.ANIMALS_PETS) }),
                        enum: eX.ANIMALS_PETS,
                    },
                    {
                        name: w.intl.string(w.t.cJng7v),
                        icon: (0, c.jsx)(tl.p, { size: "xs", color: r(eX.NATURE) }),
                        enum: eX.NATURE,
                    },
                    {
                        name: w.intl.string(w.t["5mUvyM"]),
                        icon: (0, c.jsx)(tn.T, { size: "xs", color: r(eX.MOVIES_TV_SHOWS) }),
                        enum: eX.MOVIES_TV_SHOWS,
                    },
                    {
                        name: w.intl.string(w.t.MB9H5Z),
                        icon: (0, c.jsx)(ta.e, { size: "xs", color: r(eX.DARK_MOODY) }),
                        enum: eX.DARK_MOODY,
                    },
                ],
                [r],
            );
        return (0, c.jsxs)("div", {
            className: tc.KZ,
            children: [
                (0, c.jsx)(ee.E, {
                    variant: "text-md/semibold",
                    className: tc.hr,
                    children: w.intl.string(w.t.t1Ztrp),
                }),
                (0, c.jsx)("div", {
                    className: tc.Ot,
                    children: i.map((e) => {
                        let { name: n, icon: r, enum: i } = e;
                        return (0, c.jsxs)(
                            e4.D,
                            {
                                className: g()(tc.w4, { [tc.C7]: s.has(i) }),
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
var tx = s(687971);
function tp() {
    return (0, c.jsxs)("div", {
        className: tx.k,
        children: [
            (0, c.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: w.intl.string(w.t.oezC3x),
                className: tx._,
            }),
            (0, c.jsx)(ed.D, { variant: "heading-xl/semibold", children: w.intl.string(w.t.oezC3x) }),
            (0, c.jsx)(ee.E, { variant: "text-md/medium", children: w.intl.string(w.t["Tc/Ndl"]) }),
        ],
    });
}
var tC = s(528096);
let tf = { flattenProductVariants: !0 };
function tS(e) {
    let { isFetchingCategories: t, scrollerRef: s, tab: l } = e,
        n = (0, v.uM)(),
        a = n?.sessionId ?? "",
        { noCache: r, includeUnpublished: i } = (0, eG.A)(),
        o = (0, eh.W)("CollectiblesFilterResults"),
        u = (0, h.bG)([b.default], () => b.default.getCurrentUser()),
        { skus: m, currentPage: E, totalCount: x, isFetchingResults: p } = (0, J.S)(),
        C = (0, h.yK)([j.A], () => j.A.getProductsBySkus(m)),
        f = d.useCallback(() => {
            s?.current?.scrollToTop({ animate: !0 });
        }, [s]),
        S = m?.join("");
    d.useEffect(() => {
        f();
    }, [S, f]);
    let _ = ef(),
        A = d.useMemo(() => _(C), [_, C]);
    d.useEffect(() => {
        t ||
            (0, eL.z)({
                sessionId: a,
                checkpoint: eL.t.SHOP_RENDERED,
                tab: l,
                unpublishedCategoriesShown: i,
                cacheDisabled: r,
            });
    }, [a, i, r, t, l]);
    let L = d.useRef(null),
        { setQueryPageSize: I, setQueryPageOffset: O, queryPageSize: N } = (0, W.v)(),
        [y, T] = d.useState(!1),
        R = t || p || null == u;
    d.useEffect(() => {
        R ? T(!1) : A.length > 0 && T(!0);
    }, [R, A.length]);
    let M = N > 0 && !R && 0 === A.length;
    d.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == L.current || I(Math.floor(5 * getComputedStyle(L.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != L.current) return e.observe(L.current), () => e.disconnect();
    }, [I]);
    let P = d.useCallback(
        (e) => {
            k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        value: tf,
        children: [
            (0, c.jsxs)("div", {
                className: g()({ [tC.oE]: M }),
                children: [
                    M && (0, c.jsx)(tp, {}),
                    (0, c.jsxs)("div", {
                        className: g()(tC.ZE, { [tC.Kp]: y }),
                        ref: L,
                        children: [
                            R && [...Array(N)].map((e, t) => (0, c.jsx)(eB, {}, t)),
                            !R &&
                                A.map((e, t) =>
                                    null == j.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, c.jsx)(
                                              v.R9,
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
                    className: tC.Ej,
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
var t_ = s(832179);
function tA(e) {
    let { tab: t, categories: s, initialCategoryId: l, showFilterInitially: n = !0, onUnmount: a } = e,
        r = (0, er.A)("shop_include_unpublished");
    (0, W.S)(r);
    let i = d.useRef(null),
        { handleScroll: o } = ea(i, t),
        u = (0, $.U)("Shop Browse"),
        { setCategoryRef: g, handleScrollToCategory: m } = (0, eW.k0)(i.current),
        [h, E] = d.useState(n),
        [x, p] = d.useState(!1);
    return (
        d.useEffect(() => {
            null != l && m(l);
        }, [l, m]),
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
            className: t_.VM,
            children: (0, c.jsxs)("main", {
                className: t_.MY,
                children: [
                    (0, c.jsx)(Q.Gt, {
                        className: t_.OW,
                        ref: i,
                        onScroll: o,
                        children: u
                            ? (0, c.jsx)("div", {
                                  className: t_.en,
                                  children: (0, c.jsx)("div", {
                                      className: t_.pf,
                                      children: (0, c.jsx)(ei.Z_, { tenantId: B.FYj, templateId: eo.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, c.jsx)(tL, {
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
                    h && !x && (0, c.jsx)("div", { className: t_.yF }),
                    h && !x && (0, c.jsx)(X.Ip, { className: t_.kT, children: (0, c.jsx)(td, {}) }),
                ],
            }),
        })
    );
}
let tL = (e) => {
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
        u = d.useRef(null),
        m = (0, W.v)((e) => e.hasDefaultFilters()),
        h = (0, v.uM)(),
        { handlePageChange: E, currentPage: x } = ((e) => {
            let [t, s] = d.useState(1);
            return {
                currentPage: t,
                handlePageChange: d.useCallback(
                    (t) => {
                        s(t), e.current?.scrollTo({ to: 0 });
                    },
                    [e, s],
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
                    E(e);
            },
            [h, E],
        ),
        C = d.useRef(null);
    return (
        d.useEffect(() => {
            if (!t || !s) return;
            let e = (e) => {
                let t = e.target;
                null === u.current ||
                    null === C.current ||
                    u.current.contains(t) ||
                    C.current.contains(t) ||
                    (k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            className: t_.en,
            children: (0, c.jsxs)("div", {
                className: t_.pf,
                children: [
                    (0, c.jsxs)("div", {
                        className: t_.ne,
                        children: [
                            (0, c.jsx)("div", { className: t_.lQ, children: (0, c.jsx)(eu, {}) }),
                            (0, c.jsxs)("div", {
                                className: g()(t_.wR, { [t_.Im]: t }),
                                children: [
                                    (0, c.jsxs)("div", {
                                        className: t_.Ul,
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
                                                k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                    className: t_.Dh,
                                    ref: u,
                                    children: (0, c.jsx)(Q.Ch, { className: t_.Qo, children: (0, c.jsx)(td, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, c.jsx)(v.R9, {
                              newValue: { pageIndex: x },
                              children: (0, c.jsx)(eV, {
                                  categories: r,
                                  setCategoryRef: i,
                                  currentPage: x,
                                  handlePageChange: p,
                                  initialCategoryId: o,
                              }),
                          })
                        : (0, c.jsx)(tS, { scrollerRef: a, tab: n }, n),
                ],
            }),
        })
    );
};
var tb = s(599062),
    tv = s(651162),
    tj = s(554146),
    tI = s(367727);
let tO = d.createContext(null);
function tN(e) {
    let { blockType: t, children: s } = e,
        l = d.useMemo(() => ({ blockType: t }), [t]);
    return (0, c.jsx)(tO.Provider, { value: l, children: s });
}
var tk = s(755172),
    ty = s(325595),
    tT = s(893998),
    tR = s(110629),
    tB = s(922139),
    tM = s(607399),
    tP = s(946015),
    tD = s(717421),
    tH = s(854818),
    tF = s(134264);
let tw = d.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: s } = e,
        l = (0, tD.z)({
            transform: `translateX(-50%) ${s ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!s,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsxs)(tB.animated.div, {
        className: g()([tF.lP, tM.Fr && tF.yJ]),
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
            (0, c.jsxs)(tP.s, {
                direction: tP.s.Direction.VERTICAL,
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
            (0, c.jsx)(tH.e, { endDate: t.endTime }),
        ],
    });
});
var tG = s(424918),
    tU = s(269115),
    tz = s(777666),
    tV = s(597783),
    tW = s(941734);
let tK = (e) => {
        let t,
            { category: s, subblock: l, badgeText: n, enablePreview: a, handleTransition: r } = e;
        null != l && (t = j.A.getCategoryByStoreListingId(l?.categoryStoreListingId)?.skuId);
        let i = t ?? s?.skuId ?? "",
            { handleCardVisibilityChange: o } = (0, tV.Z)(i, "home", "marketing featured block"),
            u = (0, eN.s4)(s, l, a),
            g = d.useRef(null),
            m = l?.bodyText,
            h = l?.name ?? s?.name,
            E = null != h ? w.intl.formatToPlainString(w.t.frSHlf, { destination: h }) : void 0,
            x = (0, v.uM)();
        return (0, c.jsx)(tU.L, {
            innerRef: g,
            onChange: o,
            threshold: 0,
            children: (0, c.jsxs)(e4.D, {
                className: tW.oT,
                innerRef: g,
                style: { ...(null != u && { backgroundImage: `url(${u})` }) },
                onClick: () => {
                    r({
                        sourceButton: "shop marketing tile",
                        categorySkuId: i,
                        isInternalShopDeeplink: !0,
                        isOrbsExclusive: s?.isOrbsExclusive,
                    }),
                        k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    null != n && (0, c.jsx)(tz.Lp, { disableColor: !0, text: n, className: tW.pv }),
                    (0, c.jsx)("div", {
                        className: tW.Gh,
                        children:
                            null != m &&
                            (0, c.jsx)(ed.D, {
                                lineClamp: 4,
                                className: tW.BN,
                                style: { color: l?.bannerTextColor ?? "white" },
                                variant: "heading-md/medium",
                                children: m,
                            }),
                    }),
                    (0, c.jsx)("div", {
                        className: tW.b2,
                        children: (0, c.jsx)(et.$, {
                            variant: "overlay-primary",
                            text: w.intl.string(w.t.jVcuVY),
                            "aria-label": E,
                            onClick: (e) => {
                                r({
                                    sourceButton: "shop marketing take me there button",
                                    categorySkuId: i,
                                    isInternalShopDeeplink: !0,
                                    isOrbsExclusive: s?.isOrbsExclusive,
                                }),
                                    e.stopPropagation(),
                                    k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    tY = (e) => {
        let { handleTransition: t, featuredBlockRecord: s } = e;
        return (0, c.jsx)("div", {
            className: g()(tW.n9, tW.YB),
            children: s?.subblocks.map((e, s) =>
                e.type === tG.u.CATEGORY
                    ? (0, c.jsx)(
                          v.R9,
                          {
                              newValue: {
                                  categoryPosition: 1,
                                  pageCategory: e.name,
                                  pageSection: "featured_block",
                                  tilePosition: s,
                              },
                              children: (0, c.jsx)(
                                  tK,
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
    t$ = (e) => {
        let { handleTransition: t, categories: s } = e;
        if (null == s || s.length < 2) return null;
        let [l, n] = s;
        return (0, c.jsx)("div", {
            className: g()(tW.n9, tW.YB),
            children: (0, c.jsxs)(v.R9, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != l ? l.name : n?.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == l),
                },
                children: [
                    null != l &&
                        (0, c.jsx)(tK, {
                            category: l,
                            enablePreview: !0,
                            badgeText: (0, eE.HF)(l.unpublishedAt) ? w.intl.string(w.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                    null != n &&
                        (0, c.jsx)(tK, {
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
                  className: g()(tW.n9, tW.YB),
                  children: [
                      (0, c.jsx)("div", {
                          className: g()(tW.Jn, tW.oT),
                          children: (0, c.jsx)("div", { className: tW.uy }),
                      }),
                      (0, c.jsx)("div", {
                          className: g()(tW.Jn, tW.oT),
                          children: (0, c.jsx)("div", { className: tW.uy }),
                      }),
                  ],
              })
            : null != n
              ? (0, c.jsx)(f.f5, {
                    value: a,
                    children: (0, c.jsx)(tY, { featuredBlockRecord: n, handleTransition: s, isLoading: !1 }),
                })
              : (0, c.jsx)(f.f5, {
                    value: a,
                    children: (0, c.jsx)(t$, { categories: l, handleTransition: s, isLoading: !1 }),
                });
    };
var tZ = s(140735),
    tJ = s(621466),
    tQ =
        (((i = {}).MOUNTED = "mounted"),
        (i.SORT_OUT = "sort-out"),
        (i.SORT_IN = "sort-in"),
        (i.SHUFFLE_OUT = "shuffle-out"),
        (i.SHUFFLE_IN = "shuffle-in"),
        (i.FINISHED = "finished"),
        i);
s(667532);
var tX = s(735438),
    t0 = s.n(tX),
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
    let e = (0, O.bG)([j.A], () => j.A.products);
    return (0, d.useCallback)(
        (t) =>
            t5()(
                t
                    .map((t) => {
                        let s = e.get(t);
                        return null != s && null != s.variantGroupStoreListingId
                            ? j.A.getProductByStoreListingId(s.variantGroupStoreListingId)
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
                (0, c.jsx)(ed.D, { variant: "heading-lg/semibold", children: l }),
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
            u = (0, O.bG)([b.default], () => b.default.getCurrentUser()),
            m = y.Ay.canUseShopDiscounts(u),
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
                let { sortedSkuIds: t, hasShopDiscount: s, prioritizeUserDiscounts: l, orbsSupportedOnly: n } = e,
                    a = (0, O.bG)([t2.A], () => t2.A.hasConsented(B.YAq.PERSONALIZATION)),
                    r = d.useMemo(() => t?.[t1.RECOMMENDED] ?? [], [t]),
                    i = d.useMemo(() => t?.[t1.POPULAR] ?? [], [t]),
                    o = r.length > 0 && a,
                    [c, u] = d.useState(o ? t1.RECOMMENDED : t1.POPULAR),
                    g = (0, O.bG)([j.A], () => j.A.productsWithVariantsAsGroup),
                    m = d.useMemo(() => (0, eE.CE)(g), [g]),
                    h = (0, O.bG)([H.A], () => H.A.getUserDiscounts()),
                    E = t9(),
                    x = ef(),
                    [p, C] = d.useState([]),
                    f = d.useCallback(() => {
                        u(t1.RANDOM), C(t0().shuffle(m));
                    }, [m]);
                d.useEffect(() => {
                    C(t0().shuffle(m));
                }, [m]);
                let S = eA(
                    d.useMemo(() => {
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
                    setSortType: u,
                    sortedItems: S,
                    sortOptions: d.useMemo(() => {
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
                let [e, t] = d.useState("mounted"),
                    [s, l] = d.useState(!1),
                    n = d.useRef(null);
                return (
                    d.useEffect(() => {
                        if (s && "finished" === e) {
                            if (null !== n.current) {
                                let e = n.current;
                                if (
                                    e.tabIndex >= 0 ||
                                    (0, tJ.vq)(e, HTMLButtonElement) ||
                                    (0, tJ.vq)(e, HTMLAnchorElement) ||
                                    (0, tJ.vq)(e, HTMLInputElement) ||
                                    (0, tJ.vq)(e, HTMLSelectElement) ||
                                    (0, tJ.vq)(e, HTMLTextAreaElement)
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
                    }, [e, s]),
                    {
                        animationPhase: e,
                        startAnimation: d.useCallback((e) => {
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
            D = (0, v.uM)(),
            F = D?.sessionId ?? "",
            { analyticsLocations: G } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            U = d.useRef(null),
            z = d.useRef(null),
            [V, W] = d.useState(!1),
            K = d.useCallback(
                (e) => {
                    W(!1),
                        P({ isShuffling: !1, onOutroComplete: () => p(e), returnRef: z }),
                        k.default.track(B.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: F,
                            sort_type: e,
                        });
                },
                [P, p, F],
            );
        return null == u
            ? null
            : (0, c.jsx)(f.f5, {
                  value: G,
                  children: (0, c.jsxs)("div", {
                      className: g()(tW.lD, tW.YB),
                      children: [
                          (0, c.jsxs)("div", {
                              className: tW.$6,
                              children: [
                                  (0, c.jsx)(se, { label: s, personalizedResults: A }),
                                  (0, c.jsxs)("div", {
                                      className: g()(tW.IE, { [eq.jP]: E }),
                                      children: [
                                          (0, c.jsxs)("div", {
                                              className: tW.gd,
                                              children: [
                                                  (0, c.jsx)(ee.E, {
                                                      variant: "text-md/medium",
                                                      children: w.intl.string(w.t.uaX705),
                                                  }),
                                                  (0, c.jsx)("div", {
                                                      className: g()(i, tW.pI),
                                                      ref: z,
                                                      children: (0, c.jsx)(e$.l, {
                                                          label: w.intl.string(w.t.uaX705),
                                                          hideLabel: !0,
                                                          options: S,
                                                          onSelectionChange: K,
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
                                                      W(!0),
                                                          P({ isShuffling: !0, onOutroComplete: _, returnRef: U }),
                                                          k.default.track(
                                                              B.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: F },
                                                          );
                                                  },
                                                  disabled: M !== tQ.MOUNTED && M !== tQ.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, c.jsx)(tZ.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: V && M === tQ.FINISHED ? w.intl.string(w.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, c.jsx)("div", {
                              className: tW.hm,
                              children: t
                                  ? (0, c.jsx)(c.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, c.jsx)(eB, {}, t + 1)),
                                    })
                                  : C.slice(0, n).map((e, t) => {
                                        let s,
                                            l = j.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == l) return null;
                                        if (T)
                                            if (M === tQ.SHUFFLE_OUT)
                                                return (0, c.jsx)(
                                                    "div",
                                                    {
                                                        className: tW.Z2,
                                                        children: (0, c.jsx)(eB, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                M === tQ.SORT_OUT
                                                    ? (s = tW.MW)
                                                    : M === tQ.SHUFFLE_IN
                                                      ? (s = tW.aS)
                                                      : M === tQ.SORT_IN && (s = tW.F7);
                                        return (0, c.jsx)(
                                            v.R9,
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
        n = (0, O.bG)([b.default], () => b.default.getCurrentUser()),
        a = (0, eh.W)("FramesProductShelfBlock"),
        r = t9(),
        i = eA(d.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r])),
        { analyticsLocations: o } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_SHELF),
        u = d.useCallback(() => {
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
                  className: g()(sl.kL, tW.YB),
                  children: [
                      null != t.desktopBackgroundImage &&
                          (0, c.jsx)("img", {
                              className: sl.iL,
                              src: t.desktopBackgroundImage,
                              alt: "",
                              "aria-hidden": !0,
                          }),
                      (0, c.jsxs)("div", {
                          className: sl.Qs,
                          children: [
                              (0, c.jsxs)("div", {
                                  className: sl.wx,
                                  children: [
                                      (0, c.jsxs)("div", {
                                          className: sl.Jb,
                                          children: [
                                              (0, c.jsx)(tR.A, {
                                                  location: "FramesProductShelfBlock",
                                                  showTooltip: !0,
                                              }),
                                              (0, c.jsx)(ed.D, {
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
                              (0, c.jsx)(ss.A, {
                                  gap: "xl",
                                  edgeFade: "sm",
                                  children: i.map((e, s) =>
                                      null == j.A.getCategoryForProduct(e.skuId)
                                          ? null
                                          : (0, c.jsx)(
                                                v.R9,
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
    si = s(318346),
    so = s(521e3),
    sc = s(929955);
let sd = (e) => {
        let { bannerStatic: t, bannerAnimated: s, bannerRive: l, isResponsive: n = !1, eventTargetRef: a } = e,
            r = (0, O.bG)([Y.A], () => Y.A.useReducedMotion),
            i = (0, O.bG)([eI.A], () => eI.A.isFocused()),
            o = null != s && !r && i;
        return null != l
            ? (0, c.jsx)(ev._, { src: l, fit: "fit-width", eventTargetRef: a })
            : o
              ? (0, c.jsx)(ej.A, { className: g()({ [sc.no]: n }, sc.BW, sc.ud), src: s, autoPlay: !0, loop: !0 })
              : (0, c.jsx)("div", {
                    className: g()({ [sc.no]: n }, sc.BW, sc._e),
                    style: { backgroundImage: `url(${t})` },
                });
    },
    su = (e) => (0, c.jsx)("div", { className: tW.hm, children: (0, c.jsx)(sm, { ...e }) }),
    sg = (e) =>
        (0, c.jsx)(ss.A, { gap: "xl", "aria-label": w.intl.string(w.t.HP8LNG), children: (0, c.jsx)(sm, { ...e }) }),
    sm = (e) => {
        let { isLoading: t, products: s, tab: l, totalCards: n } = e,
            a = (0, eh.W)("HeroBlockCards");
        if (t) return (0, c.jsx)(c.Fragment, { children: [...Array(n ?? 4)].map((e, t) => (0, c.jsx)(eB, {}, t)) });
        let r = null != n ? s.slice(0, n) : s;
        return (0, c.jsx)(eF.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: r.map((e, t) => {
                let s = j.A.getCategoryForProduct(e.skuId);
                return null == e || null == s
                    ? null
                    : (0, c.jsx)(
                          v.R9,
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
                (s = d.useMemo(() => (r ? [] : t(l.rankedSkuIds)), [r, t, l.rankedSkuIds])),
                { products: eA(ef()(s)) }),
            o = d.useMemo(
                () =>
                    !r &&
                    0 !== l.rankedSkuIds.length &&
                    !(i.length > 0) &&
                    l.rankedSkuIds.every((e) => j.A.getProduct(e)?.variantGroupStoreListingId != null),
                [r, l.rankedSkuIds, i.length],
            ),
            u = r || o;
        switch (n) {
            case "feed":
                return (0, c.jsx)(su, { heroBlockRecord: l, isLoading: u, products: i, tab: a });
            case "hscroll":
                return (0, c.jsx)(sg, { heroBlockRecord: l, isLoading: u, products: i, tab: a });
        }
    },
    sE = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: tv.g.HERO,
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
            u = d.useRef(null),
            m = (0, eq.yB)("HeroBlock"),
            h = (0, O.bG)([b.default], () => b.default.getCurrentUser()),
            E = (0, v.uM)(),
            { analyticsLocations: x } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_HERO),
            p = d.useMemo(
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
                                type: tv.g.HERO,
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
                heroBannerRive: j,
            } = (0, eN.Kk)(p),
            I = C?.responsive ?? !1,
            y = C?.backgroundStyle,
            T = null != j,
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
                      k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                      className: tW.os,
                      children: [
                          T ? (0, so.VA)({ isCustomCursorEnabled: m, className: tW.Xt, riveEventTargetRef: u }) : null,
                          (0, c.jsx)("div", {
                              className: g()(tW.vK, { [tW.cN]: T, [tW.no]: I }),
                              style: null != y ? { background: y } : void 0,
                              children:
                                  null != A &&
                                  (0, c.jsx)(sd, {
                                      bannerStatic: A,
                                      bannerAnimated: L,
                                      bannerRive: j,
                                      isResponsive: I,
                                      eventTargetRef: u,
                                  }),
                          }),
                          (0, c.jsxs)("div", {
                              className: tW.xX,
                              children: [
                                  T
                                      ? (0, c.jsx)("div", {
                                            className: tW.fy,
                                            children:
                                                !t &&
                                                (0, c.jsx)(et.$, { variant: "overlay-primary", onClick: H, text: D }),
                                        })
                                      : (0, c.jsxs)("div", {
                                            className: g()(tW.bC, { [tW.no]: I }),
                                            children: [
                                                t
                                                    ? (0, c.jsx)("div", { className: tW.Hw })
                                                    : (0, c.jsxs)("div", {
                                                          className: tW.Hw,
                                                          children: [
                                                              (0, eE.HF)(p.unpublishedAt) &&
                                                                  (0, c.jsx)(tz.Lp, {
                                                                      disableColor: !0,
                                                                      text: w.intl.string(w.t["h/uBCR"]),
                                                                      className: tW.v0,
                                                                  }),
                                                              (0, c.jsxs)("div", {
                                                                  className: tW.Wq,
                                                                  children: [
                                                                      null != i &&
                                                                          (0, c.jsx)("div", {
                                                                              className: tW._I,
                                                                              children: i,
                                                                          }),
                                                                      null != _ &&
                                                                          (0, c.jsx)("img", {
                                                                              className: tW.rm,
                                                                              src: _,
                                                                              alt: p.name,
                                                                              style: S?.toDesktopStyles(),
                                                                          }),
                                                                      null != p.title &&
                                                                          (0, c.jsx)(ed.D, {
                                                                              variant: "heading-xxl/bold",
                                                                              className: tW.DD,
                                                                              color: "text-strong",
                                                                              children: p.title,
                                                                          }),
                                                                      null != p.summary &&
                                                                          "" !== p.summary &&
                                                                          (0, c.jsx)(ee.E, {
                                                                              variant: "text-md/normal",
                                                                              className: M ? tW.h4 : tW.Tm,
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
                                                        className: tW.IS,
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
                children: null != n && (0, c.jsx)(sd, { bannerStatic: n, bannerAnimated: a }),
            }),
            (0, c.jsx)("div", {
                className: sC.HQ,
                children: (0, c.jsxs)("div", {
                    className: sC.Yn,
                    children: [
                        null != t.endTime ? (0, c.jsx)(tH.e, { endDate: t.endTime, size: "lg" }) : null,
                        (0, c.jsx)(ed.D, {
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
    sb = s(713517),
    sv = s(914410),
    sj = s(859040),
    sI = s(61750);
function sO(e, t) {
    let s = d.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        l = (0, O.bG)([Z.A], () => Z.A.getPurchases(s));
    return {
        readyToClaim: d.useMemo(() => l.length === s.length, [l, s]),
        collectibleProductSkuIds: s,
        collectedSkuIds: l,
    };
}
var sN = s(498924);
let sk = d.memo(function (e) {
        let { category: t, rewardSkuId: s } = e,
            { handleCardVisibilityChange: l } = (0, tV.Z)(s),
            n = d.useRef(null),
            { isHoveringOrFocusing: a } = (0, sb.A)(n),
            { readyToClaim: r, collectibleProductSkuIds: i, collectedSkuIds: o } = sO(t, s),
            u = (0, O.bG)([Z.A], () => Z.A.isClaiming === s);
        return (0, c.jsx)(tU.L, {
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
                            children: (0, c.jsx)(tz.Lp, {
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
                                                (0, c.jsx)(ed.D, {
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
                                                    (0, c.jsx)(sv.Ay, {
                                                        variant: sv.qP.BLUE,
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
                                                        (0, sj.BX)(t.skuId, s)
                                                            .then(() => {
                                                                let e = j.A.getProduct(s);
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
    sy = (e) => {
        let t,
            s,
            { isBlockLoading: l = !1, heroBlock: n, tab: a } = e,
            r = (0, eh.W)("RewardHeroBlockCards"),
            i = d.useMemo(() => j.A.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]),
            o = (0, O.bG)([Z.A], () => Z.A.getPurchase(n.rewardSkuId)),
            { products: u } =
                ((t = t9()),
                (s = d.useMemo(
                    () => (l ? [] : t(n.rankedSkuIds).filter((e) => e.skuId !== n.rewardSkuId || null != o)),
                    [l, t, n.rankedSkuIds, o, n.rewardSkuId],
                )),
                { products: eA(ef()(s)) }),
            g = d.useMemo(
                () =>
                    !l &&
                    0 !== n.rankedSkuIds.length &&
                    !(u.length > 0) &&
                    n.rankedSkuIds.every((e) => j.A.getProduct(e)?.variantGroupStoreListingId != null),
                [l, n.rankedSkuIds, u.length],
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
                                  v.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, c.jsx)(sk, { category: i, rewardSkuId: n.rewardSkuId }),
                                  },
                                  n.rewardSkuId,
                              ),
                          u.map((e, t) => {
                              let s = j.A.getCategoryForProduct(e.skuId);
                              return null == e || null == s
                                  ? null
                                  : (0, c.jsx)(
                                        v.R9,
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
        type: tv.g.REWARD_HERO,
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
            r = (0, O.bG)([b.default], () => b.default.getCurrentUser()),
            { analyticsLocations: i } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: o,
                logoDisplayConfig: d,
                heroLogo: u,
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
                      className: tW.os,
                      children: [
                          (0, c.jsx)("div", {
                              className: g()(tW.vK, { [tW.no]: E }),
                              style: null != x ? { background: x } : void 0,
                              children:
                                  null != m && (0, c.jsx)(sd, { bannerStatic: m, bannerAnimated: h, isResponsive: E }),
                          }),
                          (0, c.jsxs)("div", {
                              className: tW.xX,
                              children: [
                                  (0, c.jsx)("div", {
                                      className: g()(tW.bC, { [tW.no]: E }),
                                      children: t
                                          ? (0, c.jsx)("div", { className: tW.Hw })
                                          : (0, c.jsx)("div", {
                                                className: tW.Hw,
                                                children: (0, c.jsxs)("div", {
                                                    className: tW.Wq,
                                                    children: [
                                                        null != u &&
                                                            (0, c.jsx)("img", {
                                                                className: tW.rm,
                                                                src: u,
                                                                alt: s.name,
                                                                style: d?.toDesktopStyles(),
                                                            }),
                                                        null != s.title &&
                                                            (0, c.jsx)(ed.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: tW.DD,
                                                                color: "text-strong",
                                                                children: s.title,
                                                            }),
                                                        "" !== s.summary &&
                                                            (0, c.jsx)(ee.E, {
                                                                variant: "text-md/normal",
                                                                className: tW.Tm,
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
                                  (0, c.jsx)(sy, { isBlockLoading: t, heroBlock: s, tab: l }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var sB = s(609196);
let sM = (e) => {
    let { shelf: t, handleTransition: s, tab: l } = e,
        n = (0, O.bG)([b.default], () => b.default.getCurrentUser()),
        a = (0, eh.W)("ShelfBlock"),
        r = (0, O.bG)([j.A], () => (null != t.categorySkuId ? j.A.getCategory(t.categorySkuId) : void 0)),
        i = t9(),
        o = eA(d.useMemo(() => i(t.rankedSkuIds), [t.rankedSkuIds, i])),
        { analyticsLocations: u } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_SHELF),
        m = d.useCallback(() => {
            s({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: r?.isOrbsExclusive === !0 && l !== R.G2.ORBS,
            });
        }, [t.categorySkuId, r, s, l]);
    if (null == n || 0 === o.length) return null;
    let h = t.buttonText ?? w.intl.formatToPlainString(w.t.bc9RBE, { category_name: t.name }),
        E = t.showButton,
        x = t.desktopBackgroundImage,
        p = null != x;
    return (0, c.jsx)(f.f5, {
        value: u,
        children: (0, c.jsxs)("div", {
            className: g()(sB.mu, tW.YB, p ? sB.VA : sB.Ti),
            children: [
                p && (0, c.jsx)("img", { className: sB.iL, src: x, alt: "", "aria-hidden": !0 }),
                (0, c.jsxs)("div", {
                    className: sB.Qs,
                    children: [
                        (0, c.jsxs)("div", {
                            className: sB.wx,
                            children: [
                                (0, c.jsx)(ed.D, {
                                    variant: "heading-lg/semibold",
                                    style: p ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                E &&
                                    (0, c.jsx)(et.$, {
                                        variant: p ? "overlay-primary" : "secondary",
                                        text: h,
                                        onClick: m,
                                    }),
                            ],
                        }),
                        (0, c.jsx)(ss.A, {
                            gap: "xl",
                            edgeFade: p ? "sm" : void 0,
                            children: o.map((e, s) =>
                                null == j.A.getCategoryForProduct(e.skuId)
                                    ? null
                                    : (0, c.jsx)(
                                          v.R9,
                                          {
                                              newValue: { tilePosition: s, pageSection: t.name, categoryPosition: 2 },
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
var sP = s(43990),
    sD = s(815021),
    sH = s(509434),
    sF = s(871123),
    sw = s(733391),
    sG = s(439303),
    sU = s(832163),
    sz = s(44724),
    sV = s(317560),
    sW = s(328100),
    sK = s(470285),
    sY = s(67480),
    s$ = s(371794),
    sq = s(74564);
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
                shopButtonText: u,
                analyticsSection: m,
                analyticsTileType: h,
                analyticsImpressionType: E,
                backgroundGradient: x,
            } = e;
        d.useEffect(() => {
            (0, sw.ap)(i);
        }, [i]);
        let p = (0, O.bG)([sU.A], () => {
                let e = sU.A.getStorefrontMetadata(i);
                return e?.logoAssetId != null ? (0, s$.YE)(i, e.logoAssetId, 256) : void 0;
            }, [i]),
            C =
                ((t = d.useRef([])),
                d.useEffect(() => {
                    for (let e of a) (0, sw.Pp)(i, e);
                }, [a, i]),
                (s = (0, O.bG)(
                    [sY.A],
                    () => !a.some((e) => sY.A.isFetching(e)) && a.some((e) => sY.A.didFetchingSkuFail(e)),
                    [a],
                )),
                d.useEffect(() => {
                    s && (0, sw.ap)(i);
                }, [s, i]),
                (l = (0, O.yK)([sY.A, sU.A], () => {
                    if (a.some((e) => sY.A.isFetching(e))) return t.current;
                    let e = a.filter((e) => null != sY.A.get(e));
                    if (e.length >= a.length) return a;
                    let s = sU.A.getStorefrontDataForApplicationId(i);
                    if (null == s || "loading" === s.state) return e;
                    let l = new Set(a);
                    return [
                        ...e,
                        ...(null != s.storefront
                            ? (0, sF.jd)(s.storefront).filter((e) => !l.has(e) && null != sY.A.get(e))
                            : []),
                    ].slice(0, a.length);
                }, [i, a])),
                d.useEffect(() => {
                    l.length > 0 && (t.current = l);
                }, [l]),
                l);
        (0, sK.j)({ skuIds: C });
        let S = (0, v.uM)(),
            { analyticsLocations: _ } = (0, f.Ay)(),
            A = d.useRef(null),
            L = d.useRef(!1),
            b = d.useRef(null),
            j = d.useMemo(() => ({ pageSection: m }), [m]),
            I = d.useCallback(
                (e, t) => {
                    k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: S?.sessionId,
                        page_type: r,
                        page_category: S?.pageCategory,
                        page_section: S?.pageSection,
                        tile_type: h,
                        cta_name: e,
                        ...(null != t ? { sku_id: t } : void 0),
                    });
                },
                [S?.sessionId, S?.pageCategory, S?.pageSection, r, h],
            ),
            N = d.useCallback(() => {
                (0, sz.G)({ applicationId: i });
            }, [i]),
            y = d.useCallback(() => {
                I("go_to_game_shop"), (0, sz.default)({ applicationId: i });
            }, [I, i]),
            T = d.useCallback(
                (e, t) => {
                    let { skuId: s, applicationId: l } = t;
                    I("card_click", s),
                        (0, sV.R)({ skuId: s, applicationId: l, isStorefront: !1, analyticsLocations: _ });
                },
                [I, _],
            ),
            R = d.useCallback(() => {
                I("dismiss"), n();
            }, [I, n]),
            M = d.useCallback(
                (e) => {
                    !L.current &&
                        (e && null === b.current
                            ? (b.current = setTimeout(() => {
                                  (L.current = !0),
                                      (b.current = null),
                                      k.default.track(B.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                          collectibles_shop_session_id: S?.sessionId,
                                          page_type: r,
                                          page_category: S?.pageCategory,
                                          page_section: S?.pageSection,
                                          type: E,
                                      });
                              }, 1e3))
                            : e || null === b.current || (clearTimeout(b.current), (b.current = null)));
                },
                [S?.sessionId, S?.pageCategory, S?.pageSection, r, E],
            );
        return (d.useEffect(
            () => () => {
                null !== b.current && (clearTimeout(b.current), (b.current = null));
            },
            [],
        ),
        0 === C.length)
            ? null
            : (0, c.jsx)(sP.N, {
                  theme: B.NJ8.DARKER,
                  children: (e) =>
                      (0, c.jsx)(tU.L, {
                          innerRef: A,
                          onChange: M,
                          threshold: 0,
                          children: (0, c.jsx)("div", {
                              ref: A,
                              className: g()(sq.YB, e),
                              children: (0, c.jsxs)("div", {
                                  className: sq.kL,
                                  children: [
                                      null != x && (0, c.jsx)("div", { className: sq.D7, style: { background: x } }),
                                      (0, c.jsx)("div", {
                                          className: sq.b,
                                          children: (0, c.jsx)(sD.J, { size: "sm", variant: "icon-only", onClick: R }),
                                      }),
                                      null != p && (0, c.jsx)("img", { className: sq.wm, src: p, alt: "" }),
                                      (0, c.jsx)("div", {
                                          className: sq.xf,
                                          children: (0, c.jsxs)("div", {
                                              className: sq.B5,
                                              children: [
                                                  (0, c.jsx)(ed.D, {
                                                      variant: "heading-lg/semibold",
                                                      color: "always-white",
                                                      children: o,
                                                  }),
                                                  (0, c.jsx)(et.$, {
                                                      variant: "overlay-primary",
                                                      size: "sm",
                                                      icon: sH.I,
                                                      iconPosition: "end",
                                                      text: u,
                                                      onMouseDown: N,
                                                      onClick: y,
                                                  }),
                                              ],
                                          }),
                                      }),
                                      (0, c.jsx)(sG.E9, {
                                          newValue: j,
                                          children: (0, c.jsx)("div", {
                                              className: sq.$2,
                                              children: C.map((e, t) =>
                                                  (0, c.jsx)(sW.A, { skuId: e, positionInSection: t, onClick: T }, e),
                                              ),
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                      }),
              });
    },
    sJ = (e) => {
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
var sQ = s(770178),
    sX = s(929283),
    s0 = s(275483);
let s1 = [
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
    s2 = (e) => {
        let { config: t, baseLeft: s, transitioning: l } = e,
            n = window.innerHeight,
            a = j.A.getProduct(t.skuId),
            r = a?.items[0],
            i = a?.type,
            o = s + t.horizontalJitter;
        return (0, c.jsx)("div", {
            className: s0.LY,
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
    s4 = (e) => {
        let { peaking: t, transitioning: s, parentWidth: l } = e,
            [n, a] = d.useState(!1),
            [r, i] = d.useState([]),
            [o] = d.useState(() =>
                [...s1]
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
                if (null != l && l > 0) {
                    let e = Math.max(1, Math.floor(l / 130)),
                        t = l / e;
                    i(Array.from({ length: e }, (e, s) => ({ config: o[s % o.length], baseLeft: s * t })));
                }
            }, [l, o]),
            d.useEffect(() => {
                s && setTimeout(() => a(!0), R.H1);
            }, [s]),
            (0, c.jsx)("div", {
                className: g()(s0.rA, { [s0.Kb]: t, [s0.pp]: n }),
                children: r.map((e, t) => {
                    let { config: l, baseLeft: n } = e;
                    return (0, c.jsx)(s2, { config: l, baseLeft: n, transitioning: s }, l.skuId + t);
                }),
            })
        );
    },
    s5 = (e) => {
        let { peaking: t, transitioning: s } = e,
            l = d.useRef(null),
            [n, a] = d.useState(0),
            r = d.useCallback(() => {
                null != l.current && a(l.current.offsetWidth);
            }, []);
        return (
            (0, sQ.g)(l, r),
            (0, c.jsx)("div", {
                ref: l,
                className: s0.eL,
                children: (0, c.jsx)(s4, { peaking: t, transitioning: s, parentWidth: n }),
            })
        );
    };
var s9 = s(976860),
    s3 = s(49999);
let s7 = (e) => {
        let { wideBannerBlock: t, tab: s } = e,
            l = j.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            n = d.useRef(null),
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
        let m = l?.skuId ?? "",
            { handleCardVisibilityChange: h } = (0, tV.Z)(m, "home", "marketing wide banner"),
            E = (0, v.uM)(),
            { bannerURL: x } = (0, eN.w$)(t),
            p = s === R.G2.ORBS,
            C = null != t.ctaRoute && "" !== t.ctaRoute,
            f = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || C),
            S = null != t.logoURL && "" !== t.logoURL,
            _ = d.useCallback(() => {
                if ((u(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, tI.$l)(tj.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: s3.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            A = d.useCallback(
                (e) => {
                    k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            L = d.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((A(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    s = parseInt(t[2], 10);
                                (0, sz.default)({ guildId: e, pageIndex: s });
                            }
                        } else (0, s9.pX)(e);
                    }
                },
                [t.ctaRoute, A],
            );
        if (null == x || o) return null;
        let b = g()(tW.nM, tW.Tq, tW.TS, tW.YB, { [tW._1]: p, [tW.vb]: C }),
            I = (0, c.jsxs)(c.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, c.jsx)("div", {
                            className: tW.Mh,
                            children: (0, c.jsx)(sD.J, {
                                size: "sm",
                                onClick: (e) => {
                                    e.stopPropagation(), _();
                                },
                                "aria-label": w.intl.string(w.t.WAI6xu),
                            }),
                        }),
                    (0, c.jsx)("div", {
                        className: g()(tW.zK, { [tW._1]: p }),
                        style: null != r ? { height: `${r}px` } : void 0,
                        children: (0, c.jsx)("img", {
                            ref: a,
                            src: x,
                            alt: t.title,
                            className: g()(tW.LN, { [tW.d5]: p }),
                        }),
                    }),
                    (0, c.jsx)("div", {
                        className: g()(tW.Ep, { [tW.Qq]: f }),
                        style: { maxHeight: null != r ? `${r}px` : "auto" },
                        children: (0, c.jsxs)("div", {
                            className: tW.E8,
                            children: [
                                (0, c.jsx)(ed.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: p ? tW.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, c.jsx)(ee.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
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
                                        className: tW.nP,
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
                                            S && (0, c.jsx)("img", { src: t.logoURL, alt: "", className: tW.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, c.jsx)(sP.N, {
            theme: p ? void 0 : to.NJ.DARK,
            children: (e) =>
                (0, c.jsx)(tU.L, {
                    innerRef: n,
                    onChange: h,
                    threshold: 0,
                    children: C
                        ? (0, c.jsx)(e4.D, { innerRef: n, onClick: () => L(null), className: g()(e, b), children: I })
                        : (0, c.jsx)("div", { ref: n, className: g()(e, b), children: I }),
                }),
        });
    },
    s6 = (e) => {
        let { handleTransition: t, numVisibleItems: s, isFetchingCategories: l, tab: n } = e,
            { noCache: a, includeUnpublished: r } = (0, eG.A)(),
            [i, o] = d.useState(!1),
            u = (0, v.uM)(),
            m = u?.sessionId ?? "";
        d.useEffect(() => {
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
            C = d.useCallback(() => {
                p();
            }, [p]),
            f = d.useMemo(() => x.some((e) => e instanceof ty.p), [x])
                ? (0, c.jsx)(tR.A, { location: "CollectiblesShop" })
                : null;
        return (d.useEffect(() => {
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
                    className: g()(tW.g4, tW.Of),
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
                            let d = null,
                                u = !1;
                            switch (e.type) {
                                case tv.g.HERO:
                                    d = (0, c.jsx)(
                                        sx,
                                        { isLoading: h, handleTransition: t, heroBlock: e, tab: n, badge: f },
                                        r,
                                    );
                                    break;
                                case tv.g.FEATURED:
                                    d = (0, c.jsx)(
                                        tq,
                                        { isLoading: h, handleTransition: t, featuredBlockRecord: e },
                                        r,
                                    );
                                    break;
                                case tv.g.FEED:
                                    let m = e.sortedSkuIds;
                                    d = (0, c.jsx)(
                                        st,
                                        {
                                            title:
                                                n === R.G2.ORBS ? w.intl.string(w.t.dFgeuZ) : w.intl.string(w.t.NSv5KV),
                                            isLoading: l,
                                            numVisibleItems: s,
                                            sortedSkuIds: m,
                                            buttonContainerClassName: a?.type === tv.g.IMMERSIVE_BANNER ? tW.w : void 0,
                                            prioritizeUserDiscounts: n === R.G2.HOME,
                                            tab: n,
                                            orbsSupportedOnly: n === R.G2.ORBS,
                                        },
                                        r,
                                    );
                                    break;
                                case tv.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: s } = (0, tI.En)(tj.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (s) return null;
                                    }
                                    d = (0, c.jsx)(s7, { wideBannerBlock: e, tab: n }, r);
                                    break;
                                case tv.g.FRAMES_BANNER:
                                    d = (0, c.jsx)(
                                        s7,
                                        {
                                            wideBannerBlock: tT.y.fromServer({
                                                type: tv.g.WIDE_BANNER,
                                                title: e.title,
                                                body: e.body,
                                                wide_banner_url: e.desktopBackgroundImage,
                                                banner_text_color: "white",
                                                banner_body_text_color: "white",
                                                disable_cta: !0,
                                            }),
                                            tab: n,
                                        },
                                        r,
                                    );
                                    break;
                                case tv.g.FRAMES_PRODUCT_SHELF:
                                    d = (0, c.jsx)(sn, { block: e, handleTransition: t, tab: n }, r);
                                    break;
                                case tv.g.SHELF:
                                    d = (0, c.jsx)(sM, { handleTransition: t, shelf: e, tab: n }, r);
                                    break;
                                case tv.g.COUNTDOWN_TIMER:
                                    (d = (0, c.jsx)(tw, { countdownTimerBlock: e, isVisible: i }, r)), (u = !0);
                                    break;
                                case tv.g.IMMERSIVE_BANNER:
                                    d = (0, c.jsx)(
                                        sf,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => o(!e) },
                                        r,
                                    );
                                    break;
                                case tv.g.REWARD_HERO:
                                    d = (0, c.jsx)(sR, { isLoading: h, handleTransition: t, heroBlock: e, tab: n }, r);
                                    break;
                                case tv.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER: {
                                    let { isDismissed: t } = (0, tI.En)(
                                        tj.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
                                    );
                                    if (t) return null;
                                    return (0, c.jsx)(
                                        tN,
                                        {
                                            blockType: e.type,
                                            children: (0, c.jsx)(sJ, {
                                                onDismiss: () => {
                                                    (0, tI.d6)(
                                                        tj.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
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
                                tN,
                                {
                                    blockType: e.type,
                                    children: (0, c.jsx)("div", {
                                        className: g()(tW.v1, tW.Of, { [tW.J1]: 0 === r || u }),
                                        children: d,
                                    }),
                                },
                                r,
                            );
                        })(e, a > 0 ? x[a - 1] : null, a),
                    ),
                });
    },
    s8 = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            n = d.useRef(null),
            { handleScroll: a } = ea(n, s),
            r = (0, ew.U)(),
            i = (0, v.uM)(),
            [o, u] = d.useState(R.md),
            [g, m] = d.useState(!1);
        return (
            d.useEffect(() => {
                if (null != n.current) {
                    let e = () => {
                            if (null == n.current) return;
                            let e = n.current.getDistanceFromBottom();
                            o >= 36 ? m(e < 20) : e <= 200 && u((e) => e + R.md);
                        },
                        t = n.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [n, o, u, m]),
            (0, c.jsx)(Q.Ch, {
                className: tW.OW,
                ref: n,
                onScroll: a,
                children: (0, c.jsxs)("div", {
                    className: tW.bx,
                    children: [
                        (0, c.jsxs)("div", {
                            className: tW.rb,
                            children: [
                                (0, c.jsx)(s6, {
                                    handleTransition: t,
                                    numVisibleItems: o,
                                    isFetchingCategories: r,
                                    tab: s,
                                }),
                                s !== R.G2.CATALOG &&
                                    o >= 36 &&
                                    (0, c.jsxs)("div", {
                                        className: tW.R$,
                                        children: [
                                            (0, c.jsx)(ed.D, {
                                                variant: "heading-md/semibold",
                                                children: w.intl.string(w.t.Yr70c4),
                                            }),
                                            (0, c.jsx)(et.$, {
                                                variant: "primary",
                                                text: w.intl.string(w.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                        (0, c.jsx)(s5, { peaking: g, transitioning: l === R.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var le = s(154323),
    lt = s(295811);
let ls = { "Any:personalization-header": se },
    ll = { [eo.b.SHOP_HOME]: ls },
    ln = { "1465939725649973269": ls, "1478495181551440044": ls },
    la = () =>
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
    lr = { prioritizedCurrency: eF.Hi.ORBS },
    li = (e) => {
        let { tab: t } = e,
            [s, l, n] = (0, O.yK)([T.A], () => [T.A.getLayout(t), T.A.isFetchingLayout(t), T.A.getLayoutFetchError(t)]),
            a = (0, O.bG)([le.A], () => le.A.get("shop_include_unpublished")),
            r = (0, O.bG)([j.A], () => j.A.skipNumCategories),
            i = d.useMemo(() => {
                let e = {};
                return !0 === a && (e.include_unpublished = !0), null != r && r > 0 && (e.skip_num_categories = r), e;
            }, [a, r]),
            o = null == s && !l && n?.status !== 404 && n?.status !== 429;
        if (
            (d.useEffect(() => {
                o && (0, sj.T2)({ tab: t });
            }, [o, t]),
            null == s)
        )
            return t !== K.HOME || o || l
                ? null
                : (0, c.jsx)(ei.Z_, {
                      tenantId: B.FYj,
                      templateId: eo.b.SHOP_HOME,
                      requestParams: i,
                      overrides: ll[eo.b.SHOP_HOME],
                  });
        let u = (0, c.jsx)(ei.Qs, { tenantId: B.FYj, layoutId: s, overrides: ln[s] });
        return (0, c.jsxs)(c.Fragment, {
            children: [
                t === K.ORBS && (0, c.jsx)(la, {}),
                t === K.ORBS ? (0, c.jsx)(eF.v3.Provider, { value: lr, children: u }) : u,
            ],
        });
    },
    lo = (e) => {
        let { url: t } = e,
            [s, l] = d.useState(null);
        return (d.useEffect(() => {
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
    lc = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            n = (0, v.uM)(),
            a = (0, O.bG)([lt.A], () => lt.A.getShopLayoutUrlOverride()),
            r = d.useRef(null),
            { handleScroll: i } = ea(r, s),
            [o, u] = d.useState(R.md),
            [m, h] = d.useState(!1);
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
            (0, c.jsx)(Q.Ch, {
                className: tW.OW,
                ref: r,
                onScroll: i,
                children: (0, c.jsxs)("div", {
                    className: tW.bx,
                    children: [
                        (0, c.jsxs)("div", {
                            className: g()(tW.rb, tW.GS),
                            children: [
                                null != a && "" !== a ? (0, c.jsx)(lo, { url: a }) : (0, c.jsx)(li, { tab: s }),
                                s !== K.CATALOG &&
                                    o >= 36 &&
                                    (0, c.jsxs)("div", {
                                        className: tW.R$,
                                        children: [
                                            (0, c.jsx)(ed.D, {
                                                variant: "heading-md/semibold",
                                                children: w.intl.string(w.t.Yr70c4),
                                            }),
                                            (0, c.jsx)(et.$, {
                                                variant: "primary",
                                                text: w.intl.string(w.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        k.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                        (0, c.jsx)(s5, { peaking: m, transitioning: l === R.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var ld = s(256067);
let lu = () =>
        (0, c.jsxs)("div", {
            className: ld.z,
            children: [
                (0, c.jsx)("img", {
                    className: ld.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: w.intl.string(w.t["p8+qtU"]),
                }),
                (0, c.jsx)(ed.D, { variant: "heading-xl/semibold", children: w.intl.string(w.t["p8+qtU"]) }),
                (0, c.jsx)(ee.E, { variant: "text-md/medium", children: w.intl.string(w.t.UEiyvs) }),
            ],
        }),
    lg = [R.G2.HOME, R.G2.ORBS];
function lm(e) {
    let {
            tab: t,
            categories: s,
            transitionToTab: l,
            transitionState: n,
            updateAnalyticsState: a,
            refreshCategories: r,
        } = e,
        i = lh();
    lE(i);
    let o = (0, O.bG)([Y.A], () => Y.A.useReducedMotion),
        [u, g] = d.useState(void 0),
        [m, h] = d.useState(!0),
        E = d.useMemo(
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
        p = d.useCallback(
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
                    d = i ? R.G2.ORBS : R.G2.CATALOG;
                g(s), h(!r), l(d, c);
            },
            [o, l, a],
        ),
        { searchError: C } = (0, J.S)();
    return null != C
        ? (0, c.jsx)(lu, {})
        : null != i
          ? (0, c.jsx)(tb.h, { onRetry: r, errorMessage: i, errorOrigin: tb.A.SHOP_PAGE })
          : t === R.G2.HOME && x
            ? (0, c.jsx)(lc, { tab: K.HOME, transitionState: n, handleTransition: p })
            : t === R.G2.ORBS && x
              ? (0, c.jsx)(lc, { tab: K.ORBS, transitionState: n, handleTransition: p })
              : lg.includes(t)
                ? (0, c.jsx)(s8, { handleTransition: p, tab: t, transitionState: n })
                : (0, c.jsx)(tA, {
                      tab: t,
                      categories: E,
                      initialCategoryId: u,
                      showFilterInitially: m,
                      onUnmount: () => {
                          g(void 0), h(!0);
                      },
                  });
}
let lh = () =>
        (0, O.bG)([j.A, Z.A], () =>
            null != j.A.error
                ? `shop load fetch categories error: ${j.A.error.message}`
                : null != Z.A.claimError
                  ? `shop load claim error: ${Z.A.claimError.message}`
                  : null != Z.A.fetchError
                    ? `shop load fetch purchase error: ${Z.A.fetchError.message}`
                    : void 0,
        ),
    lE = (e) => {
        let t = (0, O.bG)([b.default], () => b.default.getCurrentUser()),
            { noCache: s, includeUnpublished: l } = (0, eG.A)();
        d.useEffect(() => {
            null != e &&
                q.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: s.toString(),
                        includeUnpublished: l.toString(),
                    },
                });
        }, [e, t, s, l]);
    };
var lx = s(956123);
s(323874), s(14289), s(35956);
var lp = s(873263),
    lC = s(766075),
    lf = s(496431),
    lS = s(893489);
let l_ = { pink: "pinkCountdown" },
    lA = d.memo(function (e) {
        let { message: t, onClick: s, countdownEndDate: l, variant: n } = e,
            a = d.useMemo(() => {
                if (null == l) return null;
                let e = l instanceof Date ? l : new Date(l);
                return isNaN(e.getTime()) ? null : e;
            }, [l]),
            r = (0, lf.A)(a ?? 0, 1e3, void 0, null == a);
        if (null != a && Object.values(r).every((e) => 0 === e)) return null;
        let i = null != n ? lS[n] : void 0,
            o = null != n ? lS[l_[n]] : void 0;
        return (0, c.jsx)(e4.D, {
            className: g()(lS.nagBar, i),
            onClick: s,
            "aria-label": w.intl.string(w.t["wjws+K"]),
            children: (0, c.jsxs)("div", {
                className: lS.content,
                children: [
                    (0, c.jsx)(ee.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: lS.message,
                        children: t,
                    }),
                    null != a && (0, c.jsx)(tH.e, { endDate: a, size: "md", className: o, showSeconds: !0 }),
                ],
            }),
        });
    });
var lL = s(870308),
    lb = s(650583);
let lv = (e) => {
        let { children: t, shouldAddEventListener: s, onClose: l } = e,
            n = (0, E.useHasAnyModalOpen)();
        return (
            d.useEffect(() => {
                if (!s || n) return;
                let e = (e) => {
                    e.key === lb.N$.Escape && l();
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
            l = (0, h.bG)([b.default], () => b.default.getCurrentUser());
        (0, L.pE)();
        let n = (0, eq.yB)("CollectiblesShop"),
            { onClose: a } = (function () {
                let { search: e } = (0, lp.zy)(),
                    t = (0, lp.g)(),
                    s = d.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                    l = null != s ? parseInt(s, 10) : null;
                return {
                    onClose: d.useCallback(() => {
                        if (0 === l) {
                            (0, s9.aX)(), (0, lC.openUserSettings)();
                            return;
                        }
                        (0, s9.EL)() ? (0, s9.aX)() : (0, s9.pX)(B.BVt.APP);
                    }, [l]),
                    source: l,
                    ...t,
                };
            })(),
            { currentTab: r, hasFilters: i } = (0, W.v)(),
            o = d.useMemo(() => (t === R.G2.HOME && null != r && i() ? r : t), [t, r, i]),
            { categories: u, refreshCategories: E } = (0, U.Ay)({ logPerf: !0 }, { sessionId: s, tab: o }),
            N = d.useMemo(() => [...u.values()], [u]),
            [T, K] = d.useState(),
            Y = (0, h.bG)([j.A], () => j.A.getCategory(T)?.name),
            [$, q] = d.useState();
        (0, eW.XU)(s);
        let Z = d.useCallback((e, t) => {
                q(e), K(t);
            }, []),
            { selectedTab: J, transitionState: Q, transitionToTab: X } = (0, V.o)(o);
        (0, S.HU)({ location: w.intl.string(w.t.pWG4ze) }),
            ((e, t, s, l, n) => {
                let {
                    analyticsLocations: a,
                    analyticsSource: r,
                    currentTabLocation: i,
                    newestAnalyticsLocation: o,
                } = P(t);
                d.useEffect(() => {
                    if (l !== R.Pf.VISIBLE || o !== i) return;
                    let c = t === R.G2.CATALOG ? n : r;
                    k.default.track(B.HAw.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: a,
                        source: c,
                        page_session_id: e,
                        page_type: t === R.G2.CATALOG ? "full" : t,
                        category: t === R.G2.HOME ? void 0 : s,
                    });
                }, [a, e, t, s, i, l, n, r, o]);
            })(s, J, Y, Q, $),
            ((e, t) => {
                let { analyticsLocations: s } = P(e);
                d.useEffect(() => {
                    null == t ||
                        y.Ay.canUseCollectibles(t) ||
                        k.default.track(B.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: M.e.COLLECTIBLES_SHOP,
                            location_stack: s,
                        });
                }, [s, t]);
            })(J, l);
        let { dismissShopButtonDC: ee } = (0, lL.A)();
        d.useEffect(() => {
            ee();
        }, [ee]),
            d.useEffect(() => {
                (0, p.I)(B.BVt.COLLECTIBLES_SHOP);
            }, []);
        let et = d.useRef(null),
            es = d.useRef(null);
        (0, x.t)(et),
            d.useEffect(() => {
                es.current?.focus();
            }, []),
            (0, eq.gB)();
        let { analyticsLocations: el } = P(J),
            en = (function (e, t) {
                let s = (0, O.bG)([H.A], () => H.A.getUserDiscount(M.tU)),
                    l = (0, O.bG)([D.default], () => D.default.locale),
                    n = F.useConfig({ location: t }).enabled;
                if (d.useMemo(() => null != s && n && e !== R.G2.ORBS, [s, n, e])) {
                    let e =
                        null != s && null != s.expiresAt
                            ? new Date(s.expiresAt).toLocaleDateString(l, { day: "numeric", month: "numeric" })
                            : void 0;
                    return { type: 0, countdownEndDate: s?.expiresAt, message: w.intl.format(w.t.RCo9MF, { date: e }) };
                }
            })(J, "collectibles_shop");
        return (0, c.jsx)(f.f5, {
            value: el,
            children: (0, c.jsx)(v.R9, {
                newValue: { sessionId: s, pageCategory: Y, pageSize: R.l5 },
                children: (0, c.jsx)(I.iM, {
                    tab: J,
                    children: (0, c.jsx)(lv, {
                        onClose: a,
                        shouldAddEventListener: !1,
                        children: (0, c.jsxs)("div", {
                            className: g()(eM.bx, { [eq.jP]: n }),
                            ref: es,
                            tabIndex: -1,
                            children: [
                                (0, c.jsx)(lx.G, { handleTransition: X, selectedTab: J }),
                                null != en &&
                                    en.type === G.COUNTDOWN &&
                                    (0, c.jsx)(lA, {
                                        message: en.message,
                                        onClick: () => X(R.G2.HOME),
                                        variant: "pink",
                                        countdownEndDate: en.countdownEndDate,
                                    }),
                                (0, c.jsx)("div", {
                                    className: g()(eM.td, {
                                        [eM.RK]: Q === R.Pf.VISIBLE,
                                        [eM.in]: Q === R.Pf.IN,
                                        [eM.FD]: Q === R.Pf.OUT,
                                    }),
                                    children: (0, c.jsx)(lm, {
                                        tab: J,
                                        refreshCategories: E,
                                        transitionToTab: X,
                                        transitionState: Q,
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
