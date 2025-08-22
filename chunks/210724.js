n.d(t, {
    P: () => G,
    Z: () => B,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(202841),
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
    v = n(16868),
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
let M = 75,
    k = 70;
function U(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, E.qI)({
            mode: t ? D.NH.EXPANDED : D.NH.COLLAPSED,
            questContent: y.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: y.jn.QUEST_BAR_V2,
        }),
        null
    );
}
function G(e) {
    var t, n;
    let { quest: a } = e,
        E = (0, T.T)({
            quest: a,
            location: D.dr.QUESTS_BAR,
        }),
        G = (0, I.Zy)({ location: D.dr.QUESTS_BAR }),
        B = (0, c.e7)([b.Z], () => null != b.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: Z, reason: V } = (0, N.qN)({
            quest: a,
            location: D.dr.QUESTS_BAR,
        }),
        F = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
        H = (0, c.e7)([p.Z], () => p.Z.hasLayers()),
        Y = i.useRef(null),
        W = i.useMemo(() => (0, g.q8)(a), [a]),
        K = (null == (t = a.userStatus) ? void 0 : t.enrolledAt) != null,
        z = (0, d.Z)(K),
        q = (null == (n = a.userStatus) ? void 0 : n.completedAt) != null,
        { hasError: X, isLoading: Q } = (0, C.d7)(),
        J = i.useContext(P.T) || (G && Z && !Q && !B),
        $ = i.useRef(J),
        ee = i.useRef(-1),
        et = i.useRef(!1),
        en = v.H.useConfig({ location: D.dr.QUESTS_BAR }).enabled && q,
        [er, ei] = i.useState(!1),
        [ea, eo] = i.useState(!1),
        [es, el] = i.useState(!0),
        [ec, eu] = i.useState(!0),
        ed = i.useRef(null),
        ef = i.useCallback(
            (e) => {
                en || (el(!1), eo(e));
            },
            [en],
        ),
        e_ = i.useCallback(() => {
            ef(!0);
        }, [ef]),
        ep = i.useCallback(() => {
            ei(!0);
        }, []),
        eh = i.useCallback(() => {
            ei(!1), et.current || q || ef(!1);
        }, [q, ef]),
        em = i.useCallback(() => {
            ei(!1), q || ef(!1), (et.current = !1);
        }, [q, ef]),
        eg = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (ea) return;
                let { withDelay: t = !1 } = e;
                t ? (ee.current = window.setTimeout(e_, M)) : e_();
            },
            [e_, ea],
        ),
        eE = i.useCallback(() => {
            eg();
        }, [eg]),
        eb = i.useCallback(() => {
            window.clearTimeout(ee.current), !er && (et.current || ef(!1));
        }, [er, ef]),
        ey = i.useCallback(() => {
            var e;
            (0, h.dA)({
                questId: a.id,
                event: L.rMx.QUEST_HOVER,
                properties: {
                    content_id: y.jn.QUEST_BAR,
                    content_name: (0, h._b)(y.jn.QUEST_BAR),
                    impression_id: null == (e = Y.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: y.jn.QUEST_BAR_V2,
            }),
                (et.current = !0),
                eg({ withDelay: !0 });
        }, [eg, a]),
        eO = i.useCallback(() => {
            var e;
            (0, h.dA)({
                questId: a.id,
                event: L.rMx.QUEST_HOVER_OFF,
                properties: {
                    content_id: y.jn.QUEST_BAR,
                    content_name: (0, h._b)(y.jn.QUEST_BAR),
                    impression_id: null == (e = Y.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: y.jn.QUEST_BAR_V2,
            }),
                (et.current = !1),
                eb();
        }, [eb, a]);
    i.useLayoutEffect(() => {
        K && !z && et.current && e_();
    }, [e_, K, z]),
        i.useLayoutEffect(() => {
            q || !K || z || et.current || ef(!1);
        }, [K, q, z, ef]),
        i.useLayoutEffect(() => {
            J !== $.current && eu(!1), ($.current = J);
        }, [J]);
    let ev = K ? D.XZ : D.R4,
        [{ expansionSpring: eI }, eT] = (0, u.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: ev,
            onRest: () => {
                el(!0);
            },
            onStart: () => {
                el(!1);
            },
        }));
    i.useEffect(() => {
        eT({
            expansionSpring: +!!ea,
            immediate: F,
        });
    }, [ea, eT, F]);
    let { visibilitySpring: eS } = (0, u.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!J },
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
        W && (0, A.loadVideoQuestModal)();
    }, [W]),
        i.useEffect(() => {
            if (X) {
                var e;
                (0, h.dA)({
                    questId: a.id,
                    event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: y.jn.QUEST_BAR,
                        content_name: (0, h._b)(y.jn.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: null == (e = Y.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: y.jn.QUEST_BAR_V2,
                }),
                    _.Z.increment({
                        name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
                        tags: ["quest_id:".concat(a.id), "reason:asset_loading_error"],
                    });
            }
        }, [X, a.id]),
        i.useEffect(() => {
            if (!G) {
                var e;
                (0, h.dA)({
                    questId: a.id,
                    event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: y.jn.QUEST_BAR,
                        content_name: (0, h._b)(y.jn.QUEST_BAR),
                        reason: "not_eligible_for_quest",
                        impression_id: null == (e = Y.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: y.jn.QUEST_BAR_V2,
                });
            }
        }, [G, a.id]),
        i.useEffect(() => {
            if (!J && ec && !Q) {
                var e;
                (0, h.dA)({
                    questId: a.id,
                    event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: y.jn.QUEST_BAR,
                        content_name: (0, h._b)(y.jn.QUEST_BAR),
                        reason: V,
                        impression_id: null == (e = Y.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: y.jn.QUEST_BAR_V2,
                });
            }
        }, [J, ec, Q, a.id, V]),
        i.useEffect(() => {
            (!Z || B) && m.Z.clearTracking(), J && ec && !Q && !X && G && m.Z.stopTracking(a.id);
        }, [Z, B, J, ec, Q, X, G, a.id]);
    let eA = (0, O.h)({
        location: D.dr.QUESTS_BAR,
        questConfig: a.config,
    });
    if (!G || (!J && ec && !Q) || X)
        return X ? E.log("Not rendered due to asset error") : G || E.log("Not rendered due to ineligibility"), null;
    let eC = k + 78 * !!en;
    return (0, r.jsx)(S.A, {
        questOrQuests: a,
        questContent: y.jn.QUEST_BAR_V2,
        overrideVisibility: !H && J,
        sourceQuestContent: y.jn.QUEST_BAR_V2,
        children: (e, t) => (
            (Y.current = t.current),
            (0, r.jsxs)("div", {
                className: j.mask,
                children: [
                    J &&
                        (0, r.jsx)(U, {
                            questId: a.id,
                            isExpanded: ea,
                        }),
                    (0, r.jsx)(s.animated.div, {
                        "aria-hidden": !J,
                        onMouseLeave: eO,
                        onMouseEnter: ey,
                        onFocus: eE,
                        onBlur: eb,
                        className: o()(j.wrapper, {
                            [j.wrapperInvisible]: !J,
                            [j.wrapperVisible]: J && ec,
                        }),
                        style: {
                            color: eA ? void 0 : a.config.colors.secondary,
                            height: eS.to({
                                range: [0, 1],
                                output: [0, eC],
                            }),
                        },
                        children: (0, r.jsx)(s.animated.div, {
                            className: o()(j.contentWrapper, {
                                [j.contentWrapperExpanded]: ea,
                                [j.contentWrapperAccepted]: K,
                                [j.contentWrapperBrandColorRemoval]: eA,
                            }),
                            style: {
                                backgroundColor: eA ? void 0 : "var(--home-background)",
                                backgroundImage:
                                    K && !eA ? "linear-gradient(90deg, ".concat(x.aY, ", ").concat(x.v6, ")") : void 0,
                            },
                            children: (0, r.jsx)(R.t, {
                                springConfig: ev,
                                isExpanded: ea,
                                children: (0, r.jsx)(w.Z, {
                                    expandedContentRef: ed,
                                    expansionSpring: eI,
                                    isExpanded: ea,
                                    isExpansionAnimationComplete: es,
                                    onCtxMenuClosed: eh,
                                    onCtxMenuOpened: ep,
                                    onCtxMenuSelection: em,
                                    quest: a,
                                    useReducedMotion: F,
                                    collapsedHeight: eC,
                                    shouldShowRewardsCTAWhenCollapsed: en,
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
