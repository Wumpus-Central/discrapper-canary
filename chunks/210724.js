n.d(t, {
    P: () => w,
    Z: () => A
}),
    n(47120);
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(642128),
    l = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(607070),
    p = n(819640),
    m = n(617136),
    x = n(113434),
    h = n(497505),
    g = n(977156),
    f = n(5881),
    v = n(602667),
    _ = n(78826),
    C = n(667105),
    j = n(693900),
    b = n(617889),
    T = n(130653),
    E = n(46140),
    S = n(981631),
    N = n(157410);
function y(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.qI)({
            mode: t ? E.NH.EXPANDED : E.NH.COLLAPSED,
            questContent: h.jn.QUEST_BAR_V2,
            questId: n
        }),
        null
    );
}
function w(e) {
    var t, n;
    let { quest: a } = e,
        x = (0, f.T)({
            quest: a,
            location: E.dr.QUESTS_BAR
        }),
        w = (0, g.Zy)({ location: E.dr.QUESTS_BAR }),
        A = (0, C.qN)({
            quest: a,
            location: E.dr.QUESTS_BAR
        }),
        B = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        R = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        P = r.useRef(null),
        k = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        q = (0, d.Z)(k),
        I = (null === (n = a.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        O = (0, d.Z)(I),
        { hasError: M, isLoading: D } = (0, _.d7)(),
        L = r.useContext(T.T) || (w && A && !D),
        Z = r.useRef(L),
        W = (0, b.B)(a, L && !M),
        V = r.useRef(-1),
        Q = r.useRef(!1),
        [U, H] = r.useState(!1),
        [z, F] = r.useState(!1),
        [X, K] = r.useState(!0),
        [Y, G] = r.useState(!0),
        [J, $] = r.useState(W.preEnrollmentExpandedHeight),
        ee = r.useRef(null),
        et = r.useCallback((e) => {
            K(!1), F(e);
        }, []),
        en = r.useCallback(() => {
            var e, t;
            $((null !== (t = null === (e = ee.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * W.paddingVertical);
        }, [W.paddingVertical]),
        es = r.useCallback(() => {
            en(), et(!0);
        }, [en, et]),
        er = r.useCallback(() => {
            H(!0);
        }, []),
        ea = r.useCallback(() => {
            H(!1), Q.current || I || et(!1);
        }, [I, et]),
        eo = r.useCallback(() => {
            H(!1), I || et(!1), (Q.current = !1);
        }, [I, et]),
        ei = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (z) return;
                let { withDelay: t = !1 } = e;
                t ? (V.current = window.setTimeout(es, 75)) : es();
            },
            [es, z]
        ),
        el = r.useCallback(() => {
            ei();
        }, [ei]),
        ec = r.useCallback(() => {
            window.clearTimeout(V.current), W.canCollapseOnBlur && !U && (Q.current || et(!1));
        }, [U, W, et]),
        ed = r.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: a.id,
                event: S.rMx.QUEST_HOVER,
                properties: {
                    ...(0, m.mH)(h.jn.QUEST_BAR),
                    impression_id: null === (e = P.current) || void 0 === e ? void 0 : e.getId()
                }
            }),
                (Q.current = !0),
                ei({ withDelay: !0 });
        }, [ei, a]),
        eu = r.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: a.id,
                event: S.rMx.QUEST_HOVER_OFF,
                properties: {
                    ...(0, m.mH)(h.jn.QUEST_BAR),
                    impression_id: null === (e = P.current) || void 0 === e ? void 0 : e.getId()
                }
            }),
                (Q.current = !1),
                ec();
        }, [ec, a]);
    r.useLayoutEffect(() => {
        I && W.shouldExpandOnQuestComplete && es();
    }, [es, I, W.shouldExpandOnQuestComplete]),
        r.useLayoutEffect(() => {
            k && !q && Q.current && es();
        }, [es, k, q]),
        r.useLayoutEffect(() => {
            I || !k || q || Q.current || et(!1);
        }, [k, I, q, et]),
        r.useLayoutEffect(() => {
            L !== Z.current && G(!1), (Z.current = L);
        }, [L]);
    let ep = k ? E.XZ : E.R4,
        [{ expansionSpring: em }, ex] = (0, c.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: ep,
            onRest: () => {
                K(!0);
            },
            onStart: () => {
                K(!1);
            }
        }));
    r.useEffect(() => {
        ex({
            expansionSpring: z ? 1 : 0,
            immediate: B
        });
    }, [z, ex, B]);
    let { visibilitySpring: eh } = (0, c.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: L ? 1 : 0 },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0
        },
        onRest: () => {
            G(!0);
        },
        onStart: () => {
            G(!1);
        }
    });
    return (r.useLayoutEffect(() => {
        I && !O && W.canCollapseOnBlur && en();
    }, [I, es, W.canCollapseOnBlur, en, O]),
    r.useEffect(() => {
        var e, t;
        M &&
            (0, m.dA)({
                questId: a.id,
                event: S.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    ...(0, m.mH)(h.jn.QUEST_BAR),
                    reason: 'asset_loading_error',
                    impression_id: null === (e = P.current) || void 0 === e ? void 0 : e.getId()
                }
            }),
            w ||
                (0, m.dA)({
                    questId: a.id,
                    event: S.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        ...(0, m.mH)(h.jn.QUEST_BAR),
                        reason: 'not_eligible_for_quest',
                        impression_id: null === (t = P.current) || void 0 === t ? void 0 : t.getId()
                    }
                });
    }, [M, w, a.id]),
    w && (L || !Y || D) && !M)
        ? (0, s.jsx)(v.A, {
              questOrQuests: a,
              questContent: W.trackingCtx.content,
              overrideVisibility: !R && L,
              children: (e, t) => {
                  let n = W.component;
                  return (
                      (P.current = t.current),
                      (0, s.jsxs)('div', {
                          className: N.mask,
                          children: [
                              L &&
                                  (0, s.jsx)(y, {
                                      questId: a.id,
                                      isExpanded: z
                                  }),
                              (0, s.jsx)(i.animated.div, {
                                  'aria-hidden': !L,
                                  onMouseLeave: eu,
                                  onMouseEnter: ed,
                                  onFocus: el,
                                  onBlur: ec,
                                  className: o()(N.wrapper, {
                                      [N.wrapperInvisible]: !L,
                                      [N.wrapperVisible]: L && Y
                                  }),
                                  style: {
                                      color: a.config.colors.secondary,
                                      height: eh.to({
                                          range: [0, 1],
                                          output: [0, !W.canCollapseOnBlur && z ? J : 70]
                                      })
                                  },
                                  children: (0, s.jsx)(i.animated.div, {
                                      className: o()(N.contentWrapper, {
                                          [N.contentWrapperExpanded]: z,
                                          [N.contentWrapperAccepted]: k
                                      }),
                                      style: {
                                          backgroundColor: W.preEnrollmentBackgroundColor,
                                          backgroundImage: k ? W.postEnrollmentBackgroundImage : void 0
                                      },
                                      children: (0, s.jsx)(j.t, {
                                          springConfig: ep,
                                          isExpanded: z,
                                          children: (0, s.jsx)(n, {
                                              expandedContentRef: ee,
                                              expansionSpring: em,
                                              isExpanded: z,
                                              isExpansionAnimationComplete: X,
                                              onCtxMenuClosed: ea,
                                              onCtxMenuOpened: er,
                                              onCtxMenuSelection: eo,
                                              quest: a,
                                              useReducedMotion: B,
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
        : (M ? x.log('Not rendered due to asset error') : w || x.log('Not rendered due to ineligibility'), null);
}
let A =
    12633 == n.j
        ? function () {
              let e = (0, C.DH)();
              return null == e
                  ? null
                  : (0, s.jsx)(
                        _.p,
                        {
                            source: E.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, s.jsx)(w, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
