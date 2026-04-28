s.r(t), s.d(t, { default: () => lp });
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
    m = s(132500),
    h = s(702841),
    E = s(192308),
    x = s(315710),
    p = s(944791),
    C = s(444927),
    f = s(688810),
    S = s(726249),
    _ = s(475073),
    A = s(611924),
    L = s(594832),
    j = s(287809),
    v = s(440938),
    b = s(590180),
    I = s(161918),
    O = s(17928),
    N = s(793574),
    y = s(954571),
    k = s(927578),
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
                case R.G2.RIVALS:
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
var w = s(985018),
    G = (((l = {})[(l.COUNTDOWN = 0)] = "COUNTDOWN"), l),
    U = s(841702),
    z = s(621653),
    V = s(983545),
    W = s(23161),
    K = (((n = {}).HOME = "home"), (n.CATALOG = "catalog"), (n.ORBS = "orbs"), n),
    Y = s(775602),
    $ = s(287344),
    Z = s(38405),
    q = s(4227),
    X = s(856686),
    J = s(689175),
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
            n = (0, v.uM)(),
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
var er = s(785330),
    ei = s(641150),
    eo = s(534514);
function ec() {
    let { itemTypeFilters: e, searchQuery: t } = (0, W.v)((e) => e),
        { totalCount: s, isFetchingResults: l } = (0, X.S)(),
        n = (0, W.v)((e) => e.hasFilters()),
        a = u.useCallback(() => {
            if (!n) return "";
            if (l) return w.intl.string(w.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return w.intl.format(w.t.KJMJOz, { count: s, search: e });
            }
            return 1 === e.size && e.has(ei.q.AVATAR_DECORATION)
                ? w.intl.format(w.t.s1UzGQ, { count: s })
                : 1 === e.size && e.has(ei.q.NAMEPLATE)
                  ? w.intl.format(w.t.ZWGN9T, { count: s })
                  : 1 === e.size && e.has(ei.q.PROFILE_EFFECT)
                    ? w.intl.format(w.t["v/7apu"], { count: s })
                    : 1 === e.size && e.has(ei.q.BUNDLE)
                      ? w.intl.format(w.t.fZ1rdk, { count: s })
                      : w.intl.format(w.t["/rPvmQ"], { count: s });
        }, [e, s, n, t, l]);
    return (0, c.jsx)(eo.D, { variant: "heading-lg/semibold", children: a() });
}
var eu = s(172218),
    ed = s(932793),
    eg = s(940980),
    em = s(993408),
    eh = s(623373),
    eE = s(660653),
    ex = s(466459);
let ep = () => {
    let e = (0, h.bG)([j.default], () => j.default.getCurrentUser()),
        t = k.Ay.canUseShopDiscounts(e);
    return (0, u.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: s } = (0, ex.o)(q.A, e);
                      if (!(0, em.aw)(e) || (0, em.tt)(e) || s) return !0;
                      if (!(0, eE.uh)(e)) return !1;
                      if ((0, eh.Ab)(e)) return null != (0, eh.CW)({ product: e, hasShopDiscount: t });
                      let l = (0, em.l8)(t),
                          n = (0, em.yt)(e, l);
                      if (null == n || 0 === n.amount) return !0;
                      let a = 0;
                      return (
                          null != e.bundledProducts &&
                              (a = e.bundledProducts.reduce((e, t) => {
                                  let s = (0, em.yt)(t, l);
                                  return e + (s?.amount ?? 0);
                              }, 0)),
                          n.amount < a
                      );
                  }),
        [t],
    );
};
var eC = s(575593);
let ef = (e, t) =>
        e.type === eC.R.BUNDLE && e.items.some((e) => t.includes(e.skuId))
            ? 1
            : (0, eh.B1)(e)
              ? 2 * !!e.variants.every((e) => t.includes(e.skuId))
              : 2 * !!t.includes(e.skuId),
    eS = (e) => {
        let t = (0, h.bG)([q.A], () => q.A.purchases),
            s = (0, u.useMemo)(
                () =>
                    [...t].map((e) => {
                        let [t] = e;
                        return t;
                    }),
                [t],
            );
        return (0, u.useMemo)(() => [...e].sort((e, t) => ef(e, s) - ef(t, s)), [e, s]);
    };
var e_ = s(100057),
    eA = s(653887),
    eL = s(607470),
    ej = s(531685),
    ev = s(203312),
    eb = s(212407),
    eI = s(215688);
function eO(e) {
    let { category: t } = e,
        s = (0, h.bG)([Y.A], () => Y.A.useReducedMotion),
        l = (0, h.bG)([ej.A], () => ej.A.isFocused()),
        { catalogBannerStatic: n, catalogBannerAnimated: a, catalogBannerRive: r } = (0, eb.MV)(t),
        i = u.useRef(null),
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
                          (0, c.jsx)("img", { className: eI.ze, src: n, alt: t.name }),
                          null != a &&
                              !s &&
                              l &&
                              (0, c.jsx)(eL.A, { src: a, className: eI.tr, autoPlay: !0, loop: !0 }),
                      ],
                  }),
            (0, c.jsx)(ev.A, { category: t, className: eI.v0, daysRemainingText: w.t["8gsP5M"] }),
        ],
    });
}
(0, em.$b)(90);
var eN = s(496569),
    ey = s(835090);
let ek = (e) => {
    let { skipPulseAnimation: t = !1 } = e;
    return (0, c.jsx)("div", {
        className: g()(eN.ty, ey.SQ, { [ey.aE]: !t }),
        children: (0, c.jsxs)("div", {
            className: g()(eN.qt, ey.yw),
            children: [(0, c.jsx)("div", { className: ey.Jr }), (0, c.jsx)("div", { className: ey.N9 })],
        }),
    });
};
var eT = s(647685),
    eR = s(10);
