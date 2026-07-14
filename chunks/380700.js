n.r(t), n.d(t, { default: () => sm });
var s,
    l,
    a,
    i,
    r,
    o = n(627968),
    c = n(64700),
    d = n(503698),
    u = n.n(d),
    g = n(132500),
    m = n(702841),
    h = n(192308),
    x = n(315710),
    E = n(944791),
    p = n(444927),
    f = n(688810),
    C = n(726249),
    b = n(475073),
    S = n(611924),
    _ = n(561794),
    j = n(287809),
    v = n(440938),
    A = n(590180),
    L = n(161918),
    I = n(790297),
    N = n(17928),
    O = n(773669),
    k = n(248352),
    T = n(945810);
let y = (0, T.mj)({
    name: "2026-01-valentines-day-drop",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 } },
});
var R = n(758836),
    M = n(202541),
    P = n(375708),
    B = n(841702),
    D = n(621653),
    H = n(983545),
    w = n(23161);
n(323874), n(14289), n(35956), n(321073);
var F = n(873263),
    U = (((s = {}).HOME = "home"), (s.CATALOG = "catalog"), (s.ORBS = "orbs"), s),
    G = n(775602),
    z = n(578797),
    V = n(38405),
    W = n(4227),
    K = n(50920),
    Y = n(856686),
    $ = n(689175),
    q = n(364522),
    Z = n(834730),
    X = n(821609),
    J = n(783977),
    Q = n(59520),
    ee = n(174459),
    et = n(652215);
function en(e, t, n, s) {
    let { scrollTop: l = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = s;
    if (i > 0) {
        let s = (l + a) / i;
        s > 0 &&
            ee.default.track(e, {
                scroll_visible_percent: s,
                source: n,
                page_height: Math.round(i),
                page_width: Math.round(r),
                page_session_id: t,
            });
    }
}
let es = (e, t) => {
    let { analyticsSource: n } = (0, I.lC)(t),
        s = (0, Q.I)(en, 5e3, [], { trailing: !0 }),
        l = (0, v.uM)(),
        a = l?.sessionId;
    return {
        handleScroll: c.useCallback(() => {
            if (null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    s(et.HAw.COLLECTIBLES_SHOP_SCROLLED, null != a ? a : "", n, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth,
                    });
            }
        }, [s, n, a, e]),
    };
};
var el = n(354328),
    ea = n(356118),
    ei = n(619835),
    er = n(641150),
    eo = n(297264);
function ec() {
    let { itemTypeFilters: e, searchQuery: t } = (0, w.v)((e) => e),
        { totalCount: n, isFetchingResults: s } = (0, Y.S)(),
        l = (0, w.v)((e) => e.hasFilters()),
        a = c.useCallback(() => {
            if (!l) return "";
            if (s) return P.intl.string(P.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return P.intl.format(P.t.KJMJOz, { count: n, search: e });
            }
            return 1 === e.size && e.has(er.q.AVATAR_DECORATION)
                ? P.intl.format(P.t.s1UzGQ, { count: n })
                : 1 === e.size && e.has(er.q.NAMEPLATE)
                  ? P.intl.format(P.t.ZWGN9T, { count: n })
                  : 1 === e.size && e.has(er.q.PROFILE_EFFECT)
                    ? P.intl.format(P.t["v/7apu"], { count: n })
                    : 1 === e.size && e.has(er.q.PROFILE_FRAME)
                      ? P.intl.format(P.t.eu4eRy, { count: n })
                      : 1 === e.size && e.has(er.q.BUNDLE)
                        ? P.intl.format(P.t.fZ1rdk, { count: n })
                        : P.intl.format(P.t["/rPvmQ"], { count: n });
        }, [e, n, l, t, s]);
    return (0, o.jsx)(eo.D, { variant: "heading-lg/semibold", children: a() });
}
var ed = n(172218),
    eu = n(932793),
    eg = n(940980),
    em = n(511265),
    eh = n(206077),
    ex = n(100057),
    eE = n(828515),
    ep = n(484469),
    ef = n(215688),
    eC = n(647685),
    eb = n(10);
