t.d(n, { C: () => o });
var l = t(544891),
    i = t(570140),
    a = t(314852),
    r = t(405222),
    s = t(981631);
function o(e, n) {
    var t;
    if (null == e) return Promise.resolve(null);
    let o = a.Z.getIsFetching(e),
        c = a.Z.getLastSyncTimestamp(e),
        d = a.Z.getProfile(e),
        u = ((t = c), Date.now() - (null != t ? t : 0) > 60000);
    return o && !n
        ? Promise.resolve(null)
        : null == d || u || n
          ? (i.Z.dispatch({
                type: 'GUILD_PROFILE_FETCH',
                guildId: e
            }),
            l.tn
                .get({
                    url: s.ANM.GUILD_PROFILE(e),
                    rejectWithError: !1
                })
                .then((n) => {
                    let t = (0, r.x)(n.body);
                    return (
                        i.Z.dispatch({
                            type: 'GUILD_PROFILE_FETCH_SUCCESS',
                            guildId: e,
                            profile: t
                        }),
                        t
                    );
                })
                .catch(
                    (n) => (
                        i.Z.dispatch({
                            type: 'GUILD_PROFILE_FETCH_FAILURE',
                            guildId: e,
                            error: n.message
                        }),
                        null
                    )
                ))
          : Promise.resolve(d);
}
