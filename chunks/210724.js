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
        [ea, eo] = i.useState(!0),
        [es, el] = i.useState(!0),
        ec = i.useRef(null),
        eu = i.useCallback(
            (e) => {
                z || (eo(!1), ei(e));
            },
            [z],
        ),
        ed = i.useCallback(() => {
            eu(!0);
        }, [eu]),
        ef = i.useCallback(() => {
            en(!0);
        }, []),
        e_ = i.useCallback(() => {
            en(!1), ee.current || z || eu(!1);
        }, [z, eu]),
        ep = i.useCallback(() => {
            en(!1), z || eu(!1), (ee.current = !1);
        }, [z, eu]),
        eh = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (er) return;
                let { withDelay: t = !1 } = e;
                t ? ($.current = window.setTimeout(ed, j)) : ed();
            },
            [ed, er],
        ),
        em = i.useCallback(() => {
            eh();
        }, [eh]),
        eg = i.useCallback(() => {
            window.clearTimeout($.current), !et && (ee.current || eu(!1));
        }, [et, eu]),
        eE = i.useCallback(() => {
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
                eh({ withDelay: !0 });
        }, [eh, a]),
        eb = i.useCallback(() => {
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
                eg();
        }, [eg, a]);
    i.useLayoutEffect(() => {
        W && !K && ee.current && ed();
    }, [ed, W, K]),
        i.useLayoutEffect(() => {
            z || !W || K || ee.current || eu(!1);
        }, [W, z, K, eu]),
        i.useLayoutEffect(() => {
            Q !== J.current && el(!1), (J.current = Q);
        }, [Q]);
    let ey = W ? w.XZ : w.R4,
        [{ expansionSpring: eO }, ev] = (0, u.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: ey,
            onRest: () => {
                eo(!0);
            },
            onStart: () => {
                eo(!1);
            },
        }));
    i.useEffect(() => {
        ev({
            expansionSpring: +!!er,
            immediate: F,
        });
    }, [er, ev, F]);
    let { visibilitySpring: eI } = (0, u.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!Q },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0,
        },
        onRest: () => {
            el(!0);
        },
        onStart: () => {
            el(!1);
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
            if (!Q && es && !X) {
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
        }, [Q, es, X, a.id, Z]),
        i.useEffect(() => {
            (!B || G) && m.Z.clearTracking(), Q && es && !X && !q && U && m.Z.stopTracking(a.id);
        }, [B, G, Q, es, X, q, U, a.id]);
    let eT = (0, O.h)({
        location: w.dr.QUESTS_BAR,
        questConfig: a.config,
    });
    if (!U || (!Q && es && !X) || q)
        return q ? E.log("Not rendered due to asset error") : U || E.log("Not rendered due to ineligibility"), null;
    let eS = M + 78 * !!z;
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
                            isExpanded: er,
                        }),
                    (0, r.jsx)(s.animated.div, {
                        "aria-hidden": !Q,
                        onMouseLeave: eb,
                        onMouseEnter: eE,
                        onFocus: em,
                        onBlur: eg,
                        className: o()(L.wrapper, {
                            [L.wrapperInvisible]: !Q,
                            [L.wrapperVisible]: Q && es,
                        }),
                        style: {
                            color: eT ? void 0 : a.config.colors.secondary,
                            height: eI.to({
                                range: [0, 1],
                                output: [0, eS],
                            }),
                        },
                        children: (0, r.jsx)(s.animated.div, {
                            className: o()(L.contentWrapper, {
                                [L.contentWrapperExpanded]: er,
                                [L.contentWrapperAccepted]: W,
                                [L.contentWrapperBrandColorRemoval]: eT,
                            }),
                            style: {
                                backgroundColor: eT ? void 0 : "var(--home-background)",
                                backgroundImage:
                                    W && !eT ? "linear-gradient(90deg, ".concat(D.aY, ", ").concat(D.v6, ")") : void 0,
                            },
                            children: (0, r.jsx)(N.t, {
                                springConfig: ey,
                                isExpanded: er,
                                children: (0, r.jsx)(P.Z, {
                                    expandedContentRef: ec,
                                    expansionSpring: eO,
                                    isExpanded: er,
                                    isExpansionAnimationComplete: ea,
                                    onCtxMenuClosed: e_,
                                    onCtxMenuOpened: ef,
                                    onCtxMenuSelection: ep,
                                    quest: a,
                                    useReducedMotion: F,
                                    collapsedHeight: eS,
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
