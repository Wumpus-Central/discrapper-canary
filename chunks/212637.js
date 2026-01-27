n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(157559),
    o = n(384904),
    s = n(73825),
    l = n(166403),
    c = n(954571),
    u = n(927578),
    d = n(652215),
    f = n(985018);
let p = "guild-boost-purchase-modal";
async function _(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: _,
            analyticsSourceLocation: h,
            guildId: m,
            closeLayer: g,
            onCloseModal: E,
            totalNumberOfSlotsToAssign: y = 1,
            disablePremiumUpsell: b,
            onSubscribeComplete: O,
            onSubscriptionConfirmation: v,
            inPopout: A,
            applicationId: I,
            intent: S,
        } = e,
        T = A ? i.KX8 : i.SYi,
        C = l.A.getPremiumTypeSubscription();
    if (null != C && C.isPurchasedExternally && null != C.paymentGateway) {
        null != g && g(),
            a.A.show({
                title: f.intl.formatToPlainString(f.t["rTk9v/"], {
                    paymentGatewayName: d.qmC[C.paymentGateway],
                }),
                body: f.intl.format(f.t.NY03WF, {
                    paymentGatewayName: d.qmC[C.paymentGateway],
                    subscriptionManagementLink: (0, u.tW)(C.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                }),
            });
        return;
    }
    Promise.all([(0, o.$o)(), (0, s.zS)()]);
    let N = () => {
        c.default.track(d.HAw.MODAL_DISMISSED, {
            type: d.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
            location: _,
        });
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
                        a(), null == E || E(e);
                    },
                    analyticsLocations: t,
                    analyticsLocation: _,
                    analyticsSourceLocation: null != h ? h : _,
                    guildId: m,
                    totalNumberOfSlotsToAssign: y,
                    closeGuildPerksModal: g,
                    disablePremiumUpsell: b,
                    onSubscriptionConfirmation: v,
                    onSubscribeComplete: O,
                    applicationId: I,
                    intent: S,
                });
            };
        },
        {
            modalKey: p,
            onCloseCallback: N,
            onCloseRequest: () => {
                (0, i.OoC)(p), null == E || E(!1);
            },
            contextKey: T,
        },
    );
}
