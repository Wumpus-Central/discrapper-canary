n.d(t, {
    P: () => G,
    Z: () => V,
}),
    n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(467721),
    o = n(286379),
    c = n(442837),
    d = n(481060),
    u = n(110924),
    m = n(607070),
    p = n(284298),
    h = n(797614),
    f = n(819640),
    x = n(617136),
    b = n(823289),
    g = n(616022),
    v = n(49436),
    j = n(937797),
    y = n(787695),
    C = n(535584),
    _ = n(968843),
    S = n(254579),
    E = n(455357),
    T = n(602667),
    O = n(659302),
    N = n(110560),
    P = n(551097),
    w = n(444134),
    I = n(800926),
    k = n(304083),
    R = n(693900),
    A = n(526188),
    D = n(130653),
    Z = n(404672),
    L = n(324805),
    M = n(981631),
    U = n(748962);
function B(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, _.qI)({
            mode: t ? L.NH.EXPANDED : L.NH.COLLAPSED,
            questContent: v.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: v.jn.QUEST_BAR_V2,
        }),
        null
    );
}
function F() {
    return (
        r.useEffect(() => {
            p.j.trigger();
        }, []),
        null
    );
}
function G(e) {
    var t, n;
    let { quest: i } = e,
        p = (0, C.T)({
            quest: i,
            location: L.dr.QUESTS_BAR,
        }),
        j = (0, y.Z)({ location: L.dr.QUESTS_BAR }),
        G = (0, c.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: V, reason: H } = (0, O.qN)({
            quest: i,
            location: L.dr.QUESTS_BAR,
        }),
        W = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        z = (0, c.e7)([f.Z], () => f.Z.hasLayers()),
        K = r.useRef(null),
        q = r.useMemo(() => (0, S.q8)(i), [i]),
        Q = (null == (t = i.userStatus) ? void 0 : t.enrolledAt) != null,
        Y = (0, u.Z)(Q),
        X = (null == (n = i.userStatus) ? void 0 : n.completedAt) != null,
        { hasError: J, isLoading: $ } = (0, E.kC)(),
        ee = r.useContext(D.T) || (j && V && !$ && !G),
        et = r.useRef(ee),
        en = r.useRef(-1),
        ea = r.useRef(!1),
        [er, ei] = r.useState(!1),
        [el, es] = r.useState(!1),
        [eo, ec] = r.useState(!1),
        [ed, eu] = r.useState(!0),
        [em, ep] = r.useState(!0),
        eh = r.useRef(null),
        ef = r.useRef(null),
        ex = r.useRef(null),
        eb = (0, _.Rf)(i),
        eg = r.useCallback(
            (e) => {
                X || (eu(!1), ec(e));
            },
            [X],
        ),
        ev = r.useCallback(() => {
            eg(!0);
        }, [eg]),
        ej = r.useCallback(() => {
            ei(!0);
        }, []),
        ey = r.useCallback(() => {
            ei(!1), ea.current || X || eg(!1);
        }, [X, eg]),
        eC = r.useCallback(() => {
            ei(!1), X || eg(!1), (ea.current = !1);
        }, [X, eg]),
        e_ = r.useCallback(() => {
            es(!0);
        }, []),
        eS = r.useCallback(() => {
            es(!1), eg(!1);
        }, [eg]),
        eE = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (eo) return;
                let { withDelay: t = !1 } = e;
                t ? (en.current = window.setTimeout(ev, 75)) : ev();
            },
            [ev, eo],
        ),
        eT = r.useCallback(() => {
            eE();
        }, [eE]),
        eO = r.useCallback(() => {
            window.clearTimeout(en.current), er || el || ea.current || eg(!1);
        }, [er, el, eg]),
        eN = r.useCallback(() => {
            var e;
            (0, x.dA)({
                questId: i.id,
                event: M.rMx.QUEST_HOVER,
                properties: {
                    content_id: v.jn.QUEST_BAR,
                    content_name: (0, x._b)(v.jn.QUEST_BAR),
                    impression_id: null == (e = K.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: v.jn.QUEST_BAR_V2,
            }),
                (ea.current = !0),
                eE({ withDelay: !0 });
        }, [eE, i]),
        eP = r.useCallback(() => {
            var e;
            (0, x.dA)({
                questId: i.id,
                event: M.rMx.QUEST_HOVER_OFF,
                properties: {
                    content_id: v.jn.QUEST_BAR,
                    content_name: (0, x._b)(v.jn.QUEST_BAR),
                    impression_id: null == (e = K.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: v.jn.QUEST_BAR_V2,
            }),
                (ea.current = !1),
                eO();
        }, [eO, i]);
    r.useEffect(() => {
        el && eP();
    }, [el, eP]),
        r.useLayoutEffect(() => {
            Q && !Y && ea.current && ev();
        }, [ev, Q, Y]),
        r.useLayoutEffect(() => {
            X || !Q || Y || ea.current || eg(!1);
        }, [Q, X, Y, eg]),
        r.useLayoutEffect(() => {
            ee !== et.current && ep(!1), (et.current = ee);
        }, [ee]);
    let ew = Q ? L.XZ : L.R4,
        [{ expansionSpring: eI }, ek] = (0, d.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: ew,
            onRest: () => {
                eu(!0);
            },
            onStart: () => {
                eu(!1);
            },
        }));
    r.useEffect(() => {
        ek({
            expansionSpring: +!!eo,
            immediate: W,
        });
    }, [eo, ek, W]);
    let { visibilitySpring: eR } = (0, d.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!ee },
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
        (r.useEffect(() => {
            q && (0, N.loadVideoQuestModal)();
        }, [q]),
        r.useEffect(() => {
            if (J) {
                var e;
                (0, x.dA)({
                    questId: i.id,
                    event: M.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: v.jn.QUEST_BAR,
                        content_name: (0, x._b)(v.jn.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: null == (e = K.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: v.jn.QUEST_BAR_V2,
                }),
                    h.Z.increment({
                        name: o.V.QUEST_CONTENT_RENDERING_FAILURE,
                        tags: ["quest_id:".concat(i.id), "reason:asset_loading_error"],
                    });
            }
        }, [J, i.id]),
        r.useEffect(() => {
            if (!j) {
                var e;
                (0, x.dA)({
                    questId: i.id,
                    event: M.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: v.jn.QUEST_BAR,
                        content_name: (0, x._b)(v.jn.QUEST_BAR),
                        reason: "not_eligible_for_quest",
                        impression_id: null == (e = K.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: v.jn.QUEST_BAR_V2,
                });
            }
        }, [j, i.id]),
        r.useEffect(() => {
            if (!ee && em && !$) {
                var e;
                (0, x.dA)({
                    questId: i.id,
                    event: M.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: v.jn.QUEST_BAR,
                        content_name: (0, x._b)(v.jn.QUEST_BAR),
                        reason: H,
                        impression_id: null == (e = K.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: v.jn.QUEST_BAR_V2,
                });
            }
        }, [ee, em, $, i.id, H]),
        r.useEffect(() => {
            (!V || G) && b.Z.clearTracking(), ee && em && !$ && !J && j && b.Z.stopTracking(i.id);
        }, [V, G, ee, em, $, J, j, i.id]),
        !j || (!ee && em && !$) || J)
    )
        return J ? p.log("Not rendered due to asset error") : j || p.log("Not rendered due to ineligibility"), null;
    let eA = 70 + 78 * !!X;
    return (0, a.jsx)(T.A, {
        questOrQuests: i,
        questContent: v.jn.QUEST_BAR_V2,
        overrideVisibility: !z && ee,
        sourceQuestContent: v.jn.QUEST_BAR_V2,
        children: (e, t) => (
            (K.current = t.current),
            (0, a.jsxs)("div", {
                className: U.mask,
                children: [
                    ee &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(B, {
                                    questId: i.id,
                                    isExpanded: eo,
                                }),
                                (0, a.jsx)(F, {}),
                            ],
                        }),
                    (0, a.jsx)(s.animated.div, {
                        "aria-hidden": !ee,
                        onMouseLeave: eP,
                        onMouseEnter: eN,
                        onFocus: eT,
                        onBlur: eO,
                        className: l()(U.wrapper, {
                            [U.wrapperInvisible]: !ee,
                            [U.wrapperVisible]: ee && em,
                        }),
                        style: {
                            height: eR.to({
                                range: [0, 1],
                                output: [0, eA],
                            }),
                        },
                        children: (0, a.jsx)(s.animated.div, {
                            className: l()(U.contentWrapper, {
                                [U.contentWrapperExpanded]: eo,
                                [U.contentWrapperAccepted]: Q,
                            }),
                            children: (0, a.jsx)(R.t, {
                                springConfig: ew,
                                isExpanded: eo,
                                children: (0, a.jsx)(w.iQ, {
                                    expandedContentRef: eh,
                                    collapsedContentRef: ef,
                                    expansionSpring: eI,
                                    children: (0, a.jsxs)(A.g, {
                                        quest: i,
                                        taskDetails: eb,
                                        isExpanded: eo,
                                        isExpansionAnimationComplete: ed,
                                        onCtxMenuClose: ey,
                                        onCtxMenuOpen: ej,
                                        onCtxMenuSelect: eC,
                                        onGameSheetOpen: e_,
                                        onGameSheetClose: eS,
                                        collapsedHeight: eA,
                                        children: [
                                            (0, a.jsx)(
                                                I.Z,
                                                {
                                                    ref: ef,
                                                    className: U.content,
                                                    overlayRef: ex,
                                                },
                                                X ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, a.jsx)(k.Z, {
                                                className: U.content,
                                                overlayRef: ex,
                                                ref: eh,
                                                children: (0, a.jsxs)(a.Fragment, {
                                                    children: [(0, a.jsx)(Z.Z, {}), !Q && (0, a.jsx)(P.Z, {})],
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                ref: ex,
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
              let e = (0, O.DH)(),
                  { enabled: t } = j.nj.getConfig({ location: L.dr.QUESTS_BAR });
              return null == e
                  ? null
                  : (0, a.jsx)(
                        E.x8,
                        {
                            source: L.dr.QUESTS_BAR,
                            questId: e.id,
                            listenForSourceError: t,
                            children: (0, a.jsx)(G, { quest: e }),
                        },
                        e.id,
                    );
          }
        : null;
