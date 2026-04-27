a.d(t, { A: () => f });
var r = a(627968);
a(64700);
var n = a(231723),
    l = a(192308),
    i = a(157559),
    s = a(73825),
    o = a(323082),
    c = a(166403),
    d = a(954571),
    u = a(927578),
    h = a(652215),
    p = a(985018);
let m = "guild-boost-purchase-modal";
async function f(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: f,
            analyticsSourceLocation: b,
            guildId: _,
            closeLayer: g,
            onCloseModal: x,
            totalNumberOfSlotsToAssign: v = 1,
            disablePremiumUpsell: A,
            onSubscribeComplete: y,
            onSubscriptionConfirmation: E,
            inPopout: I,
            applicationId: j,
            intent: S,
        } = e,
        C = I ? n.KX : n.SY,
        T = c.A.getPremiumTypeSubscription();
    if (null != T && T.isPurchasedExternally && null != T.paymentGateway) {
        null != g && g(),
            i.A.show({
                title: p.intl.formatToPlainString(p.t["rTk9v/"], { paymentGatewayName: h.qmC[T.paymentGateway] }),
                body: p.intl.format(p.t.NY03WF, {
                    paymentGatewayName: h.qmC[T.paymentGateway],
                    subscriptionManagementLink: (0, u.tW)(T.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                }),
            });
        return;
    }
    Promise.all([(0, o.$o)(), (0, s.zS)()]),
        await (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    a.e("32292"),
                    a.e("24199"),
                    a.e("57036"),
                    a.e("88394"),
                    a.e("28367"),
                    a.e("45174"),
                    a.e("85519"),
                    a.e("11871"),
                    a.e("37266"),
                    a.e("55057"),
                    a.e("34717"),
                    a.e("63229"),
                    a.e("31988"),
                    a.e("55343"),
                    a.e("80527"),
                    a.e("58710"),
                    a.e("31825"),
                    a.e("23353"),
                    a.e("7175"),
                    a.e("37249"),
                    a.e("14138"),
                    a.e("8971"),
                    a.e("85071"),
                    a.e("88017"),
                    a.e("1040"),
                    a.e("64615"),
                    a.e("17239"),
                    a.e("66950"),
                    a.e("58164"),
                    a.e("38229"),
                    a.e("20861"),
                    a.e("36682"),
                    a.e("45723"),
                    a.e("56871"),
                    a.e("69601"),
                    a.e("47511"),
                    a.e("51444"),
                    a.e("62290"),
                    a.e("48900"),
                    a.e("80973"),
                    a.e("82731"),
                    a.e("20735"),
                    a.e("27846"),
                    a.e("8306"),
                    a.e("10567"),
                    a.e("12542"),
                    a.e("84317"),
                    a.e("93858"),
                    a.e("62175"),
                    a.e("96817"),
                    a.e("67646"),
                    a.e("67443"),
                    a.e("49600"),
                ]).then(a.bind(a, 532299));
                return (a) => {
                    let { transitionState: n, onClose: l } = a;
                    return (0, r.jsx)(e, {
                        transitionState: n,
                        onClose: (e) => {
                            l(), x?.(e);
                        },
                        analyticsLocations: t,
                        analyticsLocation: f,
                        analyticsSourceLocation: b ?? f,
                        guildId: _,
                        totalNumberOfSlotsToAssign: v,
                        closeGuildPerksModal: g,
                        disablePremiumUpsell: A,
                        onSubscriptionConfirmation: E,
                        onSubscribeComplete: y,
                        applicationId: j,
                        intent: S,
                    });
                };
            },
            {
                modalKey: m,
                onCloseCallback: () => {
                    d.default.track(h.HAw.MODAL_DISMISSED, { type: h.JJy.PREMIUM_GUILD_PURCHASE_MODAL, location: f });
                },
                onCloseRequest: () => {
                    (0, l.closeModal)(m), x?.(!1);
                },
                contextKey: C,
            },
        );
}
