n.d(t, {
    P: () => k,
    Z: () => q,
}),
    n(388685);
var r = n(951288),
    s = n(647438),
    o = n(120356),
    a = n.n(o),
    i = n(815061),
    l = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(607070),
    p = n(819640),
    m = n(617136),
    f = n(823289),
    g = n(509212),
    x = n(113434),
    h = n(569984),
    b = n(497505),
    _ = n(192023),
    j = n(16868),
    v = n(977156),
    C = n(5881),
    y = n(602667),
    E = n(110560),
    O = n(78826),
    S = n(667105),
    T = n(693900),
    w = n(617889),
    P = n(130653),
    A = n(46140),
    N = n(981631),
    R = n(89855);
function B(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.qI)({
            mode: t ? A.NH.EXPANDED : A.NH.COLLAPSED,
            questContent: b.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: b.jn.QUEST_BAR_V2,
        }),
        null
    );
}
function k(e) {
    var t, n;
    let { quest: o } = e,
        x = (0, C.T)({
            quest: o,
            location: A.dr.QUESTS_BAR,
        }),
        k = (0, v.Zy)({ location: A.dr.QUESTS_BAR }),
        q = (0, l.e7)([h.Z], () => null != h.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: I, reason: Q } = (0, S.qN)({
            quest: o,
            location: A.dr.QUESTS_BAR,
        }),
        D = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        V = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        M = s.useRef(null),
        L = s.useMemo(() => (0, g.q8)(o), [o]),
        W = (null == (t = o.userStatus) ? void 0 : t.enrolledAt) != null,
        Z = (0, d.Z)(W),
        U = (null == (n = o.userStatus) ? void 0 : n.completedAt) != null,
        H = (0, d.Z)(U),
        { hasError: F, isLoading: z } = (0, O.d7)(),
        X = s.useContext(P.T) || (k && I && !z && !q),
        K = s.useRef(X),
        Y = (0, w.B)(o, X && !F),
        G = s.useRef(-1),
        J = s.useRef(!1),
        $ = j.H.useConfig({ location: A.dr.QUESTS_BAR }).enabled && U,
        [ee, et] = s.useState(!1),
        [en, er] = s.useState(!1),
        [es, eo] = s.useState(!0),
        [ea, ei] = s.useState(!0),
        [el, ec] = s.useState(Y.preEnrollmentExpandedHeight),
        ed = s.useRef(null),
        eu = s.useCallback(
            (e) => {
                $ || (eo(!1), er(e));
            },
            [$],
        ),
        ep = s.useCallback(() => {
            var e, t;
            ec((null != (t = null == (e = ed.current) ? void 0 : e.offsetHeight) ? t : 84) + 2 * Y.paddingVertical);
        }, [Y.paddingVertical]),
        em = s.useCallback(() => {
            ep(), eu(!0);
        }, [ep, eu]),
        ef = s.useCallback(() => {
            et(!0);
        }, []),
        eg = s.useCallback(() => {
            et(!1), J.current || U || eu(!1);
        }, [U, eu]),
        ex = s.useCallback(() => {
            et(!1), U || eu(!1), (J.current = !1);
        }, [U, eu]),
        eh = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (en) return;
                let { withDelay: t = !1 } = e;
                t ? (G.current = window.setTimeout(em, 75)) : em();
            },
            [em, en],
        ),
        eb = s.useCallback(() => {
            eh();
        }, [eh]),
        e_ = s.useCallback(() => {
            window.clearTimeout(G.current), Y.canCollapseOnBlur && !ee && (J.current || eu(!1));
        }, [ee, Y, eu]),
        ej = s.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: o.id,
                event: N.rMx.QUEST_HOVER,
                properties: {
                    content_id: b.jn.QUEST_BAR,
                    content_name: (0, m._b)(b.jn.QUEST_BAR),
                    impression_id: null == (e = M.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: Y.trackingCtx.content,
            }),
                (J.current = !0),
                eh({ withDelay: !0 });
        }, [eh, o, Y.trackingCtx.content]),
        ev = s.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: o.id,
                event: N.rMx.QUEST_HOVER_OFF,
                properties: {
                    content_id: b.jn.QUEST_BAR,
                    content_name: (0, m._b)(b.jn.QUEST_BAR),
                    impression_id: null == (e = M.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: Y.trackingCtx.content,
            }),
                (J.current = !1),
                e_();
        }, [e_, o, Y.trackingCtx.content]);
    s.useLayoutEffect(() => {
        U && Y.shouldExpandOnQuestComplete && em();
    }, [em, U, Y.shouldExpandOnQuestComplete]),
        s.useLayoutEffect(() => {
            W && !Z && J.current && em();
        }, [em, W, Z]),
        s.useLayoutEffect(() => {
            U || !W || Z || J.current || eu(!1);
        }, [W, U, Z, eu]),
        s.useLayoutEffect(() => {
            X !== K.current && ei(!1), (K.current = X);
        }, [X]);
    let eC = W ? A.XZ : A.R4,
        [{ expansionSpring: ey }, eE] = (0, c.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: eC,
            onRest: () => {
                eo(!0);
            },
            onStart: () => {
                eo(!1);
            },
        }));
    s.useEffect(() => {
        eE({
            expansionSpring: +!!en,
            immediate: D,
        });
    }, [en, eE, D]);
    let { visibilitySpring: eO } = (0, c.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!X },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0,
        },
        onRest: () => {
            ei(!0);
        },
        onStart: () => {
            ei(!1);
        },
    });
    s.useEffect(() => {
        L && (0, E.loadVideoQuestModal)();
    }, [L]),
        s.useLayoutEffect(() => {
            U && !H && Y.canCollapseOnBlur && ep();
        }, [U, em, Y.canCollapseOnBlur, ep, H]),
        s.useEffect(() => {
            var e, t;
            F &&
                (0, m.dA)({
                    questId: o.id,
                    event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: b.jn.QUEST_BAR,
                        content_name: (0, m._b)(b.jn.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: null == (e = M.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: Y.trackingCtx.content,
                }),
                k ||
                    (0, m.dA)({
                        questId: o.id,
                        event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: b.jn.QUEST_BAR,
                            content_name: (0, m._b)(b.jn.QUEST_BAR),
                            reason: "not_eligible_for_quest",
                            impression_id: null == (t = M.current) ? void 0 : t.getId(),
                        },
                        sourceQuestContent: Y.trackingCtx.content,
                    });
        }, [F, k, o.id, Y.trackingCtx.content]),
        s.useEffect(() => {
            if (!X && ea && !z) {
                var e;
                (0, m.dA)({
                    questId: o.id,
                    event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: b.jn.QUEST_BAR,
                        content_name: (0, m._b)(b.jn.QUEST_BAR),
                        reason: Q,
                        impression_id: null == (e = M.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: Y.trackingCtx.content,
                });
            }
        }, [X, ea, z, o.id, Q, Y.trackingCtx.content]),
        s.useEffect(() => {
            (!I || q) && f.Z.clearTracking(), X && ea && !z && !F && k && f.Z.stopTracking(o.id);
        }, [I, q, X, ea, z, F, k, o.id]);
    let eS = (0, _.h)({
        location: A.dr.QUESTS_BAR,
        questConfig: o.config,
    });
    if (!k || (!X && ea && !z) || F)
        return F ? x.log("Not rendered due to asset error") : k || x.log("Not rendered due to ineligibility"), null;
    let eT = 70 + 78 * !!$;
    return (0, r.jsx)(y.A, {
        questOrQuests: o,
        questContent: Y.trackingCtx.content,
        overrideVisibility: !V && X,
        sourceQuestContent: Y.trackingCtx.content,
        children: (e, t) => {
            let n = Y.component;
            return (
                (M.current = t.current),
                (0, r.jsxs)("div", {
                    className: R.mask,
                    children: [
                        X &&
                            (0, r.jsx)(B, {
                                questId: o.id,
                                isExpanded: en,
                            }),
                        (0, r.jsx)(i.animated.div, {
                            "aria-hidden": !X,
                            onMouseLeave: ev,
                            onMouseEnter: ej,
                            onFocus: eb,
                            onBlur: e_,
                            className: a()(R.wrapper, {
                                [R.wrapperInvisible]: !X,
                                [R.wrapperVisible]: X && ea,
                            }),
                            style: {
                                color: eS ? void 0 : o.config.colors.secondary,
                                height: eO.to({
                                    range: [0, 1],
                                    output: [0, !Y.canCollapseOnBlur && en ? el : eT],
                                }),
                            },
                            children: (0, r.jsx)(i.animated.div, {
                                className: a()(R.contentWrapper, {
                                    [R.contentWrapperExpanded]: en,
                                    [R.contentWrapperAccepted]: W,
                                    [R.contentWrapperBrandColorRemoval]: eS,
                                }),
                                style: {
                                    backgroundColor: eS ? void 0 : Y.preEnrollmentBackgroundColor,
                                    backgroundImage: W && !eS ? Y.postEnrollmentBackgroundImage : void 0,
                                },
                                children: (0, r.jsx)(T.t, {
                                    springConfig: eC,
                                    isExpanded: en,
                                    children: (0, r.jsx)(n, {
                                        expandedContentRef: ed,
                                        expansionSpring: ey,
                                        isExpanded: en,
                                        isExpansionAnimationComplete: es,
                                        onCtxMenuClosed: eg,
                                        onCtxMenuOpened: ef,
                                        onCtxMenuSelection: ex,
                                        quest: o,
                                        useReducedMotion: D,
                                        collapsedHeight: eT,
                                        shouldShowRewardsCTAWhenCollapsed: $,
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
let q =
    12633 == n.j
        ? function () {
              let e = (0, S.DH)();
              return null == e
                  ? null
                  : (0, r.jsx)(
                        O.p,
                        {
                            source: A.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, r.jsx)(k, { quest: e }),
                        },
                        e.id,
                    );
          }
        : null;
