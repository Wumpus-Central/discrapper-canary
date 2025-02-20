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
    let { applicationId: f, channel: p, onSuccess: _, sectionName: h, location: m, entrypoint: g, commandIntegrationTypes: E } = e;
    if ((null != E && !E.includes(r.Y.USER_INSTALL)) || f === u.bi.BUILT_IN || o.ZP.hasUserStateApplication(f) || (null != p && o.ZP.hasContextStateApplication(f, p.id, p.guild_id))) return null == _ || _(), Promise.resolve(!0);
    let v = null != g ? g : l.Z.lastShownEntrypoint();
    (0, i.yw)(c.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
        location: m,
        application_id: f,
        section_name: h,
        source: v
    });
    let b = a.Z.getApplication(f),
        y = r.Y.USER_INSTALL,
        O = null == b ? void 0 : null === (d = b.integrationTypesConfig) || void 0 === d ? void 0 : null === (n = d[y]) || void 0 === n ? void 0 : null === (t = n.oauth2InstallParams) || void 0 === t ? void 0 : t.scopes;
    return new Promise((e) => {
        (0, s.openOAuth2Modal)(
            {
                clientId: f,
                integrationType: y,
                scopes: O,
                callback: (t) => {
                    let { location: n } = t;
                    null != n &&
                        ((0, i.yw)(c.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                            location: m,
                            application_id: f,
                            section_name: h,
                            source: v
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
