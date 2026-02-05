n.d(t, { h: () => m });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(287809),
    r = n(166403),
    s = n(203982),
    o = n(927578),
    d = n(598653),
    c = n(788868),
    u = n(652215);
function m(e) {
    let { processedCode: t, channelContext: m, customGiftMessage: _, giftInfo: h } = e,
        p = !1,
        g = null,
        A = a.default.getCurrentUser(),
        f = (0, o.CC)(A?.premiumType, c.PremiumTypes.TIER_0);
    (0, l.mMO)(
        async () => {
            let { default: e } = await n.e("14439").then(n.bind(n, 67327));
            return (n) =>
                (0, i.jsx)(e, {
                    code: t,
                    channelContext: m,
                    customGiftMessage: _,
                    emojiName: h?.emoji?.name,
                    soundId: h?.sound?.id,
                    onComplete: (e, t) => {
                        (g = e),
                            t && ((p = t), e.isSubscription && null == r.A.getPremiumSubscription(!1) && (0, d.o)(!0));
                    },
                    ...n,
                });
        },
        {
            onCloseCallback: () => {
                p &&
                    null != g &&
                    !f &&
                    g.isSubscription &&
                    g?.subscriptionPlan?.premiumSubscriptionType === c.PremiumTypes.TIER_2 &&
                    s._.dispatch(u.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
