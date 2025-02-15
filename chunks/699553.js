n.d(t, {
    CR: () => d,
    MA: () => u,
    pV: () => c
});
var i = n(544891),
    r = n(570140),
    a = n(881052),
    l = n(406218),
    o = n(314852),
    s = n(981631);
function d(e, t) {
    var n;
    if (null == e) return Promise.resolve(null);
    let d = o.Z.getIsFetching(e),
        c = o.Z.getLastSyncTimestamp(e),
        u = o.Z.getProfile(e),
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
                    url: s.ANM.GUILD_PROFILE(e),
                    rejectWithError: !1
                })
                .then((t) => {
                    let n = (0, l.xo)(t.body);
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
    return o.Z.getIsUpdating(e)
        ? Promise.resolve(null)
        : (r.Z.dispatch({
              type: 'GUILD_PROFILE_UPDATE',
              guildId: e,
              updates: t
          }),
          i.tn
              .patch({
                  url: s.ANM.GUILD_PROFILE(e),
                  body: (0, l.sO)(t),
                  rejectWithError: !1
              })
              .then((t) => {
                  let n = (0, l.xo)(t.body);
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
async function u(e) {
    let t = await i.tn.get({
        url: s.ANM.GUILD_TOP_GAMES(e),
        rejectWithError: !1
    });
    return (0, l.o_)(t.body.top_games);
}
