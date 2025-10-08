n.d(t, {
    P: () => L,
    Z: () => V,
}),
    n(388685);
var r = n(951288),
    s = n(647438),
    o = n(120356),
    a = n.n(o),
    i = n(137317),
    l = n(286379),
    c = n(442837),
    d = n(481060),
    u = n(110924),
    p = n(607070),
    m = n(963302),
    g = n(797614),
    f = n(819640),
    h = n(617136),
    x = n(823289),
    _ = n(509212),
    b = n(113434),
    v = n(569984),
    j = n(497505),
    C = n(685138),
    y = n(977156),
    E = n(5881),
    O = n(602667),
    S = n(110560),
    T = n(78826),
    w = n(667105),
    P = n(693900),
    N = n(130653),
    A = n(941348),
    R = n(46140),
    B = n(743294),
    k = n(981631),
    I = n(747961);
function q(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, b.qI)({
            mode: t ? R.NH.EXPANDED : R.NH.COLLAPSED,
            questContent: j.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: j.jn.QUEST_BAR_V2,
        }),
        null
    );
}
function D() {
    return (
        s.useEffect(() => {
            m.j.trigger();
        }, []),
        null
    );
}
function L(e) {
    var t, n;
    let { quest: o } = e,
        m = (0, E.T)({
            quest: o,
            location: R.dr.QUESTS_BAR,
        }),
        b = (0, y.Z)({ location: R.dr.QUESTS_BAR }),
        L = (0, c.e7)([v.Z], () => null != v.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: V, reason: Q } = (0, w.qN)({
            quest: o,
            location: R.dr.QUESTS_BAR,
        }),
        M = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        W = (0, c.e7)([f.Z], () => f.Z.hasLayers()),
        Z = s.useRef(null),
        U = s.useMemo(() => (0, _.q8)(o), [o]),
        H = (null == (t = o.userStatus) ? void 0 : t.enrolledAt) != null,
        F = (0, u.Z)(H),
        z = (null == (n = o.userStatus) ? void 0 : n.completedAt) != null,
        { hasError: X, isLoading: G } = (0, T.d7)(),
        K = s.useContext(N.T) || (b && V && !G && !L),
        Y = s.useRef(K),
        J = s.useRef(-1),
        $ = s.useRef(!1),
        [ee, et] = s.useState(!1),
        [en, er] = s.useState(!1),
        [es, eo] = s.useState(!1),
        [ea, ei] = s.useState(!0),
        [el, ec] = s.useState(!0),
        ed = s.useRef(null),
        eu = s.useCallback(
            (e) => {
                z || (ei(!1), eo(e));
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
        ev = s.useCallback(() => {
            window.clearTimeout(J.current), ee || en || $.current || eu(!1);
        }, [ee, en, eu]),
        ej = s.useCallback(() => {
            var e;
            (0, h.dA)({
                questId: o.id,
                event: k.rMx.QUEST_HOVER,
                properties: {
                    content_id: j.jn.QUEST_BAR,
                    content_name: (0, h._b)(j.jn.QUEST_BAR),
                    impression_id: null == (e = Z.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: j.jn.QUEST_BAR_V2,
            }),
                ($.current = !0),
                e_({ withDelay: !0 });
        }, [e_, o]),
        eC = s.useCallback(() => {
            var e;
            (0, h.dA)({
                questId: o.id,
                event: k.rMx.QUEST_HOVER_OFF,
                properties: {
                    content_id: j.jn.QUEST_BAR,
                    content_name: (0, h._b)(j.jn.QUEST_BAR),
                    impression_id: null == (e = Z.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: j.jn.QUEST_BAR_V2,
            }),
                ($.current = !1),
                ev();
        }, [ev, o]);
    s.useEffect(() => {
        en && eC();
    }, [en, eC]),
        s.useLayoutEffect(() => {
            H && !F && $.current && ep();
        }, [ep, H, F]),
        s.useLayoutEffect(() => {
            z || !H || F || $.current || eu(!1);
        }, [H, z, F, eu]),
        s.useLayoutEffect(() => {
            K !== Y.current && ec(!1), (Y.current = K);
        }, [K]);
    let ey = H ? R.XZ : R.R4,
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
        to: { visibilitySpring: +!!K },
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
        U && (0, S.loadVideoQuestModal)();
    }, [U]),
        s.useEffect(() => {
            if (X) {
                var e;
                (0, h.dA)({
                    questId: o.id,
                    event: k.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: j.jn.QUEST_BAR,
                        content_name: (0, h._b)(j.jn.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: null == (e = Z.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: j.jn.QUEST_BAR_V2,
                }),
                    g.Z.increment({
                        name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
                        tags: ["quest_id:".concat(o.id), "reason:asset_loading_error"],
                    });
            }
        }, [X, o.id]),
        s.useEffect(() => {
            if (!b) {
                var e;
                (0, h.dA)({
                    questId: o.id,
                    event: k.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: j.jn.QUEST_BAR,
                        content_name: (0, h._b)(j.jn.QUEST_BAR),
                        reason: "not_eligible_for_quest",
                        impression_id: null == (e = Z.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: j.jn.QUEST_BAR_V2,
                });
            }
        }, [b, o.id]),
        s.useEffect(() => {
            if (!K && el && !G) {
                var e;
                (0, h.dA)({
                    questId: o.id,
                    event: k.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: j.jn.QUEST_BAR,
                        content_name: (0, h._b)(j.jn.QUEST_BAR),
                        reason: Q,
                        impression_id: null == (e = Z.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: j.jn.QUEST_BAR_V2,
                });
            }
        }, [K, el, G, o.id, Q]),
        s.useEffect(() => {
            (!V || L) && x.Z.clearTracking(), K && el && !G && !X && b && x.Z.stopTracking(o.id);
        }, [V, L, K, el, G, X, b, o.id]);
    let { enabled: eT, status: ew } = (0, C.n)({
            location: R.dr.QUESTS_BAR,
            questConfig: o.config,
        }),
        eP = (null == ew ? void 0 : ew.progressBlur) && !H ? 88 : 70;
    if (!b || (!K && el && !G) || X)
        return X ? m.log("Not rendered due to asset error") : b || m.log("Not rendered due to ineligibility"), null;
    let eN = eP + 78 * !!z;
    return (0, r.jsx)(O.A, {
        questOrQuests: o,
        questContent: j.jn.QUEST_BAR_V2,
        overrideVisibility: !W && K,
        sourceQuestContent: j.jn.QUEST_BAR_V2,
        children: (e, t) => (
            (Z.current = t.current),
            (0, r.jsxs)("div", {
                className: I.mask,
                children: [
                    K &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(q, {
                                    questId: o.id,
                                    isExpanded: es,
                                }),
                                (0, r.jsx)(D, {}),
                            ],
                        }),
                    (0, r.jsx)(i.animated.div, {
                        "aria-hidden": !K,
                        onMouseLeave: eC,
                        onMouseEnter: ej,
                        onFocus: eb,
                        onBlur: ev,
                        className: a()(I.wrapper, {
                            [I.wrapperInvisible]: !K,
                            [I.wrapperVisible]: K && el,
                        }),
                        style: {
                            color: eT ? void 0 : o.config.colors.secondary,
                            height: eS.to({
                                range: [0, 1],
                                output: [0, eN],
                            }),
                        },
                        children: (0, r.jsx)(i.animated.div, {
                            className: a()(I.contentWrapper, {
                                [I.contentWrapperExpanded]: es,
                                [I.contentWrapperAccepted]: H,
                                [I.contentWrapperBrandColorRemoval]: eT,
                            }),
                            style: {
                                backgroundColor: eT ? void 0 : "var(--home-background)",
                                backgroundImage:
                                    H && !eT ? "linear-gradient(90deg, ".concat(B.aY, ", ").concat(B.v6, ")") : void 0,
                            },
                            children: (0, r.jsx)(P.t, {
                                springConfig: ey,
                                isExpanded: es,
                                children: (0, r.jsx)(A.Z, {
                                    expandedContentRef: ed,
                                    expansionSpring: eE,
                                    isExpanded: es,
                                    isExpansionAnimationComplete: ea,
                                    onCtxMenuClosed: eg,
                                    onCtxMenuOpened: em,
                                    onCtxMenuSelection: ef,
                                    onGameSheetOpened: eh,
                                    onGameSheetClosed: ex,
                                    quest: o,
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
let V =
    12633 == n.j
        ? function () {
              let e = (0, w.DH)();
              return null == e
                  ? null
                  : (0, r.jsx)(
                        T.p,
                        {
                            source: R.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, r.jsx)(L, { quest: e }),
                        },
                        e.id,
                    );
          }
        : null;
