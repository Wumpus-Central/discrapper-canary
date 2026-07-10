n.r(t), n.d(t, { default: () => sx });
var s,
    l,
    a,
    i,
    r,
    o,
    c = n(627968),
    d = n(64700),
    u = n(503698),
    g = n.n(u),
    m = n(132500),
    h = n(702841),
    x = n(192308),
    E = n(315710),
    p = n(944791),
    f = n(444927),
    C = n(688810),
    b = n(726249),
    S = n(475073),
    _ = n(611924),
    j = n(561794),
    v = n(287809),
    A = n(440938),
    L = n(590180),
    I = n(161918),
    N = n(790297),
    O = n(17928),
    k = n(773669),
    T = n(248352),
    y = n(945810);
let R = (0, y.mj)({
    name: "2026-01-valentines-day-drop",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 } },
});
var M = n(758836),
    P = n(202541),
    B = n(375708),
    D = (((s = {})[(s.COUNTDOWN = 0)] = "COUNTDOWN"), s),
    H = n(841702),
    w = n(621653),
    F = n(983545),
    U = n(23161);
n(323874), n(14289), n(35956), n(321073);
var G = n(873263),
    z = (((l = {}).HOME = "home"), (l.CATALOG = "catalog"), (l.ORBS = "orbs"), l),
    V = n(775602),
    W = n(578797),
    K = n(38405),
    Y = n(4227),
    $ = n(50920),
    q = n(856686),
    Z = n(689175),
    X = n(364522),
    J = n(834730),
    Q = n(821609),
    ee = n(783977),
    et = n(59520),
    en = n(174459),
    es = n(652215);
function el(e, t, n, s) {
    let { scrollTop: l = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = s;
    if (i > 0) {
        let s = (l + a) / i;
        s > 0 &&
            en.default.track(e, {
                scroll_visible_percent: s,
                source: n,
                page_height: Math.round(i),
                page_width: Math.round(r),
                page_session_id: t,
            });
    }
}
let ea = (e, t) => {
    let { analyticsSource: n } = (0, N.lC)(t),
        s = (0, et.I)(el, 5e3, [], { trailing: !0 }),
        l = (0, A.uM)(),
        a = l?.sessionId;
    return {
        handleScroll: d.useCallback(() => {
            if (null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    s(es.HAw.COLLECTIBLES_SHOP_SCROLLED, null != a ? a : "", n, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth,
                    });
            }
        }, [s, n, a, e]),
    };
};
var ei = n(354328),
    er = n(356118),
    eo = n(619835),
    ec = n(641150),
    ed = n(534514);
function eu() {
    let { itemTypeFilters: e, searchQuery: t } = (0, U.v)((e) => e),
        { totalCount: n, isFetchingResults: s } = (0, q.S)(),
        l = (0, U.v)((e) => e.hasFilters()),
        a = d.useCallback(() => {
            if (!l) return "";
            if (s) return B.intl.string(B.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return B.intl.format(B.t.KJMJOz, { count: n, search: e });
            }
            return 1 === e.size && e.has(ec.q.AVATAR_DECORATION)
                ? B.intl.format(B.t.s1UzGQ, { count: n })
                : 1 === e.size && e.has(ec.q.NAMEPLATE)
                  ? B.intl.format(B.t.ZWGN9T, { count: n })
                  : 1 === e.size && e.has(ec.q.PROFILE_EFFECT)
                    ? B.intl.format(B.t["v/7apu"], { count: n })
                    : 1 === e.size && e.has(ec.q.PROFILE_FRAME)
                      ? B.intl.format(B.t.eu4eRy, { count: n })
                      : 1 === e.size && e.has(ec.q.BUNDLE)
                        ? B.intl.format(B.t.fZ1rdk, { count: n })
                        : B.intl.format(B.t["/rPvmQ"], { count: n });
        }, [e, n, l, t, s]);
    return (0, c.jsx)(ed.D, { variant: "heading-lg/semibold", children: a() });
}
var eg = n(172218),
    em = n(932793),
    eh = n(940980),
    ex = n(511265),
    eE = n(206077),
    ep = n(100057),
    ef = n(828515),
    eC = n(484469),
    eb = n(215688),
    eS = n(647685),
    e_ = n(10);
