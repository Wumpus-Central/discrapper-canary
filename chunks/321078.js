n.d(i, { A: () => u });
var t = n(582128),
    l = n(201718),
    r = n(534952);
function u(e) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { includeHidden: n = !1 } = i,
        { isLoading: u, data: d } = (0, l.P)(e);
    return {
        isLoading: u,
        filteredAppIdentities: t.useMemo(
            () =>
                (d ?? []).filter(
                    (e) =>
                        r.APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS.some(
                            (i) =>
                                i.applicationId === e.application_id &&
                                i.getMigrationExperimentEnabled("useConnectionFilteredAppIdentities"),
                        ) &&
                        null != e.profile &&
                        null != e.profile.username &&
                        (!0 === e.profile.connection_visible || n),
                ),
            [d, n],
        ),
    };
}
