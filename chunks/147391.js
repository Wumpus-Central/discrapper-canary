n.d(t, { L: () => d });
var o = n(373793),
    i = n(367907),
    r = n(69580),
    l = n(812206),
    a = n(981631),
    c = n(689079);
function d(e) {
    var t, n, d, u, s;
    let { applicationId: m, userIndexState: p, guildIndexState: f, sectionName: O, location: b, source: E } = e;
    if (m === c.bi.BUILT_IN || (null === (t = p.result) || void 0 === t ? void 0 : t.sections[m]) != null || (null === (n = f.result) || void 0 === n ? void 0 : n.sections[m]) != null) return Promise.resolve(!0);
    (0, i.yw)(a.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
        location: b,
        application_id: m,
        section_name: O,
        source: E
    });
    let v = l.Z.getApplication(m),
        g = o.Y.USER_INSTALL,
        y = null == v ? void 0 : null === (s = v.integrationTypesConfig) || void 0 === s ? void 0 : null === (u = s[g]) || void 0 === u ? void 0 : null === (d = u.oauth2InstallParams) || void 0 === d ? void 0 : d.scopes;
    return new Promise((e) => {
        (0, r.openOAuth2Modal)(
            {
                clientId: m,
                integrationType: g,
                scopes: y,
                callback: (t) => {
                    let { location: n } = t;
                    null != n
                        ? ((0, i.yw)(a.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
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
