var s = t(429635),
    n = t(156454);
t.d(
    l,
    {},
    {
        A: function (e) {
            let { applicationId: l, guildId: t } = e,
                a = (0, s.A)({ applicationId: l, guildId: t }),
                { effectiveStorefront: i, isTestMode: r } = (0, n.A)({ applicationId: l });
            return {
                storefront: null != l ? (i ?? a?.storefront ?? null) : null,
                storefrontState: a?.state,
                isTestMode: r,
            };
        },
    },
);
