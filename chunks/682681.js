n.r(t), n.d(t, { default: () => sp });
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
    R = n(621653),
    y = n(983545),
    M = n(23161);
n(323874), n(14289), n(35956), n(321073);
var P = n(873263),
    B = (((s = {}).HOME = "home"), (s.CATALOG = "catalog"), (s.ORBS = "orbs"), s),
    D = n(17928),
    H = n(775602),
    F = n(578797),
    w = n(140218),
    G = n(38405),
    U = n(4227),
    z = n(50920),
    V = n(856686),
    W = n(689175),
    Y = n(364522),
    K = n(834730),
    $ = n(821609),
    q = n(783977),
    Z = n(59520),
    X = n(174459),
    J = n(652215);
function Q(e, t, n, s) {
    let { scrollTop: l = 0, scrollOffset: i = 0, scrollHeight: a = 0, scrollWidth: r = 0 } = s;
    if (a > 0) {
        let s = (l + i) / a;
        s > 0 &&
            X.default.track(e, {
                scroll_visible_percent: s,
                source: n,
                page_height: Math.round(a),
                page_width: Math.round(r),
                page_session_id: t,
            });
    }
}
function ee(e, t) {
    let { analyticsSource: n } = (0, T.lC)(t),
        s = (0, Z.I)(Q, 5e3, [], { trailing: !0 }),
        l = (0, L.uM)(),
        i = l?.sessionId;
    return {
        handleScroll: c.useCallback(() => {
            if (null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    s(J.HAw.COLLECTIBLES_SHOP_SCROLLED, null != i ? i : "", n, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth,
                    });
            }
        }, [s, n, i, e]),
    };
}
var et = n(354328),
    en = n(356118),
    es = n(619835),
    el = n(641150),
    ei = n(297264),
    ea = n(375708);
function er() {
    let { itemTypeFilters: e, searchQuery: t } = (0, M.v)((e) => e),
        { totalCount: n, isFetchingResults: s } = (0, V.S)(),
        l = (0, M.v)((e) => e.hasFilters()),
        i = c.useCallback(() => {
            if (!l) return "";
            if (s) return ea.intl.string(ea.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return ea.intl.format(ea.t.KJMJOz, { count: n, search: e });
            }
            return 1 === e.size && e.has(el.q.AVATAR_DECORATION)
                ? ea.intl.format(ea.t.s1UzGQ, { count: n })
                : 1 === e.size && e.has(el.q.NAMEPLATE)
                  ? ea.intl.format(ea.t.ZWGN9T, { count: n })
                  : 1 === e.size && e.has(el.q.PROFILE_EFFECT)
                    ? ea.intl.format(ea.t["v/7apu"], { count: n })
                    : 1 === e.size && e.has(el.q.PROFILE_FRAME)
                      ? ea.intl.format(ea.t.eu4eRy, { count: n })
                      : 1 === e.size && e.has(el.q.BUNDLE)
                        ? ea.intl.format(ea.t.fZ1rdk, { count: n })
                        : ea.intl.format(ea.t["/rPvmQ"], { count: n });
        }, [e, n, l, t, s]);
    return (0, o.jsx)(ei.D, { variant: "heading-lg/semibold", children: i() });
}
var eo = n(172218),
    ec = n(932793),
    ed = n(511265),
    eu = n(206077),
    eg = n(100057),
    em = n(828515),
    eh = n(484469),
    eE = n(346448),
    ex = n(195261),
    ef = n(132866);
