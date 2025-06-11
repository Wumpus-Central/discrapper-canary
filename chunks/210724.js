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
            mode: t ? E.NH.EXPANDED : E.NH.COLLAPSED,
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
            location: E.dr.QUESTS_BAR
        }),
        B = (0, j.Zy)({ location: E.dr.QUESTS_BAR }),
        q = (0, l.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil),
        I = (0, C.qN)({
            quest: s,
            location: E.dr.QUESTS_BAR
        }),
        D = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        M = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        L = o.useRef(null),
        W = o.useMemo(() => (0, h.q8)(s), [s]),
        V = (null == (t = s.userStatus) ? void 0 : t.enrolledAt) != null,
        Z = (0, d.Z)(V),
        Q = (null == (n = s.userStatus) ? void 0 : n.completedAt) != null,
        H = (0, d.Z)(Q),
        { hasError: U, isLoading: z } = (0, _.d7)(),
        F = o.useContext(P.T) || (B && I && !z && !q),
        K = o.useRef(F),
        X = (0, S.B)(s, F && !U),
        Y = o.useRef(-1),
        G = o.useRef(!1),
        [J, $] = o.useState(!1),
        [ee, et] = o.useState(!1),
        [en, er] = o.useState(!0),
        [eo, es] = o.useState(!0),
        [ea, ei] = o.useState(X.preEnrollmentExpandedHeight),
        el = o.useRef(null),
        ec = o.useCallback((e) => {
            er(!1), et(e);
        }, []),
        ed = o.useCallback(() => {
            var e, t;
            ei((null != (t = null == (e = el.current) ? void 0 : e.offsetHeight) ? t : 84) + 2 * X.paddingVertical);
        }, [X.paddingVertical]),
        eu = o.useCallback(() => {
            ed(), ec(!0);
        }, [ed, ec]),
        ep = o.useCallback(() => {
            $(!0);
        }, []),
        em = o.useCallback(() => {
            $(!1), G.current || Q || ec(!1);
        }, [Q, ec]),
        ef = o.useCallback(() => {
            $(!1), Q || ec(!1), (G.current = !1);
        }, [Q, ec]),
        eg = o.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (ee) return;
                let { withDelay: t = !1 } = e;
                t ? (Y.current = window.setTimeout(eu, 75)) : eu();
            },
            [eu, ee]
        ),
        ex = o.useCallback(() => {
            eg();
        }, [eg]),
        eh = o.useCallback(() => {
            window.clearTimeout(Y.current), X.canCollapseOnBlur && !J && (G.current || ec(!1));
        }, [J, X, ec]),
        eb = o.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: s.id,
                event: T.rMx.QUEST_HOVER,
                properties: R(A({}, (0, m.mH)(x.jn.QUEST_BAR)), { impression_id: null == (e = L.current) ? void 0 : e.getId() }),
                shouldExtendSession: !0
            }),
                (G.current = !0),
                eg({ withDelay: !0 });
        }, [eg, s]),
        ej = o.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: s.id,
                event: T.rMx.QUEST_HOVER_OFF,
                properties: R(A({}, (0, m.mH)(x.jn.QUEST_BAR)), { impression_id: null == (e = L.current) ? void 0 : e.getId() })
            }),
                (G.current = !1),
                eh();
        }, [eh, s]);
    o.useLayoutEffect(() => {
        Q && X.shouldExpandOnQuestComplete && eu();
    }, [eu, Q, X.shouldExpandOnQuestComplete]),
        o.useLayoutEffect(() => {
            V && !Z && G.current && eu();
        }, [eu, V, Z]),
        o.useLayoutEffect(() => {
            Q || !V || Z || G.current || ec(!1);
        }, [V, Q, Z, ec]),
        o.useLayoutEffect(() => {
            F !== K.current && es(!1), (K.current = F);
        }, [F]);
    let ev = V ? E.XZ : E.R4,
        [{ expansionSpring: ey }, e_] = (0, c.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: ev,
            onRest: () => {
                er(!0);
            },
            onStart: () => {
                er(!1);
            }
        }));
    o.useEffect(() => {
        e_({
            expansionSpring: +!!ee,
            immediate: D
        });
    }, [ee, e_, D]);
    let { visibilitySpring: eC } = (0, c.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!F },
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
    o.useEffect(() => {
        W && (0, O.loadVideoQuestModal)();
    }, [W]),
        o.useLayoutEffect(() => {
            Q && !H && X.canCollapseOnBlur && ed();
        }, [Q, eu, X.canCollapseOnBlur, ed, H]),
        o.useEffect(() => {
            var e, t;
            U &&
                (0, m.dA)({
                    questId: s.id,
                    event: T.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: R(A({}, (0, m.mH)(x.jn.QUEST_BAR)), {
                        reason: 'asset_loading_error',
                        impression_id: null == (e = L.current) ? void 0 : e.getId()
                    })
                }),
                B ||
                    (0, m.dA)({
                        questId: s.id,
                        event: T.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: R(A({}, (0, m.mH)(x.jn.QUEST_BAR)), {
                            reason: 'not_eligible_for_quest',
                            impression_id: null == (t = L.current) ? void 0 : t.getId()
                        })
                    });
        }, [U, B, s.id]);
    let eO = (0, b.h)({
        location: E.dr.QUESTS_BAR,
        questConfig: s.config
    });
    return B && (F || !eo || z) && !U
        ? (0, r.jsx)(y.A, {
              questOrQuests: s,
              questContent: X.trackingCtx.content,
              overrideVisibility: !M && F,
              children: (e, t) => {
                  let n = X.component;
                  return (
                      (L.current = t.current),
                      (0, r.jsxs)('div', {
                          className: N.mask,
                          children: [
                              F &&
                                  (0, r.jsx)(k, {
                                      questId: s.id,
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
                                      [N.wrapperVisible]: F && eo
                                  }),
                                  style: {
                                      color: eO ? void 0 : s.config.colors.secondary,
                                      height: eC.to({
                                          range: [0, 1],
                                          output: [0, !X.canCollapseOnBlur && ee ? ea : 70]
                                      })
                                  },
                                  children: (0, r.jsx)(i.animated.div, {
                                      className: a()(N.contentWrapper, {
                                          [N.contentWrapperExpanded]: ee,
                                          [N.contentWrapperAccepted]: V,
                                          [N.contentWrapperBrandColorRemoval]: eO
                                      }),
                                      style: {
                                          backgroundColor: eO ? void 0 : X.preEnrollmentBackgroundColor,
                                          backgroundImage: V && !eO ? X.postEnrollmentBackgroundImage : void 0
                                      },
                                      children: (0, r.jsx)(w.t, {
                                          springConfig: ev,
                                          isExpanded: ee,
                                          children: (0, r.jsx)(n, {
                                              expandedContentRef: el,
                                              expansionSpring: ey,
                                              isExpanded: ee,
                                              isExpansionAnimationComplete: en,
                                              onCtxMenuClosed: em,
                                              onCtxMenuOpened: ep,
                                              onCtxMenuSelection: ef,
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
let q =
    12633 == n.j
        ? function () {
              let e = (0, C.DH)();
              return null == e
                  ? null
                  : (0, r.jsx)(
                        _.p,
                        {
                            source: E.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, r.jsx)(B, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
