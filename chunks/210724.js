(n.d(t, {
    P: () => q,
    Z: () => I
}),
    n(388685));
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(264738),
    l = n(442837),
    c = n(481060),
    u = n(110924),
    d = n(607070),
    p = n(819640),
    m = n(617136),
    f = n(823289),
    g = n(113434),
    x = n(569984),
    h = n(497505),
    b = n(918701),
    j = n(192023),
    _ = n(977156),
    v = n(5881),
    y = n(602667),
    C = n(78826),
    O = n(667105),
    E = n(341907),
    S = n(693900),
    w = n(617889),
    P = n(130653),
    T = n(46140),
    N = n(981631),
    A = n(414444);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function B(e, t) {
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
        (0, g.qI)({
            mode: t ? T.NH.EXPANDED : T.NH.COLLAPSED,
            questContent: h.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: h.jn.QUEST_BAR_V2
        }),
        null
    );
}
function q(e) {
    var t, n;
    let { quest: o } = e,
        g = (0, v.T)({
            quest: o,
            location: T.dr.QUESTS_BAR
        }),
        q = (0, _.Zy)({ location: T.dr.QUESTS_BAR }),
        I = (0, l.e7)([x.Z], () => null != x.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: D, reason: Q } = (0, O.qN)({
            quest: o,
            location: T.dr.QUESTS_BAR
        }),
        V = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        L = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        M = s.useRef(null),
        W = s.useMemo(() => (0, b.q8)(o), [o]),
        Z = (null == (t = o.userStatus) ? void 0 : t.enrolledAt) != null,
        U = (0, u.Z)(Z),
        H = (null == (n = o.userStatus) ? void 0 : n.completedAt) != null,
        z = (0, u.Z)(H),
        { hasError: F, isLoading: X } = (0, C.d7)(),
        K = s.useContext(P.T) || (q && D && !X && !I),
        Y = s.useRef(K),
        G = (0, w.B)(o, K && !F),
        J = s.useRef(-1),
        $ = s.useRef(!1),
        [ee, et] = s.useState(!1),
        [en, er] = s.useState(!1),
        [es, eo] = s.useState(!0),
        [ea, ei] = s.useState(!0),
        [el, ec] = s.useState(G.preEnrollmentExpandedHeight),
        eu = s.useRef(null),
        ed = s.useCallback((e) => {
            (eo(!1), er(e));
        }, []),
        ep = s.useCallback(() => {
            var e, t;
            ec((null != (t = null == (e = eu.current) ? void 0 : e.offsetHeight) ? t : 84) + 2 * G.paddingVertical);
        }, [G.paddingVertical]),
        em = s.useCallback(() => {
            (ep(), ed(!0));
        }, [ep, ed]),
        ef = s.useCallback(() => {
            et(!0);
        }, []),
        eg = s.useCallback(() => {
            (et(!1), $.current || H || ed(!1));
        }, [H, ed]),
        ex = s.useCallback(() => {
            (et(!1), H || ed(!1), ($.current = !1));
        }, [H, ed]),
        eh = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (en) return;
                let { withDelay: t = !1 } = e;
                t ? (J.current = window.setTimeout(em, 75)) : em();
            },
            [em, en]
        ),
        eb = s.useCallback(() => {
            eh();
        }, [eh]),
        ej = s.useCallback(() => {
            (window.clearTimeout(J.current), G.canCollapseOnBlur && !ee && ($.current || ed(!1)));
        }, [ee, G, ed]),
        e_ = s.useCallback(() => {
            var e;
            ((0, m.dA)({
                questId: o.id,
                event: N.rMx.QUEST_HOVER,
                properties: B(R({}, (0, m.mH)(h.jn.QUEST_BAR)), { impression_id: null == (e = M.current) ? void 0 : e.getId() }),
                shouldExtendSession: !0,
                sourceQuestContent: G.trackingCtx.content
            }),
                ($.current = !0),
                eh({ withDelay: !0 }));
        }, [eh, o, G.trackingCtx.content]),
        ev = s.useCallback(() => {
            var e;
            ((0, m.dA)({
                questId: o.id,
                event: N.rMx.QUEST_HOVER_OFF,
                properties: B(R({}, (0, m.mH)(h.jn.QUEST_BAR)), { impression_id: null == (e = M.current) ? void 0 : e.getId() }),
                sourceQuestContent: G.trackingCtx.content
            }),
                ($.current = !1),
                ej());
        }, [ej, o, G.trackingCtx.content]);
    (s.useLayoutEffect(() => {
        H && G.shouldExpandOnQuestComplete && em();
    }, [em, H, G.shouldExpandOnQuestComplete]),
        s.useLayoutEffect(() => {
            Z && !U && $.current && em();
        }, [em, Z, U]),
        s.useLayoutEffect(() => {
            H || !Z || U || $.current || ed(!1);
        }, [Z, H, U, ed]),
        s.useLayoutEffect(() => {
            (K !== Y.current && ei(!1), (Y.current = K));
        }, [K]));
    let ey = Z ? T.XZ : T.R4,
        [{ expansionSpring: eC }, eO] = (0, c.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: ey,
            onRest: () => {
                eo(!0);
            },
            onStart: () => {
                eo(!1);
            }
        }));
    s.useEffect(() => {
        eO({
            expansionSpring: +!!en,
            immediate: V
        });
    }, [en, eO, V]);
    let { visibilitySpring: eE } = (0, c.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!K },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0
        },
        onRest: () => {
            ei(!0);
        },
        onStart: () => {
            ei(!1);
        }
    });
    (s.useEffect(() => {
        W && (0, E.loadVideoQuestModal)();
    }, [W]),
        s.useLayoutEffect(() => {
            H && !z && G.canCollapseOnBlur && ep();
        }, [H, em, G.canCollapseOnBlur, ep, z]),
        s.useEffect(() => {
            var e, t;
            (F &&
                (0, m.dA)({
                    questId: o.id,
                    event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: B(R({}, (0, m.mH)(h.jn.QUEST_BAR)), {
                        reason: 'asset_loading_error',
                        impression_id: null == (e = M.current) ? void 0 : e.getId()
                    }),
                    sourceQuestContent: G.trackingCtx.content
                }),
                q ||
                    (0, m.dA)({
                        questId: o.id,
                        event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: B(R({}, (0, m.mH)(h.jn.QUEST_BAR)), {
                            reason: 'not_eligible_for_quest',
                            impression_id: null == (t = M.current) ? void 0 : t.getId()
                        }),
                        sourceQuestContent: G.trackingCtx.content
                    }));
        }, [F, q, o.id, G.trackingCtx.content]),
        s.useEffect(() => {
            if (!K && ea && !X) {
                var e;
                (0, m.dA)({
                    questId: o.id,
                    event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: B(R({}, (0, m.mH)(h.jn.QUEST_BAR)), {
                        reason: Q,
                        impression_id: null == (e = M.current) ? void 0 : e.getId()
                    }),
                    sourceQuestContent: G.trackingCtx.content
                });
            }
        }, [K, ea, X, o.id, Q, G.trackingCtx.content]),
        s.useEffect(() => {
            K && ea && !X && !F && q && f.Z.stopTracking(o.id);
        }, [K, ea, X, F, q, o.id]));
    let eS = (0, j.h)({
        location: T.dr.QUESTS_BAR,
        questConfig: o.config
    });
    return q && (K || !ea || X) && !F
        ? (0, r.jsx)(y.A, {
              questOrQuests: o,
              questContent: G.trackingCtx.content,
              overrideVisibility: !L && K,
              sourceQuestContent: G.trackingCtx.content,
              children: (e, t) => {
                  let n = G.component;
                  return (
                      (M.current = t.current),
                      (0, r.jsxs)('div', {
                          className: A.mask,
                          children: [
                              K &&
                                  (0, r.jsx)(k, {
                                      questId: o.id,
                                      isExpanded: en
                                  }),
                              (0, r.jsx)(i.animated.div, {
                                  'aria-hidden': !K,
                                  onMouseLeave: ev,
                                  onMouseEnter: e_,
                                  onFocus: eb,
                                  onBlur: ej,
                                  className: a()(A.wrapper, {
                                      [A.wrapperInvisible]: !K,
                                      [A.wrapperVisible]: K && ea
                                  }),
                                  style: {
                                      color: eS ? void 0 : o.config.colors.secondary,
                                      height: eE.to({
                                          range: [0, 1],
                                          output: [0, !G.canCollapseOnBlur && en ? el : 70]
                                      })
                                  },
                                  children: (0, r.jsx)(i.animated.div, {
                                      className: a()(A.contentWrapper, {
                                          [A.contentWrapperExpanded]: en,
                                          [A.contentWrapperAccepted]: Z,
                                          [A.contentWrapperBrandColorRemoval]: eS
                                      }),
                                      style: {
                                          backgroundColor: eS ? void 0 : G.preEnrollmentBackgroundColor,
                                          backgroundImage: Z && !eS ? G.postEnrollmentBackgroundImage : void 0
                                      },
                                      children: (0, r.jsx)(S.t, {
                                          springConfig: ey,
                                          isExpanded: en,
                                          children: (0, r.jsx)(n, {
                                              expandedContentRef: eu,
                                              expansionSpring: eC,
                                              isExpanded: en,
                                              isExpansionAnimationComplete: es,
                                              onCtxMenuClosed: eg,
                                              onCtxMenuOpened: ef,
                                              onCtxMenuSelection: ex,
                                              quest: o,
                                              useReducedMotion: V,
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
        : (F ? g.log('Not rendered due to asset error') : q || g.log('Not rendered due to ineligibility'), null);
}
let I =
    12633 == n.j
        ? function () {
              let e = (0, O.DH)();
              return null == e
                  ? null
                  : (0, r.jsx)(
                        C.p,
                        {
                            source: T.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, r.jsx)(q, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
