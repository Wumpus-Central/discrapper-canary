n.d(t, { h: () => c });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(287809),
    l = n(166403),
    a = n(625494),
    d = n(927578),
    o = n(598653),
    _ = n(788868),
    u = n(652215);
function c(e) {
    let { processedCode: t, channelContext: c, customGiftMessage: E, giftInfo: C } = e,
        h = !1,
        T = null,
        A = s.default.getCurrentUser(),
        I = (0, d.CC)(A?.premiumType, _.PremiumTypes.TIER_0);
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("7200"), n.e("48227")]).then(n.bind(n, 361845));
            return (n) =>
                (0, i.jsx)(e, {
                    code: t,
                    channelContext: c,
                    customGiftMessage: E,
                    emojiName: C?.emoji?.name,
                    soundId: C?.sound?.id,
                    onComplete: (e, t) => {
                        (T = e),
                            t && ((h = t), e.isSubscription && null == l.A.getPremiumSubscription(!1) && (0, o.o)(!0));
                    },
                    ...n,
                });
        },
        {
            onCloseCallback: () => {
                h &&
                    null != T &&
                    !I &&
                    T.isSubscription &&
                    T?.subscriptionPlan?.premiumSubscriptionType === _.PremiumTypes.TIER_2 &&
                    a._.dispatch(u.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
