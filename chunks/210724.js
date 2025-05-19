n.d(t, {
    P: () => k,
    Z: () => B
}),
    n(388685);
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(950035),
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
    b = n(977156),
    j = n(5881),
    v = n(602667),
    y = n(78826),
    _ = n(667105),
    O = n(341907),
    C = n(693900),
    w = n(617889),
    S = n(130653),
    P = n(46140),
    E = n(981631),
    T = n(975319);
function N(e) {
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
function A(e, t) {
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
function R(e) {
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
function k(e) {
    var t, n;
    let { quest: s } = e,
        f = (0, j.T)({
            quest: s,
            location: P.dr.QUESTS_BAR
        }),
        k = (0, b.Zy)({ location: P.dr.QUESTS_BAR }),
        B = (0, l.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil),
        q = (0, _.qN)({
            quest: s,
            location: P.dr.QUESTS_BAR
        }),
        I = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        D = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        M = o.useRef(null),
        L = o.useMemo(() => (0, h.q8)(s), [s]),
        W = (null == (t = s.userStatus) ? void 0 : t.enrolledAt) != null,
        Z = (0, d.Z)(W),
        V = (null == (n = s.userStatus) ? void 0 : n.completedAt) != null,
        Q = (0, d.Z)(V),
        { hasError: U, isLoading: H } = (0, y.d7)(),
        z = o.useContext(S.T) || (k && q && !H && !B),
        F = o.useRef(z),
        K = (0, w.B)(s, z && !U),
        X = o.useRef(-1),
        Y = o.useRef(!1),
        [G, J] = o.useState(!1),
        [$, ee] = o.useState(!1),
        [et, en] = o.useState(!0),
        [er, eo] = o.useState(!0),
        [es, ea] = o.useState(K.preEnrollmentExpandedHeight),
        ei = o.useRef(null),
        el = o.useCallback((e) => {
            en(!1), ee(e);
        }, []),
        ec = o.useCallback(() => {
            var e, t;
            ea((null != (t = null == (e = ei.current) ? void 0 : e.offsetHeight) ? t : 84) + 2 * K.paddingVertical);
        }, [K.paddingVertical]),
        ed = o.useCallback(() => {
            ec(), el(!0);
        }, [ec, el]),
        eu = o.useCallback(() => {
            J(!0);
        }, []),
        ep = o.useCallback(() => {
            J(!1), Y.current || V || el(!1);
        }, [V, el]),
        em = o.useCallback(() => {
            J(!1), V || el(!1), (Y.current = !1);
        }, [V, el]),
        ef = o.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if ($) return;
                let { withDelay: t = !1 } = e;
                t ? (X.current = window.setTimeout(ed, 75)) : ed();
            },
            [ed, $]
        ),
        eg = o.useCallback(() => {
            ef();
        }, [ef]),
        ex = o.useCallback(() => {
            window.clearTimeout(X.current), K.canCollapseOnBlur && !G && (Y.current || el(!1));
        }, [G, K, el]),
        eh = o.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: s.id,
                event: E.rMx.QUEST_HOVER,
                properties: A(N({}, (0, m.mH)(x.jn.QUEST_BAR)), { impression_id: null == (e = M.current) ? void 0 : e.getId() }),
                shouldExtendSession: !0
            }),
                (Y.current = !0),
                ef({ withDelay: !0 });
        }, [ef, s]),
        eb = o.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: s.id,
                event: E.rMx.QUEST_HOVER_OFF,
                properties: A(N({}, (0, m.mH)(x.jn.QUEST_BAR)), { impression_id: null == (e = M.current) ? void 0 : e.getId() })
            }),
                (Y.current = !1),
                ex();
        }, [ex, s]);
    o.useLayoutEffect(() => {
        V && K.shouldExpandOnQuestComplete && ed();
    }, [ed, V, K.shouldExpandOnQuestComplete]),
        o.useLayoutEffect(() => {
            W && !Z && Y.current && ed();
        }, [ed, W, Z]),
        o.useLayoutEffect(() => {
            V || !W || Z || Y.current || el(!1);
        }, [W, V, Z, el]),
        o.useLayoutEffect(() => {
            z !== F.current && eo(!1), (F.current = z);
        }, [z]);
    let ej = W ? P.XZ : P.R4,
        [{ expansionSpring: ev }, ey] = (0, c.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: ej,
            onRest: () => {
                en(!0);
            },
            onStart: () => {
                en(!1);
            }
        }));
    o.useEffect(() => {
        ey({
            expansionSpring: +!!$,
            immediate: I
        });
    }, [$, ey, I]);
    let { visibilitySpring: e_ } = (0, c.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!z },
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
    return (o.useEffect(() => {
        L && (0, O.loadVideoQuestModal)();
    }, [L]),
    o.useLayoutEffect(() => {
        V && !Q && K.canCollapseOnBlur && ec();
    }, [V, ed, K.canCollapseOnBlur, ec, Q]),
    o.useEffect(() => {
        var e, t;
        U &&
            (0, m.dA)({
                questId: s.id,
                event: E.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: A(N({}, (0, m.mH)(x.jn.QUEST_BAR)), {
                    reason: 'asset_loading_error',
                    impression_id: null == (e = M.current) ? void 0 : e.getId()
                })
            }),
            k ||
                (0, m.dA)({
                    questId: s.id,
                    event: E.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: A(N({}, (0, m.mH)(x.jn.QUEST_BAR)), {
                        reason: 'not_eligible_for_quest',
                        impression_id: null == (t = M.current) ? void 0 : t.getId()
                    })
                });
    }, [U, k, s.id]),
    k && (z || !er || H) && !U)
        ? (0, r.jsx)(v.A, {
              questOrQuests: s,
              questContent: K.trackingCtx.content,
              overrideVisibility: !D && z,
              children: (e, t) => {
                  let n = K.component;
                  return (
                      (M.current = t.current),
                      (0, r.jsxs)('div', {
                          className: T.mask,
                          children: [
                              z &&
                                  (0, r.jsx)(R, {
                                      questId: s.id,
                                      isExpanded: $
                                  }),
                              (0, r.jsx)(i.animated.div, {
                                  'aria-hidden': !z,
                                  onMouseLeave: eb,
                                  onMouseEnter: eh,
                                  onFocus: eg,
                                  onBlur: ex,
                                  className: a()(T.wrapper, {
                                      [T.wrapperInvisible]: !z,
                                      [T.wrapperVisible]: z && er
                                  }),
                                  style: {
                                      color: s.config.colors.secondary,
                                      height: e_.to({
                                          range: [0, 1],
                                          output: [0, !K.canCollapseOnBlur && $ ? es : 70]
                                      })
                                  },
                                  children: (0, r.jsx)(i.animated.div, {
                                      className: a()(T.contentWrapper, {
                                          [T.contentWrapperExpanded]: $,
                                          [T.contentWrapperAccepted]: W
                                      }),
                                      style: {
                                          backgroundColor: K.preEnrollmentBackgroundColor,
                                          backgroundImage: W ? K.postEnrollmentBackgroundImage : void 0
                                      },
                                      children: (0, r.jsx)(C.t, {
                                          springConfig: ej,
                                          isExpanded: $,
                                          children: (0, r.jsx)(n, {
                                              expandedContentRef: ei,
                                              expansionSpring: ev,
                                              isExpanded: $,
                                              isExpansionAnimationComplete: et,
                                              onCtxMenuClosed: ep,
                                              onCtxMenuOpened: eu,
                                              onCtxMenuSelection: em,
                                              quest: s,
                                              useReducedMotion: I,
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
        : (U ? f.log('Not rendered due to asset error') : k || f.log('Not rendered due to ineligibility'), null);
}
let B =
    12633 == n.j
        ? function () {
              let e = (0, _.DH)();
              return null == e
                  ? null
                  : (0, r.jsx)(
                        y.p,
                        {
                            source: P.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, r.jsx)(k, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
