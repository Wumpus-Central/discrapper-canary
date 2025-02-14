n.d(t, { Z: () => f });
var s = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    o = n(642128),
    i = n(481060),
    l = n(113434),
    c = n(497505),
    d = n(685613),
    u = n(340100),
    p = n(644646),
    m = n(788284),
    x = n(46140),
    h = n(388032),
    g = n(944189);
let f = function (e) {
    var t;
    let { className: n, expansionSpring: r, isExpanded: f, isExpansionAnimationComplete: v, quest: _, useReducedMotion: C } = e,
        j = (null === (t = _.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        { percentComplete: b } = (0, l.Rf)(_),
        T = (0, l.Jf)(_),
        E = null != T ? T.completedRatio > 0 : b > 0;
    return (0, s.jsxs)(o.animated.div, {
        'aria-hidden': f && v,
        className: a()(n, g.contentCollapsed, {
            [g.contentCollapsedExpanded]: f,
            [g.contentCollapsedAccepted]: j
        }),
        style: {
            opacity: r.to({
                range: [0, 1],
                output: [1, 0]
            })
        },
        children: [
            (0, s.jsx)(m.Z, {
                quest: _,
                useReducedMotion: C
            }),
            (0, s.jsx)('div', {
                className: g.contentCollapsedWrapper,
                children: j
                    ? (0, s.jsxs)('div', {
                          className: g.questProgressWrapper,
                          children: [
                              (0, s.jsx)(p.Z, {
                                  className: g.questProgressRewardTile,
                                  quest: _,
                                  questContent: c.jn.QUEST_BAR,
                                  autoplay: !1,
                                  location: x.dr.QUESTS_BAR
                              }),
                              E
                                  ? (0, s.jsx)(u.Z, {
                                        className: g.questProgressBar,
                                        quest: _
                                    })
                                  : (0, s.jsx)(i.Text, {
                                        className: g.questProgressHint,
                                        color: 'always-white',
                                        variant: 'text-sm/semibold',
                                        children: h.intl.string(h.t['7e5k7O'])
                                    })
                          ]
                      })
                    : (0, s.jsxs)('div', {
                          className: g.brandingWrapper,
                          children: [
                              (0, s.jsx)(d.ZP, {
                                  className: g.partnerBranding,
                                  quest: _
                              }),
                              (0, s.jsx)(i.X6q, {
                                  color: 'always-white',
                                  variant: 'heading-sm/medium',
                                  className: g.questName,
                                  children: h.intl.format(h.t.EAYZAg, { questName: _.config.messages.questName })
                              })
                          ]
                      })
            })
        ]
    });
};