let eB = () =>
    (0, c.jsx)("div", {
        className: eR.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, c.jsxs)(
                "div",
                {
                    className: eT.vY,
                    children: [
                        (0, c.jsx)("div", { className: g()(eI.sW, eR.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, c.jsx)(ek, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
var eM = s(491438),
    eP = s(561769),
    eD = s(159439),
    eH = s(998694);
function eF(e) {
    let { category: t } = e,
        s = (0, h.bG)([j.default], () => j.default.getCurrentUser()),
        l = eS(t.products),
        n = ep()(l),
        a = (0, eg.W)("CollectiblesCatalogContent");
    return null == s || 0 === n.length
        ? null
        : (0, c.jsx)("div", {
              className: eT.vY,
              children: n.map((e, t) =>
                  (0, c.jsx)(
                      v.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, c.jsx)(
                              eM.A,
                              {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  prioritizedCurrency: a ? eP.Hi.FIAT : void 0,
                              },
                              e.skuId,
                          ),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function ew(e) {
    let { category: t } = e,
        [s, l] = u.useState(!1),
        n = (0, eu.K)((e) => {
            l(e);
        }, 0.15);
    return (0, c.jsxs)("div", {
        className: eT.EF,
        ref: n,
        children: [(0, c.jsx)(eO, { category: t }), (0, c.jsx)(eF, { category: t })],
    });
}
function eG(e) {
    let { categories: t, setCategoryRef: s, currentPage: l, handlePageChange: n, initialCategoryId: a } = e,
        r = (0, v.uM)(),
        i = (0, eD.U)(),
        o = r?.sessionId ?? "",
        { noCache: d, includeUnpublished: g } = (0, eH.A)(),
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
        (0, e_.z)({
            sessionId: o,
            checkpoint: e_.t.SHOP_MOUNTED,
            tab: R.G2.CATALOG,
            unpublishedCategoriesShown: g,
            cacheDisabled: d,
        });
    }, []),
    u.useEffect(() => {
        i ||
            0 === E.length ||
            (0, e_.z)({
                sessionId: o,
                checkpoint: e_.t.SHOP_RENDERED,
                tab: R.G2.CATALOG,
                unpublishedCategoriesShown: g,
                cacheDisabled: d,
            });
    }, [o, g, d, i, E.length]),
    i)
        ? (0, c.jsx)(eB, {})
        : (0, c.jsxs)("div", {
              className: eT.LZ,
              children: [
                  E.map((e, t) =>
                      (0, c.jsx)(
                          "div",
                          {
                              ref: (t) => s(e.skuId, t),
                              children: (0, c.jsx)(v.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, c.jsx)(ew, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, c.jsx)("div", {
                      className: eT.Ej,
                      children: (0, c.jsx)(ed.m, {
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
var eU = s(177366),
    ez = s(401864),
    eV = s(124987),
    eW = s(691885),
    eK = s(146919),
    eY = s(912853);
let e$ = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: s } = (0, W.v)(),
        l = (0, v.uM)(),
        n = (0, eK.yB)("CollectiblesSortSelect"),
        a = s(),
        r = u.useMemo(() => R.QB.filter((e) => e.sortType !== eV.$.RELEVANCE || a), [a]),
        i = u.useCallback((e) => {
            let { sortType: t, sortDirection: s } = e;
            return t === eV.$.RECENCY
                ? { label: w.intl.string(w.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === eV.$.PRICE
                  ? s === ez.A.ASC
                      ? { label: w.intl.string(w.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: w.intl.string(w.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === eV.$.RELEVANCE
                    ? { label: w.intl.string(w.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: w.intl.string(w.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        o = u.useCallback(
            (e) =>
                ({
                    recent: { sortType: eV.$.RECENCY, sortDirection: ez.A.DESC },
                    "price-asc": { sortType: eV.$.PRICE, sortDirection: ez.A.ASC },
                    "price-desc": { sortType: eV.$.PRICE, sortDirection: ez.A.DESC },
                    popularity: { sortType: eV.$.POPULARITY, sortDirection: ez.A.DESC },
                    relevance: { sortType: eV.$.RELEVANCE, sortDirection: ez.A.DESC },
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
        className: g()(eY.k, { [eK.jP]: n }),
        children: (0, c.jsx)(eW.l, {
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
    eq =
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
    eX = s(990078),
    eJ = s(150934),
    eQ = s(939249),
    e0 = s(947641),
    e1 = s(661531),
    e2 = s(604338),
    e4 = s(785866),
    e5 = s(373846),
    e9 = s(308323),
    e3 = s(608599),
    e7 = s(685761),
    e8 = s(157225),
    e6 = s(413249),
    te = s(510241),
    tt = s(601198),
    ts = s(736653),
    tl = s(270051),
    tn = s(818348),
    ta = s(764915);
function tr() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: s, hasFilters: l } = (0, W.v)(),
        n = l(),
        { enabled: a } = (0, tl.Z)({ location: "Shop" }),
        r = (0, v.uM)(),
        i = u.useCallback(
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
                        children: w.intl.string(w.t.Qk6r1a),
                    }),
                    R._6.map((e) => (0, c.jsx)(ti, { filter: e, trackFilterAction: i }, e)),
                    a &&
                        (0, c.jsx)(eJ.S, {
                            checked: t,
                            onChange: () => {
                                i(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                            },
                            label: w.intl.string(w.t.AHHHgG),
                        }),
                ],
            }),
            (0, c.jsx)(to, { trackFilterAction: i }),
            (0, c.jsx)(td, { trackFilterAction: i }),
            n &&
                (0, c.jsx)(et.$, {
                    variant: "secondary",
                    onClick: () => {
                        i("filter reset"), s();
                    },
                    text: w.intl.string(w.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
let ti = (e) => {
        let { filter: t, trackFilterAction: s } = e,
            l = {
                [ei.q.AVATAR_DECORATION]: w.intl.string(w.t.dRZYNE),
                [ei.q.PROFILE_EFFECT]: w.intl.string(w.t["1cNjtx"]),
                [ei.q.NAMEPLATE]: w.intl.string(w.t.V68Fqz),
                [ei.q.BUNDLE]: w.intl.string(w.t.FYFpps),
            },
            { itemTypeFilters: n, onToggleItemType: a } = (0, W.v)();
        return (0, c.jsx)(eJ.S, {
            checked: n.has(t),
            onChange: () => {
                let e = l[t]?.toLowerCase() != null ? l[t].toLowerCase() : t;
                s(`filter item type ${e} ${!1 === n.has(t) ? "on" : "off"}`), a(t);
            },
            label: l[t] ?? "",
        });
    },
    to = (e) => {
        let { trackFilterAction: t } = e,
            s = u.useMemo(
                () => [
                    { color: "#9B59B6", label: w.intl.string(w.t.kqUD4P), enum: eZ.PURPLE },
                    { color: "#3498DB", label: w.intl.string(w.t.qQTRae), enum: eZ.BLUE },
                    { color: "#2ECC71", label: w.intl.string(w.t["f/Ylk6"]), enum: eZ.GREEN },
                    { color: "#A0522D", label: w.intl.string(w.t["Sd/BMa"]), enum: eZ.BROWN },
                    { color: "#F1C40F", label: w.intl.string(w.t["0fevYz"]), enum: eZ.YELLOW },
                ],
                [],
            ),
            l = u.useMemo(
                () => [
                    { color: "#E67E22", label: w.intl.string(w.t.ZE7weD), enum: eZ.ORANGE },
                    { color: "#E74C3C", label: w.intl.string(w.t.hKJGOM), enum: eZ.RED },
                    { color: "#EC407A", label: w.intl.string(w.t.HvLEGM), enum: eZ.PINK },
                    { color: "#FFFFFF", label: w.intl.string(w.t["CB+lNO"]), enum: eZ.WHITE },
                    { color: "#262626", label: w.intl.string(w.t["dMey+v"]), enum: eZ.BLACK },
                ],
                [],
            );
        return (0, c.jsxs)("div", {
            className: ta.KZ,
            children: [
                (0, c.jsx)(ee.E, {
                    variant: "text-md/semibold",
                    className: ta.hr,
                    children: w.intl.string(w.t.K1xGoG),
                }),
                (0, c.jsx)(tc, { colors: s, trackFilterAction: t }),
                (0, c.jsx)(tc, { colors: l, trackFilterAction: t }),
            ],
        });
    },
    tc = (e) => {
        let { colors: t, trackFilterAction: s } = e,
            { colorFilters: l, onToggleColor: n } = (0, W.v)();
        return (0, c.jsx)("div", {
            className: ta.OW,
            children: t.map((e) => {
                let { color: t, label: a, enum: r } = e;
                return (0, c.jsx)(
                    tu,
                    { color: t, label: a, enum: r, isToggled: l.has(r), onToggleColor: n, trackFilterAction: s },
                    r,
                );
            }),
        });
    },
    tu = (e) => {
        let { color: t, label: s, enum: l, isToggled: n, onToggleColor: a, trackFilterAction: r } = e;
        return (0, c.jsx)(
            eX.m,
            {
                text: s,
                asContainer: !0,
                children: (0, c.jsx)(
                    eQ.D,
                    {
                        className: g()(ta.n1, { [ta.lx]: n }),
                        style: { backgroundColor: t },
                        "aria-label": s,
                        onClick: () => {
                            r(`filter color ${s.toLowerCase()} ${!n ? "on" : "off"}`), a(l);
                        },
                        children:
                            n &&
                            (0, c.jsx)("div", {
                                className: ta.oE,
                                children: (0, c.jsx)(e0.r, { size: "xs", color: e1.A.colors.WHITE }),
                            }),
                    },
                    t,
                ),
            },
            s,
        );
    },
    td = (e) => {
        let { trackFilterAction: t } = e,
            { themeFilters: s, onToggleTheme: l } = (0, W.v)(),
            n = (0, ts.Ay)() === tn.NJ.DARK,
            a = u.useCallback(
                (e) => {
                    if (s.has(e) || n) return "always-white";
                },
                [s, n],
            ),
            r = u.useCallback(
                (e) => (s.has(e) || n ? e1.A.colors.WHITE : e1.A.colors.INTERACTIVE_TEXT_DEFAULT),
                [s, n],
            ),
            i = u.useMemo(
                () => [
                    {
                        name: w.intl.string(w.t.aVBOKh),
                        icon: (0, c.jsx)(e2.E, { size: "xs", color: r(eq.ANIME) }),
                        enum: eq.ANIME,
                    },
                    {
                        name: w.intl.string(w.t["3WoZBc"]),
                        icon: (0, c.jsx)(e4._, { size: "xs", color: r(eq.GAMING) }),
                        enum: eq.GAMING,
                    },
                    {
                        name: w.intl.string(w.t.yuEmLj),
                        icon: (0, c.jsx)(e5.C, { size: "xs", color: r(eq.CUTE_COZY) }),
                        enum: eq.CUTE_COZY,
                    },
                    {
                        name: w.intl.string(w.t.mMvCHo),
                        icon: (0, c.jsx)(e9.L, { size: "xs", color: r(eq.SCI_FI) }),
                        enum: eq.SCI_FI,
                    },
                    {
                        name: w.intl.string(w.t.TlhOQC),
                        icon: (0, c.jsx)(e3.L, { size: "xs", color: r(eq.FOOD_DRINKS) }),
                        enum: eq.FOOD_DRINKS,
                    },
                    {
                        name: w.intl.string(w.t["4IaUIM"]),
                        icon: (0, c.jsx)(e7.f, { size: "xs", color: r(eq.FANTASY) }),
                        enum: eq.FANTASY,
                    },
                    {
                        name: w.intl.string(w.t["w0nSG/"]),
                        icon: (0, c.jsx)(e8.N, { size: "xs", color: r(eq.ANIMALS_PETS) }),
                        enum: eq.ANIMALS_PETS,
                    },
                    {
                        name: w.intl.string(w.t.cJng7v),
                        icon: (0, c.jsx)(e6.p, { size: "xs", color: r(eq.NATURE) }),
                        enum: eq.NATURE,
                    },
                    {
                        name: w.intl.string(w.t["5mUvyM"]),
                        icon: (0, c.jsx)(te.T, { size: "xs", color: r(eq.MOVIES_TV_SHOWS) }),
                        enum: eq.MOVIES_TV_SHOWS,
                    },
                    {
                        name: w.intl.string(w.t.MB9H5Z),
                        icon: (0, c.jsx)(tt.e, { size: "xs", color: r(eq.DARK_MOODY) }),
                        enum: eq.DARK_MOODY,
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
                    children: w.intl.string(w.t.t1Ztrp),
                }),
                (0, c.jsx)("div", {
                    className: ta.Ot,
                    children: i.map((e) => {
                        let { name: n, icon: r, enum: i } = e;
                        return (0, c.jsxs)(
                            eQ.D,
                            {
                                className: g()(ta.w4, { [ta.C7]: s.has(i) }),
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
var tg = s(687971);
function tm() {
    return (0, c.jsxs)("div", {
        className: tg.k,
        children: [
            (0, c.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: w.intl.string(w.t.oezC3x),
                className: tg._,
            }),
            (0, c.jsx)(eo.D, { variant: "heading-xl/semibold", children: w.intl.string(w.t.oezC3x) }),
            (0, c.jsx)(ee.E, { variant: "text-md/medium", children: w.intl.string(w.t["Tc/Ndl"]) }),
        ],
    });
}
var th = s(528096);
let tE = { flattenProductVariants: !0 };
function tx(e) {
    let { isFetchingCategories: t, scrollerRef: s, tab: l } = e,
        n = (0, v.uM)(),
        a = n?.sessionId ?? "",
        { noCache: r, includeUnpublished: i } = (0, eH.A)(),
        o = (0, eg.W)("CollectiblesFilterResults"),
        d = (0, h.bG)([j.default], () => j.default.getCurrentUser()),
        { skus: m, currentPage: E, totalCount: x, isFetchingResults: p } = (0, X.S)(),
        C = (0, h.yK)([b.A], () => b.A.getProductsBySkus(m)),
        f = u.useCallback(() => {
            s?.current?.scrollToTop({ animate: !0 });
        }, [s]),
        S = m?.join("");
    u.useEffect(() => {
        f();
    }, [S, f]);
    let _ = ep(),
        A = u.useMemo(() => _(C), [_, C]);
    u.useEffect(() => {
        t ||
            (0, e_.z)({
                sessionId: a,
                checkpoint: e_.t.SHOP_RENDERED,
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
    return (0, c.jsxs)(eP.v3.Provider, {
        value: tE,
        children: [
            (0, c.jsxs)("div", {
                className: g()({ [th.oE]: M }),
                children: [
                    M && (0, c.jsx)(tm, {}),
                    (0, c.jsxs)("div", {
                        className: g()(th.ZE, { [th.Kp]: k }),
                        ref: L,
                        children: [
                            R && [...Array(N)].map((e, t) => (0, c.jsx)(ek, {}, t)),
                            !R &&
                                A.map((e, t) =>
                                    null == b.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, c.jsx)(
                                              v.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, c.jsx)(
                                                      eM.A,
                                                      {
                                                          skuId: e.skuId,
                                                          hideStaticBundleBackgroundAsset: !0,
                                                          prioritizedCurrency: o ? eP.Hi.FIAT : void 0,
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
                    className: th.Ej,
                    children: (0, c.jsx)("div", {
                        children: (0, c.jsx)(ed.m, {
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
var tp = s(832179);
function tC(e) {
    let { tab: t, categories: s, initialCategoryId: l, showFilterInitially: n = !0, onUnmount: a } = e;
    (0, W.S)();
    let r = u.useRef(null),
        { handleScroll: i } = ea(r, t),
        o = (0, $.f)("Shop Browse"),
        { setCategoryRef: d, handleScrollToCategory: g } = (0, eU.k0)(r.current),
        [m, h] = u.useState(n),
        [E, x] = u.useState(!1);
    return (
        u.useEffect(() => {
            null != l && g(l);
        }, [l, g]),
        u.useEffect(
            () => () => {
                null != a && a();
            },
            [],
        ),
        u.useEffect(() => {
            let e = () => {
                x(window.innerWidth < 1400);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, c.jsx)("div", {
            className: tp.VM,
            children: (0, c.jsxs)("main", {
                className: tp.MY,
                children: [
                    (0, c.jsx)(J.Gt, {
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
                            : (0, c.jsx)(tf, {
                                  isSmallScreen: E,
                                  filterBarOpen: m,
                                  setFilterBarOpen: h,
                                  tab: t,
                                  scrollerRef: r,
                                  categories: s,
                                  setCategoryRef: d,
                                  initialCategoryId: l,
                              }),
                    }),
                    m && !E && (0, c.jsx)("div", { className: tp.yF }),
                    m && !E && (0, c.jsx)(Q.Ip, { className: tp.kT, children: (0, c.jsx)(tr, {}) }),
                ],
            }),
        })
    );
}
let tf = (e) => {
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
        h = (0, v.uM)(),
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
            className: tp.en,
            children: (0, c.jsxs)("div", {
                className: tp.pf,
                children: [
                    (0, c.jsxs)("div", {
                        className: tp.ne,
                        children: [
                            (0, c.jsx)("div", { className: tp.lQ, children: (0, c.jsx)(ec, {}) }),
                            (0, c.jsxs)("div", {
                                className: g()(tp.wR, { [tp.Im]: t }),
                                children: [
                                    (0, c.jsxs)("div", {
                                        className: tp.Ul,
                                        children: [
                                            (0, c.jsx)(ee.E, {
                                                variant: "text-md/semibold",
                                                children: w.intl.string(w.t.uaX705),
                                            }),
                                            (0, c.jsx)(e$, {}),
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
                                    className: tp.Dh,
                                    ref: d,
                                    children: (0, c.jsx)(J.Ch, { className: tp.Qo, children: (0, c.jsx)(tr, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, c.jsx)(v.R9, {
                              newValue: { pageIndex: x },
                              children: (0, c.jsx)(eG, {
                                  categories: r,
                                  setCategoryRef: i,
                                  currentPage: x,
                                  handlePageChange: p,
                                  initialCategoryId: o,
                              }),
                          })
                        : (0, c.jsx)(tx, { scrollerRef: a, tab: n }, n),
                ],
            }),
        })
    );
};
var tS = s(599062),
    t_ = s(651162),
    tA = s(554146),
    tL = s(367727);
let tj = u.createContext(null);
function tv(e) {
    let { blockType: t, children: s } = e,
        l = u.useMemo(() => ({ blockType: t }), [t]);
    return (0, c.jsx)(tj.Provider, { value: l, children: s });
}
var tb = s(755172),
    tI = s(325595),
    tO = s(893998),
    tN = s(508770),
    ty = s(403581),
    tk = s(13875),
    tT = s(437032);
let tR = (e) => {
    let { location: t } = e;
    return (0, tk.Do)(t)
        ? (0, c.jsx)(eX.m, {
              position: "top",
              text: w.intl.string(w.t["L9B+ZZ"]),
              children: (0, c.jsx)("span", {
                  className: tT.h,
                  children: (0, c.jsx)(tN.E, { type: "early_access", variant: "expressive", icon: ty.t }),
              }),
          })
        : null;
};
var tB = s(123924),
    tM = s(607399),
    tP = s(946015),
    tD = s(717421),
    tH = s(854818),
    tF = s(134264);
let tw = u.memo(function (e) {
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
    tU = s(230109),
    tz = s(777666),
    tV = s(597783),
    tW = s(941734);
let tK = (e) => {
        let t,
            { category: s, subblock: l, badgeText: n, enablePreview: a, handleTransition: r } = e;
        null != l && (t = b.A.getCategoryByStoreListingId(l?.categoryStoreListingId)?.skuId);
        let i = t ?? s?.skuId ?? "",
            { handleCardVisibilityChange: o } = (0, tV.Z)(i, "home", "marketing featured block"),
            d = (0, eb.s4)(s, l, a),
            g = u.useRef(null),
            m = l?.bodyText,
            h = (0, v.uM)();
        return (0, c.jsx)(tU.L, {
            innerRef: g,
            onChange: o,
            threshold: 0,
            children: (0, c.jsxs)(eQ.D, {
                className: tW.oT,
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
                    null != n && (0, c.jsx)(tz.Lp, { disableColor: !0, text: n, className: tW.pv }),
                    (0, c.jsx)("div", {
                        className: tW.Gh,
                        children:
                            null != m &&
                            (0, c.jsx)(eo.D, {
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
                                      badgeText: (0, em.HF)(e.unpublishedAt) ? w.intl.string(w.t["h/uBCR"]) : void 0,
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
                            badgeText: (0, em.HF)(l.unpublishedAt) ? w.intl.string(w.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                    null != n &&
                        (0, c.jsx)(tK, {
                            category: n,
                            badgeText: (0, em.HF)(n.unpublishedAt) ? w.intl.string(w.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                ],
            }),
        });
    },
    tZ = (e) => {
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
var tq = s(885574),
    tX = s(975807),
    tJ = s(975571),
    tQ =
        (((i = {}).MOUNTED = "mounted"),
        (i.SORT_OUT = "sort-out"),
        (i.SORT_IN = "sort-in"),
        (i.SHUFFLE_OUT = "shuffle-out"),
        (i.SHUFFLE_IN = "shuffle-in"),
        (i.FINISHED = "finished"),
        i);
s(667532);
var t0 = s(735438),
    t1 = s.n(t0),
    t2 =
        (((o = {}).RECOMMENDED = "recommended"),
        (o.POPULAR = "popular"),
        (o.RECENT = "recent"),
        (o.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (o.RANDOM = "random"),
        o),
    t4 = s(153488),
    t5 = s(155999),
    t9 = s.n(t5);
function t3() {
    let e = (0, O.bG)([b.A], () => b.A.products);
    return (0, u.useCallback)(
        (t) =>
            t9()(
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
let t7 = (e) => {
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
        d = (0, O.bG)([j.default], () => j.default.getCurrentUser()),
        m = k.Ay.canUseShopDiscounts(d),
        h = (0, eg.W)("FeedBlock"),
        E = (0, eK.yB)("FeedBlock"),
        {
            sortType: x,
            setSortType: p,
            sortedItems: C,
            sortOptions: S,
            shuffleProducts: _,
            showRecommendationOption: A,
        } = (function (e) {
            let { sortedSkuIds: t, hasShopDiscount: s, prioritizeUserDiscounts: l, orbsSupportedOnly: n } = e,
                a = (0, O.bG)([t4.A], () => t4.A.hasConsented(B.YAq.PERSONALIZATION)),
                r = u.useMemo(() => t?.[t2.RECOMMENDED] ?? [], [t]),
                i = u.useMemo(() => t?.[t2.POPULAR] ?? [], [t]),
                o = r.length > 0 && a,
                [c, d] = u.useState(o ? t2.RECOMMENDED : t2.POPULAR),
                g = (0, O.bG)([b.A], () => b.A.productsWithVariantsAsGroup),
                m = u.useMemo(() => (0, em.CE)(g), [g]),
                h = (0, O.bG)([H.A], () => H.A.getUserDiscounts()),
                E = t3(),
                x = ep(),
                [p, C] = u.useState([]),
                f = u.useCallback(() => {
                    d(t2.RANDOM), C(t1().shuffle(m));
                }, [m]);
            u.useEffect(() => {
                C(t1().shuffle(m));
            }, [m]);
            let S = eS(
                u.useMemo(() => {
                    let e = [];
                    if (c === t2.RECENT) e = m;
                    else if (c === t2.PRICE_LOW_TO_HIGH) e = (0, em.bf)([...m], s, n);
                    else if (c === t2.RECOMMENDED) {
                        let t = E(r);
                        e = l ? (0, em.Bs)(t, h) : t;
                    } else if (c === t2.POPULAR) {
                        let t = E(i);
                        e = l ? (0, em.Bs)(t, h) : t;
                    } else c === t2.RANDOM && (e = p);
                    return n ? (0, eh.ex)(x(e)) : x(e);
                }, [c, n, x, s, m, E, r, l, h, i, p]),
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
        })({ sortedSkuIds: l, hasShopDiscount: m, prioritizeUserDiscounts: a, orbsSupportedOnly: o }),
        L = (0, O.bG)([Y.A], () => Y.A.useReducedMotion),
        I = (0, O.bG)([ej.A], () => ej.A.isFocused()),
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
        D = (0, v.uM)(),
        F = D?.sessionId ?? "",
        { analyticsLocations: G } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
        U = u.useRef(null),
        z = u.useCallback(
            (e) => {
                P({ isShuffling: !1, onOutroComplete: () => p(e) }),
                    y.default.track(B.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, { page_session_id: F, sort_type: e });
            },
            [P, p, F],
        );
    return null == d
        ? null
        : (0, c.jsx)(f.f5, {
              value: G,
              children: (0, c.jsxs)("div", {
                  className: g()(tW.lD, tW.YB),
                  children: [
                      (0, c.jsxs)("div", {
                          className: tW.$6,
                          children: [
                              (0, c.jsxs)("div", {
                                  className: tW.LD,
                                  children: [
                                      (0, c.jsx)(eo.D, { variant: "heading-lg/semibold", children: s }),
                                      A &&
                                          (0, c.jsx)(eX.m, {
                                              text: w.intl.string(w.t["3taPdj"]),
                                              position: "top",
                                              "aria-label": w.intl.string(w.t["3taPdj"]),
                                              children: (0, c.jsx)(eQ.D, {
                                                  onClick: () =>
                                                      (0, tX.A)(tJ.A.getArticleURL(B.MVz.DATA_USED_FOR_RECOMMENDED)),
                                                  className: tW.sT,
                                                  children: (0, c.jsx)(tq.m, { size: "sm" }),
                                              }),
                                          }),
                                  ],
                              }),
                              (0, c.jsxs)("div", {
                                  className: g()(tW.IE, { [eK.jP]: E }),
                                  children: [
                                      (0, c.jsx)(ee.E, {
                                          variant: "text-md/medium",
                                          children: w.intl.string(w.t.uaX705),
                                      }),
                                      (0, c.jsx)("div", {
                                          className: g()(i, tW.pI),
                                          children: (0, c.jsx)(eW.l, {
                                              label: w.intl.string(w.t.uaX705),
                                              hideLabel: !0,
                                              options: S,
                                              onSelectionChange: z,
                                              formatOption: (e) => {
                                                  let { label: t, value: s } = e;
                                                  return { id: s, label: t, value: s };
                                              },
                                              value: x,
                                              selectionMode: "single",
                                              fullWidth: !0,
                                          }),
                                      }),
                                      (0, c.jsx)("div", {
                                          className: i,
                                          children: (0, c.jsx)(et.$, {
                                              variant: "secondary",
                                              text: w.intl.string(w.t.X3tnc4),
                                              buttonRef: U,
                                              onClick: () => {
                                                  P({ isShuffling: !0, onOutroComplete: _, returnRef: U }),
                                                      y.default.track(B.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                          page_session_id: F,
                                                      });
                                              },
                                              disabled: M !== tQ.MOUNTED && M !== tQ.FINISHED,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, c.jsx)("div", {
                          className: tW.hm,
                          children: t
                              ? (0, c.jsx)(c.Fragment, {
                                    children: [...Array(12)].map((e, t) => (0, c.jsx)(ek, {}, t + 1)),
                                })
                              : C.slice(0, n).map((e, t) => {
                                    let s,
                                        l = b.A.getCategoryForProduct(e.skuId);
                                    if (null == e || null == l) return null;
                                    if (T)
                                        if (M === tQ.SHUFFLE_OUT)
                                            return (0, c.jsx)(
                                                "div",
                                                {
                                                    className: tW.Z2,
                                                    children: (0, c.jsx)(ek, { skipPulseAnimation: !0 }),
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
                                                children: (0, c.jsx)(eM.A, {
                                                    skuId: e.skuId,
                                                    hideStaticBundleBackgroundAsset: !0,
                                                    prioritizedCurrency:
                                                        r === R.G2.ORBS ? eP.Hi.ORBS : h ? eP.Hi.FIAT : void 0,
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
var t8 = s(951707),
    t6 = s(622697);
let se = (e) => {
    let { block: t, handleTransition: s, tab: l } = e,
        n = (0, O.bG)([j.default], () => j.default.getCurrentUser()),
        a = (0, eg.W)("FramesProductShelfBlock"),
        r = t3(),
        i = eS(u.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r])),
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
                  className: g()(t6.kL, tW.YB),
                  children: [
                      null != t.backgroundImage &&
                          (0, c.jsx)("img", { className: t6.iL, src: t.backgroundImage, alt: "", "aria-hidden": !0 }),
                      (0, c.jsxs)("div", {
                          className: t6.Qs,
                          children: [
                              (0, c.jsxs)("div", {
                                  className: t6.wx,
                                  children: [
                                      (0, c.jsxs)("div", {
                                          className: t6.Jb,
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
                                              onClick: d,
                                          }),
                                  ],
                              }),
                              (0, c.jsx)(t8.A, {
                                  gap: "xl",
                                  edgeFade: "sm",
                                  children: i.map((e, s) =>
                                      null == b.A.getCategoryForProduct(e.skuId)
                                          ? null
                                          : (0, c.jsx)(
                                                v.R9,
                                                {
                                                    newValue: {
                                                        tilePosition: s,
                                                        pageSection: t.title,
                                                        categoryPosition: 1,
                                                    },
                                                    children: (0, c.jsx)(eM.A, {
                                                        skuId: e.skuId,
                                                        prioritizedCurrency:
                                                            l === R.G2.ORBS ? eP.Hi.ORBS : a ? eP.Hi.FIAT : void 0,
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
var st = s(696292),
    ss = s(545986),
    sl = s(318346);
let sn = (e) => {
    let { clientX: t, clientY: s, currentTarget: l } = e;
    l.style.pointerEvents = "none";
    let n = document.elementFromPoint(t, s);
    return (l.style.pointerEvents = "auto"), { elementBelow: n, button: n?.closest("button") ?? null };
};
var sa = s(929955);
let sr = (e) => {
        let { bannerStatic: t, bannerAnimated: s, bannerRive: l, isResponsive: n = !1, eventTargetRef: a } = e,
            r = (0, O.bG)([Y.A], () => Y.A.useReducedMotion),
            i = (0, O.bG)([ej.A], () => ej.A.isFocused()),
            o = null != s && !r && i;
        return null != l
            ? (0, c.jsx)(eA._, { src: l, fit: "fit-width", eventTargetRef: a })
            : o
              ? (0, c.jsx)(eL.A, { className: g()({ [sa.no]: n }, sa.BW, sa.ud), src: s, autoPlay: !0, loop: !0 })
              : (0, c.jsx)("div", {
                    className: g()({ [sa.no]: n }, sa.BW, sa._e),
                    style: { backgroundImage: `url(${t})` },
                });
    },
    si = (e) => (0, c.jsx)("div", { className: tW.hm, children: (0, c.jsx)(sc, { ...e }) }),
    so = (e) => (0, c.jsx)(t8.A, { gap: "xl", children: (0, c.jsx)(sc, { ...e }) }),
    sc = (e) => {
        let { isLoading: t, products: s, tab: l, totalCards: n } = e,
            a = (0, eg.W)("HeroBlockCards");
        if (t) return (0, c.jsx)(c.Fragment, { children: [...Array(n ?? 4)].map((e, t) => (0, c.jsx)(ek, {}, t)) });
        let r = null != n ? s.slice(0, n) : s;
        return (0, c.jsx)(eP.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: r.map((e, t) => {
                let s = b.A.getCategoryForProduct(e.skuId);
                return null == e || null == s
                    ? null
                    : (0, c.jsx)(
                          v.R9,
                          {
                              newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                              children: (0, c.jsx)(
                                  eM.A,
                                  {
                                      skuId: e?.skuId,
                                      prioritizedCurrency: l === R.G2.ORBS ? eP.Hi.ORBS : a ? eP.Hi.FIAT : void 0,
                                  },
                                  e.skuId,
                              ),
                          },
                          e.skuId,
                      );
            }),
        });
    },
    su = (e) => {
        let t,
            s,
            { heroBlockRecord: l, layout: n, tab: a, isBlockLoading: r = !1 } = e,
            { products: i } =
                ((t = t3()),
                (s = u.useMemo(() => (r ? [] : t(l.rankedSkuIds)), [r, t, l.rankedSkuIds])),
                { products: eS(ep()(s)) }),
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
                return (0, c.jsx)(si, { heroBlockRecord: l, isLoading: d, products: i, tab: a });
            case "hscroll":
                return (0, c.jsx)(so, { heroBlockRecord: l, isLoading: d, products: i, tab: a });
        }
    },
    sd = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: t_.g.HERO,
        categoryStoreListingId: "",
    },
    sg = (e) => {
        let {
                isLoading: t,
                handleTransition: s,
                category: l,
                heroBlock: n,
                tab: a,
                onVisibilityChange: r,
                badge: i,
            } = e,
            o = (0, eu.K)(
                (e) => {
                    r?.(e);
                },
                0.1,
                null != r,
            ),
            d = u.useRef(null),
            m = (0, eK.yB)("HeroBlock"),
            h = (0, O.bG)([j.default], () => j.default.getCurrentUser()),
            E = (0, v.uM)(),
            { analyticsLocations: x } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_HERO),
            p = u.useMemo(
                () =>
                    null != n
                        ? n
                        : null == l
                          ? sd
                          : {
                                rankedSkuIds: l.heroRanking ?? [],
                                name: l.name,
                                unpublishedAt: l.unpublishedAt,
                                categorySkuId: l.skuId,
                                summary: l.summary,
                                type: t_.g.HERO,
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
            } = (0, eb.Kk)(p),
            I = C?.responsive ?? !1,
            k = C?.backgroundStyle,
            T = null != b,
            M = a === R.G2.ORBS,
            P = null != l && l.isOrbsExclusive,
            D = M ? w.intl.string(w.t["1CdL8d"]) : w.intl.string(w.t.xYKa1T),
            H = () => {
                M
                    ? ((0, sl.Y)({
                          pageType: B.liQ.SHOP_ORBS_TAB,
                          sectionType: B.JJy.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: B.ZSU.CTA_TO_QUEST_HOME,
                      }),
                      (0, ss.navigateToQuestHome)({ fromContent: st.u.ORBS_SHOP_HERO_CTA }))
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
        return null != h && (t || p !== sd)
            ? (0, c.jsx)(f.f5, {
                  value: x,
                  children: (0, c.jsxs)("div", {
                      ref: o,
                      className: tW.os,
                      children: [
                          T
                              ? ((e) => {
                                    let { isCustomCursorEnabled: t, className: s, riveEventTargetRef: l } = e,
                                        n = (e) => {
                                            let { button: s } = sn(e),
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
                                            let { button: t } = sn(e);
                                            null != t && t.click();
                                        },
                                    });
                                })({ isCustomCursorEnabled: m, className: tW.Xt, riveEventTargetRef: d })
                              : null,
                          (0, c.jsx)("div", {
                              className: g()(tW.vK, { [tW.cN]: T, [tW.no]: I }),
                              style: null != k ? { background: k } : void 0,
                              children:
                                  null != A &&
                                  (0, c.jsx)(sr, {
                                      bannerStatic: A,
                                      bannerAnimated: L,
                                      bannerRive: b,
                                      isResponsive: I,
                                      eventTargetRef: d,
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
                                                              (0, em.HF)(p.unpublishedAt) &&
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
                                                                          (0, c.jsx)(eo.D, {
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
                                  (0, c.jsx)(su, {
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
var sm = s(349288),
    sh = s(537947);
let sE = (e) => {
    let { immersiveBannerBlock: t, onVisibilityChange: s } = e,
        l = (0, eu.K)(
            (e) => {
                s?.(e);
            },
            0.33,
            null != s,
        ),
        { bannerUrl: n, bannerAnimatedUrl: a } = (0, eb.qY)(t),
        r = null != t.textColor ? { color: t.textColor } : void 0,
        i = null != t.body && "" !== t.body,
        o = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, c.jsxs)("div", {
        ref: l,
        className: sh.BX,
        children: [
            (0, c.jsx)("div", {
                className: sh.vK,
                children: null != n && (0, c.jsx)(sr, { bannerStatic: n, bannerAnimated: a }),
            }),
            (0, c.jsx)("div", {
                className: sh.HQ,
                children: (0, c.jsxs)("div", {
                    className: sh.Yn,
                    children: [
                        null != t.endTime ? (0, c.jsx)(tH.e, { endDate: t.endTime, size: "lg" }) : null,
                        (0, c.jsx)(eo.D, {
                            variant: "heading-xxl/bold",
                            className: sh.DD,
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
                                          (0, c.jsx)(sm.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: sh.CU,
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
var sx = s(189213),
    sp = s(290136),
    sC = s(478016),
    sf = s(825484),
    sS = s(713517),
    s_ = s(914410),
    sA = s(693477),
    sL = s(61750);
function sj(e, t) {
    let s = u.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        l = (0, O.bG)([q.A], () => q.A.getPurchases(s));
    return {
        readyToClaim: u.useMemo(() => l.length === s.length, [l, s]),
        collectibleProductSkuIds: s,
        collectedSkuIds: l,
    };
}
var sv = s(498924);
let sb = u.memo(function (e) {
        let { category: t, rewardSkuId: s } = e,
            { handleCardVisibilityChange: l } = (0, tV.Z)(s),
            n = u.useRef(null),
            { isHoveringOrFocusing: a } = (0, sS.A)(n),
            { readyToClaim: r, collectibleProductSkuIds: i, collectedSkuIds: o } = sj(t, s),
            d = (0, O.bG)([q.A], () => q.A.isClaiming === s);
        return (0, c.jsx)(tU.L, {
            onChange: l,
            threshold: 0,
            innerRef: n,
            children: (0, c.jsx)("div", {
                ref: n,
                className: g()(eN.ty, sv.Q3, { [eN.yo]: a }),
                "aria-label": w.intl.formatToPlainString(w.t.Ez6aHE, { category: t.name }),
                children: (0, c.jsxs)("div", {
                    className: eN.qt,
                    children: [
                        (0, c.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: sv.L8,
                        }),
                        (0, c.jsx)("div", {
                            className: eN.N1,
                            children: (0, c.jsx)(tz.Lp, {
                                text: w.intl.string(w.t.rykAJ9),
                                disableColor: !0,
                                className: sv.HZ,
                            }),
                        }),
                        (0, c.jsxs)("div", {
                            className: eN.xQ,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: sv.xE,
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: sv.cs,
                                            children: [
                                                (0, c.jsx)(eo.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: eN.tZ,
                                                    children: w.intl.string(w.t["0mDmg/"]),
                                                }),
                                                (0, c.jsx)(eX.m, {
                                                    text: r
                                                        ? w.intl.string(w.t.cKH3tk)
                                                        : w.intl.formatToPlainString(w.t["8aMDPc"], {
                                                              totalCount: i.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, c.jsx)("span", {
                                                        className: sv.ZB,
                                                        children: (0, c.jsx)(sp.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)("div", {
                                            className: eN.oh,
                                            "aria-hidden": !0,
                                            children: (0, c.jsxs)("div", {
                                                className: sv.L$,
                                                children: [
                                                    (0, c.jsx)(s_.Ay, {
                                                        variant: s_.qP.BLUE,
                                                        progress: o.length,
                                                        maximum: i.length,
                                                    }),
                                                    (0, c.jsxs)("div", {
                                                        className: g()(sv.__, { [sv.gF]: r }),
                                                        children: [
                                                            r
                                                                ? (0, c.jsx)(sC.U, {
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
                                    className: eN.Vs,
                                    children: (0, c.jsx)(sf.e, {
                                        wrap: !1,
                                        className: eN.Ld,
                                        fullWidth: !0,
                                        children: (0, c.jsx)(et.$, {
                                            variant: "primary",
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    r &&
                                                        (0, sA.BX)(t.skuId, s)
                                                            .then(() => {
                                                                let e = b.A.getProduct(s);
                                                                null != e &&
                                                                    (0, sL.A)({
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
                                                                        (0, c.jsx)(sx.Modal, {
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
    sI = (e) => {
        let t,
            s,
            { isBlockLoading: l = !1, heroBlock: n, tab: a } = e,
            r = (0, eg.W)("RewardHeroBlockCards"),
            i = u.useMemo(() => b.A.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]),
            o = (0, O.bG)([q.A], () => q.A.getPurchase(n.rewardSkuId)),
            { products: d } =
                ((t = t3()),
                (s = u.useMemo(
                    () => (l ? [] : t(n.rankedSkuIds).filter((e) => e.skuId !== n.rewardSkuId || null != o)),
                    [l, t, n.rankedSkuIds, o, n.rewardSkuId],
                )),
                { products: eS(ep()(s)) }),
            g = u.useMemo(
                () =>
                    !l &&
                    0 !== n.rankedSkuIds.length &&
                    !(d.length > 0) &&
                    n.rankedSkuIds.every((e) => b.A.getProduct(e)?.variantGroupStoreListingId != null),
                [l, n.rankedSkuIds, d.length],
            ),
            m = l || g,
            { readyToClaim: h } = sj(i, n.rewardSkuId),
            E = null == o && null != n.rewardSkuId && null != i;
        return (0, c.jsx)(t8.A, {
            gap: "xl",
            children: m
                ? (0, c.jsx)(c.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, c.jsx)(ek, {}, t)),
                  })
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          E &&
                              h &&
                              (0, c.jsx)(
                                  v.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, c.jsx)(sb, { category: i, rewardSkuId: n.rewardSkuId }),
                                  },
                                  n.rewardSkuId,
                              ),
                          d.map((e, t) => {
                              let s = b.A.getCategoryForProduct(e.skuId);
                              return null == e || null == s
                                  ? null
                                  : (0, c.jsx)(
                                        v.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, c.jsx)(
                                                eM.A,
                                                {
                                                    skuId: e?.skuId,
                                                    prioritizedCurrency:
                                                        a === R.G2.ORBS ? eP.Hi.ORBS : r ? eP.Hi.FIAT : void 0,
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
(0, em.$b)(90);
let sO = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: t_.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    sN = (e) => {
        let { isLoading: t = !1, heroBlock: s, tab: l, onVisibilityChange: n } = e,
            a = (0, eu.K)(
                (e) => {
                    n?.(e);
                },
                0.1,
                null != n,
            ),
            r = (0, O.bG)([j.default], () => j.default.getCurrentUser()),
            { analyticsLocations: i } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: o,
                logoDisplayConfig: u,
                heroLogo: d,
                heroBannerStatic: m,
                heroBannerAnimated: h,
            } = (0, eb.Kk)(s),
            E = o?.responsive ?? !1,
            x = o?.backgroundStyle;
        return null != r && (t || s !== sO)
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
                                  null != m && (0, c.jsx)(sr, { bannerStatic: m, bannerAnimated: h, isResponsive: E }),
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
                                                        null != d &&
                                                            (0, c.jsx)("img", {
                                                                className: tW.rm,
                                                                src: d,
                                                                alt: s.name,
                                                                style: u?.toDesktopStyles(),
                                                            }),
                                                        null != s.title &&
                                                            (0, c.jsx)(eo.D, {
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
                                  (0, c.jsx)(sI, { isBlockLoading: t, heroBlock: s, tab: l }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    },
    sy = (e) => {
        let { shelf: t, handleTransition: s, tab: l } = e,
            n = (0, O.bG)([j.default], () => j.default.getCurrentUser()),
            a = (0, eg.W)("ShelfBlock"),
            r = (0, O.bG)([b.A], () => b.A.getCategory(t.categorySkuId)),
            i = t3(),
            o = eS(u.useMemo(() => i(t.rankedSkuIds), [t.rankedSkuIds, i])),
            { analyticsLocations: d } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_SHELF);
        return null == n
            ? null
            : (0, c.jsx)(f.f5, {
                  value: d,
                  children: (0, c.jsxs)("div", {
                      className: g()(tW.Vp, tW.YB),
                      children: [
                          (0, c.jsxs)("div", {
                              className: tW.$6,
                              children: [
                                  (0, c.jsx)(eo.D, { variant: "heading-lg/semibold", children: t.name }),
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
                          (0, c.jsx)(t8.A, {
                              gap: "xl",
                              children: (0, c.jsx)(c.Fragment, {
                                  children: o.map((e, s) => {
                                      if (null == b.A.getCategoryForProduct(e.skuId) || null == e) return null;
                                      let n = e.skuId;
                                      return (0, c.jsx)(
                                          v.R9,
                                          {
                                              newValue: { tilePosition: s, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, c.jsx)(
                                                  eM.A,
                                                  {
                                                      skuId: n,
                                                      prioritizedCurrency:
                                                          l === R.G2.ORBS ? eP.Hi.ORBS : a ? eP.Hi.FIAT : void 0,
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
var sk = s(815021),
    sT = s(509434),
    sR = s(871123),
    sB = s(733391),
    sM = s(439303),
    sP = s(832163),
    sD = s(44724),
    sH = s(317560),
    sF = s(183802),
    sw = s(171491),
    sG = s(67480),
    sU = s(371794),
    sz = s(74564);
let sV = (e) => {
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
                analyticsSection: g,
                analyticsTileType: m,
                analyticsImpressionType: h,
                backgroundGradient: E,
            } = e,
            { guildId: x } = (0, sR.nG)(i);
        u.useEffect(() => {
            null != x && (0, sB.Rw)(x);
        }, [x]);
        let p = (0, O.bG)([sP.A], () => {
                let e = sP.A.getStorefrontMetadata(i);
                return e?.logoAssetId != null ? (0, sU.YE)(i, e.logoAssetId, 75) : void 0;
            }, [i]),
            C =
                ((t = u.useRef([])),
                u.useEffect(() => {
                    if (null != x) for (let e of a) (0, sB.qf)(x, e);
                }, [a, x]),
                (s = (0, O.bG)(
                    [sG.A],
                    () => !a.some((e) => sG.A.isFetching(e)) && a.some((e) => sG.A.didFetchingSkuFail(e)),
                    [a],
                )),
                u.useEffect(() => {
                    s && null != x && (0, sB.Rw)(x);
                }, [s, x]),
                (l = (0, O.yK)([sG.A, sP.A], () => {
                    if (a.some((e) => sG.A.isFetching(e))) return t.current;
                    let e = a.filter((e) => null != sG.A.get(e));
                    if (e.length >= a.length) return a;
                    if (null == x) return e;
                    let s = sP.A.getStorefrontData(x);
                    if (null == s || "loading" === s.state) return e;
                    let l = new Set(a);
                    return [
                        ...e,
                        ...(null != s.storefront
                            ? (0, sR.jd)(s.storefront).filter((e) => !l.has(e) && null != sG.A.get(e))
                            : []),
                    ].slice(0, a.length);
                }, [a, x])),
                u.useEffect(() => {
                    l.length > 0 && (t.current = l);
                }, [l]),
                l);
        (0, sw.j)({ skuIds: C, location: "GamePromotionBanner" });
        let S = (0, v.uM)(),
            { analyticsLocations: _ } = (0, f.Ay)(),
            A = u.useRef(null),
            L = u.useRef(!1),
            j = u.useRef(null),
            b = u.useMemo(() => ({ pageSection: g }), [g]),
            I = u.useCallback(
                (e, t) => {
                    y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: S?.sessionId,
                        page_type: r,
                        page_category: S?.pageCategory,
                        page_section: S?.pageSection,
                        tile_type: m,
                        cta_name: e,
                        ...(null != t ? { sku_id: t } : void 0),
                    });
                },
                [S?.sessionId, S?.pageCategory, S?.pageSection, r, m],
            ),
            N = u.useCallback(() => {
                null != x && (0, sD.X)({ guildId: x });
            }, [x]),
            k = u.useCallback(() => {
                null != x && (I("go_to_game_shop"), (0, sD.default)({ guildId: x }));
            }, [I, x]),
            T = u.useCallback(
                (e, t) => {
                    let { skuId: s, applicationId: l } = t;
                    I("card_click", s),
                        (0, sH.R)({ skuId: s, applicationId: l, isStorefront: !1, analyticsLocations: _ });
                },
                [I, _],
            ),
            R = u.useCallback(() => {
                I("dismiss"), n();
            }, [I, n]),
            M = u.useCallback(
                (e) => {
                    !L.current &&
                        (e && null === j.current
                            ? (j.current = setTimeout(() => {
                                  (L.current = !0),
                                      (j.current = null),
                                      y.default.track(B.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                          collectibles_shop_session_id: S?.sessionId,
                                          page_type: r,
                                          page_category: S?.pageCategory,
                                          page_section: S?.pageSection,
                                          type: h,
                                      });
                              }, 1e3))
                            : e || null === j.current || (clearTimeout(j.current), (j.current = null)));
                },
                [S?.sessionId, S?.pageCategory, S?.pageSection, r, h],
            );
        return (u.useEffect(
            () => () => {
                null !== j.current && (clearTimeout(j.current), (j.current = null));
            },
            [],
        ),
        0 === C.length)
            ? null
            : (0, c.jsx)(tU.L, {
                  innerRef: A,
                  onChange: M,
                  threshold: 0,
                  children: (0, c.jsx)("div", {
                      ref: A,
                      className: sz.YB,
                      children: (0, c.jsxs)("div", {
                          className: sz.kL,
                          children: [
                              null != E && (0, c.jsx)("div", { className: sz.D7, style: { background: E } }),
                              (0, c.jsx)("div", {
                                  className: sz.b,
                                  children: (0, c.jsx)(sk.J, { size: "sm", variant: "icon-only", onClick: R }),
                              }),
                              null != p && (0, c.jsx)("img", { className: sz.wm, src: p, alt: "" }),
                              (0, c.jsx)("div", {
                                  className: sz.xf,
                                  children: (0, c.jsxs)("div", {
                                      className: sz.B5,
                                      children: [
                                          (0, c.jsx)(eo.D, {
                                              variant: "heading-lg/semibold",
                                              color: "always-white",
                                              children: o,
                                          }),
                                          (0, c.jsx)(et.$, {
                                              variant: "overlay-primary",
                                              size: "sm",
                                              icon: sT.I,
                                              iconPosition: "end",
                                              text: d,
                                              onMouseDown: N,
                                              onClick: k,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, c.jsx)(sM.E9, {
                                  newValue: b,
                                  children: (0, c.jsx)("div", {
                                      className: sz.$2,
                                      children: C.map((e, t) =>
                                          (0, c.jsx)(sF.A, { skuId: e, positionInSection: t, onClick: T }, e),
                                      ),
                                  }),
                              }),
                          ],
                      }),
                  }),
              });
    },
    sW = (e) => {
        let {
            onDismiss: t,
            applicationId: s,
            headerText: l,
            gradientColors: n,
            gradientAngle: a,
            skuIds: r,
            tab: i,
        } = e;
        return (0, c.jsx)(sV, {
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
var sK = s(770178),
    sY = s(929283),
    s$ = s(275483);
let sZ = [
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
    sq = (e) => {
        let { config: t, baseLeft: s, transitioning: l } = e,
            n = window.innerHeight,
            a = b.A.getProduct(t.skuId),
            r = a?.items[0],
            i = a?.type,
            o = s + t.horizontalJitter;
        return (0, c.jsx)("div", {
            className: s$.LY,
            style: {
                top: l ? -n - 384 : t.top,
                left: l ? o + t.transitionOffsetLeft : o,
                transform: `rotate(${t.rotation}deg)`,
                height: 160,
                width: 160,
                transitionDelay: t.transitionDelay,
                transitionDuration: t.transitionDuration,
            },
            children: null != r && i === eC.R.AVATAR_DECORATION && (0, c.jsx)(sY.i, { item: r }),
        });
    },
    sX = (e) => {
        let { peaking: t, transitioning: s, parentWidth: l } = e,
            [n, a] = u.useState(!1),
            [r, i] = u.useState([]),
            [o] = u.useState(() =>
                [...sZ]
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
                className: g()(s$.rA, { [s$.Kb]: t, [s$.pp]: n }),
                children: r.map((e, t) => {
                    let { config: l, baseLeft: n } = e;
                    return (0, c.jsx)(sq, { config: l, baseLeft: n, transitioning: s }, l.skuId + t);
                }),
            })
        );
    },
    sJ = (e) => {
        let { peaking: t, transitioning: s } = e,
            l = u.useRef(null),
            [n, a] = u.useState(0),
            r = u.useCallback(() => {
                null != l.current && a(l.current.offsetWidth);
            }, []);
        return (
            (0, sK.g)(l, r),
            (0, c.jsx)("div", {
                ref: l,
                className: s$.eL,
                children: (0, c.jsx)(sX, { peaking: t, transitioning: s, parentWidth: n }),
            })
        );
    };
var sQ = s(43990),
    s0 = s(976860),
    s1 = s(49999);
let s2 = (e) => {
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
            { handleCardVisibilityChange: h } = (0, tV.Z)(m, "home", "marketing wide banner"),
            E = (0, v.uM)(),
            { bannerURL: x } = (0, eb.w$)(t),
            p = s === R.G2.ORBS,
            C = null != t.ctaRoute && "" !== t.ctaRoute,
            f = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || C),
            S = null != t.logoURL && "" !== t.logoURL,
            _ = u.useCallback(() => {
                if ((d(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, tL.$l)(tA.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: s1.i.USER_DISMISS });
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
                                (0, sD.default)({ guildId: e, pageIndex: s });
                            }
                        } else (0, s0.pX)(e);
                    }
                },
                [t.ctaRoute, A],
            );
        if (null == x || o) return null;
        let j = g()(tW.nM, tW.Tq, tW.TS, tW.YB, { [tW._1]: p, [tW.vb]: C }),
            I = (0, c.jsxs)(c.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, c.jsx)("div", {
                            className: tW.Mh,
                            children: (0, c.jsx)(sk.J, {
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
                                (0, c.jsx)(eo.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: p ? tW.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, c.jsx)(ee.E, {
                                    style: { color: "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: p ? "text-md/medium" : "text-sm/medium",
                                    children: p
                                        ? w.intl.format(w.t.SFFP7K, {
                                              helpdeskArticle: tJ.A.getArticleURL(B.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
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
                                            }),
                                            S && (0, c.jsx)("img", { src: t.logoURL, alt: "", className: tW.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, c.jsx)(sQ.N, {
            theme: p ? void 0 : tn.NJ.DARK,
            children: (e) =>
                (0, c.jsx)(tU.L, {
                    innerRef: n,
                    onChange: h,
                    threshold: 0,
                    children: C
                        ? (0, c.jsx)(eQ.D, { innerRef: n, onClick: () => L(null), className: g()(e, j), children: I })
                        : (0, c.jsx)("div", { ref: n, className: g()(e, j), children: I }),
                }),
        });
    },
    s4 = (e) => {
        let { handleTransition: t, numVisibleItems: s, isFetchingCategories: l, tab: n } = e,
            { noCache: a, includeUnpublished: r } = (0, eH.A)(),
            [i, o] = u.useState(!1),
            d = (0, v.uM)(),
            m = d?.sessionId ?? "";
        u.useEffect(() => {
            (0, e_.z)({
                sessionId: m,
                checkpoint: e_.t.SHOP_MOUNTED,
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
            } = (0, tb.y)(n, { noCache: a, includeUnpublished: r, logPerf: !0 }, { sessionId: m, tab: n }),
            C = u.useCallback(() => {
                p();
            }, [p]),
            f = u.useMemo(() => x.some((e) => e instanceof tI.p), [x])
                ? (0, c.jsx)(tR, { location: "CollectiblesShop" })
                : null;
        return (u.useEffect(() => {
            null != E ||
                h ||
                0 === x.length ||
                (0, e_.z)({
                    sessionId: m,
                    checkpoint: e_.t.SHOP_RENDERED,
                    tab: n,
                    unpublishedCategoriesShown: r,
                    cacheDisabled: a,
                });
        }, [E, h, x.length, r, a, m, n]),
        null != E)
            ? (0, c.jsx)(tS.h, { onRetry: C, errorOrigin: tS.A.SHOP_PAGE, errorMessage: E.message })
            : h || 0 === x.length
              ? (0, c.jsxs)("div", {
                    className: g()(tW.g4, tW.Of),
                    children: [
                        (0, c.jsx)(sg, { isLoading: h, handleTransition: t, tab: n }),
                        (0, c.jsx)(tZ, { isLoading: h, handleTransition: t, categories: [] }),
                        (0, c.jsx)(t7, {
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
                                case t_.g.HERO:
                                    u = (0, c.jsx)(
                                        sg,
                                        { isLoading: h, handleTransition: t, heroBlock: e, tab: n, badge: f },
                                        r,
                                    );
                                    break;
                                case t_.g.FEATURED:
                                    u = (0, c.jsx)(
                                        tZ,
                                        { isLoading: h, handleTransition: t, featuredBlockRecord: e },
                                        r,
                                    );
                                    break;
                                case t_.g.FEED:
                                    let m = e.sortedSkuIds;
                                    u = (0, c.jsx)(
                                        t7,
                                        {
                                            title:
                                                n === R.G2.ORBS ? w.intl.string(w.t.dFgeuZ) : w.intl.string(w.t.NSv5KV),
                                            isLoading: l,
                                            numVisibleItems: s,
                                            sortedSkuIds: m,
                                            buttonContainerClassName: a?.type === t_.g.IMMERSIVE_BANNER ? tW.w : void 0,
                                            prioritizeUserDiscounts: n === R.G2.HOME,
                                            tab: n,
                                            orbsSupportedOnly: n === R.G2.ORBS,
                                        },
                                        r,
                                    );
                                    break;
                                case t_.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: s } = (0, tL.En)(tA.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (s) return null;
                                    }
                                    u = (0, c.jsx)(s2, { wideBannerBlock: e, tab: n }, r);
                                    break;
                                case t_.g.FRAMES_BANNER:
                                    u = (0, c.jsx)(
                                        s2,
                                        {
                                            wideBannerBlock: tO.y.fromServer({
                                                type: t_.g.WIDE_BANNER,
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
                                case t_.g.FRAMES_PRODUCT_SHELF:
                                    u = (0, c.jsx)(se, { block: e, handleTransition: t, tab: n }, r);
                                    break;
                                case t_.g.SHELF:
                                    u = (0, c.jsx)(sy, { handleTransition: t, shelf: e, tab: n }, r);
                                    break;
                                case t_.g.COUNTDOWN_TIMER:
                                    (u = (0, c.jsx)(tw, { countdownTimerBlock: e, isVisible: i }, r)), (d = !0);
                                    break;
                                case t_.g.IMMERSIVE_BANNER:
                                    u = (0, c.jsx)(
                                        sE,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => o(!e) },
                                        r,
                                    );
                                    break;
                                case t_.g.REWARD_HERO:
                                    u = (0, c.jsx)(sN, { isLoading: h, handleTransition: t, heroBlock: e, tab: n }, r);
                                    break;
                                case t_.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER: {
                                    let { isDismissed: t } = (0, tL.En)(
                                        tA.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
                                    );
                                    if (t) return null;
                                    return (0, c.jsx)(
                                        tv,
                                        {
                                            blockType: e.type,
                                            children: (0, c.jsx)(sW, {
                                                onDismiss: () => {
                                                    (0, tL.d6)(
                                                        tA.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
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
                                tv,
                                {
                                    blockType: e.type,
                                    children: (0, c.jsx)("div", {
                                        className: g()(tW.v1, tW.Of, { [tW.J1]: 0 === r || d }),
                                        children: u,
                                    }),
                                },
                                r,
                            );
                        })(e, a > 0 ? x[a - 1] : null, a),
                    ),
                });
    },
    s5 = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            n = u.useRef(null),
            { handleScroll: a } = ea(n, s),
            r = (0, eD.U)(),
            i = (0, v.uM)(),
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
            (0, c.jsx)(J.Ch, {
                className: tW.OW,
                ref: n,
                onScroll: a,
                children: (0, c.jsxs)("div", {
                    className: tW.bx,
                    children: [
                        (0, c.jsxs)("div", {
                            className: tW.rb,
                            children: [
                                (0, c.jsx)(s4, {
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
                                            (0, c.jsx)(eo.D, {
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
                        (0, c.jsx)(sJ, { peaking: g, transitioning: l === R.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var s9 = s(154323),
    s3 = s(295811);
let s7 = () =>
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
    s8 = (e) => {
        let { tab: t } = e,
            [s, l, n] = (0, O.yK)([T.A], () => [T.A.getLayout(t), T.A.isFetchingLayout(t), T.A.getLayoutFetchError(t)]),
            a = (0, O.bG)([s9.A], () => s9.A.get("shop_include_unpublished")),
            r = (0, O.bG)([b.A], () => b.A.skipNumCategories),
            i = u.useMemo(() => ({ include_unpublished: a ?? !1, skip_num_categories: r ?? 0 }), [a, r]),
            o = null == s && !l && n?.status !== 404 && n?.status !== 429;
        return (u.useEffect(() => {
            o && (0, sA.T2)({ tab: t });
        }, [o, t]),
        null == s)
            ? t !== K.HOME || o || l
                ? null
                : (0, c.jsx)(er.Z_, { tenantId: B.FYj, templateId: "shop-home", requestParams: i })
            : (0, c.jsxs)(c.Fragment, {
                  children: [t === K.ORBS && (0, c.jsx)(s7, {}), (0, c.jsx)(er.Qs, { tenantId: B.FYj, layoutId: s })],
              });
    },
    s6 = (e) => {
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
            : (0, c.jsx)(er.Ay, { layout: s });
    },
    le = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            n = (0, v.uM)(),
            a = (0, O.bG)([s3.A], () => s3.A.getShopLayoutUrlOverride()),
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
            (0, c.jsx)(J.Ch, {
                className: tW.OW,
                ref: r,
                onScroll: i,
                children: (0, c.jsxs)("div", {
                    className: tW.bx,
                    children: [
                        (0, c.jsxs)("div", {
                            className: g()(tW.rb, tW.GS),
                            children: [
                                null != a && "" !== a ? (0, c.jsx)(s6, { url: a }) : (0, c.jsx)(s8, { tab: s }),
                                s !== K.CATALOG &&
                                    o >= 36 &&
                                    (0, c.jsxs)("div", {
                                        className: tW.R$,
                                        children: [
                                            (0, c.jsx)(eo.D, {
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
                        (0, c.jsx)(sJ, { peaking: m, transitioning: l === R.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var lt = s(256067);
let ls = () =>
        (0, c.jsxs)("div", {
            className: lt.z,
            children: [
                (0, c.jsx)("img", {
                    className: lt.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: w.intl.string(w.t["p8+qtU"]),
                }),
                (0, c.jsx)(eo.D, { variant: "heading-xl/semibold", children: w.intl.string(w.t["p8+qtU"]) }),
                (0, c.jsx)(ee.E, { variant: "text-md/medium", children: w.intl.string(w.t.UEiyvs) }),
            ],
        }),
    ll = [R.G2.HOME, R.G2.ORBS];
function ln(e) {
    let {
            tab: t,
            categories: s,
            transitionToTab: l,
            transitionState: n,
            updateAnalyticsState: a,
            refreshCategories: r,
        } = e,
        i = la();
    lr(i);
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
        x = (0, $.f)("CollectiblesContent"),
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
        { searchError: C } = (0, X.S)();
    return null != C
        ? (0, c.jsx)(ls, {})
        : null != i
          ? (0, c.jsx)(tS.h, { onRetry: r, errorMessage: i, errorOrigin: tS.A.SHOP_PAGE })
          : t === R.G2.HOME && x
            ? (0, c.jsx)(le, { tab: K.HOME, transitionState: n, handleTransition: p })
            : t === R.G2.ORBS && x
              ? (0, c.jsx)(le, { tab: K.ORBS, transitionState: n, handleTransition: p })
              : ll.includes(t)
                ? (0, c.jsx)(s5, { handleTransition: p, tab: t, transitionState: n })
                : (0, c.jsx)(tC, {
                      tab: t,
                      categories: E,
                      initialCategoryId: d,
                      showFilterInitially: m,
                      onUnmount: () => {
                          g(void 0), h(!0);
                      },
                  });
}
let la = () =>
        (0, O.bG)([b.A, q.A], () =>
            null != b.A.error
                ? `shop load fetch categories error: ${b.A.error.message}`
                : null != q.A.claimError
                  ? `shop load claim error: ${q.A.claimError.message}`
                  : null != q.A.fetchError
                    ? `shop load fetch purchase error: ${q.A.fetchError.message}`
                    : void 0,
        ),
    lr = (e) => {
        let t = (0, O.bG)([j.default], () => j.default.getCurrentUser()),
            { noCache: s, includeUnpublished: l } = (0, eH.A)();
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
var li = s(70426);
s(323874), s(14289), s(35956);
var lo = s(873263),
    lc = s(858897),
    lu = s(496431),
    ld = s(893489);
let lg = { pink: "pinkCountdown" },
    lm = u.memo(function (e) {
        let { message: t, onClick: s, countdownEndDate: l, variant: n } = e,
            a = u.useMemo(() => {
                if (null == l) return null;
                let e = l instanceof Date ? l : new Date(l);
                return isNaN(e.getTime()) ? null : e;
            }, [l]),
            r = (0, lu.A)(a ?? 0, 1e3, void 0, null == a);
        if (null != a && Object.values(r).every((e) => 0 === e)) return null;
        let i = null != n ? ld[n] : void 0,
            o = null != n ? ld[lg[n]] : void 0;
        return (0, c.jsx)(eQ.D, {
            className: g()(ld.nagBar, i),
            onClick: s,
            "aria-label": w.intl.string(w.t["wjws+K"]),
            children: (0, c.jsxs)("div", {
                className: ld.content,
                children: [
                    (0, c.jsx)(ee.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: ld.message,
                        children: t,
                    }),
                    null != a && (0, c.jsx)(tH.e, { endDate: a, size: "md", className: o, showSeconds: !0 }),
                ],
            }),
        });
    });
var lh = s(870308),
    lE = s(650583);
let lx = (e) => {
        let { children: t, shouldAddEventListener: s, onClose: l } = e,
            n = (0, E.useHasAnyModalOpen)();
        return (
            u.useEffect(() => {
                if (!s || n) return;
                let e = (e) => {
                    e.key === lE.N$.Escape && l();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [s, n, l]),
            t
        );
    },
    lp = function (e) {
        let { tab: t = R.G2.HOME } = e;
        (0, A.P)(_.a), (0, z.g)();
        let s = (0, C.A)((0, m.A)()),
            l = (0, h.bG)([j.default], () => j.default.getCurrentUser());
        (0, L.pE)();
        let n = (0, eK.yB)("CollectiblesShop"),
            { onClose: a } = (function () {
                let { search: e } = (0, lo.zy)(),
                    t = (0, lo.g)(),
                    s = u.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                    l = null != s ? parseInt(s, 10) : null;
                return {
                    onClose: u.useCallback(() => {
                        if (0 === l) {
                            (0, s0.aX)(), (0, lc.openUserSettings)();
                            return;
                        }
                        (0, s0.EL)() ? (0, s0.aX)() : (0, s0.pX)(B.BVt.APP);
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
        (0, eU.XU)(s);
        let q = u.useCallback((e, t) => {
                Z(e), K(t);
            }, []),
            { selectedTab: X, transitionState: J, transitionToTab: Q } = (0, V.o)(o);
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
            })(s, X, Y, J, $),
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
            })(X, l);
        let { dismissShopButtonDC: ee } = (0, lh.A)();
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
            (0, eK.gB)();
        let { analyticsLocations: el } = P(X),
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
            })(X, "collectibles_shop");
        return (0, c.jsx)(f.f5, {
            value: el,
            children: (0, c.jsx)(v.R9, {
                newValue: { sessionId: s, pageCategory: Y, pageSize: R.l5 },
                children: (0, c.jsx)(I.iM, {
                    tab: X,
                    children: (0, c.jsx)(lx, {
                        onClose: a,
                        shouldAddEventListener: !1,
                        children: (0, c.jsxs)("div", {
                            className: g()(eT.bx, { [eK.jP]: n }),
                            ref: es,
                            tabIndex: -1,
                            children: [
                                (0, c.jsx)(li.G, { handleTransition: Q, selectedTab: X }),
                                null != en &&
                                    en.type === G.COUNTDOWN &&
                                    (0, c.jsx)(lm, {
                                        message: en.message,
                                        onClick: () => Q(R.G2.HOME),
                                        variant: "pink",
                                        countdownEndDate: en.countdownEndDate,
                                    }),
                                (0, c.jsx)("div", {
                                    className: g()(eT.td, {
                                        [eT.RK]: J === R.Pf.VISIBLE,
                                        [eT.in]: J === R.Pf.IN,
                                        [eT.FD]: J === R.Pf.OUT,
                                    }),
                                    children: (0, c.jsx)(ln, {
                                        tab: X,
                                        refreshCategories: E,
                                        transitionToTab: Q,
                                        transitionState: J,
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
