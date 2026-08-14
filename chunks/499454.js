n.d(t, { h: () => u });
var i = n(477900);
n(582128);
var l = n(192308),
    r = n(287809),
    s = n(166403),
    a = n(625494),
    E = n(158045),
    o = n(598653),
    c = n(202541),
    _ = n(652215);
function u(e) {
    let { processedCode: t, channelContext: u, customGiftMessage: A, giftInfo: T } = e,
        d = !1,
        I = null,
        N = r.default.getCurrentUser(),
        R = (0, E.CC)(N?.premiumType, c.PremiumTypes.TIER_0);
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("71366"),
                n.e("10471"),
                n.e("62156"),
                n.e("98329"),
                n.e("7200"),
            ]).then(n.bind(n, 361845));
            return (n) =>
                (0, i.jsx)(e, {
                    code: t,
                    channelContext: u,
                    customGiftMessage: A,
                    emojiName: T?.emoji?.name,
                    soundId: T?.sound?.id,
                    onComplete: (e, t) => {
                        (I = e),
                            t && ((d = t), e.isSubscription && null == s.A.getPremiumSubscription(!1) && (0, o.o)(!0));
                    },
                    ...n,
                });
        },
        {
            onCloseCallback: () => {
                d &&
                    null != I &&
                    !R &&
                    I.isSubscription &&
                    I?.subscriptionPlan?.premiumSubscriptionType === c.PremiumTypes.TIER_2 &&
                    a._.dispatch(_.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
