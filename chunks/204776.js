"use strict";
n.d(t, { Ie: () => s, Kp: () => l, Rx: () => o });
var i = n(485845),
    r = n(264322),
    a = n(73510);
function s(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: i } = e;
    return (
        null != t ||
        null != n ||
        (null != i && Object.values(i).some((e) => e?.oauth2_install_params != null || e?.oauth2InstallParams != null))
    );
}
function l(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: r } = e;
    return (
        s({ customInstallUrl: t, installParams: n, integrationTypesConfig: r }) && null != r && i.b.USER_INSTALL in r
    );
}
function o(e) {
    let { applicationId: t, channel: n, commandIntegrationTypes: s } = e;
    return !(
        (null != s && !s.includes(i.b.USER_INSTALL)) ||
        t === a.Ik.BUILT_IN ||
        r.Ay.hasUserStateApplication(t) ||
        (null != n && r.Ay.hasContextStateApplication({ applicationId: t, channelId: n.id, guildId: n.guild_id }))
    );
}
