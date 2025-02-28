n.d(t, { Z: () => R }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(210887),
    u = n(617136),
    d = n(272008),
    p = n(113434),
    h = n(569984),
    f = n(497505),
    g = n(918701),
    m = n(467628),
    b = n(373370),
    _ = n(475595),
    E = n(566078),
    O = n(602667),
    N = n(65443),
    v = n(611855),
    y = n(880199),
    I = n(670638),
    C = n(667105),
    S = n(860151),
    T = n(341907),
    P = n(46140),
    j = n(981631),
    A = n(388032),
    Z = n(646805);
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
        i = (0, p.B6)(n.config.expiresAt),
        l = (0, p.B6)(E.r.build(n.config).rewardsExpireAt),
        o = (0, a.e7)([c.Z], () => c.Z.getState().theme),
        u = (0, s.wjy)(o) ? j.BRd.DARK : j.BRd.LIGHT,
        d = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
    return (0, r.jsxs)('div', {
        className: Z.heading,
        children: [
            (0, r.jsx)('img', {
                className: Z.headingGameTile,
                alt: '',
                src: (0, _.fh)(n, _.eC.GAME_TILE, u).url
            }),
            (0, r.jsxs)('div', {
                className: Z.headingCopy,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        children: d ? A.NW.string(A.t.XBboAA) : A.NW.formatToPlainString(A.t.EQa7oq, { questName: n.config.messages.questName })
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        children: d ? A.NW.formatToPlainString(A.t.APddvL, { expirationDate: l }) : A.NW.formatToPlainString(A.t['pX+fmp'], { expirationDate: i })
                    })
                ]
            })
        ]
    });
}
function w(e) {
    var t, n, l, c;
    let { nodeRef: _, quest: E } = e,
        O = (0, u.O5)(),
        j = (0, a.e7)([h.Z], () => h.Z.isEnrolling(E.id), [E]),
        [w, R] = i.useState(!1),
        D = i.useCallback(() => R(!0), []),
        k = i.useCallback(() => R(!1), []),
        M = i.useCallback((e) => {
            e.stopPropagation();
        }, []),
        U = i.useCallback(() => {
            (0, d.AH)(E.id, {
                questContent: f.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.ACCEPT_QUEST
            });
        }, [E]),
        G = i.useCallback(() => {
            null != E &&
                (O({
                    questId: E.id,
                    questContent: f.jn.ACTIVITY_PANEL,
                    questContentCTA: u.jZ.TRACK_PROGRESS
                }),
                (0, T.navigateToQuestHome)({
                    fromContent: f.jn.ACTIVITY_PANEL,
                    questId: E.id
                }));
        }, [E, O]),
        W = i.useCallback(() => {
            O({
                questId: E.id,
                questContent: f.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.LEARN_MORE
            }),
                (0, T.navigateToQuestHome)({
                    fromContent: f.jn.ACTIVITY_PANEL,
                    questId: E.id
                });
        }, [E.id, O]),
        V = (0, C.hf)({
            quest: E,
            location: f.jn.ACTIVITY_PANEL
        }),
        B = (0, p.tP)(E),
        H = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        F = (null === (n = E.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        z = (null === (l = E.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null,
        Y = (null == E ? void 0 : E.userStatus) != null && (0, g.zE)(E.userStatus, f.jn.ACTIVITY_PANEL),
        K = (0, p.Rf)(E),
        q = (0, b.DD)({
            quest: E,
            taskDetails: K,
            location: P.dr.ACTIVITY_PANEL,
            questContent: f.jn.ACTIVITY_PANEL
        }),
        Q = (0, m.j)({ location: P.dr.QUESTS_BAR_MOBILE });
    return Y || B || z
        ? null
        : (0, r.jsxs)('div', {
              ref: (e) => {
                  _.current = e;
              },
              className: o()(Z.wrapper, { [Z.wrapperQuestAccepted]: H }),
              onClick: M,
              onKeyPress: M,
              onFocus: D,
              onMouseEnter: D,
              onBlur: k,
              onMouseLeave: k,
              children: [
                  (0, r.jsxs)('div', {
                      className: Z.utils,
                      children: [
                          H ? (0, r.jsx)(L, { quest: E }) : (0, r.jsx)(v.Z, {}),
                          (0, r.jsx)(I.r, {
                              quest: E,
                              questContent: f.jn.ACTIVITY_PANEL,
                              shouldShowDisclosure: (null === (c = E.userStatus) || void 0 === c ? void 0 : c.enrolledAt) == null,
                              showShareLink: !0,
                              children: (e) => {
                                  var t, n;
                                  return (0, r.jsx)(
                                      s.P3F,
                                      ((t = x({}, e)),
                                      (n = n =
                                          {
                                              'aria-label': A.NW.string(A.t.DEoVWV),
                                              children: (0, r.jsx)(s.xhG, {
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
                  !H &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(L, { quest: E }),
                              (0, r.jsxs)('div', {
                                  className: Z.instructions,
                                  children: [
                                      (0, r.jsx)(s.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-normal',
                                          children: q
                                      }),
                                      Q &&
                                          (0, r.jsx)(N.Z, {
                                              quest: E,
                                              textColor: 'text-muted',
                                              withRewardName: !0
                                          })
                                  ]
                              })
                          ]
                      }),
                  H &&
                      !F &&
                      (0, r.jsx)(S.Z, {
                          autoplay: w,
                          className: Z.rewardTileWithInstructions,
                          quest: E,
                          questContent: f.jn.ACTIVITY_PANEL,
                          location: P.dr.ACTIVITY_PANEL,
                          taskDetails: K
                      }),
                  (0, r.jsxs)('div', {
                      className: Z.ctas,
                      children: [
                          !H &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(s.zxk, {
                                          className: Z.cta,
                                          color: s.zxk.Colors.PRIMARY,
                                          fullWidth: !0,
                                          size: s.zxk.Sizes.SMALL,
                                          onClick: W,
                                          children: A.NW.string(A.t.LLLLPD)
                                      }),
                                      (0, r.jsx)(s.zxk, {
                                          className: Z.cta,
                                          color: s.zxk.Colors.BRAND,
                                          fullWidth: !0,
                                          onClick: U,
                                          size: s.zxk.Sizes.SMALL,
                                          submitting: j,
                                          children: A.NW.string(A.t.l7E81t)
                                      })
                                  ]
                              }),
                          H &&
                              !F &&
                              (0, r.jsx)(s.zxk, {
                                  className: Z.cta,
                                  color: s.zxk.Colors.BRAND,
                                  fullWidth: !0,
                                  onClick: G,
                                  size: s.zxk.Sizes.SMALL,
                                  children: A.NW.string(A.t.VN1Ajo)
                              }),
                          F &&
                              (0, r.jsx)(s.zxk, {
                                  className: Z.cta,
                                  color: s.zxk.Colors.BRAND,
                                  fullWidth: !0,
                                  onClick: V,
                                  size: s.zxk.Sizes.SMALL,
                                  children: (0, g.xN)(E.config) ? (0, r.jsx)(y.Z, { orbQuantity: (0, g.LM)(E.config) }) : A.NW.string(A.t.cfY4PD)
                              })
                      ]
                  })
              ]
          });
}
let R = function (e) {
    return (0, r.jsx)(O.A, {
        questOrQuests: e.quest,
        questContent: f.jn.ACTIVITY_PANEL,
        children: (t) => (0, r.jsx)(w, x({ nodeRef: t }, e))
    });
};
