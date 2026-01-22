n.d(t, { A: () => _ }), n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(157559),
    s = n(384904),
    o = n(73825),
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
            totalNumberOfSlotsToAssign: b = 1,
            disablePremiumUpsell: y,
            onSubscribeComplete: O,
            onSubscriptionConfirmation: A,
            inPopout: v,
            applicationId: S,
            intent: I,
        } = e,
        T = v ? i.KX8 : i.SYi,
        C = l.A.getPremiumTypeSubscription();
    if (null != C && C.isPurchasedExternally && null != C.paymentGateway) {
        null != g && g(),
            a.A.show({
                title: f.intl.formatToPlainString(f.t["rTk9v/"], { paymentGatewayName: d.qmC[C.paymentGateway] }),
                body: f.intl.format(f.t.NY03WF, {
                    paymentGatewayName: d.qmC[C.paymentGateway],
                    subscriptionManagementLink: (0, u.tW)(C.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                }),
            });
        return;
    }
    Promise.all([(0, s.$o)(), (0, o.zS)()]);
    let N = () => {
        c.default.track(d.HAw.MODAL_DISMISSED, {
            type: d.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
            location: _,
        });
    };
    await (0, i.mMO)(
        async () => {
            let { default: e } = await n.e("48982").then(n.bind(n, 34645));
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
                    totalNumberOfSlotsToAssign: b,
                    closeGuildPerksModal: g,
                    disablePremiumUpsell: y,
                    onSubscriptionConfirmation: A,
                    onSubscribeComplete: O,
                    applicationId: S,
                    intent: I,
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
