n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(663002),
    c = n(481060),
    d = n(210887),
    u = n(617136),
    h = n(272008),
    m = n(113434),
    p = n(569984),
    g = n(497505),
    f = n(918701),
    _ = n(585500),
    E = n(475595),
    I = n(566078),
    C = n(602667),
    N = n(611855),
    v = n(64141),
    S = n(667105),
    T = n(860151),
    b = n(341907),
    A = n(46140),
    Z = n(981631),
    x = n(388032),
    L = n(444865);
function P(e) {
    var t;
    let { quest: n } = e,
        r = (0, m.B6)(n.config.expiresAt),
        l = (0, m.B6)(I.r.build(n.config).rewardsExpireAt),
        a = (0, s.e7)([d.Z], () => d.Z.getState().theme),
        u = (0, o.wj)(a) ? Z.BRd.DARK : Z.BRd.LIGHT,
        h = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
    return (0, i.jsxs)('div', {
        className: L.heading,
        children: [
            (0, i.jsx)('img', {
                className: L.headingGameTile,
                alt: '',
                src: (0, E.fh)(n, E.eC.GAME_TILE, u).url
            }),
            (0, i.jsxs)('div', {
                className: L.headingCopy,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        children: h ? x.intl.string(x.t.XBboAA) : x.intl.formatToPlainString(x.t.EQa7oq, { questName: n.config.messages.questName })
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        children: h ? x.intl.formatToPlainString(x.t.APddvL, { expirationDate: l }) : x.intl.formatToPlainString(x.t['pX+fmp'], { expirationDate: r })
                    })
                ]
            })
        ]
    });
}
t.Z = function (e) {
    var t, n, l;
    let { quest: o } = e,
        d = (0, s.e7)([p.Z], () => p.Z.isEnrolling(o.id), [o]),
        [E, I] = r.useState(!1),
        Z = r.useCallback(() => I(!0), []),
        O = r.useCallback(() => I(!1), []),
        y = r.useCallback((e) => {
            e.stopPropagation();
        }, []),
        R = r.useCallback(() => {
            (0, h.AH)(o.id, {
                questContent: g.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.ACCEPT_QUEST
            });
        }, [o]),
        j = r.useCallback(() => {
            null != o &&
                ((0, u._3)({
                    questId: o.id,
                    questContent: g.jn.ACTIVITY_PANEL,
                    questContentCTA: u.jZ.TRACK_PROGRESS
                }),
                (0, b.navigateToQuestHome)(A.dr.ACTIVITY_PANEL, g.jn.ACTIVITY_PANEL, o.id));
        }, [o]),
        D = r.useCallback(() => {
            (0, u._3)({
                questId: o.id,
                questContent: g.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.LEARN_MORE
            }),
                (0, b.navigateToQuestHome)(A.dr.ACTIVITY_PANEL, g.jn.ACTIVITY_PANEL, o.id);
        }, [o]),
        M = (0, S.hf)({
            quest: o,
            location: g.jn.ACTIVITY_PANEL
        }),
        w = (0, m.tP)(o),
        k = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        U = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        G = (null === (l = o.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null,
        B = (null == o ? void 0 : o.userStatus) == null || (0, f.zE)(o.userStatus, g.jn.ACTIVITY_PANEL),
        V = (0, m.Rf)(o),
        H = (0, _.D)({
            quest: o,
            taskDetails: V,
            location: A.dr.ACTIVITY_PANEL,
            questContent: g.jn.ACTIVITY_PANEL
        });
    return B || w || G
        ? null
        : (0, i.jsx)(C.A, {
              questOrQuests: o,
              questContent: g.jn.ACTIVITY_PANEL,
              children: (e) => {
                  var t;
                  return (0, i.jsxs)('div', {
                      ref: (t) => {
                          e.current = t;
                      },
                      className: a()(L.wrapper, { [L.wrapperQuestAccepted]: k }),
                      onClick: y,
                      onKeyPress: y,
                      onFocus: Z,
                      onMouseEnter: Z,
                      onBlur: O,
                      onMouseLeave: O,
                      children: [
                          (0, i.jsxs)('div', {
                              className: L.utils,
                              children: [
                                  k ? (0, i.jsx)(P, { quest: o }) : (0, i.jsx)(N.Z, { textOpacity: 0.5 }),
                                  (0, i.jsx)(v.r, {
                                      quest: o,
                                      questContent: g.jn.ACTIVITY_PANEL,
                                      shouldShowDisclosure: (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null,
                                      showShareLink: !0,
                                      children: (e) =>
                                          (0, i.jsx)(c.Clickable, {
                                              ...e,
                                              'aria-label': x.intl.string(x.t.DEoVWV),
                                              children: (0, i.jsx)(c.MoreHorizontalIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: L.submenuIcon
                                              })
                                          })
                                  })
                              ]
                          }),
                          !k &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(P, { quest: o }),
                                      (0, i.jsx)(c.Text, {
                                          className: L.instructions,
                                          variant: 'text-sm/normal',
                                          color: 'text-normal',
                                          children: H
                                      })
                                  ]
                              }),
                          k &&
                              !U &&
                              (0, i.jsx)(T.Z, {
                                  autoplay: E,
                                  className: L.rewardTileWithInstructions,
                                  quest: o,
                                  questContent: g.jn.ACTIVITY_PANEL,
                                  location: A.dr.ACTIVITY_PANEL,
                                  taskDetails: V
                              }),
                          (0, i.jsxs)('div', {
                              className: L.ctas,
                              children: [
                                  !k &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(c.Button, {
                                                  className: L.cta,
                                                  color: c.Button.Colors.PRIMARY,
                                                  fullWidth: !0,
                                                  size: c.Button.Sizes.SMALL,
                                                  onClick: D,
                                                  children: x.intl.string(x.t.LLLLPD)
                                              }),
                                              (0, i.jsx)(c.Button, {
                                                  className: L.cta,
                                                  color: c.Button.Colors.BRAND,
                                                  fullWidth: !0,
                                                  onClick: R,
                                                  size: c.Button.Sizes.SMALL,
                                                  submitting: d,
                                                  children: x.intl.string(x.t.l7E81t)
                                              })
                                          ]
                                      }),
                                  k &&
                                      !U &&
                                      (0, i.jsx)(c.Button, {
                                          className: L.cta,
                                          color: c.Button.Colors.BRAND,
                                          fullWidth: !0,
                                          onClick: j,
                                          size: c.Button.Sizes.SMALL,
                                          children: x.intl.string(x.t.VN1Ajo)
                                      }),
                                  U &&
                                      (0, i.jsx)(c.Button, {
                                          className: L.cta,
                                          color: c.Button.Colors.BRAND,
                                          fullWidth: !0,
                                          onClick: M,
                                          size: c.Button.Sizes.SMALL,
                                          children: x.intl.string(x.t.cfY4PD)
                                      })
                              ]
                          })
                      ]
                  });
              }
          });
};
