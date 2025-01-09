n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(570140),
    o = n(355467),
    c = n(821849),
    d = n(774078),
    u = n(15640),
    m = n(774380),
    h = n(404270),
    g = n(386937),
    x = n(316350),
    p = n(899667),
    f = n(626135),
    C = n(267642),
    v = n(63063),
    N = n(999382),
    _ = n(981631),
    I = n(388032),
    T = n(981004);
function j(e) {
    let { endsAt: t, appliedGuildBoostsToMaintain: n, tierName: r } = e,
        { days: l, hours: s } = (0, d.Z)(t);
    return n <= 0
        ? null
        : (0, i.jsx)(i.Fragment, {
              children:
                  0 === l && 0 === s
                      ? I.intl.format(I.t.kF0HER, {
                            tierName: r,
                            numPremiumSubscriptions: n
                        })
                      : I.intl.format(I.t.neDJho, {
                            days: l,
                            hours: s,
                            tierName: r,
                            numPremiumSubscriptions: n
                        })
          });
}
function b(e) {
    let { appliedGuildBoosts: t, guildId: n } = e,
        r = (0, C.gZ)(t, n),
        l = (0, C.nW)((0, C.rF)(t.length, n));
    if (null == r || null == l) return null;
    let a = (0, C._k)(t, n);
    return (0, i.jsxs)(s.HelpMessage, {
        messageType: s.HelpMessageTypes.WARNING,
        children: [
            (0, i.jsx)('div', {
                className: T.guildBoostingGracePeriodTitle,
                children: I.intl.format(I.t.LG7vvr, {})
            }),
            (0, i.jsx)(j, {
                endsAt: r,
                appliedGuildBoostsToMaintain: a,
                tierName: l
            })
        ]
    });
}
let E = (e) => {
    let { isAnimatedTo: t, onSetRef: n, subscriptionCount: r, tier: l, tiers: s, tierIndex: a, guildId: o } = e;
    return (0, i.jsx)(
        x.Z,
        {
            subscriptionCount: r,
            tier: l,
            onSetRef: n,
            isAnimatedTo: t,
            hasBottomMargin: a !== s.length - 1,
            guildId: o
        },
        l.tier
    );
};
function S() {
    r.useEffect(() => {
        a.Z.wait(() => {
            (0, o.tZ)(), (0, c.Y2)();
        });
    }, []);
    let e = (0, l.e7)([N.Z], () => N.Z.getGuild()),
        t = (0, l.e7)([p.Z], () => (null != e ? p.Z.getAppliedGuildBoostsForGuild(e.id) : null)),
        n = (0, u.V)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.Fragment, {
                children: [
                    (0, i.jsx)(s.FormTitle, {
                        tag: s.FormTitleTags.H1,
                        children: I.intl.string(I.t.nLovSU)
                    }),
                    null != t && null != e
                        ? (0, i.jsx)(b, {
                              appliedGuildBoosts: t,
                              guildId: e.id
                          })
                        : null,
                    (0, i.jsx)(s.FormText, {
                        type: s.FormText.Types.DESCRIPTION,
                        className: T.titleBlurb,
                        children: I.intl.format(I.t.hLOkp6, { helpdeskArticle: v.Z.getArticleURL(_.BhN.GUILD_SUBSCRIPTIONS) })
                    })
                ]
            }),
            (0, i.jsx)(g.Z, {
                tiers: (0, C.cP)(null != e && e.hasFeature(_.oNc.COMMUNITY) && e.maxStageVideoChannelUsers >= _.B9o),
                renderTier: E
            }),
            (0, i.jsx)('div', { className: T.divider }),
            n ? (0, i.jsx)(h.Z, {}) : null,
            n
                ? (0, i.jsx)(m.Z, {
                      onOpenPremiumClick: () =>
                          void f.default.track(_.rMx.PREMIUM_PROMOTION_OPENED, {
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
