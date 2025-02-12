t.d(n, { Z: () => M });
var l = t(200651),
    i = t(192379),
    r = t(120356),
    o = t.n(r),
    s = t(442837),
    a = t(780384),
    c = t(481060),
    u = t(100527),
    p = t(906732),
    d = t(600164),
    _ = t(963249),
    S = t(639119),
    m = t(165583),
    E = t(263954),
    h = t(706454),
    I = t(709586),
    x = t(626135),
    f = t(930153),
    P = t(74538),
    g = t(937615),
    T = t(981631),
    k = t(474936),
    N = t(388032),
    b = t(388525);
function C(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, s.e7)([h.default], () => h.default.locale);
    return (0, l.jsxs)('div', {
        className: b.perksList,
        children: [
            (0, l.jsx)(E.Z, {
                icon: I.Z,
                iconClassName: b.perkIconGuild,
                description: N.intl.formatToPlainString(N.t.sQBgs7, { numFreeGuildSubscriptions: k.cb })
            }),
            (0, l.jsx)(E.Z, {
                icon: I.Z,
                iconClassName: b.perkIconGuild,
                description: N.intl.formatToPlainString(N.t['1A6vXl'], { percent: (0, f.T3)(t, k.Rr / 100) })
            }),
            n
                ? (0, l.jsx)(E.Z, {
                      icon: c.EO4,
                      iconClassName: b.perkIconChatPerks,
                      description: N.intl.string(N.t.Z9b2x8)
                  })
                : null,
            (0, l.jsx)(E.Z, {
                icon: c.hGI,
                iconClassName: b.perkIconStream,
                description: N.intl.string(N.t['8dqG5O'])
            }),
            (0, l.jsx)(E.Z, {
                icon: c.rG2,
                iconClassName: b.perkIconUpload,
                description: N.intl.string(N.t.cBorIy)
            })
        ]
    });
}
function M(e) {
    var n;
    let { premiumSubscriptionPlan: t, onClose: r, onBack: s, onSkip: E, onSubscriptionConfirmation: h, analyticsLocation: I, analyticsSourceLocation: f, priceOptions: M } = e,
        { analyticsLocations: y, sourceAnalyticsLocations: L } = (0, p.ZP)(u.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: R } = (0, c.TCT)(),
        A = (0, a.ap)(R) ? c.zxk.Colors.PRIMARY : c.zxk.Colors.WHITE,
        v = null == t || null == t.premiumSubscriptionType,
        Z = P.ZP.getPrice(k.Xh.PREMIUM_MONTH_TIER_2, !1, !1, M),
        j = (0, g.T4)(Z.amount, Z.currency),
        D = (0, S.N)(),
        O = null == D ? void 0 : D.trial_id,
        U = (null == D ? void 0 : null === (n = D.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === k.Si.TIER_2;
    return (
        i.useEffect(() => {
            x.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                type: k.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: L
            });
        }, [L]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(c.hzk, {
                    className: b.content,
                    children: [
                        (0, l.jsx)(c.olH, {
                            onClick: r,
                            className: b.closeButton
                        }),
                        U && (0, l.jsx)(m.dz, { className: b.premiumTrialBadge }),
                        (0, l.jsx)('div', { className: o()(b.upsellImage, { [b.upsellImageWithTrialOffer]: U }) }),
                        (0, l.jsx)('div', {
                            className: b.bodyText,
                            children: null != O ? N.intl.string(N.t.AoSzEh) : N.intl.format(N.t['7vePZW'], { monthlyPrice: j })
                        }),
                        (0, l.jsx)(C, { shouldUpsellFromNoneTier: v })
                    ]
                }),
                (0, l.jsxs)(c.mzw, {
                    align: d.Z.Align.CENTER,
                    justify: d.Z.Justify.END,
                    children: [
                        (0, l.jsxs)('div', {
                            className: b.footerRight,
                            children: [
                                (0, l.jsx)(c.zxk, {
                                    look: c.zxk.Looks.LINK,
                                    color: A,
                                    onClick: E,
                                    children: N.intl.string(N.t['SI/adn'])
                                }),
                                (0, l.jsx)(c.zxk, {
                                    color: c.zxk.Colors.GREEN,
                                    type: 'submit',
                                    onClick: () => {
                                        r(),
                                            (0, _.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: k.Si.TIER_2,
                                                analyticsLocations: y,
                                                analyticsObject: {
                                                    ...I,
                                                    section: T.jXE.PREMIUM_GUILD_PURCHASE_MODAL
                                                },
                                                analyticsSourceLocation: f,
                                                onSubscriptionConfirmation: h,
                                                trialId: O
                                            });
                                    },
                                    children: null != O ? N.intl.string(N.t['Gd/XHB']) : N.intl.string(N.t.p2moio)
                                })
                            ]
                        }),
                        (0, l.jsx)('div', {
                            className: b.backStep,
                            children: (0, l.jsx)(c.zxk, {
                                color: A,
                                look: c.zxk.Looks.LINK,
                                size: c.zxk.Sizes.NONE,
                                onClick: () => s(),
                                children: N.intl.string(N.t['13/7kZ'])
                            })
                        })
                    ]
                })
            ]
        })
    );
}
