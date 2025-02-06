t.d(n, { u: () => s });
var l = t(192379),
    i = t(442837),
    a = t(699553),
    r = t(314852);
function s(e) {
    let n = (0, i.e7)([r.Z], () => r.Z.getProfile(e)),
        t = (0, i.e7)([r.Z], () => r.Z.getIsFetching(e));
    return {
        guildProfile: n,
        fetchGuildProfile: l.useCallback(
            async function () {
                let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return await (0, a.C)(e, n);
            },
            [e]
        ),
        isFetching: t
    };
}
