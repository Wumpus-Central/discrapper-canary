"use strict";
a.d(t, { A: () => m });
var r = a(627968);
a(64700);
var l = a(231723),
    n = a(192308),
    i = a(157559),
    s = a(73825),
    o = a(323082),
    d = a(166403),
    c = a(954571),
    u = a(927578),
    h = a(652215),
    p = a(985018);
let _ = "guild-boost-purchase-modal";
async function m(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: m,
            analyticsSourceLocation: b,
            guildId: g,
            closeLayer: f,
            onCloseModal: x,
            totalNumberOfSlotsToAssign: v = 1,
            disablePremiumUpsell: A,
            onSubscribeComplete: E,
            onSubscriptionConfirmation: y,
            inPopout: j,
            applicationId: I,
            intent: S,
        } = e,
        C = j ? l.KX : l.SY,
        T = d.A.getPremiumTypeSubscription();
    if (null != T && T.isPurchasedExternally && null != T.paymentGateway) {
        null != f && f(),
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
        await (0, n.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    a.e("24199"),
                    a.e("57036"),
                    a.e("70474"),
                    a.e("61943"),
                    a.e("76640"),
                    a.e("7175"),
                    a.e("55202"),
                    a.e("23353"),
                    a.e("73667"),
                    a.e("11250"),
                    a.e("14138"),
                    a.e("3442"),
                    a.e("85071"),
                    a.e("88017"),
                    a.e("70994"),
                    a.e("17239"),
                    a.e("24267"),
                    a.e("51793"),
                    a.e("58164"),
                    a.e("81645"),
                    a.e("36682"),
                    a.e("63070"),
                    a.e("25370"),
                    a.e("28367"),
                    a.e("96313"),
                    a.e("27411"),
                    a.e("49318"),
                    a.e("12721"),
                    a.e("58283"),
                    a.e("17601"),
                    a.e("8087"),
                    a.e("55057"),
                    a.e("60471"),
                    a.e("42257"),
                    a.e("48563"),
                    a.e("27355"),
                    a.e("67876"),
                    a.e("62175"),
                    a.e("81694"),
                    a.e("67646"),
                    a.e("83048"),
                ]).then(a.bind(a, 34645));
                return (a) => {
                    let { transitionState: l, onClose: n } = a;
                    return (0, r.jsx)(e, {
                        transitionState: l,
                        onClose: (e) => {
                            n(), x?.(e);
                        },
                        analyticsLocations: t,
                        analyticsLocation: m,
                        analyticsSourceLocation: b ?? m,
                        guildId: g,
                        totalNumberOfSlotsToAssign: v,
                        closeGuildPerksModal: f,
                        disablePremiumUpsell: A,
                        onSubscriptionConfirmation: y,
                        onSubscribeComplete: E,
                        applicationId: I,
                        intent: S,
                    });
                };
            },
            {
                modalKey: _,
                onCloseCallback: () => {
                    c.default.track(h.HAw.MODAL_DISMISSED, { type: h.JJy.PREMIUM_GUILD_PURCHASE_MODAL, location: m });
                },
                onCloseRequest: () => {
                    (0, n.closeModal)(_), x?.(!1);
                },
                contextKey: C,
            },
        );
}
