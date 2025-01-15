n.d(t, {
    P: function () {
        return r;
    }
});
var i = n(192379),
    a = n(135431);
function r(e, t) {
    let n = i.useMemo(
        () =>
            null != e &&
            (0, a.Eb)({
                customInstallUrl: e.custom_install_url,
                installParams: e.install_params,
                integrationTypesConfig: e.integration_types_config
            }),
        [e]
    );
    return {
        canInstall: n,
        install: i.useCallback(
            (n) => {
                if (null != e)
                    (0, a.LO)({
                        applicationId: e.id,
                        customInstallUrl: e.custom_install_url,
                        installParams: e.install_params,
                        integrationTypesConfig: e.integration_types_config,
                        guildId: null != t ? t : void 0,
                        source: n
                    });
            },
            [e, t]
        )
    };
}
