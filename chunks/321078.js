n.d(i, { A: () => o });
var t = n(64700),
    l = n(201718),
    r = n(534952);
function o(e) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { includeHidden: n = !1 } = i,
        { isLoading: o, data: u } = (0, l.P)(e);
    return {
        isLoading: o,
        filteredAppIdentities: t.useMemo(
            () =>
                (u ?? []).filter(
                    (e) =>
                        r.JW.some(
                            (i) =>
                                i.applicationId === e.application_id &&
                                i.getMigrationExperimentEnabled("useConnectionFilteredAppIdentities"),
                        ) &&
                        null != e.profile &&
                        null != e.profile.username &&
                        (!0 === e.profile.connection_visible || n),
                ),
            [u, n],
        ),
    };
}
