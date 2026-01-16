n.d(t, {
    P: () => F,
    Z: () => G,
}),
    n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(81239),
    o = n(286379),
    c = n(442837),
    d = n(110924),
    u = n(284298),
    m = n(797614),
    p = n(819640),
    h = n(617136),
    f = n(823289),
    x = n(616022),
    b = n(49436),
    g = n(937797),
    v = n(787695),
    j = n(535584),
    y = n(968843),
    C = n(254579),
    _ = n(455357),
    S = n(602667),
    E = n(659302),
    T = n(110560),
    O = n(551097),
    N = n(444134),
    P = n(800926),
    w = n(304083),
    I = n(693900),
    k = n(526188),
    R = n(130653),
    A = n(404672),
    Z = n(389012),
    D = n(324805),
    L = n(981631),
    M = n(748962);
function U(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, y.qI)({
            mode: t ? D.NH.EXPANDED : D.NH.COLLAPSED,
            questContent: b.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: b.jn.QUEST_BAR_V2,
        }),
        null
    );
}
function B() {
    return (
        r.useEffect(() => {
            u.j.trigger();
        }, []),
        null
    );
}
function F(e) {
    var t, n;
    let { quest: i } = e,
        u = (0, j.T)({
            quest: i,
            location: D.dr.QUESTS_BAR,
        }),
        g = (0, v.Z)({ location: D.dr.QUESTS_BAR }),
        F = (0, c.e7)([x.Z], () => null != x.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: G, reason: V } = (0, E.qN)({
            quest: i,
            location: D.dr.QUESTS_BAR,
        }),
        z = (0, c.e7)([p.Z], () => p.Z.hasLayers()),
        H = r.useRef(null),
        W = r.useMemo(() => (0, C.q8)(i), [i]),
        K = (null == (t = i.userStatus) ? void 0 : t.enrolledAt) != null,
        q = (0, d.Z)(K),
        Q = (null == (n = i.userStatus) ? void 0 : n.completedAt) != null,
        { hasError: Y, isLoading: X } = (0, _.kC)(),
        J = r.useContext(R.T) || (g && G && !X && !F),
        {
            isExpanded: $,
            setIsExpanded: ee,
            expandQuestBar: et,
            isExpansionAnimationComplete: en,
            isVisibilityAnimationAtRest: ea,
            expansionSpring: er,
            visibilitySpring: ei,
            springConfig: el,
        } = (0, Z.a)({
            isQuestAccepted: K,
            isQuestCompleted: Q,
            isQuestBarVisible: J,
        }),
        es = r.useRef(-1),
        eo = r.useRef(!1),
        [ec, ed] = r.useState(!1),
        [eu, em] = r.useState(!1),
        ep = r.useRef(null),
        eh = r.useRef(null),
        ef = r.useRef(null),
        ex = (0, y.Rf)(i),
        eb = r.useCallback(() => {
            ed(!0);
        }, []),
        eg = r.useCallback(() => {
            ed(!1), eo.current || Q || ee(!1);
        }, [Q, ee]),
        ev = r.useCallback(() => {
            ed(!1), Q || ee(!1), (eo.current = !1);
        }, [Q, ee]),
        ej = r.useCallback(() => {
            em(!0);
        }, []),
        ey = r.useCallback(() => {
            em(!1), ee(!1);
        }, [ee]),
        eC = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if ($) return;
                let { withDelay: t = !1 } = e;
                t ? (es.current = window.setTimeout(et, 75)) : et();
            },
            [et, $],
        ),
        e_ = r.useCallback(() => {
            eC();
        }, [eC]),
        eS = r.useCallback(() => {
            window.clearTimeout(es.current), ec || eu || eo.current || ee(!1);
        }, [ec, eu, ee]),
        eE = r.useCallback(() => {
            var e;
            (0, h.dA)({
                questId: i.id,
                event: L.rMx.QUEST_HOVER,
                properties: {
                    content_id: b.jn.QUEST_BAR,
                    content_name: (0, h._b)(b.jn.QUEST_BAR),
                    impression_id: null == (e = H.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: b.jn.QUEST_BAR_V2,
            }),
                (eo.current = !0),
                eC({ withDelay: !0 });
        }, [eC, i]),
        eT = r.useCallback(() => {
            var e;
            (0, h.dA)({
                questId: i.id,
                event: L.rMx.QUEST_HOVER_OFF,
                properties: {
                    content_id: b.jn.QUEST_BAR,
                    content_name: (0, h._b)(b.jn.QUEST_BAR),
                    impression_id: null == (e = H.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: b.jn.QUEST_BAR_V2,
            }),
                (eo.current = !1),
                eS();
        }, [eS, i]);
    if (
        (r.useEffect(() => {
            eu && eT();
        }, [eu, eT]),
        r.useLayoutEffect(() => {
            K && !q && eo.current && et();
        }, [et, K, q]),
        r.useLayoutEffect(() => {
            Q || !K || q || eo.current || ee(!1);
        }, [K, Q, q, ee]),
        r.useEffect(() => {
            W && (0, T.loadVideoQuestModal)();
        }, [W]),
        r.useEffect(() => {
            if (Y) {
                var e;
                (0, h.dA)({
                    questId: i.id,
                    event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: b.jn.QUEST_BAR,
                        content_name: (0, h._b)(b.jn.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: null == (e = H.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: b.jn.QUEST_BAR_V2,
                }),
                    m.Z.increment({
                        name: o.V.QUEST_CONTENT_RENDERING_FAILURE,
                        tags: ["quest_id:".concat(i.id), "reason:asset_loading_error"],
                    });
            }
        }, [Y, i.id]),
        r.useEffect(() => {
            if (!g) {
                var e;
                (0, h.dA)({
                    questId: i.id,
                    event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: b.jn.QUEST_BAR,
                        content_name: (0, h._b)(b.jn.QUEST_BAR),
                        reason: "not_eligible_for_quest",
                        impression_id: null == (e = H.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: b.jn.QUEST_BAR_V2,
                });
            }
        }, [g, i.id]),
        r.useEffect(() => {
            if (!J && ea && !X) {
                var e;
                (0, h.dA)({
                    questId: i.id,
                    event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: b.jn.QUEST_BAR,
                        content_name: (0, h._b)(b.jn.QUEST_BAR),
                        reason: V,
                        impression_id: null == (e = H.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: b.jn.QUEST_BAR_V2,
                });
            }
        }, [J, ea, X, i.id, V]),
        r.useEffect(() => {
            (!G || F) && f.Z.clearTracking(), J && ea && !X && !Y && g && f.Z.stopTracking(i.id);
        }, [G, F, J, ea, X, Y, g, i.id]),
        !g || (!J && ea && !X) || Y)
    )
        return Y ? u.log("Not rendered due to asset error") : g || u.log("Not rendered due to ineligibility"), null;
    let eO = 70 + 78 * !!Q;
    return (0, a.jsx)(S.A, {
        questOrQuests: i,
        questContent: b.jn.QUEST_BAR_V2,
        overrideVisibility: !z && J,
        sourceQuestContent: b.jn.QUEST_BAR_V2,
        children: (e, t) => (
            (H.current = t.current),
            (0, a.jsxs)("div", {
                className: M.mask,
                children: [
                    J &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(U, {
                                    questId: i.id,
                                    isExpanded: $,
                                }),
                                (0, a.jsx)(B, {}),
                            ],
                        }),
                    (0, a.jsx)(s.animated.div, {
                        "aria-hidden": !J,
                        onMouseLeave: eT,
                        onMouseEnter: eE,
                        onFocus: e_,
                        onBlur: eS,
                        className: l()(M.wrapper, {
                            [M.wrapperInvisible]: !J,
                            [M.wrapperVisible]: J && ea,
                        }),
                        style: {
                            height: ei.to({
                                range: [0, 1],
                                output: [0, eO],
                            }),
                        },
                        children: (0, a.jsx)(s.animated.div, {
                            className: l()(M.contentWrapper, {
                                [M.contentWrapperExpanded]: $,
                                [M.contentWrapperAccepted]: K,
                            }),
                            children: (0, a.jsx)(I.t, {
                                springConfig: el,
                                isExpanded: $,
                                children: (0, a.jsx)(N.iQ, {
                                    expandedContentRef: ep,
                                    collapsedContentRef: eh,
                                    expansionSpring: er,
                                    children: (0, a.jsxs)(k.g, {
                                        quest: i,
                                        taskDetails: ex,
                                        isExpanded: $,
                                        isExpansionAnimationComplete: en,
                                        onCtxMenuClose: eg,
                                        onCtxMenuOpen: eb,
                                        onCtxMenuSelect: ev,
                                        onGameSheetOpen: ej,
                                        onGameSheetClose: ey,
                                        collapsedHeight: eO,
                                        children: [
                                            (0, a.jsx)(
                                                P.Z,
                                                {
                                                    ref: eh,
                                                    className: M.content,
                                                    overlayRef: ef,
                                                },
                                                Q ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, a.jsx)(w.Z, {
                                                className: M.content,
                                                overlayRef: ef,
                                                ref: ep,
                                                children: (0, a.jsxs)(a.Fragment, {
                                                    children: [(0, a.jsx)(A.Z, {}), !K && (0, a.jsx)(O.Z, {})],
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                ref: ef,
                                                className: M.overlay,
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    }),
                ],
            })
        ),
    });
}
let G =
    12633 == n.j
        ? function () {
              let e = (0, E.DH)(),
                  { enabled: t, variant: n } = g.nj.getConfig({ location: D.dr.QUESTS_BAR });
              return null == e
                  ? null
                  : (0, a.jsx)(
                        _.x8,
                        {
                            source: D.dr.QUESTS_BAR,
                            questId: e.id,
                            listenForSourceError: t,
                            retrySourceLoadOnError: n === g.b2.LISTEN_AND_RETRY_LOADING,
                            children: (0, a.jsx)(F, { quest: e }),
                        },
                        e.id,
                    );
          }
        : null;
