n.d(t, {
    Dz: () => s,
    Eb: () => o,
    x$: () => l
});
var r = n(373793),
    i = n(213459),
    a = n(689079);
function o(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: r } = e;
    return null != t || null != n || (null != r && Object.values(r).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null));
}
function s(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: i } = e;
    return (
        o({
            customInstallUrl: t,
            installParams: n,
            integrationTypesConfig: i
        }) &&
        null != i &&
        r.Y.USER_INSTALL in i
    );
}
function l(e) {
    let { applicationId: t, channel: n, commandIntegrationTypes: o } = e;
    return !(
        (null != o && !o.includes(r.Y.USER_INSTALL)) ||
        t === a.bi.BUILT_IN ||
        i.ZP.hasUserStateApplication(t) ||
        (null != n &&
            i.ZP.hasContextStateApplication({
                applicationId: t,
                channelId: n.id,
                guildId: n.guild_id
            }))
    );
}
