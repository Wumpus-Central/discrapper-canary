n.d(t, { Z: () => w });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(570140),
    o = n(355467),
    c = n(37234),
    d = n(821849),
    u = n(774078),
    g = n(100527),
    m = n(15640),
    p = n(774380),
    f = n(404270),
    h = n(441536),
    b = n(174604),
    x = n(399829),
    j = n(428862),
    v = n(899667),
    _ = n(626135),
    C = n(267642),
    O = n(63063),
    y = n(999382),
    E = n(981631),
    N = n(388032),
    I = n(424359);
function S(e) {
    let { endsAt: t, appliedGuildBoostsToMaintain: n, tierName: r } = e,
        { days: i, hours: l } = (0, u.Z)(t);
    return n <= 0
        ? null
        : 0 === i && 0 === l
          ? N.intl.format(N.t.kF0HEa, {
                tierName: r,
                numPremiumSubscriptions: n,
            })
          : N.intl.format(N.t.neDJhq, {
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
                className: I.guildBoostingGracePeriodTitle,
                children: N.intl.format(N.t.LG7vvg, {}),
            }),
            (0, r.jsx)(S, {
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
    let e = (0, l.e7)([y.Z], () => y.Z.getGuild()),
        t = (0, l.e7)([v.Z], () => (null != e ? v.Z.getAppliedGuildBoostsForGuild(e.id) : null)),
        n = (0, m.V)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(i.Fragment, {
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        children: N.intl.string(N.t.nLovSZ),
                    }),
                    null != t && null != e
                        ? (0, r.jsx)(T, {
                              appliedGuildBoosts: t,
                              guildId: e.id,
                          })
                        : null,
                    (0, r.jsx)(a.Text, {
                        className: I.titleBlurb,
                        variant: "text-sm/normal",
                        children: N.intl.format(N.t.hLOkp9, {
                            helpdeskArticle: O.Z.getArticleURL(E.BhN.GUILD_SUBSCRIPTIONS),
                        }),
                    }),
                ],
            }),
            null != e &&
                (0, r.jsx)(b.Z, {
                    guild: e,
                    onButtonClick: function () {
                        null != e && ((0, c.xf)(), (0, h.Z)(e.id, g.Z.GUILD_POWERUPS_GUILD_SETTINGS_PREMIUM));
                    },
                }),
            (0, r.jsx)(x.Z, {
                tiers: (0, C.cP)(
                    null != e && e.features.has(E.GuildFeatures.COMMUNITY) && e.maxStageVideoChannelUsers >= E.B9o,
                ),
                renderTier: P,
            }),
            (0, r.jsx)("div", { className: I.divider }),
            n ? (0, r.jsx)(f.Z, {}) : null,
            n
                ? (0, r.jsx)(p.Z, {
                      onOpenPremiumClick: () =>
                          void _.default.track(E.rMx.PREMIUM_PROMOTION_OPENED, {
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
