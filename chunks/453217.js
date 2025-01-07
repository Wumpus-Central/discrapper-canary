var o = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(752877),
    i = n(481060),
    l = n(113434),
    c = n(497505),
    d = n(685613),
    u = n(340100),
    p = n(644646),
    m = n(788284),
    x = n(46140),
    f = n(388032),
    g = n(208041);
t.Z = function (e) {
    var t;
    let { className: n, expansionSpring: r, isExpanded: h, isExpansionAnimationComplete: C, quest: v, useReducedMotion: j } = e,
        _ = (null === (t = v.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        { percentComplete: b } = (0, l.Rf)(v),
        N = (0, l.Jf)(v),
        E = null != N ? N.completedRatio > 0 : b > 0;
    return (0, o.jsxs)(a.animated.div, {
        'aria-hidden': h && C,
        className: s()(n, g.contentCollapsed, {
            [g.contentCollapsedExpanded]: h,
            [g.contentCollapsedAccepted]: _
        }),
        style: {
            opacity: r.to({
                range: [0, 1],
                output: [1, 0]
            })
        },
        children: [
            (0, o.jsx)(m.Z, {
                quest: v,
                useReducedMotion: j
            }),
            (0, o.jsx)('div', {
                className: g.contentCollapsedWrapper,
                children: _
                    ? (0, o.jsxs)('div', {
                          className: g.questProgressWrapper,
                          children: [
                              (0, o.jsx)(p.Z, {
                                  className: g.questProgressRewardTile,
                                  quest: v,
                                  questContent: c.jn.QUEST_BAR,
                                  autoplay: !1,
                                  location: x.dr.QUESTS_BAR
                              }),
                              E
                                  ? (0, o.jsx)(u.Z, {
                                        className: g.questProgressBar,
                                        quest: v
                                    })
                                  : (0, o.jsx)(i.Text, {
                                        className: g.questProgressHint,
                                        color: 'always-white',
                                        variant: 'text-sm/semibold',
                                        children: f.intl.string(f.t['7e5k7O'])
                                    })
                          ]
                      })
                    : (0, o.jsxs)('div', {
                          className: g.brandingWrapper,
                          children: [
                              (0, o.jsx)(d.ZP, {
                                  className: g.partnerBranding,
                                  quest: v
                              }),
                              (0, o.jsx)(i.Heading, {
                                  color: 'always-white',
                                  variant: 'heading-sm/medium',
                                  className: g.questName,
                                  children: f.intl.format(f.t.EAYZAg, { questName: v.config.messages.questName })
                              })
                          ]
                      })
            })
        ]
    });
};
