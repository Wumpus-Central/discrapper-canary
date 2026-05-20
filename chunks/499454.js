"use strict";
n.d(t, { h: () => _ });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(287809),
    a = n(166403),
    o = n(625494),
    l = n(428262),
    u = n(598653),
    c = n(788868),
    d = n(652215);
function _(e) {
    let { processedCode: t, channelContext: _, customGiftMessage: f, giftInfo: h } = e,
        p = !1,
        E = null,
        m = s.default.getCurrentUser(),
        g = (0, l.CC)(m?.premiumType, c.PremiumTypes.TIER_0);
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("41816"),
                n.e("95700"),
                n.e("10471"),
                n.e("35429"),
                n.e("63645"),
                n.e("834"),
                n.e("25279"),
                n.e("11133"),
                n.e("98329"),
                n.e("7200"),
            ]).then(n.bind(n, 361845));
            return (n) =>
                (0, i.jsx)(e, {
                    code: t,
                    channelContext: _,
                    customGiftMessage: f,
                    emojiName: h?.emoji?.name,
                    soundId: h?.sound?.id,
                    onComplete: (e, t) => {
                        (E = e),
                            t && ((p = t), e.isSubscription && null == a.A.getPremiumSubscription(!1) && (0, u.o)(!0));
                    },
                    ...n,
                });
        },
        {
            onCloseCallback: () => {
                p &&
                    null != E &&
                    !g &&
                    E.isSubscription &&
                    E?.subscriptionPlan?.premiumSubscriptionType === c.PremiumTypes.TIER_2 &&
                    o._.dispatch(d.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
