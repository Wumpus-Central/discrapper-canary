"use strict";
r.d(t, { A: () => m });
var n = r(627968);
r(64700);
var i = r(231723),
    a = r(192308),
    s = r(157559),
    l = r(73825),
    o = r(323082),
    c = r(166403),
    d = r(954571),
    u = r(927578),
    _ = r(652215),
    p = r(985018);
let f = "guild-boost-purchase-modal";
async function m(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: m,
            analyticsSourceLocation: h,
            guildId: g,
            closeLayer: b,
            onCloseModal: A,
            totalNumberOfSlotsToAssign: E = 1,
            disablePremiumUpsell: v,
            onSubscribeComplete: y,
            onSubscriptionConfirmation: I,
            inPopout: S,
            applicationId: x,
            intent: T,
        } = e,
        C = S ? i.KX : i.SY,
        R = c.A.getPremiumTypeSubscription();
    if (null != R && R.isPurchasedExternally && null != R.paymentGateway) {
        null != b && b(),
            s.A.show({
                title: p.intl.formatToPlainString(p.t["rTk9v/"], { paymentGatewayName: _.qmC[R.paymentGateway] }),
                body: p.intl.format(p.t.NY03WF, {
                    paymentGatewayName: _.qmC[R.paymentGateway],
                    subscriptionManagementLink: (0, u.tW)(R.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                }),
            });
        return;
    }
    Promise.all([(0, o.$o)(), (0, l.zS)()]),
        await (0, a.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    r.e("32292"),
                    r.e("24199"),
                    r.e("57036"),
                    r.e("88394"),
                    r.e("28367"),
                    r.e("45174"),
                    r.e("85519"),
                    r.e("11871"),
                    r.e("37266"),
                    r.e("55057"),
                    r.e("14976"),
                    r.e("63229"),
                    r.e("31988"),
                    r.e("55343"),
                    r.e("80527"),
                    r.e("58710"),
                    r.e("31825"),
                    r.e("23353"),
                    r.e("7175"),
                    r.e("37249"),
                    r.e("14138"),
                    r.e("8971"),
                    r.e("85071"),
                    r.e("88017"),
                    r.e("1040"),
                    r.e("64615"),
                    r.e("17239"),
                    r.e("66950"),
                    r.e("58164"),
                    r.e("38229"),
                    r.e("20861"),
                    r.e("36682"),
                    r.e("45723"),
                    r.e("56871"),
                    r.e("69601"),
                    r.e("47511"),
                    r.e("51444"),
                    r.e("62290"),
                    r.e("48900"),
                    r.e("80973"),
                    r.e("82731"),
                    r.e("20735"),
                    r.e("27846"),
                    r.e("8306"),
                    r.e("10567"),
                    r.e("12542"),
                    r.e("84317"),
                    r.e("93858"),
                    r.e("62175"),
                    r.e("96817"),
                    r.e("67646"),
                    r.e("67443"),
                    r.e("49600"),
                ]).then(r.bind(r, 532299));
                return (r) => {
                    let { transitionState: i, onClose: a } = r;
                    return (0, n.jsx)(e, {
                        transitionState: i,
                        onClose: (e) => {
                            a(), A?.(e);
                        },
                        analyticsLocations: t,
                        analyticsLocation: m,
                        analyticsSourceLocation: h ?? m,
                        guildId: g,
                        totalNumberOfSlotsToAssign: E,
                        closeGuildPerksModal: b,
                        disablePremiumUpsell: v,
                        onSubscriptionConfirmation: I,
                        onSubscribeComplete: y,
                        applicationId: x,
                        intent: T,
                    });
                };
            },
            {
                modalKey: f,
                onCloseCallback: () => {
                    d.default.track(_.HAw.MODAL_DISMISSED, { type: _.JJy.PREMIUM_GUILD_PURCHASE_MODAL, location: m });
                },
                onCloseRequest: () => {
                    (0, a.closeModal)(f), A?.(!1);
                },
                contextKey: C,
            },
        );
}
