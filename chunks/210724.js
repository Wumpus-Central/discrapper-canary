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
    i = n(666912),
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
    N = n(130653),
    E = n(46140),
    B = n(981631),
    T = n(157410);
function S(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.qI)({
            mode: t ? E.NH.EXPANDED : E.NH.COLLAPSED,
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
            location: E.dr.QUESTS_BAR
        }),
        y = (0, g.Zy)({ location: E.dr.QUESTS_BAR }),
        A = (0, j.qN)({
            quest: s,
            location: E.dr.QUESTS_BAR
        }),
        R = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        w = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        I = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        k = (0, d.Z)(I),
        q = (null === (n = s.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        P = (0, d.Z)(q),
        { hasError: M, isLoading: O } = (0, v.d7)(),
        L = r.useContext(N.T) || (y && A && !O),
        W = r.useRef(L),
        Z = (0, b.B)(s, L && !M),
        Q = r.useRef(-1),
        D = r.useRef(!1),
        [H, V] = r.useState(!1),
        [U, z] = r.useState(!1),
        [F, G] = r.useState(!0),
        [K, Y] = r.useState(!0),
        [X, J] = r.useState(Z.preEnrollmentExpandedHeight),
        $ = r.useRef(null),
        ee = r.useCallback((e) => {
            G(!1), z(e);
        }, []),
        et = r.useCallback(() => {
            var e, t;
            J((null !== (t = null === (e = $.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * Z.paddingVertical);
        }, [Z.paddingVertical]),
        en = r.useCallback(() => {
            et(), ee(!0);
        }, [et, ee]),
        eo = r.useCallback(() => {
            V(!0);
        }, []),
        er = r.useCallback(() => {
            V(!1), !D.current && !q && ee(!1);
        }, [q, ee]),
        es = r.useCallback(() => {
            V(!1), !q && ee(!1), (D.current = !1);
        }, [q, ee]),
        ea = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (U) return;
                let { withDelay: t = !1 } = e;
                t ? (Q.current = window.setTimeout(en, 75)) : en();
            },
            [en, U]
        ),
        ei = r.useCallback(() => {
            ea();
        }, [ea]),
        el = r.useCallback(() => {
            if ((window.clearTimeout(Q.current), !!Z.canCollapseOnBlur && !H)) !D.current && ee(!1);
        }, [H, Z, ee]),
        ec = r.useCallback(() => {
            (0, m.dA)({
                questId: s.id,
                event: B.rMx.QUEST_HOVER,
                properties: (0, m.mH)(f.jn.QUEST_BAR)
            }),
                (D.current = !0),
                ea({ withDelay: !0 });
        }, [ea, s]),
        ed = r.useCallback(() => {
            (0, m.dA)({
                questId: s.id,
                event: B.rMx.QUEST_HOVER_OFF,
                properties: (0, m.mH)(f.jn.QUEST_BAR)
            }),
                (D.current = !1),
                el();
        }, [el, s]);
    r.useLayoutEffect(() => {
        q && Z.shouldExpandOnQuestComplete && en();
    }, [en, q, Z.shouldExpandOnQuestComplete]),
        r.useLayoutEffect(() => {
            I && !k && D.current && en();
        }, [en, I, k]),
        r.useLayoutEffect(() => {
            !q && I && !k && !D.current && ee(!1);
        }, [I, q, k, ee]),
        r.useLayoutEffect(() => {
            L !== W.current && Y(!1), (W.current = L);
        }, [L]);
    let eu = I ? E.XZ : E.R4,
        [{ expansionSpring: ep }, em] = (0, c.useSpring)(() => ({
            from: { expansionSpring: 0 },
            config: eu,
            onRest: () => {
                G(!0);
            },
            onStart: () => {
                G(!1);
            }
        }));
    r.useEffect(() => {
        em({
            expansionSpring: U ? 1 : 0,
            immediate: R
        });
    }, [U, em, R]);
    let { visibilitySpring: ex } = (0, c.useSpring)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: L ? 1 : 0 },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0
        },
        onRest: () => {
            Y(!0);
        },
        onStart: () => {
            Y(!1);
        }
    });
    return (r.useLayoutEffect(() => {
        q && !P && Z.canCollapseOnBlur && et();
    }, [q, en, Z.canCollapseOnBlur, et, P]),
    r.useEffect(() => {
        M &&
            (0, m.dA)({
                questId: s.id,
                event: B.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    ...(0, m.mH)(f.jn.QUEST_BAR),
                    reason: 'asset_loading_error'
                }
            }),
            !y &&
                (0, m.dA)({
                    questId: s.id,
                    event: B.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        ...(0, m.mH)(f.jn.QUEST_BAR),
                        reason: 'not_eligible_for_quest'
                    }
                });
    }, [M, y, s.id]),
    y && (L || !K || O) && !M)
        ? (0, o.jsx)(C.A, {
              questOrQuests: s,
              questContent: Z.trackingCtx.content,
              overrideVisibility: !w && L,
              children: () => {
                  let e = Z.component;
                  return (0, o.jsxs)('div', {
                      className: T.mask,
                      children: [
                          L &&
                              (0, o.jsx)(S, {
                                  questId: s.id,
                                  isExpanded: U
                              }),
                          (0, o.jsx)(i.animated.div, {
                              'aria-hidden': !L,
                              onMouseLeave: ed,
                              onMouseEnter: ec,
                              onFocus: ei,
                              onBlur: el,
                              className: a()(T.wrapper, {
                                  [T.wrapperInvisible]: !L,
                                  [T.wrapperVisible]: L && K
                              }),
                              style: {
                                  color: s.config.colors.secondary,
                                  height: ex.to({
                                      range: [0, 1],
                                      output: [0, !Z.canCollapseOnBlur && U ? X : 70]
                                  })
                              },
                              children: (0, o.jsx)(i.animated.div, {
                                  className: a()(T.contentWrapper, {
                                      [T.contentWrapperExpanded]: U,
                                      [T.contentWrapperAccepted]: I
                                  }),
                                  style: {
                                      backgroundColor: Z.preEnrollmentBackgroundColor,
                                      backgroundImage: I ? Z.postEnrollmentBackgroundImage : void 0
                                  },
                                  children: (0, o.jsx)(_.t, {
                                      springConfig: eu,
                                      isExpanded: U,
                                      children: (0, o.jsx)(e, {
                                          expandedContentRef: $,
                                          expansionSpring: ep,
                                          isExpanded: U,
                                          isExpansionAnimationComplete: F,
                                          onCtxMenuClosed: er,
                                          onCtxMenuOpened: eo,
                                          onCtxMenuSelection: es,
                                          quest: s,
                                          useReducedMotion: R,
                                          collapsedHeight: 70
                                      })
                                  })
                              })
                          })
                      ]
                  });
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
                        v.p,
                        {
                            source: E.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, o.jsx)(y, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
