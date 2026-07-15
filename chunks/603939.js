n.r(t), n.d(t, { default: () => lE });
var l,
    s,
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
    f = n(444927),
    p = n(688810),
    C = n(726249),
    b = n(475073),
    S = n(611924),
    j = n(758445),
    _ = n(561794),
    v = n(287809),
    A = n(440938),
    L = n(590180),
    I = n(161918),
    N = n(945810);
let O = (0, N.mj)({
    name: "2026-07-collectibles-promotion-endpoint-reference",
    kind: "user",
    defaultConfig: { useEndpoint: !1 },
    variations: { 0: { useEndpoint: !1 }, 1: { useEndpoint: !0 } },
});
var k = n(790297),
    T = n(17928),
    y = n(773669),
    R = n(248352);
let M = (0, N.mj)({
    name: "2026-01-valentines-day-drop",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 } },
});
var P = n(758836),
    B = n(202541),
    D = n(375708),
    H = n(841702),
    F = n(621653),
    w = n(983545),
    U = n(23161);
n(323874), n(14289), n(35956), n(321073);
var G = n(873263),
    z = (((l = {}).HOME = "home"), (l.CATALOG = "catalog"), (l.ORBS = "orbs"), l),
    V = n(775602),
    W = n(578797),
    Y = n(38405),
    K = n(4227),
    $ = n(50920),
    q = n(856686),
    Z = n(689175),
    X = n(364522),
    J = n(834730),
    Q = n(821609),
    ee = n(783977),
    et = n(59520),
    en = n(174459),
    el = n(652215);
function es(e, t, n, l) {
    let { scrollTop: s = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = l;
    if (i > 0) {
        let l = (s + a) / i;
        l > 0 &&
            en.default.track(e, {
                scroll_visible_percent: l,
                source: n,
                page_height: Math.round(i),
                page_width: Math.round(r),
                page_session_id: t,
            });
    }
}
let ea = (e, t) => {
    let { analyticsSource: n } = (0, k.lC)(t),
        l = (0, et.I)(es, 5e3, [], { trailing: !0 }),
        s = (0, A.uM)(),
        a = s?.sessionId;
    return {
        handleScroll: c.useCallback(() => {
            if (null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    l(el.HAw.COLLECTIBLES_SHOP_SCROLLED, null != a ? a : "", n, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth,
                    });
            }
        }, [l, n, a, e]),
    };
};
var ei = n(354328),
    er = n(356118),
    eo = n(619835),
    ec = n(641150),
    ed = n(297264);
function eu() {
    let { itemTypeFilters: e, searchQuery: t } = (0, U.v)((e) => e),
        { totalCount: n, isFetchingResults: l } = (0, q.S)(),
        s = (0, U.v)((e) => e.hasFilters()),
        a = c.useCallback(() => {
            if (!s) return "";
            if (l) return D.intl.string(D.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return D.intl.format(D.t.KJMJOz, { count: n, search: e });
            }
            return 1 === e.size && e.has(ec.q.AVATAR_DECORATION)
                ? D.intl.format(D.t.s1UzGQ, { count: n })
                : 1 === e.size && e.has(ec.q.NAMEPLATE)
                  ? D.intl.format(D.t.ZWGN9T, { count: n })
                  : 1 === e.size && e.has(ec.q.PROFILE_EFFECT)
                    ? D.intl.format(D.t["v/7apu"], { count: n })
                    : 1 === e.size && e.has(ec.q.PROFILE_FRAME)
                      ? D.intl.format(D.t.eu4eRy, { count: n })
                      : 1 === e.size && e.has(ec.q.BUNDLE)
                        ? D.intl.format(D.t.fZ1rdk, { count: n })
                        : D.intl.format(D.t["/rPvmQ"], { count: n });
        }, [e, n, s, t, l]);
    return (0, o.jsx)(ed.D, { variant: "heading-lg/semibold", children: a() });
}
var eg = n(172218),
    em = n(932793),
    eh = n(940980),
    ex = n(511265),
    eE = n(206077),
    ef = n(100057),
    ep = n(828515),
    eC = n(484469),
    eb = n(215688),
    eS = n(647685),
    ej = n(10);
