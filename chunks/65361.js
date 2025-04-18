n.d(t, { u: () => s });
var r = n(192379),
    i = n(442837),
    a = n(699553),
    o = n(314852);
function s(e) {
    let t = (0, i.e7)([o.Z], () => o.Z.getProfile(e)),
        n = (0, i.e7)([o.Z], () => o.Z.getFetchStatus(e));
    return {
        guildProfile: t,
        fetchGuildProfile: r.useCallback(
            async function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return await (0, a.CR)(e, t);
            },
            [e]
        ),
        fetchStatus: n
    };
}
