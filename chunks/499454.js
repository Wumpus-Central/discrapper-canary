var i = n(477900);
n(582128);
var s = n(192308),
    a = n(287809),
    r = n(166403),
    l = n(188567),
    o = n(448645),
    u = n(598653),
    c = n(682901),
    d = n(652215);
n.d(
    t,
    {},
    {
        h: function (e) {
            let { processedCode: t, channelContext: E, customGiftMessage: _, giftInfo: C } = e,
                f = !1,
                T = null,
                g = a.default.getCurrentUser(),
                m = (0, o.CC)(g?.premiumType, c.PremiumTypes.TIER_0);
            (0, s.mM)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e(489020),
                        n.e(419121),
                        n.e(149697),
                        n.e(60882),
                        n.e(919789),
                        n.e(183910),
                        n.e(295507),
                        n.e(332447),
                        n.e(910471),
                        n.e(430858),
                        n.e(257980),
                        n.e(198329),
                        n.e(523276),
                        n.e(77473),
                        n.e(812042),
                        n.e(547801),
                        n.e(162730),
                    ]).then(n.bind(n, 935263));
                    return (n) =>
                        (0, i.jsx)(e, {
                            code: t,
                            channelContext: E,
                            customGiftMessage: _,
                            emojiName: C?.emoji?.name,
                            soundId: C?.sound?.id,
                            onComplete: (e, t) => {
                                ((T = e),
                                    t &&
                                        ((f = t),
                                        e.isSubscription && null == r.A.getPremiumSubscription(!1) && (0, u.o)(!0)));
                            },
                            ...n,
                        });
                },
                {
                    onCloseCallback: () => {
                        f &&
                            null != T &&
                            !m &&
                            T.isSubscription &&
                            T?.subscriptionPlan?.premiumSubscriptionType === c.PremiumTypes.TIER_2 &&
                            l._.dispatch(d.jej.PREMIUM_SUBSCRIPTION_CREATED);
                    },
                },
            );
        },
    },
);
