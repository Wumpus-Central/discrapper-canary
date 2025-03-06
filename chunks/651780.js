n.d(t, { Z: () => S });
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
    g = n(404270),
    p = n(174604),
    h = n(386937),
    f = n(316350),
    b = n(899667),
    x = n(626135),
    j = n(267642),
    N = n(63063),
    v = n(999382),
    _ = n(981631),
    O = n(388032),
    y = n(324358);
function C(e) {
    let { endsAt: t, appliedGuildBoostsToMaintain: n, tierName: r } = e,
        { days: i, hours: s } = (0, d.Z)(t);
    return n <= 0
        ? null
        : 0 === i && 0 === s
          ? O.NW.format(O.t.kF0HER, {
                tierName: r,
                numPremiumSubscriptions: n
            })
          : O.NW.format(O.t.neDJho, {
                days: i,
                hours: s,
                tierName: r,
                numPremiumSubscriptions: n
            });
}
function I(e) {
    let { appliedGuildBoosts: t, guildId: n } = e,
        i = (0, j.gZ)(t, n),
        s = (0, j.nW)((0, j.rF)(t.length, n));
    if (null == i || null == s) return null;
    let l = (0, j._k)(t, n);
    return (0, r.jsxs)(a.Wn, {
        messageType: a.QYI.WARNING,
        children: [
            (0, r.jsx)('div', {
                className: y.guildBoostingGracePeriodTitle,
                children: O.NW.format(O.t.LG7vvr, {})
            }),
            (0, r.jsx)(C, {
                endsAt: i,
                appliedGuildBoostsToMaintain: l,
                tierName: s
            })
        ]
    });
}
let E = (e) => {
    let { isAnimatedTo: t, onSetRef: n, subscriptionCount: i, tier: s, tiers: a, tierIndex: l, guildId: o } = e;
    return (0, r.jsx)(
        f.Z,
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
function S() {
    i.useEffect(() => {
        l.Z.wait(() => {
            (0, o.tZ)(), (0, c.Y2)();
        });
    }, []);
    let e = (0, s.e7)([v.Z], () => v.Z.getGuild()),
        t = (0, s.e7)([b.Z], () => (null != e ? b.Z.getAppliedGuildBoostsForGuild(e.id) : null)),
        n = (0, u.V)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(i.Fragment, {
                children: [
                    (0, r.jsx)(a.vwX, {
                        tag: a.RB0.H1,
                        children: O.NW.string(O.t.nLovSU)
                    }),
                    null != t && null != e
                        ? (0, r.jsx)(I, {
                              appliedGuildBoosts: t,
                              guildId: e.id
                          })
                        : null,
                    (0, r.jsx)(a.R94, {
                        type: a.R94.Types.DESCRIPTION,
                        className: y.titleBlurb,
                        children: O.NW.format(O.t.hLOkp6, { helpdeskArticle: N.Z.getArticleURL(_.BhN.GUILD_SUBSCRIPTIONS) })
                    })
                ]
            }),
            null != e && (0, r.jsx)(p.Z, { guild: e }),
            (0, r.jsx)(h.Z, {
                tiers: (0, j.cP)(null != e && e.hasFeature(_.oNc.COMMUNITY) && e.maxStageVideoChannelUsers >= _.B9o),
                renderTier: E
            }),
            (0, r.jsx)('div', { className: y.divider }),
            n ? (0, r.jsx)(g.Z, {}) : null,
            n
                ? (0, r.jsx)(m.Z, {
                      onOpenPremiumClick: () =>
                          void x.default.track(_.rMx.PREMIUM_PROMOTION_OPENED, {
                              location: {
                                  page: _.ZY5.GUILD_SETTINGS,
                                  section: _.jXE.NITRO_CROSS_PROMO_FROM_BOOSTING,
                                  object: _.qAy.BUTTON_CTA
                              }
                          })
                  })
                : null
        ]
    });
}
