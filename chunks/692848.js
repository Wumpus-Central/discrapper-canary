n.d(t, { Z: () => d, o: () => c }), n(323874), n(14289), n(35956);
var i = n(607399),
    l = n(136722),
    a = n(200330),
    s = n(954571),
    r = n(76843),
    o = n(652215);
function c(e) {
    let {
        applicationId: t,
        customInstallUrl: n,
        installParams: c,
        integrationTypesConfig: d,
        guildId: u,
        channelId: m,
        disableGuildSelect: p,
        source: _,
        oauth2Callback: h,
    } = e;
    if (null != n) {
        s.default.track(o.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: u,
            auth_type: "custom_url",
            source: _,
            device_platform: i.Fr ? "mobile_web" : "desktop_web",
        }),
            (0, r.h)({ href: n });
        return;
    }
    if (null != d && Object.values(d).some((e) => e?.oauth2_install_params != null || e?.oauth2InstallParams != null)) {
        s.default.track(o.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: u,
            auth_type: "in_app",
            source: _,
            device_platform: i.Fr ? "mobile_web" : "desktop_web",
        }),
            (0, a.openOAuth2Modal)({ clientId: t, guildId: u, channelId: m, disableGuildSelect: p, callback: h });
        return;
    }
    null != c &&
        (s.default.track(o.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: u,
            auth_type: "in_app",
            source: _,
            device_platform: i.Fr ? "mobile_web" : "desktop_web",
        }),
        (0, a.openOAuth2Modal)({
            clientId: t,
            guildId: u,
            channelId: m,
            disableGuildSelect: p,
            scopes: c.scopes,
            permissions: null != c.permissions ? l.iu(c.permissions) : void 0,
            callback: h,
        }));
}
function d(e) {
    let { applicationId: t, customInstallUrl: n, installParams: i, integrationTypesConfig: l } = e;
    if (null != n) return null;
    if (null != l && Object.values(l).some((e) => e?.oauth2_install_params != null || e?.oauth2InstallParams != null)) {
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
