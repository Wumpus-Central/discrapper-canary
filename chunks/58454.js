(l.r(t), l.d(t, { default: () => aL }));
var a,
    s = l(477900),
    n = l(582128),
    r = l(806163),
    i = l(855986),
    o = l(726249),
    c = l(343446),
    d = l(643932),
    u = l(548411),
    m = l(664121),
    g = l(534514),
    h = l(899647),
    f = l(770472),
    x = l(737823);
l(651266);
var A = l(876622),
    j = l(521974),
    y = l(282026),
    S = l(449054);
class b {
    guildIds = new Set();
    categoryId;
    constructor(e) {
        this.categoryId = e;
    }
    markAsSeen(e, t, l) {
        (this.categoryId !== e && ((this.categoryId = e), this.flushSeenGuilds(l)), this.guildIds.add(t));
    }
    flushSeenGuilds(e) {
        this.guildIds.size > 0 && (S.PU(e, Array.from(this.guildIds)), this.guildIds.clear());
    }
}
var C = l(965660),
    p = l(601193),
    N = l(858899),
    v = l(652215),
    E = l(792996);
l(321073);
var I = l(620632),
    G = l(319400),
    R = l(73153),
    T = l(324580);
let _ = async function (e, t) {
        let { categoryId: l, languageCode: a, offset: s, limit: n, withCounts: r } = t;
        R.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", query: e, categoryId: l, languageCode: a });
        try {
            let t = await I.Bo.get({
                    url: v.Rsh.GUILD_DISCOVERY_SEARCH,
                    query: {
                        query: e,
                        category_id: -1 === l ? null : l,
                        offset: s,
                        limit: n,
                        language_code: a,
                        with_counts: r,
                    },
                    oldFormErrors: !0,
                    rejectWithError: (0, I.fT)(),
                }),
                i = t.body.guilds.map(C.uk),
                o = t.body.total_count;
            if (r) {
                let l = [];
                (t.body.categories?.slice(0, 8).forEach((e) => {
                    let { id: t, count: a } = e;
                    l.push([Number(t), a]);
                }),
                    R.h.dispatch({
                        type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS",
                        query: e,
                        categoryCounts: l,
                    }));
            }
            R.h.dispatch({
                type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
                query: e,
                categoryId: l,
                languageCode: a,
                guilds: i,
                total: o,
            });
        } catch (s) {
            let t = new G.LG(s);
            (S.jb({ categoryId: l, error: t, willRequestRetry: !1, isRequestRetry: !1 }),
                r &&
                    R.h.dispatch({
                        type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS",
                        query: e,
                        categoryCounts: [],
                    }),
                R.h.dispatch({
                    type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
                    query: e,
                    categoryId: l,
                    languageCode: a,
                    error: s,
                }));
        }
    },
    F = function (e) {
        R.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR", ignoreQueries: e?.ignoreQueries ?? [] });
    },
    k = function () {
        R.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET" });
    };
var D = l(823448),
    L = l(351022);
class w {}
let O = new (class extends w {
    loadMoreCategoryResults = async (e) => {
        let { query: t, categoryId: l, languageCode: a, offset: s } = e;
        L.A.getIsFetching({ query: t, categoryId: l, languageCode: a }) ||
            (L.A.getIsInitialFetchComplete({ query: t, categoryId: l, languageCode: a }) &&
                (S.br({ withCounts: !1, offset: s }),
                await _(t, { categoryId: l, languageCode: a, offset: s, limit: 12, withCounts: !1 })));
    };
    loadCategoryResults = async (e) => {
        let { query: t, categoryId: l, languageCode: a } = e,
            s = L.A.getIsFetching({ query: t, categoryId: l, languageCode: a }),
            n = L.A.getIsInitialFetchComplete({ query: t, categoryId: l, languageCode: a });
        s ||
            n ||
            (S.br({ withCounts: !1, offset: 0 }),
            await _(t, { categoryId: l, languageCode: a, offset: 0, limit: 12, withCounts: !1 }));
    };
    loadCategoryResultsAndCounts = async (e) => {
        let { query: t, loadId: l, categoryId: a, languageCode: s } = e;
        if ("" === t.trim()) return;
        let n = D.A.getIsFetchingCounts(t),
            r = D.A.getIsFetchingCounts(t);
        n ||
            r ||
            (y.A.setState({ fetchedQuery: t, resultsQuery: "" }),
            S.fd(l, a),
            S.br({ withCounts: !0, offset: 0 }),
            await _(t, { categoryId: a, languageCode: s, offset: 0, limit: 12, withCounts: !0 }),
            y.A.setState({ resultsQuery: t }));
    };
})();
var M = l(460760),
    U = l(533129),
    P = l(403362),
    V = l(808097),
    H = l(707554),
    Q = l(23815),
    B = l(701508),
    q = l(979590),
    Y = l(783531),
    z = l(503698),
    Z = l.n(z),
    K = l(831259),
    W = l(289873),
    J = l(664343),
    $ = l(834730),
    X = l(232554),
    ee = l(442433),
    et = l(736653),
    el = l(573435),
    ea = l(635350),
    es = l(785970);
let en = n.memo(function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: Z()(t, es.En) });
});
var er = l(156150),
    ei = l(717421),
    eo = l(775602);
