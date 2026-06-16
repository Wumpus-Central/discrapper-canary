l.d(i, { Z: () => _, o: () => u }), l(323874), l(14289), l(35956);
var t = l(607399),
    a = l(136722),
    s = l(887909),
    n = l(174459),
    o = l(123917),
    r = l(652215);
function u(e) {
    let {
        applicationId: i,
        customInstallUrl: l,
        installParams: u,
        integrationTypesConfig: _,
        guildId: c,
        channelId: p,
        disableGuildSelect: d,
        source: m,
        oauth2Callback: h,
    } = e;
    if (null != l) {
        n.default.track(r.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: i,
            guild_id: c,
            auth_type: "custom_url",
            source: m,
            device_platform: t.Fr ? "mobile_web" : "desktop_web",
        }),
            (0, o.h)({ href: l });
        return;
    }
    if (null != _ && Object.values(_).some((e) => e?.oauth2_install_params != null || e?.oauth2InstallParams != null)) {
        n.default.track(r.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: i,
            guild_id: c,
            auth_type: "in_app",
            source: m,
            device_platform: t.Fr ? "mobile_web" : "desktop_web",
        }),
            (0, s.openOAuth2Modal)({ clientId: i, guildId: c, channelId: p, disableGuildSelect: d, callback: h });
        return;
    }
    null != u &&
        (n.default.track(r.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: i,
            guild_id: c,
            auth_type: "in_app",
            source: m,
            device_platform: t.Fr ? "mobile_web" : "desktop_web",
        }),
        (0, s.openOAuth2Modal)({
            clientId: i,
            guildId: c,
            channelId: p,
            disableGuildSelect: d,
            scopes: u.scopes,
            permissions: null != u.permissions ? a.iu(u.permissions) : void 0,
            callback: h,
        }));
}
function _(e) {
    let { applicationId: i, customInstallUrl: l, installParams: t, integrationTypesConfig: a } = e;
    if (null != l) return null;
    if (null != a && Object.values(a).some((e) => e?.oauth2_install_params != null || e?.oauth2InstallParams != null)) {
        let e = new URL(r.BVt.OAUTH2_AUTHORIZE, window.location.origin);
        return e.searchParams.set("client_id", i), e.toString();
    }
    if (null != t) {
        let e = new URL(r.BVt.OAUTH2_AUTHORIZE, window.location.origin);
        return (
            e.searchParams.set("client_id", i),
            e.searchParams.set("scope", t.scopes.join(" ")),
            null != t.permissions && e.searchParams.set("permissions", t.permissions),
            e.toString()
        );
    }
}
