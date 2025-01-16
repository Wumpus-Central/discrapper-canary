t.d(n, {
    Z: function () {
        return A;
    }
});
var o = t(200651),
    l = t(192379),
    i = t(120356),
    r = t.n(i),
    a = t(442837),
    s = t(780384),
    c = t(481060),
    u = t(100527),
    d = t(906732),
    p = t(600164),
    f = t(963249),
    m = t(639119),
    _ = t(165583),
    S = t(263954),
    E = t(706454),
    g = t(709586),
    h = t(626135),
    P = t(930153),
    T = t(74538),
    I = t(937615),
    b = t(981631),
    x = t(474936),
    C = t(388032),
    y = t(427930);
function N(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, a.e7)([E.default], () => E.default.locale);
    return (0, o.jsxs)('div', {
        className: y.perksList,
        children: [
            (0, o.jsx)(S.Z, {
                icon: g.Z,
                iconClassName: y.perkIconGuild,
                description: C.intl.formatToPlainString(C.t.sQBgs7, { numFreeGuildSubscriptions: x.cb })
            }),
            (0, o.jsx)(S.Z, {
                icon: g.Z,
                iconClassName: y.perkIconGuild,
                description: C.intl.formatToPlainString(C.t['1A6vXl'], { percent: (0, P.T3)(t, x.Rr / 100) })
            }),
            n
                ? (0, o.jsx)(S.Z, {
                      icon: c.ReactionIcon,
                      iconClassName: y.perkIconChatPerks,
                      description: C.intl.string(C.t.Z9b2x8)
                  })
                : null,
            (0, o.jsx)(S.Z, {
                icon: c.ScreenArrowIcon,
                iconClassName: y.perkIconStream,
                description: C.intl.string(C.t['8dqG5O'])
            }),
            (0, o.jsx)(S.Z, {
                icon: c.UploadIcon,
                iconClassName: y.perkIconUpload,
                description: C.intl.string(C.t.cBorIy)
            })
        ]
    });
}
function A(e) {
    var n;
    let { premiumSubscriptionPlan: t, onClose: i, onBack: a, onSkip: S, onSubscriptionConfirmation: E, analyticsLocation: g, analyticsSourceLocation: P, priceOptions: A } = e,
        { analyticsLocations: M, sourceAnalyticsLocations: k } = (0, d.ZP)(u.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: v } = (0, c.useThemeContext)(),
        L = (0, s.ap)(v) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
        R = null == t || null == t.premiumSubscriptionType,
        j = T.ZP.getPrice(x.Xh.PREMIUM_MONTH_TIER_2, !1, !1, A),
        B = (0, I.T4)(j.amount, j.currency),
        D = (0, m.N)(),
        Z = null == D ? void 0 : D.trial_id,
        O = (null == D ? void 0 : null === (n = D.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === x.Si.TIER_2;
    return (
        l.useEffect(() => {
            h.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
                type: x.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: k
            });
        }, [k]),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)(c.ModalContent, {
                    className: y.content,
                    children: [
                        (0, o.jsx)(c.ModalCloseButton, {
                            onClick: i,
                            className: y.closeButton
                        }),
                        O && (0, o.jsx)(_.dz, { className: y.premiumTrialBadge }),
                        (0, o.jsx)('div', { className: r()(y.upsellImage, { [y.upsellImageWithTrialOffer]: O }) }),
                        (0, o.jsx)('div', {
                            className: y.bodyText,
                            children: null != Z ? C.intl.string(C.t.AoSzEh) : C.intl.format(C.t['7vePZW'], { monthlyPrice: B })
                        }),
                        (0, o.jsx)(N, { shouldUpsellFromNoneTier: R })
                    ]
                }),
                (0, o.jsxs)(c.ModalFooter, {
                    align: p.Z.Align.CENTER,
                    justify: p.Z.Justify.END,
                    children: [
                        (0, o.jsxs)('div', {
                            className: y.footerRight,
                            children: [
                                (0, o.jsx)(c.Button, {
                                    look: c.Button.Looks.LINK,
                                    color: L,
                                    onClick: S,
                                    children: C.intl.string(C.t['SI/adn'])
                                }),
                                (0, o.jsx)(c.Button, {
                                    color: c.Button.Colors.GREEN,
                                    type: 'submit',
                                    onClick: () => {
                                        i(),
                                            (0, f.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: x.Si.TIER_2,
                                                analyticsLocations: M,
                                                analyticsObject: {
                                                    ...g,
                                                    section: b.jXE.PREMIUM_GUILD_PURCHASE_MODAL
                                                },
                                                analyticsSourceLocation: P,
                                                onSubscriptionConfirmation: E,
                                                trialId: Z
                                            });
                                    },
                                    children: null != Z ? C.intl.string(C.t['Gd/XHB']) : C.intl.string(C.t.p2moio)
                                })
                            ]
                        }),
                        (0, o.jsx)('div', {
                            className: y.backStep,
                            children: (0, o.jsx)(c.Button, {
                                color: L,
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