let ep = function () {
    return (0, o.jsx)("div", {
        className: ef.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, o.jsxs)(
                "div",
                {
                    className: ex.vY,
                    children: [
                        (0, o.jsx)("div", { className: u()(eE.sW, ef.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, o.jsx)(eh.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
};
var eC = n(828614),
    e_ = n(159439),
    eb = n(998694);
let eS = null;
var ej = n(758836);
function ev(e) {
    let { category: t } = e,
        n = (0, m.bG)([v.default], () => v.default.getCurrentUser()),
        s = (0, eu.X)(t.products),
        l = (0, ed.p)()(s);
    return null == n || 0 === l.length
        ? null
        : (0, o.jsx)("div", {
              className: ex.vY,
              children: l.map((e, t) =>
                  (0, o.jsx)(
                      L.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, o.jsx)(eC.A, { skuId: e.skuId, skipLimitedTimeCheck: !0 }, e.skuId),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function eL(e) {
    let { category: t } = e,
        [n, s] = c.useState(!1),
        l = (0, eo.K)(function (e) {
            s(e);
        }, 0.15),
        i = (0, P.W6)(),
        a = (0, z.a)("CollectiblesCatalogContent"),
        r = (0, L.uM)(),
        d = c.useCallback(() => {
            X.default.track(J.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: r?.sessionId,
                sku_id: t.skuId,
                page_type: ej.G2.CATALOG,
                page_section: r?.pageSection,
                page_category: t.name,
                page_index: r?.pageIndex,
                page_size: r?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (eS = t.skuId),
                i.push(J.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
        }, [r?.pageIndex, r?.pageSection, r?.pageSize, r?.sessionId, t.name, t.skuId, i]);
    return (0, o.jsxs)("div", {
        className: ex.EF,
        ref: l,
        children: [(0, o.jsx)(em.A, { category: t, onSelect: a ? d : void 0 }), (0, o.jsx)(ev, { category: t })],
    });
}
function eA(e) {
    let { categories: t, setCategoryRef: n, currentPage: s, handlePageChange: l, initialCategoryId: i } = e,
        a = (0, L.uM)(),
        r = (0, e_.U)(),
        d = a?.sessionId ?? "",
        { noCache: u, includeUnpublished: g } = (0, eb.A)(),
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
        let t = Math.floor(e / ej.l5) + 1;
        t !== s && l(t), (h.current = i);
    }, [i, m, l, s]);
    let E = c.useMemo(() => {
        let e = (s - 1) * ej.l5;
        return m.slice(e, e + ej.l5);
    }, [m, s]);
    return (c.useEffect(() => {
        (0, eg.z)({
            sessionId: d,
            checkpoint: eg.t.SHOP_MOUNTED,
            tab: ej.G2.CATALOG,
            unpublishedCategoriesShown: g,
            cacheDisabled: u,
        });
    }, []),
    c.useEffect(() => {
        r ||
            0 === E.length ||
            (0, eg.z)({
                sessionId: d,
                checkpoint: eg.t.SHOP_RENDERED,
                tab: ej.G2.CATALOG,
                unpublishedCategoriesShown: g,
                cacheDisabled: u,
            });
    }, [d, g, u, r, E.length]),
    r)
        ? (0, o.jsx)(ep, {})
        : (0, o.jsxs)("div", {
              className: ex.LZ,
              children: [
                  E.map((e, t) =>
                      (0, o.jsx)(
                          "div",
                          {
                              ref: (t) => n(e.skuId, t),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": ea.intl.formatToPlainString(ea.t.FNtLb3, { category: e.name }),
                              children: (0, o.jsx)(L.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, o.jsx)(eL, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, o.jsx)("div", {
                      className: ex.Ej,
                      children: (0, o.jsx)(ec.m, {
                          currentPage: s,
                          totalCount: m.length,
                          pageSize: ej.l5,
                          onPageChange: l,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var eI = n(177366),
    eN = n(401864),
    eO = n(124987),
    eT = n(691885),
    ek = n(146919),
    eR = n(858733);
let ey = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, M.v)(),
        s = (0, L.uM)(),
        l = (0, ek.yB)("CollectiblesSortSelect"),
        i = n(),
        a = c.useMemo(() => ej.QB.filter((e) => e.sortType !== eO.$.RELEVANCE || i), [i]),
        r = c.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === eO.$.RECENCY
                ? { label: ea.intl.string(ea.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === eO.$.PRICE
                  ? n === eN.A.ASC
                      ? { label: ea.intl.string(ea.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: ea.intl.string(ea.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === eO.$.RELEVANCE
                    ? { label: ea.intl.string(ea.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: ea.intl.string(ea.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        d = c.useCallback(
            (e) =>
                ({
                    recent: { sortType: eO.$.RECENCY, sortDirection: eN.A.DESC },
                    "price-asc": { sortType: eO.$.PRICE, sortDirection: eN.A.ASC },
                    "price-desc": { sortType: eO.$.PRICE, sortDirection: eN.A.DESC },
                    popularity: { sortType: eO.$.POPULARITY, sortDirection: eN.A.DESC },
                    relevance: { sortType: eO.$.RELEVANCE, sortDirection: eN.A.DESC },
                })[e],
            [],
        ),
        g = c.useCallback(
            (e) => {
                let n = r(d(e));
                X.default.track(J.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        className: u()(eR.k, { [ek.jP]: l }),
        children: (0, o.jsx)(eT.l, {
            label: ea.intl.string(ea.t.uaX705),
            hideLabel: !0,
            options: a.map(r),
            onSelectionChange: g,
            value: m.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var eM =
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
    eP =
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
    eB = n(150934),
    eD = n(508770),
    eH = n(602853),
    eF = n(661531),
    ew = n(866665),
    eG = n(939249),
    eU = n(947641),
    ez = n(604338),
    eV = n(785866),
    eW = n(373846),
    eY = n(308323),
    eK = n(608599),
    e$ = n(685761),
    eq = n(157225),
    eZ = n(413249),
    eX = n(510241),
    eJ = n(601198),
    eQ = n(736653),
    e0 = n(223311),
    e1 = n(7250);
let e2 = (0, N.mj)({
    name: "2026-07-collectibles-collabs-filter",
    kind: "user",
    defaultConfig: { collabsFilterEnabled: !1 },
    variations: { 0: { collabsFilterEnabled: !1 }, 1: { collabsFilterEnabled: !0 } },
});
var e5 = n(13875),
    e4 = n(818348),
    e3 = n(967339);
function e6() {
    let {
            onToggleOrbEligible: e,
            orbEligible: t,
            onToggleThirdPartyOnly: n,
            thirdPartyOnly: s,
            reset: l,
            hasFilters: i,
        } = (0, M.v)(),
        a = e2.useConfig({ location: "FilterBar" }).collabsFilterEnabled,
        r = i(),
        d = (0, e5.sk)("FilterBar"),
        g = (0, L.uM)(),
        m = c.useRef(null),
        h = (0, e0.A)(J.FYj),
        [E, x] = c.useState(!1),
        f = c.useMemo(() => ej._6.filter((e) => d || e !== el.q.PROFILE_FRAME), [d]),
        p = c.useCallback(
            (e) => {
                X.default.track(J.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: g?.sessionId,
                    page_section: g?.pageSection,
                    page_category: g?.pageCategory,
                    page_index: g?.pageIndex,
                    page_size: g?.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [g],
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
                        ref: m,
                        tabIndex: -1,
                        children: (0, o.jsx)(K.E, {
                            variant: "text-md/semibold",
                            className: e3.hr,
                            children: ea.intl.string(ea.t.Qk6r1a),
                        }),
                    }),
                    f.map((e) => (0, o.jsx)(e7, { filter: e, trackFilterAction: p }, e)),
                    (0, o.jsx)(eB.S, {
                        checked: t,
                        onChange: () => {
                            p(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                        },
                        label: ea.intl.string(ea.t.AHHHgG),
                    }),
                    a && (0, o.jsx)(eB.S, { checked: s, onChange: C, label: ea.intl.string(ea.t["+W8gb+"]) }),
                    null != h &&
                        (0, o.jsx)(eB.S, {
                            checked: E,
                            onChange: () => {
                                p(`filter offer eligible ${!1 === E ? "on" : "off"}`), x((e) => !e);
                            },
                            label: ea.intl.string(ea.t.hY8Ft1),
                        }),
                ],
            }),
            (0, o.jsx)(e9, { trackFilterAction: p }),
            (0, o.jsx)(tt, { trackFilterAction: p }),
            r &&
                (0, o.jsx)($.$, {
                    variant: "secondary",
                    onClick: () => {
                        p("filter reset"), l(), requestAnimationFrame(() => m.current?.focus());
                    },
                    text: ea.intl.string(ea.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function e7(e) {
    let { filter: t, trackFilterAction: n } = e,
        s = {
            [el.q.AVATAR_DECORATION]: ea.intl.string(ea.t.dRZYNE),
            [el.q.PROFILE_EFFECT]: ea.intl.string(ea.t["1cNjtx"]),
            [el.q.NAMEPLATE]: ea.intl.string(ea.t.V68Fqz),
            [el.q.PROFILE_FRAME]: ea.intl.string(ea.t.ecTJkR),
            [el.q.BUNDLE]: ea.intl.string(ea.t.FYFpps),
        },
        { itemTypeFilters: l, onToggleItemType: i } = (0, M.v)(),
        a = (0, o.jsx)(eB.S, {
            checked: l.has(t),
            onChange: () => {
                let e = s[t]?.toLowerCase() != null ? s[t].toLowerCase() : t;
                n(`filter item type ${e} ${!1 === l.has(t) ? "on" : "off"}`), i(t);
            },
            label: s[t] ?? "",
        });
    return t === el.q.PROFILE_FRAME
        ? (0, o.jsxs)("div", { className: e3.Ym, children: [a, (0, o.jsx)(eD.E, { type: "new" })] })
        : a;
}
function e9(e) {
    let { trackFilterAction: t } = e,
        n = c.useMemo(
            () => [
                { color: "#9B59B6", label: ea.intl.string(ea.t.kqUD4P), enum: eM.PURPLE },
                { color: "#3498DB", label: ea.intl.string(ea.t.qQTRae), enum: eM.BLUE },
                { color: "#2ECC71", label: ea.intl.string(ea.t["f/Ylk6"]), enum: eM.GREEN },
                { color: "#A0522D", label: ea.intl.string(ea.t["Sd/BMa"]), enum: eM.BROWN },
                { color: "#F1C40F", label: ea.intl.string(ea.t["0fevYz"]), enum: eM.YELLOW },
            ],
            [],
        ),
        s = c.useMemo(
            () => [
                { color: "#E67E22", label: ea.intl.string(ea.t.ZE7weD), enum: eM.ORANGE },
                { color: "#E74C3C", label: ea.intl.string(ea.t.hKJGOM), enum: eM.RED },
                { color: "#EC407A", label: ea.intl.string(ea.t.HvLEGM), enum: eM.PINK },
                { color: "#FFFFFF", label: ea.intl.string(ea.t["CB+lNO"]), enum: eM.WHITE },
                { color: "#262626", label: ea.intl.string(ea.t["dMey+v"]), enum: eM.BLACK },
            ],
            [],
        );
    return (0, o.jsxs)("div", {
        className: e3.KZ,
        children: [
            (0, o.jsx)(K.E, { variant: "text-md/semibold", className: e3.hr, children: ea.intl.string(ea.t.K1xGoG) }),
            (0, o.jsx)(e8, { colors: n, trackFilterAction: t }),
            (0, o.jsx)(e8, { colors: s, trackFilterAction: t }),
        ],
    });
}
function e8(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: s, onToggleColor: l } = (0, M.v)();
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
        { themeFilters: n, onToggleTheme: s } = (0, M.v)(),
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
                    name: ea.intl.string(ea.t.aVBOKh),
                    icon: (0, o.jsx)(ez.E, { size: "xs", color: a(eP.ANIME) }),
                    enum: eP.ANIME,
                },
                {
                    name: ea.intl.string(ea.t["3WoZBc"]),
                    icon: (0, o.jsx)(eV._, { size: "xs", color: a(eP.GAMING) }),
                    enum: eP.GAMING,
                },
                {
                    name: ea.intl.string(ea.t.yuEmLj),
                    icon: (0, o.jsx)(eW.C, { size: "xs", color: a(eP.CUTE_COZY) }),
                    enum: eP.CUTE_COZY,
                },
                {
                    name: ea.intl.string(ea.t.mMvCHo),
                    icon: (0, o.jsx)(eY.L, { size: "xs", color: a(eP.SCI_FI) }),
                    enum: eP.SCI_FI,
                },
                {
                    name: ea.intl.string(ea.t.TlhOQC),
                    icon: (0, o.jsx)(eK.L, { size: "xs", color: a(eP.FOOD_DRINKS) }),
                    enum: eP.FOOD_DRINKS,
                },
                {
                    name: ea.intl.string(ea.t["4IaUIM"]),
                    icon: (0, o.jsx)(e$.f, { size: "xs", color: a(eP.FANTASY) }),
                    enum: eP.FANTASY,
                },
                {
                    name: ea.intl.string(ea.t["w0nSG/"]),
                    icon: (0, o.jsx)(eq.N, { size: "xs", color: a(eP.ANIMALS_PETS) }),
                    enum: eP.ANIMALS_PETS,
                },
                {
                    name: ea.intl.string(ea.t.cJng7v),
                    icon: (0, o.jsx)(eZ.p, { size: "xs", color: a(eP.NATURE) }),
                    enum: eP.NATURE,
                },
                {
                    name: ea.intl.string(ea.t["5mUvyM"]),
                    icon: (0, o.jsx)(eX.T, { size: "xs", color: a(eP.MOVIES_TV_SHOWS) }),
                    enum: eP.MOVIES_TV_SHOWS,
                },
                {
                    name: ea.intl.string(ea.t.MB9H5Z),
                    icon: (0, o.jsx)(eJ.e, { size: "xs", color: a(eP.DARK_MOODY) }),
                    enum: eP.DARK_MOODY,
                },
            ],
            [a],
        );
    return (0, o.jsxs)("div", {
        className: e3.KZ,
        children: [
            (0, o.jsx)(K.E, { variant: "text-md/semibold", className: e3.hr, children: ea.intl.string(ea.t.t1Ztrp) }),
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
                            children: [a, (0, o.jsx)(K.E, { color: i(r), variant: "text-md/medium", children: l })],
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
                alt: ea.intl.string(ea.t.oezC3x),
                className: ts._,
            }),
            (0, o.jsx)(ei.D, { variant: "heading-xl/semibold", children: ea.intl.string(ea.t.oezC3x) }),
            (0, o.jsx)(K.E, { variant: "text-md/medium", children: ea.intl.string(ea.t["Tc/Ndl"]) }),
        ],
    });
}
var ti = n(996824);
let ta = { flattenProductVariants: !0 };
function tr(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: s } = e,
        l = (0, L.uM)(),
        i = l?.sessionId ?? "",
        { noCache: a, includeUnpublished: r } = (0, eb.A)(),
        d = (0, m.bG)([v.default], () => v.default.getCurrentUser()),
        { skus: g, currentPage: h, totalCount: E, isFetchingResults: x } = (0, V.S)(),
        f = (0, m.yK)([A.A], () => A.A.getProductsBySkus(g)),
        p = c.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        C = g?.join("");
    c.useEffect(() => {
        p();
    }, [C, p]);
    let _ = (0, ed.p)(),
        b = c.useMemo(() => _(f), [_, f]);
    c.useEffect(() => {
        t ||
            (0, eg.z)({
                sessionId: i,
                checkpoint: eg.t.SHOP_RENDERED,
                tab: s,
                unpublishedCategoriesShown: r,
                cacheDisabled: a,
            });
    }, [i, r, a, t, s]);
    let S = c.useRef(null),
        { setQueryPageSize: j, setQueryPageOffset: I, queryPageSize: N } = (0, M.v)(),
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
    let y = c.useCallback(
        (e) => {
            X.default.track(J.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                            k && [...Array(N)].map((e, t) => (0, o.jsx)(eh.A, {}, t)),
                            !k &&
                                b.map((e, t) =>
                                    null == A.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, o.jsx)(
                                              L.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, o.jsx)(
                                                      eC.A,
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
                        children: (0, o.jsx)(ec.m, {
                            currentPage: h,
                            totalCount: E,
                            pageSize: N,
                            onPageChange: y,
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
        a = (0, et.A)("shop_include_unpublished");
    (0, M.S)(a);
    let r = c.useRef(null),
        { handleScroll: d } = ee(r, t),
        u = (0, F.U)("Shop Browse"),
        { setCategoryRef: g, handleScrollToCategory: m } = (0, eI.k0)(r.current),
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
                    (0, o.jsx)(W.Gt, {
                        className: to.OW,
                        ref: r,
                        onScroll: d,
                        children: u
                            ? (0, o.jsx)("div", {
                                  className: to.en,
                                  children: (0, o.jsx)("div", {
                                      className: to.pf,
                                      children: (0, o.jsx)(en.Z_, { tenantId: J.FYj, templateId: es.b.BACK_CATALOG }),
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
        m = (0, M.v)((e) => e.hasDefaultFilters()),
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
                X.default.track(J.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    (X.default.track(J.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                            (0, o.jsx)("div", { className: to.lQ, children: (0, o.jsx)(er, {}) }),
                            (0, o.jsxs)("div", {
                                className: u()(to.wR, { [to.Im]: t }),
                                children: [
                                    (0, o.jsxs)("div", {
                                        className: to.Ul,
                                        children: [
                                            (0, o.jsx)(K.E, {
                                                variant: "text-md/semibold",
                                                children: ea.intl.string(ea.t.uaX705),
                                            }),
                                            (0, o.jsx)(ey, {}),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        ref: p,
                                        children: (0, o.jsx)($.$, {
                                            onClick: function () {
                                                let e = !n;
                                                X.default.track(J.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                            text: ea.intl.string(n ? ea.t.fYtm6f : ea.t["TeTYE+"]),
                                            icon: q.R,
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
                                    children: (0, o.jsx)(W.Ch, { className: to.Qo, children: (0, o.jsx)(e6, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, o.jsx)(L.R9, {
                              newValue: { pageIndex: x },
                              children: (0, o.jsx)(eA, {
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
                              K.E,
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
                              K.E,
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
            (0, o.jsx)(tL.A, { children: ea.intl.format(ea.t.j6IyVe, { days: i, hours: a, minutes: r }) }),
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
                    (0, o.jsx)(K.E, {
                        variant: "text-md/medium",
                        className: tO.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, o.jsx)(K.E, {
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
                                  badgeText: (0, ty.HF)(e.unpublishedAt) ? ea.intl.string(ea.t["h/uBCR"]) : void 0,
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
                        badgeText: (0, ty.HF)(s.unpublishedAt) ? ea.intl.string(ea.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != l &&
                    (0, o.jsx)(tM.S, {
                        category: l,
                        badgeText: (0, ty.HF)(l.unpublishedAt) ? ea.intl.string(ea.t["h/uBCR"]) : void 0,
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
    tW =
        (((r = {}).RECOMMENDED = "recommended"),
        (r.POPULAR = "popular"),
        (r.RECENT = "recent"),
        (r.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (r.RANDOM = "random"),
        r),
    tY = n(153488),
    tK = n(248352),
    t$ = n(313276),
    tq = n(623373),
    tZ = n(885574),
    tX = n(975807),
    tJ = n(975571),
    tQ = n(938682);
let t0 = function (e) {
        let { personalizedResults: t, label: n } = e,
            s = n ?? ea.intl.string(ea.t.NSv5KV);
        return (0, o.jsxs)("div", {
            className: tQ.L,
            children: [
                (0, o.jsx)(ei.D, { variant: "heading-lg/semibold", children: s }),
                t &&
                    (0, o.jsx)(ew.m, {
                        text: ea.intl.string(ea.t["3taPdj"]),
                        position: "top",
                        "aria-label": ea.intl.string(ea.t["3taPdj"]),
                        children: (0, o.jsx)(eG.D, {
                            onClick: () => (0, tX.A)(tJ.A.getArticleURL(J.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: tQ.s,
                            children: (0, o.jsx)(tZ.m, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    t1 = function (e) {
        let {
                isLoading: t,
                title: n,
                sortedSkuIds: s,
                numVisibleItems: l,
                prioritizeUserDiscounts: i,
                tab: a,
                buttonContainerClassName: r,
                orbsSupportedOnly: d,
            } = e,
            g = (0, D.bG)([v.default], () => v.default.getCurrentUser()),
            m = tw.Ay.canUseShopDiscounts(g),
            h = (0, tn.Mk)(a),
            E = (0, ek.yB)("FeedBlock"),
            {
                sortType: x,
                setSortType: f,
                sortedItems: C,
                sortOptions: _,
                shuffleProducts: b,
                showRecommendationOption: S,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: n, prioritizeUserDiscounts: s, orbsSupportedOnly: l } = e,
                    i = (0, D.bG)([tY.A], () => tY.A.hasConsented(J.YAq.PERSONALIZATION)),
                    a = c.useMemo(() => t?.[tW.RECOMMENDED] ?? [], [t]),
                    r = c.useMemo(() => t?.[tW.POPULAR] ?? [], [t]),
                    o = a.length > 0 && i,
                    [d, u] = c.useState(o ? tW.RECOMMENDED : tW.POPULAR),
                    g = (0, D.bG)([A.A], () => A.A.productsWithVariantsAsGroup),
                    m = c.useMemo(() => (0, ty.CE)(g), [g]),
                    h = (0, D.bG)([tK.A], () => tK.A.getUserDiscounts()),
                    E = (0, t$.A)(),
                    x = (0, ed.p)(),
                    [f, p] = c.useState([]),
                    C = c.useCallback(() => {
                        u(tW.RANDOM), p(tV().shuffle(m));
                    }, [m]);
                c.useEffect(() => {
                    p(tV().shuffle(m));
                }, [m]);
                let _ = c.useMemo(() => {
                    let e = [];
                    switch (d) {
                        case tW.RECENT:
                            e = m;
                            break;
                        case tW.PRICE_LOW_TO_HIGH:
                            e = (0, ty.bf)([...m], n, l);
                            break;
                        case tW.RECOMMENDED: {
                            let t = E(a);
                            e = s ? (0, ty.Bs)(t, h) : t;
                            break;
                        }
                        case tW.POPULAR: {
                            let t = E(r);
                            e = s ? (0, ty.Bs)(t, h) : t;
                            break;
                        }
                        case tW.RANDOM:
                            e = f;
                    }
                    return l ? (0, tq.ex)(x(e)) : x(e);
                }, [d, l, x, n, m, E, a, s, h, r, f]);
                return {
                    sortType: d,
                    setSortType: u,
                    sortedItems: (0, eu.X)(_),
                    sortOptions: c.useMemo(() => {
                        let e = [
                            { value: tW.POPULAR, label: ea.intl.string(ea.t.Y68e5p) },
                            { value: tW.RECENT, label: ea.intl.string(ea.t["51Bhiz"]) },
                            { value: tW.PRICE_LOW_TO_HIGH, label: ea.intl.string(ea.t.m8RVU2) },
                        ];
                        return o && e.unshift({ value: tW.RECOMMENDED, label: ea.intl.string(ea.t.zPWgFG) }), e;
                    }, [o]),
                    showRecommendationOption: o,
                    shuffleProducts: C,
                };
            })({ sortedSkuIds: s, hasShopDiscount: m, prioritizeUserDiscounts: i, orbsSupportedOnly: d }),
            j = (0, D.bG)([H.Ay], () => H.Ay.useReducedMotion),
            I = (0, D.bG)([tF.A], () => tF.A.isFocused()),
            N = !j && I,
            { animationPhase: O, startAnimation: T } = (() => {
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
            k = (0, L.uM)(),
            R = k?.sessionId ?? "",
            { analyticsLocations: y } = (0, p.Ay)(tR.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            M = c.useRef(null),
            P = c.useRef(null),
            [B, F] = c.useState(!1),
            w = c.useCallback(
                (e) => {
                    F(!1),
                        T({ isShuffling: !1, onOutroComplete: () => f(e), returnRef: P }),
                        X.default.track(J.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: R,
                            sort_type: e,
                        });
                },
                [T, f, R],
            );
        return null == g
            ? null
            : (0, o.jsx)(p.f5, {
                  value: y,
                  children: (0, o.jsxs)("div", {
                      className: u()(tP.lD, tP.YB),
                      children: [
                          (0, o.jsxs)("div", {
                              className: tP.$6,
                              children: [
                                  (0, o.jsx)(t0, { label: n, personalizedResults: S }),
                                  (0, o.jsxs)("div", {
                                      className: u()(tP.IE, { [ek.jP]: E }),
                                      children: [
                                          (0, o.jsxs)("div", {
                                              className: tP.gd,
                                              children: [
                                                  (0, o.jsx)(K.E, {
                                                      variant: "text-md/medium",
                                                      children: ea.intl.string(ea.t.uaX705),
                                                  }),
                                                  (0, o.jsx)("div", {
                                                      className: u()(r, tP.pI),
                                                      ref: P,
                                                      children: (0, o.jsx)(eT.l, {
                                                          label: ea.intl.string(ea.t.uaX705),
                                                          hideLabel: !0,
                                                          options: _,
                                                          onSelectionChange: w,
                                                          formatOption: (e) => {
                                                              let { label: t, value: n } = e;
                                                              return { id: n, label: t, value: n };
                                                          },
                                                          value: x,
                                                          selectionMode: "single",
                                                          fullWidth: !0,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, o.jsx)("div", {
                                              className: r,
                                              children: (0, o.jsx)($.$, {
                                                  variant: "secondary",
                                                  text: ea.intl.string(ea.t.X3tnc4),
                                                  buttonRef: M,
                                                  onClick: function () {
                                                      F(!0),
                                                          T({ isShuffling: !0, onOutroComplete: b, returnRef: M }),
                                                          X.default.track(
                                                              J.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: R },
                                                          );
                                                  },
                                                  disabled: O !== tU.MOUNTED && O !== tU.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, o.jsx)(tL.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: B && O === tU.FINISHED ? ea.intl.string(ea.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, o.jsx)("div", {
                              className: tP.hm,
                              children: t
                                  ? (0, o.jsx)(o.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, o.jsx)(eh.A, {}, t + 1)),
                                    })
                                  : C.slice(0, l).map((e, t) => {
                                        let n,
                                            s = A.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == s) return null;
                                        if (N)
                                            if (O === tU.SHUFFLE_OUT)
                                                return (0, o.jsx)(
                                                    "div",
                                                    {
                                                        className: tP.Z2,
                                                        children: (0, o.jsx)(eh.A, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                O === tU.SORT_OUT
                                                    ? (n = tP.MW)
                                                    : O === tU.SHUFFLE_IN
                                                      ? (n = tP.aS)
                                                      : O === tU.SORT_IN && (n = tP.F7);
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
                                                    children: (0, o.jsx)(eC.A, {
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
var t2 = n(449543),
    t5 = n(843793);
let t4 = function (e) {
    let { block: t, handleTransition: n, tab: s } = e,
        l = (0, D.bG)([v.default], () => v.default.getCurrentUser()),
        i = (0, tn.Mk)(s),
        a = (0, t$.A)(),
        r = c.useMemo(() => a(t.rankedSkuIds), [t.rankedSkuIds, a]),
        d = (0, eu.X)(r),
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
                  className: u()(t5.kL, tP.YB),
                  children: [
                      null != t.desktopBackgroundImage &&
                          (0, o.jsx)("img", {
                              className: t5.iL,
                              src: t.desktopBackgroundImage,
                              alt: "",
                              "aria-hidden": !0,
                          }),
                      (0, o.jsxs)("div", {
                          className: t5.Qs,
                          children: [
                              (0, o.jsxs)("div", {
                                  className: t5.wx,
                                  children: [
                                      (0, o.jsxs)("div", {
                                          className: t5.Jb,
                                          children: [
                                              (0, o.jsx)(t_.A, {
                                                  location: "FramesProductShelfBlock",
                                                  showTooltip: !0,
                                              }),
                                              (0, o.jsx)(ei.D, {
                                                  variant: "heading-lg/semibold",
                                                  color: "text-overlay-light",
                                                  children: t.title,
                                              }),
                                          ],
                                      }),
                                      null != t.buttonText &&
                                          "" !== t.buttonText &&
                                          (0, o.jsx)($.$, {
                                              variant: "overlay-primary",
                                              text: t.buttonText,
                                              onClick: m,
                                          }),
                                  ],
                              }),
                              (0, o.jsx)(t2.A, {
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
                                                    children: (0, o.jsx)(eC.A, {
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
var t3 = n(269115),
    t6 = n(43990),
    t7 = n(408278),
    t9 = n(789645),
    t8 = n(976860),
    ne = n(49999),
    nt = n(576709),
    nn = n(48093);
let ns = "GAME_SERVER_HOSTING_BANNER";
function nl(e) {
    let { gameServerHostingBannerBlock: t, tab: n } = e,
        s = (0, L.uM)(),
        l = c.useRef(null),
        i = c.useRef(!1),
        a = c.useRef(null),
        [r, d] = c.useState(!1),
        g = c.useCallback(
            (e) => {
                X.default.track(J.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: s?.sessionId,
                    page_type: n,
                    page_category: s?.pageCategory,
                    page_section: s?.pageSection,
                    tile_type: ns,
                    cta_name: e,
                });
            },
            [s?.sessionId, s?.pageCategory, s?.pageSection, n],
        ),
        m = c.useCallback(() => {
            g("go_to_game_server_hosting"), (0, t8.pX)(J.BVt.COLLECTIBLES_SHOP_WITH_TAB(ej.G2.GAME_SERVERS));
        }, [g]),
        h = c.useCallback(() => {
            g("dismiss"),
                d(!0),
                !0 === t.isDismissible &&
                    (0, th.d6)(tm.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, { dismissAction: ne.i.USER_DISMISS });
        }, [g, t.isDismissible]),
        E = c.useCallback(
            (e) => {
                !i.current &&
                    (e && null === a.current
                        ? (a.current = setTimeout(() => {
                              (i.current = !0),
                                  (a.current = null),
                                  X.default.track(J.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: s?.sessionId,
                                      page_type: n,
                                      page_category: s?.pageCategory,
                                      page_section: s?.pageSection,
                                      type: ns,
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
        : (0, o.jsx)(t6.N, {
              theme: e4.NJ.DARKER,
              children: (e) =>
                  (0, o.jsx)(t3.L, {
                      innerRef: l,
                      onChange: E,
                      threshold: 0,
                      children: (0, o.jsx)("div", {
                          ref: l,
                          className: u()(nn.YB, e),
                          children: (0, o.jsxs)("div", {
                              className: nn.kL,
                              children: [
                                  (0, o.jsx)("img", {
                                      className: nn.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, o.jsx)("div", { className: nn.uX }),
                                  !0 === t.isDismissible &&
                                      (0, o.jsx)("div", {
                                          className: nn.b,
                                          children: (0, o.jsx)(t7.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: t9.P,
                                              onClick: h,
                                              "aria-label": ea.intl.string(ea.t.WAI6xu),
                                          }),
                                      }),
                                  (0, o.jsx)("div", {
                                      className: nn.jE,
                                      children: (0, o.jsxs)("div", {
                                          className: nn.rF,
                                          children: [
                                              (0, o.jsxs)("div", {
                                                  className: nn.Z,
                                                  children: [
                                                      (0, o.jsx)(ei.D, {
                                                          className: nn.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: ea.intl.string(nt.default["34GMP9"]),
                                                      }),
                                                      (0, o.jsx)(K.E, {
                                                          className: nn.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: ea.intl.string(nt.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, o.jsx)($.$, {
                                                  variant: "overlay-primary",
                                                  size: "sm",
                                                  text: ea.intl.string(ea.t.jVcuVY),
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
var ni = n(337183),
    na = n(349288),
    nr = n(212407),
    no = n(815280),
    nc = n(10675);
let nd = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        s = (0, eo.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: l, bannerAnimatedUrl: i } = (0, nr.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        r = null != t.body && "" !== t.body,
        c = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, o.jsxs)("div", {
        ref: s,
        className: nc.BX,
        children: [
            (0, o.jsx)("div", {
                className: nc.vK,
                children: null != l && (0, o.jsx)(no.A, { bannerStatic: l, bannerAnimated: i }),
            }),
            (0, o.jsx)("div", {
                className: nc.HQ,
                children: (0, o.jsxs)("div", {
                    className: nc.Yn,
                    children: [
                        null != t.endTime ? (0, o.jsx)(tN, { endDate: t.endTime, size: "lg" }) : null,
                        (0, o.jsx)(ei.D, {
                            variant: "heading-xxl/bold",
                            className: nc.DD,
                            color: "text-strong",
                            style: { ...a },
                            children: t.title,
                        }),
                        r || c
                            ? (0, o.jsxs)(K.E, {
                                  variant: "text-md/medium",
                                  style: { ...a },
                                  children: [
                                      r && t.body,
                                      r && c && " ",
                                      c &&
                                          (0, o.jsx)(na.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: nc.CU,
                                              style: { ...a },
                                              children: ea.intl.string(ea.t.O7ADgv),
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
var nu = n(189213),
    ng = n(290136),
    nm = n(478016),
    nh = n(825484),
    nE = n(812993),
    nx = n(713517),
    nf = n(914410),
    np = n(34332),
    nC = n(597783),
    n_ = n(61750);
function nb(e, t) {
    let n = c.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        s = (0, D.bG)([U.A], () => U.A.getPurchases(n));
    return {
        readyToClaim: c.useMemo(() => s.length === n.length, [s, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: s,
    };
}
var nS = n(162945),
    nj = n(858708);
let nv = c.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: s } = (0, nC.Z)(n),
            l = c.useRef(null),
            { isHoveringOrFocusing: i } = (0, nx.A)(l),
            { readyToClaim: a, collectibleProductSkuIds: r, collectedSkuIds: d } = nb(t, n),
            g = (0, D.bG)([U.A], () => U.A.isClaiming === n);
        return (0, o.jsx)(t3.L, {
            onChange: s,
            threshold: 0,
            innerRef: l,
            children: (0, o.jsx)("div", {
                ref: l,
                className: u()(nS.ty, nj.Q3, { [nS.yo]: i }),
                "aria-label": ea.intl.formatToPlainString(ea.t.Ez6aHE, { category: t.name }),
                children: (0, o.jsxs)("div", {
                    className: nS.qt,
                    children: [
                        (0, o.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: nj.L8,
                        }),
                        (0, o.jsx)("div", {
                            className: nS.N1,
                            children: (0, o.jsx)(nE.Lp, {
                                text: ea.intl.string(ea.t.rykAJ9),
                                disableColor: !0,
                                className: nj.HZ,
                            }),
                        }),
                        (0, o.jsxs)("div", {
                            className: nS.xQ,
                            children: [
                                (0, o.jsxs)("div", {
                                    className: nj.xE,
                                    children: [
                                        (0, o.jsxs)("div", {
                                            className: nj.cs,
                                            children: [
                                                (0, o.jsx)(ei.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: nS.tZ,
                                                    children: ea.intl.string(ea.t["0mDmg/"]),
                                                }),
                                                (0, o.jsx)(ew.m, {
                                                    text: a
                                                        ? ea.intl.string(ea.t.cKH3tk)
                                                        : ea.intl.formatToPlainString(ea.t["8aMDPc"], {
                                                              totalCount: r.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, o.jsx)("span", {
                                                        className: nj.ZB,
                                                        children: (0, o.jsx)(ng.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, o.jsx)("div", {
                                            className: nS.oh,
                                            "aria-hidden": !0,
                                            children: (0, o.jsxs)("div", {
                                                className: nj.L$,
                                                children: [
                                                    (0, o.jsx)(nf.Ay, {
                                                        variant: nf.qP.BLUE,
                                                        progress: d.length,
                                                        maximum: r.length,
                                                    }),
                                                    (0, o.jsxs)("div", {
                                                        className: u()(nj.__, { [nj.gF]: a }),
                                                        children: [
                                                            a
                                                                ? (0, o.jsx)(nm.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, o.jsx)(K.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: ea.intl.formatToPlainString(ea.t["5TwASM"], {
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
                                    className: nS.Vs,
                                    children: (0, o.jsx)(nh.e, {
                                        wrap: !1,
                                        className: nS.Ld,
                                        fullWidth: !0,
                                        children: (0, o.jsx)($.$, {
                                            variant: "primary",
                                            onClick: function (e) {
                                                e.stopPropagation(),
                                                    a &&
                                                        (0, np.BX)(t.skuId, n)
                                                            .then(() => {
                                                                let e = A.A.getProduct(n);
                                                                null != e &&
                                                                    (0, n_.A)({
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
                                                                        (0, o.jsx)(nu.Modal, {
                                                                            transitionState: e.transitionState,
                                                                            onClose: e.onClose,
                                                                            size: "sm",
                                                                            title: ea.intl.string(ea.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: ea.intl.string(ea.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, o.jsx)("div", {
                                                                                children: ea.intl.string(
                                                                                    ea.t["0YpIF/"],
                                                                                ),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            });
                                            },
                                            text: ea.intl.string(ea.t.VnVTNc),
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
    nL = function (e) {
        let t,
            n,
            s,
            { isBlockLoading: l = !1, heroBlock: i, tab: a } = e,
            r = (0, tn.Mk)(a),
            d = c.useMemo(() => A.A.getCategoryForProduct(i.rewardSkuId), [i.rewardSkuId]),
            u = (0, D.bG)([U.A], () => U.A.getPurchase(i.rewardSkuId)),
            { products: g } =
                ((t = (0, t$.A)()),
                (n = c.useMemo(
                    () => (l ? [] : t(i.rankedSkuIds).filter((e) => e.skuId !== i.rewardSkuId || null != u)),
                    [l, t, i.rankedSkuIds, u, i.rewardSkuId],
                )),
                (s = (0, ed.p)()(n)),
                { products: (0, eu.X)(s) }),
            m = c.useMemo(
                () =>
                    !l &&
                    0 !== i.rankedSkuIds.length &&
                    !(g.length > 0) &&
                    i.rankedSkuIds.every((e) => A.A.getProduct(e)?.variantGroupStoreListingId != null),
                [l, i.rankedSkuIds, g.length],
            ),
            h = l || m,
            { readyToClaim: E } = nb(d, i.rewardSkuId),
            x = null == u && null != i.rewardSkuId && null != d;
        return (0, o.jsx)(t2.A, {
            gap: "xl",
            children: h
                ? (0, o.jsx)(o.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, o.jsx)(eh.A, {}, t)),
                  })
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          x &&
                              E &&
                              (0, o.jsx)(
                                  L.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, o.jsx)(nv, { category: d, rewardSkuId: i.rewardSkuId }),
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
                                            children: (0, o.jsx)(eC.A, { skuId: e.skuId, prioritizedCurrency: r }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, ty.$b)(90);
let nA = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: tg.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    nI = function (e) {
        let { isLoading: t = !1, heroBlock: n, tab: s, onVisibilityChange: l } = e,
            i = (0, eo.K)(
                (e) => {
                    l?.(e);
                },
                0.1,
                null != l,
            ),
            a = (0, D.bG)([v.default], () => v.default.getCurrentUser()),
            { analyticsLocations: r } = (0, p.Ay)(tR.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: c,
                logoDisplayConfig: d,
                heroLogo: g,
                heroBannerStatic: m,
                heroBannerAnimated: h,
            } = (0, nr.Kk)(n),
            E = c?.responsive ?? !1,
            x = c?.backgroundStyle;
        return null != a && (t || n !== nA)
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
                                  (0, o.jsx)(no.A, { bannerStatic: m, bannerAnimated: h, isResponsive: E }),
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
                                                            (0, o.jsx)(ei.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: tP.DD,
                                                                color: "text-strong",
                                                                children: n.title,
                                                            }),
                                                        "" !== n.summary &&
                                                            (0, o.jsx)(K.E, {
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
                                  (0, o.jsx)(nL, { isBlockLoading: t, heroBlock: n, tab: s }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var nN = n(222884);
let nO = function (e) {
    let { shelf: t, handleTransition: n, tab: s } = e,
        l = (0, D.bG)([v.default], () => v.default.getCurrentUser()),
        i = (0, tn.Mk)(s),
        a = (0, D.bG)([A.A], () => (null != t.categorySkuId ? A.A.getCategory(t.categorySkuId) : void 0)),
        r = (0, t$.A)(),
        d = c.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r]),
        g = (0, eu.X)(d),
        { analyticsLocations: m } = (0, p.Ay)(tR.A.COLLECTIBLES_SHOP_SHELF),
        h = c.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: a?.isOrbsExclusive === !0 && s !== ej.G2.ORBS,
            });
        }, [t.categorySkuId, a, n, s]);
    if (null == l || 0 === g.length) return null;
    let E = t.buttonText ?? ea.intl.formatToPlainString(ea.t.bc9RBE, { category_name: t.name }),
        x = t.showButton,
        f = t.desktopBackgroundImage,
        C = null != f;
    return (0, o.jsx)(p.f5, {
        value: m,
        children: (0, o.jsxs)("div", {
            className: u()(nN.mu, tP.YB, C ? nN.VA : nN.Ti),
            children: [
                C && (0, o.jsx)("img", { className: nN.iL, src: f, alt: "", "aria-hidden": !0 }),
                (0, o.jsxs)("div", {
                    className: nN.Qs,
                    children: [
                        (0, o.jsxs)("div", {
                            className: nN.wx,
                            children: [
                                (0, o.jsx)(ei.D, {
                                    variant: "heading-lg/semibold",
                                    style: C ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                x &&
                                    (0, o.jsx)($.$, {
                                        variant: C ? "overlay-primary" : "secondary",
                                        text: E,
                                        onClick: h,
                                    }),
                            ],
                        }),
                        (0, o.jsx)(t2.A, {
                            gap: "xl",
                            edgeFade: C ? "sm" : void 0,
                            children: g.map((e, n) =>
                                null == A.A.getCategoryForProduct(e.skuId)
                                    ? null
                                    : (0, o.jsx)(
                                          L.R9,
                                          {
                                              newValue: { tilePosition: n, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, o.jsx)(eC.A, { skuId: e.skuId, prioritizedCurrency: i }),
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
var nT = n(465794),
    nk = n(69236),
    nR = n(44724),
    ny = n(421108),
    nM = n(873297),
    nP = n(202541);
let nB = function (e) {
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
        g = (0, ny.u)(r) ?? void 0,
        m = (0, nk.W8)(),
        h = c.useMemo(
            () =>
                "nitro" !== d || m
                    ? {
                          kind: "button",
                          text: ea.intl.string(ea.t.apFNLU),
                          onClick: () => (0, nR.default)({ applicationId: t }),
                          onMouseDown: () => (0, nR.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, o.jsx)(nT.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: nP.pe.TIER_2,
                              buttonTextOverride: ea.intl.string(ea.t.pj0XBN),
                          }),
                      },
            [d, t, m],
        );
    return (0, o.jsx)(nM.A, {
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
var nD = n(575593),
    nH = n(770178),
    nF = n(929283),
    nw = n(273411);
let nG = [
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
function nU(e) {
    let { config: t, baseLeft: n, transitioning: s } = e,
        l = window.innerHeight,
        i = A.A.getProduct(t.skuId),
        a = i?.items[0],
        r = i?.type,
        c = n + t.horizontalJitter;
    return (0, o.jsx)("div", {
        className: nw.LY,
        style: {
            top: s ? -l - 384 : t.top,
            left: s ? c + t.transitionOffsetLeft : c,
            transform: `rotate(${t.rotation}deg)`,
            height: 160,
            width: 160,
            transitionDelay: t.transitionDelay,
            transitionDuration: t.transitionDuration,
        },
        children: null != a && r === nD.R.AVATAR_DECORATION && (0, o.jsx)(nF.i, { item: a }),
    });
}
let nz = (e) => {
        let { peaking: t, transitioning: n, parentWidth: s } = e,
            [l, i] = c.useState(!1),
            [a, r] = c.useState([]),
            [d] = c.useState(() =>
                [...nG]
                    .sort(() => Math.random() - 0.5)
                    .map((e) => ({
                        skuId: e,
                        top: 0 + 48 * Math.random(),
                        rotation: -32 + 64 * Math.random(),
                        horizontalJitter: -(20 * Math.random()),
                        transitionOffsetLeft: -20 - 35 * Math.random(),
                        transitionDelay: `${Math.random() / 3}s`,
                        transitionDuration: `${ej.H1 - 200 * Math.random()}ms`,
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
                n && setTimeout(() => i(!0), ej.H1);
            }, [n]),
            (0, o.jsx)("div", {
                className: u()(nw.rA, { [nw.Kb]: t, [nw.pp]: l }),
                children: a.map((e, t) => {
                    let { config: s, baseLeft: l } = e;
                    return (0, o.jsx)(nU, { config: s, baseLeft: l, transitioning: n }, s.skuId + t);
                }),
            })
        );
    },
    nV = function (e) {
        let { peaking: t, transitioning: n } = e,
            s = c.useRef(null),
            [l, i] = c.useState(0),
            a = c.useCallback(() => {
                null != s.current && i(s.current.offsetWidth);
            }, []);
        return (
            (0, nH.g)(s, a),
            (0, o.jsx)("div", {
                ref: s,
                className: nw.eL,
                children: (0, o.jsx)(nz, { peaking: t, transitioning: n, parentWidth: l }),
            })
        );
    };
var nW = n(815021);
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
        { handleCardVisibilityChange: h } = (0, nC.Z)(m, "home", "marketing wide banner"),
        E = (0, L.uM)(),
        { bannerURL: x } = (0, nr.w$)(t),
        f = n === ej.G2.ORBS,
        p = null != t.ctaRoute && "" !== t.ctaRoute,
        C = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || p),
        _ = null != t.logoURL && "" !== t.logoURL,
        b = c.useCallback(() => {
            if ((g(!0), t.isDismissible)) {
                let e = t.dismissibleContentVersion ?? 0;
                (0, th.$l)(tm.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: ne.i.USER_DISMISS });
            }
        }, [t.isDismissible, t.dismissibleContentVersion]),
        S = c.useCallback(
            (e) => {
                X.default.track(J.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                            (0, nR.default)({ guildId: e, pageIndex: n });
                        }
                    } else (0, t8.pX)(e);
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
                        children: (0, o.jsx)(nW.J, {
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(), b();
                            },
                            "aria-label": ea.intl.string(ea.t.WAI6xu),
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
                            (0, o.jsx)(ei.D, {
                                style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                className: f ? tP.O2 : void 0,
                                variant: "heading-xl/bold",
                                children: t.title,
                            }),
                            (0, o.jsx)(K.E, {
                                style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                lineClamp: 2,
                                variant: f ? "text-md/medium" : "text-sm/medium",
                                children: f
                                    ? ea.intl.format(ea.t.SFFP7K, {
                                          helpdeskArticle: tJ.A.getArticleURL(J.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : t.body,
                            }),
                            C &&
                                (0, o.jsxs)("div", {
                                    className: tP.nP,
                                    children: [
                                        (0, o.jsx)($.$, {
                                            variant: "overlay-primary",
                                            onClick: (e) => {
                                                e.stopPropagation(), j(t.ctaText ?? ea.intl.string(ea.t.jVcuVY));
                                            },
                                            text: t.ctaText ?? ea.intl.string(ea.t.jVcuVY),
                                            "aria-label":
                                                null == t.ctaText && null != t.title
                                                    ? ea.intl.formatToPlainString(ea.t.frSHlf, { destination: t.title })
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
    return (0, o.jsx)(t6.N, {
        theme: f ? void 0 : e4.NJ.DARK,
        children: (e) =>
            (0, o.jsx)(t3.L, {
                innerRef: l,
                onChange: h,
                threshold: 0,
                children: p
                    ? (0, o.jsx)(eG.D, { innerRef: l, onClick: () => j(null), className: u()(e, v), children: I })
                    : (0, o.jsx)("div", { ref: l, className: u()(e, v), children: I }),
            }),
    });
};
var nK = n(757036),
    n$ = n(212739);
let nq = (0, N.mj)({ name: "2026-05-orbs-shop-upsell-banner", kind: "user", defaultConfig: !1, variations: { 1: !0 } });
var nZ = n(462887),
    nX = n(765671),
    nJ = n(303136),
    nQ = n(792656),
    n0 = n(363195),
    n1 = n(901123),
    n2 = n(894865),
    n5 = n(909340);
let n4 = function (e) {
        let { category: t, tab: n } = e,
            { ref: s, width: l } = (0, nX.Ay)(),
            i = null != l && l <= 560,
            a = (0, m.bG)([n0.A], () => (0, nZ.q)(n0.A.theme)),
            r = t?.skuId ?? "",
            { handleCardVisibilityChange: d } = (0, nC.Z)(r, "home", "marketing orbs upsell banner"),
            g = (0, L.uM)(),
            { analyticsLocations: h } = (0, p.Ay)(tR.A.COLLECTIBLES_SHOP_ORBS_UPSELL_BANNER),
            E = c.useCallback(() => {
                X.default.track(J.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            children: (0, o.jsx)(t6.N, {
                theme: J.NJ8.DARKER,
                children: (e) =>
                    (0, o.jsx)(t3.L, {
                        innerRef: s,
                        onChange: d,
                        threshold: 0,
                        children: (0, o.jsxs)("div", {
                            ref: s,
                            className: u()(e, n2.kL),
                            children: [
                                (0, o.jsx)(nJ.A, { className: n2.Ki, src: n5.A }),
                                (0, o.jsxs)("div", {
                                    className: n2.Qs,
                                    children: [
                                        (0, o.jsx)(ei.D, {
                                            variant: "heading-xl/normal",
                                            color: "text-strong",
                                            className: n2.R_,
                                            children: ea.intl.string(ea.t["50J7mj"]),
                                        }),
                                        (0, o.jsx)(K.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: n2.rf,
                                            children: ea.intl.format(ea.t.NU5ZId, { monthlyOrbsAmount: 250 }),
                                        }),
                                        (0, o.jsxs)("div", {
                                            className: n2.R$,
                                            children: [
                                                (0, o.jsx)(nQ.A, {
                                                    subscriptionTier: nP.pe.TIER_2,
                                                    variantOverride: "expressive",
                                                    size: "md",
                                                    fullWidth: i,
                                                }),
                                                (0, o.jsx)($.$, {
                                                    variant: "secondary",
                                                    size: "md",
                                                    fullWidth: i,
                                                    text: ea.intl.string(ea.t.PcTCB7),
                                                    onClick: () => {
                                                        E(), (0, t8.pX)(n1.BV.NITRO_HOME);
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, o.jsx)("img", {
                                    className: n2.Qw,
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
    n3 = function (e) {
        let { index: t, wideBannerBlock: n, tab: s } = e,
            l = nq.useConfig({ location: "CollectiblesShopBannerSelector" }),
            i = (0, nK.L)(nP.PremiumTypes.TIER_2),
            a = (0, n$.O)();
        if (l && !i && !a && s === ej.G2.ORBS) {
            let e = A.A.getCategoryByStoreListingId(n.categoryStoreListingId);
            return (0, o.jsx)(n4, { category: e, tab: s }, t);
        }
        return (0, o.jsx)(nY, { wideBannerBlock: n, tab: s }, t);
    },
    n6 = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: s, tab: l } = e,
            { noCache: i, includeUnpublished: a } = (0, eb.A)(),
            [r, d] = c.useState(!1),
            g = (0, L.uM)(),
            m = g?.sessionId ?? "",
            h = (0, w.H)({ location: "collectibles_shop_feed" });
        c.useEffect(() => {
            (0, eg.z)({
                sessionId: m,
                checkpoint: eg.t.SHOP_MOUNTED,
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
                (0, eg.z)({
                    sessionId: m,
                    checkpoint: eg.t.SHOP_RENDERED,
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
                        (0, o.jsx)(ni.A, { isLoading: E, handleTransition: t, tab: l }),
                        (0, o.jsx)(tH, { isLoading: E, handleTransition: t, categories: [] }),
                        (0, o.jsx)(t1, {
                            isLoading: E,
                            title: l === ej.G2.ORBS ? ea.intl.string(ea.t.dFgeuZ) : ea.intl.string(ea.t.NSv5KV),
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
                                        ni.A,
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
                                        t1,
                                        {
                                            title:
                                                l === ej.G2.ORBS
                                                    ? ea.intl.string(ea.t.dFgeuZ)
                                                    : ea.intl.string(ea.t.NSv5KV),
                                            isLoading: s,
                                            numVisibleItems: n,
                                            sortedSkuIds: m,
                                            buttonContainerClassName: i?.type === tg.g.IMMERSIVE_BANNER ? tP.w : void 0,
                                            prioritizeUserDiscounts: l === ej.G2.HOME,
                                            tab: l,
                                            orbsSupportedOnly: l === ej.G2.ORBS,
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
                                    c = (0, o.jsx)(n3, { index: a, wideBannerBlock: e, tab: l }, a);
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
                                    c = (0, o.jsx)(t4, { block: e, handleTransition: t, tab: l }, a);
                                    break;
                                case tg.g.SHELF:
                                    c = (0, o.jsx)(nO, { handleTransition: t, shelf: e, tab: l }, a);
                                    break;
                                case tg.g.COUNTDOWN_TIMER:
                                    (c = (0, o.jsx)(tT, { countdownTimerBlock: e, isVisible: r }, a)), (g = !0);
                                    break;
                                case tg.g.IMMERSIVE_BANNER:
                                    c = (0, o.jsx)(
                                        nd,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => d(!e) },
                                        a,
                                    );
                                    break;
                                case tg.g.REWARD_HERO:
                                    c = (0, o.jsx)(nI, { isLoading: E, handleTransition: t, heroBlock: e, tab: l }, a);
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
                                            children: (0, o.jsx)(nl, { gameServerHostingBannerBlock: e, tab: l }),
                                        },
                                        a,
                                    );
                                case tg.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, o.jsx)(
                                        tx,
                                        {
                                            blockType: e.type,
                                            children: (0, o.jsx)(nB, {
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
    n7 = function (e) {
        let { handleTransition: t, tab: n, transitionState: s } = e,
            l = c.useRef(null),
            { handleScroll: i } = ee(l, n),
            a = (0, e_.U)(),
            r = (0, L.uM)(),
            [d, u] = c.useState(ej.md),
            [g, m] = c.useState(!1);
        return (
            c.useEffect(() => {
                if (null != l.current) {
                    function e() {
                        if (null == l.current) return;
                        let e = l.current.getDistanceFromBottom();
                        d >= 36 ? m(e < 20) : e <= 200 && u((e) => e + ej.md);
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
            (0, o.jsx)(W.Ch, {
                className: tP.OW,
                ref: l,
                onScroll: i,
                children: (0, o.jsxs)("div", {
                    className: tP.bx,
                    children: [
                        (0, o.jsxs)("div", {
                            className: tP.rb,
                            children: [
                                (0, o.jsx)(n6, {
                                    handleTransition: t,
                                    numVisibleItems: d,
                                    isFetchingCategories: a,
                                    tab: n,
                                }),
                                n !== ej.G2.CATALOG &&
                                    d >= 36 &&
                                    (0, o.jsxs)("div", {
                                        className: tP.R$,
                                        children: [
                                            (0, o.jsx)(ei.D, {
                                                variant: "heading-md/semibold",
                                                children: ea.intl.string(ea.t.Yr70c4),
                                            }),
                                            (0, o.jsx)($.$, {
                                                variant: "primary",
                                                text: ea.intl.string(ea.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        X.default.track(J.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: r?.sessionId,
                                                            page_type: n,
                                                            page_category: n === ej.G2.HOME ? void 0 : r?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, o.jsx)(nV, { peaking: g, transitioning: s === ej.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var n9 = n(154323),
    n8 = n(295811),
    se = n(870216);
let st = { "Any:personalization-header": t0 },
    sn = { [es.b.SHOP_HOME]: st },
    ss = { "1465939725649973269": st, "1478495181551440044": st },
    sl = function () {
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
    si = { prioritizedCurrency: tn.Hi.ORBS };
function sa(e) {
    let { tab: t } = e,
        [n, s, l] = (0, D.yK)([se.A], () => [se.A.getLayout(t), se.A.isFetchingLayout(t), se.A.getLayoutFetchError(t)]),
        i = (0, D.bG)([n9.A], () => n9.A.get("shop_include_unpublished")),
        a = (0, D.bG)([A.A], () => A.A.skipNumCategories),
        r = c.useMemo(() => {
            let e = {};
            return !0 === i && (e.include_unpublished = !0), null != a && a > 0 && (e.skip_num_categories = a), e;
        }, [i, a]),
        d = null == n && !s && l?.status !== 404 && l?.status !== 429;
    if (
        (c.useEffect(() => {
            d && (0, np.T2)({ tab: t });
        }, [d, t]),
        null == n)
    )
        return t !== B.HOME || d || s
            ? null
            : (0, o.jsx)(en.Z_, {
                  tenantId: J.FYj,
                  templateId: es.b.SHOP_HOME,
                  requestParams: r,
                  overrides: sn[es.b.SHOP_HOME],
              });
    let u = (0, o.jsx)(en.Qs, { tenantId: J.FYj, layoutId: n, overrides: ss[n] });
    return (0, o.jsxs)(o.Fragment, {
        children: [
            t === B.ORBS && (0, o.jsx)(sl, {}),
            t === B.ORBS ? (0, o.jsx)(tn.v3.Provider, { value: si, children: u }) : u,
        ],
    });
}
function sr(e) {
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
        : (0, o.jsx)(en.Ay, { layout: n });
}
let so = function (e) {
    let { handleTransition: t, tab: n, transitionState: s } = e,
        l = (0, L.uM)(),
        i = (0, D.bG)([n8.A], () => n8.A.getShopLayoutUrlOverride()),
        a = c.useRef(null),
        { handleScroll: r } = ee(a, n),
        [d, g] = c.useState(ej.md),
        [m, h] = c.useState(!1);
    return (
        c.useEffect(() => {
            if (null != a.current) {
                function e() {
                    if (null == a.current) return;
                    let e = a.current.getDistanceFromBottom();
                    d >= 36 ? h(e < 20) : e <= 200 && g((e) => e + ej.md);
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
        (0, o.jsx)(W.Ch, {
            className: tP.OW,
            ref: a,
            onScroll: r,
            children: (0, o.jsxs)("div", {
                className: tP.bx,
                children: [
                    (0, o.jsxs)("div", {
                        className: u()(tP.rb, tP.GS),
                        children: [
                            null != i && "" !== i ? (0, o.jsx)(sr, { url: i }) : (0, o.jsx)(sa, { tab: n }),
                            n !== B.CATALOG &&
                                d >= 36 &&
                                (0, o.jsxs)("div", {
                                    className: tP.R$,
                                    children: [
                                        (0, o.jsx)(ei.D, {
                                            variant: "heading-md/semibold",
                                            children: ea.intl.string(ea.t.Yr70c4),
                                        }),
                                        (0, o.jsx)($.$, {
                                            variant: "primary",
                                            text: ea.intl.string(ea.t.AfrvRD),
                                            onClick: () => {
                                                t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                    X.default.track(J.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: l?.sessionId,
                                                        page_type: n,
                                                        page_category: n === B.HOME ? void 0 : l?.pageCategory,
                                                        cta_name: "browse the shop button",
                                                    });
                                            },
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, o.jsx)(nV, { peaking: m, transitioning: s === ej.Pf.OUT }),
                ],
            }),
        })
    );
};
var sc = n(564027);
let sd = function () {
        return (0, o.jsxs)("div", {
            className: sc.z,
            children: [
                (0, o.jsx)("img", {
                    className: sc.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: ea.intl.string(ea.t["p8+qtU"]),
                }),
                (0, o.jsx)(ei.D, { variant: "heading-xl/semibold", children: ea.intl.string(ea.t["p8+qtU"]) }),
                (0, o.jsx)(K.E, { variant: "text-md/medium", children: ea.intl.string(ea.t.UEiyvs) }),
            ],
        });
    },
    su = [ej.G2.HOME, ej.G2.ORBS];
function sg(e) {
    let {
            tab: t,
            categories: n,
            transitionToTab: s,
            transitionState: l,
            updateAnalyticsState: i,
            refreshCategories: a,
        } = e,
        r = (0, D.bG)([A.A, U.A], () =>
            null != A.A.error
                ? `shop load fetch categories error: ${A.A.error.message}`
                : null != U.A.claimError
                  ? `shop load claim error: ${U.A.claimError.message}`
                  : null != U.A.fetchError
                    ? `shop load fetch purchase error: ${U.A.fetchError.message}`
                    : void 0,
        );
    !(function (e) {
        let t = (0, D.bG)([v.default], () => v.default.getCurrentUser()),
            { noCache: n, includeUnpublished: s } = (0, eb.A)();
        c.useEffect(() => {
            null != e &&
                G.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: s.toString(),
                    },
                });
        }, [e, t, n, s]);
    })(r);
    let d = (0, w.H)({ location: "collectibles_content" }),
        u = (0, D.bG)([H.Ay], () => H.Ay.useReducedMotion),
        g = (0, P.W6)(),
        m = (0, P.zy)(),
        [h] = c.useState(() => {
            if ("POP" === g.action) {
                let e;
                return (e = eS), (eS = null), e ?? void 0;
            }
        }),
        [E, x] = c.useState(h),
        [f, p] = c.useState(null == h),
        C = c.useMemo(() => {
            let e = new URLSearchParams(m.search).get(ej.P1);
            return null != e && "" !== e ? e : void 0;
        }, [m.search]),
        _ = c.useMemo(
            () =>
                n.filter(
                    (e) =>
                        !ej.MS.some((t) => {
                            let { categorySkuId: n } = t;
                            return n === e.skuId;
                        }),
                ),
            [n],
        ),
        b = (0, F.U)("CollectiblesContent"),
        S = (0, z.a)("CollectiblesContent"),
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
                    return void g.push(J.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n));
                let o = l && !u,
                    c = r ? ej.G2.ORBS : ej.G2.CATALOG;
                x(n), p(!a), s(c, o);
            },
            [u, s, i, S, g],
        ),
        { searchError: L } = (0, V.S)();
    return null != L
        ? (0, o.jsx)(sd, {})
        : null != r
          ? (0, o.jsx)(tu.h, { onRetry: a, errorMessage: r, errorOrigin: tu.A.SHOP_PAGE })
          : t === ej.G2.HOME && b
            ? (0, o.jsx)(so, { tab: B.HOME, transitionState: l, handleTransition: j })
            : t === ej.G2.ORBS && b
              ? (0, o.jsx)(so, { tab: B.ORBS, transitionState: l, handleTransition: j })
              : su.includes(t)
                ? (0, o.jsx)(n7, { handleTransition: j, tab: t, transitionState: l })
                : t === ej.G2.GAME_SERVERS && d
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
var sm = n(956123),
    sh = n(766075),
    sE = n(870308),
    sx = n(650583);
function sf(e) {
    let { children: t, shouldAddEventListener: n, onClose: s } = e,
        l = (0, h.useHasAnyModalOpen)();
    return (
        c.useEffect(() => {
            if (n && !l) return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            function e(e) {
                e.key === sx.N$.Escape && s();
            }
        }, [n, l, s]),
        t
    );
}
let sp = function (e) {
    var t;
    let { tab: n = ej.G2.HOME } = e;
    (0, b.P)(_.a), (0, R.g)();
    let s = (0, f.A)((0, g.A)()),
        l = (0, m.bG)([v.default], () => v.default.getCurrentUser());
    (0, j.pE)();
    let i = (0, ek.yB)("CollectiblesShop"),
        { onClose: a } = (function () {
            let { search: e } = (0, P.zy)(),
                t = (0, P.g)(),
                n = c.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                s = null != n ? parseInt(n, 10) : null;
            return {
                onClose: c.useCallback(() => {
                    if (0 === s) {
                        (0, t8.aX)(), (0, sh.openUserSettings)();
                        return;
                    }
                    (0, t8.EL)() ? (0, t8.aX)() : (0, t8.pX)(J.BVt.APP);
                }, [s]),
                source: s,
                ...t,
            };
        })(),
        { currentTab: r, hasFilters: d } = (0, M.v)(),
        N = c.useMemo(() => (n === ej.G2.HOME && null != r && d() ? r : n), [n, r, d]);
    (t = O.useConfig({ location: "CollectiblesShop" }).useEndpoint ? J.FYj : void 0),
        c.useEffect(() => {
            null != t && (0, S.tx)([t]);
        }, [t]);
    let { categories: B, refreshCategories: D } = (0, k.Ay)({ logPerf: !0 }, { sessionId: s, tab: N }),
        H = c.useMemo(() => [...B.values()], [B]),
        [F, w] = c.useState(),
        G = (0, m.bG)([A.A], () => A.A.getCategory(F)?.name),
        [U, z] = c.useState();
    (0, eI.XU)(s);
    let V = c.useCallback((e, t) => {
            z(e), w(t);
        }, []),
        { selectedTab: W, transitionState: Y, transitionToTab: K } = (0, y.o)(N);
    (0, C.HU)({ location: ea.intl.string(ea.t.pWG4ze) }), (0, T.uS)(s, W, G, Y, U), (0, T.N0)(W, l);
    let { dismissShopButtonDC: $ } = (0, sE.A)();
    c.useEffect(() => {
        $();
    }, [$]),
        c.useEffect(() => {
            (0, x.I)(J.BVt.COLLECTIBLES_SHOP);
        }, []);
    let q = c.useRef(null),
        Z = c.useRef(null);
    (0, E.tj)(q);
    let X = (0, h.useHasAnyModalOpen)();
    c.useEffect(() => {
        Z.current?.focus();
    }, []),
        (0, ek.gB)();
    let { analyticsLocations: Q } = (0, T.lC)(W);
    return (0, o.jsx)(p.f5, {
        value: Q,
        children: (0, o.jsx)(L.R9, {
            newValue: { sessionId: s, pageCategory: G, pageSize: ej.l5 },
            children: (0, o.jsx)(I.iM, {
                tab: W,
                children: (0, o.jsx)(sf, {
                    onClose: a,
                    shouldAddEventListener: !1,
                    children: (0, o.jsxs)("div", {
                        className: u()(ex.bx, { [ek.jP]: i }),
                        ref: Z,
                        inert: X,
                        tabIndex: -1,
                        children: [
                            (0, o.jsx)(sm.G, { handleTransition: K, selectedTab: W }),
                            (0, o.jsx)("div", {
                                className: u()(ex.td, {
                                    [ex.RK]: Y === ej.Pf.VISIBLE,
                                    [ex.in]: Y === ej.Pf.IN,
                                    [ex.FD]: Y === ej.Pf.OUT,
                                }),
                                children: (0, o.jsx)(sg, {
                                    tab: W,
                                    refreshCategories: D,
                                    transitionToTab: K,
                                    transitionState: Y,
                                    categories: H,
                                    updateAnalyticsState: V,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
};
