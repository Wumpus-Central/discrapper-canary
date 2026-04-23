"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(231723),
    s = n(192308),
    a = n(157559),
    o = n(73825),
    l = n(323082),
    u = n(166403),
    c = n(954571),
    d = n(927578),
    _ = n(652215),
    f = n(985018);
let p = "guild-boost-purchase-modal";
async function h(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: h,
            analyticsSourceLocation: E,
            guildId: m,
            closeLayer: g,
            onCloseModal: A,
            totalNumberOfSlotsToAssign: I = 1,
            disablePremiumUpsell: T,
            onSubscribeComplete: S,
            onSubscriptionConfirmation: y,
            inPopout: N,
            applicationId: v,
            intent: C,
        } = e,
        O = N ? i.KX : i.SY,
        R = u.A.getPremiumTypeSubscription();
    if (null != R && R.isPurchasedExternally && null != R.paymentGateway) {
        null != g && g(),
            a.A.show({
                title: f.intl.formatToPlainString(f.t["rTk9v/"], { paymentGatewayName: _.qmC[R.paymentGateway] }),
                body: f.intl.format(f.t.NY03WF, {
                    paymentGatewayName: _.qmC[R.paymentGateway],
                    subscriptionManagementLink: (0, d.tW)(R.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                }),
            });
        return;
    }
    Promise.all([(0, l.$o)(), (0, o.zS)()]),
        await (0, s.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("62175"), n.e("81694"), n.e("67646"), n.e("4945")]).then(
                    n.bind(n, 34645),
                );
                return (n) => {
                    let { transitionState: i, onClose: s } = n;
                    return (0, r.jsx)(e, {
                        transitionState: i,
                        onClose: (e) => {
                            s(), A?.(e);
                        },
                        analyticsLocations: t,
                        analyticsLocation: h,
                        analyticsSourceLocation: E ?? h,
                        guildId: m,
                        totalNumberOfSlotsToAssign: I,
                        closeGuildPerksModal: g,
                        disablePremiumUpsell: T,
                        onSubscriptionConfirmation: y,
                        onSubscribeComplete: S,
                        applicationId: v,
                        intent: C,
                    });
                };
            },
            {
                modalKey: p,
                onCloseCallback: () => {
                    c.default.track(_.HAw.MODAL_DISMISSED, { type: _.JJy.PREMIUM_GUILD_PURCHASE_MODAL, location: h });
                },
                onCloseRequest: () => {
                    (0, s.closeModal)(p), A?.(!1);
                },
                contextKey: O,
            },
        );
}
