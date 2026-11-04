n.d(
    t,
    {},
    {
        f: function (e) {
            return null == e
                ? null
                : {
                      premiumSubscriptionType: e.premium_subscription_type,
                      premiumSource: e.premium_source,
                      premiumSubscriptionGroupRole: e.premium_subscription_group_role,
                  };
        },
    },
);
