n.d(t, { Z: () => w });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(570140),
    o = n(355467),
    c = n(37234),
    u = n(821849),
    d = n(774078),
    m = n(100527),
    g = n(15640),
    p = n(774380),
    h = n(404270),
    f = n(441536),
    x = n(174604),
    b = n(386937),
    j = n(316350),
    _ = n(899667),
    v = n(626135),
    O = n(267642),
    C = n(63063),
    y = n(999382),
    N = n(981631),
    I = n(388032),
    E = n(351325);
function S(e) {
    let { endsAt: t, appliedGuildBoostsToMaintain: n, tierName: r } = e,
        { days: i, hours: l } = (0, d.Z)(t);
    return n <= 0
        ? null
        : 0 === i && 0 === l
          ? I.intl.format(I.t.kF0HER, {
                tierName: r,
                numPremiumSubscriptions: n
            })
          : I.intl.format(I.t.neDJho, {
                days: i,
                hours: l,
                tierName: r,
                numPremiumSubscriptions: n
            });
}
function T(e) {
    let { appliedGuildBoosts: t, guildId: n } = e,
        i = (0, O.gZ)(t, n),
        l = (0, O.nW)((0, O.Jh)(n));
    if (null == i || null == l) return null;
    let a = (0, O._k)(t, n);
    return (0, r.jsxs)(s.Wn, {
        messageType: s.QYI.WARNING,
        children: [
            (0, r.jsx)('div', {
                className: E.guildBoostingGracePeriodTitle,
                children: I.intl.format(I.t.LG7vvr, {})
            }),
            (0, r.jsx)(S, {
                endsAt: i,
                appliedGuildBoostsToMaintain: a,
                tierName: l
            })
        ]
    });
}
let P = (e) => {
    let { isAnimatedTo: t, onSetRef: n, subscriptionCount: i, tier: l, tiers: s, tierIndex: a, guildId: o } = e;
    return (0, r.jsx)(
        j.Z,
        {
            subscriptionCount: i,
            tier: l,
            onSetRef: n,
            isAnimatedTo: t,
            hasBottomMargin: a !== s.length - 1,
            guildId: o
        },
        l.tier
    );
};
function w() {
    i.useEffect(() => {
        a.Z.wait(() => {
            (0, o.tZ)(), (0, u.Y2)();
        });
    }, []);
    let e = (0, l.e7)([y.Z], () => y.Z.getGuild()),
        t = (0, l.e7)([_.Z], () => (null != e ? _.Z.getAppliedGuildBoostsForGuild(e.id) : null)),
        n = (0, g.V)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(i.Fragment, {
                children: [
                    (0, r.jsx)(s.vwX, {
                        tag: s.RB0.H1,
                        children: I.intl.string(I.t.nLovSU)
                    }),
                    null != t && null != e
                        ? (0, r.jsx)(T, {
                              appliedGuildBoosts: t,
                              guildId: e.id
                          })
                        : null,
                    (0, r.jsx)(s.R94, {
                        type: s.R94.Types.DESCRIPTION,
                        className: E.titleBlurb,
                        children: I.intl.format(I.t.hLOkp6, { helpdeskArticle: C.Z.getArticleURL(N.BhN.GUILD_SUBSCRIPTIONS) })
                    })
                ]
            }),
            null != e &&
                (0, r.jsx)(x.Z, {
                    guild: e,
                    onButtonClick: function () {
                        null != e && ((0, c.xf)(), (0, f.Z)(e.id, m.Z.GUILD_POWERUPS_GUILD_SETTINGS_PREMIUM));
                    }
                }),
            (0, r.jsx)(b.Z, {
                tiers: (0, O.cP)(null != e && e.hasFeature(N.oNc.COMMUNITY) && e.maxStageVideoChannelUsers >= N.B9o),
                renderTier: P
            }),
            (0, r.jsx)('div', { className: E.divider }),
            n ? (0, r.jsx)(h.Z, {}) : null,
            n
                ? (0, r.jsx)(p.Z, {
                      onOpenPremiumClick: () =>
                          void v.default.track(N.rMx.PREMIUM_PROMOTION_OPENED, {
                              location: {
                                  page: N.ZY5.GUILD_SETTINGS,
                                  section: N.jXE.NITRO_CROSS_PROMO_FROM_BOOSTING,
                                  object: N.qAy.BUTTON_CTA
                              }
                          })
                  })
                : null
        ]
    });
}
