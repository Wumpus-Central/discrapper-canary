n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var s = n(120356),
    o = n.n(s),
    a = n(386230),
    i = n(481060),
    l = n(113434),
    c = n(497505),
    d = n(685613),
    u = n(340100),
    p = n(644646),
    m = n(788284),
    f = n(46140),
    g = n(388032),
    x = n(192214);
let h = function (e) {
    var t;
    let { className: n, expansionSpring: s, isExpanded: h, isExpansionAnimationComplete: b, quest: j, useReducedMotion: v } = e,
        y = (null == (t = j.userStatus) ? void 0 : t.enrolledAt) != null,
        { percentComplete: _ } = (0, l.Rf)(j),
        O = (0, l.Jf)(j),
        C = null != O ? O.percentComplete > 0 : _ > 0;
    return (0, r.jsxs)(a.animated.div, {
        'aria-hidden': h && b,
        className: o()(n, x.contentCollapsed, {
            [x.contentCollapsedExpanded]: h,
            [x.contentCollapsedAccepted]: y
        }),
        style: {
            opacity: s.to({
                range: [0, 1],
                output: [1, 0]
            })
        },
        children: [
            (0, r.jsx)(m.Z, {
                quest: j,
                useReducedMotion: v
            }),
            (0, r.jsx)('div', {
                className: x.contentCollapsedWrapper,
                children: y
                    ? (0, r.jsxs)('div', {
                          className: x.questProgressWrapper,
                          children: [
                              (0, r.jsx)(p.Z, {
                                  className: x.questProgressRewardTile,
                                  quest: j,
                                  questContent: c.jn.QUEST_BAR,
                                  autoplay: !1,
                                  location: f.dr.QUESTS_BAR
                              }),
                              C
                                  ? (0, r.jsx)(u.Z, {
                                        className: x.questProgressBar,
                                        quest: j
                                    })
                                  : (0, r.jsx)(i.Text, {
                                        className: x.questProgressHint,
                                        color: 'always-white',
                                        variant: 'text-sm/semibold',
                                        children: g.intl.string(g.t['7e5k7O'])
                                    })
                          ]
                      })
                    : (0, r.jsxs)('div', {
                          className: x.brandingWrapper,
                          children: [
                              (0, r.jsx)(d.ZP, {
                                  className: x.partnerBranding,
                                  quest: j
                              }),
                              (0, r.jsx)(i.X6q, {
                                  color: 'always-white',
                                  variant: 'heading-sm/medium',
                                  className: x.questName,
                                  children: g.intl.format(g.t.EAYZAg, { questName: j.config.messages.questName })
                              })
                          ]
                      })
            })
        ]
    });
};