let eS = () =>
    (0, o.jsx)("div", {
        className: eb.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, o.jsxs)(
                "div",
                {
                    className: eC.vY,
                    children: [
                        (0, o.jsx)("div", { className: u()(ef.sW, eb.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, o.jsx)(ep.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
var e_ = n(828614),
    ej = n(561769),
    ev = n(159439),
    eA = n(998694);
let eL = null;
function eI(e) {
    let { category: t } = e,
        n = (0, m.bG)([j.default], () => j.default.getCurrentUser()),
        s = (0, eh.X)(t.products),
        l = (0, em.p)()(s),
        a = (0, eg.W)("CollectiblesCatalogContent");
    return null == n || 0 === l.length
        ? null
        : (0, o.jsx)("div", {
              className: eC.vY,
              children: l.map((e, t) =>
                  (0, o.jsx)(
                      v.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, o.jsx)(
                              e_.A,
                              {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  prioritizedCurrency: a ? ej.Hi.FIAT : void 0,
                              },
                              e.skuId,
                          ),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function eN(e) {
    let { category: t } = e,
        [n, s] = c.useState(!1),
        l = (0, ed.K)(function (e) {
            s(e);
        }, 0.15),
        a = (0, F.W6)(),
        i = (0, K.a)("CollectiblesCatalogContent"),
        r = (0, v.uM)(),
        d = c.useCallback(() => {
            ee.default.track(et.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: r?.sessionId,
                sku_id: t.skuId,
                page_type: R.G2.CATALOG,
                page_section: r?.pageSection,
                page_category: t.name,
                page_index: r?.pageIndex,
                page_size: r?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (eL = t.skuId),
                a.push(et.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
        }, [r?.pageIndex, r?.pageSection, r?.pageSize, r?.sessionId, t.name, t.skuId, a]);
    return (0, o.jsxs)("div", {
        className: eC.EF,
        ref: l,
        children: [(0, o.jsx)(eE.A, { category: t, onSelect: i ? d : void 0 }), (0, o.jsx)(eI, { category: t })],
    });
}
function eO(e) {
    let { categories: t, setCategoryRef: n, currentPage: s, handlePageChange: l, initialCategoryId: a } = e,
        i = (0, v.uM)(),
        r = (0, ev.U)(),
        d = i?.sessionId ?? "",
        { noCache: u, includeUnpublished: g } = (0, eA.A)(),
        m = c.useMemo(
            () =>
                t
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [t],
        ),
        h = c.useRef(void 0);
    c.useEffect(() => {
        if (null == a || 0 === m.length) {
            h.current = void 0;
            return;
        }
        if (a === h.current) return;
        let e = m.findIndex((e) => e.skuId === a);
        if (-1 === e) return;
        let t = Math.floor(e / R.l5) + 1;
        t !== s && l(t), (h.current = a);
    }, [a, m, l, s]);
    let x = c.useMemo(() => {
        let e = (s - 1) * R.l5;
        return m.slice(e, e + R.l5);
    }, [m, s]);
    return (c.useEffect(() => {
        (0, ex.z)({
            sessionId: d,
            checkpoint: ex.t.SHOP_MOUNTED,
            tab: R.G2.CATALOG,
            unpublishedCategoriesShown: g,
            cacheDisabled: u,
        });
    }, []),
    c.useEffect(() => {
        r ||
            0 === x.length ||
            (0, ex.z)({
                sessionId: d,
                checkpoint: ex.t.SHOP_RENDERED,
                tab: R.G2.CATALOG,
                unpublishedCategoriesShown: g,
                cacheDisabled: u,
            });
    }, [d, g, u, r, x.length]),
    r)
        ? (0, o.jsx)(eS, {})
        : (0, o.jsxs)("div", {
              className: eC.LZ,
              children: [
                  x.map((e, t) =>
                      (0, o.jsx)(
                          "div",
                          {
                              ref: (t) => n(e.skuId, t),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": P.intl.formatToPlainString(P.t.FNtLb3, { category: e.name }),
                              children: (0, o.jsx)(v.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, o.jsx)(eN, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, o.jsx)("div", {
                      className: eC.Ej,
                      children: (0, o.jsx)(eu.m, {
                          currentPage: s,
                          totalCount: m.length,
                          pageSize: R.l5,
                          onPageChange: l,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var ek = n(177366),
    eT = n(401864),
    ey = n(124987),
    eR = n(691885),
    eM = n(146919),
    eP = n(912853);
let eB = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, w.v)(),
        s = (0, v.uM)(),
        l = (0, eM.yB)("CollectiblesSortSelect"),
        a = n(),
        i = c.useMemo(() => R.QB.filter((e) => e.sortType !== ey.$.RELEVANCE || a), [a]),
        r = c.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === ey.$.RECENCY
                ? { label: P.intl.string(P.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === ey.$.PRICE
                  ? n === eT.A.ASC
                      ? { label: P.intl.string(P.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: P.intl.string(P.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === ey.$.RELEVANCE
                    ? { label: P.intl.string(P.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: P.intl.string(P.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        d = c.useCallback(
            (e) =>
                ({
                    recent: { sortType: ey.$.RECENCY, sortDirection: eT.A.DESC },
                    "price-asc": { sortType: ey.$.PRICE, sortDirection: eT.A.ASC },
                    "price-desc": { sortType: ey.$.PRICE, sortDirection: eT.A.DESC },
                    popularity: { sortType: ey.$.POPULARITY, sortDirection: eT.A.DESC },
                    relevance: { sortType: ey.$.RELEVANCE, sortDirection: eT.A.DESC },
                })[e],
            [],
        ),
        g = c.useCallback(
            (e) => {
                let n = r(d(e));
                ee.default.track(et.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: s?.sessionId,
                    page_section: s?.pageSection,
                    page_category: s?.pageCategory,
                    page_index: s?.pageIndex,
                    page_size: s?.pageSize,
                    cta_name: `sort by ${n.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(d(e));
            },
            [s, r, d, t],
        ),
        m = r(e);
    return (0, o.jsx)("div", {
        className: u()(eP.k, { [eM.jP]: l }),
        children: (0, o.jsx)(eR.l, {
            label: P.intl.string(P.t.uaX705),
            hideLabel: !0,
            options: i.map(r),
            onSelectionChange: g,
            value: m.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var eD =
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
    eH =
        (((a = {}).ANIME = "COLLECTIBLES_THEME_ANIME"),
        (a.GAMING = "COLLECTIBLES_THEME_GAMING"),
        (a.CUTE_COZY = "COLLECTIBLES_THEME_CUTE_COZY"),
        (a.FOOD_DRINKS = "COLLECTIBLES_THEME_FOOD_DRINKS"),
        (a.ANIMALS_PETS = "COLLECTIBLES_THEME_ANIMALS_PETS"),
        (a.MOVIES_TV_SHOWS = "COLLECTIBLES_THEME_MOVIES_TV_SHOWS"),
        (a.FANTASY = "COLLECTIBLES_THEME_FANTASY"),
        (a.DARK_MOODY = "COLLECTIBLES_THEME_DARK_MOODY"),
        (a.NATURE = "COLLECTIBLES_THEME_NATURE"),
        (a.SCI_FI = "COLLECTIBLES_THEME_SCI_FI"),
        a),
    ew = n(990078),
    eF = n(150934),
    eU = n(508770),
    eG = n(602853),
    ez = n(661531),
    eV = n(939249),
    eW = n(947641),
    eK = n(604338),
    eY = n(785866),
    e$ = n(373846),
    eq = n(308323),
    eZ = n(608599),
    eX = n(685761),
    eJ = n(157225),
    eQ = n(413249),
    e0 = n(510241),
    e1 = n(601198),
    e2 = n(736653),
    e5 = n(7250),
    e4 = n(13875),
    e9 = n(818348),
    e7 = n(764915);
function e3() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: n, hasFilters: s } = (0, w.v)(),
        l = s(),
        a = (0, e4.sk)("FilterBar"),
        i = (0, v.uM)(),
        r = c.useRef(null),
        d = c.useMemo(() => R._6.filter((e) => a || e !== er.q.PROFILE_FRAME), [a]),
        g = c.useCallback(
            (e) => {
                ee.default.track(et.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    return (0, o.jsxs)("div", {
        className: e7.kT,
        children: [
            (0, o.jsxs)("div", {
                className: u()(e7.KZ, e7.YG),
                children: [
                    (0, o.jsx)("div", {
                        ref: r,
                        tabIndex: -1,
                        children: (0, o.jsx)(Z.E, {
                            variant: "text-md/semibold",
                            className: e7.hr,
                            children: P.intl.string(P.t.Qk6r1a),
                        }),
                    }),
                    d.map((e) => (0, o.jsx)(e6, { filter: e, trackFilterAction: g }, e)),
                    (0, o.jsx)(eF.S, {
                        checked: t,
                        onChange: () => {
                            g(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                        },
                        label: P.intl.string(P.t.AHHHgG),
                    }),
                ],
            }),
            (0, o.jsx)(e8, { trackFilterAction: g }),
            (0, o.jsx)(tn, { trackFilterAction: g }),
            l &&
                (0, o.jsx)(X.$, {
                    variant: "secondary",
                    onClick: () => {
                        g("filter reset"), n(), requestAnimationFrame(() => r.current?.focus());
                    },
                    text: P.intl.string(P.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function e6(e) {
    let { filter: t, trackFilterAction: n } = e,
        s = {
            [er.q.AVATAR_DECORATION]: P.intl.string(P.t.dRZYNE),
            [er.q.PROFILE_EFFECT]: P.intl.string(P.t["1cNjtx"]),
            [er.q.NAMEPLATE]: P.intl.string(P.t.V68Fqz),
            [er.q.PROFILE_FRAME]: P.intl.string(P.t.ecTJkR),
            [er.q.BUNDLE]: P.intl.string(P.t.FYFpps),
        },
        { itemTypeFilters: l, onToggleItemType: a } = (0, w.v)(),
        i = (0, o.jsx)(eF.S, {
            checked: l.has(t),
            onChange: () => {
                let e = s[t]?.toLowerCase() != null ? s[t].toLowerCase() : t;
                n(`filter item type ${e} ${!1 === l.has(t) ? "on" : "off"}`), a(t);
            },
            label: s[t] ?? "",
        });
    return t === er.q.PROFILE_FRAME
        ? (0, o.jsxs)("div", { className: e7.Ym, children: [i, (0, o.jsx)(eU.E, { type: "new" })] })
        : i;
}
function e8(e) {
    let { trackFilterAction: t } = e,
        n = c.useMemo(
            () => [
                { color: "#9B59B6", label: P.intl.string(P.t.kqUD4P), enum: eD.PURPLE },
                { color: "#3498DB", label: P.intl.string(P.t.qQTRae), enum: eD.BLUE },
                { color: "#2ECC71", label: P.intl.string(P.t["f/Ylk6"]), enum: eD.GREEN },
                { color: "#A0522D", label: P.intl.string(P.t["Sd/BMa"]), enum: eD.BROWN },
                { color: "#F1C40F", label: P.intl.string(P.t["0fevYz"]), enum: eD.YELLOW },
            ],
            [],
        ),
        s = c.useMemo(
            () => [
                { color: "#E67E22", label: P.intl.string(P.t.ZE7weD), enum: eD.ORANGE },
                { color: "#E74C3C", label: P.intl.string(P.t.hKJGOM), enum: eD.RED },
                { color: "#EC407A", label: P.intl.string(P.t.HvLEGM), enum: eD.PINK },
                { color: "#FFFFFF", label: P.intl.string(P.t["CB+lNO"]), enum: eD.WHITE },
                { color: "#262626", label: P.intl.string(P.t["dMey+v"]), enum: eD.BLACK },
            ],
            [],
        );
    return (0, o.jsxs)("div", {
        className: e7.KZ,
        children: [
            (0, o.jsx)(Z.E, { variant: "text-md/semibold", className: e7.hr, children: P.intl.string(P.t.K1xGoG) }),
            (0, o.jsx)(te, { colors: n, trackFilterAction: t }),
            (0, o.jsx)(te, { colors: s, trackFilterAction: t }),
        ],
    });
}
function te(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: s, onToggleColor: l } = (0, w.v)();
    return (0, o.jsx)("div", {
        className: e7.OW,
        children: t.map((e) => {
            let { color: t, label: a, enum: i } = e;
            return (0, o.jsx)(
                tt,
                { color: t, label: a, enum: i, isToggled: s.has(i), onToggleColor: l, trackFilterAction: n },
                i,
            );
        }),
    });
}
function tt(e) {
    let { color: t, label: n, enum: s, isToggled: l, onToggleColor: a, trackFilterAction: i } = e,
        r = (0, eG.r)(ez.A.unsafe_rawColors.WHITE).hex(),
        c = (0, eG.r)(ez.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, o.jsx)(
        ew.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, o.jsx)(
                eV.D,
                {
                    className: u()(e7.n1, { [e7.lx]: l }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": l,
                    onClick: () => {
                        i(`filter color ${n.toLowerCase()} ${!l ? "on" : "off"}`), a(s);
                    },
                    children:
                        l &&
                        (0, o.jsx)("div", {
                            className: e7.oE,
                            children: (0, o.jsx)(eW.r, {
                                size: "xs",
                                color: (0, e5.j)({ backgroundColor: t, colors: [r, c] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
let tn = (e) => {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: s } = (0, w.v)(),
        l = (0, e2.Ay)() === e9.NJ.DARK,
        a = c.useCallback(
            (e) => {
                if (n.has(e) || l) return "control-primary-text-default";
            },
            [n, l],
        ),
        i = c.useCallback((e) => (n.has(e) || l ? ez.A.colors.WHITE : ez.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, l]),
        r = c.useMemo(
            () => [
                {
                    name: P.intl.string(P.t.aVBOKh),
                    icon: (0, o.jsx)(eK.E, { size: "xs", color: i(eH.ANIME) }),
                    enum: eH.ANIME,
                },
                {
                    name: P.intl.string(P.t["3WoZBc"]),
                    icon: (0, o.jsx)(eY._, { size: "xs", color: i(eH.GAMING) }),
                    enum: eH.GAMING,
                },
                {
                    name: P.intl.string(P.t.yuEmLj),
                    icon: (0, o.jsx)(e$.C, { size: "xs", color: i(eH.CUTE_COZY) }),
                    enum: eH.CUTE_COZY,
                },
                {
                    name: P.intl.string(P.t.mMvCHo),
                    icon: (0, o.jsx)(eq.L, { size: "xs", color: i(eH.SCI_FI) }),
                    enum: eH.SCI_FI,
                },
                {
                    name: P.intl.string(P.t.TlhOQC),
                    icon: (0, o.jsx)(eZ.L, { size: "xs", color: i(eH.FOOD_DRINKS) }),
                    enum: eH.FOOD_DRINKS,
                },
                {
                    name: P.intl.string(P.t["4IaUIM"]),
                    icon: (0, o.jsx)(eX.f, { size: "xs", color: i(eH.FANTASY) }),
                    enum: eH.FANTASY,
                },
                {
                    name: P.intl.string(P.t["w0nSG/"]),
                    icon: (0, o.jsx)(eJ.N, { size: "xs", color: i(eH.ANIMALS_PETS) }),
                    enum: eH.ANIMALS_PETS,
                },
                {
                    name: P.intl.string(P.t.cJng7v),
                    icon: (0, o.jsx)(eQ.p, { size: "xs", color: i(eH.NATURE) }),
                    enum: eH.NATURE,
                },
                {
                    name: P.intl.string(P.t["5mUvyM"]),
                    icon: (0, o.jsx)(e0.T, { size: "xs", color: i(eH.MOVIES_TV_SHOWS) }),
                    enum: eH.MOVIES_TV_SHOWS,
                },
                {
                    name: P.intl.string(P.t.MB9H5Z),
                    icon: (0, o.jsx)(e1.e, { size: "xs", color: i(eH.DARK_MOODY) }),
                    enum: eH.DARK_MOODY,
                },
            ],
            [i],
        );
    return (0, o.jsxs)("div", {
        className: e7.KZ,
        children: [
            (0, o.jsx)(Z.E, { variant: "text-md/semibold", className: e7.hr, children: P.intl.string(P.t.t1Ztrp) }),
            (0, o.jsx)("div", {
                className: e7.Ot,
                children: r.map((e) => {
                    let { name: l, icon: i, enum: r } = e;
                    return (0, o.jsxs)(
                        eV.D,
                        {
                            className: u()(e7.w4, { [e7.C7]: n.has(r) }),
                            "aria-label": l,
                            "aria-pressed": n.has(r),
                            onClick: () => {
                                let e = n.has(r);
                                t(`filter theme ${l.toLowerCase()} ${!e ? "on" : "off"}`), s(r);
                            },
                            children: [i, (0, o.jsx)(Z.E, { color: a(r), variant: "text-md/medium", children: l })],
                        },
                        l,
                    );
                }),
            }),
        ],
    });
};
var ts = n(687971);
function tl() {
    return (0, o.jsxs)("div", {
        className: ts.k,
        children: [
            (0, o.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: P.intl.string(P.t.oezC3x),
                className: ts._,
            }),
            (0, o.jsx)(eo.D, { variant: "heading-xl/semibold", children: P.intl.string(P.t.oezC3x) }),
            (0, o.jsx)(Z.E, { variant: "text-md/medium", children: P.intl.string(P.t["Tc/Ndl"]) }),
        ],
    });
}
var ta = n(528096);
let ti = { flattenProductVariants: !0 };
function tr(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: s } = e,
        l = (0, v.uM)(),
        a = l?.sessionId ?? "",
        { noCache: i, includeUnpublished: r } = (0, eA.A)(),
        d = (0, eg.W)("CollectiblesFilterResults"),
        g = (0, m.bG)([j.default], () => j.default.getCurrentUser()),
        { skus: h, currentPage: x, totalCount: E, isFetchingResults: p } = (0, Y.S)(),
        f = (0, m.yK)([A.A], () => A.A.getProductsBySkus(h)),
        C = c.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        b = h?.join("");
    c.useEffect(() => {
        C();
    }, [b, C]);
    let S = (0, em.p)(),
        _ = c.useMemo(() => S(f), [S, f]);
    c.useEffect(() => {
        t ||
            (0, ex.z)({
                sessionId: a,
                checkpoint: ex.t.SHOP_RENDERED,
                tab: s,
                unpublishedCategoriesShown: r,
                cacheDisabled: i,
            });
    }, [a, r, i, t, s]);
    let L = c.useRef(null),
        { setQueryPageSize: I, setQueryPageOffset: N, queryPageSize: O } = (0, w.v)(),
        [k, T] = c.useState(!1),
        y = t || p || null == g;
    c.useEffect(() => {
        y ? T(!1) : _.length > 0 && T(!0);
    }, [y, _.length]);
    let R = O > 0 && !y && 0 === _.length;
    c.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == L.current || I(Math.floor(5 * getComputedStyle(L.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != L.current) return e.observe(L.current), () => e.disconnect();
    }, [I]);
    let M = c.useCallback(
        (e) => {
            ee.default.track(et.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: l?.sessionId,
                page_section: l?.pageSection,
                page_category: l?.pageCategory,
                page_index: e,
                page_size: O,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                N((e - 1) * O);
        },
        [l, O, N],
    );
    return (0, o.jsxs)(ej.v3.Provider, {
        value: ti,
        children: [
            (0, o.jsxs)("div", {
                className: u()({ [ta.oE]: R }),
                children: [
                    R && (0, o.jsx)(tl, {}),
                    (0, o.jsxs)("div", {
                        className: u()(ta.ZE, { [ta.Kp]: k }),
                        ref: L,
                        children: [
                            y && [...Array(O)].map((e, t) => (0, o.jsx)(ep.A, {}, t)),
                            !y &&
                                _.map((e, t) =>
                                    null == A.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, o.jsx)(
                                              v.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, o.jsx)(
                                                      e_.A,
                                                      {
                                                          skuId: e.skuId,
                                                          hideStaticBundleBackgroundAsset: !0,
                                                          prioritizedCurrency: d ? ej.Hi.FIAT : void 0,
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
            E > O &&
                (0, o.jsx)("div", {
                    className: ta.Ej,
                    children: (0, o.jsx)("div", {
                        children: (0, o.jsx)(eu.m, {
                            currentPage: x,
                            totalCount: E,
                            pageSize: O,
                            onPageChange: M,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var to = n(832179);
function tc(e) {
    let { tab: t, categories: n, initialCategoryId: s, showFilterInitially: l = !0, onUnmount: a } = e,
        i = (0, el.A)("shop_include_unpublished");
    (0, w.S)(i);
    let r = c.useRef(null),
        { handleScroll: d } = es(r, t),
        u = (0, z.U)("Shop Browse"),
        { setCategoryRef: g, handleScrollToCategory: m } = (0, ek.k0)(r.current),
        [h, x] = c.useState(l),
        [E, p] = c.useState(!1);
    return (
        c.useEffect(() => {
            null != s && m(s);
        }, [s, m]),
        c.useEffect(
            () => () => {
                null != a && a();
            },
            [],
        ),
        c.useEffect(() => {
            function e() {
                p(window.innerWidth < 1400);
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, o.jsx)("div", {
            className: to.VM,
            children: (0, o.jsxs)("main", {
                className: to.MY,
                children: [
                    (0, o.jsx)($.Gt, {
                        className: to.OW,
                        ref: r,
                        onScroll: d,
                        children: u
                            ? (0, o.jsx)("div", {
                                  className: to.en,
                                  children: (0, o.jsx)("div", {
                                      className: to.pf,
                                      children: (0, o.jsx)(ea.Z_, { tenantId: et.FYj, templateId: ei.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, o.jsx)(td, {
                                  isSmallScreen: E,
                                  filterBarOpen: h,
                                  setFilterBarOpen: x,
                                  tab: t,
                                  scrollerRef: r,
                                  categories: n,
                                  setCategoryRef: g,
                                  initialCategoryId: s,
                              }),
                    }),
                    h && !E && (0, o.jsx)("div", { className: to.yF }),
                    h && !E && (0, o.jsx)(q.Ip, { className: to.kT, children: (0, o.jsx)(e3, {}) }),
                ],
            }),
        })
    );
}
function td(e) {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: s,
            tab: l,
            scrollerRef: a,
            categories: i,
            setCategoryRef: r,
            initialCategoryId: d,
        } = e,
        g = c.useRef(null),
        m = (0, w.v)((e) => e.hasDefaultFilters()),
        h = (0, v.uM)(),
        { handlePageChange: x, currentPage: E } = (function (e) {
            let [t, n] = c.useState(1);
            return {
                currentPage: t,
                handlePageChange: c.useCallback(
                    (t) => {
                        n(t), e.current?.scrollTo({ to: 0 });
                    },
                    [e, n],
                ),
            };
        })(a),
        p = c.useCallback(
            (e) => {
                ee.default.track(et.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: h?.sessionId,
                    page_section: h?.pageSection,
                    page_category: h?.pageCategory,
                    page_index: e,
                    page_size: h?.pageSize,
                    cta_name: `catalog page ${e}`,
                    page_type: "catalog",
                }),
                    x(e);
            },
            [h, x],
        ),
        f = c.useRef(null);
    return (
        c.useEffect(() => {
            if (t && n)
                return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
            function e(e) {
                let t = e.target;
                null === g.current ||
                    null === f.current ||
                    g.current.contains(t) ||
                    f.current.contains(t) ||
                    (ee.default.track(et.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: h?.sessionId,
                        page_section: h?.pageSection,
                        page_category: h?.pageCategory,
                        page_index: h?.pageIndex,
                        page_size: h?.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    s(!1));
            }
        }, [t, n, s, h]),
        (0, o.jsx)("div", {
            className: to.en,
            children: (0, o.jsxs)("div", {
                className: to.pf,
                children: [
                    (0, o.jsxs)("div", {
                        className: to.ne,
                        children: [
                            (0, o.jsx)("div", { className: to.lQ, children: (0, o.jsx)(ec, {}) }),
                            (0, o.jsxs)("div", {
                                className: u()(to.wR, { [to.Im]: t }),
                                children: [
                                    (0, o.jsxs)("div", {
                                        className: to.Ul,
                                        children: [
                                            (0, o.jsx)(Z.E, {
                                                variant: "text-md/semibold",
                                                children: P.intl.string(P.t.uaX705),
                                            }),
                                            (0, o.jsx)(eB, {}),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        ref: f,
                                        children: (0, o.jsx)(X.$, {
                                            onClick: function () {
                                                let e = !n;
                                                ee.default.track(et.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                            text: P.intl.string(n ? P.t.fYtm6f : P.t["TeTYE+"]),
                                            icon: J.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, o.jsx)("div", {
                                    className: to.Dh,
                                    ref: g,
                                    children: (0, o.jsx)($.Ch, { className: to.Qo, children: (0, o.jsx)(e3, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, o.jsx)(v.R9, {
                              newValue: { pageIndex: E },
                              children: (0, o.jsx)(eO, {
                                  categories: i,
                                  setCategoryRef: r,
                                  currentPage: E,
                                  handlePageChange: p,
                                  initialCategoryId: d,
                              }),
                          })
                        : (0, o.jsx)(tr, { scrollerRef: a, tab: l }, l),
                ],
            }),
        })
    );
}
var tu = n(599062),
    tg = n(651162),
    tm = n(554146),
    th = n(367727);
let tx = c.createContext(null);
function tE(e) {
    let { blockType: t, children: n } = e,
        s = c.useMemo(() => ({ blockType: t }), [t]);
    return (0, o.jsx)(tx.Provider, { value: s, children: n });
}
var tp = n(755172),
    tf = n(325595),
    tC = n(893998),
    tb = n(110629),
    tS = n(580929),
    t_ = n(607399),
    tj = n(946015),
    tv = n(717421),
    tA = n(140735),
    tL = n(496431),
    tI = n(467513);
let tN = (e) => {
    let { endDate: t, size: n = "md", className: s, showSeconds: l = !1 } = e,
        { days: a, hours: i, minutes: r, seconds: c } = (0, tL.A)(t),
        d = (function (e, t, n, s, l) {
            function a(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let i = [a(e), a(t), a(n)];
            return l && i.push(a(s)), i.join(":");
        })(a, i, r, c, l);
    return (0, o.jsxs)("div", {
        className: u()(tI.kL, s),
        role: "timer",
        children: [
            d
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, o.jsx)(
                              Z.E,
                              {
                                  color: "none",
                                  variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: tI.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, o.jsx)(
                              Z.E,
                              {
                                  color: "text-overlay-light",
                                  variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
                                  className: tI.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, o.jsx)(tA.A, { children: P.intl.format(P.t.j6IyVe, { days: a, hours: i, minutes: r }) }),
        ],
    });
};
var tO = n(134264);
let tk = c.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        s = (0, tv.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, o.jsxs)(tS.animated.div, {
        className: u()([tO.lP, t_.Fr && tO.yJ]),
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
            (0, o.jsxs)(tj.s, {
                direction: tj.s.Direction.VERTICAL,
                children: [
                    (0, o.jsx)(Z.E, {
                        variant: "text-md/medium",
                        className: tO.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, o.jsx)(Z.E, {
                            variant: "text-sm/medium",
                            className: tO.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, o.jsx)(tN, { endDate: t.endTime }),
        ],
    });
});
var tT = n(424918),
    ty = n(793574),
    tR = n(993408),
    tM = n(196231),
    tP = n(941734);
function tB(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, o.jsx)("div", {
        className: u()(tP.n9, tP.YB),
        children: n?.subblocks.map((e, n) =>
            e.type === tT.u.CATEGORY
                ? (0, o.jsx)(
                      v.R9,
                      {
                          newValue: {
                              categoryPosition: 1,
                              pageCategory: e.name,
                              pageSection: "featured_block",
                              tilePosition: n,
                          },
                          children: (0, o.jsx)(
                              tM.S,
                              {
                                  subblock: e,
                                  enablePreview: 0 === n,
                                  badgeText: (0, tR.HF)(e.unpublishedAt) ? P.intl.string(P.t["h/uBCR"]) : void 0,
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
}
function tD(e) {
    let { handleTransition: t, categories: n } = e;
    if (null == n || n.length < 2) return null;
    let [s, l] = n;
    return (0, o.jsx)("div", {
        className: u()(tP.n9, tP.YB),
        children: (0, o.jsxs)(v.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != s ? s.name : l?.name,
                pageSection: "featured_block",
                tilePosition: +(null == s),
            },
            children: [
                null != s &&
                    (0, o.jsx)(tM.S, {
                        category: s,
                        enablePreview: !0,
                        badgeText: (0, tR.HF)(s.unpublishedAt) ? P.intl.string(P.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != l &&
                    (0, o.jsx)(tM.S, {
                        category: l,
                        badgeText: (0, tR.HF)(l.unpublishedAt) ? P.intl.string(P.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let tH = function (e) {
    let { isLoading: t, handleTransition: n, categories: s, featuredBlockRecord: l } = e,
        { analyticsLocations: a } = (0, f.Ay)(ty.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, o.jsxs)("div", {
              className: u()(tP.n9, tP.YB),
              children: [
                  (0, o.jsx)("div", {
                      className: u()(tP.Jn, tP.oT),
                      children: (0, o.jsx)("div", { className: tP.uy }),
                  }),
                  (0, o.jsx)("div", {
                      className: u()(tP.Jn, tP.oT),
                      children: (0, o.jsx)("div", { className: tP.uy }),
                  }),
              ],
          })
        : null != l
          ? (0, o.jsx)(f.f5, {
                value: a,
                children: (0, o.jsx)(tB, { featuredBlockRecord: l, handleTransition: n, isLoading: !1 }),
            })
          : (0, o.jsx)(f.f5, {
                value: a,
                children: (0, o.jsx)(tD, { categories: s, handleTransition: n, isLoading: !1 }),
            });
};
var tw = n(531685),
    tF = n(428262),
    tU = n(621466),
    tG =
        (((i = {}).MOUNTED = "mounted"),
        (i.SORT_OUT = "sort-out"),
        (i.SORT_IN = "sort-in"),
        (i.SHUFFLE_OUT = "shuffle-out"),
        (i.SHUFFLE_IN = "shuffle-in"),
        (i.FINISHED = "finished"),
        i);
n(667532);
var tz = n(735438),
    tV = n.n(tz),
    tW =
        (((r = {}).RECOMMENDED = "recommended"),
        (r.POPULAR = "popular"),
        (r.RECENT = "recent"),
        (r.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (r.RANDOM = "random"),
        r),
    tK = n(153488),
    tY = n(313276),
    t$ = n(623373),
    tq = n(885574),
    tZ = n(975807),
    tX = n(975571),
    tJ = n(365714);
let tQ = function (e) {
        let { personalizedResults: t, label: n } = e,
            s = n ?? P.intl.string(P.t.NSv5KV);
        return (0, o.jsxs)("div", {
            className: tJ.L,
            children: [
                (0, o.jsx)(eo.D, { variant: "heading-lg/semibold", children: s }),
                t &&
                    (0, o.jsx)(ew.m, {
                        text: P.intl.string(P.t["3taPdj"]),
                        position: "top",
                        "aria-label": P.intl.string(P.t["3taPdj"]),
                        children: (0, o.jsx)(eV.D, {
                            onClick: () => (0, tZ.A)(tX.A.getArticleURL(et.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: tJ.s,
                            children: (0, o.jsx)(tq.m, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    t0 = function (e) {
        let {
                isLoading: t,
                title: n,
                sortedSkuIds: s,
                numVisibleItems: l,
                prioritizeUserDiscounts: a,
                tab: i,
                buttonContainerClassName: r,
                orbsSupportedOnly: d,
            } = e,
            g = (0, N.bG)([j.default], () => j.default.getCurrentUser()),
            m = tF.Ay.canUseShopDiscounts(g),
            h = (0, ej.Mk)(i, "FeedBlock"),
            x = (0, eM.yB)("FeedBlock"),
            {
                sortType: E,
                setSortType: p,
                sortedItems: C,
                sortOptions: b,
                shuffleProducts: S,
                showRecommendationOption: _,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: n, prioritizeUserDiscounts: s, orbsSupportedOnly: l } = e,
                    a = (0, N.bG)([tK.A], () => tK.A.hasConsented(et.YAq.PERSONALIZATION)),
                    i = c.useMemo(() => t?.[tW.RECOMMENDED] ?? [], [t]),
                    r = c.useMemo(() => t?.[tW.POPULAR] ?? [], [t]),
                    o = i.length > 0 && a,
                    [d, u] = c.useState(o ? tW.RECOMMENDED : tW.POPULAR),
                    g = (0, N.bG)([A.A], () => A.A.productsWithVariantsAsGroup),
                    m = c.useMemo(() => (0, tR.CE)(g), [g]),
                    h = (0, N.bG)([k.A], () => k.A.getUserDiscounts()),
                    x = (0, tY.A)(),
                    E = (0, em.p)(),
                    [p, f] = c.useState([]),
                    C = c.useCallback(() => {
                        u(tW.RANDOM), f(tV().shuffle(m));
                    }, [m]);
                c.useEffect(() => {
                    f(tV().shuffle(m));
                }, [m]);
                let b = c.useMemo(() => {
                    let e = [];
                    switch (d) {
                        case tW.RECENT:
                            e = m;
                            break;
                        case tW.PRICE_LOW_TO_HIGH:
                            e = (0, tR.bf)([...m], n, l);
                            break;
                        case tW.RECOMMENDED: {
                            let t = x(i);
                            e = s ? (0, tR.Bs)(t, h) : t;
                            break;
                        }
                        case tW.POPULAR: {
                            let t = x(r);
                            e = s ? (0, tR.Bs)(t, h) : t;
                            break;
                        }
                        case tW.RANDOM:
                            e = p;
                    }
                    return l ? (0, t$.ex)(E(e)) : E(e);
                }, [d, l, E, n, m, x, i, s, h, r, p]);
                return {
                    sortType: d,
                    setSortType: u,
                    sortedItems: (0, eh.X)(b),
                    sortOptions: c.useMemo(() => {
                        let e = [
                            { value: tW.POPULAR, label: P.intl.string(P.t.Y68e5p) },
                            { value: tW.RECENT, label: P.intl.string(P.t["51Bhiz"]) },
                            { value: tW.PRICE_LOW_TO_HIGH, label: P.intl.string(P.t.m8RVU2) },
                        ];
                        return o && e.unshift({ value: tW.RECOMMENDED, label: P.intl.string(P.t.zPWgFG) }), e;
                    }, [o]),
                    showRecommendationOption: o,
                    shuffleProducts: C,
                };
            })({ sortedSkuIds: s, hasShopDiscount: m, prioritizeUserDiscounts: a, orbsSupportedOnly: d }),
            L = (0, N.bG)([G.Ay], () => G.Ay.useReducedMotion),
            I = (0, N.bG)([tw.A], () => tw.A.isFocused()),
            O = !L && I,
            { animationPhase: T, startAnimation: y } = (() => {
                let [e, t] = c.useState("mounted"),
                    [n, s] = c.useState(!1),
                    l = c.useRef(null);
                return (
                    c.useEffect(() => {
                        if (n && "finished" === e) {
                            if (null !== l.current) {
                                let e = l.current;
                                if (
                                    e.tabIndex >= 0 ||
                                    (0, tU.vq)(e, HTMLButtonElement) ||
                                    (0, tU.vq)(e, HTMLAnchorElement) ||
                                    (0, tU.vq)(e, HTMLInputElement) ||
                                    (0, tU.vq)(e, HTMLSelectElement) ||
                                    (0, tU.vq)(e, HTMLTextAreaElement)
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
                    }, [e, n]),
                    {
                        animationPhase: e,
                        startAnimation: c.useCallback((e) => {
                            let { isShuffling: n, onOutroComplete: a, returnRef: i } = e;
                            i?.current != null && ((l.current = i.current), s(!0)),
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
            R = (0, v.uM)(),
            M = R?.sessionId ?? "",
            { analyticsLocations: B } = (0, f.Ay)(ty.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            D = c.useRef(null),
            H = c.useRef(null),
            [w, F] = c.useState(!1),
            U = c.useCallback(
                (e) => {
                    F(!1),
                        y({ isShuffling: !1, onOutroComplete: () => p(e), returnRef: H }),
                        ee.default.track(et.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: M,
                            sort_type: e,
                        });
                },
                [y, p, M],
            );
        return null == g
            ? null
            : (0, o.jsx)(f.f5, {
                  value: B,
                  children: (0, o.jsxs)("div", {
                      className: u()(tP.lD, tP.YB),
                      children: [
                          (0, o.jsxs)("div", {
                              className: tP.$6,
                              children: [
                                  (0, o.jsx)(tQ, { label: n, personalizedResults: _ }),
                                  (0, o.jsxs)("div", {
                                      className: u()(tP.IE, { [eM.jP]: x }),
                                      children: [
                                          (0, o.jsxs)("div", {
                                              className: tP.gd,
                                              children: [
                                                  (0, o.jsx)(Z.E, {
                                                      variant: "text-md/medium",
                                                      children: P.intl.string(P.t.uaX705),
                                                  }),
                                                  (0, o.jsx)("div", {
                                                      className: u()(r, tP.pI),
                                                      ref: H,
                                                      children: (0, o.jsx)(eR.l, {
                                                          label: P.intl.string(P.t.uaX705),
                                                          hideLabel: !0,
                                                          options: b,
                                                          onSelectionChange: U,
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
                                          (0, o.jsx)("div", {
                                              className: r,
                                              children: (0, o.jsx)(X.$, {
                                                  variant: "secondary",
                                                  text: P.intl.string(P.t.X3tnc4),
                                                  buttonRef: D,
                                                  onClick: function () {
                                                      F(!0),
                                                          y({ isShuffling: !0, onOutroComplete: S, returnRef: D }),
                                                          ee.default.track(
                                                              et.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: M },
                                                          );
                                                  },
                                                  disabled: T !== tG.MOUNTED && T !== tG.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, o.jsx)(tA.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: w && T === tG.FINISHED ? P.intl.string(P.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, o.jsx)("div", {
                              className: tP.hm,
                              children: t
                                  ? (0, o.jsx)(o.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, o.jsx)(ep.A, {}, t + 1)),
                                    })
                                  : C.slice(0, l).map((e, t) => {
                                        let n,
                                            s = A.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == s) return null;
                                        if (O)
                                            if (T === tG.SHUFFLE_OUT)
                                                return (0, o.jsx)(
                                                    "div",
                                                    {
                                                        className: tP.Z2,
                                                        children: (0, o.jsx)(ep.A, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                T === tG.SORT_OUT
                                                    ? (n = tP.MW)
                                                    : T === tG.SHUFFLE_IN
                                                      ? (n = tP.aS)
                                                      : T === tG.SORT_IN && (n = tP.F7);
                                        return (0, o.jsx)(
                                            v.R9,
                                            {
                                                newValue: {
                                                    tilePosition: t,
                                                    pageSection: "popular picks",
                                                    categoryPosition: 2,
                                                },
                                                children: (0, o.jsx)("div", {
                                                    className: n,
                                                    children: (0, o.jsx)(e_.A, {
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
var t1 = n(449543),
    t2 = n(622697);
let t5 = function (e) {
    let { block: t, handleTransition: n, tab: s } = e,
        l = (0, N.bG)([j.default], () => j.default.getCurrentUser()),
        a = (0, ej.Mk)(s, "FramesProductShelfBlock"),
        i = (0, tY.A)(),
        r = c.useMemo(() => i(t.rankedSkuIds), [t.rankedSkuIds, i]),
        d = (0, eh.X)(r),
        { analyticsLocations: g } = (0, f.Ay)(ty.A.COLLECTIBLES_SHOP_SHELF),
        m = c.useCallback(() => {
            n({
                sourceButton: "frames product shelf see all",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            });
        }, [n, t.categorySkuId]);
    return null == l || 0 === d.length
        ? null
        : (0, o.jsx)(f.f5, {
              value: g,
              children: (0, o.jsxs)("div", {
                  className: u()(t2.kL, tP.YB),
                  children: [
                      null != t.desktopBackgroundImage &&
                          (0, o.jsx)("img", {
                              className: t2.iL,
                              src: t.desktopBackgroundImage,
                              alt: "",
                              "aria-hidden": !0,
                          }),
                      (0, o.jsxs)("div", {
                          className: t2.Qs,
                          children: [
                              (0, o.jsxs)("div", {
                                  className: t2.wx,
                                  children: [
                                      (0, o.jsxs)("div", {
                                          className: t2.Jb,
                                          children: [
                                              (0, o.jsx)(tb.A, {
                                                  location: "FramesProductShelfBlock",
                                                  showTooltip: !0,
                                              }),
                                              (0, o.jsx)(eo.D, {
                                                  variant: "heading-lg/semibold",
                                                  color: "text-overlay-light",
                                                  children: t.title,
                                              }),
                                          ],
                                      }),
                                      null != t.buttonText &&
                                          "" !== t.buttonText &&
                                          (0, o.jsx)(X.$, {
                                              variant: "overlay-primary",
                                              text: t.buttonText,
                                              onClick: m,
                                          }),
                                  ],
                              }),
                              (0, o.jsx)(t1.A, {
                                  gap: "xl",
                                  edgeFade: "sm",
                                  children: d.map((e, n) =>
                                      null == A.A.getCategoryForProduct(e.skuId)
                                          ? null
                                          : (0, o.jsx)(
                                                v.R9,
                                                {
                                                    newValue: {
                                                        tilePosition: n,
                                                        pageSection: t.title,
                                                        categoryPosition: 1,
                                                    },
                                                    children: (0, o.jsx)(e_.A, {
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
var t4 = n(337183),
    t9 = n(349288),
    t7 = n(212407),
    t3 = n(815280),
    t6 = n(537947);
let t8 = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        s = (0, ed.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: l, bannerAnimatedUrl: a } = (0, t7.qY)(t),
        i = null != t.textColor ? { color: t.textColor } : void 0,
        r = null != t.body && "" !== t.body,
        c = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, o.jsxs)("div", {
        ref: s,
        className: t6.BX,
        children: [
            (0, o.jsx)("div", {
                className: t6.vK,
                children: null != l && (0, o.jsx)(t3.A, { bannerStatic: l, bannerAnimated: a }),
            }),
            (0, o.jsx)("div", {
                className: t6.HQ,
                children: (0, o.jsxs)("div", {
                    className: t6.Yn,
                    children: [
                        null != t.endTime ? (0, o.jsx)(tN, { endDate: t.endTime, size: "lg" }) : null,
                        (0, o.jsx)(eo.D, {
                            variant: "heading-xxl/bold",
                            className: t6.DD,
                            color: "text-strong",
                            style: { ...i },
                            children: t.title,
                        }),
                        r || c
                            ? (0, o.jsxs)(Z.E, {
                                  variant: "text-md/medium",
                                  style: { ...i },
                                  children: [
                                      r && t.body,
                                      r && c && " ",
                                      c &&
                                          (0, o.jsx)(t9.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: t6.CU,
                                              style: { ...i },
                                              children: P.intl.string(P.t.O7ADgv),
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
var ne = n(189213),
    nt = n(290136),
    nn = n(478016),
    ns = n(825484),
    nl = n(269115),
    na = n(812993),
    ni = n(713517),
    nr = n(914410),
    no = n(662388),
    nc = n(597783),
    nd = n(61750);
function nu(e, t) {
    let n = c.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        s = (0, N.bG)([W.A], () => W.A.getPurchases(n));
    return {
        readyToClaim: c.useMemo(() => s.length === n.length, [s, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: s,
    };
}
var ng = n(496569),
    nm = n(498924);
let nh = c.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: s } = (0, nc.Z)(n),
            l = c.useRef(null),
            { isHoveringOrFocusing: a } = (0, ni.A)(l),
            { readyToClaim: i, collectibleProductSkuIds: r, collectedSkuIds: d } = nu(t, n),
            g = (0, N.bG)([W.A], () => W.A.isClaiming === n);
        return (0, o.jsx)(nl.L, {
            onChange: s,
            threshold: 0,
            innerRef: l,
            children: (0, o.jsx)("div", {
                ref: l,
                className: u()(ng.ty, nm.Q3, { [ng.yo]: a }),
                "aria-label": P.intl.formatToPlainString(P.t.Ez6aHE, { category: t.name }),
                children: (0, o.jsxs)("div", {
                    className: ng.qt,
                    children: [
                        (0, o.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: nm.L8,
                        }),
                        (0, o.jsx)("div", {
                            className: ng.N1,
                            children: (0, o.jsx)(na.Lp, {
                                text: P.intl.string(P.t.rykAJ9),
                                disableColor: !0,
                                className: nm.HZ,
                            }),
                        }),
                        (0, o.jsxs)("div", {
                            className: ng.xQ,
                            children: [
                                (0, o.jsxs)("div", {
                                    className: nm.xE,
                                    children: [
                                        (0, o.jsxs)("div", {
                                            className: nm.cs,
                                            children: [
                                                (0, o.jsx)(eo.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: ng.tZ,
                                                    children: P.intl.string(P.t["0mDmg/"]),
                                                }),
                                                (0, o.jsx)(ew.m, {
                                                    text: i
                                                        ? P.intl.string(P.t.cKH3tk)
                                                        : P.intl.formatToPlainString(P.t["8aMDPc"], {
                                                              totalCount: r.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, o.jsx)("span", {
                                                        className: nm.ZB,
                                                        children: (0, o.jsx)(nt.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, o.jsx)("div", {
                                            className: ng.oh,
                                            "aria-hidden": !0,
                                            children: (0, o.jsxs)("div", {
                                                className: nm.L$,
                                                children: [
                                                    (0, o.jsx)(nr.Ay, {
                                                        variant: nr.qP.BLUE,
                                                        progress: d.length,
                                                        maximum: r.length,
                                                    }),
                                                    (0, o.jsxs)("div", {
                                                        className: u()(nm.__, { [nm.gF]: i }),
                                                        children: [
                                                            i
                                                                ? (0, o.jsx)(nn.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, o.jsx)(Z.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: P.intl.formatToPlainString(P.t["5TwASM"], {
                                                                    collectedCount: d.length,
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
                                (0, o.jsx)("div", {
                                    className: ng.Vs,
                                    children: (0, o.jsx)(ns.e, {
                                        wrap: !1,
                                        className: ng.Ld,
                                        fullWidth: !0,
                                        children: (0, o.jsx)(X.$, {
                                            variant: "primary",
                                            onClick: function (e) {
                                                e.stopPropagation(),
                                                    i &&
                                                        (0, no.BX)(t.skuId, n)
                                                            .then(() => {
                                                                let e = A.A.getProduct(n);
                                                                null != e &&
                                                                    (0, nd.A)({
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
                                                                (0, h.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, o.jsx)(ne.Modal, {
                                                                            transitionState: e.transitionState,
                                                                            onClose: e.onClose,
                                                                            size: "sm",
                                                                            title: P.intl.string(P.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: P.intl.string(P.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, o.jsx)("div", {
                                                                                children: P.intl.string(P.t["0YpIF/"]),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            });
                                            },
                                            text: P.intl.string(P.t.VnVTNc),
                                            fullWidth: !0,
                                            disabled: !i,
                                            loading: g,
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
    nx = function (e) {
        let t,
            n,
            s,
            { isBlockLoading: l = !1, heroBlock: a, tab: i } = e,
            r = (0, ej.Mk)(i, "RewardHeroBlockCards"),
            d = c.useMemo(() => A.A.getCategoryForProduct(a.rewardSkuId), [a.rewardSkuId]),
            u = (0, N.bG)([W.A], () => W.A.getPurchase(a.rewardSkuId)),
            { products: g } =
                ((t = (0, tY.A)()),
                (n = c.useMemo(
                    () => (l ? [] : t(a.rankedSkuIds).filter((e) => e.skuId !== a.rewardSkuId || null != u)),
                    [l, t, a.rankedSkuIds, u, a.rewardSkuId],
                )),
                (s = (0, em.p)()(n)),
                { products: (0, eh.X)(s) }),
            m = c.useMemo(
                () =>
                    !l &&
                    0 !== a.rankedSkuIds.length &&
                    !(g.length > 0) &&
                    a.rankedSkuIds.every((e) => A.A.getProduct(e)?.variantGroupStoreListingId != null),
                [l, a.rankedSkuIds, g.length],
            ),
            h = l || m,
            { readyToClaim: x } = nu(d, a.rewardSkuId),
            E = null == u && null != a.rewardSkuId && null != d;
        return (0, o.jsx)(t1.A, {
            gap: "xl",
            children: h
                ? (0, o.jsx)(o.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, o.jsx)(ep.A, {}, t)),
                  })
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          E &&
                              x &&
                              (0, o.jsx)(
                                  v.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, o.jsx)(nh, { category: d, rewardSkuId: a.rewardSkuId }),
                                  },
                                  a.rewardSkuId,
                              ),
                          g.map((e, t) => {
                              let n = A.A.getCategoryForProduct(e.skuId);
                              return null == e || null == n
                                  ? null
                                  : (0, o.jsx)(
                                        v.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, o.jsx)(e_.A, { skuId: e.skuId, prioritizedCurrency: r }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, tR.$b)(90);
let nE = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: tg.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    np = function (e) {
        let { isLoading: t = !1, heroBlock: n, tab: s, onVisibilityChange: l } = e,
            a = (0, ed.K)(
                (e) => {
                    l?.(e);
                },
                0.1,
                null != l,
            ),
            i = (0, N.bG)([j.default], () => j.default.getCurrentUser()),
            { analyticsLocations: r } = (0, f.Ay)(ty.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: c,
                logoDisplayConfig: d,
                heroLogo: g,
                heroBannerStatic: m,
                heroBannerAnimated: h,
            } = (0, t7.Kk)(n),
            x = c?.responsive ?? !1,
            E = c?.backgroundStyle;
        return null != i && (t || n !== nE)
            ? (0, o.jsx)(f.f5, {
                  value: r,
                  children: (0, o.jsxs)("div", {
                      ref: a,
                      className: tP.os,
                      children: [
                          (0, o.jsx)("div", {
                              className: u()(tP.vK, { [tP.no]: x }),
                              style: null != E ? { background: E } : void 0,
                              children:
                                  null != m &&
                                  (0, o.jsx)(t3.A, { bannerStatic: m, bannerAnimated: h, isResponsive: x }),
                          }),
                          (0, o.jsxs)("div", {
                              className: tP.xX,
                              children: [
                                  (0, o.jsx)("div", {
                                      className: u()(tP.bC, { [tP.no]: x }),
                                      children: t
                                          ? (0, o.jsx)("div", { className: tP.Hw })
                                          : (0, o.jsx)("div", {
                                                className: tP.Hw,
                                                children: (0, o.jsxs)("div", {
                                                    className: tP.Wq,
                                                    children: [
                                                        null != g &&
                                                            (0, o.jsx)("img", {
                                                                className: tP.rm,
                                                                src: g,
                                                                alt: n.name,
                                                                style: d?.toDesktopStyles(),
                                                            }),
                                                        null != n.title &&
                                                            (0, o.jsx)(eo.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: tP.DD,
                                                                color: "text-strong",
                                                                children: n.title,
                                                            }),
                                                        "" !== n.summary &&
                                                            (0, o.jsx)(Z.E, {
                                                                variant: "text-md/normal",
                                                                className: tP.Tm,
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
                                  (0, o.jsx)(nx, { isBlockLoading: t, heroBlock: n, tab: s }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var nf = n(609196);
let nC = (e) => {
    let { shelf: t, handleTransition: n, tab: s } = e,
        l = (0, N.bG)([j.default], () => j.default.getCurrentUser()),
        a = (0, ej.Mk)(s, "ShelfBlock"),
        i = (0, N.bG)([A.A], () => (null != t.categorySkuId ? A.A.getCategory(t.categorySkuId) : void 0)),
        r = (0, tY.A)(),
        d = c.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r]),
        g = (0, eh.X)(d),
        { analyticsLocations: m } = (0, f.Ay)(ty.A.COLLECTIBLES_SHOP_SHELF),
        h = c.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: i?.isOrbsExclusive === !0 && s !== R.G2.ORBS,
            });
        }, [t.categorySkuId, i, n, s]);
    if (null == l || 0 === g.length) return null;
    let x = t.buttonText ?? P.intl.formatToPlainString(P.t.bc9RBE, { category_name: t.name }),
        E = t.showButton,
        p = t.desktopBackgroundImage,
        C = null != p;
    return (0, o.jsx)(f.f5, {
        value: m,
        children: (0, o.jsxs)("div", {
            className: u()(nf.mu, tP.YB, C ? nf.VA : nf.Ti),
            children: [
                C && (0, o.jsx)("img", { className: nf.iL, src: p, alt: "", "aria-hidden": !0 }),
                (0, o.jsxs)("div", {
                    className: nf.Qs,
                    children: [
                        (0, o.jsxs)("div", {
                            className: nf.wx,
                            children: [
                                (0, o.jsx)(eo.D, {
                                    variant: "heading-lg/semibold",
                                    style: C ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                E &&
                                    (0, o.jsx)(X.$, {
                                        variant: C ? "overlay-primary" : "secondary",
                                        text: x,
                                        onClick: h,
                                    }),
                            ],
                        }),
                        (0, o.jsx)(t1.A, {
                            gap: "xl",
                            edgeFade: C ? "sm" : void 0,
                            children: g.map((e, n) =>
                                null == A.A.getCategoryForProduct(e.skuId)
                                    ? null
                                    : (0, o.jsx)(
                                          v.R9,
                                          {
                                              newValue: { tilePosition: n, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, o.jsx)(e_.A, { skuId: e.skuId, prioritizedCurrency: a }),
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
var nb = n(465794),
    nS = n(69236),
    n_ = n(44724),
    nj = n(421108),
    nv = n(873297);
let nA = function (e) {
    let {
            applicationId: t,
            headerText: n,
            gradientColors: s,
            gradientAngle: l,
            skuIds: a,
            tab: i,
            endTime: r,
            ctaType: d = "storefront",
            logoUrl: u,
        } = e,
        g = (0, nj.u)(r) ?? void 0,
        m = (0, nS.W8)(),
        h = c.useMemo(
            () =>
                "nitro" !== d || m
                    ? {
                          kind: "button",
                          text: P.intl.string(P.t.apFNLU),
                          onClick: () => (0, n_.default)({ applicationId: t }),
                          onMouseDown: () => (0, n_.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, o.jsx)(nb.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: M.pe.TIER_2,
                              buttonTextOverride: P.intl.string(P.t.pj0XBN),
                          }),
                      },
            [d, t, m],
        );
    return (0, o.jsx)(nv.A, {
        skuIds: a,
        tab: i,
        applicationId: t,
        headerText: n,
        logoUrl: u,
        cta: h,
        timeLeftText: g,
        analyticsSection: "slayer-storefront-promotional-banner",
        analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
        analyticsImpressionType: "social_layer_storefront_promotional_banner",
        backgroundGradient: `linear-gradient(${l}deg, ${s.join(", ")})`,
    });
};
var nL = n(575593),
    nI = n(770178),
    nN = n(929283),
    nO = n(275483);
let nk = [
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
];
function nT(e) {
    let { config: t, baseLeft: n, transitioning: s } = e,
        l = window.innerHeight,
        a = A.A.getProduct(t.skuId),
        i = a?.items[0],
        r = a?.type,
        c = n + t.horizontalJitter;
    return (0, o.jsx)("div", {
        className: nO.LY,
        style: {
            top: s ? -l - 384 : t.top,
            left: s ? c + t.transitionOffsetLeft : c,
            transform: `rotate(${t.rotation}deg)`,
            height: 160,
            width: 160,
            transitionDelay: t.transitionDelay,
            transitionDuration: t.transitionDuration,
        },
        children: null != i && r === nL.R.AVATAR_DECORATION && (0, o.jsx)(nN.i, { item: i }),
    });
}
let ny = (e) => {
        let { peaking: t, transitioning: n, parentWidth: s } = e,
            [l, a] = c.useState(!1),
            [i, r] = c.useState([]),
            [d] = c.useState(() =>
                [...nk]
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
            c.useEffect(() => {
                if (null != s && s > 0) {
                    let e = Math.max(1, Math.floor(s / 130)),
                        t = s / e;
                    r(Array.from({ length: e }, (e, n) => ({ config: d[n % d.length], baseLeft: n * t })));
                }
            }, [s, d]),
            c.useEffect(() => {
                n && setTimeout(() => a(!0), R.H1);
            }, [n]),
            (0, o.jsx)("div", {
                className: u()(nO.rA, { [nO.Kb]: t, [nO.pp]: l }),
                children: i.map((e, t) => {
                    let { config: s, baseLeft: l } = e;
                    return (0, o.jsx)(nT, { config: s, baseLeft: l, transitioning: n }, s.skuId + t);
                }),
            })
        );
    },
    nR = function (e) {
        let { peaking: t, transitioning: n } = e,
            s = c.useRef(null),
            [l, a] = c.useState(0),
            i = c.useCallback(() => {
                null != s.current && a(s.current.offsetWidth);
            }, []);
        return (
            (0, nI.g)(s, i),
            (0, o.jsx)("div", {
                ref: s,
                className: nO.eL,
                children: (0, o.jsx)(ny, { peaking: t, transitioning: n, parentWidth: l }),
            })
        );
    };
var nM = n(815021),
    nP = n(43990),
    nB = n(976860),
    nD = n(49999);
let nH = function (e) {
    let { wideBannerBlock: t, tab: n } = e,
        s = A.A.getCategoryByStoreListingId(t.categoryStoreListingId),
        l = c.useRef(null),
        a = c.useRef(null),
        [i, r] = c.useState(),
        [d, g] = c.useState(!1);
    c.useEffect(() => {
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
    let m = s?.skuId ?? "",
        { handleCardVisibilityChange: h } = (0, nc.Z)(m, "home", "marketing wide banner"),
        x = (0, v.uM)(),
        { bannerURL: E } = (0, t7.w$)(t),
        p = n === R.G2.ORBS,
        f = null != t.ctaRoute && "" !== t.ctaRoute,
        C = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || f),
        b = null != t.logoURL && "" !== t.logoURL,
        S = c.useCallback(() => {
            if ((g(!0), t.isDismissible)) {
                let e = t.dismissibleContentVersion ?? 0;
                (0, th.$l)(tm.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: nD.i.USER_DISMISS });
            }
        }, [t.isDismissible, t.dismissibleContentVersion]),
        _ = c.useCallback(
            (e) => {
                ee.default.track(et.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: x?.sessionId,
                    sku_id: m,
                    page_type: n,
                    page_section: x?.pageSection,
                    page_category: x?.pageCategory,
                    tile_type: "WIDE_BANNER",
                    tile_position: String(x?.tilePosition),
                    cta_name: e,
                });
            },
            [x, m, n],
        ),
        j = c.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if ((_(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                    let e = t.ctaRoute;
                    if (e.includes("game-shop")) {
                        let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                        if (null != t) {
                            let e = t[1],
                                n = parseInt(t[2], 10);
                            (0, n_.default)({ guildId: e, pageIndex: n });
                        }
                    } else (0, nB.pX)(e);
                }
            },
            [t.ctaRoute, _],
        );
    if (null == E || d) return null;
    let L = u()(tP.nM, tP.Tq, tP.TS, tP.YB, { [tP._1]: p, [tP.vb]: f }),
        I = (0, o.jsxs)(o.Fragment, {
            children: [
                t.isDismissible &&
                    (0, o.jsx)("div", {
                        className: tP.Mh,
                        children: (0, o.jsx)(nM.J, {
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(), S();
                            },
                            "aria-label": P.intl.string(P.t.WAI6xu),
                        }),
                    }),
                (0, o.jsx)("div", {
                    className: u()(tP.zK, { [tP._1]: p }),
                    style: null != i ? { height: `${i}px` } : void 0,
                    children: (0, o.jsx)("img", {
                        ref: a,
                        src: E,
                        alt: t.title,
                        className: u()(tP.LN, { [tP.d5]: p }),
                    }),
                }),
                (0, o.jsx)("div", {
                    className: u()(tP.Ep, { [tP.Qq]: C }),
                    style: { maxHeight: null != i ? `${i}px` : "auto" },
                    children: (0, o.jsxs)("div", {
                        className: tP.E8,
                        children: [
                            (0, o.jsx)(eo.D, {
                                style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                className: p ? tP.O2 : void 0,
                                variant: "heading-xl/bold",
                                children: t.title,
                            }),
                            (0, o.jsx)(Z.E, {
                                style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                lineClamp: 2,
                                variant: p ? "text-md/medium" : "text-sm/medium",
                                children: p
                                    ? P.intl.format(P.t.SFFP7K, {
                                          helpdeskArticle: tX.A.getArticleURL(et.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : t.body,
                            }),
                            C &&
                                (0, o.jsxs)("div", {
                                    className: tP.nP,
                                    children: [
                                        (0, o.jsx)(X.$, {
                                            variant: "overlay-primary",
                                            onClick: (e) => {
                                                e.stopPropagation(), j(t.ctaText ?? P.intl.string(P.t.jVcuVY));
                                            },
                                            text: t.ctaText ?? P.intl.string(P.t.jVcuVY),
                                            "aria-label":
                                                null == t.ctaText && null != t.title
                                                    ? P.intl.formatToPlainString(P.t.frSHlf, { destination: t.title })
                                                    : void 0,
                                        }),
                                        b && (0, o.jsx)("img", { src: t.logoURL, alt: "", className: tP.bU }),
                                    ],
                                }),
                        ],
                    }),
                }),
            ],
        });
    return (0, o.jsx)(nP.N, {
        theme: p ? void 0 : e9.NJ.DARK,
        children: (e) =>
            (0, o.jsx)(nl.L, {
                innerRef: l,
                onChange: h,
                threshold: 0,
                children: f
                    ? (0, o.jsx)(eV.D, { innerRef: l, onClick: () => j(null), className: u()(e, L), children: I })
                    : (0, o.jsx)("div", { ref: l, className: u()(e, L), children: I }),
            }),
    });
};
var nw = n(757036),
    nF = n(212739);
let nU = (0, T.mj)({ name: "2026-05-orbs-shop-upsell-banner", kind: "user", defaultConfig: !1, variations: { 1: !0 } });
var nG = n(462887),
    nz = n(765671),
    nV = n(303136),
    nW = n(792656),
    nK = n(363195),
    nY = n(901123),
    n$ = n(314489),
    nq = n(909340);
let nZ = (e) => {
        let { category: t, tab: n } = e,
            { ref: s, width: l } = (0, nz.Ay)(),
            a = null != l && l <= 560,
            i = (0, m.bG)([nK.A], () => (0, nG.q)(nK.A.theme)),
            r = t?.skuId ?? "",
            { handleCardVisibilityChange: d } = (0, nc.Z)(r, "home", "marketing orbs upsell banner"),
            g = (0, v.uM)(),
            { analyticsLocations: h } = (0, f.Ay)(ty.A.COLLECTIBLES_SHOP_ORBS_UPSELL_BANNER),
            x = c.useCallback(() => {
                ee.default.track(et.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: g?.sessionId,
                    sku_id: r,
                    page_type: n,
                    page_section: g?.pageSection,
                    page_category: g?.pageCategory,
                    tile_type: "PREMIUM_UPSELL_BANNER",
                    tile_position: String(g?.tilePosition),
                    cta_name: "nitro_home",
                    location_stack: h,
                });
            }, [g, h, r, n]);
        return (0, o.jsx)(f.f5, {
            value: h,
            children: (0, o.jsx)(nP.N, {
                theme: et.NJ8.DARKER,
                children: (e) =>
                    (0, o.jsx)(nl.L, {
                        innerRef: s,
                        onChange: d,
                        threshold: 0,
                        children: (0, o.jsxs)("div", {
                            ref: s,
                            className: u()(e, n$.kL),
                            children: [
                                (0, o.jsx)(nV.A, { className: n$.Ki, src: nq.A }),
                                (0, o.jsxs)("div", {
                                    className: n$.Qs,
                                    children: [
                                        (0, o.jsx)(eo.D, {
                                            variant: "heading-xl/normal",
                                            color: "text-strong",
                                            className: n$.R_,
                                            children: P.intl.string(P.t["50J7mj"]),
                                        }),
                                        (0, o.jsx)(Z.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: n$.rf,
                                            children: P.intl.format(P.t.NU5ZId, { monthlyOrbsAmount: 250 }),
                                        }),
                                        (0, o.jsxs)("div", {
                                            className: n$.R$,
                                            children: [
                                                (0, o.jsx)(nW.A, {
                                                    subscriptionTier: M.pe.TIER_2,
                                                    variantOverride: "expressive",
                                                    size: "md",
                                                    fullWidth: a,
                                                }),
                                                (0, o.jsx)(X.$, {
                                                    variant: "secondary",
                                                    size: "md",
                                                    fullWidth: a,
                                                    text: P.intl.string(P.t.PcTCB7),
                                                    onClick: () => {
                                                        x(), (0, nB.pX)(nY.BV.NITRO_HOME);
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, o.jsx)("img", {
                                    className: n$.Qw,
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
    nX = (e) => {
        let { index: t, wideBannerBlock: n, tab: s } = e,
            l = nU.useConfig({ location: "CollectiblesShopBannerSelector" }),
            a = (0, nw.L)(M.PremiumTypes.TIER_2),
            i = (0, nF.O)();
        if (l && !a && !i && s === R.G2.ORBS) {
            let e = A.A.getCategoryByStoreListingId(n.categoryStoreListingId);
            return (0, o.jsx)(nZ, { category: e, tab: s }, t);
        }
        return (0, o.jsx)(nH, { wideBannerBlock: n, tab: s }, t);
    },
    nJ = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: s, tab: l } = e,
            { noCache: a, includeUnpublished: i } = (0, eA.A)(),
            [r, d] = c.useState(!1),
            g = (0, v.uM)(),
            m = g?.sessionId ?? "";
        c.useEffect(() => {
            (0, ex.z)({
                sessionId: m,
                checkpoint: ex.t.SHOP_MOUNTED,
                tab: l,
                unpublishedCategoriesShown: i,
                cacheDisabled: a,
            });
        }, [l]);
        let {
                isFetchingShopHome: h,
                fetchShopHomeError: x,
                shopBlocks: E,
                refreshShopHome: p,
            } = (0, tp.y)(l, { noCache: a, includeUnpublished: i, logPerf: !0 }, { sessionId: m, tab: l }),
            f = c.useCallback(() => {
                p();
            }, [p]),
            C = c.useMemo(() => E.some((e) => e instanceof tf.p), [E])
                ? (0, o.jsx)(tb.A, { location: "CollectiblesShop" })
                : null;
        return (c.useEffect(() => {
            null != x ||
                h ||
                0 === E.length ||
                (0, ex.z)({
                    sessionId: m,
                    checkpoint: ex.t.SHOP_RENDERED,
                    tab: l,
                    unpublishedCategoriesShown: i,
                    cacheDisabled: a,
                });
        }, [x, h, E.length, i, a, m, l]),
        null != x)
            ? (0, o.jsx)(tu.h, { onRetry: f, errorOrigin: tu.A.SHOP_PAGE, errorMessage: x.message })
            : h || 0 === E.length
              ? (0, o.jsxs)("div", {
                    className: u()(tP.g4, tP.Of),
                    children: [
                        (0, o.jsx)(t4.A, { isLoading: h, handleTransition: t, tab: l }),
                        (0, o.jsx)(tH, { isLoading: h, handleTransition: t, categories: [] }),
                        (0, o.jsx)(t0, {
                            isLoading: h,
                            title: l === R.G2.ORBS ? P.intl.string(P.t.dFgeuZ) : P.intl.string(P.t.NSv5KV),
                            numVisibleItems: n,
                            tab: l,
                        }),
                    ],
                })
              : (0, o.jsx)(o.Fragment, {
                    children: E.map((e, a) =>
                        ((e, a, i) => {
                            if (null == e) return null;
                            let c = null,
                                g = !1;
                            switch (e.type) {
                                case tg.g.HERO:
                                    c = (0, o.jsx)(
                                        t4.A,
                                        { isLoading: h, handleTransition: t, heroBlock: e, tab: l, badge: C },
                                        i,
                                    );
                                    break;
                                case tg.g.FEATURED:
                                    c = (0, o.jsx)(
                                        tH,
                                        { isLoading: h, handleTransition: t, featuredBlockRecord: e },
                                        i,
                                    );
                                    break;
                                case tg.g.FEED:
                                    let m = e.sortedSkuIds;
                                    c = (0, o.jsx)(
                                        t0,
                                        {
                                            title:
                                                l === R.G2.ORBS ? P.intl.string(P.t.dFgeuZ) : P.intl.string(P.t.NSv5KV),
                                            isLoading: s,
                                            numVisibleItems: n,
                                            sortedSkuIds: m,
                                            buttonContainerClassName: a?.type === tg.g.IMMERSIVE_BANNER ? tP.w : void 0,
                                            prioritizeUserDiscounts: l === R.G2.HOME,
                                            tab: l,
                                            orbsSupportedOnly: l === R.G2.ORBS,
                                        },
                                        i,
                                    );
                                    break;
                                case tg.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, th.En)(tm.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    c = (0, o.jsx)(nX, { index: i, wideBannerBlock: e, tab: l }, i);
                                    break;
                                case tg.g.FRAMES_BANNER:
                                    c = (0, o.jsx)(
                                        nH,
                                        {
                                            wideBannerBlock: tC.y.fromServer({
                                                type: tg.g.WIDE_BANNER,
                                                title: e.title,
                                                body: e.body,
                                                wide_banner_url: e.desktopBackgroundImage,
                                                banner_text_color: "white",
                                                banner_body_text_color: "white",
                                                disable_cta: !0,
                                            }),
                                            tab: l,
                                        },
                                        i,
                                    );
                                    break;
                                case tg.g.FRAMES_PRODUCT_SHELF:
                                    c = (0, o.jsx)(t5, { block: e, handleTransition: t, tab: l }, i);
                                    break;
                                case tg.g.SHELF:
                                    c = (0, o.jsx)(nC, { handleTransition: t, shelf: e, tab: l }, i);
                                    break;
                                case tg.g.COUNTDOWN_TIMER:
                                    (c = (0, o.jsx)(tk, { countdownTimerBlock: e, isVisible: r }, i)), (g = !0);
                                    break;
                                case tg.g.IMMERSIVE_BANNER:
                                    c = (0, o.jsx)(
                                        t8,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => d(!e) },
                                        i,
                                    );
                                    break;
                                case tg.g.REWARD_HERO:
                                    c = (0, o.jsx)(np, { isLoading: h, handleTransition: t, heroBlock: e, tab: l }, i);
                                    break;
                                case tg.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, o.jsx)(
                                        tE,
                                        {
                                            blockType: e.type,
                                            children: (0, o.jsx)(nA, {
                                                applicationId: e.applicationId,
                                                headerText: e.headerText,
                                                gradientColors: e.gradientColors,
                                                gradientAngle: e.gradientAngle,
                                                skuIds: e.skuIds,
                                                tab: l,
                                                endTime: e.endTime,
                                                ctaType: e.ctaType,
                                                logoUrl: e.logoUrl,
                                            }),
                                        },
                                        i,
                                    );
                                default:
                                    return null;
                            }
                            return (0, o.jsx)(
                                tE,
                                {
                                    blockType: e.type,
                                    children: (0, o.jsx)("div", {
                                        className: u()(tP.v1, tP.Of, { [tP.J1]: 0 === i || g }),
                                        children: c,
                                    }),
                                },
                                i,
                            );
                        })(e, a > 0 ? E[a - 1] : null, a),
                    ),
                });
    },
    nQ = (e) => {
        let { handleTransition: t, tab: n, transitionState: s } = e,
            l = c.useRef(null),
            { handleScroll: a } = es(l, n),
            i = (0, ev.U)(),
            r = (0, v.uM)(),
            [d, u] = c.useState(R.md),
            [g, m] = c.useState(!1);
        return (
            c.useEffect(() => {
                if (null != l.current) {
                    let e = () => {
                            if (null == l.current) return;
                            let e = l.current.getDistanceFromBottom();
                            d >= 36 ? m(e < 20) : e <= 200 && u((e) => e + R.md);
                        },
                        t = l.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [l, d, u, m]),
            (0, o.jsx)($.Ch, {
                className: tP.OW,
                ref: l,
                onScroll: a,
                children: (0, o.jsxs)("div", {
                    className: tP.bx,
                    children: [
                        (0, o.jsxs)("div", {
                            className: tP.rb,
                            children: [
                                (0, o.jsx)(nJ, {
                                    handleTransition: t,
                                    numVisibleItems: d,
                                    isFetchingCategories: i,
                                    tab: n,
                                }),
                                n !== R.G2.CATALOG &&
                                    d >= 36 &&
                                    (0, o.jsxs)("div", {
                                        className: tP.R$,
                                        children: [
                                            (0, o.jsx)(eo.D, {
                                                variant: "heading-md/semibold",
                                                children: P.intl.string(P.t.Yr70c4),
                                            }),
                                            (0, o.jsx)(X.$, {
                                                variant: "primary",
                                                text: P.intl.string(P.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        ee.default.track(et.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: r?.sessionId,
                                                            page_type: n,
                                                            page_category: n === R.G2.HOME ? void 0 : r?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, o.jsx)(nR, { peaking: g, transitioning: s === R.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var n0 = n(154323),
    n1 = n(295811),
    n2 = n(870216);
let n5 = { "Any:personalization-header": tQ },
    n4 = { [ei.b.SHOP_HOME]: n5 },
    n9 = { "1465939725649973269": n5, "1478495181551440044": n5 },
    n7 = function () {
        return (0, o.jsx)("div", {
            style: {
                background: "linear-gradient(rgba(39, 30, 173, 0.3), transparent)",
                width: "100%",
                height: 500,
                position: "absolute",
                top: 0,
            },
            children: (0, o.jsx)("div", {
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
        });
    },
    n3 = { prioritizedCurrency: ej.Hi.ORBS };
function n6(e) {
    let { tab: t } = e,
        [n, s, l] = (0, N.yK)([n2.A], () => [n2.A.getLayout(t), n2.A.isFetchingLayout(t), n2.A.getLayoutFetchError(t)]),
        a = (0, N.bG)([n0.A], () => n0.A.get("shop_include_unpublished")),
        i = (0, N.bG)([A.A], () => A.A.skipNumCategories),
        r = c.useMemo(() => {
            let e = {};
            return !0 === a && (e.include_unpublished = !0), null != i && i > 0 && (e.skip_num_categories = i), e;
        }, [a, i]),
        d = null == n && !s && l?.status !== 404 && l?.status !== 429;
    if (
        (c.useEffect(() => {
            d && (0, no.T2)({ tab: t });
        }, [d, t]),
        null == n)
    )
        return t !== U.HOME || d || s
            ? null
            : (0, o.jsx)(ea.Z_, {
                  tenantId: et.FYj,
                  templateId: ei.b.SHOP_HOME,
                  requestParams: r,
                  overrides: n4[ei.b.SHOP_HOME],
              });
    let u = (0, o.jsx)(ea.Qs, { tenantId: et.FYj, layoutId: n, overrides: n9[n] });
    return (0, o.jsxs)(o.Fragment, {
        children: [
            t === U.ORBS && (0, o.jsx)(n7, {}),
            t === U.ORBS ? (0, o.jsx)(ej.v3.Provider, { value: n3, children: u }) : u,
        ],
    });
}
function n8(e) {
    let { url: t } = e,
        [n, s] = c.useState(null);
    return (c.useEffect(() => {
        !(async function () {
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
        : (0, o.jsx)(ea.Ay, { layout: n });
}
let se = (e) => {
    let { handleTransition: t, tab: n, transitionState: s } = e,
        l = (0, v.uM)(),
        a = (0, N.bG)([n1.A], () => n1.A.getShopLayoutUrlOverride()),
        i = c.useRef(null),
        { handleScroll: r } = es(i, n),
        [d, g] = c.useState(R.md),
        [m, h] = c.useState(!1);
    return (
        c.useEffect(() => {
            if (null != i.current) {
                let e = () => {
                        if (null == i.current) return;
                        let e = i.current.getDistanceFromBottom();
                        d >= 36 ? h(e < 20) : e <= 200 && g((e) => e + R.md);
                    },
                    t = i.current.getScrollerNode();
                return (
                    t?.addEventListener("scroll", e),
                    () => {
                        t?.removeEventListener("scroll", e);
                    }
                );
            }
        }, [i, d, g, h]),
        (0, o.jsx)($.Ch, {
            className: tP.OW,
            ref: i,
            onScroll: r,
            children: (0, o.jsxs)("div", {
                className: tP.bx,
                children: [
                    (0, o.jsxs)("div", {
                        className: u()(tP.rb, tP.GS),
                        children: [
                            null != a && "" !== a ? (0, o.jsx)(n8, { url: a }) : (0, o.jsx)(n6, { tab: n }),
                            n !== U.CATALOG &&
                                d >= 36 &&
                                (0, o.jsxs)("div", {
                                    className: tP.R$,
                                    children: [
                                        (0, o.jsx)(eo.D, {
                                            variant: "heading-md/semibold",
                                            children: P.intl.string(P.t.Yr70c4),
                                        }),
                                        (0, o.jsx)(X.$, {
                                            variant: "primary",
                                            text: P.intl.string(P.t.AfrvRD),
                                            onClick: () => {
                                                t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                    ee.default.track(et.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: l?.sessionId,
                                                        page_type: n,
                                                        page_category: n === U.HOME ? void 0 : l?.pageCategory,
                                                        cta_name: "browse the shop button",
                                                    });
                                            },
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, o.jsx)(nR, { peaking: m, transitioning: s === R.Pf.OUT }),
                ],
            }),
        })
    );
};
var st = n(256067);
let sn = () =>
        (0, o.jsxs)("div", {
            className: st.z,
            children: [
                (0, o.jsx)("img", {
                    className: st.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: P.intl.string(P.t["p8+qtU"]),
                }),
                (0, o.jsx)(eo.D, { variant: "heading-xl/semibold", children: P.intl.string(P.t["p8+qtU"]) }),
                (0, o.jsx)(Z.E, { variant: "text-md/medium", children: P.intl.string(P.t.UEiyvs) }),
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
            refreshCategories: i,
        } = e,
        r = (0, N.bG)([A.A, W.A], () =>
            null != A.A.error
                ? `shop load fetch categories error: ${A.A.error.message}`
                : null != W.A.claimError
                  ? `shop load claim error: ${W.A.claimError.message}`
                  : null != W.A.fetchError
                    ? `shop load fetch purchase error: ${W.A.fetchError.message}`
                    : void 0,
        );
    !(function (e) {
        let t = (0, N.bG)([j.default], () => j.default.getCurrentUser()),
            { noCache: n, includeUnpublished: s } = (0, eA.A)();
        c.useEffect(() => {
            null != e &&
                V.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: s.toString(),
                    },
                });
        }, [e, t, n, s]);
    })(r);
    let d = (0, N.bG)([G.Ay], () => G.Ay.useReducedMotion),
        u = (0, F.W6)(),
        g = (0, F.zy)(),
        [m] = c.useState(() => {
            if ("POP" === u.action) {
                let e;
                return (e = eL), (eL = null), e ?? void 0;
            }
        }),
        [h, x] = c.useState(m),
        [E, p] = c.useState(null == m),
        f = c.useMemo(() => {
            let e = new URLSearchParams(g.search).get(R.P1);
            return null != e && "" !== e ? e : void 0;
        }, [g.search]),
        C = c.useMemo(
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
        b = (0, z.U)("CollectiblesContent"),
        S = (0, K.a)("CollectiblesContent"),
        _ = c.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: l,
                    isInternalShopDeeplink: i,
                    isOrbsExclusive: r,
                } = e;
                if ((a(t, n), S && null != n && i && !r))
                    return void u.push(et.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n));
                let o = l && !d,
                    c = r ? R.G2.ORBS : R.G2.CATALOG;
                x(n), p(!i), s(c, o);
            },
            [d, s, a, S, u],
        ),
        { searchError: v } = (0, Y.S)();
    return null != v
        ? (0, o.jsx)(sn, {})
        : null != r
          ? (0, o.jsx)(tu.h, { onRetry: i, errorMessage: r, errorOrigin: tu.A.SHOP_PAGE })
          : t === R.G2.HOME && b
            ? (0, o.jsx)(se, { tab: U.HOME, transitionState: l, handleTransition: _ })
            : t === R.G2.ORBS && b
              ? (0, o.jsx)(se, { tab: U.ORBS, transitionState: l, handleTransition: _ })
              : ss.includes(t)
                ? (0, o.jsx)(nQ, { handleTransition: _, tab: t, transitionState: l })
                : (0, o.jsx)(tc, {
                      tab: t,
                      categories: C,
                      initialCategoryId: h ?? f,
                      showFilterInitially: E && null == f,
                      onUnmount: () => {
                          x(void 0), p(!0);
                      },
                  });
}
var sa = n(956123),
    si = n(766075),
    sr = n(893489);
let so = { pink: "pinkCountdown" },
    sc = c.memo(function (e) {
        let { message: t, onClick: n, countdownEndDate: s, variant: l } = e,
            a = c.useMemo(() => {
                if (null == s) return null;
                let e = s instanceof Date ? s : new Date(s);
                return isNaN(e.getTime()) ? null : e;
            }, [s]),
            i = (0, tL.A)(a ?? 0, 1e3, void 0, null == a);
        if (null != a && Object.values(i).every((e) => 0 === e)) return null;
        let r = null != l ? sr[l] : void 0,
            d = null != l ? sr[so[l]] : void 0;
        return (0, o.jsx)(eV.D, {
            className: u()(sr.nagBar, r),
            onClick: n,
            "aria-label": P.intl.string(P.t["wjws+K"]),
            children: (0, o.jsxs)("div", {
                className: sr.content,
                children: [
                    (0, o.jsx)(Z.E, {
                        variant: "text-md/medium",
                        color: "text-overlay-light",
                        className: sr.message,
                        children: t,
                    }),
                    null != a && (0, o.jsx)(tN, { endDate: a, size: "md", className: d, showSeconds: !0 }),
                ],
            }),
        });
    });
var sd = n(870308),
    su = n(650583);
function sg(e) {
    let { children: t, shouldAddEventListener: n, onClose: s } = e,
        l = (0, h.useHasAnyModalOpen)();
    return (
        c.useEffect(() => {
            if (n && !l) return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            function e(e) {
                e.key === su.N$.Escape && s();
            }
        }, [n, l, s]),
        t
    );
}
let sm = function (e) {
    let { tab: t = R.G2.HOME } = e;
    (0, S.P)(b.a), (0, D.g)();
    let n = (0, p.A)((0, g.A)()),
        s = (0, m.bG)([j.default], () => j.default.getCurrentUser());
    (0, _.pE)();
    let l = (0, eM.yB)("CollectiblesShop"),
        { onClose: a } = (function () {
            let { search: e } = (0, F.zy)(),
                t = (0, F.g)(),
                n = c.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                s = null != n ? parseInt(n, 10) : null;
            return {
                onClose: c.useCallback(() => {
                    if (0 === s) {
                        (0, nB.aX)(), (0, si.openUserSettings)();
                        return;
                    }
                    (0, nB.EL)() ? (0, nB.aX)() : (0, nB.pX)(et.BVt.APP);
                }, [s]),
                source: s,
                ...t,
            };
        })(),
        { currentTab: i, hasFilters: r } = (0, w.v)(),
        d = c.useMemo(() => (t === R.G2.HOME && null != i && r() ? i : t), [t, i, r]),
        { categories: T, refreshCategories: U } = (0, B.Ay)({ logPerf: !0 }, { sessionId: n, tab: d }),
        G = c.useMemo(() => [...T.values()], [T]),
        [z, V] = c.useState(),
        W = (0, m.bG)([A.A], () => A.A.getCategory(z)?.name),
        [K, Y] = c.useState();
    (0, ek.XU)(n);
    let $ = c.useCallback((e, t) => {
            Y(e), V(t);
        }, []),
        { selectedTab: q, transitionState: Z, transitionToTab: X } = (0, H.o)(d);
    (0, C.HU)({ location: P.intl.string(P.t.pWG4ze) }), (0, I.uS)(n, q, W, Z, K), (0, I.N0)(q, s);
    let { dismissShopButtonDC: J } = (0, sd.A)();
    c.useEffect(() => {
        J();
    }, [J]),
        c.useEffect(() => {
            (0, E.I)(et.BVt.COLLECTIBLES_SHOP);
        }, []);
    let Q = c.useRef(null),
        ee = c.useRef(null);
    (0, x.tj)(Q);
    let en = (0, h.useHasAnyModalOpen)();
    c.useEffect(() => {
        ee.current?.focus();
    }, []),
        (0, eM.gB)();
    let { analyticsLocations: es } = (0, I.lC)(q),
        el = (function (e, t) {
            let n = (0, N.bG)([k.A], () => k.A.getUserDiscount(M.tU)),
                s = (0, N.bG)([O.default], () => O.default.locale),
                l = y.useConfig({ location: t }).enabled;
            if (c.useMemo(() => null != n && l && e !== R.G2.ORBS, [n, l, e])) {
                let e =
                    null != n && null != n.expiresAt
                        ? new Date(n.expiresAt).toLocaleDateString(s, { day: "numeric", month: "numeric" })
                        : void 0;
                return { type: 0, countdownEndDate: n?.expiresAt, message: P.intl.format(P.t.RCo9MF, { date: e }) };
            }
        })(q, "collectibles_shop");
    return (0, o.jsx)(f.f5, {
        value: es,
        children: (0, o.jsx)(v.R9, {
            newValue: { sessionId: n, pageCategory: W, pageSize: R.l5 },
            children: (0, o.jsx)(L.iM, {
                tab: q,
                children: (0, o.jsx)(sg, {
                    onClose: a,
                    shouldAddEventListener: !1,
                    children: (0, o.jsxs)("div", {
                        className: u()(eC.bx, { [eM.jP]: l }),
                        ref: ee,
                        inert: en,
                        tabIndex: -1,
                        children: [
                            (0, o.jsx)(sa.G, { handleTransition: X, selectedTab: q }),
                            null != el &&
                                (0, o.jsx)(sc, {
                                    message: el.message,
                                    onClick: () => X(R.G2.HOME),
                                    variant: "pink",
                                    countdownEndDate: el.countdownEndDate,
                                }),
                            (0, o.jsx)("div", {
                                className: u()(eC.td, {
                                    [eC.RK]: Z === R.Pf.VISIBLE,
                                    [eC.in]: Z === R.Pf.IN,
                                    [eC.FD]: Z === R.Pf.OUT,
                                }),
                                children: (0, o.jsx)(sl, {
                                    tab: q,
                                    refreshCategories: U,
                                    transitionToTab: X,
                                    transitionState: Z,
                                    categories: G,
                                    updateAnalyticsState: $,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
};
