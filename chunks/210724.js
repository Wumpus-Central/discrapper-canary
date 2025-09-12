n.d(t, {
    P: () => k,
    Z: () => U,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(938288),
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
    O = n(685138),
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
let j = 75;
function M(e) {
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
function k(e) {
    var t, n;
    let { quest: a } = e,
        E = (0, I.T)({
            quest: a,
            location: w.dr.QUESTS_BAR,
        }),
        k = (0, v.Z)({ location: w.dr.QUESTS_BAR }),
        U = (0, c.e7)([b.Z], () => null != b.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: G, reason: B } = (0, C.qN)({
            quest: a,
            location: w.dr.QUESTS_BAR,
        }),
        Z = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
        F = (0, c.e7)([p.Z], () => p.Z.hasLayers()),
        V = i.useRef(null),
        H = i.useMemo(() => (0, g.q8)(a), [a]),
        Y = (null == (t = a.userStatus) ? void 0 : t.enrolledAt) != null,
        W = (0, d.Z)(Y),
        K = (null == (n = a.userStatus) ? void 0 : n.completedAt) != null,
        { hasError: z, isLoading: q } = (0, A.d7)(),
        X = i.useContext(R.T) || (k && G && !q && !U),
        Q = i.useRef(X),
        J = i.useRef(-1),
        $ = i.useRef(!1),
        [ee, et] = i.useState(!1),
        [en, er] = i.useState(!1),
        [ei, ea] = i.useState(!1),
        [eo, es] = i.useState(!0),
        [el, ec] = i.useState(!0),
        eu = i.useRef(null),
        ed = i.useCallback(
            (e) => {
                K || (es(!1), ea(e));
            },
            [K],
        ),
        ef = i.useCallback(() => {
            ed(!0);
        }, [ed]),
        e_ = i.useCallback(() => {
            et(!0);
        }, []),
        ep = i.useCallback(() => {
            et(!1), $.current || K || ed(!1);
        }, [K, ed]),
        eh = i.useCallback(() => {
            et(!1), K || ed(!1), ($.current = !1);
        }, [K, ed]),
        em = i.useCallback(() => {
            er(!0);
        }, []),
        eg = i.useCallback(() => {
            er(!1), ed(!1);
        }, [ed]),
        eE = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (ei) return;
                let { withDelay: t = !1 } = e;
                t ? (J.current = window.setTimeout(ef, j)) : ef();
            },
            [ef, ei],
        ),
        eb = i.useCallback(() => {
            eE();
        }, [eE]),
        ey = i.useCallback(() => {
            window.clearTimeout(J.current), ee || en || $.current || ed(!1);
        }, [ee, en, ed]),
        eO = i.useCallback(() => {
            var e;
            (0, h.dA)({
                questId: a.id,
                event: x.rMx.QUEST_HOVER,
                properties: {
                    content_id: y.jn.QUEST_BAR,
                    content_name: (0, h._b)(y.jn.QUEST_BAR),
                    impression_id: null == (e = V.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: y.jn.QUEST_BAR_V2,
            }),
                ($.current = !0),
                eE({ withDelay: !0 });
        }, [eE, a]),
        ev = i.useCallback(() => {
            var e;
            (0, h.dA)({
                questId: a.id,
                event: x.rMx.QUEST_HOVER_OFF,
                properties: {
                    content_id: y.jn.QUEST_BAR,
                    content_name: (0, h._b)(y.jn.QUEST_BAR),
                    impression_id: null == (e = V.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: y.jn.QUEST_BAR_V2,
            }),
                ($.current = !1),
                ey();
        }, [ey, a]);
    i.useLayoutEffect(() => {
        Y && !W && $.current && ef();
    }, [ef, Y, W]),
        i.useLayoutEffect(() => {
            K || !Y || W || $.current || ed(!1);
        }, [Y, K, W, ed]),
        i.useLayoutEffect(() => {
            X !== Q.current && ec(!1), (Q.current = X);
        }, [X]);
    let eI = Y ? w.XZ : w.R4,
        [{ expansionSpring: eT }, eS] = (0, u.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: eI,
            onRest: () => {
                es(!0);
            },
            onStart: () => {
                es(!1);
            },
        }));
    i.useEffect(() => {
        eS({
            expansionSpring: +!!ei,
            immediate: Z,
        });
    }, [ei, eS, Z]);
    let { visibilitySpring: eA } = (0, u.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!X },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0,
        },
        onRest: () => {
            ec(!0);
        },
        onStart: () => {
            ec(!1);
        },
    });
    i.useEffect(() => {
        H && (0, S.loadVideoQuestModal)();
    }, [H]),
        i.useEffect(() => {
            if (z) {
                var e;
                (0, h.dA)({
                    questId: a.id,
                    event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: y.jn.QUEST_BAR,
                        content_name: (0, h._b)(y.jn.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: null == (e = V.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: y.jn.QUEST_BAR_V2,
                }),
                    _.Z.increment({
                        name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
                        tags: ["quest_id:".concat(a.id), "reason:asset_loading_error"],
                    });
            }
        }, [z, a.id]),
        i.useEffect(() => {
            if (!k) {
                var e;
                (0, h.dA)({
                    questId: a.id,
                    event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: y.jn.QUEST_BAR,
                        content_name: (0, h._b)(y.jn.QUEST_BAR),
                        reason: "not_eligible_for_quest",
                        impression_id: null == (e = V.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: y.jn.QUEST_BAR_V2,
                });
            }
        }, [k, a.id]),
        i.useEffect(() => {
            if (!X && el && !q) {
                var e;
                (0, h.dA)({
                    questId: a.id,
                    event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: y.jn.QUEST_BAR,
                        content_name: (0, h._b)(y.jn.QUEST_BAR),
                        reason: B,
                        impression_id: null == (e = V.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: y.jn.QUEST_BAR_V2,
                });
            }
        }, [X, el, q, a.id, B]),
        i.useEffect(() => {
            (!G || U) && m.Z.clearTracking(), X && el && !q && !z && k && m.Z.stopTracking(a.id);
        }, [G, U, X, el, q, z, k, a.id]);
    let { enabled: eC, status: eN } = (0, O.n)({
            location: w.dr.QUESTS_BAR,
            questConfig: a.config,
        }),
        eR = (null == eN ? void 0 : eN.progressBlur) ? 88 : 70;
    if (!k || (!X && el && !q) || z)
        return z ? E.log("Not rendered due to asset error") : k || E.log("Not rendered due to ineligibility"), null;
    let eP = eR + 78 * !!K;
    return (0, r.jsx)(T.A, {
        questOrQuests: a,
        questContent: y.jn.QUEST_BAR_V2,
        overrideVisibility: !F && X,
        sourceQuestContent: y.jn.QUEST_BAR_V2,
        children: (e, t) => (
            (V.current = t.current),
            (0, r.jsxs)("div", {
                className: L.mask,
                children: [
                    X &&
                        (0, r.jsx)(M, {
                            questId: a.id,
                            isExpanded: ei,
                        }),
                    (0, r.jsx)(s.animated.div, {
                        "aria-hidden": !X,
                        onMouseLeave: ev,
                        onMouseEnter: eO,
                        onFocus: eb,
                        onBlur: ey,
                        className: o()(L.wrapper, {
                            [L.wrapperInvisible]: !X,
                            [L.wrapperVisible]: X && el,
                        }),
                        style: {
                            color: eC ? void 0 : a.config.colors.secondary,
                            height: eA.to({
                                range: [0, 1],
                                output: [0, eP],
                            }),
                        },
                        children: (0, r.jsx)(s.animated.div, {
                            className: o()(L.contentWrapper, {
                                [L.contentWrapperExpanded]: ei,
                                [L.contentWrapperAccepted]: Y,
                                [L.contentWrapperBrandColorRemoval]: eC,
                            }),
                            style: {
                                backgroundColor: eC ? void 0 : "var(--home-background)",
                                backgroundImage:
                                    Y && !eC ? "linear-gradient(90deg, ".concat(D.aY, ", ").concat(D.v6, ")") : void 0,
                            },
                            children: (0, r.jsx)(N.t, {
                                springConfig: eI,
                                isExpanded: ei,
                                children: (0, r.jsx)(P.Z, {
                                    expandedContentRef: eu,
                                    expansionSpring: eT,
                                    isExpanded: ei,
                                    isExpansionAnimationComplete: eo,
                                    onCtxMenuClosed: ep,
                                    onCtxMenuOpened: e_,
                                    onCtxMenuSelection: eh,
                                    onGameSheetOpened: em,
                                    onGameSheetClosed: eg,
                                    quest: a,
                                    useReducedMotion: Z,
                                    collapsedHeight: eP,
                                }),
                            }),
                        }),
                    }),
                ],
            })
        ),
    });
}
let U = function () {
    let e = (0, C.DH)();
    return null == e
        ? null
        : (0, r.jsx)(
              A.p,
              {
                  source: w.dr.QUESTS_BAR,
                  questId: e.id,
                  children: (0, r.jsx)(k, { quest: e }),
              },
              e.id,
          );
};