let e_ = () =>
    (0, o.jsx)("div", {
        className: ej.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, o.jsxs)(
                "div",
                {
                    className: eS.vY,
                    children: [
                        (0, o.jsx)("div", { className: u()(eb.sW, ej.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, o.jsx)(eC.A, {}, t)),
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
        n = (0, m.bG)([v.default], () => v.default.getCurrentUser()),
        l = (0, eE.X)(t.products),
        s = (0, ex.p)()(l),
        a = (0, eh.W)("CollectiblesCatalogContent");
    return null == n || 0 === s.length
        ? null
        : (0, o.jsx)("div", {
              className: eS.vY,
              children: s.map((e, t) =>
                  (0, o.jsx)(
                      A.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, o.jsx)(
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
        [n, l] = c.useState(!1),
        s = (0, eg.K)(function (e) {
            l(e);
        }, 0.15),
        a = (0, G.W6)(),
        i = (0, $.a)("CollectiblesCatalogContent"),
        r = (0, A.uM)(),
        d = c.useCallback(() => {
            en.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: r?.sessionId,
                sku_id: t.skuId,
                page_type: P.G2.CATALOG,
                page_section: r?.pageSection,
                page_category: t.name,
                page_index: r?.pageIndex,
                page_size: r?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (eN = t.skuId),
                a.push(el.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
        }, [r?.pageIndex, r?.pageSection, r?.pageSize, r?.sessionId, t.name, t.skuId, a]);
    return (0, o.jsxs)("div", {
        className: eS.EF,
        ref: s,
        children: [(0, o.jsx)(ep.A, { category: t, onSelect: i ? d : void 0 }), (0, o.jsx)(eO, { category: t })],
    });
}
function eT(e) {
    let { categories: t, setCategoryRef: n, currentPage: l, handlePageChange: s, initialCategoryId: a } = e,
        i = (0, A.uM)(),
        r = (0, eL.U)(),
        d = i?.sessionId ?? "",
        { noCache: u, includeUnpublished: g } = (0, eI.A)(),
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
        let t = Math.floor(e / P.l5) + 1;
        t !== l && s(t), (h.current = a);
    }, [a, m, s, l]);
    let x = c.useMemo(() => {
        let e = (l - 1) * P.l5;
        return m.slice(e, e + P.l5);
    }, [m, l]);
    return (c.useEffect(() => {
        (0, ef.z)({
            sessionId: d,
            checkpoint: ef.t.SHOP_MOUNTED,
            tab: P.G2.CATALOG,
            unpublishedCategoriesShown: g,
            cacheDisabled: u,
        });
    }, []),
    c.useEffect(() => {
        r ||
            0 === x.length ||
            (0, ef.z)({
                sessionId: d,
                checkpoint: ef.t.SHOP_RENDERED,
                tab: P.G2.CATALOG,
                unpublishedCategoriesShown: g,
                cacheDisabled: u,
            });
    }, [d, g, u, r, x.length]),
    r)
        ? (0, o.jsx)(e_, {})
        : (0, o.jsxs)("div", {
              className: eS.LZ,
              children: [
                  x.map((e, t) =>
                      (0, o.jsx)(
                          "div",
                          {
                              ref: (t) => n(e.skuId, t),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": D.intl.formatToPlainString(D.t.FNtLb3, { category: e.name }),
                              children: (0, o.jsx)(A.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, o.jsx)(ek, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, o.jsx)("div", {
                      className: eS.Ej,
                      children: (0, o.jsx)(em.m, {
                          currentPage: l,
                          totalCount: m.length,
                          pageSize: P.l5,
                          onPageChange: s,
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
        l = (0, A.uM)(),
        s = (0, eB.yB)("CollectiblesSortSelect"),
        a = n(),
        i = c.useMemo(() => P.QB.filter((e) => e.sortType !== eM.$.RELEVANCE || a), [a]),
        r = c.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === eM.$.RECENCY
                ? { label: D.intl.string(D.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === eM.$.PRICE
                  ? n === eR.A.ASC
                      ? { label: D.intl.string(D.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: D.intl.string(D.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === eM.$.RELEVANCE
                    ? { label: D.intl.string(D.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: D.intl.string(D.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        d = c.useCallback(
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
        g = c.useCallback(
            (e) => {
                let n = r(d(e));
                en.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_section: l?.pageSection,
                    page_category: l?.pageCategory,
                    page_index: l?.pageIndex,
                    page_size: l?.pageSize,
                    cta_name: `sort by ${n.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(d(e));
            },
            [l, r, d, t],
        ),
        m = r(e);
    return (0, o.jsx)("div", {
        className: u()(eD.k, { [eB.jP]: s }),
        children: (0, o.jsx)(eP.l, {
            label: D.intl.string(D.t.uaX705),
            hideLabel: !0,
            options: i.map(r),
            onSelectionChange: g,
            value: m.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var eF =
        (((s = {}).BLUE = "COLLECTIBLES_COLOR_BLUE"),
        (s.GREEN = "COLLECTIBLES_COLOR_GREEN"),
        (s.PINK = "COLLECTIBLES_COLOR_PINK"),
        (s.RED = "COLLECTIBLES_COLOR_RED"),
        (s.YELLOW = "COLLECTIBLES_COLOR_YELLOW"),
        (s.ORANGE = "COLLECTIBLES_COLOR_ORANGE"),
        (s.PURPLE = "COLLECTIBLES_COLOR_PURPLE"),
        (s.BROWN = "COLLECTIBLES_COLOR_BROWN"),
        (s.BLACK = "COLLECTIBLES_COLOR_BLACK"),
        (s.WHITE = "COLLECTIBLES_COLOR_WHITE"),
        s),
    ew =
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
    eU = n(990078),
    eG = n(150934),
    ez = n(508770),
    eV = n(602853),
    eW = n(661531),
    eY = n(939249),
    eK = n(947641),
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
    e9 = n(918467),
    e7 = n(7250),
    e3 = n(13875),
    e6 = n(818348),
    e8 = n(764915);
function te() {
    var e;
    let t,
        { onToggleOrbEligible: n, orbEligible: l, reset: s, hasFilters: a } = (0, U.v)(),
        i = a(),
        r = (0, e3.sk)("FilterBar"),
        d = (0, A.uM)(),
        g = c.useRef(null),
        m = ((e = el.FYj), (t = (0, T.bG)([e9.A], () => e9.A.getPromotionsForApplication(e))), t?.[0] ?? null),
        [h, x] = c.useState(!1),
        E = c.useMemo(() => P._6.filter((e) => r || e !== ec.q.PROFILE_FRAME), [r]),
        f = c.useCallback(
            (e) => {
                en.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: d?.sessionId,
                    page_section: d?.pageSection,
                    page_category: d?.pageCategory,
                    page_index: d?.pageIndex,
                    page_size: d?.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [d],
        );
    return (0, o.jsxs)("div", {
        className: e8.kT,
        children: [
            (0, o.jsxs)("div", {
                className: u()(e8.KZ, e8.YG),
                children: [
                    (0, o.jsx)("div", {
                        ref: g,
                        tabIndex: -1,
                        children: (0, o.jsx)(J.E, {
                            variant: "text-md/semibold",
                            className: e8.hr,
                            children: D.intl.string(D.t.Qk6r1a),
                        }),
                    }),
                    E.map((e) => (0, o.jsx)(tt, { filter: e, trackFilterAction: f }, e)),
                    (0, o.jsx)(eG.S, {
                        checked: l,
                        onChange: () => {
                            f(`filter orb eligible ${!1 === l ? "on" : "off"}`), n();
                        },
                        label: D.intl.string(D.t.AHHHgG),
                    }),
                    null != m &&
                        (0, o.jsx)(eG.S, {
                            checked: h,
                            onChange: () => {
                                f(`filter offer eligible ${!1 === h ? "on" : "off"}`), x((e) => !e);
                            },
                            label: D.intl.string(D.t.hY8Ft1),
                        }),
                ],
            }),
            (0, o.jsx)(tn, { trackFilterAction: f }),
            (0, o.jsx)(ta, { trackFilterAction: f }),
            i &&
                (0, o.jsx)(Q.$, {
                    variant: "secondary",
                    onClick: () => {
                        f("filter reset"), s(), requestAnimationFrame(() => g.current?.focus());
                    },
                    text: D.intl.string(D.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function tt(e) {
    let { filter: t, trackFilterAction: n } = e,
        l = {
            [ec.q.AVATAR_DECORATION]: D.intl.string(D.t.dRZYNE),
            [ec.q.PROFILE_EFFECT]: D.intl.string(D.t["1cNjtx"]),
            [ec.q.NAMEPLATE]: D.intl.string(D.t.V68Fqz),
            [ec.q.PROFILE_FRAME]: D.intl.string(D.t.ecTJkR),
            [ec.q.BUNDLE]: D.intl.string(D.t.FYFpps),
        },
        { itemTypeFilters: s, onToggleItemType: a } = (0, U.v)(),
        i = (0, o.jsx)(eG.S, {
            checked: s.has(t),
            onChange: () => {
                let e = l[t]?.toLowerCase() != null ? l[t].toLowerCase() : t;
                n(`filter item type ${e} ${!1 === s.has(t) ? "on" : "off"}`), a(t);
            },
            label: l[t] ?? "",
        });
    return t === ec.q.PROFILE_FRAME
        ? (0, o.jsxs)("div", { className: e8.Ym, children: [i, (0, o.jsx)(ez.E, { type: "new" })] })
        : i;
}
function tn(e) {
    let { trackFilterAction: t } = e,
        n = c.useMemo(
            () => [
                { color: "#9B59B6", label: D.intl.string(D.t.kqUD4P), enum: eF.PURPLE },
                { color: "#3498DB", label: D.intl.string(D.t.qQTRae), enum: eF.BLUE },
                { color: "#2ECC71", label: D.intl.string(D.t["f/Ylk6"]), enum: eF.GREEN },
                { color: "#A0522D", label: D.intl.string(D.t["Sd/BMa"]), enum: eF.BROWN },
                { color: "#F1C40F", label: D.intl.string(D.t["0fevYz"]), enum: eF.YELLOW },
            ],
            [],
        ),
        l = c.useMemo(
            () => [
                { color: "#E67E22", label: D.intl.string(D.t.ZE7weD), enum: eF.ORANGE },
                { color: "#E74C3C", label: D.intl.string(D.t.hKJGOM), enum: eF.RED },
                { color: "#EC407A", label: D.intl.string(D.t.HvLEGM), enum: eF.PINK },
                { color: "#FFFFFF", label: D.intl.string(D.t["CB+lNO"]), enum: eF.WHITE },
                { color: "#262626", label: D.intl.string(D.t["dMey+v"]), enum: eF.BLACK },
            ],
            [],
        );
    return (0, o.jsxs)("div", {
        className: e8.KZ,
        children: [
            (0, o.jsx)(J.E, { variant: "text-md/semibold", className: e8.hr, children: D.intl.string(D.t.K1xGoG) }),
            (0, o.jsx)(tl, { colors: n, trackFilterAction: t }),
            (0, o.jsx)(tl, { colors: l, trackFilterAction: t }),
        ],
    });
}
function tl(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: l, onToggleColor: s } = (0, U.v)();
    return (0, o.jsx)("div", {
        className: e8.OW,
        children: t.map((e) => {
            let { color: t, label: a, enum: i } = e;
            return (0, o.jsx)(
                ts,
                { color: t, label: a, enum: i, isToggled: l.has(i), onToggleColor: s, trackFilterAction: n },
                i,
            );
        }),
    });
}
function ts(e) {
    let { color: t, label: n, enum: l, isToggled: s, onToggleColor: a, trackFilterAction: i } = e,
        r = (0, eV.r)(eW.A.unsafe_rawColors.WHITE).hex(),
        c = (0, eV.r)(eW.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, o.jsx)(
        eU.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, o.jsx)(
                eY.D,
                {
                    className: u()(e8.n1, { [e8.lx]: s }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": s,
                    onClick: () => {
                        i(`filter color ${n.toLowerCase()} ${!s ? "on" : "off"}`), a(l);
                    },
                    children:
                        s &&
                        (0, o.jsx)("div", {
                            className: e8.oE,
                            children: (0, o.jsx)(eK.r, {
                                size: "xs",
                                color: (0, e7.j)({ backgroundColor: t, colors: [r, c] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
let ta = (e) => {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: l } = (0, U.v)(),
        s = (0, e4.Ay)() === e6.NJ.DARK,
        a = c.useCallback(
            (e) => {
                if (n.has(e) || s) return "control-primary-text-default";
            },
            [n, s],
        ),
        i = c.useCallback((e) => (n.has(e) || s ? eW.A.colors.WHITE : eW.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, s]),
        r = c.useMemo(
            () => [
                {
                    name: D.intl.string(D.t.aVBOKh),
                    icon: (0, o.jsx)(e$.E, { size: "xs", color: i(ew.ANIME) }),
                    enum: ew.ANIME,
                },
                {
                    name: D.intl.string(D.t["3WoZBc"]),
                    icon: (0, o.jsx)(eq._, { size: "xs", color: i(ew.GAMING) }),
                    enum: ew.GAMING,
                },
                {
                    name: D.intl.string(D.t.yuEmLj),
                    icon: (0, o.jsx)(eZ.C, { size: "xs", color: i(ew.CUTE_COZY) }),
                    enum: ew.CUTE_COZY,
                },
                {
                    name: D.intl.string(D.t.mMvCHo),
                    icon: (0, o.jsx)(eX.L, { size: "xs", color: i(ew.SCI_FI) }),
                    enum: ew.SCI_FI,
                },
                {
                    name: D.intl.string(D.t.TlhOQC),
                    icon: (0, o.jsx)(eJ.L, { size: "xs", color: i(ew.FOOD_DRINKS) }),
                    enum: ew.FOOD_DRINKS,
                },
                {
                    name: D.intl.string(D.t["4IaUIM"]),
                    icon: (0, o.jsx)(eQ.f, { size: "xs", color: i(ew.FANTASY) }),
                    enum: ew.FANTASY,
                },
                {
                    name: D.intl.string(D.t["w0nSG/"]),
                    icon: (0, o.jsx)(e0.N, { size: "xs", color: i(ew.ANIMALS_PETS) }),
                    enum: ew.ANIMALS_PETS,
                },
                {
                    name: D.intl.string(D.t.cJng7v),
                    icon: (0, o.jsx)(e1.p, { size: "xs", color: i(ew.NATURE) }),
                    enum: ew.NATURE,
                },
                {
                    name: D.intl.string(D.t["5mUvyM"]),
                    icon: (0, o.jsx)(e2.T, { size: "xs", color: i(ew.MOVIES_TV_SHOWS) }),
                    enum: ew.MOVIES_TV_SHOWS,
                },
                {
                    name: D.intl.string(D.t.MB9H5Z),
                    icon: (0, o.jsx)(e5.e, { size: "xs", color: i(ew.DARK_MOODY) }),
                    enum: ew.DARK_MOODY,
                },
            ],
            [i],
        );
    return (0, o.jsxs)("div", {
        className: e8.KZ,
        children: [
            (0, o.jsx)(J.E, { variant: "text-md/semibold", className: e8.hr, children: D.intl.string(D.t.t1Ztrp) }),
            (0, o.jsx)("div", {
                className: e8.Ot,
                children: r.map((e) => {
                    let { name: s, icon: i, enum: r } = e;
                    return (0, o.jsxs)(
                        eY.D,
                        {
                            className: u()(e8.w4, { [e8.C7]: n.has(r) }),
                            "aria-label": s,
                            "aria-pressed": n.has(r),
                            onClick: () => {
                                let e = n.has(r);
                                t(`filter theme ${s.toLowerCase()} ${!e ? "on" : "off"}`), l(r);
                            },
                            children: [i, (0, o.jsx)(J.E, { color: a(r), variant: "text-md/medium", children: s })],
                        },
                        s,
                    );
                }),
            }),
        ],
    });
};
var ti = n(687971);
function tr() {
    return (0, o.jsxs)("div", {
        className: ti.k,
        children: [
            (0, o.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: D.intl.string(D.t.oezC3x),
                className: ti._,
            }),
            (0, o.jsx)(ed.D, { variant: "heading-xl/semibold", children: D.intl.string(D.t.oezC3x) }),
            (0, o.jsx)(J.E, { variant: "text-md/medium", children: D.intl.string(D.t["Tc/Ndl"]) }),
        ],
    });
}
var to = n(528096);
let tc = { flattenProductVariants: !0 };
function td(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: l } = e,
        s = (0, A.uM)(),
        a = s?.sessionId ?? "",
        { noCache: i, includeUnpublished: r } = (0, eI.A)(),
        d = (0, eh.W)("CollectiblesFilterResults"),
        g = (0, m.bG)([v.default], () => v.default.getCurrentUser()),
        { skus: h, currentPage: x, totalCount: E, isFetchingResults: f } = (0, q.S)(),
        p = (0, m.yK)([L.A], () => L.A.getProductsBySkus(h)),
        C = c.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        b = h?.join("");
    c.useEffect(() => {
        C();
    }, [b, C]);
    let S = (0, ex.p)(),
        j = c.useMemo(() => S(p), [S, p]);
    c.useEffect(() => {
        t ||
            (0, ef.z)({
                sessionId: a,
                checkpoint: ef.t.SHOP_RENDERED,
                tab: l,
                unpublishedCategoriesShown: r,
                cacheDisabled: i,
            });
    }, [a, r, i, t, l]);
    let _ = c.useRef(null),
        { setQueryPageSize: I, setQueryPageOffset: N, queryPageSize: O } = (0, U.v)(),
        [k, T] = c.useState(!1),
        y = t || f || null == g;
    c.useEffect(() => {
        y ? T(!1) : j.length > 0 && T(!0);
    }, [y, j.length]);
    let R = O > 0 && !y && 0 === j.length;
    c.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == _.current || I(Math.floor(5 * getComputedStyle(_.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != _.current) return e.observe(_.current), () => e.disconnect();
    }, [I]);
    let M = c.useCallback(
        (e) => {
            en.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: s?.sessionId,
                page_section: s?.pageSection,
                page_category: s?.pageCategory,
                page_index: e,
                page_size: O,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                N((e - 1) * O);
        },
        [s, O, N],
    );
    return (0, o.jsxs)(eA.v3.Provider, {
        value: tc,
        children: [
            (0, o.jsxs)("div", {
                className: u()({ [to.oE]: R }),
                children: [
                    R && (0, o.jsx)(tr, {}),
                    (0, o.jsxs)("div", {
                        className: u()(to.ZE, { [to.Kp]: k }),
                        ref: _,
                        children: [
                            y && [...Array(O)].map((e, t) => (0, o.jsx)(eC.A, {}, t)),
                            !y &&
                                j.map((e, t) =>
                                    null == L.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, o.jsx)(
                                              A.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, o.jsx)(
                                                      ev.A,
                                                      {
                                                          skuId: e.skuId,
                                                          hideStaticBundleBackgroundAsset: !0,
                                                          prioritizedCurrency: d ? eA.Hi.FIAT : void 0,
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
                    className: to.Ej,
                    children: (0, o.jsx)("div", {
                        children: (0, o.jsx)(em.m, {
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
var tu = n(832179);
function tg(e) {
    let { tab: t, categories: n, initialCategoryId: l, showFilterInitially: s = !0, onUnmount: a } = e,
        i = (0, ei.A)("shop_include_unpublished");
    (0, U.S)(i);
    let r = c.useRef(null),
        { handleScroll: d } = ea(r, t),
        u = (0, W.U)("Shop Browse"),
        { setCategoryRef: g, handleScrollToCategory: m } = (0, ey.k0)(r.current),
        [h, x] = c.useState(s),
        [E, f] = c.useState(!1);
    return (
        c.useEffect(() => {
            null != l && m(l);
        }, [l, m]),
        c.useEffect(
            () => () => {
                null != a && a();
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
            className: tu.VM,
            children: (0, o.jsxs)("main", {
                className: tu.MY,
                children: [
                    (0, o.jsx)(Z.Gt, {
                        className: tu.OW,
                        ref: r,
                        onScroll: d,
                        children: u
                            ? (0, o.jsx)("div", {
                                  className: tu.en,
                                  children: (0, o.jsx)("div", {
                                      className: tu.pf,
                                      children: (0, o.jsx)(er.Z_, { tenantId: el.FYj, templateId: eo.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, o.jsx)(tm, {
                                  isSmallScreen: E,
                                  filterBarOpen: h,
                                  setFilterBarOpen: x,
                                  tab: t,
                                  scrollerRef: r,
                                  categories: n,
                                  setCategoryRef: g,
                                  initialCategoryId: l,
                              }),
                    }),
                    h && !E && (0, o.jsx)("div", { className: tu.yF }),
                    h && !E && (0, o.jsx)(X.Ip, { className: tu.kT, children: (0, o.jsx)(te, {}) }),
                ],
            }),
        })
    );
}
function tm(e) {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: l,
            tab: s,
            scrollerRef: a,
            categories: i,
            setCategoryRef: r,
            initialCategoryId: d,
        } = e,
        g = c.useRef(null),
        m = (0, U.v)((e) => e.hasDefaultFilters()),
        h = (0, A.uM)(),
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
        f = c.useCallback(
            (e) => {
                en.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    (en.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: h?.sessionId,
                        page_section: h?.pageSection,
                        page_category: h?.pageCategory,
                        page_index: h?.pageIndex,
                        page_size: h?.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    l(!1));
            }
        }, [t, n, l, h]),
        (0, o.jsx)("div", {
            className: tu.en,
            children: (0, o.jsxs)("div", {
                className: tu.pf,
                children: [
                    (0, o.jsxs)("div", {
                        className: tu.ne,
                        children: [
                            (0, o.jsx)("div", { className: tu.lQ, children: (0, o.jsx)(eu, {}) }),
                            (0, o.jsxs)("div", {
                                className: u()(tu.wR, { [tu.Im]: t }),
                                children: [
                                    (0, o.jsxs)("div", {
                                        className: tu.Ul,
                                        children: [
                                            (0, o.jsx)(J.E, {
                                                variant: "text-md/semibold",
                                                children: D.intl.string(D.t.uaX705),
                                            }),
                                            (0, o.jsx)(eH, {}),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        ref: p,
                                        children: (0, o.jsx)(Q.$, {
                                            onClick: function () {
                                                let e = !n;
                                                en.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                            text: D.intl.string(n ? D.t.fYtm6f : D.t["TeTYE+"]),
                                            icon: ee.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, o.jsx)("div", {
                                    className: tu.Dh,
                                    ref: g,
                                    children: (0, o.jsx)(Z.Ch, { className: tu.Qo, children: (0, o.jsx)(te, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, o.jsx)(A.R9, {
                              newValue: { pageIndex: E },
                              children: (0, o.jsx)(eT, {
                                  categories: i,
                                  setCategoryRef: r,
                                  currentPage: E,
                                  handlePageChange: f,
                                  initialCategoryId: d,
                              }),
                          })
                        : (0, o.jsx)(td, { scrollerRef: a, tab: s }, s),
                ],
            }),
        })
    );
}
var th = n(599062),
    tx = n(651162),
    tE = n(554146),
    tf = n(367727);
let tp = c.createContext(null);
function tC(e) {
    let { blockType: t, children: n } = e,
        l = c.useMemo(() => ({ blockType: t }), [t]);
    return (0, o.jsx)(tp.Provider, { value: l, children: n });
}
var tb = n(755172),
    tS = n(325595),
    tj = n(893998),
    t_ = n(110629),
    tv = n(580929),
    tA = n(607399),
    tL = n(946015),
    tI = n(717421),
    tN = n(140735),
    tO = n(496431),
    tk = n(467513);
let tT = (e) => {
    let { endDate: t, size: n = "md", className: l, showSeconds: s = !1 } = e,
        { days: a, hours: i, minutes: r, seconds: c } = (0, tO.A)(t),
        d = (function (e, t, n, l, s) {
            function a(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let i = [a(e), a(t), a(n)];
            return s && i.push(a(l)), i.join(":");
        })(a, i, r, c, s);
    return (0, o.jsxs)("div", {
        className: u()(tk.kL, l),
        role: "timer",
        children: [
            d
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, o.jsx)(
                              J.E,
                              {
                                  color: "none",
                                  variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: tk.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, o.jsx)(
                              J.E,
                              {
                                  color: "text-overlay-light",
                                  variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
                                  className: tk.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, o.jsx)(tN.A, { children: D.intl.format(D.t.j6IyVe, { days: a, hours: i, minutes: r }) }),
        ],
    });
};
var ty = n(134264);
let tR = c.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        l = (0, tI.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, o.jsxs)(tv.animated.div, {
        className: u()([ty.lP, tA.Fr && ty.yJ]),
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
            (0, o.jsxs)(tL.s, {
                direction: tL.s.Direction.VERTICAL,
                children: [
                    (0, o.jsx)(J.E, {
                        variant: "text-md/medium",
                        className: ty.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, o.jsx)(J.E, {
                            variant: "text-sm/medium",
                            className: ty.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, o.jsx)(tT, { endDate: t.endTime }),
        ],
    });
});
var tM = n(424918),
    tP = n(793574),
    tB = n(993408),
    tD = n(196231),
    tH = n(941734);
function tF(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, o.jsx)("div", {
        className: u()(tH.n9, tH.YB),
        children: n?.subblocks.map((e, n) =>
            e.type === tM.u.CATEGORY
                ? (0, o.jsx)(
                      A.R9,
                      {
                          newValue: {
                              categoryPosition: 1,
                              pageCategory: e.name,
                              pageSection: "featured_block",
                              tilePosition: n,
                          },
                          children: (0, o.jsx)(
                              tD.S,
                              {
                                  subblock: e,
                                  enablePreview: 0 === n,
                                  badgeText: (0, tB.HF)(e.unpublishedAt) ? D.intl.string(D.t["h/uBCR"]) : void 0,
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
    let [l, s] = n;
    return (0, o.jsx)("div", {
        className: u()(tH.n9, tH.YB),
        children: (0, o.jsxs)(A.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != l ? l.name : s?.name,
                pageSection: "featured_block",
                tilePosition: +(null == l),
            },
            children: [
                null != l &&
                    (0, o.jsx)(tD.S, {
                        category: l,
                        enablePreview: !0,
                        badgeText: (0, tB.HF)(l.unpublishedAt) ? D.intl.string(D.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != s &&
                    (0, o.jsx)(tD.S, {
                        category: s,
                        badgeText: (0, tB.HF)(s.unpublishedAt) ? D.intl.string(D.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let tU = function (e) {
    let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: s } = e,
        { analyticsLocations: a } = (0, p.Ay)(tP.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, o.jsxs)("div", {
              className: u()(tH.n9, tH.YB),
              children: [
                  (0, o.jsx)("div", {
                      className: u()(tH.Jn, tH.oT),
                      children: (0, o.jsx)("div", { className: tH.uy }),
                  }),
                  (0, o.jsx)("div", {
                      className: u()(tH.Jn, tH.oT),
                      children: (0, o.jsx)("div", { className: tH.uy }),
                  }),
              ],
          })
        : null != s
          ? (0, o.jsx)(p.f5, {
                value: a,
                children: (0, o.jsx)(tF, { featuredBlockRecord: s, handleTransition: n, isLoading: !1 }),
            })
          : (0, o.jsx)(p.f5, {
                value: a,
                children: (0, o.jsx)(tw, { categories: l, handleTransition: n, isLoading: !1 }),
            });
};
var tG = n(531685),
    tz = n(428262),
    tV = n(621466),
    tW =
        (((i = {}).MOUNTED = "mounted"),
        (i.SORT_OUT = "sort-out"),
        (i.SORT_IN = "sort-in"),
        (i.SHUFFLE_OUT = "shuffle-out"),
        (i.SHUFFLE_IN = "shuffle-in"),
        (i.FINISHED = "finished"),
        i);
n(667532);
var tY = n(435558),
    tK = n.n(tY),
    t$ =
        (((r = {}).RECOMMENDED = "recommended"),
        (r.POPULAR = "popular"),
        (r.RECENT = "recent"),
        (r.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (r.RANDOM = "random"),
        r),
    tq = n(153488),
    tZ = n(313276),
    tX = n(623373),
    tJ = n(885574),
    tQ = n(975807),
    t0 = n(975571),
    t1 = n(365714);
let t2 = function (e) {
        let { personalizedResults: t, label: n } = e,
            l = n ?? D.intl.string(D.t.NSv5KV);
        return (0, o.jsxs)("div", {
            className: t1.L,
            children: [
                (0, o.jsx)(ed.D, { variant: "heading-lg/semibold", children: l }),
                t &&
                    (0, o.jsx)(eU.m, {
                        text: D.intl.string(D.t["3taPdj"]),
                        position: "top",
                        "aria-label": D.intl.string(D.t["3taPdj"]),
                        children: (0, o.jsx)(eY.D, {
                            onClick: () => (0, tQ.A)(t0.A.getArticleURL(el.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: t1.s,
                            children: (0, o.jsx)(tJ.m, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    t5 = function (e) {
        let {
                isLoading: t,
                title: n,
                sortedSkuIds: l,
                numVisibleItems: s,
                prioritizeUserDiscounts: a,
                tab: i,
                buttonContainerClassName: r,
                orbsSupportedOnly: d,
            } = e,
            g = (0, T.bG)([v.default], () => v.default.getCurrentUser()),
            m = tz.Ay.canUseShopDiscounts(g),
            h = (0, eA.Mk)(i, "FeedBlock"),
            x = (0, eB.yB)("FeedBlock"),
            {
                sortType: E,
                setSortType: f,
                sortedItems: C,
                sortOptions: b,
                shuffleProducts: S,
                showRecommendationOption: j,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: n, prioritizeUserDiscounts: l, orbsSupportedOnly: s } = e,
                    a = (0, T.bG)([tq.A], () => tq.A.hasConsented(el.YAq.PERSONALIZATION)),
                    i = c.useMemo(() => t?.[t$.RECOMMENDED] ?? [], [t]),
                    r = c.useMemo(() => t?.[t$.POPULAR] ?? [], [t]),
                    o = i.length > 0 && a,
                    [d, u] = c.useState(o ? t$.RECOMMENDED : t$.POPULAR),
                    g = (0, T.bG)([L.A], () => L.A.productsWithVariantsAsGroup),
                    m = c.useMemo(() => (0, tB.CE)(g), [g]),
                    h = (0, T.bG)([R.A], () => R.A.getUserDiscounts()),
                    x = (0, tZ.A)(),
                    E = (0, ex.p)(),
                    [f, p] = c.useState([]),
                    C = c.useCallback(() => {
                        u(t$.RANDOM), p(tK().shuffle(m));
                    }, [m]);
                c.useEffect(() => {
                    p(tK().shuffle(m));
                }, [m]);
                let b = c.useMemo(() => {
                    let e = [];
                    switch (d) {
                        case t$.RECENT:
                            e = m;
                            break;
                        case t$.PRICE_LOW_TO_HIGH:
                            e = (0, tB.bf)([...m], n, s);
                            break;
                        case t$.RECOMMENDED: {
                            let t = x(i);
                            e = l ? (0, tB.Bs)(t, h) : t;
                            break;
                        }
                        case t$.POPULAR: {
                            let t = x(r);
                            e = l ? (0, tB.Bs)(t, h) : t;
                            break;
                        }
                        case t$.RANDOM:
                            e = f;
                    }
                    return s ? (0, tX.ex)(E(e)) : E(e);
                }, [d, s, E, n, m, x, i, l, h, r, f]);
                return {
                    sortType: d,
                    setSortType: u,
                    sortedItems: (0, eE.X)(b),
                    sortOptions: c.useMemo(() => {
                        let e = [
                            { value: t$.POPULAR, label: D.intl.string(D.t.Y68e5p) },
                            { value: t$.RECENT, label: D.intl.string(D.t["51Bhiz"]) },
                            { value: t$.PRICE_LOW_TO_HIGH, label: D.intl.string(D.t.m8RVU2) },
                        ];
                        return o && e.unshift({ value: t$.RECOMMENDED, label: D.intl.string(D.t.zPWgFG) }), e;
                    }, [o]),
                    showRecommendationOption: o,
                    shuffleProducts: C,
                };
            })({ sortedSkuIds: l, hasShopDiscount: m, prioritizeUserDiscounts: a, orbsSupportedOnly: d }),
            _ = (0, T.bG)([V.Ay], () => V.Ay.useReducedMotion),
            I = (0, T.bG)([tG.A], () => tG.A.isFocused()),
            N = !_ && I,
            { animationPhase: O, startAnimation: k } = (() => {
                let [e, t] = c.useState("mounted"),
                    [n, l] = c.useState(!1),
                    s = c.useRef(null);
                return (
                    c.useEffect(() => {
                        if (n && "finished" === e) {
                            if (null !== s.current) {
                                let e = s.current;
                                if (
                                    e.tabIndex >= 0 ||
                                    (0, tV.vq)(e, HTMLButtonElement) ||
                                    (0, tV.vq)(e, HTMLAnchorElement) ||
                                    (0, tV.vq)(e, HTMLInputElement) ||
                                    (0, tV.vq)(e, HTMLSelectElement) ||
                                    (0, tV.vq)(e, HTMLTextAreaElement)
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
                    }, [e, n]),
                    {
                        animationPhase: e,
                        startAnimation: c.useCallback((e) => {
                            let { isShuffling: n, onOutroComplete: a, returnRef: i } = e;
                            i?.current != null && ((s.current = i.current), l(!0)),
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
            y = (0, A.uM)(),
            M = y?.sessionId ?? "",
            { analyticsLocations: P } = (0, p.Ay)(tP.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            B = c.useRef(null),
            H = c.useRef(null),
            [F, w] = c.useState(!1),
            U = c.useCallback(
                (e) => {
                    w(!1),
                        k({ isShuffling: !1, onOutroComplete: () => f(e), returnRef: H }),
                        en.default.track(el.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: M,
                            sort_type: e,
                        });
                },
                [k, f, M],
            );
        return null == g
            ? null
            : (0, o.jsx)(p.f5, {
                  value: P,
                  children: (0, o.jsxs)("div", {
                      className: u()(tH.lD, tH.YB),
                      children: [
                          (0, o.jsxs)("div", {
                              className: tH.$6,
                              children: [
                                  (0, o.jsx)(t2, { label: n, personalizedResults: j }),
                                  (0, o.jsxs)("div", {
                                      className: u()(tH.IE, { [eB.jP]: x }),
                                      children: [
                                          (0, o.jsxs)("div", {
                                              className: tH.gd,
                                              children: [
                                                  (0, o.jsx)(J.E, {
                                                      variant: "text-md/medium",
                                                      children: D.intl.string(D.t.uaX705),
                                                  }),
                                                  (0, o.jsx)("div", {
                                                      className: u()(r, tH.pI),
                                                      ref: H,
                                                      children: (0, o.jsx)(eP.l, {
                                                          label: D.intl.string(D.t.uaX705),
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
                                              children: (0, o.jsx)(Q.$, {
                                                  variant: "secondary",
                                                  text: D.intl.string(D.t.X3tnc4),
                                                  buttonRef: B,
                                                  onClick: function () {
                                                      w(!0),
                                                          k({ isShuffling: !0, onOutroComplete: S, returnRef: B }),
                                                          en.default.track(
                                                              el.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: M },
                                                          );
                                                  },
                                                  disabled: O !== tW.MOUNTED && O !== tW.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, o.jsx)(tN.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: F && O === tW.FINISHED ? D.intl.string(D.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, o.jsx)("div", {
                              className: tH.hm,
                              children: t
                                  ? (0, o.jsx)(o.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, o.jsx)(eC.A, {}, t + 1)),
                                    })
                                  : C.slice(0, s).map((e, t) => {
                                        let n,
                                            l = L.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == l) return null;
                                        if (N)
                                            if (O === tW.SHUFFLE_OUT)
                                                return (0, o.jsx)(
                                                    "div",
                                                    {
                                                        className: tH.Z2,
                                                        children: (0, o.jsx)(eC.A, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                O === tW.SORT_OUT
                                                    ? (n = tH.MW)
                                                    : O === tW.SHUFFLE_IN
                                                      ? (n = tH.aS)
                                                      : O === tW.SORT_IN && (n = tH.F7);
                                        return (0, o.jsx)(
                                            A.R9,
                                            {
                                                newValue: {
                                                    tilePosition: t,
                                                    pageSection: "popular picks",
                                                    categoryPosition: 2,
                                                },
                                                children: (0, o.jsx)("div", {
                                                    className: n,
                                                    children: (0, o.jsx)(ev.A, {
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
var t4 = n(449543),
    t9 = n(622697);
let t7 = function (e) {
    let { block: t, handleTransition: n, tab: l } = e,
        s = (0, T.bG)([v.default], () => v.default.getCurrentUser()),
        a = (0, eA.Mk)(l, "FramesProductShelfBlock"),
        i = (0, tZ.A)(),
        r = c.useMemo(() => i(t.rankedSkuIds), [t.rankedSkuIds, i]),
        d = (0, eE.X)(r),
        { analyticsLocations: g } = (0, p.Ay)(tP.A.COLLECTIBLES_SHOP_SHELF),
        m = c.useCallback(() => {
            n({
                sourceButton: "frames product shelf see all",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            });
        }, [n, t.categorySkuId]);
    return null == s || 0 === d.length
        ? null
        : (0, o.jsx)(p.f5, {
              value: g,
              children: (0, o.jsxs)("div", {
                  className: u()(t9.kL, tH.YB),
                  children: [
                      null != t.desktopBackgroundImage &&
                          (0, o.jsx)("img", {
                              className: t9.iL,
                              src: t.desktopBackgroundImage,
                              alt: "",
                              "aria-hidden": !0,
                          }),
                      (0, o.jsxs)("div", {
                          className: t9.Qs,
                          children: [
                              (0, o.jsxs)("div", {
                                  className: t9.wx,
                                  children: [
                                      (0, o.jsxs)("div", {
                                          className: t9.Jb,
                                          children: [
                                              (0, o.jsx)(t_.A, {
                                                  location: "FramesProductShelfBlock",
                                                  showTooltip: !0,
                                              }),
                                              (0, o.jsx)(ed.D, {
                                                  variant: "heading-lg/semibold",
                                                  color: "text-overlay-light",
                                                  children: t.title,
                                              }),
                                          ],
                                      }),
                                      null != t.buttonText &&
                                          "" !== t.buttonText &&
                                          (0, o.jsx)(Q.$, {
                                              variant: "overlay-primary",
                                              text: t.buttonText,
                                              onClick: m,
                                          }),
                                  ],
                              }),
                              (0, o.jsx)(t4.A, {
                                  gap: "xl",
                                  edgeFade: "sm",
                                  children: d.map((e, n) =>
                                      null == L.A.getCategoryForProduct(e.skuId)
                                          ? null
                                          : (0, o.jsx)(
                                                A.R9,
                                                {
                                                    newValue: {
                                                        tilePosition: n,
                                                        pageSection: t.title,
                                                        categoryPosition: 1,
                                                    },
                                                    children: (0, o.jsx)(ev.A, {
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
var t3 = n(337183),
    t6 = n(349288),
    t8 = n(212407),
    ne = n(815280),
    nt = n(537947);
let nn = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        l = (0, eg.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: s, bannerAnimatedUrl: a } = (0, t8.qY)(t),
        i = null != t.textColor ? { color: t.textColor } : void 0,
        r = null != t.body && "" !== t.body,
        c = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, o.jsxs)("div", {
        ref: l,
        className: nt.BX,
        children: [
            (0, o.jsx)("div", {
                className: nt.vK,
                children: null != s && (0, o.jsx)(ne.A, { bannerStatic: s, bannerAnimated: a }),
            }),
            (0, o.jsx)("div", {
                className: nt.HQ,
                children: (0, o.jsxs)("div", {
                    className: nt.Yn,
                    children: [
                        null != t.endTime ? (0, o.jsx)(tT, { endDate: t.endTime, size: "lg" }) : null,
                        (0, o.jsx)(ed.D, {
                            variant: "heading-xxl/bold",
                            className: nt.DD,
                            color: "text-strong",
                            style: { ...i },
                            children: t.title,
                        }),
                        r || c
                            ? (0, o.jsxs)(J.E, {
                                  variant: "text-md/medium",
                                  style: { ...i },
                                  children: [
                                      r && t.body,
                                      r && c && " ",
                                      c &&
                                          (0, o.jsx)(t6.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: nt.CU,
                                              style: { ...i },
                                              children: D.intl.string(D.t.O7ADgv),
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
var nl = n(189213),
    ns = n(290136),
    na = n(478016),
    ni = n(825484),
    nr = n(269115),
    no = n(812993),
    nc = n(713517),
    nd = n(914410),
    nu = n(662388),
    ng = n(597783),
    nm = n(61750);
function nh(e, t) {
    let n = c.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        l = (0, T.bG)([K.A], () => K.A.getPurchases(n));
    return {
        readyToClaim: c.useMemo(() => l.length === n.length, [l, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: l,
    };
}
var nx = n(496569),
    nE = n(498924);
let nf = c.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: l } = (0, ng.Z)(n),
            s = c.useRef(null),
            { isHoveringOrFocusing: a } = (0, nc.A)(s),
            { readyToClaim: i, collectibleProductSkuIds: r, collectedSkuIds: d } = nh(t, n),
            g = (0, T.bG)([K.A], () => K.A.isClaiming === n);
        return (0, o.jsx)(nr.L, {
            onChange: l,
            threshold: 0,
            innerRef: s,
            children: (0, o.jsx)("div", {
                ref: s,
                className: u()(nx.ty, nE.Q3, { [nx.yo]: a }),
                "aria-label": D.intl.formatToPlainString(D.t.Ez6aHE, { category: t.name }),
                children: (0, o.jsxs)("div", {
                    className: nx.qt,
                    children: [
                        (0, o.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: nE.L8,
                        }),
                        (0, o.jsx)("div", {
                            className: nx.N1,
                            children: (0, o.jsx)(no.Lp, {
                                text: D.intl.string(D.t.rykAJ9),
                                disableColor: !0,
                                className: nE.HZ,
                            }),
                        }),
                        (0, o.jsxs)("div", {
                            className: nx.xQ,
                            children: [
                                (0, o.jsxs)("div", {
                                    className: nE.xE,
                                    children: [
                                        (0, o.jsxs)("div", {
                                            className: nE.cs,
                                            children: [
                                                (0, o.jsx)(ed.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: nx.tZ,
                                                    children: D.intl.string(D.t["0mDmg/"]),
                                                }),
                                                (0, o.jsx)(eU.m, {
                                                    text: i
                                                        ? D.intl.string(D.t.cKH3tk)
                                                        : D.intl.formatToPlainString(D.t["8aMDPc"], {
                                                              totalCount: r.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, o.jsx)("span", {
                                                        className: nE.ZB,
                                                        children: (0, o.jsx)(ns.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, o.jsx)("div", {
                                            className: nx.oh,
                                            "aria-hidden": !0,
                                            children: (0, o.jsxs)("div", {
                                                className: nE.L$,
                                                children: [
                                                    (0, o.jsx)(nd.Ay, {
                                                        variant: nd.qP.BLUE,
                                                        progress: d.length,
                                                        maximum: r.length,
                                                    }),
                                                    (0, o.jsxs)("div", {
                                                        className: u()(nE.__, { [nE.gF]: i }),
                                                        children: [
                                                            i
                                                                ? (0, o.jsx)(na.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, o.jsx)(J.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: D.intl.formatToPlainString(D.t["5TwASM"], {
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
                                    className: nx.Vs,
                                    children: (0, o.jsx)(ni.e, {
                                        wrap: !1,
                                        className: nx.Ld,
                                        fullWidth: !0,
                                        children: (0, o.jsx)(Q.$, {
                                            variant: "primary",
                                            onClick: function (e) {
                                                e.stopPropagation(),
                                                    i &&
                                                        (0, nu.BX)(t.skuId, n)
                                                            .then(() => {
                                                                let e = L.A.getProduct(n);
                                                                null != e &&
                                                                    (0, nm.A)({
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
                                                                        (0, o.jsx)(nl.Modal, {
                                                                            transitionState: e.transitionState,
                                                                            onClose: e.onClose,
                                                                            size: "sm",
                                                                            title: D.intl.string(D.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: D.intl.string(D.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, o.jsx)("div", {
                                                                                children: D.intl.string(D.t["0YpIF/"]),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            });
                                            },
                                            text: D.intl.string(D.t.VnVTNc),
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
    np = function (e) {
        let t,
            n,
            l,
            { isBlockLoading: s = !1, heroBlock: a, tab: i } = e,
            r = (0, eA.Mk)(i, "RewardHeroBlockCards"),
            d = c.useMemo(() => L.A.getCategoryForProduct(a.rewardSkuId), [a.rewardSkuId]),
            u = (0, T.bG)([K.A], () => K.A.getPurchase(a.rewardSkuId)),
            { products: g } =
                ((t = (0, tZ.A)()),
                (n = c.useMemo(
                    () => (s ? [] : t(a.rankedSkuIds).filter((e) => e.skuId !== a.rewardSkuId || null != u)),
                    [s, t, a.rankedSkuIds, u, a.rewardSkuId],
                )),
                (l = (0, ex.p)()(n)),
                { products: (0, eE.X)(l) }),
            m = c.useMemo(
                () =>
                    !s &&
                    0 !== a.rankedSkuIds.length &&
                    !(g.length > 0) &&
                    a.rankedSkuIds.every((e) => L.A.getProduct(e)?.variantGroupStoreListingId != null),
                [s, a.rankedSkuIds, g.length],
            ),
            h = s || m,
            { readyToClaim: x } = nh(d, a.rewardSkuId),
            E = null == u && null != a.rewardSkuId && null != d;
        return (0, o.jsx)(t4.A, {
            gap: "xl",
            children: h
                ? (0, o.jsx)(o.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, o.jsx)(eC.A, {}, t)),
                  })
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          E &&
                              x &&
                              (0, o.jsx)(
                                  A.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, o.jsx)(nf, { category: d, rewardSkuId: a.rewardSkuId }),
                                  },
                                  a.rewardSkuId,
                              ),
                          g.map((e, t) => {
                              let n = L.A.getCategoryForProduct(e.skuId);
                              return null == e || null == n
                                  ? null
                                  : (0, o.jsx)(
                                        A.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, o.jsx)(ev.A, { skuId: e.skuId, prioritizedCurrency: r }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, tB.$b)(90);
let nC = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: tx.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    nb = function (e) {
        let { isLoading: t = !1, heroBlock: n, tab: l, onVisibilityChange: s } = e,
            a = (0, eg.K)(
                (e) => {
                    s?.(e);
                },
                0.1,
                null != s,
            ),
            i = (0, T.bG)([v.default], () => v.default.getCurrentUser()),
            { analyticsLocations: r } = (0, p.Ay)(tP.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: c,
                logoDisplayConfig: d,
                heroLogo: g,
                heroBannerStatic: m,
                heroBannerAnimated: h,
            } = (0, t8.Kk)(n),
            x = c?.responsive ?? !1,
            E = c?.backgroundStyle;
        return null != i && (t || n !== nC)
            ? (0, o.jsx)(p.f5, {
                  value: r,
                  children: (0, o.jsxs)("div", {
                      ref: a,
                      className: tH.os,
                      children: [
                          (0, o.jsx)("div", {
                              className: u()(tH.vK, { [tH.no]: x }),
                              style: null != E ? { background: E } : void 0,
                              children:
                                  null != m &&
                                  (0, o.jsx)(ne.A, { bannerStatic: m, bannerAnimated: h, isResponsive: x }),
                          }),
                          (0, o.jsxs)("div", {
                              className: tH.xX,
                              children: [
                                  (0, o.jsx)("div", {
                                      className: u()(tH.bC, { [tH.no]: x }),
                                      children: t
                                          ? (0, o.jsx)("div", { className: tH.Hw })
                                          : (0, o.jsx)("div", {
                                                className: tH.Hw,
                                                children: (0, o.jsxs)("div", {
                                                    className: tH.Wq,
                                                    children: [
                                                        null != g &&
                                                            (0, o.jsx)("img", {
                                                                className: tH.rm,
                                                                src: g,
                                                                alt: n.name,
                                                                style: d?.toDesktopStyles(),
                                                            }),
                                                        null != n.title &&
                                                            (0, o.jsx)(ed.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: tH.DD,
                                                                color: "text-strong",
                                                                children: n.title,
                                                            }),
                                                        "" !== n.summary &&
                                                            (0, o.jsx)(J.E, {
                                                                variant: "text-md/normal",
                                                                className: tH.Tm,
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
                                  (0, o.jsx)(np, { isBlockLoading: t, heroBlock: n, tab: l }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var nS = n(609196);
let nj = (e) => {
    let { shelf: t, handleTransition: n, tab: l } = e,
        s = (0, T.bG)([v.default], () => v.default.getCurrentUser()),
        a = (0, eA.Mk)(l, "ShelfBlock"),
        i = (0, T.bG)([L.A], () => (null != t.categorySkuId ? L.A.getCategory(t.categorySkuId) : void 0)),
        r = (0, tZ.A)(),
        d = c.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r]),
        g = (0, eE.X)(d),
        { analyticsLocations: m } = (0, p.Ay)(tP.A.COLLECTIBLES_SHOP_SHELF),
        h = c.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: i?.isOrbsExclusive === !0 && l !== P.G2.ORBS,
            });
        }, [t.categorySkuId, i, n, l]);
    if (null == s || 0 === g.length) return null;
    let x = t.buttonText ?? D.intl.formatToPlainString(D.t.bc9RBE, { category_name: t.name }),
        E = t.showButton,
        f = t.desktopBackgroundImage,
        C = null != f;
    return (0, o.jsx)(p.f5, {
        value: m,
        children: (0, o.jsxs)("div", {
            className: u()(nS.mu, tH.YB, C ? nS.VA : nS.Ti),
            children: [
                C && (0, o.jsx)("img", { className: nS.iL, src: f, alt: "", "aria-hidden": !0 }),
                (0, o.jsxs)("div", {
                    className: nS.Qs,
                    children: [
                        (0, o.jsxs)("div", {
                            className: nS.wx,
                            children: [
                                (0, o.jsx)(ed.D, {
                                    variant: "heading-lg/semibold",
                                    style: C ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                E &&
                                    (0, o.jsx)(Q.$, {
                                        variant: C ? "overlay-primary" : "secondary",
                                        text: x,
                                        onClick: h,
                                    }),
                            ],
                        }),
                        (0, o.jsx)(t4.A, {
                            gap: "xl",
                            edgeFade: C ? "sm" : void 0,
                            children: g.map((e, n) =>
                                null == L.A.getCategoryForProduct(e.skuId)
                                    ? null
                                    : (0, o.jsx)(
                                          A.R9,
                                          {
                                              newValue: { tilePosition: n, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, o.jsx)(ev.A, { skuId: e.skuId, prioritizedCurrency: a }),
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
    nv = n(69236),
    nA = n(44724),
    nL = n(421108),
    nI = n(873297);
let nN = function (e) {
    let {
            applicationId: t,
            headerText: n,
            gradientColors: l,
            gradientAngle: s,
            skuIds: a,
            tab: i,
            endTime: r,
            ctaType: d = "storefront",
            logoUrl: u,
        } = e,
        g = (0, nL.u)(r) ?? void 0,
        m = (0, nv.W8)(),
        h = c.useMemo(
            () =>
                "nitro" !== d || m
                    ? {
                          kind: "button",
                          text: D.intl.string(D.t.apFNLU),
                          onClick: () => (0, nA.default)({ applicationId: t }),
                          onMouseDown: () => (0, nA.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, o.jsx)(n_.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: B.pe.TIER_2,
                              buttonTextOverride: D.intl.string(D.t.pj0XBN),
                          }),
                      },
            [d, t, m],
        );
    return (0, o.jsx)(nI.A, {
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
        backgroundGradient: `linear-gradient(${s}deg, ${l.join(", ")})`,
    });
};
var nO = n(575593),
    nk = n(770178),
    nT = n(929283),
    ny = n(275483);
let nR = [
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
function nM(e) {
    let { config: t, baseLeft: n, transitioning: l } = e,
        s = window.innerHeight,
        a = L.A.getProduct(t.skuId),
        i = a?.items[0],
        r = a?.type,
        c = n + t.horizontalJitter;
    return (0, o.jsx)("div", {
        className: ny.LY,
        style: {
            top: l ? -s - 384 : t.top,
            left: l ? c + t.transitionOffsetLeft : c,
            transform: `rotate(${t.rotation}deg)`,
            height: 160,
            width: 160,
            transitionDelay: t.transitionDelay,
            transitionDuration: t.transitionDuration,
        },
        children: null != i && r === nO.R.AVATAR_DECORATION && (0, o.jsx)(nT.i, { item: i }),
    });
}
let nP = (e) => {
        let { peaking: t, transitioning: n, parentWidth: l } = e,
            [s, a] = c.useState(!1),
            [i, r] = c.useState([]),
            [d] = c.useState(() =>
                [...nR]
                    .sort(() => Math.random() - 0.5)
                    .map((e) => ({
                        skuId: e,
                        top: 0 + 48 * Math.random(),
                        rotation: -32 + 64 * Math.random(),
                        horizontalJitter: -(20 * Math.random()),
                        transitionOffsetLeft: -20 - 35 * Math.random(),
                        transitionDelay: `${Math.random() / 3}s`,
                        transitionDuration: `${P.H1 - 200 * Math.random()}ms`,
                    })),
            );
        return (
            c.useEffect(() => {
                if (null != l && l > 0) {
                    let e = Math.max(1, Math.floor(l / 130)),
                        t = l / e;
                    r(Array.from({ length: e }, (e, n) => ({ config: d[n % d.length], baseLeft: n * t })));
                }
            }, [l, d]),
            c.useEffect(() => {
                n && setTimeout(() => a(!0), P.H1);
            }, [n]),
            (0, o.jsx)("div", {
                className: u()(ny.rA, { [ny.Kb]: t, [ny.pp]: s }),
                children: i.map((e, t) => {
                    let { config: l, baseLeft: s } = e;
                    return (0, o.jsx)(nM, { config: l, baseLeft: s, transitioning: n }, l.skuId + t);
                }),
            })
        );
    },
    nB = function (e) {
        let { peaking: t, transitioning: n } = e,
            l = c.useRef(null),
            [s, a] = c.useState(0),
            i = c.useCallback(() => {
                null != l.current && a(l.current.offsetWidth);
            }, []);
        return (
            (0, nk.g)(l, i),
            (0, o.jsx)("div", {
                ref: l,
                className: ny.eL,
                children: (0, o.jsx)(nP, { peaking: t, transitioning: n, parentWidth: s }),
            })
        );
    };
var nD = n(815021),
    nH = n(43990),
    nF = n(976860),
    nw = n(49999);
let nU = function (e) {
    let { wideBannerBlock: t, tab: n } = e,
        l = L.A.getCategoryByStoreListingId(t.categoryStoreListingId),
        s = c.useRef(null),
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
    let m = l?.skuId ?? "",
        { handleCardVisibilityChange: h } = (0, ng.Z)(m, "home", "marketing wide banner"),
        x = (0, A.uM)(),
        { bannerURL: E } = (0, t8.w$)(t),
        f = n === P.G2.ORBS,
        p = null != t.ctaRoute && "" !== t.ctaRoute,
        C = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || p),
        b = null != t.logoURL && "" !== t.logoURL,
        S = c.useCallback(() => {
            if ((g(!0), t.isDismissible)) {
                let e = t.dismissibleContentVersion ?? 0;
                (0, tf.$l)(tE.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: nw.i.USER_DISMISS });
            }
        }, [t.isDismissible, t.dismissibleContentVersion]),
        j = c.useCallback(
            (e) => {
                en.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        _ = c.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if ((j(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                    let e = t.ctaRoute;
                    if (e.includes("game-shop")) {
                        let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                        if (null != t) {
                            let e = t[1],
                                n = parseInt(t[2], 10);
                            (0, nA.default)({ guildId: e, pageIndex: n });
                        }
                    } else (0, nF.pX)(e);
                }
            },
            [t.ctaRoute, j],
        );
    if (null == E || d) return null;
    let v = u()(tH.nM, tH.Tq, tH.TS, tH.YB, { [tH._1]: f, [tH.vb]: p }),
        I = (0, o.jsxs)(o.Fragment, {
            children: [
                t.isDismissible &&
                    (0, o.jsx)("div", {
                        className: tH.Mh,
                        children: (0, o.jsx)(nD.J, {
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(), S();
                            },
                            "aria-label": D.intl.string(D.t.WAI6xu),
                        }),
                    }),
                (0, o.jsx)("div", {
                    className: u()(tH.zK, { [tH._1]: f }),
                    style: null != i ? { height: `${i}px` } : void 0,
                    children: (0, o.jsx)("img", {
                        ref: a,
                        src: E,
                        alt: t.title,
                        className: u()(tH.LN, { [tH.d5]: f }),
                    }),
                }),
                (0, o.jsx)("div", {
                    className: u()(tH.Ep, { [tH.Qq]: C }),
                    style: { maxHeight: null != i ? `${i}px` : "auto" },
                    children: (0, o.jsxs)("div", {
                        className: tH.E8,
                        children: [
                            (0, o.jsx)(ed.D, {
                                style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                className: f ? tH.O2 : void 0,
                                variant: "heading-xl/bold",
                                children: t.title,
                            }),
                            (0, o.jsx)(J.E, {
                                style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                lineClamp: 2,
                                variant: f ? "text-md/medium" : "text-sm/medium",
                                children: f
                                    ? D.intl.format(D.t.SFFP7K, {
                                          helpdeskArticle: t0.A.getArticleURL(el.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : t.body,
                            }),
                            C &&
                                (0, o.jsxs)("div", {
                                    className: tH.nP,
                                    children: [
                                        (0, o.jsx)(Q.$, {
                                            variant: "overlay-primary",
                                            onClick: (e) => {
                                                e.stopPropagation(), _(t.ctaText ?? D.intl.string(D.t.jVcuVY));
                                            },
                                            text: t.ctaText ?? D.intl.string(D.t.jVcuVY),
                                            "aria-label":
                                                null == t.ctaText && null != t.title
                                                    ? D.intl.formatToPlainString(D.t.frSHlf, { destination: t.title })
                                                    : void 0,
                                        }),
                                        b && (0, o.jsx)("img", { src: t.logoURL, alt: "", className: tH.bU }),
                                    ],
                                }),
                        ],
                    }),
                }),
            ],
        });
    return (0, o.jsx)(nH.N, {
        theme: f ? void 0 : e6.NJ.DARK,
        children: (e) =>
            (0, o.jsx)(nr.L, {
                innerRef: s,
                onChange: h,
                threshold: 0,
                children: p
                    ? (0, o.jsx)(eY.D, { innerRef: s, onClick: () => _(null), className: u()(e, v), children: I })
                    : (0, o.jsx)("div", { ref: s, className: u()(e, v), children: I }),
            }),
    });
};
var nG = n(757036),
    nz = n(212739);
let nV = (0, N.mj)({ name: "2026-05-orbs-shop-upsell-banner", kind: "user", defaultConfig: !1, variations: { 1: !0 } });
var nW = n(462887),
    nY = n(765671),
    nK = n(303136),
    n$ = n(792656),
    nq = n(363195),
    nZ = n(901123),
    nX = n(314489),
    nJ = n(909340);
let nQ = (e) => {
        let { category: t, tab: n } = e,
            { ref: l, width: s } = (0, nY.Ay)(),
            a = null != s && s <= 560,
            i = (0, m.bG)([nq.A], () => (0, nW.q)(nq.A.theme)),
            r = t?.skuId ?? "",
            { handleCardVisibilityChange: d } = (0, ng.Z)(r, "home", "marketing orbs upsell banner"),
            g = (0, A.uM)(),
            { analyticsLocations: h } = (0, p.Ay)(tP.A.COLLECTIBLES_SHOP_ORBS_UPSELL_BANNER),
            x = c.useCallback(() => {
                en.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            children: (0, o.jsx)(nH.N, {
                theme: el.NJ8.DARKER,
                children: (e) =>
                    (0, o.jsx)(nr.L, {
                        innerRef: l,
                        onChange: d,
                        threshold: 0,
                        children: (0, o.jsxs)("div", {
                            ref: l,
                            className: u()(e, nX.kL),
                            children: [
                                (0, o.jsx)(nK.A, { className: nX.Ki, src: nJ.A }),
                                (0, o.jsxs)("div", {
                                    className: nX.Qs,
                                    children: [
                                        (0, o.jsx)(ed.D, {
                                            variant: "heading-xl/normal",
                                            color: "text-strong",
                                            className: nX.R_,
                                            children: D.intl.string(D.t["50J7mj"]),
                                        }),
                                        (0, o.jsx)(J.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: nX.rf,
                                            children: D.intl.format(D.t.NU5ZId, { monthlyOrbsAmount: 250 }),
                                        }),
                                        (0, o.jsxs)("div", {
                                            className: nX.R$,
                                            children: [
                                                (0, o.jsx)(n$.A, {
                                                    subscriptionTier: B.pe.TIER_2,
                                                    variantOverride: "expressive",
                                                    size: "md",
                                                    fullWidth: a,
                                                }),
                                                (0, o.jsx)(Q.$, {
                                                    variant: "secondary",
                                                    size: "md",
                                                    fullWidth: a,
                                                    text: D.intl.string(D.t.PcTCB7),
                                                    onClick: () => {
                                                        x(), (0, nF.pX)(nZ.BV.NITRO_HOME);
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, o.jsx)("img", {
                                    className: nX.Qw,
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
    n0 = (e) => {
        let { index: t, wideBannerBlock: n, tab: l } = e,
            s = nV.useConfig({ location: "CollectiblesShopBannerSelector" }),
            a = (0, nG.L)(B.PremiumTypes.TIER_2),
            i = (0, nz.O)();
        if (s && !a && !i && l === P.G2.ORBS) {
            let e = L.A.getCategoryByStoreListingId(n.categoryStoreListingId);
            return (0, o.jsx)(nQ, { category: e, tab: l }, t);
        }
        return (0, o.jsx)(nU, { wideBannerBlock: n, tab: l }, t);
    },
    n1 = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: l, tab: s } = e,
            { noCache: a, includeUnpublished: i } = (0, eI.A)(),
            [r, d] = c.useState(!1),
            g = (0, A.uM)(),
            m = g?.sessionId ?? "";
        c.useEffect(() => {
            (0, ef.z)({
                sessionId: m,
                checkpoint: ef.t.SHOP_MOUNTED,
                tab: s,
                unpublishedCategoriesShown: i,
                cacheDisabled: a,
            });
        }, [s]);
        let {
                isFetchingShopHome: h,
                fetchShopHomeError: x,
                shopBlocks: E,
                refreshShopHome: f,
            } = (0, tb.y)(s, { noCache: a, includeUnpublished: i, logPerf: !0 }, { sessionId: m, tab: s }),
            p = c.useCallback(() => {
                f();
            }, [f]),
            C = c.useMemo(() => E.some((e) => e instanceof tS.p), [E])
                ? (0, o.jsx)(t_.A, { location: "CollectiblesShop" })
                : null;
        return (c.useEffect(() => {
            null != x ||
                h ||
                0 === E.length ||
                (0, ef.z)({
                    sessionId: m,
                    checkpoint: ef.t.SHOP_RENDERED,
                    tab: s,
                    unpublishedCategoriesShown: i,
                    cacheDisabled: a,
                });
        }, [x, h, E.length, i, a, m, s]),
        null != x)
            ? (0, o.jsx)(th.h, { onRetry: p, errorOrigin: th.A.SHOP_PAGE, errorMessage: x.message })
            : h || 0 === E.length
              ? (0, o.jsxs)("div", {
                    className: u()(tH.g4, tH.Of),
                    children: [
                        (0, o.jsx)(t3.A, { isLoading: h, handleTransition: t, tab: s }),
                        (0, o.jsx)(tU, { isLoading: h, handleTransition: t, categories: [] }),
                        (0, o.jsx)(t5, {
                            isLoading: h,
                            title: s === P.G2.ORBS ? D.intl.string(D.t.dFgeuZ) : D.intl.string(D.t.NSv5KV),
                            numVisibleItems: n,
                            tab: s,
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
                                case tx.g.HERO:
                                    c = (0, o.jsx)(
                                        t3.A,
                                        { isLoading: h, handleTransition: t, heroBlock: e, tab: s, badge: C },
                                        i,
                                    );
                                    break;
                                case tx.g.FEATURED:
                                    c = (0, o.jsx)(
                                        tU,
                                        { isLoading: h, handleTransition: t, featuredBlockRecord: e },
                                        i,
                                    );
                                    break;
                                case tx.g.FEED:
                                    let m = e.sortedSkuIds;
                                    c = (0, o.jsx)(
                                        t5,
                                        {
                                            title:
                                                s === P.G2.ORBS ? D.intl.string(D.t.dFgeuZ) : D.intl.string(D.t.NSv5KV),
                                            isLoading: l,
                                            numVisibleItems: n,
                                            sortedSkuIds: m,
                                            buttonContainerClassName: a?.type === tx.g.IMMERSIVE_BANNER ? tH.w : void 0,
                                            prioritizeUserDiscounts: s === P.G2.HOME,
                                            tab: s,
                                            orbsSupportedOnly: s === P.G2.ORBS,
                                        },
                                        i,
                                    );
                                    break;
                                case tx.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, tf.En)(tE.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    c = (0, o.jsx)(n0, { index: i, wideBannerBlock: e, tab: s }, i);
                                    break;
                                case tx.g.FRAMES_BANNER:
                                    c = (0, o.jsx)(
                                        nU,
                                        {
                                            wideBannerBlock: tj.y.fromServer({
                                                type: tx.g.WIDE_BANNER,
                                                title: e.title,
                                                body: e.body,
                                                wide_banner_url: e.desktopBackgroundImage,
                                                banner_text_color: "white",
                                                banner_body_text_color: "white",
                                                disable_cta: !0,
                                            }),
                                            tab: s,
                                        },
                                        i,
                                    );
                                    break;
                                case tx.g.FRAMES_PRODUCT_SHELF:
                                    c = (0, o.jsx)(t7, { block: e, handleTransition: t, tab: s }, i);
                                    break;
                                case tx.g.SHELF:
                                    c = (0, o.jsx)(nj, { handleTransition: t, shelf: e, tab: s }, i);
                                    break;
                                case tx.g.COUNTDOWN_TIMER:
                                    (c = (0, o.jsx)(tR, { countdownTimerBlock: e, isVisible: r }, i)), (g = !0);
                                    break;
                                case tx.g.IMMERSIVE_BANNER:
                                    c = (0, o.jsx)(
                                        nn,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => d(!e) },
                                        i,
                                    );
                                    break;
                                case tx.g.REWARD_HERO:
                                    c = (0, o.jsx)(nb, { isLoading: h, handleTransition: t, heroBlock: e, tab: s }, i);
                                    break;
                                case tx.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, o.jsx)(
                                        tC,
                                        {
                                            blockType: e.type,
                                            children: (0, o.jsx)(nN, {
                                                applicationId: e.applicationId,
                                                headerText: e.headerText,
                                                gradientColors: e.gradientColors,
                                                gradientAngle: e.gradientAngle,
                                                skuIds: e.skuIds,
                                                tab: s,
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
                                tC,
                                {
                                    blockType: e.type,
                                    children: (0, o.jsx)("div", {
                                        className: u()(tH.v1, tH.Of, { [tH.J1]: 0 === i || g }),
                                        children: c,
                                    }),
                                },
                                i,
                            );
                        })(e, a > 0 ? E[a - 1] : null, a),
                    ),
                });
    },
    n2 = (e) => {
        let { handleTransition: t, tab: n, transitionState: l } = e,
            s = c.useRef(null),
            { handleScroll: a } = ea(s, n),
            i = (0, eL.U)(),
            r = (0, A.uM)(),
            [d, u] = c.useState(P.md),
            [g, m] = c.useState(!1);
        return (
            c.useEffect(() => {
                if (null != s.current) {
                    let e = () => {
                            if (null == s.current) return;
                            let e = s.current.getDistanceFromBottom();
                            d >= 36 ? m(e < 20) : e <= 200 && u((e) => e + P.md);
                        },
                        t = s.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [s, d, u, m]),
            (0, o.jsx)(Z.Ch, {
                className: tH.OW,
                ref: s,
                onScroll: a,
                children: (0, o.jsxs)("div", {
                    className: tH.bx,
                    children: [
                        (0, o.jsxs)("div", {
                            className: tH.rb,
                            children: [
                                (0, o.jsx)(n1, {
                                    handleTransition: t,
                                    numVisibleItems: d,
                                    isFetchingCategories: i,
                                    tab: n,
                                }),
                                n !== P.G2.CATALOG &&
                                    d >= 36 &&
                                    (0, o.jsxs)("div", {
                                        className: tH.R$,
                                        children: [
                                            (0, o.jsx)(ed.D, {
                                                variant: "heading-md/semibold",
                                                children: D.intl.string(D.t.Yr70c4),
                                            }),
                                            (0, o.jsx)(Q.$, {
                                                variant: "primary",
                                                text: D.intl.string(D.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        en.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: r?.sessionId,
                                                            page_type: n,
                                                            page_category: n === P.G2.HOME ? void 0 : r?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, o.jsx)(nB, { peaking: g, transitioning: l === P.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var n5 = n(154323),
    n4 = n(295811),
    n9 = n(870216);
let n7 = { "Any:personalization-header": t2 },
    n3 = { [eo.b.SHOP_HOME]: n7 },
    n6 = { "1465939725649973269": n7, "1478495181551440044": n7 },
    n8 = function () {
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
    le = { prioritizedCurrency: eA.Hi.ORBS };
function lt(e) {
    let { tab: t } = e,
        [n, l, s] = (0, T.yK)([n9.A], () => [n9.A.getLayout(t), n9.A.isFetchingLayout(t), n9.A.getLayoutFetchError(t)]),
        a = (0, T.bG)([n5.A], () => n5.A.get("shop_include_unpublished")),
        i = (0, T.bG)([L.A], () => L.A.skipNumCategories),
        r = c.useMemo(() => {
            let e = {};
            return !0 === a && (e.include_unpublished = !0), null != i && i > 0 && (e.skip_num_categories = i), e;
        }, [a, i]),
        d = null == n && !l && s?.status !== 404 && s?.status !== 429;
    if (
        (c.useEffect(() => {
            d && (0, nu.T2)({ tab: t });
        }, [d, t]),
        null == n)
    )
        return t !== z.HOME || d || l
            ? null
            : (0, o.jsx)(er.Z_, {
                  tenantId: el.FYj,
                  templateId: eo.b.SHOP_HOME,
                  requestParams: r,
                  overrides: n3[eo.b.SHOP_HOME],
              });
    let u = (0, o.jsx)(er.Qs, { tenantId: el.FYj, layoutId: n, overrides: n6[n] });
    return (0, o.jsxs)(o.Fragment, {
        children: [
            t === z.ORBS && (0, o.jsx)(n8, {}),
            t === z.ORBS ? (0, o.jsx)(eA.v3.Provider, { value: le, children: u }) : u,
        ],
    });
}
function ln(e) {
    let { url: t } = e,
        [n, l] = c.useState(null);
    return (c.useEffect(() => {
        !(async function () {
            try {
                let e = await fetch(t),
                    n = await e.json();
                l(n);
            } catch (e) {
                l(null);
            }
        })();
    }, [t]),
    null == n)
        ? null
        : (0, o.jsx)(er.Ay, { layout: n });
}
let ll = (e) => {
    let { handleTransition: t, tab: n, transitionState: l } = e,
        s = (0, A.uM)(),
        a = (0, T.bG)([n4.A], () => n4.A.getShopLayoutUrlOverride()),
        i = c.useRef(null),
        { handleScroll: r } = ea(i, n),
        [d, g] = c.useState(P.md),
        [m, h] = c.useState(!1);
    return (
        c.useEffect(() => {
            if (null != i.current) {
                let e = () => {
                        if (null == i.current) return;
                        let e = i.current.getDistanceFromBottom();
                        d >= 36 ? h(e < 20) : e <= 200 && g((e) => e + P.md);
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
        (0, o.jsx)(Z.Ch, {
            className: tH.OW,
            ref: i,
            onScroll: r,
            children: (0, o.jsxs)("div", {
                className: tH.bx,
                children: [
                    (0, o.jsxs)("div", {
                        className: u()(tH.rb, tH.GS),
                        children: [
                            null != a && "" !== a ? (0, o.jsx)(ln, { url: a }) : (0, o.jsx)(lt, { tab: n }),
                            n !== z.CATALOG &&
                                d >= 36 &&
                                (0, o.jsxs)("div", {
                                    className: tH.R$,
                                    children: [
                                        (0, o.jsx)(ed.D, {
                                            variant: "heading-md/semibold",
                                            children: D.intl.string(D.t.Yr70c4),
                                        }),
                                        (0, o.jsx)(Q.$, {
                                            variant: "primary",
                                            text: D.intl.string(D.t.AfrvRD),
                                            onClick: () => {
                                                t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                    en.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: s?.sessionId,
                                                        page_type: n,
                                                        page_category: n === z.HOME ? void 0 : s?.pageCategory,
                                                        cta_name: "browse the shop button",
                                                    });
                                            },
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, o.jsx)(nB, { peaking: m, transitioning: l === P.Pf.OUT }),
                ],
            }),
        })
    );
};
var ls = n(256067);
let la = () =>
        (0, o.jsxs)("div", {
            className: ls.z,
            children: [
                (0, o.jsx)("img", {
                    className: ls.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: D.intl.string(D.t["p8+qtU"]),
                }),
                (0, o.jsx)(ed.D, { variant: "heading-xl/semibold", children: D.intl.string(D.t["p8+qtU"]) }),
                (0, o.jsx)(J.E, { variant: "text-md/medium", children: D.intl.string(D.t.UEiyvs) }),
            ],
        }),
    li = [P.G2.HOME, P.G2.ORBS];
function lr(e) {
    let {
            tab: t,
            categories: n,
            transitionToTab: l,
            transitionState: s,
            updateAnalyticsState: a,
            refreshCategories: i,
        } = e,
        r = (0, T.bG)([L.A, K.A], () =>
            null != L.A.error
                ? `shop load fetch categories error: ${L.A.error.message}`
                : null != K.A.claimError
                  ? `shop load claim error: ${K.A.claimError.message}`
                  : null != K.A.fetchError
                    ? `shop load fetch purchase error: ${K.A.fetchError.message}`
                    : void 0,
        );
    !(function (e) {
        let t = (0, T.bG)([v.default], () => v.default.getCurrentUser()),
            { noCache: n, includeUnpublished: l } = (0, eI.A)();
        c.useEffect(() => {
            null != e &&
                Y.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: l.toString(),
                    },
                });
        }, [e, t, n, l]);
    })(r);
    let d = (0, T.bG)([V.Ay], () => V.Ay.useReducedMotion),
        u = (0, G.W6)(),
        g = (0, G.zy)(),
        [m] = c.useState(() => {
            if ("POP" === u.action) {
                let e;
                return (e = eN), (eN = null), e ?? void 0;
            }
        }),
        [h, x] = c.useState(m),
        [E, f] = c.useState(null == m),
        p = c.useMemo(() => {
            let e = new URLSearchParams(g.search).get(P.P1);
            return null != e && "" !== e ? e : void 0;
        }, [g.search]),
        C = c.useMemo(
            () =>
                n.filter(
                    (e) =>
                        !P.MS.some((t) => {
                            let { categorySkuId: n } = t;
                            return n === e.skuId;
                        }),
                ),
            [n],
        ),
        b = (0, W.U)("CollectiblesContent"),
        S = (0, $.a)("CollectiblesContent"),
        j = c.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: s,
                    isInternalShopDeeplink: i,
                    isOrbsExclusive: r,
                } = e;
                if ((a(t, n), S && null != n && i && !r))
                    return void u.push(el.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n));
                let o = s && !d,
                    c = r ? P.G2.ORBS : P.G2.CATALOG;
                x(n), f(!i), l(c, o);
            },
            [d, l, a, S, u],
        ),
        { searchError: _ } = (0, q.S)();
    return null != _
        ? (0, o.jsx)(la, {})
        : null != r
          ? (0, o.jsx)(th.h, { onRetry: i, errorMessage: r, errorOrigin: th.A.SHOP_PAGE })
          : t === P.G2.HOME && b
            ? (0, o.jsx)(ll, { tab: z.HOME, transitionState: s, handleTransition: j })
            : t === P.G2.ORBS && b
              ? (0, o.jsx)(ll, { tab: z.ORBS, transitionState: s, handleTransition: j })
              : li.includes(t)
                ? (0, o.jsx)(n2, { handleTransition: j, tab: t, transitionState: s })
                : (0, o.jsx)(tg, {
                      tab: t,
                      categories: C,
                      initialCategoryId: h ?? p,
                      showFilterInitially: E && null == p,
                      onUnmount: () => {
                          x(void 0), f(!0);
                      },
                  });
}
var lo = n(956123),
    lc = n(766075),
    ld = n(893489);
let lu = { pink: "pinkCountdown" },
    lg = c.memo(function (e) {
        let { message: t, onClick: n, countdownEndDate: l, variant: s } = e,
            a = c.useMemo(() => {
                if (null == l) return null;
                let e = l instanceof Date ? l : new Date(l);
                return isNaN(e.getTime()) ? null : e;
            }, [l]),
            i = (0, tO.A)(a ?? 0, 1e3, void 0, null == a);
        if (null != a && Object.values(i).every((e) => 0 === e)) return null;
        let r = null != s ? ld[s] : void 0,
            d = null != s ? ld[lu[s]] : void 0;
        return (0, o.jsx)(eY.D, {
            className: u()(ld.nagBar, r),
            onClick: n,
            "aria-label": D.intl.string(D.t["wjws+K"]),
            children: (0, o.jsxs)("div", {
                className: ld.content,
                children: [
                    (0, o.jsx)(J.E, {
                        variant: "text-md/medium",
                        color: "text-overlay-light",
                        className: ld.message,
                        children: t,
                    }),
                    null != a && (0, o.jsx)(tT, { endDate: a, size: "md", className: d, showSeconds: !0 }),
                ],
            }),
        });
    });
var lm = n(870308),
    lh = n(650583);
function lx(e) {
    let { children: t, shouldAddEventListener: n, onClose: l } = e,
        s = (0, h.useHasAnyModalOpen)();
    return (
        c.useEffect(() => {
            if (n && !s) return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            function e(e) {
                e.key === lh.N$.Escape && l();
            }
        }, [n, s, l]),
        t
    );
}
let lE = function (e) {
    var t;
    let { tab: n = P.G2.HOME } = e;
    (0, S.P)(b.a), (0, F.g)();
    let l = (0, f.A)((0, g.A)()),
        s = (0, m.bG)([v.default], () => v.default.getCurrentUser());
    (0, _.pE)();
    let a = (0, eB.yB)("CollectiblesShop"),
        { onClose: i } = (function () {
            let { search: e } = (0, G.zy)(),
                t = (0, G.g)(),
                n = c.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                l = null != n ? parseInt(n, 10) : null;
            return {
                onClose: c.useCallback(() => {
                    if (0 === l) {
                        (0, nF.aX)(), (0, lc.openUserSettings)();
                        return;
                    }
                    (0, nF.EL)() ? (0, nF.aX)() : (0, nF.pX)(el.BVt.APP);
                }, [l]),
                source: l,
                ...t,
            };
        })(),
        { currentTab: r, hasFilters: d } = (0, U.v)(),
        N = c.useMemo(() => (n === P.G2.HOME && null != r && d() ? r : n), [n, r, d]);
    (t = O.useConfig({ location: "CollectiblesShop" }).useEndpoint ? el.FYj : void 0),
        c.useEffect(() => {
            null != t && (0, j.tx)([t]);
        }, [t]);
    let { categories: z, refreshCategories: V } = (0, H.Ay)({ logPerf: !0 }, { sessionId: l, tab: N }),
        W = c.useMemo(() => [...z.values()], [z]),
        [Y, K] = c.useState(),
        $ = (0, m.bG)([L.A], () => L.A.getCategory(Y)?.name),
        [q, Z] = c.useState();
    (0, ey.XU)(l);
    let X = c.useCallback((e, t) => {
            Z(e), K(t);
        }, []),
        { selectedTab: J, transitionState: Q, transitionToTab: ee } = (0, w.o)(N);
    (0, C.HU)({ location: D.intl.string(D.t.pWG4ze) }), (0, k.uS)(l, J, $, Q, q), (0, k.N0)(J, s);
    let { dismissShopButtonDC: et } = (0, lm.A)();
    c.useEffect(() => {
        et();
    }, [et]),
        c.useEffect(() => {
            (0, E.I)(el.BVt.COLLECTIBLES_SHOP);
        }, []);
    let en = c.useRef(null),
        es = c.useRef(null);
    (0, x.tj)(en);
    let ea = (0, h.useHasAnyModalOpen)();
    c.useEffect(() => {
        es.current?.focus();
    }, []),
        (0, eB.gB)();
    let { analyticsLocations: ei } = (0, k.lC)(J),
        er = (function (e, t) {
            let n = (0, T.bG)([R.A], () => R.A.getUserDiscount(B.tU)),
                l = (0, T.bG)([y.default], () => y.default.locale),
                s = M.useConfig({ location: t }).enabled;
            if (c.useMemo(() => null != n && s && e !== P.G2.ORBS, [n, s, e])) {
                let e =
                    null != n && null != n.expiresAt
                        ? new Date(n.expiresAt).toLocaleDateString(l, { day: "numeric", month: "numeric" })
                        : void 0;
                return { type: 0, countdownEndDate: n?.expiresAt, message: D.intl.format(D.t.RCo9MF, { date: e }) };
            }
        })(J, "collectibles_shop");
    return (0, o.jsx)(p.f5, {
        value: ei,
        children: (0, o.jsx)(A.R9, {
            newValue: { sessionId: l, pageCategory: $, pageSize: P.l5 },
            children: (0, o.jsx)(I.iM, {
                tab: J,
                children: (0, o.jsx)(lx, {
                    onClose: i,
                    shouldAddEventListener: !1,
                    children: (0, o.jsxs)("div", {
                        className: u()(eS.bx, { [eB.jP]: a }),
                        ref: es,
                        inert: ea,
                        tabIndex: -1,
                        children: [
                            (0, o.jsx)(lo.G, { handleTransition: ee, selectedTab: J }),
                            null != er &&
                                (0, o.jsx)(lg, {
                                    message: er.message,
                                    onClick: () => ee(P.G2.HOME),
                                    variant: "pink",
                                    countdownEndDate: er.countdownEndDate,
                                }),
                            (0, o.jsx)("div", {
                                className: u()(eS.td, {
                                    [eS.RK]: Q === P.Pf.VISIBLE,
                                    [eS.in]: Q === P.Pf.IN,
                                    [eS.FD]: Q === P.Pf.OUT,
                                }),
                                children: (0, o.jsx)(lr, {
                                    tab: J,
                                    refreshCategories: V,
                                    transitionToTab: ee,
                                    transitionState: Q,
                                    categories: W,
                                    updateAnalyticsState: X,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
};