let ec = { mass: 1, tension: 600, friction: 60, clamp: !0 },
    ed = function (e) {
        let { animate: t, state: l, cleanUp: a, children: r } = e,
            o = (0, i.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
            c = n.useMemo(
                () =>
                    !1 === t || o
                        ? { opacity: 1 }
                        : l === X.wL.ENTERED || l === X.wL.MOUNTED
                          ? { from: { opacity: 0 }, to: { opacity: 1 }, config: ec }
                          : {
                                from: { opacity: 1 },
                                to: { opacity: 0 },
                                config: ec,
                                onRest: () => {
                                    a();
                                },
                            },
                [t, a, o, l],
            ),
            d = (0, ei.z)(c);
        return (0, s.jsx)(er.animated.div, { style: d, className: es.Hp, children: r });
    };
var eu = l(714991),
    em = l(776231),
    eg = l(486020),
    eh = l(939249),
    ef = l(26430),
    ex = l(517905),
    eA = l(421407);
let ej = function (e) {
    let { className: t, guildId: l } = e,
        a = n.useRef(null),
        r = n.useCallback((e, t) => {
            (e.stopPropagation(), t.onClick(e));
        }, []);
    return (0, s.jsx)(ex.A, {
        guildId: l,
        position: "left",
        targetElementRef: a,
        children: (e) =>
            (0, s.jsx)(eh.D, {
                ...e,
                innerRef: a,
                className: t,
                onClick: (t) => r(t, e),
                children: (0, s.jsx)("div", {
                    className: eA.K,
                    children: (0, s.jsx)(ef.MaximizeIcon, { size: "xs", color: "currentColor" }),
                }),
            }),
    });
};
var ey = l(59329),
    eS = l(937495),
    eb = l(517061);
function eC(e) {
    let { guild: t, onClick: a, onView: r } = e,
        [i, o] = n.useState(!1),
        [c, d] = n.useState(!1),
        [u, m] = n.useState(!1),
        h = n.useRef(null),
        f = n.useCallback(async () => {
            d(!0);
            try {
                await a(t.id);
            } finally {
                d(!1);
            }
        }, [t.id, a]),
        x = n.useCallback(
            (e) => {
                e && !i && (o(!0), r?.(t.id));
            },
            [t.id, i, r],
        ),
        A = n.useCallback(
            (e) => {
                (0, ee.L3)(e, async () => {
                    let { default: e } = await l.e(239572).then(l.bind(l, 235327));
                    return (l) => (0, s.jsx)(e, { ...l, guild: t });
                });
            },
            [t],
        ),
        j = (0, et.Ay)(),
        y = t.features.has(v.GuildFeatures.HUB),
        S = n.useMemo(() => {
            let e = eg.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discoverySplash, size: 300 * (0, em.mZ)() });
            if (null != e) return e;
            if (y) return "/assets/c47298d5d6eac3b2.svg";
            switch (j) {
                case v.NJ8.DARK:
                    return eS;
                case v.NJ8.LIGHT:
                    return eb;
            }
        }, [t.discoverySplash, t.id, y, j]),
        b = n.useMemo(() => eg.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }), [t.icon, t.id]);
    return (0, s.jsxs)("div", {
        className: ey.kL,
        children: [
            c &&
                (0, s.jsx)("div", {
                    className: ey.dc,
                    children: (0, s.jsx)(W.y, { type: W.y.Type.PULSING_ELLIPSIS, className: ey.u1 }),
                }),
            (0, s.jsx)(K.L, {
                innerRef: h,
                onChange: x,
                active: !i,
                threshold: 0.55,
                children: (0, s.jsxs)(ea.A, {
                    ref: h,
                    className: ey.Nr,
                    onClick: f,
                    disabled: c,
                    onContextMenu: A,
                    "aria-label": E.intl.string(E.t["M9wQ+f"]),
                    children: [
                        (0, s.jsxs)("div", {
                            className: ey.wx,
                            children: [
                                (0, s.jsx)("div", {
                                    className: Z()(ey.vK, { [ey.Kc]: u }),
                                    children: (0, s.jsx)("img", {
                                        src: S,
                                        alt: "",
                                        className: ey._e,
                                        onLoad: () => m(!0),
                                    }),
                                }),
                                (0, s.jsx)(ej, { className: ey.gw, guildId: t.id }),
                                (0, s.jsx)("div", {
                                    className: ey.Kk,
                                    children: (0, s.jsx)(el.Ay, {
                                        mask: el.Ay.Masks.SQUIRCLE,
                                        width: 56,
                                        height: 56,
                                        children: (0, s.jsx)("div", {
                                            className: ey.SA,
                                            children: (0, s.jsx)(el.Ay, {
                                                mask: el.Ay.Masks.SQUIRCLE,
                                                width: 48,
                                                height: 48,
                                                children: (0, s.jsx)("img", { src: b, alt: "", className: ey.my }),
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: ey.gI,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: ey.DD,
                                    children: [
                                        (0, s.jsx)(eu.A, {
                                            className: ey.n2,
                                            guild: t,
                                            tooltipColor: J.ST.Colors.PRIMARY,
                                        }),
                                        (0, s.jsx)(g.D, {
                                            variant: "heading-sm/semibold",
                                            className: ey.J5,
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)($.E, {
                                    className: ey.h_,
                                    variant: "body-sm/normal",
                                    color: "text-default",
                                    children: t.description,
                                }),
                                (0, s.jsxs)("div", {
                                    className: ey.bu,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, s.jsxs)("div", {
                                                className: ey.CV,
                                                children: [
                                                    (0, s.jsx)("div", { className: ey.SP }),
                                                    (0, s.jsx)($.E, {
                                                        className: ey.ac,
                                                        variant: "body-xs/normal",
                                                        color: "text-default",
                                                        children: E.intl.format(E.t["LC+S+m"], {
                                                            membersOnline: t.presenceCount,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        null != t.memberCount &&
                                            (0, s.jsxs)("div", {
                                                className: ey.CV,
                                                children: [
                                                    (0, s.jsx)("div", { className: ey.PB }),
                                                    (0, s.jsx)($.E, {
                                                        className: ey.ac,
                                                        variant: "body-xs/normal",
                                                        color: "text-default",
                                                        children: E.intl.format(E.t.zRl6XR, { count: t.memberCount }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function ep(e) {
    let { guildId: t, onClick: l, onView: a } = e,
        n = (0, i.bG)([L.A], () => L.A.getGuild(t));
    return null == n ? null : (0, s.jsx)(eC, { guild: n, onClick: l, onView: a });
}
function eN(e) {
    let { guildId: t, index: l, onClick: a, onView: r } = e,
        i = n.useRef(null == t),
        o = n.useCallback(
            (e, t, l, n) =>
                null == t.guildId
                    ? (0, s.jsx)(ed, { state: l, cleanUp: n, children: (0, s.jsx)(en, { className: ey.qf }) }, e)
                    : (0, s.jsx)(
                          ed,
                          {
                              state: l,
                              cleanUp: n,
                              animate: i.current,
                              children: (0, s.jsx)(ep, { guildId: t.guildId, onClick: a, onView: r }),
                          },
                          e,
                      ),
            [a, r],
        ),
        c = n.useCallback((e) => e.guildId ?? `${e.index}`, []),
        d = n.useMemo(() => [{ guildId: t, index: l }], [t, l]);
    return (0, s.jsx)("div", {
        className: ey.NK,
        children: (0, s.jsx)(X.F, { items: d, renderItem: o, getItemKey: c }),
    });
}
let ev = n.memo(ep);
var eE = l(401034);
let eI = { page: v.liQ.GUILD_DISCOVERY, object: v.ZSU.CARD, section: v.JJy.DISCOVER_POPULAR };
function eG(e) {
    let { tab: t, guildIds: l, loading: a, onScroll: r, onGuildCardClick: i, onGuildCardSeen: o } = e,
        c = (0, C.kc)(t),
        d = (0, C.Ot)(t),
        u = (0, C.UW)(t),
        m = (0, C.Ub)(t),
        h = n.useMemo(() => {
            let e = a ? 30 : l.length,
                t = [];
            for (let a = 0; a < e; a++)
                t.push(
                    (0, s.jsx)(
                        eN,
                        { guildId: l[a] ?? null, index: a, onClick: (e) => i(e, a, m, eI), onView: (e) => o(e, m) },
                        l[a] ?? a,
                    ),
                );
            return t;
        }, [m, l, a, i, o]);
    return (0, s.jsxs)(Y.A, {
        onScroll: r,
        children: [
            (0, s.jsx)(B.A, { title: c, description: d, children: (0, s.jsx)(Q.A, {}) }),
            (0, s.jsx)(q.A, {
                children: (0, s.jsxs)(H.F, {
                    children: [
                        (0, s.jsx)(g.D, {
                            className: eE.G,
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: u,
                        }),
                        (0, s.jsx)(H.F, { children: (0, s.jsx)("div", { className: eE.Q, children: h }) }),
                    ],
                }),
            }),
        ],
    });
}
var eR = l(778858),
    eT = l(101277),
    e_ = l(646514),
    eF = l(821609),
    ek = l(192308),
    eD = l(792749);
let eL = function (e) {
    let { hasHub: t } = e;
    return (0, s.jsxs)("div", {
        className: eD.kL,
        children: [
            (0, s.jsx)("div", {
                className: eD.zc,
                children: (0, s.jsx)(eT.HubIcon, { size: "md", color: e_.A.colors.WHITE.css }),
            }),
            (0, s.jsx)($.E, {
                color: "text-strong",
                variant: "body-lg/semibold",
                className: eD.wx,
                children: t ? E.intl.string(E.t.hsSHh8) : E.intl.string(E.t.Wf6iij),
            }),
            (0, s.jsx)($.E, {
                color: "text-default",
                variant: "body-sm/normal",
                className: eD.__invalid_description,
                children: t ? E.intl.string(E.t.FZ2J3Y) : E.intl.string(E.t.TvHcv6),
            }),
            (0, s.jsx)("div", { className: eD.rQ }),
            (0, s.jsx)(eF.$, {
                fullWidth: !0,
                variant: t ? "secondary" : "active",
                onClick: () =>
                    (0, ek.mM)(async () => {
                        let { default: e } = await Promise.all([
                            l.e(144909),
                            l.e(197804),
                            l.e(807265),
                            l.e(797641),
                            l.e(169555),
                        ]).then(l.bind(l, 500126));
                        return (t) => (0, s.jsx)(e, { ...t });
                    }),
                text: t ? E.intl.string(E.t.IyjHD9) : E.intl.string(E.t["KU/aN4"]),
            }),
        ],
    });
};
var ew = l(71393),
    eO = l(118331);
let eM = function (e) {
    let { onScroll: t } = e,
        l = (0, i.yK)([ew.A], () => ew.A.getGuildsArray().filter((e) => e.features.has(v.GuildFeatures.HUB))),
        a = n.useMemo(
            () =>
                l.map((e) => ({
                    ...e,
                    presenceCount: void 0,
                    memberCount: void 0,
                    premiumSubscriptionCount: void 0,
                    emojis: void 0,
                })),
            [l],
        );
    return (0, s.jsxs)(Y.A, {
        onScroll: t,
        children: [
            (0, s.jsx)(B.A, {
                title: E.intl.string(E.t.X5xPlb),
                description: E.intl.string(E.t["F/IQCI"]),
                children: (0, s.jsx)(Q.A, {}),
            }),
            (0, s.jsxs)(q.A, {
                children: [
                    l.length > 0
                        ? (0, s.jsxs)(H.F, {
                              children: [
                                  (0, s.jsx)(g.D, {
                                      className: eE.G,
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      children: E.intl.string(E.t["2DfZIQ"]),
                                  }),
                                  (0, s.jsx)(H.F, {
                                      children: (0, s.jsxs)("div", {
                                          className: eE.Q,
                                          children: [
                                              a.map((e) =>
                                                  (0, s.jsx)(
                                                      eC,
                                                      { guild: e, onClick: () => eR.A.transitionToGuildSync(e.id) },
                                                      e.id,
                                                  ),
                                              ),
                                              (0, s.jsx)(eL, { hasHub: !0 }),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : (0, s.jsx)("div", { className: eE.Q, children: (0, s.jsx)(eL, { hasHub: !1 }) }),
                    (0, s.jsx)("div", { className: eO.yF }),
                    (0, s.jsxs)("div", {
                        className: eO.ed,
                        children: [
                            (0, s.jsxs)($.E, {
                                className: eO.Qq,
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: [E.intl.string(E.t.O1k9XX), " "],
                            }),
                            (0, s.jsx)($.E, {
                                className: eO.Qq,
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: E.intl.string(E.t.FV5dvh),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
function eU(e) {
    let { onScroll: t, onGuildCardSeen: l, onGuildCardClick: a } = e,
        r = (0, i.bG)([L.A], () => L.A.getGuildIds({ categoryId: -1 }) ?? T.VX),
        o = (0, i.bG)([L.A], () => L.A.getIsFetching({ categoryId: -1 }) ?? !0);
    return (
        n.useEffect(() => {
            V.A.fetchFeaturedGuilds();
        }, []),
        (0, s.jsx)(eG, {
            tab: T.o.FEATURED,
            guildIds: r,
            loading: o,
            onScroll: t,
            onGuildCardSeen: l,
            onGuildCardClick: a,
        })
    );
}
function eP(e) {
    let { tab: t, onScroll: l, onGuildCardSeen: a, onGuildCardClick: r } = e,
        o = (0, C.Ub)(t),
        c = (0, i.bG)([L.A], () => L.A.getGuildIds({ categoryId: o }) ?? T.VX),
        d = (0, i.bG)([L.A], () => L.A.getIsFetching({ categoryId: o }) ?? !0);
    return (
        n.useEffect(() => {
            V.A.fetchCategoryFeaturedGuilds({ categoryId: o });
        }, [o]),
        (0, s.jsx)(eG, { tab: t, guildIds: c, loading: d, onScroll: l, onGuildCardSeen: a, onGuildCardClick: r })
    );
}
function eV(e) {
    let { selectedTab: t, onScroll: l, onGuildCardSeen: a, onGuildCardClick: r } = e;
    switch (
        (n.useEffect(() => {
            let e = (0, C.Ub)(t);
            (0, U.np)({ selectedCategoryId: e });
        }, [t]),
        t)
    ) {
        case T.o.FEATURED:
            return (0, s.jsx)(eU, { tab: t, onScroll: l, onGuildCardClick: r, onGuildCardSeen: a });
        case T.o.GAMING:
        case T.o.MUSIC:
        case T.o.ENTERTAINMENT:
        case T.o.TECH:
        case T.o.EDUCATION:
            return (0, s.jsx)(eP, { tab: t, onScroll: l, onGuildCardClick: r, onGuildCardSeen: a }, t);
        case T.o.HUBS:
            return (0, s.jsx)(eM, { onScroll: l });
        default:
            (0, P.xb)(t);
    }
}
var eH = l(435558),
    eQ = l.n(eH),
    eB = l(297778),
    eq = l(770178),
    eY = l(129230),
    ez = l(773669),
    eZ = l(997590);
function eK(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [eZ.A];
    return -1 === e ? E.intl.string(E.t.Omu0fS) : t.getCategoryName(e);
}
function eW(e) {
    let { categoryId: t } = e;
    return (0, i.bG)([eZ.A], () => eK(t, [eZ.A]));
}
l(667532);
var eJ = l(499118);
function e$() {
    let e = y.A.useField("fetchedQuery"),
        t = y.A.useField("resultsInitialCategoryId"),
        l = y.A.useField("languageCode"),
        a = (0, i.bG)([L.A], () => (null == t ? 0 : (L.A.getTotal({ categoryId: t, query: e, languageCode: l }) ?? 0))),
        s = (0, i.bG)([L.A], () => L.A.getTotal({ categoryId: -1, query: e, languageCode: l }) ?? 0),
        r = (0, i.bG)([eJ.A], () => eJ.A.getVisibleTabs());
    return n.useMemo(() => {
        if (null == r) return null;
        if (null == t) return r;
        let e = [],
            l = new Set();
        for (let [t, a] of r) (l.add(t), e.push([t, a]));
        let n = !1;
        return (
            l.has(-1) || (l.add(-1), e.unshift([-1, s]), (n = !0)),
            l.has(t) || (l.add(t), e.push([t, a]), (n = !0)),
            n ? e : r
        );
    }, [r, t, s, a]);
}
var eX = l(166976);
function e0(e) {
    let { categoryId: t, loadId: l } = e;
    (y.A.setState({ categoryId: t }),
        O.loadCategoryResults({
            loadId: l,
            categoryId: t,
            query: y.A.getField("fetchedQuery"),
            languageCode: y.A.getField("languageCode"),
        }));
}
function e1(e) {
    let { loadId: t, categoryId: l, count: a } = e,
        r = n.useCallback(() => {
            e0({ categoryId: l, loadId: t });
        }, [l, t]),
        i = y.A.useField("categoryId") === l,
        o = a.toLocaleString(ez.default.locale),
        c = eW({ categoryId: l });
    return (0, s.jsxs)(eh.D, {
        onClick: r,
        className: Z()(eX.L1, { [eX.wH]: i }),
        children: [
            (0, s.jsx)($.E, { className: eX.UU, variant: "body-sm/medium", color: "text-strong", children: c }),
            (0, s.jsx)($.E, { className: eX.U9, variant: "body-sm/normal", color: "text-muted", children: o }),
        ],
    });
}
let e2 = function (e) {
    let { loadId: t } = e,
        l = e$();
    return null == l
        ? null
        : (0, s.jsx)("div", {
              className: eX.LZ,
              children: l.map((e) => {
                  let [l, a] = e;
                  return (0, s.jsx)(e1, { loadId: t, categoryId: l, count: a }, l);
              }),
          });
};
var e5 = l(191711),
    e6 = l(226658);
function e4(e) {
    let { loadId: t } = e,
        l = y.A.useField("categoryId"),
        a = e$(),
        r = eW({ categoryId: l }),
        o = n.useCallback(
            (e) => {
                e0({ loadId: t, categoryId: Number(e) });
            },
            [t],
        ),
        c = (function (e) {
            let { categoryIds: t } = e;
            return (0, i.cf)([eZ.A], () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        e[t] = eK(t, [eZ.A]);
                    }),
                    e
                );
            });
        })({
            categoryIds: n.useMemo(
                () =>
                    null == a
                        ? []
                        : a.map((e) => {
                              let [t] = e;
                              return t;
                          }),
                [a],
            ),
        }),
        d = n.useMemo(
            () =>
                null == a
                    ? []
                    : a.map((e) => {
                          let [t, l] = e;
                          return { id: `${t}`, name: c[t] ?? "", count: l };
                      }),
            [a, c],
        );
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: e6.k,
              children: [
                  (0, s.jsx)($.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: E.intl.string(E.t.f09BQJ),
                  }),
                  (0, s.jsx)(e5.A, {
                      items: d,
                      title: r,
                      onSelect: o,
                      selected: `${l}`,
                      "aria-label": E.intl.string(E.t.Ng5cTK),
                      variant: e5.H.FILLED,
                  }),
              ],
          });
}
var e3 = l(468646);
let e9 = function (e) {
    let { loadId: t } = e,
        l = y.A.useField("categoryId"),
        a = (0, i.bG)([eZ.A], () => eZ.A.getCategoryName(l)),
        r = n.useCallback(() => {
            (y.A.setState({ categoryId: -1 }),
                O.loadCategoryResults({
                    loadId: t,
                    categoryId: -1,
                    query: y.A.getField("fetchedQuery"),
                    languageCode: y.A.getField("languageCode"),
                }));
        }, [t]),
        o = -1 === l ? E.intl.string(E.t.Ivw1Is) : E.intl.formatToPlainString(E.t["+1WAFb"], { categoryName: a }),
        c = -1 === l ? E.intl.string(E.t.aXvEjd) : E.intl.format(E.t.XLioqn, { onClick: r });
    return (0, s.jsxs)("div", {
        className: e3.k,
        children: [
            (0, s.jsx)(g.D, { variant: "heading-xl/semibold", className: e3.w, children: o }),
            (0, s.jsx)($.E, { variant: "body-md/normal", color: "text-default", children: c }),
        ],
    });
};
var e8 = l(890497),
    e7 = l(118216);
function te(e) {
    let { loadId: t } = e,
        l = (0, i.bG)([ez.default], () => (0, C.Kv)([ez.default])),
        a = y.A.useField("languageCode"),
        r = n.useCallback(
            (e) => {
                y.A.setState({ languageCode: e });
                let l = y.A.getField("fetchedQuery");
                (F({ ignoreQueries: [l] }),
                    O.loadCategoryResults({
                        loadId: t,
                        categoryId: y.A.getField("categoryId"),
                        query: l,
                        languageCode: e,
                    }));
            },
            [t],
        ),
        o = n.useMemo(() => (0, T.tO)().map((e) => ({ id: e.code, value: e.code, label: e.name })), []);
    return (0, s.jsx)("div", {
        className: e7.k,
        children: (0, s.jsx)(e8.Z, {
            selectionMode: "single",
            label: E.intl.string(E.t.Ng5cTK),
            hideLabel: !0,
            value: a ?? l,
            options: o,
            onSelectionChange: r,
        }),
    });
}
var tt = l(413185);
let tl = Object.freeze({ top: 0, bottom: 0, left: 32, right: 202 }),
    ta = Object.freeze({ top: 0, bottom: 0, left: 32, right: 32 }),
    ts = { page: v.liQ.GUILD_DISCOVERY, object: v.ZSU.CARD, section: v.JJy.DISCOVER_SEARCH },
    tn = eQ().throttle(S.Cf, 1e3, { leading: !1, trailing: !0 });
function tr(e) {
    let { loadId: t, onGuildCardSeen: l, onGuildCardClick: a } = e,
        {
            guildIds: r,
            loading: o,
            searchResultsQuery: c,
            loadMore: d,
            searchCategoryId: u,
        } = (function (e) {
            let { loadId: t } = e,
                l = y.A.useField("fetchedQuery"),
                a = y.A.useField("categoryId"),
                s = y.A.useField("languageCode"),
                r = n.useMemo(() => ({ categoryId: a, query: l, languageCode: s }), [a, s, l]),
                o = (0, i.bG)([L.A], () => L.A.getGuildIds(r) ?? T.VX),
                c = (0, i.bG)([L.A], () => L.A.getIsFetching(r) ?? !1),
                d = y.A.useField("resultsQuery"),
                u = d !== l,
                m = n.useCallback(() => {
                    let e = L.A.getGuildIds(r),
                        l = L.A.getTotal(r);
                    if (null == e || null == l) return;
                    let a = L.A.getIsFetching(r),
                        s = L.A.getIsInitialFetchComplete(r);
                    a ||
                        !s ||
                        e.length >= l ||
                        O.loadMoreCategoryResults({
                            loadId: t,
                            offset: e.length,
                            categoryId: y.A.getField("categoryId"),
                            query: y.A.getField("fetchedQuery"),
                            languageCode: y.A.getField("languageCode"),
                        });
                }, [t, r]);
            return n.useMemo(
                () => ({ guildIds: o, loading: u || c, searchResultsQuery: d, loadMore: m, searchCategoryId: a }),
                [o, u, c, d, m, a],
            );
        })({ loadId: t }),
        m = 0 === r.length && !o,
        g = n.useContext(eY.Ig),
        [h, f] = n.useState((0, C.YP)()),
        [x, A] = n.useState(!0),
        j = n.useRef(x),
        [S, b] = n.useState(3),
        p = n.useRef(S),
        N = n.useRef(null),
        v = n.useCallback(
            (e) => {
                null == e || m || o || (336 * (r.length / S) <= e.height && d());
            },
            [m, o, r.length, S, d],
        ),
        E = n.useCallback(
            (e) => {
                let t = e.contentRect;
                if (null == t) return;
                let l = t.width;
                l < 1024 && j.current ? ((j.current = !1), A(!1)) : l > 1024 && !j.current && ((j.current = !0), A(!0));
                let a = 1;
                for (l -= 450 * !!x, l -= 280; l > 0;) ((l -= 264), (a += 1));
                (a !== p.current && ((p.current = a), b(a)), v(t));
            },
            [x, v],
        ),
        I = (0, eq.w)(E, [x, v]);
    (n.useEffect(() => {
        f((0, C.YP)());
    }, [c]),
        n.useEffect(() => {
            tn({
                loadId: t,
                searchId: h,
                query: c,
                guildResults: r.map(L.A.getGuild).filter(P.Vq),
                analyticsContext: g,
                categoryId: u,
            });
        }, [g, r, t, u, h, c]));
    let G = n.useCallback((e) => l(e, u), [l, u]),
        R = n.useMemo(() => (o ? [r.length, 0] : [r.length]), [r.length, o]),
        _ = n.useCallback(
            (e, l, a) => {
                switch (e) {
                    case 0:
                        return (0, s.jsxs)(
                            "div",
                            {
                                style: { paddingLeft: l.left, width: l.width - 16 },
                                className: Z()(tt.R_, { [tt.Ze]: !x }),
                                children: [
                                    !x &&
                                        (0, s.jsxs)("div", {
                                            className: tt.eW,
                                            children: [(0, s.jsx)(e4, { loadId: t }), (0, s.jsx)(te, { loadId: t })],
                                        }),
                                    m && (0, s.jsx)(e9, { loadId: t }),
                                ],
                            },
                            a,
                        );
                    case 1:
                        return (0, s.jsx)(W.y, { className: Z()(tt.u1, { [tt.qx]: x }) }, a);
                }
            },
            [m, x, t],
        ),
        F = n.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = x ? 16 : 68;
                        return m ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error(`[getSectionHeight] Failed for section: ${e}`);
                }
            },
            [m, x],
        ),
        k = n.useCallback(
            (e, t) => {
                switch (e) {
                    case 0:
                        return r[t];
                    case 1:
                        return "loading";
                    default:
                        throw Error(`[getItemKey] Failed for section: ${e}`);
                }
            },
            [r],
        ),
        D = n.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error(`[getItemHeight] Failed for section: ${e}`);
            }
        }, []),
        w = n.useCallback(
            async (e, t, l, s) => {
                await a(e, t, l, s);
                let n = N.current?.getScrollerState()?.scrollTop;
                null != n && y.A.setState({ scrollPosition: n });
            },
            [a],
        ),
        M = n.useCallback(
            (e, t, l, a) => {
                if (0 !== e) return null;
                {
                    let e = r[t];
                    return (0, s.jsx)(
                        "div",
                        {
                            style: l,
                            children: (0, s.jsx)(ev, {
                                guildId: e,
                                onClick: async (e) => await w(e, t, u, ts),
                                onView: (e) => G(e),
                            }),
                        },
                        a,
                    );
                }
            },
            [r, w, G, u],
        );
    (n.useEffect(() => {
        let e = N.current;
        return () => {
            let t = e?.getScrollerState()?.scrollTop;
            null != t && y.A.setState({ scrollPosition: t });
        };
    }, []),
        n.useLayoutEffect(() => {
            let e = y.A.getField("scrollPosition");
            null != e &&
                setTimeout(() => {
                    N.current?.scrollTo({
                        to: e,
                        animate: !1,
                        callback: () => {
                            y.A.setState({ scrollPosition: null });
                        },
                    });
                });
        }, []));
    let U = n.useMemo(
            () =>
                (0, eH.debounce)(
                    () => {
                        let e = N.current?.getScrollerState();
                        if (null == e) return;
                        let t = e.scrollTop + e.offsetHeight;
                        e.scrollHeight - t < 240 && d();
                    },
                    100,
                    { leading: !0 },
                ),
            [d],
        ),
        V = x ? tl : ta;
    return (0, s.jsx)("div", {
        className: tt.kL,
        ref: I,
        children: (0, s.jsx)(eB.f, {
            ref: N,
            className: tt.kf,
            sections: R,
            columns: S,
            itemGutter: 16,
            padding: V,
            renderItem: M,
            renderSection: _,
            getSectionHeight: F,
            getItemKey: k,
            getItemHeight: D,
            chunkSize: 24,
            onScroll: U,
            renderAccessory: (e) =>
                x
                    ? (0, s.jsx)("div", {
                          className: tt.pz,
                          style: { height: e },
                          children: (0, s.jsxs)("div", {
                              className: tt.wp,
                              children: [
                                  (0, s.jsx)("div", { className: tt.jp, children: (0, s.jsx)(te, { loadId: t }) }),
                                  (0, s.jsx)(e2, { loadId: t }),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
var ti = l(488995),
    to = l(877149);
function tc() {
    let e,
        t,
        l,
        a = n.useRef((0, C.YP)()),
        { onScroll: r, scrollPosition: i, resetScrollPosition: o } = (0, h.G)(),
        {
            tabs: c,
            selectedTab: d,
            setSelectedTab: I,
        } = ((e = p.A.useField("selectedTab")),
        (t = n.useMemo(
            () =>
                [T.o.FEATURED, T.o.GAMING, T.o.MUSIC, T.o.ENTERTAINMENT, T.o.TECH, T.o.EDUCATION, T.o.HUBS].map(
                    (e) => ({ id: e, label: (0, C.jR)(e) }),
                ),
            [],
        )),
        (l = n.useCallback((e) => {
            p.A.setState({ selectedTab: e });
        }, [])),
        n.useEffect(() => {
            (null != e && t.some((t) => t.id === e)) || l(t[0].id);
        }, [e, t, l]),
        { tabs: t, selectedTab: e ?? t[0].id, setSelectedTab: l }),
        G = (0, C.Ub)(d),
        R = !T.R0.has(d),
        {
            searchQuery: _,
            onSearchTextChange: D,
            onClearSearch: L,
            onSearchSubmit: w,
            isSearchVisible: U,
        } = (function (e) {
            let { loadId: t } = e,
                l = p.A.useField("isSearchVisible"),
                a = y.A.useField("query");
            n.useEffect(() => {
                (0, M.Mu)();
            }, []);
            let s = n.useCallback((e) => {
                y.A.setState({ query: e });
            }, []);
            return {
                searchQuery: a,
                onSearchTextChange: s,
                onClearSearch: n.useCallback(() => {
                    (S.gp(t),
                        F(),
                        k(),
                        y.A.setState({
                            query: "",
                            fetchedQuery: "",
                            resultsQuery: "",
                            categoryId: -1,
                            resultsInitialCategoryId: null,
                            scrollPosition: null,
                        }),
                        p.A.setState({ isSearchVisible: !1 }));
                }, [t]),
                onSearchSubmit: n.useCallback(() => {
                    let e = y.A.getField("query"),
                        l = y.A.getField("fetchedQuery");
                    if ("" === e.trim() || e === l) return;
                    F();
                    let a = y.A.getField("languageCode"),
                        s = y.A.getField("categoryId");
                    (y.A.setState({ resultsInitialCategoryId: s }),
                        p.A.setState({ isSearchVisible: !0 }),
                        O.loadCategoryResultsAndCounts({ loadId: t, categoryId: s, query: e, languageCode: a }));
                }, [t]),
                isSearchVisible: l,
            };
        })({ loadId: a.current }),
        P = p.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: V,
            onCollapsedSearchBarClick: H,
            onSearchBarBlur: Q,
            tabsClassName: B,
        } = (0, f.p)({
            isSearchBarVisible: R,
            isSearchBarEmpty: "" === _.trim(),
            searchBarState: P,
            setSearchBarState: (e) => p.A.setState({ searchBarState: e }),
        }),
        q = y.A.useField("fetchedQuery"),
        Y = n.useCallback(
            (e) => {
                (I(e), U && L());
            },
            [U, L, I],
        ),
        z = n.useMemo(
            () =>
                U
                    ? c.filter((e) => {
                          let { id: t } = e;
                          return !T.R0.has(t);
                      })
                    : c,
            [c, U],
        ),
        Z = n.useRef(new b(G)),
        { onGuildCardSeen: K, onGuildCardClick: W } = (function (e) {
            let { guildDiscoveryCardSeenManager: t, loadId: l } = e,
                a = n.useCallback(
                    (e, a) => {
                        t.markAsSeen(a, e, l);
                    },
                    [t, l],
                ),
                s = n.useCallback(
                    async (e, t, a, s) => {
                        try {
                            await (0, C.Wl)({ loadId: l, guildId: e, index: t, categoryId: a, analyticsLocation: s });
                        } catch (e) {
                            switch (e?.body?.code) {
                                case v.t02.INVITES_DISABLED:
                                    (0, N.P0)({ text: E.intl.string(E.t["2LLbj9"]), variant: "critical" });
                                    return;
                                case v.t02.USER_BANNED:
                                    (0, N.P0)({ text: E.intl.string(E.t["GzD/aa"]), variant: "critical" });
                                    return;
                            }
                            throw e;
                        }
                    },
                    [l],
                );
            return n.useMemo(() => ({ onGuildCardSeen: a, onGuildCardClick: s }), [s, a]);
        })({ guildDiscoveryCardSeenManager: Z.current, loadId: a.current });
    return (
        n.useEffect(() => {
            Z.current.flushSeenGuilds(a.current);
        }, [G]),
        n.useEffect(() => {
            o();
        }, [d, o]),
        n.useEffect(() => {
            U || y.A.setState({ scrollPosition: null });
        }, [U]),
        (0, s.jsxs)("div", {
            className: to.kL,
            children: [
                (0, s.jsxs)(x.Ay, {
                    variant: U ? x.Z5.RELATIVE : x.Z5.OVERLAY,
                    children: [
                        !U && (0, s.jsx)(x.ns, { scrollPosition: i }),
                        U
                            ? (0, s.jsx)(x.XQ, {
                                  icon: u.ArrowLargeLeftIcon,
                                  "aria-label": E.intl.string(E.t["13/7kX"]),
                                  onClick: L,
                              })
                            : (0, s.jsx)(x.T4, { icon: m.ServerIcon }),
                        !U &&
                            (0, s.jsx)(A.A, {
                                className: B,
                                tabs: z,
                                selectedTab: d,
                                onTabSelect: Y,
                                onAvailableWidthChange: V,
                            }),
                        U &&
                            (0, s.jsx)(g.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                className: to.ov,
                                children: E.intl.format(E.t.zHdzqW, { query: q }),
                            }),
                        R &&
                            (0, s.jsx)(j.A, {
                                query: _,
                                placeholder: E.intl.string(E.t["5h0QOP"]),
                                onTextChange: D,
                                onClear: L,
                                onSubmit: w,
                                onCollapsedClick: H,
                                state: U ? ti.Um.DEFAULT : P,
                                onBlur: Q,
                            }),
                    ],
                }),
                U
                    ? (0, s.jsx)(tr, { loadId: a.current, onGuildCardClick: W, onGuildCardSeen: K })
                    : (0, s.jsx)(eV, { selectedTab: d, onScroll: r, onGuildCardClick: W, onGuildCardSeen: K }),
            ],
        })
    );
}
var td = l(33059),
    tu = l(976860),
    tm = l(726845),
    tg = l(285395),
    th = l(185951),
    tf = l(621466),
    tx = l(687966),
    tA = l(567272),
    tj = l(116903),
    ty = l(602034),
    tS = l(651188),
    tb = l(311043),
    tC = l(778747),
    tp = l(518805),
    tN = l(929396);
function tv(e) {
    let { query: t, filterGroup: l, genres: a = [], platformAvailability: s = [] } = e;
    return {
        q: (0, tN.C7)(t) ?? void 0,
        filter_group: l,
        genres: [...new Set(a)].sort((e, t) => e - t),
        platform_availability: [...new Set(s)].sort(),
    };
}
function tE(e) {
    let t = tv(e);
    return [
        ...(null != t.q ? [`q=${encodeURIComponent(t.q)}`] : []),
        `filter_group=${t.filter_group}`,
        ...t.genres.map((e) => `genres=${e}`),
        ...t.platform_availability.map((e) => `platform_availability=${e}`),
    ].join("&");
}
var tI = l(635377),
    tG = l.n(tI),
    tR = l(927813);
let tT = tR.A.Millis.HOUR;
function t_(e, t) {
    return `offset=${t}&${e}`;
}
let tF = new (tG())({ max: 50, maxAge: tT });
class tk extends i.Ay.Store {
    static displayName = "GameSearchStore";
    initialize() {
        this.waitFor(tb.A);
    }
    getPage(e, t) {
        return tF.peek(t_(e, t));
    }
}
let tD = new tk(R.h, {
        LOGOUT: function () {
            tF.reset();
        },
        GAME_SEARCH_FETCH_SUCCESS: function (e) {
            let { searchKey: t, offset: l, games: a, totalCount: s, facets: n } = e;
            tF.set(t_(t, l), { gameIds: a.map((e) => e.id), totalCount: s, facets: n });
        },
    }),
    tL = (0, i.UT)(tD, {
        getQueryId: (e, t) => (null != e ? v.fic.GAME_SEARCH_PAGE(`offset=${t}&${e.key}`) : null),
        get: (e, t) => (null != e ? (tD.getPage(e.key, t) ?? null) : null),
        load: (e, t) =>
            null != e
                ? (async function (e, t) {
                      let { body: l } = await I.Bo.get({
                          url: v.Rsh.GAMES_SEARCH,
                          query: { ...tv(e), offset: t, limit: 25 },
                          rejectWithError: !1,
                      });
                      R.h.dispatch({
                          type: "GAME_SEARCH_FETCH_SUCCESS",
                          searchKey: tE(e),
                          offset: t,
                          games: l.games,
                          totalCount: l.total_count,
                          facets: { genres: l.facets.genres, platformAvailability: l.facets.platform_availability },
                      });
                  })(e.params, t)
                : Promise.resolve(),
        retryConfig: { retryableErrors: tN.f_ },
        staleAfter: 3600,
        failureStaleAfter: 60,
    });
var tw = l(523754);
let tO = tS.m.SHOWCASE,
    tM = [];
function tU() {
    return Promise.resolve();
}
var tP = l(331322),
    tV = l(661439),
    tH = l(409626),
    tQ = l(692969),
    tB = l(459746),
    tq = l(799699),
    tY = l(326369),
    tz = l(422069),
    tZ = l(49491),
    tK = l(459778),
    tW = l(281018),
    tJ = l(202163),
    t$ = l(153488),
    tX = l(287809),
    t0 = l(90165),
    t1 = l(277450);
let t2 = 30 * tR.A.Seconds.MINUTE,
    t5 = [],
    t6 = [];
var t4 = l(151869),
    t3 = l(585205);
function t9(e) {
    let { children: t, skeletonTitleWidth: l } = e;
    return (0, s.jsxs)(tP.B, {
        gap: 12,
        "aria-busy": !0,
        children: [(0, s.jsx)(tq.Ay, { className: t3.K, width: l }), t],
    });
}
function t8(e) {
    let { items: t, getItemKey: l, renderItem: a, "aria-label": n } = e;
    return (0, s.jsx)(t4.A, { items: t, getItemKey: l, renderItem: a, gap: 16, "aria-label": n });
}
function t7(e) {
    let { title: t, children: l } = e;
    return (0, s.jsxs)(tP.B, {
        as: "section",
        gap: 12,
        children: [(0, s.jsx)(g.D, { variant: "heading-lg/semibold", lineClamp: 1, children: t }), l],
    });
}
var le = l(142553);
function lt(e) {
    return e.id;
}
function ll() {
    return (0, s.jsx)(tY.A, {
        gap: 16,
        children: eQ()
            .range(0, 8)
            .map((e) =>
                (0, s.jsxs)(
                    tq.qT,
                    {
                        className: le.Nr,
                        children: [(0, s.jsx)(tB.gr, { className: le.Iv }), (0, s.jsx)(tq.Ay, { className: le.UU })],
                    },
                    e,
                ),
            ),
    });
}
function la() {
    return (0, s.jsx)(t9, { skeletonTitleWidth: 240, children: (0, s.jsx)(ll, {}) });
}
function ls(e) {
    let { game: t, listItemProps: l } = e,
        a = (0, tQ.A)({
            location: "GlobalDiscoveryGamesBecauseYouPlayedCard",
            gameId: t.id,
            source: tH.GameProfileSources.GlobalDiscoveryGamesBecauseYouPlayed,
        });
    return (0, s.jsxs)(eh.D, {
        ...l,
        className: Z()(le.Nr, { [le.vk]: null != a }),
        onClick: a,
        "aria-label": E.intl.formatToPlainString(E.t["8QLQB+"], { gameName: t.name }),
        children: [
            (0, s.jsx)("div", {
                className: le.Iv,
                children: (0, s.jsx)(tB.Ay, {
                    game: t,
                    className: le.xe,
                    size: tB.wu.LARGE,
                    imageSize: 512,
                    loadingPlaceholder: (0, s.jsx)(tB.gr, { className: le.XE }),
                }),
            }),
            (0, s.jsx)($.E, { variant: "body-md/medium", lineClamp: 1, children: t.name }),
        ],
    });
}
function ln(e, t) {
    return (0, s.jsx)(ls, { game: e, listItemProps: t });
}
function lr() {
    let {
        isFetching: e,
        seedGame: t,
        games: l,
    } = (function () {
        let e = (0, i.bG)([t$.A], () => t$.A.hasConsented(v.YAq.PERSONALIZATION)),
            t = (0, i.bG)([t0.A], () => null == t0.A.lastFetched && !t0.A.hasFetchFailed),
            l = (0, i.yK)(
                [t0.A],
                () =>
                    e
                        ? Object.values(t0.A.applicationStatistics)
                              .filter((e) => e.total_duration >= t2)
                              .sort((e, t) => Date.parse(t.last_played_at) - Date.parse(e.last_played_at))
                              .slice(0, 5)
                              .map((e) => e.application_id)
                        : t5,
                [e],
            ),
            a = (0, tJ.iE)(l),
            s = (0, i.cf)(
                [tb.A, tz.A, tX.default],
                () => {
                    let e = tX.default.getCurrentUser()?.nsfwAllowed;
                    for (let { gameRecord: t, isLoading: l } of a) {
                        if (l) return { isFetching: !0 };
                        if (null == t || t1.b.has(t.id) || !(0, tK.T_)(t) || (0, tZ.b)(t, e)) continue;
                        let a = tz.A.getSimilarGames(t.id);
                        if (
                            null == a ||
                            a.some((t) => {
                                let l = tb.A.getGame(t);
                                return null == l ? !tb.A.hasNoData(t) && !tb.A.didFetchingFail(t) : (0, tW.n)(l, e);
                            })
                        )
                            return { isFetching: !1, seedGame: t };
                    }
                    return { isFetching: !1 };
                },
                [a],
            ),
            { isFetching: r, similarGames: o } = (0, tW.A)(s.seedGame?.id),
            c = n.useMemo(() => o.slice(0, 8), [o]);
        return e
            ? { isFetching: t || s.isFetching || r, seedGame: s.seedGame, games: c }
            : { isFetching: !1, games: t6 };
    })();
    if (e) return (0, s.jsx)(la, {});
    if (null == t || 0 === l.length) return null;
    let a = E.intl.formatToPlainString(E.t.E5vkHs, { gameName: t.name });
    return (0, s.jsx)(t7, {
        title: a,
        children: (0, s.jsx)(t8, { items: l, getItemKey: lt, renderItem: ln, "aria-label": a }),
    });
}
var li = l(457346);
function lo() {
    return (0, s.jsx)(tY.A, {
        gap: 16,
        children: eQ()
            .range(0, 8)
            .map((e) =>
                (0, s.jsxs)(
                    tq.qT,
                    {
                        className: li.Nr,
                        children: [
                            (0, s.jsx)(tq.Ay, { className: li.Tp }),
                            (0, s.jsx)(tB.gr, { className: li.Iv }),
                            (0, s.jsxs)("div", {
                                className: li.pq,
                                children: [
                                    (0, s.jsx)(tq.Ay, { className: li.UU }),
                                    (0, s.jsx)(tq.Ay, { className: li.yz }),
                                ],
                            }),
                        ],
                    },
                    e,
                ),
            ),
    });
}
function lc() {
    return (0, s.jsx)(t7, { title: E.intl.string(E.t.JMTGC3), children: (0, s.jsx)(lo, {}) });
}
var ld = l(536637),
    lu = l.n(ld),
    lm = l(710793),
    lg = l(158390);
let lh = null,
    lf = new Map(),
    lx = 0;
class lA extends i.Ay.Store {
    static displayName = "GlobalDiscoveryGamesStore";
    getTrendingGames() {
        return lh;
    }
    getSessionGeneration() {
        return lx;
    }
    getAnnouncement(e) {
        return lf.get(e)?.latest?.announcement;
    }
    isAnnouncementFresh(e, t) {
        let l = lf.get(e)?.latest;
        return null != l && Date.now() - l.fetchedAt < t;
    }
    isAnnouncementRetryDelayed(e) {
        let t = lf.get(e)?.retry;
        return null != t && Date.now() < t.retryAt;
    }
}
let lj = new lA(R.h, {
    GLOBAL_DISCOVERY_GAMES_TRENDING_FETCH_SUCCESS: function (e) {
        let { data: t } = e;
        lh = {
            week: t.week,
            games: t.games.map((e) => {
                let { game: t, ...l } = e;
                return l;
            }),
        };
    },
    GLOBAL_DISCOVERY_GAMES_ANNOUNCEMENTS_FETCH_SUCCESS: function (e) {
        let t = Date.now();
        for (let l of e.announcements) lf.set(l.gameId, { latest: { announcement: l, fetchedAt: t }, retry: null });
    },
    GLOBAL_DISCOVERY_GAMES_ANNOUNCEMENTS_FETCH_FAILURE: function (e) {
        let t = Date.now();
        for (let l of e.gameIds) {
            let e = lf.get(l) ?? { latest: null, retry: null },
                a = e.retry?.backoff ?? new lg.A(tw.Ge, tw.wY);
            lf.set(l, { ...e, retry: { backoff: a, retryAt: t + a.fail() } });
        }
        return !1;
    },
    LOGOUT: function () {
        ((lh = null), (lf = new Map()), (lx += 1));
    },
});
var ly = l(826059),
    lS = l(644727),
    lb = l(890060),
    lC = l(46054),
    lp = l(240248);
let lN = [];
var lv = l(868714);
let lE = (0, i.UT)(lj, {
    getQueryId: (e, t) => {
        let l = v.fic.LATEST_GAME_ANNOUNCEMENTS(e);
        return null != l ? `${l}:${t}` : null;
    },
    get: (e) => {
        let t = e.map((e) => lj.getAnnouncement(e) ?? null);
        return t.some((e) => null != e) ? t : null;
    },
    load: async (e, t) => {
        let l = e.filter((e) => !lj.isAnnouncementFresh(e, tw.vc) && !lj.isAnnouncementRetryDelayed(e));
        l.length > 0 &&
            (await (async function (e, t) {
                if (0 === e.length || t !== lj.getSessionGeneration()) return;
                let l = await I.Bo.get({
                    url: v.Rsh.GAME_ANNOUNCEMENTS_LATEST,
                    query: { game_ids: [...e] },
                    rejectWithError: !0,
                });
                if (t !== lj.getSessionGeneration()) return;
                let a = l.body;
                a.announcements.length > 0 &&
                    R.h.dispatch({
                        type: "GLOBAL_DISCOVERY_GAMES_ANNOUNCEMENTS_FETCH_SUCCESS",
                        announcements: a.announcements.map((e) => {
                            let { game_id: t, message: l } = e;
                            return { gameId: t, message: null == l ? null : (0, lb.pp)([l])[0] };
                        }),
                    });
                let s = new Set(
                        a.announcements.map((e) => {
                            let { game_id: t } = e;
                            return t;
                        }),
                    ),
                    n = e.filter((e) => !s.has(e));
                n.length > 0 &&
                    R.h.dispatch({ type: "GLOBAL_DISCOVERY_GAMES_ANNOUNCEMENTS_FETCH_FAILURE", gameIds: n });
            })(l, t));
    },
    staleAfter: tw.wY / tR.A.Millis.SECOND,
    failureStaleAfter: tw.wY / tR.A.Millis.SECOND,
    retryConfig: { backoff: () => new lg.A(tw.Ge, tw.wY) },
});
var lI = l(749519),
    lG = l(595305);
function lR() {
    return (0, s.jsx)(tY.A, {
        gap: 16,
        children: eQ()
            .range(0, 5)
            .map((e) =>
                (0, s.jsxs)(
                    tq.qT,
                    {
                        className: lG.Nr,
                        children: [
                            (0, s.jsx)(tq.Ay, { className: lG.Tp }),
                            (0, s.jsx)(tB.gr, { className: lG.Iv }),
                            (0, s.jsxs)(tP.B, {
                                gap: 8,
                                className: lG.pq,
                                children: [
                                    (0, s.jsx)(tq.Ay, { className: lG.UU }),
                                    (0, s.jsx)(tq.Ay, { className: lG.h5 }),
                                    (0, s.jsx)(tq.Ay, { className: lG.vL }),
                                ],
                            }),
                        ],
                    },
                    e,
                ),
            ),
    });
}
function lT(e) {
    let { id: t, src: l, alt: a, placeholder: r, placeholderVersion: i } = e,
        [o, c] = n.useState(!1),
        [d, u] = n.useState(!1);
    return d
        ? null
        : (0, s.jsx)("div", {
              className: lG.oz,
              children: (0, s.jsx)(lm.y, {
                  readyState: o ? v.Rv1.READY : v.Rv1.LOADING,
                  aspectRatio: 1,
                  placeholder: r,
                  placeholderVersion: i,
                  disableSpinner: !0,
                  children: (0, s.jsx)("img", {
                      id: t,
                      className: lG.oz,
                      src: l,
                      alt: a,
                      loading: "lazy",
                      onLoad: () => c(!0),
                      onError: () => u(!0),
                  }),
              }),
          });
}
function l_(e) {
    var t;
    let { game: l, lastPlayedAt: a, announcement: r, listItemProps: o } = e,
        { playingNow: c, preview: d } =
            ((t = l.id),
            {
                playingNow: (0, i.bG)([lS.Ay], () => lS.Ay.getRunningGames().some((e) => e.id === t), [t]),
                preview: n.useMemo(() => {
                    if (null == r) return null;
                    let e = r.media,
                        t =
                            e?.type === "IMAGE" || (e?.type === "VIDEO" && null != e.proxyUrl)
                                ? (0, lb.x2)(e.proxyUrl ?? e.url, 1, 48)
                                : null,
                        l = (0, lp.uJ)(r.title) ? r.body : r.title,
                        a = null != l ? (0, ly.$)(lC.A.parseToAST(l, !0, {})) : "";
                    return {
                        text: (0, lp.uJ)(a) ? null : a,
                        imageSrc: t,
                        imageAlt: e?.alt ?? "",
                        placeholder: e?.placeholder,
                        placeholderVersion: e?.placeholderVersion,
                    };
                }, [r]),
            }),
        u = n.useId(),
        m = n.useId(),
        g = n.useId(),
        h = [u];
    (null != d && h.push(m), d?.imageSrc != null && "" !== d.imageAlt && h.push(g));
    let f = (0, tQ.A)({
            location: "GlobalDiscoveryGamesJumpBackInCard",
            gameId: l.id,
            source: tH.GameProfileSources.GlobalDiscoveryGamesJumpBackIn,
        }),
        x = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)("div", {
                    className: lG.Iv,
                    children: (0, s.jsx)(tB.Ay, { game: l, size: tB.wu.LARGE, imageSize: 256 }),
                }),
                (0, s.jsxs)(tP.B, {
                    gap: 8,
                    className: lG.pq,
                    children: [
                        (0, s.jsx)($.E, { variant: "body-md/semibold", lineClamp: 1, children: l.name }),
                        (0, s.jsx)($.E, {
                            id: u,
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: c
                                ? E.intl.string(lI.default["2trLAT"])
                                : E.intl.formatToPlainString(lI.default.cFBsWj, { when: lu()(a).fromNow() }),
                        }),
                        null != d
                            ? (0, s.jsxs)(tP.B, {
                                  direction: "horizontal",
                                  gap: 8,
                                  align: "center",
                                  children: [
                                      null != d.imageSrc
                                          ? (0, s.jsx)(
                                                lT,
                                                {
                                                    id: "" !== d.imageAlt ? g : void 0,
                                                    src: d.imageSrc,
                                                    alt: d.imageAlt,
                                                    placeholder: d.placeholder,
                                                    placeholderVersion: d.placeholderVersion,
                                                },
                                                d.imageSrc,
                                            )
                                          : null,
                                      (0, s.jsx)($.E, {
                                          id: m,
                                          className: lG.Wi,
                                          variant: "body-sm/normal",
                                          lineClamp: 2,
                                          children: d.text ?? E.intl.string(lI.default["509stF"]),
                                      }),
                                  ],
                              })
                            : null,
                    ],
                }),
            ],
        });
    return null == f
        ? (0, s.jsx)("div", { ...o, className: lG.Nr, children: x })
        : (0, s.jsx)(eh.D, {
              ...o,
              className: Z()(lG.Nr, lG.vk),
              onClick: f,
              "aria-label": E.intl.formatToPlainString(E.t["8QLQB+"], { gameName: l.name }),
              "aria-describedby": h.join(" "),
              children: x,
          });
}
function lF() {
    let e,
        t,
        l,
        a,
        r,
        o,
        c,
        d,
        u,
        m,
        {
            entries: g,
            announcementGameIds: h,
            loading: f,
        } = ((e = (0, i.bG)([t$.A], () => t$.A.hasConsented(v.YAq.PERSONALIZATION))),
        (t = (0, i.yK)(
            [t0.A],
            () =>
                !e || t0.A.hasFetchFailed
                    ? lN
                    : Object.values(t0.A.applicationStatistics)
                          .sort((e, t) => Date.parse(t.last_played_at) - Date.parse(e.last_played_at))
                          .slice(0, 5),
            [e],
        )),
        (l = n.useMemo(() => t.map((e) => e.application_id), [t])),
        (r = (a = (0, tJ.iE)(l)).some((e) => e.isLoading)),
        (o = n.useMemo(
            () =>
                a.some((e) => {
                    let { gameId: t, isLoading: l } = e;
                    return null == t && l;
                })
                    ? []
                    : [
                          ...new Set(
                              a
                                  .map((e) => {
                                      let { gameId: t } = e;
                                      return t;
                                  })
                                  .filter(P.Vq),
                          ),
                      ],
            [a],
        )),
        (c = (0, i.bG)([tX.default], () => tX.default.getCurrentUser()?.nsfwAllowed)),
        (d = (0, i.bG)([t0.A], () => null == t0.A.lastFetched && !t0.A.hasFetchFailed)),
        (u = n.useMemo(
            () =>
                (function (e, t) {
                    let l = [],
                        a = new Set();
                    for (let s of e) {
                        let e = t.get(s.application_id);
                        null == e || a.has(e.id) || (a.add(e.id), l.push({ game: e, lastPlayedAt: s.last_played_at }));
                    }
                    return l;
                })(
                    t,
                    (function (e, t, l) {
                        let a = new Map();
                        for (let [s, { gameRecord: n, isLoading: r }] of t.entries())
                            r || null == n || !(0, tK.T_)(n) || (0, tZ.b)(n, l) || a.set(e[s], n);
                        return a;
                    })(l, a, c),
                ),
            [t, l, a, c],
        )),
        (m = e && (d || (0 === u.length && r))),
        { entries: u, announcementGameIds: o, loading: m });
    lE(
        (0, lv.A)(h),
        (0, i.bG)([lj], () => lj.getSessionGeneration()),
    );
    let x = (0, i.yK)([lj], () => g.map((e) => lj.getAnnouncement(e.game.id)?.message ?? null), [g]),
        A = g.map((e, t) => ({ ...e, announcement: x[t] ?? null }));
    return f
        ? (0, s.jsx)(t9, { skeletonTitleWidth: 160, children: (0, s.jsx)(lR, {}) })
        : 0 === A.length
          ? null
          : (0, s.jsx)(t7, {
                title: E.intl.string(E.t.Pc6FRV),
                children: (0, s.jsx)(t8, {
                    items: A,
                    getItemKey: (e) => e.game.id,
                    renderItem: (e, t) => (0, s.jsx)(l_, { ...e, listItemProps: t }),
                    "aria-label": E.intl.string(E.t.Pc6FRV),
                }),
            });
}
function lk() {
    return (0, s.jsx)(t7, { title: E.intl.string(E.t.qpGTIa), children: (0, s.jsx)(lo, {}) });
}
var lD = l(541830),
    lL = l(201989),
    lw = l(864202),
    lO = l(602999),
    lM =
        (((a = {})[(a.ADVENTURE = 1)] = "ADVENTURE"),
        (a[(a.CRAFTING = 2)] = "CRAFTING"),
        (a[(a.FANTASY = 3)] = "FANTASY"),
        (a[(a.FPS = 4)] = "FPS"),
        (a[(a.HORROR = 5)] = "HORROR"),
        (a[(a.INDIE = 6)] = "INDIE"),
        (a[(a.MMO = 7)] = "MMO"),
        (a[(a.OPEN_WORLD = 8)] = "OPEN_WORLD"),
        (a[(a.RPG = 9)] = "RPG"),
        (a[(a.SANDBOX = 10)] = "SANDBOX"),
        (a[(a.SCI_FI = 11)] = "SCI_FI"),
        (a[(a.SHOOTER = 12)] = "SHOOTER"),
        (a[(a.SIMULATION = 13)] = "SIMULATION"),
        (a[(a.SPORTS = 14)] = "SPORTS"),
        (a[(a.STORY_RICH = 15)] = "STORY_RICH"),
        (a[(a.STRATEGY = 16)] = "STRATEGY"),
        (a[(a.SURVIVAL = 17)] = "SURVIVAL"),
        (a[(a.TACTICAL = 18)] = "TACTICAL"),
        a);
let lU = {
        [lM.ADVENTURE]: lI.default.iscHqp,
        [lM.CRAFTING]: lI.default.xwhzzz,
        [lM.FANTASY]: lI.default["C/c3om"],
        [lM.FPS]: lI.default.k5Z9iC,
        [lM.HORROR]: lI.default.kPg4Tj,
        [lM.INDIE]: lI.default.GrAPLS,
        [lM.MMO]: lI.default.eCCPlU,
        [lM.OPEN_WORLD]: lI.default.Tf238f,
        [lM.RPG]: lI.default.JnJaJN,
        [lM.SANDBOX]: lI.default.HhlHYu,
        [lM.SCI_FI]: lI.default["3CQ9xv"],
        [lM.SHOOTER]: lI.default.wFZTLt,
        [lM.SIMULATION]: lI.default.LhKG5r,
        [lM.SPORTS]: lI.default.OwI6rQ,
        [lM.STORY_RICH]: lI.default.lKH6Ua,
        [lM.STRATEGY]: lI.default["3lGUb7"],
        [lM.SURVIVAL]: lI.default["9MM6LP"],
        [lM.TACTICAL]: lI.default.DnEG4n,
    },
    lP = [],
    lV = (0, i.UT)(lj, {
        getQueryId: (e) => (null != e ? `global-discovery-games-trending:${e}` : null),
        staleAfter: 6 * tR.A.Seconds.HOUR,
        failureStaleAfter: 5 * tR.A.Seconds.MINUTE,
        get: () => lj.getTrendingGames(),
        load: async (e) => {
            let t = await I.Bo.get({ url: v.Rsh.GAMES_TRENDING, rejectWithError: !0 });
            tX.default.getCurrentUser()?.id === e &&
                R.h.dispatch({ type: "GLOBAL_DISCOVERY_GAMES_TRENDING_FETCH_SUCCESS", data: t.body });
        },
    });
function lH() {
    var e;
    let t,
        l,
        a,
        s,
        r = lV((0, i.bG)([tX.default], () => tX.default.getCurrentUser()?.id)),
        o =
            ((e = r.data),
            (t = e?.games ?? lP),
            (l = e?.week ?? null),
            (a = (0, i.yK)([tb.A], () => t.map((e) => tb.A.getGame(e.game_id)), [t])),
            (s = (0, i.bG)([tX.default], () => tX.default.getCurrentUser()?.nsfwAllowed)),
            n.useMemo(
                () =>
                    t
                        .map((e, t) =>
                            (function (e, t, l, a) {
                                if (!(0, lL.R)(t, a)) return null;
                                let s =
                                    null != l &&
                                    (function (e, t, l) {
                                        if (0 !== e || null == t) return !1;
                                        let a = (0, lw.default)(t.slice(0, 10)),
                                            s = (0, lw.default)(l);
                                        return a > (0, lO.default)(s, 7) && a <= s;
                                    })(e.total_players_pct_change, t.firstReleaseDate, l);
                                return { entry: e, game: t, isNewRelease: s };
                            })(e, a[t], l, s),
                        )
                        .filter(P.Vq),
                [t, a, l, s],
            )),
        c = null == r.data && (r.isLoading || null == r.error);
    return { data: r.data, error: r.error, loading: c, rows: o };
}
var lQ = l(2014);
function lB(e) {
    let { game: t } = e;
    return t.id;
}
function lq(e) {
    let {
            row: { game: t, entry: l },
            listItemProps: a,
        } = e,
        r = (0, tQ.A)({
            location: "GlobalDiscoveryGamesTrendingCard",
            gameId: t.id,
            source: tH.GameProfileSources.GlobalDiscoveryGamesTrendingShelf,
        }),
        i = n.useMemo(() => t.genres.slice(0, 2).map(lD.du).join(" \u2022 "), [t]);
    return (0, s.jsxs)(eh.D, {
        ...a,
        className: Z()(lQ.Nr, { [lQ.vk]: null != r }),
        onClick: r,
        "aria-label": E.intl.formatToPlainString(lI.default.EdG6vh, { rank: l.rank, gameName: t.name }),
        children: [
            (0, s.jsxs)("div", {
                className: lQ.Iv,
                children: [
                    (0, s.jsx)(tB.Ay, { game: t, size: tB.wu.SMALL, className: lQ.xe, imageSize: 512 }),
                    (0, s.jsx)("div", {
                        className: Z()(lQ.Tm, lQ.Vf),
                        "aria-hidden": !0,
                        children: (0, s.jsx)($.E, {
                            variant: "display-lg",
                            color: "text-overlay-light",
                            tag: "span",
                            children: l.rank,
                        }),
                    }),
                    "" !== i &&
                        (0, s.jsx)("div", {
                            className: Z()(lQ.bh, lQ.Vf),
                            children: (0, s.jsx)($.E, {
                                variant: "body-xs/medium",
                                color: "text-overlay-light",
                                lineClamp: 2,
                                children: i,
                            }),
                        }),
                ],
            }),
            (0, s.jsx)($.E, { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: t.name }),
        ],
    });
}
function lY(e, t) {
    return (0, s.jsx)(lq, { row: e, listItemProps: t });
}
function lz() {
    return (0, s.jsx)(tY.A, {
        gap: 16,
        children: eQ()
            .range(0, 10)
            .map((e) =>
                (0, s.jsxs)(
                    tq.qT,
                    {
                        className: lQ.Nr,
                        children: [(0, s.jsx)(tB.gr, { className: lQ.Iv }), (0, s.jsx)(tq.Ay, { className: lQ.UU })],
                    },
                    e,
                ),
            ),
    });
}
function lZ() {
    let { loading: e, rows: t } = lH();
    if (!e && 0 === t.length) return null;
    let l = E.intl.string(E.t.raRLQb);
    return (0, s.jsx)(t7, {
        title: l,
        children: e
            ? (0, s.jsx)(lz, {})
            : (0, s.jsx)(t8, { items: t, getItemKey: lB, renderItem: lY, "aria-label": l }),
    });
}
let lK = { top: 32, bottom: 24 };
function lW() {
    return (
        n.useEffect(() => {
            (0, tV.X)();
        }, []),
        (0, s.jsx)(H.F, {
            children: (0, s.jsxs)(tP.B, {
                gap: 48,
                padding: lK,
                children: [
                    (0, s.jsx)(lZ, {}),
                    (0, s.jsx)(lF, {}),
                    (0, s.jsx)(lr, {}),
                    (0, s.jsx)(lk, {}),
                    (0, s.jsx)(lc, {}),
                ],
            }),
        })
    );
}
var lJ = l(837381),
    l$ = l(516521),
    lX = l(769015),
    l0 = l(715498);
let l1 = n.memo(function (e) {
    let { game: t, isHighlighted: l, onSelect: a } = e,
        r = (0, lJ.rm)(t.id),
        i = n.useCallback(() => a(t.id), [t.id, a]),
        o = (0, tQ.A)(
            {
                location: "GlobalDiscoveryGamesSearchDropdownRow",
                gameId: t.id,
                source: tH.GameProfileSources.GlobalDiscoveryGamesSearch,
            },
            { onOpened: i },
        );
    return (0, s.jsxs)(eh.D, {
        ...r,
        id: r["data-list-item-id"],
        role: "option",
        "aria-selected": l,
        className: Z()(l0.nM, { [l0.vk]: null != o, [l0.mr]: l }),
        onClick: o,
        "aria-label": E.intl.formatToPlainString(E.t["8QLQB+"], { gameName: t.name }),
        children: [
            (0, s.jsx)(lX.A, { game: t, size: lX.M.SMALL }),
            (0, s.jsx)($.E, { variant: "body-md/medium", lineClamp: 1, children: t.name }),
        ],
    });
});
function l2(e) {
    let { results: t, navigator: l, highlightedGameId: a, onSelect: r } = e,
        { ref: i } = l.containerProps,
        o = n.useCallback(
            (e) => {
                i.current = e?.getScrollerNode() ?? null;
            },
            [i],
        );
    return 0 === t.length
        ? (0, s.jsx)("div", {
              role: "status",
              className: l0.Wm,
              children: (0, s.jsx)($.E, {
                  className: l0.Ie,
                  variant: "body-sm/normal",
                  color: "text-subtle",
                  children: E.intl.string(E.t["+p0UgM"]),
              }),
          })
        : (0, s.jsx)(lJ.hD, {
              navigator: l,
              children: (0, s.jsx)("div", {
                  className: l0.Wm,
                  children: (0, s.jsx)(l$.Ch, {
                      ref: o,
                      id: tw.OZ,
                      role: "listbox",
                      className: l0.XG,
                      children: t.map((e) => (0, s.jsx)(l1, { game: e, isHighlighted: e.id === a, onSelect: r }, e.id)),
                  }),
              }),
          });
}
var l5 = l(662203),
    l6 = l(574211),
    l4 = l(150934),
    l3 = l(431527),
    l9 = l(305866),
    l8 = l(265872),
    l7 = l(783977),
    ae = l(418151),
    at = l(221132);
let al = Object.values(l6.Z);
function aa(e, t, l) {
    let a = e.map((e) => {
        let { value: t } = e;
        return t;
    });
    return [...a, ...t.filter((e) => !a.includes(e))].sort(l);
}
function as(e) {
    return `${e}`;
}
function an(e, t, l) {
    let a = t.find((e) => e.value === l)?.count ?? 0;
    return E.intl.formatToPlainString(lI.default["2mZpw5"], { name: e, count: a });
}
function ar(e, t) {
    return al.indexOf(e) - al.indexOf(t);
}
function ai(e, t) {
    return (0, lD.du)(e).localeCompare((0, lD.du)(t));
}
function ao(e) {
    let { platform: t, checked: l, label: a } = e,
        r = n.useCallback(() => (0, tA.ei)(t), [t]);
    return (0, s.jsx)(l4.S, { checked: l, onChange: r, label: a });
}
function ac(e) {
    let { genreCounts: t, platformCounts: l, searchGenres: a, searchPlatforms: r } = e,
        i = n.useId(),
        o = n.useMemo(() => aa(l, r, ar), [l, r]),
        c = n.useMemo(() => aa(t, a, ai), [t, a]),
        d = n.useMemo(() => c.map((e) => ({ id: as(e), label: an((0, lD.du)(e), t, e) })), [c, t]),
        u = n.useMemo(() => new Set(a.map(as)), [a]),
        m = n.useCallback(
            (e) => {
                "all" !== e && (0, tA.xc)(c.filter((t) => e.has(as(t))));
            },
            [c],
        ),
        h = E.intl.string(E.t.pDgwYB);
    return (0, s.jsxs)("div", {
        className: at.uW,
        children: [
            o.length > 0
                ? (0, s.jsxs)("div", {
                      className: at.bz,
                      children: [
                          (0, s.jsx)(g.D, {
                              variant: "heading-sm/semibold",
                              id: i,
                              children: E.intl.string(E.t.PNqxNe),
                          }),
                          (0, s.jsx)("div", {
                              role: "group",
                              "aria-labelledby": i,
                              className: at.mM,
                              children: o.map((e) =>
                                  (0, s.jsx)(
                                      ao,
                                      { platform: e, checked: r.includes(e), label: an((0, ae.n7)(e), l, e) },
                                      e,
                                  ),
                              ),
                          }),
                      ],
                  })
                : null,
            c.length > 0
                ? (0, s.jsxs)("div", {
                      className: at.bz,
                      children: [
                          (0, s.jsx)(g.D, { variant: "heading-sm/semibold", children: h }),
                          (0, s.jsx)(l3.C, {
                              variant: "filter",
                              selectionMode: "multiple",
                              label: h,
                              items: d,
                              selectedKeys: u,
                              onSelectionChange: m,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ad(e) {
    let { genreCounts: t, platformCounts: l, searchGenres: a, searchPlatforms: r } = e,
        i = n.useRef(null),
        o = E.intl.string(E.t.UdhTtk),
        c = n.useCallback(
            (e) => {
                let { setPopoutRef: n } = e;
                return (0, s.jsx)(l9.l, {
                    ref: n,
                    "aria-label": o,
                    className: at.SW,
                    children: (0, s.jsx)(l$.Ch, {
                        className: at.yZ,
                        children: (0, s.jsx)(ac, {
                            genreCounts: t,
                            platformCounts: l,
                            searchGenres: a,
                            searchPlatforms: r,
                        }),
                    }),
                });
            },
            [o, t, l, a, r],
        );
    return (0, s.jsx)(l8.Y, {
        targetElementRef: i,
        renderPopout: c,
        position: "bottom",
        align: "right",
        children: (e) =>
            (0, s.jsx)(eF.$, {
                ...e,
                buttonRef: i,
                variant: "secondary",
                text: o,
                icon: l7.FiltersHorizontalIcon,
                iconPosition: "end",
            }),
    });
}
var au = l(432601);
function am() {
    return (0, s.jsx)("div", {
        className: au.Vg,
        "aria-busy": !0,
        children: eQ()
            .range(0, 25)
            .map((e) =>
                (0, s.jsxs)(
                    tq.qT,
                    {
                        className: au.Vs,
                        children: [(0, s.jsx)(tB.gr, { className: au.Iv }), (0, s.jsx)(tq.Ay, { className: au.Zk })],
                    },
                    e,
                ),
            ),
    });
}
function ag() {
    return (0, s.jsx)($.E, { variant: "body-md/normal", color: "text-subtle", children: E.intl.string(E.t.uvDZBZ) });
}
let ah = n.memo(function (e) {
    let { game: t } = e,
        l = (0, tQ.A)({
            location: "GlobalDiscoveryGamesSearchResultTile",
            gameId: t.id,
            source: tH.GameProfileSources.GlobalDiscoveryGamesSearch,
        });
    return (0, s.jsxs)(eh.D, {
        className: Z()(au.Vs, { [au.vk]: null != l }),
        onClick: l,
        "aria-label": E.intl.formatToPlainString(E.t["8QLQB+"], { gameName: t.name }),
        children: [
            (0, s.jsx)("div", {
                className: au.Iv,
                children: (0, s.jsx)(tB.FQ, {
                    coverUrl: t.getCoverURL(512),
                    iconUrl: t.getIconURL(256),
                    gameName: t.name,
                    firstReleaseDate: t.firstReleaseDate,
                    size: tB.wu.LARGE,
                    className: au.xe,
                    loadingPlaceholder: (0, s.jsx)(tB.gr, { className: au.XE }),
                }),
            }),
            (0, s.jsx)($.E, { variant: "body-md/medium", lineClamp: 1, children: t.name }),
        ],
    });
});
function af(e) {
    let { games: t, isLoading: l, error: a } = e;
    return 0 === t.length
        ? l
            ? (0, s.jsx)(am, {})
            : null != a
              ? (0, s.jsx)(ag, {})
              : (0, s.jsx)($.E, {
                    variant: "body-md/normal",
                    color: "text-subtle",
                    children: E.intl.string(E.t["+p0UgM"]),
                })
        : (0, s.jsx)("div", { className: au.Vg, children: t.map((e) => (0, s.jsx)(ah, { game: e }, e.id)) });
}
function ax(e) {
    let { query: t, scrollerRef: l } = e,
        {
            games: a,
            isLoading: r,
            error: o,
            filterCounts: c,
            searchGenres: d,
            searchPlatforms: u,
            searchPage: m,
        } = (function (e) {
            var t, l;
            let a = tA.Ay.useField("searchGenres"),
                s = tA.Ay.useField("searchPlatforms"),
                r = tA.Ay.useField("searchPage"),
                {
                    data: o,
                    isLoading: c,
                    error: d,
                } = ((t = { query: e, filterGroup: tO, genres: a, platformAvailability: s }),
                (l = (r - 1) * 25),
                tL(
                    (function (e) {
                        let t = null != e ? tE(e) : null,
                            [l, a] = n.useState(() => (null != e && null != t ? { key: t, params: e } : null));
                        if ((l?.key ?? null) === t) return l;
                        let s = null != e && null != t ? { key: t, params: e } : null;
                        return (a(s), s);
                    })(t),
                    l,
                )),
                u = o?.gameIds ?? tM,
                m = (0, i.yK)([tb.A], () => u.map((e) => tb.A.getGame(e)).filter(P.Vq), [u]),
                g = o?.totalCount,
                h = o?.facets,
                f = n.useMemo(
                    () =>
                        null != h && null != g
                            ? { query: e, genreCounts: h.genres, platformCounts: h.platformAvailability, totalCount: g }
                            : null,
                    [e, h, g],
                ),
                [x, A] = n.useState(null);
            return (
                null != f && f !== x && A(f),
                {
                    games: m,
                    isLoading: c,
                    error: d,
                    filterCounts: f ?? (x?.query === e ? x : null),
                    searchGenres: a,
                    searchPlatforms: s,
                    searchPage: r,
                }
            );
        })(t);
    if (
        (n.useEffect(() => {
            l.current?.scrollTo({ to: 0 });
        }, [l, t, d, u, m]),
        null == c && !r && null == o)
    )
        return null;
    let g = (0, s.jsx)(af, { games: a, isLoading: r, error: o }),
        h = null != c && (c.platformCounts.length > 0 || c.genreCounts.length > 0 || u.length > 0 || d.length > 0);
    return (0, s.jsx)("div", {
        className: au.kL,
        children:
            null == c
                ? g
                : (0, s.jsxs)("div", {
                      className: au.Zp,
                      children: [
                          (0, s.jsxs)(tP.B, {
                              gap: 16,
                              className: au.iW,
                              children: [
                                  h
                                      ? (0, s.jsx)("div", {
                                            className: au.OJ,
                                            children: (0, s.jsx)(ad, {
                                                genreCounts: c.genreCounts,
                                                platformCounts: c.platformCounts,
                                                searchGenres: d,
                                                searchPlatforms: u,
                                            }),
                                        })
                                      : null,
                                  g,
                                  (0, s.jsx)(l5.m, {
                                      className: au.JV,
                                      totalCount: Math.min(c.totalCount, 500),
                                      pageSize: 25,
                                      disablePaginationGap: !0,
                                      hideMaxPage: !0,
                                      currentPage: m,
                                      onPageChange: tA.kG,
                                  }),
                              ],
                          }),
                          h
                              ? (0, s.jsx)("div", {
                                    className: au.mc,
                                    children: (0, s.jsx)(ac, {
                                        genreCounts: c.genreCounts,
                                        platformCounts: c.platformCounts,
                                        searchGenres: d,
                                        searchPlatforms: u,
                                    }),
                                })
                              : null,
                      ],
                  }),
    });
}
var aA = l(123292);
function aj(e) {
    let { game: t } = e,
        l = (0, tQ.A)({ gameId: t.id, source: tH.GameProfileSources.GlobalDiscoveryGamesTrendingTab });
    return null != l
        ? (0, s.jsx)(aA.Q, {
              text: t.name,
              textVariant: "body-md/semibold",
              variant: "secondary",
              lineClamp: 1,
              "aria-label": E.intl.formatToPlainString(E.t["8QLQB+"], { gameName: t.name }),
              onClick: l,
          })
        : (0, s.jsx)($.E, { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: t.name });
}
var ay = l(564508),
    aS = l(184989),
    ab = l(20112);
function aC(e) {
    let { guild: t } = e,
        l = (0, i.bG)([aS.A], () => aS.A.isMember(t.id), [t.id]),
        a = null != t.invite_link_url ? (0, ay.default)(t.invite_link_url) : void 0,
        n = {
            id: t.id,
            name: t.name,
            icon: null,
            features: [
                ...(t.is_verified ? [v.GuildFeatures.VERIFIED] : []),
                ...(t.is_partnered ? [v.GuildFeatures.PARTNERED] : []),
            ],
        };
    return (0, s.jsxs)("div", {
        className: ab.AY,
        children: [
            null != t.icon_url && (0, s.jsx)("img", { src: t.icon_url, alt: "", className: ab.bQ }),
            (0, s.jsxs)("div", {
                className: ab.SE,
                children: [
                    (0, s.jsxs)("div", {
                        className: ab.oH,
                        children: [
                            (0, s.jsx)($.E, {
                                variant: "body-sm/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            (0, s.jsx)(eu.A, { guild: n, size: 16 }),
                        ],
                    }),
                    null != t.approximate_online_count &&
                        (0, s.jsx)($.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: E.intl.format(E.t["LC+S+m"], { membersOnline: t.approximate_online_count }),
                        }),
                ],
            }),
            (l || null != a) &&
                (0, s.jsx)(eF.$, {
                    size: "sm",
                    variant: "primary",
                    text: l ? E.intl.string(lI.default.aZbg3l) : E.intl.string(E.t.VJlc0S),
                    onClick: l ? () => (0, tu.pX)(v.BVt.CHANNEL(t.id)) : a,
                }),
        ],
    });
}
function ap() {
    return (0, s.jsx)($.E, { variant: "body-sm/normal", color: "text-subtle", lineClamp: 1, children: "-" });
}
let aN = n.memo(function (e) {
        let { entry: t, game: l, isNewRelease: a, percentFormatter: n } = e,
            r = t.total_players_pct_change,
            i = t.categories
                .slice()
                .sort((e, t) => e.rank - t.rank)
                .flatMap((e) => {
                    let { id: t } = e,
                        l = lU[t];
                    return null != l ? [E.intl.string(l)] : [];
                })
                .slice(0, 2);
        return (0, s.jsxs)("tr", {
            className: ab.nM,
            children: [
                (0, s.jsx)("th", {
                    scope: "row",
                    className: ab.Hn,
                    children: (0, s.jsx)($.E, {
                        tag: "span",
                        variant: "body-md/semibold",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: t.rank,
                    }),
                }),
                (0, s.jsx)("td", {
                    className: ab.Hn,
                    children: (0, s.jsxs)("div", {
                        className: ab.AY,
                        children: [
                            (0, s.jsx)("div", {
                                "aria-hidden": !0,
                                className: ab.xn,
                                children: (0, s.jsx)(tB.Ay, { game: l, size: tB.wu.COMPACT }),
                            }),
                            (0, s.jsx)("div", { className: ab.t1, children: (0, s.jsx)(aj, { game: l }) }),
                        ],
                    }),
                }),
                (0, s.jsx)("td", {
                    className: ab.Hn,
                    children: (0, s.jsx)($.E, {
                        variant: "body-sm/semibold",
                        color: r > 0 ? "text-feedback-positive" : r < 0 ? "text-feedback-critical" : "text-brand",
                        tabularNumbers: !0,
                        children: a ? E.intl.string(lI.default.oLMJSu) : n.format(r),
                    }),
                }),
                (0, s.jsx)("td", {
                    className: ab.Hn,
                    children:
                        i.length > 0
                            ? (0, s.jsx)($.E, {
                                  variant: "body-sm/normal",
                                  color: "text-subtle",
                                  lineClamp: 1,
                                  children: i.join(", "),
                              })
                            : (0, s.jsx)(ap, {}),
                }),
                (0, s.jsx)("td", {
                    className: ab.Hn,
                    children:
                        null != t.official_guild ? (0, s.jsx)(aC, { guild: t.official_guild }) : (0, s.jsx)(ap, {}),
                }),
            ],
        });
    }),
    av = { top: 32, bottom: 48 };
function aE(e) {
    let { label: t, ariaLabel: l } = e;
    return (0, s.jsx)("th", {
        scope: "col",
        className: ab.k4,
        "aria-label": l,
        children: (0, s.jsx)($.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
    });
}
function aI(e) {
    let { message: t } = e;
    return (0, s.jsx)("tr", {
        children: (0, s.jsx)("td", {
            colSpan: 5,
            className: ab.Hn,
            children: (0, s.jsx)("div", {
                className: ab.h5,
                role: "status",
                children: (0, s.jsx)($.E, { variant: "body-sm/normal", color: "text-subtle", children: t }),
            }),
        }),
    });
}
function aG() {
    return (0, s.jsx)("tbody", {
        "aria-hidden": !0,
        children: eQ()
            .range(0, 10)
            .map((e) =>
                (0, s.jsxs)(
                    "tr",
                    {
                        className: ab.nM,
                        children: [
                            (0, s.jsx)("td", { className: ab.Hn, children: (0, s.jsx)(tq.Ay, { className: ab.Tm }) }),
                            (0, s.jsx)("td", {
                                className: ab.Hn,
                                children: (0, s.jsxs)("div", {
                                    className: ab.AY,
                                    children: [
                                        (0, s.jsx)(tB.gr, { className: ab.xn }),
                                        (0, s.jsx)(tq.Ay, { className: Z()(ab.Qq, ab.mO) }),
                                    ],
                                }),
                            }),
                            (0, s.jsx)("td", {
                                className: ab.Hn,
                                children: (0, s.jsx)(tq.Ay, { className: Z()(ab.Qq, ab.Mx) }),
                            }),
                            (0, s.jsx)("td", {
                                className: ab.Hn,
                                children: (0, s.jsx)(tq.Ay, { className: Z()(ab.Qq, ab.L1) }),
                            }),
                            (0, s.jsx)("td", {
                                className: ab.Hn,
                                children: (0, s.jsxs)("div", {
                                    className: ab.AY,
                                    children: [
                                        (0, s.jsx)(tq.Ay, { className: ab.bQ }),
                                        (0, s.jsxs)("div", {
                                            className: ab.SE,
                                            children: [
                                                (0, s.jsx)(tq.Ay, { className: Z()(ab.Qq, ab.L5) }),
                                                (0, s.jsx)(tq.Ay, { className: Z()(ab.Qq, ab.Z4) }),
                                            ],
                                        }),
                                        (0, s.jsx)(tq.Ay, { className: ab.x6 }),
                                    ],
                                }),
                            }),
                        ],
                    },
                    e,
                ),
            ),
    });
}
function aR() {
    let { data: e, error: t, loading: l, rows: a } = lH(),
        r = e?.week ?? null,
        i = n.useId(),
        o = E.intl.currentLocale,
        { percentFormatter: c, weekFormatter: d } = n.useMemo(
            () => ({
                percentFormatter: new Intl.NumberFormat(o, {
                    style: "percent",
                    maximumFractionDigits: 0,
                    signDisplay: "exceptZero",
                }),
                weekFormatter: new Intl.DateTimeFormat(o, { month: "short", day: "numeric", timeZone: "UTC" }),
            }),
            [o],
        ),
        u =
            null != r
                ? E.intl.formatToPlainString(lI.default["/EED9C"], { week: d.format(new Date(`${r}T00:00:00Z`)) })
                : null;
    return (0, s.jsxs)(tP.B, {
        gap: 16,
        padding: av,
        children: [
            (0, s.jsxs)("div", {
                className: ab.wx,
                children: [
                    (0, s.jsx)(g.D, {
                        id: i,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: E.intl.string(E.t["7ff2Gs"]),
                    }),
                    l && (0, s.jsx)(tq.Ay, { className: Z()(ab.Qq, ab.HH) }),
                    !l &&
                        null != u &&
                        (0, s.jsx)($.E, { variant: "body-sm/normal", color: "text-subtle", children: u }),
                ],
            }),
            (0, s.jsx)("div", {
                className: ab.CZ,
                children: (0, s.jsx)(l$.Ch, {
                    className: ab.B,
                    orientation: "horizontal",
                    overflow: "auto",
                    scrollbarGutter: !1,
                    role: "region",
                    tabIndex: 0,
                    "aria-labelledby": i,
                    children: (0, s.jsxs)("table", {
                        className: ab.tp,
                        "aria-busy": l,
                        children: [
                            (0, s.jsxs)("colgroup", {
                                children: [
                                    (0, s.jsx)("col", { className: ab.PX }),
                                    (0, s.jsx)("col", { className: ab.hK }),
                                    (0, s.jsx)("col", { className: ab.iH }),
                                    (0, s.jsx)("col", { className: ab.dv }),
                                    (0, s.jsx)("col", {}),
                                ],
                            }),
                            (0, s.jsx)("thead", {
                                children: (0, s.jsxs)("tr", {
                                    children: [
                                        (0, s.jsx)(aE, { label: "#", ariaLabel: E.intl.string(E.t.fi04zk) }),
                                        (0, s.jsx)(aE, { label: E.intl.string(E.t.SVexhg) }),
                                        (0, s.jsx)(aE, { label: E.intl.string(E.t["9BIezJ"]) }),
                                        (0, s.jsx)(aE, { label: E.intl.string(E.t.vHCZwr) }),
                                        (0, s.jsx)(aE, { label: E.intl.string(E.t.fBsbex) }),
                                    ],
                                }),
                            }),
                            l
                                ? (0, s.jsx)(aG, {})
                                : (0, s.jsxs)("tbody", {
                                      children: [
                                          a.map((e) => {
                                              let { entry: t, game: l, isNewRelease: a } = e;
                                              return (0, s.jsx)(
                                                  aN,
                                                  { entry: t, game: l, isNewRelease: a, percentFormatter: c },
                                                  l.id,
                                              );
                                          }),
                                          0 === a.length &&
                                              (0, s.jsx)(aI, {
                                                  message: E.intl.string(
                                                      null != t ? lI.default.xuDHiG : lI.default.HxbFsz,
                                                  ),
                                              }),
                                      ],
                                  }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
var aT = l(798292);
function a_(e) {
    tA.Ay.setState({ selectedView: e });
}
function aF(e) {
    tA.Ay.setState({ searchBarState: e });
}
function ak() {
    let e = tA.Ay.useField("selectedView"),
        t = tA.Ay.useField("searchBarState"),
        l = n.useRef(null),
        {
            searchQuery: a,
            submittedQuery: r,
            isSearchVisible: i,
            isDropdownVisible: o,
            dropdownResults: c,
            dropdownNavigator: d,
            highlightedGameId: m,
            searchInputProps: h,
            onSearchTextChange: y,
            onClearSearch: S,
            onSearchSubmit: b,
            onSearchKeyDown: C,
            closeDropdown: p,
            onSelectDropdownResult: N,
        } = (function () {
            let e = tA.Ay.useField("searchQuery"),
                t = tA.Ay.useField("submittedQuery"),
                [l, a] = n.useState(!1),
                [s, r] = n.useState(),
                i = l && "" !== e.trim(),
                {
                    results: o,
                    isLoading: c,
                    onSelect: d,
                    endSession: u,
                } = (0, tp.J)(e, { surface: tC.K.GLOBAL_DISCOVERY_GAMES, filterGroup: tO }),
                m = i && null != o,
                g = m && (o?.length ?? 0) > 0,
                h = n.useCallback((e, t) => {
                    (r(t), document.querySelector(e)?.scrollIntoView({ block: "nearest" }));
                }, []),
                f = (0, tj.Ay)({
                    id: tw.OZ,
                    isEnabled: g,
                    wrap: !0,
                    useVirtualFocus: !0,
                    disableClickOnSpace: !0,
                    setFocus: h,
                    scrollToStart: tU,
                    scrollToEnd: tU,
                }),
                x = n.useCallback(() => {
                    (a(!1), r(void 0), f.setFocus(null));
                }, [f]),
                A = n.useCallback(
                    (e) => {
                        ((0, tA.pR)(e), a(!0), r(void 0), f.setFocus(null));
                    },
                    [f],
                ),
                j = n.useCallback(() => {
                    ((0, tA.Ch)(), x(), u());
                }, [x, u]),
                y = n.useCallback(() => {
                    var e;
                    let t,
                        l = tA.Ay.getField("searchQuery").trim();
                    if ("" === l) return;
                    let a = tA.Ay.getState();
                    (l === a.submittedQuery &&
                        0 === a.searchGenres.length &&
                        0 === a.searchPlatforms.length &&
                        1 === a.searchPage &&
                        ((t = tE((e = { query: l, filterGroup: tO }))),
                        null != tD.getPage(t, 0) ? Promise.resolve() : tL.refetch({ key: t, params: e }, 0)),
                        (0, tA.P4)(l),
                        x(),
                        u());
                }, [x, u]),
                S = n.useCallback(
                    (e) => {
                        if (m) {
                            if ("Escape" === e.key) {
                                (e.preventDefault(), e.stopPropagation(), x());
                                return;
                            }
                            f.containerProps.onKeyDown(e);
                        }
                    },
                    [x, f, m],
                ),
                b = n.useMemo(
                    () => ({
                        role: "combobox",
                        "aria-autocomplete": "list",
                        "aria-expanded": g,
                        "aria-controls": g ? tw.OZ : void 0,
                        "aria-busy": i && c,
                        "aria-activedescendant": g && null != s ? (0, ty.t$)(tw.OZ, s) : void 0,
                    }),
                    [s, i, g, c],
                ),
                C = n.useCallback(
                    (e) => {
                        (d(e), x());
                    },
                    [x, d],
                );
            return {
                searchQuery: e,
                submittedQuery: t,
                isSearchVisible: "" !== t,
                isDropdownVisible: m,
                dropdownResults: o,
                isDropdownLoading: c,
                dropdownNavigator: f,
                highlightedGameId: s,
                searchInputProps: b,
                onSearchTextChange: A,
                onClearSearch: j,
                onSearchSubmit: y,
                onSearchKeyDown: S,
                closeDropdown: x,
                onSelectDropdownResult: C,
            };
        })(),
        {
            onTabsAvailableWidthChange: v,
            onCollapsedSearchBarClick: I,
            onSearchBarBlur: G,
            tabsClassName: R,
        } = (0, f.p)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === a.trim(),
            searchBarState: t,
            setSearchBarState: aF,
        }),
        T = n.useMemo(
            () => [
                { id: tw.yR.FEATURED, label: E.intl.string(E.t.Rism7w) },
                { id: tw.yR.TRENDING, label: E.intl.string(E.t.TsWCdW) },
            ],
            [],
        ),
        _ = n.useCallback(
            (e) => {
                ((0, tf.vq)(e.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) || p();
            },
            [p],
        );
    return (0, s.jsxs)("div", {
        className: aT.kL,
        children: [
            (0, s.jsxs)("div", {
                className: aT.wx,
                onBlur: _,
                children: [
                    (0, s.jsxs)(x.Ay, {
                        variant: x.Z5.RELATIVE,
                        children: [
                            i
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(x.XQ, {
                                              icon: u.ArrowLargeLeftIcon,
                                              "aria-label": E.intl.string(E.t["13/7kX"]),
                                              onClick: S,
                                          }),
                                          (0, s.jsx)(g.D, {
                                              variant: "heading-lg/semibold",
                                              color: "text-strong",
                                              className: aT.ov,
                                              children: E.intl.format(lI.default.LpAJ4R, { query: r }),
                                          }),
                                      ],
                                  })
                                : (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(x.T4, { icon: tx.GameControllerIcon }),
                                          (0, s.jsx)(A.A, {
                                              className: R,
                                              tabs: T,
                                              selectedTab: e,
                                              onTabSelect: a_,
                                              onAvailableWidthChange: v,
                                          }),
                                      ],
                                  }),
                            (0, s.jsx)(j.A, {
                                query: a,
                                placeholder: E.intl.string(E.t["5h0QOP"]),
                                onTextChange: y,
                                onClear: S,
                                onSubmit: b,
                                onCollapsedClick: I,
                                state: i ? ti.Um.DEFAULT : t,
                                onBlur: G,
                                onKeyDown: C,
                                inputProps: h,
                            }),
                        ],
                    }),
                    o && null != c
                        ? (0, s.jsx)(l2, { results: c, navigator: d, highlightedGameId: m, onSelect: N })
                        : null,
                ],
            }),
            (0, s.jsx)(Y.A, {
                ref: l,
                children: (0, s.jsx)("div", {
                    className: aT.Qs,
                    children: i
                        ? (0, s.jsx)(ax, { query: r, scrollerRef: l })
                        : e === tw.yR.FEATURED
                          ? (0, s.jsx)(lW, {})
                          : (0, s.jsx)(aR, {}),
                }),
            }),
        ],
    });
}
var aD = l(272030);
let aL = function () {
    let e = (0, i.bG)([c.A], () => c.A.hasLoadedExperiments),
        t = (0, th.f)("GlobalDiscovery"),
        l = tm.A.useField("selectedTab"),
        a = l !== ti.GlobalDiscoveryTab.GAMES || t ? l : ti.Pd,
        u = (function (e) {
            switch (e) {
                case ti.GlobalDiscoveryTab.SERVERS:
                    return (0, s.jsx)(tc, {});
                case ti.GlobalDiscoveryTab.APPS:
                    return (0, s.jsx)(d.default, {});
                case ti.GlobalDiscoveryTab.QUESTS:
                    return (0, s.jsx)(td.default, { topLevelRoute: !1 });
                case ti.GlobalDiscoveryTab.GAMES:
                    return (0, s.jsx)(ak, {});
                default:
                    (0, P.xb)(e);
            }
        })(a),
        m = (0, r.zy)();
    return (
        n.useEffect(() => {
            let l = m.pathname,
                a = (0, tg.j)(l);
            a === ti.GlobalDiscoveryTab.GAMES && e && !t
                ? (0, tu.bG)(v.BVt.GLOBAL_DISCOVERY_SERVERS)
                : a !== tm.A.getField("selectedTab") && tm.A.setState({ selectedTab: a });
        }, [m.pathname, e, t]),
        n.useEffect(() => {
            e && (0, U.tx)({ selectedTab: a });
        }, [a, e]),
        (0, s.jsxs)("section", {
            className: aD.k,
            children: [(0, s.jsx)(o.HI, { location: (0, tg.t)(a) }), (0, s.jsx)("div", { className: aD.T }), u],
        })
    );
};
