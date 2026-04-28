n.d(e, { h: () => d });
var s = n(627968);
n(64700);
var i = n(192308),
    r = n(287809),
    a = n(166403),
    o = n(625494),
    l = n(927578),
    u = n(598653),
    c = n(788868),
    C = n(652215);
function d(t) {
    let { processedCode: e, channelContext: d, customGiftMessage: T, giftInfo: E } = t,
        A = !1,
        I = null,
        x = r.default.getCurrentUser(),
        f = (0, l.CC)(x?.premiumType, c.PremiumTypes.TIER_0);
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                n.e("77598"),
                n.e("73646"),
                n.e("35429"),
                n.e("10471"),
                n.e("23808"),
                n.e("63645"),
                n.e("834"),
                n.e("25279"),
                n.e("11133"),
                n.e("7200"),
            ]).then(n.bind(n, 361845));
            return (n) =>
                (0, s.jsx)(t, {
                    code: e,
                    channelContext: d,
                    customGiftMessage: T,
                    emojiName: E?.emoji?.name,
                    soundId: E?.sound?.id,
                    onComplete: (t, e) => {
                        (I = t),
                            e && ((A = e), t.isSubscription && null == a.A.getPremiumSubscription(!1) && (0, u.o)(!0));
                    },
                    ...n,
                });
        },
        {
            onCloseCallback: () => {
                A &&
                    null != I &&
                    !f &&
                    I.isSubscription &&
                    I?.subscriptionPlan?.premiumSubscriptionType === c.PremiumTypes.TIER_2 &&
                    o._.dispatch(C.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
