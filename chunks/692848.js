"use strict";
n.d(t, { Z: () => c, o: () => u }), n(323874), n(14289), n(35956);
var r = n(607399),
    i = n(136722),
    a = n(200330),
    s = n(954571),
    o = n(307600),
    l = n(652215);
function u(e) {
    let {
        applicationId: t,
        customInstallUrl: n,
        installParams: u,
        integrationTypesConfig: c,
        guildId: d,
        channelId: _,
        disableGuildSelect: f,
        source: p,
        oauth2Callback: h,
    } = e;
    if (null != n) {
        s.default.track(l.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: d,
            auth_type: "custom_url",
            source: p,
            device_platform: r.Fr ? "mobile_web" : "desktop_web",
        }),
            (0, o.h)({ href: n });
        return;
    }
    if (null != c && Object.values(c).some((e) => e?.oauth2_install_params != null || e?.oauth2InstallParams != null)) {
        s.default.track(l.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: d,
            auth_type: "in_app",
            source: p,
            device_platform: r.Fr ? "mobile_web" : "desktop_web",
        }),
            (0, a.openOAuth2Modal)({ clientId: t, guildId: d, channelId: _, disableGuildSelect: f, callback: h });
        return;
    }
    null != u &&
        (s.default.track(l.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: d,
            auth_type: "in_app",
            source: p,
            device_platform: r.Fr ? "mobile_web" : "desktop_web",
        }),
        (0, a.openOAuth2Modal)({
            clientId: t,
            guildId: d,
            channelId: _,
            disableGuildSelect: f,
            scopes: u.scopes,
            permissions: null != u.permissions ? i.iu(u.permissions) : void 0,
            callback: h,
        }));
}
function c(e) {
    let { applicationId: t, customInstallUrl: n, installParams: r, integrationTypesConfig: i } = e;
    if (null != n) return null;
    if (null != i && Object.values(i).some((e) => e?.oauth2_install_params != null || e?.oauth2InstallParams != null)) {
        let e = new URL(l.BVt.OAUTH2_AUTHORIZE, window.location.origin);
        return e.searchParams.set("client_id", t), e.toString();
    }
    if (null != r) {
        let e = new URL(l.BVt.OAUTH2_AUTHORIZE, window.location.origin);
        return (
            e.searchParams.set("client_id", t),
            e.searchParams.set("scope", r.scopes.join(" ")),
            null != r.permissions && e.searchParams.set("permissions", r.permissions),
            e.toString()
        );
    }
}
