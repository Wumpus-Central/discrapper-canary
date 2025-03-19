n.d(t, { Z: () => B });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(570140),
    o = n(355467),
    c = n(37234),
    A = n(821849),
    d = n(774078),
    u = n(15640),
    g = n(774380),
    f = n(404270),
    m = n(441536),
    p = n(174604),
    h = n(386937),
    C = n(316350),
    b = n(899667),
    v = n(626135),
    x = n(267642),
    N = n(63063),
    j = n(999382),
    E = n(981631),
    I = n(388032),
    O = n(324358);
function y(e) {
    let { endsAt: t, appliedGuildBoostsToMaintain: n, tierName: r } = e,
        { days: i, hours: s } = (0, d.Z)(t);
    return n <= 0
        ? null
        : 0 === i && 0 === s
          ? I.NW.format(I.t.kF0HER, {
                tierName: r,
                numPremiumSubscriptions: n
            })
          : I.NW.format(I.t.neDJho, {
                days: i,
                hours: s,
                tierName: r,
                numPremiumSubscriptions: n
            });
}
function w(e) {
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
                children: I.NW.format(I.t.LG7vvr, {})
            }),
            (0, r.jsx)(y, {
                endsAt: i,
                appliedGuildBoostsToMaintain: l,
                tierName: s
            })
        ]
    });
}
let P = (e) => {
    let { isAnimatedTo: t, onSetRef: n, subscriptionCount: i, tier: s, tiers: a, tierIndex: l, guildId: o } = e;
    return (0, r.jsx)(
        C.Z,
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
function B() {
    i.useEffect(() => {
        l.Z.wait(() => {
            (0, o.tZ)(), (0, A.Y2)();
        });
    }, []);
    let e = (0, s.e7)([j.Z], () => j.Z.getGuild()),
        t = (0, s.e7)([b.Z], () => (null != e ? b.Z.getAppliedGuildBoostsForGuild(e.id) : null)),
        n = (0, u.V)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(i.Fragment, {
                children: [
                    (0, r.jsx)(a.vwX, {
                        tag: a.RB0.H1,
                        children: I.NW.string(I.t.nLovSU)
                    }),
                    null != t && null != e
                        ? (0, r.jsx)(w, {
                              appliedGuildBoosts: t,
                              guildId: e.id
                          })
                        : null,
                    (0, r.jsx)(a.R94, {
                        type: a.R94.Types.DESCRIPTION,
                        className: O.titleBlurb,
                        children: I.NW.format(I.t.hLOkp6, { helpdeskArticle: N.Z.getArticleURL(E.BhN.GUILD_SUBSCRIPTIONS) })
                    })
                ]
            }),
            null != e &&
                (0, r.jsx)(p.Z, {
                    guild: e,
                    onButtonClick: function () {
                        null != e && ((0, c.xf)(), (0, m.Z)(e.id));
                    }
                }),
            (0, r.jsx)(h.Z, {
                tiers: (0, x.cP)(null != e && e.hasFeature(E.oNc.COMMUNITY) && e.maxStageVideoChannelUsers >= E.B9o),
                renderTier: P
            }),
            (0, r.jsx)('div', { className: O.divider }),
            n ? (0, r.jsx)(f.Z, {}) : null,
            n
                ? (0, r.jsx)(g.Z, {
                      onOpenPremiumClick: () =>
                          void v.default.track(E.rMx.PREMIUM_PROMOTION_OPENED, {
                              location: {
                                  page: E.ZY5.GUILD_SETTINGS,
                                  section: E.jXE.NITRO_CROSS_PROMO_FROM_BOOSTING,
                                  object: E.qAy.BUTTON_CTA
                              }
                          })
                  })
                : null
        ]
    });
}
