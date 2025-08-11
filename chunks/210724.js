n.d(t, {
    P: () => B,
    Z: () => k,
}),
    n(388685);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(717976),
    l = n(442837),
    c = n(481060),
    u = n(110924),
    d = n(607070),
    p = n(819640),
    m = n(617136),
    g = n(823289),
    f = n(509212),
    x = n(113434),
    h = n(569984),
    j = n(497505),
    _ = n(381176),
    b = n(977156),
    v = n(5881),
    C = n(602667),
    y = n(110560),
    O = n(78826),
    E = n(667105),
    S = n(693900),
    T = n(617889),
    w = n(130653),
    P = n(46140),
    N = n(981631),
    A = n(414444);
function R(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.qI)({
            mode: t ? P.NH.EXPANDED : P.NH.COLLAPSED,
            questContent: j.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: j.jn.QUEST_BAR_V2,
        }),
        null
    );
}
function B(e) {
    var t, n;
    let { quest: o } = e,
        x = (0, v.T)({
            quest: o,
            location: P.dr.QUESTS_BAR,
        }),
        B = (0, b.Zy)({ location: P.dr.QUESTS_BAR }),
        k = (0, l.e7)([h.Z], () => null != h.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: I, reason: q } = (0, E.qN)({
            quest: o,
            location: P.dr.QUESTS_BAR,
        }),
        D = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        Q = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        V = s.useRef(null),
        L = s.useMemo(() => (0, f.q8)(o), [o]),
        M = (null == (t = o.userStatus) ? void 0 : t.enrolledAt) != null,
        Z = (0, u.Z)(M),
        W = (null == (n = o.userStatus) ? void 0 : n.completedAt) != null,
        U = (0, u.Z)(W),
        { hasError: H, isLoading: z } = (0, O.d7)(),
        F = s.useContext(w.T) || (B && I && !z && !k),
        X = s.useRef(F),
        K = (0, T.B)(o, F && !H),
        Y = s.useRef(-1),
        G = s.useRef(!1),
        [J, $] = s.useState(!1),
        [ee, et] = s.useState(!1),
        [en, er] = s.useState(!0),
        [es, eo] = s.useState(!0),
        [ea, ei] = s.useState(K.preEnrollmentExpandedHeight),
        el = s.useRef(null),
        ec = s.useCallback((e) => {
            er(!1), et(e);
        }, []),
        eu = s.useCallback(() => {
            var e, t;
            ei((null != (t = null == (e = el.current) ? void 0 : e.offsetHeight) ? t : 84) + 2 * K.paddingVertical);
        }, [K.paddingVertical]),
        ed = s.useCallback(() => {
            eu(), ec(!0);
        }, [eu, ec]),
        ep = s.useCallback(() => {
            $(!0);
        }, []),
        em = s.useCallback(() => {
            $(!1), G.current || W || ec(!1);
        }, [W, ec]),
        eg = s.useCallback(() => {
            $(!1), W || ec(!1), (G.current = !1);
        }, [W, ec]),
        ef = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (ee) return;
                let { withDelay: t = !1 } = e;
                t ? (Y.current = window.setTimeout(ed, 75)) : ed();
            },
            [ed, ee],
        ),
        ex = s.useCallback(() => {
            ef();
        }, [ef]),
        eh = s.useCallback(() => {
            window.clearTimeout(Y.current), K.canCollapseOnBlur && !J && (G.current || ec(!1));
        }, [J, K, ec]),
        ej = s.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: o.id,
                event: N.rMx.QUEST_HOVER,
                properties: {
                    content_id: j.jn.QUEST_BAR,
                    content_name: (0, m._b)(j.jn.QUEST_BAR),
                    impression_id: null == (e = V.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: K.trackingCtx.content,
            }),
                (G.current = !0),
                ef({ withDelay: !0 });
        }, [ef, o, K.trackingCtx.content]),
        e_ = s.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: o.id,
                event: N.rMx.QUEST_HOVER_OFF,
                properties: {
                    content_id: j.jn.QUEST_BAR,
                    content_name: (0, m._b)(j.jn.QUEST_BAR),
                    impression_id: null == (e = V.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: K.trackingCtx.content,
            }),
                (G.current = !1),
                eh();
        }, [eh, o, K.trackingCtx.content]);
    s.useLayoutEffect(() => {
        W && K.shouldExpandOnQuestComplete && ed();
    }, [ed, W, K.shouldExpandOnQuestComplete]),
        s.useLayoutEffect(() => {
            M && !Z && G.current && ed();
        }, [ed, M, Z]),
        s.useLayoutEffect(() => {
            W || !M || Z || G.current || ec(!1);
        }, [M, W, Z, ec]),
        s.useLayoutEffect(() => {
            F !== X.current && eo(!1), (X.current = F);
        }, [F]);
    let eb = M ? P.XZ : P.R4,
        [{ expansionSpring: ev }, eC] = (0, c.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: eb,
            onRest: () => {
                er(!0);
            },
            onStart: () => {
                er(!1);
            },
        }));
    s.useEffect(() => {
        eC({
            expansionSpring: +!!ee,
            immediate: D,
        });
    }, [ee, eC, D]);
    let { visibilitySpring: ey } = (0, c.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!F },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0,
        },
        onRest: () => {
            eo(!0);
        },
        onStart: () => {
            eo(!1);
        },
    });
    s.useEffect(() => {
        L && (0, y.loadVideoQuestModal)();
    }, [L]),
        s.useLayoutEffect(() => {
            W && !U && K.canCollapseOnBlur && eu();
        }, [W, ed, K.canCollapseOnBlur, eu, U]),
        s.useEffect(() => {
            var e, t;
            H &&
                (0, m.dA)({
                    questId: o.id,
                    event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: j.jn.QUEST_BAR,
                        content_name: (0, m._b)(j.jn.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: null == (e = V.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: K.trackingCtx.content,
                }),
                B ||
                    (0, m.dA)({
                        questId: o.id,
                        event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: j.jn.QUEST_BAR,
                            content_name: (0, m._b)(j.jn.QUEST_BAR),
                            reason: "not_eligible_for_quest",
                            impression_id: null == (t = V.current) ? void 0 : t.getId(),
                        },
                        sourceQuestContent: K.trackingCtx.content,
                    });
        }, [H, B, o.id, K.trackingCtx.content]),
        s.useEffect(() => {
            if (!F && es && !z) {
                var e;
                (0, m.dA)({
                    questId: o.id,
                    event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: j.jn.QUEST_BAR,
                        content_name: (0, m._b)(j.jn.QUEST_BAR),
                        reason: q,
                        impression_id: null == (e = V.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: K.trackingCtx.content,
                });
            }
        }, [F, es, z, o.id, q, K.trackingCtx.content]),
        s.useEffect(() => {
            (!I || k) && g.Z.clearTracking(), F && es && !z && !H && B && g.Z.stopTracking(o.id);
        }, [I, k, F, es, z, H, B, o.id]);
    let eO = (0, _.h)({
        location: P.dr.QUESTS_BAR,
        questConfig: o.config,
    });
    return B && (F || !es || z) && !H
        ? (0, r.jsx)(C.A, {
              questOrQuests: o,
              questContent: K.trackingCtx.content,
              overrideVisibility: !Q && F,
              sourceQuestContent: K.trackingCtx.content,
              children: (e, t) => {
                  let n = K.component;
                  return (
                      (V.current = t.current),
                      (0, r.jsxs)("div", {
                          className: A.mask,
                          children: [
                              F &&
                                  (0, r.jsx)(R, {
                                      questId: o.id,
                                      isExpanded: ee,
                                  }),
                              (0, r.jsx)(i.animated.div, {
                                  "aria-hidden": !F,
                                  onMouseLeave: e_,
                                  onMouseEnter: ej,
                                  onFocus: ex,
                                  onBlur: eh,
                                  className: a()(A.wrapper, {
                                      [A.wrapperInvisible]: !F,
                                      [A.wrapperVisible]: F && es,
                                  }),
                                  style: {
                                      color: eO ? void 0 : o.config.colors.secondary,
                                      height: ey.to({
                                          range: [0, 1],
                                          output: [0, !K.canCollapseOnBlur && ee ? ea : 70],
                                      }),
                                  },
                                  children: (0, r.jsx)(i.animated.div, {
                                      className: a()(A.contentWrapper, {
                                          [A.contentWrapperExpanded]: ee,
                                          [A.contentWrapperAccepted]: M,
                                          [A.contentWrapperBrandColorRemoval]: eO,
                                      }),
                                      style: {
                                          backgroundColor: eO ? void 0 : K.preEnrollmentBackgroundColor,
                                          backgroundImage: M && !eO ? K.postEnrollmentBackgroundImage : void 0,
                                      },
                                      children: (0, r.jsx)(S.t, {
                                          springConfig: eb,
                                          isExpanded: ee,
                                          children: (0, r.jsx)(n, {
                                              expandedContentRef: el,
                                              expansionSpring: ev,
                                              isExpanded: ee,
                                              isExpansionAnimationComplete: en,
                                              onCtxMenuClosed: em,
                                              onCtxMenuOpened: ep,
                                              onCtxMenuSelection: eg,
                                              quest: o,
                                              useReducedMotion: D,
                                              collapsedHeight: 70,
                                          }),
                                      }),
                                  }),
                              }),
                          ],
                      })
                  );
              },
          })
        : (H ? x.log("Not rendered due to asset error") : B || x.log("Not rendered due to ineligibility"), null);
}
let k =
    12633 == n.j
        ? function () {
              let e = (0, E.DH)();
              return null == e
                  ? null
                  : (0, r.jsx)(
                        O.p,
                        {
                            source: P.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, r.jsx)(B, { quest: e }),
                        },
                        e.id,
                    );
          }
        : null;
