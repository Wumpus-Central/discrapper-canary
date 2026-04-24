"use strict";
n.d(t, { Z: () => d, o: () => c }), n(323874), n(14289), n(35956);
var i = n(607399),
    a = n(136722),
    s = n(200330),
    l = n(954571),
    r = n(76843),
    o = n(652215);
function c(e) {
    let {
        applicationId: t,
        customInstallUrl: n,
        installParams: c,
        integrationTypesConfig: d,
        guildId: u,
        channelId: h,
        disableGuildSelect: p,
        source: m,
        oauth2Callback: _,
    } = e;
    if (null != n) {
        l.default.track(o.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: u,
            auth_type: "custom_url",
            source: m,
            device_platform: i.Fr ? "mobile_web" : "desktop_web",
        }),
            (0, r.h)({ href: n });
        return;
    }
    if (null != d && Object.values(d).some((e) => e?.oauth2_install_params != null || e?.oauth2InstallParams != null)) {
        l.default.track(o.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: u,
            auth_type: "in_app",
            source: m,
            device_platform: i.Fr ? "mobile_web" : "desktop_web",
        }),
            (0, s.openOAuth2Modal)({ clientId: t, guildId: u, channelId: h, disableGuildSelect: p, callback: _ });
        return;
    }
    null != c &&
        (l.default.track(o.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: u,
            auth_type: "in_app",
            source: m,
            device_platform: i.Fr ? "mobile_web" : "desktop_web",
        }),
        (0, s.openOAuth2Modal)({
            clientId: t,
            guildId: u,
            channelId: h,
            disableGuildSelect: p,
            scopes: c.scopes,
            permissions: null != c.permissions ? a.iu(c.permissions) : void 0,
            callback: _,
        }));
}
function d(e) {
    let { applicationId: t, customInstallUrl: n, installParams: i, integrationTypesConfig: a } = e;
    if (null != n) return null;
    if (null != a && Object.values(a).some((e) => e?.oauth2_install_params != null || e?.oauth2InstallParams != null)) {
        let e = new URL(o.BVt.OAUTH2_AUTHORIZE, window.location.origin);
        return e.searchParams.set("client_id", t), e.toString();
    }
    if (null != i) {
        let e = new URL(o.BVt.OAUTH2_AUTHORIZE, window.location.origin);
        return (
            e.searchParams.set("client_id", t),
            e.searchParams.set("scope", i.scopes.join(" ")),
            null != i.permissions && e.searchParams.set("permissions", i.permissions),
            e.toString()
        );
    }
}
