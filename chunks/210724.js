n.d(t, {
    P: () => B,
    Z: () => k
}),
    n(388685);
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(779613),
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
    _ = n(78826),
    y = n(667105),
    C = n(341907),
    O = n(693900),
    w = n(617889),
    S = n(130653),
    P = n(46140),
    E = n(981631),
    T = n(414444);
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
function B(e) {
    var t, n;
    let { quest: s } = e,
        f = (0, j.T)({
            quest: s,
            location: P.dr.QUESTS_BAR
        }),
        B = (0, b.Zy)({ location: P.dr.QUESTS_BAR }),
        k = (0, l.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil),
        q = (0, y.qN)({
            quest: s,
            location: P.dr.QUESTS_BAR
        }),
        D = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        I = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        M = o.useRef(null),
        L = o.useMemo(() => (0, h.q8)(s), [s]),
        Z = (null == (t = s.userStatus) ? void 0 : t.enrolledAt) != null,
        W = (0, d.Z)(Z),
        V = (null == (n = s.userStatus) ? void 0 : n.completedAt) != null,
        Q = (0, d.Z)(V),
        { hasError: U, isLoading: H } = (0, _.d7)(),
        F = o.useContext(S.T) || (B && q && !H && !k),
        z = o.useRef(F),
        X = (0, w.B)(s, F && !U),
        K = o.useRef(-1),
        Y = o.useRef(!1),
        [G, J] = o.useState(!1),
        [$, ee] = o.useState(!1),
        [et, en] = o.useState(!0),
        [er, eo] = o.useState(!0),
        [es, ea] = o.useState(X.preEnrollmentExpandedHeight),
        ei = o.useRef(null),
        el = o.useCallback((e) => {
            en(!1), ee(e);
        }, []),
        ec = o.useCallback(() => {
            var e, t;
            ea((null != (t = null == (e = ei.current) ? void 0 : e.offsetHeight) ? t : 84) + 2 * X.paddingVertical);
        }, [X.paddingVertical]),
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
                t ? (K.current = window.setTimeout(ed, 75)) : ed();
            },
            [ed, $]
        ),
        eg = o.useCallback(() => {
            ef();
        }, [ef]),
        ex = o.useCallback(() => {
            window.clearTimeout(K.current), X.canCollapseOnBlur && !G && (Y.current || el(!1));
        }, [G, X, el]),
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
        V && X.shouldExpandOnQuestComplete && ed();
    }, [ed, V, X.shouldExpandOnQuestComplete]),
        o.useLayoutEffect(() => {
            Z && !W && Y.current && ed();
        }, [ed, Z, W]),
        o.useLayoutEffect(() => {
            V || !Z || W || Y.current || el(!1);
        }, [Z, V, W, el]),
        o.useLayoutEffect(() => {
            F !== z.current && eo(!1), (z.current = F);
        }, [F]);
    let ej = Z ? P.XZ : P.R4,
        [{ expansionSpring: ev }, e_] = (0, c.q_F)(() => ({
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
        e_({
            expansionSpring: +!!$,
            immediate: D
        });
    }, [$, e_, D]);
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
    return (o.useEffect(() => {
        L && (0, C.loadVideoQuestModal)();
    }, [L]),
    o.useLayoutEffect(() => {
        V && !Q && X.canCollapseOnBlur && ec();
    }, [V, ed, X.canCollapseOnBlur, ec, Q]),
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
            B ||
                (0, m.dA)({
                    questId: s.id,
                    event: E.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: A(N({}, (0, m.mH)(x.jn.QUEST_BAR)), {
                        reason: 'not_eligible_for_quest',
                        impression_id: null == (t = M.current) ? void 0 : t.getId()
                    })
                });
    }, [U, B, s.id]),
    B && (F || !er || H) && !U)
        ? (0, r.jsx)(v.A, {
              questOrQuests: s,
              questContent: X.trackingCtx.content,
              overrideVisibility: !I && F,
              children: (e, t) => {
                  let n = X.component;
                  return (
                      (M.current = t.current),
                      (0, r.jsxs)('div', {
                          className: T.mask,
                          children: [
                              F &&
                                  (0, r.jsx)(R, {
                                      questId: s.id,
                                      isExpanded: $
                                  }),
                              (0, r.jsx)(i.animated.div, {
                                  'aria-hidden': !F,
                                  onMouseLeave: eb,
                                  onMouseEnter: eh,
                                  onFocus: eg,
                                  onBlur: ex,
                                  className: a()(T.wrapper, {
                                      [T.wrapperInvisible]: !F,
                                      [T.wrapperVisible]: F && er
                                  }),
                                  style: {
                                      color: s.config.colors.secondary,
                                      height: ey.to({
                                          range: [0, 1],
                                          output: [0, !X.canCollapseOnBlur && $ ? es : 70]
                                      })
                                  },
                                  children: (0, r.jsx)(i.animated.div, {
                                      className: a()(T.contentWrapper, {
                                          [T.contentWrapperExpanded]: $,
                                          [T.contentWrapperAccepted]: Z
                                      }),
                                      style: {
                                          backgroundColor: X.preEnrollmentBackgroundColor,
                                          backgroundImage: Z ? X.postEnrollmentBackgroundImage : void 0
                                      },
                                      children: (0, r.jsx)(O.t, {
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
        : (U ? f.log('Not rendered due to asset error') : B || f.log('Not rendered due to ineligibility'), null);
}
let k =
    12633 == n.j
        ? function () {
              let e = (0, y.DH)();
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
