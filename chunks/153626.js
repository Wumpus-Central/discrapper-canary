t.d(
    n,
    {},
    {
        $: function (i) {
            return null != i && i.isSubscription && void 0 === i.giftSubscriptionAgreement;
        },
        m: function (i) {
            return null != i.giftSubscriptionAgreement;
        },
    },
);
