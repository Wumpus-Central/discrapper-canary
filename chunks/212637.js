"use strict";
n.d(t, { A: () => f });
var i = n(231723),
    r = n(157559),
    s = n(73825),
    a = n(753390),
    o = n(529427),
    l = n(166403),
    u = n(174459),
    c = n(428262),
    d = n(652215),
    _ = n(788868),
    h = n(375708);
function f(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: n,
            analyticsSourceLocation: f,
            guildId: p,
            closeLayer: E,
            onCloseModal: m,
            totalNumberOfSlotsToAssign: g = 1,
            disablePremiumUpsell: A,
            onSubscribeComplete: I,
            onSubscriptionConfirmation: T,
            inPopout: S,
            applicationId: y,
            intent: C,
        } = e,
        N = S ? i.KX : i.SY,
        v = l.A.getPremiumTypeSubscription();
    if (null != v && v.isPurchasedExternally && null != v.paymentGateway) {
        null != E && E(),
            r.A.show({
                title: h.intl.formatToPlainString(h.t["rTk9v/"], { paymentGatewayName: d.qmC[v.paymentGateway] }),
                body: h.intl.format(h.t.NY03WF, {
                    paymentGatewayName: d.qmC[v.paymentGateway],
                    subscriptionManagementLink: (0, c.tW)(v.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                }),
            });
        return;
    }
    return (
        Promise.all([(0, a.$o)(), (0, s.zS)()]),
        o.UnifiedCheckoutFlowManagerSingletons[o.CL.GUILD_BOOST_CHECKOUT].get().openCheckoutModal({
            checkoutConfiguration: { skuId: _.pe.GUILD, applicationId: y, activeSubscription: v },
            forwardedPaymentModalProps: { guildId: p, onSubscriptionConfirmation: T, analyticsObject: n },
            checkoutHandlers: {
                onClose: (e) => {
                    null != m && m(e);
                },
            },
            unifiedCheckoutProviderProps: { analyticsLocations: t, analyticsSourceLocation: f ?? n },
            modalAPIOptions: {
                modalKey: "guild-boost-purchase-modal",
                contextKey: N,
                onCloseCallback: function () {
                    u.default.track(d.HAw.MODAL_DISMISSED, { type: d.JJy.PREMIUM_GUILD_PURCHASE_MODAL, location: n });
                },
            },
            tenantParams: {
                guildId: p,
                totalNumberOfSlotsToAssign: g,
                intent: C,
                disablePremiumUpsell: A,
                onSubscribeComplete: I,
                closeGuildPerksModal: E,
                analyticsLocation: n,
            },
        })
    );
}
