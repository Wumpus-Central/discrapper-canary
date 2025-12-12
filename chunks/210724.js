n.d(t, {
    P: () => B,
    Z: () => F,
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
    x = n(819640),
    f = n(617136),
    g = n(823289),
    b = n(616022),
    v = n(49436),
    j = n(787695),
    _ = n(535584),
    y = n(968843),
    C = n(254579),
    S = n(455357),
    E = n(602667),
    O = n(659302),
    T = n(110560),
    N = n(551097),
    P = n(444134),
    w = n(800926),
    I = n(304083),
    k = n(693900),
    R = n(130653),
    A = n(404672),
    D = n(324805),
    Z = n(981631),
    L = n(89855);
function M(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, y.qI)({
            mode: t ? D.NH.EXPANDED : D.NH.COLLAPSED,
            questContent: v.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: v.jn.QUEST_BAR_V2,
        }),
        null
    );
}
function U() {
    return (
        r.useEffect(() => {
            p.j.trigger();
        }, []),
        null
    );
}
function B(e) {
    var t, n;
    let { quest: i } = e,
        p = (0, _.T)({
            quest: i,
            location: D.dr.QUESTS_BAR,
        }),
        B = (0, j.Z)({ location: D.dr.QUESTS_BAR }),
        F = (0, c.e7)([b.Z], () => null != b.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: G, reason: V } = (0, O.qN)({
            quest: i,
            location: D.dr.QUESTS_BAR,
        }),
        H = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        W = (0, c.e7)([x.Z], () => x.Z.hasLayers()),
        z = r.useRef(null),
        q = r.useMemo(() => (0, C.q8)(i), [i]),
        K = (null == (t = i.userStatus) ? void 0 : t.enrolledAt) != null,
        Y = (0, u.Z)(K),
        Q = (null == (n = i.userStatus) ? void 0 : n.completedAt) != null,
        { hasError: X, isLoading: J } = (0, S.kC)(),
        $ = r.useContext(R.T) || (B && G && !J && !F),
        ee = r.useRef($),
        et = r.useRef(-1),
        en = r.useRef(!1),
        [ea, er] = r.useState(!1),
        [ei, el] = r.useState(!1),
        [es, eo] = r.useState(!1),
        [ec, ed] = r.useState(!0),
        [eu, em] = r.useState(!0),
        ep = r.useRef(null),
        eh = r.useRef(null),
        ex = r.useRef(null),
        ef = (0, y.Rf)(i),
        eg = r.useCallback(
            (e) => {
                Q || (ed(!1), eo(e));
            },
            [Q],
        ),
        eb = r.useCallback(() => {
            eg(!0);
        }, [eg]),
        ev = r.useCallback(() => {
            er(!0);
        }, []),
        ej = r.useCallback(() => {
            er(!1), en.current || Q || eg(!1);
        }, [Q, eg]),
        e_ = r.useCallback(() => {
            er(!1), Q || eg(!1), (en.current = !1);
        }, [Q, eg]),
        ey = r.useCallback(() => {
            el(!0);
        }, []),
        eC = r.useCallback(() => {
            el(!1), eg(!1);
        }, [eg]),
        eS = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (es) return;
                let { withDelay: t = !1 } = e;
                t ? (et.current = window.setTimeout(eb, 75)) : eb();
            },
            [eb, es],
        ),
        eE = r.useCallback(() => {
            eS();
        }, [eS]),
        eO = r.useCallback(() => {
            window.clearTimeout(et.current), ea || ei || en.current || eg(!1);
        }, [ea, ei, eg]),
        eT = r.useCallback(() => {
            var e;
            (0, f.dA)({
                questId: i.id,
                event: Z.rMx.QUEST_HOVER,
                properties: {
                    content_id: v.jn.QUEST_BAR,
                    content_name: (0, f._b)(v.jn.QUEST_BAR),
                    impression_id: null == (e = z.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: v.jn.QUEST_BAR_V2,
            }),
                (en.current = !0),
                eS({ withDelay: !0 });
        }, [eS, i]),
        eN = r.useCallback(() => {
            var e;
            (0, f.dA)({
                questId: i.id,
                event: Z.rMx.QUEST_HOVER_OFF,
                properties: {
                    content_id: v.jn.QUEST_BAR,
                    content_name: (0, f._b)(v.jn.QUEST_BAR),
                    impression_id: null == (e = z.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: v.jn.QUEST_BAR_V2,
            }),
                (en.current = !1),
                eO();
        }, [eO, i]);
    r.useEffect(() => {
        ei && eN();
    }, [ei, eN]),
        r.useLayoutEffect(() => {
            K && !Y && en.current && eb();
        }, [eb, K, Y]),
        r.useLayoutEffect(() => {
            Q || !K || Y || en.current || eg(!1);
        }, [K, Q, Y, eg]),
        r.useLayoutEffect(() => {
            $ !== ee.current && em(!1), (ee.current = $);
        }, [$]);
    let eP = K ? D.XZ : D.R4,
        [{ expansionSpring: ew }, eI] = (0, d.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: eP,
            onRest: () => {
                ed(!0);
            },
            onStart: () => {
                ed(!1);
            },
        }));
    r.useEffect(() => {
        eI({
            expansionSpring: +!!es,
            immediate: H,
        });
    }, [es, eI, H]);
    let { visibilitySpring: ek } = (0, d.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!$ },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0,
        },
        onRest: () => {
            em(!0);
        },
        onStart: () => {
            em(!1);
        },
    });
    if (
        (r.useEffect(() => {
            q && (0, T.loadVideoQuestModal)();
        }, [q]),
        r.useEffect(() => {
            if (X) {
                var e;
                (0, f.dA)({
                    questId: i.id,
                    event: Z.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: v.jn.QUEST_BAR,
                        content_name: (0, f._b)(v.jn.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: null == (e = z.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: v.jn.QUEST_BAR_V2,
                }),
                    h.Z.increment({
                        name: o.V.QUEST_CONTENT_RENDERING_FAILURE,
                        tags: ["quest_id:".concat(i.id), "reason:asset_loading_error"],
                    });
            }
        }, [X, i.id]),
        r.useEffect(() => {
            if (!B) {
                var e;
                (0, f.dA)({
                    questId: i.id,
                    event: Z.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: v.jn.QUEST_BAR,
                        content_name: (0, f._b)(v.jn.QUEST_BAR),
                        reason: "not_eligible_for_quest",
                        impression_id: null == (e = z.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: v.jn.QUEST_BAR_V2,
                });
            }
        }, [B, i.id]),
        r.useEffect(() => {
            if (!$ && eu && !J) {
                var e;
                (0, f.dA)({
                    questId: i.id,
                    event: Z.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: v.jn.QUEST_BAR,
                        content_name: (0, f._b)(v.jn.QUEST_BAR),
                        reason: V,
                        impression_id: null == (e = z.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: v.jn.QUEST_BAR_V2,
                });
            }
        }, [$, eu, J, i.id, V]),
        r.useEffect(() => {
            (!G || F) && g.Z.clearTracking(), $ && eu && !J && !X && B && g.Z.stopTracking(i.id);
        }, [G, F, $, eu, J, X, B, i.id]),
        !B || (!$ && eu && !J) || X)
    )
        return X ? p.log("Not rendered due to asset error") : B || p.log("Not rendered due to ineligibility"), null;
    let eR = 70 + 78 * !!Q;
    return (0, a.jsx)(E.A, {
        questOrQuests: i,
        questContent: v.jn.QUEST_BAR_V2,
        overrideVisibility: !W && $,
        sourceQuestContent: v.jn.QUEST_BAR_V2,
        children: (e, t) => (
            (z.current = t.current),
            (0, a.jsxs)("div", {
                className: L.mask,
                children: [
                    $ &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(M, {
                                    questId: i.id,
                                    isExpanded: es,
                                }),
                                (0, a.jsx)(U, {}),
                            ],
                        }),
                    (0, a.jsx)(s.animated.div, {
                        "aria-hidden": !$,
                        onMouseLeave: eN,
                        onMouseEnter: eT,
                        onFocus: eE,
                        onBlur: eO,
                        className: l()(L.wrapper, {
                            [L.wrapperInvisible]: !$,
                            [L.wrapperVisible]: $ && eu,
                        }),
                        style: {
                            height: ek.to({
                                range: [0, 1],
                                output: [0, eR],
                            }),
                        },
                        children: (0, a.jsx)(s.animated.div, {
                            className: l()(L.contentWrapper, {
                                [L.contentWrapperExpanded]: es,
                                [L.contentWrapperAccepted]: K,
                            }),
                            children: (0, a.jsx)(k.t, {
                                springConfig: eP,
                                isExpanded: es,
                                children: (0, a.jsxs)(P.iQ, {
                                    expandedContentRef: ep,
                                    collapsedContentRef: eh,
                                    expansionSpring: ew,
                                    children: [
                                        (0, a.jsx)(
                                            w.Z,
                                            {
                                                ref: eh,
                                                className: L.content,
                                                expansionSpring: ew,
                                                isExpanded: es,
                                                isExpansionAnimationComplete: ec,
                                                quest: i,
                                                useReducedMotion: H,
                                                taskDetails: ef,
                                                onCtxMenuOpen: ev,
                                                onCtxMenuClose: ej,
                                                onCtxMenuSelect: e_,
                                                overlayRef: ex,
                                            },
                                            Q ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                        ),
                                        (0, a.jsx)(I.Z, {
                                            expansionSpring: ew,
                                            className: L.content,
                                            collapsedHeight: eR,
                                            onCtxMenuOpen: ev,
                                            onCtxMenuClose: ej,
                                            onCtxMenuSelect: e_,
                                            onGameSheetOpened: ey,
                                            onGameSheetClosed: eC,
                                            overlayRef: ex,
                                            isExpanded: es,
                                            isExpansionAnimationComplete: ec,
                                            quest: i,
                                            useReducedMotion: H,
                                            ref: ep,
                                            taskDetails: ef,
                                            children: (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(A.Z, {
                                                        expansionSpring: ew,
                                                        isExpanded: es,
                                                    }),
                                                    !K &&
                                                        (0, a.jsx)(N.Z, {
                                                            quest: i,
                                                            expansionSpring: ew,
                                                            useReducedMotion: H,
                                                            isExpanded: es,
                                                            isExpansionAnimationComplete: ec,
                                                            onCtxMenuOpen: ev,
                                                            onCtxMenuClose: ej,
                                                            onCtxMenuSelect: e_,
                                                        }),
                                                ],
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            ref: ex,
                                            className: L.overlay,
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
let F =
    12633 == n.j
        ? function () {
              let e = (0, O.DH)();
              return null == e
                  ? null
                  : (0, a.jsx)(
                        S.x8,
                        {
                            source: D.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, a.jsx)(B, { quest: e }),
                        },
                        e.id,
                    );
          }
        : null;
