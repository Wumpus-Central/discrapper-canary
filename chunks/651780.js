n.d(t, { Z: () => P });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(570140),
    o = n(355467),
    c = n(37234),
    d = n(821849),
    u = n(774078),
    m = n(15640),
    g = n(774380),
    p = n(404270),
    f = n(441536),
    h = n(174604),
    b = n(386937),
    x = n(316350),
    j = n(899667),
    N = n(626135),
    v = n(267642),
    _ = n(63063),
    y = n(999382),
    O = n(981631),
    C = n(388032),
    I = n(351325);
function E(e) {
    let { endsAt: t, appliedGuildBoostsToMaintain: n, tierName: r } = e,
        { days: i, hours: s } = (0, u.Z)(t);
    return n <= 0
        ? null
        : 0 === i && 0 === s
          ? C.NW.format(C.t.kF0HER, {
                tierName: r,
                numPremiumSubscriptions: n
            })
          : C.NW.format(C.t.neDJho, {
                days: i,
                hours: s,
                tierName: r,
                numPremiumSubscriptions: n
            });
}
function S(e) {
    let { appliedGuildBoosts: t, guildId: n } = e,
        i = (0, v.gZ)(t, n),
        s = (0, v.nW)((0, v.Jh)(n));
    if (null == i || null == s) return null;
    let l = (0, v._k)(t, n);
    return (0, r.jsxs)(a.Wn, {
        messageType: a.QYI.WARNING,
        children: [
            (0, r.jsx)('div', {
                className: I.guildBoostingGracePeriodTitle,
                children: C.NW.format(C.t.LG7vvr, {})
            }),
            (0, r.jsx)(E, {
                endsAt: i,
                appliedGuildBoostsToMaintain: l,
                tierName: s
            })
        ]
    });
}
let T = (e) => {
    let { isAnimatedTo: t, onSetRef: n, subscriptionCount: i, tier: s, tiers: a, tierIndex: l, guildId: o } = e;
    return (0, r.jsx)(
        x.Z,
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
function P() {
    i.useEffect(() => {
        l.Z.wait(() => {
            (0, o.tZ)(), (0, d.Y2)();
        });
    }, []);
    let e = (0, s.e7)([y.Z], () => y.Z.getGuild()),
        t = (0, s.e7)([j.Z], () => (null != e ? j.Z.getAppliedGuildBoostsForGuild(e.id) : null)),
        n = (0, m.V)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(i.Fragment, {
                children: [
                    (0, r.jsx)(a.vwX, {
                        tag: a.RB0.H1,
                        children: C.NW.string(C.t.nLovSU)
                    }),
                    null != t && null != e
                        ? (0, r.jsx)(S, {
                              appliedGuildBoosts: t,
                              guildId: e.id
                          })
                        : null,
                    (0, r.jsx)(a.R94, {
                        type: a.R94.Types.DESCRIPTION,
                        className: I.titleBlurb,
                        children: C.NW.format(C.t.hLOkp6, { helpdeskArticle: _.Z.getArticleURL(O.BhN.GUILD_SUBSCRIPTIONS) })
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
            (0, r.jsx)(b.Z, {
                tiers: (0, v.cP)(null != e && e.hasFeature(O.oNc.COMMUNITY) && e.maxStageVideoChannelUsers >= O.B9o),
                renderTier: T
            }),
            (0, r.jsx)('div', { className: I.divider }),
            n ? (0, r.jsx)(p.Z, {}) : null,
            n
                ? (0, r.jsx)(g.Z, {
                      onOpenPremiumClick: () =>
                          void N.default.track(O.rMx.PREMIUM_PROMOTION_OPENED, {
                              location: {
                                  page: O.ZY5.GUILD_SETTINGS,
                                  section: O.jXE.NITRO_CROSS_PROMO_FROM_BOOSTING,
                                  object: O.qAy.BUTTON_CTA
                              }
                          })
                  })
                : null
        ]
    });
}
