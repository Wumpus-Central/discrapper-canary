r.d(n, {
    Eb: function () {
        return m;
    },
    Er: function () {
        return E;
    },
    LO: function () {
        return g;
    },
    TK: function () {
        return v;
    }
});
var i = r(315314);
var a = r(610138);
var o = r(216116);
var s = r(78328);
var l = r(815648);
var u = r(47120);
var c = r(873546),
    d = r(149765),
    f = r(69580),
    p = r(626135),
    h = r(49012),
    _ = r(981631);
function m(e) {
    let { customInstallUrl: n, installParams: r, integrationTypesConfig: i } = e;
    return null != n || null != r || (null != i && Object.values(i).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null));
}
function g(e) {
    let { applicationId: n, customInstallUrl: r, installParams: i, integrationTypesConfig: a, guildId: o, channelId: s, disableGuildSelect: l, source: u, oauth2Callback: m } = e;
    if (null != r) {
        p.default.track(_.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: n,
            guild_id: o,
            auth_type: 'custom_url',
            source: u,
            device_platform: c.tq ? 'mobile_web' : 'desktop_web'
        }),
            (0, h.q)({ href: r });
        return;
    }
    if (null != a && Object.values(a).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null)) {
        p.default.track(_.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: n,
            guild_id: o,
            auth_type: 'in_app',
            source: u,
            device_platform: c.tq ? 'mobile_web' : 'desktop_web'
        }),
            (0, f.openOAuth2Modal)({
                clientId: n,
                guildId: o,
                channelId: s,
                disableGuildSelect: l,
                callback: m
            });
        return;
    }
    null != i &&
        (p.default.track(_.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: n,
            guild_id: o,
            auth_type: 'in_app',
            source: u,
            device_platform: c.tq ? 'mobile_web' : 'desktop_web'
        }),
        (0, f.openOAuth2Modal)({
            clientId: n,
            guildId: o,
            channelId: s,
            disableGuildSelect: l,
            scopes: i.scopes,
            permissions: null != i.permissions ? d.vB(i.permissions) : void 0,
            callback: m
        }));
}
function E(e) {
    let { applicationId: n, customInstallUrl: r, installParams: i, integrationTypesConfig: a } = e;
    if (null != r) return null;
    if (null != a && Object.values(a).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null)) {
        let e = new URL(_.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
        return e.searchParams.set('client_id', n), e.toString();
    }
    if (null != i) {
        let e = new URL(_.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
        return e.searchParams.set('client_id', n), e.searchParams.set('scope', i.scopes.join(' ')), null != i.permissions && e.searchParams.set('permissions', i.permissions), e.toString();
    }
}
function v(e, n) {
    var r;
    let i = null === (r = n.result) || void 0 === r ? void 0 : r.sections;
    return null != i && e in i;
}
