n.d(t, { Z: () => R }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(663002),
    c = n(481060),
    u = n(210887),
    d = n(617136),
    p = n(272008),
    h = n(113434),
    f = n(569984),
    g = n(497505),
    m = n(918701),
    b = n(467628),
    _ = n(373370),
    E = n(475595),
    O = n(566078),
    N = n(602667),
    v = n(65443),
    y = n(611855),
    I = n(670638),
    C = n(667105),
    S = n(860151),
    T = n(341907),
    P = n(46140),
    j = n(981631),
    A = n(388032),
    Z = n(930787);
function x(e) {
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
function L(e) {
    var t;
    let { quest: n } = e,
        i = (0, h.B6)(n.config.expiresAt),
        l = (0, h.B6)(O.r.build(n.config).rewardsExpireAt),
        o = (0, a.e7)([u.Z], () => u.Z.getState().theme),
        d = (0, s.wj)(o) ? j.BRd.DARK : j.BRd.LIGHT,
        p = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
    return (0, r.jsxs)('div', {
        className: Z.heading,
        children: [
            (0, r.jsx)('img', {
                className: Z.headingGameTile,
                alt: '',
                src: (0, E.fh)(n, E.eC.GAME_TILE, d).url
            }),
            (0, r.jsxs)('div', {
                className: Z.headingCopy,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        children: p ? A.NW.string(A.t.XBboAA) : A.NW.formatToPlainString(A.t.EQa7oq, { questName: n.config.messages.questName })
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        children: p ? A.NW.formatToPlainString(A.t.APddvL, { expirationDate: l }) : A.NW.formatToPlainString(A.t['pX+fmp'], { expirationDate: i })
                    })
                ]
            })
        ]
    });
}
function w(e) {
    var t, n, l, s;
    let { nodeRef: u, quest: E } = e,
        O = (0, d.O5)(),
        N = (0, a.e7)([f.Z], () => f.Z.isEnrolling(E.id), [E]),
        [j, w] = i.useState(!1),
        R = i.useCallback(() => w(!0), []),
        D = i.useCallback(() => w(!1), []),
        k = i.useCallback((e) => {
            e.stopPropagation();
        }, []),
        M = i.useCallback(() => {
            (0, p.AH)(E.id, {
                questContent: g.jn.ACTIVITY_PANEL,
                questContentCTA: d.jZ.ACCEPT_QUEST
            });
        }, [E]),
        U = i.useCallback(() => {
            null != E &&
                (O({
                    questId: E.id,
                    questContent: g.jn.ACTIVITY_PANEL,
                    questContentCTA: d.jZ.TRACK_PROGRESS
                }),
                (0, T.navigateToQuestHome)({
                    fromContent: g.jn.ACTIVITY_PANEL,
                    questId: E.id
                }));
        }, [E, O]),
        G = i.useCallback(() => {
            O({
                questId: E.id,
                questContent: g.jn.ACTIVITY_PANEL,
                questContentCTA: d.jZ.LEARN_MORE
            }),
                (0, T.navigateToQuestHome)({
                    fromContent: g.jn.ACTIVITY_PANEL,
                    questId: E.id
                });
        }, [E.id, O]),
        W = (0, C.hf)({
            quest: E,
            location: g.jn.ACTIVITY_PANEL
        }),
        V = (0, h.tP)(E),
        B = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        H = (null === (n = E.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        F = (null === (l = E.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null,
        z = (null == E ? void 0 : E.userStatus) != null && (0, m.zE)(E.userStatus, g.jn.ACTIVITY_PANEL),
        Y = (0, h.Rf)(E),
        K = (0, _.DD)({
            quest: E,
            taskDetails: Y,
            location: P.dr.ACTIVITY_PANEL,
            questContent: g.jn.ACTIVITY_PANEL
        }),
        q = (0, b.j)({ location: P.dr.QUESTS_BAR_MOBILE });
    return z || V || F
        ? null
        : (0, r.jsxs)('div', {
              ref: (e) => {
                  u.current = e;
              },
              className: o()(Z.wrapper, { [Z.wrapperQuestAccepted]: B }),
              onClick: k,
              onKeyPress: k,
              onFocus: R,
              onMouseEnter: R,
              onBlur: D,
              onMouseLeave: D,
              children: [
                  (0, r.jsxs)('div', {
                      className: Z.utils,
                      children: [
                          B ? (0, r.jsx)(L, { quest: E }) : (0, r.jsx)(y.Z, {}),
                          (0, r.jsx)(I.r, {
                              quest: E,
                              questContent: g.jn.ACTIVITY_PANEL,
                              shouldShowDisclosure: (null === (s = E.userStatus) || void 0 === s ? void 0 : s.enrolledAt) == null,
                              showShareLink: !0,
                              children: (e) => {
                                  var t, n;
                                  return (0, r.jsx)(
                                      c.P3F,
                                      ((t = x({}, e)),
                                      (n = n =
                                          {
                                              'aria-label': A.NW.string(A.t.DEoVWV),
                                              children: (0, r.jsx)(c.xhG, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: Z.submenuIcon
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
                  !B &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(L, { quest: E }),
                              (0, r.jsxs)('div', {
                                  className: Z.instructions,
                                  children: [
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-normal',
                                          children: K
                                      }),
                                      q &&
                                          (0, r.jsx)(v.Z, {
                                              quest: E,
                                              textColor: 'text-muted',
                                              withRewardName: !0
                                          })
                                  ]
                              })
                          ]
                      }),
                  B &&
                      !H &&
                      (0, r.jsx)(S.Z, {
                          autoplay: j,
                          className: Z.rewardTileWithInstructions,
                          quest: E,
                          questContent: g.jn.ACTIVITY_PANEL,
                          location: P.dr.ACTIVITY_PANEL,
                          taskDetails: Y
                      }),
                  (0, r.jsxs)('div', {
                      className: Z.ctas,
                      children: [
                          !B &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(c.zxk, {
                                          className: Z.cta,
                                          color: c.zxk.Colors.PRIMARY,
                                          fullWidth: !0,
                                          size: c.zxk.Sizes.SMALL,
                                          onClick: G,
                                          children: A.NW.string(A.t.LLLLPD)
                                      }),
                                      (0, r.jsx)(c.zxk, {
                                          className: Z.cta,
                                          color: c.zxk.Colors.BRAND,
                                          fullWidth: !0,
                                          onClick: M,
                                          size: c.zxk.Sizes.SMALL,
                                          submitting: N,
                                          children: A.NW.string(A.t.l7E81t)
                                      })
                                  ]
                              }),
                          B &&
                              !H &&
                              (0, r.jsx)(c.zxk, {
                                  className: Z.cta,
                                  color: c.zxk.Colors.BRAND,
                                  fullWidth: !0,
                                  onClick: U,
                                  size: c.zxk.Sizes.SMALL,
                                  children: A.NW.string(A.t.VN1Ajo)
                              }),
                          H &&
                              (0, r.jsx)(c.zxk, {
                                  className: Z.cta,
                                  color: c.zxk.Colors.BRAND,
                                  fullWidth: !0,
                                  onClick: W,
                                  size: c.zxk.Sizes.SMALL,
                                  children: A.NW.string(A.t.cfY4PD)
                              })
                      ]
                  })
              ]
          });
}
let R = function (e) {
    return (0, r.jsx)(N.A, {
        questOrQuests: e.quest,
        questContent: g.jn.ACTIVITY_PANEL,
        children: (t) => (0, r.jsx)(w, x({ nodeRef: t }, e))
    });
};
