n.d(t, {
    Eb: () => u,
    Er: () => f,
    LO: () => d
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(873546),
    i = n(149765),
    o = n(433534),
    a = n(69580),
    s = n(626135),
    l = n(49012),
    c = n(981631);
let u = o.E;
function d(e) {
    let { applicationId: t, customInstallUrl: n, installParams: o, integrationTypesConfig: u, guildId: d, channelId: f, disableGuildSelect: _, source: p, oauth2Callback: h } = e;
    if (null != n) {
        s.default.track(c.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: d,
            auth_type: 'custom_url',
            source: p,
            device_platform: r.tq ? 'mobile_web' : 'desktop_web'
        }),
            (0, l.q)({ href: n });
        return;
    }
    if (null != u && Object.values(u).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null)) {
        s.default.track(c.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: d,
            auth_type: 'in_app',
            source: p,
            device_platform: r.tq ? 'mobile_web' : 'desktop_web'
        }),
            (0, a.openOAuth2Modal)({
                clientId: t,
                guildId: d,
                channelId: f,
                disableGuildSelect: _,
                callback: h
            });
        return;
    }
    null != o &&
        (s.default.track(c.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: d,
            auth_type: 'in_app',
            source: p,
            device_platform: r.tq ? 'mobile_web' : 'desktop_web'
        }),
        (0, a.openOAuth2Modal)({
            clientId: t,
            guildId: d,
            channelId: f,
            disableGuildSelect: _,
            scopes: o.scopes,
            permissions: null != o.permissions ? i.vB(o.permissions) : void 0,
            callback: h
        }));
}
function f(e) {
    let { applicationId: t, customInstallUrl: n, installParams: r, integrationTypesConfig: i } = e;
    if (null != n) return null;
    if (null != i && Object.values(i).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null)) {
        let e = new URL(c.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
        return e.searchParams.set('client_id', t), e.toString();
    }
    if (null != r) {
        let e = new URL(c.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
        return e.searchParams.set('client_id', t), e.searchParams.set('scope', r.scopes.join(' ')), null != r.permissions && e.searchParams.set('permissions', r.permissions), e.toString();
    }
}
