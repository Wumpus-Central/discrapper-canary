i.d(t, { A: () => tc, u: () => ta });
var n = i(627968),
    s = i(64700),
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
    h = i(289173),
    I = i(311043),
    p = i(569926),
    A = i(958805),
    j = i(61881),
    E = i(435558),
    S = i(353640),
    T = i(540185),
    v = i(282435);
let N = (0, E.sampleSize)(v.sx, v.sx.length),
    b = (0, S.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (i, n, s) => {
            let l = new Set(s.map((e) => e.applicationId));
            for (let s of (e({
                stack: [...i.filter((e) => !l.has(e)), ...N],
                wishlistStack: [...n.filter((e) => !l.has(e)), ...N],
            }),
            Object.values(T.x)))
                t().setNext(6, s);
        },
        setNext: (e, i) => {
            let n = t().getNext(e, i);
            t()._setGameIds(i, n);
            let s = t().peekNext(7, i);
            t()._setPeekedGameIds(i, s);
        },
        getNext: (e, i) => {
            let n = i === T.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                s = n.slice(0, e),
                l = n.slice(e);
            return t()._setStack(i, l), s;
        },
        peekNext: (e, i) => (i === T.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
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
            let n = (i === T.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(i, n), t()._setPeekedGameIds(i, t().peekNext(7, i));
        },
        _setGameIds: (t, i) => {
            e((e) => ({ gameIds: { ...e.gameIds, [t]: i } }));
        },
        _setStack: (t, i) => {
            t === T.x.WANT_TO_PLAY_GAMES ? e({ wishlistStack: i }) : e({ stack: i });
        },
        _setPeekedGameIds: (t, i) => {
            e((e) => ({ peekedGameIds: { ...e.peekedGameIds, [t]: i } }));
        },
    }));
