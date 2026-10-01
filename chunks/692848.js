(l.d(t, { Z: () => _, o: () => u }), l(323874), l(14289), l(35956));
var i = l(607399),
    s = l(136722),
    a = l(887909),
    n = l(174459),
    o = l(123917),
    r = l(652215);
function u(e) {
    let {
        applicationId: t,
        customInstallUrl: l,
        installParams: u,
        integrationTypesConfig: _,
        guildId: p,
        channelId: c,
        disableGuildSelect: d,
        source: m,
        oauth2Callback: A,
    } = e;
    if (null != l) {
        (n.default.track(r.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: p,
            auth_type: "custom_url",
            source: m,
            device_platform: i.Fr ? "mobile_web" : "desktop_web",
        }),
            (0, o.h)({ href: l }));
        return;
    }
    if (null != _ && Object.values(_).some((e) => e?.oauth2_install_params != null || e?.oauth2InstallParams != null)) {
        (n.default.track(r.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: p,
            auth_type: "in_app",
            source: m,
            device_platform: i.Fr ? "mobile_web" : "desktop_web",
        }),
            (0, a.openOAuth2Modal)({ clientId: t, guildId: p, channelId: c, disableGuildSelect: d, callback: A }));
        return;
    }
    null != u &&
        (n.default.track(r.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: p,
            auth_type: "in_app",
            source: m,
            device_platform: i.Fr ? "mobile_web" : "desktop_web",
        }),
        (0, a.openOAuth2Modal)({
            clientId: t,
            guildId: p,
            channelId: c,
            disableGuildSelect: d,
            scopes: u.scopes,
            permissions: null != u.permissions ? s.iu(u.permissions) : void 0,
            callback: A,
        }));
}
function _(e) {
    let { applicationId: t, customInstallUrl: l, installParams: i, integrationTypesConfig: s } = e;
    if (null != l) return null;
    if (null != s && Object.values(s).some((e) => e?.oauth2_install_params != null || e?.oauth2InstallParams != null)) {
        let e = new URL(r.BVt.OAUTH2_AUTHORIZE, window.location.origin);
        return (e.searchParams.set("client_id", t), e.toString());
    }
    if (null != i) {
        let e = new URL(r.BVt.OAUTH2_AUTHORIZE, window.location.origin);
        return (
            e.searchParams.set("client_id", t),
            e.searchParams.set("scope", i.scopes.join(" ")),
            null != i.permissions && e.searchParams.set("permissions", i.permissions),
            e.toString()
        );
    }
}
