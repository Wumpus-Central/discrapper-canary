n.d(t, {
    P: () => B,
    Z: () => q
}),
    n(388685);
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(524979),
    l = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(607070),
    p = n(819640),
    m = n(617136),
    f = n(113434),
    g = n(569984),
    x = n(497505),
    h = n(918701),
    b = n(192023),
    j = n(977156),
    v = n(5881),
    y = n(602667),
    _ = n(78826),
    C = n(667105),
    O = n(341907),
    w = n(693900),
    S = n(617889),
    E = n(130653),
    P = n(46140),
    T = n(981631),
    N = n(414444);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, f.qI)({
            mode: t ? P.NH.EXPANDED : P.NH.COLLAPSED,
            questContent: x.jn.QUEST_BAR_V2,
            questId: n
        }),
        null
    );
}
function B(e) {
    var t, n;
    let { quest: s } = e,
        f = (0, v.T)({
            quest: s,
            location: P.dr.QUESTS_BAR
        }),
        B = (0, j.Zy)({ location: P.dr.QUESTS_BAR }),
        q = (0, l.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: I, reason: D } = (0, C.qN)({
            quest: s,
            location: P.dr.QUESTS_BAR
        }),
        M = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        L = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        V = o.useRef(null),
        W = o.useMemo(() => (0, h.q8)(s), [s]),
        Z = (null == (t = s.userStatus) ? void 0 : t.enrolledAt) != null,
        Q = (0, d.Z)(Z),
        U = (null == (n = s.userStatus) ? void 0 : n.completedAt) != null,
        H = (0, d.Z)(U),
        { hasError: z, isLoading: F } = (0, _.d7)(),
        K = o.useContext(E.T) || (B && I && !F && !q),
        X = o.useRef(K),
        Y = (0, S.B)(s, K && !z),
        G = o.useRef(-1),
        J = o.useRef(!1),
        [$, ee] = o.useState(!1),
        [et, en] = o.useState(!1),
        [er, eo] = o.useState(!0),
        [es, ea] = o.useState(!0),
        [ei, el] = o.useState(Y.preEnrollmentExpandedHeight),
        ec = o.useRef(null),
        ed = o.useCallback((e) => {
            eo(!1), en(e);
        }, []),
        eu = o.useCallback(() => {
            var e, t;
            el((null != (t = null == (e = ec.current) ? void 0 : e.offsetHeight) ? t : 84) + 2 * Y.paddingVertical);
        }, [Y.paddingVertical]),
        ep = o.useCallback(() => {
            eu(), ed(!0);
        }, [eu, ed]),
        em = o.useCallback(() => {
            ee(!0);
        }, []),
        ef = o.useCallback(() => {
            ee(!1), J.current || U || ed(!1);
        }, [U, ed]),
        eg = o.useCallback(() => {
            ee(!1), U || ed(!1), (J.current = !1);
        }, [U, ed]),
        ex = o.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (et) return;
                let { withDelay: t = !1 } = e;
                t ? (G.current = window.setTimeout(ep, 75)) : ep();
            },
            [ep, et]
        ),
        eh = o.useCallback(() => {
            ex();
        }, [ex]),
        eb = o.useCallback(() => {
            window.clearTimeout(G.current), Y.canCollapseOnBlur && !$ && (J.current || ed(!1));
        }, [$, Y, ed]),
        ej = o.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: s.id,
                event: T.rMx.QUEST_HOVER,
                properties: R(A({}, (0, m.mH)(x.jn.QUEST_BAR)), { impression_id: null == (e = V.current) ? void 0 : e.getId() }),
                shouldExtendSession: !0
            }),
                (J.current = !0),
                ex({ withDelay: !0 });
        }, [ex, s]),
        ev = o.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: s.id,
                event: T.rMx.QUEST_HOVER_OFF,
                properties: R(A({}, (0, m.mH)(x.jn.QUEST_BAR)), { impression_id: null == (e = V.current) ? void 0 : e.getId() })
            }),
                (J.current = !1),
                eb();
        }, [eb, s]);
    o.useLayoutEffect(() => {
        U && Y.shouldExpandOnQuestComplete && ep();
    }, [ep, U, Y.shouldExpandOnQuestComplete]),
        o.useLayoutEffect(() => {
            Z && !Q && J.current && ep();
        }, [ep, Z, Q]),
        o.useLayoutEffect(() => {
            U || !Z || Q || J.current || ed(!1);
        }, [Z, U, Q, ed]),
        o.useLayoutEffect(() => {
            K !== X.current && ea(!1), (X.current = K);
        }, [K]);
    let ey = Z ? P.XZ : P.R4,
        [{ expansionSpring: e_ }, eC] = (0, c.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: ey,
            onRest: () => {
                eo(!0);
            },
            onStart: () => {
                eo(!1);
            }
        }));
    o.useEffect(() => {
        eC({
            expansionSpring: +!!et,
            immediate: M
        });
    }, [et, eC, M]);
    let { visibilitySpring: eO } = (0, c.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!K },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0
        },
        onRest: () => {
            ea(!0);
        },
        onStart: () => {
            ea(!1);
        }
    });
    o.useEffect(() => {
        W && (0, O.loadVideoQuestModal)();
    }, [W]),
        o.useLayoutEffect(() => {
            U && !H && Y.canCollapseOnBlur && eu();
        }, [U, ep, Y.canCollapseOnBlur, eu, H]),
        o.useEffect(() => {
            var e, t;
            z &&
                (0, m.dA)({
                    questId: s.id,
                    event: T.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: R(A({}, (0, m.mH)(x.jn.QUEST_BAR)), {
                        reason: 'asset_loading_error',
                        impression_id: null == (e = V.current) ? void 0 : e.getId()
                    })
                }),
                B ||
                    (0, m.dA)({
                        questId: s.id,
                        event: T.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: R(A({}, (0, m.mH)(x.jn.QUEST_BAR)), {
                            reason: 'not_eligible_for_quest',
                            impression_id: null == (t = V.current) ? void 0 : t.getId()
                        })
                    });
        }, [z, B, s.id]),
        o.useEffect(() => {
            if (!K && es && !F) {
                var e;
                (0, m.dA)({
                    questId: s.id,
                    event: T.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: R(A({}, (0, m.mH)(x.jn.QUEST_BAR)), {
                        reason: D,
                        impression_id: null == (e = V.current) ? void 0 : e.getId()
                    })
                });
            }
        }, [K, es, F, s.id, D]);
    let ew = (0, b.h)({
        location: P.dr.QUESTS_BAR,
        questConfig: s.config
    });
    return B && (K || !es || F) && !z
        ? (0, r.jsx)(y.A, {
              questOrQuests: s,
              questContent: Y.trackingCtx.content,
              overrideVisibility: !L && K,
              children: (e, t) => {
                  let n = Y.component;
                  return (
                      (V.current = t.current),
                      (0, r.jsxs)('div', {
                          className: N.mask,
                          children: [
                              K &&
                                  (0, r.jsx)(k, {
                                      questId: s.id,
                                      isExpanded: et
                                  }),
                              (0, r.jsx)(i.animated.div, {
                                  'aria-hidden': !K,
                                  onMouseLeave: ev,
                                  onMouseEnter: ej,
                                  onFocus: eh,
                                  onBlur: eb,
                                  className: a()(N.wrapper, {
                                      [N.wrapperInvisible]: !K,
                                      [N.wrapperVisible]: K && es
                                  }),
                                  style: {
                                      color: ew ? void 0 : s.config.colors.secondary,
                                      height: eO.to({
                                          range: [0, 1],
                                          output: [0, !Y.canCollapseOnBlur && et ? ei : 70]
                                      })
                                  },
                                  children: (0, r.jsx)(i.animated.div, {
                                      className: a()(N.contentWrapper, {
                                          [N.contentWrapperExpanded]: et,
                                          [N.contentWrapperAccepted]: Z,
                                          [N.contentWrapperBrandColorRemoval]: ew
                                      }),
                                      style: {
                                          backgroundColor: ew ? void 0 : Y.preEnrollmentBackgroundColor,
                                          backgroundImage: Z && !ew ? Y.postEnrollmentBackgroundImage : void 0
                                      },
                                      children: (0, r.jsx)(w.t, {
                                          springConfig: ey,
                                          isExpanded: et,
                                          children: (0, r.jsx)(n, {
                                              expandedContentRef: ec,
                                              expansionSpring: e_,
                                              isExpanded: et,
                                              isExpansionAnimationComplete: er,
                                              onCtxMenuClosed: ef,
                                              onCtxMenuOpened: em,
                                              onCtxMenuSelection: eg,
                                              quest: s,
                                              useReducedMotion: M,
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
        : (z ? f.log('Not rendered due to asset error') : B || f.log('Not rendered due to ineligibility'), null);
}
let q =
    12633 == n.j
        ? function () {
              let e = (0, C.DH)();
              return null == e
                  ? null
                  : (0, r.jsx)(
                        _.p,
                        {
                            source: P.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, r.jsx)(B, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
