t.d(l, { A: () => a });
var n = t(429635),
    s = t(156454);
function a(e) {
    let { applicationId: l, guildId: t } = e,
        a = (0, n.A)({ applicationId: l, guildId: t }),
        { effectiveStorefront: i, isTestMode: r } = (0, s.A)({ applicationId: l });
    return { storefront: null != l ? (i ?? a?.storefront ?? null) : null, storefrontState: a?.state, isTestMode: r };
}
