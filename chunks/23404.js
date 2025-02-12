n.d(t, { Z: () => j }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(663002),
    c = n(481060),
    d = n(210887),
    u = n(617136),
    h = n(272008),
    m = n(113434),
    p = n(569984),
    g = n(497505),
    _ = n(918701),
    f = n(467628),
    E = n(373370),
    I = n(475595),
    C = n(566078),
    N = n(602667),
    v = n(65443),
    T = n(611855),
    S = n(670638),
    A = n(667105),
    b = n(860151),
    Z = n(341907),
    x = n(46140),
    L = n(981631),
    y = n(388032),
    P = n(773190);
function O(e) {
    var t;
    let { quest: n } = e,
        l = (0, m.B6)(n.config.expiresAt),
        r = (0, m.B6)(C.r.build(n.config).rewardsExpireAt),
        a = (0, s.e7)([d.Z], () => d.Z.getState().theme),
        u = (0, o.wj)(a) ? L.BRd.DARK : L.BRd.LIGHT,
        h = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
    return (0, i.jsxs)('div', {
        className: P.heading,
        children: [
            (0, i.jsx)('img', {
                className: P.headingGameTile,
                alt: '',
                src: (0, I.fh)(n, I.eC.GAME_TILE, u).url
            }),
            (0, i.jsxs)('div', {
                className: P.headingCopy,
                children: [
                    (0, i.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        children: h ? y.intl.string(y.t.XBboAA) : y.intl.formatToPlainString(y.t.EQa7oq, { questName: n.config.messages.questName })
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        children: h ? y.intl.formatToPlainString(y.t.APddvL, { expirationDate: r }) : y.intl.formatToPlainString(y.t['pX+fmp'], { expirationDate: l })
                    })
                ]
            })
        ]
    });
}
function R(e) {
    var t, n, r, o;
    let { nodeRef: d, quest: I } = e,
        C = (0, u.O5)(),
        N = (0, s.e7)([p.Z], () => p.Z.isEnrolling(I.id), [I]),
        [L, R] = l.useState(!1),
        j = l.useCallback(() => R(!0), []),
        D = l.useCallback(() => R(!1), []),
        w = l.useCallback((e) => {
            e.stopPropagation();
        }, []),
        k = l.useCallback(() => {
            (0, h.AH)(I.id, {
                questContent: g.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.ACCEPT_QUEST
            });
        }, [I]),
        M = l.useCallback(() => {
            null != I &&
                (C({
                    questId: I.id,
                    questContent: g.jn.ACTIVITY_PANEL,
                    questContentCTA: u.jZ.TRACK_PROGRESS
                }),
                (0, Z.navigateToQuestHome)({
                    fromContent: g.jn.ACTIVITY_PANEL,
                    questId: I.id
                }));
        }, [I, C]),
        U = l.useCallback(() => {
            C({
                questId: I.id,
                questContent: g.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.LEARN_MORE
            }),
                (0, Z.navigateToQuestHome)({
                    fromContent: g.jn.ACTIVITY_PANEL,
                    questId: I.id
                });
        }, [I.id, C]),
        G = (0, A.hf)({
            quest: I,
            location: g.jn.ACTIVITY_PANEL
        }),
        B = (0, m.tP)(I),
        V = (null === (t = I.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        H = (null === (n = I.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        F = (null === (r = I.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
        z = (null == I ? void 0 : I.userStatus) != null && (0, _.zE)(I.userStatus, g.jn.ACTIVITY_PANEL),
        W = (0, m.Rf)(I),
        Y = (0, E.DD)({
            quest: I,
            taskDetails: W,
            location: x.dr.ACTIVITY_PANEL,
            questContent: g.jn.ACTIVITY_PANEL
        }),
        K = (0, f.j)({ location: x.dr.QUESTS_BAR_MOBILE });
    return z || B || F
        ? null
        : (0, i.jsxs)('div', {
              ref: (e) => {
                  d.current = e;
              },
              className: a()(P.wrapper, { [P.wrapperQuestAccepted]: V }),
              onClick: w,
              onKeyPress: w,
              onFocus: j,
              onMouseEnter: j,
              onBlur: D,
              onMouseLeave: D,
              children: [
                  (0, i.jsxs)('div', {
                      className: P.utils,
                      children: [
                          V ? (0, i.jsx)(O, { quest: I }) : (0, i.jsx)(T.Z, {}),
                          (0, i.jsx)(S.r, {
                              quest: I,
                              questContent: g.jn.ACTIVITY_PANEL,
                              shouldShowDisclosure: (null === (o = I.userStatus) || void 0 === o ? void 0 : o.enrolledAt) == null,
                              showShareLink: !0,
                              children: (e) =>
                                  (0, i.jsx)(c.P3F, {
                                      ...e,
                                      'aria-label': y.intl.string(y.t.DEoVWV),
                                      children: (0, i.jsx)(c.xhG, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: P.submenuIcon
                                      })
                                  })
                          })
                      ]
                  }),
                  !V &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(O, { quest: I }),
                              (0, i.jsxs)('div', {
                                  className: P.instructions,
                                  children: [
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-normal',
                                          children: Y
                                      }),
                                      K &&
                                          (0, i.jsx)(v.Z, {
                                              quest: I,
                                              textColor: 'text-muted',
                                              withRewardName: !0
                                          })
                                  ]
                              })
                          ]
                      }),
                  V &&
                      !H &&
                      (0, i.jsx)(b.Z, {
                          autoplay: L,
                          className: P.rewardTileWithInstructions,
                          quest: I,
                          questContent: g.jn.ACTIVITY_PANEL,
                          location: x.dr.ACTIVITY_PANEL,
                          taskDetails: W
                      }),
                  (0, i.jsxs)('div', {
                      className: P.ctas,
                      children: [
                          !V &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(c.zxk, {
                                          className: P.cta,
                                          color: c.zxk.Colors.PRIMARY,
                                          fullWidth: !0,
                                          size: c.zxk.Sizes.SMALL,
                                          onClick: U,
                                          children: y.intl.string(y.t.LLLLPD)
                                      }),
                                      (0, i.jsx)(c.zxk, {
                                          className: P.cta,
                                          color: c.zxk.Colors.BRAND,
                                          fullWidth: !0,
                                          onClick: k,
                                          size: c.zxk.Sizes.SMALL,
                                          submitting: N,
                                          children: y.intl.string(y.t.l7E81t)
                                      })
                                  ]
                              }),
                          V &&
                              !H &&
                              (0, i.jsx)(c.zxk, {
                                  className: P.cta,
                                  color: c.zxk.Colors.BRAND,
                                  fullWidth: !0,
                                  onClick: M,
                                  size: c.zxk.Sizes.SMALL,
                                  children: y.intl.string(y.t.VN1Ajo)
                              }),
                          H &&
                              (0, i.jsx)(c.zxk, {
                                  className: P.cta,
                                  color: c.zxk.Colors.BRAND,
                                  fullWidth: !0,
                                  onClick: G,
                                  size: c.zxk.Sizes.SMALL,
                                  children: y.intl.string(y.t.cfY4PD)
                              })
                      ]
                  })
              ]
          });
}
let j = function (e) {
    return (0, i.jsx)(N.A, {
        questOrQuests: e.quest,
        questContent: g.jn.ACTIVITY_PANEL,
        children: (t) =>
            (0, i.jsx)(R, {
                nodeRef: t,
                ...e
            })
    });
};
