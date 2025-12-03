n.d(t, {
    P: () => Z,
    Z: () => W,
}),
    n(388685);
var r = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(205120),
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
    _ = n(616022),
    b = n(49436),
    j = n(509212),
    v = n(685138),
    C = n(787695),
    y = n(535584),
    E = n(968843),
    O = n(455357),
    S = n(602667),
    T = n(659302),
    w = n(110560),
    P = n(551097),
    N = n(444134),
    R = n(800926),
    A = n(304083),
    B = n(693900),
    k = n(130653),
    I = n(404672),
    D = n(324805),
    q = n(945165),
    L = n(981631),
    Q = n(89855);
function V(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, E.qI)({
            mode: t ? D.NH.EXPANDED : D.NH.COLLAPSED,
            questContent: b.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: b.jn.QUEST_BAR_V2,
        }),
        null
    );
}
function M() {
    return (
        s.useEffect(() => {
            m.j.trigger();
        }, []),
        null
    );
}
function Z(e) {
    var t, n;
    let { quest: o } = e,
        m = (0, y.T)({
            quest: o,
            location: D.dr.QUESTS_BAR,
        }),
        Z = (0, C.Z)({ location: D.dr.QUESTS_BAR }),
        W = (0, c.e7)([_.Z], () => null != _.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: U, reason: H } = (0, T.qN)({
            quest: o,
            location: D.dr.QUESTS_BAR,
        }),
        F = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        z = (0, c.e7)([f.Z], () => f.Z.hasLayers()),
        G = s.useRef(null),
        K = s.useMemo(() => (0, j.q8)(o), [o]),
        X = (null == (t = o.userStatus) ? void 0 : t.enrolledAt) != null,
        Y = (0, u.Z)(X),
        J = (null == (n = o.userStatus) ? void 0 : n.completedAt) != null,
        { hasError: $, isLoading: ee } = (0, O.kC)(),
        et = s.useContext(k.T) || (Z && U && !ee && !W),
        en = s.useRef(et),
        er = s.useRef(-1),
        es = s.useRef(!1),
        [eo, ea] = s.useState(!1),
        [ei, el] = s.useState(!1),
        [ec, ed] = s.useState(!1),
        [eu, ep] = s.useState(!0),
        [em, eg] = s.useState(!0),
        ef = s.useRef(null),
        eh = s.useRef(null),
        ex = s.useRef(null),
        e_ = (0, E.Rf)(o),
        eb = s.useCallback(
            (e) => {
                J || (ep(!1), ed(e));
            },
            [J],
        ),
        ej = s.useCallback(() => {
            eb(!0);
        }, [eb]),
        ev = s.useCallback(() => {
            ea(!0);
        }, []),
        eC = s.useCallback(() => {
            ea(!1), es.current || J || eb(!1);
        }, [J, eb]),
        ey = s.useCallback(() => {
            ea(!1), J || eb(!1), (es.current = !1);
        }, [J, eb]),
        eE = s.useCallback(() => {
            el(!0);
        }, []),
        eO = s.useCallback(() => {
            el(!1), eb(!1);
        }, [eb]),
        eS = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (ec) return;
                let { withDelay: t = !1 } = e;
                t ? (er.current = window.setTimeout(ej, 75)) : ej();
            },
            [ej, ec],
        ),
        eT = s.useCallback(() => {
            eS();
        }, [eS]),
        ew = s.useCallback(() => {
            window.clearTimeout(er.current), eo || ei || es.current || eb(!1);
        }, [eo, ei, eb]),
        eP = s.useCallback(() => {
            var e;
            (0, h.dA)({
                questId: o.id,
                event: L.rMx.QUEST_HOVER,
                properties: {
                    content_id: b.jn.QUEST_BAR,
                    content_name: (0, h._b)(b.jn.QUEST_BAR),
                    impression_id: null == (e = G.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: b.jn.QUEST_BAR_V2,
            }),
                (es.current = !0),
                eS({ withDelay: !0 });
        }, [eS, o]),
        eN = s.useCallback(() => {
            var e;
            (0, h.dA)({
                questId: o.id,
                event: L.rMx.QUEST_HOVER_OFF,
                properties: {
                    content_id: b.jn.QUEST_BAR,
                    content_name: (0, h._b)(b.jn.QUEST_BAR),
                    impression_id: null == (e = G.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: b.jn.QUEST_BAR_V2,
            }),
                (es.current = !1),
                ew();
        }, [ew, o]);
    s.useEffect(() => {
        ei && eN();
    }, [ei, eN]),
        s.useLayoutEffect(() => {
            X && !Y && es.current && ej();
        }, [ej, X, Y]),
        s.useLayoutEffect(() => {
            J || !X || Y || es.current || eb(!1);
        }, [X, J, Y, eb]),
        s.useLayoutEffect(() => {
            et !== en.current && eg(!1), (en.current = et);
        }, [et]);
    let eR = X ? D.XZ : D.R4,
        [{ expansionSpring: eA }, eB] = (0, d.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: eR,
            onRest: () => {
                ep(!0);
            },
            onStart: () => {
                ep(!1);
            },
        }));
    s.useEffect(() => {
        eB({
            expansionSpring: +!!ec,
            immediate: F,
        });
    }, [ec, eB, F]);
    let { visibilitySpring: ek } = (0, d.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!et },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0,
        },
        onRest: () => {
            eg(!0);
        },
        onStart: () => {
            eg(!1);
        },
    });
    s.useEffect(() => {
        K && (0, w.loadVideoQuestModal)();
    }, [K]),
        s.useEffect(() => {
            if ($) {
                var e;
                (0, h.dA)({
                    questId: o.id,
                    event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: b.jn.QUEST_BAR,
                        content_name: (0, h._b)(b.jn.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: null == (e = G.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: b.jn.QUEST_BAR_V2,
                }),
                    g.Z.increment({
                        name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
                        tags: ["quest_id:".concat(o.id), "reason:asset_loading_error"],
                    });
            }
        }, [$, o.id]),
        s.useEffect(() => {
            if (!Z) {
                var e;
                (0, h.dA)({
                    questId: o.id,
                    event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: b.jn.QUEST_BAR,
                        content_name: (0, h._b)(b.jn.QUEST_BAR),
                        reason: "not_eligible_for_quest",
                        impression_id: null == (e = G.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: b.jn.QUEST_BAR_V2,
                });
            }
        }, [Z, o.id]),
        s.useEffect(() => {
            if (!et && em && !ee) {
                var e;
                (0, h.dA)({
                    questId: o.id,
                    event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: b.jn.QUEST_BAR,
                        content_name: (0, h._b)(b.jn.QUEST_BAR),
                        reason: H,
                        impression_id: null == (e = G.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: b.jn.QUEST_BAR_V2,
                });
            }
        }, [et, em, ee, o.id, H]),
        s.useEffect(() => {
            (!U || W) && x.Z.clearTracking(), et && em && !ee && !$ && Z && x.Z.stopTracking(o.id);
        }, [U, W, et, em, ee, $, Z, o.id]);
    let { enabled: eI, status: eD } = (0, v.n)({
            location: D.dr.QUESTS_BAR,
            questConfig: o.config,
        }),
        eq = (null == eD ? void 0 : eD.progressBlur) && !X ? 88 : 70;
    if (!Z || (!et && em && !ee) || $)
        return $ ? m.log("Not rendered due to asset error") : Z || m.log("Not rendered due to ineligibility"), null;
    let eL = eq + 78 * !!J;
    return (0, r.jsx)(S.A, {
        questOrQuests: o,
        questContent: b.jn.QUEST_BAR_V2,
        overrideVisibility: !z && et,
        sourceQuestContent: b.jn.QUEST_BAR_V2,
        children: (e, t) => (
            (G.current = t.current),
            (0, r.jsxs)("div", {
                className: Q.mask,
                children: [
                    et &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(V, {
                                    questId: o.id,
                                    isExpanded: ec,
                                }),
                                (0, r.jsx)(M, {}),
                            ],
                        }),
                    (0, r.jsx)(i.animated.div, {
                        "aria-hidden": !et,
                        onMouseLeave: eN,
                        onMouseEnter: eP,
                        onFocus: eT,
                        onBlur: ew,
                        className: a()(Q.wrapper, {
                            [Q.wrapperInvisible]: !et,
                            [Q.wrapperVisible]: et && em,
                        }),
                        style: {
                            color: eI ? void 0 : o.config.colors.secondary,
                            height: ek.to({
                                range: [0, 1],
                                output: [0, eL],
                            }),
                        },
                        children: (0, r.jsx)(i.animated.div, {
                            className: a()(Q.contentWrapper, {
                                [Q.contentWrapperExpanded]: ec,
                                [Q.contentWrapperAccepted]: X,
                                [Q.contentWrapperBrandColorRemoval]: eI,
                            }),
                            style: {
                                backgroundColor: eI ? void 0 : "var(--home-background)",
                                backgroundImage:
                                    X && !eI ? "linear-gradient(90deg, ".concat(q.cd, ", ").concat(q.v$, ")") : void 0,
                            },
                            children: (0, r.jsx)(B.t, {
                                springConfig: eR,
                                isExpanded: ec,
                                children: (0, r.jsxs)(N.iQ, {
                                    expandedContentRef: ef,
                                    collapsedContentRef: eh,
                                    expansionSpring: eA,
                                    children: [
                                        (0, r.jsx)(
                                            R.Z,
                                            {
                                                ref: eh,
                                                className: Q.content,
                                                expansionSpring: eA,
                                                isExpanded: ec,
                                                isExpansionAnimationComplete: eu,
                                                quest: o,
                                                useReducedMotion: F,
                                                taskDetails: e_,
                                                onCtxMenuOpen: ev,
                                                onCtxMenuClose: eC,
                                                onCtxMenuSelect: ey,
                                                overlayRef: ex,
                                            },
                                            J ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                        ),
                                        (0, r.jsx)(A.Z, {
                                            expansionSpring: eA,
                                            className: Q.content,
                                            collapsedHeight: eL,
                                            onCtxMenuOpen: ev,
                                            onCtxMenuClose: eC,
                                            onCtxMenuSelect: ey,
                                            onGameSheetOpened: eE,
                                            onGameSheetClosed: eO,
                                            overlayRef: ex,
                                            isExpanded: ec,
                                            isExpansionAnimationComplete: eu,
                                            quest: o,
                                            useReducedMotion: F,
                                            ref: ef,
                                            taskDetails: e_,
                                            children: (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(I.Z, {
                                                        expansionSpring: eA,
                                                        isExpanded: ec,
                                                    }),
                                                    !X &&
                                                        (0, r.jsx)(P.Z, {
                                                            quest: o,
                                                            expansionSpring: eA,
                                                            useReducedMotion: F,
                                                            isExpanded: ec,
                                                            isExpansionAnimationComplete: eu,
                                                            onCtxMenuOpen: ev,
                                                            onCtxMenuClose: eC,
                                                            onCtxMenuSelect: ey,
                                                        }),
                                                ],
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            ref: ex,
                                            className: Q.overlay,
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
let W =
    12633 == n.j
        ? function () {
              let e = (0, T.DH)();
              return null == e
                  ? null
                  : (0, r.jsx)(
                        O.x8,
                        {
                            source: D.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, r.jsx)(Z, { quest: e }),
                        },
                        e.id,
                    );
          }
        : null;
