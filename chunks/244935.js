i.d(t, { A: () => tx, u: () => tu });
var n = i(477900),
    s = i(582128),
    l = i(503698),
    r = i.n(l),
    a = i(17928),
    o = i(885574),
    d = i(834730),
    c = i(429913),
    u = i(277984),
    g = i(840387),
    m = i(201718),
    x = i(615405),
    f = i(633075),
    h = i(646976),
    I = i(289173),
    p = i(311043),
    A = i(569926),
    j = i(958805),
    E = i(61881),
    S = i(435558),
    T = i(196765),
    v = i(540185),
    N = i(282435);
let b = (0, S.sampleSize)(N.sx, N.sx.length),
    w = (0, T.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (i, n, s) => {
            let l = new Set(s.map((e) => e.applicationId));
            for (let s of (e({
                stack: [...i.filter((e) => !l.has(e)), ...b],
                wishlistStack: [...n.filter((e) => !l.has(e)), ...b],
            }),
            Object.values(v.x)))
                t().setNext(6, s);
        },
        setNext: (e, i) => {
            let n = t().getNext(e, i);
            t()._setGameIds(i, n);
            let s = t().peekNext(7, i);
            t()._setPeekedGameIds(i, s);
        },
        getNext: (e, i) => {
            let n = i === v.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                s = n.slice(0, e),
                l = n.slice(e);
            return t()._setStack(i, l), s;
        },
        peekNext: (e, i) => (i === v.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, i) => {
            let n = t().gameIds[i] ?? [],
                s = n.indexOf(e);
            if (-1 === s) return;
            let l = [...n];
            l.splice(s, 1);
            let r = t().getNext(1, i),
                a = t().peekNext(7, i);
            t()._setGameIds(i, [...l, ...r]), t()._setPeekedGameIds(i, [...a, ...r]);
        },
        bumpMultiple: (e, i) => {
            let n = (t().gameIds[i] ?? []).filter((t) => !e.includes(t)),
                s = t().getNext(6 - n.length, i),
                l = t().peekNext(7, i);
            t()._setGameIds(i, [...n, ...s]), t()._setPeekedGameIds(i, [...l, ...s]);
        },
        remove: (e, i) => {
            let n = (i === v.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(i, n), t()._setPeekedGameIds(i, t().peekNext(7, i));
        },
        _setGameIds: (t, i) => {
            e((e) => ({ gameIds: { ...e.gameIds, [t]: i } }));
        },
        _setStack: (t, i) => {
            t === v.x.WANT_TO_PLAY_GAMES ? e({ wishlistStack: i }) : e({ stack: i });
        },
        _setPeekedGameIds: (t, i) => {
            e((e) => ({ peekedGameIds: { ...e.peekedGameIds, [t]: i } }));
        },
    }));
function C(e) {
    let { bump: t, bumpMultiple: i, gameIds: n } = w();
    !(function (e) {
        let { remove: t, peekedGameIds: i } = w(),
            n = s.useMemo(() => i[e] ?? [], [i, e]);
        (0, A.x)(n);
        let l = (0, a.yK)([p.A], () => n.map((e) => p.A.isFetching(e)));
        s.useEffect(() => {
            for (let i of n) {
                let n = p.A.didFetchingFail(i),
                    s = p.A.hasNoData(i),
                    l = !!p.A.getGame(i),
                    r = null != p.A.getCoverImageUrl(i);
                (n || s || (l && !r)) && t(i, e);
            }
        }, [n, t, e, l]);
    })(e);
    let l = s.useMemo(() => n[e] ?? [], [n, e]),
        r = s.useCallback(
            (i) => {
                t(i, e);
            },
            [t, e],
        ),
        o = (0, a.yK)([p.A], () => l.map((e) => p.A.isFetching(e)));
    s.useEffect(() => {
        let t = l.filter((e) => {
            let t = p.A.didFetchingFail(e),
                i = p.A.hasNoData(e),
                n = !!p.A.getGame(e),
                s = null != p.A.getCoverImageUrl(e);
            return t || i || (n && !s);
        });
        t.length > 0 && i(t, e);
    }, [l, e, i, o]);
    let d = s.useMemo(() => l.map((e) => ({ applicationId: e })), [l]);
    return { applicationIds: l, games: d, onAddGame: r };
}
var k = i(600761),
    R = i(667049),
    O = i(579950),
    y = i(605694),
    _ = i(192308),
    G = i(821609),
    L = i(307301),
    P = i(183555),
    D = i(375708),
    M = i(964828);
