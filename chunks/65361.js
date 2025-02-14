n.d(t, { u: () => s });
var i = n(192379),
    r = n(442837),
    a = n(699553),
    l = n(314852);
function s(e) {
    let t = (0, r.e7)([l.Z], () => l.Z.getProfile(e)),
        n = (0, r.e7)([l.Z], () => l.Z.getIsFetching(e));
    return {
        guildProfile: t,
        fetchGuildProfile: i.useCallback(
            async function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return await (0, a.C)(e, t);
            },
            [e]
        ),
        isFetching: n
    };
}
