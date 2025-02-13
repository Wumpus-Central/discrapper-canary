n.d(t, { u: () => o });
var r = n(192379),
    i = n(442837),
    a = n(699553),
    l = n(314852);
function o(e) {
    let t = (0, i.e7)([l.Z], () => l.Z.getProfile(e)),
        n = (0, i.e7)([l.Z], () => l.Z.getIsFetching(e));
    return {
        guildProfile: t,
        fetchGuildProfile: r.useCallback(
            async function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return await (0, a.C)(e, t);
            },
            [e]
        ),
        isFetching: n
    };
}
