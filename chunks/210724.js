n.d(t, {
    P: () => G,
    Z: () => B,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(803948),
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
    P = n(617889),
    w = n(130653),
    D = n(46140),
    x = n(981631),
    L = n(89855);
let j = 84,
    M = 75,
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
        X = (0, d.Z)(q),
        { hasError: Q, isLoading: J } = (0, C.d7)(),
        $ = i.useContext(w.T) || (G && Z && !J && !B),
        ee = i.useRef($),
        et = (0, P.B)(a, $ && !Q),
        en = i.useRef(-1),
        er = i.useRef(!1),
        ei = v.H.useConfig({ location: D.dr.QUESTS_BAR }).enabled && q,
        [ea, eo] = i.useState(!1),
        [es, el] = i.useState(!1),
        [ec, eu] = i.useState(!0),
        [ed, ef] = i.useState(!0),
        [e_, ep] = i.useState(et.preEnrollmentExpandedHeight),
        eh = i.useRef(null),
        em = i.useCallback(
            (e) => {
                ei || (eu(!1), el(e));
            },
            [ei],
        ),
        eg = i.useCallback(() => {
            var e, t;
            ep((null != (t = null == (e = eh.current) ? void 0 : e.offsetHeight) ? t : j) + 2 * et.paddingVertical);
        }, [et.paddingVertical]),
        eE = i.useCallback(() => {
            eg(), em(!0);
        }, [eg, em]),
        eb = i.useCallback(() => {
            eo(!0);
        }, []),
        ey = i.useCallback(() => {
            eo(!1), er.current || q || em(!1);
        }, [q, em]),
        eO = i.useCallback(() => {
            eo(!1), q || em(!1), (er.current = !1);
        }, [q, em]),
        ev = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (es) return;
                let { withDelay: t = !1 } = e;
                t ? (en.current = window.setTimeout(eE, M)) : eE();
            },
            [eE, es],
        ),
        eI = i.useCallback(() => {
            ev();
        }, [ev]),
        eT = i.useCallback(() => {
            window.clearTimeout(en.current), et.canCollapseOnBlur && !ea && (er.current || em(!1));
        }, [ea, et, em]),
        eS = i.useCallback(() => {
            var e;
            (0, h.dA)({
                questId: a.id,
                event: x.rMx.QUEST_HOVER,
                properties: {
                    content_id: y.jn.QUEST_BAR,
                    content_name: (0, h._b)(y.jn.QUEST_BAR),
                    impression_id: null == (e = Y.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: et.trackingCtx.content,
            }),
                (er.current = !0),
                ev({ withDelay: !0 });
        }, [ev, a, et.trackingCtx.content]),
        eA = i.useCallback(() => {
            var e;
            (0, h.dA)({
                questId: a.id,
                event: x.rMx.QUEST_HOVER_OFF,
                properties: {
                    content_id: y.jn.QUEST_BAR,
                    content_name: (0, h._b)(y.jn.QUEST_BAR),
                    impression_id: null == (e = Y.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: et.trackingCtx.content,
            }),
                (er.current = !1),
                eT();
        }, [eT, a, et.trackingCtx.content]);
    i.useLayoutEffect(() => {
        q && et.shouldExpandOnQuestComplete && eE();
    }, [eE, q, et.shouldExpandOnQuestComplete]),
        i.useLayoutEffect(() => {
            K && !z && er.current && eE();
        }, [eE, K, z]),
        i.useLayoutEffect(() => {
            q || !K || z || er.current || em(!1);
        }, [K, q, z, em]),
        i.useLayoutEffect(() => {
            $ !== ee.current && ef(!1), (ee.current = $);
        }, [$]);
    let eC = K ? D.XZ : D.R4,
        [{ expansionSpring: eN }, eR] = (0, u.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: eC,
            onRest: () => {
                eu(!0);
            },
            onStart: () => {
                eu(!1);
            },
        }));
    i.useEffect(() => {
        eR({
            expansionSpring: +!!es,
            immediate: F,
        });
    }, [es, eR, F]);
    let { visibilitySpring: eP } = (0, u.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!$ },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0,
        },
        onRest: () => {
            ef(!0);
        },
        onStart: () => {
            ef(!1);
        },
    });
    i.useEffect(() => {
        W && (0, A.loadVideoQuestModal)();
    }, [W]),
        i.useLayoutEffect(() => {
            q && !X && et.canCollapseOnBlur && eg();
        }, [q, eE, et.canCollapseOnBlur, eg, X]),
        i.useEffect(() => {
            if (Q) {
                var e;
                (0, h.dA)({
                    questId: a.id,
                    event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: y.jn.QUEST_BAR,
                        content_name: (0, h._b)(y.jn.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: null == (e = Y.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: et.trackingCtx.content,
                }),
                    _.Z.increment({
                        name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
                        tags: ["quest_id:".concat(a.id), "reason:asset_loading_error"],
                    });
            }
        }, [Q, a.id, et.trackingCtx.content]),
        i.useEffect(() => {
            if (!G) {
                var e;
                (0, h.dA)({
                    questId: a.id,
                    event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: y.jn.QUEST_BAR,
                        content_name: (0, h._b)(y.jn.QUEST_BAR),
                        reason: "not_eligible_for_quest",
                        impression_id: null == (e = Y.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: et.trackingCtx.content,
                });
            }
        }, [G, a.id, et.trackingCtx.content]),
        i.useEffect(() => {
            if (!$ && ed && !J) {
                var e;
                (0, h.dA)({
                    questId: a.id,
                    event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: y.jn.QUEST_BAR,
                        content_name: (0, h._b)(y.jn.QUEST_BAR),
                        reason: V,
                        impression_id: null == (e = Y.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: et.trackingCtx.content,
                });
            }
        }, [$, ed, J, a.id, V, et.trackingCtx.content]),
        i.useEffect(() => {
            (!Z || B) && m.Z.clearTracking(), $ && ed && !J && !Q && G && m.Z.stopTracking(a.id);
        }, [Z, B, $, ed, J, Q, G, a.id]);
    let ew = (0, O.h)({
        location: D.dr.QUESTS_BAR,
        questConfig: a.config,
    });
    if (!G || (!$ && ed && !J) || Q)
        return Q ? E.log("Not rendered due to asset error") : G || E.log("Not rendered due to ineligibility"), null;
    let eD = k + 78 * !!ei;
    return (0, r.jsx)(S.A, {
        questOrQuests: a,
        questContent: et.trackingCtx.content,
        overrideVisibility: !H && $,
        sourceQuestContent: et.trackingCtx.content,
        children: (e, t) => {
            let n = et.component;
            return (
                (Y.current = t.current),
                (0, r.jsxs)("div", {
                    className: L.mask,
                    children: [
                        $ &&
                            (0, r.jsx)(U, {
                                questId: a.id,
                                isExpanded: es,
                            }),
                        (0, r.jsx)(s.animated.div, {
                            "aria-hidden": !$,
                            onMouseLeave: eA,
                            onMouseEnter: eS,
                            onFocus: eI,
                            onBlur: eT,
                            className: o()(L.wrapper, {
                                [L.wrapperInvisible]: !$,
                                [L.wrapperVisible]: $ && ed,
                            }),
                            style: {
                                color: ew ? void 0 : a.config.colors.secondary,
                                height: eP.to({
                                    range: [0, 1],
                                    output: [0, !et.canCollapseOnBlur && es ? e_ : eD],
                                }),
                            },
                            children: (0, r.jsx)(s.animated.div, {
                                className: o()(L.contentWrapper, {
                                    [L.contentWrapperExpanded]: es,
                                    [L.contentWrapperAccepted]: K,
                                    [L.contentWrapperBrandColorRemoval]: ew,
                                }),
                                style: {
                                    backgroundColor: ew ? void 0 : et.preEnrollmentBackgroundColor,
                                    backgroundImage: K && !ew ? et.postEnrollmentBackgroundImage : void 0,
                                },
                                children: (0, r.jsx)(R.t, {
                                    springConfig: eC,
                                    isExpanded: es,
                                    children: (0, r.jsx)(n, {
                                        expandedContentRef: eh,
                                        expansionSpring: eN,
                                        isExpanded: es,
                                        isExpansionAnimationComplete: ec,
                                        onCtxMenuClosed: ey,
                                        onCtxMenuOpened: eb,
                                        onCtxMenuSelection: eO,
                                        quest: a,
                                        useReducedMotion: F,
                                        collapsedHeight: eD,
                                        shouldShowRewardsCTAWhenCollapsed: ei,
                                    }),
                                }),
                            }),
                        }),
                    ],
                })
            );
        },
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
