r.d(t, { L4: () => u, U7: () => _, _C: () => d, sf: () => g });
var l = r(636537),
    n = r(228366),
    a = r(845584),
    s = r(212455),
    o = r(696451),
    i = r(954571),
    h = r(9994),
    c = r(837011),
    p = r(652215);
function u(e, t) {
    if (null == e) return Promise.resolve(null);
    let r = c.A.getFetchStatus(e) === c.X.FETCHING,
        s = c.A.getLastSyncTimestamp(e),
        o = c.A.getProfile(e),
        i = Date.now() - (s ?? 0) > 6e4;
    return r && !t
        ? Promise.resolve(null)
        : null == o || i || t
          ? (n.h.dispatch({ type: "GUILD_PROFILE_FETCH", guildId: e }),
            l.Bo.get({ url: p.Rsh.GUILD_PROFILE(e), rejectWithError: !1 })
                .then((t) => {
                    let r = (0, h.wr)(t.body);
                    return n.h.dispatch({ type: "GUILD_PROFILE_FETCH_SUCCESS", guildId: e, profile: r }), r;
                })
                .catch((t) => {
                    let r = new a.LG(t);
                    return n.h.dispatch({ type: "GUILD_PROFILE_FETCH_FAILURE", guildId: e, error: r }), null;
                }))
          : Promise.resolve(o);
}
function d(e, t) {
    return c.A.getIsUpdating(e)
        ? Promise.resolve(null)
        : (n.h.dispatch({ type: "GUILD_PROFILE_UPDATE", guildId: e, updates: t }),
          l.Bo.patch({ url: p.Rsh.GUILD_PROFILE(e), body: (0, h.ow)(t), rejectWithError: !1 })
              .then((t) => {
                  let r = (0, h.wr)(t.body);
                  return n.h.dispatch({ type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId: e, profile: r }), r;
              })
              .catch((t) => {
                  let r = new a.LG(t);
                  return n.h.dispatch({ type: "GUILD_PROFILE_UPDATE_FAILURE", guildId: e, error: r }), null;
              }));
}
async function _(e) {
    let t = await l.Bo.get({ url: p.Rsh.GUILD_TOP_GAMES(e), rejectWithError: !1 });
    return (0, h.MU)(t.body.top_games);
}
function g(e, t) {
    let r = null != o.Ay.getSelfMember(e),
        l = null != s.A.getRequest(e);
    i.default.track(p.HAw.GUILD_PROFILE_VIEWED, { guild_id: e, location_stack: t, is_member: r, has_join_request: l });
}
