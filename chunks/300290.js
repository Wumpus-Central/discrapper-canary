(l.r(t), l.d(t, { default: () => l_ }));
var s,
    a = l(477900),
    n = l(582128),
    r = l(806163),
    i = l(855986),
    c = l(726249),
    d = l(343446),
    o = l(586193),
    u = l(548411),
    m = l(664121),
    g = l(534514),
    h = l(899647),
    x = l(770472),
    f = l(737823);
l(651266);
var j = l(876622),
    A = l(521974),
    y = l(282026),
    b = l(449054);
class S {
    guildIds = new Set();
    categoryId;
    constructor(e) {
        this.categoryId = e;
    }
    markAsSeen(e, t, l) {
        (this.categoryId !== e && ((this.categoryId = e), this.flushSeenGuilds(l)), this.guildIds.add(t));
    }
    flushSeenGuilds(e) {
        this.guildIds.size > 0 && (b.PU(e, Array.from(this.guildIds)), this.guildIds.clear());
    }
}
var C = l(965660),
    N = l(601193),
    I = l(858899),
    v = l(652215),
    E = l(792996);
l(321073);
var p = l(620632),
    R = l(319400),
    T = l(73153),
    G = l(324580);
let F = async function (e, t) {
        let { categoryId: l, languageCode: s, offset: a, limit: n, withCounts: r } = t;
        T.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", query: e, categoryId: l, languageCode: s });
        try {
            let t = await p.Bo.get({
                    url: v.Rsh.GUILD_DISCOVERY_SEARCH,
                    query: {
                        query: e,
                        category_id: -1 === l ? null : l,
                        offset: a,
                        limit: n,
                        language_code: s,
                        with_counts: r,
                    },
                    oldFormErrors: !0,
                    rejectWithError: (0, p.fT)(),
                }),
                i = t.body.guilds.map(C.uk),
                c = t.body.total_count;
            if (r) {
                let l = [];
                (t.body.categories?.slice(0, 8).forEach((e) => {
                    let { id: t, count: s } = e;
                    l.push([Number(t), s]);
                }),
                    T.h.dispatch({
                        type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS",
                        query: e,
                        categoryCounts: l,
                    }));
            }
            T.h.dispatch({
                type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
                query: e,
                categoryId: l,
                languageCode: s,
                guilds: i,
                total: c,
            });
        } catch (a) {
            let t = new R.LG(a);
            (b.jb({ categoryId: l, error: t, willRequestRetry: !1, isRequestRetry: !1 }),
                r &&
                    T.h.dispatch({
                        type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS",
                        query: e,
                        categoryCounts: [],
                    }),
                T.h.dispatch({
                    type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
                    query: e,
                    categoryId: l,
                    languageCode: s,
                    error: a,
                }));
        }
    },
    _ = function (e) {
        T.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR", ignoreQueries: e?.ignoreQueries ?? [] });
    },
    k = function () {
        T.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET" });
    };
var L = l(823448),
    D = l(351022);
class w {}
let O = new (class extends w {
    loadMoreCategoryResults = async (e) => {
        let { query: t, categoryId: l, languageCode: s, offset: a } = e;
        D.A.getIsFetching({ query: t, categoryId: l, languageCode: s }) ||
            (D.A.getIsInitialFetchComplete({ query: t, categoryId: l, languageCode: s }) &&
                (b.br({ withCounts: !1, offset: a }),
                await F(t, { categoryId: l, languageCode: s, offset: a, limit: 12, withCounts: !1 })));
    };
    loadCategoryResults = async (e) => {
        let { query: t, categoryId: l, languageCode: s } = e,
            a = D.A.getIsFetching({ query: t, categoryId: l, languageCode: s }),
            n = D.A.getIsInitialFetchComplete({ query: t, categoryId: l, languageCode: s });
        a ||
            n ||
            (b.br({ withCounts: !1, offset: 0 }),
            await F(t, { categoryId: l, languageCode: s, offset: 0, limit: 12, withCounts: !1 }));
    };
    loadCategoryResultsAndCounts = async (e) => {
        let { query: t, loadId: l, categoryId: s, languageCode: a } = e;
        if ("" === t.trim()) return;
        let n = L.A.getIsFetchingCounts(t),
            r = L.A.getIsFetchingCounts(t);
        n ||
            r ||
            (y.A.setState({ fetchedQuery: t, resultsQuery: "" }),
            b.fd(l, s),
            b.br({ withCounts: !0, offset: 0 }),
            await F(t, { categoryId: s, languageCode: a, offset: 0, limit: 12, withCounts: !0 }),
            y.A.setState({ resultsQuery: t }));
    };
})();
var U = l(460760),
    H = l(533129),
    M = l(403362),
    V = l(808097),
    P = l(707554),
    Q = l(23815),
    q = l(701508),
    B = l(979590),
    Y = l(783531),
    z = l(503698),
    K = l.n(z),
    Z = l(831259),
    W = l(289873),
    X = l(664343),
    J = l(834730),
    $ = l(232554),
    ee = l(442433),
    et = l(736653),
    el = l(573435),
    es = l(635350),
    ea = l(785970);
let en = n.memo(function (e) {
    let { className: t } = e;
    return (0, a.jsx)("div", { className: K()(t, ea.En) });
});
var er = l(120692),
    ei = l(717421),
    ec = l(775602);
let ed = { mass: 1, tension: 600, friction: 60, clamp: !0 },
    eo = function (e) {
        let { animate: t, state: l, cleanUp: s, children: r } = e,
            c = (0, i.bG)([ec.Ay], () => ec.Ay.useReducedMotion),
            d = n.useMemo(
                () =>
                    !1 === t || c
                        ? { opacity: 1 }
                        : l === $.wL.ENTERED || l === $.wL.MOUNTED
                          ? { from: { opacity: 0 }, to: { opacity: 1 }, config: ed }
                          : {
                                from: { opacity: 1 },
                                to: { opacity: 0 },
                                config: ed,
                                onRest: () => {
                                    s();
                                },
                            },
                [t, s, c, l],
            ),
            o = (0, ei.z)(d);
        return (0, a.jsx)(er.animated.div, { style: o, className: ea.Hp, children: r });
    };
var eu = l(714991),
    em = l(776231),
    eg = l(486020),
    eh = l(939249),
    ex = l(26430),
    ef = l(517905),
    ej = l(421407);
let eA = function (e) {
    let { className: t, guildId: l } = e,
        s = n.useRef(null),
        r = n.useCallback((e, t) => {
            (e.stopPropagation(), t.onClick(e));
        }, []);
    return (0, a.jsx)(ef.A, {
        guildId: l,
        position: "left",
        targetElementRef: s,
        children: (e) =>
            (0, a.jsx)(eh.D, {
                ...e,
                innerRef: s,
                className: t,
                onClick: (t) => r(t, e),
                children: (0, a.jsx)("div", {
                    className: ej.K,
                    children: (0, a.jsx)(ex.MaximizeIcon, { size: "xs", color: "currentColor" }),
                }),
            }),
    });
};
var ey = l(59329),
    eb = l(937495),
    eS = l(517061);
