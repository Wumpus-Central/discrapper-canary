t.d(n, { u: () => o });
var l = t(192379),
    i = t(442837),
    r = t(699553),
    a = t(314852);
function o(e) {
    let n = (0, i.e7)([a.Z], () => a.Z.getProfile(e)),
        t = (0, i.e7)([a.Z], () => a.Z.getIsFetching(e));
    return {
        guildProfile: n,
        fetchGuildProfile: l.useCallback(
            async function () {
                let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return await (0, r.C)(e, n);
            },
            [e]
        ),
        isFetching: t
    };
}
