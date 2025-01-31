n.d(t, {
    Eb: () => u,
    Er: () => d,
    LO: () => c,
    TK: () => f
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(873546),
    r = n(149765),
    a = n(69580),
    s = n(626135),
    o = n(49012),
    l = n(981631);
function u(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: i } = e;
    return null != t || null != n || (null != i && Object.values(i).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null));
}
function c(e) {
    let { applicationId: t, customInstallUrl: n, installParams: u, integrationTypesConfig: c, guildId: d, channelId: f, disableGuildSelect: _, source: p, oauth2Callback: h } = e;
    if (null != n) {
        s.default.track(l.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: d,
            auth_type: 'custom_url',
            source: p,
            device_platform: i.tq ? 'mobile_web' : 'desktop_web'
        }),
            (0, o.q)({ href: n });
        return;
    }
    if (null != c && Object.values(c).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null)) {
        s.default.track(l.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: d,
            auth_type: 'in_app',
            source: p,
            device_platform: i.tq ? 'mobile_web' : 'desktop_web'
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
    null != u &&
        (s.default.track(l.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: d,
            auth_type: 'in_app',
            source: p,
            device_platform: i.tq ? 'mobile_web' : 'desktop_web'
        }),
        (0, a.openOAuth2Modal)({
            clientId: t,
            guildId: d,
            channelId: f,
            disableGuildSelect: _,
            scopes: u.scopes,
            permissions: null != u.permissions ? r.vB(u.permissions) : void 0,
            callback: h
        }));
}
function d(e) {
    let { applicationId: t, customInstallUrl: n, installParams: i, integrationTypesConfig: r } = e;
    if (null != n) return null;
    if (null != r && Object.values(r).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null)) {
        let e = new URL(l.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
        return e.searchParams.set('client_id', t), e.toString();
    }
    if (null != i) {
        let e = new URL(l.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
        return e.searchParams.set('client_id', t), e.searchParams.set('scope', i.scopes.join(' ')), null != i.permissions && e.searchParams.set('permissions', i.permissions), e.toString();
    }
}
function f(e, t) {
    var n;
    let i = null === (n = t.result) || void 0 === n ? void 0 : n.sections;
    return null != i && e in i;
}
