(n.d(t, {
    P: () => B,
    Z: () => k
}),
    n(388685));
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(66546),
    l = n(442837),
    c = n(481060),
    u = n(110924),
    d = n(607070),
    p = n(819640),
    m = n(617136),
    f = n(823289),
    g = n(509212),
    x = n(113434),
    h = n(569984),
    b = n(497505),
    j = n(192023),
    _ = n(977156),
    v = n(5881),
    C = n(602667),
    y = n(110560),
    O = n(78826),
    E = n(667105),
    S = n(693900),
    w = n(617889),
    T = n(130653),
    P = n(46140),
    A = n(981631),
    N = n(414444);
function R(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.qI)({
            mode: t ? P.NH.EXPANDED : P.NH.COLLAPSED,
            questContent: b.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: b.jn.QUEST_BAR_V2
        }),
        null
    );
}
function B(e) {
    var t, n;
    let { quest: o } = e,
        x = (0, v.T)({
            quest: o,
            location: P.dr.QUESTS_BAR
        }),
        B = (0, _.Zy)({ location: P.dr.QUESTS_BAR }),
        k = (0, l.e7)([h.Z], () => null != h.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: I, reason: q } = (0, E.qN)({
            quest: o,
            location: P.dr.QUESTS_BAR
        }),
        D = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        Q = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        V = s.useRef(null),
        L = s.useMemo(() => (0, g.q8)(o), [o]),
        M = (null == (t = o.userStatus) ? void 0 : t.enrolledAt) != null,
        W = (0, u.Z)(M),
        Z = (null == (n = o.userStatus) ? void 0 : n.completedAt) != null,
        U = (0, u.Z)(Z),
        { hasError: H, isLoading: z } = (0, O.d7)(),
        F = s.useContext(T.T) || (B && I && !z && !k),
        X = s.useRef(F),
        K = (0, w.B)(o, F && !H),
        Y = s.useRef(-1),
        G = s.useRef(!1),
        [J, $] = s.useState(!1),
        [ee, et] = s.useState(!1),
        [en, er] = s.useState(!0),
        [es, eo] = s.useState(!0),
        [ea, ei] = s.useState(K.preEnrollmentExpandedHeight),
        el = s.useRef(null),
        ec = s.useCallback((e) => {
            (er(!1), et(e));
        }, []),
        eu = s.useCallback(() => {
            var e, t;
            ei((null != (t = null == (e = el.current) ? void 0 : e.offsetHeight) ? t : 84) + 2 * K.paddingVertical);
        }, [K.paddingVertical]),
        ed = s.useCallback(() => {
            (eu(), ec(!0));
        }, [eu, ec]),
        ep = s.useCallback(() => {
            $(!0);
        }, []),
        em = s.useCallback(() => {
            ($(!1), G.current || Z || ec(!1));
        }, [Z, ec]),
        ef = s.useCallback(() => {
            ($(!1), Z || ec(!1), (G.current = !1));
        }, [Z, ec]),
        eg = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (ee) return;
                let { withDelay: t = !1 } = e;
                t ? (Y.current = window.setTimeout(ed, 75)) : ed();
            },
            [ed, ee]
        ),
        ex = s.useCallback(() => {
            eg();
        }, [eg]),
        eh = s.useCallback(() => {
            (window.clearTimeout(Y.current), K.canCollapseOnBlur && !J && (G.current || ec(!1)));
        }, [J, K, ec]),
        eb = s.useCallback(() => {
            var e;
            ((0, m.dA)({
                questId: o.id,
                event: A.rMx.QUEST_HOVER,
                properties: {
                    content_id: b.jn.QUEST_BAR,
                    content_name: (0, m._b)(b.jn.QUEST_BAR),
                    impression_id: null == (e = V.current) ? void 0 : e.getId()
                },
                shouldExtendSession: !0,
                sourceQuestContent: K.trackingCtx.content
            }),
                (G.current = !0),
                eg({ withDelay: !0 }));
        }, [eg, o, K.trackingCtx.content]),
        ej = s.useCallback(() => {
            var e;
            ((0, m.dA)({
                questId: o.id,
                event: A.rMx.QUEST_HOVER_OFF,
                properties: {
                    content_id: b.jn.QUEST_BAR,
                    content_name: (0, m._b)(b.jn.QUEST_BAR),
                    impression_id: null == (e = V.current) ? void 0 : e.getId()
                },
                sourceQuestContent: K.trackingCtx.content
            }),
                (G.current = !1),
                eh());
        }, [eh, o, K.trackingCtx.content]);
    (s.useLayoutEffect(() => {
        Z && K.shouldExpandOnQuestComplete && ed();
    }, [ed, Z, K.shouldExpandOnQuestComplete]),
        s.useLayoutEffect(() => {
            M && !W && G.current && ed();
        }, [ed, M, W]),
        s.useLayoutEffect(() => {
            Z || !M || W || G.current || ec(!1);
        }, [M, Z, W, ec]),
        s.useLayoutEffect(() => {
            (F !== X.current && eo(!1), (X.current = F));
        }, [F]));
    let e_ = M ? P.XZ : P.R4,
        [{ expansionSpring: ev }, eC] = (0, c.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: e_,
            onRest: () => {
                er(!0);
            },
            onStart: () => {
                er(!1);
            }
        }));
    s.useEffect(() => {
        eC({
            expansionSpring: +!!ee,
            immediate: D
        });
    }, [ee, eC, D]);
    let { visibilitySpring: ey } = (0, c.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!F },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0
        },
        onRest: () => {
            eo(!0);
        },
        onStart: () => {
            eo(!1);
        }
    });
    (s.useEffect(() => {
        L && (0, y.loadVideoQuestModal)();
    }, [L]),
        s.useLayoutEffect(() => {
            Z && !U && K.canCollapseOnBlur && eu();
        }, [Z, ed, K.canCollapseOnBlur, eu, U]),
        s.useEffect(() => {
            var e, t;
            (H &&
                (0, m.dA)({
                    questId: o.id,
                    event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: b.jn.QUEST_BAR,
                        content_name: (0, m._b)(b.jn.QUEST_BAR),
                        reason: 'asset_loading_error',
                        impression_id: null == (e = V.current) ? void 0 : e.getId()
                    },
                    sourceQuestContent: K.trackingCtx.content
                }),
                B ||
                    (0, m.dA)({
                        questId: o.id,
                        event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: b.jn.QUEST_BAR,
                            content_name: (0, m._b)(b.jn.QUEST_BAR),
                            reason: 'not_eligible_for_quest',
                            impression_id: null == (t = V.current) ? void 0 : t.getId()
                        },
                        sourceQuestContent: K.trackingCtx.content
                    }));
        }, [H, B, o.id, K.trackingCtx.content]),
        s.useEffect(() => {
            if (!F && es && !z) {
                var e;
                (0, m.dA)({
                    questId: o.id,
                    event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: b.jn.QUEST_BAR,
                        content_name: (0, m._b)(b.jn.QUEST_BAR),
                        reason: q,
                        impression_id: null == (e = V.current) ? void 0 : e.getId()
                    },
                    sourceQuestContent: K.trackingCtx.content
                });
            }
        }, [F, es, z, o.id, q, K.trackingCtx.content]),
        s.useEffect(() => {
            ((!I || k) && f.Z.clearTracking(), F && es && !z && !H && B && f.Z.stopTracking(o.id));
        }, [I, k, F, es, z, H, B, o.id]));
    let eO = (0, j.h)({
        location: P.dr.QUESTS_BAR,
        questConfig: o.config
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
                      (0, r.jsxs)('div', {
                          className: N.mask,
                          children: [
                              F &&
                                  (0, r.jsx)(R, {
                                      questId: o.id,
                                      isExpanded: ee
                                  }),
                              (0, r.jsx)(i.animated.div, {
                                  'aria-hidden': !F,
                                  onMouseLeave: ej,
                                  onMouseEnter: eb,
                                  onFocus: ex,
                                  onBlur: eh,
                                  className: a()(N.wrapper, {
                                      [N.wrapperInvisible]: !F,
                                      [N.wrapperVisible]: F && es
                                  }),
                                  style: {
                                      color: eO ? void 0 : o.config.colors.secondary,
                                      height: ey.to({
                                          range: [0, 1],
                                          output: [0, !K.canCollapseOnBlur && ee ? ea : 70]
                                      })
                                  },
                                  children: (0, r.jsx)(i.animated.div, {
                                      className: a()(N.contentWrapper, {
                                          [N.contentWrapperExpanded]: ee,
                                          [N.contentWrapperAccepted]: M,
                                          [N.contentWrapperBrandColorRemoval]: eO
                                      }),
                                      style: {
                                          backgroundColor: eO ? void 0 : K.preEnrollmentBackgroundColor,
                                          backgroundImage: M && !eO ? K.postEnrollmentBackgroundImage : void 0
                                      },
                                      children: (0, r.jsx)(S.t, {
                                          springConfig: e_,
                                          isExpanded: ee,
                                          children: (0, r.jsx)(n, {
                                              expandedContentRef: el,
                                              expansionSpring: ev,
                                              isExpanded: ee,
                                              isExpansionAnimationComplete: en,
                                              onCtxMenuClosed: em,
                                              onCtxMenuOpened: ep,
                                              onCtxMenuSelection: ef,
                                              quest: o,
                                              useReducedMotion: D,
                                              collapsedHeight: 70
                                          })
                                      })
                                  })
                              })
                          ]
                      })
                  );
              }
          })
        : (H ? x.log('Not rendered due to asset error') : B || x.log('Not rendered due to ineligibility'), null);
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
                            children: (0, r.jsx)(B, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
