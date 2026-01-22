n.d(t, {
    Z: () => u,
    o: () => c,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(607399),
    i = n(136722),
    a = n(200330),
    s = n(954571),
    o = n(307600),
    l = n(652215);

function c(e) {
    let {
        applicationId: t,
        customInstallUrl: n,
        installParams: c,
        integrationTypesConfig: u,
        guildId: d,
        channelId: f,
        disableGuildSelect: p,
        source: _,
        oauth2Callback: h,
    } = e;
    if (null != n) {
        s.default.track(l.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: d,
            auth_type: "custom_url",
            source: _,
            device_platform: r.Fr ? "mobile_web" : "desktop_web",
        }),
            (0, o.h)({
                href: n,
            });
        return;
    }
    if (
        null != u &&
        Object.values(u).some(
            (e) =>
                (null == e ? void 0 : e.oauth2_install_params) != null ||
                (null == e ? void 0 : e.oauth2InstallParams) != null,
        )
    ) {
        s.default.track(l.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: d,
            auth_type: "in_app",
            source: _,
            device_platform: r.Fr ? "mobile_web" : "desktop_web",
        }),
            (0, a.openOAuth2Modal)({
                clientId: t,
                guildId: d,
                channelId: f,
                disableGuildSelect: p,
                callback: h,
            });
        return;
    }
    null != c &&
        (s.default.track(l.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: d,
            auth_type: "in_app",
            source: _,
            device_platform: r.Fr ? "mobile_web" : "desktop_web",
        }),
        (0, a.openOAuth2Modal)({
            clientId: t,
            guildId: d,
            channelId: f,
            disableGuildSelect: p,
            scopes: c.scopes,
            permissions: null != c.permissions ? i.iu(c.permissions) : void 0,
            callback: h,
        }));
}

function u(e) {
    let { applicationId: t, customInstallUrl: n, installParams: r, integrationTypesConfig: i } = e;
    if (null != n) return null;
    if (
        null != i &&
        Object.values(i).some(
            (e) =>
                (null == e ? void 0 : e.oauth2_install_params) != null ||
                (null == e ? void 0 : e.oauth2InstallParams) != null,
        )
    ) {
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
