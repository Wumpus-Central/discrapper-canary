n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var o = n(120356),
    s = n.n(o),
    a = n(642128),
    i = n(481060),
    l = n(113434),
    c = n(497505),
    d = n(685613),
    u = n(340100),
    p = n(644646),
    m = n(788284),
    x = n(46140),
    h = n(388032),
    g = n(122534);
let f = function (e) {
    var t;
    let { className: n, expansionSpring: o, isExpanded: f, isExpansionAnimationComplete: _, quest: C, useReducedMotion: v } = e,
        j = (null === (t = C.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        { percentComplete: b } = (0, l.Rf)(C),
        T = (0, l.Jf)(C),
        E = null != T ? T.completedRatio > 0 : b > 0;
    return (0, r.jsxs)(a.animated.div, {
        'aria-hidden': f && _,
        className: s()(n, g.contentCollapsed, {
            [g.contentCollapsedExpanded]: f,
            [g.contentCollapsedAccepted]: j
        }),
        style: {
            opacity: o.to({
                range: [0, 1],
                output: [1, 0]
            })
        },
        children: [
            (0, r.jsx)(m.Z, {
                quest: C,
                useReducedMotion: v
            }),
            (0, r.jsx)('div', {
                className: g.contentCollapsedWrapper,
                children: j
                    ? (0, r.jsxs)('div', {
                          className: g.questProgressWrapper,
                          children: [
                              (0, r.jsx)(p.Z, {
                                  className: g.questProgressRewardTile,
                                  quest: C,
                                  questContent: c.jn.QUEST_BAR,
                                  autoplay: !1,
                                  location: x.dr.QUESTS_BAR
                              }),
                              E
                                  ? (0, r.jsx)(u.Z, {
                                        className: g.questProgressBar,
                                        quest: C
                                    })
                                  : (0, r.jsx)(i.Text, {
                                        className: g.questProgressHint,
                                        color: 'always-white',
                                        variant: 'text-sm/semibold',
                                        children: h.intl.string(h.t['7e5k7O'])
                                    })
                          ]
                      })
                    : (0, r.jsxs)('div', {
                          className: g.brandingWrapper,
                          children: [
                              (0, r.jsx)(d.ZP, {
                                  className: g.partnerBranding,
                                  quest: C
                              }),
                              (0, r.jsx)(i.X6q, {
                                  color: 'always-white',
                                  variant: 'heading-sm/medium',
                                  className: g.questName,
                                  children: h.intl.format(h.t.EAYZAg, { questName: C.config.messages.questName })
                              })
                          ]
                      })
            })
        ]
    });
};
