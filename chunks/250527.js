"use strict";
n.d(t, { L4: () => p, U7: () => m, _C: () => h, sf: () => g });
var r = n(562465),
    i = n(73153),
    a = n(198982),
    s = n(212455),
    o = n(696451),
    l = n(954571),
    u = n(9994),
    c = n(837011),
    d = n(652215);
let _ = 6e4;
function f(e) {
    return Date.now() - (e ?? 0) > _;
}
function p(e, t) {
    if (null == e) return Promise.resolve(null);
    let n = c.A.getFetchStatus(e) === c.X.FETCHING,
        s = c.A.getLastSyncTimestamp(e),
        o = c.A.getProfile(e),
        l = f(s);
    return n && !t
        ? Promise.resolve(null)
        : null == o || l || t
          ? (i.h.dispatch({ type: "GUILD_PROFILE_FETCH", guildId: e }),
            r.Bo.get({ url: d.Rsh.GUILD_PROFILE(e), rejectWithError: !1 })
                .then((t) => {
                    let n = (0, u.wr)(t.body);
                    return i.h.dispatch({ type: "GUILD_PROFILE_FETCH_SUCCESS", guildId: e, profile: n }), n;
                })
                .catch((t) => {
                    let n = new a.LG(t);
                    return i.h.dispatch({ type: "GUILD_PROFILE_FETCH_FAILURE", guildId: e, error: n }), null;
                }))
          : Promise.resolve(o);
}
function h(e, t) {
    return c.A.getIsUpdating(e)
        ? Promise.resolve(null)
        : (i.h.dispatch({ type: "GUILD_PROFILE_UPDATE", guildId: e, updates: t }),
          r.Bo.patch({ url: d.Rsh.GUILD_PROFILE(e), body: (0, u.ow)(t), rejectWithError: !1 })
              .then((t) => {
                  let n = (0, u.wr)(t.body);
                  return i.h.dispatch({ type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId: e, profile: n }), n;
              })
              .catch((t) => {
                  let n = new a.LG(t);
                  return i.h.dispatch({ type: "GUILD_PROFILE_UPDATE_FAILURE", guildId: e, error: n }), null;
              }));
}
async function m(e) {
    let t = await r.Bo.get({ url: d.Rsh.GUILD_TOP_GAMES(e), rejectWithError: !1 });
    return (0, u.MU)(t.body.top_games);
}
function g(e, t) {
    let n = null != o.Ay.getSelfMember(e),
        r = null != s.A.getRequest(e);
    l.default.track(d.HAw.GUILD_PROFILE_VIEWED, { guild_id: e, location_stack: t, is_member: n, has_join_request: r });
}
