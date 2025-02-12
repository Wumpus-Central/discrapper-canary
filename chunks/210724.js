n.d(t, {
    P: () => R,
    Z: () => w
}),
    n(47120);
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
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
    _ = n(5881),
    C = n(602667),
    v = n(78826),
    j = n(667105),
    b = n(341907),
    T = n(693900),
    E = n(617889),
    N = n(130653),
    S = n(46140),
    y = n(981631),
    A = n(577754);
function B(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.qI)({
            mode: t ? S.NH.EXPANDED : S.NH.COLLAPSED,
            questContent: h.jn.QUEST_BAR_V2,
            questId: n
        }),
        null
    );
}
function R(e) {
    var t, n;
    let { quest: s } = e,
        x = (0, _.T)({
            quest: s,
            location: S.dr.QUESTS_BAR
        }),
        R = (0, f.Zy)({ location: S.dr.QUESTS_BAR }),
        w = (0, j.qN)({
            quest: s,
            location: S.dr.QUESTS_BAR
        }),
        q = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        k = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        P = o.useRef(null),
        I = o.useMemo(() => (0, g.q8)(s), [s]),
        M = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        O = (0, d.Z)(M),
        W = (null === (n = s.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        L = (0, d.Z)(W),
        { hasError: D, isLoading: Q } = (0, v.d7)(),
        Z = o.useContext(N.T) || (R && w && !Q),
        U = o.useRef(Z),
        V = (0, E.B)(s, Z && !D),
        H = o.useRef(-1),
        z = o.useRef(!1),
        [F, G] = o.useState(!1),
        [K, Y] = o.useState(!1),
        [X, J] = o.useState(!0),
        [$, ee] = o.useState(!0),
        [et, en] = o.useState(V.preEnrollmentExpandedHeight),
        er = o.useRef(null),
        eo = o.useCallback((e) => {
            J(!1), Y(e);
        }, []),
        es = o.useCallback(() => {
            var e, t;
            en((null !== (t = null === (e = er.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * V.paddingVertical);
        }, [V.paddingVertical]),
        ea = o.useCallback(() => {
            es(), eo(!0);
        }, [es, eo]),
        ei = o.useCallback(() => {
            G(!0);
        }, []),
        el = o.useCallback(() => {
            G(!1), z.current || W || eo(!1);
        }, [W, eo]),
        ec = o.useCallback(() => {
            G(!1), W || eo(!1), (z.current = !1);
        }, [W, eo]),
        ed = o.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (K) return;
                let { withDelay: t = !1 } = e;
                t ? (H.current = window.setTimeout(ea, 75)) : ea();
            },
            [ea, K]
        ),
        eu = o.useCallback(() => {
            ed();
        }, [ed]),
        ep = o.useCallback(() => {
            window.clearTimeout(H.current), V.canCollapseOnBlur && !F && (z.current || eo(!1));
        }, [F, V, eo]),
        em = o.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: s.id,
                event: y.rMx.QUEST_HOVER,
                properties: {
                    ...(0, m.mH)(h.jn.QUEST_BAR),
                    impression_id: null === (e = P.current) || void 0 === e ? void 0 : e.getId()
                }
            }),
                (z.current = !0),
                ed({ withDelay: !0 });
        }, [ed, s]),
        ex = o.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: s.id,
                event: y.rMx.QUEST_HOVER_OFF,
                properties: {
                    ...(0, m.mH)(h.jn.QUEST_BAR),
                    impression_id: null === (e = P.current) || void 0 === e ? void 0 : e.getId()
                }
            }),
                (z.current = !1),
                ep();
        }, [ep, s]);
    o.useLayoutEffect(() => {
        W && V.shouldExpandOnQuestComplete && ea();
    }, [ea, W, V.shouldExpandOnQuestComplete]),
        o.useLayoutEffect(() => {
            M && !O && z.current && ea();
        }, [ea, M, O]),
        o.useLayoutEffect(() => {
            W || !M || O || z.current || eo(!1);
        }, [M, W, O, eo]),
        o.useLayoutEffect(() => {
            Z !== U.current && ee(!1), (U.current = Z);
        }, [Z]);
    let eh = M ? S.XZ : S.R4,
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
    o.useEffect(() => {
        ef({
            expansionSpring: K ? 1 : 0,
            immediate: q
        });
    }, [K, ef, q]);
    let { visibilitySpring: e_ } = (0, c.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: Z ? 1 : 0 },
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
    return (o.useEffect(() => {
        I && (0, b.loadVideoQuestModal)();
    }, [I]),
    o.useLayoutEffect(() => {
        W && !L && V.canCollapseOnBlur && es();
    }, [W, ea, V.canCollapseOnBlur, es, L]),
    o.useEffect(() => {
        var e, t;
        D &&
            (0, m.dA)({
                questId: s.id,
                event: y.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    ...(0, m.mH)(h.jn.QUEST_BAR),
                    reason: 'asset_loading_error',
                    impression_id: null === (e = P.current) || void 0 === e ? void 0 : e.getId()
                }
            }),
            R ||
                (0, m.dA)({
                    questId: s.id,
                    event: y.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        ...(0, m.mH)(h.jn.QUEST_BAR),
                        reason: 'not_eligible_for_quest',
                        impression_id: null === (t = P.current) || void 0 === t ? void 0 : t.getId()
                    }
                });
    }, [D, R, s.id]),
    R && (Z || !$ || Q) && !D)
        ? (0, r.jsx)(C.A, {
              questOrQuests: s,
              questContent: V.trackingCtx.content,
              overrideVisibility: !k && Z,
              children: (e, t) => {
                  let n = V.component;
                  return (
                      (P.current = t.current),
                      (0, r.jsxs)('div', {
                          className: A.mask,
                          children: [
                              Z &&
                                  (0, r.jsx)(B, {
                                      questId: s.id,
                                      isExpanded: K
                                  }),
                              (0, r.jsx)(i.animated.div, {
                                  'aria-hidden': !Z,
                                  onMouseLeave: ex,
                                  onMouseEnter: em,
                                  onFocus: eu,
                                  onBlur: ep,
                                  className: a()(A.wrapper, {
                                      [A.wrapperInvisible]: !Z,
                                      [A.wrapperVisible]: Z && $
                                  }),
                                  style: {
                                      color: s.config.colors.secondary,
                                      height: e_.to({
                                          range: [0, 1],
                                          output: [0, !V.canCollapseOnBlur && K ? et : 70]
                                      })
                                  },
                                  children: (0, r.jsx)(i.animated.div, {
                                      className: a()(A.contentWrapper, {
                                          [A.contentWrapperExpanded]: K,
                                          [A.contentWrapperAccepted]: M
                                      }),
                                      style: {
                                          backgroundColor: V.preEnrollmentBackgroundColor,
                                          backgroundImage: M ? V.postEnrollmentBackgroundImage : void 0
                                      },
                                      children: (0, r.jsx)(T.t, {
                                          springConfig: eh,
                                          isExpanded: K,
                                          children: (0, r.jsx)(n, {
                                              expandedContentRef: er,
                                              expansionSpring: eg,
                                              isExpanded: K,
                                              isExpansionAnimationComplete: X,
                                              onCtxMenuClosed: el,
                                              onCtxMenuOpened: ei,
                                              onCtxMenuSelection: ec,
                                              quest: s,
                                              useReducedMotion: q,
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
        : (D ? x.log('Not rendered due to asset error') : R || x.log('Not rendered due to ineligibility'), null);
}
let w =
    12633 == n.j
        ? function () {
              let e = (0, j.DH)();
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
