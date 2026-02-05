"use strict";
n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(157559),
    s = n(384904),
    o = n(73825),
    l = n(166403),
    u = n(954571),
    c = n(927578),
    d = n(652215),
    _ = n(985018);
let f = "guild-boost-purchase-modal";
async function p(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: p,
            analyticsSourceLocation: h,
            guildId: m,
            closeLayer: g,
            onCloseModal: E,
            totalNumberOfSlotsToAssign: A = 1,
            disablePremiumUpsell: I,
            onSubscribeComplete: T,
            onSubscriptionConfirmation: y,
            inPopout: S,
            applicationId: v,
            intent: C,
        } = e,
        b = S ? i.KX8 : i.SYi,
        N = l.A.getPremiumTypeSubscription();
    if (null != N && N.isPurchasedExternally && null != N.paymentGateway) {
        null != g && g(),
            a.A.show({
                title: _.intl.formatToPlainString(_.t["rTk9v/"], { paymentGatewayName: d.qmC[N.paymentGateway] }),
                body: _.intl.format(_.t.NY03WF, {
                    paymentGatewayName: d.qmC[N.paymentGateway],
                    subscriptionManagementLink: (0, c.tW)(N.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                }),
            });
        return;
    }
    Promise.all([(0, s.$o)(), (0, o.zS)()]);
    let R = () => {
        u.default.track(d.HAw.MODAL_DISMISSED, { type: d.JJy.PREMIUM_GUILD_PURCHASE_MODAL, location: p });
    };
    await (0, i.mMO)(
        async () => {
            let { default: e } = await Promise.all([n.e("62175"), n.e("62733"), n.e("67646"), n.e("24665")]).then(
                n.bind(n, 34645),
            );
            return (n) => {
                let { transitionState: i, onClose: a } = n;
                return (0, r.jsx)(e, {
                    transitionState: i,
                    onClose: (e) => {
                        a(), E?.(e);
                    },
                    analyticsLocations: t,
                    analyticsLocation: p,
                    analyticsSourceLocation: h ?? p,
                    guildId: m,
                    totalNumberOfSlotsToAssign: A,
                    closeGuildPerksModal: g,
                    disablePremiumUpsell: I,
                    onSubscriptionConfirmation: y,
                    onSubscribeComplete: T,
                    applicationId: v,
                    intent: C,
                });
            };
        },
        {
            modalKey: f,
            onCloseCallback: R,
            onCloseRequest: () => {
                (0, i.OoC)(f), E?.(!1);
            },
            contextKey: b,
        },
    );
}
