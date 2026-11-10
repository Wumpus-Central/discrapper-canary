var i = n(485845),
    r = n(264322),
    a = n(333807),
    s = n(73510);
function l(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: i } = e;
    return (
        null != t ||
        null != n ||
        (null != i && Object.values(i).some((e) => e?.oauth2_install_params != null || e?.oauth2InstallParams != null))
    );
}
function o(e) {
    let { id: t, conjureProjectId: n } = e;
    return null != n || (null != t && (0, a.A)(t));
}
n.d(
    t,
    {},
    {
        Aj: l,
        Ie: function (e) {
            return l(e) && !o(e);
        },
        Kp: function (e) {
            let { customInstallUrl: t, installParams: n, integrationTypesConfig: r } = e;
            return (
                l({ customInstallUrl: t, installParams: n, integrationTypesConfig: r }) &&
                null != r &&
                i.b.USER_INSTALL in r
            );
        },
        Rx: function (e) {
            let { applicationId: t, channel: n, commandIntegrationTypes: a } = e;
            return !(
                (null != a && !a.includes(i.b.USER_INSTALL)) ||
                t === s.Ik.BUILT_IN ||
                r.Ay.hasUserStateApplication(t) ||
                (null != n &&
                    r.Ay.hasContextStateApplication({ applicationId: t, channelId: n.id, guildId: n.guild_id }))
            );
        },
        iv: o,
    },
);
