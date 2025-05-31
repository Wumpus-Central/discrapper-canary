n.d(t, {
    P: () => k,
    Z: () => B
}),
    n(388685);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(240894),
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
function k(e) {
    var t, n;
    let { quest: o } = e,
        f = (0, j.T)({
            quest: o,
            location: P.dr.QUESTS_BAR
        }),
        k = (0, b.Zy)({ location: P.dr.QUESTS_BAR }),
        B = (0, l.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil),
        q = (0, _.qN)({
            quest: o,
            location: P.dr.QUESTS_BAR
        }),
        I = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        D = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        M = s.useRef(null),
        L = s.useMemo(() => (0, h.q8)(o), [o]),
        Z = (null == (t = o.userStatus) ? void 0 : t.enrolledAt) != null,
        V = (0, d.Z)(Z),
        W = (null == (n = o.userStatus) ? void 0 : n.completedAt) != null,
        Q = (0, d.Z)(W),
        { hasError: H, isLoading: U } = (0, y.d7)(),
        z = s.useContext(S.T) || (k && q && !U && !B),
        F = s.useRef(z),
        K = (0, w.B)(o, z && !H),
        X = s.useRef(-1),
        Y = s.useRef(!1),
        [G, J] = s.useState(!1),
        [$, ee] = s.useState(!1),
        [et, en] = s.useState(!0),
        [er, es] = s.useState(!0),
        [eo, ea] = s.useState(K.preEnrollmentExpandedHeight),
        ei = s.useRef(null),
        el = s.useCallback((e) => {
            en(!1), ee(e);
        }, []),
        ec = s.useCallback(() => {
            var e, t;
            ea((null != (t = null == (e = ei.current) ? void 0 : e.offsetHeight) ? t : 84) + 2 * K.paddingVertical);
        }, [K.paddingVertical]),
        ed = s.useCallback(() => {
            ec(), el(!0);
        }, [ec, el]),
        eu = s.useCallback(() => {
            J(!0);
        }, []),
        ep = s.useCallback(() => {
            J(!1), Y.current || W || el(!1);
        }, [W, el]),
        em = s.useCallback(() => {
            J(!1), W || el(!1), (Y.current = !1);
        }, [W, el]),
        ef = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if ($) return;
                let { withDelay: t = !1 } = e;
                t ? (X.current = window.setTimeout(ed, 75)) : ed();
            },
            [ed, $]
        ),
        eg = s.useCallback(() => {
            ef();
        }, [ef]),
        ex = s.useCallback(() => {
            window.clearTimeout(X.current), K.canCollapseOnBlur && !G && (Y.current || el(!1));
        }, [G, K, el]),
        eh = s.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: o.id,
                event: E.rMx.QUEST_HOVER,
                properties: A(N({}, (0, m.mH)(x.jn.QUEST_BAR)), { impression_id: null == (e = M.current) ? void 0 : e.getId() }),
                shouldExtendSession: !0
            }),
                (Y.current = !0),
                ef({ withDelay: !0 });
        }, [ef, o]),
        eb = s.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: o.id,
                event: E.rMx.QUEST_HOVER_OFF,
                properties: A(N({}, (0, m.mH)(x.jn.QUEST_BAR)), { impression_id: null == (e = M.current) ? void 0 : e.getId() })
            }),
                (Y.current = !1),
                ex();
        }, [ex, o]);
    s.useLayoutEffect(() => {
        W && K.shouldExpandOnQuestComplete && ed();
    }, [ed, W, K.shouldExpandOnQuestComplete]),
        s.useLayoutEffect(() => {
            Z && !V && Y.current && ed();
        }, [ed, Z, V]),
        s.useLayoutEffect(() => {
            W || !Z || V || Y.current || el(!1);
        }, [Z, W, V, el]),
        s.useLayoutEffect(() => {
            z !== F.current && es(!1), (F.current = z);
        }, [z]);
    let ej = Z ? P.XZ : P.R4,
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
    s.useEffect(() => {
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
            es(!0);
        },
        onStart: () => {
            es(!1);
        }
    });
    return (s.useEffect(() => {
        L && (0, O.loadVideoQuestModal)();
    }, [L]),
    s.useLayoutEffect(() => {
        W && !Q && K.canCollapseOnBlur && ec();
    }, [W, ed, K.canCollapseOnBlur, ec, Q]),
    s.useEffect(() => {
        var e, t;
        H &&
            (0, m.dA)({
                questId: o.id,
                event: E.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: A(N({}, (0, m.mH)(x.jn.QUEST_BAR)), {
                    reason: 'asset_loading_error',
                    impression_id: null == (e = M.current) ? void 0 : e.getId()
                })
            }),
            k ||
                (0, m.dA)({
                    questId: o.id,
                    event: E.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: A(N({}, (0, m.mH)(x.jn.QUEST_BAR)), {
                        reason: 'not_eligible_for_quest',
                        impression_id: null == (t = M.current) ? void 0 : t.getId()
                    })
                });
    }, [H, k, o.id]),
    k && (z || !er || U) && !H)
        ? (0, r.jsx)(v.A, {
              questOrQuests: o,
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
                                      questId: o.id,
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
                                      color: o.config.colors.secondary,
                                      height: e_.to({
                                          range: [0, 1],
                                          output: [0, !K.canCollapseOnBlur && $ ? eo : 70]
                                      })
                                  },
                                  children: (0, r.jsx)(i.animated.div, {
                                      className: a()(T.contentWrapper, {
                                          [T.contentWrapperExpanded]: $,
                                          [T.contentWrapperAccepted]: Z
                                      }),
                                      style: {
                                          backgroundColor: K.preEnrollmentBackgroundColor,
                                          backgroundImage: Z ? K.postEnrollmentBackgroundImage : void 0
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
                                              quest: o,
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
        : (H ? f.log('Not rendered due to asset error') : k || f.log('Not rendered due to ineligibility'), null);
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
