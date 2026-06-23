s.r(t), s.d(t, { default: () => lx });
var l,
    n,
    a,
    i,
    r,
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
    b = s(726249),
    _ = s(475073),
    S = s(611924),
    j = s(561794),
    A = s(287809),
    v = s(440938),
    L = s(590180),
    I = s(161918),
    O = s(790297),
    N = s(17928),
    T = s(773669),
    k = s(248352),
    R = s(945810);
let y = (0, R.mj)({
    name: "2026-01-valentines-day-drop",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 } },
});
var M = s(758836),
    P = s(788868),
    B = s(375708),
    D = (((l = {})[(l.COUNTDOWN = 0)] = "COUNTDOWN"), l),
    H = s(841702),
    w = s(621653),
    F = s(983545),
    U = s(23161);
s(321073);
var G = s(873263),
    z = (((n = {}).HOME = "home"), (n.CATALOG = "catalog"), (n.ORBS = "orbs"), n),
    V = s(775602),
    W = s(578797),
    K = s(38405),
    Y = s(4227),
    $ = s(50920),
    q = s(856686),
    Z = s(689175),
    X = s(364522),
    J = s(834730),
    Q = s(821609),
    ee = s(783977),
    et = s(59520),
    es = s(174459),
    el = s(652215);
let en = (e, t, s, l) => {
        let { scrollTop: n = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = l;
        if (i > 0) {
            let l = (n + a) / i;
            l > 0 &&
                es.default.track(e, {
                    scroll_visible_percent: l,
                    source: s,
                    page_height: Math.round(i),
                    page_width: Math.round(r),
                    page_session_id: t,
                });
        }
    },
    ea = (e, t) => {
        let { analyticsSource: s } = (0, O.lC)(t),
            l = (0, et.I)(en, 5e3, [], { trailing: !0 }),
            n = (0, v.uM)(),
            a = n?.sessionId;
        return {
            handleScroll: d.useCallback(() => {
                if (null != e.current) {
                    let t = e.current.getScrollerNode();
                    null != t &&
                        l(el.HAw.COLLECTIBLES_SHOP_SCROLLED, null != a ? a : "", s, {
                            scrollTop: t.scrollTop,
                            scrollOffset: t.offsetHeight,
                            scrollHeight: t.scrollHeight,
                            scrollWidth: t.scrollWidth,
                        });
                }
            }, [l, s, a, e]),
        };
    };
var ei = s(354328),
    er = s(356118),
    eo = s(619835),
    ec = s(641150),
    ed = s(534514);
function eu() {
    let { itemTypeFilters: e, searchQuery: t } = (0, U.v)((e) => e),
        { totalCount: s, isFetchingResults: l } = (0, q.S)(),
        n = (0, U.v)((e) => e.hasFilters()),
        a = d.useCallback(() => {
            if (!n) return "";
            if (l) return B.intl.string(B.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return B.intl.format(B.t.KJMJOz, { count: s, search: e });
            }
            return 1 === e.size && e.has(ec.q.AVATAR_DECORATION)
                ? B.intl.format(B.t.s1UzGQ, { count: s })
                : 1 === e.size && e.has(ec.q.NAMEPLATE)
                  ? B.intl.format(B.t.ZWGN9T, { count: s })
                  : 1 === e.size && e.has(ec.q.PROFILE_EFFECT)
                    ? B.intl.format(B.t["v/7apu"], { count: s })
                    : 1 === e.size && e.has(ec.q.PROFILE_FRAME)
                      ? B.intl.format(B.t.eu4eRy, { count: s })
                      : 1 === e.size && e.has(ec.q.BUNDLE)
                        ? B.intl.format(B.t.fZ1rdk, { count: s })
                        : B.intl.format(B.t["/rPvmQ"], { count: s });
        }, [e, s, n, t, l]);
    return (0, c.jsx)(ed.D, { variant: "heading-lg/semibold", children: a() });
}
var eg = s(172218),
    em = s(932793),
    eh = s(940980),
    eE = s(511265),
    ex = s(206077),
    ep = s(100057),
    eC = s(828515),
    ef = s(484469),
    eb = s(215688),
    e_ = s(647685),
    eS = s(10);
let ej = () =>
    (0, c.jsx)("div", {
        className: eS.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, c.jsxs)(
                "div",
                {
                    className: e_.vY,
                    children: [
                        (0, c.jsx)("div", { className: g()(eb.sW, eS.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, c.jsx)(ef.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
var eA = s(828614),
    ev = s(561769),
    eL = s(159439),
    eI = s(998694);
let eO = null;
function eN(e) {
    let { category: t } = e,
        s = (0, h.bG)([A.default], () => A.default.getCurrentUser()),
        l = (0, ex.X)(t.products),
        n = (0, eE.p)()(l),
        a = (0, eh.W)("CollectiblesCatalogContent");
    return null == s || 0 === n.length
        ? null
        : (0, c.jsx)("div", {
              className: e_.vY,
              children: n.map((e, t) =>
                  (0, c.jsx)(
                      v.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, c.jsx)(
                              eA.A,
                              {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  prioritizedCurrency: a ? ev.Hi.FIAT : void 0,
                              },
                              e.skuId,
                          ),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function eT(e) {
    let { category: t } = e,
        [s, l] = d.useState(!1),
        n = (0, eg.K)((e) => {
            l(e);
        }, 0.15),
        a = (0, G.W6)(),
        i = (0, $.a)("CollectiblesCatalogContent"),
        r = (0, v.uM)(),
        o = d.useCallback(() => {
            es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: r?.sessionId,
                sku_id: t.skuId,
                page_type: M.G2.CATALOG,
                page_section: r?.pageSection,
                page_category: t.name,
                page_index: r?.pageIndex,
                page_size: r?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (eO = t.skuId),
                a.push(el.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
        }, [r?.pageIndex, r?.pageSection, r?.pageSize, r?.sessionId, t.name, t.skuId, a]);
    return (0, c.jsxs)("div", {
        className: e_.EF,
        ref: n,
        children: [(0, c.jsx)(eC.A, { category: t, onArrowClick: i ? o : void 0 }), (0, c.jsx)(eN, { category: t })],
    });
}
function ek(e) {
    let { categories: t, setCategoryRef: s, currentPage: l, handlePageChange: n, initialCategoryId: a } = e,
        i = (0, v.uM)(),
        r = (0, eL.U)(),
        o = i?.sessionId ?? "",
        { noCache: u, includeUnpublished: g } = (0, eI.A)(),
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
        let t = Math.floor(e / M.l5) + 1;
        t !== l && n(t), (h.current = a);
    }, [a, m, n, l]);
    let E = d.useMemo(() => {
        let e = (l - 1) * M.l5;
        return m.slice(e, e + M.l5);
    }, [m, l]);
    return (d.useEffect(() => {
        (0, ep.z)({
            sessionId: o,
            checkpoint: ep.t.SHOP_MOUNTED,
            tab: M.G2.CATALOG,
            unpublishedCategoriesShown: g,
            cacheDisabled: u,
        });
    }, []),
    d.useEffect(() => {
        r ||
            0 === E.length ||
            (0, ep.z)({
                sessionId: o,
                checkpoint: ep.t.SHOP_RENDERED,
                tab: M.G2.CATALOG,
                unpublishedCategoriesShown: g,
                cacheDisabled: u,
            });
    }, [o, g, u, r, E.length]),
    r)
        ? (0, c.jsx)(ej, {})
        : (0, c.jsxs)("div", {
              className: e_.LZ,
              children: [
                  E.map((e, t) =>
                      (0, c.jsx)(
                          "div",
                          {
                              ref: (t) => s(e.skuId, t),
                              children: (0, c.jsx)(v.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, c.jsx)(eT, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, c.jsx)("div", {
                      className: e_.Ej,
                      children: (0, c.jsx)(em.m, {
                          currentPage: l,
                          totalCount: m.length,
                          pageSize: M.l5,
                          onPageChange: n,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var eR = s(177366),
    ey = s(401864),
    eM = s(124987),
    eP = s(691885),
    eB = s(146919),
    eD = s(912853);
let eH = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: s } = (0, U.v)(),
        l = (0, v.uM)(),
        n = (0, eB.yB)("CollectiblesSortSelect"),
        a = s(),
        i = d.useMemo(() => M.QB.filter((e) => e.sortType !== eM.$.RELEVANCE || a), [a]),
        r = d.useCallback((e) => {
            let { sortType: t, sortDirection: s } = e;
            return t === eM.$.RECENCY
                ? { label: B.intl.string(B.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === eM.$.PRICE
                  ? s === ey.A.ASC
                      ? { label: B.intl.string(B.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: B.intl.string(B.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === eM.$.RELEVANCE
                    ? { label: B.intl.string(B.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: B.intl.string(B.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        o = d.useCallback(
            (e) =>
                ({
                    recent: { sortType: eM.$.RECENCY, sortDirection: ey.A.DESC },
                    "price-asc": { sortType: eM.$.PRICE, sortDirection: ey.A.ASC },
                    "price-desc": { sortType: eM.$.PRICE, sortDirection: ey.A.DESC },
                    popularity: { sortType: eM.$.POPULARITY, sortDirection: ey.A.DESC },
                    relevance: { sortType: eM.$.RELEVANCE, sortDirection: ey.A.DESC },
                })[e],
            [],
        ),
        u = d.useCallback(
            (e) => {
                let s = r(o(e));
                es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            [l, r, o, t],
        ),
        m = r(e);
    return (0, c.jsx)("div", {
        className: g()(eD.k, { [eB.jP]: n }),
        children: (0, c.jsx)(eP.l, {
            label: B.intl.string(B.t.uaX705),
            hideLabel: !0,
            options: i.map(r),
            onSelectionChange: u,
            value: m.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var ew =
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
    eF =
        (((i = {}).ANIME = "COLLECTIBLES_THEME_ANIME"),
        (i.GAMING = "COLLECTIBLES_THEME_GAMING"),
        (i.CUTE_COZY = "COLLECTIBLES_THEME_CUTE_COZY"),
        (i.FOOD_DRINKS = "COLLECTIBLES_THEME_FOOD_DRINKS"),
        (i.ANIMALS_PETS = "COLLECTIBLES_THEME_ANIMALS_PETS"),
        (i.MOVIES_TV_SHOWS = "COLLECTIBLES_THEME_MOVIES_TV_SHOWS"),
        (i.FANTASY = "COLLECTIBLES_THEME_FANTASY"),
        (i.DARK_MOODY = "COLLECTIBLES_THEME_DARK_MOODY"),
        (i.NATURE = "COLLECTIBLES_THEME_NATURE"),
        (i.SCI_FI = "COLLECTIBLES_THEME_SCI_FI"),
        i),
    eU = s(990078),
    eG = s(150934),
    ez = s(508770),
    eV = s(602853),
    eW = s(661531),
    eK = s(939249),
    eY = s(947641),
    e$ = s(604338),
    eq = s(785866),
    eZ = s(373846),
    eX = s(308323),
    eJ = s(608599),
    eQ = s(685761),
    e0 = s(157225),
    e1 = s(413249),
    e2 = s(510241),
    e5 = s(601198),
    e4 = s(736653),
    e7 = s(7250),
    e9 = s(13875),
    e3 = s(818348),
    e6 = s(764915);
function e8() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: s, hasFilters: l } = (0, U.v)(),
        n = l(),
        a = (0, e9.sk)("FilterBar"),
        i = (0, v.uM)(),
        r = d.useRef(null),
        o = d.useMemo(() => M._6.filter((e) => a || e !== ec.q.PROFILE_FRAME), [a]),
        u = d.useCallback(
            (e) => {
                es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        className: e6.kT,
        children: [
            (0, c.jsxs)("div", {
                className: g()(e6.KZ, e6.YG),
                children: [
                    (0, c.jsx)("div", {
                        ref: r,
                        tabIndex: -1,
                        children: (0, c.jsx)(J.E, {
                            variant: "text-md/semibold",
                            className: e6.hr,
                            children: B.intl.string(B.t.Qk6r1a),
                        }),
                    }),
                    o.map((e) => (0, c.jsx)(te, { filter: e, trackFilterAction: u }, e)),
                    (0, c.jsx)(eG.S, {
                        checked: t,
                        onChange: () => {
                            u(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                        },
                        label: B.intl.string(B.t.AHHHgG),
                    }),
                ],
            }),
            (0, c.jsx)(tt, { trackFilterAction: u }),
            (0, c.jsx)(tn, { trackFilterAction: u }),
            n &&
                (0, c.jsx)(Q.$, {
                    variant: "secondary",
                    onClick: () => {
                        u("filter reset"), s(), requestAnimationFrame(() => r.current?.focus());
                    },
                    text: B.intl.string(B.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
let te = (e) => {
        let { filter: t, trackFilterAction: s } = e,
            l = {
                [ec.q.AVATAR_DECORATION]: B.intl.string(B.t.dRZYNE),
                [ec.q.PROFILE_EFFECT]: B.intl.string(B.t["1cNjtx"]),
                [ec.q.NAMEPLATE]: B.intl.string(B.t.V68Fqz),
                [ec.q.PROFILE_FRAME]: B.intl.string(B.t.ecTJkR),
                [ec.q.BUNDLE]: B.intl.string(B.t.FYFpps),
            },
            { itemTypeFilters: n, onToggleItemType: a } = (0, U.v)(),
            i = (0, c.jsx)(eG.S, {
                checked: n.has(t),
                onChange: () => {
                    let e = l[t]?.toLowerCase() != null ? l[t].toLowerCase() : t;
                    s(`filter item type ${e} ${!1 === n.has(t) ? "on" : "off"}`), a(t);
                },
                label: l[t] ?? "",
            });
        return t === ec.q.PROFILE_FRAME
            ? (0, c.jsxs)("div", { className: e6.Ym, children: [i, (0, c.jsx)(ez.E, { type: "new" })] })
            : i;
    },
    tt = (e) => {
        let { trackFilterAction: t } = e,
            s = d.useMemo(
                () => [
                    { color: "#9B59B6", label: B.intl.string(B.t.kqUD4P), enum: ew.PURPLE },
                    { color: "#3498DB", label: B.intl.string(B.t.qQTRae), enum: ew.BLUE },
                    { color: "#2ECC71", label: B.intl.string(B.t["f/Ylk6"]), enum: ew.GREEN },
                    { color: "#A0522D", label: B.intl.string(B.t["Sd/BMa"]), enum: ew.BROWN },
                    { color: "#F1C40F", label: B.intl.string(B.t["0fevYz"]), enum: ew.YELLOW },
                ],
                [],
            ),
            l = d.useMemo(
                () => [
                    { color: "#E67E22", label: B.intl.string(B.t.ZE7weD), enum: ew.ORANGE },
                    { color: "#E74C3C", label: B.intl.string(B.t.hKJGOM), enum: ew.RED },
                    { color: "#EC407A", label: B.intl.string(B.t.HvLEGM), enum: ew.PINK },
                    { color: "#FFFFFF", label: B.intl.string(B.t["CB+lNO"]), enum: ew.WHITE },
                    { color: "#262626", label: B.intl.string(B.t["dMey+v"]), enum: ew.BLACK },
                ],
                [],
            );
        return (0, c.jsxs)("div", {
            className: e6.KZ,
            children: [
                (0, c.jsx)(J.E, { variant: "text-md/semibold", className: e6.hr, children: B.intl.string(B.t.K1xGoG) }),
                (0, c.jsx)(ts, { colors: s, trackFilterAction: t }),
                (0, c.jsx)(ts, { colors: l, trackFilterAction: t }),
            ],
        });
    },
    ts = (e) => {
        let { colors: t, trackFilterAction: s } = e,
            { colorFilters: l, onToggleColor: n } = (0, U.v)();
        return (0, c.jsx)("div", {
            className: e6.OW,
            children: t.map((e) => {
                let { color: t, label: a, enum: i } = e;
                return (0, c.jsx)(
                    tl,
                    { color: t, label: a, enum: i, isToggled: l.has(i), onToggleColor: n, trackFilterAction: s },
                    i,
                );
            }),
        });
    },
    tl = (e) => {
        let { color: t, label: s, enum: l, isToggled: n, onToggleColor: a, trackFilterAction: i } = e,
            r = (0, eV.r)(eW.A.unsafe_rawColors.WHITE).hex(),
            o = (0, eV.r)(eW.A.unsafe_rawColors.PRIMARY_530).hex();
        return (0, c.jsx)(
            eU.m,
            {
                text: s,
                asContainer: !0,
                ariaHidden: !0,
                children: (0, c.jsx)(
                    eK.D,
                    {
                        className: g()(e6.n1, { [e6.lx]: n }),
                        style: { backgroundColor: t },
                        "aria-label": s,
                        "aria-pressed": n,
                        onClick: () => {
                            i(`filter color ${s.toLowerCase()} ${!n ? "on" : "off"}`), a(l);
                        },
                        children:
                            n &&
                            (0, c.jsx)("div", {
                                className: e6.oE,
                                children: (0, c.jsx)(eY.r, {
                                    size: "xs",
                                    color: (0, e7.j)({ backgroundColor: t, colors: [r, o] }),
                                }),
                            }),
                    },
                    t,
                ),
            },
            s,
        );
    },
    tn = (e) => {
        let { trackFilterAction: t } = e,
            { themeFilters: s, onToggleTheme: l } = (0, U.v)(),
            n = (0, e4.Ay)() === e3.NJ.DARK,
            a = d.useCallback(
                (e) => {
                    if (s.has(e) || n) return "always-white";
                },
                [s, n],
            ),
            i = d.useCallback(
                (e) => (s.has(e) || n ? eW.A.colors.WHITE : eW.A.colors.INTERACTIVE_TEXT_DEFAULT),
                [s, n],
            ),
            r = d.useMemo(
                () => [
                    {
                        name: B.intl.string(B.t.aVBOKh),
                        icon: (0, c.jsx)(e$.E, { size: "xs", color: i(eF.ANIME) }),
                        enum: eF.ANIME,
                    },
                    {
                        name: B.intl.string(B.t["3WoZBc"]),
                        icon: (0, c.jsx)(eq._, { size: "xs", color: i(eF.GAMING) }),
                        enum: eF.GAMING,
                    },
                    {
                        name: B.intl.string(B.t.yuEmLj),
                        icon: (0, c.jsx)(eZ.C, { size: "xs", color: i(eF.CUTE_COZY) }),
                        enum: eF.CUTE_COZY,
                    },
                    {
                        name: B.intl.string(B.t.mMvCHo),
                        icon: (0, c.jsx)(eX.L, { size: "xs", color: i(eF.SCI_FI) }),
                        enum: eF.SCI_FI,
                    },
                    {
                        name: B.intl.string(B.t.TlhOQC),
                        icon: (0, c.jsx)(eJ.L, { size: "xs", color: i(eF.FOOD_DRINKS) }),
                        enum: eF.FOOD_DRINKS,
                    },
                    {
                        name: B.intl.string(B.t["4IaUIM"]),
                        icon: (0, c.jsx)(eQ.f, { size: "xs", color: i(eF.FANTASY) }),
                        enum: eF.FANTASY,
                    },
                    {
                        name: B.intl.string(B.t["w0nSG/"]),
                        icon: (0, c.jsx)(e0.N, { size: "xs", color: i(eF.ANIMALS_PETS) }),
                        enum: eF.ANIMALS_PETS,
                    },
                    {
                        name: B.intl.string(B.t.cJng7v),
                        icon: (0, c.jsx)(e1.p, { size: "xs", color: i(eF.NATURE) }),
                        enum: eF.NATURE,
                    },
                    {
                        name: B.intl.string(B.t["5mUvyM"]),
                        icon: (0, c.jsx)(e2.T, { size: "xs", color: i(eF.MOVIES_TV_SHOWS) }),
                        enum: eF.MOVIES_TV_SHOWS,
                    },
                    {
                        name: B.intl.string(B.t.MB9H5Z),
                        icon: (0, c.jsx)(e5.e, { size: "xs", color: i(eF.DARK_MOODY) }),
                        enum: eF.DARK_MOODY,
                    },
                ],
                [i],
            );
        return (0, c.jsxs)("div", {
            className: e6.KZ,
            children: [
                (0, c.jsx)(J.E, { variant: "text-md/semibold", className: e6.hr, children: B.intl.string(B.t.t1Ztrp) }),
                (0, c.jsx)("div", {
                    className: e6.Ot,
                    children: r.map((e) => {
                        let { name: n, icon: i, enum: r } = e;
                        return (0, c.jsxs)(
                            eK.D,
                            {
                                className: g()(e6.w4, { [e6.C7]: s.has(r) }),
                                "aria-label": n,
                                "aria-pressed": s.has(r),
                                onClick: () => {
                                    let e = s.has(r);
                                    t(`filter theme ${n.toLowerCase()} ${!e ? "on" : "off"}`), l(r);
                                },
                                children: [i, (0, c.jsx)(J.E, { color: a(r), variant: "text-md/medium", children: n })],
                            },
                            n,
                        );
                    }),
                }),
            ],
        });
    };
var ta = s(687971);
function ti() {
    return (0, c.jsxs)("div", {
        className: ta.k,
        children: [
            (0, c.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: B.intl.string(B.t.oezC3x),
                className: ta._,
            }),
            (0, c.jsx)(ed.D, { variant: "heading-xl/semibold", children: B.intl.string(B.t.oezC3x) }),
            (0, c.jsx)(J.E, { variant: "text-md/medium", children: B.intl.string(B.t["Tc/Ndl"]) }),
        ],
    });
}
var tr = s(528096);
let to = { flattenProductVariants: !0 };
function tc(e) {
    let { isFetchingCategories: t, scrollerRef: s, tab: l } = e,
        n = (0, v.uM)(),
        a = n?.sessionId ?? "",
        { noCache: i, includeUnpublished: r } = (0, eI.A)(),
        o = (0, eh.W)("CollectiblesFilterResults"),
        u = (0, h.bG)([A.default], () => A.default.getCurrentUser()),
        { skus: m, currentPage: E, totalCount: x, isFetchingResults: p } = (0, q.S)(),
        C = (0, h.yK)([L.A], () => L.A.getProductsBySkus(m)),
        f = d.useCallback(() => {
            s?.current?.scrollToTop({ animate: !0 });
        }, [s]),
        b = m?.join("");
    d.useEffect(() => {
        f();
    }, [b, f]);
    let _ = (0, eE.p)(),
        S = d.useMemo(() => _(C), [_, C]);
    d.useEffect(() => {
        t ||
            (0, ep.z)({
                sessionId: a,
                checkpoint: ep.t.SHOP_RENDERED,
                tab: l,
                unpublishedCategoriesShown: r,
                cacheDisabled: i,
            });
    }, [a, r, i, t, l]);
    let j = d.useRef(null),
        { setQueryPageSize: I, setQueryPageOffset: O, queryPageSize: N } = (0, U.v)(),
        [T, k] = d.useState(!1),
        R = t || p || null == u;
    d.useEffect(() => {
        R ? k(!1) : S.length > 0 && k(!0);
    }, [R, S.length]);
    let y = N > 0 && !R && 0 === S.length;
    d.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == j.current || I(Math.floor(5 * getComputedStyle(j.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != j.current) return e.observe(j.current), () => e.disconnect();
    }, [I]);
    let M = d.useCallback(
        (e) => {
            es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    return (0, c.jsxs)(ev.v3.Provider, {
        value: to,
        children: [
            (0, c.jsxs)("div", {
                className: g()({ [tr.oE]: y }),
                children: [
                    y && (0, c.jsx)(ti, {}),
                    (0, c.jsxs)("div", {
                        className: g()(tr.ZE, { [tr.Kp]: T }),
                        ref: j,
                        children: [
                            R && [...Array(N)].map((e, t) => (0, c.jsx)(ef.A, {}, t)),
                            !R &&
                                S.map((e, t) =>
                                    null == L.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, c.jsx)(
                                              v.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, c.jsx)(
                                                      eA.A,
                                                      {
                                                          skuId: e.skuId,
                                                          hideStaticBundleBackgroundAsset: !0,
                                                          prioritizedCurrency: o ? ev.Hi.FIAT : void 0,
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
                    className: tr.Ej,
                    children: (0, c.jsx)("div", {
                        children: (0, c.jsx)(em.m, {
                            currentPage: E,
                            totalCount: x,
                            pageSize: N,
                            onPageChange: M,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var td = s(832179);
function tu(e) {
    let { tab: t, categories: s, initialCategoryId: l, showFilterInitially: n = !0, onUnmount: a } = e,
        i = (0, ei.A)("shop_include_unpublished");
    (0, U.S)(i);
    let r = d.useRef(null),
        { handleScroll: o } = ea(r, t),
        u = (0, W.U)("Shop Browse"),
        { setCategoryRef: g, handleScrollToCategory: m } = (0, eR.k0)(r.current),
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
            className: td.VM,
            children: (0, c.jsxs)("main", {
                className: td.MY,
                children: [
                    (0, c.jsx)(Z.Gt, {
                        className: td.OW,
                        ref: r,
                        onScroll: o,
                        children: u
                            ? (0, c.jsx)("div", {
                                  className: td.en,
                                  children: (0, c.jsx)("div", {
                                      className: td.pf,
                                      children: (0, c.jsx)(er.Z_, { tenantId: el.FYj, templateId: eo.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, c.jsx)(tg, {
                                  isSmallScreen: x,
                                  filterBarOpen: h,
                                  setFilterBarOpen: E,
                                  tab: t,
                                  scrollerRef: r,
                                  categories: s,
                                  setCategoryRef: g,
                                  initialCategoryId: l,
                              }),
                    }),
                    h && !x && (0, c.jsx)("div", { className: td.yF }),
                    h && !x && (0, c.jsx)(X.Ip, { className: td.kT, children: (0, c.jsx)(e8, {}) }),
                ],
            }),
        })
    );
}
let tg = (e) => {
    let {
            isSmallScreen: t,
            filterBarOpen: s,
            setFilterBarOpen: l,
            tab: n,
            scrollerRef: a,
            categories: i,
            setCategoryRef: r,
            initialCategoryId: o,
        } = e,
        u = d.useRef(null),
        m = (0, U.v)((e) => e.hasDefaultFilters()),
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
                es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    (es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            className: td.en,
            children: (0, c.jsxs)("div", {
                className: td.pf,
                children: [
                    (0, c.jsxs)("div", {
                        className: td.ne,
                        children: [
                            (0, c.jsx)("div", { className: td.lQ, children: (0, c.jsx)(eu, {}) }),
                            (0, c.jsxs)("div", {
                                className: g()(td.wR, { [td.Im]: t }),
                                children: [
                                    (0, c.jsxs)("div", {
                                        className: td.Ul,
                                        children: [
                                            (0, c.jsx)(J.E, {
                                                variant: "text-md/semibold",
                                                children: B.intl.string(B.t.uaX705),
                                            }),
                                            (0, c.jsx)(eH, {}),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        ref: C,
                                        children: (0, c.jsx)(Q.$, {
                                            onClick: () => {
                                                let e = !s;
                                                es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                            text: B.intl.string(s ? B.t.fYtm6f : B.t["TeTYE+"]),
                                            icon: ee.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            s &&
                                t &&
                                (0, c.jsx)("div", {
                                    className: td.Dh,
                                    ref: u,
                                    children: (0, c.jsx)(Z.Ch, { className: td.Qo, children: (0, c.jsx)(e8, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, c.jsx)(v.R9, {
                              newValue: { pageIndex: x },
                              children: (0, c.jsx)(ek, {
                                  categories: i,
                                  setCategoryRef: r,
                                  currentPage: x,
                                  handlePageChange: p,
                                  initialCategoryId: o,
                              }),
                          })
                        : (0, c.jsx)(tc, { scrollerRef: a, tab: n }, n),
                ],
            }),
        })
    );
};
var tm = s(599062),
    th = s(651162),
    tE = s(554146),
    tx = s(367727);
let tp = d.createContext(null);
function tC(e) {
    let { blockType: t, children: s } = e,
        l = d.useMemo(() => ({ blockType: t }), [t]);
    return (0, c.jsx)(tp.Provider, { value: l, children: s });
}
var tf = s(755172),
    tb = s(325595),
    t_ = s(893998),
    tS = s(110629),
    tj = s(308186),
    tA = s(607399),
    tv = s(946015),
    tL = s(717421),
    tI = s(140735),
    tO = s(496431),
    tN = s(467513);
let tT = (e) => {
    let t,
        s,
        { endDate: l, size: n = "md", className: a, showSeconds: i = !1 } = e,
        { days: r, hours: o, minutes: d, seconds: u } = (0, tO.A)(l),
        m = ((s = [(t = (e) => `${e.toString().padStart(2, "0")}`)(r), t(o), t(d)]), i && s.push(t(u)), s.join(":"));
    return (0, c.jsxs)("div", {
        className: g()(tN.kL, a),
        role: "timer",
        children: [
            m
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, c.jsx)(
                              J.E,
                              {
                                  color: "none",
                                  variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: tN.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, c.jsx)(
                              J.E,
                              {
                                  color: "always-white",
                                  variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
                                  className: tN.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, c.jsx)(tI.A, { children: B.intl.format(B.t.j6IyVe, { days: r, hours: o, minutes: d }) }),
        ],
    });
};
var tk = s(134264);
let tR = d.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: s } = e,
        l = (0, tL.z)({
            transform: `translateX(-50%) ${s ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!s,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsxs)(tj.animated.div, {
        className: g()([tk.lP, tA.Fr && tk.yJ]),
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
            (0, c.jsxs)(tv.s, {
                direction: tv.s.Direction.VERTICAL,
                children: [
                    (0, c.jsx)(J.E, {
                        variant: "text-md/medium",
                        className: tk.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, c.jsx)(J.E, {
                            variant: "text-sm/medium",
                            className: tk.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, c.jsx)(tT, { endDate: t.endTime }),
        ],
    });
});
var ty = s(424918),
    tM = s(793574),
    tP = s(993408),
    tB = s(196231),
    tD = s(941734);
let tH = (e) => {
        let { handleTransition: t, featuredBlockRecord: s } = e;
        return (0, c.jsx)("div", {
            className: g()(tD.n9, tD.YB),
            children: s?.subblocks.map((e, s) =>
                e.type === ty.u.CATEGORY
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
                                  tB.S,
                                  {
                                      subblock: e,
                                      enablePreview: 0 === s,
                                      badgeText: (0, tP.HF)(e.unpublishedAt) ? B.intl.string(B.t["h/uBCR"]) : void 0,
                                      handleTransition: t,
                                  },
                                  e.categoryStoreListingId,
                              ),
                          },
                          e.categoryStoreListingId,
                      )
                    : (e.type, null),
            ),
        });
    },
    tw = (e) => {
        let { handleTransition: t, categories: s } = e;
        if (null == s || s.length < 2) return null;
        let [l, n] = s;
        return (0, c.jsx)("div", {
            className: g()(tD.n9, tD.YB),
            children: (0, c.jsxs)(v.R9, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != l ? l.name : n?.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == l),
                },
                children: [
                    null != l &&
                        (0, c.jsx)(tB.S, {
                            category: l,
                            enablePreview: !0,
                            badgeText: (0, tP.HF)(l.unpublishedAt) ? B.intl.string(B.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                    null != n &&
                        (0, c.jsx)(tB.S, {
                            category: n,
                            badgeText: (0, tP.HF)(n.unpublishedAt) ? B.intl.string(B.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                ],
            }),
        });
    },
    tF = (e) => {
        let { isLoading: t, handleTransition: s, categories: l, featuredBlockRecord: n } = e,
            { analyticsLocations: a } = (0, f.Ay)(tM.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
        return t
            ? (0, c.jsxs)("div", {
                  className: g()(tD.n9, tD.YB),
                  children: [
                      (0, c.jsx)("div", {
                          className: g()(tD.Jn, tD.oT),
                          children: (0, c.jsx)("div", { className: tD.uy }),
                      }),
                      (0, c.jsx)("div", {
                          className: g()(tD.Jn, tD.oT),
                          children: (0, c.jsx)("div", { className: tD.uy }),
                      }),
                  ],
              })
            : null != n
              ? (0, c.jsx)(f.f5, {
                    value: a,
                    children: (0, c.jsx)(tH, { featuredBlockRecord: n, handleTransition: s, isLoading: !1 }),
                })
              : (0, c.jsx)(f.f5, {
                    value: a,
                    children: (0, c.jsx)(tw, { categories: l, handleTransition: s, isLoading: !1 }),
                });
    };
var tU = s(531685),
    tG = s(428262),
    tz = s(621466),
    tV =
        (((r = {}).MOUNTED = "mounted"),
        (r.SORT_OUT = "sort-out"),
        (r.SORT_IN = "sort-in"),
        (r.SHUFFLE_OUT = "shuffle-out"),
        (r.SHUFFLE_IN = "shuffle-in"),
        (r.FINISHED = "finished"),
        r);
s(667532);
var tW = s(735438),
    tK = s.n(tW),
    tY =
        (((o = {}).RECOMMENDED = "recommended"),
        (o.POPULAR = "popular"),
        (o.RECENT = "recent"),
        (o.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (o.RANDOM = "random"),
        o),
    t$ = s(153488),
    tq = s(313276),
    tZ = s(623373),
    tX = s(885574),
    tJ = s(975807),
    tQ = s(975571),
    t0 = s(365714);
let t1 = (e) => {
        let { personalizedResults: t, label: s } = e,
            l = s ?? B.intl.string(B.t.NSv5KV);
        return (0, c.jsxs)("div", {
            className: t0.L,
            children: [
                (0, c.jsx)(ed.D, { variant: "heading-lg/semibold", children: l }),
                t &&
                    (0, c.jsx)(eU.m, {
                        text: B.intl.string(B.t["3taPdj"]),
                        position: "top",
                        "aria-label": B.intl.string(B.t["3taPdj"]),
                        children: (0, c.jsx)(eK.D, {
                            onClick: () => (0, tJ.A)(tQ.A.getArticleURL(el.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: t0.s,
                            children: (0, c.jsx)(tX.m, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    t2 = (e) => {
        let {
                isLoading: t,
                title: s,
                sortedSkuIds: l,
                numVisibleItems: n,
                prioritizeUserDiscounts: a,
                tab: i,
                buttonContainerClassName: r,
                orbsSupportedOnly: o,
            } = e,
            u = (0, N.bG)([A.default], () => A.default.getCurrentUser()),
            m = tG.Ay.canUseShopDiscounts(u),
            h = (0, ev.Mk)(i, "FeedBlock"),
            E = (0, eB.yB)("FeedBlock"),
            {
                sortType: x,
                setSortType: p,
                sortedItems: C,
                sortOptions: b,
                shuffleProducts: _,
                showRecommendationOption: S,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: s, prioritizeUserDiscounts: l, orbsSupportedOnly: n } = e,
                    a = (0, N.bG)([t$.A], () => t$.A.hasConsented(el.YAq.PERSONALIZATION)),
                    i = d.useMemo(() => t?.[tY.RECOMMENDED] ?? [], [t]),
                    r = d.useMemo(() => t?.[tY.POPULAR] ?? [], [t]),
                    o = i.length > 0 && a,
                    [c, u] = d.useState(o ? tY.RECOMMENDED : tY.POPULAR),
                    g = (0, N.bG)([L.A], () => L.A.productsWithVariantsAsGroup),
                    m = d.useMemo(() => (0, tP.CE)(g), [g]),
                    h = (0, N.bG)([k.A], () => k.A.getUserDiscounts()),
                    E = (0, tq.A)(),
                    x = (0, eE.p)(),
                    [p, C] = d.useState([]),
                    f = d.useCallback(() => {
                        u(tY.RANDOM), C(tK().shuffle(m));
                    }, [m]);
                d.useEffect(() => {
                    C(tK().shuffle(m));
                }, [m]);
                let b = d.useMemo(() => {
                    let e = [];
                    switch (c) {
                        case tY.RECENT:
                            e = m;
                            break;
                        case tY.PRICE_LOW_TO_HIGH:
                            e = (0, tP.bf)([...m], s, n);
                            break;
                        case tY.RECOMMENDED: {
                            let t = E(i);
                            e = l ? (0, tP.Bs)(t, h) : t;
                            break;
                        }
                        case tY.POPULAR: {
                            let t = E(r);
                            e = l ? (0, tP.Bs)(t, h) : t;
                            break;
                        }
                        case tY.RANDOM:
                            e = p;
                    }
                    return n ? (0, tZ.ex)(x(e)) : x(e);
                }, [c, n, x, s, m, E, i, l, h, r, p]);
                return {
                    sortType: c,
                    setSortType: u,
                    sortedItems: (0, ex.X)(b),
                    sortOptions: d.useMemo(() => {
                        let e = [
                            { value: tY.POPULAR, label: B.intl.string(B.t.Y68e5p) },
                            { value: tY.RECENT, label: B.intl.string(B.t["51Bhiz"]) },
                            { value: tY.PRICE_LOW_TO_HIGH, label: B.intl.string(B.t.m8RVU2) },
                        ];
                        return o && e.unshift({ value: tY.RECOMMENDED, label: B.intl.string(B.t.zPWgFG) }), e;
                    }, [o]),
                    showRecommendationOption: o,
                    shuffleProducts: f,
                };
            })({ sortedSkuIds: l, hasShopDiscount: m, prioritizeUserDiscounts: a, orbsSupportedOnly: o }),
            j = (0, N.bG)([V.Ay], () => V.Ay.useReducedMotion),
            I = (0, N.bG)([tU.A], () => tU.A.isFocused()),
            O = !j && I,
            { animationPhase: T, startAnimation: R } = (() => {
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
                                    (0, tz.vq)(e, HTMLButtonElement) ||
                                    (0, tz.vq)(e, HTMLAnchorElement) ||
                                    (0, tz.vq)(e, HTMLInputElement) ||
                                    (0, tz.vq)(e, HTMLSelectElement) ||
                                    (0, tz.vq)(e, HTMLTextAreaElement)
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
                            let { isShuffling: s, onOutroComplete: a, returnRef: i } = e;
                            i?.current != null && ((n.current = i.current), l(!0)),
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
            y = (0, v.uM)(),
            M = y?.sessionId ?? "",
            { analyticsLocations: P } = (0, f.Ay)(tM.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            D = d.useRef(null),
            H = d.useRef(null),
            [w, F] = d.useState(!1),
            U = d.useCallback(
                (e) => {
                    F(!1),
                        R({ isShuffling: !1, onOutroComplete: () => p(e), returnRef: H }),
                        es.default.track(el.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: M,
                            sort_type: e,
                        });
                },
                [R, p, M],
            );
        return null == u
            ? null
            : (0, c.jsx)(f.f5, {
                  value: P,
                  children: (0, c.jsxs)("div", {
                      className: g()(tD.lD, tD.YB),
                      children: [
                          (0, c.jsxs)("div", {
                              className: tD.$6,
                              children: [
                                  (0, c.jsx)(t1, { label: s, personalizedResults: S }),
                                  (0, c.jsxs)("div", {
                                      className: g()(tD.IE, { [eB.jP]: E }),
                                      children: [
                                          (0, c.jsxs)("div", {
                                              className: tD.gd,
                                              children: [
                                                  (0, c.jsx)(J.E, {
                                                      variant: "text-md/medium",
                                                      children: B.intl.string(B.t.uaX705),
                                                  }),
                                                  (0, c.jsx)("div", {
                                                      className: g()(r, tD.pI),
                                                      ref: H,
                                                      children: (0, c.jsx)(eP.l, {
                                                          label: B.intl.string(B.t.uaX705),
                                                          hideLabel: !0,
                                                          options: b,
                                                          onSelectionChange: U,
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
                                              className: r,
                                              children: (0, c.jsx)(Q.$, {
                                                  variant: "secondary",
                                                  text: B.intl.string(B.t.X3tnc4),
                                                  buttonRef: D,
                                                  onClick: () => {
                                                      F(!0),
                                                          R({ isShuffling: !0, onOutroComplete: _, returnRef: D }),
                                                          es.default.track(
                                                              el.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: M },
                                                          );
                                                  },
                                                  disabled: T !== tV.MOUNTED && T !== tV.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, c.jsx)(tI.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: w && T === tV.FINISHED ? B.intl.string(B.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, c.jsx)("div", {
                              className: tD.hm,
                              children: t
                                  ? (0, c.jsx)(c.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, c.jsx)(ef.A, {}, t + 1)),
                                    })
                                  : C.slice(0, n).map((e, t) => {
                                        let s,
                                            l = L.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == l) return null;
                                        if (O)
                                            if (T === tV.SHUFFLE_OUT)
                                                return (0, c.jsx)(
                                                    "div",
                                                    {
                                                        className: tD.Z2,
                                                        children: (0, c.jsx)(ef.A, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                T === tV.SORT_OUT
                                                    ? (s = tD.MW)
                                                    : T === tV.SHUFFLE_IN
                                                      ? (s = tD.aS)
                                                      : T === tV.SORT_IN && (s = tD.F7);
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
                                                    children: (0, c.jsx)(eA.A, {
                                                        skuId: e.skuId,
                                                        hideStaticBundleBackgroundAsset: !0,
                                                        prioritizedCurrency: h,
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
var t5 = s(449543),
    t4 = s(622697);
let t7 = (e) => {
    let { block: t, handleTransition: s, tab: l } = e,
        n = (0, N.bG)([A.default], () => A.default.getCurrentUser()),
        a = (0, ev.Mk)(l, "FramesProductShelfBlock"),
        i = (0, tq.A)(),
        r = d.useMemo(() => i(t.rankedSkuIds), [t.rankedSkuIds, i]),
        o = (0, ex.X)(r),
        { analyticsLocations: u } = (0, f.Ay)(tM.A.COLLECTIBLES_SHOP_SHELF),
        m = d.useCallback(() => {
            s({
                sourceButton: "frames product shelf see all",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            });
        }, [s, t.categorySkuId]);
    return null == n || 0 === o.length
        ? null
        : (0, c.jsx)(f.f5, {
              value: u,
              children: (0, c.jsxs)("div", {
                  className: g()(t4.kL, tD.YB),
                  children: [
                      null != t.desktopBackgroundImage &&
                          (0, c.jsx)("img", {
                              className: t4.iL,
                              src: t.desktopBackgroundImage,
                              alt: "",
                              "aria-hidden": !0,
                          }),
                      (0, c.jsxs)("div", {
                          className: t4.Qs,
                          children: [
                              (0, c.jsxs)("div", {
                                  className: t4.wx,
                                  children: [
                                      (0, c.jsxs)("div", {
                                          className: t4.Jb,
                                          children: [
                                              (0, c.jsx)(tS.A, {
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
                                          (0, c.jsx)(Q.$, {
                                              variant: "overlay-primary",
                                              text: t.buttonText,
                                              onClick: m,
                                          }),
                                  ],
                              }),
                              (0, c.jsx)(t5.A, {
                                  gap: "xl",
                                  edgeFade: "sm",
                                  children: o.map((e, s) =>
                                      null == L.A.getCategoryForProduct(e.skuId)
                                          ? null
                                          : (0, c.jsx)(
                                                v.R9,
                                                {
                                                    newValue: {
                                                        tilePosition: s,
                                                        pageSection: t.title,
                                                        categoryPosition: 1,
                                                    },
                                                    children: (0, c.jsx)(eA.A, {
                                                        skuId: e.skuId,
                                                        prioritizedCurrency: a,
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
var t9 = s(337183),
    t3 = s(349288),
    t6 = s(212407),
    t8 = s(815280),
    se = s(537947);
let st = (e) => {
    let { immersiveBannerBlock: t, onVisibilityChange: s } = e,
        l = (0, eg.K)(
            (e) => {
                s?.(e);
            },
            0.33,
            null != s,
        ),
        { bannerUrl: n, bannerAnimatedUrl: a } = (0, t6.qY)(t),
        i = null != t.textColor ? { color: t.textColor } : void 0,
        r = null != t.body && "" !== t.body,
        o = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, c.jsxs)("div", {
        ref: l,
        className: se.BX,
        children: [
            (0, c.jsx)("div", {
                className: se.vK,
                children: null != n && (0, c.jsx)(t8.A, { bannerStatic: n, bannerAnimated: a }),
            }),
            (0, c.jsx)("div", {
                className: se.HQ,
                children: (0, c.jsxs)("div", {
                    className: se.Yn,
                    children: [
                        null != t.endTime ? (0, c.jsx)(tT, { endDate: t.endTime, size: "lg" }) : null,
                        (0, c.jsx)(ed.D, {
                            variant: "heading-xxl/bold",
                            className: se.DD,
                            color: "text-strong",
                            style: { ...i },
                            children: t.title,
                        }),
                        r || o
                            ? (0, c.jsxs)(J.E, {
                                  variant: "text-md/medium",
                                  style: { ...i },
                                  children: [
                                      r && t.body,
                                      r && o && " ",
                                      o &&
                                          (0, c.jsx)(t3.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: se.CU,
                                              style: { ...i },
                                              children: B.intl.string(B.t.O7ADgv),
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
var ss = s(189213),
    sl = s(290136),
    sn = s(478016),
    sa = s(825484),
    si = s(269115),
    sr = s(812993),
    so = s(713517),
    sc = s(914410),
    sd = s(564064),
    su = s(597783),
    sg = s(61750);
function sm(e, t) {
    let s = d.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        l = (0, N.bG)([Y.A], () => Y.A.getPurchases(s));
    return {
        readyToClaim: d.useMemo(() => l.length === s.length, [l, s]),
        collectibleProductSkuIds: s,
        collectedSkuIds: l,
    };
}
var sh = s(496569),
    sE = s(498924);
let sx = d.memo(function (e) {
        let { category: t, rewardSkuId: s } = e,
            { handleCardVisibilityChange: l } = (0, su.Z)(s),
            n = d.useRef(null),
            { isHoveringOrFocusing: a } = (0, so.A)(n),
            { readyToClaim: i, collectibleProductSkuIds: r, collectedSkuIds: o } = sm(t, s),
            u = (0, N.bG)([Y.A], () => Y.A.isClaiming === s);
        return (0, c.jsx)(si.L, {
            onChange: l,
            threshold: 0,
            innerRef: n,
            children: (0, c.jsx)("div", {
                ref: n,
                className: g()(sh.ty, sE.Q3, { [sh.yo]: a }),
                "aria-label": B.intl.formatToPlainString(B.t.Ez6aHE, { category: t.name }),
                children: (0, c.jsxs)("div", {
                    className: sh.qt,
                    children: [
                        (0, c.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: sE.L8,
                        }),
                        (0, c.jsx)("div", {
                            className: sh.N1,
                            children: (0, c.jsx)(sr.Lp, {
                                text: B.intl.string(B.t.rykAJ9),
                                disableColor: !0,
                                className: sE.HZ,
                            }),
                        }),
                        (0, c.jsxs)("div", {
                            className: sh.xQ,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: sE.xE,
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: sE.cs,
                                            children: [
                                                (0, c.jsx)(ed.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: sh.tZ,
                                                    children: B.intl.string(B.t["0mDmg/"]),
                                                }),
                                                (0, c.jsx)(eU.m, {
                                                    text: i
                                                        ? B.intl.string(B.t.cKH3tk)
                                                        : B.intl.formatToPlainString(B.t["8aMDPc"], {
                                                              totalCount: r.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, c.jsx)("span", {
                                                        className: sE.ZB,
                                                        children: (0, c.jsx)(sl.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)("div", {
                                            className: sh.oh,
                                            "aria-hidden": !0,
                                            children: (0, c.jsxs)("div", {
                                                className: sE.L$,
                                                children: [
                                                    (0, c.jsx)(sc.Ay, {
                                                        variant: sc.qP.BLUE,
                                                        progress: o.length,
                                                        maximum: r.length,
                                                    }),
                                                    (0, c.jsxs)("div", {
                                                        className: g()(sE.__, { [sE.gF]: i }),
                                                        children: [
                                                            i
                                                                ? (0, c.jsx)(sn.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, c.jsx)(J.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: B.intl.formatToPlainString(B.t["5TwASM"], {
                                                                    collectedCount: o.length,
                                                                    totalCount: r.length,
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
                                    className: sh.Vs,
                                    children: (0, c.jsx)(sa.e, {
                                        wrap: !1,
                                        className: sh.Ld,
                                        fullWidth: !0,
                                        children: (0, c.jsx)(Q.$, {
                                            variant: "primary",
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    i &&
                                                        (0, sd.BX)(t.skuId, s)
                                                            .then(() => {
                                                                let e = L.A.getProduct(s);
                                                                null != e &&
                                                                    (0, sg.A)({
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
                                                                        (0, c.jsx)(ss.Modal, {
                                                                            transitionState: e.transitionState,
                                                                            onClose: e.onClose,
                                                                            size: "sm",
                                                                            title: B.intl.string(B.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: B.intl.string(B.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, c.jsx)("div", {
                                                                                children: B.intl.string(B.t["0YpIF/"]),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            });
                                            },
                                            text: B.intl.string(B.t.VnVTNc),
                                            fullWidth: !0,
                                            disabled: !i,
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
    sp = (e) => {
        let t,
            s,
            l,
            { isBlockLoading: n = !1, heroBlock: a, tab: i } = e,
            r = (0, ev.Mk)(i, "RewardHeroBlockCards"),
            o = d.useMemo(() => L.A.getCategoryForProduct(a.rewardSkuId), [a.rewardSkuId]),
            u = (0, N.bG)([Y.A], () => Y.A.getPurchase(a.rewardSkuId)),
            { products: g } =
                ((t = (0, tq.A)()),
                (s = d.useMemo(
                    () => (n ? [] : t(a.rankedSkuIds).filter((e) => e.skuId !== a.rewardSkuId || null != u)),
                    [n, t, a.rankedSkuIds, u, a.rewardSkuId],
                )),
                (l = (0, eE.p)()(s)),
                { products: (0, ex.X)(l) }),
            m = d.useMemo(
                () =>
                    !n &&
                    0 !== a.rankedSkuIds.length &&
                    !(g.length > 0) &&
                    a.rankedSkuIds.every((e) => L.A.getProduct(e)?.variantGroupStoreListingId != null),
                [n, a.rankedSkuIds, g.length],
            ),
            h = n || m,
            { readyToClaim: E } = sm(o, a.rewardSkuId),
            x = null == u && null != a.rewardSkuId && null != o;
        return (0, c.jsx)(t5.A, {
            gap: "xl",
            children: h
                ? (0, c.jsx)(c.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, c.jsx)(ef.A, {}, t)),
                  })
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          x &&
                              E &&
                              (0, c.jsx)(
                                  v.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, c.jsx)(sx, { category: o, rewardSkuId: a.rewardSkuId }),
                                  },
                                  a.rewardSkuId,
                              ),
                          g.map((e, t) => {
                              let s = L.A.getCategoryForProduct(e.skuId);
                              return null == e || null == s
                                  ? null
                                  : (0, c.jsx)(
                                        v.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, c.jsx)(eA.A, { skuId: e.skuId, prioritizedCurrency: r }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, tP.$b)(90);
let sC = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: th.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    sf = (e) => {
        let { isLoading: t = !1, heroBlock: s, tab: l, onVisibilityChange: n } = e,
            a = (0, eg.K)(
                (e) => {
                    n?.(e);
                },
                0.1,
                null != n,
            ),
            i = (0, N.bG)([A.default], () => A.default.getCurrentUser()),
            { analyticsLocations: r } = (0, f.Ay)(tM.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: o,
                logoDisplayConfig: d,
                heroLogo: u,
                heroBannerStatic: m,
                heroBannerAnimated: h,
            } = (0, t6.Kk)(s),
            E = o?.responsive ?? !1,
            x = o?.backgroundStyle;
        return null != i && (t || s !== sC)
            ? (0, c.jsx)(f.f5, {
                  value: r,
                  children: (0, c.jsxs)("div", {
                      ref: a,
                      className: tD.os,
                      children: [
                          (0, c.jsx)("div", {
                              className: g()(tD.vK, { [tD.no]: E }),
                              style: null != x ? { background: x } : void 0,
                              children:
                                  null != m &&
                                  (0, c.jsx)(t8.A, { bannerStatic: m, bannerAnimated: h, isResponsive: E }),
                          }),
                          (0, c.jsxs)("div", {
                              className: tD.xX,
                              children: [
                                  (0, c.jsx)("div", {
                                      className: g()(tD.bC, { [tD.no]: E }),
                                      children: t
                                          ? (0, c.jsx)("div", { className: tD.Hw })
                                          : (0, c.jsx)("div", {
                                                className: tD.Hw,
                                                children: (0, c.jsxs)("div", {
                                                    className: tD.Wq,
                                                    children: [
                                                        null != u &&
                                                            (0, c.jsx)("img", {
                                                                className: tD.rm,
                                                                src: u,
                                                                alt: s.name,
                                                                style: d?.toDesktopStyles(),
                                                            }),
                                                        null != s.title &&
                                                            (0, c.jsx)(ed.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: tD.DD,
                                                                color: "text-strong",
                                                                children: s.title,
                                                            }),
                                                        "" !== s.summary &&
                                                            (0, c.jsx)(J.E, {
                                                                variant: "text-md/normal",
                                                                className: tD.Tm,
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
                                  (0, c.jsx)(sp, { isBlockLoading: t, heroBlock: s, tab: l }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var sb = s(609196);
let s_ = (e) => {
    let { shelf: t, handleTransition: s, tab: l } = e,
        n = (0, N.bG)([A.default], () => A.default.getCurrentUser()),
        a = (0, ev.Mk)(l, "ShelfBlock"),
        i = (0, N.bG)([L.A], () => (null != t.categorySkuId ? L.A.getCategory(t.categorySkuId) : void 0)),
        r = (0, tq.A)(),
        o = d.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r]),
        u = (0, ex.X)(o),
        { analyticsLocations: m } = (0, f.Ay)(tM.A.COLLECTIBLES_SHOP_SHELF),
        h = d.useCallback(() => {
            s({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: i?.isOrbsExclusive === !0 && l !== M.G2.ORBS,
            });
        }, [t.categorySkuId, i, s, l]);
    if (null == n || 0 === u.length) return null;
    let E = t.buttonText ?? B.intl.formatToPlainString(B.t.bc9RBE, { category_name: t.name }),
        x = t.showButton,
        p = t.desktopBackgroundImage,
        C = null != p;
    return (0, c.jsx)(f.f5, {
        value: m,
        children: (0, c.jsxs)("div", {
            className: g()(sb.mu, tD.YB, C ? sb.VA : sb.Ti),
            children: [
                C && (0, c.jsx)("img", { className: sb.iL, src: p, alt: "", "aria-hidden": !0 }),
                (0, c.jsxs)("div", {
                    className: sb.Qs,
                    children: [
                        (0, c.jsxs)("div", {
                            className: sb.wx,
                            children: [
                                (0, c.jsx)(ed.D, {
                                    variant: "heading-lg/semibold",
                                    style: C ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                x &&
                                    (0, c.jsx)(Q.$, {
                                        variant: C ? "overlay-primary" : "secondary",
                                        text: E,
                                        onClick: h,
                                    }),
                            ],
                        }),
                        (0, c.jsx)(t5.A, {
                            gap: "xl",
                            edgeFade: C ? "sm" : void 0,
                            children: u.map((e, s) =>
                                null == L.A.getCategoryForProduct(e.skuId)
                                    ? null
                                    : (0, c.jsx)(
                                          v.R9,
                                          {
                                              newValue: { tilePosition: s, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, c.jsx)(eA.A, { skuId: e.skuId, prioritizedCurrency: a }),
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
var sS = s(465794),
    sj = s(44724),
    sA = s(421108),
    sv = s(873297);
let sL = (e) => {
    let {
            onDismiss: t,
            applicationId: s,
            headerText: l,
            gradientColors: n,
            gradientAngle: a,
            skuIds: i,
            tab: r,
            endTime: o,
            ctaType: u = "storefront",
            logoUrl: g,
        } = e,
        m = (0, sA.u)(o) ?? void 0,
        h = d.useMemo(
            () =>
                "nitro" === u
                    ? {
                          kind: "custom",
                          node: (0, c.jsx)(sS.A, {
                              size: "sm",
                              applicationId: s,
                              subscriptionTier: P.pe.TIER_2,
                              buttonTextOverride: B.intl.string(B.t.pj0XBN),
                          }),
                      }
                    : {
                          kind: "button",
                          text: B.intl.string(B.t.apFNLU),
                          onClick: () => (0, sj.default)({ applicationId: s }),
                          onMouseDown: () => (0, sj.G)({ applicationId: s }),
                      },
            [u, s],
        );
    return (0, c.jsx)(sv.A, {
        onDismiss: t,
        skuIds: i,
        tab: r,
        applicationId: s,
        headerText: l,
        logoUrl: g,
        cta: h,
        timeLeftText: m,
        analyticsSection: "slayer-storefront-promotional-banner",
        analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
        analyticsImpressionType: "social_layer_storefront_promotional_banner",
        backgroundGradient: `linear-gradient(${a}deg, ${n.join(", ")})`,
    });
};
var sI = s(575593),
    sO = s(770178),
    sN = s(929283),
    sT = s(275483);
let sk = [
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
    sR = (e) => {
        let { config: t, baseLeft: s, transitioning: l } = e,
            n = window.innerHeight,
            a = L.A.getProduct(t.skuId),
            i = a?.items[0],
            r = a?.type,
            o = s + t.horizontalJitter;
        return (0, c.jsx)("div", {
            className: sT.LY,
            style: {
                top: l ? -n - 384 : t.top,
                left: l ? o + t.transitionOffsetLeft : o,
                transform: `rotate(${t.rotation}deg)`,
                height: 160,
                width: 160,
                transitionDelay: t.transitionDelay,
                transitionDuration: t.transitionDuration,
            },
            children: null != i && r === sI.R.AVATAR_DECORATION && (0, c.jsx)(sN.i, { item: i }),
        });
    },
    sy = (e) => {
        let { peaking: t, transitioning: s, parentWidth: l } = e,
            [n, a] = d.useState(!1),
            [i, r] = d.useState([]),
            [o] = d.useState(() =>
                [...sk]
                    .sort(() => Math.random() - 0.5)
                    .map((e) => ({
                        skuId: e,
                        top: 0 + 48 * Math.random(),
                        rotation: -32 + 64 * Math.random(),
                        horizontalJitter: -(20 * Math.random()),
                        transitionOffsetLeft: -20 - 35 * Math.random(),
                        transitionDelay: `${Math.random() / 3}s`,
                        transitionDuration: `${M.H1 - 200 * Math.random()}ms`,
                    })),
            );
        return (
            d.useEffect(() => {
                if (null != l && l > 0) {
                    let e = Math.max(1, Math.floor(l / 130)),
                        t = l / e;
                    r(Array.from({ length: e }, (e, s) => ({ config: o[s % o.length], baseLeft: s * t })));
                }
            }, [l, o]),
            d.useEffect(() => {
                s && setTimeout(() => a(!0), M.H1);
            }, [s]),
            (0, c.jsx)("div", {
                className: g()(sT.rA, { [sT.Kb]: t, [sT.pp]: n }),
                children: i.map((e, t) => {
                    let { config: l, baseLeft: n } = e;
                    return (0, c.jsx)(sR, { config: l, baseLeft: n, transitioning: s }, l.skuId + t);
                }),
            })
        );
    },
    sM = (e) => {
        let { peaking: t, transitioning: s } = e,
            l = d.useRef(null),
            [n, a] = d.useState(0),
            i = d.useCallback(() => {
                null != l.current && a(l.current.offsetWidth);
            }, []);
        return (
            (0, sO.g)(l, i),
            (0, c.jsx)("div", {
                ref: l,
                className: sT.eL,
                children: (0, c.jsx)(sy, { peaking: t, transitioning: s, parentWidth: n }),
            })
        );
    };
var sP = s(815021),
    sB = s(43990),
    sD = s(976860),
    sH = s(49999);
let sw = (e) => {
    let { wideBannerBlock: t, tab: s } = e,
        l = L.A.getCategoryByStoreListingId(t.categoryStoreListingId),
        n = d.useRef(null),
        a = d.useRef(null),
        [i, r] = d.useState(),
        [o, u] = d.useState(!1);
    d.useEffect(() => {
        let e = a.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && r(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let m = l?.skuId ?? "",
        { handleCardVisibilityChange: h } = (0, su.Z)(m, "home", "marketing wide banner"),
        E = (0, v.uM)(),
        { bannerURL: x } = (0, t6.w$)(t),
        p = s === M.G2.ORBS,
        C = null != t.ctaRoute && "" !== t.ctaRoute,
        f = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || C),
        b = null != t.logoURL && "" !== t.logoURL,
        _ = d.useCallback(() => {
            if ((u(!0), t.isDismissible)) {
                let e = t.dismissibleContentVersion ?? 0;
                (0, tx.$l)(tE.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: sH.i.USER_DISMISS });
            }
        }, [t.isDismissible, t.dismissibleContentVersion]),
        S = d.useCallback(
            (e) => {
                es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        j = d.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if ((S(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                    let e = t.ctaRoute;
                    if (e.includes("game-shop")) {
                        let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                        if (null != t) {
                            let e = t[1],
                                s = parseInt(t[2], 10);
                            (0, sj.default)({ guildId: e, pageIndex: s });
                        }
                    } else (0, sD.pX)(e);
                }
            },
            [t.ctaRoute, S],
        );
    if (null == x || o) return null;
    let A = g()(tD.nM, tD.Tq, tD.TS, tD.YB, { [tD._1]: p, [tD.vb]: C }),
        I = (0, c.jsxs)(c.Fragment, {
            children: [
                t.isDismissible &&
                    (0, c.jsx)("div", {
                        className: tD.Mh,
                        children: (0, c.jsx)(sP.J, {
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(), _();
                            },
                            "aria-label": B.intl.string(B.t.WAI6xu),
                        }),
                    }),
                (0, c.jsx)("div", {
                    className: g()(tD.zK, { [tD._1]: p }),
                    style: null != i ? { height: `${i}px` } : void 0,
                    children: (0, c.jsx)("img", {
                        ref: a,
                        src: x,
                        alt: t.title,
                        className: g()(tD.LN, { [tD.d5]: p }),
                    }),
                }),
                (0, c.jsx)("div", {
                    className: g()(tD.Ep, { [tD.Qq]: f }),
                    style: { maxHeight: null != i ? `${i}px` : "auto" },
                    children: (0, c.jsxs)("div", {
                        className: tD.E8,
                        children: [
                            (0, c.jsx)(ed.D, {
                                style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                className: p ? tD.O2 : void 0,
                                variant: "heading-xl/bold",
                                children: t.title,
                            }),
                            (0, c.jsx)(J.E, {
                                style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                lineClamp: 2,
                                variant: p ? "text-md/medium" : "text-sm/medium",
                                children: p
                                    ? B.intl.format(B.t.SFFP7K, {
                                          helpdeskArticle: tQ.A.getArticleURL(el.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : t.body,
                            }),
                            f &&
                                (0, c.jsxs)("div", {
                                    className: tD.nP,
                                    children: [
                                        (0, c.jsx)(Q.$, {
                                            variant: "overlay-primary",
                                            onClick: (e) => {
                                                e.stopPropagation(), j(t.ctaText ?? B.intl.string(B.t.jVcuVY));
                                            },
                                            text: t.ctaText ?? B.intl.string(B.t.jVcuVY),
                                            "aria-label":
                                                null == t.ctaText && null != t.title
                                                    ? B.intl.formatToPlainString(B.t.frSHlf, { destination: t.title })
                                                    : void 0,
                                        }),
                                        b && (0, c.jsx)("img", { src: t.logoURL, alt: "", className: tD.bU }),
                                    ],
                                }),
                        ],
                    }),
                }),
            ],
        });
    return (0, c.jsx)(sB.N, {
        theme: p ? void 0 : e3.NJ.DARK,
        children: (e) =>
            (0, c.jsx)(si.L, {
                innerRef: n,
                onChange: h,
                threshold: 0,
                children: C
                    ? (0, c.jsx)(eK.D, { innerRef: n, onClick: () => j(null), className: g()(e, A), children: I })
                    : (0, c.jsx)("div", { ref: n, className: g()(e, A), children: I }),
            }),
    });
};
var sF = s(757036),
    sU = s(212739);
let sG = (0, R.mj)({ name: "2026-05-orbs-shop-upsell-banner", kind: "user", defaultConfig: !1, variations: { 1: !0 } });
var sz = s(462887),
    sV = s(765671),
    sW = s(303136),
    sK = s(792656),
    sY = s(363195),
    s$ = s(901123),
    sq = s(314489),
    sZ = s(909340);
let sX = (e) => {
        let { category: t, tab: s } = e,
            { ref: l, width: n } = (0, sV.Ay)(),
            a = null != n && n <= 560,
            i = (0, h.bG)([sY.A], () => (0, sz.q)(sY.A.theme)),
            r = t?.skuId ?? "",
            { handleCardVisibilityChange: o } = (0, su.Z)(r, "home", "marketing orbs upsell banner"),
            u = (0, v.uM)(),
            { analyticsLocations: m } = (0, f.Ay)(tM.A.COLLECTIBLES_SHOP_ORBS_UPSELL_BANNER),
            E = d.useCallback(() => {
                es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: u?.sessionId,
                    sku_id: r,
                    page_type: s,
                    page_section: u?.pageSection,
                    page_category: u?.pageCategory,
                    tile_type: "PREMIUM_UPSELL_BANNER",
                    tile_position: String(u?.tilePosition),
                    cta_name: "nitro_home",
                    location_stack: m,
                });
            }, [u, m, r, s]);
        return (0, c.jsx)(f.f5, {
            value: m,
            children: (0, c.jsx)(sB.N, {
                theme: el.NJ8.DARKER,
                children: (e) =>
                    (0, c.jsx)(si.L, {
                        innerRef: l,
                        onChange: o,
                        threshold: 0,
                        children: (0, c.jsxs)("div", {
                            ref: l,
                            className: g()(e, sq.kL),
                            children: [
                                (0, c.jsx)(sW.A, { className: sq.Ki, src: sZ.A }),
                                (0, c.jsxs)("div", {
                                    className: sq.Qs,
                                    children: [
                                        (0, c.jsx)(ed.D, {
                                            variant: "heading-xl/normal",
                                            color: "text-strong",
                                            className: sq.R_,
                                            children: B.intl.string(B.t["50J7mj"]),
                                        }),
                                        (0, c.jsx)(J.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: sq.rf,
                                            children: B.intl.format(B.t.NU5ZId, { monthlyOrbsAmount: 250 }),
                                        }),
                                        (0, c.jsxs)("div", {
                                            className: sq.R$,
                                            children: [
                                                (0, c.jsx)(sK.A, {
                                                    subscriptionTier: P.pe.TIER_2,
                                                    variantOverride: "expressive",
                                                    size: "md",
                                                    fullWidth: a,
                                                }),
                                                (0, c.jsx)(Q.$, {
                                                    variant: "secondary",
                                                    size: "md",
                                                    fullWidth: a,
                                                    text: B.intl.string(B.t.PcTCB7),
                                                    onClick: () => {
                                                        E(), (0, sD.pX)(s$.BV.NITRO_HOME);
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, c.jsx)("img", {
                                    className: sq.Qw,
                                    src: i
                                        ? "https://cdn.discordapp.com/assets/content/420a4e1cb9c1a54bd5776ac56e9de1d367b8c67e62bd32fe1d5700a5b4f7267a.png"
                                        : "https://cdn.discordapp.com/assets/content/d6da9b26d5c975c5f6777daed881adab32770303da1bbf6d63953a5b53456708.png",
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                            ],
                        }),
                    }),
            }),
        });
    },
    sJ = (e) => {
        let { index: t, wideBannerBlock: s, tab: l } = e,
            n = sG.useConfig({ location: "CollectiblesShopBannerSelector" }),
            a = (0, sF.L)(P.PremiumTypes.TIER_2),
            i = (0, sU.O)();
        if (n && !a && !i && l === M.G2.ORBS) {
            let e = L.A.getCategoryByStoreListingId(s.categoryStoreListingId);
            return (0, c.jsx)(sX, { category: e, tab: l }, t);
        }
        return (0, c.jsx)(sw, { wideBannerBlock: s, tab: l }, t);
    },
    sQ = (e) => {
        let { handleTransition: t, numVisibleItems: s, isFetchingCategories: l, tab: n } = e,
            { noCache: a, includeUnpublished: i } = (0, eI.A)(),
            [r, o] = d.useState(!1),
            u = (0, v.uM)(),
            m = u?.sessionId ?? "";
        d.useEffect(() => {
            (0, ep.z)({
                sessionId: m,
                checkpoint: ep.t.SHOP_MOUNTED,
                tab: n,
                unpublishedCategoriesShown: i,
                cacheDisabled: a,
            });
        }, [n]);
        let {
                isFetchingShopHome: h,
                fetchShopHomeError: E,
                shopBlocks: x,
                refreshShopHome: p,
            } = (0, tf.y)(n, { noCache: a, includeUnpublished: i, logPerf: !0 }, { sessionId: m, tab: n }),
            C = d.useCallback(() => {
                p();
            }, [p]),
            f = d.useMemo(() => x.some((e) => e instanceof tb.p), [x])
                ? (0, c.jsx)(tS.A, { location: "CollectiblesShop" })
                : null;
        return (d.useEffect(() => {
            null != E ||
                h ||
                0 === x.length ||
                (0, ep.z)({
                    sessionId: m,
                    checkpoint: ep.t.SHOP_RENDERED,
                    tab: n,
                    unpublishedCategoriesShown: i,
                    cacheDisabled: a,
                });
        }, [E, h, x.length, i, a, m, n]),
        null != E)
            ? (0, c.jsx)(tm.h, { onRetry: C, errorOrigin: tm.A.SHOP_PAGE, errorMessage: E.message })
            : h || 0 === x.length
              ? (0, c.jsxs)("div", {
                    className: g()(tD.g4, tD.Of),
                    children: [
                        (0, c.jsx)(t9.A, { isLoading: h, handleTransition: t, tab: n }),
                        (0, c.jsx)(tF, { isLoading: h, handleTransition: t, categories: [] }),
                        (0, c.jsx)(t2, {
                            isLoading: h,
                            title: n === M.G2.ORBS ? B.intl.string(B.t.dFgeuZ) : B.intl.string(B.t.NSv5KV),
                            numVisibleItems: s,
                            tab: n,
                        }),
                    ],
                })
              : (0, c.jsx)(c.Fragment, {
                    children: x.map((e, a) =>
                        ((e, a, i) => {
                            if (null == e) return null;
                            let d = null,
                                u = !1;
                            switch (e.type) {
                                case th.g.HERO:
                                    d = (0, c.jsx)(
                                        t9.A,
                                        { isLoading: h, handleTransition: t, heroBlock: e, tab: n, badge: f },
                                        i,
                                    );
                                    break;
                                case th.g.FEATURED:
                                    d = (0, c.jsx)(
                                        tF,
                                        { isLoading: h, handleTransition: t, featuredBlockRecord: e },
                                        i,
                                    );
                                    break;
                                case th.g.FEED:
                                    let m = e.sortedSkuIds;
                                    d = (0, c.jsx)(
                                        t2,
                                        {
                                            title:
                                                n === M.G2.ORBS ? B.intl.string(B.t.dFgeuZ) : B.intl.string(B.t.NSv5KV),
                                            isLoading: l,
                                            numVisibleItems: s,
                                            sortedSkuIds: m,
                                            buttonContainerClassName: a?.type === th.g.IMMERSIVE_BANNER ? tD.w : void 0,
                                            prioritizeUserDiscounts: n === M.G2.HOME,
                                            tab: n,
                                            orbsSupportedOnly: n === M.G2.ORBS,
                                        },
                                        i,
                                    );
                                    break;
                                case th.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: s } = (0, tx.En)(tE.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (s) return null;
                                    }
                                    d = (0, c.jsx)(sJ, { index: i, wideBannerBlock: e, tab: n }, i);
                                    break;
                                case th.g.FRAMES_BANNER:
                                    d = (0, c.jsx)(
                                        sw,
                                        {
                                            wideBannerBlock: t_.y.fromServer({
                                                type: th.g.WIDE_BANNER,
                                                title: e.title,
                                                body: e.body,
                                                wide_banner_url: e.desktopBackgroundImage,
                                                banner_text_color: "white",
                                                banner_body_text_color: "white",
                                                disable_cta: !0,
                                            }),
                                            tab: n,
                                        },
                                        i,
                                    );
                                    break;
                                case th.g.FRAMES_PRODUCT_SHELF:
                                    d = (0, c.jsx)(t7, { block: e, handleTransition: t, tab: n }, i);
                                    break;
                                case th.g.SHELF:
                                    d = (0, c.jsx)(s_, { handleTransition: t, shelf: e, tab: n }, i);
                                    break;
                                case th.g.COUNTDOWN_TIMER:
                                    (d = (0, c.jsx)(tR, { countdownTimerBlock: e, isVisible: r }, i)), (u = !0);
                                    break;
                                case th.g.IMMERSIVE_BANNER:
                                    d = (0, c.jsx)(
                                        st,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => o(!e) },
                                        i,
                                    );
                                    break;
                                case th.g.REWARD_HERO:
                                    d = (0, c.jsx)(sf, { isLoading: h, handleTransition: t, heroBlock: e, tab: n }, i);
                                    break;
                                case th.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER: {
                                    let { isDismissed: t } = (0, tx.En)(
                                        tE.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
                                    );
                                    if (t) return null;
                                    return (0, c.jsx)(
                                        tC,
                                        {
                                            blockType: e.type,
                                            children: (0, c.jsx)(sL, {
                                                onDismiss: () => {
                                                    (0, tx.d6)(
                                                        tE.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
                                                        {},
                                                    );
                                                },
                                                applicationId: e.applicationId,
                                                headerText: e.headerText,
                                                gradientColors: e.gradientColors,
                                                gradientAngle: e.gradientAngle,
                                                skuIds: e.skuIds,
                                                tab: n,
                                                endTime: e.endTime,
                                                ctaType: e.ctaType,
                                                logoUrl: e.logoUrl,
                                            }),
                                        },
                                        i,
                                    );
                                }
                                default:
                                    return null;
                            }
                            return (0, c.jsx)(
                                tC,
                                {
                                    blockType: e.type,
                                    children: (0, c.jsx)("div", {
                                        className: g()(tD.v1, tD.Of, { [tD.J1]: 0 === i || u }),
                                        children: d,
                                    }),
                                },
                                i,
                            );
                        })(e, a > 0 ? x[a - 1] : null, a),
                    ),
                });
    },
    s0 = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            n = d.useRef(null),
            { handleScroll: a } = ea(n, s),
            i = (0, eL.U)(),
            r = (0, v.uM)(),
            [o, u] = d.useState(M.md),
            [g, m] = d.useState(!1);
        return (
            d.useEffect(() => {
                if (null != n.current) {
                    let e = () => {
                            if (null == n.current) return;
                            let e = n.current.getDistanceFromBottom();
                            o >= 36 ? m(e < 20) : e <= 200 && u((e) => e + M.md);
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
            (0, c.jsx)(Z.Ch, {
                className: tD.OW,
                ref: n,
                onScroll: a,
                children: (0, c.jsxs)("div", {
                    className: tD.bx,
                    children: [
                        (0, c.jsxs)("div", {
                            className: tD.rb,
                            children: [
                                (0, c.jsx)(sQ, {
                                    handleTransition: t,
                                    numVisibleItems: o,
                                    isFetchingCategories: i,
                                    tab: s,
                                }),
                                s !== M.G2.CATALOG &&
                                    o >= 36 &&
                                    (0, c.jsxs)("div", {
                                        className: tD.R$,
                                        children: [
                                            (0, c.jsx)(ed.D, {
                                                variant: "heading-md/semibold",
                                                children: B.intl.string(B.t.Yr70c4),
                                            }),
                                            (0, c.jsx)(Q.$, {
                                                variant: "primary",
                                                text: B.intl.string(B.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: r?.sessionId,
                                                            page_type: s,
                                                            page_category: s === M.G2.HOME ? void 0 : r?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, c.jsx)(sM, { peaking: g, transitioning: l === M.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var s1 = s(154323),
    s2 = s(295811),
    s5 = s(870216);
let s4 = { "Any:personalization-header": t1 },
    s7 = { [eo.b.SHOP_HOME]: s4 },
    s9 = { "1465939725649973269": s4, "1478495181551440044": s4 },
    s3 = () =>
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
    s6 = { prioritizedCurrency: ev.Hi.ORBS },
    s8 = (e) => {
        let { tab: t } = e,
            [s, l, n] = (0, N.yK)([s5.A], () => [
                s5.A.getLayout(t),
                s5.A.isFetchingLayout(t),
                s5.A.getLayoutFetchError(t),
            ]),
            a = (0, N.bG)([s1.A], () => s1.A.get("shop_include_unpublished")),
            i = (0, N.bG)([L.A], () => L.A.skipNumCategories),
            r = d.useMemo(() => {
                let e = {};
                return !0 === a && (e.include_unpublished = !0), null != i && i > 0 && (e.skip_num_categories = i), e;
            }, [a, i]),
            o = null == s && !l && n?.status !== 404 && n?.status !== 429;
        if (
            (d.useEffect(() => {
                o && (0, sd.T2)({ tab: t });
            }, [o, t]),
            null == s)
        )
            return t !== z.HOME || o || l
                ? null
                : (0, c.jsx)(er.Z_, {
                      tenantId: el.FYj,
                      templateId: eo.b.SHOP_HOME,
                      requestParams: r,
                      overrides: s7[eo.b.SHOP_HOME],
                  });
        let u = (0, c.jsx)(er.Qs, { tenantId: el.FYj, layoutId: s, overrides: s9[s] });
        return (0, c.jsxs)(c.Fragment, {
            children: [
                t === z.ORBS && (0, c.jsx)(s3, {}),
                t === z.ORBS ? (0, c.jsx)(ev.v3.Provider, { value: s6, children: u }) : u,
            ],
        });
    },
    le = (e) => {
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
            : (0, c.jsx)(er.Ay, { layout: s });
    },
    lt = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            n = (0, v.uM)(),
            a = (0, N.bG)([s2.A], () => s2.A.getShopLayoutUrlOverride()),
            i = d.useRef(null),
            { handleScroll: r } = ea(i, s),
            [o, u] = d.useState(M.md),
            [m, h] = d.useState(!1);
        return (
            d.useEffect(() => {
                if (null != i.current) {
                    let e = () => {
                            if (null == i.current) return;
                            let e = i.current.getDistanceFromBottom();
                            o >= 36 ? h(e < 20) : e <= 200 && u((e) => e + M.md);
                        },
                        t = i.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [i, o, u, h]),
            (0, c.jsx)(Z.Ch, {
                className: tD.OW,
                ref: i,
                onScroll: r,
                children: (0, c.jsxs)("div", {
                    className: tD.bx,
                    children: [
                        (0, c.jsxs)("div", {
                            className: g()(tD.rb, tD.GS),
                            children: [
                                null != a && "" !== a ? (0, c.jsx)(le, { url: a }) : (0, c.jsx)(s8, { tab: s }),
                                s !== z.CATALOG &&
                                    o >= 36 &&
                                    (0, c.jsxs)("div", {
                                        className: tD.R$,
                                        children: [
                                            (0, c.jsx)(ed.D, {
                                                variant: "heading-md/semibold",
                                                children: B.intl.string(B.t.Yr70c4),
                                            }),
                                            (0, c.jsx)(Q.$, {
                                                variant: "primary",
                                                text: B.intl.string(B.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: n?.sessionId,
                                                            page_type: s,
                                                            page_category: s === z.HOME ? void 0 : n?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, c.jsx)(sM, { peaking: m, transitioning: l === M.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var ls = s(256067);
let ll = () =>
        (0, c.jsxs)("div", {
            className: ls.z,
            children: [
                (0, c.jsx)("img", {
                    className: ls.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: B.intl.string(B.t["p8+qtU"]),
                }),
                (0, c.jsx)(ed.D, { variant: "heading-xl/semibold", children: B.intl.string(B.t["p8+qtU"]) }),
                (0, c.jsx)(J.E, { variant: "text-md/medium", children: B.intl.string(B.t.UEiyvs) }),
            ],
        }),
    ln = [M.G2.HOME, M.G2.ORBS];
function la(e) {
    let {
            tab: t,
            categories: s,
            transitionToTab: l,
            transitionState: n,
            updateAnalyticsState: a,
            refreshCategories: i,
        } = e,
        r = li();
    lr(r);
    let o = (0, N.bG)([V.Ay], () => V.Ay.useReducedMotion),
        u = (0, G.W6)(),
        [g] = d.useState(() => {
            if ("POP" === u.action) {
                let e;
                return (e = eO), (eO = null), e ?? void 0;
            }
        }),
        [m, h] = d.useState(g),
        [E, x] = d.useState(null == g),
        p = d.useMemo(
            () =>
                s.filter(
                    (e) =>
                        !M.MS.some((t) => {
                            let { categorySkuId: s } = t;
                            return s === e.skuId;
                        }),
                ),
            [s],
        ),
        C = (0, W.U)("CollectiblesContent"),
        f = (0, $.a)("CollectiblesContent"),
        b = d.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: s,
                    shouldAnimate: n,
                    isInternalShopDeeplink: i,
                    isOrbsExclusive: r,
                } = e;
                if ((a(t, s), f && null != s && i && !r))
                    return void u.push(el.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(s));
                let c = n && !o,
                    d = r ? M.G2.ORBS : M.G2.CATALOG;
                h(s), x(!i), l(d, c);
            },
            [o, l, a, f, u],
        ),
        { searchError: _ } = (0, q.S)();
    return null != _
        ? (0, c.jsx)(ll, {})
        : null != r
          ? (0, c.jsx)(tm.h, { onRetry: i, errorMessage: r, errorOrigin: tm.A.SHOP_PAGE })
          : t === M.G2.HOME && C
            ? (0, c.jsx)(lt, { tab: z.HOME, transitionState: n, handleTransition: b })
            : t === M.G2.ORBS && C
              ? (0, c.jsx)(lt, { tab: z.ORBS, transitionState: n, handleTransition: b })
              : ln.includes(t)
                ? (0, c.jsx)(s0, { handleTransition: b, tab: t, transitionState: n })
                : (0, c.jsx)(tu, {
                      tab: t,
                      categories: p,
                      initialCategoryId: m,
                      showFilterInitially: E,
                      onUnmount: () => {
                          h(void 0), x(!0);
                      },
                  });
}
let li = () =>
        (0, N.bG)([L.A, Y.A], () =>
            null != L.A.error
                ? `shop load fetch categories error: ${L.A.error.message}`
                : null != Y.A.claimError
                  ? `shop load claim error: ${Y.A.claimError.message}`
                  : null != Y.A.fetchError
                    ? `shop load fetch purchase error: ${Y.A.fetchError.message}`
                    : void 0,
        ),
    lr = (e) => {
        let t = (0, N.bG)([A.default], () => A.default.getCurrentUser()),
            { noCache: s, includeUnpublished: l } = (0, eI.A)();
        d.useEffect(() => {
            null != e &&
                K.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: s.toString(),
                        includeUnpublished: l.toString(),
                    },
                });
        }, [e, t, s, l]);
    };
var lo = s(956123);
s(323874), s(14289), s(35956);
var lc = s(766075),
    ld = s(893489);
let lu = { pink: "pinkCountdown" },
    lg = d.memo(function (e) {
        let { message: t, onClick: s, countdownEndDate: l, variant: n } = e,
            a = d.useMemo(() => {
                if (null == l) return null;
                let e = l instanceof Date ? l : new Date(l);
                return isNaN(e.getTime()) ? null : e;
            }, [l]),
            i = (0, tO.A)(a ?? 0, 1e3, void 0, null == a);
        if (null != a && Object.values(i).every((e) => 0 === e)) return null;
        let r = null != n ? ld[n] : void 0,
            o = null != n ? ld[lu[n]] : void 0;
        return (0, c.jsx)(eK.D, {
            className: g()(ld.nagBar, r),
            onClick: s,
            "aria-label": B.intl.string(B.t["wjws+K"]),
            children: (0, c.jsxs)("div", {
                className: ld.content,
                children: [
                    (0, c.jsx)(J.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: ld.message,
                        children: t,
                    }),
                    null != a && (0, c.jsx)(tT, { endDate: a, size: "md", className: o, showSeconds: !0 }),
                ],
            }),
        });
    });
var lm = s(870308),
    lh = s(650583);
let lE = (e) => {
        let { children: t, shouldAddEventListener: s, onClose: l } = e,
            n = (0, E.useHasAnyModalOpen)();
        return (
            d.useEffect(() => {
                if (!s || n) return;
                let e = (e) => {
                    e.key === lh.N$.Escape && l();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [s, n, l]),
            t
        );
    },
    lx = function (e) {
        let { tab: t = M.G2.HOME } = e;
        (0, S.P)(_.a), (0, w.g)();
        let s = (0, C.A)((0, m.A)()),
            l = (0, h.bG)([A.default], () => A.default.getCurrentUser());
        (0, j.pE)();
        let n = (0, eB.yB)("CollectiblesShop"),
            { onClose: a } = (function () {
                let { search: e } = (0, G.zy)(),
                    t = (0, G.g)(),
                    s = d.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                    l = null != s ? parseInt(s, 10) : null;
                return {
                    onClose: d.useCallback(() => {
                        if (0 === l) {
                            (0, sD.aX)(), (0, lc.openUserSettings)();
                            return;
                        }
                        (0, sD.EL)() ? (0, sD.aX)() : (0, sD.pX)(el.BVt.APP);
                    }, [l]),
                    source: l,
                    ...t,
                };
            })(),
            { currentTab: i, hasFilters: r } = (0, U.v)(),
            o = d.useMemo(() => (t === M.G2.HOME && null != i && r() ? i : t), [t, i, r]),
            { categories: u, refreshCategories: R } = (0, H.Ay)({ logPerf: !0 }, { sessionId: s, tab: o }),
            z = d.useMemo(() => [...u.values()], [u]),
            [V, W] = d.useState(),
            K = (0, h.bG)([L.A], () => L.A.getCategory(V)?.name),
            [Y, $] = d.useState();
        (0, eR.XU)(s);
        let q = d.useCallback((e, t) => {
                $(e), W(t);
            }, []),
            { selectedTab: Z, transitionState: X, transitionToTab: J } = (0, F.o)(o);
        (0, b.HU)({ location: B.intl.string(B.t.pWG4ze) }), (0, O.uS)(s, Z, K, X, Y), (0, O.N0)(Z, l);
        let { dismissShopButtonDC: Q } = (0, lm.A)();
        d.useEffect(() => {
            Q();
        }, [Q]),
            d.useEffect(() => {
                (0, p.I)(el.BVt.COLLECTIBLES_SHOP);
            }, []);
        let ee = d.useRef(null),
            et = d.useRef(null);
        (0, x.t)(ee);
        let es = (0, E.useHasAnyModalOpen)();
        d.useEffect(() => {
            et.current?.focus();
        }, []),
            (0, eB.gB)();
        let { analyticsLocations: en } = (0, O.lC)(Z),
            ea = (function (e, t) {
                let s = (0, N.bG)([k.A], () => k.A.getUserDiscount(P.tU)),
                    l = (0, N.bG)([T.default], () => T.default.locale),
                    n = y.useConfig({ location: t }).enabled;
                if (d.useMemo(() => null != s && n && e !== M.G2.ORBS, [s, n, e])) {
                    let e =
                        null != s && null != s.expiresAt
                            ? new Date(s.expiresAt).toLocaleDateString(l, { day: "numeric", month: "numeric" })
                            : void 0;
                    return { type: 0, countdownEndDate: s?.expiresAt, message: B.intl.format(B.t.RCo9MF, { date: e }) };
                }
            })(Z, "collectibles_shop");
        return (0, c.jsx)(f.f5, {
            value: en,
            children: (0, c.jsx)(v.R9, {
                newValue: { sessionId: s, pageCategory: K, pageSize: M.l5 },
                children: (0, c.jsx)(I.iM, {
                    tab: Z,
                    children: (0, c.jsx)(lE, {
                        onClose: a,
                        shouldAddEventListener: !1,
                        children: (0, c.jsxs)("div", {
                            className: g()(e_.bx, { [eB.jP]: n }),
                            ref: et,
                            inert: es,
                            tabIndex: -1,
                            children: [
                                (0, c.jsx)(lo.G, { handleTransition: J, selectedTab: Z }),
                                null != ea &&
                                    ea.type === D.COUNTDOWN &&
                                    (0, c.jsx)(lg, {
                                        message: ea.message,
                                        onClick: () => J(M.G2.HOME),
                                        variant: "pink",
                                        countdownEndDate: ea.countdownEndDate,
                                    }),
                                (0, c.jsx)("div", {
                                    className: g()(e_.td, {
                                        [e_.RK]: X === M.Pf.VISIBLE,
                                        [e_.in]: X === M.Pf.IN,
                                        [e_.FD]: X === M.Pf.OUT,
                                    }),
                                    children: (0, c.jsx)(la, {
                                        tab: Z,
                                        refreshCategories: R,
                                        transitionToTab: J,
                                        transitionState: X,
                                        categories: z,
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
