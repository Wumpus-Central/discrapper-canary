n.d(t, { L: () => u });
var r = n(373793),
    l = n(367907),
    o = n(69580),
    i = n(812206),
    a = n(981631),
    c = n(689079);
function u(e) {
    var t, n, u, s, d;
    let { applicationId: m, userIndexState: p, guildIndexState: f, sectionName: O, location: b, source: E } = e;
    if (m === c.bi.BUILT_IN || (null == (t = p.result) ? void 0 : t.sections[m]) != null || (null == (n = f.result) ? void 0 : n.sections[m]) != null) return Promise.resolve(!0);
    (0, l.yw)(a.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
        location: b,
        application_id: m,
        section_name: O,
        source: E
    });
    let g = i.Z.getApplication(m),
        y = r.Y.USER_INSTALL,
        h = null == g || null == (d = g.integrationTypesConfig) || null == (s = d[y]) || null == (u = s.oauth2InstallParams) ? void 0 : u.scopes;
    return new Promise((e) => {
        (0, o.openOAuth2Modal)(
            {
                clientId: m,
                integrationType: y,
                scopes: h,
                callback: (t) => {
                    let { location: n } = t;
                    null != n
                        ? ((0, l.yw)(a.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                              location: b,
                              application_id: m,
                              section_name: O,
                              source: E
                          }),
                          e(!0))
                        : e(!1);
                }
            },
            () => {
                e(!1);
            }
        );
    });
}
