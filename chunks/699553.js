n.d(t, {
    C: () => c,
    p: () => u
});
var r = n(544891),
    i = n(570140),
    a = n(881052),
    l = n(406218),
    o = n(314852),
    s = n(981631);
let d = 'Unknown Error';
function c(e, t) {
    var n;
    if (null == e) return Promise.resolve(null);
    let c = o.Z.getIsFetching(e),
        u = o.Z.getLastSyncTimestamp(e),
        m = o.Z.getProfile(e),
        _ = ((n = u), Date.now() - (null != n ? n : 0) > 60000);
    return c && !t
        ? Promise.resolve(null)
        : null == m || _ || t
          ? (i.Z.dispatch({
                type: 'GUILD_PROFILE_FETCH',
                guildId: e
            }),
            r.tn
                .get({
                    url: s.ANM.GUILD_PROFILE(e),
                    rejectWithError: !1
                })
                .then((t) => {
                    let n = (0, l.x)(t.body);
                    return (
                        i.Z.dispatch({
                            type: 'GUILD_PROFILE_FETCH_SUCCESS',
                            guildId: e,
                            profile: n
                        }),
                        n
                    );
                })
                .catch((t) => {
                    var n;
                    let r = new a.Hx(t);
                    return (
                        i.Z.dispatch({
                            type: 'GUILD_PROFILE_FETCH_FAILURE',
                            guildId: e,
                            error: null !== (n = r.getAnyErrorMessage()) && void 0 !== n ? n : d,
                            errorCode: r.code
                        }),
                        null
                    );
                }))
          : Promise.resolve(m);
}
function u(e, t) {
    return o.Z.getIsUpdating(e)
        ? Promise.resolve(null)
        : (i.Z.dispatch({
              type: 'GUILD_PROFILE_UPDATE',
              guildId: e,
              updates: t
          }),
          r.tn
              .patch({
                  url: s.ANM.GUILD_PROFILE(e),
                  body: (0, l.s)(t),
                  rejectWithError: !1
              })
              .then((t) => {
                  let n = (0, l.x)(t.body);
                  return (
                      i.Z.dispatch({
                          type: 'GUILD_PROFILE_UPDATE_SUCCESS',
                          guildId: e,
                          profile: n
                      }),
                      n
                  );
              })
              .catch((t) => {
                  var n;
                  let r = new a.Hx(t);
                  return (
                      i.Z.dispatch({
                          type: 'GUILD_PROFILE_UPDATE_FAILURE',
                          guildId: e,
                          error: null !== (n = r.getAnyErrorMessage()) && void 0 !== n ? n : d,
                          errorCode: r.code
                      }),
                      null
                  );
              }));
}