function U(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: l } = (0, P.NJ)(),
        a = s.useCallback(() => {
            l({ action: "PRESS_ADD_WIDGET" }),
                (0, _.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([i.e("8888"), i.e("22420"), i.e("26623")]).then(
                            i.bind(i, 850370),
                        );
                        return (t) => (0, n.jsx)(e, { ...t, trackUserProfileEditAction: l });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [l]);
    return (0, n.jsxs)("div", {
        className: r()(M.w, t),
        children: [
            (0, n.jsx)(d.E, { variant: "text-xs/semibold", color: "text-subtle", children: D.intl.string(D.t.OYlggR) }),
            (0, n.jsx)(G.$, {
                icon: L.j,
                text: D.intl.string(D.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: a,
            }),
        ],
    });
}
var F = i(192);
i(157992);
var W = i(735321),
    H = i(623280),
    B = i(465927);
function V() {
    return (0, n.jsx)("div", {
        className: B.p,
        children: (0, n.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: D.intl.format(D.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function X(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: l, ...r } = e;
    return (0, n.jsx)(H.A, {
        userId: i.id,
        widget: t,
        allowEditing: s,
        disableInteraction: l,
        className: B.k,
        headerTitle: (0, W.L)(t),
        ...r,
        children: (0, n.jsx)(V, {}),
    });
}
var z = i(554146),
    Y = i(704824),
    K = i(382483),
    q = i(385113),
    Q = i(334074),
    Z = i(287809),
    J = i(866665),
    $ = i(657718),
    ee = i(789645),
    et = i(478016),
    ei = i(384377),
    en = i(518477),
    es = i(49999);
function el(e) {
    let { user: t, application: i, onDismiss: l } = e,
        { trackUserProfileEditAction: r } = (0, P.NJ)(),
        a = s.useMemo(() => new f.R({ applicationId: i.id }), [i.id]),
        o = s.useCallback(() => {
            null != a &&
                ((0, W.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, ei.XA)(en.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, n.jsx)(y.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, n.jsx)(y.A.Cta, {
            showSuggestedForYou: !0,
            heading: D.intl.format(D.t.OIzLCy, { applicationName: i.name }),
            content: D.intl.format(D.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(J.m, {
                        text: D.intl.string(D.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)($.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: ee.P,
                            "aria-label": D.intl.string(D.t.WAI6xu),
                            onClick: () => {
                                l(es.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(J.m, {
                        text: D.intl.string(D.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)($.S, {
                            variant: "primary",
                            size: "sm",
                            icon: et.U,
                            "aria-label": D.intl.formatToPlainString(D.t.KfGahB, { applicationName: i.name }),
                            onClick: () => {
                                l(es.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function er() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: i,
        markAsDismissed: l,
    } = (function () {
        let e = (0, a.yK)([q.A], () => q.A.getFeaturedApplicationIds());
        s.useEffect(() => {
            (0, K.Wq)();
        }, []);
        let t = (0, a.bG)([Z.default], () => Z.default.getCurrentUser()),
            i = (0, c.A)(e),
            { tokens: n, fetched: l } = (0, Y.j)(e),
            r = (0, R.A)(t?.id),
            o = null == t || null == e || null == n || !l,
            d = s.useMemo(
                () =>
                    o
                        ? []
                        : i.filter(
                              (e) =>
                                  !(null == e || r.some((t) => t instanceof f.R && t.applicationId === e.id)) &&
                                  null != n.find((t) => t.application.id === e.id),
                          ),
                [o, i, n, r],
            ),
            { eligibleToShow: u, markAsDismissed: g } = (0, Q.hj)({
                applications: d,
                dismissibleContent: z.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: Q.SH,
            }),
            m = s.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = i[0];
    return null == r ? null : (0, n.jsx)(el, { user: t, application: r, onDismiss: (e) => l([r.id], e) }, r.id);
}
var ea = i(128988),
    eo = i(280450),
    ed = i(321191),
    ec = i(896170),
    eu = i(765178),
    eg = i(922016),
    em = i(305866),
    ex = i(732771),
    ef = i(408278),
    eh = i(499373),
    eI = i(939249),
    ep = i(663341),
    eA = i(321108),
    ej = i(383329),
    eE = i(250573);
function eS(e) {
    let { widgetType: t, widget: i, onAddGame: l, children: r, ...a } = e,
        o = s.useMemo(() => new Set(i.games.map((e) => e.applicationId)), [i.games]),
        { trackUserProfileEditAction: d } = (0, P.NJ)(),
        [c, u] = s.useState(""),
        g = s.useRef(""),
        { options: m, matchSorterOptions: x } = (0, ej.R)({ query: c }),
        f = c.trim().length > 0,
        { applicationIds: h, onAddGame: I } = C(t),
        p = (0, eA.A)(h),
        A = s.useCallback(
            (e) => {
                (0, W.ew)({ widgetType: t, game: { applicationId: e } }),
                    eu.O.announce(D.intl.string(D.t.q0U3DE)),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    h.includes(e) && I(e),
                    l?.();
            },
            [t, d, l, h, I],
        ),
        j = s.useMemo(() => {
            let e = new Map(
                m.map((e) => [
                    String(e.value),
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: o.has(e.value) },
                ]),
            );
            if (f) return [...e.values()];
            let t = p
                    .filter((e) => !o.has(e.id) && (0, W.XX)(e))
                    .map((e) => ({ id: String(e.id), value: String(e.id), label: e.name, disabled: !1 })),
                i = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !i.has(e.id))];
        }, [m, o, p, f]),
        E = s.useCallback((e) => e, []),
        S = s.useMemo(() => ({ ...x, threshold: ec.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        T = s.useCallback((e) => (f || "" === e.trim() ? j.length : (0, ec.Ht)(j, e, S).length), [f, j, S]),
        v = s.useCallback(
            (e) => {
                let i = e.target.value;
                "" === c.trim() &&
                    "" !== i.trim() &&
                    d({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: i.trim().length,
                        numResults: T(i),
                    }),
                    u(i),
                    (g.current = i);
            },
            [c, d, t, T],
        );
    return (0, n.jsx)(eg.Y, {
        ...a,
        onRequestOpen: () => {
            d({ action: "PRESS_ADD_GAME", widgetEdited: t }), u(""), (g.current = "");
        },
        onRequestClose: () => {
            d({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: g.current.trim().length,
                numResults: T(g.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(em.l, {
                className: eE.C,
                "aria-label": D.intl.string(D.t.uqw8wK),
                children: (0, n.jsxs)(ex.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (A(e), t());
                    },
                    options: j,
                    matchSorterOptions: S,
                    customMatchSorter: f ? E : void 0,
                    children: [
                        (0, n.jsx)(ex.a3, {
                            label: D.intl.string(D.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: D.intl.string(D.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: v,
                        }),
                        (0, n.jsx)(ex.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function eT(e) {
    let { disabled: t, ...i } = e,
        l = s.useRef(null);
    return (0, n.jsx)(eS, {
        targetElementRef: l,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(J.m, {
                text: D.intl.string(D.t.SgTOtX),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(ef.K, {
                    buttonRef: l,
                    variant: "secondary",
                    size: "sm",
                    icon: eh.T,
                    "aria-label": D.intl.string(D.t.SgTOtX),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function ev(e) {
    let t = s.useRef(null);
    return (0, n.jsx)(eS, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(eI.D, {
                innerRef: t,
                className: eE.c,
                "aria-label": D.intl.string(D.t.SgTOtX),
                ...e,
                children: (0, n.jsx)(ep.p, { color: "currentColor" }),
            }),
    });
}
let eN = s.createContext(null);
function eb(e) {
    let { widgetType: t, children: i } = e,
        l = (0, a.bG)([E.A], () => {
            let e = E.A.getPendingWidgets();
            if (null == e) return !1;
            let i = e.find((e) => e.type === t);
            if (null == i) return !1;
            let n = (0, W.cv)(t);
            return i.games.length > n;
        }),
        [r, o] = s.useState(l);
    return (0, n.jsx)(eN.Provider, { value: { expanded: r, setExpanded: o }, children: i });
}
function ew() {
    let e = s.useContext(eN);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var eC = i(308685);
function ek(e) {
    let { widget: t } = e,
        i = (0, W.cv)(t.type),
        s = 1 === i,
        l = s ? D.intl.string(D.t["3FdPBT"]) : D.intl.format(D.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: s ? eC.O : eC.k,
        children: [
            s && (0, n.jsx)(ev, { widget: t, widgetType: t.type }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: l }),
        ],
    });
}
var eR = i(823016),
    eO = i(683071),
    ey = i(116363);
function e_(e) {
    let { widgetType: t, gameCount: i } = e,
        s = (0, W.cv)(t);
    return i <= s
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: ey.l,
              children: (0, n.jsx)(eO.w, {
                  type: "warning",
                  children: D.intl.formatToPlainString(D.t.Rv3wYq, { maxGames: s }),
              }),
          });
}
var eG = i(17110);
function eL(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(eI.D, {
        onClick: t,
        className: eG.x,
        "aria-expanded": i,
        children: (0, n.jsx)(d.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? D.intl.string(D.t["6MwJo/"]) : D.intl.string(D.t.lBeKY2),
        }),
    });
}
var eP = i(249264),
    eD = i(462037);
function eM(e) {
    let { games: t, user: i, widgetType: s, ...l } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, eR.r)();
    return (0, n.jsx)("ul", {
        className: eD.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(eP.A, {
                        index: t,
                        user: i,
                        game: e,
                        widgetType: s,
                        coverRef: r(e.applicationId),
                        onRemoveGame: a,
                        ...l,
                    }),
                },
                e.applicationId,
            ),
        ),
    });
}
function eU(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: s = !1, games: l } = e,
        { getManageButtonForWidget: r } = (0, F.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = ew(),
        c = o ? l : l.slice(0, 2),
        u = l.length > 2,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(eM, { ...e, games: c }),
                u && (0, n.jsx)(eL, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !s
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(e_, { widgetType: t, gameCount: l.length }),
                  (0, n.jsx)(eR.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function eF(e) {
    let { user: t, widget: i, guildId: s, channelId: l, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(H.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(eU, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: s,
                      channelId: l,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(ek, { widget: i }),
    });
}
function eW(e) {
    let { user: t, widget: i, guildId: s, channelId: l, allowEditing: r, disableInteraction: a, ...o } = e,
        d = i.games[0];
    return (0, n.jsx)(H.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            null != d
                ? (0, n.jsx)(eP.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: s,
                      channelId: l,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(ek, { widget: i }),
    });
}
var eH = i(768754);
function eB(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: eH.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.applicationId)),
    });
}
var eV = i(686246),
    eX = i(201438),
    ez = i(451395),
    eY = i(788593),
    eK = i(858808),
    eq = i(350956),
    eQ = i(466215);
function eZ(e) {
    let { index: t, widgetType: i, game: l, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, eR.r)(),
        c = s.useRef(null);
    return (0, n.jsx)(ez.mG, {
        index: t,
        itemId: l.applicationId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => c.current?.offsetWidth },
        "aria-label": D.intl.formatToPlainString(D.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, W.Un)(i, e, t),
        onEnd: () => d(l.applicationId),
        className: eQ.kL,
        dropBeforeClassName: eQ.A,
        dropAfterClassName: eQ.Ze,
        draggingClassName: eQ.Id,
        children: (0, n.jsx)("div", { ref: c, className: eQ.An, children: o }),
    });
}
function eJ(e) {
    let {
            game: t,
            userId: i,
            widgetType: s,
            allowEditing: l,
            disableInteraction: r = !1,
            index: a,
            onRemoveGame: o,
            coverRef: d,
        } = e,
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, eX.A)(t.applicationId),
        { registerDragHandleRef: m } = (0, eR.r)(),
        x = l && !r,
        { isDragging: f } = (0, eV.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(eY.A, {
                    imageSrc: c,
                    gameName: u,
                    applicationId: t.applicationId,
                    userId: i,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : eq.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, n.jsx)(ez.jV, { buttonRef: m(t.applicationId), className: eQ.BU }),
                x &&
                    (0, n.jsx)(eK.A, {
                        game: t,
                        widgetType: s,
                        className: eQ.vS,
                        onRemove: () => o?.(t.applicationId),
                    }),
            ],
        });
    }
    return g
        ? (0, n.jsx)("div", { className: eq.mD })
        : x
          ? (0, n.jsx)(eZ, { widgetType: s, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, n.jsx)("div", { className: eQ.kL, children: h() });
}
function e$(e) {
    let { games: t, userId: i, widgetType: s, allowEditing: l, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, eR.r)();
    return (0, n.jsx)(eB, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(eJ, {
                index: t,
                game: e,
                userId: i,
                widgetType: s,
                allowEditing: l,
                disableInteraction: r,
                coverRef: a(e.applicationId),
                onRemoveGame: o,
            }),
    });
}
function e0(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: s = !1, games: l } = e,
        { getManageButtonForWidget: r } = (0, F.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = ew(),
        c = o ? l : l.slice(0, 8),
        u = l.length > 8,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(e$, { ...e, games: c }),
                u && (0, n.jsx)(eL, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !s
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(e_, { widgetType: t, gameCount: l.length }),
                  (0, n.jsx)(eR.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function e1(e) {
    let { user: t, widget: i, guildId: s, channelId: l, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(H.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(e0, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: s,
                      channelId: l,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(ek, { widget: i }),
    });
}
function e8(e) {
    let { user: t, widget: i, guildId: s, channelId: l, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(H.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(e0, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: s,
                      channelId: l,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(ek, { widget: i }),
    });
}
var e2 = i(661531),
    e5 = i(297264),
    e7 = i(915089),
    e6 = i(30061);
function e3(e) {
    let { applicationId: t, userId: i, onClick: s } = e,
        { coverImageUrl: l, gameName: r, isLoading: o } = (0, eX.A)(t),
        d = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        c = D.intl.formatToPlainString(D.t["3mb1s5"], { game: r });
    return o || d
        ? (0, n.jsx)("div", { className: eq.mD })
        : (0, n.jsx)(J.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(eI.D, {
                  className: e6.c9,
                  onClick: s,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(eY.A, {
                          className: e6.Iv,
                          imageSrc: l,
                          gameName: r,
                          applicationId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(ep.p, { size: "md", className: e6.Xv, color: e2.A.colors.WHITE }),
                  ],
              }),
          });
}
function e9(e) {
    let { userId: t, games: i, onDismiss: s, onClick: l, className: a } = e,
        o = (0, e7.GV)();
    return (0, n.jsxs)("aside", {
        className: r()(e6.kL, a),
        "aria-labelledby": o,
        children: [
            (0, n.jsxs)("div", {
                className: e6.wx,
                children: [
                    (0, n.jsx)(eI.D, {
                        className: e6.r,
                        "aria-label": D.intl.string(D.t["pUR+3g"]),
                        onClick: s,
                        children: (0, n.jsx)(ee.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(e5.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: D.intl.string(D.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: e6.Vg,
                children: i.map((e) => {
                    let { applicationId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(e3, { onClick: () => l(i), userId: t, applicationId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}
function e4(e) {
    let { widgetType: t, ...i } = e,
        { games: l, onAddGame: r } = C(t),
        { setExpanded: a } = ew(),
        { trackUserProfileEditAction: o } = (0, P.NJ)(),
        d = s.useCallback(
            (e) => {
                r(e),
                    a(!0),
                    (0, W.ew)({ widgetType: t, game: { applicationId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [r, t, o, a],
        );
    return (0, n.jsx)(e9, { games: l, onClick: d, ...i });
}
var te = i(344287);
function tt(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case v.x.FAVORITE_GAMES:
            return (0, n.jsx)(eW, { widget: t, ...i });
        case v.x.CURRENT_GAMES:
            return (0, n.jsx)(eF, { widget: t, ...i });
        case v.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(e8, { widget: t, ...i });
        case v.x.PLAYED_GAMES:
            return (0, n.jsx)(e1, { widget: t, ...i });
        default:
            return null;
    }
}
function ti(e) {
    let { widget: t, user: i, allowEditing: l, disableInteraction: r, ...o } = e,
        { setExpanded: d } = ew(),
        { shouldShowSuggestions: c, handleDismissSuggestions: u } = (function (e) {
            let [t, i] = s.useState(!1),
                n = e.type,
                l = (0, a.bG)([eo.default, ed.A], () => {
                    let e = eo.default.getId();
                    if (null == e) return !1;
                    let t = ed.A.getUserProfile(e);
                    return (t?.widgets ?? []).some((e) => e.type === n);
                }),
                r = (0, W.uA)(e);
            return {
                shouldShowSuggestions: !l && !t && !r,
                handleDismissSuggestions: s.useCallback(() => {
                    i(!0);
                }, []),
            };
        })(t),
        g = l && !r,
        m = g && c,
        x = (0, W.L)(t),
        f = (0, W.FM)(t, { showEditingControls: g }),
        h = (0, W.uA)(t),
        I = 1 === (0, W.cv)(t.type);
    return (0, n.jsx)(tt, {
        widget: t,
        user: i,
        allowEditing: l,
        disableInteraction: r,
        headerTitle: x,
        headerSubtitle: f,
        headerActionButtons:
            g && !I
                ? [
                      (0, n.jsx)(
                          eT,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => d(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, n.jsx)(e4, { userId: i.id, widgetType: t.type, onDismiss: u, className: te.r }),
        ...o,
    });
}
function tn(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(eb, { widgetType: t.type, children: (0, n.jsx)(ti, { widget: t, ...i }) });
}
var ts = i(576260),
    tl = i(94160),
    tr = i(96173),
    ta = i(117937),
    to = i(902394);
function td(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: l } = (0, P.NJ)(),
        r = s.useRef(!1),
        o = (0, a.bG)([ed.A], () => ed.A.getUserProfile(t)?.fetchError != null, [t]),
        c = (0, tr.A)();
    return (
        s.useEffect(() => {
            r.current || o || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [o, i]),
        (0, n.jsxs)("div", {
            className: to.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: to.FS,
                    children: [
                        (0, n.jsx)(e5.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: D.intl.string(D.t["oqalC+"]),
                        }),
                        (0, n.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: o ? D.intl.string(D.t["+W59o5"]) : D.intl.string(D.t.O9SQ1c),
                        }),
                    ],
                }),
                !o &&
                    (0, n.jsx)("ul", {
                        className: to.ZW,
                        "aria-label": D.intl.string(D.t["+EIBSA"]),
                        children: c.map((e) =>
                            (0, n.jsx)(
                                "li",
                                {
                                    children: (0, n.jsx)(ta.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: l,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
            ],
        })
    );
}
var tc = i(456620);
function tu(e) {
    let { widget: t, ...i } = e;
    return t instanceof f.R
        ? (0, n.jsx)(y.A, { widget: t, ...i })
        : (0, I.fu)(t)
          ? (0, n.jsx)(tn, { widget: t, ...i })
          : t instanceof h.k
            ? (0, n.jsx)(X, { widget: t, ...i })
            : null;
}
function tg() {
    return (0, n.jsxs)("div", {
        className: tc.mJ,
        children: [
            (0, n.jsx)(o.m, { size: "xs" }),
            (0, n.jsx)(d.E, {
                "aria-label": D.intl.string(D.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: D.intl.string(D.t["7blcz6"]),
            }),
        ],
    });
}
function tm(e) {
    let { user: t, guildId: i, channelId: l } = e,
        r = (0, R.A)(t.id),
        o = (0, O.A)(t.id),
        d = (function () {
            let [e, t] = (0, a.yK)([x.A], () => [x.A.ipCountryCode, x.A.ipCountryCodeRequest]),
                i = (0, g.Z)();
            return (
                s.useEffect(() => {
                    null == e && null == t && i && (0, u.xe)();
                }, [e, t, i]),
                "GB" === e && i
            );
        })(),
        h = 0 === r.length && o,
        p = s.useMemo(() => r.filter(I.fu), [r]),
        A = s.useMemo(() => r.filter((e) => e instanceof f.R), [r]);
    function S() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                o &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(U, { className: tc.cG }), d && (0, n.jsx)(tg, {}), (0, n.jsx)(er, {})],
                    }),
                r.map((e, s) =>
                    (0, n.jsx)(
                        tu,
                        { widget: e, user: t, guildId: i, channelId: l, allowEditing: o, index: s },
                        e.getUniqueKey(),
                    ),
                ),
            ],
        });
    }
    return (!(function (e, t) {
        let [i, n, l, r] = (0, a.yK)([E.A], () => [
                E.A.suggestedFetchAttempted,
                E.A.suggestedFetchError,
                E.A.suggestedGameIds,
                E.A.suggestedFetchIsLoading,
            ]),
            { onLoad: o } = w();
        s.useEffect(() => {
            !i && e && j.A.fetchSuggestedGames();
        }, [i, e]);
        let d = i && !r;
        s.useEffect(() => {
            if (!d) return;
            let e = t.map((e) => e.games).flat();
            n || o(l.suggestedGamesIds ?? [], l.suggestedWishlistGamesIds ?? [], e);
        }, [d]);
    })(o, p),
    !(function (e, t) {
        let i = s.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, c.A)(i);
        let { data: n, refetch: l } = (0, m.P)(e),
            r = s.useRef(null !== n);
        s.useEffect(() => {
            r.current && ((r.current = !1), l());
        }, [l]);
    })(t.id, A),
    h)
        ? (0, n.jsx)(td, { userId: t.id })
        : o
          ? (0, n.jsx)(F.D, { children: S() })
          : S();
}
function tx(e) {
    let { user: t, ...i } = e,
        l = s.useRef(null);
    (0, k.i)({ containerRef: l });
    let a = (0, ts.k)(t.id);
    return (0, n.jsxs)(tl.K, {
        "data-scroller": !0,
        scrollerRef: l,
        className: r()(tc.XG, { [tc.az]: a }),
        fade: !0,
        children: [(0, n.jsx)(ea.A, { scrollerRef: l }), (0, n.jsx)(tm, { user: t, ...i })],
    });
}
