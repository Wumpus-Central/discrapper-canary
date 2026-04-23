n.d(t, { h: () => m });
var i = n(627968);
n(64700);
var l = n(192308),
    a = n(287809),
    s = n(166403),
    r = n(203982),
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
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("3630"), n.e("46707")]).then(n.bind(n, 67327));
            return (n) =>
                (0, i.jsx)(e, {
                    code: t,
                    channelContext: m,
                    customGiftMessage: _,
                    emojiName: h?.emoji?.name,
                    soundId: h?.sound?.id,
                    onComplete: (e, t) => {
                        (g = e),
                            t && ((p = t), e.isSubscription && null == s.A.getPremiumSubscription(!1) && (0, d.o)(!0));
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
                    r._.dispatch(u.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
