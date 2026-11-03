(s.r(t), s.d(t, { default: () => sr }));
var l = s(477900),
    a = s(582128),
    i = s(806163),
    n = s(17928),
    r = s(726249),
    c = s(736056),
    d = s(869362),
    o = s(664121),
    u = s(548411),
    g = s(534514),
    m = s(711111),
    h = s(770472),
    x = s(737823),
    j = (s(749638), s(876622)),
    A = s(521974),
    f = s(282026),
    y = s(449054);
class C {
    guildIds = new Set();
    categoryId;
    constructor(e) {
        this.categoryId = e;
    }
    markAsSeen(e, t, s) {
        (this.categoryId !== e && ((this.categoryId = e), this.flushSeenGuilds(s)), this.guildIds.add(t));
    }
    flushSeenGuilds(e) {
        this.guildIds.size > 0 && (y.PU(e, Array.from(this.guildIds)), this.guildIds.clear());
    }
}
var S = s(965660),
    b = s(601193),
    I = s(858899),
    N = s(652215),
    v = s(105292);
s(321073);
var E = s(636537),
    p = s(319400),
    R = s(73153),
    G = s(324580);
async function F(e, t) {
    let { categoryId: s, languageCode: l, offset: a, limit: i, withCounts: n } = t;
    R.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", query: e, categoryId: s, languageCode: l });
    try {
        let t = await E.Bo.get({
                url: N.Rsh.GUILD_DISCOVERY_SEARCH,
                query: {
                    query: e,
                    category_id: s === G.Iq ? null : s,
                    offset: a,
                    limit: i,
                    language_code: l,
                    with_counts: n,
                },
                oldFormErrors: !0,
                rejectWithError: (0, E.fT)(),
            }),
            r = t.body.guilds.map(S.uk),
            c = t.body.total_count;
        if (n) {
            let s = [];
            (t.body.categories?.slice(0, 8).forEach((e) => {
                let { id: t, count: l } = e;
                s.push([Number(t), l]);
            }),
                R.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS", query: e, categoryCounts: s }));
        }
        R.h.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
            query: e,
            categoryId: s,
            languageCode: l,
            guilds: r,
            total: c,
        });
    } catch (a) {
        let t = new p.LG(a);
        (y.jb({ categoryId: s, error: t, willRequestRetry: !1, isRequestRetry: !1 }),
            n && R.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS", query: e, categoryCounts: [] }),
            R.h.dispatch({
                type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
                query: e,
                categoryId: s,
                languageCode: l,
                error: a,
            }));
    }
}
let T = function (e) {
        R.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR", ignoreQueries: e?.ignoreQueries ?? [] });
    },
    k = function () {
        R.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET" });
    };
var L = s(823448),
    D = s(351022);
class w {}
let _ = new (class extends w {
    loadMoreCategoryResults = async (e) => {
        let { query: t, categoryId: s, languageCode: l, offset: a } = e;
        D.A.getIsFetching({ query: t, categoryId: s, languageCode: l }) ||
            (D.A.getIsInitialFetchComplete({ query: t, categoryId: s, languageCode: l }) &&
                (y.br({ withCounts: !1, offset: a }),
                await F(t, { categoryId: s, languageCode: l, offset: a, limit: 12, withCounts: !1 })));
    };
    loadCategoryResults = async (e) => {
        let { query: t, categoryId: s, languageCode: l } = e,
            a = D.A.getIsFetching({ query: t, categoryId: s, languageCode: l }),
            i = D.A.getIsInitialFetchComplete({ query: t, categoryId: s, languageCode: l });
        a ||
            i ||
            (y.br({ withCounts: !1, offset: 0 }),
            await F(t, { categoryId: s, languageCode: l, offset: 0, limit: 12, withCounts: !1 }));
    };
    loadCategoryResultsAndCounts = async (e) => {
        let { query: t, loadId: s, categoryId: l, languageCode: a } = e;
        if ("" === t.trim()) return;
        let i = L.A.getIsFetchingCounts(t),
            n = L.A.getIsFetchingCounts(t);
        i ||
            n ||
            (f.A.setState({ fetchedQuery: t, resultsQuery: "" }),
            y.fd(s, l),
            y.br({ withCounts: !0, offset: 0 }),
            await F(t, { categoryId: l, languageCode: a, offset: 0, limit: 12, withCounts: !0 }),
            f.A.setState({ resultsQuery: t }));
    };
})();
var U = s(460760),
    q = s(533129),
    V = s(403362),
    M = s(688713),
    Q = s(707554),
    H = s(902119),
    O = s(701508),
    P = s(979590),
    B = s(783531),
    Y = s(503698),
    z = s.n(Y),
    K = s(269115),
    Z = s(289873),
    W = s(900002),
    X = s(834730),
    J = s(232554),
    $ = s(442433),
    ee = s(736653),
    et = s(573435),
    es = s(635350),
    el = s(785970);
let ea = a.memo(function (e) {
    let { className: t } = e;
    return (0, l.jsx)("div", { className: z()(t, el.En) });
});
var ei = s(29477),
    en = s(717421),
    er = s(775602);
let ec = { mass: 1, tension: 600, friction: 60, clamp: !0 },
    ed = function (e) {
        let { animate: t, state: s, cleanUp: i, children: r } = e,
            c = (0, n.bG)([er.Ay], () => er.Ay.useReducedMotion),
            d = a.useMemo(
                () =>
                    !1 === t || c
                        ? { opacity: 1 }
                        : s === J.wL.ENTERED || s === J.wL.MOUNTED
                          ? { from: { opacity: 0 }, to: { opacity: 1 }, config: ec }
                          : {
                                from: { opacity: 1 },
                                to: { opacity: 0 },
                                config: ec,
                                onRest: () => {
                                    i();
                                },
                            },
                [t, i, c, s],
            ),
            o = (0, en.z)(d);
        return (0, l.jsx)(ei.animated.div, { style: o, className: el.Hp, children: r });
    };
var eo = s(714991),
    eu = s(776231),
    eg = s(486020),
    em = s(939249),
    eh = s(26430),
    ex = s(517905),
    ej = s(421407);
let eA = function (e) {
    let { className: t, guildId: s } = e,
        i = a.useRef(null),
        n = a.useCallback((e, t) => {
            (e.stopPropagation(), t.onClick(e));
        }, []);
    return (0, l.jsx)(ex.A, {
        guildId: s,
        position: "left",
        targetElementRef: i,
        children: (e) =>
            (0, l.jsx)(em.D, {
                ...e,
                innerRef: i,
                className: t,
                onClick: (t) => n(t, e),
                children: (0, l.jsx)("div", {
                    className: ej.K,
                    children: (0, l.jsx)(eh._, { size: "xs", color: "currentColor" }),
                }),
            }),
    });
};
var ef = s(59329),
    ey = s(937495),
    eC = s(517061);
