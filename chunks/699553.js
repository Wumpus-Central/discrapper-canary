t.d(n, {
    C: () => d,
    p: () => u
});
var l = t(544891),
    i = t(570140),
    r = t(881052),
    a = t(406218),
    o = t(314852),
    s = t(981631);
let c = 'Unknown Error';
function d(e, n) {
    var t;
    if (null == e) return Promise.resolve(null);
    let d = o.Z.getIsFetching(e),
        u = o.Z.getLastSyncTimestamp(e),
        m = o.Z.getProfile(e),
        _ = ((t = u), Date.now() - (null != t ? t : 0) > 60000);
    return d && !n
        ? Promise.resolve(null)
        : null == m || _ || n
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
                .catch((n) => {
                    var t;
                    let l = new r.Hx(n);
                    return (
                        i.Z.dispatch({
                            type: 'GUILD_PROFILE_FETCH_FAILURE',
                            guildId: e,
                            error: null !== (t = l.getAnyErrorMessage()) && void 0 !== t ? t : c,
                            errorCode: l.code
                        }),
                        null
                    );
                }))
          : Promise.resolve(m);
}
function u(e, n) {
    return o.Z.getIsUpdating(e)
        ? Promise.resolve(null)
        : (i.Z.dispatch({
              type: 'GUILD_PROFILE_UPDATE',
              guildId: e,
              updates: n
          }),
          l.tn
              .patch({
                  url: s.ANM.GUILD_PROFILE(e),
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
              .catch((n) => {
                  var t;
                  let l = new r.Hx(n);
                  return (
                      i.Z.dispatch({
                          type: 'GUILD_PROFILE_UPDATE_FAILURE',
                          guildId: e,
                          error: null !== (t = l.getAnyErrorMessage()) && void 0 !== t ? t : c,
                          errorCode: l.code
                      }),
                      null
                  );
              }));
}
