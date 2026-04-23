"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var r = n(231723),
    s = n(192308),
    a = n(157559),
    o = n(73825),
    l = n(323082),
    d = n(166403),
    _ = n(954571),
    u = n(927578),
    c = n(652215),
    E = n(985018);
let h = "guild-boost-purchase-modal";
async function m(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: m,
            analyticsSourceLocation: f,
            guildId: g,
            closeLayer: p,
            onCloseModal: A,
            totalNumberOfSlotsToAssign: I = 1,
            disablePremiumUpsell: T,
            onSubscribeComplete: S,
            onSubscriptionConfirmation: N,
            inPopout: C,
            applicationId: R,
            intent: O,
        } = e,
        y = C ? r.KX : r.SY,
        v = d.A.getPremiumTypeSubscription();
    if (null != v && v.isPurchasedExternally && null != v.paymentGateway) {
        null != p && p(),
            a.A.show({
                title: E.intl.formatToPlainString(E.t["rTk9v/"], { paymentGatewayName: c.qmC[v.paymentGateway] }),
                body: E.intl.format(E.t.NY03WF, {
                    paymentGatewayName: c.qmC[v.paymentGateway],
                    subscriptionManagementLink: (0, u.tW)(v.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                }),
            });
        return;
    }
    Promise.all([(0, l.$o)(), (0, o.zS)()]),
        await (0, s.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("62175"),
                    n.e("96817"),
                    n.e("67646"),
                    n.e("21309"),
                    n.e("75636"),
                ]).then(n.bind(n, 532299));
                return (n) => {
                    let { transitionState: r, onClose: s } = n;
                    return (0, i.jsx)(e, {
                        transitionState: r,
                        onClose: (e) => {
                            s(), A?.(e);
                        },
                        analyticsLocations: t,
                        analyticsLocation: m,
                        analyticsSourceLocation: f ?? m,
                        guildId: g,
                        totalNumberOfSlotsToAssign: I,
                        closeGuildPerksModal: p,
                        disablePremiumUpsell: T,
                        onSubscriptionConfirmation: N,
                        onSubscribeComplete: S,
                        applicationId: R,
                        intent: O,
                    });
                };
            },
            {
                modalKey: h,
                onCloseCallback: () => {
                    _.default.track(c.HAw.MODAL_DISMISSED, { type: c.JJy.PREMIUM_GUILD_PURCHASE_MODAL, location: m });
                },
                onCloseRequest: () => {
                    (0, s.closeModal)(h), A?.(!1);
                },
                contextKey: y,
            },
        );
}
