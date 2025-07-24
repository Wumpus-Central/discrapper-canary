n.d(t, { Z: () => c });
var r = n(73800),
    i = n(442837),
    l = n(384275),
    a = n(728345),
    o = n(812206),
    s = n(881998);
function c(e) {
    let t = (null == e ? void 0 : e.require_application_authorization) ? e.application_id : null,
        n = (0, i.e7)([s.Z], () => s.Z.getFetchState()),
        c = (0, i.e7)([s.Z], () => {
            var e, n;
            return null != t &&
                null !=
                    (n =
                        null == (e = s.Z.getApps())
                            ? void 0
                            : e.find((e) => {
                                  let { application: n } = e;
                                  return n.id === t;
                              }))
                ? n
                : null;
        }),
        u = (0, i.e7)([o.Z], () => o.Z.getApplication(t)),
        d = (0, i.e7)([o.Z], () => o.Z.getApplication(null == u ? void 0 : u.parentId));
    ((0, r.useEffect)(() => {
        null != t && n === s.M.NOT_FETCHED && l.Z.fetch();
    }, [n, t]),
        (0, r.useEffect)(() => {
            null != t && null == u && n === s.M.FETCHED && a.ZP.fetchApplications([t], !1);
        }, [t, c, n, u]),
        (0, r.useEffect)(() => {
            null != u && null != u.parentId && null == d && n === s.M.FETCHED && a.ZP.fetchApplications([u.parentId], !1);
        }, [u, n, d]));
    let p = null != u && (null == u.parentId || null != d);
    return {
        showLinkedLobbyApplicationLoadingIndicator: null != t && (n !== s.M.FETCHED || null == u || !p),
        requiredLinkedLobbyApplication: null == c && null != u && p ? (null != d ? d : u) : null
    };
}
