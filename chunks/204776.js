"use strict";
n.d(t, { Ie: () => s, Kp: () => o, Rx: () => l });
var r = n(485845),
    i = n(264322),
    a = n(73510);
function s(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: r } = e;
    return (
        null != t ||
        null != n ||
        (null != r && Object.values(r).some((e) => e?.oauth2_install_params != null || e?.oauth2InstallParams != null))
    );
}
function o(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: i } = e;
    return (
        s({ customInstallUrl: t, installParams: n, integrationTypesConfig: i }) && null != i && r.b.USER_INSTALL in i
    );
}
function l(e) {
    let { applicationId: t, channel: n, commandIntegrationTypes: s } = e;
    return !(
        (null != s && !s.includes(r.b.USER_INSTALL)) ||
        t === a.Ik.BUILT_IN ||
        i.Ay.hasUserStateApplication(t) ||
        (null != n && i.Ay.hasContextStateApplication({ applicationId: t, channelId: n.id, guildId: n.guild_id }))
    );
}
