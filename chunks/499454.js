n.d(t, { h: () => E });
var s = n(477900);
n(582128);
var i = n(192308),
    l = n(287809),
    a = n(166403),
    o = n(625494),
    u = n(158045),
    r = n(598653),
    c = n(202541),
    d = n(652215);
function E(e) {
    let { processedCode: t, channelContext: E, customGiftMessage: _, giftInfo: C } = e,
        h = !1,
        A = null,
        T = l.default.getCurrentUser(),
        p = (0, u.CC)(T?.premiumType, c.PremiumTypes.TIER_0);
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("489020"),
                n.e("419121"),
                n.e("162775"),
                n.e("60882"),
                n.e("919789"),
                n.e("183910"),
                n.e("76428"),
                n.e("77473"),
                n.e("25279"),
                n.e("517888"),
                n.e("811133"),
                n.e("910471"),
                n.e("477175"),
                n.e("198329"),
                n.e("523276"),
                n.e("812042"),
                n.e("307200"),
            ]).then(n.bind(n, 361845));
            return (n) =>
                (0, s.jsx)(e, {
                    code: t,
                    channelContext: E,
                    customGiftMessage: _,
                    emojiName: C?.emoji?.name,
                    soundId: C?.sound?.id,
                    onComplete: (e, t) => {
                        ((A = e),
                            t && ((h = t), e.isSubscription && null == a.A.getPremiumSubscription(!1) && (0, r.o)(!0)));
                    },
                    ...n,
                });
        },
        {
            onCloseCallback: () => {
                h &&
                    null != A &&
                    !p &&
                    A.isSubscription &&
                    A?.subscriptionPlan?.premiumSubscriptionType === c.PremiumTypes.TIER_2 &&
                    o._.dispatch(d.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
