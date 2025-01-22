t.d(n, {
    Z: function () {
        return L;
    }
});
var l = t(200651),
    i = t(192379),
    o = t(120356),
    r = t.n(o),
    a = t(442837),
    s = t(780384),
    c = t(481060),
    u = t(100527),
    d = t(906732),
    p = t(600164),
    f = t(963249),
    _ = t(639119),
    S = t(165583),
    m = t(263954),
    E = t(706454),
    h = t(709586),
    I = t(626135),
    P = t(930153),
    g = t(74538),
    T = t(937615),
    x = t(981631),
    N = t(474936),
    C = t(388032),
    M = t(427930);
function y(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, a.e7)([E.default], () => E.default.locale);
    return (0, l.jsxs)('div', {
        className: M.perksList,
        children: [
            (0, l.jsx)(m.Z, {
                icon: h.Z,
                iconClassName: M.perkIconGuild,
                description: C.intl.formatToPlainString(C.t.sQBgs7, { numFreeGuildSubscriptions: N.cb })
            }),
            (0, l.jsx)(m.Z, {
                icon: h.Z,
                iconClassName: M.perkIconGuild,
                description: C.intl.formatToPlainString(C.t['1A6vXl'], { percent: (0, P.T3)(t, N.Rr / 100) })
            }),
            n
                ? (0, l.jsx)(m.Z, {
                      icon: c.ReactionIcon,
                      iconClassName: M.perkIconChatPerks,
                      description: C.intl.string(C.t.Z9b2x8)
                  })
                : null,
            (0, l.jsx)(m.Z, {
                icon: c.ScreenArrowIcon,
                iconClassName: M.perkIconStream,
                description: C.intl.string(C.t['8dqG5O'])
            }),
            (0, l.jsx)(m.Z, {
                icon: c.UploadIcon,
                iconClassName: M.perkIconUpload,
                description: C.intl.string(C.t.cBorIy)
            })
        ]
    });
}
function L(e) {
    var n;
    let { premiumSubscriptionPlan: t, onClose: o, onBack: a, onSkip: m, onSubscriptionConfirmation: E, analyticsLocation: h, analyticsSourceLocation: P, priceOptions: L } = e,
        { analyticsLocations: k, sourceAnalyticsLocations: R } = (0, d.ZP)(u.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: A } = (0, c.useThemeContext)(),
        b = (0, s.ap)(A) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
        v = null == t || null == t.premiumSubscriptionType,
        Z = g.ZP.getPrice(N.Xh.PREMIUM_MONTH_TIER_2, !1, !1, L),
        D = (0, T.T4)(Z.amount, Z.currency),
        j = (0, _.N)(),
        B = null == j ? void 0 : j.trial_id,
        O = (null == j ? void 0 : null === (n = j.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === N.Si.TIER_2;
    return (
        i.useEffect(() => {
            I.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
                type: N.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: R
            });
        }, [R]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(c.ModalContent, {
                    className: M.content,
                    children: [
                        (0, l.jsx)(c.ModalCloseButton, {
                            onClick: o,
                            className: M.closeButton
                        }),
                        O && (0, l.jsx)(S.dz, { className: M.premiumTrialBadge }),
                        (0, l.jsx)('div', { className: r()(M.upsellImage, { [M.upsellImageWithTrialOffer]: O }) }),
                        (0, l.jsx)('div', {
                            className: M.bodyText,
                            children: null != B ? C.intl.string(C.t.AoSzEh) : C.intl.format(C.t['7vePZW'], { monthlyPrice: D })
                        }),
                        (0, l.jsx)(y, { shouldUpsellFromNoneTier: v })
                    ]
                }),
                (0, l.jsxs)(c.ModalFooter, {
                    align: p.Z.Align.CENTER,
                    justify: p.Z.Justify.END,
                    children: [
                        (0, l.jsxs)('div', {
                            className: M.footerRight,
                            children: [
                                (0, l.jsx)(c.Button, {
                                    look: c.Button.Looks.LINK,
                                    color: b,
                                    onClick: m,
                                    children: C.intl.string(C.t['SI/adn'])
                                }),
                                (0, l.jsx)(c.Button, {
                                    color: c.Button.Colors.GREEN,
                                    type: 'submit',
                                    onClick: () => {
                                        o(),
                                            (0, f.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: N.Si.TIER_2,
                                                analyticsLocations: k,
                                                analyticsObject: {
                                                    ...h,
                                                    section: x.jXE.PREMIUM_GUILD_PURCHASE_MODAL
                                                },
                                                analyticsSourceLocation: P,
                                                onSubscriptionConfirmation: E,
                                                trialId: B
                                            });
                                    },
                                    children: null != B ? C.intl.string(C.t['Gd/XHB']) : C.intl.string(C.t.p2moio)
                                })
                            ]
                        }),
                        (0, l.jsx)('div', {
                            className: M.backStep,
                            children: (0, l.jsx)(c.Button, {
                                color: b,
                                look: c.Button.Looks.LINK,
                                size: c.Button.Sizes.NONE,
                                onClick: () => a(),
                                children: C.intl.string(C.t['13/7kZ'])
                            })
                        })
                    ]
                })
            ]
        })
    );
}
