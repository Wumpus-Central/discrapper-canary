n.d(t, {
    P: () => U,
    Z: () => G,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(261616),
    l = n(286379),
    c = n(442837),
    u = n(481060),
    d = n(110924),
    f = n(607070),
    _ = n(797614),
    p = n(819640),
    h = n(617136),
    m = n(823289),
    g = n(509212),
    E = n(113434),
    b = n(569984),
    y = n(497505),
    O = n(381176),
    v = n(977156),
    I = n(5881),
    T = n(602667),
    S = n(110560),
    A = n(78826),
    C = n(667105),
    N = n(693900),
    R = n(130653),
    P = n(941348),
    w = n(46140),
    D = n(743294),
    x = n(981631),
    L = n(89855);
let j = 75,
    M = 70;
function k(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, E.qI)({
            mode: t ? w.NH.EXPANDED : w.NH.COLLAPSED,
            questContent: y.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: y.jn.QUEST_BAR_V2,
        }),
        null
    );
}
function U(e) {
    var t, n;
    let { quest: a } = e,
        E = (0, I.T)({
            quest: a,
            location: w.dr.QUESTS_BAR,
        }),
        U = (0, v.Z)({ location: w.dr.QUESTS_BAR }),
        G = (0, c.e7)([b.Z], () => null != b.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: B, reason: Z } = (0, C.qN)({
            quest: a,
            location: w.dr.QUESTS_BAR,
        }),
        F = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
        V = (0, c.e7)([p.Z], () => p.Z.hasLayers()),
        H = i.useRef(null),
        Y = i.useMemo(() => (0, g.q8)(a), [a]),
        W = (null == (t = a.userStatus) ? void 0 : t.enrolledAt) != null,
        K = (0, d.Z)(W),
        z = (null == (n = a.userStatus) ? void 0 : n.completedAt) != null,
        { hasError: q, isLoading: X } = (0, A.d7)(),
        Q = i.useContext(R.T) || (U && B && !X && !G),
        J = i.useRef(Q),
        $ = i.useRef(-1),
        ee = i.useRef(!1),
        [et, en] = i.useState(!1),
        [er, ei] = i.useState(!1),
        [ea, eo] = i.useState(!1),
        [es, el] = i.useState(!0),
        [ec, eu] = i.useState(!0),
        ed = i.useRef(null),
        ef = i.useCallback(
            (e) => {
                z || (el(!1), eo(e));
            },
            [z],
        ),
        e_ = i.useCallback(() => {
            ef(!0);
        }, [ef]),
        ep = i.useCallback(() => {
            en(!0);
        }, []),
        eh = i.useCallback(() => {
            en(!1), ee.current || z || ef(!1);
        }, [z, ef]),
        em = i.useCallback(() => {
            en(!1), z || ef(!1), (ee.current = !1);
        }, [z, ef]),
        eg = i.useCallback(() => {
            ei(!0);
        }, []),
        eE = i.useCallback(() => {
            ei(!1), ef(!1);
        }, [ef]),
        eb = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (ea) return;
                let { withDelay: t = !1 } = e;
                t ? ($.current = window.setTimeout(e_, j)) : e_();
            },
            [e_, ea],
        ),
        ey = i.useCallback(() => {
            eb();
        }, [eb]),
        eO = i.useCallback(() => {
            window.clearTimeout($.current), et || er || ee.current || ef(!1);
        }, [et, er, ef]),
        ev = i.useCallback(() => {
            var e;
            (0, h.dA)({
                questId: a.id,
                event: x.rMx.QUEST_HOVER,
                properties: {
                    content_id: y.jn.QUEST_BAR,
                    content_name: (0, h._b)(y.jn.QUEST_BAR),
                    impression_id: null == (e = H.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: y.jn.QUEST_BAR_V2,
            }),
                (ee.current = !0),
                eb({ withDelay: !0 });
        }, [eb, a]),
        eI = i.useCallback(() => {
            var e;
            (0, h.dA)({
                questId: a.id,
                event: x.rMx.QUEST_HOVER_OFF,
                properties: {
                    content_id: y.jn.QUEST_BAR,
                    content_name: (0, h._b)(y.jn.QUEST_BAR),
                    impression_id: null == (e = H.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: y.jn.QUEST_BAR_V2,
            }),
                (ee.current = !1),
                eO();
        }, [eO, a]);
    i.useLayoutEffect(() => {
        W && !K && ee.current && e_();
    }, [e_, W, K]),
        i.useLayoutEffect(() => {
            z || !W || K || ee.current || ef(!1);
        }, [W, z, K, ef]),
        i.useLayoutEffect(() => {
            Q !== J.current && eu(!1), (J.current = Q);
        }, [Q]);
    let eT = W ? w.XZ : w.R4,
        [{ expansionSpring: eS }, eA] = (0, u.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: eT,
            onRest: () => {
                el(!0);
            },
            onStart: () => {
                el(!1);
            },
        }));
    i.useEffect(() => {
        eA({
            expansionSpring: +!!ea,
            immediate: F,
        });
    }, [ea, eA, F]);
    let { visibilitySpring: eC } = (0, u.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!Q },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0,
        },
        onRest: () => {
            eu(!0);
        },
        onStart: () => {
            eu(!1);
        },
    });
    i.useEffect(() => {
        Y && (0, S.loadVideoQuestModal)();
    }, [Y]),
        i.useEffect(() => {
            if (q) {
                var e;
                (0, h.dA)({
                    questId: a.id,
                    event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: y.jn.QUEST_BAR,
                        content_name: (0, h._b)(y.jn.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: null == (e = H.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: y.jn.QUEST_BAR_V2,
                }),
                    _.Z.increment({
                        name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
                        tags: ["quest_id:".concat(a.id), "reason:asset_loading_error"],
                    });
            }
        }, [q, a.id]),
        i.useEffect(() => {
            if (!U) {
                var e;
                (0, h.dA)({
                    questId: a.id,
                    event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: y.jn.QUEST_BAR,
                        content_name: (0, h._b)(y.jn.QUEST_BAR),
                        reason: "not_eligible_for_quest",
                        impression_id: null == (e = H.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: y.jn.QUEST_BAR_V2,
                });
            }
        }, [U, a.id]),
        i.useEffect(() => {
            if (!Q && ec && !X) {
                var e;
                (0, h.dA)({
                    questId: a.id,
                    event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: y.jn.QUEST_BAR,
                        content_name: (0, h._b)(y.jn.QUEST_BAR),
                        reason: Z,
                        impression_id: null == (e = H.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: y.jn.QUEST_BAR_V2,
                });
            }
        }, [Q, ec, X, a.id, Z]),
        i.useEffect(() => {
            (!B || G) && m.Z.clearTracking(), Q && ec && !X && !q && U && m.Z.stopTracking(a.id);
        }, [B, G, Q, ec, X, q, U, a.id]);
    let eN = (0, O.h)({
        location: w.dr.QUESTS_BAR,
        questConfig: a.config,
    });
    if (!U || (!Q && ec && !X) || q)
        return q ? E.log("Not rendered due to asset error") : U || E.log("Not rendered due to ineligibility"), null;
    let eR = M + 78 * !!z;
    return (0, r.jsx)(T.A, {
        questOrQuests: a,
        questContent: y.jn.QUEST_BAR_V2,
        overrideVisibility: !V && Q,
        sourceQuestContent: y.jn.QUEST_BAR_V2,
        children: (e, t) => (
            (H.current = t.current),
            (0, r.jsxs)("div", {
                className: L.mask,
                children: [
                    Q &&
                        (0, r.jsx)(k, {
                            questId: a.id,
                            isExpanded: ea,
                        }),
                    (0, r.jsx)(s.animated.div, {
                        "aria-hidden": !Q,
                        onMouseLeave: eI,
                        onMouseEnter: ev,
                        onFocus: ey,
                        onBlur: eO,
                        className: o()(L.wrapper, {
                            [L.wrapperInvisible]: !Q,
                            [L.wrapperVisible]: Q && ec,
                        }),
                        style: {
                            color: eN ? void 0 : a.config.colors.secondary,
                            height: eC.to({
                                range: [0, 1],
                                output: [0, eR],
                            }),
                        },
                        children: (0, r.jsx)(s.animated.div, {
                            className: o()(L.contentWrapper, {
                                [L.contentWrapperExpanded]: ea,
                                [L.contentWrapperAccepted]: W,
                                [L.contentWrapperBrandColorRemoval]: eN,
                            }),
                            style: {
                                backgroundColor: eN ? void 0 : "var(--home-background)",
                                backgroundImage:
                                    W && !eN ? "linear-gradient(90deg, ".concat(D.aY, ", ").concat(D.v6, ")") : void 0,
                            },
                            children: (0, r.jsx)(N.t, {
                                springConfig: eT,
                                isExpanded: ea,
                                children: (0, r.jsx)(P.Z, {
                                    expandedContentRef: ed,
                                    expansionSpring: eS,
                                    isExpanded: ea,
                                    isExpansionAnimationComplete: es,
                                    onCtxMenuClosed: eh,
                                    onCtxMenuOpened: ep,
                                    onCtxMenuSelection: em,
                                    onGameSheetOpened: eg,
                                    onGameSheetClosed: eE,
                                    quest: a,
                                    useReducedMotion: F,
                                    collapsedHeight: eR,
                                }),
                            }),
                        }),
                    }),
                ],
            })
        ),
    });
}
let G = function () {
    let e = (0, C.DH)();
    return null == e
        ? null
        : (0, r.jsx)(
              A.p,
              {
                  source: w.dr.QUESTS_BAR,
                  questId: e.id,
                  children: (0, r.jsx)(U, { quest: e }),
              },
              e.id,
          );
};
