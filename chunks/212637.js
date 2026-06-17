"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(231723),
    s = n(192308),
    a = n(157559),
    o = n(73825),
    l = n(753390),
    u = n(65258),
    c = n(529427),
    d = n(166403),
    _ = n(174459),
    h = n(428262),
    f = n(652215),
    p = n(788868),
    E = n(375708);
let m = "guild-boost-purchase-modal";
async function g(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: g,
            analyticsSourceLocation: A,
            guildId: I,
            closeLayer: T,
            onCloseModal: S,
            totalNumberOfSlotsToAssign: y = 1,
            disablePremiumUpsell: C,
            onSubscribeComplete: N,
            onSubscriptionConfirmation: v,
            inPopout: R,
            applicationId: O,
            intent: b,
        } = e,
        D = R ? r.KX : r.SY,
        L = d.A.getPremiumTypeSubscription();
    if (null != L && L.isPurchasedExternally && null != L.paymentGateway) {
        null != T && T(),
            a.A.show({
                title: E.intl.formatToPlainString(E.t["rTk9v/"], { paymentGatewayName: f.qmC[L.paymentGateway] }),
                body: E.intl.format(E.t.NY03WF, {
                    paymentGatewayName: f.qmC[L.paymentGateway],
                    subscriptionManagementLink: (0, h.tW)(L.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                }),
            });
        return;
    }
    Promise.all([(0, l.$o)(), (0, o.zS)()]);
    let w = () => {
        _.default.track(f.HAw.MODAL_DISMISSED, { type: f.JJy.PREMIUM_GUILD_PURCHASE_MODAL, location: g });
    };
    if ((0, u.T)() && null != I)
        return c.UnifiedCheckoutFlowManagerSingletons[c.CL.GUILD_BOOST_CHECKOUT].get().openCheckoutModal({
            skuId: p.pe.GUILD,
            guildId: I,
            applicationId: O,
            activeSubscription: L,
            onClose: (e) => {
                null != S && S(e);
            },
            onSubscriptionConfirmation: v,
            analyticsObject: g,
            analyticsLocations: t,
            analyticsSourceLocation: A ?? g,
            modalAPIOptions: { modalKey: m, contextKey: D, onCloseCallback: w },
            tenantParams: {
                guildId: I,
                totalNumberOfSlotsToAssign: y,
                intent: b,
                disablePremiumUpsell: C,
                onSubscribeComplete: N,
                closeGuildPerksModal: T,
                analyticsLocation: g,
            },
        });
    await (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("17072"),
                n.e("93438"),
                n.e("54791"),
                n.e("25246"),
                n.e("33319"),
                n.e("48982"),
            ]).then(n.bind(n, 34645));
            return (n) => {
                let { transitionState: r, onClose: s } = n;
                return (0, i.jsx)(e, {
                    transitionState: r,
                    onClose: (e) => {
                        s(), S?.(e);
                    },
                    analyticsLocations: t,
                    analyticsLocation: g,
                    analyticsSourceLocation: A ?? g,
                    guildId: I,
                    totalNumberOfSlotsToAssign: y,
                    closeGuildPerksModal: T,
                    disablePremiumUpsell: C,
                    onSubscriptionConfirmation: v,
                    onSubscribeComplete: N,
                    applicationId: O,
                    intent: b,
                });
            };
        },
        {
            modalKey: m,
            onCloseCallback: w,
            onCloseRequest: () => {
                (0, s.closeModal)(m), S?.(!1);
            },
            contextKey: D,
        },
    );
}
