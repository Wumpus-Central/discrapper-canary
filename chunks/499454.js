"use strict";
n.d(t, { h: () => _ });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(287809),
    s = n(166403),
    l = n(625494),
    o = n(428262),
    d = n(598653),
    c = n(202541),
    u = n(652215);
function _(e) {
    let { processedCode: t, channelContext: _, customGiftMessage: E, giftInfo: A } = e,
        h = !1,
        I = null,
        f = a.default.getCurrentUser(),
        p = (0, o.CC)(f?.premiumType, c.PremiumTypes.TIER_0);
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("36494"),
                n.e("10471"),
                n.e("834"),
                n.e("98329"),
                n.e("86026"),
                n.e("7200"),
            ]).then(n.bind(n, 361845));
            return (n) =>
                (0, i.jsx)(e, {
                    code: t,
                    channelContext: _,
                    customGiftMessage: E,
                    emojiName: A?.emoji?.name,
                    soundId: A?.sound?.id,
                    onComplete: (e, t) => {
                        (I = e),
                            t && ((h = t), e.isSubscription && null == s.A.getPremiumSubscription(!1) && (0, d.o)(!0));
                    },
                    ...n,
                });
        },
        {
            onCloseCallback: () => {
                h &&
                    null != I &&
                    !p &&
                    I.isSubscription &&
                    I?.subscriptionPlan?.premiumSubscriptionType === c.PremiumTypes.TIER_2 &&
                    l._.dispatch(u.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
