n.d(t, {
    P: () => L,
    Z: () => U,
});
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(81239),
    o = n(442837),
    c = n(110924),
    d = n(284298),
    u = n(819640),
    m = n(616022),
    p = n(49436),
    h = n(937797),
    f = n(787695),
    b = n(535584),
    x = n(968843),
    g = n(254579),
    v = n(455357),
    j = n(602667),
    y = n(659302),
    C = n(110560),
    _ = n(551097),
    S = n(444134),
    E = n(800926),
    T = n(304083),
    O = n(693900),
    N = n(526188),
    P = n(130653),
    w = n(404672),
    I = n(389012),
    k = n(940419),
    R = n(934738),
    A = n(324805),
    Z = n(748962);
function D(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.qI)({
            mode: t ? A.NH.EXPANDED : A.NH.COLLAPSED,
            questContent: p.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: p.jn.QUEST_BAR_V2,
        }),
        null
    );
}
function M() {
    return (
        r.useEffect(() => {
            d.j.trigger();
        }, []),
        null
    );
}
function L(e) {
    var t, n;
    let { quest: i } = e,
        d = (0, b.T)({
            quest: i,
            location: A.dr.QUESTS_BAR,
        }),
        h = (0, f.Z)({ location: A.dr.QUESTS_BAR }),
        L = (0, o.e7)([m.Z], () => null != m.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: U, reason: B } = (0, y.qN)({
            quest: i,
            location: A.dr.QUESTS_BAR,
        }),
        F = (0, o.e7)([u.Z], () => u.Z.hasLayers()),
        G = r.useRef(null),
        V = r.useMemo(() => (0, g.q8)(i), [i]),
        W = (null == (t = i.userStatus) ? void 0 : t.enrolledAt) != null,
        z = (0, c.Z)(W),
        H = (null == (n = i.userStatus) ? void 0 : n.completedAt) != null,
        { hasError: q, isLoading: K } = (0, v.kC)(),
        Q = r.useContext(P.T) || (h && U && !K && !L),
        {
            isExpanded: Y,
            setIsExpanded: X,
            expandQuestBar: J,
            isExpansionAnimationComplete: $,
            isVisibilityAnimationAtRest: ee,
            expansionSpring: et,
            visibilitySpring: en,
            springConfig: ea,
        } = (0, I.a)({
            isQuestAccepted: W,
            isQuestCompleted: H,
            isQuestBarVisible: Q,
        }),
        {
            handleCtxMenuOpened: er,
            handleCtxMenuClosed: ei,
            handleCtxMenuSelection: el,
            handleGameSheetOpened: es,
            handleGameSheetClosed: eo,
            handleFocusWithoutDelay: ec,
            handleBlur: ed,
            handleMouseEnter: eu,
            handleMouseLeave: em,
        } = (0, k.t)({
            quest: i,
            isExpanded: Y,
            setIsExpanded: X,
            expandQuestBar: J,
            isQuestCompleted: H,
            isQuestAccepted: W,
            prevIsQuestAccepted: z,
            impressionRef: G,
        });
    (0, R.R)({
        quest: i,
        hasAssetsError: q,
        isEligibleForQuests: h,
        isQuestBarVisible: Q,
        isVisibilityAnimationAtRest: ee,
        isLoadingAssets: K,
        currentQuestVisibleReason: B,
        shouldShowQuestBar: U,
        isQuestEnrollmentBlocked: L,
        impressionRef: G,
    });
    let ep = r.useRef(null),
        eh = r.useRef(null),
        ef = r.useRef(null),
        eb = (0, x.Rf)(i);
    if (
        (r.useEffect(() => {
            V && (0, C.loadVideoQuestModal)();
        }, [V]),
        !h || (!Q && ee && !K) || q)
    )
        return q ? d.log("Not rendered due to asset error") : h || d.log("Not rendered due to ineligibility"), null;
    let ex = 70 + 78 * !!H;
    return (0, a.jsx)(j.A, {
        questOrQuests: i,
        questContent: p.jn.QUEST_BAR_V2,
        overrideVisibility: !F && Q,
        sourceQuestContent: p.jn.QUEST_BAR_V2,
        children: (e, t) => (
            (G.current = t.current),
            (0, a.jsxs)("div", {
                className: Z.mask,
                children: [
                    Q &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(D, {
                                    questId: i.id,
                                    isExpanded: Y,
                                }),
                                (0, a.jsx)(M, {}),
                            ],
                        }),
                    (0, a.jsx)(s.animated.div, {
                        "aria-hidden": !Q,
                        onMouseLeave: em,
                        onMouseEnter: eu,
                        onFocus: ec,
                        onBlur: ed,
                        className: l()(Z.wrapper, {
                            [Z.wrapperInvisible]: !Q,
                            [Z.wrapperVisible]: Q && ee,
                        }),
                        style: {
                            height: en.to({
                                range: [0, 1],
                                output: [0, ex],
                            }),
                        },
                        children: (0, a.jsx)(s.animated.div, {
                            className: l()(Z.contentWrapper, {
                                [Z.contentWrapperExpanded]: Y,
                                [Z.contentWrapperAccepted]: W,
                            }),
                            children: (0, a.jsx)(O.t, {
                                springConfig: ea,
                                isExpanded: Y,
                                children: (0, a.jsx)(S.iQ, {
                                    expandedContentRef: ep,
                                    collapsedContentRef: eh,
                                    expansionSpring: et,
                                    children: (0, a.jsxs)(N.g, {
                                        quest: i,
                                        taskDetails: eb,
                                        isExpanded: Y,
                                        isExpansionAnimationComplete: $,
                                        onCtxMenuClose: ei,
                                        onCtxMenuOpen: er,
                                        onCtxMenuSelect: el,
                                        onGameSheetOpen: es,
                                        onGameSheetClose: eo,
                                        collapsedHeight: ex,
                                        children: [
                                            (0, a.jsx)(
                                                E.Z,
                                                {
                                                    ref: eh,
                                                    className: Z.content,
                                                    overlayRef: ef,
                                                },
                                                H ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, a.jsx)(T.Z, {
                                                className: Z.content,
                                                overlayRef: ef,
                                                ref: ep,
                                                children: (0, a.jsxs)(a.Fragment, {
                                                    children: [(0, a.jsx)(w.Z, {}), !W && (0, a.jsx)(_.Z, {})],
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                ref: ef,
                                                className: Z.overlay,
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
let U =
    12633 == n.j
        ? function () {
              let e = (0, y.DH)(),
                  { enabled: t, variant: n } = h.nj.getConfig({ location: A.dr.QUESTS_BAR });
              return null == e
                  ? null
                  : (0, a.jsx)(
                        v.x8,
                        {
                            source: A.dr.QUESTS_BAR,
                            questId: e.id,
                            listenForSourceError: t,
                            retrySourceLoadOnError: n === h.b2.LISTEN_AND_RETRY_LOADING,
                            children: (0, a.jsx)(L, { quest: e }),
                        },
                        e.id,
                    );
          }
        : null;
