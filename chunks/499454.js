n.d(e, { h: () => E });
var i = n(477900);
n(582128);
var a = n(192308),
    l = n(287809),
    s = n(166403),
    r = n(625494),
    o = n(927578),
    u = n(598653),
    d = n(202541),
    c = n(652215);
function E(t) {
    let { processedCode: e, channelContext: E, customGiftMessage: _, giftInfo: C } = t,
        g = !1,
        h = null,
        f = l.default.getCurrentUser(),
        p = (0, o.CC)(f?.premiumType, d.PremiumTypes.TIER_0);
    (0, a.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
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
                (0, i.jsx)(t, {
                    code: e,
                    channelContext: E,
                    customGiftMessage: _,
                    emojiName: C?.emoji?.name,
                    soundId: C?.sound?.id,
                    onComplete: (t, e) => {
                        ((h = t),
                            e && ((g = e), t.isSubscription && null == s.A.getPremiumSubscription(!1) && (0, u.o)(!0)));
                    },
                    ...n,
                });
        },
        {
            onCloseCallback: () => {
                g &&
                    null != h &&
                    !p &&
                    h.isSubscription &&
                    h?.subscriptionPlan?.premiumSubscriptionType === d.PremiumTypes.TIER_2 &&
                    r._.dispatch(c.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
