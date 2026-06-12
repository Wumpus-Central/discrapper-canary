l.d(i, { A: () => u });
var n = l(64700),
    t = l(201718),
    r = l(534952);
function u(e) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { includeHidden: l = !1 } = i,
        { isLoading: u, data: d } = (0, t.P)(e);
    return {
        isLoading: u,
        filteredAppIdentities: n.useMemo(
            () =>
                (d ?? []).filter(
                    (e) =>
                        r.JW.includes(e.application_id) &&
                        null != e.profile &&
                        null != e.profile.username &&
                        (!0 === e.profile.connection_visible || l),
                ),
            [d, l],
        ),
    };
}
