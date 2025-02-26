a.d(t, {
    CR: () => u,
    MA: () => b,
    pV: () => E,
    vb: () => g
});
var r = a(544891),
    n = a(570140),
    o = a(881052),
    i = a(937111),
    l = a(271383),
    c = a(626135),
    _ = a(406218),
    d = a(314852),
    s = a(981631);
function u(e, t) {
    var a;
    if (null == e) return Promise.resolve(null);
    let i = d.Z.getFetchStatus(e) === d.a.FETCHING,
        l = d.Z.getLastSyncTimestamp(e),
        c = d.Z.getProfile(e),
        u = ((a = l), Date.now() - (null != a ? a : 0) > 60000);
    return i && !t
        ? Promise.resolve(null)
        : null == c || u || t
          ? (n.Z.dispatch({
                type: 'GUILD_PROFILE_FETCH',
                guildId: e
            }),
            r.tn
                .get({
                    url: s.ANM.GUILD_PROFILE(e),
                    rejectWithError: !1
                })
                .then((t) => {
                    let a = (0, _.xo)(t.body);
                    return (
                        n.Z.dispatch({
                            type: 'GUILD_PROFILE_FETCH_SUCCESS',
                            guildId: e,
                            profile: a
                        }),
                        a
                    );
                })
                .catch((t) => {
                    let a = new o.Hx(t);
                    return (
                        n.Z.dispatch({
                            type: 'GUILD_PROFILE_FETCH_FAILURE',
                            guildId: e,
                            error: a
                        }),
                        null
                    );
                }))
          : Promise.resolve(c);
}
function E(e, t) {
    return d.Z.getIsUpdating(e)
        ? Promise.resolve(null)
        : (n.Z.dispatch({
              type: 'GUILD_PROFILE_UPDATE',
              guildId: e,
              updates: t
          }),
          r.tn
              .patch({
                  url: s.ANM.GUILD_PROFILE(e),
                  body: (0, _.sO)(t),
                  rejectWithError: !1
              })
              .then((t) => {
                  let a = (0, _.xo)(t.body);
                  return (
                      n.Z.dispatch({
                          type: 'GUILD_PROFILE_UPDATE_SUCCESS',
                          guildId: e,
                          profile: a
                      }),
                      a
                  );
              })
              .catch((t) => {
                  let a = new o.Hx(t);
                  return (
                      n.Z.dispatch({
                          type: 'GUILD_PROFILE_UPDATE_FAILURE',
                          guildId: e,
                          error: a
                      }),
                      null
                  );
              }));
}
async function b(e) {
    let t = await r.tn.get({
        url: s.ANM.GUILD_TOP_GAMES(e),
        rejectWithError: !1
    });
    return (0, _.o_)(t.body.top_games);
}
function g(e, t) {
    let a = null != l.ZP.getSelfMember(e),
        r = null != i.Z.getRequest(e);
    c.default.track(s.rMx.GUILD_PROFILE_VIEWED, {
        guild_id: e,
        location_stack: t,
        is_member: a,
        has_join_request: r
    });
}
