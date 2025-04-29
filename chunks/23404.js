n.d(t, { Z: () => L }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
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
    y = n(65443),
    I = n(611855),
    v = n(670638),
    C = n(667105),
    S = n(860151),
    N = n(341907),
    T = n(46140),
    P = n(981631),
    j = n(388032),
    A = n(396896);
function Z(e) {
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
function x(e) {
    var t;
    let { quest: n } = e,
        i = (0, p.B6)(n.config.expiresAt),
        l = (0, p.B6)(E.r.build(n.config).rewardsExpireAt),
        a = (0, o.e7)([c.Z], () => c.Z.getState().theme),
        u = (0, s.wjy)(a) ? P.BRd.DARK : P.BRd.LIGHT,
        d = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null;
    return (0, r.jsxs)('div', {
        className: A.heading,
        children: [
            (0, r.jsx)('img', {
                className: A.headingGameTile,
                alt: '',
                src: (0, _.fh)(n, _.eC.GAME_TILE, u).url
            }),
            (0, r.jsxs)('div', {
                className: A.headingCopy,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        children: d ? j.intl.string(j.t.XBboAA) : j.intl.formatToPlainString(j.t.EQa7oq, { questName: n.config.messages.questName })
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        children: d ? j.intl.formatToPlainString(j.t.APddvL, { expirationDate: l }) : j.intl.formatToPlainString(j.t['pX+fmp'], { expirationDate: i })
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
        P = (0, o.e7)([h.Z], () => h.Z.isEnrolling(E.id), [E]),
        w = (0, o.e7)([h.Z], () => null != h.Z.questEnrollmentBlockedUntil, []),
        [L, R] = i.useState(!1),
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
                (0, N.navigateToQuestHome)({
                    fromContent: f.jn.ACTIVITY_PANEL,
                    questId: E.id
                }));
        }, [E, O]),
        V = i.useCallback(() => {
            O({
                questId: E.id,
                questContent: f.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.LEARN_MORE
            }),
                (0, N.navigateToQuestHome)({
                    fromContent: f.jn.ACTIVITY_PANEL,
                    questId: E.id
                });
        }, [E.id, O]),
        B = (0, C.hf)({
            quest: E,
            location: f.jn.ACTIVITY_PANEL
        }),
        H = (0, p.tP)(E),
        F = (null == (t = E.userStatus) ? void 0 : t.enrolledAt) != null,
        z = (null == (n = E.userStatus) ? void 0 : n.completedAt) != null,
        W = (null == (l = E.userStatus) ? void 0 : l.claimedAt) != null,
        Y = (null == E ? void 0 : E.userStatus) != null && (0, g.zE)(E.userStatus, f.jn.ACTIVITY_PANEL),
        K = (0, p.Rf)(E),
        q = (0, b.DD)({
            quest: E,
            taskDetails: K,
            location: T.dr.ACTIVITY_PANEL,
            questContent: f.jn.ACTIVITY_PANEL
        }),
        Q = (0, m.j)({ location: T.dr.QUESTS_BAR_MOBILE });
    return Y || H || W || w
        ? null
        : (0, r.jsxs)('div', {
              ref: (e) => {
                  _.current = e;
              },
              className: a()(A.wrapper, { [A.wrapperQuestAccepted]: F }),
              onClick: M,
              onKeyPress: M,
              onFocus: D,
              onMouseEnter: D,
              onBlur: k,
              onMouseLeave: k,
              children: [
                  (0, r.jsxs)('div', {
                      className: A.utils,
                      children: [
                          F ? (0, r.jsx)(x, { quest: E }) : (0, r.jsx)(I.Z, {}),
                          (0, r.jsx)(v.r, {
                              quest: E,
                              questContent: f.jn.ACTIVITY_PANEL,
                              shouldShowDisclosure: (null == (c = E.userStatus) ? void 0 : c.enrolledAt) == null,
                              showShareLink: !0,
                              children: (e) => {
                                  var t, n;
                                  return (0, r.jsx)(
                                      s.P3F,
                                      ((t = Z({}, e)),
                                      (n = n =
                                          {
                                              'aria-label': j.intl.string(j.t.DEoVWV),
                                              children: (0, r.jsx)(s.xhG, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: A.submenuIcon
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
                  !F &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(x, { quest: E }),
                              (0, r.jsxs)('div', {
                                  className: A.instructions,
                                  children: [
                                      (0, r.jsx)(s.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-normal',
                                          children: q
                                      }),
                                      Q &&
                                          (0, r.jsx)(y.Z, {
                                              quest: E,
                                              textColor: 'text-muted',
                                              withRewardName: !0
                                          })
                                  ]
                              })
                          ]
                      }),
                  F &&
                      !z &&
                      (0, r.jsx)(S.Z, {
                          autoplay: L,
                          className: A.rewardTileWithInstructions,
                          quest: E,
                          questContent: f.jn.ACTIVITY_PANEL,
                          location: T.dr.ACTIVITY_PANEL,
                          taskDetails: K
                      }),
                  (0, r.jsxs)('div', {
                      className: A.ctas,
                      children: [
                          !F &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(s.zxk, {
                                          className: A.cta,
                                          color: s.zxk.Colors.PRIMARY,
                                          fullWidth: !0,
                                          size: s.zxk.Sizes.SMALL,
                                          onClick: V,
                                          children: j.intl.string(j.t.LLLLPD)
                                      }),
                                      (0, r.jsx)(s.zxk, {
                                          className: A.cta,
                                          color: s.zxk.Colors.BRAND,
                                          fullWidth: !0,
                                          onClick: U,
                                          size: s.zxk.Sizes.SMALL,
                                          submitting: P,
                                          children: j.intl.string(j.t.l7E81t)
                                      })
                                  ]
                              }),
                          F &&
                              !z &&
                              (0, r.jsx)(s.zxk, {
                                  className: A.cta,
                                  color: s.zxk.Colors.BRAND,
                                  fullWidth: !0,
                                  onClick: G,
                                  size: s.zxk.Sizes.SMALL,
                                  children: j.intl.string(j.t.VN1Ajo)
                              }),
                          z &&
                              (0, r.jsx)(s.zxk, {
                                  className: A.cta,
                                  color: s.zxk.Colors.BRAND,
                                  fullWidth: !0,
                                  onClick: B,
                                  size: s.zxk.Sizes.SMALL,
                                  children: j.intl.string(j.t.cfY4PD)
                              })
                      ]
                  })
              ]
          });
}
let L = function (e) {
    return (0, r.jsx)(O.A, {
        questOrQuests: e.quest,
        questContent: f.jn.ACTIVITY_PANEL,
        children: (t) => (0, r.jsx)(w, Z({ nodeRef: t }, e))
    });
};
