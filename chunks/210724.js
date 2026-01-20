n.d(t, {
    P: () => G,
    Z: () => V,
});
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
    D = n(940419),
    L = n(324805),
    M = n(981631),
    U = n(748962);
function B(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, y.qI)({
            mode: t ? L.NH.EXPANDED : L.NH.COLLAPSED,
            questContent: b.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: b.jn.QUEST_BAR_V2,
        }),
        null
    );
}
function F() {
    return (
        r.useEffect(() => {
            u.j.trigger();
        }, []),
        null
    );
}
function G(e) {
    var t, n;
    let { quest: i } = e,
        u = (0, j.T)({
            quest: i,
            location: L.dr.QUESTS_BAR,
        }),
        g = (0, v.Z)({ location: L.dr.QUESTS_BAR }),
        G = (0, c.e7)([x.Z], () => null != x.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: V, reason: z } = (0, E.qN)({
            quest: i,
            location: L.dr.QUESTS_BAR,
        }),
        H = (0, c.e7)([p.Z], () => p.Z.hasLayers()),
        W = r.useRef(null),
        K = r.useMemo(() => (0, C.q8)(i), [i]),
        q = (null == (t = i.userStatus) ? void 0 : t.enrolledAt) != null,
        Q = (0, d.Z)(q),
        Y = (null == (n = i.userStatus) ? void 0 : n.completedAt) != null,
        { hasError: X, isLoading: J } = (0, _.kC)(),
        $ = r.useContext(R.T) || (g && V && !J && !G),
        {
            isExpanded: ee,
            setIsExpanded: et,
            expandQuestBar: en,
            isExpansionAnimationComplete: ea,
            isVisibilityAnimationAtRest: er,
            expansionSpring: ei,
            visibilitySpring: el,
            springConfig: es,
        } = (0, Z.a)({
            isQuestAccepted: q,
            isQuestCompleted: Y,
            isQuestBarVisible: $,
        }),
        {
            handleCtxMenuOpened: eo,
            handleCtxMenuClosed: ec,
            handleCtxMenuSelection: ed,
            handleGameSheetOpened: eu,
            handleGameSheetClosed: em,
            handleFocusWithoutDelay: ep,
            handleBlur: eh,
            handleMouseEnter: ef,
            handleMouseLeave: ex,
        } = (0, D.t)({
            quest: i,
            isExpanded: ee,
            setIsExpanded: et,
            expandQuestBar: en,
            isQuestCompleted: Y,
            isQuestAccepted: q,
            prevIsQuestAccepted: Q,
            impressionRef: W,
        }),
        eb = r.useRef(null),
        eg = r.useRef(null),
        ev = r.useRef(null),
        ej = (0, y.Rf)(i);
    if (
        (r.useEffect(() => {
            K && (0, T.loadVideoQuestModal)();
        }, [K]),
        r.useEffect(() => {
            if (X) {
                var e;
                (0, h.dA)({
                    questId: i.id,
                    event: M.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: b.jn.QUEST_BAR,
                        content_name: (0, h._b)(b.jn.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: null == (e = W.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: b.jn.QUEST_BAR_V2,
                }),
                    m.Z.increment({
                        name: o.V.QUEST_CONTENT_RENDERING_FAILURE,
                        tags: ["quest_id:".concat(i.id), "reason:asset_loading_error"],
                    });
            }
        }, [X, i.id]),
        r.useEffect(() => {
            if (!g) {
                var e;
                (0, h.dA)({
                    questId: i.id,
                    event: M.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: b.jn.QUEST_BAR,
                        content_name: (0, h._b)(b.jn.QUEST_BAR),
                        reason: "not_eligible_for_quest",
                        impression_id: null == (e = W.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: b.jn.QUEST_BAR_V2,
                });
            }
        }, [g, i.id]),
        r.useEffect(() => {
            if (!$ && er && !J) {
                var e;
                (0, h.dA)({
                    questId: i.id,
                    event: M.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: b.jn.QUEST_BAR,
                        content_name: (0, h._b)(b.jn.QUEST_BAR),
                        reason: z,
                        impression_id: null == (e = W.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: b.jn.QUEST_BAR_V2,
                });
            }
        }, [$, er, J, i.id, z]),
        r.useEffect(() => {
            (!V || G) && f.Z.clearTracking(), $ && er && !J && !X && g && f.Z.stopTracking(i.id);
        }, [V, G, $, er, J, X, g, i.id]),
        !g || (!$ && er && !J) || X)
    )
        return X ? u.log("Not rendered due to asset error") : g || u.log("Not rendered due to ineligibility"), null;
    let ey = 70 + 78 * !!Y;
    return (0, a.jsx)(S.A, {
        questOrQuests: i,
        questContent: b.jn.QUEST_BAR_V2,
        overrideVisibility: !H && $,
        sourceQuestContent: b.jn.QUEST_BAR_V2,
        children: (e, t) => (
            (W.current = t.current),
            (0, a.jsxs)("div", {
                className: U.mask,
                children: [
                    $ &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(B, {
                                    questId: i.id,
                                    isExpanded: ee,
                                }),
                                (0, a.jsx)(F, {}),
                            ],
                        }),
                    (0, a.jsx)(s.animated.div, {
                        "aria-hidden": !$,
                        onMouseLeave: ex,
                        onMouseEnter: ef,
                        onFocus: ep,
                        onBlur: eh,
                        className: l()(U.wrapper, {
                            [U.wrapperInvisible]: !$,
                            [U.wrapperVisible]: $ && er,
                        }),
                        style: {
                            height: el.to({
                                range: [0, 1],
                                output: [0, ey],
                            }),
                        },
                        children: (0, a.jsx)(s.animated.div, {
                            className: l()(U.contentWrapper, {
                                [U.contentWrapperExpanded]: ee,
                                [U.contentWrapperAccepted]: q,
                            }),
                            children: (0, a.jsx)(I.t, {
                                springConfig: es,
                                isExpanded: ee,
                                children: (0, a.jsx)(N.iQ, {
                                    expandedContentRef: eb,
                                    collapsedContentRef: eg,
                                    expansionSpring: ei,
                                    children: (0, a.jsxs)(k.g, {
                                        quest: i,
                                        taskDetails: ej,
                                        isExpanded: ee,
                                        isExpansionAnimationComplete: ea,
                                        onCtxMenuClose: ec,
                                        onCtxMenuOpen: eo,
                                        onCtxMenuSelect: ed,
                                        onGameSheetOpen: eu,
                                        onGameSheetClose: em,
                                        collapsedHeight: ey,
                                        children: [
                                            (0, a.jsx)(
                                                P.Z,
                                                {
                                                    ref: eg,
                                                    className: U.content,
                                                    overlayRef: ev,
                                                },
                                                Y ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, a.jsx)(w.Z, {
                                                className: U.content,
                                                overlayRef: ev,
                                                ref: eb,
                                                children: (0, a.jsxs)(a.Fragment, {
                                                    children: [(0, a.jsx)(A.Z, {}), !q && (0, a.jsx)(O.Z, {})],
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                ref: ev,
                                                className: U.overlay,
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
let V =
    12633 == n.j
        ? function () {
              let e = (0, E.DH)(),
                  { enabled: t, variant: n } = g.nj.getConfig({ location: L.dr.QUESTS_BAR });
              return null == e
                  ? null
                  : (0, a.jsx)(
                        _.x8,
                        {
                            source: L.dr.QUESTS_BAR,
                            questId: e.id,
                            listenForSourceError: t,
                            retrySourceLoadOnError: n === g.b2.LISTEN_AND_RETRY_LOADING,
                            children: (0, a.jsx)(G, { quest: e }),
                        },
                        e.id,
                    );
          }
        : null;
