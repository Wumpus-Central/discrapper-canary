n.d(t, {
    P: () => B,
    Z: () => q
}),
    n(388685);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
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
    _ = n(602667),
    y = n(78826),
    O = n(667105),
    C = n(341907),
    w = n(693900),
    S = n(617889),
    P = n(130653),
    E = n(46140),
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
function k(e, t) {
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
            mode: t ? E.NH.EXPANDED : E.NH.COLLAPSED,
            questContent: x.jn.QUEST_BAR_V2,
            questId: n
        }),
        null
    );
}
function B(e) {
    var t, n;
    let { quest: o } = e,
        f = (0, v.T)({
            quest: o,
            location: E.dr.QUESTS_BAR
        }),
        B = (0, j.Zy)({ location: E.dr.QUESTS_BAR }),
        q = (0, l.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: I, reason: D } = (0, O.qN)({
            quest: o,
            location: E.dr.QUESTS_BAR
        }),
        L = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        M = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        V = s.useRef(null),
        W = s.useMemo(() => (0, h.q8)(o), [o]),
        Z = (null == (t = o.userStatus) ? void 0 : t.enrolledAt) != null,
        Q = (0, d.Z)(Z),
        H = (null == (n = o.userStatus) ? void 0 : n.completedAt) != null,
        U = (0, d.Z)(H),
        { hasError: z, isLoading: F } = (0, y.d7)(),
        X = s.useContext(P.T) || (B && I && !F && !q),
        K = s.useRef(X),
        Y = (0, S.B)(o, X && !z),
        G = s.useRef(-1),
        J = s.useRef(!1),
        [$, ee] = s.useState(!1),
        [et, en] = s.useState(!1),
        [er, es] = s.useState(!0),
        [eo, ea] = s.useState(!0),
        [ei, el] = s.useState(Y.preEnrollmentExpandedHeight),
        ec = s.useRef(null),
        ed = s.useCallback((e) => {
            es(!1), en(e);
        }, []),
        eu = s.useCallback(() => {
            var e, t;
            el((null != (t = null == (e = ec.current) ? void 0 : e.offsetHeight) ? t : 84) + 2 * Y.paddingVertical);
        }, [Y.paddingVertical]),
        ep = s.useCallback(() => {
            eu(), ed(!0);
        }, [eu, ed]),
        em = s.useCallback(() => {
            ee(!0);
        }, []),
        ef = s.useCallback(() => {
            ee(!1), J.current || H || ed(!1);
        }, [H, ed]),
        eg = s.useCallback(() => {
            ee(!1), H || ed(!1), (J.current = !1);
        }, [H, ed]),
        ex = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (et) return;
                let { withDelay: t = !1 } = e;
                t ? (G.current = window.setTimeout(ep, 75)) : ep();
            },
            [ep, et]
        ),
        eh = s.useCallback(() => {
            ex();
        }, [ex]),
        eb = s.useCallback(() => {
            window.clearTimeout(G.current), Y.canCollapseOnBlur && !$ && (J.current || ed(!1));
        }, [$, Y, ed]),
        ej = s.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: o.id,
                event: T.rMx.QUEST_HOVER,
                properties: k(A({}, (0, m.mH)(x.jn.QUEST_BAR)), { impression_id: null == (e = V.current) ? void 0 : e.getId() }),
                shouldExtendSession: !0
            }),
                (J.current = !0),
                ex({ withDelay: !0 });
        }, [ex, o]),
        ev = s.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: o.id,
                event: T.rMx.QUEST_HOVER_OFF,
                properties: k(A({}, (0, m.mH)(x.jn.QUEST_BAR)), { impression_id: null == (e = V.current) ? void 0 : e.getId() })
            }),
                (J.current = !1),
                eb();
        }, [eb, o]);
    s.useLayoutEffect(() => {
        H && Y.shouldExpandOnQuestComplete && ep();
    }, [ep, H, Y.shouldExpandOnQuestComplete]),
        s.useLayoutEffect(() => {
            Z && !Q && J.current && ep();
        }, [ep, Z, Q]),
        s.useLayoutEffect(() => {
            H || !Z || Q || J.current || ed(!1);
        }, [Z, H, Q, ed]),
        s.useLayoutEffect(() => {
            X !== K.current && ea(!1), (K.current = X);
        }, [X]);
    let e_ = Z ? E.XZ : E.R4,
        [{ expansionSpring: ey }, eO] = (0, c.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: e_,
            onRest: () => {
                es(!0);
            },
            onStart: () => {
                es(!1);
            }
        }));
    s.useEffect(() => {
        eO({
            expansionSpring: +!!et,
            immediate: L
        });
    }, [et, eO, L]);
    let { visibilitySpring: eC } = (0, c.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!X },
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
    s.useEffect(() => {
        W && (0, C.loadVideoQuestModal)();
    }, [W]),
        s.useLayoutEffect(() => {
            H && !U && Y.canCollapseOnBlur && eu();
        }, [H, ep, Y.canCollapseOnBlur, eu, U]),
        s.useEffect(() => {
            var e, t;
            z &&
                (0, m.dA)({
                    questId: o.id,
                    event: T.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: k(A({}, (0, m.mH)(x.jn.QUEST_BAR)), {
                        reason: 'asset_loading_error',
                        impression_id: null == (e = V.current) ? void 0 : e.getId()
                    })
                }),
                B ||
                    (0, m.dA)({
                        questId: o.id,
                        event: T.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: k(A({}, (0, m.mH)(x.jn.QUEST_BAR)), {
                            reason: 'not_eligible_for_quest',
                            impression_id: null == (t = V.current) ? void 0 : t.getId()
                        })
                    });
        }, [z, B, o.id]),
        s.useEffect(() => {
            if (!X && eo && !F) {
                var e;
                (0, m.dA)({
                    questId: o.id,
                    event: T.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: k(A({}, (0, m.mH)(x.jn.QUEST_BAR)), {
                        reason: D,
                        impression_id: null == (e = V.current) ? void 0 : e.getId()
                    })
                });
            }
        }, [X, eo, F, o.id, D]);
    let ew = (0, b.h)({
        location: E.dr.QUESTS_BAR,
        questConfig: o.config
    });
    return B && (X || !eo || F) && !z
        ? (0, r.jsx)(_.A, {
              questOrQuests: o,
              questContent: Y.trackingCtx.content,
              overrideVisibility: !M && X,
              children: (e, t) => {
                  let n = Y.component;
                  return (
                      (V.current = t.current),
                      (0, r.jsxs)('div', {
                          className: N.mask,
                          children: [
                              X &&
                                  (0, r.jsx)(R, {
                                      questId: o.id,
                                      isExpanded: et
                                  }),
                              (0, r.jsx)(i.animated.div, {
                                  'aria-hidden': !X,
                                  onMouseLeave: ev,
                                  onMouseEnter: ej,
                                  onFocus: eh,
                                  onBlur: eb,
                                  className: a()(N.wrapper, {
                                      [N.wrapperInvisible]: !X,
                                      [N.wrapperVisible]: X && eo
                                  }),
                                  style: {
                                      color: ew ? void 0 : o.config.colors.secondary,
                                      height: eC.to({
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
                                          springConfig: e_,
                                          isExpanded: et,
                                          children: (0, r.jsx)(n, {
                                              expandedContentRef: ec,
                                              expansionSpring: ey,
                                              isExpanded: et,
                                              isExpansionAnimationComplete: er,
                                              onCtxMenuClosed: ef,
                                              onCtxMenuOpened: em,
                                              onCtxMenuSelection: eg,
                                              quest: o,
                                              useReducedMotion: L,
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
              let e = (0, O.DH)();
              return null == e
                  ? null
                  : (0, r.jsx)(
                        y.p,
                        {
                            source: E.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, r.jsx)(B, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
