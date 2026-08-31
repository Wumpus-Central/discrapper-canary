n.d(t, { h: () => _ });
var i = n(477900);
n(582128);
var l = n(192308),
    r = n(287809),
    s = n(166403),
    a = n(625494),
    o = n(158045),
    E = n(598653),
    c = n(202541),
    u = n(652215);
function _(e) {
    let { processedCode: t, channelContext: _, customGiftMessage: A, giftInfo: d } = e,
        T = !1,
        I = null,
        N = r.default.getCurrentUser(),
        R = (0, o.CC)(N?.premiumType, c.PremiumTypes.TIER_0);
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("183910"),
                n.e("910471"),
                n.e("262156"),
                n.e("198329"),
                n.e("307200"),
            ]).then(n.bind(n, 361845));
            return (n) =>
                (0, i.jsx)(e, {
                    code: t,
                    channelContext: _,
                    customGiftMessage: A,
                    emojiName: d?.emoji?.name,
                    soundId: d?.sound?.id,
                    onComplete: (e, t) => {
                        (I = e),
                            t && ((T = t), e.isSubscription && null == s.A.getPremiumSubscription(!1) && (0, E.o)(!0));
                    },
                    ...n,
                });
        },
        {
            onCloseCallback: () => {
                T &&
                    null != I &&
                    !R &&
                    I.isSubscription &&
                    I?.subscriptionPlan?.premiumSubscriptionType === c.PremiumTypes.TIER_2 &&
                    a._.dispatch(u.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