function eC(e) {
    let { guild: t, onClick: s, onView: r } = e,
        [i, c] = n.useState(!1),
        [d, o] = n.useState(!1),
        [u, m] = n.useState(!1),
        h = n.useRef(null),
        x = n.useCallback(async () => {
            o(!0);
            try {
                await s(t.id);
            } finally {
                o(!1);
            }
        }, [t.id, s]),
        f = n.useCallback(
            (e) => {
                e && !i && (c(!0), r?.(t.id));
            },
            [t.id, i, r],
        ),
        j = n.useCallback(
            (e) => {
                (0, ee.L3)(e, async () => {
                    let { default: e } = await l.e(239572).then(l.bind(l, 235327));
                    return (l) => (0, a.jsx)(e, { ...l, guild: t });
                });
            },
            [t],
        ),
        A = (0, et.Ay)(),
        y = t.features.has(v.GuildFeatures.HUB),
        b = n.useMemo(() => {
            let e = eg.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discoverySplash, size: 300 * (0, em.mZ)() });
            if (null != e) return e;
            if (y) return "/assets/c47298d5d6eac3b2.svg";
            switch (A) {
                case v.NJ8.DARK:
                    return eb;
                case v.NJ8.LIGHT:
                    return eS;
            }
        }, [t.discoverySplash, t.id, y, A]),
        S = n.useMemo(() => eg.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }), [t.icon, t.id]);
    return (0, a.jsxs)("div", {
        className: ey.kL,
        children: [
            d &&
                (0, a.jsx)("div", {
                    className: ey.dc,
                    children: (0, a.jsx)(W.y, { type: W.y.Type.PULSING_ELLIPSIS, className: ey.u1 }),
                }),
            (0, a.jsx)(Z.L, {
                innerRef: h,
                onChange: f,
                active: !i,
                threshold: 0.55,
                children: (0, a.jsxs)(es.A, {
                    ref: h,
                    className: ey.Nr,
                    onClick: x,
                    disabled: d,
                    onContextMenu: j,
                    "aria-label": E.intl.string(E.t["M9wQ+f"]),
                    children: [
                        (0, a.jsxs)("div", {
                            className: ey.wx,
                            children: [
                                (0, a.jsx)("div", {
                                    className: K()(ey.vK, { [ey.Kc]: u }),
                                    children: (0, a.jsx)("img", {
                                        src: b,
                                        alt: "",
                                        className: ey._e,
                                        onLoad: () => m(!0),
                                    }),
                                }),
                                (0, a.jsx)(eA, { className: ey.gw, guildId: t.id }),
                                (0, a.jsx)("div", {
                                    className: ey.Kk,
                                    children: (0, a.jsx)(el.Ay, {
                                        mask: el.Ay.Masks.SQUIRCLE,
                                        width: 56,
                                        height: 56,
                                        children: (0, a.jsx)("div", {
                                            className: ey.SA,
                                            children: (0, a.jsx)(el.Ay, {
                                                mask: el.Ay.Masks.SQUIRCLE,
                                                width: 48,
                                                height: 48,
                                                children: (0, a.jsx)("img", { src: S, alt: "", className: ey.my }),
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: ey.gI,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: ey.DD,
                                    children: [
                                        (0, a.jsx)(eu.A, {
                                            className: ey.n2,
                                            guild: t,
                                            tooltipColor: X.ST.Colors.PRIMARY,
                                        }),
                                        (0, a.jsx)(g.D, {
                                            variant: "heading-sm/semibold",
                                            className: ey.J5,
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(J.E, {
                                    className: ey.h_,
                                    variant: "body-sm/normal",
                                    color: "text-default",
                                    children: t.description,
                                }),
                                (0, a.jsxs)("div", {
                                    className: ey.bu,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, a.jsxs)("div", {
                                                className: ey.CV,
                                                children: [
                                                    (0, a.jsx)("div", { className: ey.SP }),
                                                    (0, a.jsx)(J.E, {
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
                                            (0, a.jsxs)("div", {
                                                className: ey.CV,
                                                children: [
                                                    (0, a.jsx)("div", { className: ey.PB }),
                                                    (0, a.jsx)(J.E, {
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
function eN(e) {
    let { guildId: t, onClick: l, onView: s } = e,
        n = (0, i.bG)([D.A], () => D.A.getGuild(t));
    return null == n ? null : (0, a.jsx)(eC, { guild: n, onClick: l, onView: s });
}
function eI(e) {
    let { guildId: t, index: l, onClick: s, onView: r } = e,
        i = n.useRef(null == t),
        c = n.useCallback(
            (e, t, l, n) =>
                null == t.guildId
                    ? (0, a.jsx)(eo, { state: l, cleanUp: n, children: (0, a.jsx)(en, { className: ey.qf }) }, e)
                    : (0, a.jsx)(
                          eo,
                          {
                              state: l,
                              cleanUp: n,
                              animate: i.current,
                              children: (0, a.jsx)(eN, { guildId: t.guildId, onClick: s, onView: r }),
                          },
                          e,
                      ),
            [s, r],
        ),
        d = n.useCallback((e) => e.guildId ?? `${e.index}`, []),
        o = n.useMemo(() => [{ guildId: t, index: l }], [t, l]);
    return (0, a.jsx)("div", {
        className: ey.NK,
        children: (0, a.jsx)($.F, { items: o, renderItem: c, getItemKey: d }),
    });
}
let ev = n.memo(eN);
var eE = l(401034);
let ep = { page: v.liQ.GUILD_DISCOVERY, object: v.ZSU.CARD, section: v.JJy.DISCOVER_POPULAR };
function eR(e) {
    let { tab: t, guildIds: l, loading: s, onScroll: r, onGuildCardClick: i, onGuildCardSeen: c } = e,
        d = (0, C.kc)(t),
        o = (0, C.Ot)(t),
        u = (0, C.UW)(t),
        m = (0, C.Ub)(t),
        h = n.useMemo(() => {
            let e = s ? 30 : l.length,
                t = [];
            for (let s = 0; s < e; s++)
                t.push(
                    (0, a.jsx)(
                        eI,
                        { guildId: l[s] ?? null, index: s, onClick: (e) => i(e, s, m, ep), onView: (e) => c(e, m) },
                        l[s] ?? s,
                    ),
                );
            return t;
        }, [m, l, s, i, c]);
    return (0, a.jsxs)(Y.A, {
        onScroll: r,
        children: [
            (0, a.jsx)(q.A, { title: d, description: o, children: (0, a.jsx)(Q.A, {}) }),
            (0, a.jsx)(B.A, {
                children: (0, a.jsxs)(P.F, {
                    children: [
                        (0, a.jsx)(g.D, {
                            className: eE.G,
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: u,
                        }),
                        (0, a.jsx)(P.F, { children: (0, a.jsx)("div", { className: eE.Q, children: h }) }),
                    ],
                }),
            }),
        ],
    });
}
var eT = l(778858),
    eG = l(101277),
    eF = l(646514),
    e_ = l(821609),
    ek = l(192308),
    eL = l(792749);
let eD = function (e) {
    let { hasHub: t } = e;
    return (0, a.jsxs)("div", {
        className: eL.kL,
        children: [
            (0, a.jsx)("div", {
                className: eL.zc,
                children: (0, a.jsx)(eG.HubIcon, { size: "md", color: eF.A.colors.WHITE.css }),
            }),
            (0, a.jsx)(J.E, {
                color: "text-strong",
                variant: "body-lg/semibold",
                className: eL.wx,
                children: t ? E.intl.string(E.t.hsSHh8) : E.intl.string(E.t.Wf6iij),
            }),
            (0, a.jsx)(J.E, {
                color: "text-default",
                variant: "body-sm/normal",
                className: eL.__invalid_description,
                children: t ? E.intl.string(E.t.FZ2J3Y) : E.intl.string(E.t.TvHcv6),
            }),
            (0, a.jsx)("div", { className: eL.rQ }),
            (0, a.jsx)(e_.$, {
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
                        return (t) => (0, a.jsx)(e, { ...t });
                    }),
                text: t ? E.intl.string(E.t.IyjHD9) : E.intl.string(E.t["KU/aN4"]),
            }),
        ],
    });
};
var ew = l(71393),
    eO = l(118331);
let eU = function (e) {
    let { onScroll: t } = e,
        l = (0, i.yK)([ew.A], () => ew.A.getGuildsArray().filter((e) => e.features.has(v.GuildFeatures.HUB))),
        s = n.useMemo(
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
    return (0, a.jsxs)(Y.A, {
        onScroll: t,
        children: [
            (0, a.jsx)(q.A, {
                title: E.intl.string(E.t.X5xPlb),
                description: E.intl.string(E.t["F/IQCI"]),
                children: (0, a.jsx)(Q.A, {}),
            }),
            (0, a.jsxs)(B.A, {
                children: [
                    l.length > 0
                        ? (0, a.jsxs)(P.F, {
                              children: [
                                  (0, a.jsx)(g.D, {
                                      className: eE.G,
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      children: E.intl.string(E.t["2DfZIQ"]),
                                  }),
                                  (0, a.jsx)(P.F, {
                                      children: (0, a.jsxs)("div", {
                                          className: eE.Q,
                                          children: [
                                              s.map((e) =>
                                                  (0, a.jsx)(
                                                      eC,
                                                      { guild: e, onClick: () => eT.A.transitionToGuildSync(e.id) },
                                                      e.id,
                                                  ),
                                              ),
                                              (0, a.jsx)(eD, { hasHub: !0 }),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)("div", { className: eE.Q, children: (0, a.jsx)(eD, { hasHub: !1 }) }),
                    (0, a.jsx)("div", { className: eO.yF }),
                    (0, a.jsxs)("div", {
                        className: eO.ed,
                        children: [
                            (0, a.jsxs)(J.E, {
                                className: eO.Qq,
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: [E.intl.string(E.t.O1k9XX), " "],
                            }),
                            (0, a.jsx)(J.E, {
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
function eH(e) {
    let { onScroll: t, onGuildCardSeen: l, onGuildCardClick: s } = e,
        r = (0, i.bG)([D.A], () => D.A.getGuildIds({ categoryId: -1 }) ?? G.VX),
        c = (0, i.bG)([D.A], () => D.A.getIsFetching({ categoryId: -1 }) ?? !0);
    return (
        n.useEffect(() => {
            V.A.fetchFeaturedGuilds();
        }, []),
        (0, a.jsx)(eR, {
            tab: G.o.FEATURED,
            guildIds: r,
            loading: c,
            onScroll: t,
            onGuildCardSeen: l,
            onGuildCardClick: s,
        })
    );
}
function eM(e) {
    let { tab: t, onScroll: l, onGuildCardSeen: s, onGuildCardClick: r } = e,
        c = (0, C.Ub)(t),
        d = (0, i.bG)([D.A], () => D.A.getGuildIds({ categoryId: c }) ?? G.VX),
        o = (0, i.bG)([D.A], () => D.A.getIsFetching({ categoryId: c }) ?? !0);
    return (
        n.useEffect(() => {
            V.A.fetchCategoryFeaturedGuilds({ categoryId: c });
        }, [c]),
        (0, a.jsx)(eR, { tab: t, guildIds: d, loading: o, onScroll: l, onGuildCardSeen: s, onGuildCardClick: r })
    );
}
function eV(e) {
    let { selectedTab: t, onScroll: l, onGuildCardSeen: s, onGuildCardClick: r } = e;
    switch (
        (n.useEffect(() => {
            let e = (0, C.Ub)(t);
            (0, H.np)({ selectedCategoryId: e });
        }, [t]),
        t)
    ) {
        case G.o.FEATURED:
            return (0, a.jsx)(eH, { tab: t, onScroll: l, onGuildCardClick: r, onGuildCardSeen: s });
        case G.o.GAMING:
        case G.o.MUSIC:
        case G.o.ENTERTAINMENT:
        case G.o.TECH:
        case G.o.EDUCATION:
            return (0, a.jsx)(eM, { tab: t, onScroll: l, onGuildCardClick: r, onGuildCardSeen: s }, t);
        case G.o.HUBS:
            return (0, a.jsx)(eU, { onScroll: l });
        default:
            (0, M.xb)(t);
    }
}
var eP = l(435558),
    eQ = l.n(eP),
    eq = l(297778),
    eB = l(770178),
    eY = l(129230),
    ez = l(773669),
    eK = l(997590);
function eZ(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [eK.A];
    return -1 === e ? E.intl.string(E.t.Omu0fS) : t.getCategoryName(e);
}
function eW(e) {
    let { categoryId: t } = e;
    return (0, i.bG)([eK.A], () => eZ(t, [eK.A]));
}
l(667532);
var eX = l(499118);
function eJ() {
    let e = y.A.useField("fetchedQuery"),
        t = y.A.useField("resultsInitialCategoryId"),
        l = y.A.useField("languageCode"),
        s = (0, i.bG)([D.A], () => (null == t ? 0 : (D.A.getTotal({ categoryId: t, query: e, languageCode: l }) ?? 0))),
        a = (0, i.bG)([D.A], () => D.A.getTotal({ categoryId: -1, query: e, languageCode: l }) ?? 0),
        r = (0, i.bG)([eX.A], () => eX.A.getVisibleTabs());
    return n.useMemo(() => {
        if (null == r) return null;
        if (null == t) return r;
        let e = [],
            l = new Set();
        for (let [t, s] of r) (l.add(t), e.push([t, s]));
        let n = !1;
        return (
            l.has(-1) || (l.add(-1), e.unshift([-1, a]), (n = !0)),
            l.has(t) || (l.add(t), e.push([t, s]), (n = !0)),
            n ? e : r
        );
    }, [r, t, a, s]);
}
var e$ = l(166976);
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
    let { loadId: t, categoryId: l, count: s } = e,
        r = n.useCallback(() => {
            e0({ categoryId: l, loadId: t });
        }, [l, t]),
        i = y.A.useField("categoryId") === l,
        c = s.toLocaleString(ez.default.locale),
        d = eW({ categoryId: l });
    return (0, a.jsxs)(eh.D, {
        onClick: r,
        className: K()(e$.L1, { [e$.wH]: i }),
        children: [
            (0, a.jsx)(J.E, { className: e$.UU, variant: "body-sm/medium", color: "text-strong", children: d }),
            (0, a.jsx)(J.E, { className: e$.U9, variant: "body-sm/normal", color: "text-muted", children: c }),
        ],
    });
}
let e2 = function (e) {
    let { loadId: t } = e,
        l = eJ();
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: e$.LZ,
              children: l.map((e) => {
                  let [l, s] = e;
                  return (0, a.jsx)(e1, { loadId: t, categoryId: l, count: s }, l);
              }),
          });
};
var e6 = l(191711),
    e9 = l(226658);
function e5(e) {
    let { loadId: t } = e,
        l = y.A.useField("categoryId"),
        s = eJ(),
        r = eW({ categoryId: l }),
        c = n.useCallback(
            (e) => {
                e0({ loadId: t, categoryId: Number(e) });
            },
            [t],
        ),
        d = (function (e) {
            let { categoryIds: t } = e;
            return (0, i.cf)([eK.A], () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        e[t] = eZ(t, [eK.A]);
                    }),
                    e
                );
            });
        })({
            categoryIds: n.useMemo(
                () =>
                    null == s
                        ? []
                        : s.map((e) => {
                              let [t] = e;
                              return t;
                          }),
                [s],
            ),
        }),
        o = n.useMemo(
            () =>
                null == s
                    ? []
                    : s.map((e) => {
                          let [t, l] = e;
                          return { id: `${t}`, name: d[t] ?? "", count: l };
                      }),
            [s, d],
        );
    return null == s
        ? null
        : (0, a.jsxs)("div", {
              className: e9.k,
              children: [
                  (0, a.jsx)(J.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: E.intl.string(E.t.f09BQJ),
                  }),
                  (0, a.jsx)(e6.A, {
                      items: o,
                      title: r,
                      onSelect: c,
                      selected: `${l}`,
                      "aria-label": E.intl.string(E.t.Ng5cTK),
                      variant: e6.H.FILLED,
                  }),
              ],
          });
}
var e3 = l(468646);
let e4 = function (e) {
    let { loadId: t } = e,
        l = y.A.useField("categoryId"),
        s = (0, i.bG)([eK.A], () => eK.A.getCategoryName(l)),
        r = n.useCallback(() => {
            (y.A.setState({ categoryId: -1 }),
                O.loadCategoryResults({
                    loadId: t,
                    categoryId: -1,
                    query: y.A.getField("fetchedQuery"),
                    languageCode: y.A.getField("languageCode"),
                }));
        }, [t]),
        c = -1 === l ? E.intl.string(E.t.Ivw1Is) : E.intl.formatToPlainString(E.t["+1WAFb"], { categoryName: s }),
        d = -1 === l ? E.intl.string(E.t.aXvEjd) : E.intl.format(E.t.XLioqn, { onClick: r });
    return (0, a.jsxs)("div", {
        className: e3.k,
        children: [
            (0, a.jsx)(g.D, { variant: "heading-xl/semibold", className: e3.w, children: c }),
            (0, a.jsx)(J.E, { variant: "body-md/normal", color: "text-default", children: d }),
        ],
    });
};
var e8 = l(890497),
    e7 = l(118216);
function te(e) {
    let { loadId: t } = e,
        l = (0, i.bG)([ez.default], () => (0, C.Kv)([ez.default])),
        s = y.A.useField("languageCode"),
        r = n.useCallback(
            (e) => {
                y.A.setState({ languageCode: e });
                let l = y.A.getField("fetchedQuery");
                (_({ ignoreQueries: [l] }),
                    O.loadCategoryResults({
                        loadId: t,
                        categoryId: y.A.getField("categoryId"),
                        query: l,
                        languageCode: e,
                    }));
            },
            [t],
        ),
        c = n.useMemo(() => (0, G.tO)().map((e) => ({ id: e.code, value: e.code, label: e.name })), []);
    return (0, a.jsx)("div", {
        className: e7.k,
        children: (0, a.jsx)(e8.Z, {
            selectionMode: "single",
            label: E.intl.string(E.t.Ng5cTK),
            hideLabel: !0,
            value: s ?? l,
            options: c,
            onSelectionChange: r,
        }),
    });
}
var tt = l(413185);
let tl = Object.freeze({ top: 0, bottom: 0, left: 32, right: 202 }),
    ts = Object.freeze({ top: 0, bottom: 0, left: 32, right: 32 }),
    ta = { page: v.liQ.GUILD_DISCOVERY, object: v.ZSU.CARD, section: v.JJy.DISCOVER_SEARCH },
    tn = eQ().throttle(b.Cf, 1e3, { leading: !1, trailing: !0 });
function tr(e) {
    let { loadId: t, onGuildCardSeen: l, onGuildCardClick: s } = e,
        {
            guildIds: r,
            loading: c,
            searchResultsQuery: d,
            loadMore: o,
            searchCategoryId: u,
        } = (function (e) {
            let { loadId: t } = e,
                l = y.A.useField("fetchedQuery"),
                s = y.A.useField("categoryId"),
                a = y.A.useField("languageCode"),
                r = n.useMemo(() => ({ categoryId: s, query: l, languageCode: a }), [s, a, l]),
                c = (0, i.bG)([D.A], () => D.A.getGuildIds(r) ?? G.VX),
                d = (0, i.bG)([D.A], () => D.A.getIsFetching(r) ?? !1),
                o = y.A.useField("resultsQuery"),
                u = o !== l,
                m = n.useCallback(() => {
                    let e = D.A.getGuildIds(r),
                        l = D.A.getTotal(r);
                    if (null == e || null == l) return;
                    let s = D.A.getIsFetching(r),
                        a = D.A.getIsInitialFetchComplete(r);
                    s ||
                        !a ||
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
                () => ({ guildIds: c, loading: u || d, searchResultsQuery: o, loadMore: m, searchCategoryId: s }),
                [c, u, d, o, m, s],
            );
        })({ loadId: t }),
        m = 0 === r.length && !c,
        g = n.useContext(eY.Ig),
        [h, x] = n.useState((0, C.YP)()),
        [f, j] = n.useState(!0),
        A = n.useRef(f),
        [b, S] = n.useState(3),
        N = n.useRef(b),
        I = n.useRef(null),
        v = n.useCallback(
            (e) => {
                null == e || m || c || (336 * (r.length / b) <= e.height && o());
            },
            [m, c, r.length, b, o],
        ),
        E = n.useCallback(
            (e) => {
                let t = e.contentRect;
                if (null == t) return;
                let l = t.width;
                l < 1024 && A.current ? ((A.current = !1), j(!1)) : l > 1024 && !A.current && ((A.current = !0), j(!0));
                let s = 1;
                for (l -= 450 * !!f, l -= 280; l > 0;) ((l -= 264), (s += 1));
                (s !== N.current && ((N.current = s), S(s)), v(t));
            },
            [f, v],
        ),
        p = (0, eB.w)(E, [f, v]);
    (n.useEffect(() => {
        x((0, C.YP)());
    }, [d]),
        n.useEffect(() => {
            tn({
                loadId: t,
                searchId: h,
                query: d,
                guildResults: r.map(D.A.getGuild).filter(M.Vq),
                analyticsContext: g,
                categoryId: u,
            });
        }, [g, r, t, u, h, d]));
    let R = n.useCallback((e) => l(e, u), [l, u]),
        T = n.useMemo(() => (c ? [r.length, 0] : [r.length]), [r.length, c]),
        F = n.useCallback(
            (e, l, s) => {
                switch (e) {
                    case 0:
                        return (0, a.jsxs)(
                            "div",
                            {
                                style: { paddingLeft: l.left, width: l.width - 16 },
                                className: K()(tt.R_, { [tt.Ze]: !f }),
                                children: [
                                    !f &&
                                        (0, a.jsxs)("div", {
                                            className: tt.eW,
                                            children: [(0, a.jsx)(e5, { loadId: t }), (0, a.jsx)(te, { loadId: t })],
                                        }),
                                    m && (0, a.jsx)(e4, { loadId: t }),
                                ],
                            },
                            s,
                        );
                    case 1:
                        return (0, a.jsx)(W.y, { className: K()(tt.u1, { [tt.qx]: f }) }, s);
                }
            },
            [m, f, t],
        ),
        _ = n.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = f ? 16 : 68;
                        return m ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error(`[getSectionHeight] Failed for section: ${e}`);
                }
            },
            [m, f],
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
        L = n.useCallback((e) => {
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
            async (e, t, l, a) => {
                await s(e, t, l, a);
                let n = I.current?.getScrollerState()?.scrollTop;
                null != n && y.A.setState({ scrollPosition: n });
            },
            [s],
        ),
        U = n.useCallback(
            (e, t, l, s) => {
                if (0 !== e) return null;
                {
                    let e = r[t];
                    return (0, a.jsx)(
                        "div",
                        {
                            style: l,
                            children: (0, a.jsx)(ev, {
                                guildId: e,
                                onClick: async (e) => await w(e, t, u, ta),
                                onView: (e) => R(e),
                            }),
                        },
                        s,
                    );
                }
            },
            [r, w, R, u],
        );
    (n.useEffect(() => {
        let e = I.current;
        return () => {
            let t = e?.getScrollerState()?.scrollTop;
            null != t && y.A.setState({ scrollPosition: t });
        };
    }, []),
        n.useLayoutEffect(() => {
            let e = y.A.getField("scrollPosition");
            null != e &&
                setTimeout(() => {
                    I.current?.scrollTo({
                        to: e,
                        animate: !1,
                        callback: () => {
                            y.A.setState({ scrollPosition: null });
                        },
                    });
                });
        }, []));
    let H = n.useMemo(
            () =>
                (0, eP.debounce)(
                    () => {
                        let e = I.current?.getScrollerState();
                        if (null == e) return;
                        let t = e.scrollTop + e.offsetHeight;
                        e.scrollHeight - t < 240 && o();
                    },
                    100,
                    { leading: !0 },
                ),
            [o],
        ),
        V = f ? tl : ts;
    return (0, a.jsx)("div", {
        className: tt.kL,
        ref: p,
        children: (0, a.jsx)(eq.f, {
            ref: I,
            className: tt.kf,
            sections: T,
            columns: b,
            itemGutter: 16,
            padding: V,
            renderItem: U,
            renderSection: F,
            getSectionHeight: _,
            getItemKey: k,
            getItemHeight: L,
            chunkSize: 24,
            onScroll: H,
            renderAccessory: (e) =>
                f
                    ? (0, a.jsx)("div", {
                          className: tt.pz,
                          style: { height: e },
                          children: (0, a.jsxs)("div", {
                              className: tt.wp,
                              children: [
                                  (0, a.jsx)("div", { className: tt.jp, children: (0, a.jsx)(te, { loadId: t }) }),
                                  (0, a.jsx)(e2, { loadId: t }),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
var ti = l(488995),
    tc = l(877149);
function td() {
    let e,
        t,
        l,
        s = n.useRef((0, C.YP)()),
        { onScroll: r, scrollPosition: i, resetScrollPosition: c } = (0, h.G)(),
        {
            tabs: d,
            selectedTab: o,
            setSelectedTab: p,
        } = ((e = N.A.useField("selectedTab")),
        (t = n.useMemo(
            () =>
                [G.o.FEATURED, G.o.GAMING, G.o.MUSIC, G.o.ENTERTAINMENT, G.o.TECH, G.o.EDUCATION, G.o.HUBS].map(
                    (e) => ({ id: e, label: (0, C.jR)(e) }),
                ),
            [],
        )),
        (l = n.useCallback((e) => {
            N.A.setState({ selectedTab: e });
        }, [])),
        n.useEffect(() => {
            (null != e && t.some((t) => t.id === e)) || l(t[0].id);
        }, [e, t, l]),
        { tabs: t, selectedTab: e ?? t[0].id, setSelectedTab: l }),
        R = (0, C.Ub)(o),
        T = !G.R0.has(o),
        {
            searchQuery: F,
            onSearchTextChange: L,
            onClearSearch: D,
            onSearchSubmit: w,
            isSearchVisible: H,
        } = (function (e) {
            let { loadId: t } = e,
                l = N.A.useField("isSearchVisible"),
                s = y.A.useField("query");
            n.useEffect(() => {
                (0, U.Mu)();
            }, []);
            let a = n.useCallback((e) => {
                y.A.setState({ query: e });
            }, []);
            return {
                searchQuery: s,
                onSearchTextChange: a,
                onClearSearch: n.useCallback(() => {
                    (b.gp(t),
                        _(),
                        k(),
                        y.A.setState({
                            query: "",
                            fetchedQuery: "",
                            resultsQuery: "",
                            categoryId: -1,
                            resultsInitialCategoryId: null,
                            scrollPosition: null,
                        }),
                        N.A.setState({ isSearchVisible: !1 }));
                }, [t]),
                onSearchSubmit: n.useCallback(() => {
                    let e = y.A.getField("query"),
                        l = y.A.getField("fetchedQuery");
                    if ("" === e.trim() || e === l) return;
                    _();
                    let s = y.A.getField("languageCode"),
                        a = y.A.getField("categoryId");
                    (y.A.setState({ resultsInitialCategoryId: a }),
                        N.A.setState({ isSearchVisible: !0 }),
                        O.loadCategoryResultsAndCounts({ loadId: t, categoryId: a, query: e, languageCode: s }));
                }, [t]),
                isSearchVisible: l,
            };
        })({ loadId: s.current }),
        M = N.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: V,
            onCollapsedSearchBarClick: P,
            onSearchBarBlur: Q,
            tabsClassName: q,
        } = (0, x.p)({
            isSearchBarVisible: T,
            isSearchBarEmpty: "" === F.trim(),
            searchBarState: M,
            setSearchBarState: (e) => N.A.setState({ searchBarState: e }),
        }),
        B = y.A.useField("fetchedQuery"),
        Y = n.useCallback(
            (e) => {
                (p(e), H && D());
            },
            [H, D, p],
        ),
        z = n.useMemo(
            () =>
                H
                    ? d.filter((e) => {
                          let { id: t } = e;
                          return !G.R0.has(t);
                      })
                    : d,
            [d, H],
        ),
        K = n.useRef(new S(R)),
        { onGuildCardSeen: Z, onGuildCardClick: W } = (function (e) {
            let { guildDiscoveryCardSeenManager: t, loadId: l } = e,
                s = n.useCallback(
                    (e, s) => {
                        t.markAsSeen(s, e, l);
                    },
                    [t, l],
                ),
                a = n.useCallback(
                    async (e, t, s, a) => {
                        try {
                            await (0, C.Wl)({ loadId: l, guildId: e, index: t, categoryId: s, analyticsLocation: a });
                        } catch (e) {
                            switch (e?.body?.code) {
                                case v.t02.INVITES_DISABLED:
                                    (0, I.P0)({ text: E.intl.string(E.t["2LLbj9"]), variant: "critical" });
                                    return;
                                case v.t02.USER_BANNED:
                                    (0, I.P0)({ text: E.intl.string(E.t["GzD/aa"]), variant: "critical" });
                                    return;
                            }
                            throw e;
                        }
                    },
                    [l],
                );
            return n.useMemo(() => ({ onGuildCardSeen: s, onGuildCardClick: a }), [a, s]);
        })({ guildDiscoveryCardSeenManager: K.current, loadId: s.current });
    return (
        n.useEffect(() => {
            K.current.flushSeenGuilds(s.current);
        }, [R]),
        n.useEffect(() => {
            c();
        }, [o, c]),
        n.useEffect(() => {
            H || y.A.setState({ scrollPosition: null });
        }, [H]),
        (0, a.jsxs)("div", {
            className: tc.kL,
            children: [
                (0, a.jsxs)(f.Ay, {
                    variant: H ? f.Z5.RELATIVE : f.Z5.OVERLAY,
                    children: [
                        !H && (0, a.jsx)(f.ns, { scrollPosition: i }),
                        H
                            ? (0, a.jsx)(f.XQ, { icon: u.ArrowLargeLeftIcon, onClick: D })
                            : (0, a.jsx)(f.T4, { icon: m.ServerIcon }),
                        !H &&
                            (0, a.jsx)(j.A, {
                                className: q,
                                tabs: z,
                                selectedTab: o,
                                onTabSelect: Y,
                                onAvailableWidthChange: V,
                            }),
                        H &&
                            (0, a.jsx)(g.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                className: tc.ov,
                                children: E.intl.format(E.t.zHdzqW, { query: B }),
                            }),
                        T &&
                            (0, a.jsx)(A.A, {
                                query: F,
                                placeholder: E.intl.string(E.t["5h0QOP"]),
                                onTextChange: L,
                                onClear: D,
                                onSubmit: w,
                                onCollapsedClick: P,
                                state: H ? ti.Um.DEFAULT : M,
                                onBlur: Q,
                            }),
                    ],
                }),
                H
                    ? (0, a.jsx)(tr, { loadId: s.current, onGuildCardClick: W, onGuildCardSeen: Z })
                    : (0, a.jsx)(eV, { selectedTab: o, onScroll: r, onGuildCardClick: W, onGuildCardSeen: Z }),
            ],
        })
    );
}
var to = l(635668),
    tu = l(976860),
    tm = l(726845),
    tg = l(285395),
    th = l(185951),
    tx = l(687966),
    tf = l(567272),
    tj = l(331322),
    tA = l(661439),
    ty = l(409626),
    tb = l(692969),
    tS = l(459746),
    tC = l(799699),
    tN = l(326369),
    tI = l(422069),
    tv = l(49491),
    tE = l(611656),
    tp = l(281018),
    tR = l(311043),
    tT = l(202163),
    tG = l(153488),
    tF = l(287809),
    t_ = l(90165),
    tk = l(927813),
    tL = l(523754),
    tD = l(277450);
let tw = 30 * tk.A.Seconds.MINUTE,
    tO = [],
    tU = [];
var tH = l(151869),
    tM = l(585205);
function tV(e) {
    let { children: t, skeletonTitleWidth: l } = e;
    return (0, a.jsxs)(tj.B, {
        gap: 12,
        "aria-busy": !0,
        children: [(0, a.jsx)(tC.Ay, { className: tM.K, width: l }), t],
    });
}
function tP(e) {
    let { items: t, getItemKey: l, renderItem: s, "aria-label": n } = e;
    return (0, a.jsx)(tH.A, { items: t, getItemKey: l, renderItem: s, gap: 16, "aria-label": n });
}
function tQ(e) {
    let { title: t, children: l } = e;
    return (0, a.jsxs)(tj.B, {
        as: "section",
        gap: 12,
        children: [(0, a.jsx)(g.D, { variant: "heading-lg/semibold", lineClamp: 1, children: t }), l],
    });
}
var tq = l(142553);
function tB(e) {
    return e.id;
}
function tY() {
    return (0, a.jsx)(tN.A, {
        gap: 16,
        children: eQ()
            .range(0, 8)
            .map((e) =>
                (0, a.jsxs)(
                    tC.qT,
                    {
                        className: tq.Nr,
                        children: [(0, a.jsx)(tS.gr, { className: tq.Iv }), (0, a.jsx)(tC.Ay, { className: tq.UU })],
                    },
                    e,
                ),
            ),
    });
}
function tz() {
    return (0, a.jsx)(tV, { skeletonTitleWidth: 240, children: (0, a.jsx)(tY, {}) });
}
function tK(e) {
    let { game: t, listItemProps: l } = e,
        s = (0, tb.A)({
            location: "GlobalDiscoveryGamesBecauseYouPlayedCard",
            gameId: t.id,
            source: ty.GameProfileSources.GlobalDiscoveryGamesBecauseYouPlayed,
        });
    return (0, a.jsxs)(eh.D, {
        ...l,
        className: K()(tq.Nr, { [tq.vk]: null != s }),
        onClick: s,
        "aria-label": E.intl.formatToPlainString(E.t["8QLQB+"], { gameName: t.name }),
        children: [
            (0, a.jsx)("div", {
                className: tq.Iv,
                children: (0, a.jsx)(tS.Ay, {
                    game: t,
                    className: tq.xe,
                    size: tS.wu.LARGE,
                    imageSize: 512,
                    loadingPlaceholder: (0, a.jsx)(tS.gr, { className: tq.XE }),
                }),
            }),
            (0, a.jsx)(J.E, { variant: "body-md/medium", lineClamp: 1, children: t.name }),
        ],
    });
}
function tZ(e, t) {
    return (0, a.jsx)(tK, { game: e, listItemProps: t });
}
function tW() {
    let {
        isFetching: e,
        seedGame: t,
        games: l,
    } = (function () {
        let e = (0, i.bG)([tG.A], () => tG.A.hasConsented(v.YAq.PERSONALIZATION)),
            t = (0, i.bG)([t_.A], () => null == t_.A.lastFetched && !t_.A.hasFetchFailed),
            l = (0, i.yK)(
                [t_.A],
                () =>
                    e
                        ? Object.values(t_.A.applicationStatistics)
                              .filter((e) => e.total_duration >= tw)
                              .sort((e, t) => Date.parse(t.last_played_at) - Date.parse(e.last_played_at))
                              .slice(0, 5)
                              .map((e) => e.application_id)
                        : tO,
                [e],
            ),
            s = (0, tT.iE)(l),
            a = (0, i.cf)(
                [tR.A, tI.A, tF.default],
                () => {
                    let e = tF.default.getCurrentUser()?.nsfwAllowed;
                    for (let { gameRecord: t, isLoading: l } of s) {
                        if (l) return { isFetching: !0 };
                        if (null == t || tD.b.has(t.id) || !(0, tE.T_)(t) || (0, tv.b)(t, e)) continue;
                        let s = tI.A.getSimilarGames(t.id);
                        if (
                            null == s ||
                            s.some((t) => {
                                let l = tR.A.getGame(t);
                                return null == l ? !tR.A.hasNoData(t) && !tR.A.didFetchingFail(t) : (0, tp.n)(l, e);
                            })
                        )
                            return { isFetching: !1, seedGame: t };
                    }
                    return { isFetching: !1 };
                },
                [s],
            ),
            { isFetching: r, similarGames: c } = (0, tp.A)(a.seedGame?.id),
            d = n.useMemo(() => c.slice(0, 8), [c]);
        return e
            ? { isFetching: t || a.isFetching || r, seedGame: a.seedGame, games: d }
            : { isFetching: !1, games: tU };
    })();
    if (e) return (0, a.jsx)(tz, {});
    if (null == t || 0 === l.length) return null;
    let s = E.intl.formatToPlainString(E.t.E5vkHs, { gameName: t.name });
    return (0, a.jsx)(tQ, {
        title: s,
        children: (0, a.jsx)(tP, { items: l, getItemKey: tB, renderItem: tZ, "aria-label": s }),
    });
}
var tX = l(457346);
function tJ() {
    return (0, a.jsx)(tN.A, {
        gap: 16,
        children: eQ()
            .range(0, 8)
            .map((e) =>
                (0, a.jsxs)(
                    tC.qT,
                    {
                        className: tX.Nr,
                        children: [
                            (0, a.jsx)(tC.Ay, { className: tX.Tp }),
                            (0, a.jsx)(tS.gr, { className: tX.Iv }),
                            (0, a.jsxs)("div", {
                                className: tX.pq,
                                children: [
                                    (0, a.jsx)(tC.Ay, { className: tX.UU }),
                                    (0, a.jsx)(tC.Ay, { className: tX.yz }),
                                ],
                            }),
                        ],
                    },
                    e,
                ),
            ),
    });
}
function t$() {
    return (0, a.jsx)(tQ, { title: E.intl.string(E.t.JMTGC3), children: (0, a.jsx)(tJ, {}) });
}
var t0 = l(595305);
function t1() {
    return (0, a.jsx)(tN.A, {
        gap: 16,
        children: eQ()
            .range(0, 5)
            .map((e) =>
                (0, a.jsxs)(
                    tC.qT,
                    {
                        className: t0.Nr,
                        children: [
                            (0, a.jsx)(tC.Ay, { className: t0.Tp }),
                            (0, a.jsx)(tS.gr, { className: t0.Iv }),
                            (0, a.jsxs)("div", {
                                className: t0.pq,
                                children: [
                                    (0, a.jsx)(tC.Ay, { className: t0.UU }),
                                    (0, a.jsx)(tC.Ay, { className: t0.h5 }),
                                    (0, a.jsx)(tC.Ay, { className: t0.vL }),
                                ],
                            }),
                        ],
                    },
                    e,
                ),
            ),
    });
}
function t2() {
    return (0, a.jsx)(tQ, { title: E.intl.string(E.t.Pc6FRV), children: (0, a.jsx)(t1, {}) });
}
function t6() {
    return (0, a.jsx)(tQ, { title: E.intl.string(E.t.qpGTIa), children: (0, a.jsx)(tJ, {}) });
}
var t9 = l(541830);
let t5 = null;
class t3 extends i.Ay.Store {
    static displayName = "GlobalDiscoveryGamesStore";
    getTrendingGames() {
        return t5;
    }
}
let t4 = new t3(T.h, {
    LOGOUT: function () {
        if (null == t5) return !1;
        t5 = null;
    },
    GLOBAL_DISCOVERY_GAMES_TRENDING_FETCH_SUCCESS: function (e) {
        let { data: t } = e;
        t5 = {
            week: t.week,
            games: t.games.map((e) => {
                let { game: t, ...l } = e;
                return l;
            }),
        };
    },
});
var t8 = l(201989),
    t7 = l(864202),
    le = l(602999),
    lt =
        (((s = {})[(s.ADVENTURE = 1)] = "ADVENTURE"),
        (s[(s.CRAFTING = 2)] = "CRAFTING"),
        (s[(s.FANTASY = 3)] = "FANTASY"),
        (s[(s.FPS = 4)] = "FPS"),
        (s[(s.HORROR = 5)] = "HORROR"),
        (s[(s.INDIE = 6)] = "INDIE"),
        (s[(s.MMO = 7)] = "MMO"),
        (s[(s.OPEN_WORLD = 8)] = "OPEN_WORLD"),
        (s[(s.RPG = 9)] = "RPG"),
        (s[(s.SANDBOX = 10)] = "SANDBOX"),
        (s[(s.SCI_FI = 11)] = "SCI_FI"),
        (s[(s.SHOOTER = 12)] = "SHOOTER"),
        (s[(s.SIMULATION = 13)] = "SIMULATION"),
        (s[(s.SPORTS = 14)] = "SPORTS"),
        (s[(s.STORY_RICH = 15)] = "STORY_RICH"),
        (s[(s.STRATEGY = 16)] = "STRATEGY"),
        (s[(s.SURVIVAL = 17)] = "SURVIVAL"),
        (s[(s.TACTICAL = 18)] = "TACTICAL"),
        s),
    ll = l(749519);
let ls = {
        [lt.ADVENTURE]: ll.default.iscHqp,
        [lt.CRAFTING]: ll.default.xwhzzz,
        [lt.FANTASY]: ll.default["C/c3om"],
        [lt.FPS]: ll.default.k5Z9iC,
        [lt.HORROR]: ll.default.kPg4Tj,
        [lt.INDIE]: ll.default.GrAPLS,
        [lt.MMO]: ll.default.eCCPlU,
        [lt.OPEN_WORLD]: ll.default.Tf238f,
        [lt.RPG]: ll.default.JnJaJN,
        [lt.SANDBOX]: ll.default.HhlHYu,
        [lt.SCI_FI]: ll.default["3CQ9xv"],
        [lt.SHOOTER]: ll.default.wFZTLt,
        [lt.SIMULATION]: ll.default.LhKG5r,
        [lt.SPORTS]: ll.default.OwI6rQ,
        [lt.STORY_RICH]: ll.default.lKH6Ua,
        [lt.STRATEGY]: ll.default["3lGUb7"],
        [lt.SURVIVAL]: ll.default["9MM6LP"],
        [lt.TACTICAL]: ll.default.DnEG4n,
    },
    la = [],
    ln = (0, i.UT)(t4, {
        getQueryId: (e) => (null != e ? `global-discovery-games-trending:${e}` : null),
        staleAfter: 6 * tk.A.Seconds.HOUR,
        failureStaleAfter: 5 * tk.A.Seconds.MINUTE,
        get: () => t4.getTrendingGames(),
        load: async (e) => {
            let t = await p.Bo.get({ url: v.Rsh.GAMES_TRENDING, rejectWithError: !0 });
            tF.default.getCurrentUser()?.id === e &&
                T.h.dispatch({ type: "GLOBAL_DISCOVERY_GAMES_TRENDING_FETCH_SUCCESS", data: t.body });
        },
    });
function lr() {
    var e;
    let t,
        l,
        s,
        a,
        r = ln((0, i.bG)([tF.default], () => tF.default.getCurrentUser()?.id)),
        c =
            ((e = r.data),
            (t = e?.games ?? la),
            (l = e?.week ?? null),
            (s = (0, i.yK)([tR.A], () => t.map((e) => tR.A.getGame(e.game_id)), [t])),
            (a = (0, i.bG)([tF.default], () => tF.default.getCurrentUser()?.nsfwAllowed)),
            n.useMemo(
                () =>
                    t
                        .map((e, t) =>
                            (function (e, t, l, s) {
                                if (!(0, t8.R)(t, s)) return null;
                                let a =
                                    null != l &&
                                    (function (e, t, l) {
                                        if (0 !== e || null == t) return !1;
                                        let s = (0, t7.default)(t.slice(0, 10)),
                                            a = (0, t7.default)(l);
                                        return s > (0, le.default)(a, 7) && s <= a;
                                    })(e.total_players_pct_change, t.firstReleaseDate, l);
                                return { entry: e, game: t, isNewRelease: a };
                            })(e, s[t], l, a),
                        )
                        .filter(M.Vq),
                [t, s, l, a],
            )),
        d = null == r.data && (r.isLoading || null == r.error);
    return { data: r.data, error: r.error, loading: d, rows: c };
}
var li = l(2014);
function lc(e) {
    let { game: t } = e;
    return t.id;
}
function ld(e) {
    let {
            row: { game: t, entry: l },
            listItemProps: s,
        } = e,
        r = (0, tb.A)({
            location: "GlobalDiscoveryGamesTrendingCard",
            gameId: t.id,
            source: ty.GameProfileSources.GlobalDiscoveryGamesTrendingShelf,
        }),
        i = n.useMemo(() => t.genres.slice(0, 2).map(t9.du).join(" \u2022 "), [t]);
    return (0, a.jsxs)(eh.D, {
        ...s,
        className: K()(li.Nr, { [li.vk]: null != r }),
        onClick: r,
        "aria-label": E.intl.formatToPlainString(ll.default.EdG6vh, { rank: l.rank, gameName: t.name }),
        children: [
            (0, a.jsxs)("div", {
                className: li.Iv,
                children: [
                    (0, a.jsx)(tS.Ay, { game: t, size: tS.wu.SMALL, className: li.xe, imageSize: 512 }),
                    (0, a.jsx)("div", {
                        className: K()(li.Tm, li.Vf),
                        "aria-hidden": !0,
                        children: (0, a.jsx)(J.E, {
                            variant: "display-lg",
                            color: "text-overlay-light",
                            tag: "span",
                            children: l.rank,
                        }),
                    }),
                    "" !== i &&
                        (0, a.jsx)("div", {
                            className: K()(li.bh, li.Vf),
                            children: (0, a.jsx)(J.E, {
                                variant: "body-xs/medium",
                                color: "text-overlay-light",
                                lineClamp: 2,
                                children: i,
                            }),
                        }),
                ],
            }),
            (0, a.jsx)(J.E, { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: t.name }),
        ],
    });
}
function lo(e, t) {
    return (0, a.jsx)(ld, { row: e, listItemProps: t });
}
function lu() {
    return (0, a.jsx)(tN.A, {
        gap: 16,
        children: eQ()
            .range(0, 10)
            .map((e) =>
                (0, a.jsxs)(
                    tC.qT,
                    {
                        className: li.Nr,
                        children: [(0, a.jsx)(tS.gr, { className: li.Iv }), (0, a.jsx)(tC.Ay, { className: li.UU })],
                    },
                    e,
                ),
            ),
    });
}
function lm() {
    let { loading: e, rows: t } = lr();
    if (!e && 0 === t.length) return null;
    let l = E.intl.string(E.t.raRLQb);
    return (0, a.jsx)(tQ, {
        title: l,
        children: e
            ? (0, a.jsx)(lu, {})
            : (0, a.jsx)(tP, { items: t, getItemKey: lc, renderItem: lo, "aria-label": l }),
    });
}
let lg = { top: 32, bottom: 24 };
function lh() {
    return (
        n.useEffect(() => {
            (0, tA.X)();
        }, []),
        (0, a.jsx)(P.F, {
            children: (0, a.jsxs)(tj.B, {
                gap: 48,
                padding: lg,
                children: [
                    (0, a.jsx)(lm, {}),
                    (0, a.jsx)(t2, {}),
                    (0, a.jsx)(tW, {}),
                    (0, a.jsx)(t6, {}),
                    (0, a.jsx)(t$, {}),
                ],
            }),
        })
    );
}
var lx = l(123292);
function lf(e) {
    let { game: t } = e,
        l = (0, tb.A)({ gameId: t.id, source: ty.GameProfileSources.GlobalDiscoveryGamesTrendingTab });
    return null != l
        ? (0, a.jsx)(lx.Q, {
              text: t.name,
              textVariant: "body-md/semibold",
              variant: "secondary",
              lineClamp: 1,
              "aria-label": E.intl.formatToPlainString(E.t["8QLQB+"], { gameName: t.name }),
              onClick: l,
          })
        : (0, a.jsx)(J.E, { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: t.name });
}
var lj = l(697794),
    lA = l(184989),
    ly = l(20112);
function lb(e) {
    let { guild: t } = e,
        l = (0, i.bG)([lA.A], () => lA.A.isMember(t.id), [t.id]),
        s = null != t.invite_link_url ? (0, lj.default)(t.invite_link_url) : void 0,
        n = {
            id: t.id,
            name: t.name,
            icon: null,
            features: [
                ...(t.is_verified ? [v.GuildFeatures.VERIFIED] : []),
                ...(t.is_partnered ? [v.GuildFeatures.PARTNERED] : []),
            ],
        };
    return (0, a.jsxs)("div", {
        className: ly.AY,
        children: [
            null != t.icon_url && (0, a.jsx)("img", { src: t.icon_url, alt: "", className: ly.bQ }),
            (0, a.jsxs)("div", {
                className: ly.SE,
                children: [
                    (0, a.jsxs)("div", {
                        className: ly.oH,
                        children: [
                            (0, a.jsx)(J.E, {
                                variant: "body-sm/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            (0, a.jsx)(eu.A, { guild: n, size: 16 }),
                        ],
                    }),
                    null != t.approximate_online_count &&
                        (0, a.jsx)(J.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: E.intl.format(E.t["LC+S+m"], { membersOnline: t.approximate_online_count }),
                        }),
                ],
            }),
            (l || null != s) &&
                (0, a.jsx)(e_.$, {
                    size: "sm",
                    variant: "primary",
                    text: l ? E.intl.string(ll.default.aZbg3l) : E.intl.string(E.t.VJlc0S),
                    onClick: l ? () => (0, tu.pX)(v.BVt.CHANNEL(t.id)) : s,
                }),
        ],
    });
}
function lS() {
    return (0, a.jsx)(J.E, { variant: "body-sm/normal", color: "text-subtle", lineClamp: 1, children: "-" });
}
let lC = n.memo(function (e) {
        let { entry: t, game: l, isNewRelease: s, percentFormatter: n } = e,
            r = t.total_players_pct_change,
            i = t.categories
                .slice()
                .sort((e, t) => e.rank - t.rank)
                .flatMap((e) => {
                    let { id: t } = e,
                        l = ls[t];
                    return null != l ? [E.intl.string(l)] : [];
                })
                .slice(0, 2);
        return (0, a.jsxs)("tr", {
            className: ly.nM,
            children: [
                (0, a.jsx)("th", {
                    scope: "row",
                    className: ly.Hn,
                    children: (0, a.jsx)(J.E, {
                        tag: "span",
                        variant: "body-md/semibold",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: t.rank,
                    }),
                }),
                (0, a.jsx)("td", {
                    className: ly.Hn,
                    children: (0, a.jsxs)("div", {
                        className: ly.AY,
                        children: [
                            (0, a.jsx)("div", {
                                "aria-hidden": !0,
                                children: (0, a.jsx)(tS.Ay, { game: l, size: tS.wu.COMPACT, className: ly.xn }),
                            }),
                            (0, a.jsx)("div", { className: ly.t1, children: (0, a.jsx)(lf, { game: l }) }),
                        ],
                    }),
                }),
                (0, a.jsx)("td", {
                    className: ly.Hn,
                    children: (0, a.jsx)(J.E, {
                        variant: "body-sm/semibold",
                        color: r > 0 ? "text-feedback-positive" : r < 0 ? "text-feedback-critical" : "text-brand",
                        tabularNumbers: !0,
                        children: s ? E.intl.string(ll.default.oLMJSu) : n.format(r),
                    }),
                }),
                (0, a.jsx)("td", {
                    className: ly.Hn,
                    children:
                        i.length > 0
                            ? (0, a.jsx)(J.E, {
                                  variant: "body-sm/normal",
                                  color: "text-subtle",
                                  lineClamp: 1,
                                  children: i.join(", "),
                              })
                            : (0, a.jsx)(lS, {}),
                }),
                (0, a.jsx)("td", {
                    className: ly.Hn,
                    children:
                        null != t.official_guild ? (0, a.jsx)(lb, { guild: t.official_guild }) : (0, a.jsx)(lS, {}),
                }),
            ],
        });
    }),
    lN = { top: 32, bottom: 48 };
function lI(e) {
    let { label: t, ariaLabel: l } = e;
    return (0, a.jsx)("th", {
        scope: "col",
        className: ly.k4,
        "aria-label": l,
        children: (0, a.jsx)(J.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
    });
}
function lv(e) {
    let { message: t } = e;
    return (0, a.jsx)("tr", {
        children: (0, a.jsx)("td", {
            colSpan: 5,
            className: ly.Hn,
            children: (0, a.jsx)("div", {
                className: ly.h5,
                role: "status",
                children: (0, a.jsx)(J.E, { variant: "body-sm/normal", color: "text-subtle", children: t }),
            }),
        }),
    });
}
function lE() {
    return (0, a.jsx)("tbody", {
        "aria-hidden": !0,
        children: eQ()
            .range(0, 10)
            .map((e) =>
                (0, a.jsxs)(
                    "tr",
                    {
                        className: ly.nM,
                        children: [
                            (0, a.jsx)("td", { className: ly.Hn, children: (0, a.jsx)(tC.Ay, { className: ly.Tm }) }),
                            (0, a.jsx)("td", {
                                className: ly.Hn,
                                children: (0, a.jsxs)("div", {
                                    className: ly.AY,
                                    children: [
                                        (0, a.jsx)(tS.gr, { className: ly.xn }),
                                        (0, a.jsx)(tC.Ay, { className: K()(ly.Qq, ly.mO) }),
                                    ],
                                }),
                            }),
                            (0, a.jsx)("td", {
                                className: ly.Hn,
                                children: (0, a.jsx)(tC.Ay, { className: K()(ly.Qq, ly.Mx) }),
                            }),
                            (0, a.jsx)("td", {
                                className: ly.Hn,
                                children: (0, a.jsx)(tC.Ay, { className: K()(ly.Qq, ly.L1) }),
                            }),
                            (0, a.jsx)("td", {
                                className: ly.Hn,
                                children: (0, a.jsxs)("div", {
                                    className: ly.AY,
                                    children: [
                                        (0, a.jsx)(tC.Ay, { className: ly.bQ }),
                                        (0, a.jsxs)("div", {
                                            className: ly.SE,
                                            children: [
                                                (0, a.jsx)(tC.Ay, { className: K()(ly.Qq, ly.L5) }),
                                                (0, a.jsx)(tC.Ay, { className: K()(ly.Qq, ly.Z4) }),
                                            ],
                                        }),
                                        (0, a.jsx)(tC.Ay, { className: ly.x6 }),
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
function lp() {
    let { data: e, error: t, loading: l, rows: s } = lr(),
        r = e?.week ?? null,
        i = n.useId(),
        c = E.intl.currentLocale,
        { percentFormatter: d, weekFormatter: o } = n.useMemo(
            () => ({
                percentFormatter: new Intl.NumberFormat(c, {
                    style: "percent",
                    maximumFractionDigits: 0,
                    signDisplay: "exceptZero",
                }),
                weekFormatter: new Intl.DateTimeFormat(c, { month: "short", day: "numeric", timeZone: "UTC" }),
            }),
            [c],
        ),
        u =
            null != r
                ? E.intl.formatToPlainString(ll.default["/EED9C"], { week: o.format(new Date(`${r}T00:00:00Z`)) })
                : null;
    return (0, a.jsxs)(tj.B, {
        gap: 16,
        padding: lN,
        children: [
            (0, a.jsxs)("div", {
                className: ly.wx,
                children: [
                    (0, a.jsx)(g.D, {
                        id: i,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: E.intl.string(E.t["7ff2Gs"]),
                    }),
                    l && (0, a.jsx)(tC.Ay, { className: K()(ly.Qq, ly.HH) }),
                    !l &&
                        null != u &&
                        (0, a.jsx)(J.E, { variant: "body-sm/normal", color: "text-subtle", children: u }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ly.CZ,
                role: "region",
                tabIndex: 0,
                "aria-labelledby": i,
                children: (0, a.jsxs)("table", {
                    className: ly.tp,
                    "aria-busy": l,
                    children: [
                        (0, a.jsxs)("colgroup", {
                            children: [
                                (0, a.jsx)("col", { className: ly.PX }),
                                (0, a.jsx)("col", { className: ly.hK }),
                                (0, a.jsx)("col", { className: ly.iH }),
                                (0, a.jsx)("col", { className: ly.dv }),
                                (0, a.jsx)("col", {}),
                            ],
                        }),
                        (0, a.jsx)("thead", {
                            children: (0, a.jsxs)("tr", {
                                children: [
                                    (0, a.jsx)(lI, { label: "#", ariaLabel: E.intl.string(E.t.fi04zk) }),
                                    (0, a.jsx)(lI, { label: E.intl.string(E.t.SVexhg) }),
                                    (0, a.jsx)(lI, { label: E.intl.string(E.t["9BIezJ"]) }),
                                    (0, a.jsx)(lI, { label: E.intl.string(E.t.vHCZwr) }),
                                    (0, a.jsx)(lI, { label: E.intl.string(E.t.fBsbex) }),
                                ],
                            }),
                        }),
                        l
                            ? (0, a.jsx)(lE, {})
                            : (0, a.jsxs)("tbody", {
                                  children: [
                                      s.map((e) => {
                                          let { entry: t, game: l, isNewRelease: s } = e;
                                          return (0, a.jsx)(
                                              lC,
                                              { entry: t, game: l, isNewRelease: s, percentFormatter: d },
                                              l.id,
                                          );
                                      }),
                                      0 === s.length &&
                                          (0, a.jsx)(lv, {
                                              message: E.intl.string(null != t ? ll.default.xuDHiG : ll.default.HxbFsz),
                                          }),
                                  ],
                              }),
                    ],
                }),
            }),
        ],
    });
}
var lR = l(798292);
function lT(e) {
    tf.A.setState({ selectedView: e });
}
function lG() {
    let e = tf.A.useField("selectedView"),
        t = n.useMemo(
            () => [
                { id: tL.y.FEATURED, label: E.intl.string(E.t.Rism7w) },
                { id: tL.y.TRENDING, label: E.intl.string(E.t.TsWCdW) },
            ],
            [],
        );
    return (0, a.jsxs)("div", {
        className: lR.k,
        children: [
            (0, a.jsxs)(f.Ay, {
                variant: f.Z5.RELATIVE,
                children: [
                    (0, a.jsx)(f.T4, { icon: tx.GameControllerIcon }),
                    (0, a.jsx)(j.A, { tabs: t, selectedTab: e, onTabSelect: lT }),
                ],
            }),
            (0, a.jsx)(Y.A, {
                children: (0, a.jsx)("div", {
                    className: lR.Q,
                    children: e === tL.y.FEATURED ? (0, a.jsx)(lh, {}) : (0, a.jsx)(lp, {}),
                }),
            }),
        ],
    });
}
var lF = l(272030);
let l_ = function () {
    let e = (0, i.bG)([d.A], () => d.A.hasLoadedExperiments),
        t = (0, th.f)("GlobalDiscovery"),
        l = tm.A.useField("selectedTab"),
        s = l !== ti.GlobalDiscoveryTab.GAMES || t ? l : ti.Pd,
        u = (function (e) {
            switch (e) {
                case ti.GlobalDiscoveryTab.SERVERS:
                    return (0, a.jsx)(td, {});
                case ti.GlobalDiscoveryTab.APPS:
                    return (0, a.jsx)(o.default, {});
                case ti.GlobalDiscoveryTab.QUESTS:
                    return (0, a.jsx)(to.default, { topLevelRoute: !1 });
                case ti.GlobalDiscoveryTab.GAMES:
                    return (0, a.jsx)(lG, {});
                default:
                    (0, M.xb)(e);
            }
        })(s),
        m = (0, r.zy)();
    return (
        n.useEffect(() => {
            let l = m.pathname,
                s = (0, tg.j)(l);
            s === ti.GlobalDiscoveryTab.GAMES && e && !t
                ? (0, tu.bG)(v.BVt.GLOBAL_DISCOVERY_SERVERS)
                : s !== tm.A.getField("selectedTab") && tm.A.setState({ selectedTab: s });
        }, [m.pathname, e, t]),
        n.useEffect(() => {
            e && (0, H.tx)({ selectedTab: s });
        }, [s, e]),
        (0, a.jsxs)("section", {
            className: lF.k,
            children: [(0, a.jsx)(c.HI, { location: (0, tg.t)(s) }), (0, a.jsx)("div", { className: lF.T }), u],
        })
    );
};
