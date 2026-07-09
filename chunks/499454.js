l.d(t, { h: () => E });
var a = l(627968);
l(64700);
var s = l(192308),
    i = l(287809),
    n = l(166403),
    r = l(625494),
    o = l(428262),
    c = l(598653),
    d = l(202541),
    h = l(652215);
function E(e) {
    let { processedCode: t, channelContext: E, customGiftMessage: u, giftInfo: p } = e,
        T = !1,
        g = null,
        _ = i.default.getCurrentUser(),
        A = (0, o.CC)(_?.premiumType, d.PremiumTypes.TIER_0);
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                l.e("73646"),
                l.e("10471"),
                l.e("834"),
                l.e("98329"),
                l.e("63645"),
                l.e("7200"),
            ]).then(l.bind(l, 361845));
            return (l) =>
                (0, a.jsx)(e, {
                    code: t,
                    channelContext: E,
                    customGiftMessage: u,
                    emojiName: p?.emoji?.name,
                    soundId: p?.sound?.id,
                    onComplete: (e, t) => {
                        (g = e),
                            t && ((T = t), e.isSubscription && null == n.A.getPremiumSubscription(!1) && (0, c.o)(!0));
                    },
                    ...l,
                });
        },
        {
            onCloseCallback: () => {
                T &&
                    null != g &&
                    !A &&
                    g.isSubscription &&
                    g?.subscriptionPlan?.premiumSubscriptionType === d.PremiumTypes.TIER_2 &&
                    r._.dispatch(h.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
