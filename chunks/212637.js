"use strict";
n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(157559),
    a = n(73825),
    o = n(323082),
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
            closeLayer: E,
            onCloseModal: g,
            totalNumberOfSlotsToAssign: A = 1,
            disablePremiumUpsell: I,
            onSubscribeComplete: T,
            onSubscriptionConfirmation: S,
            inPopout: y,
            applicationId: v,
            intent: N,
        } = e,
        C = y ? i.KX8 : i.SYi,
        R = l.A.getPremiumTypeSubscription();
    if (null != R && R.isPurchasedExternally && null != R.paymentGateway) {
        null != E && E(),
            s.A.show({
                title: _.intl.formatToPlainString(_.t["rTk9v/"], { paymentGatewayName: d.qmC[R.paymentGateway] }),
                body: _.intl.format(_.t.NY03WF, {
                    paymentGatewayName: d.qmC[R.paymentGateway],
                    subscriptionManagementLink: (0, c.tW)(R.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                }),
            });
        return;
    }
    Promise.all([(0, o.$o)(), (0, a.zS)()]);
    let O = () => {
        u.default.track(d.HAw.MODAL_DISMISSED, { type: d.JJy.PREMIUM_GUILD_PURCHASE_MODAL, location: p });
    };
    await (0, i.mMO)(
        async () => {
            let { default: e } = await Promise.all([n.e("62175"), n.e("62733"), n.e("67646"), n.e("91559")]).then(
                n.bind(n, 34645),
            );
            return (n) => {
                let { transitionState: i, onClose: s } = n;
                return (0, r.jsx)(e, {
                    transitionState: i,
                    onClose: (e) => {
                        s(), g?.(e);
                    },
                    analyticsLocations: t,
                    analyticsLocation: p,
                    analyticsSourceLocation: h ?? p,
                    guildId: m,
                    totalNumberOfSlotsToAssign: A,
                    closeGuildPerksModal: E,
                    disablePremiumUpsell: I,
                    onSubscriptionConfirmation: S,
                    onSubscribeComplete: T,
                    applicationId: v,
                    intent: N,
                });
            };
        },
        {
            modalKey: f,
            onCloseCallback: O,
            onCloseRequest: () => {
                (0, i.OoC)(f), g?.(!1);
            },
            contextKey: C,
        },
    );
}
