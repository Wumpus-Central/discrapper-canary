n.r(t), n.d(t, { default: () => sf });
var s,
    l,
    i,
    a,
    r,
    o = n(627968),
    c = n(64700),
    d = n(503698),
    u = n.n(d),
    g = n(132500),
    m = n(702841),
    h = n(192308),
    E = n(315710),
    x = n(944791),
    f = n(444927),
    p = n(688810),
    C = n(726249),
    _ = n(475073),
    b = n(611924),
    S = n(758445),
    j = n(561794),
    v = n(287809),
    L = n(440938),
    A = n(590180),
    I = n(161918),
    N = n(945810);
let O = (0, N.mj)({
    name: "2026-07-collectibles-promotion-endpoint-reference",
    kind: "user",
    defaultConfig: { useEndpoint: !1 },
    variations: { 0: { useEndpoint: !1 }, 1: { useEndpoint: !0 } },
});
var T = n(790297),
    k = n(841702),
    R = n(983545),
    y = n(23161);
n(323874), n(14289), n(35956), n(321073);
var M = n(873263),
    P = (((s = {}).HOME = "home"), (s.CATALOG = "catalog"), (s.ORBS = "orbs"), s),
    B = n(17928),
    D = n(775602),
    H = n(578797),
    F = n(140218),
    w = n(38405),
    G = n(4227),
    U = n(50920),
    z = n(856686),
    V = n(689175),
    Y = n(364522),
    W = n(834730),
    K = n(821609),
    $ = n(783977),
    q = n(59520),
    Z = n(174459),
    X = n(652215);
function J(e, t, n, s) {
    let { scrollTop: l = 0, scrollOffset: i = 0, scrollHeight: a = 0, scrollWidth: r = 0 } = s;
    if (a > 0) {
        let s = (l + i) / a;
        s > 0 &&
            Z.default.track(e, {
                scroll_visible_percent: s,
                source: n,
                page_height: Math.round(a),
                page_width: Math.round(r),
                page_session_id: t,
            });
    }
}
function Q(e, t) {
    let { analyticsSource: n } = (0, T.lC)(t),
        s = (0, q.I)(J, 5e3, [], { trailing: !0 }),
        l = (0, L.uM)(),
        i = l?.sessionId;
    return {
        handleScroll: c.useCallback(() => {
            if (null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    s(X.HAw.COLLECTIBLES_SHOP_SCROLLED, null != i ? i : "", n, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth,
                    });
            }
        }, [s, n, i, e]),
    };
}
var ee = n(354328),
    et = n(356118),
    en = n(619835),
    es = n(641150),
    el = n(297264),
    ei = n(375708);
function ea() {
    let { itemTypeFilters: e, searchQuery: t } = (0, y.v)((e) => e),
        { totalCount: n, isFetchingResults: s } = (0, z.S)(),
        l = (0, y.v)((e) => e.hasFilters()),
        i = c.useCallback(() => {
            if (!l) return "";
            if (s) return ei.intl.string(ei.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return ei.intl.format(ei.t.KJMJOz, { count: n, search: e });
            }
            return 1 === e.size && e.has(es.q.AVATAR_DECORATION)
                ? ei.intl.format(ei.t.s1UzGQ, { count: n })
                : 1 === e.size && e.has(es.q.NAMEPLATE)
                  ? ei.intl.format(ei.t.ZWGN9T, { count: n })
                  : 1 === e.size && e.has(es.q.PROFILE_EFFECT)
                    ? ei.intl.format(ei.t["v/7apu"], { count: n })
                    : 1 === e.size && e.has(es.q.PROFILE_FRAME)
                      ? ei.intl.format(ei.t.eu4eRy, { count: n })
                      : 1 === e.size && e.has(es.q.BUNDLE)
                        ? ei.intl.format(ei.t.fZ1rdk, { count: n })
                        : ei.intl.format(ei.t["/rPvmQ"], { count: n });
        }, [e, n, l, t, s]);
    return (0, o.jsx)(el.D, { variant: "heading-lg/semibold", children: i() });
}
var er = n(172218),
    eo = n(932793),
    ec = n(511265),
    ed = n(206077),
    eu = n(100057),
    eg = n(828515),
    em = n(484469),
    eh = n(346448),
    eE = n(195261),
    ex = n(132866);
