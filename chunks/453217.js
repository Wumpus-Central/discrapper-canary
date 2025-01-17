var o = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(642128),
    i = n(481060),
    l = n(113434),
    c = n(497505),
    d = n(685613),
    u = n(340100),
    p = n(644646),
    m = n(788284),
    x = n(46140),
    g = n(388032),
    h = n(208041);
t.Z = function (e) {
    var t;
    let { className: n, expansionSpring: r, isExpanded: f, isExpansionAnimationComplete: v, quest: C, useReducedMotion: j } = e,
        _ = (null === (t = C.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        { percentComplete: T } = (0, l.Rf)(C),
        E = (0, l.Jf)(C),
        S = null != E ? E.completedRatio > 0 : T > 0;
    return (0, o.jsxs)(a.animated.div, {
        'aria-hidden': f && v,
        className: s()(n, h.contentCollapsed, {
            [h.contentCollapsedExpanded]: f,
            [h.contentCollapsedAccepted]: _
        }),
        style: {
            opacity: r.to({
                range: [0, 1],
                output: [1, 0]
            })
        },
        children: [
            (0, o.jsx)(m.Z, {
                quest: C,
                useReducedMotion: j
            }),
            (0, o.jsx)('div', {
                className: h.contentCollapsedWrapper,
                children: _
                    ? (0, o.jsxs)('div', {
                          className: h.questProgressWrapper,
                          children: [
                              (0, o.jsx)(p.Z, {
                                  className: h.questProgressRewardTile,
                                  quest: C,
                                  questContent: c.jn.QUEST_BAR,
                                  autoplay: !1,
                                  location: x.dr.QUESTS_BAR
                              }),
                              S
                                  ? (0, o.jsx)(u.Z, {
                                        className: h.questProgressBar,
                                        quest: C
                                    })
                                  : (0, o.jsx)(i.Text, {
                                        className: h.questProgressHint,
                                        color: 'always-white',
                                        variant: 'text-sm/semibold',
                                        children: g.intl.string(g.t['7e5k7O'])
                                    })
                          ]
                      })
                    : (0, o.jsxs)('div', {
                          className: h.brandingWrapper,
                          children: [
                              (0, o.jsx)(d.ZP, {
                                  className: h.partnerBranding,
                                  quest: C
                              }),
                              (0, o.jsx)(i.Heading, {
                                  color: 'always-white',
                                  variant: 'heading-sm/medium',
                                  className: h.questName,
                                  children: g.intl.format(g.t.EAYZAg, { questName: C.config.messages.questName })
                              })
                          ]
                      })
            })
        ]
    });
};
