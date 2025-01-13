n.d(t, {
    P: function () {
        return y;
    }
}),
    n(47120);
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(208404),
    l = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(607070),
    p = n(819640),
    m = n(617136),
    x = n(113434),
    f = n(497505),
    g = n(977156),
    h = n(5881),
    C = n(602667),
    v = n(78826),
    j = n(667105),
    _ = n(693900),
    b = n(617889),
    E = n(130653),
    N = n(46140),
    B = n(981631),
    T = n(157410);
function S(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.qI)({
            mode: t ? N.NH.EXPANDED : N.NH.COLLAPSED,
            questContent: f.jn.QUEST_BAR_V2,
            questId: n
        }),
        null
    );
}
function y(e) {
    var t, n;
    let { quest: s } = e,
        x = (0, h.T)({
            quest: s,
            location: N.dr.QUESTS_BAR
        }),
        y = (0, g.Zy)({ location: N.dr.QUESTS_BAR }),
        A = (0, j.qN)({
            quest: s,
            location: N.dr.QUESTS_BAR
        }),
        R = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        w = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        I = r.useRef(null),
        k = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        q = (0, d.Z)(k),
        P = (null === (n = s.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        M = (0, d.Z)(P),
        { hasError: O, isLoading: W } = (0, v.d7)(),
        L = r.useContext(E.T) || (y && A && !W),
        Z = r.useRef(L),
        Q = (0, b.B)(s, L && !O),
        D = r.useRef(-1),
        H = r.useRef(!1),
        [U, V] = r.useState(!1),
        [z, F] = r.useState(!1),
        [G, K] = r.useState(!0),
        [Y, X] = r.useState(!0),
        [J, $] = r.useState(Q.preEnrollmentExpandedHeight),
        ee = r.useRef(null),
        et = r.useCallback((e) => {
            K(!1), F(e);
        }, []),
        en = r.useCallback(() => {
            var e, t;
            $((null !== (t = null === (e = ee.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * Q.paddingVertical);
        }, [Q.paddingVertical]),
        eo = r.useCallback(() => {
            en(), et(!0);
        }, [en, et]),
        er = r.useCallback(() => {
            V(!0);
        }, []),
        es = r.useCallback(() => {
            V(!1), !H.current && !P && et(!1);
        }, [P, et]),
        ea = r.useCallback(() => {
            V(!1), !P && et(!1), (H.current = !1);
        }, [P, et]),
        ei = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (z) return;
                let { withDelay: t = !1 } = e;
                t ? (D.current = window.setTimeout(eo, 75)) : eo();
            },
            [eo, z]
        ),
        el = r.useCallback(() => {
            ei();
        }, [ei]),
        ec = r.useCallback(() => {
            if ((window.clearTimeout(D.current), !!Q.canCollapseOnBlur && !U)) !H.current && et(!1);
        }, [U, Q, et]),
        ed = r.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: s.id,
                event: B.rMx.QUEST_HOVER,
                properties: {
                    ...(0, m.mH)(f.jn.QUEST_BAR),
                    impression_id: null === (e = I.current) || void 0 === e ? void 0 : e.getId()
                }
            }),
                (H.current = !0),
                ei({ withDelay: !0 });
        }, [ei, s]),
        eu = r.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: s.id,
                event: B.rMx.QUEST_HOVER_OFF,
                properties: {
                    ...(0, m.mH)(f.jn.QUEST_BAR),
                    impression_id: null === (e = I.current) || void 0 === e ? void 0 : e.getId()
                }
            }),
                (H.current = !1),
                ec();
        }, [ec, s]);
    r.useLayoutEffect(() => {
        P && Q.shouldExpandOnQuestComplete && eo();
    }, [eo, P, Q.shouldExpandOnQuestComplete]),
        r.useLayoutEffect(() => {
            k && !q && H.current && eo();
        }, [eo, k, q]),
        r.useLayoutEffect(() => {
            !P && k && !q && !H.current && et(!1);
        }, [k, P, q, et]),
        r.useLayoutEffect(() => {
            L !== Z.current && X(!1), (Z.current = L);
        }, [L]);
    let ep = k ? N.XZ : N.R4,
        [{ expansionSpring: em }, ex] = (0, c.useSpring)(() => ({
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
            immediate: R
        });
    }, [z, ex, R]);
    let { visibilitySpring: ef } = (0, c.useSpring)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: L ? 1 : 0 },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0
        },
        onRest: () => {
            X(!0);
        },
        onStart: () => {
            X(!1);
        }
    });
    return (r.useLayoutEffect(() => {
        P && !M && Q.canCollapseOnBlur && en();
    }, [P, eo, Q.canCollapseOnBlur, en, M]),
    r.useEffect(() => {
        var e, t;
        O &&
            (0, m.dA)({
                questId: s.id,
                event: B.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    ...(0, m.mH)(f.jn.QUEST_BAR),
                    reason: 'asset_loading_error',
                    impression_id: null === (e = I.current) || void 0 === e ? void 0 : e.getId()
                }
            }),
            !y &&
                (0, m.dA)({
                    questId: s.id,
                    event: B.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        ...(0, m.mH)(f.jn.QUEST_BAR),
                        reason: 'not_eligible_for_quest',
                        impression_id: null === (t = I.current) || void 0 === t ? void 0 : t.getId()
                    }
                });
    }, [O, y, s.id]),
    y && (L || !Y || W) && !O)
        ? (0, o.jsx)(C.A, {
              questOrQuests: s,
              questContent: Q.trackingCtx.content,
              overrideVisibility: !w && L,
              children: (e, t) => {
                  let n = Q.component;
                  return (
                      (I.current = t.current),
                      (0, o.jsxs)('div', {
                          className: T.mask,
                          children: [
                              L &&
                                  (0, o.jsx)(S, {
                                      questId: s.id,
                                      isExpanded: z
                                  }),
                              (0, o.jsx)(i.animated.div, {
                                  'aria-hidden': !L,
                                  onMouseLeave: eu,
                                  onMouseEnter: ed,
                                  onFocus: el,
                                  onBlur: ec,
                                  className: a()(T.wrapper, {
                                      [T.wrapperInvisible]: !L,
                                      [T.wrapperVisible]: L && Y
                                  }),
                                  style: {
                                      color: s.config.colors.secondary,
                                      height: ef.to({
                                          range: [0, 1],
                                          output: [0, !Q.canCollapseOnBlur && z ? J : 70]
                                      })
                                  },
                                  children: (0, o.jsx)(i.animated.div, {
                                      className: a()(T.contentWrapper, {
                                          [T.contentWrapperExpanded]: z,
                                          [T.contentWrapperAccepted]: k
                                      }),
                                      style: {
                                          backgroundColor: Q.preEnrollmentBackgroundColor,
                                          backgroundImage: k ? Q.postEnrollmentBackgroundImage : void 0
                                      },
                                      children: (0, o.jsx)(_.t, {
                                          springConfig: ep,
                                          isExpanded: z,
                                          children: (0, o.jsx)(n, {
                                              expandedContentRef: ee,
                                              expansionSpring: em,
                                              isExpanded: z,
                                              isExpansionAnimationComplete: G,
                                              onCtxMenuClosed: es,
                                              onCtxMenuOpened: er,
                                              onCtxMenuSelection: ea,
                                              quest: s,
                                              useReducedMotion: R,
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
        : (O ? x.log('Not rendered due to asset error') : !y && x.log('Not rendered due to ineligibility'), null);
}
t.Z =
    12633 == n.j
        ? function () {
              let e = (0, j.DH)();
              return null == e
                  ? null
                  : (0, o.jsx)(
                        v.p,
                        {
                            source: N.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, o.jsx)(y, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
