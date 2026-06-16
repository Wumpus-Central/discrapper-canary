n.d(e, { h: () => E });
var s = n(627968);
n(64700);
var i = n(192308),
    a = n(287809),
    l = n(166403),
    o = n(625494),
    r = n(428262),
    u = n(598653),
    c = n(788868),
    C = n(652215);
function E(t) {
    let { processedCode: e, channelContext: E, customGiftMessage: d, giftInfo: A } = t,
        T = !1,
        _ = null,
        x = a.default.getCurrentUser(),
        I = (0, r.CC)(x?.premiumType, c.PremiumTypes.TIER_0);
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                n.e("18240"),
                n.e("73646"),
                n.e("10471"),
                n.e("62156"),
                n.e("98329"),
                n.e("88889"),
                n.e("11133"),
                n.e("7200"),
            ]).then(n.bind(n, 361845));
            return (n) =>
                (0, s.jsx)(t, {
                    code: e,
                    channelContext: E,
                    customGiftMessage: d,
                    emojiName: A?.emoji?.name,
                    soundId: A?.sound?.id,
                    onComplete: (t, e) => {
                        (_ = t),
                            e && ((T = e), t.isSubscription && null == l.A.getPremiumSubscription(!1) && (0, u.o)(!0));
                    },
                    ...n,
                });
        },
        {
            onCloseCallback: () => {
                T &&
                    null != _ &&
                    !I &&
                    _.isSubscription &&
                    _?.subscriptionPlan?.premiumSubscriptionType === c.PremiumTypes.TIER_2 &&
                    o._.dispatch(C.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
