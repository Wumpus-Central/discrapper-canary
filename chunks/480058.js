(s.r(t), s.d(t, { default: () => tK }));
var l = s(477900),
    a = s(582128),
    r = s(806163),
    i = s(17928),
    n = s(726249),
    c = s(736056),
    d = s(869362),
    o = s(664121),
    u = s(548411),
    g = s(297264),
    h = s(711111),
    x = s(770472),
    m = s(737823),
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
async function T(e, t) {
    let { categoryId: s, languageCode: l, offset: a, limit: r, withCounts: i } = t;
    R.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", query: e, categoryId: s, languageCode: l });
    try {
        let t = await E.Bo.get({
                url: N.Rsh.GUILD_DISCOVERY_SEARCH,
                query: {
                    query: e,
                    category_id: s === G.Iq ? null : s,
                    offset: a,
                    limit: r,
                    language_code: l,
                    with_counts: i,
                },
                oldFormErrors: !0,
                rejectWithError: (0, E.fT)(),
            }),
            n = t.body.guilds.map(S.uk),
            c = t.body.total_count;
        if (i) {
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
            guilds: n,
            total: c,
        });
    } catch (a) {
        let t = new p.LG(a);
        (y.jb({ categoryId: s, error: t, willRequestRetry: !1, isRequestRetry: !1 }),
            i && R.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS", query: e, categoryCounts: [] }),
            R.h.dispatch({
                type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
                query: e,
                categoryId: s,
                languageCode: l,
                error: a,
            }));
    }
}
let k = function (e) {
        R.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR", ignoreQueries: e?.ignoreQueries ?? [] });
    },
    F = function () {
        R.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET" });
    };
var L = s(823448),
    w = s(351022);
