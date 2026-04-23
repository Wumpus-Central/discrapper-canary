l.d(t, { L4: () => m, U7: () => A, _C: () => h, sf: () => x });
var i = l(562465),
    n = l(73153),
    s = l(198982),
    a = l(212455),
    r = l(696451),
    c = l(954571),
    o = l(9994),
    u = l(837011),
    d = l(652215);
function m(e, t) {
    if (null == e) return Promise.resolve(null);
    let l = u.A.getFetchStatus(e) === u.X.FETCHING,
        a = u.A.getLastSyncTimestamp(e),
        r = u.A.getProfile(e),
        c = Date.now() - (a ?? 0) > 6e4;
    return l && !t
        ? Promise.resolve(null)
        : null == r || c || t
          ? (n.h.dispatch({ type: "GUILD_PROFILE_FETCH", guildId: e }),
            i.Bo.get({ url: d.Rsh.GUILD_PROFILE(e), rejectWithError: !1 })
                .then((t) => {
                    let l = (0, o.wr)(t.body);
                    return n.h.dispatch({ type: "GUILD_PROFILE_FETCH_SUCCESS", guildId: e, profile: l }), l;
                })
                .catch((t) => {
                    let l = new s.LG(t);
                    return n.h.dispatch({ type: "GUILD_PROFILE_FETCH_FAILURE", guildId: e, error: l }), null;
                }))
          : Promise.resolve(r);
}
function h(e, t) {
    return u.A.getIsUpdating(e)
        ? Promise.resolve(null)
        : (n.h.dispatch({ type: "GUILD_PROFILE_UPDATE", guildId: e, updates: t }),
          i.Bo.patch({ url: d.Rsh.GUILD_PROFILE(e), body: (0, o.ow)(t), rejectWithError: !1 })
              .then((t) => {
                  let l = (0, o.wr)(t.body);
                  return n.h.dispatch({ type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId: e, profile: l }), l;
              })
              .catch((t) => {
                  let l = new s.LG(t);
                  return n.h.dispatch({ type: "GUILD_PROFILE_UPDATE_FAILURE", guildId: e, error: l }), null;
              }));
}
async function A(e) {
    let t = await i.Bo.get({ url: d.Rsh.GUILD_TOP_GAMES(e), rejectWithError: !1 });
    return (0, o.MU)(t.body.top_games);
}
function x(e, t) {
    let l = null != r.Ay.getSelfMember(e),
        i = null != a.A.getRequest(e);
    c.default.track(d.HAw.GUILD_PROFILE_VIEWED, { guild_id: e, location_stack: t, is_member: l, has_join_request: i });
}
