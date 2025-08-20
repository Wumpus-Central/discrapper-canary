n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(803948),
    s = n(481060),
    l = n(113434),
    c = n(497505),
    u = n(685613),
    d = n(340100),
    f = n(644646),
    _ = n(788284),
    p = n(46140),
    h = n(388032),
    m = n(785421);
let g = function (e) {
    var t;
    let {
            className: n,
            expansionSpring: i,
            isExpanded: g,
            isExpansionAnimationComplete: E,
            quest: b,
            useReducedMotion: y,
        } = e,
        O = (null == (t = b.userStatus) ? void 0 : t.enrolledAt) != null,
        { percentComplete: v } = (0, l.Rf)(b),
        I = (0, l.Jf)(b),
        T = null != I ? I.percentComplete > 0 : v > 0;
    return (0, r.jsxs)(o.animated.div, {
        "aria-hidden": g && E,
        className: a()(n, m.contentCollapsed, {
            [m.contentCollapsedExpanded]: g,
            [m.contentCollapsedAccepted]: O,
        }),
        style: {
            opacity: i.to({
                range: [0, 1],
                output: [1, 0],
            }),
        },
        children: [
            (0, r.jsx)(_.Z, {
                quest: b,
                useReducedMotion: y,
            }),
            (0, r.jsx)("div", {
                className: m.contentCollapsedWrapper,
                children: O
                    ? (0, r.jsxs)("div", {
                          className: m.questProgressWrapper,
                          children: [
                              (0, r.jsx)(f.Z, {
                                  className: m.questProgressRewardTile,
                                  quest: b,
                                  questContent: c.jn.QUEST_BAR,
                                  autoplay: !1,
                                  location: p.dr.QUESTS_BAR,
                                  sourceQuestContent: c.jn.QUEST_BAR,
                              }),
                              T
                                  ? (0, r.jsx)(d.Z, {
                                        className: m.questProgressBar,
                                        quest: b,
                                    })
                                  : (0, r.jsx)(s.Text, {
                                        className: m.questProgressHint,
                                        color: "always-white",
                                        variant: "text-sm/semibold",
                                        children: h.intl.string(h.t["7e5k7O"]),
                                    }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: m.brandingWrapper,
                          children: [
                              (0, r.jsx)(u.ZP, {
                                  className: m.partnerBranding,
                                  quest: b,
                              }),
                              (0, r.jsx)(s.X6q, {
                                  color: "always-white",
                                  variant: "heading-sm/medium",
                                  className: m.questName,
                                  children: h.intl.format(h.t.EAYZAg, { questName: b.config.messages.questName }),
                              }),
                          ],
                      }),
            }),
        ],
    });
};
