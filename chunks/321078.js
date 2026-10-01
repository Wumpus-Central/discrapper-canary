a.d(t, { A: () => s });
var d = a(582128),
    c = a(201718),
    n = a(534952);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { includeHidden: a = !1 } = t,
        { isLoading: s, data: r } = (0, c.P)(e);
    return {
        isLoading: s,
        filteredAppIdentities: d.useMemo(
            () =>
                (r ?? []).filter(
                    (e) =>
                        n.APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS.some(
                            (t) =>
                                t.applicationId === e.application_id &&
                                t.getMigrationExperimentEnabled("useConnectionFilteredAppIdentities"),
                        ) &&
                        null != e.profile &&
                        null != e.profile.username &&
                        (!0 === e.profile.connection_visible || a),
                ),
            [r, a],
        ),
    };
}
