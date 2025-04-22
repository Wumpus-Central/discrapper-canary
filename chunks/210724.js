n.d(t, {
    P: () => R,
    Z: () => B
}),
    n(388685);
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(200100),
    l = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(607070),
    p = n(819640),
    m = n(617136),
    f = n(113434),
    g = n(497505),
    x = n(918701),
    h = n(977156),
    b = n(5881),
    j = n(602667),
    v = n(78826),
    _ = n(667105),
    y = n(341907),
    C = n(693900),
    O = n(617889),
    w = n(130653),
    S = n(46140),
    P = n(981631),
    E = n(414444);
function T(e) {
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
function N(e, t) {
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
function A(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, f.qI)({
            mode: t ? S.NH.EXPANDED : S.NH.COLLAPSED,
            questContent: g.jn.QUEST_BAR_V2,
            questId: n
        }),
        null
    );
}
function R(e) {
    var t, n;
    let { quest: s } = e,
        f = (0, b.T)({
            quest: s,
            location: S.dr.QUESTS_BAR
        }),
        R = (0, h.Zy)({ location: S.dr.QUESTS_BAR }),
        B = (0, _.qN)({
            quest: s,
            location: S.dr.QUESTS_BAR
        }),
        k = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        q = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        D = o.useRef(null),
        I = o.useMemo(() => (0, x.q8)(s), [s]),
        M = (null == (t = s.userStatus) ? void 0 : t.enrolledAt) != null,
        L = (0, d.Z)(M),
        Z = (null == (n = s.userStatus) ? void 0 : n.completedAt) != null,
        W = (0, d.Z)(Z),
        { hasError: V, isLoading: Q } = (0, v.d7)(),
        U = o.useContext(w.T) || (R && B && !Q),
        H = o.useRef(U),
        F = (0, O.B)(s, U && !V),
        z = o.useRef(-1),
        X = o.useRef(!1),
        [K, Y] = o.useState(!1),
        [G, J] = o.useState(!1),
        [$, ee] = o.useState(!0),
        [et, en] = o.useState(!0),
        [er, eo] = o.useState(F.preEnrollmentExpandedHeight),
        es = o.useRef(null),
        ea = o.useCallback((e) => {
            ee(!1), J(e);
        }, []),
        ei = o.useCallback(() => {
            var e, t;
            eo((null != (t = null == (e = es.current) ? void 0 : e.offsetHeight) ? t : 84) + 2 * F.paddingVertical);
        }, [F.paddingVertical]),
        el = o.useCallback(() => {
            ei(), ea(!0);
        }, [ei, ea]),
        ec = o.useCallback(() => {
            Y(!0);
        }, []),
        ed = o.useCallback(() => {
            Y(!1), X.current || Z || ea(!1);
        }, [Z, ea]),
        eu = o.useCallback(() => {
            Y(!1), Z || ea(!1), (X.current = !1);
        }, [Z, ea]),
        ep = o.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (G) return;
                let { withDelay: t = !1 } = e;
                t ? (z.current = window.setTimeout(el, 75)) : el();
            },
            [el, G]
        ),
        em = o.useCallback(() => {
            ep();
        }, [ep]),
        ef = o.useCallback(() => {
            window.clearTimeout(z.current), F.canCollapseOnBlur && !K && (X.current || ea(!1));
        }, [K, F, ea]),
        eg = o.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: s.id,
                event: P.rMx.QUEST_HOVER,
                properties: N(T({}, (0, m.mH)(g.jn.QUEST_BAR)), { impression_id: null == (e = D.current) ? void 0 : e.getId() }),
                shouldExtendSession: !0
            }),
                (X.current = !0),
                ep({ withDelay: !0 });
        }, [ep, s]),
        ex = o.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: s.id,
                event: P.rMx.QUEST_HOVER_OFF,
                properties: N(T({}, (0, m.mH)(g.jn.QUEST_BAR)), { impression_id: null == (e = D.current) ? void 0 : e.getId() })
            }),
                (X.current = !1),
                ef();
        }, [ef, s]);
    o.useLayoutEffect(() => {
        Z && F.shouldExpandOnQuestComplete && el();
    }, [el, Z, F.shouldExpandOnQuestComplete]),
        o.useLayoutEffect(() => {
            M && !L && X.current && el();
        }, [el, M, L]),
        o.useLayoutEffect(() => {
            Z || !M || L || X.current || ea(!1);
        }, [M, Z, L, ea]),
        o.useLayoutEffect(() => {
            U !== H.current && en(!1), (H.current = U);
        }, [U]);
    let eh = M ? S.XZ : S.R4,
        [{ expansionSpring: eb }, ej] = (0, c.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: eh,
            onRest: () => {
                ee(!0);
            },
            onStart: () => {
                ee(!1);
            }
        }));
    o.useEffect(() => {
        ej({
            expansionSpring: +!!G,
            immediate: k
        });
    }, [G, ej, k]);
    let { visibilitySpring: ev } = (0, c.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!U },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0
        },
        onRest: () => {
            en(!0);
        },
        onStart: () => {
            en(!1);
        }
    });
    return (o.useEffect(() => {
        I && (0, y.loadVideoQuestModal)();
    }, [I]),
    o.useLayoutEffect(() => {
        Z && !W && F.canCollapseOnBlur && ei();
    }, [Z, el, F.canCollapseOnBlur, ei, W]),
    o.useEffect(() => {
        var e, t;
        V &&
            (0, m.dA)({
                questId: s.id,
                event: P.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: N(T({}, (0, m.mH)(g.jn.QUEST_BAR)), {
                    reason: 'asset_loading_error',
                    impression_id: null == (e = D.current) ? void 0 : e.getId()
                })
            }),
            R ||
                (0, m.dA)({
                    questId: s.id,
                    event: P.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: N(T({}, (0, m.mH)(g.jn.QUEST_BAR)), {
                        reason: 'not_eligible_for_quest',
                        impression_id: null == (t = D.current) ? void 0 : t.getId()
                    })
                });
    }, [V, R, s.id]),
    R && (U || !et || Q) && !V)
        ? (0, r.jsx)(j.A, {
              questOrQuests: s,
              questContent: F.trackingCtx.content,
              overrideVisibility: !q && U,
              children: (e, t) => {
                  let n = F.component;
                  return (
                      (D.current = t.current),
                      (0, r.jsxs)('div', {
                          className: E.mask,
                          children: [
                              U &&
                                  (0, r.jsx)(A, {
                                      questId: s.id,
                                      isExpanded: G
                                  }),
                              (0, r.jsx)(i.animated.div, {
                                  'aria-hidden': !U,
                                  onMouseLeave: ex,
                                  onMouseEnter: eg,
                                  onFocus: em,
                                  onBlur: ef,
                                  className: a()(E.wrapper, {
                                      [E.wrapperInvisible]: !U,
                                      [E.wrapperVisible]: U && et
                                  }),
                                  style: {
                                      color: s.config.colors.secondary,
                                      height: ev.to({
                                          range: [0, 1],
                                          output: [0, !F.canCollapseOnBlur && G ? er : 70]
                                      })
                                  },
                                  children: (0, r.jsx)(i.animated.div, {
                                      className: a()(E.contentWrapper, {
                                          [E.contentWrapperExpanded]: G,
                                          [E.contentWrapperAccepted]: M
                                      }),
                                      style: {
                                          backgroundColor: F.preEnrollmentBackgroundColor,
                                          backgroundImage: M ? F.postEnrollmentBackgroundImage : void 0
                                      },
                                      children: (0, r.jsx)(C.t, {
                                          springConfig: eh,
                                          isExpanded: G,
                                          children: (0, r.jsx)(n, {
                                              expandedContentRef: es,
                                              expansionSpring: eb,
                                              isExpanded: G,
                                              isExpansionAnimationComplete: $,
                                              onCtxMenuClosed: ed,
                                              onCtxMenuOpened: ec,
                                              onCtxMenuSelection: eu,
                                              quest: s,
                                              useReducedMotion: k,
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
        : (V ? f.log('Not rendered due to asset error') : R || f.log('Not rendered due to ineligibility'), null);
}
let B =
    12633 == n.j
        ? function () {
              let e = (0, _.DH)();
              return null == e
                  ? null
                  : (0, r.jsx)(
                        v.p,
                        {
                            source: S.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, r.jsx)(R, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