let ej = () =>
    (0, c.jsx)("div", {
        className: e_.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, c.jsxs)(
                "div",
                {
                    className: eS.vY,
                    children: [
                        (0, c.jsx)("div", { className: g()(eb.sW, e_.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, c.jsx)(eC.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
var ev = n(828614),
    eA = n(561769),
    eL = n(159439),
    eI = n(998694);
let eN = null;
function eO(e) {
    let { category: t } = e,
        n = (0, h.bG)([v.default], () => v.default.getCurrentUser()),
        s = (0, eE.X)(t.products),
        l = (0, ex.p)()(s),
        a = (0, eh.W)("CollectiblesCatalogContent");
    return null == n || 0 === l.length
        ? null
        : (0, c.jsx)("div", {
              className: eS.vY,
              children: l.map((e, t) =>
                  (0, c.jsx)(
                      A.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, c.jsx)(
                              ev.A,
                              {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  prioritizedCurrency: a ? eA.Hi.FIAT : void 0,
                              },
                              e.skuId,
                          ),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function ek(e) {
    let { category: t } = e,
        [n, s] = d.useState(!1),
        l = (0, eg.K)(function (e) {
            s(e);
        }, 0.15),
        a = (0, G.W6)(),
        i = (0, $.a)("CollectiblesCatalogContent"),
        r = (0, A.uM)(),
        o = d.useCallback(() => {
            en.default.track(es.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: r?.sessionId,
                sku_id: t.skuId,
                page_type: M.G2.CATALOG,
                page_section: r?.pageSection,
                page_category: t.name,
                page_index: r?.pageIndex,
                page_size: r?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (eN = t.skuId),
                a.push(es.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
        }, [r?.pageIndex, r?.pageSection, r?.pageSize, r?.sessionId, t.name, t.skuId, a]);
    return (0, c.jsxs)("div", {
        className: eS.EF,
        ref: l,
        children: [(0, c.jsx)(ef.A, { category: t, onArrowClick: i ? o : void 0 }), (0, c.jsx)(eO, { category: t })],
    });
}
function eT(e) {
    let { categories: t, setCategoryRef: n, currentPage: s, handlePageChange: l, initialCategoryId: a } = e,
        i = (0, A.uM)(),
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
        t !== s && l(t), (h.current = a);
    }, [a, m, l, s]);
    let x = d.useMemo(() => {
        let e = (s - 1) * M.l5;
        return m.slice(e, e + M.l5);
    }, [m, s]);
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
            0 === x.length ||
            (0, ep.z)({
                sessionId: o,
                checkpoint: ep.t.SHOP_RENDERED,
                tab: M.G2.CATALOG,
                unpublishedCategoriesShown: g,
                cacheDisabled: u,
            });
    }, [o, g, u, r, x.length]),
    r)
        ? (0, c.jsx)(ej, {})
        : (0, c.jsxs)("div", {
              className: eS.LZ,
              children: [
                  x.map((e, t) =>
                      (0, c.jsx)(
                          "div",
                          {
                              ref: (t) => n(e.skuId, t),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": B.intl.formatToPlainString(B.t.FNtLb3, { category: e.name }),
                              children: (0, c.jsx)(A.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, c.jsx)(ek, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, c.jsx)("div", {
                      className: eS.Ej,
                      children: (0, c.jsx)(em.m, {
                          currentPage: s,
                          totalCount: m.length,
                          pageSize: M.l5,
                          onPageChange: l,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var ey = n(177366),
    eR = n(401864),
    eM = n(124987),
    eP = n(691885),
    eB = n(146919),
    eD = n(912853);
let eH = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, U.v)(),
        s = (0, A.uM)(),
        l = (0, eB.yB)("CollectiblesSortSelect"),
        a = n(),
        i = d.useMemo(() => M.QB.filter((e) => e.sortType !== eM.$.RELEVANCE || a), [a]),
        r = d.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === eM.$.RECENCY
                ? { label: B.intl.string(B.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === eM.$.PRICE
                  ? n === eR.A.ASC
                      ? { label: B.intl.string(B.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: B.intl.string(B.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === eM.$.RELEVANCE
                    ? { label: B.intl.string(B.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: B.intl.string(B.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        o = d.useCallback(
            (e) =>
                ({
                    recent: { sortType: eM.$.RECENCY, sortDirection: eR.A.DESC },
                    "price-asc": { sortType: eM.$.PRICE, sortDirection: eR.A.ASC },
                    "price-desc": { sortType: eM.$.PRICE, sortDirection: eR.A.DESC },
                    popularity: { sortType: eM.$.POPULARITY, sortDirection: eR.A.DESC },
                    relevance: { sortType: eM.$.RELEVANCE, sortDirection: eR.A.DESC },
                })[e],
            [],
        ),
        u = d.useCallback(
            (e) => {
                let n = r(o(e));
                en.default.track(es.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            [s, r, o, t],
        ),
        m = r(e);
    return (0, c.jsx)("div", {
        className: g()(eD.k, { [eB.jP]: l }),
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
    eU = n(990078),
    eG = n(150934),
    ez = n(508770),
    eV = n(602853),
    eW = n(661531),
    eK = n(939249),
    eY = n(947641),
    e$ = n(604338),
    eq = n(785866),
    eZ = n(373846),
    eX = n(308323),
    eJ = n(608599),
    eQ = n(685761),
    e0 = n(157225),
    e1 = n(413249),
    e2 = n(510241),
    e5 = n(601198),
    e4 = n(736653),
    e9 = n(7250),
    e7 = n(13875),
    e3 = n(818348),
    e6 = n(764915);
function e8() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: n, hasFilters: s } = (0, U.v)(),
        l = s(),
        a = (0, e7.sk)("FilterBar"),
        i = (0, A.uM)(),
        r = d.useRef(null),
        o = d.useMemo(() => M._6.filter((e) => a || e !== ec.q.PROFILE_FRAME), [a]),
        u = d.useCallback(
            (e) => {
                en.default.track(es.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            (0, c.jsx)(tl, { trackFilterAction: u }),
            l &&
                (0, c.jsx)(Q.$, {
                    variant: "secondary",
                    onClick: () => {
                        u("filter reset"), n(), requestAnimationFrame(() => r.current?.focus());
                    },
                    text: B.intl.string(B.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function te(e) {
    let { filter: t, trackFilterAction: n } = e,
        s = {
            [ec.q.AVATAR_DECORATION]: B.intl.string(B.t.dRZYNE),
            [ec.q.PROFILE_EFFECT]: B.intl.string(B.t["1cNjtx"]),
            [ec.q.NAMEPLATE]: B.intl.string(B.t.V68Fqz),
            [ec.q.PROFILE_FRAME]: B.intl.string(B.t.ecTJkR),
            [ec.q.BUNDLE]: B.intl.string(B.t.FYFpps),
        },
        { itemTypeFilters: l, onToggleItemType: a } = (0, U.v)(),
        i = (0, c.jsx)(eG.S, {
            checked: l.has(t),
            onChange: () => {
                let e = s[t]?.toLowerCase() != null ? s[t].toLowerCase() : t;
                n(`filter item type ${e} ${!1 === l.has(t) ? "on" : "off"}`), a(t);
            },
            label: s[t] ?? "",
        });
    return t === ec.q.PROFILE_FRAME
        ? (0, c.jsxs)("div", { className: e6.Ym, children: [i, (0, c.jsx)(ez.E, { type: "new" })] })
        : i;
}
function tt(e) {
    let { trackFilterAction: t } = e,
        n = d.useMemo(
            () => [
                { color: "#9B59B6", label: B.intl.string(B.t.kqUD4P), enum: ew.PURPLE },
                { color: "#3498DB", label: B.intl.string(B.t.qQTRae), enum: ew.BLUE },
                { color: "#2ECC71", label: B.intl.string(B.t["f/Ylk6"]), enum: ew.GREEN },
                { color: "#A0522D", label: B.intl.string(B.t["Sd/BMa"]), enum: ew.BROWN },
                { color: "#F1C40F", label: B.intl.string(B.t["0fevYz"]), enum: ew.YELLOW },
            ],
            [],
        ),
        s = d.useMemo(
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
            (0, c.jsx)(tn, { colors: n, trackFilterAction: t }),
            (0, c.jsx)(tn, { colors: s, trackFilterAction: t }),
        ],
    });
}
function tn(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: s, onToggleColor: l } = (0, U.v)();
    return (0, c.jsx)("div", {
        className: e6.OW,
        children: t.map((e) => {
            let { color: t, label: a, enum: i } = e;
            return (0, c.jsx)(
                ts,
                { color: t, label: a, enum: i, isToggled: s.has(i), onToggleColor: l, trackFilterAction: n },
                i,
            );
        }),
    });
}
function ts(e) {
    let { color: t, label: n, enum: s, isToggled: l, onToggleColor: a, trackFilterAction: i } = e,
        r = (0, eV.r)(eW.A.unsafe_rawColors.WHITE).hex(),
        o = (0, eV.r)(eW.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, c.jsx)(
        eU.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, c.jsx)(
                eK.D,
                {
                    className: g()(e6.n1, { [e6.lx]: l }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": l,
                    onClick: () => {
                        i(`filter color ${n.toLowerCase()} ${!l ? "on" : "off"}`), a(s);
                    },
                    children:
                        l &&
                        (0, c.jsx)("div", {
                            className: e6.oE,
                            children: (0, c.jsx)(eY.r, {
                                size: "xs",
                                color: (0, e9.j)({ backgroundColor: t, colors: [r, o] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
let tl = (e) => {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: s } = (0, U.v)(),
        l = (0, e4.Ay)() === e3.NJ.DARK,
        a = d.useCallback(
            (e) => {
                if (n.has(e) || l) return "control-primary-text-default";
            },
            [n, l],
        ),
        i = d.useCallback((e) => (n.has(e) || l ? eW.A.colors.WHITE : eW.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, l]),
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
                    let { name: l, icon: i, enum: r } = e;
                    return (0, c.jsxs)(
                        eK.D,
                        {
                            className: g()(e6.w4, { [e6.C7]: n.has(r) }),
                            "aria-label": l,
                            "aria-pressed": n.has(r),
                            onClick: () => {
                                let e = n.has(r);
                                t(`filter theme ${l.toLowerCase()} ${!e ? "on" : "off"}`), s(r);
                            },
                            children: [i, (0, c.jsx)(J.E, { color: a(r), variant: "text-md/medium", children: l })],
                        },
                        l,
                    );
                }),
            }),
        ],
    });
};
var ta = n(687971);
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
var tr = n(528096);
let to = { flattenProductVariants: !0 };
function tc(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: s } = e,
        l = (0, A.uM)(),
        a = l?.sessionId ?? "",
        { noCache: i, includeUnpublished: r } = (0, eI.A)(),
        o = (0, eh.W)("CollectiblesFilterResults"),
        u = (0, h.bG)([v.default], () => v.default.getCurrentUser()),
        { skus: m, currentPage: x, totalCount: E, isFetchingResults: p } = (0, q.S)(),
        f = (0, h.yK)([L.A], () => L.A.getProductsBySkus(m)),
        C = d.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        b = m?.join("");
    d.useEffect(() => {
        C();
    }, [b, C]);
    let S = (0, ex.p)(),
        _ = d.useMemo(() => S(f), [S, f]);
    d.useEffect(() => {
        t ||
            (0, ep.z)({
                sessionId: a,
                checkpoint: ep.t.SHOP_RENDERED,
                tab: s,
                unpublishedCategoriesShown: r,
                cacheDisabled: i,
            });
    }, [a, r, i, t, s]);
    let j = d.useRef(null),
        { setQueryPageSize: I, setQueryPageOffset: N, queryPageSize: O } = (0, U.v)(),
        [k, T] = d.useState(!1),
        y = t || p || null == u;
    d.useEffect(() => {
        y ? T(!1) : _.length > 0 && T(!0);
    }, [y, _.length]);
    let R = O > 0 && !y && 0 === _.length;
    d.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == j.current || I(Math.floor(5 * getComputedStyle(j.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != j.current) return e.observe(j.current), () => e.disconnect();
    }, [I]);
    let M = d.useCallback(
        (e) => {
            en.default.track(es.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    return (0, c.jsxs)(eA.v3.Provider, {
        value: to,
        children: [
            (0, c.jsxs)("div", {
                className: g()({ [tr.oE]: R }),
                children: [
                    R && (0, c.jsx)(ti, {}),
                    (0, c.jsxs)("div", {
                        className: g()(tr.ZE, { [tr.Kp]: k }),
                        ref: j,
                        children: [
                            y && [...Array(O)].map((e, t) => (0, c.jsx)(eC.A, {}, t)),
                            !y &&
                                _.map((e, t) =>
                                    null == L.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, c.jsx)(
                                              A.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, c.jsx)(
                                                      ev.A,
                                                      {
                                                          skuId: e.skuId,
                                                          hideStaticBundleBackgroundAsset: !0,
                                                          prioritizedCurrency: o ? eA.Hi.FIAT : void 0,
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
                (0, c.jsx)("div", {
                    className: tr.Ej,
                    children: (0, c.jsx)("div", {
                        children: (0, c.jsx)(em.m, {
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
var td = n(832179);
function tu(e) {
    let { tab: t, categories: n, initialCategoryId: s, showFilterInitially: l = !0, onUnmount: a } = e,
        i = (0, ei.A)("shop_include_unpublished");
    (0, U.S)(i);
    let r = d.useRef(null),
        { handleScroll: o } = ea(r, t),
        u = (0, W.U)("Shop Browse"),
        { setCategoryRef: g, handleScrollToCategory: m } = (0, ey.k0)(r.current),
        [h, x] = d.useState(l),
        [E, p] = d.useState(!1);
    return (
        d.useEffect(() => {
            null != s && m(s);
        }, [s, m]),
        d.useEffect(
            () => () => {
                null != a && a();
            },
            [],
        ),
        d.useEffect(() => {
            function e() {
                p(window.innerWidth < 1400);
            }
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
                                      children: (0, c.jsx)(er.Z_, { tenantId: es.FYj, templateId: eo.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, c.jsx)(tg, {
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
                    h && !E && (0, c.jsx)("div", { className: td.yF }),
                    h && !E && (0, c.jsx)(X.Ip, { className: td.kT, children: (0, c.jsx)(e8, {}) }),
                ],
            }),
        })
    );
}
function tg(e) {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: s,
            tab: l,
            scrollerRef: a,
            categories: i,
            setCategoryRef: r,
            initialCategoryId: o,
        } = e,
        u = d.useRef(null),
        m = (0, U.v)((e) => e.hasDefaultFilters()),
        h = (0, A.uM)(),
        { handlePageChange: x, currentPage: E } = (function (e) {
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
                en.default.track(es.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        f = d.useRef(null);
    return (
        d.useEffect(() => {
            if (t && n)
                return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
            function e(e) {
                let t = e.target;
                null === u.current ||
                    null === f.current ||
                    u.current.contains(t) ||
                    f.current.contains(t) ||
                    (en.default.track(es.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                        ref: f,
                                        children: (0, c.jsx)(Q.$, {
                                            onClick: function () {
                                                let e = !n;
                                                en.default.track(es.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                            text: B.intl.string(n ? B.t.fYtm6f : B.t["TeTYE+"]),
                                            icon: ee.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, c.jsx)("div", {
                                    className: td.Dh,
                                    ref: u,
                                    children: (0, c.jsx)(Z.Ch, { className: td.Qo, children: (0, c.jsx)(e8, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, c.jsx)(A.R9, {
                              newValue: { pageIndex: E },
                              children: (0, c.jsx)(eT, {
                                  categories: i,
                                  setCategoryRef: r,
                                  currentPage: E,
                                  handlePageChange: p,
                                  initialCategoryId: o,
                              }),
                          })
                        : (0, c.jsx)(tc, { scrollerRef: a, tab: l }, l),
                ],
            }),
        })
    );
}
var tm = n(599062),
    th = n(651162),
    tx = n(554146),
    tE = n(367727);
let tp = d.createContext(null);
function tf(e) {
    let { blockType: t, children: n } = e,
        s = d.useMemo(() => ({ blockType: t }), [t]);
    return (0, c.jsx)(tp.Provider, { value: s, children: n });
}
var tC = n(755172),
    tb = n(325595),
    tS = n(893998),
    t_ = n(110629),
    tj = n(580929),
    tv = n(607399),
    tA = n(946015),
    tL = n(717421),
    tI = n(140735),
    tN = n(496431),
    tO = n(467513);
let tk = (e) => {
    let { endDate: t, size: n = "md", className: s, showSeconds: l = !1 } = e,
        { days: a, hours: i, minutes: r, seconds: o } = (0, tN.A)(t),
        d = (function (e, t, n, s, l) {
            function a(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let i = [a(e), a(t), a(n)];
            return l && i.push(a(s)), i.join(":");
        })(a, i, r, o, l);
    return (0, c.jsxs)("div", {
        className: g()(tO.kL, s),
        role: "timer",
        children: [
            d
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, c.jsx)(
                              J.E,
                              {
                                  color: "none",
                                  variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: tO.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, c.jsx)(
                              J.E,
                              {
                                  color: "text-overlay-light",
                                  variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
                                  className: tO.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, c.jsx)(tI.A, { children: B.intl.format(B.t.j6IyVe, { days: a, hours: i, minutes: r }) }),
        ],
    });
};
var tT = n(134264);
let ty = d.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        s = (0, tL.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsxs)(tj.animated.div, {
        className: g()([tT.lP, tv.Fr && tT.yJ]),
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
            (0, c.jsxs)(tA.s, {
                direction: tA.s.Direction.VERTICAL,
                children: [
                    (0, c.jsx)(J.E, {
                        variant: "text-md/medium",
                        className: tT.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, c.jsx)(J.E, {
                            variant: "text-sm/medium",
                            className: tT.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, c.jsx)(tk, { endDate: t.endTime }),
        ],
    });
});
var tR = n(424918),
    tM = n(793574),
    tP = n(993408),
    tB = n(196231),
    tD = n(941734);
function tH(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, c.jsx)("div", {
        className: g()(tD.n9, tD.YB),
        children: n?.subblocks.map((e, n) =>
            e.type === tR.u.CATEGORY
                ? (0, c.jsx)(
                      A.R9,
                      {
                          newValue: {
                              categoryPosition: 1,
                              pageCategory: e.name,
                              pageSection: "featured_block",
                              tilePosition: n,
                          },
                          children: (0, c.jsx)(
                              tB.S,
                              {
                                  subblock: e,
                                  enablePreview: 0 === n,
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
}
function tw(e) {
    let { handleTransition: t, categories: n } = e;
    if (null == n || n.length < 2) return null;
    let [s, l] = n;
    return (0, c.jsx)("div", {
        className: g()(tD.n9, tD.YB),
        children: (0, c.jsxs)(A.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != s ? s.name : l?.name,
                pageSection: "featured_block",
                tilePosition: +(null == s),
            },
            children: [
                null != s &&
                    (0, c.jsx)(tB.S, {
                        category: s,
                        enablePreview: !0,
                        badgeText: (0, tP.HF)(s.unpublishedAt) ? B.intl.string(B.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != l &&
                    (0, c.jsx)(tB.S, {
                        category: l,
                        badgeText: (0, tP.HF)(l.unpublishedAt) ? B.intl.string(B.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let tF = function (e) {
    let { isLoading: t, handleTransition: n, categories: s, featuredBlockRecord: l } = e,
        { analyticsLocations: a } = (0, C.Ay)(tM.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
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
        : null != l
          ? (0, c.jsx)(C.f5, {
                value: a,
                children: (0, c.jsx)(tH, { featuredBlockRecord: l, handleTransition: n, isLoading: !1 }),
            })
          : (0, c.jsx)(C.f5, {
                value: a,
                children: (0, c.jsx)(tw, { categories: s, handleTransition: n, isLoading: !1 }),
            });
};
var tU = n(531685),
    tG = n(428262),
    tz = n(621466),
    tV =
        (((r = {}).MOUNTED = "mounted"),
        (r.SORT_OUT = "sort-out"),
        (r.SORT_IN = "sort-in"),
        (r.SHUFFLE_OUT = "shuffle-out"),
        (r.SHUFFLE_IN = "shuffle-in"),
        (r.FINISHED = "finished"),
        r);
n(667532);
var tW = n(735438),
    tK = n.n(tW),
    tY =
        (((o = {}).RECOMMENDED = "recommended"),
        (o.POPULAR = "popular"),
        (o.RECENT = "recent"),
        (o.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (o.RANDOM = "random"),
        o),
    t$ = n(153488),
    tq = n(313276),
    tZ = n(623373),
    tX = n(885574),
    tJ = n(975807),
    tQ = n(975571),
    t0 = n(365714);
let t1 = function (e) {
        let { personalizedResults: t, label: n } = e,
            s = n ?? B.intl.string(B.t.NSv5KV);
        return (0, c.jsxs)("div", {
            className: t0.L,
            children: [
                (0, c.jsx)(ed.D, { variant: "heading-lg/semibold", children: s }),
                t &&
                    (0, c.jsx)(eU.m, {
                        text: B.intl.string(B.t["3taPdj"]),
                        position: "top",
                        "aria-label": B.intl.string(B.t["3taPdj"]),
                        children: (0, c.jsx)(eK.D, {
                            onClick: () => (0, tJ.A)(tQ.A.getArticleURL(es.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: t0.s,
                            children: (0, c.jsx)(tX.m, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    t2 = function (e) {
        let {
                isLoading: t,
                title: n,
                sortedSkuIds: s,
                numVisibleItems: l,
                prioritizeUserDiscounts: a,
                tab: i,
                buttonContainerClassName: r,
                orbsSupportedOnly: o,
            } = e,
            u = (0, O.bG)([v.default], () => v.default.getCurrentUser()),
            m = tG.Ay.canUseShopDiscounts(u),
            h = (0, eA.Mk)(i, "FeedBlock"),
            x = (0, eB.yB)("FeedBlock"),
            {
                sortType: E,
                setSortType: p,
                sortedItems: f,
                sortOptions: b,
                shuffleProducts: S,
                showRecommendationOption: _,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: n, prioritizeUserDiscounts: s, orbsSupportedOnly: l } = e,
                    a = (0, O.bG)([t$.A], () => t$.A.hasConsented(es.YAq.PERSONALIZATION)),
                    i = d.useMemo(() => t?.[tY.RECOMMENDED] ?? [], [t]),
                    r = d.useMemo(() => t?.[tY.POPULAR] ?? [], [t]),
                    o = i.length > 0 && a,
                    [c, u] = d.useState(o ? tY.RECOMMENDED : tY.POPULAR),
                    g = (0, O.bG)([L.A], () => L.A.productsWithVariantsAsGroup),
                    m = d.useMemo(() => (0, tP.CE)(g), [g]),
                    h = (0, O.bG)([T.A], () => T.A.getUserDiscounts()),
                    x = (0, tq.A)(),
                    E = (0, ex.p)(),
                    [p, f] = d.useState([]),
                    C = d.useCallback(() => {
                        u(tY.RANDOM), f(tK().shuffle(m));
                    }, [m]);
                d.useEffect(() => {
                    f(tK().shuffle(m));
                }, [m]);
                let b = d.useMemo(() => {
                    let e = [];
                    switch (c) {
                        case tY.RECENT:
                            e = m;
                            break;
                        case tY.PRICE_LOW_TO_HIGH:
                            e = (0, tP.bf)([...m], n, l);
                            break;
                        case tY.RECOMMENDED: {
                            let t = x(i);
                            e = s ? (0, tP.Bs)(t, h) : t;
                            break;
                        }
                        case tY.POPULAR: {
                            let t = x(r);
                            e = s ? (0, tP.Bs)(t, h) : t;
                            break;
                        }
                        case tY.RANDOM:
                            e = p;
                    }
                    return l ? (0, tZ.ex)(E(e)) : E(e);
                }, [c, l, E, n, m, x, i, s, h, r, p]);
                return {
                    sortType: c,
                    setSortType: u,
                    sortedItems: (0, eE.X)(b),
                    sortOptions: d.useMemo(() => {
                        let e = [
                            { value: tY.POPULAR, label: B.intl.string(B.t.Y68e5p) },
                            { value: tY.RECENT, label: B.intl.string(B.t["51Bhiz"]) },
                            { value: tY.PRICE_LOW_TO_HIGH, label: B.intl.string(B.t.m8RVU2) },
                        ];
                        return o && e.unshift({ value: tY.RECOMMENDED, label: B.intl.string(B.t.zPWgFG) }), e;
                    }, [o]),
                    showRecommendationOption: o,
                    shuffleProducts: C,
                };
            })({ sortedSkuIds: s, hasShopDiscount: m, prioritizeUserDiscounts: a, orbsSupportedOnly: o }),
            j = (0, O.bG)([V.Ay], () => V.Ay.useReducedMotion),
            I = (0, O.bG)([tU.A], () => tU.A.isFocused()),
            N = !j && I,
            { animationPhase: k, startAnimation: y } = (() => {
                let [e, t] = d.useState("mounted"),
                    [n, s] = d.useState(!1),
                    l = d.useRef(null);
                return (
                    d.useEffect(() => {
                        if (n && "finished" === e) {
                            if (null !== l.current) {
                                let e = l.current;
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
                            s(!1);
                        }
                    }, [e, n]),
                    {
                        animationPhase: e,
                        startAnimation: d.useCallback((e) => {
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
            R = (0, A.uM)(),
            M = R?.sessionId ?? "",
            { analyticsLocations: P } = (0, C.Ay)(tM.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            D = d.useRef(null),
            H = d.useRef(null),
            [w, F] = d.useState(!1),
            U = d.useCallback(
                (e) => {
                    F(!1),
                        y({ isShuffling: !1, onOutroComplete: () => p(e), returnRef: H }),
                        en.default.track(es.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: M,
                            sort_type: e,
                        });
                },
                [y, p, M],
            );
        return null == u
            ? null
            : (0, c.jsx)(C.f5, {
                  value: P,
                  children: (0, c.jsxs)("div", {
                      className: g()(tD.lD, tD.YB),
                      children: [
                          (0, c.jsxs)("div", {
                              className: tD.$6,
                              children: [
                                  (0, c.jsx)(t1, { label: n, personalizedResults: _ }),
                                  (0, c.jsxs)("div", {
                                      className: g()(tD.IE, { [eB.jP]: x }),
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
                                          (0, c.jsx)("div", {
                                              className: r,
                                              children: (0, c.jsx)(Q.$, {
                                                  variant: "secondary",
                                                  text: B.intl.string(B.t.X3tnc4),
                                                  buttonRef: D,
                                                  onClick: function () {
                                                      F(!0),
                                                          y({ isShuffling: !0, onOutroComplete: S, returnRef: D }),
                                                          en.default.track(
                                                              es.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: M },
                                                          );
                                                  },
                                                  disabled: k !== tV.MOUNTED && k !== tV.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, c.jsx)(tI.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: w && k === tV.FINISHED ? B.intl.string(B.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, c.jsx)("div", {
                              className: tD.hm,
                              children: t
                                  ? (0, c.jsx)(c.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, c.jsx)(eC.A, {}, t + 1)),
                                    })
                                  : f.slice(0, l).map((e, t) => {
                                        let n,
                                            s = L.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == s) return null;
                                        if (N)
                                            if (k === tV.SHUFFLE_OUT)
                                                return (0, c.jsx)(
                                                    "div",
                                                    {
                                                        className: tD.Z2,
                                                        children: (0, c.jsx)(eC.A, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                k === tV.SORT_OUT
                                                    ? (n = tD.MW)
                                                    : k === tV.SHUFFLE_IN
                                                      ? (n = tD.aS)
                                                      : k === tV.SORT_IN && (n = tD.F7);
                                        return (0, c.jsx)(
                                            A.R9,
                                            {
                                                newValue: {
                                                    tilePosition: t,
                                                    pageSection: "popular picks",
                                                    categoryPosition: 2,
                                                },
                                                children: (0, c.jsx)("div", {
                                                    className: n,
                                                    children: (0, c.jsx)(ev.A, {
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
var t5 = n(449543),
    t4 = n(622697);
let t9 = function (e) {
    let { block: t, handleTransition: n, tab: s } = e,
        l = (0, O.bG)([v.default], () => v.default.getCurrentUser()),
        a = (0, eA.Mk)(s, "FramesProductShelfBlock"),
        i = (0, tq.A)(),
        r = d.useMemo(() => i(t.rankedSkuIds), [t.rankedSkuIds, i]),
        o = (0, eE.X)(r),
        { analyticsLocations: u } = (0, C.Ay)(tM.A.COLLECTIBLES_SHOP_SHELF),
        m = d.useCallback(() => {
            n({
                sourceButton: "frames product shelf see all",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            });
        }, [n, t.categorySkuId]);
    return null == l || 0 === o.length
        ? null
        : (0, c.jsx)(C.f5, {
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
                                              (0, c.jsx)(t_.A, {
                                                  location: "FramesProductShelfBlock",
                                                  showTooltip: !0,
                                              }),
                                              (0, c.jsx)(ed.D, {
                                                  variant: "heading-lg/semibold",
                                                  color: "text-overlay-light",
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
                                  children: o.map((e, n) =>
                                      null == L.A.getCategoryForProduct(e.skuId)
                                          ? null
                                          : (0, c.jsx)(
                                                A.R9,
                                                {
                                                    newValue: {
                                                        tilePosition: n,
                                                        pageSection: t.title,
                                                        categoryPosition: 1,
                                                    },
                                                    children: (0, c.jsx)(ev.A, {
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
var t7 = n(337183),
    t3 = n(349288),
    t6 = n(212407),
    t8 = n(815280),
    ne = n(537947);
let nt = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        s = (0, eg.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: l, bannerAnimatedUrl: a } = (0, t6.qY)(t),
        i = null != t.textColor ? { color: t.textColor } : void 0,
        r = null != t.body && "" !== t.body,
        o = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, c.jsxs)("div", {
        ref: s,
        className: ne.BX,
        children: [
            (0, c.jsx)("div", {
                className: ne.vK,
                children: null != l && (0, c.jsx)(t8.A, { bannerStatic: l, bannerAnimated: a }),
            }),
            (0, c.jsx)("div", {
                className: ne.HQ,
                children: (0, c.jsxs)("div", {
                    className: ne.Yn,
                    children: [
                        null != t.endTime ? (0, c.jsx)(tk, { endDate: t.endTime, size: "lg" }) : null,
                        (0, c.jsx)(ed.D, {
                            variant: "heading-xxl/bold",
                            className: ne.DD,
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
                                              className: ne.CU,
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
var nn = n(189213),
    ns = n(290136),
    nl = n(478016),
    na = n(825484),
    ni = n(269115),
    nr = n(812993),
    no = n(713517),
    nc = n(914410),
    nd = n(662388),
    nu = n(597783),
    ng = n(61750);
function nm(e, t) {
    let n = d.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        s = (0, O.bG)([Y.A], () => Y.A.getPurchases(n));
    return {
        readyToClaim: d.useMemo(() => s.length === n.length, [s, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: s,
    };
}
var nh = n(496569),
    nx = n(498924);
let nE = d.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: s } = (0, nu.Z)(n),
            l = d.useRef(null),
            { isHoveringOrFocusing: a } = (0, no.A)(l),
            { readyToClaim: i, collectibleProductSkuIds: r, collectedSkuIds: o } = nm(t, n),
            u = (0, O.bG)([Y.A], () => Y.A.isClaiming === n);
        return (0, c.jsx)(ni.L, {
            onChange: s,
            threshold: 0,
            innerRef: l,
            children: (0, c.jsx)("div", {
                ref: l,
                className: g()(nh.ty, nx.Q3, { [nh.yo]: a }),
                "aria-label": B.intl.formatToPlainString(B.t.Ez6aHE, { category: t.name }),
                children: (0, c.jsxs)("div", {
                    className: nh.qt,
                    children: [
                        (0, c.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: nx.L8,
                        }),
                        (0, c.jsx)("div", {
                            className: nh.N1,
                            children: (0, c.jsx)(nr.Lp, {
                                text: B.intl.string(B.t.rykAJ9),
                                disableColor: !0,
                                className: nx.HZ,
                            }),
                        }),
                        (0, c.jsxs)("div", {
                            className: nh.xQ,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: nx.xE,
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: nx.cs,
                                            children: [
                                                (0, c.jsx)(ed.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: nh.tZ,
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
                                                        className: nx.ZB,
                                                        children: (0, c.jsx)(ns.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)("div", {
                                            className: nh.oh,
                                            "aria-hidden": !0,
                                            children: (0, c.jsxs)("div", {
                                                className: nx.L$,
                                                children: [
                                                    (0, c.jsx)(nc.Ay, {
                                                        variant: nc.qP.BLUE,
                                                        progress: o.length,
                                                        maximum: r.length,
                                                    }),
                                                    (0, c.jsxs)("div", {
                                                        className: g()(nx.__, { [nx.gF]: i }),
                                                        children: [
                                                            i
                                                                ? (0, c.jsx)(nl.U, {
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
                                    className: nh.Vs,
                                    children: (0, c.jsx)(na.e, {
                                        wrap: !1,
                                        className: nh.Ld,
                                        fullWidth: !0,
                                        children: (0, c.jsx)(Q.$, {
                                            variant: "primary",
                                            onClick: function (e) {
                                                e.stopPropagation(),
                                                    i &&
                                                        (0, nd.BX)(t.skuId, n)
                                                            .then(() => {
                                                                let e = L.A.getProduct(n);
                                                                null != e &&
                                                                    (0, ng.A)({
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
                                                                (0, x.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, c.jsx)(nn.Modal, {
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
    np = function (e) {
        let t,
            n,
            s,
            { isBlockLoading: l = !1, heroBlock: a, tab: i } = e,
            r = (0, eA.Mk)(i, "RewardHeroBlockCards"),
            o = d.useMemo(() => L.A.getCategoryForProduct(a.rewardSkuId), [a.rewardSkuId]),
            u = (0, O.bG)([Y.A], () => Y.A.getPurchase(a.rewardSkuId)),
            { products: g } =
                ((t = (0, tq.A)()),
                (n = d.useMemo(
                    () => (l ? [] : t(a.rankedSkuIds).filter((e) => e.skuId !== a.rewardSkuId || null != u)),
                    [l, t, a.rankedSkuIds, u, a.rewardSkuId],
                )),
                (s = (0, ex.p)()(n)),
                { products: (0, eE.X)(s) }),
            m = d.useMemo(
                () =>
                    !l &&
                    0 !== a.rankedSkuIds.length &&
                    !(g.length > 0) &&
                    a.rankedSkuIds.every((e) => L.A.getProduct(e)?.variantGroupStoreListingId != null),
                [l, a.rankedSkuIds, g.length],
            ),
            h = l || m,
            { readyToClaim: x } = nm(o, a.rewardSkuId),
            E = null == u && null != a.rewardSkuId && null != o;
        return (0, c.jsx)(t5.A, {
            gap: "xl",
            children: h
                ? (0, c.jsx)(c.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, c.jsx)(eC.A, {}, t)),
                  })
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          E &&
                              x &&
                              (0, c.jsx)(
                                  A.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, c.jsx)(nE, { category: o, rewardSkuId: a.rewardSkuId }),
                                  },
                                  a.rewardSkuId,
                              ),
                          g.map((e, t) => {
                              let n = L.A.getCategoryForProduct(e.skuId);
                              return null == e || null == n
                                  ? null
                                  : (0, c.jsx)(
                                        A.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, c.jsx)(ev.A, { skuId: e.skuId, prioritizedCurrency: r }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, tP.$b)(90);
let nf = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: th.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    nC = function (e) {
        let { isLoading: t = !1, heroBlock: n, tab: s, onVisibilityChange: l } = e,
            a = (0, eg.K)(
                (e) => {
                    l?.(e);
                },
                0.1,
                null != l,
            ),
            i = (0, O.bG)([v.default], () => v.default.getCurrentUser()),
            { analyticsLocations: r } = (0, C.Ay)(tM.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: o,
                logoDisplayConfig: d,
                heroLogo: u,
                heroBannerStatic: m,
                heroBannerAnimated: h,
            } = (0, t6.Kk)(n),
            x = o?.responsive ?? !1,
            E = o?.backgroundStyle;
        return null != i && (t || n !== nf)
            ? (0, c.jsx)(C.f5, {
                  value: r,
                  children: (0, c.jsxs)("div", {
                      ref: a,
                      className: tD.os,
                      children: [
                          (0, c.jsx)("div", {
                              className: g()(tD.vK, { [tD.no]: x }),
                              style: null != E ? { background: E } : void 0,
                              children:
                                  null != m &&
                                  (0, c.jsx)(t8.A, { bannerStatic: m, bannerAnimated: h, isResponsive: x }),
                          }),
                          (0, c.jsxs)("div", {
                              className: tD.xX,
                              children: [
                                  (0, c.jsx)("div", {
                                      className: g()(tD.bC, { [tD.no]: x }),
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
                                                                alt: n.name,
                                                                style: d?.toDesktopStyles(),
                                                            }),
                                                        null != n.title &&
                                                            (0, c.jsx)(ed.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: tD.DD,
                                                                color: "text-strong",
                                                                children: n.title,
                                                            }),
                                                        "" !== n.summary &&
                                                            (0, c.jsx)(J.E, {
                                                                variant: "text-md/normal",
                                                                className: tD.Tm,
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
                                  (0, c.jsx)(np, { isBlockLoading: t, heroBlock: n, tab: s }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var nb = n(609196);
let nS = (e) => {
    let { shelf: t, handleTransition: n, tab: s } = e,
        l = (0, O.bG)([v.default], () => v.default.getCurrentUser()),
        a = (0, eA.Mk)(s, "ShelfBlock"),
        i = (0, O.bG)([L.A], () => (null != t.categorySkuId ? L.A.getCategory(t.categorySkuId) : void 0)),
        r = (0, tq.A)(),
        o = d.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r]),
        u = (0, eE.X)(o),
        { analyticsLocations: m } = (0, C.Ay)(tM.A.COLLECTIBLES_SHOP_SHELF),
        h = d.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: i?.isOrbsExclusive === !0 && s !== M.G2.ORBS,
            });
        }, [t.categorySkuId, i, n, s]);
    if (null == l || 0 === u.length) return null;
    let x = t.buttonText ?? B.intl.formatToPlainString(B.t.bc9RBE, { category_name: t.name }),
        E = t.showButton,
        p = t.desktopBackgroundImage,
        f = null != p;
    return (0, c.jsx)(C.f5, {
        value: m,
        children: (0, c.jsxs)("div", {
            className: g()(nb.mu, tD.YB, f ? nb.VA : nb.Ti),
            children: [
                f && (0, c.jsx)("img", { className: nb.iL, src: p, alt: "", "aria-hidden": !0 }),
                (0, c.jsxs)("div", {
                    className: nb.Qs,
                    children: [
                        (0, c.jsxs)("div", {
                            className: nb.wx,
                            children: [
                                (0, c.jsx)(ed.D, {
                                    variant: "heading-lg/semibold",
                                    style: f ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                E &&
                                    (0, c.jsx)(Q.$, {
                                        variant: f ? "overlay-primary" : "secondary",
                                        text: x,
                                        onClick: h,
                                    }),
                            ],
                        }),
                        (0, c.jsx)(t5.A, {
                            gap: "xl",
                            edgeFade: f ? "sm" : void 0,
                            children: u.map((e, n) =>
                                null == L.A.getCategoryForProduct(e.skuId)
                                    ? null
                                    : (0, c.jsx)(
                                          A.R9,
                                          {
                                              newValue: { tilePosition: n, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, c.jsx)(ev.A, { skuId: e.skuId, prioritizedCurrency: a }),
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
var n_ = n(465794),
    nj = n(69236),
    nv = n(44724),
    nA = n(421108),
    nL = n(873297);
let nI = function (e) {
    let {
            applicationId: t,
            headerText: n,
            gradientColors: s,
            gradientAngle: l,
            skuIds: a,
            tab: i,
            endTime: r,
            ctaType: o = "storefront",
            logoUrl: u,
        } = e,
        g = (0, nA.u)(r) ?? void 0,
        m = (0, nj.W8)(),
        h = d.useMemo(
            () =>
                "nitro" !== o || m
                    ? {
                          kind: "button",
                          text: B.intl.string(B.t.apFNLU),
                          onClick: () => (0, nv.default)({ applicationId: t }),
                          onMouseDown: () => (0, nv.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, c.jsx)(n_.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: P.pe.TIER_2,
                              buttonTextOverride: B.intl.string(B.t.pj0XBN),
                          }),
                      },
            [o, t, m],
        );
    return (0, c.jsx)(nL.A, {
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
var nN = n(575593),
    nO = n(770178),
    nk = n(929283),
    nT = n(275483);
let ny = [
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
function nR(e) {
    let { config: t, baseLeft: n, transitioning: s } = e,
        l = window.innerHeight,
        a = L.A.getProduct(t.skuId),
        i = a?.items[0],
        r = a?.type,
        o = n + t.horizontalJitter;
    return (0, c.jsx)("div", {
        className: nT.LY,
        style: {
            top: s ? -l - 384 : t.top,
            left: s ? o + t.transitionOffsetLeft : o,
            transform: `rotate(${t.rotation}deg)`,
            height: 160,
            width: 160,
            transitionDelay: t.transitionDelay,
            transitionDuration: t.transitionDuration,
        },
        children: null != i && r === nN.R.AVATAR_DECORATION && (0, c.jsx)(nk.i, { item: i }),
    });
}
let nM = (e) => {
        let { peaking: t, transitioning: n, parentWidth: s } = e,
            [l, a] = d.useState(!1),
            [i, r] = d.useState([]),
            [o] = d.useState(() =>
                [...ny]
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
                if (null != s && s > 0) {
                    let e = Math.max(1, Math.floor(s / 130)),
                        t = s / e;
                    r(Array.from({ length: e }, (e, n) => ({ config: o[n % o.length], baseLeft: n * t })));
                }
            }, [s, o]),
            d.useEffect(() => {
                n && setTimeout(() => a(!0), M.H1);
            }, [n]),
            (0, c.jsx)("div", {
                className: g()(nT.rA, { [nT.Kb]: t, [nT.pp]: l }),
                children: i.map((e, t) => {
                    let { config: s, baseLeft: l } = e;
                    return (0, c.jsx)(nR, { config: s, baseLeft: l, transitioning: n }, s.skuId + t);
                }),
            })
        );
    },
    nP = function (e) {
        let { peaking: t, transitioning: n } = e,
            s = d.useRef(null),
            [l, a] = d.useState(0),
            i = d.useCallback(() => {
                null != s.current && a(s.current.offsetWidth);
            }, []);
        return (
            (0, nO.g)(s, i),
            (0, c.jsx)("div", {
                ref: s,
                className: nT.eL,
                children: (0, c.jsx)(nM, { peaking: t, transitioning: n, parentWidth: l }),
            })
        );
    };
var nB = n(815021),
    nD = n(43990),
    nH = n(976860),
    nw = n(49999);
let nF = function (e) {
    let { wideBannerBlock: t, tab: n } = e,
        s = L.A.getCategoryByStoreListingId(t.categoryStoreListingId),
        l = d.useRef(null),
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
    let m = s?.skuId ?? "",
        { handleCardVisibilityChange: h } = (0, nu.Z)(m, "home", "marketing wide banner"),
        x = (0, A.uM)(),
        { bannerURL: E } = (0, t6.w$)(t),
        p = n === M.G2.ORBS,
        f = null != t.ctaRoute && "" !== t.ctaRoute,
        C = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || f),
        b = null != t.logoURL && "" !== t.logoURL,
        S = d.useCallback(() => {
            if ((u(!0), t.isDismissible)) {
                let e = t.dismissibleContentVersion ?? 0;
                (0, tE.$l)(tx.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: nw.i.USER_DISMISS });
            }
        }, [t.isDismissible, t.dismissibleContentVersion]),
        _ = d.useCallback(
            (e) => {
                en.default.track(es.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        j = d.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if ((_(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                    let e = t.ctaRoute;
                    if (e.includes("game-shop")) {
                        let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                        if (null != t) {
                            let e = t[1],
                                n = parseInt(t[2], 10);
                            (0, nv.default)({ guildId: e, pageIndex: n });
                        }
                    } else (0, nH.pX)(e);
                }
            },
            [t.ctaRoute, _],
        );
    if (null == E || o) return null;
    let v = g()(tD.nM, tD.Tq, tD.TS, tD.YB, { [tD._1]: p, [tD.vb]: f }),
        I = (0, c.jsxs)(c.Fragment, {
            children: [
                t.isDismissible &&
                    (0, c.jsx)("div", {
                        className: tD.Mh,
                        children: (0, c.jsx)(nB.J, {
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(), S();
                            },
                            "aria-label": B.intl.string(B.t.WAI6xu),
                        }),
                    }),
                (0, c.jsx)("div", {
                    className: g()(tD.zK, { [tD._1]: p }),
                    style: null != i ? { height: `${i}px` } : void 0,
                    children: (0, c.jsx)("img", {
                        ref: a,
                        src: E,
                        alt: t.title,
                        className: g()(tD.LN, { [tD.d5]: p }),
                    }),
                }),
                (0, c.jsx)("div", {
                    className: g()(tD.Ep, { [tD.Qq]: C }),
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
                                          helpdeskArticle: tQ.A.getArticleURL(es.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : t.body,
                            }),
                            C &&
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
    return (0, c.jsx)(nD.N, {
        theme: p ? void 0 : e3.NJ.DARK,
        children: (e) =>
            (0, c.jsx)(ni.L, {
                innerRef: l,
                onChange: h,
                threshold: 0,
                children: f
                    ? (0, c.jsx)(eK.D, { innerRef: l, onClick: () => j(null), className: g()(e, v), children: I })
                    : (0, c.jsx)("div", { ref: l, className: g()(e, v), children: I }),
            }),
    });
};
var nU = n(757036),
    nG = n(212739);
let nz = (0, y.mj)({ name: "2026-05-orbs-shop-upsell-banner", kind: "user", defaultConfig: !1, variations: { 1: !0 } });
var nV = n(462887),
    nW = n(765671),
    nK = n(303136),
    nY = n(792656),
    n$ = n(363195),
    nq = n(901123),
    nZ = n(314489),
    nX = n(909340);
let nJ = (e) => {
        let { category: t, tab: n } = e,
            { ref: s, width: l } = (0, nW.Ay)(),
            a = null != l && l <= 560,
            i = (0, h.bG)([n$.A], () => (0, nV.q)(n$.A.theme)),
            r = t?.skuId ?? "",
            { handleCardVisibilityChange: o } = (0, nu.Z)(r, "home", "marketing orbs upsell banner"),
            u = (0, A.uM)(),
            { analyticsLocations: m } = (0, C.Ay)(tM.A.COLLECTIBLES_SHOP_ORBS_UPSELL_BANNER),
            x = d.useCallback(() => {
                en.default.track(es.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: u?.sessionId,
                    sku_id: r,
                    page_type: n,
                    page_section: u?.pageSection,
                    page_category: u?.pageCategory,
                    tile_type: "PREMIUM_UPSELL_BANNER",
                    tile_position: String(u?.tilePosition),
                    cta_name: "nitro_home",
                    location_stack: m,
                });
            }, [u, m, r, n]);
        return (0, c.jsx)(C.f5, {
            value: m,
            children: (0, c.jsx)(nD.N, {
                theme: es.NJ8.DARKER,
                children: (e) =>
                    (0, c.jsx)(ni.L, {
                        innerRef: s,
                        onChange: o,
                        threshold: 0,
                        children: (0, c.jsxs)("div", {
                            ref: s,
                            className: g()(e, nZ.kL),
                            children: [
                                (0, c.jsx)(nK.A, { className: nZ.Ki, src: nX.A }),
                                (0, c.jsxs)("div", {
                                    className: nZ.Qs,
                                    children: [
                                        (0, c.jsx)(ed.D, {
                                            variant: "heading-xl/normal",
                                            color: "text-strong",
                                            className: nZ.R_,
                                            children: B.intl.string(B.t["50J7mj"]),
                                        }),
                                        (0, c.jsx)(J.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: nZ.rf,
                                            children: B.intl.format(B.t.NU5ZId, { monthlyOrbsAmount: 250 }),
                                        }),
                                        (0, c.jsxs)("div", {
                                            className: nZ.R$,
                                            children: [
                                                (0, c.jsx)(nY.A, {
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
                                                        x(), (0, nH.pX)(nq.BV.NITRO_HOME);
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, c.jsx)("img", {
                                    className: nZ.Qw,
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
    nQ = (e) => {
        let { index: t, wideBannerBlock: n, tab: s } = e,
            l = nz.useConfig({ location: "CollectiblesShopBannerSelector" }),
            a = (0, nU.L)(P.PremiumTypes.TIER_2),
            i = (0, nG.O)();
        if (l && !a && !i && s === M.G2.ORBS) {
            let e = L.A.getCategoryByStoreListingId(n.categoryStoreListingId);
            return (0, c.jsx)(nJ, { category: e, tab: s }, t);
        }
        return (0, c.jsx)(nF, { wideBannerBlock: n, tab: s }, t);
    },
    n0 = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: s, tab: l } = e,
            { noCache: a, includeUnpublished: i } = (0, eI.A)(),
            [r, o] = d.useState(!1),
            u = (0, A.uM)(),
            m = u?.sessionId ?? "";
        d.useEffect(() => {
            (0, ep.z)({
                sessionId: m,
                checkpoint: ep.t.SHOP_MOUNTED,
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
            } = (0, tC.y)(l, { noCache: a, includeUnpublished: i, logPerf: !0 }, { sessionId: m, tab: l }),
            f = d.useCallback(() => {
                p();
            }, [p]),
            C = d.useMemo(() => E.some((e) => e instanceof tb.p), [E])
                ? (0, c.jsx)(t_.A, { location: "CollectiblesShop" })
                : null;
        return (d.useEffect(() => {
            null != x ||
                h ||
                0 === E.length ||
                (0, ep.z)({
                    sessionId: m,
                    checkpoint: ep.t.SHOP_RENDERED,
                    tab: l,
                    unpublishedCategoriesShown: i,
                    cacheDisabled: a,
                });
        }, [x, h, E.length, i, a, m, l]),
        null != x)
            ? (0, c.jsx)(tm.h, { onRetry: f, errorOrigin: tm.A.SHOP_PAGE, errorMessage: x.message })
            : h || 0 === E.length
              ? (0, c.jsxs)("div", {
                    className: g()(tD.g4, tD.Of),
                    children: [
                        (0, c.jsx)(t7.A, { isLoading: h, handleTransition: t, tab: l }),
                        (0, c.jsx)(tF, { isLoading: h, handleTransition: t, categories: [] }),
                        (0, c.jsx)(t2, {
                            isLoading: h,
                            title: l === M.G2.ORBS ? B.intl.string(B.t.dFgeuZ) : B.intl.string(B.t.NSv5KV),
                            numVisibleItems: n,
                            tab: l,
                        }),
                    ],
                })
              : (0, c.jsx)(c.Fragment, {
                    children: E.map((e, a) =>
                        ((e, a, i) => {
                            if (null == e) return null;
                            let d = null,
                                u = !1;
                            switch (e.type) {
                                case th.g.HERO:
                                    d = (0, c.jsx)(
                                        t7.A,
                                        { isLoading: h, handleTransition: t, heroBlock: e, tab: l, badge: C },
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
                                                l === M.G2.ORBS ? B.intl.string(B.t.dFgeuZ) : B.intl.string(B.t.NSv5KV),
                                            isLoading: s,
                                            numVisibleItems: n,
                                            sortedSkuIds: m,
                                            buttonContainerClassName: a?.type === th.g.IMMERSIVE_BANNER ? tD.w : void 0,
                                            prioritizeUserDiscounts: l === M.G2.HOME,
                                            tab: l,
                                            orbsSupportedOnly: l === M.G2.ORBS,
                                        },
                                        i,
                                    );
                                    break;
                                case th.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, tE.En)(tx.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    d = (0, c.jsx)(nQ, { index: i, wideBannerBlock: e, tab: l }, i);
                                    break;
                                case th.g.FRAMES_BANNER:
                                    d = (0, c.jsx)(
                                        nF,
                                        {
                                            wideBannerBlock: tS.y.fromServer({
                                                type: th.g.WIDE_BANNER,
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
                                case th.g.FRAMES_PRODUCT_SHELF:
                                    d = (0, c.jsx)(t9, { block: e, handleTransition: t, tab: l }, i);
                                    break;
                                case th.g.SHELF:
                                    d = (0, c.jsx)(nS, { handleTransition: t, shelf: e, tab: l }, i);
                                    break;
                                case th.g.COUNTDOWN_TIMER:
                                    (d = (0, c.jsx)(ty, { countdownTimerBlock: e, isVisible: r }, i)), (u = !0);
                                    break;
                                case th.g.IMMERSIVE_BANNER:
                                    d = (0, c.jsx)(
                                        nt,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => o(!e) },
                                        i,
                                    );
                                    break;
                                case th.g.REWARD_HERO:
                                    d = (0, c.jsx)(nC, { isLoading: h, handleTransition: t, heroBlock: e, tab: l }, i);
                                    break;
                                case th.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, c.jsx)(
                                        tf,
                                        {
                                            blockType: e.type,
                                            children: (0, c.jsx)(nI, {
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
                            return (0, c.jsx)(
                                tf,
                                {
                                    blockType: e.type,
                                    children: (0, c.jsx)("div", {
                                        className: g()(tD.v1, tD.Of, { [tD.J1]: 0 === i || u }),
                                        children: d,
                                    }),
                                },
                                i,
                            );
                        })(e, a > 0 ? E[a - 1] : null, a),
                    ),
                });
    },
    n1 = (e) => {
        let { handleTransition: t, tab: n, transitionState: s } = e,
            l = d.useRef(null),
            { handleScroll: a } = ea(l, n),
            i = (0, eL.U)(),
            r = (0, A.uM)(),
            [o, u] = d.useState(M.md),
            [g, m] = d.useState(!1);
        return (
            d.useEffect(() => {
                if (null != l.current) {
                    let e = () => {
                            if (null == l.current) return;
                            let e = l.current.getDistanceFromBottom();
                            o >= 36 ? m(e < 20) : e <= 200 && u((e) => e + M.md);
                        },
                        t = l.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [l, o, u, m]),
            (0, c.jsx)(Z.Ch, {
                className: tD.OW,
                ref: l,
                onScroll: a,
                children: (0, c.jsxs)("div", {
                    className: tD.bx,
                    children: [
                        (0, c.jsxs)("div", {
                            className: tD.rb,
                            children: [
                                (0, c.jsx)(n0, {
                                    handleTransition: t,
                                    numVisibleItems: o,
                                    isFetchingCategories: i,
                                    tab: n,
                                }),
                                n !== M.G2.CATALOG &&
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
                                                        en.default.track(es.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: r?.sessionId,
                                                            page_type: n,
                                                            page_category: n === M.G2.HOME ? void 0 : r?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, c.jsx)(nP, { peaking: g, transitioning: s === M.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var n2 = n(154323),
    n5 = n(295811),
    n4 = n(870216);
let n9 = { "Any:personalization-header": t1 },
    n7 = { [eo.b.SHOP_HOME]: n9 },
    n3 = { "1465939725649973269": n9, "1478495181551440044": n9 },
    n6 = function () {
        return (0, c.jsx)("div", {
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
        });
    },
    n8 = { prioritizedCurrency: eA.Hi.ORBS };
function se(e) {
    let { tab: t } = e,
        [n, s, l] = (0, O.yK)([n4.A], () => [n4.A.getLayout(t), n4.A.isFetchingLayout(t), n4.A.getLayoutFetchError(t)]),
        a = (0, O.bG)([n2.A], () => n2.A.get("shop_include_unpublished")),
        i = (0, O.bG)([L.A], () => L.A.skipNumCategories),
        r = d.useMemo(() => {
            let e = {};
            return !0 === a && (e.include_unpublished = !0), null != i && i > 0 && (e.skip_num_categories = i), e;
        }, [a, i]),
        o = null == n && !s && l?.status !== 404 && l?.status !== 429;
    if (
        (d.useEffect(() => {
            o && (0, nd.T2)({ tab: t });
        }, [o, t]),
        null == n)
    )
        return t !== z.HOME || o || s
            ? null
            : (0, c.jsx)(er.Z_, {
                  tenantId: es.FYj,
                  templateId: eo.b.SHOP_HOME,
                  requestParams: r,
                  overrides: n7[eo.b.SHOP_HOME],
              });
    let u = (0, c.jsx)(er.Qs, { tenantId: es.FYj, layoutId: n, overrides: n3[n] });
    return (0, c.jsxs)(c.Fragment, {
        children: [
            t === z.ORBS && (0, c.jsx)(n6, {}),
            t === z.ORBS ? (0, c.jsx)(eA.v3.Provider, { value: n8, children: u }) : u,
        ],
    });
}
function st(e) {
    let { url: t } = e,
        [n, s] = d.useState(null);
    return (d.useEffect(() => {
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
        : (0, c.jsx)(er.Ay, { layout: n });
}
let sn = (e) => {
    let { handleTransition: t, tab: n, transitionState: s } = e,
        l = (0, A.uM)(),
        a = (0, O.bG)([n5.A], () => n5.A.getShopLayoutUrlOverride()),
        i = d.useRef(null),
        { handleScroll: r } = ea(i, n),
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
                            null != a && "" !== a ? (0, c.jsx)(st, { url: a }) : (0, c.jsx)(se, { tab: n }),
                            n !== z.CATALOG &&
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
                                                    en.default.track(es.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: l?.sessionId,
                                                        page_type: n,
                                                        page_category: n === z.HOME ? void 0 : l?.pageCategory,
                                                        cta_name: "browse the shop button",
                                                    });
                                            },
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, c.jsx)(nP, { peaking: m, transitioning: s === M.Pf.OUT }),
                ],
            }),
        })
    );
};
var ss = n(256067);
let sl = () =>
        (0, c.jsxs)("div", {
            className: ss.z,
            children: [
                (0, c.jsx)("img", {
                    className: ss.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: B.intl.string(B.t["p8+qtU"]),
                }),
                (0, c.jsx)(ed.D, { variant: "heading-xl/semibold", children: B.intl.string(B.t["p8+qtU"]) }),
                (0, c.jsx)(J.E, { variant: "text-md/medium", children: B.intl.string(B.t.UEiyvs) }),
            ],
        }),
    sa = [M.G2.HOME, M.G2.ORBS];
function si(e) {
    let {
            tab: t,
            categories: n,
            transitionToTab: s,
            transitionState: l,
            updateAnalyticsState: a,
            refreshCategories: i,
        } = e,
        r = (0, O.bG)([L.A, Y.A], () =>
            null != L.A.error
                ? `shop load fetch categories error: ${L.A.error.message}`
                : null != Y.A.claimError
                  ? `shop load claim error: ${Y.A.claimError.message}`
                  : null != Y.A.fetchError
                    ? `shop load fetch purchase error: ${Y.A.fetchError.message}`
                    : void 0,
        );
    !(function (e) {
        let t = (0, O.bG)([v.default], () => v.default.getCurrentUser()),
            { noCache: n, includeUnpublished: s } = (0, eI.A)();
        d.useEffect(() => {
            null != e &&
                K.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: s.toString(),
                    },
                });
        }, [e, t, n, s]);
    })(r);
    let o = (0, O.bG)([V.Ay], () => V.Ay.useReducedMotion),
        u = (0, G.W6)(),
        g = (0, G.zy)(),
        [m] = d.useState(() => {
            if ("POP" === u.action) {
                let e;
                return (e = eN), (eN = null), e ?? void 0;
            }
        }),
        [h, x] = d.useState(m),
        [E, p] = d.useState(null == m),
        f = d.useMemo(() => {
            let e = new URLSearchParams(g.search).get(M.P1);
            return null != e && "" !== e ? e : void 0;
        }, [g.search]),
        C = d.useMemo(
            () =>
                n.filter(
                    (e) =>
                        !M.MS.some((t) => {
                            let { categorySkuId: n } = t;
                            return n === e.skuId;
                        }),
                ),
            [n],
        ),
        b = (0, W.U)("CollectiblesContent"),
        S = (0, $.a)("CollectiblesContent"),
        _ = d.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: l,
                    isInternalShopDeeplink: i,
                    isOrbsExclusive: r,
                } = e;
                if ((a(t, n), S && null != n && i && !r))
                    return void u.push(es.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n));
                let c = l && !o,
                    d = r ? M.G2.ORBS : M.G2.CATALOG;
                x(n), p(!i), s(d, c);
            },
            [o, s, a, S, u],
        ),
        { searchError: j } = (0, q.S)();
    return null != j
        ? (0, c.jsx)(sl, {})
        : null != r
          ? (0, c.jsx)(tm.h, { onRetry: i, errorMessage: r, errorOrigin: tm.A.SHOP_PAGE })
          : t === M.G2.HOME && b
            ? (0, c.jsx)(sn, { tab: z.HOME, transitionState: l, handleTransition: _ })
            : t === M.G2.ORBS && b
              ? (0, c.jsx)(sn, { tab: z.ORBS, transitionState: l, handleTransition: _ })
              : sa.includes(t)
                ? (0, c.jsx)(n1, { handleTransition: _, tab: t, transitionState: l })
                : (0, c.jsx)(tu, {
                      tab: t,
                      categories: C,
                      initialCategoryId: h ?? f,
                      showFilterInitially: E && null == f,
                      onUnmount: () => {
                          x(void 0), p(!0);
                      },
                  });
}
var sr = n(956123),
    so = n(766075),
    sc = n(893489);
let sd = { pink: "pinkCountdown" },
    su = d.memo(function (e) {
        let { message: t, onClick: n, countdownEndDate: s, variant: l } = e,
            a = d.useMemo(() => {
                if (null == s) return null;
                let e = s instanceof Date ? s : new Date(s);
                return isNaN(e.getTime()) ? null : e;
            }, [s]),
            i = (0, tN.A)(a ?? 0, 1e3, void 0, null == a);
        if (null != a && Object.values(i).every((e) => 0 === e)) return null;
        let r = null != l ? sc[l] : void 0,
            o = null != l ? sc[sd[l]] : void 0;
        return (0, c.jsx)(eK.D, {
            className: g()(sc.nagBar, r),
            onClick: n,
            "aria-label": B.intl.string(B.t["wjws+K"]),
            children: (0, c.jsxs)("div", {
                className: sc.content,
                children: [
                    (0, c.jsx)(J.E, {
                        variant: "text-md/medium",
                        color: "text-overlay-light",
                        className: sc.message,
                        children: t,
                    }),
                    null != a && (0, c.jsx)(tk, { endDate: a, size: "md", className: o, showSeconds: !0 }),
                ],
            }),
        });
    });
var sg = n(870308),
    sm = n(650583);
function sh(e) {
    let { children: t, shouldAddEventListener: n, onClose: s } = e,
        l = (0, x.useHasAnyModalOpen)();
    return (
        d.useEffect(() => {
            if (n && !l) return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            function e(e) {
                e.key === sm.N$.Escape && s();
            }
        }, [n, l, s]),
        t
    );
}
let sx = function (e) {
    let { tab: t = M.G2.HOME } = e;
    (0, _.P)(S.a), (0, w.g)();
    let n = (0, f.A)((0, m.A)()),
        s = (0, h.bG)([v.default], () => v.default.getCurrentUser());
    (0, j.pE)();
    let l = (0, eB.yB)("CollectiblesShop"),
        { onClose: a } = (function () {
            let { search: e } = (0, G.zy)(),
                t = (0, G.g)(),
                n = d.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                s = null != n ? parseInt(n, 10) : null;
            return {
                onClose: d.useCallback(() => {
                    if (0 === s) {
                        (0, nH.aX)(), (0, so.openUserSettings)();
                        return;
                    }
                    (0, nH.EL)() ? (0, nH.aX)() : (0, nH.pX)(es.BVt.APP);
                }, [s]),
                source: s,
                ...t,
            };
        })(),
        { currentTab: i, hasFilters: r } = (0, U.v)(),
        o = d.useMemo(() => (t === M.G2.HOME && null != i && r() ? i : t), [t, i, r]),
        { categories: u, refreshCategories: y } = (0, H.Ay)({ logPerf: !0 }, { sessionId: n, tab: o }),
        z = d.useMemo(() => [...u.values()], [u]),
        [V, W] = d.useState(),
        K = (0, h.bG)([L.A], () => L.A.getCategory(V)?.name),
        [Y, $] = d.useState();
    (0, ey.XU)(n);
    let q = d.useCallback((e, t) => {
            $(e), W(t);
        }, []),
        { selectedTab: Z, transitionState: X, transitionToTab: J } = (0, F.o)(o);
    (0, b.HU)({ location: B.intl.string(B.t.pWG4ze) }), (0, N.uS)(n, Z, K, X, Y), (0, N.N0)(Z, s);
    let { dismissShopButtonDC: Q } = (0, sg.A)();
    d.useEffect(() => {
        Q();
    }, [Q]),
        d.useEffect(() => {
            (0, p.I)(es.BVt.COLLECTIBLES_SHOP);
        }, []);
    let ee = d.useRef(null),
        et = d.useRef(null);
    (0, E.tj)(ee);
    let en = (0, x.useHasAnyModalOpen)();
    d.useEffect(() => {
        et.current?.focus();
    }, []),
        (0, eB.gB)();
    let { analyticsLocations: el } = (0, N.lC)(Z),
        ea = (function (e, t) {
            let n = (0, O.bG)([T.A], () => T.A.getUserDiscount(P.tU)),
                s = (0, O.bG)([k.default], () => k.default.locale),
                l = R.useConfig({ location: t }).enabled;
            if (d.useMemo(() => null != n && l && e !== M.G2.ORBS, [n, l, e])) {
                let e =
                    null != n && null != n.expiresAt
                        ? new Date(n.expiresAt).toLocaleDateString(s, { day: "numeric", month: "numeric" })
                        : void 0;
                return { type: 0, countdownEndDate: n?.expiresAt, message: B.intl.format(B.t.RCo9MF, { date: e }) };
            }
        })(Z, "collectibles_shop");
    return (0, c.jsx)(C.f5, {
        value: el,
        children: (0, c.jsx)(A.R9, {
            newValue: { sessionId: n, pageCategory: K, pageSize: M.l5 },
            children: (0, c.jsx)(I.iM, {
                tab: Z,
                children: (0, c.jsx)(sh, {
                    onClose: a,
                    shouldAddEventListener: !1,
                    children: (0, c.jsxs)("div", {
                        className: g()(eS.bx, { [eB.jP]: l }),
                        ref: et,
                        inert: en,
                        tabIndex: -1,
                        children: [
                            (0, c.jsx)(sr.G, { handleTransition: J, selectedTab: Z }),
                            null != ea &&
                                ea.type === D.COUNTDOWN &&
                                (0, c.jsx)(su, {
                                    message: ea.message,
                                    onClick: () => J(M.G2.HOME),
                                    variant: "pink",
                                    countdownEndDate: ea.countdownEndDate,
                                }),
                            (0, c.jsx)("div", {
                                className: g()(eS.td, {
                                    [eS.RK]: X === M.Pf.VISIBLE,
                                    [eS.in]: X === M.Pf.IN,
                                    [eS.FD]: X === M.Pf.OUT,
                                }),
                                children: (0, c.jsx)(si, {
                                    tab: Z,
                                    refreshCategories: y,
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
