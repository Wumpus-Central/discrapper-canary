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
    i = n(642128),
    l = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(607070),
    p = n(819640),
    m = n(617136),
    x = n(113434),
    g = n(497505),
    h = n(977156),
    f = n(5881),
    v = n(602667),
    C = n(78826),
    j = n(667105),
    _ = n(693900),
    T = n(617889),
    E = n(130653),
    S = n(46140),
    b = n(981631),
    N = n(157410);
function B(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.qI)({
            mode: t ? S.NH.EXPANDED : S.NH.COLLAPSED,
            questContent: g.jn.QUEST_BAR_V2,
            questId: n
        }),
        null
    );
}
function y(e) {
    var t, n;
    let { quest: s } = e,
        x = (0, f.T)({
            quest: s,
            location: S.dr.QUESTS_BAR
        }),
        y = (0, h.Zy)({ location: S.dr.QUESTS_BAR }),
        A = (0, j.qN)({
            quest: s,
            location: S.dr.QUESTS_BAR
        }),
        w = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        R = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        I = r.useRef(null),
        P = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        k = (0, d.Z)(P),
        O = (null === (n = s.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        q = (0, d.Z)(O),
        { hasError: M, isLoading: L } = (0, C.d7)(),
        D = r.useContext(E.T) || (y && A && !L),
        Z = r.useRef(D),
        V = (0, T.B)(s, D && !M),
        W = r.useRef(-1),
        H = r.useRef(!1),
        [Q, U] = r.useState(!1),
        [F, K] = r.useState(!1),
        [z, Y] = r.useState(!0),
        [G, X] = r.useState(!0),
        [J, $] = r.useState(V.preEnrollmentExpandedHeight),
        ee = r.useRef(null),
        et = r.useCallback((e) => {
            Y(!1), K(e);
        }, []),
        en = r.useCallback(() => {
            var e, t;
            $((null !== (t = null === (e = ee.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * V.paddingVertical);
        }, [V.paddingVertical]),
        eo = r.useCallback(() => {
            en(), et(!0);
        }, [en, et]),
        er = r.useCallback(() => {
            U(!0);
        }, []),
        es = r.useCallback(() => {
            U(!1), !H.current && !O && et(!1);
        }, [O, et]),
        ea = r.useCallback(() => {
            U(!1), !O && et(!1), (H.current = !1);
        }, [O, et]),
        ei = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (F) return;
                let { withDelay: t = !1 } = e;
                t ? (W.current = window.setTimeout(eo, 75)) : eo();
            },
            [eo, F]
        ),
        el = r.useCallback(() => {
            ei();
        }, [ei]),
        ec = r.useCallback(() => {
            if ((window.clearTimeout(W.current), !!V.canCollapseOnBlur && !Q)) !H.current && et(!1);
        }, [Q, V, et]),
        ed = r.useCallback(() => {
            var e;
            (0, m.dA)({
                questId: s.id,
                event: b.rMx.QUEST_HOVER,
                properties: {
                    ...(0, m.mH)(g.jn.QUEST_BAR),
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
                event: b.rMx.QUEST_HOVER_OFF,
                properties: {
                    ...(0, m.mH)(g.jn.QUEST_BAR),
                    impression_id: null === (e = I.current) || void 0 === e ? void 0 : e.getId()
                }
            }),
                (H.current = !1),
                ec();
        }, [ec, s]);
    r.useLayoutEffect(() => {
        O && V.shouldExpandOnQuestComplete && eo();
    }, [eo, O, V.shouldExpandOnQuestComplete]),
        r.useLayoutEffect(() => {
            P && !k && H.current && eo();
        }, [eo, P, k]),
        r.useLayoutEffect(() => {
            !O && P && !k && !H.current && et(!1);
        }, [P, O, k, et]),
        r.useLayoutEffect(() => {
            D !== Z.current && X(!1), (Z.current = D);
        }, [D]);
    let ep = P ? S.XZ : S.R4,
        [{ expansionSpring: em }, ex] = (0, c.useSpring)(() => ({
            from: { expansionSpring: 0 },
            config: ep,
            onRest: () => {
                Y(!0);
            },
            onStart: () => {
                Y(!1);
            }
        }));
    r.useEffect(() => {
        ex({
            expansionSpring: F ? 1 : 0,
            immediate: w
        });
    }, [F, ex, w]);
    let { visibilitySpring: eg } = (0, c.useSpring)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: D ? 1 : 0 },
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
        O && !q && V.canCollapseOnBlur && en();
    }, [O, eo, V.canCollapseOnBlur, en, q]),
    r.useEffect(() => {
        var e, t;
        M &&
            (0, m.dA)({
                questId: s.id,
                event: b.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    ...(0, m.mH)(g.jn.QUEST_BAR),
                    reason: 'asset_loading_error',
                    impression_id: null === (e = I.current) || void 0 === e ? void 0 : e.getId()
                }
            }),
            !y &&
                (0, m.dA)({
                    questId: s.id,
                    event: b.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        ...(0, m.mH)(g.jn.QUEST_BAR),
                        reason: 'not_eligible_for_quest',
                        impression_id: null === (t = I.current) || void 0 === t ? void 0 : t.getId()
                    }
                });
    }, [M, y, s.id]),
    y && (D || !G || L) && !M)
        ? (0, o.jsx)(v.A, {
              questOrQuests: s,
              questContent: V.trackingCtx.content,
              overrideVisibility: !R && D,
              children: (e, t) => {
                  let n = V.component;
                  return (
                      (I.current = t.current),
                      (0, o.jsxs)('div', {
                          className: N.mask,
                          children: [
                              D &&
                                  (0, o.jsx)(B, {
                                      questId: s.id,
                                      isExpanded: F
                                  }),
                              (0, o.jsx)(i.animated.div, {
                                  'aria-hidden': !D,
                                  onMouseLeave: eu,
                                  onMouseEnter: ed,
                                  onFocus: el,
                                  onBlur: ec,
                                  className: a()(N.wrapper, {
                                      [N.wrapperInvisible]: !D,
                                      [N.wrapperVisible]: D && G
                                  }),
                                  style: {
                                      color: s.config.colors.secondary,
                                      height: eg.to({
                                          range: [0, 1],
                                          output: [0, !V.canCollapseOnBlur && F ? J : 70]
                                      })
                                  },
                                  children: (0, o.jsx)(i.animated.div, {
                                      className: a()(N.contentWrapper, {
                                          [N.contentWrapperExpanded]: F,
                                          [N.contentWrapperAccepted]: P
                                      }),
                                      style: {
                                          backgroundColor: V.preEnrollmentBackgroundColor,
                                          backgroundImage: P ? V.postEnrollmentBackgroundImage : void 0
                                      },
                                      children: (0, o.jsx)(_.t, {
                                          springConfig: ep,
                                          isExpanded: F,
                                          children: (0, o.jsx)(n, {
                                              expandedContentRef: ee,
                                              expansionSpring: em,
                                              isExpanded: F,
                                              isExpansionAnimationComplete: z,
                                              onCtxMenuClosed: es,
                                              onCtxMenuOpened: er,
                                              onCtxMenuSelection: ea,
                                              quest: s,
                                              useReducedMotion: w,
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
        : (M ? x.log('Not rendered due to asset error') : !y && x.log('Not rendered due to ineligibility'), null);
}
t.Z =
    12633 == n.j
        ? function () {
              let e = (0, j.DH)();
              return null == e
                  ? null
                  : (0, o.jsx)(
                        C.p,
                        {
                            source: S.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, o.jsx)(y, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
