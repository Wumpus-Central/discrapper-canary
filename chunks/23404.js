(n.d(t, { Z: () => w }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(210887),
    d = n(617136),
    p = n(272008),
    h = n(113434),
    f = n(569984),
    g = n(497505),
    m = n(918701),
    b = n(373370),
    _ = n(475595),
    O = n(566078),
    E = n(602667),
    y = n(611855),
    v = n(670638),
    I = n(667105),
    C = n(860151),
    S = n(341907),
    N = n(46140),
    T = n(981631),
    P = n(388032),
    j = n(396896);
function x(e) {
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
function A(e) {
    var t;
    let { quest: n } = e,
        i = (0, h.B6)(n.config.expiresAt),
        l = (0, h.B6)(O.r.build(n.config).rewardsExpireAt),
        a = (0, o.e7)([u.Z], () => u.Z.getState().theme),
        s = (0, c.wjy)(a) ? T.BRd.DARK : T.BRd.LIGHT,
        d = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null;
    return (0, r.jsxs)('div', {
        className: j.heading,
        children: [
            (0, r.jsx)('img', {
                className: j.headingGameTile,
                alt: '',
                src: (0, _.fh)(n, _.eC.GAME_TILE, s).url
            }),
            (0, r.jsxs)('div', {
                className: j.headingCopy,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        children: d ? P.intl.string(P.t.XBboAA) : P.intl.formatToPlainString(P.t.EQa7oq, { questName: n.config.messages.questName })
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        children: d ? P.intl.formatToPlainString(P.t.APddvL, { expirationDate: l }) : P.intl.formatToPlainString(P.t['pX+fmp'], { expirationDate: i })
                    })
                ]
            })
        ]
    });
}
function Z(e) {
    var t, n, l, u;
    let { nodeRef: _, quest: O } = e,
        E = (0, d.O5)(),
        T = (0, o.e7)([f.Z], () => f.Z.isEnrolling(O.id), [O]),
        Z = (0, o.e7)([f.Z], () => null != f.Z.questEnrollmentBlockedUntil, []),
        [w, L] = i.useState(!1),
        R = i.useCallback(() => L(!0), []),
        D = i.useCallback(() => L(!1), []),
        k = i.useCallback((e) => {
            e.stopPropagation();
        }, []),
        M = i.useCallback(() => {
            (0, p.AH)(O.id, {
                questContent: g.jn.ACTIVITY_PANEL,
                questContentCTA: d.jZ.ACCEPT_QUEST,
                sourceQuestContent: g.jn.ACTIVITY_PANEL
            });
        }, [O]),
        U = i.useCallback(() => {
            null != O &&
                (E({
                    questId: O.id,
                    questContent: g.jn.ACTIVITY_PANEL,
                    questContentCTA: d.jZ.TRACK_PROGRESS,
                    sourceQuestContent: g.jn.ACTIVITY_PANEL
                }),
                (0, S.navigateToQuestHome)({
                    fromContent: g.jn.ACTIVITY_PANEL,
                    questId: O.id
                }));
        }, [O, E]),
        G = i.useCallback(() => {
            (E({
                questId: O.id,
                questContent: g.jn.ACTIVITY_PANEL,
                questContentCTA: d.jZ.LEARN_MORE,
                sourceQuestContent: g.jn.ACTIVITY_PANEL
            }),
                (0, S.navigateToQuestHome)({
                    fromContent: g.jn.ACTIVITY_PANEL,
                    questId: O.id
                }));
        }, [O.id, E]),
        B = (0, I.hf)({
            quest: O,
            questContent: g.jn.ACTIVITY_PANEL,
            sourceQuestContent: g.jn.ACTIVITY_PANEL
        }),
        V = (0, h.tP)(O),
        H = (null == (t = O.userStatus) ? void 0 : t.enrolledAt) != null,
        F = (null == (n = O.userStatus) ? void 0 : n.completedAt) != null,
        z = (null == (l = O.userStatus) ? void 0 : l.claimedAt) != null,
        W = (null == O ? void 0 : O.userStatus) != null && (0, m.zE)(O.userStatus, g.jn.ACTIVITY_PANEL),
        Y = (0, h.Rf)(O),
        K = (0, b.DD)({
            quest: O,
            taskDetails: Y,
            location: N.dr.ACTIVITY_PANEL,
            questContent: g.jn.ACTIVITY_PANEL,
            sourceQuestContent: g.jn.ACTIVITY_PANEL
        });
    return W || V || z || Z
        ? null
        : (0, r.jsxs)('div', {
              ref: (e) => {
                  _.current = e;
              },
              className: a()(j.wrapper, { [j.wrapperQuestAccepted]: H }),
              onClick: k,
              onKeyPress: k,
              onFocus: R,
              onMouseEnter: R,
              onBlur: D,
              onMouseLeave: D,
              children: [
                  (0, r.jsxs)('div', {
                      className: j.utils,
                      children: [
                          H ? (0, r.jsx)(A, { quest: O }) : (0, r.jsx)(y.Z, {}),
                          (0, r.jsx)(v.r, {
                              quest: O,
                              questContent: g.jn.ACTIVITY_PANEL,
                              shouldShowDisclosure: (null == (u = O.userStatus) ? void 0 : u.enrolledAt) == null,
                              showShareLink: !0,
                              sourceQuestContent: g.jn.ACTIVITY_PANEL,
                              children: (e) => {
                                  var t, n;
                                  return (0, r.jsx)(
                                      c.P3F,
                                      ((t = x({}, e)),
                                      (n = n =
                                          {
                                              'aria-label': P.intl.string(P.t.DEoVWV),
                                              children: (0, r.jsx)(c.xhG, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: j.submenuIcon
                                              })
                                          }),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                          : (function (e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var r = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, r);
                                                }
                                                return n;
                                            })(Object(n)).forEach(function (e) {
                                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                            }),
                                      t)
                                  );
                              }
                          })
                      ]
                  }),
                  !H &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(A, { quest: O }),
                              (0, r.jsx)('div', {
                                  className: j.instructions,
                                  children: (0, r.jsx)(c.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-default',
                                      children: K
                                  })
                              })
                          ]
                      }),
                  H &&
                      !F &&
                      (0, r.jsx)(C.Z, {
                          autoplay: w,
                          className: j.rewardTileWithInstructions,
                          quest: O,
                          questContent: g.jn.ACTIVITY_PANEL,
                          location: N.dr.ACTIVITY_PANEL,
                          taskDetails: Y,
                          sourceQuestContent: g.jn.ACTIVITY_PANEL
                      }),
                  (0, r.jsxs)('div', {
                      className: j.ctas,
                      children: [
                          !H &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(s.zx, {
                                          className: j.cta,
                                          color: s.zx.Colors.PRIMARY,
                                          fullWidth: !0,
                                          size: s.zx.Sizes.SMALL,
                                          onClick: G,
                                          children: P.intl.string(P.t.LLLLPD)
                                      }),
                                      (0, r.jsx)(s.zx, {
                                          className: j.cta,
                                          color: s.zx.Colors.BRAND,
                                          fullWidth: !0,
                                          onClick: M,
                                          size: s.zx.Sizes.SMALL,
                                          submitting: T,
                                          children: P.intl.string(P.t.l7E81t)
                                      })
                                  ]
                              }),
                          H &&
                              !F &&
                              (0, r.jsx)(s.zx, {
                                  className: j.cta,
                                  color: s.zx.Colors.BRAND,
                                  fullWidth: !0,
                                  onClick: U,
                                  size: s.zx.Sizes.SMALL,
                                  children: P.intl.string(P.t.VN1Ajo)
                              }),
                          F &&
                              (0, r.jsx)(s.zx, {
                                  className: j.cta,
                                  color: s.zx.Colors.BRAND,
                                  fullWidth: !0,
                                  onClick: B,
                                  size: s.zx.Sizes.SMALL,
                                  children: P.intl.string(P.t.cfY4PD)
                              })
                      ]
                  })
              ]
          });
}
let w = function (e) {
    return (0, r.jsx)(E.A, {
        questOrQuests: e.quest,
        questContent: g.jn.ACTIVITY_PANEL,
        sourceQuestContent: g.jn.ACTIVITY_PANEL,
        children: (t) => (0, r.jsx)(Z, x({ nodeRef: t }, e))
    });
};
