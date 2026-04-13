n.d(t, { A: () => r });
var i = n(64700),
    s = n(201718),
    l = n(534952);
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { includeHidden: n = !1 } = t,
        { isLoading: r, data: a } = (0, s.P)(e);
    return {
        isLoading: r,
        filteredAppIdentities: i.useMemo(
            () =>
                (a ?? []).filter(
                    (e) =>
                        l.JW.includes(e.application_id) &&
                        null != e.profile &&
                        null != e.profile.username &&
                        (!0 === e.profile.connection_visible || n),
                ),
            [a, n],
        ),
    };
}
