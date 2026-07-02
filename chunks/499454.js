n.d(e, { h: () => E });
var s = n(627968);
n(64700);
var i = n(192308),
    a = n(287809),
    o = n(166403),
    r = n(625494),
    l = n(428262),
    u = n(598653),
    c = n(202541),
    C = n(652215);
function E(t) {
    let { processedCode: e, channelContext: E, customGiftMessage: d, giftInfo: A } = t,
        T = !1,
        _ = null,
        I = a.default.getCurrentUser(),
        x = (0, l.CC)(I?.premiumType, c.PremiumTypes.TIER_0);
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("73646"), n.e("98329"), n.e("7200")]).then(n.bind(n, 361845));
            return (n) =>
                (0, s.jsx)(t, {
                    code: e,
                    channelContext: E,
                    customGiftMessage: d,
                    emojiName: A?.emoji?.name,
                    soundId: A?.sound?.id,
                    onComplete: (t, e) => {
                        (_ = t),
                            e && ((T = e), t.isSubscription && null == o.A.getPremiumSubscription(!1) && (0, u.o)(!0));
                    },
                    ...n,
                });
        },
        {
            onCloseCallback: () => {
                T &&
                    null != _ &&
                    !x &&
                    _.isSubscription &&
                    _?.subscriptionPlan?.premiumSubscriptionType === c.PremiumTypes.TIER_2 &&
                    r._.dispatch(C.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
