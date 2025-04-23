n.d(t, { Z: () => P });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(570140),
    o = n(355467),
    c = n(37234),
    u = n(821849),
    d = n(774078),
    m = n(15640),
    g = n(774380),
    p = n(404270),
    f = n(441536),
    h = n(174604),
    x = n(386937),
    b = n(316350),
    j = n(899667),
    _ = n(626135),
    v = n(267642),
    O = n(63063),
    C = n(999382),
    y = n(981631),
    N = n(388032),
    I = n(351325);
function E(e) {
    let { endsAt: t, appliedGuildBoostsToMaintain: n, tierName: r } = e,
        { days: i, hours: l } = (0, d.Z)(t);
    return n <= 0
        ? null
        : 0 === i && 0 === l
          ? N.intl.format(N.t.kF0HER, {
                tierName: r,
                numPremiumSubscriptions: n
            })
          : N.intl.format(N.t.neDJho, {
                days: i,
                hours: l,
                tierName: r,
                numPremiumSubscriptions: n
            });
}
function S(e) {
    let { appliedGuildBoosts: t, guildId: n } = e,
        i = (0, v.gZ)(t, n),
        l = (0, v.nW)((0, v.Jh)(n));
    if (null == i || null == l) return null;
    let a = (0, v._k)(t, n);
    return (0, r.jsxs)(s.Wn, {
        messageType: s.QYI.WARNING,
        children: [
            (0, r.jsx)('div', {
                className: I.guildBoostingGracePeriodTitle,
                children: N.intl.format(N.t.LG7vvr, {})
            }),
            (0, r.jsx)(E, {
                endsAt: i,
                appliedGuildBoostsToMaintain: a,
                tierName: l
            })
        ]
    });
}
let T = (e) => {
    let { isAnimatedTo: t, onSetRef: n, subscriptionCount: i, tier: l, tiers: s, tierIndex: a, guildId: o } = e;
    return (0, r.jsx)(
        b.Z,
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
function P() {
    i.useEffect(() => {
        a.Z.wait(() => {
            (0, o.tZ)(), (0, u.Y2)();
        });
    }, []);
    let e = (0, l.e7)([C.Z], () => C.Z.getGuild()),
        t = (0, l.e7)([j.Z], () => (null != e ? j.Z.getAppliedGuildBoostsForGuild(e.id) : null)),
        n = (0, m.V)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(i.Fragment, {
                children: [
                    (0, r.jsx)(s.vwX, {
                        tag: s.RB0.H1,
                        children: N.intl.string(N.t.nLovSU)
                    }),
                    null != t && null != e
                        ? (0, r.jsx)(S, {
                              appliedGuildBoosts: t,
                              guildId: e.id
                          })
                        : null,
                    (0, r.jsx)(s.R94, {
                        type: s.R94.Types.DESCRIPTION,
                        className: I.titleBlurb,
                        children: N.intl.format(N.t.hLOkp6, { helpdeskArticle: O.Z.getArticleURL(y.BhN.GUILD_SUBSCRIPTIONS) })
                    })
                ]
            }),
            null != e &&
                (0, r.jsx)(h.Z, {
                    guild: e,
                    onButtonClick: function () {
                        null != e && ((0, c.xf)(), (0, f.Z)(e.id));
                    }
                }),
            (0, r.jsx)(x.Z, {
                tiers: (0, v.cP)(null != e && e.hasFeature(y.oNc.COMMUNITY) && e.maxStageVideoChannelUsers >= y.B9o),
                renderTier: T
            }),
            (0, r.jsx)('div', { className: I.divider }),
            n ? (0, r.jsx)(p.Z, {}) : null,
            n
                ? (0, r.jsx)(g.Z, {
                      onOpenPremiumClick: () =>
                          void _.default.track(y.rMx.PREMIUM_PROMOTION_OPENED, {
                              location: {
                                  page: y.ZY5.GUILD_SETTINGS,
                                  section: y.jXE.NITRO_CROSS_PROMO_FROM_BOOSTING,
                                  object: y.qAy.BUTTON_CTA
                              }
                          })
                  })
                : null
        ]
    });
}
