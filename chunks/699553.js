t.d(n, {
    C: () => s,
    p: () => c
});
var l = t(544891),
    i = t(570140),
    a = t(406218),
    r = t(314852),
    o = t(981631);
function s(e, n) {
    var t;
    if (null == e) return Promise.resolve(null);
    let s = r.Z.getIsFetching(e),
        c = r.Z.getLastSyncTimestamp(e),
        d = r.Z.getProfile(e),
        u = ((t = c), Date.now() - (null != t ? t : 0) > 60000);
    return s && !n
        ? Promise.resolve(null)
        : null == d || u || n
          ? (i.Z.dispatch({
                type: 'GUILD_PROFILE_FETCH',
                guildId: e
            }),
            l.tn
                .get({
                    url: o.ANM.GUILD_PROFILE(e),
                    rejectWithError: !1
                })
                .then((n) => {
                    let t = (0, a.x)(n.body);
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
function c(e, n) {
    return r.Z.getIsUpdating(e)
        ? Promise.resolve(null)
        : (i.Z.dispatch({
              type: 'GUILD_PROFILE_UPDATE',
              guildId: e,
              updates: n
          }),
          l.tn
              .patch({
                  url: o.ANM.GUILD_PROFILE(e),
                  body: (0, a.s)(n),
                  rejectWithError: !1
              })
              .then((n) => {
                  let t = (0, a.x)(n.body);
                  return (
                      i.Z.dispatch({
                          type: 'GUILD_PROFILE_UPDATE_SUCCESS',
                          guildId: e,
                          profile: t
                      }),
                      t
                  );
              })
              .catch(
                  (n) => (
                      i.Z.dispatch({
                          type: 'GUILD_PROFILE_UPDATE_FAILURE',
                          guildId: e,
                          error: n.message
                      }),
                      null
                  )
              ));
}
