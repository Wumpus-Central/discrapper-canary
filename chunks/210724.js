n.d(t, {
    P: () => V,
    Z: () => M,
}),
    n(388685);
var r = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(205120),
    l = n(286379),
    c = n(442837),
    u = n(481060),
    d = n(110924),
    p = n(607070),
    m = n(284298),
    f = n(797614),
    g = n(819640),
    x = n(617136),
    h = n(823289),
    _ = n(616022),
    b = n(49436),
    j = n(787695),
    v = n(535584),
    C = n(968843),
    y = n(254579),
    E = n(455357),
    O = n(602667),
    S = n(659302),
    T = n(110560),
    w = n(551097),
    P = n(444134),
    N = n(800926),
    R = n(304083),
    A = n(693900),
    B = n(130653),
    k = n(404672),
    I = n(324805),
    D = n(981631),
    q = n(89855);
function Q(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, C.qI)({
            mode: t ? I.NH.EXPANDED : I.NH.COLLAPSED,
            questContent: b.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: b.jn.QUEST_BAR_V2,
        }),
        null
    );
}
function L() {
    return (
        s.useEffect(() => {
            m.j.trigger();
        }, []),
        null
    );
}
function V(e) {
    var t, n;
    let { quest: o } = e,
        m = (0, v.T)({
            quest: o,
            location: I.dr.QUESTS_BAR,
        }),
        V = (0, j.Z)({ location: I.dr.QUESTS_BAR }),
        M = (0, c.e7)([_.Z], () => null != _.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: W, reason: Z } = (0, S.qN)({
            quest: o,
            location: I.dr.QUESTS_BAR,
        }),
        U = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        H = (0, c.e7)([g.Z], () => g.Z.hasLayers()),
        z = s.useRef(null),
        G = s.useMemo(() => (0, y.q8)(o), [o]),
        F = (null == (t = o.userStatus) ? void 0 : t.enrolledAt) != null,
        K = (0, d.Z)(F),
        X = (null == (n = o.userStatus) ? void 0 : n.completedAt) != null,
        { hasError: Y, isLoading: J } = (0, E.kC)(),
        $ = s.useContext(B.T) || (V && W && !J && !M),
        ee = s.useRef($),
        et = s.useRef(-1),
        en = s.useRef(!1),
        [er, es] = s.useState(!1),
        [eo, ea] = s.useState(!1),
        [ei, el] = s.useState(!1),
        [ec, eu] = s.useState(!0),
        [ed, ep] = s.useState(!0),
        em = s.useRef(null),
        ef = s.useRef(null),
        eg = s.useRef(null),
        ex = (0, C.Rf)(o),
        eh = s.useCallback(
            (e) => {
                X || (eu(!1), el(e));
            },
            [X],
        ),
        e_ = s.useCallback(() => {
            eh(!0);
        }, [eh]),
        eb = s.useCallback(() => {
            es(!0);
        }, []),
        ej = s.useCallback(() => {
            es(!1), en.current || X || eh(!1);
        }, [X, eh]),
        ev = s.useCallback(() => {
            es(!1), X || eh(!1), (en.current = !1);
        }, [X, eh]),
        eC = s.useCallback(() => {
            ea(!0);
        }, []),
        ey = s.useCallback(() => {
            ea(!1), eh(!1);
        }, [eh]),
        eE = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (ei) return;
                let { withDelay: t = !1 } = e;
                t ? (et.current = window.setTimeout(e_, 75)) : e_();
            },
            [e_, ei],
        ),
        eO = s.useCallback(() => {
            eE();
        }, [eE]),
        eS = s.useCallback(() => {
            window.clearTimeout(et.current), er || eo || en.current || eh(!1);
        }, [er, eo, eh]),
        eT = s.useCallback(() => {
            var e;
            (0, x.dA)({
                questId: o.id,
                event: D.rMx.QUEST_HOVER,
                properties: {
                    content_id: b.jn.QUEST_BAR,
                    content_name: (0, x._b)(b.jn.QUEST_BAR),
                    impression_id: null == (e = z.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: b.jn.QUEST_BAR_V2,
            }),
                (en.current = !0),
                eE({ withDelay: !0 });
        }, [eE, o]),
        ew = s.useCallback(() => {
            var e;
            (0, x.dA)({
                questId: o.id,
                event: D.rMx.QUEST_HOVER_OFF,
                properties: {
                    content_id: b.jn.QUEST_BAR,
                    content_name: (0, x._b)(b.jn.QUEST_BAR),
                    impression_id: null == (e = z.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: b.jn.QUEST_BAR_V2,
            }),
                (en.current = !1),
                eS();
        }, [eS, o]);
    s.useEffect(() => {
        eo && ew();
    }, [eo, ew]),
        s.useLayoutEffect(() => {
            F && !K && en.current && e_();
        }, [e_, F, K]),
        s.useLayoutEffect(() => {
            X || !F || K || en.current || eh(!1);
        }, [F, X, K, eh]),
        s.useLayoutEffect(() => {
            $ !== ee.current && ep(!1), (ee.current = $);
        }, [$]);
    let eP = F ? I.XZ : I.R4,
        [{ expansionSpring: eN }, eR] = (0, u.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: eP,
            onRest: () => {
                eu(!0);
            },
            onStart: () => {
                eu(!1);
            },
        }));
    s.useEffect(() => {
        eR({
            expansionSpring: +!!ei,
            immediate: U,
        });
    }, [ei, eR, U]);
    let { visibilitySpring: eA } = (0, u.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!$ },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0,
        },
        onRest: () => {
            ep(!0);
        },
        onStart: () => {
            ep(!1);
        },
    });
    if (
        (s.useEffect(() => {
            G && (0, T.loadVideoQuestModal)();
        }, [G]),
        s.useEffect(() => {
            if (Y) {
                var e;
                (0, x.dA)({
                    questId: o.id,
                    event: D.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: b.jn.QUEST_BAR,
                        content_name: (0, x._b)(b.jn.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: null == (e = z.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: b.jn.QUEST_BAR_V2,
                }),
                    f.Z.increment({
                        name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
                        tags: ["quest_id:".concat(o.id), "reason:asset_loading_error"],
                    });
            }
        }, [Y, o.id]),
        s.useEffect(() => {
            if (!V) {
                var e;
                (0, x.dA)({
                    questId: o.id,
                    event: D.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: b.jn.QUEST_BAR,
                        content_name: (0, x._b)(b.jn.QUEST_BAR),
                        reason: "not_eligible_for_quest",
                        impression_id: null == (e = z.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: b.jn.QUEST_BAR_V2,
                });
            }
        }, [V, o.id]),
        s.useEffect(() => {
            if (!$ && ed && !J) {
                var e;
                (0, x.dA)({
                    questId: o.id,
                    event: D.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: b.jn.QUEST_BAR,
                        content_name: (0, x._b)(b.jn.QUEST_BAR),
                        reason: Z,
                        impression_id: null == (e = z.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: b.jn.QUEST_BAR_V2,
                });
            }
        }, [$, ed, J, o.id, Z]),
        s.useEffect(() => {
            (!W || M) && h.Z.clearTracking(), $ && ed && !J && !Y && V && h.Z.stopTracking(o.id);
        }, [W, M, $, ed, J, Y, V, o.id]),
        !V || (!$ && ed && !J) || Y)
    )
        return Y ? m.log("Not rendered due to asset error") : V || m.log("Not rendered due to ineligibility"), null;
    let eB = 70 + 78 * !!X;
    return (0, r.jsx)(O.A, {
        questOrQuests: o,
        questContent: b.jn.QUEST_BAR_V2,
        overrideVisibility: !H && $,
        sourceQuestContent: b.jn.QUEST_BAR_V2,
        children: (e, t) => (
            (z.current = t.current),
            (0, r.jsxs)("div", {
                className: q.mask,
                children: [
                    $ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(Q, {
                                    questId: o.id,
                                    isExpanded: ei,
                                }),
                                (0, r.jsx)(L, {}),
                            ],
                        }),
                    (0, r.jsx)(i.animated.div, {
                        "aria-hidden": !$,
                        onMouseLeave: ew,
                        onMouseEnter: eT,
                        onFocus: eO,
                        onBlur: eS,
                        className: a()(q.wrapper, {
                            [q.wrapperInvisible]: !$,
                            [q.wrapperVisible]: $ && ed,
                        }),
                        style: {
                            height: eA.to({
                                range: [0, 1],
                                output: [0, eB],
                            }),
                        },
                        children: (0, r.jsx)(i.animated.div, {
                            className: a()(q.contentWrapper, {
                                [q.contentWrapperExpanded]: ei,
                                [q.contentWrapperAccepted]: F,
                            }),
                            children: (0, r.jsx)(A.t, {
                                springConfig: eP,
                                isExpanded: ei,
                                children: (0, r.jsxs)(P.iQ, {
                                    expandedContentRef: em,
                                    collapsedContentRef: ef,
                                    expansionSpring: eN,
                                    children: [
                                        (0, r.jsx)(
                                            N.Z,
                                            {
                                                ref: ef,
                                                className: q.content,
                                                expansionSpring: eN,
                                                isExpanded: ei,
                                                isExpansionAnimationComplete: ec,
                                                quest: o,
                                                useReducedMotion: U,
                                                taskDetails: ex,
                                                onCtxMenuOpen: eb,
                                                onCtxMenuClose: ej,
                                                onCtxMenuSelect: ev,
                                                overlayRef: eg,
                                            },
                                            X ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                        ),
                                        (0, r.jsx)(R.Z, {
                                            expansionSpring: eN,
                                            className: q.content,
                                            collapsedHeight: eB,
                                            onCtxMenuOpen: eb,
                                            onCtxMenuClose: ej,
                                            onCtxMenuSelect: ev,
                                            onGameSheetOpened: eC,
                                            onGameSheetClosed: ey,
                                            overlayRef: eg,
                                            isExpanded: ei,
                                            isExpansionAnimationComplete: ec,
                                            quest: o,
                                            useReducedMotion: U,
                                            ref: em,
                                            taskDetails: ex,
                                            children: (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(k.Z, {
                                                        expansionSpring: eN,
                                                        isExpanded: ei,
                                                    }),
                                                    !F &&
                                                        (0, r.jsx)(w.Z, {
                                                            quest: o,
                                                            expansionSpring: eN,
                                                            useReducedMotion: U,
                                                            isExpanded: ei,
                                                            isExpansionAnimationComplete: ec,
                                                            onCtxMenuOpen: eb,
                                                            onCtxMenuClose: ej,
                                                            onCtxMenuSelect: ev,
                                                        }),
                                                ],
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            ref: eg,
                                            className: q.overlay,
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    }),
                ],
            })
        ),
    });
}
let M =
    12633 == n.j
        ? function () {
              let e = (0, S.DH)();
              return null == e
                  ? null
                  : (0, r.jsx)(
                        E.x8,
                        {
                            source: I.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, r.jsx)(V, { quest: e }),
                        },
                        e.id,
                    );
          }
        : null;
