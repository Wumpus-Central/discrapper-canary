t.d(l, { A: () => s });
var n = t(429635),
    a = t(156454);
function s(e) {
    let { applicationId: l, guildId: t } = e,
        s = (0, n.A)({ applicationId: l, guildId: t }),
        { effectiveStorefront: i, isTestMode: r } = (0, a.A)({ applicationId: l });
    return { storefront: null != l ? (i ?? s?.storefront ?? null) : null, storefrontState: s?.state, isTestMode: r };
}
