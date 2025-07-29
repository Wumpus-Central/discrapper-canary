(n.d(t, {
    P: () => I,
    Z: () => q
}),
    n(388685));
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(564854),
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
    y = n(602667),
    C = n(110560),
    O = n(78826),
    E = n(667105),
    w = n(693900),
    S = n(617889),
    T = n(130653),
    P = n(46140),
    A = n(981631),
    N = n(414444);
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
        (0, x.qI)({
            mode: t ? P.NH.EXPANDED : P.NH.COLLAPSED,
            questContent: b.jn.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: b.jn.QUEST_BAR_V2
        }),
        null
    );
}
function I(e) {
    var t, n;
    let { quest: s } = e,
        x = (0, v.T)({
            quest: s,
            location: P.dr.QUESTS_BAR
        }),
        I = (0, _.Zy)({ location: P.dr.QUESTS_BAR }),
        q = (0, l.e7)([h.Z], () => null != h.Z.questEnrollmentBlockedUntil),
        { isQuestBarVisible: D, reason: Q } = (0, E.qN)({
            quest: s,
            location: P.dr.QUESTS_BAR
        }),
        V = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        L = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        M = o.useRef(null),
        W = o.useMemo(() => (0, g.q8)(s), [s]),
        Z = (null == (t = s.userStatus) ? void 0 : t.enrolledAt) != null,
        U = (0, u.Z)(Z),
        H = (null == (n = s.userStatus) ? void 0 : n.completedAt) != null,
        z = (0, u.Z)(H),
        { hasError: F, isLoading: X } = (0, O.d7)(),
        K = o.useContext(T.T) || (I && D && !X && !q),
        Y = o.useRef(K),
        G = (0, S.B)(s, K && !F),
        J = o.useRef(-1),
        $ = o.useRef(!1),
        [ee, et] = o.useState(!1),
        [en, er] = o.useState(!1),
        [eo, es] = o.useState(!0),
        [ea, ei] = o.useState(!0),
        [el, ec] = o.useState(G.preEnrollmentExpandedHeight),
        eu = o.useRef(null),
        ed = o.useCallback((e) => {
            (es(!1), er(e));
        }, []),
        ep = o.useCallback(() => {
            var e, t;
            ec((null != (t = null == (e = eu.current) ? void 0 : e.offsetHeight) ? t : 84) + 2 * G.paddingVertical);
        }, [G.paddingVertical]),
        em = o.useCallback(() => {
            (ep(), ed(!0));
        }, [ep, ed]),
        ef = o.useCallback(() => {
            et(!0);
        }, []),
        eg = o.useCallback(() => {
            (et(!1), $.current || H || ed(!1));
        }, [H, ed]),
        ex = o.useCallback(() => {
            (et(!1), H || ed(!1), ($.current = !1));
        }, [H, ed]),
        eh = o.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (en) return;
                let { withDelay: t = !1 } = e;
                t ? (J.current = window.setTimeout(em, 75)) : em();
            },
            [em, en]
        ),
        eb = o.useCallback(() => {
            eh();
        }, [eh]),
        ej = o.useCallback(() => {
            (window.clearTimeout(J.current), G.canCollapseOnBlur && !ee && ($.current || ed(!1)));
        }, [ee, G, ed]),
        e_ = o.useCallback(() => {
            var e;
            ((0, m.dA)({
                questId: s.id,
                event: A.rMx.QUEST_HOVER,
                properties: B(R({}, (0, m.mH)(b.jn.QUEST_BAR)), { impression_id: null == (e = M.current) ? void 0 : e.getId() }),
                shouldExtendSession: !0,
                sourceQuestContent: G.trackingCtx.content
            }),
                ($.current = !0),
                eh({ withDelay: !0 }));
        }, [eh, s, G.trackingCtx.content]),
        ev = o.useCallback(() => {
            var e;
            ((0, m.dA)({
                questId: s.id,
                event: A.rMx.QUEST_HOVER_OFF,
                properties: B(R({}, (0, m.mH)(b.jn.QUEST_BAR)), { impression_id: null == (e = M.current) ? void 0 : e.getId() }),
                sourceQuestContent: G.trackingCtx.content
            }),
                ($.current = !1),
                ej());
        }, [ej, s, G.trackingCtx.content]);
    (o.useLayoutEffect(() => {
        H && G.shouldExpandOnQuestComplete && em();
    }, [em, H, G.shouldExpandOnQuestComplete]),
        o.useLayoutEffect(() => {
            Z && !U && $.current && em();
        }, [em, Z, U]),
        o.useLayoutEffect(() => {
            H || !Z || U || $.current || ed(!1);
        }, [Z, H, U, ed]),
        o.useLayoutEffect(() => {
            (K !== Y.current && ei(!1), (Y.current = K));
        }, [K]));
    let ey = Z ? P.XZ : P.R4,
        [{ expansionSpring: eC }, eO] = (0, c.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: ey,
            onRest: () => {
                es(!0);
            },
            onStart: () => {
                es(!1);
            }
        }));
    o.useEffect(() => {
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
    (o.useEffect(() => {
        W && (0, C.loadVideoQuestModal)();
    }, [W]),
        o.useLayoutEffect(() => {
            H && !z && G.canCollapseOnBlur && ep();
        }, [H, em, G.canCollapseOnBlur, ep, z]),
        o.useEffect(() => {
            var e, t;
            (F &&
                (0, m.dA)({
                    questId: s.id,
                    event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: B(R({}, (0, m.mH)(b.jn.QUEST_BAR)), {
                        reason: 'asset_loading_error',
                        impression_id: null == (e = M.current) ? void 0 : e.getId()
                    }),
                    sourceQuestContent: G.trackingCtx.content
                }),
                I ||
                    (0, m.dA)({
                        questId: s.id,
                        event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: B(R({}, (0, m.mH)(b.jn.QUEST_BAR)), {
                            reason: 'not_eligible_for_quest',
                            impression_id: null == (t = M.current) ? void 0 : t.getId()
                        }),
                        sourceQuestContent: G.trackingCtx.content
                    }));
        }, [F, I, s.id, G.trackingCtx.content]),
        o.useEffect(() => {
            if (!K && ea && !X) {
                var e;
                (0, m.dA)({
                    questId: s.id,
                    event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: B(R({}, (0, m.mH)(b.jn.QUEST_BAR)), {
                        reason: Q,
                        impression_id: null == (e = M.current) ? void 0 : e.getId()
                    }),
                    sourceQuestContent: G.trackingCtx.content
                });
            }
        }, [K, ea, X, s.id, Q, G.trackingCtx.content]),
        o.useEffect(() => {
            ((!D || q) && f.Z.clearTracking(), K && ea && !X && !F && I && f.Z.stopTracking(s.id));
        }, [D, q, K, ea, X, F, I, s.id]));
    let ew = (0, j.h)({
        location: P.dr.QUESTS_BAR,
        questConfig: s.config
    });
    return I && (K || !ea || X) && !F
        ? (0, r.jsx)(y.A, {
              questOrQuests: s,
              questContent: G.trackingCtx.content,
              overrideVisibility: !L && K,
              sourceQuestContent: G.trackingCtx.content,
              children: (e, t) => {
                  let n = G.component;
                  return (
                      (M.current = t.current),
                      (0, r.jsxs)('div', {
                          className: N.mask,
                          children: [
                              K &&
                                  (0, r.jsx)(k, {
                                      questId: s.id,
                                      isExpanded: en
                                  }),
                              (0, r.jsx)(i.animated.div, {
                                  'aria-hidden': !K,
                                  onMouseLeave: ev,
                                  onMouseEnter: e_,
                                  onFocus: eb,
                                  onBlur: ej,
                                  className: a()(N.wrapper, {
                                      [N.wrapperInvisible]: !K,
                                      [N.wrapperVisible]: K && ea
                                  }),
                                  style: {
                                      color: ew ? void 0 : s.config.colors.secondary,
                                      height: eE.to({
                                          range: [0, 1],
                                          output: [0, !G.canCollapseOnBlur && en ? el : 70]
                                      })
                                  },
                                  children: (0, r.jsx)(i.animated.div, {
                                      className: a()(N.contentWrapper, {
                                          [N.contentWrapperExpanded]: en,
                                          [N.contentWrapperAccepted]: Z,
                                          [N.contentWrapperBrandColorRemoval]: ew
                                      }),
                                      style: {
                                          backgroundColor: ew ? void 0 : G.preEnrollmentBackgroundColor,
                                          backgroundImage: Z && !ew ? G.postEnrollmentBackgroundImage : void 0
                                      },
                                      children: (0, r.jsx)(w.t, {
                                          springConfig: ey,
                                          isExpanded: en,
                                          children: (0, r.jsx)(n, {
                                              expandedContentRef: eu,
                                              expansionSpring: eC,
                                              isExpanded: en,
                                              isExpansionAnimationComplete: eo,
                                              onCtxMenuClosed: eg,
                                              onCtxMenuOpened: ef,
                                              onCtxMenuSelection: ex,
                                              quest: s,
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
        : (F ? x.log('Not rendered due to asset error') : I || x.log('Not rendered due to ineligibility'), null);
}
let q =
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
                            children: (0, r.jsx)(I, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
