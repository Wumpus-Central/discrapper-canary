n.d(t, { u: () => s });
var r = n(192379),
    i = n(442837),
    o = n(699553),
    a = n(314852);
function s(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.getProfile(e)),
        n = (0, i.e7)([a.Z], () => a.Z.getFetchStatus(e));
    return {
        guildProfile: t,
        fetchGuildProfile: r.useCallback(
            async function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return await (0, o.CR)(e, t);
            },
            [e]
        ),
        fetchStatus: n
    };
}
