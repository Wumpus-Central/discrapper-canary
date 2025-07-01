(n.d(t, { Z: () => x }), n(388685));
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
    m = n(373370),
    b = n(475595),
    _ = n(566078),
    O = n(602667),
    E = n(611855),
    y = n(670638),
    I = n(667105),
    v = n(860151),
    C = n(341907),
    S = n(46140),
    N = n(981631),
    T = n(388032),
    P = n(396896);
function j(e) {
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
        i = (0, p.B6)(n.config.expiresAt),
        l = (0, p.B6)(_.r.build(n.config).rewardsExpireAt),
        a = (0, o.e7)([c.Z], () => c.Z.getState().theme),
        u = (0, s.wjy)(a) ? N.BRd.DARK : N.BRd.LIGHT,
        d = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null;
    return (0, r.jsxs)('div', {
        className: P.heading,
        children: [
            (0, r.jsx)('img', {
                className: P.headingGameTile,
                alt: '',
                src: (0, b.fh)(n, b.eC.GAME_TILE, u).url
            }),
            (0, r.jsxs)('div', {
                className: P.headingCopy,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        children: d ? T.intl.string(T.t.XBboAA) : T.intl.formatToPlainString(T.t.EQa7oq, { questName: n.config.messages.questName })
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        children: d ? T.intl.formatToPlainString(T.t.APddvL, { expirationDate: l }) : T.intl.formatToPlainString(T.t['pX+fmp'], { expirationDate: i })
                    })
                ]
            })
        ]
    });
}
function Z(e) {
    var t, n, l, c;
    let { nodeRef: b, quest: _ } = e,
        O = (0, u.O5)(),
        N = (0, o.e7)([h.Z], () => h.Z.isEnrolling(_.id), [_]),
        Z = (0, o.e7)([h.Z], () => null != h.Z.questEnrollmentBlockedUntil, []),
        [x, L] = i.useState(!1),
        w = i.useCallback(() => L(!0), []),
        R = i.useCallback(() => L(!1), []),
        D = (0, m.up)(S.dr.ACTIVITY_PANEL),
        k = i.useCallback((e) => {
            e.stopPropagation();
        }, []),
        M = i.useCallback(() => {
            (0, d.AH)(_.id, {
                questContent: f.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.ACCEPT_QUEST,
                sourceQuestContent: f.jn.ACTIVITY_PANEL
            });
        }, [_]),
        U = i.useCallback(() => {
            null != _ &&
                (O({
                    questId: _.id,
                    questContent: f.jn.ACTIVITY_PANEL,
                    questContentCTA: u.jZ.TRACK_PROGRESS,
                    sourceQuestContent: f.jn.ACTIVITY_PANEL
                }),
                (0, C.navigateToQuestHome)({
                    fromContent: f.jn.ACTIVITY_PANEL,
                    questId: _.id
                }));
        }, [_, O]),
        G = i.useCallback(() => {
            (O({
                questId: _.id,
                questContent: f.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.LEARN_MORE,
                sourceQuestContent: f.jn.ACTIVITY_PANEL
            }),
                (0, C.navigateToQuestHome)({
                    fromContent: f.jn.ACTIVITY_PANEL,
                    questId: _.id
                }));
        }, [_.id, O]),
        B = (0, I.hf)({
            quest: _,
            questContent: f.jn.ACTIVITY_PANEL,
            sourceQuestContent: f.jn.ACTIVITY_PANEL
        }),
        V = (0, p.tP)(_),
        H = (null == (t = _.userStatus) ? void 0 : t.enrolledAt) != null,
        F = (null == (n = _.userStatus) ? void 0 : n.completedAt) != null,
        z = (null == (l = _.userStatus) ? void 0 : l.claimedAt) != null,
        W = (null == _ ? void 0 : _.userStatus) != null && (0, g.zE)(_.userStatus, f.jn.ACTIVITY_PANEL),
        Y = (0, p.Rf)(_),
        K = (0, m.DD)({
            quest: _,
            taskDetails: Y,
            location: S.dr.ACTIVITY_PANEL,
            questContent: f.jn.ACTIVITY_PANEL,
            sourceQuestContent: f.jn.ACTIVITY_PANEL
        });
    return W || V || z || Z
        ? null
        : (0, r.jsxs)('div', {
              ref: (e) => {
                  b.current = e;
              },
              className: a()(P.wrapper, { [P.wrapperQuestAccepted]: H }),
              onClick: k,
              onKeyPress: k,
              onFocus: w,
              onMouseEnter: w,
              onBlur: R,
              onMouseLeave: R,
              children: [
                  (0, r.jsxs)('div', {
                      className: P.utils,
                      children: [
                          H ? (0, r.jsx)(A, { quest: _ }) : (0, r.jsx)(E.Z, {}),
                          (0, r.jsx)(y.r, {
                              quest: _,
                              questContent: f.jn.ACTIVITY_PANEL,
                              shouldShowDisclosure: (null == (c = _.userStatus) ? void 0 : c.enrolledAt) == null,
                              showShareLink: !0,
                              sourceQuestContent: f.jn.ACTIVITY_PANEL,
                              children: (e) => {
                                  var t, n;
                                  return (0, r.jsx)(
                                      s.P3F,
                                      ((t = j({}, e)),
                                      (n = n =
                                          {
                                              'aria-label': T.intl.string(T.t.DEoVWV),
                                              children: (0, r.jsx)(s.xhG, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: P.submenuIcon
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
                              (0, r.jsx)(A, { quest: _ }),
                              (0, r.jsx)('div', {
                                  className: P.instructions,
                                  children: (0, r.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-default',
                                      children: K
                                  })
                              })
                          ]
                      }),
                  H &&
                      !F &&
                      (0, r.jsx)(v.Z, {
                          autoplay: x,
                          className: P.rewardTileWithInstructions,
                          quest: _,
                          questContent: f.jn.ACTIVITY_PANEL,
                          location: S.dr.ACTIVITY_PANEL,
                          taskDetails: Y,
                          sourceQuestContent: f.jn.ACTIVITY_PANEL
                      }),
                  (0, r.jsxs)('div', {
                      className: P.ctas,
                      children: [
                          !H &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(s.zxk, {
                                          className: P.cta,
                                          color: s.zxk.Colors.PRIMARY,
                                          fullWidth: !0,
                                          size: s.zxk.Sizes.SMALL,
                                          onClick: G,
                                          children: T.intl.string(T.t.LLLLPD)
                                      }),
                                      (0, r.jsx)(s.zxk, {
                                          className: P.cta,
                                          color: s.zxk.Colors.BRAND,
                                          fullWidth: !0,
                                          onClick: M,
                                          size: s.zxk.Sizes.SMALL,
                                          submitting: N,
                                          children: T.intl.string(T.t.l7E81t)
                                      })
                                  ]
                              }),
                          H &&
                              !F &&
                              (0, r.jsx)(s.zxk, {
                                  className: P.cta,
                                  color: s.zxk.Colors.BRAND,
                                  fullWidth: !0,
                                  onClick: U,
                                  size: s.zxk.Sizes.SMALL,
                                  children: T.intl.string(T.t.VN1Ajo)
                              }),
                          F &&
                              (0, r.jsx)(s.zxk, {
                                  className: P.cta,
                                  color: s.zxk.Colors.BRAND,
                                  fullWidth: !0,
                                  onClick: B,
                                  size: s.zxk.Sizes.SMALL,
                                  children: D
                              })
                      ]
                  })
              ]
          });
}
let x = function (e) {
    return (0, r.jsx)(O.A, {
        questOrQuests: e.quest,
        questContent: f.jn.ACTIVITY_PANEL,
        sourceQuestContent: f.jn.ACTIVITY_PANEL,
        children: (t) => (0, r.jsx)(Z, j({ nodeRef: t }, e))
    });
};
