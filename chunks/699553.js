n.d(t, {
    CR: () => s,
    MA: () => d,
    pV: () => u
});
var r = n(544891),
    l = n(570140),
    i = n(881052),
    a = n(406218),
    o = n(314852),
    c = n(981631);
function s(e, t) {
    var n;
    if (null == e) return Promise.resolve(null);
    let s = o.Z.getIsFetching(e),
        u = o.Z.getLastSyncTimestamp(e),
        d = o.Z.getProfile(e),
        m = ((n = u), Date.now() - (null != n ? n : 0) > 60000);
    return s && !t
        ? Promise.resolve(null)
        : null == d || m || t
          ? (l.Z.dispatch({
                type: 'GUILD_PROFILE_FETCH',
                guildId: e
            }),
            r.tn
                .get({
                    url: c.ANM.GUILD_PROFILE(e),
                    rejectWithError: !1
                })
                .then((t) => {
                    let n = (0, a.xo)(t.body);
                    return (
                        l.Z.dispatch({
                            type: 'GUILD_PROFILE_FETCH_SUCCESS',
                            guildId: e,
                            profile: n
                        }),
                        n
                    );
                })
                .catch((t) => {
                    let n = new i.Hx(t);
                    return (
                        l.Z.dispatch({
                            type: 'GUILD_PROFILE_FETCH_FAILURE',
                            guildId: e,
                            error: n
                        }),
                        null
                    );
                }))
          : Promise.resolve(d);
}
function u(e, t) {
    return o.Z.getIsUpdating(e)
        ? Promise.resolve(null)
        : (l.Z.dispatch({
              type: 'GUILD_PROFILE_UPDATE',
              guildId: e,
              updates: t
          }),
          r.tn
              .patch({
                  url: c.ANM.GUILD_PROFILE(e),
                  body: (0, a.sO)(t),
                  rejectWithError: !1
              })
              .then((t) => {
                  let n = (0, a.xo)(t.body);
                  return (
                      l.Z.dispatch({
                          type: 'GUILD_PROFILE_UPDATE_SUCCESS',
                          guildId: e,
                          profile: n
                      }),
                      n
                  );
              })
              .catch((t) => {
                  let n = new i.Hx(t);
                  return (
                      l.Z.dispatch({
                          type: 'GUILD_PROFILE_UPDATE_FAILURE',
                          guildId: e,
                          error: n
                      }),
                      null
                  );
              }));
}
async function d(e) {
    let t = await r.tn.get({
        url: c.ANM.GUILD_TOP_GAMES(e),
        rejectWithError: !1
    });
    return (0, a.o_)(t.body.top_games);
}
