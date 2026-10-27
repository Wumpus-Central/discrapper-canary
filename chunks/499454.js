n.d(t, { h: () => E });
var i = n(477900);
n(582128);
var a = n(192308),
    s = n(287809),
    l = n(166403),
    r = n(625494),
    o = n(24482),
    u = n(598653),
    c = n(202541),
    d = n(652215);
function E(e) {
    let { processedCode: t, channelContext: E, customGiftMessage: _, giftInfo: C } = e,
        f = !1,
        g = null,
        T = s.default.getCurrentUser(),
        p = (0, o.CC)(T?.premiumType, c.PremiumTypes.TIER_0);
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("489020"),
                n.e("419121"),
                n.e("149697"),
                n.e("60882"),
                n.e("919789"),
                n.e("183910"),
                n.e("76428"),
                n.e("517888"),
                n.e("910471"),
                n.e("811133"),
                n.e("477175"),
                n.e("198329"),
                n.e("523276"),
                n.e("77473"),
                n.e("812042"),
                n.e("25279"),
                n.e("307200"),
            ]).then(n.bind(n, 361845));
            return (n) =>
                (0, i.jsx)(e, {
                    code: t,
                    channelContext: E,
                    customGiftMessage: _,
                    emojiName: C?.emoji?.name,
                    soundId: C?.sound?.id,
                    onComplete: (e, t) => {
                        ((g = e),
                            t && ((f = t), e.isSubscription && null == l.A.getPremiumSubscription(!1) && (0, u.o)(!0)));
                    },
                    ...n,
                });
        },
        {
            onCloseCallback: () => {
                f &&
                    null != g &&
                    !p &&
                    g.isSubscription &&
                    g?.subscriptionPlan?.premiumSubscriptionType === c.PremiumTypes.TIER_2 &&
                    r._.dispatch(d.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
