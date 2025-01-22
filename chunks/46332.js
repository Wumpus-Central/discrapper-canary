r.d(n, {
    L: function () {
        return f;
    }
});
var i = r(373793),
    a = r(367907),
    o = r(213459),
    s = r(812206),
    l = r(69580),
    u = r(541099),
    c = r(981631),
    d = r(689079);
function f(e) {
    var n, r, f;
    let { applicationId: p, channel: h, onSuccess: _, sectionName: m, location: g, entrypoint: E, commandIntegrationTypes: v } = e;
    if ((null != v && !v.includes(i.Y.USER_INSTALL)) || p === d.bi.BUILT_IN || o.ZP.hasUserStateApplication(p) || (null != h && o.ZP.hasContextStateApplication(p, h.id, h.guild_id))) return null == _ || _(), Promise.resolve(!0);
    let y = null != E ? E : u.Z.lastShownEntrypoint();
    (0, a.yw)(c.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
        location: g,
        application_id: p,
        section_name: m,
        source: y
    });
    let b = s.Z.getApplication(p),
        I = i.Y.USER_INSTALL,
        T = null == b ? void 0 : null === (f = b.integrationTypesConfig) || void 0 === f ? void 0 : null === (r = f[I]) || void 0 === r ? void 0 : null === (n = r.oauth2InstallParams) || void 0 === n ? void 0 : n.scopes;
    return new Promise((e) => {
        (0, l.openOAuth2Modal)(
            {
                clientId: p,
                integrationType: I,
                scopes: T,
                callback: (n) => {
                    let { location: r } = n;
                    null != r &&
                        ((0, a.yw)(c.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                            location: g,
                            application_id: p,
                            section_name: m,
                            source: y
                        }),
                        e(!0),
                        null == _ || _());
                }
            },
            () => {
                e(!1);
            }
        );
    });
}
