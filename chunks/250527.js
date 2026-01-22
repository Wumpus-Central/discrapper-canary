n.d(t, {
    L4: () => _,
    U7: () => m,
    _C: () => h,
    sf: () => g,
});
var r = n(562465),
    i = n(73153),
    a = n(198982),
    s = n(212455),
    o = n(696451),
    l = n(954571),
    c = n(9994),
    u = n(837011),
    d = n(652215);
let f = 60000;
function p(e) {
    return Date.now() - (null != e ? e : 0) > f;
}
function _(e, t) {
    if (null == e) return Promise.resolve(null);
    let n = u.A.getFetchStatus(e) === u.X.FETCHING,
        s = u.A.getLastSyncTimestamp(e),
        o = u.A.getProfile(e),
        l = p(s);
    return n && !t
        ? Promise.resolve(null)
        : null == o || l || t
          ? (i.h.dispatch({
                type: "GUILD_PROFILE_FETCH",
                guildId: e,
            }),
            r.Bo.get({
                url: d.Rsh.GUILD_PROFILE(e),
                rejectWithError: !1,
            })
                .then((t) => {
                    let n = (0, c.wr)(t.body);
                    return (
                        i.h.dispatch({
                            type: "GUILD_PROFILE_FETCH_SUCCESS",
                            guildId: e,
                            profile: n,
                        }),
                        n
                    );
                })
                .catch((t) => {
                    let n = new a.LG(t);
                    return (
                        i.h.dispatch({
                            type: "GUILD_PROFILE_FETCH_FAILURE",
                            guildId: e,
                            error: n,
                        }),
                        null
                    );
                }))
          : Promise.resolve(o);
}
function h(e, t) {
    return u.A.getIsUpdating(e)
        ? Promise.resolve(null)
        : (i.h.dispatch({
              type: "GUILD_PROFILE_UPDATE",
              guildId: e,
              updates: t,
          }),
          r.Bo.patch({
              url: d.Rsh.GUILD_PROFILE(e),
              body: (0, c.ow)(t),
              rejectWithError: !1,
          })
              .then((t) => {
                  let n = (0, c.wr)(t.body);
                  return (
                      i.h.dispatch({
                          type: "GUILD_PROFILE_UPDATE_SUCCESS",
                          guildId: e,
                          profile: n,
                      }),
                      n
                  );
              })
              .catch((t) => {
                  let n = new a.LG(t);
                  return (
                      i.h.dispatch({
                          type: "GUILD_PROFILE_UPDATE_FAILURE",
                          guildId: e,
                          error: n,
                      }),
                      null
                  );
              }));
}
async function m(e) {
    let t = await r.Bo.get({
        url: d.Rsh.GUILD_TOP_GAMES(e),
        rejectWithError: !1,
    });
    return (0, c.MU)(t.body.top_games);
}
function g(e, t) {
    let n = null != o.Ay.getSelfMember(e),
        r = null != s.A.getRequest(e);
    l.default.track(d.HAw.GUILD_PROFILE_VIEWED, {
        guild_id: e,
        location_stack: t,
        is_member: n,
        has_join_request: r,
    });
}
