t.d(n, { L: () => r });
var l = t(373793),
    i = t(367907),
    a = t(69580),
    o = t(812206),
    d = t(981631),
    c = t(689079);
function r(e) {
    var n, t, r, u, s;
    let { applicationId: m, userIndexState: E, guildIndexState: v, sectionName: p, location: C, source: _ } = e;
    if (m === c.bi.BUILT_IN || (null === (n = E.result) || void 0 === n ? void 0 : n.sections[m]) != null || (null === (t = v.result) || void 0 === t ? void 0 : t.sections[m]) != null) return Promise.resolve(!0);
    (0, i.yw)(d.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
        location: C,
        application_id: m,
        section_name: p,
        source: _
    });
    let h = o.Z.getApplication(m),
        g = l.Y.USER_INSTALL,
        M = null == h ? void 0 : null === (s = h.integrationTypesConfig) || void 0 === s ? void 0 : null === (u = s[g]) || void 0 === u ? void 0 : null === (r = u.oauth2InstallParams) || void 0 === r ? void 0 : r.scopes;
    return new Promise((e) => {
        (0, a.openOAuth2Modal)(
            {
                clientId: m,
                integrationType: g,
                scopes: M,
                callback: (n) => {
                    let { location: t } = n;
                    null != t
                        ? ((0, i.yw)(d.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                              location: C,
                              application_id: m,
                              section_name: p,
                              source: _
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
