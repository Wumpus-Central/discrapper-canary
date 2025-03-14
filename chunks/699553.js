n.d(t, {
    CR: () => p,
    MA: () => g,
    pV: () => h,
    vb: () => E,
    xV: () => m
});
var r = n(544891),
    i = n(570140),
    o = n(881052),
    a = n(937111),
    s = n(271383),
    l = n(626135),
    c = n(406218),
    u = n(314852),
    d = n(981631);
let f = 60000;
function _(e) {
    return Date.now() - (null != e ? e : 0) > f;
}
function p(e, t) {
    if (null == e) return Promise.resolve(null);
    let n = u.Z.getFetchStatus(e) === u.a.FETCHING,
        a = u.Z.getLastSyncTimestamp(e),
        s = u.Z.getProfile(e),
        l = _(a);
    return n && !t
        ? Promise.resolve(null)
        : null == s || l || t
          ? (i.Z.dispatch({
                type: 'GUILD_PROFILE_FETCH',
                guildId: e
            }),
            r.tn
                .get({
                    url: d.ANM.GUILD_PROFILE(e),
                    rejectWithError: !1
                })
                .then((t) => {
                    let n = (0, c.xo)(t.body);
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
                    let n = new o.Hx(t);
                    return (
                        i.Z.dispatch({
                            type: 'GUILD_PROFILE_FETCH_FAILURE',
                            guildId: e,
                            error: n
                        }),
                        null
                    );
                }))
          : Promise.resolve(s);
}
function h(e, t) {
    return u.Z.getIsUpdating(e)
        ? Promise.resolve(null)
        : (i.Z.dispatch({
              type: 'GUILD_PROFILE_UPDATE',
              guildId: e,
              updates: t
          }),
          r.tn
              .patch({
                  url: d.ANM.GUILD_PROFILE(e),
                  body: (0, c.sO)(t),
                  rejectWithError: !1
              })
              .then((t) => {
                  let n = (0, c.xo)(t.body);
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
                  let n = new o.Hx(t);
                  return (
                      i.Z.dispatch({
                          type: 'GUILD_PROFILE_UPDATE_FAILURE',
                          guildId: e,
                          error: n
                      }),
                      null
                  );
              }));
}
function m(e, t) {
    return u.Z.getIsUpdating(e)
        ? Promise.resolve(null)
        : (i.Z.dispatch({
              type: 'GUILD_PROFILE_UPDATE_VISIBILITY',
              guildId: e,
              visibility: t
          }),
          r.tn
              .put({
                  url: d.ANM.GUILD_PROFILE_VISIBILITY(e),
                  body: { visibility: t },
                  rejectWithError: !1
              })
              .then((t) => {
                  let n = t.body.visibility;
                  return (
                      i.Z.dispatch({
                          type: 'GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS',
                          guildId: e,
                          visibility: n
                      }),
                      n
                  );
              })
              .catch((t) => {
                  let n = new o.Hx(t);
                  throw (
                      (i.Z.dispatch({
                          type: 'GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE',
                          guildId: e,
                          error: n
                      }),
                      n)
                  );
              }));
}
async function g(e) {
    let t = await r.tn.get({
        url: d.ANM.GUILD_TOP_GAMES(e),
        rejectWithError: !1
    });
    return (0, c.o_)(t.body.top_games);
}
function E(e, t) {
    let n = null != s.ZP.getSelfMember(e),
        r = null != a.Z.getRequest(e);
    l.default.track(d.rMx.GUILD_PROFILE_VIEWED, {
        guild_id: e,
        location_stack: t,
        is_member: n,
        has_join_request: r
    });
}
