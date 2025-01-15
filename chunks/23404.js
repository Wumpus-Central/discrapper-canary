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
    v = n(670638),
    S = n(667105),
    T = n(860151),
    A = n(341907),
    b = n(46140),
    Z = n(981631),
    x = n(388032),
    L = n(541292);
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
function O(e) {
    var t, n, l, o;
    let { nodeRef: d, quest: E } = e,
        I = (0, u.O5)(),
        C = (0, s.e7)([p.Z], () => p.Z.isEnrolling(E.id), [E]),
        [Z, O] = r.useState(!1),
        y = r.useCallback(() => O(!0), []),
        R = r.useCallback(() => O(!1), []),
        j = r.useCallback((e) => {
            e.stopPropagation();
        }, []),
        D = r.useCallback(() => {
            (0, h.AH)(E.id, {
                questContent: g.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.ACCEPT_QUEST
            });
        }, [E]),
        M = r.useCallback(() => {
            null != E &&
                (I({
                    questId: E.id,
                    questContent: g.jn.ACTIVITY_PANEL,
                    questContentCTA: u.jZ.TRACK_PROGRESS
                }),
                (0, A.navigateToQuestHome)(b.dr.ACTIVITY_PANEL, g.jn.ACTIVITY_PANEL, E.id));
        }, [E, I]),
        w = r.useCallback(() => {
            I({
                questId: E.id,
                questContent: g.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.LEARN_MORE
            }),
                (0, A.navigateToQuestHome)(b.dr.ACTIVITY_PANEL, g.jn.ACTIVITY_PANEL, E.id);
        }, [E.id, I]),
        k = (0, S.hf)({
            quest: E,
            location: g.jn.ACTIVITY_PANEL
        }),
        U = (0, m.tP)(E),
        G = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        B = (null === (n = E.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        V = (null === (l = E.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null,
        H = (null == E ? void 0 : E.userStatus) == null || (0, f.zE)(E.userStatus, g.jn.ACTIVITY_PANEL),
        F = (0, m.Rf)(E),
        z = (0, _.D)({
            quest: E,
            taskDetails: F,
            location: b.dr.ACTIVITY_PANEL,
            questContent: g.jn.ACTIVITY_PANEL
        });
    return H || U || V
        ? null
        : (0, i.jsxs)('div', {
              ref: (e) => {
                  d.current = e;
              },
              className: a()(L.wrapper, { [L.wrapperQuestAccepted]: G }),
              onClick: j,
              onKeyPress: j,
              onFocus: y,
              onMouseEnter: y,
              onBlur: R,
              onMouseLeave: R,
              children: [
                  (0, i.jsxs)('div', {
                      className: L.utils,
                      children: [
                          G ? (0, i.jsx)(P, { quest: E }) : (0, i.jsx)(N.Z, { textOpacity: 0.5 }),
                          (0, i.jsx)(v.r, {
                              quest: E,
                              questContent: g.jn.ACTIVITY_PANEL,
                              shouldShowDisclosure: (null === (o = E.userStatus) || void 0 === o ? void 0 : o.enrolledAt) == null,
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
                  !G &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(P, { quest: E }),
                              (0, i.jsx)(c.Text, {
                                  className: L.instructions,
                                  variant: 'text-sm/normal',
                                  color: 'text-normal',
                                  children: z
                              })
                          ]
                      }),
                  G &&
                      !B &&
                      (0, i.jsx)(T.Z, {
                          autoplay: Z,
                          className: L.rewardTileWithInstructions,
                          quest: E,
                          questContent: g.jn.ACTIVITY_PANEL,
                          location: b.dr.ACTIVITY_PANEL,
                          taskDetails: F
                      }),
                  (0, i.jsxs)('div', {
                      className: L.ctas,
                      children: [
                          !G &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(c.Button, {
                                          className: L.cta,
                                          color: c.Button.Colors.PRIMARY,
                                          fullWidth: !0,
                                          size: c.Button.Sizes.SMALL,
                                          onClick: w,
                                          children: x.intl.string(x.t.LLLLPD)
                                      }),
                                      (0, i.jsx)(c.Button, {
                                          className: L.cta,
                                          color: c.Button.Colors.BRAND,
                                          fullWidth: !0,
                                          onClick: D,
                                          size: c.Button.Sizes.SMALL,
                                          submitting: C,
                                          children: x.intl.string(x.t.l7E81t)
                                      })
                                  ]
                              }),
                          G &&
                              !B &&
                              (0, i.jsx)(c.Button, {
                                  className: L.cta,
                                  color: c.Button.Colors.BRAND,
                                  fullWidth: !0,
                                  onClick: M,
                                  size: c.Button.Sizes.SMALL,
                                  children: x.intl.string(x.t.VN1Ajo)
                              }),
                          B &&
                              (0, i.jsx)(c.Button, {
                                  className: L.cta,
                                  color: c.Button.Colors.BRAND,
                                  fullWidth: !0,
                                  onClick: k,
                                  size: c.Button.Sizes.SMALL,
                                  children: x.intl.string(x.t.cfY4PD)
                              })
                      ]
                  })
              ]
          });
}
t.Z = function (e) {
    return (0, i.jsx)(C.A, {
        questOrQuests: e.quest,
        questContent: g.jn.ACTIVITY_PANEL,
        children: (t) =>
            (0, i.jsx)(O, {
                nodeRef: t,
                ...e
            })
    });
};
