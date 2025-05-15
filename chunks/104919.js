n.d(t, { L: () => d });
var r = n(373793),
    i = n(367907),
    a = n(69580),
    o = n(973616),
    s = n(728345),
    l = n(812206),
    c = n(433534),
    u = n(981631);
async function d(e) {
    var t, n, d;
    let { applicationId: f, channel: _, commandIntegrationTypes: p, appLauncherContext: h } = e;
    if (
        !(0, c.x$)({
            applicationId: f,
            channel: _,
            commandIntegrationTypes: p
        })
    )
        return Promise.resolve({ isAuthorized: !0 });
    let m = l.Z.getApplication(f);
    if (null == m) {
        let e = await (0, s.UM)(f);
        m = o.ZP.createFromServer(e);
    }
    let g = r.Y.USER_INSTALL,
        E = null == m || null == (d = m.integrationTypesConfig) || null == (n = d[g]) || null == (t = n.oauth2InstallParams) ? void 0 : t.scopes;
    return (
        null != h &&
            (0, i.yw)(u.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
                application_id: f,
                location: h.location,
                section_name: h.sectionName,
                source: h.entrypoint
            }),
        new Promise((e) => {
            (0, a.openOAuth2Modal)(
                {
                    clientId: f,
                    integrationType: g,
                    scopes: E,
                    callback: (t) => {
                        let { location: n } = t;
                        null != n
                            ? (null != h &&
                                  (0, i.yw)(u.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                                      application_id: f,
                                      location: h.location,
                                      section_name: h.sectionName,
                                      source: h.entrypoint
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
