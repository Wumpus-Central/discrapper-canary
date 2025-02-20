n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(570140),
    o = n(355467),
    c = n(821849),
    d = n(774078),
    u = n(15640),
    m = n(774380),
    p = n(404270),
    g = n(386937),
    h = n(316350),
    f = n(899667),
    b = n(626135),
    x = n(267642),
    j = n(63063),
    N = n(999382),
    v = n(981631),
    _ = n(388032),
    O = n(360375);
function y(e) {
    let { endsAt: t, appliedGuildBoostsToMaintain: n, tierName: i } = e,
        { days: s, hours: a } = (0, d.Z)(t);
    return n <= 0
        ? null
        : (0, r.jsx)(r.Fragment, {
              children:
                  0 === s && 0 === a
                      ? _.NW.format(_.t.kF0HER, {
                            tierName: i,
                            numPremiumSubscriptions: n
                        })
                      : _.NW.format(_.t.neDJho, {
                            days: s,
                            hours: a,
                            tierName: i,
                            numPremiumSubscriptions: n
                        })
          });
}
function C(e) {
    let { appliedGuildBoosts: t, guildId: n } = e,
        i = (0, x.gZ)(t, n),
        s = (0, x.nW)((0, x.rF)(t.length, n));
    if (null == i || null == s) return null;
    let l = (0, x._k)(t, n);
    return (0, r.jsxs)(a.Wn, {
        messageType: a.QYI.WARNING,
        children: [
            (0, r.jsx)('div', {
                className: O.guildBoostingGracePeriodTitle,
                children: _.NW.format(_.t.LG7vvr, {})
            }),
            (0, r.jsx)(y, {
                endsAt: i,
                appliedGuildBoostsToMaintain: l,
                tierName: s
            })
        ]
    });
}
let I = (e) => {
    let { isAnimatedTo: t, onSetRef: n, subscriptionCount: i, tier: s, tiers: a, tierIndex: l, guildId: o } = e;
    return (0, r.jsx)(
        h.Z,
        {
            subscriptionCount: i,
            tier: s,
            onSetRef: n,
            isAnimatedTo: t,
            hasBottomMargin: l !== a.length - 1,
            guildId: o
        },
        s.tier
    );
};
function E() {
    i.useEffect(() => {
        l.Z.wait(() => {
            (0, o.tZ)(), (0, c.Y2)();
        });
    }, []);
    let e = (0, s.e7)([N.Z], () => N.Z.getGuild()),
        t = (0, s.e7)([f.Z], () => (null != e ? f.Z.getAppliedGuildBoostsForGuild(e.id) : null)),
        n = (0, u.V)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(i.Fragment, {
                children: [
                    (0, r.jsx)(a.vwX, {
                        tag: a.RB0.H1,
                        children: _.NW.string(_.t.nLovSU)
                    }),
                    null != t && null != e
                        ? (0, r.jsx)(C, {
                              appliedGuildBoosts: t,
                              guildId: e.id
                          })
                        : null,
                    (0, r.jsx)(a.R94, {
                        type: a.R94.Types.DESCRIPTION,
                        className: O.titleBlurb,
                        children: _.NW.format(_.t.hLOkp6, { helpdeskArticle: j.Z.getArticleURL(v.BhN.GUILD_SUBSCRIPTIONS) })
                    })
                ]
            }),
            (0, r.jsx)(g.Z, {
                tiers: (0, x.cP)(null != e && e.hasFeature(v.oNc.COMMUNITY) && e.maxStageVideoChannelUsers >= v.B9o),
                renderTier: I
            }),
            (0, r.jsx)('div', { className: O.divider }),
            n ? (0, r.jsx)(p.Z, {}) : null,
            n
                ? (0, r.jsx)(m.Z, {
                      onOpenPremiumClick: () =>
                          void b.default.track(v.rMx.PREMIUM_PROMOTION_OPENED, {
                              location: {
                                  page: v.ZY5.GUILD_SETTINGS,
                                  section: v.jXE.NITRO_CROSS_PROMO_FROM_BOOSTING,
                                  object: v.qAy.BUTTON_CTA
                              }
                          })
                  })
                : null
        ]
    });
}
