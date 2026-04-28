"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var a = n(231723),
    i = n(192308),
    l = n(157559),
    s = n(73825),
    o = n(323082),
    c = n(166403),
    d = n(954571),
    u = n(927578),
    _ = n(652215),
    p = n(985018);
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
            onSubscribeComplete: I,
            onSubscriptionConfirmation: y,
            inPopout: x,
            applicationId: S,
            intent: T,
        } = e,
        C = x ? a.KX : a.SY,
        N = c.A.getPremiumTypeSubscription();
    if (null != N && N.isPurchasedExternally && null != N.paymentGateway) {
        null != b && b(),
            l.A.show({
                title: p.intl.formatToPlainString(p.t["rTk9v/"], { paymentGatewayName: _.qmC[N.paymentGateway] }),
                body: p.intl.format(p.t.NY03WF, {
                    paymentGatewayName: _.qmC[N.paymentGateway],
                    subscriptionManagementLink: (0, u.tW)(N.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                }),
            });
        return;
    }
    Promise.all([(0, o.$o)(), (0, s.zS)()]),
        await (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("32292"),
                    n.e("24199"),
                    n.e("57036"),
                    n.e("88394"),
                    n.e("28367"),
                    n.e("45174"),
                    n.e("85519"),
                    n.e("11871"),
                    n.e("37266"),
                    n.e("55057"),
                    n.e("14976"),
                    n.e("63229"),
                    n.e("31988"),
                    n.e("55343"),
                    n.e("80527"),
                    n.e("21909"),
                    n.e("31825"),
                    n.e("23353"),
                    n.e("96123"),
                    n.e("7175"),
                    n.e("37249"),
                    n.e("14138"),
                    n.e("8971"),
                    n.e("88017"),
                    n.e("77404"),
                    n.e("1040"),
                    n.e("64615"),
                    n.e("17239"),
                    n.e("67849"),
                    n.e("64492"),
                    n.e("20861"),
                    n.e("36682"),
                    n.e("45723"),
                    n.e("56871"),
                    n.e("69601"),
                    n.e("63191"),
                    n.e("51444"),
                    n.e("62290"),
                    n.e("80973"),
                    n.e("48900"),
                    n.e("20735"),
                    n.e("27846"),
                    n.e("8306"),
                    n.e("10567"),
                    n.e("12542"),
                    n.e("84317"),
                    n.e("93858"),
                    n.e("62175"),
                    n.e("96817"),
                    n.e("67646"),
                    n.e("9968"),
                    n.e("98678"),
                ]).then(n.bind(n, 532299));
                return (n) => {
                    let { transitionState: a, onClose: i } = n;
                    return (0, r.jsx)(e, {
                        transitionState: a,
                        onClose: (e) => {
                            i(), A?.(e);
                        },
                        analyticsLocations: t,
                        analyticsLocation: m,
                        analyticsSourceLocation: h ?? m,
                        guildId: g,
                        totalNumberOfSlotsToAssign: E,
                        closeGuildPerksModal: b,
                        disablePremiumUpsell: v,
                        onSubscriptionConfirmation: y,
                        onSubscribeComplete: I,
                        applicationId: S,
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
                    (0, i.closeModal)(f), A?.(!1);
                },
                contextKey: C,
            },
        );
}
