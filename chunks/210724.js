n.d(t, {
    P: () => G,
    Z: () => B,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(401393),
    l = n(286379),
    c = n(442837),
    u = n(481060),
    d = n(110924),
    f = n(607070),
    _ = n(963302),
    p = n(797614),
    h = n(819640),
    m = n(617136),
    g = n(823289),
    E = n(509212),
    b = n(113434),
    y = n(569984),
    O = n(497505),
    v = n(685138),
    I = n(977156),
    T = n(5881),
    S = n(602667),
    A = n(110560),
    C = n(78826),
    N = n(667105),
    R = n(693900),
    P = n(130653),
    w = n(941348),
    D = n(46140),
    x = n(743294),
    L = n(981631),
    j = n(89855);
let M = 75;
function k(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, b.qI)({
            mode: t ? D.NH.EXPANDED : D.NH.COLLAPSED,
            questContent: O.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: O.jn.QUEST_BAR_V2,
        }),
        null
    );
}
function U() {
    return (
        i.useEffect(() => {
            _.j.trigger();
        }, []),
        null
    );
}
function G(e) {
    var t, n;
    let { quest: a } = e,
        _ = (0, T.T)({
            quest: a,
            location: D.dr.QUESTS_BAR,
        }),
        b = (0, I.Z)({ location: D.dr.QUESTS_BAR }),
        G = (0, c.e7)([y.Z], () => null != y.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: B, reason: Z } = (0, N.qN)({
            quest: a,
            location: D.dr.QUESTS_BAR,
        }),
        F = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
        V = (0, c.e7)([h.Z], () => h.Z.hasLayers()),
        H = i.useRef(null),
        Y = i.useMemo(() => (0, E.q8)(a), [a]),
        W = (null == (t = a.userStatus) ? void 0 : t.enrolledAt) != null,
        K = (0, d.Z)(W),
        z = (null == (n = a.userStatus) ? void 0 : n.completedAt) != null,
        { hasError: q, isLoading: X } = (0, C.d7)(),
        Q = i.useContext(P.T) || (b && B && !X && !G),
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
                t ? ($.current = window.setTimeout(e_, M)) : e_();
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
            (0, m.dA)({
                questId: a.id,
                event: L.rMx.QUEST_HOVER,
                properties: {
                    content_id: O.jn.QUEST_BAR,
                    content_name: (0, m._b)(O.jn.QUEST_BAR),
                    impression_id: null == (e = H.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: O.jn.QUEST_BAR_V2,
            }),
                (ee.current = !0),
                eb({ withDelay: !0 });
        }, [eb, a]),
        eI = i.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: a.id,
                event: L.rMx.QUEST_HOVER_OFF,
                properties: {
                    content_id: O.jn.QUEST_BAR,
                    content_name: (0, m._b)(O.jn.QUEST_BAR),
                    impression_id: null == (e = H.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: O.jn.QUEST_BAR_V2,
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
    let eT = W ? D.XZ : D.R4,
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
        Y && (0, A.loadVideoQuestModal)();
    }, [Y]),
        i.useEffect(() => {
            if (q) {
                var e;
                (0, m.dA)({
                    questId: a.id,
                    event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: O.jn.QUEST_BAR,
                        content_name: (0, m._b)(O.jn.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: null == (e = H.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: O.jn.QUEST_BAR_V2,
                }),
                    p.Z.increment({
                        name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
                        tags: ["quest_id:".concat(a.id), "reason:asset_loading_error"],
                    });
            }
        }, [q, a.id]),
        i.useEffect(() => {
            if (!b) {
                var e;
                (0, m.dA)({
                    questId: a.id,
                    event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: O.jn.QUEST_BAR,
                        content_name: (0, m._b)(O.jn.QUEST_BAR),
                        reason: "not_eligible_for_quest",
                        impression_id: null == (e = H.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: O.jn.QUEST_BAR_V2,
                });
            }
        }, [b, a.id]),
        i.useEffect(() => {
            if (!Q && ec && !X) {
                var e;
                (0, m.dA)({
                    questId: a.id,
                    event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: O.jn.QUEST_BAR,
                        content_name: (0, m._b)(O.jn.QUEST_BAR),
                        reason: Z,
                        impression_id: null == (e = H.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: O.jn.QUEST_BAR_V2,
                });
            }
        }, [Q, ec, X, a.id, Z]),
        i.useEffect(() => {
            (!B || G) && g.Z.clearTracking(), Q && ec && !X && !q && b && g.Z.stopTracking(a.id);
        }, [B, G, Q, ec, X, q, b, a.id]);
    let { enabled: eN, status: eR } = (0, v.n)({
            location: D.dr.QUESTS_BAR,
            questConfig: a.config,
        }),
        eP = (null == eR ? void 0 : eR.progressBlur) && !W ? 88 : 70;
    if (!b || (!Q && ec && !X) || q)
        return q ? _.log("Not rendered due to asset error") : b || _.log("Not rendered due to ineligibility"), null;
    let ew = eP + 78 * !!z;
    return (0, r.jsx)(S.A, {
        questOrQuests: a,
        questContent: O.jn.QUEST_BAR_V2,
        overrideVisibility: !V && Q,
        sourceQuestContent: O.jn.QUEST_BAR_V2,
        children: (e, t) => (
            (H.current = t.current),
            (0, r.jsxs)("div", {
                className: j.mask,
                children: [
                    Q &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(k, {
                                    questId: a.id,
                                    isExpanded: ea,
                                }),
                                (0, r.jsx)(U, {}),
                            ],
                        }),
                    (0, r.jsx)(s.animated.div, {
                        "aria-hidden": !Q,
                        onMouseLeave: eI,
                        onMouseEnter: ev,
                        onFocus: ey,
                        onBlur: eO,
                        className: o()(j.wrapper, {
                            [j.wrapperInvisible]: !Q,
                            [j.wrapperVisible]: Q && ec,
                        }),
                        style: {
                            color: eN ? void 0 : a.config.colors.secondary,
                            height: eC.to({
                                range: [0, 1],
                                output: [0, ew],
                            }),
                        },
                        children: (0, r.jsx)(s.animated.div, {
                            className: o()(j.contentWrapper, {
                                [j.contentWrapperExpanded]: ea,
                                [j.contentWrapperAccepted]: W,
                                [j.contentWrapperBrandColorRemoval]: eN,
                            }),
                            style: {
                                backgroundColor: eN ? void 0 : "var(--home-background)",
                                backgroundImage:
                                    W && !eN ? "linear-gradient(90deg, ".concat(x.aY, ", ").concat(x.v6, ")") : void 0,
                            },
                            children: (0, r.jsx)(R.t, {
                                springConfig: eT,
                                isExpanded: ea,
                                children: (0, r.jsx)(w.Z, {
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
                                    collapsedHeight: ew,
                                }),
                            }),
                        }),
                    }),
                ],
            })
        ),
    });
}
let B = function () {
    let e = (0, N.DH)();
    return null == e
        ? null
        : (0, r.jsx)(
              C.p,
              {
                  source: D.dr.QUESTS_BAR,
                  questId: e.id,
                  children: (0, r.jsx)(G, { quest: e }),
              },
              e.id,
          );
};
