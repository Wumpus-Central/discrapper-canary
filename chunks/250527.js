r.d(t, { L4: () => a, U7: () => L, _C: () => E, sf: () => I });
var l = r(636537),
    n = r(228366),
    o = r(913122),
    s = r(212455),
    i = r(696451),
    u = r(174459),
    h = r(9994),
    _ = r(837011),
    c = r(652215);
function a(e, t) {
    let { respectBackoff: r = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (null == e) return Promise.resolve(null);
    let s = _.A.getFetchStatus(e) === _.X.FETCHING,
        i = _.A.getLastSyncTimestamp(e),
        u = _.A.getProfile(e),
        a = Date.now() - (i ?? 0) > 6e4,
        E = _.A.getNextFetchAllowedAt(e);
    return r && null != E && Date.now() < E
        ? Promise.resolve(u)
        : s && !t
          ? Promise.resolve(null)
          : null == u || a || t
            ? (n.h.dispatch({ type: "GUILD_PROFILE_FETCH", guildId: e }),
              l.Bo.get({ url: c.Rsh.GUILD_PROFILE(e), rejectWithError: (0, l.fT)() })
                  .then((t) => {
                      let r = (0, h.wr)(t.body);
                      return n.h.dispatch({ type: "GUILD_PROFILE_FETCH_SUCCESS", guildId: e, profile: r }), r;
                  })
                  .catch((t) => {
                      let r = new o.LG(t);
                      return n.h.dispatch({ type: "GUILD_PROFILE_FETCH_FAILURE", guildId: e, error: r }), null;
                  }))
            : Promise.resolve(u);
}
function E(e, t) {
    return _.A.getIsUpdating(e)
        ? Promise.resolve(null)
        : (n.h.dispatch({ type: "GUILD_PROFILE_UPDATE", guildId: e, updates: t }),
          l.Bo.patch({ url: c.Rsh.GUILD_PROFILE(e), body: (0, h.ow)(t), rejectWithError: (0, l.fT)() })
              .then((t) => {
                  let r = (0, h.wr)(t.body);
                  return n.h.dispatch({ type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId: e, profile: r }), r;
              })
              .catch((t) => {
                  let r = new o.LG(t);
                  return n.h.dispatch({ type: "GUILD_PROFILE_UPDATE_FAILURE", guildId: e, error: r }), null;
              }));
}
async function L(e) {
    let t = await l.Bo.get({ url: c.Rsh.GUILD_TOP_GAMES(e), rejectWithError: (0, l.fT)() });
    return (0, h.MU)(t.body.top_games);
}
function I(e, t) {
    let r = null != i.Ay.getSelfMember(e),
        l = null != s.A.getRequest(e);
    u.default.track(c.HAw.GUILD_PROFILE_VIEWED, { guild_id: e, location_stack: t, is_member: r, has_join_request: l });
}
