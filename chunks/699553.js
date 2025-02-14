n.d(t, {
    C: () => d,
    p: () => c
});
var i = n(544891),
    r = n(570140),
    a = n(881052),
    l = n(406218),
    s = n(314852),
    o = n(981631);
function d(e, t) {
    var n;
    if (null == e) return Promise.resolve(null);
    let d = s.Z.getIsFetching(e),
        c = s.Z.getLastSyncTimestamp(e),
        u = s.Z.getProfile(e),
        m = ((n = c), Date.now() - (null != n ? n : 0) > 60000);
    return d && !t
        ? Promise.resolve(null)
        : null == u || m || t
          ? (r.Z.dispatch({
                type: 'GUILD_PROFILE_FETCH',
                guildId: e
            }),
            i.tn
                .get({
                    url: o.ANM.GUILD_PROFILE(e),
                    rejectWithError: !1
                })
                .then((t) => {
                    let n = (0, l.x)(t.body);
                    return (
                        r.Z.dispatch({
                            type: 'GUILD_PROFILE_FETCH_SUCCESS',
                            guildId: e,
                            profile: n
                        }),
                        n
                    );
                })
                .catch((t) => {
                    let n = new a.Hx(t);
                    return (
                        r.Z.dispatch({
                            type: 'GUILD_PROFILE_FETCH_FAILURE',
                            guildId: e,
                            error: n
                        }),
                        null
                    );
                }))
          : Promise.resolve(u);
}
function c(e, t) {
    return s.Z.getIsUpdating(e)
        ? Promise.resolve(null)
        : (r.Z.dispatch({
              type: 'GUILD_PROFILE_UPDATE',
              guildId: e,
              updates: t
          }),
          i.tn
              .patch({
                  url: o.ANM.GUILD_PROFILE(e),
                  body: (0, l.s)(t),
                  rejectWithError: !1
              })
              .then((t) => {
                  let n = (0, l.x)(t.body);
                  return (
                      r.Z.dispatch({
                          type: 'GUILD_PROFILE_UPDATE_SUCCESS',
                          guildId: e,
                          profile: n
                      }),
                      n
                  );
              })
              .catch((t) => {
                  let n = new a.Hx(t);
                  return (
                      r.Z.dispatch({
                          type: 'GUILD_PROFILE_UPDATE_FAILURE',
                          guildId: e,
                          error: n
                      }),
                      null
                  );
              }));
}