function eS(e) {
    let { guild: t, onClick: i, onView: n } = e,
        [r, c] = a.useState(!1),
        [d, o] = a.useState(!1),
        [u, m] = a.useState(!1),
        h = a.useRef(null),
        x = a.useCallback(async () => {
            o(!0);
            try {
                await i(t.id);
            } finally {
                o(!1);
            }
        }, [t.id, i]),
        j = a.useCallback(
            (e) => {
                e && !r && (c(!0), n?.(t.id));
            },
            [t.id, r, n],
        ),
        A = a.useCallback(
            (e) => {
                (0, $.L3)(e, async () => {
                    let { default: e } = await s.e("239572").then(s.bind(s, 235327));
                    return (s) => (0, l.jsx)(e, { ...s, guild: t });
                });
            },
            [t],
        ),
        f = (0, ee.Ay)(),
        y = t.features.has(N.GuildFeatures.HUB),
        C = a.useMemo(() => {
            let e = eg.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discoverySplash, size: 300 * (0, eu.mZ)() });
            if (null != e) return e;
            if (y) return "/assets/c47298d5d6eac3b2.svg";
            switch (f) {
                case N.NJ8.DARK:
                    return ey;
                case N.NJ8.LIGHT:
                    return eC;
            }
        }, [t.discoverySplash, t.id, y, f]),
        S = a.useMemo(() => eg.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }), [t.icon, t.id]);
    return (0, l.jsxs)("div", {
        className: ef.kL,
        children: [
            d &&
                (0, l.jsx)("div", {
                    className: ef.dc,
                    children: (0, l.jsx)(Z.y, { type: Z.y.Type.PULSING_ELLIPSIS, className: ef.u1 }),
                }),
            (0, l.jsx)(K.L, {
                innerRef: h,
                onChange: j,
                active: !r,
                threshold: 0.55,
                children: (0, l.jsxs)(es.A, {
                    ref: h,
                    className: ef.Nr,
                    onClick: x,
                    disabled: d,
                    onContextMenu: A,
                    "aria-label": v.intl.string(v.t["M9wQ+f"]),
                    children: [
                        (0, l.jsxs)("div", {
                            className: ef.wx,
                            children: [
                                (0, l.jsx)("div", {
                                    className: z()(ef.vK, { [ef.Kc]: u }),
                                    children: (0, l.jsx)("img", {
                                        src: C,
                                        alt: "",
                                        className: ef._e,
                                        onLoad: () => m(!0),
                                    }),
                                }),
                                (0, l.jsx)(eA, { className: ef.gw, guildId: t.id }),
                                (0, l.jsx)("div", {
                                    className: ef.Kk,
                                    children: (0, l.jsx)(et.Ay, {
                                        mask: et.Ay.Masks.SQUIRCLE,
                                        width: 56,
                                        height: 56,
                                        children: (0, l.jsx)("div", {
                                            className: ef.SA,
                                            children: (0, l.jsx)(et.Ay, {
                                                mask: et.Ay.Masks.SQUIRCLE,
                                                width: 48,
                                                height: 48,
                                                children: (0, l.jsx)("img", { src: S, alt: "", className: ef.my }),
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: ef.gI,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: ef.DD,
                                    children: [
                                        (0, l.jsx)(eo.A, {
                                            className: ef.n2,
                                            guild: t,
                                            tooltipColor: W.ST.Colors.PRIMARY,
                                        }),
                                        (0, l.jsx)(g.D, {
                                            variant: "heading-md/semibold",
                                            className: ef.J5,
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(X.E, {
                                    className: ef.h_,
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: t.description,
                                }),
                                (0, l.jsxs)("div", {
                                    className: ef.bu,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, l.jsxs)("div", {
                                                className: ef.CV,
                                                children: [
                                                    (0, l.jsx)("div", { className: ef.SP }),
                                                    (0, l.jsx)(X.E, {
                                                        className: ef.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: v.intl.format(v.t["LC+S+m"], {
                                                            membersOnline: t.presenceCount,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        null != t.memberCount &&
                                            (0, l.jsxs)("div", {
                                                className: ef.CV,
                                                children: [
                                                    (0, l.jsx)("div", { className: ef.PB }),
                                                    (0, l.jsx)(X.E, {
                                                        className: ef.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: v.intl.format(v.t.zRl6XR, { count: t.memberCount }),
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
function eb(e) {
    let { guildId: t, onClick: s, onView: a } = e,
        i = (0, n.bG)([D.A], () => D.A.getGuild(t));
    return null == i ? null : (0, l.jsx)(eS, { guild: i, onClick: s, onView: a });
}
function eI(e) {
    let { guildId: t, index: s, onClick: i, onView: n } = e,
        r = a.useRef(null == t),
        c = a.useCallback(
            (e, t, s, a) =>
                null == t.guildId
                    ? (0, l.jsx)(ed, { state: s, cleanUp: a, children: (0, l.jsx)(ea, { className: ef.qf }) }, e)
                    : (0, l.jsx)(
                          ed,
                          {
                              state: s,
                              cleanUp: a,
                              animate: r.current,
                              children: (0, l.jsx)(eb, { guildId: t.guildId, onClick: i, onView: n }),
                          },
                          e,
                      ),
            [i, n],
        ),
        d = a.useCallback((e) => e.guildId ?? `${e.index}`, []),
        o = a.useMemo(() => [{ guildId: t, index: s }], [t, s]);
    return (0, l.jsx)("div", {
        className: ef.NK,
        children: (0, l.jsx)(J.F, { items: o, renderItem: c, getItemKey: d }),
    });
}
let eN = a.memo(eb);
var ev = s(401034);
let eE = { page: N.liQ.GUILD_DISCOVERY, object: N.ZSU.CARD, section: N.JJy.DISCOVER_POPULAR };
function ep(e) {
    let { tab: t, guildIds: s, loading: i, onScroll: n, onGuildCardClick: r, onGuildCardSeen: c } = e,
        d = (0, S.kc)(t),
        o = (0, S.Ot)(t),
        u = (0, S.UW)(t),
        m = (0, S.Ub)(t),
        h = a.useMemo(() => {
            let e = i ? 30 : s.length,
                t = [];
            for (let a = 0; a < e; a++)
                t.push(
                    (0, l.jsx)(
                        eI,
                        { guildId: s[a] ?? null, index: a, onClick: (e) => r(e, a, m, eE), onView: (e) => c(e, m) },
                        s[a] ?? a,
                    ),
                );
            return t;
        }, [m, s, i, r, c]);
    return (0, l.jsxs)(B.A, {
        onScroll: n,
        children: [
            (0, l.jsx)(O.A, { title: d, description: o, children: (0, l.jsx)(H.A, {}) }),
            (0, l.jsx)(P.A, {
                children: (0, l.jsxs)(Q.F, {
                    children: [
                        (0, l.jsx)(g.D, {
                            className: ev.G,
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: u,
                        }),
                        (0, l.jsx)(Q.F, { children: (0, l.jsx)("div", { className: ev.Q, children: h }) }),
                    ],
                }),
            }),
        ],
    });
}
var eR = s(66834),
    eG = s(101277),
    eF = s(661531),
    eT = s(821609),
    ek = s(192308),
    eL = s(792749);
let eD = function (e) {
    let { hasHub: t } = e;
    return (0, l.jsxs)("div", {
        className: eL.kL,
        children: [
            (0, l.jsx)("div", {
                className: eL.zc,
                children: (0, l.jsx)(eG.P, { size: "md", color: eF.A.colors.WHITE.css }),
            }),
            (0, l.jsx)(X.E, {
                color: "text-strong",
                variant: "text-lg/semibold",
                className: eL.wx,
                children: t ? v.intl.string(v.t.hsSHh8) : v.intl.string(v.t.Wf6iij),
            }),
            (0, l.jsx)(X.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: eL.__invalid_description,
                children: t ? v.intl.string(v.t.FZ2J3Y) : v.intl.string(v.t.TvHcv6),
            }),
            (0, l.jsx)("div", { className: eL.rQ }),
            (0, l.jsx)(eT.$, {
                fullWidth: !0,
                variant: t ? "secondary" : "active",
                onClick: () =>
                    (0, ek.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            s.e("144909"),
                            s.e("197804"),
                            s.e("807265"),
                            s.e("797641"),
                            s.e("890496"),
                        ]).then(s.bind(s, 401155));
                        return (t) => (0, l.jsx)(e, { ...t });
                    }),
                text: t ? v.intl.string(v.t.IyjHD9) : v.intl.string(v.t["KU/aN4"]),
            }),
        ],
    });
};
var ew = s(71393),
    e_ = s(118331);
let eU = function (e) {
    let { onScroll: t } = e,
        s = (0, n.yK)([ew.A], () => ew.A.getGuildsArray().filter((e) => e.features.has(N.GuildFeatures.HUB))),
        i = a.useMemo(
            () =>
                s.map((e) => ({
                    ...e,
                    presenceCount: void 0,
                    memberCount: void 0,
                    premiumSubscriptionCount: void 0,
                    emojis: void 0,
                })),
            [s],
        );
    return (0, l.jsxs)(B.A, {
        onScroll: t,
        children: [
            (0, l.jsx)(O.A, {
                title: v.intl.string(v.t.X5xPlb),
                description: v.intl.string(v.t["F/IQCI"]),
                children: (0, l.jsx)(H.A, {}),
            }),
            (0, l.jsxs)(P.A, {
                children: [
                    s.length > 0
                        ? (0, l.jsxs)(Q.F, {
                              children: [
                                  (0, l.jsx)(g.D, {
                                      className: ev.G,
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      children: v.intl.string(v.t["2DfZIQ"]),
                                  }),
                                  (0, l.jsx)(Q.F, {
                                      children: (0, l.jsxs)("div", {
                                          className: ev.Q,
                                          children: [
                                              i.map((e) =>
                                                  (0, l.jsx)(
                                                      eS,
                                                      { guild: e, onClick: () => eR.A.transitionToGuildSync(e.id) },
                                                      e.id,
                                                  ),
                                              ),
                                              (0, l.jsx)(eD, { hasHub: !0 }),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)("div", { className: ev.Q, children: (0, l.jsx)(eD, { hasHub: !1 }) }),
                    (0, l.jsx)("div", { className: e_.yF }),
                    (0, l.jsxs)("div", {
                        className: e_.ed,
                        children: [
                            (0, l.jsxs)(X.E, {
                                className: e_.Qq,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: [v.intl.string(v.t.O1k9XX), " "],
                            }),
                            (0, l.jsx)(X.E, {
                                className: e_.Qq,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: v.intl.string(v.t.FV5dvh),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
function eq(e) {
    let { onScroll: t, onGuildCardSeen: s, onGuildCardClick: i } = e,
        r = (0, n.bG)([D.A], () => D.A.getGuildIds({ categoryId: G.Iq }) ?? G.VX),
        c = (0, n.bG)([D.A], () => D.A.getIsFetching({ categoryId: G.Iq }) ?? !0);
    return (
        a.useEffect(() => {
            M.A.fetchFeaturedGuilds();
        }, []),
        (0, l.jsx)(ep, {
            tab: G.o.FEATURED,
            guildIds: r,
            loading: c,
            onScroll: t,
            onGuildCardSeen: s,
            onGuildCardClick: i,
        })
    );
}
function eV(e) {
    let { tab: t, onScroll: s, onGuildCardSeen: i, onGuildCardClick: r } = e,
        c = (0, S.Ub)(t),
        d = (0, n.bG)([D.A], () => D.A.getGuildIds({ categoryId: c }) ?? G.VX),
        o = (0, n.bG)([D.A], () => D.A.getIsFetching({ categoryId: c }) ?? !0);
    return (
        a.useEffect(() => {
            M.A.fetchCategoryFeaturedGuilds({ categoryId: c });
        }, [c]),
        (0, l.jsx)(ep, { tab: t, guildIds: d, loading: o, onScroll: s, onGuildCardSeen: i, onGuildCardClick: r })
    );
}
function eM(e) {
    let { selectedTab: t, onScroll: s, onGuildCardSeen: i, onGuildCardClick: n } = e;
    switch (
        (a.useEffect(() => {
            let e = (0, S.Ub)(t);
            (0, q.np)({ selectedCategoryId: e });
        }, [t]),
        t)
    ) {
        case G.o.FEATURED:
            return (0, l.jsx)(eq, { tab: t, onScroll: s, onGuildCardClick: n, onGuildCardSeen: i });
        case G.o.GAMING:
        case G.o.MUSIC:
        case G.o.ENTERTAINMENT:
        case G.o.TECH:
        case G.o.EDUCATION:
            return (0, l.jsx)(eV, { tab: t, onScroll: s, onGuildCardClick: n, onGuildCardSeen: i }, t);
        case G.o.HUBS:
            return (0, l.jsx)(eU, { onScroll: s });
        default:
            (0, V.xb)(t);
    }
}
var eQ = s(435558),
    eH = s.n(eQ),
    eO = s(92008),
    eP = s(770178),
    eB = s(174459),
    eY = s(773669),
    ez = s(997590);
function eK(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [ez.A];
    return e === G.Iq ? v.intl.string(v.t.Omu0fS) : t.getCategoryName(e);
}
function eZ(e) {
    let { categoryId: t } = e;
    return (0, n.bG)([ez.A], () => eK(t, [ez.A]));
}
s(667532);
var eW = s(499118);
function eX() {
    let e = f.A.useField("fetchedQuery"),
        t = f.A.useField("resultsInitialCategoryId"),
        s = f.A.useField("languageCode"),
        l = (0, n.bG)([D.A], () => (null == t ? 0 : (D.A.getTotal({ categoryId: t, query: e, languageCode: s }) ?? 0))),
        i = (0, n.bG)([D.A], () => D.A.getTotal({ categoryId: G.Iq, query: e, languageCode: s }) ?? 0),
        r = (0, n.bG)([eW.A], () => eW.A.getVisibleTabs());
    return a.useMemo(() => {
        if (null == r) return null;
        if (null == t) return r;
        let e = [],
            s = new Set();
        for (let [t, l] of r) (s.add(t), e.push([t, l]));
        let a = !1;
        return (
            s.has(G.Iq) || (s.add(G.Iq), e.unshift([G.Iq, i]), (a = !0)),
            s.has(t) || (s.add(t), e.push([t, l]), (a = !0)),
            a ? e : r
        );
    }, [r, t, i, l]);
}
var eJ = s(166976);
function e$(e) {
    let { categoryId: t, loadId: s } = e;
    (f.A.setState({ categoryId: t }),
        _.loadCategoryResults({
            loadId: s,
            categoryId: t,
            query: f.A.getField("fetchedQuery"),
            languageCode: f.A.getField("languageCode"),
        }));
}
function e0(e) {
    let { loadId: t, categoryId: s, count: i } = e,
        n = a.useCallback(() => {
            e$({ categoryId: s, loadId: t });
        }, [s, t]),
        r = f.A.useField("categoryId") === s,
        c = i.toLocaleString(eY.default.locale),
        d = eZ({ categoryId: s });
    return (0, l.jsxs)(em.D, {
        onClick: n,
        className: z()(eJ.L1, { [eJ.wH]: r }),
        children: [
            (0, l.jsx)(X.E, { className: eJ.UU, variant: "text-sm/medium", color: "text-strong", children: d }),
            (0, l.jsx)(X.E, { className: eJ.U9, variant: "text-sm/normal", color: "text-muted", children: c }),
        ],
    });
}
let e1 = function (e) {
    let { loadId: t } = e,
        s = eX();
    return null == s
        ? null
        : (0, l.jsx)("div", {
              className: eJ.LZ,
              children: s.map((e) => {
                  let [s, a] = e;
                  return (0, l.jsx)(e0, { loadId: t, categoryId: s, count: a }, s);
              }),
          });
};
var e2 = s(191711),
    e6 = s(226658);
function e5(e) {
    let { loadId: t } = e,
        s = f.A.useField("categoryId"),
        i = eX(),
        r = eZ({ categoryId: s }),
        c = a.useCallback(
            (e) => {
                e$({ loadId: t, categoryId: Number(e) });
            },
            [t],
        ),
        d = (function (e) {
            let { categoryIds: t } = e;
            return (0, n.cf)([ez.A], () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        e[t] = eK(t, [ez.A]);
                    }),
                    e
                );
            });
        })({
            categoryIds: a.useMemo(
                () =>
                    null == i
                        ? []
                        : i.map((e) => {
                              let [t] = e;
                              return t;
                          }),
                [i],
            ),
        }),
        o = a.useMemo(
            () =>
                null == i
                    ? []
                    : i.map((e) => {
                          let [t, s] = e;
                          return { id: `${t}`, name: d[t] ?? "", count: s };
                      }),
            [i, d],
        );
    return null == i
        ? null
        : (0, l.jsxs)("div", {
              className: e6.k,
              children: [
                  (0, l.jsx)(X.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: v.intl.string(v.t.f09BQJ),
                  }),
                  (0, l.jsx)(e2.A, {
                      items: o,
                      title: r,
                      onSelect: c,
                      selected: `${s}`,
                      "aria-label": v.intl.string(v.t.Ng5cTK),
                      variant: e2.H.FILLED,
                  }),
              ],
          });
}
var e9 = s(468646);
let e4 = function (e) {
    let { loadId: t } = e,
        s = f.A.useField("categoryId"),
        i = (0, n.bG)([ez.A], () => ez.A.getCategoryName(s)),
        r = a.useCallback(() => {
            (f.A.setState({ categoryId: G.Iq }),
                _.loadCategoryResults({
                    loadId: t,
                    categoryId: G.Iq,
                    query: f.A.getField("fetchedQuery"),
                    languageCode: f.A.getField("languageCode"),
                }));
        }, [t]),
        c = s === G.Iq ? v.intl.string(v.t.Ivw1Is) : v.intl.formatToPlainString(v.t["+1WAFb"], { categoryName: i }),
        d = s === G.Iq ? v.intl.string(v.t.aXvEjd) : v.intl.format(v.t.XLioqn, { onClick: r });
    return (0, l.jsxs)("div", {
        className: e9.k,
        children: [
            (0, l.jsx)(g.D, { variant: "heading-xl/semibold", className: e9.w, children: c }),
            (0, l.jsx)(X.E, { variant: "text-md/normal", color: "text-default", children: d }),
        ],
    });
};
var e3 = s(890497),
    e7 = s(118216);
function e8(e) {
    let { loadId: t } = e,
        s = (0, n.bG)([eY.default], () => (0, S.Kv)([eY.default])),
        i = f.A.useField("languageCode"),
        r = a.useCallback(
            (e) => {
                f.A.setState({ languageCode: e });
                let s = f.A.getField("fetchedQuery");
                (T({ ignoreQueries: [s] }),
                    _.loadCategoryResults({
                        loadId: t,
                        categoryId: f.A.getField("categoryId"),
                        query: s,
                        languageCode: e,
                    }));
            },
            [t],
        ),
        c = a.useMemo(() => (0, G.tO)().map((e) => ({ id: e.code, value: e.code, label: e.name })), []);
    return (0, l.jsx)("div", {
        className: e7.k,
        children: (0, l.jsx)(e3.Z, {
            selectionMode: "single",
            label: v.intl.string(v.t.Ng5cTK),
            hideLabel: !0,
            value: i ?? s,
            options: c,
            onSelectionChange: r,
        }),
    });
}
var te = s(413185);
let tt = Object.freeze({ top: 0, bottom: 0, left: 32, right: 202 }),
    ts = Object.freeze({ top: 0, bottom: 0, left: 32, right: 32 }),
    tl = { page: N.liQ.GUILD_DISCOVERY, object: N.ZSU.CARD, section: N.JJy.DISCOVER_SEARCH },
    ta = eH().throttle(y.Cf, 1e3, { leading: !1, trailing: !0 });
function ti(e) {
    let { loadId: t, onGuildCardSeen: s, onGuildCardClick: i } = e,
        {
            guildIds: r,
            loading: c,
            searchResultsQuery: d,
            loadMore: o,
            searchCategoryId: u,
        } = (function (e) {
            let { loadId: t } = e,
                s = f.A.useField("fetchedQuery"),
                l = f.A.useField("categoryId"),
                i = f.A.useField("languageCode"),
                r = a.useMemo(() => ({ categoryId: l, query: s, languageCode: i }), [l, i, s]),
                c = (0, n.bG)([D.A], () => D.A.getGuildIds(r) ?? G.VX),
                d = (0, n.bG)([D.A], () => D.A.getIsFetching(r) ?? !1),
                o = f.A.useField("resultsQuery"),
                u = o !== s,
                g = a.useCallback(() => {
                    let e = D.A.getGuildIds(r),
                        s = D.A.getTotal(r);
                    if (null == e || null == s) return;
                    let l = D.A.getIsFetching(r),
                        a = D.A.getIsInitialFetchComplete(r);
                    l ||
                        !a ||
                        e.length >= s ||
                        _.loadMoreCategoryResults({
                            loadId: t,
                            offset: e.length,
                            categoryId: f.A.getField("categoryId"),
                            query: f.A.getField("fetchedQuery"),
                            languageCode: f.A.getField("languageCode"),
                        });
                }, [t, r]);
            return a.useMemo(
                () => ({ guildIds: c, loading: u || d, searchResultsQuery: o, loadMore: g, searchCategoryId: l }),
                [c, u, d, o, g, l],
            );
        })({ loadId: t }),
        g = 0 === r.length && !c,
        m = a.useContext(eB.AnalyticsContext),
        [h, x] = a.useState((0, S.YP)()),
        [j, A] = a.useState(!0),
        y = a.useRef(j),
        [C, b] = a.useState(3),
        I = a.useRef(C),
        N = a.useRef(null),
        v = a.useCallback(
            (e) => {
                null == e || g || c || (336 * (r.length / C) <= e.height && o());
            },
            [g, c, r.length, C, o],
        ),
        E = a.useCallback(
            (e) => {
                let t = e.contentRect;
                if (null == t) return;
                let s = t.width;
                s < 1024 && y.current ? ((y.current = !1), A(!1)) : s > 1024 && !y.current && ((y.current = !0), A(!0));
                let l = 1;
                for (s -= 450 * !!j, s -= 280; s > 0;) ((s -= 264), (l += 1));
                (l !== I.current && ((I.current = l), b(l)), v(t));
            },
            [j, v],
        ),
        p = (0, eP.w)(E, [j, v]);
    (a.useEffect(() => {
        x((0, S.YP)());
    }, [d]),
        a.useEffect(() => {
            ta({
                loadId: t,
                searchId: h,
                query: d,
                guildResults: r.map(D.A.getGuild).filter(V.Vq),
                analyticsContext: m,
                categoryId: u,
            });
        }, [m, r, t, u, h, d]));
    let R = a.useCallback((e) => s(e, u), [s, u]),
        F = a.useMemo(() => (c ? [r.length, 0] : [r.length]), [r.length, c]),
        T = a.useCallback(
            (e, s, a) => {
                switch (e) {
                    case 0:
                        return (0, l.jsxs)(
                            "div",
                            {
                                style: { paddingLeft: s.left, width: s.width - 16 },
                                className: z()(te.R_, { [te.Ze]: !j }),
                                children: [
                                    !j &&
                                        (0, l.jsxs)("div", {
                                            className: te.eW,
                                            children: [(0, l.jsx)(e5, { loadId: t }), (0, l.jsx)(e8, { loadId: t })],
                                        }),
                                    g && (0, l.jsx)(e4, { loadId: t }),
                                ],
                            },
                            a,
                        );
                    case 1:
                        return (0, l.jsx)(Z.y, { className: z()(te.u1, { [te.qx]: j }) }, a);
                }
            },
            [g, j, t],
        ),
        k = a.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = j ? 16 : 68;
                        return g ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error(`[getSectionHeight] Failed for section: ${e}`);
                }
            },
            [g, j],
        ),
        L = a.useCallback(
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
        w = a.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error(`[getItemHeight] Failed for section: ${e}`);
            }
        }, []),
        U = a.useCallback(
            async (e, t, s, l) => {
                await i(e, t, s, l);
                let a = N.current?.getScrollerState()?.scrollTop;
                null != a && f.A.setState({ scrollPosition: a });
            },
            [i],
        ),
        q = a.useCallback(
            (e, t, s, a) => {
                if (0 !== e) return null;
                {
                    let e = r[t];
                    return (0, l.jsx)(
                        "div",
                        {
                            style: s,
                            children: (0, l.jsx)(eN, {
                                guildId: e,
                                onClick: async (e) => await U(e, t, u, tl),
                                onView: (e) => R(e),
                            }),
                        },
                        a,
                    );
                }
            },
            [r, U, R, u],
        );
    (a.useEffect(() => {
        let e = N.current;
        return () => {
            let t = e?.getScrollerState()?.scrollTop;
            null != t && f.A.setState({ scrollPosition: t });
        };
    }, []),
        a.useLayoutEffect(() => {
            let e = f.A.getField("scrollPosition");
            null != e &&
                setTimeout(() => {
                    N.current?.scrollTo({
                        to: e,
                        animate: !1,
                        callback: () => {
                            f.A.setState({ scrollPosition: null });
                        },
                    });
                });
        }, []));
    let M = a.useMemo(
            () =>
                (0, eQ.debounce)(
                    () => {
                        let e = N.current?.getScrollerState();
                        if (null == e) return;
                        let t = e.scrollTop + e.offsetHeight;
                        e.scrollHeight - t < 240 && o();
                    },
                    100,
                    { leading: !0 },
                ),
            [o],
        ),
        Q = j ? tt : ts;
    return (0, l.jsx)("div", {
        className: te.kL,
        ref: p,
        children: (0, l.jsx)(eO.f, {
            ref: N,
            className: te.kf,
            sections: F,
            columns: C,
            itemGutter: 16,
            padding: Q,
            renderItem: q,
            renderSection: T,
            getSectionHeight: k,
            getItemKey: L,
            getItemHeight: w,
            chunkSize: 24,
            onScroll: M,
            renderAccessory: (e) =>
                j
                    ? (0, l.jsx)("div", {
                          className: te.pz,
                          style: { height: e },
                          children: (0, l.jsxs)("div", {
                              className: te.wp,
                              children: [
                                  (0, l.jsx)("div", { className: te.jp, children: (0, l.jsx)(e8, { loadId: t }) }),
                                  (0, l.jsx)(e1, { loadId: t }),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
var tn = s(488995),
    tr = s(877149);
function tc() {
    let e,
        t,
        s,
        i = a.useRef((0, S.YP)()),
        { onScroll: n, scrollPosition: r, resetScrollPosition: c } = (0, m.G)(),
        {
            tabs: d,
            selectedTab: E,
            setSelectedTab: p,
        } = ((e = b.A.useField("selectedTab")),
        (t = a.useMemo(
            () =>
                [G.o.FEATURED, G.o.GAMING, G.o.MUSIC, G.o.ENTERTAINMENT, G.o.TECH, G.o.EDUCATION, G.o.HUBS].map(
                    (e) => ({ id: e, label: (0, S.jR)(e) }),
                ),
            [],
        )),
        (s = a.useCallback((e) => {
            b.A.setState({ selectedTab: e });
        }, [])),
        a.useEffect(() => {
            (null != e && t.some((t) => t.id === e)) || s(t[0].id);
        }, [e, t, s]),
        { tabs: t, selectedTab: e ?? t[0].id, setSelectedTab: s }),
        R = (0, S.Ub)(E),
        F = !G.R0.has(E),
        {
            searchQuery: L,
            onSearchTextChange: D,
            onClearSearch: w,
            onSearchSubmit: q,
            isSearchVisible: V,
        } = (function (e) {
            let { loadId: t } = e,
                s = b.A.useField("isSearchVisible"),
                l = f.A.useField("query");
            a.useEffect(() => {
                (0, U.Mu)();
            }, []);
            let i = a.useCallback((e) => {
                f.A.setState({ query: e });
            }, []);
            return {
                searchQuery: l,
                onSearchTextChange: i,
                onClearSearch: a.useCallback(() => {
                    (y.gp(t),
                        T(),
                        k(),
                        f.A.setState({
                            query: "",
                            fetchedQuery: "",
                            resultsQuery: "",
                            categoryId: G.Iq,
                            resultsInitialCategoryId: null,
                            scrollPosition: null,
                        }),
                        b.A.setState({ isSearchVisible: !1 }));
                }, [t]),
                onSearchSubmit: a.useCallback(() => {
                    let e = f.A.getField("query"),
                        s = f.A.getField("fetchedQuery");
                    if ("" === e.trim() || e === s) return;
                    T();
                    let l = f.A.getField("languageCode"),
                        a = f.A.getField("categoryId");
                    (f.A.setState({ resultsInitialCategoryId: a }),
                        b.A.setState({ isSearchVisible: !0 }),
                        _.loadCategoryResultsAndCounts({ loadId: t, categoryId: a, query: e, languageCode: l }));
                }, [t]),
                isSearchVisible: s,
            };
        })({ loadId: i.current }),
        M = b.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: Q,
            onCollapsedSearchBarClick: H,
            onSearchBarBlur: O,
            tabsClassName: P,
        } = (0, h.p)({
            isSearchBarVisible: F,
            isSearchBarEmpty: "" === L.trim(),
            searchBarState: M,
            setSearchBarState: (e) => b.A.setState({ searchBarState: e }),
        }),
        B = f.A.useField("fetchedQuery"),
        Y = a.useCallback(
            (e) => {
                (p(e), V && w());
            },
            [V, w, p],
        ),
        z = a.useMemo(
            () =>
                V
                    ? d.filter((e) => {
                          let { id: t } = e;
                          return !G.R0.has(t);
                      })
                    : d,
            [d, V],
        ),
        K = a.useRef(new C(R)),
        { onGuildCardSeen: Z, onGuildCardClick: W } = (function (e) {
            let { guildDiscoveryCardSeenManager: t, loadId: s } = e,
                l = a.useCallback(
                    (e, l) => {
                        t.markAsSeen(l, e, s);
                    },
                    [t, s],
                ),
                i = a.useCallback(
                    async (e, t, l, a) => {
                        try {
                            await (0, S.Wl)({ loadId: s, guildId: e, index: t, categoryId: l, analyticsLocation: a });
                        } catch (e) {
                            switch (e?.body?.code) {
                                case N.t02.INVITES_DISABLED:
                                    (0, I.P0)({ text: v.intl.string(v.t["2LLbj9"]), variant: "critical" });
                                    return;
                                case N.t02.USER_BANNED:
                                    (0, I.P0)({ text: v.intl.string(v.t["GzD/aa"]), variant: "critical" });
                                    return;
                            }
                            throw e;
                        }
                    },
                    [s],
                );
            return a.useMemo(() => ({ onGuildCardSeen: l, onGuildCardClick: i }), [i, l]);
        })({ guildDiscoveryCardSeenManager: K.current, loadId: i.current });
    return (
        a.useEffect(() => {
            K.current.flushSeenGuilds(i.current);
        }, [R]),
        a.useEffect(() => {
            c();
        }, [E, c]),
        a.useEffect(() => {
            V || f.A.setState({ scrollPosition: null });
        }, [V]),
        (0, l.jsxs)("div", {
            className: tr.kL,
            children: [
                (0, l.jsxs)(x.Ay, {
                    variant: V ? x.Z5.RELATIVE : x.Z5.OVERLAY,
                    children: [
                        !V && (0, l.jsx)(x.ns, { scrollPosition: r }),
                        V ? (0, l.jsx)(x.XQ, { icon: u.Z, onClick: w }) : (0, l.jsx)(x.T4, { icon: o.R }),
                        !V &&
                            (0, l.jsx)(j.A, {
                                className: P,
                                tabs: z,
                                selectedTab: E,
                                onTabSelect: Y,
                                onAvailableWidthChange: Q,
                            }),
                        V &&
                            (0, l.jsx)(g.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                className: tr.ov,
                                children: v.intl.format(v.t.zHdzqW, { query: B }),
                            }),
                        F &&
                            (0, l.jsx)(A.A, {
                                query: L,
                                placeholder: v.intl.string(v.t["5h0QOP"]),
                                onTextChange: D,
                                onClear: w,
                                onSubmit: q,
                                onCollapsedClick: H,
                                state: V ? tn.GlobalDiscoverySearchBarState.DEFAULT : M,
                                onBlur: O,
                            }),
                    ],
                }),
                V
                    ? (0, l.jsx)(ti, { loadId: i.current, onGuildCardClick: W, onGuildCardSeen: Z })
                    : (0, l.jsx)(eM, { selectedTab: E, onScroll: n, onGuildCardClick: W, onGuildCardSeen: Z }),
            ],
        })
    );
}
var td = s(455030),
    to = s(976860),
    tu = s(726845),
    tg = s(285395),
    tm = s(185951),
    th = s(687966),
    tx = s(567272),
    tj = s(331322),
    tA = s(661439),
    tf = s(409626),
    ty = s(692969),
    tC = s(459746),
    tS = s(799699),
    tb = s(326369),
    tI = s(422069),
    tN = s(49491),
    tv = s(611656),
    tE = s(281018),
    tp = s(311043),
    tR = s(202163),
    tG = s(153488),
    tF = s(287809),
    tT = s(90165),
    tk = s(927813),
    tL = s(523754),
    tD = s(277450);
let tw = 30 * tk.A.Seconds.MINUTE,
    t_ = [],
    tU = [];
var tq = s(197935),
    tV = s(585205);
function tM(e) {
    let { children: t, skeletonTitleWidth: s } = e;
    return (0, l.jsxs)(tj.B, {
        gap: 12,
        "aria-busy": !0,
        children: [(0, l.jsx)(tS.Ay, { className: tV.K, width: s }), t],
    });
}
function tQ(e) {
    let { items: t, getItemKey: s, renderItem: a, "aria-label": i } = e;
    return (0, l.jsx)(tq.A, { items: t, getItemKey: s, renderItem: a, gap: 16, "aria-label": i });
}
function tH(e) {
    let { title: t, children: s } = e;
    return (0, l.jsxs)(tj.B, {
        as: "section",
        gap: 12,
        children: [(0, l.jsx)(g.D, { variant: "heading-lg/semibold", lineClamp: 1, children: t }), s],
    });
}
var tO = s(142553);
function tP(e) {
    return e.id;
}
function tB() {
    return (0, l.jsx)(tb.A, {
        gap: 16,
        children: eH()
            .range(0, 8)
            .map((e) =>
                (0, l.jsxs)(
                    tS.qT,
                    {
                        className: tO.Nr,
                        children: [(0, l.jsx)(tC.gr, { className: tO.Iv }), (0, l.jsx)(tS.Ay, { className: tO.UU })],
                    },
                    e,
                ),
            ),
    });
}
function tY() {
    return (0, l.jsx)(tM, { skeletonTitleWidth: 240, children: (0, l.jsx)(tB, {}) });
}
function tz(e) {
    let { game: t, listItemProps: s } = e,
        a = (0, ty.A)({
            location: "GlobalDiscoveryGamesBecauseYouPlayedCard",
            gameId: t.id,
            source: tf.GameProfileSources.GlobalDiscoveryGamesBecauseYouPlayed,
        });
    return (0, l.jsxs)(em.D, {
        ...s,
        className: z()(tO.Nr, { [tO.vk]: null != a }),
        onClick: a,
        "aria-label": v.intl.formatToPlainString(v.t["8QLQB+"], { gameName: t.name }),
        children: [
            (0, l.jsx)("div", {
                className: tO.Iv,
                children: (0, l.jsx)(tC.Ay, {
                    game: t,
                    className: tO.xe,
                    size: tC.wu.LARGE,
                    imageSize: 512,
                    loadingPlaceholder: (0, l.jsx)(tC.gr, { className: tO.XE }),
                }),
            }),
            (0, l.jsx)(X.E, { variant: "text-md/medium", lineClamp: 1, children: t.name }),
        ],
    });
}
function tK(e, t) {
    return (0, l.jsx)(tz, { game: e, listItemProps: t });
}
function tZ() {
    let {
        isFetching: e,
        seedGame: t,
        games: s,
    } = (function () {
        let e = (0, n.bG)([tG.A], () => tG.A.hasConsented(N.YAq.PERSONALIZATION)),
            t = (0, n.bG)([tT.A], () => null == tT.A.lastFetched && !tT.A.hasFetchFailed),
            s = (0, n.yK)(
                [tT.A],
                () =>
                    e
                        ? Object.values(tT.A.applicationStatistics)
                              .filter((e) => e.total_duration >= tw)
                              .sort((e, t) => Date.parse(t.last_played_at) - Date.parse(e.last_played_at))
                              .slice(0, 5)
                              .map((e) => e.application_id)
                        : t_,
                [e],
            ),
            l = (0, tR.iE)(s),
            i = (0, n.cf)(
                [tp.A, tI.A, tF.default],
                () => {
                    let e = tF.default.getCurrentUser()?.nsfwAllowed;
                    for (let { gameRecord: t, isLoading: s } of l) {
                        if (s) return { isFetching: !0 };
                        if (null == t || tD.b.has(t.id) || !(0, tv.T_)(t) || (0, tN.b)(t, e)) continue;
                        let l = tI.A.getSimilarGames(t.id);
                        if (
                            null == l ||
                            l.some((t) => {
                                let s = tp.A.getGame(t);
                                return null == s ? !tp.A.hasNoData(t) && !tp.A.didFetchingFail(t) : (0, tE.n)(s, e);
                            })
                        )
                            return { isFetching: !1, seedGame: t };
                    }
                    return { isFetching: !1 };
                },
                [l],
            ),
            { isFetching: r, similarGames: c } = (0, tE.A)(i.seedGame?.id),
            d = a.useMemo(() => c.slice(0, 8), [c]);
        return e
            ? { isFetching: t || i.isFetching || r, seedGame: i.seedGame, games: d }
            : { isFetching: !1, games: tU };
    })();
    if (e) return (0, l.jsx)(tY, {});
    if (null == t || 0 === s.length) return null;
    let i = v.intl.formatToPlainString(v.t.E5vkHs, { gameName: t.name });
    return (0, l.jsx)(tH, {
        title: i,
        children: (0, l.jsx)(tQ, { items: s, getItemKey: tP, renderItem: tK, "aria-label": i }),
    });
}
var tW = s(457346);
function tX() {
    return (0, l.jsx)(tb.A, {
        gap: 16,
        children: eH()
            .range(0, 8)
            .map((e) =>
                (0, l.jsxs)(
                    tS.qT,
                    {
                        className: tW.Nr,
                        children: [
                            (0, l.jsx)(tS.Ay, { className: tW.Tp }),
                            (0, l.jsx)(tC.gr, { className: tW.Iv }),
                            (0, l.jsxs)("div", {
                                className: tW.pq,
                                children: [
                                    (0, l.jsx)(tS.Ay, { className: tW.UU }),
                                    (0, l.jsx)(tS.Ay, { className: tW.yz }),
                                ],
                            }),
                        ],
                    },
                    e,
                ),
            ),
    });
}
function tJ() {
    return (0, l.jsx)(tH, { title: v.intl.string(v.t.JMTGC3), children: (0, l.jsx)(tX, {}) });
}
var t$ = s(595305);
function t0() {
    return (0, l.jsx)(tb.A, {
        gap: 16,
        children: eH()
            .range(0, 5)
            .map((e) =>
                (0, l.jsxs)(
                    tS.qT,
                    {
                        className: t$.Nr,
                        children: [
                            (0, l.jsx)(tS.Ay, { className: t$.Tp }),
                            (0, l.jsx)(tC.gr, { className: t$.Iv }),
                            (0, l.jsxs)("div", {
                                className: t$.pq,
                                children: [
                                    (0, l.jsx)(tS.Ay, { className: t$.UU }),
                                    (0, l.jsx)(tS.Ay, { className: t$.h5 }),
                                    (0, l.jsx)(tS.Ay, { className: t$.vL }),
                                ],
                            }),
                        ],
                    },
                    e,
                ),
            ),
    });
}
function t1() {
    return (0, l.jsx)(tH, { title: v.intl.string(v.t.Pc6FRV), children: (0, l.jsx)(t0, {}) });
}
function t2() {
    return (0, l.jsx)(tH, { title: v.intl.string(v.t.qpGTIa), children: (0, l.jsx)(tX, {}) });
}
var t6 = s(2014);
function t5() {
    return (0, l.jsx)(tb.A, {
        gap: 16,
        children: eH()
            .range(0, 10)
            .map((e) =>
                (0, l.jsxs)(
                    tS.qT,
                    {
                        className: t6.Nr,
                        children: [(0, l.jsx)(tC.gr, { className: t6.Iv }), (0, l.jsx)(tS.Ay, { className: t6.UU })],
                    },
                    e,
                ),
            ),
    });
}
function t9() {
    return (0, l.jsx)(tH, { title: v.intl.string(v.t.raRLQb), children: (0, l.jsx)(t5, {}) });
}
let t4 = { top: 32, bottom: 24 };
function t3() {
    return (
        a.useEffect(() => {
            (0, tA.X)();
        }, []),
        (0, l.jsx)(Q.F, {
            children: (0, l.jsxs)(tj.B, {
                gap: 48,
                padding: t4,
                children: [
                    (0, l.jsx)(t9, {}),
                    (0, l.jsx)(t1, {}),
                    (0, l.jsx)(tZ, {}),
                    (0, l.jsx)(t2, {}),
                    (0, l.jsx)(tJ, {}),
                ],
            }),
        })
    );
}
var t7 = s(20112);
let t8 = { top: 32, bottom: 48 };
function se(e) {
    let { label: t, ariaLabel: s } = e;
    return (0, l.jsx)("th", {
        scope: "col",
        className: t7.k4,
        "aria-label": s,
        children: (0, l.jsx)(X.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
    });
}
function st() {
    return (0, l.jsx)("tbody", {
        "aria-hidden": !0,
        children: eH()
            .range(0, 10)
            .map((e) =>
                (0, l.jsxs)(
                    "tr",
                    {
                        className: t7.nM,
                        children: [
                            (0, l.jsx)("td", { className: t7.Hn, children: (0, l.jsx)(tS.Ay, { className: t7.Tm }) }),
                            (0, l.jsx)("td", {
                                className: t7.Hn,
                                children: (0, l.jsxs)("div", {
                                    className: t7.AY,
                                    children: [
                                        (0, l.jsx)(tC.gr, { className: t7.xn }),
                                        (0, l.jsx)(tS.Ay, { className: z()(t7.Qq, t7.mO) }),
                                    ],
                                }),
                            }),
                            (0, l.jsx)("td", {
                                className: t7.Hn,
                                children: (0, l.jsx)(tS.Ay, { className: z()(t7.Qq, t7.Mx) }),
                            }),
                            (0, l.jsx)("td", {
                                className: t7.Hn,
                                children: (0, l.jsx)(tS.Ay, { className: z()(t7.Qq, t7.L1) }),
                            }),
                            (0, l.jsx)("td", {
                                className: t7.Hn,
                                children: (0, l.jsxs)("div", {
                                    className: t7.AY,
                                    children: [
                                        (0, l.jsx)(tS.Ay, { className: t7.bQ }),
                                        (0, l.jsxs)("div", {
                                            className: t7.SE,
                                            children: [
                                                (0, l.jsx)(tS.Ay, { className: z()(t7.Qq, t7.L5) }),
                                                (0, l.jsx)(tS.Ay, { className: z()(t7.Qq, t7.Z4) }),
                                            ],
                                        }),
                                        (0, l.jsx)(tS.Ay, { className: t7.x6 }),
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
function ss() {
    return (0, l.jsxs)(tj.B, {
        gap: 16,
        padding: t8,
        children: [
            (0, l.jsxs)("div", {
                className: t7.wx,
                children: [
                    (0, l.jsx)(g.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: v.intl.string(v.t["7ff2Gs"]),
                    }),
                    (0, l.jsx)(tS.Ay, { className: z()(t7.Qq, t7.HH) }),
                ],
            }),
            (0, l.jsx)("div", {
                className: t7.CZ,
                children: (0, l.jsxs)("table", {
                    className: t7.tp,
                    "aria-busy": !0,
                    children: [
                        (0, l.jsxs)("colgroup", {
                            children: [
                                (0, l.jsx)("col", { className: t7.PX }),
                                (0, l.jsx)("col", { className: t7.hK }),
                                (0, l.jsx)("col", { className: t7.iH }),
                                (0, l.jsx)("col", { className: t7.dv }),
                                (0, l.jsx)("col", {}),
                            ],
                        }),
                        (0, l.jsx)("thead", {
                            children: (0, l.jsxs)("tr", {
                                children: [
                                    (0, l.jsx)(se, { label: "#", ariaLabel: v.intl.string(v.t.fi04zk) }),
                                    (0, l.jsx)(se, { label: v.intl.string(v.t.SVexhg) }),
                                    (0, l.jsx)(se, { label: v.intl.string(v.t["9BIezJ"]) }),
                                    (0, l.jsx)(se, { label: v.intl.string(v.t.vHCZwr) }),
                                    (0, l.jsx)(se, { label: v.intl.string(v.t.fBsbex) }),
                                ],
                            }),
                        }),
                        (0, l.jsx)(st, {}),
                    ],
                }),
            }),
        ],
    });
}
var sl = s(798292);
function sa(e) {
    tx.A.setState({ selectedView: e });
}
function si() {
    let e = tx.A.useField("selectedView"),
        t = a.useMemo(
            () => [
                { id: tL.y.FEATURED, label: v.intl.string(v.t.Rism7w) },
                { id: tL.y.TRENDING, label: v.intl.string(v.t.TsWCdW) },
            ],
            [],
        );
    return (0, l.jsxs)("div", {
        className: sl.k,
        children: [
            (0, l.jsxs)(x.Ay, {
                variant: x.Z5.RELATIVE,
                children: [
                    (0, l.jsx)(x.T4, { icon: th.GameControllerIcon }),
                    (0, l.jsx)(j.A, { tabs: t, selectedTab: e, onTabSelect: sa }),
                ],
            }),
            (0, l.jsx)(B.A, {
                children: (0, l.jsx)("div", {
                    className: sl.Q,
                    children: e === tL.y.FEATURED ? (0, l.jsx)(t3, {}) : (0, l.jsx)(ss, {}),
                }),
            }),
        ],
    });
}
var sn = s(272030);
let sr = function () {
    let e = (0, n.bG)([c.A], () => c.A.hasLoadedExperiments),
        t = (0, tm.f)("GlobalDiscovery"),
        s = tu.A.useField("selectedTab"),
        o = s !== tn.GlobalDiscoveryTab.GAMES || t ? s : tn.GLOBAL_DISCOVERY_DEFAULT_TAB,
        u = (function (e) {
            switch (e) {
                case tn.GlobalDiscoveryTab.SERVERS:
                    return (0, l.jsx)(tc, {});
                case tn.GlobalDiscoveryTab.APPS:
                    return (0, l.jsx)(d.default, {});
                case tn.GlobalDiscoveryTab.QUESTS:
                    return (0, l.jsx)(td.default, { topLevelRoute: !1 });
                case tn.GlobalDiscoveryTab.GAMES:
                    return (0, l.jsx)(si, {});
                default:
                    (0, V.xb)(e);
            }
        })(o),
        g = (0, i.zy)();
    return (
        a.useEffect(() => {
            let s = g.pathname,
                l = (0, tg.j)(s);
            l === tn.GlobalDiscoveryTab.GAMES && e && !t
                ? (0, to.bG)(N.BVt.GLOBAL_DISCOVERY_SERVERS)
                : l !== tu.A.getField("selectedTab") && tu.A.setState({ selectedTab: l });
        }, [g.pathname, e, t]),
        a.useEffect(() => {
            e && (0, q.tx)({ selectedTab: o });
        }, [o, e]),
        (0, l.jsxs)("section", {
            className: sn.k,
            children: [(0, l.jsx)(r.HI, { location: (0, tg.t)(o) }), (0, l.jsx)("div", { className: sn.T }), u],
        })
    );
};
