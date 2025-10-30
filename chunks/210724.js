n.d(t, {
    P: () => L,
    Z: () => Q,
}),
    n(388685);
var r = n(951288),
    s = n(647438),
    a = n(120356),
    o = n.n(a),
    i = n(13941),
    l = n(286379),
    c = n(442837),
    d = n(481060),
    u = n(110924),
    p = n(607070),
    m = n(284298),
    g = n(797614),
    f = n(819640),
    h = n(617136),
    x = n(823289),
    _ = n(509212),
    b = n(113434),
    j = n(569984),
    v = n(497505),
    C = n(685138),
    y = n(977156),
    E = n(5881),
    O = n(602667),
    S = n(110560),
    T = n(78826),
    w = n(667105),
    P = n(693900),
    N = n(130653),
    R = n(941348),
    A = n(46140),
    B = n(743294),
    k = n(981631),
    I = n(747961);
function D(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, b.qI)({
            mode: t ? A.NH.EXPANDED : A.NH.COLLAPSED,
            questContent: v.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: v.jn.QUEST_BAR_V2,
        }),
        null
    );
}
function q() {
    return (
        s.useEffect(() => {
            m.j.trigger();
        }, []),
        null
    );
}
function L(e) {
    var t, n;
    let { quest: a } = e,
        m = (0, E.T)({
            quest: a,
            location: A.dr.QUESTS_BAR,
        }),
        b = (0, y.Z)({ location: A.dr.QUESTS_BAR }),
        L = (0, c.e7)([j.Z], () => null != j.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: Q, reason: V } = (0, w.qN)({
            quest: a,
            location: A.dr.QUESTS_BAR,
        }),
        M = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        Z = (0, c.e7)([f.Z], () => f.Z.hasLayers()),
        W = s.useRef(null),
        H = s.useMemo(() => (0, _.q8)(a), [a]),
        U = (null == (t = a.userStatus) ? void 0 : t.enrolledAt) != null,
        F = (0, u.Z)(U),
        z = (null == (n = a.userStatus) ? void 0 : n.completedAt) != null,
        { hasError: K, isLoading: G } = (0, T.d7)(),
        X = s.useContext(N.T) || (b && Q && !G && !L),
        Y = s.useRef(X),
        J = s.useRef(-1),
        $ = s.useRef(!1),
        [ee, et] = s.useState(!1),
        [en, er] = s.useState(!1),
        [es, ea] = s.useState(!1),
        [eo, ei] = s.useState(!0),
        [el, ec] = s.useState(!0),
        ed = s.useRef(null),
        eu = s.useCallback(
            (e) => {
                z || (ei(!1), ea(e));
            },
            [z],
        ),
        ep = s.useCallback(() => {
            eu(!0);
        }, [eu]),
        em = s.useCallback(() => {
            et(!0);
        }, []),
        eg = s.useCallback(() => {
            et(!1), $.current || z || eu(!1);
        }, [z, eu]),
        ef = s.useCallback(() => {
            et(!1), z || eu(!1), ($.current = !1);
        }, [z, eu]),
        eh = s.useCallback(() => {
            er(!0);
        }, []),
        ex = s.useCallback(() => {
            er(!1), eu(!1);
        }, [eu]),
        e_ = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (es) return;
                let { withDelay: t = !1 } = e;
                t ? (J.current = window.setTimeout(ep, 75)) : ep();
            },
            [ep, es],
        ),
        eb = s.useCallback(() => {
            e_();
        }, [e_]),
        ej = s.useCallback(() => {
            window.clearTimeout(J.current), ee || en || $.current || eu(!1);
        }, [ee, en, eu]),
        ev = s.useCallback(() => {
            var e;
            (0, h.dA)({
                questId: a.id,
                event: k.rMx.QUEST_HOVER,
                properties: {
                    content_id: v.jn.QUEST_BAR,
                    content_name: (0, h._b)(v.jn.QUEST_BAR),
                    impression_id: null == (e = W.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: v.jn.QUEST_BAR_V2,
            }),
                ($.current = !0),
                e_({ withDelay: !0 });
        }, [e_, a]),
        eC = s.useCallback(() => {
            var e;
            (0, h.dA)({
                questId: a.id,
                event: k.rMx.QUEST_HOVER_OFF,
                properties: {
                    content_id: v.jn.QUEST_BAR,
                    content_name: (0, h._b)(v.jn.QUEST_BAR),
                    impression_id: null == (e = W.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: v.jn.QUEST_BAR_V2,
            }),
                ($.current = !1),
                ej();
        }, [ej, a]);
    s.useEffect(() => {
        en && eC();
    }, [en, eC]),
        s.useLayoutEffect(() => {
            U && !F && $.current && ep();
        }, [ep, U, F]),
        s.useLayoutEffect(() => {
            z || !U || F || $.current || eu(!1);
        }, [U, z, F, eu]),
        s.useLayoutEffect(() => {
            X !== Y.current && ec(!1), (Y.current = X);
        }, [X]);
    let ey = U ? A.XZ : A.R4,
        [{ expansionSpring: eE }, eO] = (0, d.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: ey,
            onRest: () => {
                ei(!0);
            },
            onStart: () => {
                ei(!1);
            },
        }));
    s.useEffect(() => {
        eO({
            expansionSpring: +!!es,
            immediate: M,
        });
    }, [es, eO, M]);
    let { visibilitySpring: eS } = (0, d.q_F)({
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
    s.useEffect(() => {
        H && (0, S.loadVideoQuestModal)();
    }, [H]),
        s.useEffect(() => {
            if (K) {
                var e;
                (0, h.dA)({
                    questId: a.id,
                    event: k.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: v.jn.QUEST_BAR,
                        content_name: (0, h._b)(v.jn.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: null == (e = W.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: v.jn.QUEST_BAR_V2,
                }),
                    g.Z.increment({
                        name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
                        tags: ["quest_id:".concat(a.id), "reason:asset_loading_error"],
                    });
            }
        }, [K, a.id]),
        s.useEffect(() => {
            if (!b) {
                var e;
                (0, h.dA)({
                    questId: a.id,
                    event: k.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: v.jn.QUEST_BAR,
                        content_name: (0, h._b)(v.jn.QUEST_BAR),
                        reason: "not_eligible_for_quest",
                        impression_id: null == (e = W.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: v.jn.QUEST_BAR_V2,
                });
            }
        }, [b, a.id]),
        s.useEffect(() => {
            if (!X && el && !G) {
                var e;
                (0, h.dA)({
                    questId: a.id,
                    event: k.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: v.jn.QUEST_BAR,
                        content_name: (0, h._b)(v.jn.QUEST_BAR),
                        reason: V,
                        impression_id: null == (e = W.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: v.jn.QUEST_BAR_V2,
                });
            }
        }, [X, el, G, a.id, V]),
        s.useEffect(() => {
            (!Q || L) && x.Z.clearTracking(), X && el && !G && !K && b && x.Z.stopTracking(a.id);
        }, [Q, L, X, el, G, K, b, a.id]);
    let { enabled: eT, status: ew } = (0, C.n)({
            location: A.dr.QUESTS_BAR,
            questConfig: a.config,
        }),
        eP = (null == ew ? void 0 : ew.progressBlur) && !U ? 88 : 70;
    if (!b || (!X && el && !G) || K)
        return K ? m.log("Not rendered due to asset error") : b || m.log("Not rendered due to ineligibility"), null;
    let eN = eP + 78 * !!z;
    return (0, r.jsx)(O.A, {
        questOrQuests: a,
        questContent: v.jn.QUEST_BAR_V2,
        overrideVisibility: !Z && X,
        sourceQuestContent: v.jn.QUEST_BAR_V2,
        children: (e, t) => (
            (W.current = t.current),
            (0, r.jsxs)("div", {
                className: I.mask,
                children: [
                    X &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(D, {
                                    questId: a.id,
                                    isExpanded: es,
                                }),
                                (0, r.jsx)(q, {}),
                            ],
                        }),
                    (0, r.jsx)(i.animated.div, {
                        "aria-hidden": !X,
                        onMouseLeave: eC,
                        onMouseEnter: ev,
                        onFocus: eb,
                        onBlur: ej,
                        className: o()(I.wrapper, {
                            [I.wrapperInvisible]: !X,
                            [I.wrapperVisible]: X && el,
                        }),
                        style: {
                            color: eT ? void 0 : a.config.colors.secondary,
                            height: eS.to({
                                range: [0, 1],
                                output: [0, eN],
                            }),
                        },
                        children: (0, r.jsx)(i.animated.div, {
                            className: o()(I.contentWrapper, {
                                [I.contentWrapperExpanded]: es,
                                [I.contentWrapperAccepted]: U,
                                [I.contentWrapperBrandColorRemoval]: eT,
                            }),
                            style: {
                                backgroundColor: eT ? void 0 : "var(--home-background)",
                                backgroundImage:
                                    U && !eT ? "linear-gradient(90deg, ".concat(B.aY, ", ").concat(B.v6, ")") : void 0,
                            },
                            children: (0, r.jsx)(P.t, {
                                springConfig: ey,
                                isExpanded: es,
                                children: (0, r.jsx)(R.Z, {
                                    expandedContentRef: ed,
                                    expansionSpring: eE,
                                    isExpanded: es,
                                    isExpansionAnimationComplete: eo,
                                    onCtxMenuClosed: eg,
                                    onCtxMenuOpened: em,
                                    onCtxMenuSelection: ef,
                                    onGameSheetOpened: eh,
                                    onGameSheetClosed: ex,
                                    quest: a,
                                    useReducedMotion: M,
                                    collapsedHeight: eN,
                                }),
                            }),
                        }),
                    }),
                ],
            })
        ),
    });
}
let Q =
    12633 == n.j
        ? function () {
              let e = (0, w.DH)();
              return null == e
                  ? null
                  : (0, r.jsx)(
                        T.p,
                        {
                            source: A.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, r.jsx)(L, { quest: e }),
                        },
                        e.id,
                    );
          }
        : null;
