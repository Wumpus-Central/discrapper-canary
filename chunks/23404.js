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
    O = n(566078),
    E = n(602667),
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
        l = (0, p.B6)(O.r.build(n.config).rewardsExpireAt),
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
    let { nodeRef: _, quest: O } = e,
        E = (0, u.O5)(),
        P = (0, o.e7)([h.Z], () => h.Z.isEnrolling(O.id), [O]),
        w = (0, o.e7)([h.Z], () => null != h.Z.questEnrollmentBlockedUntil, []),
        [L, R] = i.useState(!1),
        D = i.useCallback(() => R(!0), []),
        k = i.useCallback(() => R(!1), []),
        M = (0, b.up)(T.dr.ACTIVITY_PANEL),
        U = i.useCallback((e) => {
            e.stopPropagation();
        }, []),
        G = i.useCallback(() => {
            (0, d.AH)(O.id, {
                questContent: f.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.ACCEPT_QUEST
            });
        }, [O]),
        B = i.useCallback(() => {
            null != O &&
                (E({
                    questId: O.id,
                    questContent: f.jn.ACTIVITY_PANEL,
                    questContentCTA: u.jZ.TRACK_PROGRESS
                }),
                (0, N.navigateToQuestHome)({
                    fromContent: f.jn.ACTIVITY_PANEL,
                    questId: O.id
                }));
        }, [O, E]),
        V = i.useCallback(() => {
            E({
                questId: O.id,
                questContent: f.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.LEARN_MORE
            }),
                (0, N.navigateToQuestHome)({
                    fromContent: f.jn.ACTIVITY_PANEL,
                    questId: O.id
                });
        }, [O.id, E]),
        H = (0, C.hf)({
            quest: O,
            location: f.jn.ACTIVITY_PANEL
        }),
        F = (0, p.tP)(O),
        z = (null == (t = O.userStatus) ? void 0 : t.enrolledAt) != null,
        W = (null == (n = O.userStatus) ? void 0 : n.completedAt) != null,
        Y = (null == (l = O.userStatus) ? void 0 : l.claimedAt) != null,
        K = (null == O ? void 0 : O.userStatus) != null && (0, g.zE)(O.userStatus, f.jn.ACTIVITY_PANEL),
        q = (0, p.Rf)(O),
        X = (0, b.DD)({
            quest: O,
            taskDetails: q,
            location: T.dr.ACTIVITY_PANEL,
            questContent: f.jn.ACTIVITY_PANEL
        }),
        Q = (0, m.j)({ location: T.dr.QUESTS_BAR_MOBILE });
    return K || F || Y || w
        ? null
        : (0, r.jsxs)('div', {
              ref: (e) => {
                  _.current = e;
              },
              className: a()(A.wrapper, { [A.wrapperQuestAccepted]: z }),
              onClick: U,
              onKeyPress: U,
              onFocus: D,
              onMouseEnter: D,
              onBlur: k,
              onMouseLeave: k,
              children: [
                  (0, r.jsxs)('div', {
                      className: A.utils,
                      children: [
                          z ? (0, r.jsx)(x, { quest: O }) : (0, r.jsx)(I.Z, {}),
                          (0, r.jsx)(v.r, {
                              quest: O,
                              questContent: f.jn.ACTIVITY_PANEL,
                              shouldShowDisclosure: (null == (c = O.userStatus) ? void 0 : c.enrolledAt) == null,
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
                  !z &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(x, { quest: O }),
                              (0, r.jsxs)('div', {
                                  className: A.instructions,
                                  children: [
                                      (0, r.jsx)(s.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-normal',
                                          children: X
                                      }),
                                      Q &&
                                          (0, r.jsx)(y.Z, {
                                              quest: O,
                                              textColor: 'text-muted',
                                              withRewardName: !0
                                          })
                                  ]
                              })
                          ]
                      }),
                  z &&
                      !W &&
                      (0, r.jsx)(S.Z, {
                          autoplay: L,
                          className: A.rewardTileWithInstructions,
                          quest: O,
                          questContent: f.jn.ACTIVITY_PANEL,
                          location: T.dr.ACTIVITY_PANEL,
                          taskDetails: q
                      }),
                  (0, r.jsxs)('div', {
                      className: A.ctas,
                      children: [
                          !z &&
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
                                          onClick: G,
                                          size: s.zxk.Sizes.SMALL,
                                          submitting: P,
                                          children: j.intl.string(j.t.l7E81t)
                                      })
                                  ]
                              }),
                          z &&
                              !W &&
                              (0, r.jsx)(s.zxk, {
                                  className: A.cta,
                                  color: s.zxk.Colors.BRAND,
                                  fullWidth: !0,
                                  onClick: B,
                                  size: s.zxk.Sizes.SMALL,
                                  children: j.intl.string(j.t.VN1Ajo)
                              }),
                          W &&
                              (0, r.jsx)(s.zxk, {
                                  className: A.cta,
                                  color: s.zxk.Colors.BRAND,
                                  fullWidth: !0,
                                  onClick: H,
                                  size: s.zxk.Sizes.SMALL,
                                  children: M
                              })
                      ]
                  })
              ]
          });
}
let L = function (e) {
    return (0, r.jsx)(E.A, {
        questOrQuests: e.quest,
        questContent: f.jn.ACTIVITY_PANEL,
        children: (t) => (0, r.jsx)(w, Z({ nodeRef: t }, e))
    });
};
