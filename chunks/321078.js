d.d(t, { A: () => s });
var a = d(582128),
    c = d(201718),
    n = d(360308);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { includeHidden: d = !1 } = t,
        { isLoading: s, data: o } = (0, c.P)(e);
    return {
        isLoading: s,
        filteredAppIdentities: a.useMemo(
            () =>
                (o ?? []).filter(
                    (e) =>
                        n.APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS.some(
                            (t) =>
                                t.applicationId === e.application_id &&
                                t.getMigrationExperimentEnabled("useConnectionFilteredAppIdentities"),
                        ) &&
                        null != e.profile &&
                        null != e.profile.username &&
                        (!0 === e.profile.connection_visible || d),
                ),
            [o, d],
        ),
    };
}
