n.d(t, { L: () => c });
var r = n(373793),
    i = n(367907),
    o = n(69580),
    a = n(812206),
    s = n(433534),
    l = n(981631);
function c(e) {
    var t, n, c;
    let { applicationId: u, channel: d, commandIntegrationTypes: f, appLauncherContext: _ } = e;
    if (
        !(0, s.x$)({
            applicationId: u,
            channel: d,
            commandIntegrationTypes: f
        })
    )
        return Promise.resolve({ isAuthorized: !0 });
    let p = a.Z.getApplication(u),
        h = r.Y.USER_INSTALL,
        m = null == p || null == (c = p.integrationTypesConfig) || null == (n = c[h]) || null == (t = n.oauth2InstallParams) ? void 0 : t.scopes;
    return (
        null != _ &&
            (0, i.yw)(l.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
                application_id: u,
                location: _.location,
                section_name: _.sectionName,
                source: _.entrypoint
            }),
        new Promise((e) => {
            (0, o.openOAuth2Modal)(
                {
                    clientId: u,
                    integrationType: h,
                    scopes: m,
                    callback: (t) => {
                        let { location: n } = t;
                        null != n
                            ? (null != _ &&
                                  (0, i.yw)(l.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                                      application_id: u,
                                      location: _.location,
                                      section_name: _.sectionName,
                                      source: _.entrypoint
                                  }),
                              e({ isAuthorized: !0 }))
                            : e({ isAuthorized: !1 });
                    }
                },
                () => {
                    e({ isAuthorized: !1 });
                }
            );
        })
    );
}
