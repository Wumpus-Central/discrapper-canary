n.d(t, {
    P: () => k,
    Z: () => U,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(803948),
    l = n(442837),
    c = n(481060),
    u = n(110924),
    d = n(607070),
    f = n(819640),
    _ = n(617136),
    p = n(823289),
    h = n(509212),
    m = n(113434),
    g = n(569984),
    E = n(497505),
    b = n(381176),
    y = n(16868),
    O = n(977156),
    v = n(5881),
    I = n(602667),
    T = n(110560),
    S = n(78826),
    A = n(667105),
    C = n(693900),
    N = n(617889),
    R = n(130653),
    P = n(46140),
    w = n(981631),
    D = n(89855);
let x = 84,
    L = 75,
    j = 70;
function M(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, m.qI)({
            mode: t ? P.NH.EXPANDED : P.NH.COLLAPSED,
            questContent: E.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: E.jn.QUEST_BAR_V2,
        }),
        null
    );
}
function k(e) {
    var t, n;
    let { quest: a } = e,
        m = (0, v.T)({
            quest: a,
            location: P.dr.QUESTS_BAR,
        }),
        k = (0, O.Zy)({ location: P.dr.QUESTS_BAR }),
        U = (0, l.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: G, reason: B } = (0, A.qN)({
            quest: a,
            location: P.dr.QUESTS_BAR,
        }),
        Z = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        V = (0, l.e7)([f.Z], () => f.Z.hasLayers()),
        F = i.useRef(null),
        H = i.useMemo(() => (0, h.q8)(a), [a]),
        Y = (null == (t = a.userStatus) ? void 0 : t.enrolledAt) != null,
        W = (0, u.Z)(Y),
        K = (null == (n = a.userStatus) ? void 0 : n.completedAt) != null,
        z = (0, u.Z)(K),
        { hasError: q, isLoading: X } = (0, S.d7)(),
        Q = i.useContext(R.T) || (k && G && !X && !U),
        J = i.useRef(Q),
        $ = (0, N.B)(a, Q && !q),
        ee = i.useRef(-1),
        et = i.useRef(!1),
        en = y.H.useConfig({ location: P.dr.QUESTS_BAR }).enabled && K,
        [er, ei] = i.useState(!1),
        [ea, eo] = i.useState(!1),
        [es, el] = i.useState(!0),
        [ec, eu] = i.useState(!0),
        [ed, ef] = i.useState($.preEnrollmentExpandedHeight),
        e_ = i.useRef(null),
        ep = i.useCallback(
            (e) => {
                en || (el(!1), eo(e));
            },
            [en],
        ),
        eh = i.useCallback(() => {
            var e, t;
            ef((null != (t = null == (e = e_.current) ? void 0 : e.offsetHeight) ? t : x) + 2 * $.paddingVertical);
        }, [$.paddingVertical]),
        em = i.useCallback(() => {
            eh(), ep(!0);
        }, [eh, ep]),
        eg = i.useCallback(() => {
            ei(!0);
        }, []),
        eE = i.useCallback(() => {
            ei(!1), et.current || K || ep(!1);
        }, [K, ep]),
        eb = i.useCallback(() => {
            ei(!1), K || ep(!1), (et.current = !1);
        }, [K, ep]),
        ey = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (ea) return;
                let { withDelay: t = !1 } = e;
                t ? (ee.current = window.setTimeout(em, L)) : em();
            },
            [em, ea],
        ),
        eO = i.useCallback(() => {
            ey();
        }, [ey]),
        ev = i.useCallback(() => {
            window.clearTimeout(ee.current), $.canCollapseOnBlur && !er && (et.current || ep(!1));
        }, [er, $, ep]),
        eI = i.useCallback(() => {
            var e;
            (0, _.dA)({
                questId: a.id,
                event: w.rMx.QUEST_HOVER,
                properties: {
                    content_id: E.jn.QUEST_BAR,
                    content_name: (0, _._b)(E.jn.QUEST_BAR),
                    impression_id: null == (e = F.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: $.trackingCtx.content,
            }),
                (et.current = !0),
                ey({ withDelay: !0 });
        }, [ey, a, $.trackingCtx.content]),
        eT = i.useCallback(() => {
            var e;
            (0, _.dA)({
                questId: a.id,
                event: w.rMx.QUEST_HOVER_OFF,
                properties: {
                    content_id: E.jn.QUEST_BAR,
                    content_name: (0, _._b)(E.jn.QUEST_BAR),
                    impression_id: null == (e = F.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: $.trackingCtx.content,
            }),
                (et.current = !1),
                ev();
        }, [ev, a, $.trackingCtx.content]);
    i.useLayoutEffect(() => {
        K && $.shouldExpandOnQuestComplete && em();
    }, [em, K, $.shouldExpandOnQuestComplete]),
        i.useLayoutEffect(() => {
            Y && !W && et.current && em();
        }, [em, Y, W]),
        i.useLayoutEffect(() => {
            K || !Y || W || et.current || ep(!1);
        }, [Y, K, W, ep]),
        i.useLayoutEffect(() => {
            Q !== J.current && eu(!1), (J.current = Q);
        }, [Q]);
    let eS = Y ? P.XZ : P.R4,
        [{ expansionSpring: eA }, eC] = (0, c.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: eS,
            onRest: () => {
                el(!0);
            },
            onStart: () => {
                el(!1);
            },
        }));
    i.useEffect(() => {
        eC({
            expansionSpring: +!!ea,
            immediate: Z,
        });
    }, [ea, eC, Z]);
    let { visibilitySpring: eN } = (0, c.q_F)({
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
        H && (0, T.loadVideoQuestModal)();
    }, [H]),
        i.useLayoutEffect(() => {
            K && !z && $.canCollapseOnBlur && eh();
        }, [K, em, $.canCollapseOnBlur, eh, z]),
        i.useEffect(() => {
            var e, t;
            q &&
                (0, _.dA)({
                    questId: a.id,
                    event: w.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: E.jn.QUEST_BAR,
                        content_name: (0, _._b)(E.jn.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: null == (e = F.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: $.trackingCtx.content,
                }),
                k ||
                    (0, _.dA)({
                        questId: a.id,
                        event: w.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: E.jn.QUEST_BAR,
                            content_name: (0, _._b)(E.jn.QUEST_BAR),
                            reason: "not_eligible_for_quest",
                            impression_id: null == (t = F.current) ? void 0 : t.getId(),
                        },
                        sourceQuestContent: $.trackingCtx.content,
                    });
        }, [q, k, a.id, $.trackingCtx.content]),
        i.useEffect(() => {
            if (!Q && ec && !X) {
                var e;
                (0, _.dA)({
                    questId: a.id,
                    event: w.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: E.jn.QUEST_BAR,
                        content_name: (0, _._b)(E.jn.QUEST_BAR),
                        reason: B,
                        impression_id: null == (e = F.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: $.trackingCtx.content,
                });
            }
        }, [Q, ec, X, a.id, B, $.trackingCtx.content]),
        i.useEffect(() => {
            (!G || U) && p.Z.clearTracking(), Q && ec && !X && !q && k && p.Z.stopTracking(a.id);
        }, [G, U, Q, ec, X, q, k, a.id]);
    let eR = (0, b.h)({
        location: P.dr.QUESTS_BAR,
        questConfig: a.config,
    });
    if (!k || (!Q && ec && !X) || q)
        return q ? m.log("Not rendered due to asset error") : k || m.log("Not rendered due to ineligibility"), null;
    let eP = j + 78 * !!en;
    return (0, r.jsx)(I.A, {
        questOrQuests: a,
        questContent: $.trackingCtx.content,
        overrideVisibility: !V && Q,
        sourceQuestContent: $.trackingCtx.content,
        children: (e, t) => {
            let n = $.component;
            return (
                (F.current = t.current),
                (0, r.jsxs)("div", {
                    className: D.mask,
                    children: [
                        Q &&
                            (0, r.jsx)(M, {
                                questId: a.id,
                                isExpanded: ea,
                            }),
                        (0, r.jsx)(s.animated.div, {
                            "aria-hidden": !Q,
                            onMouseLeave: eT,
                            onMouseEnter: eI,
                            onFocus: eO,
                            onBlur: ev,
                            className: o()(D.wrapper, {
                                [D.wrapperInvisible]: !Q,
                                [D.wrapperVisible]: Q && ec,
                            }),
                            style: {
                                color: eR ? void 0 : a.config.colors.secondary,
                                height: eN.to({
                                    range: [0, 1],
                                    output: [0, !$.canCollapseOnBlur && ea ? ed : eP],
                                }),
                            },
                            children: (0, r.jsx)(s.animated.div, {
                                className: o()(D.contentWrapper, {
                                    [D.contentWrapperExpanded]: ea,
                                    [D.contentWrapperAccepted]: Y,
                                    [D.contentWrapperBrandColorRemoval]: eR,
                                }),
                                style: {
                                    backgroundColor: eR ? void 0 : $.preEnrollmentBackgroundColor,
                                    backgroundImage: Y && !eR ? $.postEnrollmentBackgroundImage : void 0,
                                },
                                children: (0, r.jsx)(C.t, {
                                    springConfig: eS,
                                    isExpanded: ea,
                                    children: (0, r.jsx)(n, {
                                        expandedContentRef: e_,
                                        expansionSpring: eA,
                                        isExpanded: ea,
                                        isExpansionAnimationComplete: es,
                                        onCtxMenuClosed: eE,
                                        onCtxMenuOpened: eg,
                                        onCtxMenuSelection: eb,
                                        quest: a,
                                        useReducedMotion: Z,
                                        collapsedHeight: eP,
                                        shouldShowRewardsCTAWhenCollapsed: en,
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
let U = function () {
    let e = (0, A.DH)();
    return null == e
        ? null
        : (0, r.jsx)(
              S.p,
              {
                  source: P.dr.QUESTS_BAR,
                  questId: e.id,
                  children: (0, r.jsx)(k, { quest: e }),
              },
              e.id,
          );
};
