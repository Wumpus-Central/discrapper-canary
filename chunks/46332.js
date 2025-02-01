n.d(t, { L: () => d });
var i = n(373793),
    r = n(367907),
    a = n(213459),
    s = n(812206),
    o = n(69580),
    l = n(541099),
    u = n(981631),
    c = n(689079);
function d(e) {
    var t, n, d;
    let { applicationId: f, channel: _, onSuccess: p, sectionName: h, location: m, entrypoint: g, commandIntegrationTypes: E } = e;
    if ((null != E && !E.includes(i.Y.USER_INSTALL)) || f === c.bi.BUILT_IN || a.ZP.hasUserStateApplication(f) || (null != _ && a.ZP.hasContextStateApplication(f, _.id, _.guild_id))) return null == p || p(), Promise.resolve(!0);
    let v = null != g ? g : l.Z.lastShownEntrypoint();
    (0, r.yw)(u.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
        location: m,
        application_id: f,
        section_name: h,
        source: v
    });
    let y = s.Z.getApplication(f),
        I = i.Y.USER_INSTALL,
        T = null == y ? void 0 : null === (d = y.integrationTypesConfig) || void 0 === d ? void 0 : null === (n = d[I]) || void 0 === n ? void 0 : null === (t = n.oauth2InstallParams) || void 0 === t ? void 0 : t.scopes;
    return new Promise((e) => {
        (0, o.openOAuth2Modal)(
            {
                clientId: f,
                integrationType: I,
                scopes: T,
                callback: (t) => {
                    let { location: n } = t;
                    null != n &&
                        ((0, r.yw)(u.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                            location: m,
                            application_id: f,
                            section_name: h,
                            source: v
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