let ef = function () {
    return (0, o.jsx)("div", {
        className: ex.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, o.jsxs)(
                "div",
                {
                    className: eE.vY,
                    children: [
                        (0, o.jsx)("div", { className: u()(eh.sW, ex.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, o.jsx)(em.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
};
var ep = n(828614),
    eC = n(159439),
    e_ = n(998694);
let eb = null;
var eS = n(758836);
function ej(e) {
    let { category: t } = e,
        n = (0, m.bG)([v.default], () => v.default.getCurrentUser()),
        s = (0, ed.X)(t.products),
        l = (0, ec.p)()(s);
    return null == n || 0 === l.length
        ? null
        : (0, o.jsx)("div", {
              className: eE.vY,
              children: l.map((e, t) =>
                  (0, o.jsx)(
                      L.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, o.jsx)(ep.A, { skuId: e.skuId, skipLimitedTimeCheck: !0 }, e.skuId),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function ev(e) {
    let { category: t } = e,
        [n, s] = c.useState(!1),
        l = (0, er.K)(function (e) {
            s(e);
        }, 0.15),
        i = (0, M.W6)(),
        a = (0, U.a)("CollectiblesCatalogContent"),
        r = (0, L.uM)(),
        d = c.useCallback(() => {
            Z.default.track(X.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: r?.sessionId,
                sku_id: t.skuId,
                page_type: eS.G2.CATALOG,
                page_section: r?.pageSection,
                page_category: t.name,
                page_index: r?.pageIndex,
                page_size: r?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (eb = t.skuId),
                i.push(X.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
        }, [r?.pageIndex, r?.pageSection, r?.pageSize, r?.sessionId, t.name, t.skuId, i]);
    return (0, o.jsxs)("div", {
        className: eE.EF,
        ref: l,
        children: [(0, o.jsx)(eg.A, { category: t, onSelect: a ? d : void 0 }), (0, o.jsx)(ej, { category: t })],
    });
}
function eL(e) {
    let { categories: t, setCategoryRef: n, currentPage: s, handlePageChange: l, initialCategoryId: i } = e,
        a = (0, L.uM)(),
        r = (0, eC.U)(),
        d = a?.sessionId ?? "",
        { noCache: u, includeUnpublished: g } = (0, e_.A)(),
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
        if (null == i || 0 === m.length) {
            h.current = void 0;
            return;
        }
        if (i === h.current) return;
        let e = m.findIndex((e) => e.skuId === i);
        if (-1 === e) return;
        let t = Math.floor(e / eS.l5) + 1;
        t !== s && l(t), (h.current = i);
    }, [i, m, l, s]);
    let E = c.useMemo(() => {
        let e = (s - 1) * eS.l5;
        return m.slice(e, e + eS.l5);
    }, [m, s]);
    return (c.useEffect(() => {
        (0, eu.z)({
            sessionId: d,
            checkpoint: eu.t.SHOP_MOUNTED,
            tab: eS.G2.CATALOG,
            unpublishedCategoriesShown: g,
            cacheDisabled: u,
        });
    }, []),
    c.useEffect(() => {
        r ||
            0 === E.length ||
            (0, eu.z)({
                sessionId: d,
                checkpoint: eu.t.SHOP_RENDERED,
                tab: eS.G2.CATALOG,
                unpublishedCategoriesShown: g,
                cacheDisabled: u,
            });
    }, [d, g, u, r, E.length]),
    r)
        ? (0, o.jsx)(ef, {})
        : (0, o.jsxs)("div", {
              className: eE.LZ,
              children: [
                  E.map((e, t) =>
                      (0, o.jsx)(
                          "div",
                          {
                              ref: (t) => n(e.skuId, t),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": ei.intl.formatToPlainString(ei.t.FNtLb3, { category: e.name }),
                              children: (0, o.jsx)(L.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, o.jsx)(ev, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, o.jsx)("div", {
                      className: eE.Ej,
                      children: (0, o.jsx)(eo.m, {
                          currentPage: s,
                          totalCount: m.length,
                          pageSize: eS.l5,
                          onPageChange: l,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var eA = n(177366),
    eI = n(401864),
    eN = n(124987),
    eO = n(691885),
    eT = n(146919),
    ek = n(858733);
let eR = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, y.v)(),
        s = (0, L.uM)(),
        l = (0, eT.yB)("CollectiblesSortSelect"),
        i = n(),
        a = c.useMemo(() => eS.QB.filter((e) => e.sortType !== eN.$.RELEVANCE || i), [i]),
        r = c.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === eN.$.RECENCY
                ? { label: ei.intl.string(ei.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === eN.$.PRICE
                  ? n === eI.A.ASC
                      ? { label: ei.intl.string(ei.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: ei.intl.string(ei.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === eN.$.RELEVANCE
                    ? { label: ei.intl.string(ei.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: ei.intl.string(ei.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        d = c.useCallback(
            (e) =>
                ({
                    recent: { sortType: eN.$.RECENCY, sortDirection: eI.A.DESC },
                    "price-asc": { sortType: eN.$.PRICE, sortDirection: eI.A.ASC },
                    "price-desc": { sortType: eN.$.PRICE, sortDirection: eI.A.DESC },
                    popularity: { sortType: eN.$.POPULARITY, sortDirection: eI.A.DESC },
                    relevance: { sortType: eN.$.RELEVANCE, sortDirection: eI.A.DESC },
                })[e],
            [],
        ),
        g = c.useCallback(
            (e) => {
                let n = r(d(e));
                Z.default.track(X.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        className: u()(ek.k, { [eT.jP]: l }),
        children: (0, o.jsx)(eO.l, {
            label: ei.intl.string(ei.t.uaX705),
            hideLabel: !0,
            options: a.map(r),
            onSelectionChange: g,
            value: m.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var ey =
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
    eM =
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
    eP = n(150934),
    eB = n(508770),
    eD = n(278416),
    eH = n(602853),
    eF = n(661531),
    ew = n(866665),
    eG = n(939249),
    eU = n(947641),
    ez = n(604338),
    eV = n(785866),
    eY = n(373846),
    eW = n(308323),
    eK = n(608599),
    e$ = n(685761),
    eq = n(157225),
    eZ = n(413249),
    eX = n(510241),
    eJ = n(601198),
    eQ = n(736653),
    e0 = n(223311),
    e1 = n(7250),
    e2 = n(623655),
    e5 = n(13875),
    e4 = n(818348),
    e3 = n(967339);
function e6() {
    let {
            onToggleOrbEligible: e,
            orbEligible: t,
            onToggleThirdPartyOnly: n,
            thirdPartyOnly: s,
            onToggleOfferEligible: l,
            offerEligible: i,
            reset: a,
            hasFilters: r,
        } = (0, y.v)(),
        d = (0, e2.z)("FilterBar"),
        g = r(),
        m = (0, e5.sk)("FilterBar"),
        h = (0, L.uM)(),
        E = c.useRef(null),
        x = (0, e0.A)(X.FYj),
        f = c.useMemo(() => eS._6.filter((e) => m || e !== es.q.PROFILE_FRAME), [m]),
        p = c.useCallback(
            (e) => {
                Z.default.track(X.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: h?.sessionId,
                    page_section: h?.pageSection,
                    page_category: h?.pageCategory,
                    page_index: h?.pageIndex,
                    page_size: h?.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [h],
        ),
        C = c.useCallback(() => {
            p(`filter 3p only ${!1 === s ? "on" : "off"}`), n();
        }, [n, s, p]);
    return (0, o.jsxs)("div", {
        className: e3.kT,
        children: [
            (0, o.jsxs)("div", {
                className: u()(e3.KZ, e3.YG),
                children: [
                    (0, o.jsx)("div", {
                        ref: E,
                        tabIndex: -1,
                        children: (0, o.jsx)(W.E, {
                            variant: "text-md/semibold",
                            className: e3.hr,
                            children: ei.intl.string(ei.t.Qk6r1a),
                        }),
                    }),
                    null != x &&
                        (0, o.jsxs)("div", {
                            className: e3.Ym,
                            children: [
                                (0, o.jsx)(eP.S, {
                                    checked: i,
                                    onChange: () => {
                                        p(`filter offer eligible ${!1 === i ? "on" : "off"}`), l();
                                    },
                                    label: ei.intl.string(ei.t.hY8Ft1),
                                }),
                                (0, o.jsx)(eB.E, { type: { text: ei.intl.string(ei.t["nb5PC/"]) }, icon: eD.g }),
                            ],
                        }),
                    f.map((e) => (0, o.jsx)(e7, { filter: e, trackFilterAction: p }, e)),
                    (0, o.jsx)(eP.S, {
                        checked: t,
                        onChange: () => {
                            p(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                        },
                        label: ei.intl.string(ei.t.AHHHgG),
                    }),
                    d && (0, o.jsx)(eP.S, { checked: s, onChange: C, label: ei.intl.string(ei.t["+W8gb+"]) }),
                ],
            }),
            (0, o.jsx)(e9, { trackFilterAction: p }),
            (0, o.jsx)(tt, { trackFilterAction: p }),
            g &&
                (0, o.jsx)(K.$, {
                    variant: "secondary",
                    onClick: () => {
                        p("filter reset"), a(), requestAnimationFrame(() => E.current?.focus());
                    },
                    text: ei.intl.string(ei.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function e7(e) {
    let { filter: t, trackFilterAction: n } = e,
        s = {
            [es.q.AVATAR_DECORATION]: ei.intl.string(ei.t.dRZYNE),
            [es.q.PROFILE_EFFECT]: ei.intl.string(ei.t["1cNjtx"]),
            [es.q.NAMEPLATE]: ei.intl.string(ei.t.V68Fqz),
            [es.q.PROFILE_FRAME]: ei.intl.string(ei.t.ecTJkR),
            [es.q.BUNDLE]: ei.intl.string(ei.t.FYFpps),
        },
        { itemTypeFilters: l, onToggleItemType: i } = (0, y.v)(),
        a = (0, o.jsx)(eP.S, {
            checked: l.has(t),
            onChange: () => {
                let e = s[t]?.toLowerCase() != null ? s[t].toLowerCase() : t;
                n(`filter item type ${e} ${!1 === l.has(t) ? "on" : "off"}`), i(t);
            },
            label: s[t] ?? "",
        });
    return t === es.q.PROFILE_FRAME
        ? (0, o.jsxs)("div", { className: e3.Ym, children: [a, (0, o.jsx)(eB.E, { type: "new" })] })
        : a;
}
function e9(e) {
    let { trackFilterAction: t } = e,
        n = c.useMemo(
            () => [
                { color: "#9B59B6", label: ei.intl.string(ei.t.kqUD4P), enum: ey.PURPLE },
                { color: "#3498DB", label: ei.intl.string(ei.t.qQTRae), enum: ey.BLUE },
                { color: "#2ECC71", label: ei.intl.string(ei.t["f/Ylk6"]), enum: ey.GREEN },
                { color: "#A0522D", label: ei.intl.string(ei.t["Sd/BMa"]), enum: ey.BROWN },
                { color: "#F1C40F", label: ei.intl.string(ei.t["0fevYz"]), enum: ey.YELLOW },
            ],
            [],
        ),
        s = c.useMemo(
            () => [
                { color: "#E67E22", label: ei.intl.string(ei.t.ZE7weD), enum: ey.ORANGE },
                { color: "#E74C3C", label: ei.intl.string(ei.t.hKJGOM), enum: ey.RED },
                { color: "#EC407A", label: ei.intl.string(ei.t.HvLEGM), enum: ey.PINK },
                { color: "#FFFFFF", label: ei.intl.string(ei.t["CB+lNO"]), enum: ey.WHITE },
                { color: "#262626", label: ei.intl.string(ei.t["dMey+v"]), enum: ey.BLACK },
            ],
            [],
        );
    return (0, o.jsxs)("div", {
        className: e3.KZ,
        children: [
            (0, o.jsx)(W.E, { variant: "text-md/semibold", className: e3.hr, children: ei.intl.string(ei.t.K1xGoG) }),
            (0, o.jsx)(e8, { colors: n, trackFilterAction: t }),
            (0, o.jsx)(e8, { colors: s, trackFilterAction: t }),
        ],
    });
}
function e8(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: s, onToggleColor: l } = (0, y.v)();
    return (0, o.jsx)("div", {
        className: e3.OW,
        children: t.map((e) => {
            let { color: t, label: i, enum: a } = e;
            return (0, o.jsx)(
                te,
                { color: t, label: i, enum: a, isToggled: s.has(a), onToggleColor: l, trackFilterAction: n },
                a,
            );
        }),
    });
}
function te(e) {
    let { color: t, label: n, enum: s, isToggled: l, onToggleColor: i, trackFilterAction: a } = e,
        r = (0, eH.r)(eF.A.unsafe_rawColors.WHITE).hex(),
        c = (0, eH.r)(eF.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, o.jsx)(
        ew.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, o.jsx)(
                eG.D,
                {
                    className: u()(e3.n1, { [e3.lx]: l }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": l,
                    onClick: () => {
                        a(`filter color ${n.toLowerCase()} ${!l ? "on" : "off"}`), i(s);
                    },
                    children:
                        l &&
                        (0, o.jsx)("div", {
                            className: e3.oE,
                            children: (0, o.jsx)(eU.r, {
                                size: "xs",
                                color: (0, e1.j)({ backgroundColor: t, colors: [r, c] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
function tt(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: s } = (0, y.v)(),
        l = (0, eQ.Ay)() === e4.NJ.DARK,
        i = c.useCallback(
            (e) => {
                if (n.has(e) || l) return "control-primary-text-default";
            },
            [n, l],
        ),
        a = c.useCallback((e) => (n.has(e) || l ? eF.A.colors.WHITE : eF.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, l]),
        r = c.useMemo(
            () => [
                {
                    name: ei.intl.string(ei.t.aVBOKh),
                    icon: (0, o.jsx)(ez.E, { size: "xs", color: a(eM.ANIME) }),
                    enum: eM.ANIME,
                },
                {
                    name: ei.intl.string(ei.t["3WoZBc"]),
                    icon: (0, o.jsx)(eV._, { size: "xs", color: a(eM.GAMING) }),
                    enum: eM.GAMING,
                },
                {
                    name: ei.intl.string(ei.t.yuEmLj),
                    icon: (0, o.jsx)(eY.C, { size: "xs", color: a(eM.CUTE_COZY) }),
                    enum: eM.CUTE_COZY,
                },
                {
                    name: ei.intl.string(ei.t.mMvCHo),
                    icon: (0, o.jsx)(eW.L, { size: "xs", color: a(eM.SCI_FI) }),
                    enum: eM.SCI_FI,
                },
                {
                    name: ei.intl.string(ei.t.TlhOQC),
                    icon: (0, o.jsx)(eK.L, { size: "xs", color: a(eM.FOOD_DRINKS) }),
                    enum: eM.FOOD_DRINKS,
                },
                {
                    name: ei.intl.string(ei.t["4IaUIM"]),
                    icon: (0, o.jsx)(e$.f, { size: "xs", color: a(eM.FANTASY) }),
                    enum: eM.FANTASY,
                },
                {
                    name: ei.intl.string(ei.t["w0nSG/"]),
                    icon: (0, o.jsx)(eq.N, { size: "xs", color: a(eM.ANIMALS_PETS) }),
                    enum: eM.ANIMALS_PETS,
                },
                {
                    name: ei.intl.string(ei.t.cJng7v),
                    icon: (0, o.jsx)(eZ.p, { size: "xs", color: a(eM.NATURE) }),
                    enum: eM.NATURE,
                },
                {
                    name: ei.intl.string(ei.t["5mUvyM"]),
                    icon: (0, o.jsx)(eX.T, { size: "xs", color: a(eM.MOVIES_TV_SHOWS) }),
                    enum: eM.MOVIES_TV_SHOWS,
                },
                {
                    name: ei.intl.string(ei.t.MB9H5Z),
                    icon: (0, o.jsx)(eJ.e, { size: "xs", color: a(eM.DARK_MOODY) }),
                    enum: eM.DARK_MOODY,
                },
            ],
            [a],
        );
    return (0, o.jsxs)("div", {
        className: e3.KZ,
        children: [
            (0, o.jsx)(W.E, { variant: "text-md/semibold", className: e3.hr, children: ei.intl.string(ei.t.t1Ztrp) }),
            (0, o.jsx)("div", {
                className: e3.Ot,
                children: r.map((e) => {
                    let { name: l, icon: a, enum: r } = e;
                    return (0, o.jsxs)(
                        eG.D,
                        {
                            className: u()(e3.w4, { [e3.C7]: n.has(r) }),
                            "aria-label": l,
                            "aria-pressed": n.has(r),
                            onClick: () => {
                                let e = n.has(r);
                                t(`filter theme ${l.toLowerCase()} ${!e ? "on" : "off"}`), s(r);
                            },
                            children: [a, (0, o.jsx)(W.E, { color: i(r), variant: "text-md/medium", children: l })],
                        },
                        l,
                    );
                }),
            }),
        ],
    });
}
var tn = n(561769),
    ts = n(882443);
function tl() {
    return (0, o.jsxs)("div", {
        className: ts.k,
        children: [
            (0, o.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: ei.intl.string(ei.t.oezC3x),
                className: ts._,
            }),
            (0, o.jsx)(el.D, { variant: "heading-xl/semibold", children: ei.intl.string(ei.t.oezC3x) }),
            (0, o.jsx)(W.E, { variant: "text-md/medium", children: ei.intl.string(ei.t["Tc/Ndl"]) }),
        ],
    });
}
var ti = n(996824);
let ta = { flattenProductVariants: !0 };
function tr(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: s } = e,
        l = (0, L.uM)(),
        i = l?.sessionId ?? "",
        { noCache: a, includeUnpublished: r } = (0, e_.A)(),
        d = (0, m.bG)([v.default], () => v.default.getCurrentUser()),
        { skus: g, currentPage: h, totalCount: E, isFetchingResults: x } = (0, z.S)(),
        f = (0, m.yK)([A.A], () => A.A.getProductsBySkus(g)),
        p = c.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        C = g?.join("");
    c.useEffect(() => {
        p();
    }, [C, p]);
    let _ = (0, ec.p)(),
        b = c.useMemo(() => _(f), [_, f]);
    c.useEffect(() => {
        t ||
            (0, eu.z)({
                sessionId: i,
                checkpoint: eu.t.SHOP_RENDERED,
                tab: s,
                unpublishedCategoriesShown: r,
                cacheDisabled: a,
            });
    }, [i, r, a, t, s]);
    let S = c.useRef(null),
        { setQueryPageSize: j, setQueryPageOffset: I, queryPageSize: N } = (0, y.v)(),
        [O, T] = c.useState(!1),
        k = t || x || null == d;
    c.useEffect(() => {
        k ? T(!1) : b.length > 0 && T(!0);
    }, [k, b.length]);
    let R = N > 0 && !k && 0 === b.length;
    c.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == S.current || j(Math.floor(5 * getComputedStyle(S.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != S.current) return e.observe(S.current), () => e.disconnect();
    }, [j]);
    let M = c.useCallback(
        (e) => {
            Z.default.track(X.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: l?.sessionId,
                page_section: l?.pageSection,
                page_category: l?.pageCategory,
                page_index: e,
                page_size: N,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                I((e - 1) * N);
        },
        [l, N, I],
    );
    return (0, o.jsxs)(tn.v3.Provider, {
        value: ta,
        children: [
            (0, o.jsxs)("div", {
                className: u()({ [ti.oE]: R }),
                children: [
                    R && (0, o.jsx)(tl, {}),
                    (0, o.jsxs)("div", {
                        className: u()(ti.ZE, { [ti.Kp]: O }),
                        ref: S,
                        children: [
                            k && [...Array(N)].map((e, t) => (0, o.jsx)(em.A, {}, t)),
                            !k &&
                                b.map((e, t) =>
                                    null == A.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, o.jsx)(
                                              L.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, o.jsx)(
                                                      ep.A,
                                                      { skuId: e.skuId, hideStaticBundleBackgroundAsset: !0 },
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
            E > N &&
                (0, o.jsx)("div", {
                    className: ti.Ej,
                    children: (0, o.jsx)("div", {
                        children: (0, o.jsx)(eo.m, {
                            currentPage: h,
                            totalCount: E,
                            pageSize: N,
                            onPageChange: M,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var to = n(328539);
function tc(e) {
    let { tab: t, categories: n, initialCategoryId: s, showFilterInitially: l = !0, onUnmount: i } = e,
        a = (0, ee.A)("shop_include_unpublished");
    (0, y.S)(a);
    let r = c.useRef(null),
        { handleScroll: d } = Q(r, t),
        u = (0, H.U)("Shop Browse"),
        { setCategoryRef: g, handleScrollToCategory: m } = (0, eA.k0)(r.current),
        [h, E] = c.useState(l),
        [x, f] = c.useState(!1);
    return (
        c.useEffect(() => {
            null != s && m(s);
        }, [s, m]),
        c.useEffect(
            () => () => {
                null != i && i();
            },
            [],
        ),
        c.useEffect(() => {
            function e() {
                f(window.innerWidth < 1400);
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, o.jsx)("div", {
            className: to.VM,
            children: (0, o.jsxs)("main", {
                className: to.MY,
                children: [
                    (0, o.jsx)(V.Gt, {
                        className: to.OW,
                        ref: r,
                        onScroll: d,
                        children: u
                            ? (0, o.jsx)("div", {
                                  className: to.en,
                                  children: (0, o.jsx)("div", {
                                      className: to.pf,
                                      children: (0, o.jsx)(et.Z_, { tenantId: X.FYj, templateId: en.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, o.jsx)(td, {
                                  isSmallScreen: x,
                                  filterBarOpen: h,
                                  setFilterBarOpen: E,
                                  tab: t,
                                  scrollerRef: r,
                                  categories: n,
                                  setCategoryRef: g,
                                  initialCategoryId: s,
                              }),
                    }),
                    h && !x && (0, o.jsx)("div", { className: to.yF }),
                    h && !x && (0, o.jsx)(Y.Ip, { className: to.kT, children: (0, o.jsx)(e6, {}) }),
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
            scrollerRef: i,
            categories: a,
            setCategoryRef: r,
            initialCategoryId: d,
        } = e,
        g = c.useRef(null),
        m = (0, y.v)((e) => e.hasDefaultFilters()),
        h = (0, L.uM)(),
        { handlePageChange: E, currentPage: x } = (function (e) {
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
        })(i),
        f = c.useCallback(
            (e) => {
                Z.default.track(X.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        p = c.useRef(null);
    return (
        c.useEffect(() => {
            if (t && n)
                return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
            function e(e) {
                let t = e.target;
                null === g.current ||
                    null === p.current ||
                    g.current.contains(t) ||
                    p.current.contains(t) ||
                    (Z.default.track(X.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                            (0, o.jsx)("div", { className: to.lQ, children: (0, o.jsx)(ea, {}) }),
                            (0, o.jsxs)("div", {
                                className: u()(to.wR, { [to.Im]: t }),
                                children: [
                                    (0, o.jsxs)("div", {
                                        className: to.Ul,
                                        children: [
                                            (0, o.jsx)(W.E, {
                                                variant: "text-md/semibold",
                                                children: ei.intl.string(ei.t.uaX705),
                                            }),
                                            (0, o.jsx)(eR, {}),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        ref: p,
                                        children: (0, o.jsx)(K.$, {
                                            onClick: function () {
                                                let e = !n;
                                                Z.default.track(X.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                            text: ei.intl.string(n ? ei.t.fYtm6f : ei.t["TeTYE+"]),
                                            icon: $.R,
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
                                    children: (0, o.jsx)(V.Ch, { className: to.Qo, children: (0, o.jsx)(e6, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, o.jsx)(L.R9, {
                              newValue: { pageIndex: x },
                              children: (0, o.jsx)(eL, {
                                  categories: a,
                                  setCategoryRef: r,
                                  currentPage: x,
                                  handlePageChange: f,
                                  initialCategoryId: d,
                              }),
                          })
                        : (0, o.jsx)(tr, { scrollerRef: i, tab: l }, l),
                ],
            }),
        })
    );
}
var tu = n(599062),
    tg = n(651162),
    tm = n(554146),
    th = n(367727);
let tE = c.createContext(null);
function tx(e) {
    let { blockType: t, children: n } = e,
        s = c.useMemo(() => ({ blockType: t }), [t]);
    return (0, o.jsx)(tE.Provider, { value: s, children: n });
}
var tf = n(755172),
    tp = n(325595),
    tC = n(893998),
    t_ = n(110629),
    tb = n(617498),
    tS = n(607399),
    tj = n(946015),
    tv = n(717421),
    tL = n(140735),
    tA = n(496431),
    tI = n(324145);
function tN(e) {
    let { endDate: t, size: n = "md", className: s, showSeconds: l = !1 } = e,
        { days: i, hours: a, minutes: r, seconds: c } = (0, tA.A)(t),
        d = (function (e, t, n, s, l) {
            function i(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let a = [i(e), i(t), i(n)];
            return l && a.push(i(s)), a.join(":");
        })(i, a, r, c, l);
    return (0, o.jsxs)("div", {
        className: u()(tI.kL, s),
        role: "timer",
        children: [
            d
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, o.jsx)(
                              W.E,
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
                              W.E,
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
            (0, o.jsx)(tL.A, { children: ei.intl.format(ei.t.j6IyVe, { days: i, hours: a, minutes: r }) }),
        ],
    });
}
var tO = n(63776);
let tT = c.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        s = (0, tv.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, o.jsxs)(tb.animated.div, {
        className: u()([tO.lP, tS.Fr && tO.yJ]),
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
                    (0, o.jsx)(W.E, {
                        variant: "text-md/medium",
                        className: tO.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, o.jsx)(W.E, {
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
var tk = n(424918),
    tR = n(793574),
    ty = n(993408),
    tM = n(196231),
    tP = n(459550);
function tB(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, o.jsx)("div", {
        className: u()(tP.n9, tP.YB),
        children: n?.subblocks.map((e, n) =>
            e.type === tk.u.CATEGORY
                ? (0, o.jsx)(
                      L.R9,
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
                                  badgeText: (0, ty.HF)(e.unpublishedAt) ? ei.intl.string(ei.t["h/uBCR"]) : void 0,
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
        children: (0, o.jsxs)(L.R9, {
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
                        badgeText: (0, ty.HF)(s.unpublishedAt) ? ei.intl.string(ei.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != l &&
                    (0, o.jsx)(tM.S, {
                        category: l,
                        badgeText: (0, ty.HF)(l.unpublishedAt) ? ei.intl.string(ei.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let tH = function (e) {
    let { isLoading: t, handleTransition: n, categories: s, featuredBlockRecord: l } = e,
        { analyticsLocations: i } = (0, p.Ay)(tR.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
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
          ? (0, o.jsx)(p.f5, {
                value: i,
                children: (0, o.jsx)(tB, { featuredBlockRecord: l, handleTransition: n, isLoading: !1 }),
            })
          : (0, o.jsx)(p.f5, {
                value: i,
                children: (0, o.jsx)(tD, { categories: s, handleTransition: n, isLoading: !1 }),
            });
};
var tF = n(531685),
    tw = n(428262),
    tG = n(621466),
    tU =
        (((a = {}).MOUNTED = "mounted"),
        (a.SORT_OUT = "sort-out"),
        (a.SORT_IN = "sort-in"),
        (a.SHUFFLE_OUT = "shuffle-out"),
        (a.SHUFFLE_IN = "shuffle-in"),
        (a.FINISHED = "finished"),
        a);
n(667532);
var tz = n(435558),
    tV = n.n(tz),
    tY =
        (((r = {}).RECOMMENDED = "recommended"),
        (r.POPULAR = "popular"),
        (r.RECENT = "recent"),
        (r.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (r.RANDOM = "random"),
        r),
    tW = n(153488),
    tK = n(313276),
    t$ = n(623373),
    tq = n(885574),
    tZ = n(975807),
    tX = n(975571),
    tJ = n(938682);
let tQ = function (e) {
        let { personalizedResults: t, label: n } = e,
            s = n ?? ei.intl.string(ei.t.NSv5KV);
        return (0, o.jsxs)("div", {
            className: tJ.L,
            children: [
                (0, o.jsx)(el.D, { variant: "heading-lg/semibold", children: s }),
                t &&
                    (0, o.jsx)(ew.m, {
                        text: ei.intl.string(ei.t["3taPdj"]),
                        position: "top",
                        "aria-label": ei.intl.string(ei.t["3taPdj"]),
                        children: (0, o.jsx)(eG.D, {
                            onClick: () => (0, tZ.A)(tX.A.getArticleURL(X.MVz.DATA_USED_FOR_RECOMMENDED)),
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
                tab: i,
                buttonContainerClassName: a,
                orbsSupportedOnly: r,
            } = e,
            d = (0, B.bG)([v.default], () => v.default.getCurrentUser()),
            g = tw.Ay.canUseShopDiscounts(d),
            m = (0, tn.Mk)(i),
            h = (0, eT.yB)("FeedBlock"),
            {
                sortType: E,
                setSortType: x,
                sortedItems: f,
                sortOptions: C,
                shuffleProducts: _,
                showRecommendationOption: b,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: n, orbsSupportedOnly: s } = e,
                    l = (0, B.bG)([tW.A], () => tW.A.hasConsented(X.YAq.PERSONALIZATION)),
                    i = c.useMemo(() => t?.[tY.RECOMMENDED] ?? [], [t]),
                    a = c.useMemo(() => t?.[tY.POPULAR] ?? [], [t]),
                    r = i.length > 0 && l,
                    [o, d] = c.useState(r ? tY.RECOMMENDED : tY.POPULAR),
                    u = (0, B.bG)([A.A], () => A.A.productsWithVariantsAsGroup),
                    g = c.useMemo(() => (0, ty.CE)(u), [u]),
                    m = (0, tK.A)(),
                    h = (0, ec.p)(),
                    [E, x] = c.useState([]),
                    f = c.useCallback(() => {
                        d(tY.RANDOM), x(tV().shuffle(g));
                    }, [g]);
                c.useEffect(() => {
                    x(tV().shuffle(g));
                }, [g]);
                let p = c.useMemo(() => {
                    let e = [];
                    switch (o) {
                        case tY.RECENT:
                            e = g;
                            break;
                        case tY.PRICE_LOW_TO_HIGH:
                            e = (0, ty.bf)([...g], n, s);
                            break;
                        case tY.RECOMMENDED:
                            e = m(i);
                            break;
                        case tY.POPULAR:
                            e = m(a);
                            break;
                        case tY.RANDOM:
                            e = E;
                    }
                    return s ? (0, t$.ex)(h(e)) : h(e);
                }, [o, s, h, n, g, m, i, a, E]);
                return {
                    sortType: o,
                    setSortType: d,
                    sortedItems: (0, ed.X)(p),
                    sortOptions: c.useMemo(() => {
                        let e = [
                            { value: tY.POPULAR, label: ei.intl.string(ei.t.Y68e5p) },
                            { value: tY.RECENT, label: ei.intl.string(ei.t["51Bhiz"]) },
                            { value: tY.PRICE_LOW_TO_HIGH, label: ei.intl.string(ei.t.m8RVU2) },
                        ];
                        return r && e.unshift({ value: tY.RECOMMENDED, label: ei.intl.string(ei.t.zPWgFG) }), e;
                    }, [r]),
                    showRecommendationOption: r,
                    shuffleProducts: f,
                };
            })({ sortedSkuIds: s, hasShopDiscount: g, orbsSupportedOnly: r }),
            S = (0, B.bG)([D.Ay], () => D.Ay.useReducedMotion),
            j = (0, B.bG)([tF.A], () => tF.A.isFocused()),
            I = !S && j,
            { animationPhase: N, startAnimation: O } = (() => {
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
                                    (0, tG.vq)(e, HTMLButtonElement) ||
                                    (0, tG.vq)(e, HTMLAnchorElement) ||
                                    (0, tG.vq)(e, HTMLInputElement) ||
                                    (0, tG.vq)(e, HTMLSelectElement) ||
                                    (0, tG.vq)(e, HTMLTextAreaElement)
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
                            let { isShuffling: n, onOutroComplete: i, returnRef: a } = e;
                            a?.current != null && ((l.current = a.current), s(!0)),
                                t(n ? "shuffle-out" : "sort-out"),
                                setTimeout(
                                    () => {
                                        i(),
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
            T = (0, L.uM)(),
            k = T?.sessionId ?? "",
            { analyticsLocations: R } = (0, p.Ay)(tR.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            y = c.useRef(null),
            M = c.useRef(null),
            [P, H] = c.useState(!1),
            F = c.useCallback(
                (e) => {
                    H(!1),
                        O({ isShuffling: !1, onOutroComplete: () => x(e), returnRef: M }),
                        Z.default.track(X.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: k,
                            sort_type: e,
                        });
                },
                [O, x, k],
            );
        return null == d
            ? null
            : (0, o.jsx)(p.f5, {
                  value: R,
                  children: (0, o.jsxs)("div", {
                      className: u()(tP.lD, tP.YB),
                      children: [
                          (0, o.jsxs)("div", {
                              className: tP.$6,
                              children: [
                                  (0, o.jsx)(tQ, { label: n, personalizedResults: b }),
                                  (0, o.jsxs)("div", {
                                      className: u()(tP.IE, { [eT.jP]: h }),
                                      children: [
                                          (0, o.jsxs)("div", {
                                              className: tP.gd,
                                              children: [
                                                  (0, o.jsx)(W.E, {
                                                      variant: "text-md/medium",
                                                      children: ei.intl.string(ei.t.uaX705),
                                                  }),
                                                  (0, o.jsx)("div", {
                                                      className: u()(a, tP.pI),
                                                      ref: M,
                                                      children: (0, o.jsx)(eO.l, {
                                                          label: ei.intl.string(ei.t.uaX705),
                                                          hideLabel: !0,
                                                          options: C,
                                                          onSelectionChange: F,
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
                                              className: a,
                                              children: (0, o.jsx)(K.$, {
                                                  variant: "secondary",
                                                  text: ei.intl.string(ei.t.X3tnc4),
                                                  buttonRef: y,
                                                  onClick: function () {
                                                      H(!0),
                                                          O({ isShuffling: !0, onOutroComplete: _, returnRef: y }),
                                                          Z.default.track(
                                                              X.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: k },
                                                          );
                                                  },
                                                  disabled: N !== tU.MOUNTED && N !== tU.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, o.jsx)(tL.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: P && N === tU.FINISHED ? ei.intl.string(ei.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, o.jsx)("div", {
                              className: tP.hm,
                              children: t
                                  ? (0, o.jsx)(o.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, o.jsx)(em.A, {}, t + 1)),
                                    })
                                  : f.slice(0, l).map((e, t) => {
                                        let n,
                                            s = A.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == s) return null;
                                        if (I)
                                            if (N === tU.SHUFFLE_OUT)
                                                return (0, o.jsx)(
                                                    "div",
                                                    {
                                                        className: tP.Z2,
                                                        children: (0, o.jsx)(em.A, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                N === tU.SORT_OUT
                                                    ? (n = tP.MW)
                                                    : N === tU.SHUFFLE_IN
                                                      ? (n = tP.aS)
                                                      : N === tU.SORT_IN && (n = tP.F7);
                                        return (0, o.jsx)(
                                            L.R9,
                                            {
                                                newValue: {
                                                    tilePosition: t,
                                                    pageSection: "popular picks",
                                                    categoryPosition: 2,
                                                },
                                                children: (0, o.jsx)("div", {
                                                    className: n,
                                                    children: (0, o.jsx)(ep.A, {
                                                        skuId: e.skuId,
                                                        hideStaticBundleBackgroundAsset: !0,
                                                        prioritizedCurrency: m,
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
    t2 = n(843793);
let t5 = function (e) {
    let { block: t, handleTransition: n, tab: s } = e,
        l = (0, B.bG)([v.default], () => v.default.getCurrentUser()),
        i = (0, tn.Mk)(s),
        a = (0, tK.A)(),
        r = c.useMemo(() => a(t.rankedSkuIds), [t.rankedSkuIds, a]),
        d = (0, ed.X)(r),
        { analyticsLocations: g } = (0, p.Ay)(tR.A.COLLECTIBLES_SHOP_SHELF),
        m = c.useCallback(() => {
            n({
                sourceButton: "frames product shelf see all",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            });
        }, [n, t.categorySkuId]);
    return null == l || 0 === d.length
        ? null
        : (0, o.jsx)(p.f5, {
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
                                              (0, o.jsx)(t_.A, {
                                                  location: "FramesProductShelfBlock",
                                                  showTooltip: !0,
                                              }),
                                              (0, o.jsx)(el.D, {
                                                  variant: "heading-lg/semibold",
                                                  color: "text-overlay-light",
                                                  children: t.title,
                                              }),
                                          ],
                                      }),
                                      null != t.buttonText &&
                                          "" !== t.buttonText &&
                                          (0, o.jsx)(K.$, {
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
                                                L.R9,
                                                {
                                                    newValue: {
                                                        tilePosition: n,
                                                        pageSection: t.title,
                                                        categoryPosition: 1,
                                                    },
                                                    children: (0, o.jsx)(ep.A, {
                                                        skuId: e.skuId,
                                                        prioritizedCurrency: i,
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
var t4 = n(269115),
    t3 = n(43990),
    t6 = n(408278),
    t7 = n(789645),
    t9 = n(976860),
    t8 = n(49999),
    ne = n(576709),
    nt = n(48093);
let nn = "GAME_SERVER_HOSTING_BANNER";
function ns(e) {
    let { gameServerHostingBannerBlock: t, tab: n } = e,
        s = (0, L.uM)(),
        l = c.useRef(null),
        i = c.useRef(!1),
        a = c.useRef(null),
        [r, d] = c.useState(!1),
        g = c.useCallback(
            (e) => {
                Z.default.track(X.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: s?.sessionId,
                    page_type: n,
                    page_category: s?.pageCategory,
                    page_section: s?.pageSection,
                    tile_type: nn,
                    cta_name: e,
                });
            },
            [s?.sessionId, s?.pageCategory, s?.pageSection, n],
        ),
        m = c.useCallback(() => {
            g("go_to_game_server_hosting"), (0, t9.pX)(X.BVt.COLLECTIBLES_SHOP_WITH_TAB(eS.G2.GAME_SERVERS));
        }, [g]),
        h = c.useCallback(() => {
            g("dismiss"),
                d(!0),
                !0 === t.isDismissible &&
                    (0, th.d6)(tm.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, { dismissAction: t8.i.USER_DISMISS });
        }, [g, t.isDismissible]),
        E = c.useCallback(
            (e) => {
                !i.current &&
                    (e && null === a.current
                        ? (a.current = setTimeout(() => {
                              (i.current = !0),
                                  (a.current = null),
                                  Z.default.track(X.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: s?.sessionId,
                                      page_type: n,
                                      page_category: s?.pageCategory,
                                      page_section: s?.pageSection,
                                      type: nn,
                                  });
                          }, 1e3))
                        : e || null === a.current || (clearTimeout(a.current), (a.current = null)));
            },
            [s?.sessionId, s?.pageCategory, s?.pageSection, n],
        );
    return (c.useEffect(
        () => () => {
            null !== a.current && (clearTimeout(a.current), (a.current = null));
        },
        [],
    ),
    r)
        ? null
        : (0, o.jsx)(t3.N, {
              theme: e4.NJ.DARKER,
              children: (e) =>
                  (0, o.jsx)(t4.L, {
                      innerRef: l,
                      onChange: E,
                      threshold: 0,
                      children: (0, o.jsx)("div", {
                          ref: l,
                          className: u()(nt.YB, e),
                          children: (0, o.jsxs)("div", {
                              className: nt.kL,
                              children: [
                                  (0, o.jsx)("img", {
                                      className: nt.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, o.jsx)("div", { className: nt.uX }),
                                  !0 === t.isDismissible &&
                                      (0, o.jsx)("div", {
                                          className: nt.b,
                                          children: (0, o.jsx)(t6.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: t7.P,
                                              onClick: h,
                                              "aria-label": ei.intl.string(ei.t.WAI6xu),
                                          }),
                                      }),
                                  (0, o.jsx)("div", {
                                      className: nt.jE,
                                      children: (0, o.jsxs)("div", {
                                          className: nt.rF,
                                          children: [
                                              (0, o.jsxs)("div", {
                                                  className: nt.Z,
                                                  children: [
                                                      (0, o.jsx)(el.D, {
                                                          className: nt.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: ei.intl.string(ne.default["34GMP9"]),
                                                      }),
                                                      (0, o.jsx)(W.E, {
                                                          className: nt.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: ei.intl.string(ne.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, o.jsx)(K.$, {
                                                  variant: "overlay-primary",
                                                  size: "sm",
                                                  text: ei.intl.string(ei.t.jVcuVY),
                                                  onClick: m,
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
var nl = n(337183),
    ni = n(349288),
    na = n(212407),
    nr = n(815280),
    no = n(10675);
let nc = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        s = (0, er.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: l, bannerAnimatedUrl: i } = (0, na.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        r = null != t.body && "" !== t.body,
        c = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, o.jsxs)("div", {
        ref: s,
        className: no.BX,
        children: [
            (0, o.jsx)("div", {
                className: no.vK,
                children: null != l && (0, o.jsx)(nr.A, { bannerStatic: l, bannerAnimated: i }),
            }),
            (0, o.jsx)("div", {
                className: no.HQ,
                children: (0, o.jsxs)("div", {
                    className: no.Yn,
                    children: [
                        null != t.endTime ? (0, o.jsx)(tN, { endDate: t.endTime, size: "lg" }) : null,
                        (0, o.jsx)(el.D, {
                            variant: "heading-xxl/bold",
                            className: no.DD,
                            color: "text-strong",
                            style: { ...a },
                            children: t.title,
                        }),
                        r || c
                            ? (0, o.jsxs)(W.E, {
                                  variant: "text-md/medium",
                                  style: { ...a },
                                  children: [
                                      r && t.body,
                                      r && c && " ",
                                      c &&
                                          (0, o.jsx)(ni.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: no.CU,
                                              style: { ...a },
                                              children: ei.intl.string(ei.t.O7ADgv),
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
    nm = n(825484),
    nh = n(812993),
    nE = n(713517),
    nx = n(914410),
    nf = n(34332),
    np = n(597783),
    nC = n(61750);
function n_(e, t) {
    let n = c.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        s = (0, B.bG)([G.A], () => G.A.getPurchases(n));
    return {
        readyToClaim: c.useMemo(() => s.length === n.length, [s, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: s,
    };
}
var nb = n(162945),
    nS = n(858708);
let nj = c.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: s } = (0, np.Z)(n),
            l = c.useRef(null),
            { isHoveringOrFocusing: i } = (0, nE.A)(l),
            { readyToClaim: a, collectibleProductSkuIds: r, collectedSkuIds: d } = n_(t, n),
            g = (0, B.bG)([G.A], () => G.A.isClaiming === n);
        return (0, o.jsx)(t4.L, {
            onChange: s,
            threshold: 0,
            innerRef: l,
            children: (0, o.jsx)("div", {
                ref: l,
                className: u()(nb.ty, nS.Q3, { [nb.yo]: i }),
                "aria-label": ei.intl.formatToPlainString(ei.t.Ez6aHE, { category: t.name }),
                children: (0, o.jsxs)("div", {
                    className: nb.qt,
                    children: [
                        (0, o.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: nS.L8,
                        }),
                        (0, o.jsx)("div", {
                            className: nb.N1,
                            children: (0, o.jsx)(nh.Lp, {
                                text: ei.intl.string(ei.t.rykAJ9),
                                disableColor: !0,
                                className: nS.HZ,
                            }),
                        }),
                        (0, o.jsxs)("div", {
                            className: nb.xQ,
                            children: [
                                (0, o.jsxs)("div", {
                                    className: nS.xE,
                                    children: [
                                        (0, o.jsxs)("div", {
                                            className: nS.cs,
                                            children: [
                                                (0, o.jsx)(el.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: nb.tZ,
                                                    children: ei.intl.string(ei.t["0mDmg/"]),
                                                }),
                                                (0, o.jsx)(ew.m, {
                                                    text: a
                                                        ? ei.intl.string(ei.t.cKH3tk)
                                                        : ei.intl.formatToPlainString(ei.t["8aMDPc"], {
                                                              totalCount: r.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, o.jsx)("span", {
                                                        className: nS.ZB,
                                                        children: (0, o.jsx)(nu.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, o.jsx)("div", {
                                            className: nb.oh,
                                            "aria-hidden": !0,
                                            children: (0, o.jsxs)("div", {
                                                className: nS.L$,
                                                children: [
                                                    (0, o.jsx)(nx.Ay, {
                                                        variant: nx.qP.BLUE,
                                                        progress: d.length,
                                                        maximum: r.length,
                                                    }),
                                                    (0, o.jsxs)("div", {
                                                        className: u()(nS.__, { [nS.gF]: a }),
                                                        children: [
                                                            a
                                                                ? (0, o.jsx)(ng.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, o.jsx)(W.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: ei.intl.formatToPlainString(ei.t["5TwASM"], {
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
                                    className: nb.Vs,
                                    children: (0, o.jsx)(nm.e, {
                                        wrap: !1,
                                        className: nb.Ld,
                                        fullWidth: !0,
                                        children: (0, o.jsx)(K.$, {
                                            variant: "primary",
                                            onClick: function (e) {
                                                e.stopPropagation(),
                                                    a &&
                                                        (0, nf.BX)(t.skuId, n)
                                                            .then(() => {
                                                                let e = A.A.getProduct(n);
                                                                null != e &&
                                                                    (0, nC.A)({
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
                                                                        (0, o.jsx)(nd.Modal, {
                                                                            transitionState: e.transitionState,
                                                                            onClose: e.onClose,
                                                                            size: "sm",
                                                                            title: ei.intl.string(ei.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: ei.intl.string(ei.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, o.jsx)("div", {
                                                                                children: ei.intl.string(
                                                                                    ei.t["0YpIF/"],
                                                                                ),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            });
                                            },
                                            text: ei.intl.string(ei.t.VnVTNc),
                                            fullWidth: !0,
                                            disabled: !a,
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
    nv = function (e) {
        let t,
            n,
            s,
            { isBlockLoading: l = !1, heroBlock: i, tab: a } = e,
            r = (0, tn.Mk)(a),
            d = c.useMemo(() => A.A.getCategoryForProduct(i.rewardSkuId), [i.rewardSkuId]),
            u = (0, B.bG)([G.A], () => G.A.getPurchase(i.rewardSkuId)),
            { products: g } =
                ((t = (0, tK.A)()),
                (n = c.useMemo(
                    () => (l ? [] : t(i.rankedSkuIds).filter((e) => e.skuId !== i.rewardSkuId || null != u)),
                    [l, t, i.rankedSkuIds, u, i.rewardSkuId],
                )),
                (s = (0, ec.p)()(n)),
                { products: (0, ed.X)(s) }),
            m = c.useMemo(
                () =>
                    !l &&
                    0 !== i.rankedSkuIds.length &&
                    !(g.length > 0) &&
                    i.rankedSkuIds.every((e) => A.A.getProduct(e)?.variantGroupStoreListingId != null),
                [l, i.rankedSkuIds, g.length],
            ),
            h = l || m,
            { readyToClaim: E } = n_(d, i.rewardSkuId),
            x = null == u && null != i.rewardSkuId && null != d;
        return (0, o.jsx)(t1.A, {
            gap: "xl",
            children: h
                ? (0, o.jsx)(o.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, o.jsx)(em.A, {}, t)),
                  })
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          x &&
                              E &&
                              (0, o.jsx)(
                                  L.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, o.jsx)(nj, { category: d, rewardSkuId: i.rewardSkuId }),
                                  },
                                  i.rewardSkuId,
                              ),
                          g.map((e, t) => {
                              let n = A.A.getCategoryForProduct(e.skuId);
                              return null == e || null == n
                                  ? null
                                  : (0, o.jsx)(
                                        L.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, o.jsx)(ep.A, { skuId: e.skuId, prioritizedCurrency: r }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, ty.$b)(90);
let nL = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: tg.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    nA = function (e) {
        let { isLoading: t = !1, heroBlock: n, tab: s, onVisibilityChange: l } = e,
            i = (0, er.K)(
                (e) => {
                    l?.(e);
                },
                0.1,
                null != l,
            ),
            a = (0, B.bG)([v.default], () => v.default.getCurrentUser()),
            { analyticsLocations: r } = (0, p.Ay)(tR.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: c,
                logoDisplayConfig: d,
                heroLogo: g,
                heroBannerStatic: m,
                heroBannerAnimated: h,
            } = (0, na.Kk)(n),
            E = c?.responsive ?? !1,
            x = c?.backgroundStyle;
        return null != a && (t || n !== nL)
            ? (0, o.jsx)(p.f5, {
                  value: r,
                  children: (0, o.jsxs)("div", {
                      ref: i,
                      className: tP.os,
                      children: [
                          (0, o.jsx)("div", {
                              className: u()(tP.vK, { [tP.no]: E }),
                              style: null != x ? { background: x } : void 0,
                              children:
                                  null != m &&
                                  (0, o.jsx)(nr.A, { bannerStatic: m, bannerAnimated: h, isResponsive: E }),
                          }),
                          (0, o.jsxs)("div", {
                              className: tP.xX,
                              children: [
                                  (0, o.jsx)("div", {
                                      className: u()(tP.bC, { [tP.no]: E }),
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
                                                            (0, o.jsx)(el.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: tP.DD,
                                                                color: "text-strong",
                                                                children: n.title,
                                                            }),
                                                        "" !== n.summary &&
                                                            (0, o.jsx)(W.E, {
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
                                  (0, o.jsx)(nv, { isBlockLoading: t, heroBlock: n, tab: s }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var nI = n(222884);
let nN = function (e) {
    let { shelf: t, handleTransition: n, tab: s } = e,
        l = (0, B.bG)([v.default], () => v.default.getCurrentUser()),
        i = (0, tn.Mk)(s),
        a = (0, B.bG)([A.A], () => (null != t.categorySkuId ? A.A.getCategory(t.categorySkuId) : void 0)),
        r = (0, tK.A)(),
        d = c.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r]),
        g = (0, ed.X)(d),
        { analyticsLocations: m } = (0, p.Ay)(tR.A.COLLECTIBLES_SHOP_SHELF),
        h = c.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: a?.isOrbsExclusive === !0 && s !== eS.G2.ORBS,
            });
        }, [t.categorySkuId, a, n, s]);
    if (null == l || 0 === g.length) return null;
    let E = t.buttonText ?? ei.intl.formatToPlainString(ei.t.bc9RBE, { category_name: t.name }),
        x = t.showButton,
        f = t.desktopBackgroundImage,
        C = null != f;
    return (0, o.jsx)(p.f5, {
        value: m,
        children: (0, o.jsxs)("div", {
            className: u()(nI.mu, tP.YB, C ? nI.VA : nI.Ti),
            children: [
                C && (0, o.jsx)("img", { className: nI.iL, src: f, alt: "", "aria-hidden": !0 }),
                (0, o.jsxs)("div", {
                    className: nI.Qs,
                    children: [
                        (0, o.jsxs)("div", {
                            className: nI.wx,
                            children: [
                                (0, o.jsx)(el.D, {
                                    variant: "heading-lg/semibold",
                                    style: C ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                x &&
                                    (0, o.jsx)(K.$, {
                                        variant: C ? "overlay-primary" : "secondary",
                                        text: E,
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
                                          L.R9,
                                          {
                                              newValue: { tilePosition: n, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, o.jsx)(ep.A, { skuId: e.skuId, prioritizedCurrency: i }),
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
var nO = n(465794),
    nT = n(69236),
    nk = n(44724),
    nR = n(421108),
    ny = n(873297),
    nM = n(202541);
let nP = function (e) {
    let {
            applicationId: t,
            headerText: n,
            gradientColors: s,
            gradientAngle: l,
            skuIds: i,
            tab: a,
            endTime: r,
            ctaType: d = "storefront",
            logoUrl: u,
        } = e,
        g = (0, nR.u)(r) ?? void 0,
        m = (0, nT.W8)(),
        h = c.useMemo(
            () =>
                "nitro" !== d || m
                    ? {
                          kind: "button",
                          text: ei.intl.string(ei.t.apFNLU),
                          onClick: () => (0, nk.default)({ applicationId: t }),
                          onMouseDown: () => (0, nk.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, o.jsx)(nO.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: nM.pe.TIER_2,
                              buttonTextOverride: ei.intl.string(ei.t.pj0XBN),
                          }),
                      },
            [d, t, m],
        );
    return (0, o.jsx)(ny.A, {
        skuIds: i,
        tab: a,
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
var nB = n(575593),
    nD = n(770178),
    nH = n(929283),
    nF = n(273411);
let nw = [
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
function nG(e) {
    let { config: t, baseLeft: n, transitioning: s } = e,
        l = window.innerHeight,
        i = A.A.getProduct(t.skuId),
        a = i?.items[0],
        r = i?.type,
        c = n + t.horizontalJitter;
    return (0, o.jsx)("div", {
        className: nF.LY,
        style: {
            top: s ? -l - 384 : t.top,
            left: s ? c + t.transitionOffsetLeft : c,
            transform: `rotate(${t.rotation}deg)`,
            height: 160,
            width: 160,
            transitionDelay: t.transitionDelay,
            transitionDuration: t.transitionDuration,
        },
        children: null != a && r === nB.R.AVATAR_DECORATION && (0, o.jsx)(nH.i, { item: a }),
    });
}
let nU = (e) => {
        let { peaking: t, transitioning: n, parentWidth: s } = e,
            [l, i] = c.useState(!1),
            [a, r] = c.useState([]),
            [d] = c.useState(() =>
                [...nw]
                    .sort(() => Math.random() - 0.5)
                    .map((e) => ({
                        skuId: e,
                        top: 0 + 48 * Math.random(),
                        rotation: -32 + 64 * Math.random(),
                        horizontalJitter: -(20 * Math.random()),
                        transitionOffsetLeft: -20 - 35 * Math.random(),
                        transitionDelay: `${Math.random() / 3}s`,
                        transitionDuration: `${eS.H1 - 200 * Math.random()}ms`,
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
                n && setTimeout(() => i(!0), eS.H1);
            }, [n]),
            (0, o.jsx)("div", {
                className: u()(nF.rA, { [nF.Kb]: t, [nF.pp]: l }),
                children: a.map((e, t) => {
                    let { config: s, baseLeft: l } = e;
                    return (0, o.jsx)(nG, { config: s, baseLeft: l, transitioning: n }, s.skuId + t);
                }),
            })
        );
    },
    nz = function (e) {
        let { peaking: t, transitioning: n } = e,
            s = c.useRef(null),
            [l, i] = c.useState(0),
            a = c.useCallback(() => {
                null != s.current && i(s.current.offsetWidth);
            }, []);
        return (
            (0, nD.g)(s, a),
            (0, o.jsx)("div", {
                ref: s,
                className: nF.eL,
                children: (0, o.jsx)(nU, { peaking: t, transitioning: n, parentWidth: l }),
            })
        );
    };
var nV = n(815021);
let nY = function (e) {
    let { wideBannerBlock: t, tab: n } = e,
        s = A.A.getCategoryByStoreListingId(t.categoryStoreListingId),
        l = c.useRef(null),
        i = c.useRef(null),
        [a, r] = c.useState(),
        [d, g] = c.useState(!1);
    c.useEffect(() => {
        let e = i.current;
        if (null != e)
            return (
                e.complete ? t() : (e.onload = t),
                () => {
                    e.onload = null;
                }
            );
        function t() {
            null != e && e.naturalWidth > 0 && e.naturalHeight > 0 && r(1080 * (e.naturalHeight / e.naturalWidth));
        }
    }, []);
    let m = s?.skuId ?? "",
        { handleCardVisibilityChange: h } = (0, np.Z)(m, "home", "marketing wide banner"),
        E = (0, L.uM)(),
        { bannerURL: x } = (0, na.w$)(t),
        f = n === eS.G2.ORBS,
        p = null != t.ctaRoute && "" !== t.ctaRoute,
        C = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || p),
        _ = null != t.logoURL && "" !== t.logoURL,
        b = c.useCallback(() => {
            if ((g(!0), t.isDismissible)) {
                let e = t.dismissibleContentVersion ?? 0;
                (0, th.$l)(tm.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: t8.i.USER_DISMISS });
            }
        }, [t.isDismissible, t.dismissibleContentVersion]),
        S = c.useCallback(
            (e) => {
                Z.default.track(X.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: E?.sessionId,
                    sku_id: m,
                    page_type: n,
                    page_section: E?.pageSection,
                    page_category: E?.pageCategory,
                    tile_type: "WIDE_BANNER",
                    tile_position: String(E?.tilePosition),
                    cta_name: e,
                });
            },
            [E, m, n],
        ),
        j = c.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if ((S(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                    let e = t.ctaRoute;
                    if (e.includes("game-shop")) {
                        let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                        if (null != t) {
                            let e = t[1],
                                n = parseInt(t[2], 10);
                            (0, nk.default)({ guildId: e, pageIndex: n });
                        }
                    } else (0, t9.pX)(e);
                }
            },
            [t.ctaRoute, S],
        );
    if (null == x || d) return null;
    let v = u()(tP.nM, tP.Tq, tP.TS, tP.YB, { [tP._1]: f, [tP.vb]: p }),
        I = (0, o.jsxs)(o.Fragment, {
            children: [
                t.isDismissible &&
                    (0, o.jsx)("div", {
                        className: tP.Mh,
                        children: (0, o.jsx)(nV.J, {
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(), b();
                            },
                            "aria-label": ei.intl.string(ei.t.WAI6xu),
                        }),
                    }),
                (0, o.jsx)("div", {
                    className: u()(tP.zK, { [tP._1]: f }),
                    style: null != a ? { height: `${a}px` } : void 0,
                    children: (0, o.jsx)("img", {
                        ref: i,
                        src: x,
                        alt: t.title,
                        className: u()(tP.LN, { [tP.d5]: f }),
                    }),
                }),
                (0, o.jsx)("div", {
                    className: u()(tP.Ep, { [tP.Qq]: C }),
                    style: { maxHeight: null != a ? `${a}px` : "auto" },
                    children: (0, o.jsxs)("div", {
                        className: tP.E8,
                        children: [
                            (0, o.jsx)(el.D, {
                                style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                className: f ? tP.O2 : void 0,
                                variant: "heading-xl/bold",
                                children: t.title,
                            }),
                            (0, o.jsx)(W.E, {
                                style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                lineClamp: 2,
                                variant: f ? "text-md/medium" : "text-sm/medium",
                                children: f
                                    ? ei.intl.format(ei.t.SFFP7K, {
                                          helpdeskArticle: tX.A.getArticleURL(X.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : t.body,
                            }),
                            C &&
                                (0, o.jsxs)("div", {
                                    className: tP.nP,
                                    children: [
                                        (0, o.jsx)(K.$, {
                                            variant: "overlay-primary",
                                            onClick: (e) => {
                                                e.stopPropagation(), j(t.ctaText ?? ei.intl.string(ei.t.jVcuVY));
                                            },
                                            text: t.ctaText ?? ei.intl.string(ei.t.jVcuVY),
                                            "aria-label":
                                                null == t.ctaText && null != t.title
                                                    ? ei.intl.formatToPlainString(ei.t.frSHlf, { destination: t.title })
                                                    : void 0,
                                        }),
                                        _ && (0, o.jsx)("img", { src: t.logoURL, alt: "", className: tP.bU }),
                                    ],
                                }),
                        ],
                    }),
                }),
            ],
        });
    return (0, o.jsx)(t3.N, {
        theme: f ? void 0 : e4.NJ.DARK,
        children: (e) =>
            (0, o.jsx)(t4.L, {
                innerRef: l,
                onChange: h,
                threshold: 0,
                children: p
                    ? (0, o.jsx)(eG.D, { innerRef: l, onClick: () => j(null), className: u()(e, v), children: I })
                    : (0, o.jsx)("div", { ref: l, className: u()(e, v), children: I }),
            }),
    });
};
var nW = n(757036),
    nK = n(212739);
let n$ = (0, N.mj)({ name: "2026-05-orbs-shop-upsell-banner", kind: "user", defaultConfig: !1, variations: { 1: !0 } });
var nq = n(462887),
    nZ = n(765671),
    nX = n(303136),
    nJ = n(792656),
    nQ = n(363195),
    n0 = n(901123),
    n1 = n(894865),
    n2 = n(909340);
let n5 = function (e) {
        let { category: t, tab: n } = e,
            { ref: s, width: l } = (0, nZ.Ay)(),
            i = null != l && l <= 560,
            a = (0, m.bG)([nQ.A], () => (0, nq.q)(nQ.A.theme)),
            r = t?.skuId ?? "",
            { handleCardVisibilityChange: d } = (0, np.Z)(r, "home", "marketing orbs upsell banner"),
            g = (0, L.uM)(),
            { analyticsLocations: h } = (0, p.Ay)(tR.A.COLLECTIBLES_SHOP_ORBS_UPSELL_BANNER),
            E = c.useCallback(() => {
                Z.default.track(X.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        return (0, o.jsx)(p.f5, {
            value: h,
            children: (0, o.jsx)(t3.N, {
                theme: X.NJ8.DARKER,
                children: (e) =>
                    (0, o.jsx)(t4.L, {
                        innerRef: s,
                        onChange: d,
                        threshold: 0,
                        children: (0, o.jsxs)("div", {
                            ref: s,
                            className: u()(e, n1.kL),
                            children: [
                                (0, o.jsx)(nX.A, { className: n1.Ki, src: n2.A }),
                                (0, o.jsxs)("div", {
                                    className: n1.Qs,
                                    children: [
                                        (0, o.jsx)(el.D, {
                                            variant: "heading-xl/normal",
                                            color: "text-strong",
                                            className: n1.R_,
                                            children: ei.intl.string(ei.t["50J7mj"]),
                                        }),
                                        (0, o.jsx)(W.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: n1.rf,
                                            children: ei.intl.format(ei.t.NU5ZId, { monthlyOrbsAmount: 250 }),
                                        }),
                                        (0, o.jsxs)("div", {
                                            className: n1.R$,
                                            children: [
                                                (0, o.jsx)(nJ.A, {
                                                    subscriptionTier: nM.pe.TIER_2,
                                                    variantOverride: "expressive",
                                                    size: "md",
                                                    fullWidth: i,
                                                }),
                                                (0, o.jsx)(K.$, {
                                                    variant: "secondary",
                                                    size: "md",
                                                    fullWidth: i,
                                                    text: ei.intl.string(ei.t.PcTCB7),
                                                    onClick: () => {
                                                        E(), (0, t9.pX)(n0.BV.NITRO_HOME);
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, o.jsx)("img", {
                                    className: n1.Qw,
                                    src: a
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
    n4 = function (e) {
        let { index: t, wideBannerBlock: n, tab: s } = e,
            l = n$.useConfig({ location: "CollectiblesShopBannerSelector" }),
            i = (0, nW.L)(nM.PremiumTypes.TIER_2),
            a = (0, nK.O)();
        if (l && !i && !a && s === eS.G2.ORBS) {
            let e = A.A.getCategoryByStoreListingId(n.categoryStoreListingId);
            return (0, o.jsx)(n5, { category: e, tab: s }, t);
        }
        return (0, o.jsx)(nY, { wideBannerBlock: n, tab: s }, t);
    },
    n3 = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: s, tab: l } = e,
            { noCache: i, includeUnpublished: a } = (0, e_.A)(),
            [r, d] = c.useState(!1),
            g = (0, L.uM)(),
            m = g?.sessionId ?? "",
            h = (0, F.H)({ location: "collectibles_shop_feed" });
        c.useEffect(() => {
            (0, eu.z)({
                sessionId: m,
                checkpoint: eu.t.SHOP_MOUNTED,
                tab: l,
                unpublishedCategoriesShown: a,
                cacheDisabled: i,
            });
        }, [l]);
        let {
                isFetchingShopHome: E,
                fetchShopHomeError: x,
                shopBlocks: f,
                refreshShopHome: p,
            } = (0, tf.y)(l, { noCache: i, includeUnpublished: a, logPerf: !0 }, { sessionId: m, tab: l }),
            C = c.useCallback(() => {
                p();
            }, [p]),
            _ = c.useMemo(() => f.some((e) => e instanceof tp.p), [f])
                ? (0, o.jsx)(t_.A, { location: "CollectiblesShop" })
                : null;
        return (c.useEffect(() => {
            null != x ||
                E ||
                0 === f.length ||
                (0, eu.z)({
                    sessionId: m,
                    checkpoint: eu.t.SHOP_RENDERED,
                    tab: l,
                    unpublishedCategoriesShown: a,
                    cacheDisabled: i,
                });
        }, [x, E, f.length, a, i, m, l]),
        null != x)
            ? (0, o.jsx)(tu.h, { onRetry: C, errorOrigin: tu.A.SHOP_PAGE, errorMessage: x.message })
            : E || 0 === f.length
              ? (0, o.jsxs)("div", {
                    className: u()(tP.g4, tP.Of),
                    children: [
                        (0, o.jsx)(nl.A, { isLoading: E, handleTransition: t, tab: l }),
                        (0, o.jsx)(tH, { isLoading: E, handleTransition: t, categories: [] }),
                        (0, o.jsx)(t0, {
                            isLoading: E,
                            title: l === eS.G2.ORBS ? ei.intl.string(ei.t.dFgeuZ) : ei.intl.string(ei.t.NSv5KV),
                            numVisibleItems: n,
                            tab: l,
                        }),
                    ],
                })
              : (0, o.jsx)(o.Fragment, {
                    children: f.map((e, i) =>
                        (function (e, i, a) {
                            if (null == e) return null;
                            let c = null,
                                g = !1;
                            switch (e.type) {
                                case tg.g.HERO:
                                    c = (0, o.jsx)(
                                        nl.A,
                                        { isLoading: E, handleTransition: t, heroBlock: e, tab: l, badge: _ },
                                        a,
                                    );
                                    break;
                                case tg.g.FEATURED:
                                    c = (0, o.jsx)(
                                        tH,
                                        { isLoading: E, handleTransition: t, featuredBlockRecord: e },
                                        a,
                                    );
                                    break;
                                case tg.g.FEED:
                                    let m = e.sortedSkuIds;
                                    c = (0, o.jsx)(
                                        t0,
                                        {
                                            title:
                                                l === eS.G2.ORBS
                                                    ? ei.intl.string(ei.t.dFgeuZ)
                                                    : ei.intl.string(ei.t.NSv5KV),
                                            isLoading: s,
                                            numVisibleItems: n,
                                            sortedSkuIds: m,
                                            buttonContainerClassName: i?.type === tg.g.IMMERSIVE_BANNER ? tP.w : void 0,
                                            tab: l,
                                            orbsSupportedOnly: l === eS.G2.ORBS,
                                        },
                                        a,
                                    );
                                    break;
                                case tg.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, th.En)(tm.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    c = (0, o.jsx)(n4, { index: a, wideBannerBlock: e, tab: l }, a);
                                    break;
                                case tg.g.FRAMES_BANNER:
                                    c = (0, o.jsx)(
                                        nY,
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
                                        a,
                                    );
                                    break;
                                case tg.g.FRAMES_PRODUCT_SHELF:
                                    c = (0, o.jsx)(t5, { block: e, handleTransition: t, tab: l }, a);
                                    break;
                                case tg.g.SHELF:
                                    c = (0, o.jsx)(nN, { handleTransition: t, shelf: e, tab: l }, a);
                                    break;
                                case tg.g.COUNTDOWN_TIMER:
                                    (c = (0, o.jsx)(tT, { countdownTimerBlock: e, isVisible: r }, a)), (g = !0);
                                    break;
                                case tg.g.IMMERSIVE_BANNER:
                                    c = (0, o.jsx)(
                                        nc,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => d(!e) },
                                        a,
                                    );
                                    break;
                                case tg.g.REWARD_HERO:
                                    c = (0, o.jsx)(nA, { isLoading: E, handleTransition: t, heroBlock: e, tab: l }, a);
                                    break;
                                case tg.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !h ||
                                        (!0 === e.isDismissible &&
                                            (0, th.En)(tm.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, o.jsx)(
                                        tx,
                                        {
                                            blockType: e.type,
                                            children: (0, o.jsx)(ns, { gameServerHostingBannerBlock: e, tab: l }),
                                        },
                                        a,
                                    );
                                case tg.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, o.jsx)(
                                        tx,
                                        {
                                            blockType: e.type,
                                            children: (0, o.jsx)(nP, {
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
                                        a,
                                    );
                                default:
                                    return null;
                            }
                            return (0, o.jsx)(
                                tx,
                                {
                                    blockType: e.type,
                                    children: (0, o.jsx)("div", {
                                        className: u()(tP.v1, tP.Of, { [tP.J1]: 0 === a || g }),
                                        children: c,
                                    }),
                                },
                                a,
                            );
                        })(e, i > 0 ? f[i - 1] : null, i),
                    ),
                });
    },
    n6 = function (e) {
        let { handleTransition: t, tab: n, transitionState: s } = e,
            l = c.useRef(null),
            { handleScroll: i } = Q(l, n),
            a = (0, eC.U)(),
            r = (0, L.uM)(),
            [d, u] = c.useState(eS.md),
            [g, m] = c.useState(!1);
        return (
            c.useEffect(() => {
                if (null != l.current) {
                    function e() {
                        if (null == l.current) return;
                        let e = l.current.getDistanceFromBottom();
                        d >= 36 ? m(e < 20) : e <= 200 && u((e) => e + eS.md);
                    }
                    let t = l.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [l, d, u, m]),
            (0, o.jsx)(V.Ch, {
                className: tP.OW,
                ref: l,
                onScroll: i,
                children: (0, o.jsxs)("div", {
                    className: tP.bx,
                    children: [
                        (0, o.jsxs)("div", {
                            className: tP.rb,
                            children: [
                                (0, o.jsx)(n3, {
                                    handleTransition: t,
                                    numVisibleItems: d,
                                    isFetchingCategories: a,
                                    tab: n,
                                }),
                                n !== eS.G2.CATALOG &&
                                    d >= 36 &&
                                    (0, o.jsxs)("div", {
                                        className: tP.R$,
                                        children: [
                                            (0, o.jsx)(el.D, {
                                                variant: "heading-md/semibold",
                                                children: ei.intl.string(ei.t.Yr70c4),
                                            }),
                                            (0, o.jsx)(K.$, {
                                                variant: "primary",
                                                text: ei.intl.string(ei.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        Z.default.track(X.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: r?.sessionId,
                                                            page_type: n,
                                                            page_category: n === eS.G2.HOME ? void 0 : r?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, o.jsx)(nz, { peaking: g, transitioning: s === eS.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var n7 = n(154323),
    n9 = n(295811),
    n8 = n(870216);
let se = { "Any:personalization-header": tQ },
    st = { [en.b.SHOP_HOME]: se },
    sn = { "1465939725649973269": se, "1478495181551440044": se },
    ss = function () {
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
    sl = { prioritizedCurrency: tn.Hi.ORBS };
function si(e) {
    let { tab: t } = e,
        [n, s, l] = (0, B.yK)([n8.A], () => [n8.A.getLayout(t), n8.A.isFetchingLayout(t), n8.A.getLayoutFetchError(t)]),
        i = (0, B.bG)([n7.A], () => n7.A.get("shop_include_unpublished")),
        a = (0, B.bG)([A.A], () => A.A.skipNumCategories),
        r = c.useMemo(() => {
            let e = {};
            return !0 === i && (e.include_unpublished = !0), null != a && a > 0 && (e.skip_num_categories = a), e;
        }, [i, a]),
        d = null == n && !s && l?.status !== 404 && l?.status !== 429;
    if (
        (c.useEffect(() => {
            d && (0, nf.T2)({ tab: t });
        }, [d, t]),
        null == n)
    )
        return t !== P.HOME || d || s
            ? null
            : (0, o.jsx)(et.Z_, {
                  tenantId: X.FYj,
                  templateId: en.b.SHOP_HOME,
                  requestParams: r,
                  overrides: st[en.b.SHOP_HOME],
              });
    let u = (0, o.jsx)(et.Qs, { tenantId: X.FYj, layoutId: n, overrides: sn[n] });
    return (0, o.jsxs)(o.Fragment, {
        children: [
            t === P.ORBS && (0, o.jsx)(ss, {}),
            t === P.ORBS ? (0, o.jsx)(tn.v3.Provider, { value: sl, children: u }) : u,
        ],
    });
}
function sa(e) {
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
        : (0, o.jsx)(et.Ay, { layout: n });
}
let sr = function (e) {
    let { handleTransition: t, tab: n, transitionState: s } = e,
        l = (0, L.uM)(),
        i = (0, B.bG)([n9.A], () => n9.A.getShopLayoutUrlOverride()),
        a = c.useRef(null),
        { handleScroll: r } = Q(a, n),
        [d, g] = c.useState(eS.md),
        [m, h] = c.useState(!1);
    return (
        c.useEffect(() => {
            if (null != a.current) {
                function e() {
                    if (null == a.current) return;
                    let e = a.current.getDistanceFromBottom();
                    d >= 36 ? h(e < 20) : e <= 200 && g((e) => e + eS.md);
                }
                let t = a.current.getScrollerNode();
                return (
                    t?.addEventListener("scroll", e),
                    () => {
                        t?.removeEventListener("scroll", e);
                    }
                );
            }
        }, [a, d, g, h]),
        (0, o.jsx)(V.Ch, {
            className: tP.OW,
            ref: a,
            onScroll: r,
            children: (0, o.jsxs)("div", {
                className: tP.bx,
                children: [
                    (0, o.jsxs)("div", {
                        className: u()(tP.rb, tP.GS),
                        children: [
                            null != i && "" !== i ? (0, o.jsx)(sa, { url: i }) : (0, o.jsx)(si, { tab: n }),
                            n !== P.CATALOG &&
                                d >= 36 &&
                                (0, o.jsxs)("div", {
                                    className: tP.R$,
                                    children: [
                                        (0, o.jsx)(el.D, {
                                            variant: "heading-md/semibold",
                                            children: ei.intl.string(ei.t.Yr70c4),
                                        }),
                                        (0, o.jsx)(K.$, {
                                            variant: "primary",
                                            text: ei.intl.string(ei.t.AfrvRD),
                                            onClick: () => {
                                                t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                    Z.default.track(X.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: l?.sessionId,
                                                        page_type: n,
                                                        page_category: n === P.HOME ? void 0 : l?.pageCategory,
                                                        cta_name: "browse the shop button",
                                                    });
                                            },
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, o.jsx)(nz, { peaking: m, transitioning: s === eS.Pf.OUT }),
                ],
            }),
        })
    );
};
var so = n(564027);
let sc = function () {
        return (0, o.jsxs)("div", {
            className: so.z,
            children: [
                (0, o.jsx)("img", {
                    className: so.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: ei.intl.string(ei.t["p8+qtU"]),
                }),
                (0, o.jsx)(el.D, { variant: "heading-xl/semibold", children: ei.intl.string(ei.t["p8+qtU"]) }),
                (0, o.jsx)(W.E, { variant: "text-md/medium", children: ei.intl.string(ei.t.UEiyvs) }),
            ],
        });
    },
    sd = [eS.G2.HOME, eS.G2.ORBS];
function su(e) {
    let {
            tab: t,
            categories: n,
            transitionToTab: s,
            transitionState: l,
            updateAnalyticsState: i,
            refreshCategories: a,
        } = e,
        r = (0, B.bG)([A.A, G.A], () =>
            null != A.A.error
                ? `shop load fetch categories error: ${A.A.error.message}`
                : null != G.A.claimError
                  ? `shop load claim error: ${G.A.claimError.message}`
                  : null != G.A.fetchError
                    ? `shop load fetch purchase error: ${G.A.fetchError.message}`
                    : void 0,
        );
    !(function (e) {
        let t = (0, B.bG)([v.default], () => v.default.getCurrentUser()),
            { noCache: n, includeUnpublished: s } = (0, e_.A)();
        c.useEffect(() => {
            null != e &&
                w.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: s.toString(),
                    },
                });
        }, [e, t, n, s]);
    })(r);
    let d = (0, F.H)({ location: "collectibles_content" }),
        u = (0, B.bG)([D.Ay], () => D.Ay.useReducedMotion),
        g = (0, M.W6)(),
        m = (0, M.zy)(),
        [h] = c.useState(() => {
            if ("POP" === g.action) {
                let e;
                return (e = eb), (eb = null), e ?? void 0;
            }
        }),
        [E, x] = c.useState(h),
        [f, p] = c.useState(null == h),
        C = c.useMemo(() => {
            let e = new URLSearchParams(m.search).get(eS.P1);
            return null != e && "" !== e ? e : void 0;
        }, [m.search]),
        _ = c.useMemo(
            () =>
                n.filter(
                    (e) =>
                        !eS.MS.some((t) => {
                            let { categorySkuId: n } = t;
                            return n === e.skuId;
                        }),
                ),
            [n],
        ),
        b = (0, H.U)("CollectiblesContent"),
        S = (0, U.a)("CollectiblesContent"),
        j = c.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: l,
                    isInternalShopDeeplink: a,
                    isOrbsExclusive: r,
                } = e;
                if ((i(t, n), S && null != n && a && !r))
                    return void g.push(X.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n));
                let o = l && !u,
                    c = r ? eS.G2.ORBS : eS.G2.CATALOG;
                x(n), p(!a), s(c, o);
            },
            [u, s, i, S, g],
        ),
        { searchError: L } = (0, z.S)();
    return null != L
        ? (0, o.jsx)(sc, {})
        : null != r
          ? (0, o.jsx)(tu.h, { onRetry: a, errorMessage: r, errorOrigin: tu.A.SHOP_PAGE })
          : t === eS.G2.HOME && b
            ? (0, o.jsx)(sr, { tab: P.HOME, transitionState: l, handleTransition: j })
            : t === eS.G2.ORBS && b
              ? (0, o.jsx)(sr, { tab: P.ORBS, transitionState: l, handleTransition: j })
              : sd.includes(t)
                ? (0, o.jsx)(n6, { handleTransition: j, tab: t, transitionState: l })
                : t === eS.G2.GAME_SERVERS && d
                  ? (0, o.jsx)("div", {})
                  : (0, o.jsx)(tc, {
                        tab: t,
                        categories: _,
                        initialCategoryId: E ?? C,
                        showFilterInitially: f && null == C,
                        onUnmount: () => {
                            x(void 0), p(!0);
                        },
                    });
}
var sg = n(956123),
    sm = n(766075),
    sh = n(870308),
    sE = n(650583);
function sx(e) {
    let { children: t, shouldAddEventListener: n, onClose: s } = e,
        l = (0, h.useHasAnyModalOpen)();
    return (
        c.useEffect(() => {
            if (n && !l) return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            function e(e) {
                e.key === sE.N$.Escape && s();
            }
        }, [n, l, s]),
        t
    );
}
let sf = function (e) {
    var t;
    let { tab: n = eS.G2.HOME } = e;
    (0, b.P)(_.a);
    let s = (0, f.A)((0, g.A)()),
        l = (0, m.bG)([v.default], () => v.default.getCurrentUser());
    (0, j.pE)();
    let i = (0, eT.yB)("CollectiblesShop"),
        { onClose: a } = (function () {
            let { search: e } = (0, M.zy)(),
                t = (0, M.g)(),
                n = c.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                s = null != n ? parseInt(n, 10) : null;
            return {
                onClose: c.useCallback(() => {
                    if (0 === s) {
                        (0, t9.aX)(), (0, sm.openUserSettings)();
                        return;
                    }
                    (0, t9.EL)() ? (0, t9.aX)() : (0, t9.pX)(X.BVt.APP);
                }, [s]),
                source: s,
                ...t,
            };
        })(),
        { currentTab: r, hasFilters: d } = (0, y.v)(),
        N = c.useMemo(() => (n === eS.G2.HOME && null != r && d() ? r : n), [n, r, d]);
    (t = O.useConfig({ location: "CollectiblesShop" }).useEndpoint ? X.FYj : void 0),
        c.useEffect(() => {
            null != t && (0, S.tx)([t]);
        }, [t]);
    let { categories: P, refreshCategories: B } = (0, k.Ay)({ logPerf: !0 }, { sessionId: s, tab: N }),
        D = c.useMemo(() => [...P.values()], [P]),
        [H, F] = c.useState(),
        w = (0, m.bG)([A.A], () => A.A.getCategory(H)?.name),
        [G, U] = c.useState();
    (0, eA.XU)(s);
    let z = c.useCallback((e, t) => {
            U(e), F(t);
        }, []),
        { selectedTab: V, transitionState: Y, transitionToTab: W } = (0, R.o)(N);
    (0, C.HU)({ location: ei.intl.string(ei.t.pWG4ze) }), (0, T.uS)(s, V, w, Y, G), (0, T.N0)(V, l);
    let { dismissShopButtonDC: K } = (0, sh.A)();
    c.useEffect(() => {
        K();
    }, [K]),
        c.useEffect(() => {
            (0, x.I)(X.BVt.COLLECTIBLES_SHOP);
        }, []);
    let $ = c.useRef(null),
        q = c.useRef(null);
    (0, E.tj)($);
    let Z = (0, h.useHasAnyModalOpen)();
    c.useEffect(() => {
        q.current?.focus();
    }, []),
        (0, eT.gB)();
    let { analyticsLocations: J } = (0, T.lC)(V);
    return (0, o.jsx)(p.f5, {
        value: J,
        children: (0, o.jsx)(L.R9, {
            newValue: { sessionId: s, pageCategory: w, pageSize: eS.l5 },
            children: (0, o.jsx)(I.iM, {
                tab: V,
                children: (0, o.jsx)(sx, {
                    onClose: a,
                    shouldAddEventListener: !1,
                    children: (0, o.jsxs)("div", {
                        className: u()(eE.bx, { [eT.jP]: i }),
                        ref: q,
                        inert: Z,
                        tabIndex: -1,
                        children: [
                            (0, o.jsx)(sg.G, { handleTransition: W, selectedTab: V }),
                            (0, o.jsx)("div", {
                                className: u()(eE.td, {
                                    [eE.RK]: Y === eS.Pf.VISIBLE,
                                    [eE.in]: Y === eS.Pf.IN,
                                    [eE.FD]: Y === eS.Pf.OUT,
                                }),
                                children: (0, o.jsx)(su, {
                                    tab: V,
                                    refreshCategories: B,
                                    transitionToTab: W,
                                    transitionState: Y,
                                    categories: D,
                                    updateAnalyticsState: z,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
};
