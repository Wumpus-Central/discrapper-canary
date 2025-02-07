n.d(t, {
    P: () => B,
    Z: () => R
}),
    n(47120);
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(642128),
    l = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(607070),
    p = n(819640),
    m = n(617136),
    x = n(113434),
    h = n(497505),
    g = n(918701),
    f = n(977156),
    v = n(5881),
    _ = n(602667),
    C = n(78826),
    j = n(667105),
    b = n(341907),
    T = n(693900),
    E = n(617889),
    S = n(130653),
    N = n(46140),
    y = n(981631),
    w = n(157410);
function A(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.qI)({
            mode: t ? N.NH.EXPANDED : N.NH.COLLAPSED,
            questContent: h.jn.QUEST_BAR_V2,
            questId: n
        }),
        null
    );
}
function B(e) {
    var t, n;
    let { quest: a } = e,
        x = (0, v.T)({
            quest: a,
            location: N.dr.QUESTS_BAR
        }),
        B = (0, f.Zy)({ location: N.dr.QUESTS_BAR }),
        R = (0, j.qN)({
            quest: a,
            location: N.dr.QUESTS_BAR
        }),
        P = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        k = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        q = r.useRef(null),
        I = r.useMemo(() => (0, g.q8)(a), [a]),
        O = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        M = (0, d.Z)(O),
        D = (null === (n = a.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        L = (0, d.Z)(D),
        { hasError: Z, isLoading: W } = (0, C.d7)(),
        V = r.useContext(S.T) || (B && R && !W),
        Q = r.useRef(V),
        U = (0, E.B)(a, V && !Z),
        H = r.useRef(-1),
        z = r.useRef(!1),
        [F, X] = r.useState(!1),
        [K, Y] = r.useState(!1),
        [G, J] = r.useState(!0),
        [$, ee] = r.useState(!0),
        [et, en] = r.useState(U.preEnrollmentExpandedHeight),
        es = r.useRef(null),
        er = r.useCallback((e) => {
            J(!1), Y(e);
        }, []),
        ea = r.useCallback(() => {
            var e, t;
            en((null !== (t = null === (e = es.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * U.paddingVertical);
        }, [U.paddingVertical]),
        eo = r.useCallback(() => {
            ea(), er(!0);
        }, [ea, er]),
        ei = r.useCallback(() => {
            X(!0);
        }, []),
        el = r.useCallback(() => {
            X(!1), z.current || D || er(!1);
        }, [D, er]),
        ec = r.useCallback(() => {
            X(!1), D || er(!1), (z.current = !1);
        }, [D, er]),
        ed = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (K) return;
                let { withDelay: t = !1 } = e;
                t ? (H.current = window.setTimeout(eo, 75)) : eo();
            },
            [eo, K]
        ),
        eu = r.useCallback(() => {
            ed();
        }, [ed]),
        ep = r.useCallback(() => {
            window.clearTimeout(H.current), U.canCollapseOnBlur && !F && (z.current || er(!1));
        }, [F, U, er]),
        em = r.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: a.id,
                event: y.rMx.QUEST_HOVER,
                properties: {
                    ...(0, m.mH)(h.jn.QUEST_BAR),
                    impression_id: null === (e = q.current) || void 0 === e ? void 0 : e.getId()
                }
            }),
                (z.current = !0),
                ed({ withDelay: !0 });
        }, [ed, a]),
        ex = r.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: a.id,
                event: y.rMx.QUEST_HOVER_OFF,
                properties: {
                    ...(0, m.mH)(h.jn.QUEST_BAR),
                    impression_id: null === (e = q.current) || void 0 === e ? void 0 : e.getId()
                }
            }),
                (z.current = !1),
                ep();
        }, [ep, a]);
    r.useLayoutEffect(() => {
        D && U.shouldExpandOnQuestComplete && eo();
    }, [eo, D, U.shouldExpandOnQuestComplete]),
        r.useLayoutEffect(() => {
            O && !M && z.current && eo();
        }, [eo, O, M]),
        r.useLayoutEffect(() => {
            D || !O || M || z.current || er(!1);
        }, [O, D, M, er]),
        r.useLayoutEffect(() => {
            V !== Q.current && ee(!1), (Q.current = V);
        }, [V]);
    let eh = O ? N.XZ : N.R4,
        [{ expansionSpring: eg }, ef] = (0, c.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: eh,
            onRest: () => {
                J(!0);
            },
            onStart: () => {
                J(!1);
            }
        }));
    r.useEffect(() => {
        ef({
            expansionSpring: K ? 1 : 0,
            immediate: P
        });
    }, [K, ef, P]);
    let { visibilitySpring: ev } = (0, c.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: V ? 1 : 0 },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0
        },
        onRest: () => {
            ee(!0);
        },
        onStart: () => {
            ee(!1);
        }
    });
    return (r.useEffect(() => {
        I && (0, b.loadVideoQuestModal)();
    }, [I]),
    r.useLayoutEffect(() => {
        D && !L && U.canCollapseOnBlur && ea();
    }, [D, eo, U.canCollapseOnBlur, ea, L]),
    r.useEffect(() => {
        var e, t;
        Z &&
            (0, m.dA)({
                questId: a.id,
                event: y.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    ...(0, m.mH)(h.jn.QUEST_BAR),
                    reason: 'asset_loading_error',
                    impression_id: null === (e = q.current) || void 0 === e ? void 0 : e.getId()
                }
            }),
            B ||
                (0, m.dA)({
                    questId: a.id,
                    event: y.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        ...(0, m.mH)(h.jn.QUEST_BAR),
                        reason: 'not_eligible_for_quest',
                        impression_id: null === (t = q.current) || void 0 === t ? void 0 : t.getId()
                    }
                });
    }, [Z, B, a.id]),
    B && (V || !$ || W) && !Z)
        ? (0, s.jsx)(_.A, {
              questOrQuests: a,
              questContent: U.trackingCtx.content,
              overrideVisibility: !k && V,
              children: (e, t) => {
                  let n = U.component;
                  return (
                      (q.current = t.current),
                      (0, s.jsxs)('div', {
                          className: w.mask,
                          children: [
                              V &&
                                  (0, s.jsx)(A, {
                                      questId: a.id,
                                      isExpanded: K
                                  }),
                              (0, s.jsx)(i.animated.div, {
                                  'aria-hidden': !V,
                                  onMouseLeave: ex,
                                  onMouseEnter: em,
                                  onFocus: eu,
                                  onBlur: ep,
                                  className: o()(w.wrapper, {
                                      [w.wrapperInvisible]: !V,
                                      [w.wrapperVisible]: V && $
                                  }),
                                  style: {
                                      color: a.config.colors.secondary,
                                      height: ev.to({
                                          range: [0, 1],
                                          output: [0, !U.canCollapseOnBlur && K ? et : 70]
                                      })
                                  },
                                  children: (0, s.jsx)(i.animated.div, {
                                      className: o()(w.contentWrapper, {
                                          [w.contentWrapperExpanded]: K,
                                          [w.contentWrapperAccepted]: O
                                      }),
                                      style: {
                                          backgroundColor: U.preEnrollmentBackgroundColor,
                                          backgroundImage: O ? U.postEnrollmentBackgroundImage : void 0
                                      },
                                      children: (0, s.jsx)(T.t, {
                                          springConfig: eh,
                                          isExpanded: K,
                                          children: (0, s.jsx)(n, {
                                              expandedContentRef: es,
                                              expansionSpring: eg,
                                              isExpanded: K,
                                              isExpansionAnimationComplete: G,
                                              onCtxMenuClosed: el,
                                              onCtxMenuOpened: ei,
                                              onCtxMenuSelection: ec,
                                              quest: a,
                                              useReducedMotion: P,
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
        : (Z ? x.log('Not rendered due to asset error') : B || x.log('Not rendered due to ineligibility'), null);
}
let R =
    12633 == n.j
        ? function () {
              let e = (0, j.DH)();
              return null == e
                  ? null
                  : (0, s.jsx)(
                        C.p,
                        {
                            source: N.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, s.jsx)(B, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