class D {}
let _ = new (class extends D {
    loadMoreCategoryResults = async (e) => {
        let { query: t, categoryId: s, languageCode: l, offset: a } = e;
        w.A.getIsFetching({ query: t, categoryId: s, languageCode: l }) ||
            (w.A.getIsInitialFetchComplete({ query: t, categoryId: s, languageCode: l }) &&
                (y.br({ withCounts: !1, offset: a }),
                await T(t, { categoryId: s, languageCode: l, offset: a, limit: 12, withCounts: !1 })));
    };
    loadCategoryResults = async (e) => {
        let { query: t, categoryId: s, languageCode: l } = e,
            a = w.A.getIsFetching({ query: t, categoryId: s, languageCode: l }),
            r = w.A.getIsInitialFetchComplete({ query: t, categoryId: s, languageCode: l });
        a ||
            r ||
            (y.br({ withCounts: !1, offset: 0 }),
            await T(t, { categoryId: s, languageCode: l, offset: 0, limit: 12, withCounts: !1 }));
    };
    loadCategoryResultsAndCounts = async (e) => {
        let { query: t, loadId: s, categoryId: l, languageCode: a } = e;
        if ("" === t.trim()) return;
        let r = L.A.getIsFetchingCounts(t),
            i = L.A.getIsFetchingCounts(t);
        r ||
            i ||
            (f.A.setState({ fetchedQuery: t, resultsQuery: "" }),
            y.fd(s, l),
            y.br({ withCounts: !0, offset: 0 }),
            await T(t, { categoryId: l, languageCode: a, offset: 0, limit: 12, withCounts: !0 }),
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
    B = s(979590),
    P = s(783531),
    Y = s(503698),
    z = s.n(Y),
    K = s(269115),
    Z = s(289873),
    W = s(900002),
    J = s(834730),
    X = s(232554),
    $ = s(442433),
    ee = s(736653),
    et = s(573435),
    es = s(635350),
    el = s(785970);
let ea = a.memo(function (e) {
    let { className: t } = e;
    return (0, l.jsx)("div", { className: z()(t, el.En) });
});
var er = s(941143),
    ei = s(717421),
    en = s(775602);
let ec = { mass: 1, tension: 600, friction: 60, clamp: !0 },
    ed = function (e) {
        let { animate: t, state: s, cleanUp: r, children: n } = e,
            c = (0, i.bG)([en.Ay], () => en.Ay.useReducedMotion),
            d = a.useMemo(
                () =>
                    !1 === t || c
                        ? { opacity: 1 }
                        : s === X.wL.ENTERED || s === X.wL.MOUNTED
                          ? { from: { opacity: 0 }, to: { opacity: 1 }, config: ec }
                          : {
                                from: { opacity: 1 },
                                to: { opacity: 0 },
                                config: ec,
                                onRest: () => {
                                    r();
                                },
                            },
                [t, r, c, s],
            ),
            o = (0, ei.z)(d);
        return (0, l.jsx)(er.animated.div, { style: o, className: el.Hp, children: n });
    };
var eo = s(714991),
    eu = s(776231),
    eg = s(486020),
    eh = s(939249),
    ex = s(26430),
    em = s(517905),
    ej = s(421407);
let eA = function (e) {
    let { className: t, guildId: s } = e,
        r = a.useRef(null),
        i = a.useCallback((e, t) => {
            (e.stopPropagation(), t.onClick(e));
        }, []);
    return (0, l.jsx)(em.A, {
        guildId: s,
        position: "left",
        targetElementRef: r,
        children: (e) =>
            (0, l.jsx)(eh.D, {
                ...e,
                innerRef: r,
                className: t,
                onClick: (t) => i(t, e),
                children: (0, l.jsx)("div", {
                    className: ej.K,
                    children: (0, l.jsx)(ex._, { size: "xs", color: "currentColor" }),
                }),
            }),
    });
};
var ef = s(59329),
    ey = s(937495),
    eC = s(517061);
function eS(e) {
    let { guild: t, onClick: r, onView: i } = e,
        [n, c] = a.useState(!1),
        [d, o] = a.useState(!1),
        [u, h] = a.useState(!1),
        x = a.useRef(null),
        m = a.useCallback(async () => {
            o(!0);
            try {
                await r(t.id);
            } finally {
                o(!1);
            }
        }, [t.id, r]),
        j = a.useCallback(
            (e) => {
                e && !n && (c(!0), i?.(t.id));
            },
            [t.id, n, i],
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
                innerRef: x,
                onChange: j,
                active: !n,
                threshold: 0.55,
                children: (0, l.jsxs)(es.A, {
                    ref: x,
                    className: ef.Nr,
                    onClick: m,
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
                                        onLoad: () => h(!0),
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
                                (0, l.jsx)(J.E, {
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
                                                    (0, l.jsx)(J.E, {
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
                                                    (0, l.jsx)(J.E, {
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
        r = (0, i.bG)([w.A], () => w.A.getGuild(t));
    return null == r ? null : (0, l.jsx)(eS, { guild: r, onClick: s, onView: a });
}
function eI(e) {
    let { guildId: t, index: s, onClick: r, onView: i } = e,
        n = a.useRef(null == t),
        c = a.useCallback(
            (e, t, s, a) =>
                null == t.guildId
                    ? (0, l.jsx)(ed, { state: s, cleanUp: a, children: (0, l.jsx)(ea, { className: ef.qf }) }, e)
                    : (0, l.jsx)(
                          ed,
                          {
                              state: s,
                              cleanUp: a,
                              animate: n.current,
                              children: (0, l.jsx)(eb, { guildId: t.guildId, onClick: r, onView: i }),
                          },
                          e,
                      ),
            [r, i],
        ),
        d = a.useCallback((e) => e.guildId ?? `${e.index}`, []),
        o = a.useMemo(() => [{ guildId: t, index: s }], [t, s]);
    return (0, l.jsx)("div", {
        className: ef.NK,
        children: (0, l.jsx)(X.F, { items: o, renderItem: c, getItemKey: d }),
    });
}
let eN = a.memo(eb);
var ev = s(401034);
let eE = { page: N.liQ.GUILD_DISCOVERY, object: N.ZSU.CARD, section: N.JJy.DISCOVER_POPULAR };
function ep(e) {
    let { tab: t, guildIds: s, loading: r, onScroll: i, onGuildCardClick: n, onGuildCardSeen: c } = e,
        d = (0, S.kc)(t),
        o = (0, S.Ot)(t),
        u = (0, S.UW)(t),
        h = (0, S.Ub)(t),
        x = a.useMemo(() => {
            let e = r ? 30 : s.length,
                t = [];
            for (let a = 0; a < e; a++)
                t.push(
                    (0, l.jsx)(
                        eI,
                        { guildId: s[a] ?? null, index: a, onClick: (e) => n(e, a, h, eE), onView: (e) => c(e, h) },
                        s[a] ?? a,
                    ),
                );
            return t;
        }, [h, s, r, n, c]);
    return (0, l.jsxs)(P.A, {
        onScroll: i,
        children: [
            (0, l.jsx)(O.A, { title: d, description: o, children: (0, l.jsx)(H.A, {}) }),
            (0, l.jsx)(B.A, {
                children: (0, l.jsxs)(Q.F, {
                    children: [
                        (0, l.jsx)(g.D, {
                            className: ev.G,
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: u,
                        }),
                        (0, l.jsx)(Q.F, { children: (0, l.jsx)("div", { className: ev.Q, children: x }) }),
                    ],
                }),
            }),
        ],
    });
}
var eR = s(66834),
    eG = s(101277),
    eT = s(661531),
    ek = s(821609),
    eF = s(192308),
    eL = s(792749);
let ew = function (e) {
    let { hasHub: t } = e;
    return (0, l.jsxs)("div", {
        className: eL.kL,
        children: [
            (0, l.jsx)("div", {
                className: eL.zc,
                children: (0, l.jsx)(eG.P, { size: "md", color: eT.A.colors.WHITE.css }),
            }),
            (0, l.jsx)(J.E, {
                color: "text-strong",
                variant: "text-lg/semibold",
                className: eL.wx,
                children: t ? v.intl.string(v.t.hsSHh8) : v.intl.string(v.t.Wf6iij),
            }),
            (0, l.jsx)(J.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: eL.__invalid_description,
                children: t ? v.intl.string(v.t.FZ2J3Y) : v.intl.string(v.t.TvHcv6),
            }),
            (0, l.jsx)("div", { className: eL.rQ }),
            (0, l.jsx)(ek.$, {
                fullWidth: !0,
                variant: t ? "secondary" : "active",
                onClick: () =>
                    (0, eF.openModalLazy)(async () => {
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
var eD = s(71393),
    e_ = s(118331);
let eU = function (e) {
    let { onScroll: t } = e,
        s = (0, i.yK)([eD.A], () => eD.A.getGuildsArray().filter((e) => e.features.has(N.GuildFeatures.HUB))),
        r = a.useMemo(
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
    return (0, l.jsxs)(P.A, {
        onScroll: t,
        children: [
            (0, l.jsx)(O.A, {
                title: v.intl.string(v.t.X5xPlb),
                description: v.intl.string(v.t["F/IQCI"]),
                children: (0, l.jsx)(H.A, {}),
            }),
            (0, l.jsxs)(B.A, {
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
                                              r.map((e) =>
                                                  (0, l.jsx)(
                                                      eS,
                                                      { guild: e, onClick: () => eR.A.transitionToGuildSync(e.id) },
                                                      e.id,
                                                  ),
                                              ),
                                              (0, l.jsx)(ew, { hasHub: !0 }),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)("div", { className: ev.Q, children: (0, l.jsx)(ew, { hasHub: !1 }) }),
                    (0, l.jsx)("div", { className: e_.yF }),
                    (0, l.jsxs)("div", {
                        className: e_.ed,
                        children: [
                            (0, l.jsxs)(J.E, {
                                className: e_.Qq,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: [v.intl.string(v.t.O1k9XX), " "],
                            }),
                            (0, l.jsx)(J.E, {
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
    let { onScroll: t, onGuildCardSeen: s, onGuildCardClick: r } = e,
        n = (0, i.bG)([w.A], () => w.A.getGuildIds({ categoryId: G.Iq }) ?? G.VX),
        c = (0, i.bG)([w.A], () => w.A.getIsFetching({ categoryId: G.Iq }) ?? !0);
    return (
        a.useEffect(() => {
            M.A.fetchFeaturedGuilds();
        }, []),
        (0, l.jsx)(ep, {
            tab: G.o.FEATURED,
            guildIds: n,
            loading: c,
            onScroll: t,
            onGuildCardSeen: s,
            onGuildCardClick: r,
        })
    );
}
function eV(e) {
    let { tab: t, onScroll: s, onGuildCardSeen: r, onGuildCardClick: n } = e,
        c = (0, S.Ub)(t),
        d = (0, i.bG)([w.A], () => w.A.getGuildIds({ categoryId: c }) ?? G.VX),
        o = (0, i.bG)([w.A], () => w.A.getIsFetching({ categoryId: c }) ?? !0);
    return (
        a.useEffect(() => {
            M.A.fetchCategoryFeaturedGuilds({ categoryId: c });
        }, [c]),
        (0, l.jsx)(ep, { tab: t, guildIds: d, loading: o, onScroll: s, onGuildCardSeen: r, onGuildCardClick: n })
    );
}
function eM(e) {
    let { selectedTab: t, onScroll: s, onGuildCardSeen: r, onGuildCardClick: i } = e;
    switch (
        (a.useEffect(() => {
            let e = (0, S.Ub)(t);
            (0, q.np)({ selectedCategoryId: e });
        }, [t]),
        t)
    ) {
        case G.o.FEATURED:
            return (0, l.jsx)(eq, { tab: t, onScroll: s, onGuildCardClick: i, onGuildCardSeen: r });
        case G.o.GAMING:
        case G.o.MUSIC:
        case G.o.ENTERTAINMENT:
        case G.o.TECH:
        case G.o.EDUCATION:
            return (0, l.jsx)(eV, { tab: t, onScroll: s, onGuildCardClick: i, onGuildCardSeen: r }, t);
        case G.o.HUBS:
            return (0, l.jsx)(eU, { onScroll: s });
        default:
            (0, V.xb)(t);
    }
}
var eQ = s(435558),
    eH = s.n(eQ),
    eO = s(92008),
    eB = s(770178),
    eP = s(174459),
    eY = s(773669),
    ez = s(997590);
function eK(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [ez.A];
    return e === G.Iq ? v.intl.string(v.t.Omu0fS) : t.getCategoryName(e);
}
function eZ(e) {
    let { categoryId: t } = e;
    return (0, i.bG)([ez.A], () => eK(t, [ez.A]));
}
s(667532);
var eW = s(499118);
function eJ() {
    let e = f.A.useField("fetchedQuery"),
        t = f.A.useField("resultsInitialCategoryId"),
        s = f.A.useField("languageCode"),
        l = (0, i.bG)([w.A], () => (null == t ? 0 : (w.A.getTotal({ categoryId: t, query: e, languageCode: s }) ?? 0))),
        r = (0, i.bG)([w.A], () => w.A.getTotal({ categoryId: G.Iq, query: e, languageCode: s }) ?? 0),
        n = (0, i.bG)([eW.A], () => eW.A.getVisibleTabs());
    return a.useMemo(() => {
        if (null == n) return null;
        if (null == t) return n;
        let e = [],
            s = new Set();
        for (let [t, l] of n) (s.add(t), e.push([t, l]));
        let a = !1;
        return (
            s.has(G.Iq) || (s.add(G.Iq), e.unshift([G.Iq, r]), (a = !0)),
            s.has(t) || (s.add(t), e.push([t, l]), (a = !0)),
            a ? e : n
        );
    }, [n, t, r, l]);
}
var eX = s(166976);
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
    let { loadId: t, categoryId: s, count: r } = e,
        i = a.useCallback(() => {
            e$({ categoryId: s, loadId: t });
        }, [s, t]),
        n = f.A.useField("categoryId") === s,
        c = r.toLocaleString(eY.default.locale),
        d = eZ({ categoryId: s });
    return (0, l.jsxs)(eh.D, {
        onClick: i,
        className: z()(eX.L1, { [eX.wH]: n }),
        children: [
            (0, l.jsx)(J.E, { className: eX.UU, variant: "text-sm/medium", color: "text-strong", children: d }),
            (0, l.jsx)(J.E, { className: eX.U9, variant: "text-sm/normal", color: "text-muted", children: c }),
        ],
    });
}
let e1 = function (e) {
    let { loadId: t } = e,
        s = eJ();
    return null == s
        ? null
        : (0, l.jsx)("div", {
              className: eX.LZ,
              children: s.map((e) => {
                  let [s, a] = e;
                  return (0, l.jsx)(e0, { loadId: t, categoryId: s, count: a }, s);
              }),
          });
};
var e2 = s(191711),
    e5 = s(226658);
function e6(e) {
    let { loadId: t } = e,
        s = f.A.useField("categoryId"),
        r = eJ(),
        n = eZ({ categoryId: s }),
        c = a.useCallback(
            (e) => {
                e$({ loadId: t, categoryId: Number(e) });
            },
            [t],
        ),
        d = (function (e) {
            let { categoryIds: t } = e;
            return (0, i.cf)([ez.A], () => {
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
                    null == r
                        ? []
                        : r.map((e) => {
                              let [t] = e;
                              return t;
                          }),
                [r],
            ),
        }),
        o = a.useMemo(
            () =>
                null == r
                    ? []
                    : r.map((e) => {
                          let [t, s] = e;
                          return { id: `${t}`, name: d[t] ?? "", count: s };
                      }),
            [r, d],
        );
    return null == r
        ? null
        : (0, l.jsxs)("div", {
              className: e5.k,
              children: [
                  (0, l.jsx)(J.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: v.intl.string(v.t.f09BQJ),
                  }),
                  (0, l.jsx)(e2.A, {
                      items: o,
                      title: n,
                      onSelect: c,
                      selected: `${s}`,
                      "aria-label": v.intl.string(v.t.Ng5cTK),
                      variant: e2.H.FILLED,
                  }),
              ],
          });
}
var e4 = s(468646);
let e3 = function (e) {
    let { loadId: t } = e,
        s = f.A.useField("categoryId"),
        r = (0, i.bG)([ez.A], () => ez.A.getCategoryName(s)),
        n = a.useCallback(() => {
            (f.A.setState({ categoryId: G.Iq }),
                _.loadCategoryResults({
                    loadId: t,
                    categoryId: G.Iq,
                    query: f.A.getField("fetchedQuery"),
                    languageCode: f.A.getField("languageCode"),
                }));
        }, [t]),
        c = s === G.Iq ? v.intl.string(v.t.Ivw1Is) : v.intl.formatToPlainString(v.t["+1WAFb"], { categoryName: r }),
        d = s === G.Iq ? v.intl.string(v.t.aXvEjd) : v.intl.format(v.t.XLioqn, { onClick: n });
    return (0, l.jsxs)("div", {
        className: e4.k,
        children: [
            (0, l.jsx)(g.D, { variant: "heading-xl/semibold", className: e4.w, children: c }),
            (0, l.jsx)(J.E, { variant: "text-md/normal", color: "text-default", children: d }),
        ],
    });
};
var e9 = s(890497),
    e7 = s(118216);
function e8(e) {
    let { loadId: t } = e,
        s = (0, i.bG)([eY.default], () => (0, S.Kv)([eY.default])),
        r = f.A.useField("languageCode"),
        n = a.useCallback(
            (e) => {
                f.A.setState({ languageCode: e });
                let s = f.A.getField("fetchedQuery");
                (k({ ignoreQueries: [s] }),
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
        children: (0, l.jsx)(e9.Z, {
            selectionMode: "single",
            label: v.intl.string(v.t.Ng5cTK),
            hideLabel: !0,
            value: r ?? s,
            options: c,
            onSelectionChange: n,
        }),
    });
}
var te = s(413185);
let tt = Object.freeze({ top: 0, bottom: 0, left: 32, right: 202 }),
    ts = Object.freeze({ top: 0, bottom: 0, left: 32, right: 32 }),
    tl = { page: N.liQ.GUILD_DISCOVERY, object: N.ZSU.CARD, section: N.JJy.DISCOVER_SEARCH },
    ta = eH().throttle(y.Cf, 1e3, { leading: !1, trailing: !0 });
function tr(e) {
    let { loadId: t, onGuildCardSeen: s, onGuildCardClick: r } = e,
        {
            guildIds: n,
            loading: c,
            searchResultsQuery: d,
            loadMore: o,
            searchCategoryId: u,
        } = (function (e) {
            let { loadId: t } = e,
                s = f.A.useField("fetchedQuery"),
                l = f.A.useField("categoryId"),
                r = f.A.useField("languageCode"),
                n = a.useMemo(() => ({ categoryId: l, query: s, languageCode: r }), [l, r, s]),
                c = (0, i.bG)([w.A], () => w.A.getGuildIds(n) ?? G.VX),
                d = (0, i.bG)([w.A], () => w.A.getIsFetching(n) ?? !1),
                o = f.A.useField("resultsQuery"),
                u = o !== s,
                g = a.useCallback(() => {
                    let e = w.A.getGuildIds(n),
                        s = w.A.getTotal(n);
                    if (null == e || null == s) return;
                    let l = w.A.getIsFetching(n),
                        a = w.A.getIsInitialFetchComplete(n);
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
                }, [t, n]);
            return a.useMemo(
                () => ({ guildIds: c, loading: u || d, searchResultsQuery: o, loadMore: g, searchCategoryId: l }),
                [c, u, d, o, g, l],
            );
        })({ loadId: t }),
        g = 0 === n.length && !c,
        h = a.useContext(eP.AnalyticsContext),
        [x, m] = a.useState((0, S.YP)()),
        [j, A] = a.useState(!0),
        y = a.useRef(j),
        [C, b] = a.useState(3),
        I = a.useRef(C),
        N = a.useRef(null),
        v = a.useCallback(
            (e) => {
                null == e || g || c || (336 * (n.length / C) <= e.height && o());
            },
            [g, c, n.length, C, o],
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
        p = (0, eB.w)(E, [j, v]);
    (a.useEffect(() => {
        m((0, S.YP)());
    }, [d]),
        a.useEffect(() => {
            ta({
                loadId: t,
                searchId: x,
                query: d,
                guildResults: n.map(w.A.getGuild).filter(V.Vq),
                analyticsContext: h,
                categoryId: u,
            });
        }, [h, n, t, u, x, d]));
    let R = a.useCallback((e) => s(e, u), [s, u]),
        T = a.useMemo(() => (c ? [n.length, 0] : [n.length]), [n.length, c]),
        k = a.useCallback(
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
                                            children: [(0, l.jsx)(e6, { loadId: t }), (0, l.jsx)(e8, { loadId: t })],
                                        }),
                                    g && (0, l.jsx)(e3, { loadId: t }),
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
        F = a.useCallback(
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
                        return n[t];
                    case 1:
                        return "loading";
                    default:
                        throw Error(`[getItemKey] Failed for section: ${e}`);
                }
            },
            [n],
        ),
        D = a.useCallback((e) => {
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
                await r(e, t, s, l);
                let a = N.current?.getScrollerState()?.scrollTop;
                null != a && f.A.setState({ scrollPosition: a });
            },
            [r],
        ),
        q = a.useCallback(
            (e, t, s, a) => {
                if (0 !== e) return null;
                {
                    let e = n[t];
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
            [n, U, R, u],
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
            sections: T,
            columns: C,
            itemGutter: 16,
            padding: Q,
            renderItem: q,
            renderSection: k,
            getSectionHeight: F,
            getItemKey: L,
            getItemHeight: D,
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
var ti = s(488995),
    tn = s(877149);
function tc() {
    let e,
        t,
        s,
        r = a.useRef((0, S.YP)()),
        { onScroll: i, scrollPosition: n, resetScrollPosition: c } = (0, h.G)(),
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
        T = !G.R0.has(E),
        {
            searchQuery: L,
            onSearchTextChange: w,
            onClearSearch: D,
            onSearchSubmit: q,
            isSearchVisible: V,
        } = (function (e) {
            let { loadId: t } = e,
                s = b.A.useField("isSearchVisible"),
                l = f.A.useField("query");
            a.useEffect(() => {
                (0, U.Mu)();
            }, []);
            let r = a.useCallback((e) => {
                f.A.setState({ query: e });
            }, []);
            return {
                searchQuery: l,
                onSearchTextChange: r,
                onClearSearch: a.useCallback(() => {
                    (y.gp(t),
                        k(),
                        F(),
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
                    k();
                    let l = f.A.getField("languageCode"),
                        a = f.A.getField("categoryId");
                    (f.A.setState({ resultsInitialCategoryId: a }),
                        b.A.setState({ isSearchVisible: !0 }),
                        _.loadCategoryResultsAndCounts({ loadId: t, categoryId: a, query: e, languageCode: l }));
                }, [t]),
                isSearchVisible: s,
            };
        })({ loadId: r.current }),
        M = b.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: Q,
            onCollapsedSearchBarClick: H,
            onSearchBarBlur: O,
            tabsClassName: B,
        } = (0, x.p)({
            isSearchBarVisible: T,
            isSearchBarEmpty: "" === L.trim(),
            searchBarState: M,
            setSearchBarState: (e) => b.A.setState({ searchBarState: e }),
        }),
        P = f.A.useField("fetchedQuery"),
        Y = a.useCallback(
            (e) => {
                (p(e), V && D());
            },
            [V, D, p],
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
                r = a.useCallback(
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
            return a.useMemo(() => ({ onGuildCardSeen: l, onGuildCardClick: r }), [r, l]);
        })({ guildDiscoveryCardSeenManager: K.current, loadId: r.current });
    return (
        a.useEffect(() => {
            K.current.flushSeenGuilds(r.current);
        }, [R]),
        a.useEffect(() => {
            c();
        }, [E, c]),
        a.useEffect(() => {
            V || f.A.setState({ scrollPosition: null });
        }, [V]),
        (0, l.jsxs)("div", {
            className: tn.kL,
            children: [
                (0, l.jsxs)(m.Ay, {
                    variant: V ? m.Z5.RELATIVE : m.Z5.OVERLAY,
                    children: [
                        !V && (0, l.jsx)(m.ns, { scrollPosition: n }),
                        V ? (0, l.jsx)(m.XQ, { icon: u.Z, onClick: D }) : (0, l.jsx)(m.T4, { icon: o.R }),
                        !V &&
                            (0, l.jsx)(j.A, {
                                className: B,
                                tabs: z,
                                selectedTab: E,
                                onTabSelect: Y,
                                onAvailableWidthChange: Q,
                            }),
                        V &&
                            (0, l.jsx)(g.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                className: tn.ov,
                                children: v.intl.format(v.t.zHdzqW, { query: P }),
                            }),
                        T &&
                            (0, l.jsx)(A.A, {
                                query: L,
                                placeholder: v.intl.string(v.t["5h0QOP"]),
                                onTextChange: w,
                                onClear: D,
                                onSubmit: q,
                                onCollapsedClick: H,
                                state: V ? ti.GlobalDiscoverySearchBarState.DEFAULT : M,
                                onBlur: O,
                            }),
                    ],
                }),
                V
                    ? (0, l.jsx)(tr, { loadId: r.current, onGuildCardClick: W, onGuildCardSeen: Z })
                    : (0, l.jsx)(eM, { selectedTab: E, onScroll: i, onGuildCardClick: W, onGuildCardSeen: Z }),
            ],
        })
    );
}
var td = s(455030),
    to = s(976860),
    tu = s(726845),
    tg = s(285395),
    th = s(185951),
    tx = s(687966),
    tm = s(567272),
    tj = s(331322),
    tA = s(459746),
    tf = s(799699),
    ty = s(326369),
    tC = s(585205);
function tS(e) {
    let { children: t, skeletonTitleWidth: s } = e;
    return (0, l.jsxs)(tj.B, {
        gap: 12,
        "aria-busy": !0,
        children: [(0, l.jsx)(tf.Ay, { className: tC.K, width: s }), t],
    });
}
function tb(e) {
    let { title: t, children: s } = e;
    return (0, l.jsxs)(tj.B, {
        as: "section",
        gap: 12,
        children: [(0, l.jsx)(g.D, { variant: "heading-lg/semibold", lineClamp: 1, children: t }), s],
    });
}
var tI = s(523754),
    tN = s(142553);
function tv() {
    return (0, l.jsx)(ty.A, {
        gap: 16,
        children: eH()
            .range(0, 8)
            .map((e) =>
                (0, l.jsxs)(
                    tf.qT,
                    {
                        className: tN.Nr,
                        children: [(0, l.jsx)(tA.gr, { className: tN.Iv }), (0, l.jsx)(tf.Ay, { className: tN.UU })],
                    },
                    e,
                ),
            ),
    });
}
function tE() {
    return (0, l.jsx)(tS, { skeletonTitleWidth: 240, children: (0, l.jsx)(tv, {}) });
}
var tp = s(457346);
function tR() {
    return (0, l.jsx)(ty.A, {
        gap: 16,
        children: eH()
            .range(0, 8)
            .map((e) =>
                (0, l.jsxs)(
                    tf.qT,
                    {
                        className: tp.Nr,
                        children: [
                            (0, l.jsx)(tf.Ay, { className: tp.Tp }),
                            (0, l.jsx)(tA.gr, { className: tp.Iv }),
                            (0, l.jsxs)("div", {
                                className: tp.pq,
                                children: [
                                    (0, l.jsx)(tf.Ay, { className: tp.UU }),
                                    (0, l.jsx)(tf.Ay, { className: tp.yz }),
                                ],
                            }),
                        ],
                    },
                    e,
                ),
            ),
    });
}
function tG() {
    return (0, l.jsx)(tb, { title: v.intl.string(v.t.JMTGC3), children: (0, l.jsx)(tR, {}) });
}
var tT = s(595305);
function tk() {
    return (0, l.jsx)(ty.A, {
        gap: 16,
        children: eH()
            .range(0, 5)
            .map((e) =>
                (0, l.jsxs)(
                    tf.qT,
                    {
                        className: tT.Nr,
                        children: [
                            (0, l.jsx)(tf.Ay, { className: tT.Tp }),
                            (0, l.jsx)(tA.gr, { className: tT.Iv }),
                            (0, l.jsxs)("div", {
                                className: tT.pq,
                                children: [
                                    (0, l.jsx)(tf.Ay, { className: tT.UU }),
                                    (0, l.jsx)(tf.Ay, { className: tT.h5 }),
                                    (0, l.jsx)(tf.Ay, { className: tT.vL }),
                                ],
                            }),
                        ],
                    },
                    e,
                ),
            ),
    });
}
function tF() {
    return (0, l.jsx)(tb, { title: v.intl.string(v.t.Pc6FRV), children: (0, l.jsx)(tk, {}) });
}
function tL() {
    return (0, l.jsx)(tb, { title: v.intl.string(v.t.qpGTIa), children: (0, l.jsx)(tR, {}) });
}
var tw = s(2014);
function tD() {
    return (0, l.jsx)(ty.A, {
        gap: 16,
        children: eH()
            .range(0, 10)
            .map((e) =>
                (0, l.jsxs)(
                    tf.qT,
                    {
                        className: tw.Nr,
                        children: [(0, l.jsx)(tA.gr, { className: tw.Iv }), (0, l.jsx)(tf.Ay, { className: tw.UU })],
                    },
                    e,
                ),
            ),
    });
}
function t_() {
    return (0, l.jsx)(tb, { title: v.intl.string(v.t.raRLQb), children: (0, l.jsx)(tD, {}) });
}
let tU = { top: 32, bottom: 24 };
function tq() {
    return (0, l.jsx)(Q.F, {
        children: (0, l.jsxs)(tj.B, {
            gap: 48,
            padding: tU,
            children: [
                (0, l.jsx)(t_, {}),
                (0, l.jsx)(tF, {}),
                (0, l.jsx)(tE, {}),
                (0, l.jsx)(tL, {}),
                (0, l.jsx)(tG, {}),
            ],
        }),
    });
}
var tV = s(20112);
let tM = { top: 32, bottom: 48 };
function tQ(e) {
    let { label: t, ariaLabel: s } = e;
    return (0, l.jsx)("th", {
        scope: "col",
        className: tV.k4,
        "aria-label": s,
        children: (0, l.jsx)(J.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
    });
}
function tH() {
    return (0, l.jsx)("tbody", {
        "aria-hidden": !0,
        children: eH()
            .range(0, 10)
            .map((e) =>
                (0, l.jsxs)(
                    "tr",
                    {
                        className: tV.nM,
                        children: [
                            (0, l.jsx)("td", { className: tV.Hn, children: (0, l.jsx)(tf.Ay, { className: tV.Tm }) }),
                            (0, l.jsx)("td", {
                                className: tV.Hn,
                                children: (0, l.jsxs)("div", {
                                    className: tV.AY,
                                    children: [
                                        (0, l.jsx)(tA.gr, { className: tV.xn }),
                                        (0, l.jsx)(tf.Ay, { className: z()(tV.Qq, tV.mO) }),
                                    ],
                                }),
                            }),
                            (0, l.jsx)("td", {
                                className: tV.Hn,
                                children: (0, l.jsx)(tf.Ay, { className: z()(tV.Qq, tV.Mx) }),
                            }),
                            (0, l.jsx)("td", {
                                className: tV.Hn,
                                children: (0, l.jsx)(tf.Ay, { className: z()(tV.Qq, tV.L1) }),
                            }),
                            (0, l.jsx)("td", {
                                className: tV.Hn,
                                children: (0, l.jsxs)("div", {
                                    className: tV.AY,
                                    children: [
                                        (0, l.jsx)(tf.Ay, { className: tV.bQ }),
                                        (0, l.jsxs)("div", {
                                            className: tV.SE,
                                            children: [
                                                (0, l.jsx)(tf.Ay, { className: z()(tV.Qq, tV.L5) }),
                                                (0, l.jsx)(tf.Ay, { className: z()(tV.Qq, tV.Z4) }),
                                            ],
                                        }),
                                        (0, l.jsx)(tf.Ay, { className: tV.x6 }),
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
function tO() {
    return (0, l.jsxs)(tj.B, {
        gap: 16,
        padding: tM,
        children: [
            (0, l.jsxs)("div", {
                className: tV.wx,
                children: [
                    (0, l.jsx)(g.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: v.intl.string(v.t["7ff2Gs"]),
                    }),
                    (0, l.jsx)(tf.Ay, { className: z()(tV.Qq, tV.HH) }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tV.CZ,
                children: (0, l.jsxs)("table", {
                    className: tV.tp,
                    "aria-busy": !0,
                    children: [
                        (0, l.jsxs)("colgroup", {
                            children: [
                                (0, l.jsx)("col", { className: tV.PX }),
                                (0, l.jsx)("col", { className: tV.hK }),
                                (0, l.jsx)("col", { className: tV.iH }),
                                (0, l.jsx)("col", { className: tV.dv }),
                                (0, l.jsx)("col", {}),
                            ],
                        }),
                        (0, l.jsx)("thead", {
                            children: (0, l.jsxs)("tr", {
                                children: [
                                    (0, l.jsx)(tQ, { label: "#", ariaLabel: v.intl.string(v.t.fi04zk) }),
                                    (0, l.jsx)(tQ, { label: v.intl.string(v.t.SVexhg) }),
                                    (0, l.jsx)(tQ, { label: v.intl.string(v.t["9BIezJ"]) }),
                                    (0, l.jsx)(tQ, { label: v.intl.string(v.t.vHCZwr) }),
                                    (0, l.jsx)(tQ, { label: v.intl.string(v.t.fBsbex) }),
                                ],
                            }),
                        }),
                        (0, l.jsx)(tH, {}),
                    ],
                }),
            }),
        ],
    });
}
var tB = s(798292);
function tP(e) {
    tm.A.setState({ selectedView: e });
}
function tY() {
    let e = tm.A.useField("selectedView"),
        t = a.useMemo(
            () => [
                { id: tI.y.FEATURED, label: v.intl.string(v.t.Rism7w) },
                { id: tI.y.TRENDING, label: v.intl.string(v.t.TsWCdW) },
            ],
            [],
        );
    return (0, l.jsxs)("div", {
        className: tB.k,
        children: [
            (0, l.jsxs)(m.Ay, {
                variant: m.Z5.RELATIVE,
                children: [
                    (0, l.jsx)(m.T4, { icon: tx.GameControllerIcon }),
                    (0, l.jsx)(j.A, { tabs: t, selectedTab: e, onTabSelect: tP }),
                ],
            }),
            (0, l.jsx)(P.A, {
                children: (0, l.jsx)("div", {
                    className: tB.Q,
                    children: e === tI.y.FEATURED ? (0, l.jsx)(tq, {}) : (0, l.jsx)(tO, {}),
                }),
            }),
        ],
    });
}
var tz = s(272030);
let tK = function () {
    let e = (0, i.bG)([c.A], () => c.A.hasLoadedExperiments),
        t = (0, th.f)("GlobalDiscovery"),
        s = tu.A.useField("selectedTab"),
        o = s !== ti.GlobalDiscoveryTab.GAMES || t ? s : ti.GLOBAL_DISCOVERY_DEFAULT_TAB,
        u = (function (e) {
            switch (e) {
                case ti.GlobalDiscoveryTab.SERVERS:
                    return (0, l.jsx)(tc, {});
                case ti.GlobalDiscoveryTab.APPS:
                    return (0, l.jsx)(d.default, {});
                case ti.GlobalDiscoveryTab.QUESTS:
                    return (0, l.jsx)(td.default, { topLevelRoute: !1 });
                case ti.GlobalDiscoveryTab.GAMES:
                    return (0, l.jsx)(tY, {});
                default:
                    (0, V.xb)(e);
            }
        })(o),
        g = (0, r.zy)();
    return (
        a.useEffect(() => {
            let s = g.pathname,
                l = (0, tg.j)(s);
            l === ti.GlobalDiscoveryTab.GAMES && e && !t
                ? (0, to.bG)(N.BVt.GLOBAL_DISCOVERY_SERVERS)
                : l !== tu.A.getField("selectedTab") && tu.A.setState({ selectedTab: l });
        }, [g.pathname, e, t]),
        a.useEffect(() => {
            e && (0, q.tx)({ selectedTab: o });
        }, [o, e]),
        (0, l.jsxs)("section", {
            className: tz.k,
            children: [(0, l.jsx)(n.HI, { location: (0, tg.t)(o) }), (0, l.jsx)("div", { className: tz.T }), u],
        })
    );
};
