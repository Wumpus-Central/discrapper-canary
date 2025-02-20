n.d(t, {
    CR: () => c,
    MA: () => m,
    pV: () => u
});
var r = n(544891),
    a = n(570140),
    i = n(881052),
    l = n(406218),
    s = n(314852),
    o = n(981631);
function c(e, t) {
    var n;
    if (null == e) return Promise.resolve(null);
    let c = s.Z.getIsFetching(e),
        u = s.Z.getLastSyncTimestamp(e),
        m = s.Z.getProfile(e),
        d = ((n = u), Date.now() - (null != n ? n : 0) > 60000);
    return c && !t
        ? Promise.resolve(null)
        : null == m || d || t
          ? (a.Z.dispatch({
                type: 'GUILD_PROFILE_FETCH',
                guildId: e
            }),
            r.tn
                .get({
                    url: o.ANM.GUILD_PROFILE(e),
                    rejectWithError: !1
                })
                .then((t) => {
                    let n = (0, l.xo)(t.body);
                    return (
                        a.Z.dispatch({
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
                        a.Z.dispatch({
                            type: 'GUILD_PROFILE_FETCH_FAILURE',
                            guildId: e,
                            error: n
                        }),
                        null
                    );
                }))
          : Promise.resolve(m);
}
function u(e, t) {
    return s.Z.getIsUpdating(e)
        ? Promise.resolve(null)
        : (a.Z.dispatch({
              type: 'GUILD_PROFILE_UPDATE',
              guildId: e,
              updates: t
          }),
          r.tn
              .patch({
                  url: o.ANM.GUILD_PROFILE(e),
                  body: (0, l.sO)(t),
                  rejectWithError: !1
              })
              .then((t) => {
                  let n = (0, l.xo)(t.body);
                  return (
                      a.Z.dispatch({
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
                      a.Z.dispatch({
                          type: 'GUILD_PROFILE_UPDATE_FAILURE',
                          guildId: e,
                          error: n
                      }),
                      null
                  );
              }));
}
async function m(e) {
    let t = await r.tn.get({
        url: o.ANM.GUILD_TOP_GAMES(e),
        rejectWithError: !1
    });
    return (0, l.o_)(t.body.top_games);
}
