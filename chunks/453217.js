n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var s = n(120356),
    o = n.n(s),
    a = n(815061),
    i = n(481060),
    l = n(113434),
    c = n(497505),
    d = n(685613),
    u = n(340100),
    p = n(644646),
    m = n(788284),
    f = n(46140),
    g = n(388032),
    x = n(785421);
let h = function (e) {
    var t;
    let {
            className: n,
            expansionSpring: s,
            isExpanded: h,
            isExpansionAnimationComplete: b,
            quest: _,
            useReducedMotion: j,
        } = e,
        v = (null == (t = _.userStatus) ? void 0 : t.enrolledAt) != null,
        { percentComplete: C } = (0, l.Rf)(_),
        y = (0, l.Jf)(_),
        E = null != y ? y.percentComplete > 0 : C > 0;
    return (0, r.jsxs)(a.animated.div, {
        "aria-hidden": h && b,
        className: o()(n, x.contentCollapsed, {
            [x.contentCollapsedExpanded]: h,
            [x.contentCollapsedAccepted]: v,
        }),
        style: {
            opacity: s.to({
                range: [0, 1],
                output: [1, 0],
            }),
        },
        children: [
            (0, r.jsx)(m.Z, {
                quest: _,
                useReducedMotion: j,
            }),
            (0, r.jsx)("div", {
                className: x.contentCollapsedWrapper,
                children: v
                    ? (0, r.jsxs)("div", {
                          className: x.questProgressWrapper,
                          children: [
                              (0, r.jsx)(p.Z, {
                                  className: x.questProgressRewardTile,
                                  quest: _,
                                  questContent: c.jn.QUEST_BAR,
                                  autoplay: !1,
                                  location: f.dr.QUESTS_BAR,
                                  sourceQuestContent: c.jn.QUEST_BAR,
                              }),
                              E
                                  ? (0, r.jsx)(u.Z, {
                                        className: x.questProgressBar,
                                        quest: _,
                                    })
                                  : (0, r.jsx)(i.Text, {
                                        className: x.questProgressHint,
                                        color: "always-white",
                                        variant: "text-sm/semibold",
                                        children: g.intl.string(g.t["7e5k7O"]),
                                    }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: x.brandingWrapper,
                          children: [
                              (0, r.jsx)(d.ZP, {
                                  className: x.partnerBranding,
                                  quest: _,
                              }),
                              (0, r.jsx)(i.X6q, {
                                  color: "always-white",
                                  variant: "heading-sm/medium",
                                  className: x.questName,
                                  children: g.intl.format(g.t.EAYZAg, { questName: _.config.messages.questName }),
                              }),
                          ],
                      }),
            }),
        ],
    });
};
