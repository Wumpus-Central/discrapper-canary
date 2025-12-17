n.d(t, { Z: () => w });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(570140),
    o = n(355467),
    c = n(37234),
    d = n(821849),
    u = n(774078),
    g = n(100527),
    f = n(15640),
    m = n(774380),
    b = n(404270),
    p = n(441536),
    h = n(174604),
    x = n(399829),
    j = n(428862),
    v = n(899667),
    O = n(626135),
    C = n(267642),
    y = n(63063),
    N = n(999382),
    E = n(981631),
    I = n(388032),
    S = n(874176);
function _(e) {
    let { endsAt: t, appliedGuildBoostsToMaintain: n, tierName: r } = e,
        { days: i, hours: l } = (0, u.Z)(t);
    return n <= 0
        ? null
        : 0 === i && 0 === l
          ? I.intl.format(I.t.kF0HEa, {
                tierName: r,
                numPremiumSubscriptions: n,
            })
          : I.intl.format(I.t.neDJhq, {
                days: i,
                hours: l,
                tierName: r,
                numPremiumSubscriptions: n,
            });
}
function T(e) {
    let { appliedGuildBoosts: t, guildId: n } = e,
        i = (0, C.gZ)(t, n),
        l = (0, C.nW)((0, C.Jh)(n));
    if (null == i || null == l) return null;
    let s = (0, C._k)(t, n);
    return (0, r.jsxs)(a.Wn, {
        messageType: a.QYI.WARNING,
        children: [
            (0, r.jsx)("div", {
                className: S.guildBoostingGracePeriodTitle,
                children: I.intl.format(I.t.LG7vvg, {}),
            }),
            (0, r.jsx)(_, {
                endsAt: i,
                appliedGuildBoostsToMaintain: s,
                tierName: l,
            }),
        ],
    });
}
let P = (e) => {
    let { isAnimatedTo: t, onSetRef: n, subscriptionCount: i, tier: l, tiers: a, tierIndex: s, guildId: o } = e;
    return (0, r.jsx)(
        j.Z,
        {
            subscriptionCount: i,
            tier: l,
            onSetRef: n,
            isAnimatedTo: t,
            hasBottomMargin: s !== a.length - 1,
            guildId: o,
        },
        l.tier,
    );
};
function w() {
    i.useEffect(() => {
        s.Z.wait(() => {
            (0, o.tZ)(), (0, d.Y2)();
        });
    }, []);
    let e = (0, l.e7)([N.Z], () => N.Z.getGuild()),
        t = (0, l.e7)([v.Z], () => (null != e ? v.Z.getAppliedGuildBoostsForGuild(e.id) : null)),
        n = (0, f.V)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(i.Fragment, {
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        children: I.intl.string(I.t.nLovSZ),
                    }),
                    null != t && null != e
                        ? (0, r.jsx)(T, {
                              appliedGuildBoosts: t,
                              guildId: e.id,
                          })
                        : null,
                    (0, r.jsx)(a.Text, {
                        className: S.titleBlurb,
                        variant: "text-sm/normal",
                        children: I.intl.format(I.t.hLOkp9, {
                            helpdeskArticle: y.Z.getArticleURL(E.BhN.GUILD_SUBSCRIPTIONS),
                        }),
                    }),
                ],
            }),
            null != e &&
                (0, r.jsx)(h.Z, {
                    guild: e,
                    onButtonClick: function () {
                        null != e && ((0, c.xf)(), (0, p.Z)(e.id, g.Z.GUILD_POWERUPS_GUILD_SETTINGS_PREMIUM));
                    },
                }),
            (0, r.jsx)(x.Z, {
                tiers: (0, C.cP)(
                    null != e && e.features.has(E.GuildFeatures.COMMUNITY) && e.maxStageVideoChannelUsers >= E.B9o,
                ),
                renderTier: P,
            }),
            (0, r.jsx)("div", { className: S.divider }),
            n ? (0, r.jsx)(b.Z, {}) : null,
            n
                ? (0, r.jsx)(m.Z, {
                      onOpenPremiumClick: () =>
                          void O.default.track(E.rMx.PREMIUM_PROMOTION_OPENED, {
                              location: {
                                  page: E.ZY5.GUILD_SETTINGS,
                                  section: E.jXE.NITRO_CROSS_PROMO_FROM_BOOSTING,
                                  object: E.qAy.BUTTON_CTA,
                              },
                          }),
                  })
                : null,
        ],
    });
}
