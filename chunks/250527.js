r.d(t, { L4: () => _, U7: () => L, _C: () => E, sf: () => I });
var l = r(636537),
    n = r(228366),
    u = r(845584),
    i = r(212455),
    s = r(696451),
    o = r(174459),
    a = r(9994),
    c = r(837011),
    h = r(652215);
function _(e, t) {
    if (null == e) return Promise.resolve(null);
    let r = c.A.getFetchStatus(e) === c.X.FETCHING,
        i = c.A.getLastSyncTimestamp(e),
        s = c.A.getProfile(e),
        o = Date.now() - (i ?? 0) > 6e4;
    return r && !t
        ? Promise.resolve(null)
        : null == s || o || t
          ? (n.h.dispatch({ type: "GUILD_PROFILE_FETCH", guildId: e }),
            l.Bo.get({ url: h.Rsh.GUILD_PROFILE(e), rejectWithError: !1 })
                .then((t) => {
                    let r = (0, a.wr)(t.body);
                    return n.h.dispatch({ type: "GUILD_PROFILE_FETCH_SUCCESS", guildId: e, profile: r }), r;
                })
                .catch((t) => {
                    let r = new u.LG(t);
                    return n.h.dispatch({ type: "GUILD_PROFILE_FETCH_FAILURE", guildId: e, error: r }), null;
                }))
          : Promise.resolve(s);
}
function E(e, t) {
    return c.A.getIsUpdating(e)
        ? Promise.resolve(null)
        : (n.h.dispatch({ type: "GUILD_PROFILE_UPDATE", guildId: e, updates: t }),
          l.Bo.patch({ url: h.Rsh.GUILD_PROFILE(e), body: (0, a.ow)(t), rejectWithError: !1 })
              .then((t) => {
                  let r = (0, a.wr)(t.body);
                  return n.h.dispatch({ type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId: e, profile: r }), r;
              })
              .catch((t) => {
                  let r = new u.LG(t);
                  return n.h.dispatch({ type: "GUILD_PROFILE_UPDATE_FAILURE", guildId: e, error: r }), null;
              }));
}
async function L(e) {
    let t = await l.Bo.get({ url: h.Rsh.GUILD_TOP_GAMES(e), rejectWithError: !1 });
    return (0, a.MU)(t.body.top_games);
}
function I(e, t) {
    let r = null != s.Ay.getSelfMember(e),
        l = null != i.A.getRequest(e);
    o.default.track(h.HAw.GUILD_PROFILE_VIEWED, { guild_id: e, location_stack: t, is_member: r, has_join_request: l });
}
