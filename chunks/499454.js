n.d(e, { h: () => C });
var s = n(627968);
n(64700);
var i = n(192308),
    l = n(287809),
    a = n(166403),
    r = n(625494),
    o = n(927578),
    c = n(598653),
    u = n(788868),
    d = n(652215);
function C(t) {
    let { processedCode: e, channelContext: C, customGiftMessage: h, giftInfo: A } = t,
        T = !1,
        E = null,
        g = l.default.getCurrentUser(),
        f = (0, o.CC)(g?.premiumType, u.PremiumTypes.TIER_0);
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                n.e("80848"),
                n.e("97219"),
                n.e("73646"),
                n.e("35429"),
                n.e("10471"),
                n.e("23808"),
                n.e("63645"),
                n.e("834"),
                n.e("25279"),
                n.e("99518"),
                n.e("11133"),
                n.e("98329"),
                n.e("7200"),
            ]).then(n.bind(n, 361845));
            return (n) =>
                (0, s.jsx)(t, {
                    code: e,
                    channelContext: C,
                    customGiftMessage: h,
                    emojiName: A?.emoji?.name,
                    soundId: A?.sound?.id,
                    onComplete: (t, e) => {
                        (E = t),
                            e && ((T = e), t.isSubscription && null == a.A.getPremiumSubscription(!1) && (0, c.o)(!0));
                    },
                    ...n,
                });
        },
        {
            onCloseCallback: () => {
                T &&
                    null != E &&
                    !f &&
                    E.isSubscription &&
                    E?.subscriptionPlan?.premiumSubscriptionType === u.PremiumTypes.TIER_2 &&
                    r._.dispatch(d.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
