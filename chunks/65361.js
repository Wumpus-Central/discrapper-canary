n.d(t, { u: () => s });
var r = n(192379),
    a = n(442837),
    i = n(699553),
    l = n(314852);
function s(e) {
    let t = (0, a.e7)([l.Z], () => l.Z.getProfile(e)),
        n = (0, a.e7)([l.Z], () => l.Z.getIsFetching(e));
    return {
        guildProfile: t,
        fetchGuildProfile: r.useCallback(
            async function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return await (0, i.CR)(e, t);
            },
            [e]
        ),
        isFetching: n
    };
}
