n.d(t, {
    Dz: () => s,
    Eb: () => a,
    x$: () => l
});
var r = n(373793),
    i = n(213459),
    o = n(689079);
function a(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: r } = e;
    return null != t || null != n || (null != r && Object.values(r).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null));
}
function s(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: i } = e;
    return (
        a({
            customInstallUrl: t,
            installParams: n,
            integrationTypesConfig: i
        }) &&
        null != i &&
        r.Y.USER_INSTALL in i
    );
}
function l(e) {
    let { applicationId: t, channel: n, commandIntegrationTypes: a } = e;
    return !(
        (null != a && !a.includes(r.Y.USER_INSTALL)) ||
        t === o.bi.BUILT_IN ||
        i.ZP.hasUserStateApplication({
            applicationId: t,
            authorizedOnly: !0
        }) ||
        (null != n &&
            i.ZP.hasContextStateApplication({
                applicationId: t,
                channelId: n.id,
                guildId: n.guild_id
            }))
    );
}
