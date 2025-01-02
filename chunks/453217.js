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
    g = n(388032),
    f = n(208041);
t.Z = function (e) {
    var t;
    let { className: n, expansionSpring: r, isExpanded: h, isExpansionAnimationComplete: C, quest: v, useReducedMotion: j } = e,
        _ = (null === (t = v.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        { percentComplete: b } = (0, l.Rf)(v),
        N = (0, l.Jf)(v),
        E = null != N ? N.completedRatio > 0 : b > 0;
    return (0, o.jsxs)(a.animated.div, {
        'aria-hidden': h && C,
        className: s()(n, f.contentCollapsed, {
            [f.contentCollapsedExpanded]: h,
            [f.contentCollapsedAccepted]: _
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
                className: f.contentCollapsedWrapper,
                children: _
                    ? (0, o.jsxs)('div', {
                          className: f.questProgressWrapper,
                          children: [
                              (0, o.jsx)(p.Z, {
                                  className: f.questProgressRewardTile,
                                  quest: v,
                                  questContent: c.jn.QUEST_BAR,
                                  autoplay: !1,
                                  location: x.dr.QUESTS_BAR
                              }),
                              E
                                  ? (0, o.jsx)(u.Z, {
                                        className: f.questProgressBar,
                                        quest: v
                                    })
                                  : (0, o.jsx)(i.Text, {
                                        className: f.questProgressHint,
                                        color: 'always-white',
                                        variant: 'text-sm/semibold',
                                        children: g.intl.string(g.t['7e5k7O'])
                                    })
                          ]
                      })
                    : (0, o.jsxs)('div', {
                          className: f.brandingWrapper,
                          children: [
                              (0, o.jsx)(d.ZP, {
                                  className: f.partnerBranding,
                                  quest: v
                              }),
                              (0, o.jsx)(i.Heading, {
                                  color: 'always-white',
                                  variant: 'heading-sm/medium',
                                  className: f.questName,
                                  children: g.intl.format(g.t.EAYZAg, { questName: v.config.messages.questName })
                              })
                          ]
                      })
            })
        ]
    });
};