function C(e) {
    let { bump: t, bumpMultiple: i, gameIds: n } = b();
    !(function (e) {
        let { remove: t, peekedGameIds: i } = b(),
            n = s.useMemo(() => i[e] ?? [], [i, e]);
        (0, p.x)(n);
        let l = (0, a.yK)([I.A], () => n.map((e) => I.A.isFetching(e)));
        s.useEffect(() => {
            for (let i of n) {
                let n = I.A.didFetchingFail(i),
                    s = I.A.hasNoData(i),
                    l = !!I.A.getGame(i),
                    r = null != I.A.getCoverImageUrl(i);
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
        o = (0, a.yK)([I.A], () => l.map((e) => I.A.isFetching(e)));
    s.useEffect(() => {
        let t = l.filter((e) => {
            let t = I.A.didFetchingFail(e),
                i = I.A.hasNoData(e),
                n = !!I.A.getGame(e),
                s = null != I.A.getCoverImageUrl(e);
            return t || i || (n && !s);
        });
        t.length > 0 && i(t, e);
    }, [l, e, i, o]);
    let d = s.useMemo(() => l.map((e) => ({ applicationId: e })), [l]);
    return { applicationIds: l, games: d, onAddGame: r };
}
var w = i(600761),
    R = i(667049),
    k = i(579950),
    O = i(605694),
    y = i(192308),
    _ = i(821609),
    L = i(307301),
    G = i(183555),
    P = i(375708),
    D = i(964828);
function M(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: l } = (0, G.NJ)(),
        a = s.useCallback(() => {
            l({ action: "PRESS_ADD_WIDGET" }),
                (0, y.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([i.e("30794"), i.e("87591")]).then(i.bind(i, 333114));
                        return (t) => (0, n.jsx)(e, { ...t, trackUserProfileEditAction: l });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [l]);
    return (0, n.jsxs)("div", {
        className: r()(D.w, t),
        children: [
            (0, n.jsx)(d.E, { variant: "text-xs/semibold", color: "text-subtle", children: P.intl.string(P.t.OYlggR) }),
            (0, n.jsx)(_.$, {
                icon: L.j,
                text: P.intl.string(P.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: a,
            }),
        ],
    });
}
var U = i(192),
    F = i(554146),
    W = i(704824),
    H = i(382483),
    B = i(385113),
    V = i(334074),
    X = i(287809),
    z = i(866665),
    Y = i(657718),
    K = i(789645),
    q = i(478016),
    Q = i(735321),
    J = i(384377),
    Z = i(518477),
    $ = i(49999);
function ee(e) {
    let { user: t, application: i, onDismiss: l } = e,
        { trackUserProfileEditAction: r } = (0, G.NJ)(),
        a = s.useMemo(() => new f.R({ applicationId: i.id }), [i.id]),
        o = s.useCallback(() => {
            null != a &&
                ((0, Q.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, J.XA)(Z.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, n.jsx)(O.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, n.jsx)(O.A.Cta, {
            showSuggestedForYou: !0,
            heading: P.intl.format(P.t.OIzLCy, { applicationName: i.name }),
            content: P.intl.format(P.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(z.m, {
                        text: P.intl.string(P.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)(Y.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: K.P,
                            "aria-label": P.intl.string(P.t.WAI6xu),
                            onClick: () => {
                                l($.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(z.m, {
                        text: P.intl.string(P.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(Y.S, {
                            variant: "primary",
                            size: "sm",
                            icon: q.U,
                            "aria-label": P.intl.formatToPlainString(P.t.KfGahB, { applicationName: i.name }),
                            onClick: () => {
                                l($.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function et() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: i,
        markAsDismissed: l,
    } = (function () {
        let e = (0, a.yK)([B.A], () => B.A.getFeaturedApplicationIds());
        s.useEffect(() => {
            (0, H.Wq)();
        }, []);
        let t = (0, a.bG)([X.default], () => X.default.getCurrentUser()),
            i = (0, c.A)(e),
            { tokens: n, fetched: l } = (0, W.j)(e),
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
            { eligibleToShow: u, markAsDismissed: g } = (0, V.hj)({
                applications: d,
                dismissibleContent: F.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: V.SH,
            }),
            m = s.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = i[0];
    return null == r ? null : (0, n.jsx)(ee, { user: t, application: r, onDismiss: (e) => l([r.id], e) }, r.id);
}
var ei = i(128988),
    en = i(280450),
    es = i(321191),
    el = i(896170),
    er = i(765178),
    ea = i(922016),
    eo = i(305866),
    ed = i(732771),
    ec = i(408278),
    eu = i(499373),
    eg = i(939249),
    em = i(663341),
    ex = i(321108),
    ef = i(383329),
    eh = i(250573);
function eI(e) {
    let { widgetType: t, widget: i, onAddGame: l, children: r, ...a } = e,
        o = s.useMemo(() => new Set(i.games.map((e) => e.applicationId)), [i.games]),
        { trackUserProfileEditAction: d } = (0, G.NJ)(),
        [c, u] = s.useState(""),
        g = s.useRef(""),
        { options: m, matchSorterOptions: x } = (0, ef.R)({ query: c }),
        f = c.trim().length > 0,
        { applicationIds: h, onAddGame: I } = C(t),
        p = (0, ex.A)(h),
        A = s.useCallback(
            (e) => {
                (0, Q.ew)({ widgetType: t, game: { applicationId: e } }),
                    er.O.announce(P.intl.string(P.t.q0U3DE)),
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
                    .filter((e) => !o.has(e.id) && (0, Q.XX)(e))
                    .map((e) => ({ id: String(e.id), value: String(e.id), label: e.name, disabled: !1 })),
                i = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !i.has(e.id))];
        }, [m, o, p, f]),
        E = s.useCallback((e) => e, []),
        S = s.useMemo(() => ({ ...x, threshold: el.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        T = s.useCallback((e) => (f || "" === e.trim() ? j.length : (0, el.Ht)(j, e, S).length), [f, j, S]),
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
    return (0, n.jsx)(ea.Y, {
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
            return (0, n.jsx)(eo.l, {
                className: eh.C,
                "aria-label": P.intl.string(P.t.uqw8wK),
                children: (0, n.jsxs)(ed.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (A(e), t());
                    },
                    options: j,
                    matchSorterOptions: S,
                    customMatchSorter: f ? E : void 0,
                    children: [
                        (0, n.jsx)(ed.a3, {
                            label: P.intl.string(P.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: P.intl.string(P.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: v,
                        }),
                        (0, n.jsx)(ed.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function ep(e) {
    let { disabled: t, ...i } = e,
        l = s.useRef(null);
    return (0, n.jsx)(eI, {
        targetElementRef: l,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(z.m, {
                text: P.intl.string(P.t.SgTOtX),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(ec.K, {
                    buttonRef: l,
                    variant: "secondary",
                    size: "sm",
                    icon: eu.T,
                    "aria-label": P.intl.string(P.t.SgTOtX),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function eA(e) {
    let t = s.useRef(null);
    return (0, n.jsx)(eI, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(eg.D, {
                innerRef: t,
                className: eh.c,
                "aria-label": P.intl.string(P.t.SgTOtX),
                ...e,
                children: (0, n.jsx)(em.p, { color: "currentColor" }),
            }),
    });
}
let ej = s.createContext(null);
function eE(e) {
    let { widgetType: t, children: i } = e,
        l = (0, a.bG)([j.A], () => {
            let e = j.A.getPendingWidgets();
            if (null == e) return !1;
            let i = e.find((e) => e.type === t);
            if (null == i) return !1;
            let n = (0, Q.cv)(t);
            return i.games.length > n;
        }),
        [r, o] = s.useState(l);
    return (0, n.jsx)(ej.Provider, { value: { expanded: r, setExpanded: o }, children: i });
}
function eS() {
    let e = s.useContext(ej);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var eT = i(308685);
function ev(e) {
    let { widget: t } = e,
        i = (0, Q.cv)(t.type),
        s = 1 === i,
        l = s ? P.intl.string(P.t["3FdPBT"]) : P.intl.format(P.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: s ? eT.O : eT.k,
        children: [
            s && (0, n.jsx)(eA, { widget: t, widgetType: t.type }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: l }),
        ],
    });
}
var eN = i(623280),
    eb = i(823016),
    eC = i(683071),
    ew = i(116363);
function eR(e) {
    let { widgetType: t, gameCount: i } = e,
        s = (0, Q.cv)(t);
    return i <= s
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: ew.l,
              children: (0, n.jsx)(eC.w, {
                  type: "warning",
                  children: P.intl.formatToPlainString(P.t.Rv3wYq, { maxGames: s }),
              }),
          });
}
var ek = i(17110);
function eO(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(eg.D, {
        onClick: t,
        className: ek.x,
        "aria-expanded": i,
        children: (0, n.jsx)(d.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? P.intl.string(P.t["6MwJo/"]) : P.intl.string(P.t.lBeKY2),
        }),
    });
}
var ey = i(249264),
    e_ = i(462037);
function eL(e) {
    let { games: t, user: i, widgetType: s, ...l } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, eb.r)();
    return (0, n.jsx)("ul", {
        className: e_.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(ey.A, {
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
function eG(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: s = !1, games: l } = e,
        { getManageButtonForWidget: r } = (0, U.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = eS(),
        c = o ? l : l.slice(0, 2),
        u = l.length > 2,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(eL, { ...e, games: c }),
                u && (0, n.jsx)(eO, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !s
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(eR, { widgetType: t, gameCount: l.length }),
                  (0, n.jsx)(eb.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function eP(e) {
    let { user: t, widget: i, guildId: s, channelId: l, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(eN.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(eG, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: s,
                      channelId: l,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(ev, { widget: i }),
    });
}
function eD(e) {
    let { user: t, widget: i, guildId: s, channelId: l, allowEditing: r, disableInteraction: a, ...o } = e,
        d = i.games[0];
    return (0, n.jsx)(eN.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            null != d
                ? (0, n.jsx)(ey.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: s,
                      channelId: l,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(ev, { widget: i }),
    });
}
var eM = i(768754);
function eU(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: eM.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.applicationId)),
    });
}
var eF = i(688807),
    eW = i(201438),
    eH = i(451395),
    eB = i(788593),
    eV = i(858808),
    eX = i(350956),
    ez = i(466215);
function eY(e) {
    let { index: t, widgetType: i, game: l, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, eb.r)(),
        c = s.useRef(null);
    return (0, n.jsx)(eH.mG, {
        index: t,
        itemId: l.applicationId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => c.current?.offsetWidth },
        "aria-label": P.intl.formatToPlainString(P.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, Q.Un)(i, e, t),
        onEnd: () => d(l.applicationId),
        className: ez.kL,
        dropBeforeClassName: ez.A,
        dropAfterClassName: ez.Ze,
        draggingClassName: ez.Id,
        children: (0, n.jsx)("div", { ref: c, className: ez.An, children: o }),
    });
}
function eK(e) {
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
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, eW.A)(t.applicationId),
        { registerDragHandleRef: m } = (0, eb.r)(),
        x = l && !r,
        { isDragging: f } = (0, eF.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(eB.A, {
                    imageSrc: c,
                    gameName: u,
                    applicationId: t.applicationId,
                    userId: i,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : eX.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, n.jsx)(eH.jV, { buttonRef: m(t.applicationId), className: ez.BU }),
                x &&
                    (0, n.jsx)(eV.A, {
                        game: t,
                        widgetType: s,
                        className: ez.vS,
                        onRemove: () => o?.(t.applicationId),
                    }),
            ],
        });
    }
    return g
        ? (0, n.jsx)("div", { className: eX.mD })
        : x
          ? (0, n.jsx)(eY, { widgetType: s, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, n.jsx)("div", { className: ez.kL, children: h() });
}
function eq(e) {
    let { games: t, userId: i, widgetType: s, allowEditing: l, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, eb.r)();
    return (0, n.jsx)(eU, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(eK, {
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
function eQ(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: s = !1, games: l } = e,
        { getManageButtonForWidget: r } = (0, U.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = eS(),
        c = o ? l : l.slice(0, 8),
        u = l.length > 8,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(eq, { ...e, games: c }),
                u && (0, n.jsx)(eO, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !s
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(eR, { widgetType: t, gameCount: l.length }),
                  (0, n.jsx)(eb.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function eJ(e) {
    let { user: t, widget: i, guildId: s, channelId: l, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(eN.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(eQ, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: s,
                      channelId: l,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(ev, { widget: i }),
    });
}
function eZ(e) {
    let { user: t, widget: i, guildId: s, channelId: l, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(eN.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(eQ, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: s,
                      channelId: l,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(ev, { widget: i }),
    });
}
var e$ = i(661531),
    e0 = i(297264),
    e1 = i(915089),
    e8 = i(30061);
function e2(e) {
    let { applicationId: t, userId: i, onClick: s } = e,
        { coverImageUrl: l, gameName: r, isLoading: o } = (0, eW.A)(t),
        d = (0, a.bG)([j.A], () => j.A.suggestedFetchIsLoading),
        c = P.intl.formatToPlainString(P.t["3mb1s5"], { game: r });
    return o || d
        ? (0, n.jsx)("div", { className: eX.mD })
        : (0, n.jsx)(z.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(eg.D, {
                  className: e8.c9,
                  onClick: s,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(eB.A, {
                          className: e8.Iv,
                          imageSrc: l,
                          gameName: r,
                          applicationId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(em.p, { size: "md", className: e8.Xv, color: e$.A.colors.WHITE }),
                  ],
              }),
          });
}
function e6(e) {
    let { userId: t, games: i, onDismiss: s, onClick: l, className: a } = e,
        o = (0, e1.GV)();
    return (0, n.jsxs)("aside", {
        className: r()(e8.kL, a),
        "aria-labelledby": o,
        children: [
            (0, n.jsxs)("div", {
                className: e8.wx,
                children: [
                    (0, n.jsx)(eg.D, {
                        className: e8.r,
                        "aria-label": P.intl.string(P.t["pUR+3g"]),
                        onClick: s,
                        children: (0, n.jsx)(K.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(e0.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: P.intl.string(P.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: e8.Vg,
                children: i.map((e) => {
                    let { applicationId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(e2, { onClick: () => l(i), userId: t, applicationId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}
function e7(e) {
    let { widgetType: t, ...i } = e,
        { games: l, onAddGame: r } = C(t),
        { setExpanded: a } = eS(),
        { trackUserProfileEditAction: o } = (0, G.NJ)(),
        d = s.useCallback(
            (e) => {
                r(e),
                    a(!0),
                    (0, Q.ew)({ widgetType: t, game: { applicationId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [r, t, o, a],
        );
    return (0, n.jsx)(e6, { games: l, onClick: d, ...i });
}
var e5 = i(344287);
function e3(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case T.x.FAVORITE_GAMES:
            return (0, n.jsx)(eD, { widget: t, ...i });
        case T.x.CURRENT_GAMES:
            return (0, n.jsx)(eP, { widget: t, ...i });
        case T.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(eZ, { widget: t, ...i });
        case T.x.PLAYED_GAMES:
            return (0, n.jsx)(eJ, { widget: t, ...i });
        default:
            return null;
    }
}
function e9(e) {
    let { widget: t, user: i, allowEditing: l, disableInteraction: r, ...o } = e,
        { setExpanded: d } = eS(),
        { shouldShowSuggestions: c, handleDismissSuggestions: u } = (function (e) {
            let [t, i] = s.useState(!1),
                n = e.type,
                l = (0, a.bG)([en.default, es.A], () => {
                    let e = en.default.getId();
                    if (null == e) return !1;
                    let t = es.A.getUserProfile(e);
                    return (t?.widgets ?? []).some((e) => e.type === n);
                }),
                r = (0, Q.uA)(e);
            return {
                shouldShowSuggestions: !l && !t && !r,
                handleDismissSuggestions: s.useCallback(() => {
                    i(!0);
                }, []),
            };
        })(t),
        g = l && !r,
        m = g && c,
        x = (0, Q.L)(t),
        f = (0, Q.FM)(t, { showEditingControls: g }),
        h = (0, Q.uA)(t),
        I = 1 === (0, Q.cv)(t.type);
    return (0, n.jsx)(e3, {
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
                          ep,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => d(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, n.jsx)(e7, { userId: i.id, widgetType: t.type, onDismiss: u, className: e5.r }),
        ...o,
    });
}
function e4(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(eE, { widgetType: t.type, children: (0, n.jsx)(e9, { widget: t, ...i }) });
}
var te = i(576260),
    tt = i(841417),
    ti = i(725386),
    tn = i(657855),
    ts = i(902394);
function tl(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: l } = (0, G.NJ)(),
        r = s.useRef(!1),
        o = (0, a.bG)([es.A], () => es.A.getUserProfile(t)?.fetchError != null, [t]),
        c = (0, ti.A)();
    return (
        s.useEffect(() => {
            r.current || o || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [o, i]),
        (0, n.jsxs)("div", {
            className: ts.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: ts.FS,
                    children: [
                        (0, n.jsx)(e0.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: P.intl.string(P.t["oqalC+"]),
                        }),
                        (0, n.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: o ? P.intl.string(P.t["+W59o5"]) : P.intl.string(P.t.O9SQ1c),
                        }),
                    ],
                }),
                !o &&
                    (0, n.jsx)("ul", {
                        className: ts.ZW,
                        "aria-label": P.intl.string(P.t["+EIBSA"]),
                        children: c.map((e) =>
                            (0, n.jsx)(
                                "li",
                                {
                                    children: (0, n.jsx)(tn.A, {
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
var tr = i(456620);
function ta(e) {
    let { widget: t, ...i } = e;
    return t instanceof f.R
        ? (0, n.jsx)(O.A, { widget: t, ...i })
        : (0, h.fu)(t)
          ? (0, n.jsx)(e4, { widget: t, ...i })
          : null;
}
function to() {
    return (0, n.jsxs)("div", {
        className: tr.mJ,
        children: [
            (0, n.jsx)(o.m, { size: "xs" }),
            (0, n.jsx)(d.E, {
                "aria-label": P.intl.string(P.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: P.intl.string(P.t["7blcz6"]),
            }),
        ],
    });
}
function td(e) {
    let { user: t, guildId: i, channelId: l } = e,
        r = (0, R.A)(t.id),
        o = (0, k.A)(t.id),
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
        I = 0 === r.length && o,
        p = s.useMemo(() => r.filter(h.fu), [r]),
        E = s.useMemo(() => r.filter((e) => e instanceof f.R), [r]);
    function S() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                o &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(M, { className: tr.cG }), d && (0, n.jsx)(to, {}), (0, n.jsx)(et, {})],
                    }),
                r.map((e, s) =>
                    (0, n.jsx)(
                        ta,
                        { widget: e, user: t, guildId: i, channelId: l, allowEditing: o, index: s },
                        e.getUniqueKey(),
                    ),
                ),
            ],
        });
    }
    return (!(function (e, t) {
        let [i, n, l, r] = (0, a.yK)([j.A], () => [
                j.A.suggestedFetchAttempted,
                j.A.suggestedFetchError,
                j.A.suggestedGameIds,
                j.A.suggestedFetchIsLoading,
            ]),
            { onLoad: o } = b();
        s.useEffect(() => {
            !i && e && A.A.fetchSuggestedGames();
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
    })(t.id, E),
    I)
        ? (0, n.jsx)(tl, { userId: t.id })
        : o
          ? (0, n.jsx)(U.D, { children: S() })
          : S();
}
function tc(e) {
    let { user: t, ...i } = e,
        l = s.useRef(null);
    (0, w.i)({ containerRef: l });
    let a = (0, te.k)(t.id);
    return (0, n.jsxs)(tt.K, {
        "data-scroller": !0,
        scrollerRef: l,
        className: r()(tr.XG, { [tr.az]: a }),
        fade: !0,
        children: [(0, n.jsx)(ei.A, { scrollerRef: l }), (0, n.jsx)(td, { user: t, ...i })],
    });
}
