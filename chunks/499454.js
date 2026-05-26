n.d(e, { h: () => d });
var s = n(627968);
n(64700);
var i = n(192308),
    a = n(287809),
    l = n(166403),
    r = n(625494),
    o = n(428262),
    u = n(598653),
    c = n(788868),
    C = n(652215);
function d(t) {
    let { processedCode: e, channelContext: d, customGiftMessage: E, giftInfo: A } = t,
        T = !1,
        x = null,
        I = a.default.getCurrentUser(),
        _ = (0, o.CC)(I?.premiumType, c.PremiumTypes.TIER_0);
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                n.e("92646"),
                n.e("61097"),
                n.e("10471"),
                n.e("35429"),
                n.e("63645"),
                n.e("834"),
                n.e("25279"),
                n.e("11133"),
                n.e("98329"),
                n.e("7200"),
            ]).then(n.bind(n, 361845));
            return (n) =>
                (0, s.jsx)(t, {
                    code: e,
                    channelContext: d,
                    customGiftMessage: E,
                    emojiName: A?.emoji?.name,
                    soundId: A?.sound?.id,
                    onComplete: (t, e) => {
                        (x = t),
                            e && ((T = e), t.isSubscription && null == l.A.getPremiumSubscription(!1) && (0, u.o)(!0));
                    },
                    ...n,
                });
        },
        {
            onCloseCallback: () => {
                T &&
                    null != x &&
                    !_ &&
                    x.isSubscription &&
                    x?.subscriptionPlan?.premiumSubscriptionType === c.PremiumTypes.TIER_2 &&
                    r._.dispatch(C.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
