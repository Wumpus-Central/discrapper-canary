"use strict";
n.d(t, { Ie: () => a, Kp: () => o, Rx: () => l });
var i = n(485845),
    r = n(264322),
    s = n(73510);
function a(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: i } = e;
    return (
        null != t ||
        null != n ||
        (null != i && Object.values(i).some((e) => e?.oauth2_install_params != null || e?.oauth2InstallParams != null))
    );
}
function o(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: r } = e;
    return (
        a({ customInstallUrl: t, installParams: n, integrationTypesConfig: r }) && null != r && i.b.USER_INSTALL in r
    );
}
function l(e) {
    let { applicationId: t, channel: n, commandIntegrationTypes: a } = e;
    return !(
        (null != a && !a.includes(i.b.USER_INSTALL)) ||
        t === s.Ik.BUILT_IN ||
        r.Ay.hasUserStateApplication(t) ||
        (null != n && r.Ay.hasContextStateApplication({ applicationId: t, channelId: n.id, guildId: n.guild_id }))
    );
}
