n.d(t, { L: () => d });
var r = n(373793),
    i = n(367907),
    o = n(213459),
    a = n(812206),
    s = n(69580),
    l = n(541099),
    c = n(981631),
    u = n(689079);
function d(e) {
    var t, n, d;
    let { applicationId: f, channel: _, onSuccess: p, sectionName: h, location: m, entrypoint: g, commandIntegrationTypes: E } = e;
    if ((null != E && !E.includes(r.Y.USER_INSTALL)) || f === u.bi.BUILT_IN || o.ZP.hasUserStateApplication(f) || (null != _ && o.ZP.hasContextStateApplication(f, _.id, _.guild_id))) return null == p || p(), Promise.resolve(!0);
    let b = null != g ? g : l.Z.lastShownEntrypoint();
    (0, i.yw)(c.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
        location: m,
        application_id: f,
        section_name: h,
        source: b
    });
    let y = a.Z.getApplication(f),
        v = r.Y.USER_INSTALL,
        O = null == y || null == (d = y.integrationTypesConfig) || null == (n = d[v]) || null == (t = n.oauth2InstallParams) ? void 0 : t.scopes;
    return new Promise((e) => {
        (0, s.openOAuth2Modal)(
            {
                clientId: f,
                integrationType: v,
                scopes: O,
                callback: (t) => {
                    let { location: n } = t;
                    null != n &&
                        ((0, i.yw)(c.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                            location: m,
                            application_id: f,
                            section_name: h,
                            source: b
                        }),
                        e(!0),
                        null == p || p());
                }
            },
            () => {
                e(!1);
            }
        );
    });
}
