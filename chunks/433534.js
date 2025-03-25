n.d(t, {
    D: () => o,
    E: () => i
});
var r = n(373793);
function i(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: r } = e;
    return null != t || null != n || (null != r && Object.values(r).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null));
}
function o(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: o } = e;
    return (
        i({
            customInstallUrl: t,
            installParams: n,
            integrationTypesConfig: o
        }) &&
        null != o &&
        r.Y.USER_INSTALL in o
    );
}
